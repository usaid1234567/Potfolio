import { cn } from "@/lib/cn";

export interface LoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

const SIZE_MAP: Record<NonNullable<LoaderProps["size"]>, string> = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-2",
  lg: "h-12 w-12 border-[3px]",
};

export function Loader({ size = "md", className, label = "Loading" }: LoaderProps) {
  return (
    <span
      role="status"
      aria-label={label}
      className={cn("inline-block rounded-full border-line border-t-violet animate-spin", SIZE_MAP[size], className)}
    />
  );
}
