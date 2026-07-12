import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { FadeUp } from "@/components/motion/FadeUp";
import { CTASection } from "@/components/sections/CTASection";
import { VENTURES, getVentureBySlug } from "@/data/ventures";
import { ICONS } from "@/lib/icons";

export function generateStaticParams() {
  return VENTURES.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const venture = getVentureBySlug(slug);
  if (!venture) return buildMetadata({ title: "Ecosystem" });

  return buildMetadata({
    title: venture.name,
    description: venture.description,
    path: `/ecosystem/${venture.slug}`,
  });
}

export default async function VenturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const venture = getVentureBySlug(slug);
  if (!venture) notFound();

  const related = VENTURES.filter((v) => v.slug !== venture.slug).slice(0, 3);
  const Icon = ICONS[venture.icon];

  return (
    <>
      <section className="pt-40 pb-20 lg:pt-48 lg:pb-28">
        <div className="mx-auto max-w-(--container-max) px-6 lg:px-10">
          <FadeUp>
            <Link
              href="/ecosystem"
              className="text-fg-muted hover:text-fg inline-flex items-center gap-1.5 text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Ecosystem
            </Link>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="mt-10 flex items-center gap-4">
              <span className="border-border flex h-14 w-14 items-center justify-center rounded-full border">
                <Icon className="text-fg h-6 w-6" strokeWidth={1.5} />
              </span>
              <span className="border-border text-fg-muted rounded-full border px-3 py-1 text-xs">
                {venture.status}
              </span>
            </div>
          </FadeUp>

          <h1 className="text-fg mt-8 max-w-3xl text-[length:var(--text-display)] leading-[1.02] font-semibold tracking-tight text-balance">
            {venture.name}
          </h1>

          <FadeUp delay={0.15}>
            <p className="text-fg-muted mt-6 max-w-xl text-lg leading-relaxed">
              {venture.tagline}
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="border-border border-t">
        <div className="mx-auto grid max-w-(--container-max) gap-12 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
          <div className="lg:col-span-3">
            <FadeUp>
              <p className="text-fg-muted font-mono text-xs tracking-[0.2em] uppercase">
                Focus
              </p>
              <p className="text-fg mt-3 text-base font-medium">
                {venture.focus}
              </p>
            </FadeUp>
          </div>
          <div className="lg:col-span-9">
            <FadeUp delay={0.1}>
              <p className="text-fg max-w-2xl text-xl leading-relaxed">
                {venture.description}
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="border-border bg-bg border-t">
        <div className="mx-auto max-w-(--container-max) px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-fg-muted font-mono text-xs tracking-[0.2em] uppercase">
            Rest of the Ecosystem
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {related.map((v) => (
              <Link
                key={v.slug}
                href={`/ecosystem/${v.slug}`}
                className="group border-border hover:border-fg flex items-center justify-between rounded-2xl border p-6 transition-colors duration-300"
              >
                <span className="text-fg text-base font-medium">{v.name}</span>
                <ArrowUpRight className="text-fg-muted group-hover:text-accent h-4 w-4 transition-colors duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
