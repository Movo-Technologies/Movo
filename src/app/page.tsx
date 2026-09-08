import { Hero } from "@/components/sections/Hero";
import { EcosystemPreview } from "@/components/sections/EcosystemPreview";
import { CTASection } from "@/components/sections/CTASection";
import { VentureStory, HowMovoWorks } from "@/components/sections/VentureStory";
import { getVentureBySlug } from "@/data/ventures";
export default function Home() {
  return (
    <>
      <Hero />
      <EcosystemPreview />
      {[
        "giveaway-app",
        "movo-labs",
        "movo-studios",
        "movo-systems",
        "movo-ventures",
      ].map((slug) => (
        <VentureStory key={slug} venture={getVentureBySlug(slug)!} overview />
      ))}
      <HowMovoWorks />
      <CTASection />
    </>
  );
}
