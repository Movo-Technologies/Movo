import { HOME_STORIES } from "@/data/editorial";
import { BrandVisual } from "@/components/sections/BrandVisual";
import { Button } from "@/components/ui/Button";
import type { Venture } from "@/data/ventures";
export const sectionClass =
  "mx-auto max-w-(--container-max) px-6 py-20 lg:px-10 lg:py-28";
export function VentureStory({
  venture,
  overview = false,
}: {
  venture: Venture;
  overview?: boolean;
}) {
  const story = overview ? HOME_STORIES[venture.slug] : undefined;
  return (
    <section className="border-border border-t">
      <div
        className={`${sectionClass} grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20`}
      >
        <div>
          <p className="text-fg-muted font-mono text-xs tracking-widest uppercase">
            {overview ? venture.focus : "Overview"}
          </p>
          <h2 className="mt-4 text-2xl font-semibold">
            {overview ? venture.name : venture.focus}
          </h2>
          {overview && venture.status !== "Active" && (
            <p className="text-accent mt-3 text-sm">{venture.status}</p>
          )}
          {overview && (
            <div className="mt-8">
              <BrandVisual name={venture.slug} />
            </div>
          )}
        </div>
        <div>
          {overview && (
            <h3 className="text-[length:var(--text-h2)] font-semibold tracking-tight">
              {story?.headline ?? venture.tagline}
            </h3>
          )}
          <p className="text-fg-muted mt-6 max-w-2xl text-lg leading-relaxed">
            {story?.body ?? venture.description}
          </p>
          {!overview &&
            venture.paragraphs?.map((p) => (
              <p
                key={p}
                className="text-fg-muted mt-5 max-w-2xl text-lg leading-relaxed"
              >
                {p}
              </p>
            ))}
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={venture.primary[1]}>{venture.primary[0]}</Button>
            <Button
              variant="link"
              href={
                overview
                  ? `/ecosystem/${venture.slug}`
                  : (venture.secondary?.[1] ?? "/ecosystem")
              }
            >
              {overview
                ? `Explore ${venture.name}`
                : (venture.secondary?.[0] ?? "Explore the Ecosystem")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
export function HowMovoWorks() {
  return (
    <section className="border-border border-t">
      <div className={sectionClass}>
        <h2 className="text-[length:var(--text-h2)] font-semibold tracking-tight">
          From idea to motion.
        </h2>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ["Understand", "Start with the problem, opportunity or objective."],
            [
              "Build",
              "Create the product, system, creative work or solution required.",
            ],
            [
              "Launch",
              "Put it in front of real users, customers or audiences.",
            ],
            ["Learn", "Observe what happens and improve it."],
            ["Move", "Continue building from evidence rather than assumption."],
          ].map(([title, copy], i) => (
            <li key={title} className="border-border border-t pt-5">
              <span className="text-accent font-mono text-xs">0{i + 1}</span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="text-fg-muted mt-3 leading-relaxed">{copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
