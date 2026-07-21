"use client";

import { Pencil } from "lucide-react";
import { GlassCard } from "@/components/cards";
import { Heading } from "@/components/typography";
import { LoadingButton, IconButton } from "@/components/buttons";
import { MEETING_PLATFORMS } from "@/data/bookingOptions";
import { SummaryRow } from "./SummaryRow";
import type { MeetingSelection, ProjectInquiry } from "@/types";

export interface BookingSummaryProps {
  meeting: MeetingSelection;
  inquiry: ProjectInquiry;
  isSubmitting?: boolean;
  onEditSchedule: () => void;
  onEditInquiry: () => void;
  onConfirm: () => void;
}

export function BookingSummary({ meeting, inquiry, isSubmitting, onEditSchedule, onEditInquiry, onConfirm }: BookingSummaryProps) {
  const platformLabel = MEETING_PLATFORMS.find((p) => p.value === meeting.platform)?.label ?? "—";

  return (
    <div className="space-y-6">
      <GlassCard>
        <div className="flex items-center justify-between">
          <Heading level={3} size="sm">Meeting</Heading>
          <IconButton icon={<Pencil className="h-3.5 w-3.5" />} label="Edit meeting details" onClick={onEditSchedule} variant="ghost" size="sm" />
        </div>
        <div className="mt-3">
          <SummaryRow label="Day" value={meeting.day ?? "—"} />
          <SummaryRow label="Time" value={meeting.time ?? "—"} />
          <SummaryRow label="Duration" value={meeting.duration ? `${meeting.duration} minutes` : "—"} />
          <SummaryRow label="Time zone" value={meeting.timezone ?? "—"} />
          <SummaryRow label="Platform" value={platformLabel} />
        </div>
      </GlassCard>

      <GlassCard>
        <div className="flex items-center justify-between">
          <Heading level={3} size="sm">Project Inquiry</Heading>
          <IconButton icon={<Pencil className="h-3.5 w-3.5" />} label="Edit project inquiry" onClick={onEditInquiry} variant="ghost" size="sm" />
        </div>
        <div className="mt-3">
          <SummaryRow label="Name" value={inquiry.fullName} />
          <SummaryRow label="Email" value={inquiry.email} />
          {inquiry.company && <SummaryRow label="Company" value={inquiry.company} />}
          <SummaryRow label="Country" value={inquiry.country} />
          <SummaryRow label="Project type" value={inquiry.projectType} />
          <SummaryRow label="Budget" value={`$${inquiry.budget.toLocaleString()}`} />
          <SummaryRow label="Timeline" value={inquiry.timeline} />
        </div>
      </GlassCard>

      <LoadingButton onClick={onConfirm} isLoading={isSubmitting} loadingText="Submitting…" fullWidth>
        Confirm Booking
      </LoadingButton>
    </div>
  );
}
