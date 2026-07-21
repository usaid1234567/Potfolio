import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import { BUTTON_BASE, BUTTON_VARIANTS } from "../Button/Button.styles";
import type { ButtonVariant } from "../Button/Button.types";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  icon: ReactNode;
  /** Required for accessibility since the button has no visible text */
  label: string;
}

const ICON_SIZES = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-13 w-13",
} as const;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant = "ghost", size = "md", icon, label, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        aria-label={label}
        className={cn(BUTTON_BASE, BUTTON_VARIANTS[variant], ICON_SIZES[size], "p-0", className)}
        {...props}
      >
        {icon}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
