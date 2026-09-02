import { ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/utils";

type CtaButtonProps = {
  children: React.ReactNode;
  variant?: "dark" | "light" | "text";
  href?: string;
  className?: string;
};

const variantClasses: Record<NonNullable<CtaButtonProps["variant"]>, string> = {
  dark: [
    "border border-ink bg-ink text-paper",
    "hover:bg-transparent hover:text-ink",
  ].join(" "),

  light: [
    "border border-paper/60 bg-paper text-ink",
    "hover:bg-transparent hover:text-paper",
  ].join(" "),

  text: ["text-ink", "hover:text-brass"].join(" "),
};

export function CtaButton({
  children,
  variant = "dark",
  href = "#start",
  className,
}: CtaButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex min-h-10 items-center justify-center",
        "gap-3 px-4",
        "font-mono text-[11px] font-semibold uppercase tracking-[0.04em]",
        "transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2",
        variantClasses[variant],
        className,
      )}
    >
      <span>{children}</span>

      <ArrowUpRight
        size={14}
        strokeWidth={1.8}
        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}
