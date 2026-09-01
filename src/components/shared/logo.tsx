interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <a
      href="#top"
      className={`font-display text-xl font-semibold text-[var(--ink)] ${className}`}
      aria-label="Waypoint home"
    >
      WAYPOINT
    </a>
  );
}
