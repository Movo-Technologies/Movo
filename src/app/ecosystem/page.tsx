import { BrandVisual } from "@/components/sections/BrandVisual";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { NodeGraph } from "@/components/motion/NodeGraph";
import { VentureCard } from "@/components/ui/VentureCard";
import { CTASection } from "@/components/sections/CTASection";
import { ECOSYSTEM } from "@/data/ventures";

export const metadata: Metadata = buildMetadata({
  title: "Ecosystem",
  description:
    "Movo Labs, Movo Studios, Movo Systems, Movo Ventures, and what’s next: explore the connected ecosystem of ventures built by Movo.",
  path: "/ecosystem",
});

export default function EcosystemPage() {
  return (
    <>
      <PageHero
        visual={<BrandVisual name="ecosystem" priority />}
        eyebrow="Ecosystem"
        title="Different disciplines. One direction."
        description="Technology does not exist separately from culture, business, creativity or the physical world. Neither does Movo. Our ecosystem works across disciplines with a shared approach: understand the problem, create deliberately, ship, learn and keep moving."
      />

      <section className="border-border border-t py-8 lg:py-16">
        <div className="mx-auto max-w-(--container-max) px-6 lg:px-10">
          <NodeGraph ventures={ECOSYSTEM} />
        </div>
      </section>

      <section className="border-border bg-bg border-t">
        <div className="mx-auto max-w-(--container-max) px-6 py-24 lg:px-10 lg:py-32">
          <SectionHeader
            eyebrow="The Ventures"
            title="Explore what we’re building."
            description="Find the team, product or venture closest to what you need. Each has a distinct role within the wider company."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {ECOSYSTEM.map((venture, i) => (
              <VentureCard key={venture.slug} venture={venture} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Find your place in the ecosystem." />
    </>
  );
}
