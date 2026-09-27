import { Hero } from "@/components/sections/Hero";
import { EcosystemPreview } from "@/components/sections/EcosystemPreview";
import { CTASection } from "@/components/sections/CTASection";
import { VentureStory, HowMovoWorks } from "@/components/sections/VentureStory";
import { getVentureBySlug } from "@/data/ventures";
import { WebPageJsonLd } from "@/components/seo/WebPageJsonLd";
export default function Home() {
  return (
    <>
      <WebPageJsonLd
        path="/"
        name="Movo Technologies"
        description="Movo Technologies builds software, creative services, digital products and ventures through Movo Labs, Studios, Systems and Ventures."
      />
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
