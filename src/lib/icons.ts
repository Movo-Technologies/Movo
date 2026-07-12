import {
  Cpu,
  Rocket,
  Palette,
  Sparkles,
  Orbit,
  FlaskConical,
  Clapperboard,
  Network,
  Infinity as InfinityIcon,
} from "lucide-react";

export const ICONS = {
  cpu: Cpu,
  rocket: Rocket,
  palette: Palette,
  sparkles: Sparkles,
  orbit: Orbit,
  flask: FlaskConical,
  clapperboard: Clapperboard,
  network: Network,
  infinity: InfinityIcon,
} as const;

export type IconName = keyof typeof ICONS;
