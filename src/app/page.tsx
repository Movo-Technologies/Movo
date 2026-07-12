import { Hero } from "@/components/sections/Hero";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { PhilosophyGrid } from "@/components/sections/PhilosophyGrid";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { EcosystemPreview } from "@/components/sections/EcosystemPreview";
import { VisionStatement } from "@/components/sections/VisionStatement";
import { CTASection } from "@/components/sections/CTASection";
import { Marquee } from "@/components/ui/Marquee";
import { FOCUS_AREAS } from "@/data/focusAreas";

const MARQUEE_ITEMS = FOCUS_AREAS.map((area) => area.title);

export default function Home() {
  return (
    <>
      <Hero />
      <div className="border-y border-border py-6">
        <Marquee items={MARQUEE_ITEMS} />
      </div>
      <AboutTeaser />
      <PhilosophyGrid />
      <WhatWeBuild />
      <EcosystemPreview />
      <VisionStatement />
      <CTASection />
    </>
  );
}
