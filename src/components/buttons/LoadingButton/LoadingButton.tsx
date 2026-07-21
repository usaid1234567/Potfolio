import { forwardRef } from "react";
import { Button } from "../Button/Button";
import type { ButtonProps } from "../Button/Button.types";
import { Loader } from "@/components/feedback/Loader";

export interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean;
  loadingText?: string;
}

export const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>(
  ({ isLoading, loadingText, children, disabled, ...props }, ref) => {
    return (
      <Button ref={ref} disabled={disabled || isLoading} {...props}>
        {isLoading && <Loader size="sm" />}
        {isLoading ? loadingText ?? children : children}
      </Button>
    );
  }
);

LoadingButton.displayName = "LoadingButton";
