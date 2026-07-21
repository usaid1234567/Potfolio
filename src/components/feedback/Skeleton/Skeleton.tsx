import { cn } from "@/lib/cn";

export interface SkeletonProps {
  variant?: "text" | "circle" | "block";
  className?: string;
}

const VARIANT_MAP: Record<NonNullable<SkeletonProps["variant"]>, string> = {
  text: "h-4 w-full rounded-sm",
  circle: "rounded-full aspect-square",
  block: "rounded-lg w-full h-32",
};

export function Skeleton({ variant = "text", className }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("animate-pulse bg-white/5", VARIANT_MAP[variant], className)}
    />
  );
}
