import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import { FIELD_BASE } from "../Input/Input";
import type { TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, className, rows = 5, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          ref={ref}
          rows={rows}
          aria-invalid={Boolean(error)}
          className={cn(FIELD_BASE, "h-auto py-3 resize-y", error && "border-rose-400/60", className)}
          {...props}
        />
        {error && <p className="text-xs text-rose-400 mt-1.5">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
