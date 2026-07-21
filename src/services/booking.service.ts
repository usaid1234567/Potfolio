import { TIME_SLOTS } from "@/data/bookingOptions";
import type { BookingSubmission, BookingConfirmation } from "@/types";

export interface BookingSlot {
  id: string;
  startTime: string;
  endTime: string;
}

/**
 * Returns available time slots for a given day. Currently returns the full
 * static slot list — swap this for a real availability lookup once a
 * scheduling backend (e.g. Cal.com, a calendar API) is wired in.
 */
export async function getAvailableSlots(day: string): Promise<string[]> {
  return TIME_SLOTS;
}

/**
 * Submits the full booking (meeting selection + inquiry + attached file names).
 * Talks to `/api/booking`, matching the same fetch-based pattern as
 * `contact.service.ts`. No route exists yet — this is the integration point
 * for a future backend and requires no UI changes to wire up.
 */
export async function submitBooking(payload: BookingSubmission): Promise<BookingConfirmation> {
  const response = await fetch("/api/booking", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok || !data?.success) {
    throw new Error(data?.message || "Failed to submit booking");
  }

  return data;
}
