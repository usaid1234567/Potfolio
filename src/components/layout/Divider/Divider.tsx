import { cn } from "@/lib/cn";

export interface DividerProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Divider({ orientation = "horizontal", className }: DividerProps) {
  if (orientation === "vertical") {
    return <div role="separator" aria-orientation="vertical" className={cn("w-px self-stretch bg-line", className)} />;
  }
  return <hr className={cn("divider-line", className)} />;
}
