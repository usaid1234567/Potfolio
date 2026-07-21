import { cn } from "@/lib/cn";
import type { LabelHTMLAttributes } from "react";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export function Label({ required, className, children, ...props }: LabelProps) {
  return (
    <label className={cn("text-sm font-medium text-mist", className)} {...props}>
      {children}
      {required && <span className="text-violet-soft ml-1">*</span>}
    </label>
  );
}
