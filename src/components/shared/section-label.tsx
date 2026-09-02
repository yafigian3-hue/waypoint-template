import { cn } from "../../lib/utils";

export function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 text-[10px] font-medium uppercase leading-[1.4] tracking-[.14em]",
        light ? "text-paper" : "text-slate",
      )}
    >
      <span className="h-px w-6 bg-brass" aria-hidden="true" />
      {children}
    </div>
  );
}
