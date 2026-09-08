import { ECOSYSTEM } from "@/data/ventures";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { NodeGraph } from "@/components/motion/NodeGraph";
import { Button } from "@/components/ui/Button";

export function EcosystemPreview() {
  return (
    <section id="ecosystem" className="border-border scroll-mt-24 border-t">
      <div className="mx-auto max-w-(--container-max) px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Ecosystem"
              title="One company. Multiple engines."
              description="Specialist teams give each kind of work the attention it deserves. Client software, artist projects, repeatable platforms and emerging brands have a home here, connected by a practical commitment to execution."
            />
            <div className="mt-10">
              <Button href="/ecosystem" variant="secondary">
                Explore the ecosystem
              </Button>
            </div>
          </div>

          <NodeGraph ventures={ECOSYSTEM} />
        </div>
      </div>
    </section>
  );
}
