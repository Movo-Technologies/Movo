import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { VentureStory, sectionClass } from "@/components/sections/VentureStory";
import { ContactForm } from "@/components/sections/ContactForm";
import { VENTURES, getVentureBySlug } from "@/data/ventures";
import { BrandVisual } from "@/components/sections/BrandVisual";
export function generateStaticParams() {
  return VENTURES.map((v) => ({ slug: v.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const v = getVentureBySlug((await params).slug);
  return buildMetadata({
    title: v?.name ?? "Ecosystem",
    description: v?.description,
    path: `/ecosystem/${v?.slug ?? ""}`,
  });
}
export default async function VenturePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ host?: string }>;
}) {
  const v = getVentureBySlug((await params).slug);
  if (!v) notFound();
  const query = await searchParams;
  const raw = process.env.NEXT_PUBLIC_GIVEAWAY_DISCORD_URL;
  let discordUrl: string | undefined;
  try {
    if (raw && new URL(raw).protocol === "https:") discordUrl = raw;
  } catch {}
  return (
    <>
      <PageHero
        eyebrow={`${v.focus} · ${v.status}`}
        title={v.name}
        description={v.tagline}
        visual={<BrandVisual name={v.slug} priority />}
      />
      <VentureStory venture={v} />
      {v.capabilities && (
        <section
          id="capabilities"
          className="border-border scroll-mt-24 border-t"
        >
          <div className={sectionClass}>
            <h2 className="text-[length:var(--text-h2)] font-semibold">
              {v.slug === "movo-labs"
                ? "What we can build."
                : v.slug === "atlas"
                  ? "Two ways to put Atlas to work."
                  : "From the first idea to the release."}
            </h2>
            <dl className="mt-12 grid gap-x-16 gap-y-8 sm:grid-cols-2">
              {v.capabilities.map(([title, copy]) => (
                <div className="border-border border-t pt-6" key={title}>
                  <dt className="text-xl font-semibold">{title}</dt>
                  <dd className="text-fg-muted mt-4 max-w-xl leading-relaxed">
                    {copy}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}
      {v.slug === "giveaway-app" && (
        <>
          <section id="beta" className="border-border border-t">
            <div className={sectionClass}>
              <h2 className="max-w-2xl text-[length:var(--text-h2)] font-semibold">
                Help us build it before everyone else gets it.
              </h2>
              <p className="text-fg-muted mt-6 max-w-2xl text-lg leading-relaxed">
                Early testers get access before public launch and become part of
                the feedback loop that determines what gets improved, removed or
                built next. Testing should produce real product data.
              </p>
              <ul className="text-fg-muted mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Does onboarding make sense?",
                  "Do participants understand how giveaways work?",
                  "Where do users experience friction?",
                  "How do participants behave during giveaways?",
                  "How do hosts create and manage giveaways?",
                  "What do people enjoy?",
                  "What prevents people from returning?",
                ].map((text) => (
                  <li className="border-border border-t pt-4" key={text}>
                    {text}
                  </li>
                ))}
              </ul>
              <p className="text-fg-muted mt-8 max-w-2xl">
                No public launch date has been announced. The beta is our chance
                to resolve these questions before opening access more widely.
              </p>
            </div>
          </section>
          <section
            id="whitelist"
            className="border-border scroll-mt-24 border-t"
          >
            <div className={`${sectionClass} grid gap-12 lg:grid-cols-2`}>
              <div>
                <p className="text-accent font-mono text-xs uppercase">
                  Early Access / Beta
                </p>
                <h2 className="mt-4 text-[length:var(--text-h2)] font-semibold">
                  Take your place in the beta.
                </h2>
                <p className="text-fg-muted mt-6 max-w-md leading-relaxed">
                  Tell us how you would like to take part. Creators, communities
                  and brands can also register their interest in hosting.
                </p>
              </div>
              <ContactForm
                key={query.host === "yes" ? "host" : "participant"}
                intent="whitelist"
                host={query.host === "yes"}
                discordUrl={discordUrl}
              />
            </div>
          </section>
        </>
      )}
      {v.email && (
        <div className={`${sectionClass} border-border border-t`}>
          <p className="text-fg-muted">
            {v.email.startsWith("support") ? "Need help?" : "General enquiries"}
          </p>
          <a
            className="mt-3 inline-block break-all underline"
            href={`mailto:${v.email}`}
          >
            {v.email}
          </a>
        </div>
      )}
      <div className={`${sectionClass} border-border border-t`}>
        <Link className="underline" href="/ecosystem">
          Back to the Ecosystem
        </Link>
      </div>
    </>
  );
}
