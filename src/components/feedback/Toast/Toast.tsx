import { cn } from "@/lib/cn";
import { CheckCircle2, AlertTriangle, Info, XCircle, X } from "lucide-react";
import type { ReactNode } from "react";
import type { AlertTone } from "../Alert/Alert";
import styles from "./Toast.module.css";

export interface ToastProps {
  tone?: AlertTone;
  title: string;
  description?: string;
  onDismiss?: () => void;
  className?: string;
}

const TONE_ICON: Record<AlertTone, ReactNode> = {
  info: <Info className="h-5 w-5 text-azure-soft" aria-hidden="true" />,
  success: <CheckCircle2 className="h-5 w-5 text-emerald-400" aria-hidden="true" />,
  warning: <AlertTriangle className="h-5 w-5 text-amber-400" aria-hidden="true" />,
  error: <XCircle className="h-5 w-5 text-rose-400" aria-hidden="true" />,
};

export function Toast({ tone = "info", title, description, onDismiss, className }: ToastProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn("glass-card p-4 flex items-start gap-3 w-full max-w-sm", styles.toast, className)}
    >
      {TONE_ICON[tone]}
      <div className="text-sm flex-1">
        <p className="font-medium text-mist">{title}</p>
        {description && <p className="text-mist-muted mt-0.5">{description}</p>}
      </div>
      {onDismiss && (
        <button onClick={onDismiss} aria-label="Dismiss notification" className="text-mist-faint hover:text-mist">
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
