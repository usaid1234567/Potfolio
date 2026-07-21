import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import { ChevronDown } from "lucide-react";
import { FIELD_BASE } from "../Input/Input";
import type { SelectHTMLAttributes } from "react";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  placeholder?: string;
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, placeholder, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        <div className="relative">
          <select
            ref={ref}
            aria-invalid={Boolean(error)}
            className={cn(FIELD_BASE, "appearance-none pr-10", error && "border-rose-400/60", className)}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-mist-faint" />
        </div>
        {error && <p className="text-xs text-rose-400 mt-1.5">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
