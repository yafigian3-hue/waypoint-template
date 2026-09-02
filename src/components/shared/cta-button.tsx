import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

type CtaButtonProps = {
  children: React.ReactNode;
  variant?: "dark" | "light" | "text";
  href?: string;
  className?: string;
};

const variantClasses: Record<NonNullable<CtaButtonProps["variant"]>, string> = {
  dark: "bg-ink text-paper px-[17px]",
  light: "border border-paper/50 bg-paper text-ink px-[17px]",
  text: "px-0 font-medium",
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
        "inline-flex min-h-[42px] items-center justify-center gap-2.5 text-xs font-semibold transition-transform duration-200 hover:-translate-y-0.5",
        variantClasses[variant],
        className,
      )}
    >
      {children}
      <ArrowRight size={15} />
    </a>
  );
}
