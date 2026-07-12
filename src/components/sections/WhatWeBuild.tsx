import { FOCUS_AREAS } from "@/data/focusAreas";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";

export function WhatWeBuild() {
  return (
    <section className="border-border bg-bg border-t">
      <div className="mx-auto max-w-(--container-max) px-6 py-28 lg:px-10 lg:py-40">
        <SectionHeader
          eyebrow="03 / What We Build"
          title="An ecosystem of momentum."
          description="Movo operates across five interconnected areas — each one a different way of turning ideas into motion."
        />

        <div className="mt-16 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-5">
          {FOCUS_AREAS.map((area, i) => (
            <FeatureCard
              key={area.title}
              icon={area.icon}
              title={area.title}
              description={area.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
