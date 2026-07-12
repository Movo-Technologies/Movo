"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Venture } from "@/data/ventures";
import { ICONS } from "@/lib/icons";
import { cn } from "@/lib/utils";

const RADIUS = 40;

function nodePosition(index: number, total: number) {
  const angle = (-90 + index * (360 / total)) * (Math.PI / 180);
  return {
    x: 50 + RADIUS * Math.cos(angle),
    y: 50 + RADIUS * Math.sin(angle),
  };
}

export function NodeGraph({ ventures }: { ventures: Venture[] }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-xl">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {ventures.map((v, i) => {
          const { x, y } = nodePosition(i, ventures.length);
          return (
            <motion.line
              key={v.slug}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke="var(--color-border)"
              strokeWidth="0.4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.1,
                delay: 0.15 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          );
        })}
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-fg absolute top-1/2 left-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-sm font-semibold text-white sm:h-28 sm:w-28"
      >
        MOVO
      </motion.div>

      {ventures.map((v, i) => {
        const { x, y } = nodePosition(i, ventures.length);
        const Icon = ICONS[v.icon];
        return (
          <motion.div
            key={v.slug}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4 + i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <Link
              href={`/ecosystem/${v.slug}`}
              className={cn(
                "group flex flex-col items-center gap-2 rounded-full p-1 text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1",
              )}
            >
              <span className="border-border bg-bg group-hover:border-accent flex h-14 w-14 items-center justify-center rounded-full border transition-colors duration-300 sm:h-16 sm:w-16">
                <Icon className="text-fg group-hover:text-accent h-5 w-5 transition-colors duration-300" />
              </span>
              <span className="text-fg-muted group-hover:text-fg max-w-[6rem] text-xs font-medium transition-colors duration-300">
                {v.name}
              </span>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
