import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { FadeUp } from "@/components/motion/FadeUp";
import { SOCIAL_LINKS } from "@/data/nav";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with Movo. Let’s build what’s next, together.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s move together."
        description="Whether you’re a builder, a founder, or a future partner, we’d like to hear from you."
      />

      <section className="border-border border-t">
        <div className="mx-auto grid max-w-(--container-max) gap-16 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
          <div className="lg:col-span-4">
            <FadeUp>
              <p className="text-fg-muted font-mono text-xs tracking-[0.2em] uppercase">
                Reach us
              </p>
              <p className="text-fg mt-4 text-lg">hello@movo.com</p>

              <p className="text-fg-muted mt-10 font-mono text-xs tracking-[0.2em] uppercase">
                Follow
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-fg-muted hover:text-fg text-lg transition-colors duration-300"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>

          <div className="lg:col-span-8">
            <FadeUp delay={0.1}>
              <ContactForm />
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
