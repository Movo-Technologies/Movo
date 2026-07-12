import { TextReveal } from "@/components/motion/TextReveal";

export function VisionStatement() {
  return (
    <section className="border-border border-t">
      <div className="mx-auto max-w-5xl px-6 py-32 text-center lg:py-48">
        <h2 className="text-fg text-[length:var(--text-display)] leading-[1.05] font-semibold tracking-tight text-balance">
          <TextReveal text="The future belongs to those" />
          <br />
          <TextReveal text="who keep moving." delay={0.15} />
        </h2>
      </div>
    </section>
  );
}
