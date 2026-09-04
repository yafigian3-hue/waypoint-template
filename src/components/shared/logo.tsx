import { Navigation } from "lucide-react";

interface LogoProps {
  children: React.ReactNode;
  className?: string;
}

export function Logo({ children, className = "" }: LogoProps) {
  return (
    <a
      href="#top"
      className={`group inline-flex items-center gap-3 font-display text-lg font-semibold tracking-[-0.03em] text-ink transition-colors duration-300 hover:text-brass ${className}`}
      aria-label={`${children} home`}
    >
      <span className="relative grid size-9 shrink-0 place-items-center border border-ink bg-ink text-paper shadow-[3px_3px_0_rgba(184,134,63,0.72)] transition-all duration-300 group-hover:bg-brass group-hover:text-ink group-hover:shadow-[1px_1px_0_rgba(18,24,31,0.8)]">
        <Navigation size={16} strokeWidth={2.1} aria-hidden="true" />
        <span
          className="absolute -right-1 -top-1 size-2 border border-paper bg-brass"
          aria-hidden="true"
        />
      </span>
      <span className="leading-none">{children}</span>
    </a>
  );
}
  