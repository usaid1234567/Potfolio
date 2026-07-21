import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import type { InputHTMLAttributes } from "react";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, id, ...props }, ref) => {
    return (
      <label htmlFor={id} className={cn("inline-flex items-center gap-2.5 cursor-pointer group", className)}>
        <span className="relative h-5 w-5 shrink-0">
          <input ref={ref} id={id} type="radio" className="peer sr-only" {...props} />
          <span className="absolute inset-0 rounded-full border border-line bg-base-surface peer-checked:border-violet peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-violet-soft transition-colors" />
          <span className="absolute inset-[5px] rounded-full bg-gradient-signature scale-0 peer-checked:scale-100 transition-transform" />
        </span>
        {label && <span className="text-sm text-mist-muted group-hover:text-mist">{label}</span>}
      </label>
    );
  }
);

Radio.displayName = "Radio";
