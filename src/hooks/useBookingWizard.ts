"use client";

import { useState } from "react";
import { submitBooking } from "@/services/booking.service";
import type { MeetingSelection, ProjectInquiry, BookingConfirmation } from "@/types";

export type BookingStep = "schedule" | "inquiry" | "summary" | "success";

const STEP_ORDER: BookingStep[] = ["schedule", "inquiry", "summary", "success"];

/** Orchestrates the multi-step wizard: step navigation, collected data, and final submission. */
export function useBookingWizard() {
  const [step, setStep] = useState<BookingStep>("schedule");
  const [inquiry, setInquiry] = useState<ProjectInquiry | null>(null);
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function goToStep(next: BookingStep) {
    setStep(next);
  }

function goNext() {
  const index = STEP_ORDER.indexOf(step);

  if (index < STEP_ORDER.length - 1) {
    const nextStep = STEP_ORDER[index + 1];
    if (nextStep) setStep(nextStep);
  }
}

function goBack() {
  const index = STEP_ORDER.indexOf(step);

  if (index > 0) {
    const previousStep = STEP_ORDER[index - 1];
    if (previousStep) setStep(previousStep);
  }
}

  async function confirmBooking(meeting: MeetingSelection) {
    if (!inquiry) return;
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const result = await submitBooking({ meeting, inquiry });
      setConfirmation(result);
      setStep("success");
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Something went wrong submitting your booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    step,
    goToStep,
    goNext,
    goBack,
    inquiry,
    setInquiry,
    confirmation,
    isSubmitting,
    submitError,
    confirmBooking,
  };
}
