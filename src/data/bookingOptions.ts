import type { DayOption, MeetingDuration, MeetingPlatform } from "@/types";

export const AVAILABLE_DAYS: DayOption[] = [
  { id: "monday", label: "Monday", available: true },
  { id: "tuesday", label: "Tuesday", available: true },
  { id: "wednesday", label: "Wednesday", available: true },
  { id: "thursday", label: "Thursday", available: true },
  { id: "friday", label: "Friday", available: true },
  { id: "saturday", label: "Saturday", available: true },
  { id: "sunday", label: "Sunday", available: false },
];

export const TIME_SLOTS: string[] = ["09:00", "10:00", "11:00", "01:00 PM", "03:00 PM", "05:00 PM"];

export const MEETING_DURATIONS: { label: string; value: MeetingDuration }[] = [
  { label: "30 Minutes", value: 30 },
  { label: "60 Minutes", value: 60 },
  { label: "90 Minutes", value: 90 },
];

export const MEETING_PLATFORMS: { label: string; value: MeetingPlatform; icon: string }[] = [
  { label: "Zoom", value: "zoom", icon: "video" },
  { label: "Google Meet", value: "google-meet", icon: "video" },
  { label: "Microsoft Teams", value: "teams", icon: "users" },
  { label: "Discord", value: "discord", icon: "message-circle" },
];

export const PROJECT_TYPES: string[] = [
  "New product build", "Existing product overhaul", "Feature addition",
  "Architecture review", "Performance audit", "Other",
];

export const BUDGET_RANGES: string[] = [
  "Under $5,000", "$5,000 – $15,000", "$15,000 – $50,000", "$50,000+", "Not sure yet",
];

export const PROJECT_TIMELINES: string[] = [
  "ASAP", "Within 1 month", "1–3 months", "3+ months", "Flexible",
];
