"use client";

import { motion } from "motion/react";

export function PrincipleCard({
  number,
  title,
  description,
  index = 0,
}: {
  number: string;
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      tabIndex={0}
      className="group border-border hover:border-fg focus-visible:border-fg grid grid-rows-[auto_0fr] rounded-2xl border p-8 transition-[grid-template-rows,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:grid-rows-[auto_1fr] focus-visible:grid-rows-[auto_1fr]"
    >
      <div>
        <span className="text-accent font-mono text-xs">{number}</span>
        <h3 className="text-fg mt-4 text-xl font-semibold tracking-tight">
          {title}
        </h3>
      </div>
      <div className="overflow-hidden">
        <p className="text-fg-muted mt-4 max-w-sm text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
