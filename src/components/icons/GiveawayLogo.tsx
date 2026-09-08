import Image from "next/image";
import { cn } from "@/lib/utils";
export function GiveawayLogo({
  onDark = false,
  className,
}: {
  onDark?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={onDark ? "/brand/giveaway-white.png" : "/brand/giveaway-full.png"}
      width={1080}
      height={onDark ? 924 : 976}
      alt="Giveaway App"
      sizes="(min-width:1024px) 180px, 120px"
      className={cn("h-8 w-8 object-contain", className)}
    />
  );
}
