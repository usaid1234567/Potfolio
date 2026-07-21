"use client";

import { useState, useCallback } from "react";
import { useScroll } from "./useScroll";

export function useNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll();

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  return { isOpen, toggle, close, scrolled };
}
