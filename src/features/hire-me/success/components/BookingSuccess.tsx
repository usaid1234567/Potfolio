import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/cards";
import { Heading, Text } from "@/components/typography";
import { BUTTON_BASE, BUTTON_VARIANTS, BUTTON_SIZES } from "@/components/buttons/Button/Button.styles";
import { cn } from "@/lib/cn";
import { ROUTES } from "@/constants";
import { SummaryRow } from "@/features/hire-me/summary";
import type { MeetingSelection, BookingConfirmation } from "@/types";

export interface BookingSuccessProps {
  confirmation: BookingConfirmation;
  meeting: MeetingSelection;
}

export function BookingSuccess({ confirmation, meeting }: BookingSuccessProps) {
  return (
    <GlassCard className="text-center max-w-lg mx-auto">
      <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto" aria-hidden="true" />
      <Heading level={2} size="md" className="mt-4">
        Booking confirmed
      </Heading>
      <Text size="lg" className="mt-2">
        Confirmation #{confirmation.confirmationId} — a calendar invite is on its way to your inbox.
      </Text>

      <div className="text-left mt-6">
        <SummaryRow label="Day" value={meeting.day ?? "—"} />
        <SummaryRow label="Time" value={meeting.time ?? "—"} />
        <SummaryRow label="Duration" value={meeting.duration ? `${meeting.duration} minutes` : "—"} />
      </div>

      <Text size="sm" tone="faint" className="mt-6">
        Expect a response within {confirmation.expectedResponseHours} hours. Next step: I'll confirm
        or propose an alternate time by email.
      </Text>

      <div className="flex flex-wrap justify-center gap-3 mt-8">
        <Link href={ROUTES.home} className={cn(BUTTON_BASE, BUTTON_VARIANTS.secondary, BUTTON_SIZES.md)}>
          Back to Home
        </Link>
        <Link href={ROUTES.projects} className={cn(BUTTON_BASE, BUTTON_VARIANTS.outline, BUTTON_SIZES.md)}>
          View Projects
        </Link>
      </div>
    </GlassCard>
  );
}
