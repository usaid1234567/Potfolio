import { cn } from "@/lib/cn";
import type { ReactNode, HTMLAttributes } from "react";

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  children: ReactNode;
}

/** Base surface reused by every specialized card in the library. */
export function GlassCard({ hoverable = true, className, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn("glass-card p-6 h-full", !hoverable && "hover:-translate-y-0", className)}
      {...props}
    >
      {children}
    </div>
  );
}
