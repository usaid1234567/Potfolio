"use client";

import { useEffect } from "react";

export function useEscapeKey(isActive: boolean, onEscape: () => void) {
  useEffect(() => {
    if (!isActive) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && onEscape();
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isActive, onEscape]);
}
