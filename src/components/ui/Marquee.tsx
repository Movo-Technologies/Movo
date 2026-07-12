import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <div className="animate-marquee flex shrink-0 gap-10 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-fg-muted flex shrink-0 items-center gap-10 text-sm font-medium tracking-[0.15em] uppercase"
          >
            {item}
            <span className="text-accent" aria-hidden="true">
              &bull;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
