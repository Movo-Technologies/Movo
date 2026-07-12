"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/motion/TextReveal";
import { FadeUp } from "@/components/motion/FadeUp";
import { MouseGlow } from "@/components/motion/MouseGlow";
import { LogoMark } from "@/components/icons/Logo";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-20">
      <MouseGlow />

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 15%, var(--color-accent-dim) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-(--container-max) items-center gap-16 px-6 lg:grid-cols-[1.3fr_1fr] lg:px-10">
        <div>
          <FadeUp>
            <p className="text-fg-muted mb-6 font-mono text-xs tracking-[0.2em] uppercase">
              Built in Motion
            </p>
          </FadeUp>

          <h1 className="text-fg text-[length:var(--text-display-lg)] leading-[0.98] font-semibold tracking-tight">
            <TextReveal text="We Build" />
            <br />
            <TextReveal text="Momentum." delay={0.12} />
          </h1>

          <FadeUp delay={0.35}>
            <p className="text-fg-muted mt-8 max-w-lg text-lg leading-relaxed">
              Movo is an innovation company building ventures, technologies, and
              experiences that move people, industries, and society forward.
            </p>
          </FadeUp>

          <FadeUp delay={0.45}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary">
                Start Moving
              </Button>
              <Button href="/about" variant="secondary">
                Explore Movo
              </Button>
            </div>
          </FadeUp>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hidden justify-center lg:flex"
        >
          <div className="animate-float">
            <LogoMark className="text-fg/90 h-56 w-56" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
