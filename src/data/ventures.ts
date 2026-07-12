import type { IconName } from "@/lib/icons";

export type Venture = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  focus: string;
  icon: IconName;
  status: "Active" | "Building" | "Future";
};

export const VENTURES: Venture[] = [
  {
    slug: "movo-labs",
    name: "Movo Labs",
    tagline: "Where ideas become prototypes.",
    description:
      "Movo Labs is the research and development arm of the ecosystem — the place where early concepts in software, AI, and emerging technology are tested, broken, and rebuilt until they’re ready to move into the world.",
    focus: "Technology & Emerging Innovation",
    icon: "flask",
    status: "Active",
  },
  {
    slug: "movo-studios",
    name: "Movo Studios",
    tagline: "Stories that create culture.",
    description:
      "Movo Studios develops media, music, and creative work designed to influence culture and inspire audiences — from original storytelling to full-scale creative production.",
    focus: "Media & Creative Industries",
    icon: "clapperboard",
    status: "Active",
  },
  {
    slug: "movo-systems",
    name: "Movo Systems",
    tagline: "The infrastructure behind the motion.",
    description:
      "Movo Systems builds the platforms, tooling, and technical infrastructure that every other venture in the ecosystem runs on — quietly powering momentum at scale.",
    focus: "Technology & Infrastructure",
    icon: "network",
    status: "Building",
  },
  {
    slug: "movo-ventures",
    name: "Movo Ventures",
    tagline: "Backing the next generation of builders.",
    description:
      "Movo Ventures identifies, incubates, and supports new companies that align with the ecosystem’s vision — providing capital, strategy, and infrastructure to founders ready to move.",
    focus: "Venture Development",
    icon: "rocket",
    status: "Building",
  },
  {
    slug: "future-ventures",
    name: "Future Ventures",
    tagline: "What comes next is already in motion.",
    description:
      "The ecosystem is never finished. Future Ventures represents the next wave of ideas, industries, and technologies Movo has yet to announce — reserved for what’s still taking shape.",
    focus: "Reserved for What’s Next",
    icon: "infinity",
    status: "Future",
  },
];

export function getVentureBySlug(slug: string) {
  return VENTURES.find((v) => v.slug === slug);
}
