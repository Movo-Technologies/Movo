import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Movo: Built in Motion",
    short_name: "Movo",
    description:
      "Movo Technologies builds software, creative services, digital products and ventures.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111111",
    icons: [
      {
        src: "/icon",
        sizes: "48x48",
        type: "image/png",
      },
    ],
  };
}
