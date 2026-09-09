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
  Plane,
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
  plane: Plane,
} as const;

export type IconName = keyof typeof ICONS;
