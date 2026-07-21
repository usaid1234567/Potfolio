"use client";

import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";
import { IconButton } from "@/components/buttons/IconButton/IconButton";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useScrollLock } from "@/hooks/useScrollLock";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  side?: "left" | "right";
  title?: string;
  className?: string;
  children: ReactNode;
}

export function Drawer({ isOpen, onClose, side = "right", title, className, children }: DrawerProps) {
  useEscapeKey(isOpen, onClose);
  useScrollLock(isOpen);

  if (typeof document === "undefined") return null;

  const offscreen = side === "right" ? "100%" : "-100%";

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-base-void/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ x: offscreen }}
            animate={{ x: 0 }}
            exit={{ x: offscreen }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "absolute top-0 bottom-0 w-full max-w-sm glass-panel rounded-none p-6 overflow-y-auto",
              side === "right" ? "right-0 border-l" : "left-0 border-r",
              className
            )}
          >
            <div className="flex items-start justify-between gap-4">
              {title && <h2 className="text-display text-xl text-mist">{title}</h2>}
              <IconButton icon={<X className="h-4 w-4" />} label="Close panel" onClick={onClose} variant="ghost" size="sm" className="ml-auto" />
            </div>
            <div className="mt-4">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
