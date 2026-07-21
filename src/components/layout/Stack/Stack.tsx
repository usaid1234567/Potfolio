import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export interface StackProps {
  direction?: "row" | "column";
  gap?: "xs" | "sm" | "md" | "lg";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between";
  wrap?: boolean;
  className?: string;
  children: ReactNode;
}

const GAP_MAP: Record<NonNullable<StackProps["gap"]>, string> = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
};

const ALIGN_MAP: Record<NonNullable<StackProps["align"]>, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

const JUSTIFY_MAP: Record<NonNullable<StackProps["justify"]>, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
};

export function Stack({
  direction = "column",
  gap = "md",
  align = "stretch",
  justify = "start",
  wrap,
  className,
  children,
}: StackProps) {
  return (
    <div
      className={cn(
        "flex",
        direction === "row" ? "flex-row" : "flex-col",
        GAP_MAP[gap],
        ALIGN_MAP[align],
        JUSTIFY_MAP[justify],
        wrap && "flex-wrap",
        className
      )}
    >
      {children}
    </div>
  );
}
