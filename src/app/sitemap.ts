import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/metadata";
import { INDEXABLE_VENTURES } from "@/data/ventures";
import { EDITORIAL_IMAGES } from "@/data/editorial";

const routeImages: Record<string, string[]> = {
  "": ["/brand/movo.png"],
  "/about": [EDITORIAL_IMAGES.about.src],
  "/philosophy": [EDITORIAL_IMAGES.philosophy.src],
  "/ecosystem": [EDITORIAL_IMAGES.ecosystem.src],
  "/contact": [EDITORIAL_IMAGES.contact.src],
};

function imagesForVenture(slug: string) {
  if (slug === "giveaway-app") return ["/brand/giveaway-full.png"];
  if (slug === "movo-systems" || slug === "atlas")
    return ["/images/atlas-dashboard.webp"];
  if (slug === "nat") return ["/images/nat-product-card.webp"];
  if (slug === "encapsul") return ["/brand/encapsul.svg"];
  return EDITORIAL_IMAGES[slug] ? [EDITORIAL_IMAGES[slug].src] : [];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/philosophy",
    "/ecosystem",
    "/contact",
  ].map((path) => ({
    url: absoluteUrl(path || "/"),
    images: routeImages[path].map(absoluteUrl),
  }));

  const ventureRoutes = INDEXABLE_VENTURES.map((v) => ({
    url: absoluteUrl(`/ecosystem/${v.slug}`),
    images: imagesForVenture(v.slug).map(absoluteUrl),
  }));

  return [...staticRoutes, ...ventureRoutes];
}
