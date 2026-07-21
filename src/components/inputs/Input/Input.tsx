import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const FIELD_BASE =
  "w-full rounded-md bg-base-surface border border-line px-4 h-11 text-sm text-mist placeholder:text-mist-faint transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-soft disabled:opacity-40 disabled:pointer-events-none";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          aria-invalid={Boolean(error)}
          className={cn(FIELD_BASE, error && "border-rose-400/60", className)}
          {...props}
        />
        {error && <p className="text-xs text-rose-400 mt-1.5">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
