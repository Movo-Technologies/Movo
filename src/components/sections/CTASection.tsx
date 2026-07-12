import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="bg-bg-dark">
      <div className="mx-auto max-w-(--container-max) px-6 py-28 lg:px-10 lg:py-36">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <FadeUp>
            <h2 className="text-fg-on-dark max-w-2xl text-[length:var(--text-h1)] leading-[1.05] font-semibold tracking-tight text-balance">
              Let&rsquo;s build what&rsquo;s next.
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Move With Us
              </Button>
              <Button href="/contact" variant="ghost-dark">
                Contact
              </Button>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
