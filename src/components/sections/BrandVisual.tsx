import Image from "next/image";
import Link from "next/link";
import { Plane } from "lucide-react";
import { EncapsulLogo } from "@/components/icons/EncapsulLogo";
import { GiveawayLogo } from "@/components/icons/GiveawayLogo";
import { EDITORIAL_IMAGES } from "@/data/editorial";
import { PRODUCT_LINKS } from "@/data/products";

/** Shared 3:2 frame keeps photography and real product assets in one visual system. */
export function BrandVisual({
  name,
  priority = false,
  caption = true,
}: {
  name: string;
  priority?: boolean;
  caption?: boolean;
}) {
  const image = EDITORIAL_IMAGES[name];
  const isGiveaway = name === "giveaway-app";
  const isAtlas = name === "atlas" || name === "movo-systems";
  const isEncapsul = name === "encapsul";
  const source = isGiveaway
    ? PRODUCT_LINKS.giveaway
    : isAtlas
      ? PRODUCT_LINKS.atlas
      : undefined;
  return (
    <figure className="min-w-0">
      <div
        className={`relative aspect-[3/2] overflow-hidden rounded-sm ${isGiveaway ? "bg-bg-dark" : isAtlas ? "border-border border bg-[#f3f3f3]" : isEncapsul ? "border border-[#dce3d1] bg-[#e9eedf]" : "bg-[#ededed]"}`}
      >
        {isGiveaway ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <GiveawayLogo onDark className="h-[55%] w-[55%]" />
          </div>
        ) : isAtlas ? (
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
            <Image
              src="/images/atlas-dashboard.webp"
              width={828}
              height={518}
              alt="Atlas tenant workspace preview from the official product website, with invoices, leads and orders."
              sizes="(min-width:1440px) 640px, (min-width:1024px) 48vw, 100vw"
              loading={priority ? "eager" : "lazy"}
              className="h-full w-full object-contain grayscale"
            />
          </div>
        ) : isEncapsul ? (
          <div className="absolute inset-0 flex flex-col justify-between p-7 text-[#254e36] sm:p-10">
            <div className="flex items-center justify-between">
              <EncapsulLogo className="h-10 w-10" />
              <span className="font-mono text-xs tracking-widest uppercase">
                Planned pilot
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <span className="block font-mono text-xs">FROM</span>
                <strong className="text-4xl font-semibold sm:text-5xl">
                  LOS
                </strong>
                <span className="block text-sm">Lagos</span>
              </div>
              <div
                className="flex flex-1 items-center gap-3"
                aria-hidden="true"
              >
                <span className="flex-1 border-t border-dashed border-[#6f8d57]" />
                <Plane className="h-6 w-6 rotate-45" strokeWidth={1.5} />
                <span className="flex-1 border-t border-dashed border-[#6f8d57]" />
              </div>
              <div className="text-right">
                <span className="block font-mono text-xs">TO</span>
                <strong className="text-4xl font-semibold sm:text-5xl">
                  ABV
                </strong>
                <span className="block text-sm">Abuja</span>
              </div>
            </div>
            <p className="text-sm font-medium">Empty kilos. Full potential.</p>
          </div>
        ) : image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width:1440px) 640px, (min-width:1024px) 48vw, 100vw"
            loading={priority ? "eager" : "lazy"}
            className="object-cover grayscale"
          />
        ) : null}
      </div>
      {caption && (
        <figcaption className="text-fg-muted mt-3 flex min-h-5 items-start justify-between gap-3 text-xs leading-relaxed">
          <span>
            {isGiveaway
              ? "Interactive participation. A distinct identity."
              : isAtlas
                ? "Atlas · Tenant workspace preview"
                : isEncapsul
                  ? "Encapsul · Air delivery concept in early access"
                  : image?.detailCaption}
          </span>
          {source && (
            <Link
              href={source}
              className="hover:text-fg shrink-0 underline underline-offset-4"
            >
              {isGiveaway ? "Visit Giveaway App ↗" : "Visit Atlas ↗"}
            </Link>
          )}
        </figcaption>
      )}
    </figure>
  );
}
