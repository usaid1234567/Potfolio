"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useTheme } from "@/hooks/useTheme";

type ThemeContextValue = ReturnType<typeof useTheme>;

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const themeState = useTheme();
  return <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useThemeContext must be used within ThemeProvider");
  return ctx;
}
