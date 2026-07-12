import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { FadeUp } from "@/components/motion/FadeUp";
import { PrincipleGraphic } from "@/components/motion/PrincipleGraphic";
import { CTASection } from "@/components/sections/CTASection";
import { PHILOSOPHY_PRINCIPLES, BELIEF_STATEMENT } from "@/data/philosophy";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Philosophy",
  description:
    "Motion over stagnation. Progress over perfection. Creation over consumption. Momentum over motivation. This is what Movo believes.",
  path: "/philosophy",
});

export default function PhilosophyPage() {
  return (
    <>
      <PageHero
        eyebrow="Philosophy"
        title="What we believe."
        description="Four principles guide every venture, product, and decision inside the Movo ecosystem — a simple operating philosophy for building things that last."
      />

      <section className="border-border border-t">
        {PHILOSOPHY_PRINCIPLES.map((p, i) => (
          <div
            key={p.number}
            className="border-border mx-auto grid max-w-(--container-max) items-center gap-12 border-b px-6 py-20 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-28"
          >
            <FadeUp className={cn(i % 2 === 1 && "lg:order-2")}>
              <span className="text-accent font-mono text-sm">{p.number}</span>
              <h2 className="text-fg mt-5 text-[length:var(--text-h2)] leading-[1.1] font-semibold tracking-tight text-balance">
                {p.title}
              </h2>
              <p className="text-fg-muted mt-6 max-w-md text-lg leading-relaxed">
                {p.description}
              </p>
            </FadeUp>
            <div className={cn("h-56 lg:h-72", i % 2 === 1 && "lg:order-1")}>
              <PrincipleGraphic index={i} />
            </div>
          </div>
        ))}
      </section>

      <section className="border-border bg-bg border-t">
        <div className="mx-auto max-w-3xl px-6 py-28 text-center lg:py-40">
          <FadeUp>
            <p className="text-fg text-[length:var(--text-h1)] leading-[1.15] font-medium tracking-tight text-balance">
              &ldquo;{BELIEF_STATEMENT.quote}&rdquo;
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-fg-muted mt-8 text-lg leading-relaxed">
              {BELIEF_STATEMENT.body}
            </p>
          </FadeUp>
        </div>
      </section>

      <CTASection />
    </>
  );
}
