"use client";

import { motion } from "motion/react";

export function Timeline({
  items,
}: {
  items: readonly { label: string; description: string }[];
}) {
  return (
    <div className="relative">
      <div
        className="bg-border absolute top-0 left-0 h-full w-px"
        aria-hidden="true"
      />
      <ol className="flex flex-col gap-14">
        {items.map((item, i) => (
          <motion.li
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative pl-10"
          >
            <span className="absolute top-1.5 left-0 -translate-x-1/2">
              <span className="bg-accent block h-2.5 w-2.5 rounded-full" />
            </span>
            <span className="text-fg-muted font-mono text-xs tracking-[0.15em] uppercase">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-fg mt-2 text-xl font-semibold tracking-tight">
              {item.label}
            </h3>
            <p className="text-fg-muted mt-2 max-w-lg text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
