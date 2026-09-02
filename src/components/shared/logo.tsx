import { Navigation } from "lucide-react";

interface LogoProps {
  children: React.ReactNode;
  className?: string;
}

export function Logo({ children, className = "" }: LogoProps) {
  return (
    <a
      href="#top"
      className={`flex items-center gap-2 font-display text-xl font-semibold text-[var(--ink)] ${className}`}
      aria-label={`${children} home`}
    >
      <span className="grid size-7 place-items-center bg-ink text-paper">
        <Navigation size={14} strokeWidth={2.2} />
      </span>

      <span>{children}</span>
    </a>
  );
}
