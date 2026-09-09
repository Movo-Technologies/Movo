import Image from "next/image";
import { cn } from "@/lib/utils";

export function EncapsulLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/encapsul.svg"
      width={40}
      height={40}
      alt="Encapsul"
      className={cn("h-8 w-8", className)}
    />
  );
}
