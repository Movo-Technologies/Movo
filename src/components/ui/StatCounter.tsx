"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";

export function StatCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (!isInView || !numberRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      numberRef.current.textContent = value.toString();
      return;
    }

    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        if (numberRef.current)
          numberRef.current.textContent = Math.round(latest).toString();
      },
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div ref={containerRef}>
      <p className="text-fg text-4xl font-semibold tracking-tight sm:text-5xl">
        <span ref={numberRef}>0</span>
        {suffix}
      </p>
      <p className="text-fg-muted mt-2 text-sm">{label}</p>
    </div>
  );
}
