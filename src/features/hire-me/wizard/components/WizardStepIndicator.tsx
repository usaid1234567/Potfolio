import { cn } from "@/lib/cn";
import type { BookingStep } from "@/hooks/useBookingWizard";

const STEPS: { id: BookingStep; label: string }[] = [
  { id: "schedule", label: "Schedule" },
  { id: "inquiry", label: "Project" },
  { id: "summary", label: "Summary" },
  { id: "success", label: "Done" },
];

export function WizardStepIndicator({ current }: { current: BookingStep }) {
  const currentIndex = STEPS.findIndex((step) => step.id === current);

  return (
    <ol className="flex items-center justify-center gap-2 mb-10" aria-label="Booking progress">
      {STEPS.map((step, index) => (
        <li key={step.id} className="flex items-center gap-2">
          <span
            aria-current={step.id === current ? "step" : undefined}
            className={cn(
              "h-2 w-2 rounded-full",
              index <= currentIndex ? "bg-gradient-signature" : "bg-white/10"
            )}
          />
          <span className={cn("text-xs font-mono hidden sm:inline", index === currentIndex ? "text-mist" : "text-mist-faint")}>
            {step.label}
          </span>
          {index < STEPS.length - 1 && <span className="h-px w-6 bg-line" aria-hidden="true" />}
        </li>
      ))}
    </ol>
  );
}
