import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

/** Resolves a kebab-case icon key (as stored in data files) to a Lucide icon component. */
export function resolveLucideIcon(kebabName: string, fallback: LucideIcon = Icons.Sparkles): LucideIcon {
  const pascalName = kebabName
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

  return (Icons as unknown as Record<string, LucideIcon>)[pascalName] ?? fallback;
}
