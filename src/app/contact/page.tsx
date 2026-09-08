import { BrandVisual } from "@/components/sections/BrandVisual";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { INTENTS, type Intent } from "@/lib/enquiries";
import { sectionClass } from "@/components/sections/VentureStory";
export const metadata = buildMetadata({
  title: "Start Something",
  description:
    "Build software, book creative work, plan a release, explore Atlas or join Giveaway App early access. Start a conversation with the right Movo team.",
  path: "/contact",
});
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const query = await searchParams;
  const intent =
    query.intent && Object.hasOwn(INTENTS, query.intent)
      ? (query.intent as Intent)
      : undefined;
  return (
    <>
      <PageHero
        visual={<BrandVisual name="contact" priority />}
        eyebrow="Start Something"
        title="What are you trying to move forward?"
        description="Tell us what you’re working on and we’ll route the conversation to the right part of Movo."
      />
      <section className="border-border border-t">
        <div className={`${sectionClass} grid gap-14 lg:grid-cols-[1fr_1.5fr]`}>
          <nav aria-label="Enquiry type">
            <h2 className="mb-6 text-xl font-semibold">
              Find your starting point.
            </h2>
            {Object.entries(INTENTS).map(([key, value]) => (
              <Link
                key={key}
                aria-current={intent === key ? "page" : undefined}
                className={`border-border hover:text-accent block border-b py-4 text-base ${intent === key ? "text-accent" : ""}`}
                href={
                  key === "whitelist"
                    ? "/ecosystem/giveaway-app#whitelist"
                    : `/contact?intent=${key}#enquiry`
                }
              >
                {value.label}
              </Link>
            ))}
          </nav>
          <div id="enquiry" className="scroll-mt-28">
            {intent && intent !== "whitelist" ? (
              <>
                <ContactForm key={intent} intent={intent} />
                <a
                  className="text-fg-muted mt-8 block text-sm break-all underline"
                  href={`mailto:${INTENTS[intent].email}`}
                >
                  {INTENTS[intent].email}
                </a>
              </>
            ) : (
              <div>
                <h2 className="text-2xl font-semibold">
                  A clear brief starts a useful conversation.
                </h2>
                <p className="text-fg-muted mt-5 leading-relaxed">
                  Choose what you need to see the relevant enquiry form. For
                  early access, join the Giveaway App whitelist.
                </p>
                <p className="text-fg-muted mt-8">
                  General enquiries:{" "}
                  <a
                    className="break-all underline"
                    href="mailto:info@movotechnologies.com"
                  >
                    info@movotechnologies.com
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
