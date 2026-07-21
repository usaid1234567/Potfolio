"use client";

import { Moon, Sun } from "lucide-react";
import { IconButton } from "@/components/buttons/IconButton/IconButton";
import { useThemeContext } from "@/providers/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <IconButton
      icon={isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      variant="ghost"
      size="sm"
    />
  );
}
