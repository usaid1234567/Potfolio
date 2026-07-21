import { cn } from "@/lib/cn";
import { CheckCircle2, AlertTriangle, Info, XCircle } from "lucide-react";
import type { ReactNode } from "react";

export type AlertTone = "info" | "success" | "warning" | "error";

export interface AlertProps {
  tone?: AlertTone;
  title?: string;
  className?: string;
  children: ReactNode;
}

const TONE_ICON: Record<AlertTone, ReactNode> = {
  info: <Info className="h-5 w-5 text-azure-soft" aria-hidden="true" />,
  success: <CheckCircle2 className="h-5 w-5 text-emerald-400" aria-hidden="true" />,
  warning: <AlertTriangle className="h-5 w-5 text-amber-400" aria-hidden="true" />,
  error: <XCircle className="h-5 w-5 text-rose-400" aria-hidden="true" />,
};

const TONE_BORDER: Record<AlertTone, string> = {
  info: "border-azure/30",
  success: "border-emerald-400/30",
  warning: "border-amber-400/30",
  error: "border-rose-400/30",
};

export function Alert({ tone = "info", title, className, children }: AlertProps) {
  return (
    <div
      role="alert"
      className={cn("glass-panel border p-4 flex gap-3", TONE_BORDER[tone], className)}
    >
      {TONE_ICON[tone]}
      <div className="text-sm">
        {title && <p className="font-medium text-mist mb-1">{title}</p>}
        <p className="text-mist-muted">{children}</p>
      </div>
    </div>
  );
}
