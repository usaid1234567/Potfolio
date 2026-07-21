export type MeetingDuration = 30 | 60 | 90;
export type MeetingPlatform = "zoom" | "google-meet" | "teams" | "discord";

export interface DayOption {
  id: string;
  label: string;
  available: boolean;
}

export interface MeetingSelection {
  day: string | null;
  time: string | null;
  duration: MeetingDuration | null;
  timezone: string | null;
  platform: MeetingPlatform | null;
}

export interface ProjectInquiry {
  fullName: string;
  email: string;
  company?: string;
  country: string;
  projectType: string;
  budget: number;
  timeline: string;
  description: string;
  additionalNotes?: string;
}

export interface BookingSubmission {
  meeting: MeetingSelection;
  inquiry: ProjectInquiry;
}

export interface BookingConfirmation {
  success: boolean;
  confirmationId: string;
  expectedResponseHours: number;
}
