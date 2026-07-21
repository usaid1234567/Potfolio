"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import styles from "./Accordion.module.css";

export interface AccordionItemData {
  id: string;
  title: string;
  content: string;
}

export interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, allowMultiple, className }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([]);

  function toggle(id: string) {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      if (allowMultiple) {
        return isOpen ? prev.filter((i) => i !== id) : [...prev, id];
      }
      return isOpen ? [] : [id];
    });
  }

  return (
    <div className={cn("divide-y divide-line", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id}>
            <button
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-${item.id}`}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-sm font-medium text-mist">{item.title}</span>
              <ChevronDown className={cn("h-4 w-4 text-mist-faint transition-transform", isOpen && "rotate-180")} />
            </button>
            <div id={`accordion-${item.id}`} className={cn(styles.content, isOpen && styles.contentOpen)}>
              <div className={styles.inner}>
                <p className="text-body text-sm pb-4">{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
