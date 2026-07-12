import type { Metadata } from "next";

const SITE_NAME = "Movo";
const SITE_URL = "https://movo.com";
const DEFAULT_DESCRIPTION =
  "Movo is an innovation company building ventures, technologies, and experiences that create momentum across industries.";

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
