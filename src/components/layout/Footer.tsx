import Link from "next/link";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/data/nav";
import { Logo } from "@/components/icons/Logo";

export function Footer() {
  return (
    <footer className="border-border-on-dark bg-bg-dark text-fg-on-dark border-t">
      <div className="mx-auto max-w-(--container-max) px-6 py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col justify-between gap-14 lg:flex-row">
          <div className="max-w-sm">
            <Logo onDark />
            <p className="text-fg-on-dark-muted mt-5 text-sm leading-relaxed">
              Movo is an innovation company building ventures, technologies, and
              experiences that generate momentum for people, businesses, and
              society.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-fg-on-dark-muted mb-4 font-mono text-xs tracking-[0.15em] uppercase">
                Navigate
              </p>
              <ul className="flex flex-col gap-3">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-fg-on-dark-muted hover:text-fg-on-dark text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-fg-on-dark-muted mb-4 font-mono text-xs tracking-[0.15em] uppercase">
                Connect
              </p>
              <ul className="flex flex-col gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-fg-on-dark-muted hover:text-fg-on-dark text-sm transition-colors duration-300"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-border-on-dark mt-16 flex flex-col items-start justify-between gap-4 border-t pt-8 sm:flex-row sm:items-center">
          <p className="text-fg-on-dark-muted text-xs">
            &copy; {new Date().getFullYear()} Movo. All rights reserved.
          </p>
          <p className="text-fg-on-dark-muted font-mono text-xs tracking-[0.15em] uppercase">
            Built in Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
