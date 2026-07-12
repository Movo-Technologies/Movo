import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/metadata";
import { VENTURES } from "@/data/ventures";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/philosophy",
    "/ecosystem",
    "/contact",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const ventureRoutes = VENTURES.map((v) => ({
    url: `${SITE_URL}/ecosystem/${v.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...ventureRoutes];
}
