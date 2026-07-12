"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function MouseGlow({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.5 });
  const y = useSpring(my, { stiffness: 60, damping: 20, mass: 0.5 });

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      className={`pointer-events-none absolute inset-0 hidden md:block ${className ?? ""}`}
      aria-hidden="true"
    >
      <motion.div
        className="absolute h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07] blur-3xl"
        style={{
          x,
          y,
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
