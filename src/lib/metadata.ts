import type { Metadata } from "next";

const SITE_NAME = "Movo";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.movotechnologies.com";
const DEFAULT_DESCRIPTION =
  "Movo Technologies builds software, digital products, creative systems and ventures. Explore Movo Labs, Studios, Atlas, Giveaway App early access and El Patron.";

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle =
    title === SITE_NAME ? `${SITE_NAME} | Built in Motion` : `${title} | Movo`;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION };
