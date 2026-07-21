import { cn } from "@/lib/cn";
import type { HeadingProps, HeadingLevel } from "./Heading.types";

const SIZE_MAP: Record<NonNullable<HeadingProps["size"]>, string> = {
  sm: "text-xl md:text-2xl",
  md: "text-2xl md:text-3xl",
  lg: "text-3xl md:text-4xl",
  xl: "text-4xl md:text-5xl",
  "2xl": "text-5xl md:text-6xl",
};

const LEVEL_DEFAULT_SIZE: Record<HeadingLevel, HeadingProps["size"]> = {
  1: "2xl",
  2: "xl",
  3: "lg",
  4: "md",
  5: "sm",
  6: "sm",
};

export function Heading({ level = 2, size, as, id, className, children }: HeadingProps) {
  const Tag = as ?? (`h${level}` as ElementTag);
  const resolvedSize = size ?? LEVEL_DEFAULT_SIZE[level];

  return (
    <Tag id={id} className={cn("text-display", resolvedSize && SIZE_MAP[resolvedSize], className)}>
      {children}
    </Tag>
  );
}

type ElementTag = keyof JSX.IntrinsicElements;
