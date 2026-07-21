"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  className?: string;
}

export function Tabs({ tabs, defaultTabId, className }: TabsProps) {
  const [activeId, setActiveId] = useState(defaultTabId ?? tabs[0]?.id);
  const activeTab = tabs.find((tab) => tab.id === activeId);

  return (
    <div className={className}>
      <div role="tablist" aria-label="Tabs" className="flex gap-1 border-b border-line">
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveId(tab.id)}
              className={cn(
                "px-4 py-3 text-sm relative transition-colors",
                isActive ? "text-mist" : "text-mist-muted hover:text-mist"
              )}
            >
              {tab.label}
              {isActive && <span className="absolute left-0 right-0 -bottom-px h-px bg-gradient-signature" />}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" id={`panel-${activeTab?.id}`} className="pt-6">
        {activeTab?.content}
      </div>
    </div>
  );
}
