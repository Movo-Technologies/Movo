import { PHILOSOPHY_PRINCIPLES } from "@/data/philosophy";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PrincipleCard } from "@/components/ui/PrincipleCard";
import { Button } from "@/components/ui/Button";

export function PhilosophyGrid() {
  return (
    <section className="border-border border-t">
      <div className="mx-auto max-w-(--container-max) px-6 py-28 lg:px-10 lg:py-40">
        <SectionHeader
          eyebrow="02 / Philosophy"
          title="What we believe."
          description="Four principles guide every venture, product, and decision inside the Movo ecosystem."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {PHILOSOPHY_PRINCIPLES.map((p, i) => (
            <PrincipleCard
              key={p.number}
              number={p.number}
              title={p.title}
              description={p.description}
              index={i}
            />
          ))}
        </div>

        <div className="mt-12">
          <Button href="/philosophy" variant="link">
            Explore our philosophy
          </Button>
        </div>
      </div>
    </section>
  );
}
