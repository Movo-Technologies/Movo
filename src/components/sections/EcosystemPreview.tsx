import { VENTURES } from "@/data/ventures";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { NodeGraph } from "@/components/motion/NodeGraph";
import { Button } from "@/components/ui/Button";

export function EcosystemPreview() {
  return (
    <section className="border-border border-t">
      <div className="mx-auto max-w-(--container-max) px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="04 / Ecosystem"
              title="One ecosystem. Many ventures."
              description="Every venture inside Movo shares the same origin, philosophy, and infrastructure: connected nodes in a single system built for momentum."
            />
            <div className="mt-10">
              <Button href="/ecosystem" variant="secondary">
                Explore the ecosystem
              </Button>
            </div>
          </div>

          <NodeGraph ventures={VENTURES} />
        </div>
      </div>
    </section>
  );
}
