"use client";

import { motion } from "motion/react";

const PATHS = [
  "M20 220 C 90 220, 110 160, 150 140 S 230 60, 280 40",
  "M20 200 L 90 200 L 110 140 L 180 140 L 200 70 L 280 70",
  "M20 60 C 70 60, 60 180, 120 180 S 200 240, 280 220",
  "M20 140 C 90 60, 190 60, 280 140 C 260 200, 60 200, 20 140 Z",
];

export function PrincipleGraphic({ index }: { index: number }) {
  const d = PATHS[index % PATHS.length];

  return (
    <svg viewBox="0 0 300 260" className="h-full w-full" aria-hidden="true">
      <motion.path
        d={d}
        fill="none"
        stroke="var(--color-border)"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.circle
        cx="280"
        cy={index === 1 ? 70 : index === 2 ? 220 : index === 3 ? 140 : 40}
        r="6"
        fill="var(--color-accent)"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: 0.5, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}
