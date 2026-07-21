import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export interface CaptionProps {
  eyebrow?: boolean;
  className?: string;
  children: ReactNode;
}

/** Small supporting text. Set `eyebrow` for the uppercase mono label style. */
export function Caption({ eyebrow, className, children }: CaptionProps) {
  return (
    <span className={cn(eyebrow ? "text-eyebrow" : "text-xs text-mist-faint", className)}>
      {children}
    </span>
  );
}
