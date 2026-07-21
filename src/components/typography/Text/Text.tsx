import { cn } from "@/lib/cn";
import type { TextProps } from "./Text.types";

const SIZE_MAP: Record<NonNullable<TextProps["size"]>, string> = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
};

const TONE_MAP: Record<NonNullable<TextProps["tone"]>, string> = {
  default: "text-mist",
  muted: "text-mist-muted",
  faint: "text-mist-faint",
};

export function Text({ as: Tag = "p", size = "base", tone = "muted", className, children }: TextProps) {
  return (
    <Tag className={cn("text-body", SIZE_MAP[size], TONE_MAP[tone], className)}>
      {children}
    </Tag>
  );
}
