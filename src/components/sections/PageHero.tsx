import { TextReveal } from "@/components/motion/TextReveal";
import { FadeUp } from "@/components/motion/FadeUp";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="pt-40 pb-20 lg:pt-48 lg:pb-28">
      <div className="mx-auto max-w-(--container-max) px-6 lg:px-10">
        <FadeUp>
          <p className="text-fg-muted mb-6 font-mono text-xs tracking-[0.2em] uppercase">
            {eyebrow}
          </p>
        </FadeUp>
        <h1 className="text-fg max-w-4xl text-[length:var(--text-display)] leading-[1.02] font-semibold tracking-tight text-balance">
          <TextReveal text={title} />
        </h1>
        {description && (
          <FadeUp delay={0.3}>
            <p className="text-fg-muted mt-8 max-w-xl text-lg leading-relaxed">
              {description}
            </p>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
