import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";

export function AboutTeaser() {
  return (
    <section className="border-border border-t">
      <div className="mx-auto max-w-(--container-max) px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <FadeUp>
              <p className="text-fg-muted font-mono text-xs tracking-[0.2em] uppercase">
                01 / About
              </p>
            </FadeUp>
          </div>

          <div className="lg:col-span-8">
            <FadeUp>
              <p className="text-fg text-[length:var(--text-h1)] leading-[1.15] font-medium tracking-tight text-balance">
                Motion is more than a metaphor at Movo — it is the mechanism by
                which ideas become ventures, and ventures become industries. We
                exist to keep things moving: people, businesses, and the belief
                that progress is always possible.
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <blockquote className="border-accent text-fg mt-14 border-l-2 pl-6 text-2xl font-medium italic">
                &ldquo;Progress begins with movement.&rdquo;
              </blockquote>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div className="mt-12">
                <Button href="/about" variant="link">
                  Our story
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
