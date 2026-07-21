import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import { BUTTON_BASE, BUTTON_VARIANTS, BUTTON_SIZES } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", fullWidth, leftIcon, rightIcon, className, children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          BUTTON_BASE,
          BUTTON_VARIANTS[variant],
          BUTTON_SIZES[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
