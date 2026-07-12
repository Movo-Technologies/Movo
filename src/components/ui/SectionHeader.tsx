import { cn } from "@/lib/utils";
import { FadeUp } from "@/components/motion/FadeUp";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <FadeUp>
          <p
            className={cn(
              "mb-4 font-mono text-xs tracking-[0.2em] uppercase",
              onDark ? "text-fg-on-dark-muted" : "text-fg-muted",
            )}
          >
            {eyebrow}
          </p>
        </FadeUp>
      )}
      <FadeUp delay={0.08}>
        <h2
          className={cn(
            "text-[length:var(--text-h1)] leading-[1.05] font-semibold tracking-tight text-balance",
            onDark ? "text-fg-on-dark" : "text-fg",
            titleClassName,
          )}
        >
          {title}
        </h2>
      </FadeUp>
      {description && (
        <FadeUp delay={0.16}>
          <p
            className={cn(
              "mt-5 max-w-xl text-lg leading-relaxed",
              align === "center" && "mx-auto",
              onDark ? "text-fg-on-dark-muted" : "text-fg-muted",
            )}
          >
            {description}
          </p>
        </FadeUp>
      )}
    </div>
  );
}
