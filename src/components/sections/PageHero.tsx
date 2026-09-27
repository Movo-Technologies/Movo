import type { ReactNode } from "react";
import { TextReveal } from "@/components/motion/TextReveal";
import { FadeUp } from "@/components/motion/FadeUp";
import Link from "next/link";
export function PageHero({
  eyebrow,
  title,
  description,
  visual,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  visual?: ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="pt-36 pb-16 lg:pt-44 lg:pb-24">
      <div
        className={`mx-auto max-w-(--container-max) px-6 lg:px-10 ${visual ? "grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16" : ""}`}
      >
        {breadcrumbs && (
          <nav
            aria-label="Breadcrumb"
            className={`text-fg-muted flex flex-wrap items-center gap-2 text-sm ${visual ? "lg:col-span-2 lg:-mb-4" : "mb-8"}`}
          >
            {breadcrumbs.map((item, index) => (
              <span key={item.label} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                {item.href ? (
                  <Link className="hover:text-fg" href={item.href}>
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current="page">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <div>
          <FadeUp>
            <p className="text-fg-muted mb-6 font-mono text-xs tracking-[0.2em] uppercase">
              {eyebrow}
            </p>
          </FadeUp>
          <h1
            className={`text-fg max-w-4xl leading-[1.06] font-semibold tracking-tight text-balance ${visual ? "text-[length:var(--text-h1)]" : "text-[length:var(--text-display)]"}`}
          >
            <TextReveal text={title} />
          </h1>
          {description && (
            <FadeUp delay={0.15}>
              <p className="text-fg-muted mt-7 max-w-xl text-lg leading-relaxed">
                {description}
              </p>
            </FadeUp>
          )}
        </div>
        {visual && <div className="min-w-0">{visual}</div>}
      </div>
    </section>
  );
}
