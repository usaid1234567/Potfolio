"use client";

import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";
import { IconButton } from "@/components/buttons/IconButton/IconButton";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useScrollLock } from "@/hooks/useScrollLock";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  className?: string;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, title, className, children }: ModalProps) {
  useEscapeKey(isOpen, onClose);
  useScrollLock(isOpen);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={cn("glass-panel relative w-full max-w-lg max-h-[85vh] overflow-y-auto p-6", className)}
          >
            <div className="flex items-start justify-between gap-4">
              {title && <h2 className="text-display text-xl text-mist">{title}</h2>}
              <IconButton icon={<X className="h-4 w-4" />} label="Close dialog" onClick={onClose} variant="ghost" size="sm" className="ml-auto" />
            </div>
            <div className="mt-4">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
