import { BrandVisual } from "@/components/sections/BrandVisual";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { sectionClass } from "@/components/sections/VentureStory";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
export const metadata = buildMetadata({
  title: "About Movo Technologies",
  description:
    "Movo Technologies moves ideas into the real world through software, creative services, digital products and ventures. Built in Motion.",
  path: "/about",
});
export default function AboutPage() {
  return (
    <>
      <PageHero
        visual={<BrandVisual name="about" priority />}
        eyebrow="About Movo"
        title="We build because standing still is expensive."
        description="Movo Technologies exists to move ideas into the real world."
      />
      <section className="border-border border-t">
        <div className={`${sectionClass} grid gap-12 lg:grid-cols-2`}>
          <h2 className="max-w-md text-[length:var(--text-h2)] font-semibold tracking-tight">
            Useful ideas rarely fit inside one category.
          </h2>
          <div className="text-fg-muted max-w-2xl space-y-6 text-lg leading-relaxed">
            <p>
              A business may need a better tool. An artist may need a clearer
              identity. A promising product may need the space to become a
              business. We organize around what the work requires.
            </p>
            <p>
              That gives us a broad remit, with a practical test for every
              opportunity: who will it serve, and what will it make possible?
            </p>
            <p>
              Movo gives us the structure to build across those boundaries while
              maintaining a single operating philosophy:
            </p>
            <p className="text-fg text-2xl font-semibold">
              Build deliberately. Learn quickly. Keep moving.
            </p>
          </div>
        </div>
      </section>
      <section className="border-border border-t">
        <div className={`${sectionClass} grid gap-12 lg:grid-cols-2`}>
          <div>
            <h2 className="text-2xl font-semibold">
              A name rooted in movement.
            </h2>
            <p className="text-fg-muted mt-5 max-w-xl text-lg leading-relaxed">
              The name Movo is derived from the concept of movement,
              representing continuous growth, evolution and forward progress.
              That belief guides how we develop products, create work and build
              new ventures.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">
              Different expertise. Shared responsibility.
            </h2>
            <p className="text-fg-muted mt-5 max-w-xl text-lg leading-relaxed">
              Each business has a defined focus, so a software brief and a music
              release can receive the attention they each require. The shared
              standard is care: in the decisions, the execution and what happens
              after the work reaches people.
            </p>
            <Button href="/philosophy" variant="link" className="mt-6">
              Read our philosophy
            </Button>
          </div>
        </div>
      </section>
      <CTASection title="Bring us the idea you keep coming back to." />
    </>
  );
}
