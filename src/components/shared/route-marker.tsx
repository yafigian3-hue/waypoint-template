interface RouteMarkerProps {
  className?: string;
  showNumber?: boolean;
  number?: string;
}

export function RouteMarker({
  className = "",
  showNumber = false,
  number,
}: RouteMarkerProps) {
  return (
    <div
      className={`relative flex h-full min-h-[120px] w-8 justify-center ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 border-l border-dashed border-[var(--route-line)]" />

      <span className="relative z-10 mt-1 flex h-3 w-3 items-center justify-center rounded-full border border-[var(--route-line)] bg-[var(--paper)]">
        {showNumber && number ? (
          <span className="absolute left-5 whitespace-nowrap font-mono text-xs text-[var(--route-line)]">
            {number}
          </span>
        ) : null}
      </span>
    </div>
  );
}
