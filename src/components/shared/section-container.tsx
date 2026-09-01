import type { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionContainer({
  children,
  className = "",
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-[1200px] px-6 md:px-8 lg:px-16 ${className}`}
    >
      {children}
    </section>
  );
}
