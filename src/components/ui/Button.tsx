import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost-dark" | "link";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-fg text-white px-7 py-3.5 text-sm hover:bg-accent",
  secondary: "border border-border text-fg px-7 py-3.5 text-sm hover:border-fg",
  "ghost-dark":
    "border border-white/25 text-fg-on-dark px-7 py-3.5 text-sm hover:border-white/70",
  link: "text-fg text-sm underline-offset-4 hover:text-accent",
};

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  showArrow?: boolean;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">;

type ButtonAsButton = CommonProps &
  Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | "children"
  > & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  children,
  variant = "primary",
  className,
  showArrow = true,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);
  const arrow = showArrow && (
    <ArrowUpRight
      className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      aria-hidden="true"
    />
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
        {arrow}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
      {arrow}
    </button>
  );
}
