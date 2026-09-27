import type { Metadata } from "next";

const SITE_NAME = "Movo Technologies";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ??
  "https://www.movotechnologies.com";
const DEFAULT_DESCRIPTION =
  "Movo Technologies builds software, creative services, digital products and ventures through Movo Labs, Studios, Systems and Ventures.";

export function absoluteUrl(path = "/") {
  const url = new URL(path, `${SITE_URL}/`);
  return url.pathname === "/" && !url.search && !url.hash
    ? url.origin
    : url.toString();
}

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle =
    path === "/"
      ? "Movo Technologies | Software, Creative Services & Ventures"
      : `${title} | Movo Technologies`;
  const url = absoluteUrl(path);

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION };
