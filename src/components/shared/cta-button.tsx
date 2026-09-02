import { ArrowRight, ArrowUpRight } from "lucide-react";
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
    "hover:bg-paper hover:text-ink",
  ].join(" "),

  light: [
    "border border-paper/70 bg-paper text-ink",
    "hover:bg-transparent hover:text-paper hover:border-paper",
  ].join(" "),

  text: [
    "border border-slate/20 bg-transparent text-ink",
    "hover:border-ink hover:bg-ink hover:text-paper",
  ].join(" "),
};

const iconByVariant: Record<
  NonNullable<CtaButtonProps["variant"]>,
  typeof ArrowRight
> = {
  dark: ArrowUpRight,
  light: ArrowUpRight,
  text: ArrowRight,
};

export function CtaButton({
  children,
  variant = "dark",
  href = "#start",
  className,
}: CtaButtonProps) {
  const Icon = iconByVariant[variant];

  return (
    <a
      href={href}
      className={cn(
        "group inline-flex min-h-10 items-center justify-center",
        "gap-3 px-4 sm:px-[18px]",
        "whitespace-nowrap",
        "font-mono text-[11px] font-semibold uppercase tracking-[0.04em]",
        "transition-all duration-200 ease-out",
        "hover:-translate-y-0.5",
        "focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-ink/30",
        "focus-visible:ring-offset-2",
        variantClasses[variant],
        className,
      )}
    >
      <span>{children}</span>

      <Icon
        size={14}
        strokeWidth={1.8}
        className={cn(
          "shrink-0 transition-transform duration-200 ease-out",
          variant === "dark" || variant === "light"
            ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            : "group-hover:translate-x-1",
        )}
      />
    </a>
  );
}
