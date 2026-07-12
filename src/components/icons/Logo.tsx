import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
    >
      <path
        d="M12 78 C 30 78, 38 62, 46 46"
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M26 82 C 42 82, 50 64, 58 46"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M40 84 C 54 84, 60 66, 68 46"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle cx="76" cy="30" r="10" fill="var(--color-accent)" />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  onDark = false,
}: {
  className?: string;
  markClassName?: string;
  onDark?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-semibold tracking-tight",
        onDark ? "text-fg-on-dark" : "text-fg",
        className,
      )}
    >
      <LogoMark className={cn("h-6 w-6", markClassName)} />
      MOVO
    </span>
  );
}
