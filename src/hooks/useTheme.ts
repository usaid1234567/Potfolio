"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site.config";
import { SITE_CONFIG } from "@/constants/site";

type Theme = "dark" | "light";

const STORAGE_KEY = SITE_CONFIG.themeStorageKey;
const DEFAULT_THEME = siteConfig.defaultTheme as Theme;

function applyThemeToDocument(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

export function useTheme() {
  // Initial state matches the server-rendered default so hydration never mismatches.
  // The real persisted preference (if any) is picked up in the effect below, after mount.
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if ((stored === "dark" || stored === "light") && stored !== theme) {
      setThemeState(stored);
    }
    // Only run once, on mount — this reconciles with the no-flash inline script in layout.tsx.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    applyThemeToDocument(theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  function setTheme(next: Theme) {
    setThemeState(next);
  }

  return { theme, setTheme };
}
