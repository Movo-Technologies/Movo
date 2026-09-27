import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { buildMetadata, SITE_URL } from "@/lib/metadata";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  ...buildMetadata({ title: "Movo" }),
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      {
        url: "/brand/favicon-light.png",
        type: "image/png",
        sizes: "48x48",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/brand/favicon-dark.png",
        type: "image/png",
        sizes: "48x48",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="bg-bg text-fg flex min-h-full flex-col">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${SITE_URL}/#organization`,
                name: "Movo Technologies",
                alternateName: "Movo",
                url: SITE_URL,
                logo: `${SITE_URL}/brand/movo.png`,
                description:
                  "A company building software, creative services, digital products and ventures.",
                email: "info@movotechnologies.com",
              },
              {
                "@type": "WebSite",
                "@id": `${SITE_URL}/#website`,
                url: SITE_URL,
                name: "Movo Technologies",
                publisher: { "@id": `${SITE_URL}/#organization` },
                inLanguage: "en",
              },
            ],
          }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main-content" className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
