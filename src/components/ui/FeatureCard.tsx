"use client";

import { motion } from "motion/react";
import { ICONS, type IconName } from "@/lib/icons";

export function FeatureCard({
  icon,
  title,
  description,
  index = 0,
}: {
  icon: IconName;
  title: string;
  description: string;
  index?: number;
}) {
  const Icon = ICONS[icon];
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
      className="group border-border hover:border-accent border-t py-8 transition-colors duration-300"
    >
      <Icon
        className="text-fg group-hover:text-accent h-7 w-7 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1"
        strokeWidth={1.5}
      />
      <h3 className="text-fg mt-6 text-lg font-semibold">{title}</h3>
      <p className="text-fg-muted mt-3 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
