import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUp } from "@/components/motion/FadeUp";
import { Timeline } from "@/components/ui/Timeline";
import { StatCounter } from "@/components/ui/StatCounter";
import { CTASection } from "@/components/sections/CTASection";
import { PHILOSOPHY_PRINCIPLES } from "@/data/philosophy";
import { TIMELINE, STATS } from "@/data/timeline";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Movo is a movement-driven innovation company built on the belief that progress is born from motion.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Movo"
        title="Motion is the foundation of growth."
        description="Founded on the belief that progress is born from movement, Movo exists to transform ideas into motion, and motion into impact."
      />

      <section className="border-border border-t">
        <div className="mx-auto grid max-w-(--container-max) gap-10 px-6 py-24 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-32">
          <FadeUp>
            <span className="text-accent font-mono text-xs">01</span>
            <h2 className="text-fg mt-4 text-[length:var(--text-h2)] font-semibold tracking-tight">
              Mission
            </h2>
            <p className="text-fg-muted mt-5 max-w-md text-lg leading-relaxed">
              To build and support ventures, products, and experiences that
              create momentum, inspire progress, and drive meaningful change
              across industries and cultures.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <span className="text-accent font-mono text-xs">02</span>
            <h2 className="text-fg mt-4 text-[length:var(--text-h2)] font-semibold tracking-tight">
              Vision
            </h2>
            <p className="text-fg-muted mt-5 max-w-md text-lg leading-relaxed">
              To become a globally recognized innovation ecosystem that empowers
              people, businesses, and communities to move forward through
              technology, creativity, and human connection.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="border-border border-t">
        <div className="mx-auto max-w-(--container-max) px-6 py-24 lg:px-10 lg:py-32">
          <SectionHeader
            eyebrow="03 / The Story"
            title="Founded on a single belief."
            description="The name ’Movo’ is derived from the concept of movement, representing continuous growth, evolution, and forward progress."
          />
          <FadeUp delay={0.1}>
            <p className="text-fg mt-10 max-w-3xl text-xl leading-relaxed">
              Movo serves as the parent organization behind a growing portfolio
              of ventures spanning technology, media, artificial intelligence,
              creative industries, live experiences, and emerging innovations.
              This philosophy guides every initiative undertaken by the
              company, influencing how products are developed, communities
              are built, and opportunities are created.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="border-border bg-bg border-t">
        <div className="mx-auto max-w-(--container-max) px-6 py-24 lg:px-10 lg:py-32">
          <SectionHeader eyebrow="04 / Values" title="What we believe." />
          <ul className="mt-14 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {PHILOSOPHY_PRINCIPLES.map((p, i) => (
              <FadeUp key={p.number} delay={i * 0.06}>
                <li className="border-border flex gap-4 border-t pt-5">
                  <span className="text-accent font-mono text-xs">
                    {p.number}
                  </span>
                  <span className="text-fg text-base font-medium">
                    {p.title}
                  </span>
                </li>
              </FadeUp>
            ))}
          </ul>
          <div className="mt-10">
            <Button href="/philosophy" variant="link">
              Read our full philosophy
            </Button>
          </div>
        </div>
      </section>

      <section className="border-border border-t">
        <div className="mx-auto max-w-(--container-max) px-6 py-24 lg:px-10 lg:py-32">
          <SectionHeader
            eyebrow="05 / Timeline"
            title="Built in motion, one stage at a time."
          />
          <div className="mt-16">
            <Timeline items={TIMELINE} />
          </div>
        </div>
      </section>

      <section className="border-border bg-bg border-t">
        <div className="mx-auto max-w-(--container-max) px-6 py-20 lg:px-10">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {STATS.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-border border-t">
        <div className="mx-auto max-w-(--container-max) px-6 py-24 lg:px-10 lg:py-32">
          <SectionHeader
            eyebrow="06 / Leadership"
            title="The people building Movo forward."
            description="Our leadership profiles are being finalized as the ecosystem grows. This section will introduce the team steering Movo’s next stage."
          />
          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <div className="border-border aspect-[3/4] rounded-2xl border border-dashed" />
                <p className="text-fg-muted mt-3 text-sm font-medium">
                  Coming soon
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="border-border bg-bg border-t">
        <div className="mx-auto max-w-(--container-max) px-6 py-24 lg:px-10 lg:py-32">
          <SectionHeader
            eyebrow="07 / What’s Next"
            title="The roadmap is never finished."
            description="Movo’s next decade is focused on expanding the ecosystem: new ventures, new industries, and new technologies that carry the same belief forward. The future belongs to those willing to move."
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
