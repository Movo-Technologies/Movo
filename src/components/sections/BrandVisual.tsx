import Image from "next/image";
import Link from "next/link";
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
  const source = isGiveaway
    ? PRODUCT_LINKS.giveaway
    : isAtlas
      ? PRODUCT_LINKS.atlas
      : undefined;
  return (
    <figure className="min-w-0">
      <div
        className={`relative aspect-[3/2] overflow-hidden rounded-sm ${isGiveaway ? "bg-bg-dark" : isAtlas ? "border-border border bg-[#f3f3f3]" : "bg-[#ededed]"}`}
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
