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
    "border border-ink bg-ink text-paper shadow-[4px_4px_0_rgba(184,134,63,0.7)]",
    "hover:-translate-y-0.5 hover:translate-x-0.5 hover:bg-brass hover:text-ink hover:shadow-[2px_2px_0_rgba(18,24,31,0.8)]",
  ].join(" "),

  light: [
    "border border-paper bg-paper text-ink shadow-[4px_4px_0_rgba(184,134,63,0.55)]",
    "hover:-translate-y-0.5 hover:translate-x-0.5 hover:bg-brass hover:text-ink hover:shadow-[2px_2px_0_rgba(18,24,31,0.8)]",
  ].join(" "),

  text: [
    "border border-slate/25 bg-transparent text-ink",
    "hover:border-brass hover:bg-brass/10 hover:text-ink",
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
        "group inline-flex min-h-11 w-full items-center justify-center sm:w-auto",
        "gap-3 px-5 py-2.5 sm:px-6",
        "whitespace-nowrap",
        "font-mono text-[10px] font-semibold uppercase tracking-[0.14em]",
        "transition-all duration-300 ease-out",
        "active:translate-x-0 active:translate-y-0 active:shadow-none",
        "focus-visible:outline-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
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
