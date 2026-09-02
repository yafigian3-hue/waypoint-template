import { cn } from "../../lib/utils";

export function RouteMarker({
  className,
  variant = "route",
}: {
  className?: string;
  variant?: "route" | "brass";
}) {
  const line = variant === "brass" ? "border-brass" : "border-route";
  const dot = variant === "brass" ? "bg-brass" : "bg-route";

  return (
    <div
      className={cn("relative flex h-[27px] items-center", className)}
      aria-hidden="true"
    >
      <span className={cn("size-2 rounded-full border bg-paper", line)} />
      <span className={cn("flex-1 border-t border-dashed opacity-80", line)} />
      <span className={cn("size-2 rounded-full", dot)} />
    </div>
  );
}
