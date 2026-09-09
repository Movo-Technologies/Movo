import Link from "next/link";
import { Logo } from "@/components/icons/Logo";
const groups = [
  {
    title: "Movo",
    links: [
      ["About", "/about"],
      ["Ecosystem", "/ecosystem"],
      ["Start Something", "/contact"],
      ["Philosophy", "/philosophy"],
      ["Giveaway App · Beta", "/ecosystem/giveaway-app"],
    ],
    emails: ["info"],
  },
  {
    title: "Labs",
    links: [
      ["Capabilities", "/ecosystem/movo-labs#capabilities"],
      ["Start a Project", "/contact?intent=labs"],
    ],
    emails: ["labs", "projects"],
  },
  {
    title: "Studios",
    links: [
      [
        "Production, Mixing & Mastering",
        "/ecosystem/movo-studios#capabilities",
      ],
      ["Branding & Distribution", "/ecosystem/movo-studios#capabilities"],
      ["Book a Project", "/contact?intent=studios"],
      ["Plan a Release", "/contact?intent=release"],
    ],
    emails: ["studio", "bookings", "releases"],
  },
  {
    title: "Systems & Ventures",
    links: [
      ["Atlas", "/ecosystem/atlas"],
      ["Request a Demo", "/contact?intent=atlas"],
      ["Movo Ventures", "/ecosystem/movo-ventures"],
      ["El Patron", "/ecosystem/el-patron"],
      ["Encapsul · Early Access", "/ecosystem/encapsul"],
      ["Support", "/contact?intent=support"],
    ],
    emails: ["sales", "support"],
  },
];
export function Footer() {
  return (
    <footer className="border-border-on-dark bg-bg-dark text-fg-on-dark border-t">
      <div className="mx-auto max-w-(--container-max) px-6 py-16 lg:px-10 lg:py-20">
        <Logo onDark />
        <p className="text-fg-on-dark-muted mt-5 max-w-md text-sm leading-relaxed">
          Technology, products, creative systems and ventures. Movo builds
          things that move ideas, businesses, creators and systems forward.
        </p>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
          {groups.map((group) => (
            <div key={group.title} className="min-w-0">
              <h2 className="text-fg-on-dark-muted mb-5 font-mono text-xs tracking-widest uppercase">
                {group.title}
              </h2>
              <ul className="space-y-3">
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      className="text-fg-on-dark-muted text-sm hover:text-white"
                      href={href}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                {group.emails.map((email) => (
                  <li key={email}>
                    <a
                      className="text-fg-on-dark-muted text-sm break-all hover:text-white"
                      href={`mailto:${email}@movotechnologies.com`}
                    >
                      {email}@movotechnologies.com
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-border-on-dark text-fg-on-dark-muted mt-16 flex flex-wrap justify-between gap-4 border-t pt-8 text-xs">
          <p>
            © {new Date().getFullYear()} Movo Technologies. All rights reserved.
          </p>
          <p className="font-mono uppercase">Built in Motion.</p>
        </div>
      </div>
    </footer>
  );
}
