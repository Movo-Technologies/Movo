import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/icons/Logo";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center px-6 text-center">
      <LogoMark className="animate-float text-fg/70 h-16 w-16" />
      <p className="text-fg-muted mt-8 font-mono text-xs tracking-[0.2em] uppercase">
        404 / Off Course
      </p>
      <h1 className="text-fg mt-5 text-[length:var(--text-h1)] font-semibold tracking-tight">
        You&rsquo;ve drifted off course.
      </h1>
      <p className="text-fg-muted mt-5 max-w-md text-lg leading-relaxed">
        The page you&rsquo;re looking for isn&rsquo;t here. Let&rsquo;s get you
        moving in the right direction.
      </p>
      <div className="mt-10">
        <Button href="/" variant="primary">
          Back to Home
        </Button>
      </div>
    </section>
  );
}
