"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Venture } from "@/data/ventures";
import { ICONS } from "@/lib/icons";

export function VentureCard({
  venture,
  index = 0,
}: {
  venture: Venture;
  index?: number;
}) {
  const Icon = ICONS[venture.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      tabIndex={0}
      className="group border-border hover:border-fg focus-within:border-fg grid grid-rows-[auto_0fr] rounded-2xl border p-8 transition-[grid-template-rows,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus-within:grid-rows-[auto_1fr] hover:grid-rows-[auto_1fr]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <Icon className="text-fg h-6 w-6" strokeWidth={1.5} />
          <h3 className="text-fg mt-5 text-xl font-semibold tracking-tight">
            {venture.name}
          </h3>
          <p className="text-fg-muted mt-2 text-sm">{venture.tagline}</p>
        </div>
        <span className="border-border text-fg-muted rounded-full border px-3 py-1 text-xs whitespace-nowrap">
          {venture.status}
        </span>
      </div>

      <div className="overflow-hidden">
        <p className="text-fg-muted mt-5 max-w-md text-sm leading-relaxed">
          {venture.description}
        </p>
        <Link
          href={`/ecosystem/${venture.slug}`}
          className="text-fg hover:text-accent mt-5 inline-flex items-center gap-1.5 text-sm font-medium"
        >
          View venture
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}
