import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import { Search } from "lucide-react";
import { FIELD_BASE } from "../Input/Input";
import type { InputHTMLAttributes } from "react";

export interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-mist-faint" />
        <input
          ref={ref}
          type="search"
          className={cn(FIELD_BASE, "pl-10", className)}
          {...props}
        />
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
