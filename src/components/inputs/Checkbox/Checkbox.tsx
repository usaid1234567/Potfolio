import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import { Check } from "lucide-react";
import type { InputHTMLAttributes } from "react";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, id, ...props }, ref) => {
    return (
      <label htmlFor={id} className={cn("inline-flex items-center gap-2.5 cursor-pointer group", className)}>
        <span className="relative h-5 w-5 shrink-0">
          <input ref={ref} id={id} type="checkbox" className="peer sr-only" {...props} />
          <span className="absolute inset-0 rounded-md border border-line bg-base-surface peer-checked:bg-gradient-signature peer-checked:border-transparent peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-violet-soft transition-colors" />
          <Check className="absolute inset-0 m-auto h-3.5 w-3.5 text-onbrand opacity-0 peer-checked:opacity-100 pointer-events-none" />
        </span>
        {label && <span className="text-sm text-mist-muted group-hover:text-mist">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
