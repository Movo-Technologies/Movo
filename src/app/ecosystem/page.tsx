import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { NodeGraph } from "@/components/motion/NodeGraph";
import { VentureCard } from "@/components/ui/VentureCard";
import { CTASection } from "@/components/sections/CTASection";
import { VENTURES } from "@/data/ventures";

export const metadata: Metadata = buildMetadata({
  title: "Ecosystem",
  description:
    "Movo Labs, Movo Studios, Movo Systems, Movo Ventures, and what’s next — explore the connected ecosystem of ventures built by Movo.",
  path: "/ecosystem",
});

export default function EcosystemPage() {
  return (
    <>
      <PageHero
        eyebrow="Ecosystem"
        title="One ecosystem. Infinite momentum."
        description="Every venture inside Movo shares the same origin, philosophy, and infrastructure — a single system built to keep generating momentum across industries."
      />

      <section className="border-border border-t py-8 lg:py-16">
        <div className="mx-auto max-w-(--container-max) px-6 lg:px-10">
          <NodeGraph ventures={VENTURES} />
        </div>
      </section>

      <section className="border-border bg-bg border-t">
        <div className="mx-auto max-w-(--container-max) px-6 py-24 lg:px-10 lg:py-32">
          <SectionHeader
            eyebrow="The Ventures"
            title="Explore what we’re building."
            description="Each venture operates independently, but every one is connected by the same belief: motion creates progress."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {VENTURES.map((venture, i) => (
              <VentureCard key={venture.slug} venture={venture} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
