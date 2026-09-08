import Image from "next/image";
import { cn } from "@/lib/utils";

/** Choose the original artwork by surface color, independently of browser theme. */
export function LogoMark({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <Image
      src={onDark ? "/brand/movo-white.svg" : "/brand/movo.png"}
      width={onDark ? 1281 : 1347}
      height={onDark ? 903 : 950}
      alt=""
      aria-hidden="true"
      sizes="(min-width: 1024px) 288px, 80px"
      className={cn("h-8 w-12 object-contain", className)}
    />
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
    <span role="img" aria-label="Movo" className={cn("inline-flex", className)}>
      <LogoMark onDark={onDark} className={cn("h-8 w-11", markClassName)} />
    </span>
  );
}
