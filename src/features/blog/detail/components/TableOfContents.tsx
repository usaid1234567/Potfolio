import { Caption } from "@/components/typography";
import type { TocItem } from "@/types";

export interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="glass-panel p-5">
      <Caption eyebrow>On this page</Caption>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-sm text-mist-muted hover:text-mist transition-colors">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
