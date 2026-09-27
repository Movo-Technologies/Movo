import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const port = Number(process.env.SEO_AUDIT_PORT ?? 3127);
const localOrigin = `http://127.0.0.1:${port}`;
const nextBin = fileURLToPath(
  new URL("../node_modules/next/dist/bin/next", import.meta.url),
);
const server = spawn(
  process.execPath,
  [nextBin, "start", "--port", String(port)],
  {
    stdio: ["ignore", "pipe", "pipe"],
    env: { ...process.env, PORT: String(port) },
  },
);

let serverLog = "";
server.stdout.on("data", (chunk) => (serverLog += chunk));
server.stderr.on("data", (chunk) => (serverLog += chunk));

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function attributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)=["']([^"']*)["']/g)].map((match) => [
      match[1].toLowerCase(),
      match[2],
    ]),
  );
}

function tags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map(
    (match) => match[0],
  );
}

function pagePath(publicUrl) {
  const url = new URL(publicUrl);
  return `${url.pathname}${url.search}`;
}

async function waitForServer() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(localOrigin);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Preview server did not start.\n${serverLog}`);
}

async function fetchPage(path) {
  const response = await fetch(`${localOrigin}${path}`, { redirect: "follow" });
  return { response, html: await response.text() };
}

async function run() {
  await waitForServer();

  const robotsResponse = await fetch(`${localOrigin}/robots.txt`);
  const robots = await robotsResponse.text();
  assert(robotsResponse.status === 200, "robots.txt must return HTTP 200");
  assert(/Allow:\s*\//i.test(robots), "robots.txt must allow public pages");
  assert(
    /Disallow:\s*\/api\//i.test(robots),
    "robots.txt must exclude API routes",
  );
  assert(
    /Sitemap:\s*https:\/\//i.test(robots),
    "robots.txt must reference an HTTPS sitemap",
  );

  const sitemapResponse = await fetch(`${localOrigin}/sitemap.xml`);
  const sitemap = await sitemapResponse.text();
  assert(sitemapResponse.status === 200, "sitemap.xml must return HTTP 200");
  const publicUrls = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)]
    .map((entry) => entry[1].match(/<loc>(.*?)<\/loc>/)?.[1])
    .filter(Boolean);
  assert(publicUrls.length > 0, "sitemap.xml must contain URLs");
  assert(
    new Set(publicUrls).size === publicUrls.length,
    "sitemap.xml contains duplicate URLs",
  );
  publicUrls.forEach((url) =>
    assert(url.startsWith("https://"), `Sitemap URL must use HTTPS: ${url}`),
  );

  const pageResults = new Map();
  const titles = new Map();
  const internalTargets = new Set();

  for (const publicUrl of publicUrls) {
    const path = pagePath(publicUrl);
    const { response, html } = await fetchPage(path);
    assert(response.status === 200, `${path} returned HTTP ${response.status}`);

    const title = html.match(/<title>(.*?)<\/title>/is)?.[1]?.trim();
    assert(title, `${path} is missing a title`);
    assert(
      !titles.has(title),
      `${path} duplicates the title used by ${titles.get(title)}`,
    );
    titles.set(title, path);

    const meta = tags(html, "meta").map(attributes);
    const description = meta.find(
      (item) => item.name === "description",
    )?.content;
    assert(description?.trim(), `${path} is missing a meta description`);
    const robotsMeta =
      meta.find((item) => item.name === "robots")?.content ?? "";
    assert(
      !robotsMeta.toLowerCase().includes("noindex"),
      `${path} is unexpectedly noindex`,
    );

    const canonical = tags(html, "link")
      .map(attributes)
      .find((item) => item.rel === "canonical")?.href;
    assert(
      canonical === publicUrl,
      `${path} has incorrect canonical ${canonical ?? "(missing)"}`,
    );

    const h1Count = (html.match(/<h1\b/gi) ?? []).length;
    assert(
      h1Count === 1,
      `${path} must contain exactly one H1; found ${h1Count}`,
    );

    const jsonLdBlocks = [
      ...html.matchAll(
        /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
      ),
    ];
    assert(jsonLdBlocks.length > 0, `${path} is missing JSON-LD`);
    jsonLdBlocks.forEach((block) => JSON.parse(block[1]));

    for (const image of tags(html, "img").map(attributes)) {
      assert(
        Object.hasOwn(image, "alt"),
        `${path} contains an image without alt text`,
      );
    }

    const links = tags(html, "a").map(attributes);
    links.forEach(({ href }) => {
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      )
        return;
      const resolved = new URL(href, localOrigin);
      if (
        resolved.origin === localOrigin &&
        !resolved.pathname.startsWith("/_next/")
      ) {
        internalTargets.add(`${resolved.pathname}${resolved.search}`);
      }
    });
    pageResults.set(path, html);
  }

  for (const target of internalTargets) {
    const { response } = await fetchPage(target);
    assert(
      response.status < 400,
      `Internal link ${target} returned HTTP ${response.status}`,
    );
  }

  for (const publicUrl of publicUrls.filter(
    (url) => new URL(url).pathname !== "/",
  )) {
    const targetPath = new URL(publicUrl).pathname;
    const linked = [...pageResults.values()].some((html) =>
      tags(html, "a")
        .map(attributes)
        .some(({ href }) => {
          if (!href) return false;
          return new URL(href, localOrigin).pathname === targetPath;
        }),
    );
    assert(linked, `${targetPath} is an orphan page`);
  }

  const future = await fetchPage("/ecosystem/future-ventures");
  assert(
    /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(
      future.html,
    ) ||
      /<meta[^>]+content=["'][^"']*noindex[^"']*["'][^>]+name=["']robots["']/i.test(
        future.html,
      ),
    "The thin future-ventures page must remain noindex",
  );

  console.log(
    `SEO release gate passed for ${publicUrls.length} indexable pages and ${internalTargets.size} internal links.`,
  );
}

try {
  await run();
} finally {
  server.kill();
}
