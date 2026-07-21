import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export interface SectionProps {
  id?: string;
  className?: string;
  glow?: boolean;
  children: ReactNode;
}

/** Vertical rhythm wrapper for a page section. Combine with `Container` for content width. */
export function Section({ id, className, glow, children }: SectionProps) {
  return (
    <section id={id} className={cn("section relative", glow && "bg-signature-glow", className)}>
      {children}
    </section>
  );
}
