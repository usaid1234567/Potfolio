import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import type { InputHTMLAttributes } from "react";

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ label, className, id, ...props }, ref) => {
    return (
      <label htmlFor={id} className={cn("inline-flex items-center gap-3 cursor-pointer group", className)}>
        <span className="relative h-6 w-11 shrink-0">
          <input ref={ref} id={id} type="checkbox" role="switch" className="peer sr-only" {...props} />
          <span className="absolute inset-0 rounded-full bg-base-surface border border-line peer-checked:bg-gradient-signature peer-checked:border-transparent peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-violet-soft transition-colors" />
          <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-mist transition-transform peer-checked:translate-x-5" />
        </span>
        {label && <span className="text-sm text-mist-muted group-hover:text-mist">{label}</span>}
      </label>
    );
  }
);

Toggle.displayName = "Toggle";
