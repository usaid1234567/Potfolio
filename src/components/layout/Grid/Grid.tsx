import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export interface GridProps {
  cols?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
}

const COLS_MAP: Record<NonNullable<GridProps["cols"]>, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};

const GAP_MAP: Record<NonNullable<GridProps["gap"]>, string> = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
};

export function Grid({ cols = 3, gap = "md", className, children }: GridProps) {
  return <div className={cn("grid", COLS_MAP[cols], GAP_MAP[gap], className)}>{children}</div>;
}
