"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Section, Container } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { Alert } from "@/components/feedback";
import { Button } from "@/components/buttons";
import { useMeetingScheduler } from "@/hooks/useMeetingScheduler";
import { useBookingWizard } from "@/hooks/useBookingWizard";
import { MeetingScheduler } from "@/features/hire-me/scheduler";
import { ProjectInquiryForm } from "@/features/hire-me/inquiry-form";
import { BookingSummary } from "@/features/hire-me/summary";
import { BookingSuccess } from "@/features/hire-me/success";
import { WizardStepIndicator } from "./WizardStepIndicator";
import { pageTransition } from "@/animations/pageTransition";
import type { InquiryFormValues } from "@/lib/inquirySchema";

export function BookingWizard() {
  const scheduler = useMeetingScheduler();
  const wizard = useBookingWizard();

  function handleInquirySubmit(values: InquiryFormValues) {
    wizard.setInquiry(values);
    wizard.goToStep("summary");
  }

  return (
    <Section id="booking-wizard" className="border-t border-line">
      <Container className="max-w-2xl">
        <div className="text-center mb-10">
          <Caption eyebrow>Book a Consultation</Caption>
          <Heading level={2} size="lg" className="mt-3">
            {wizard.step === "success" ? "You're all set." : "Set up the call."}
          </Heading>
          <Text size="lg" className="mt-3">
            {wizard.step === "success"
              ? "Confirmation details are below."
              : "Pick a time, then tell me about the project."}
          </Text>
        </div>

        <WizardStepIndicator current={wizard.step} />

      <div>
            {wizard.step === "schedule" && (
              <div className="space-y-6">
                <MeetingScheduler scheduler={scheduler} />
                <Button onClick={() => wizard.goToStep("inquiry")} disabled={!scheduler.isComplete} fullWidth>
                  Continue to Project Details
                </Button>
              </div>
            )}

            {wizard.step === "inquiry" && (
              <div className="space-y-4">
                <ProjectInquiryForm onSubmit={handleInquirySubmit} />
                <Button variant="ghost" onClick={() => wizard.goToStep("schedule")} fullWidth>
                  Back to Schedule
                </Button>
              </div>
            )}

            {wizard.step === "summary" && wizard.inquiry && (
              <div className="space-y-4">
                {wizard.submitError && <Alert tone="error">{wizard.submitError}</Alert>}
                <BookingSummary
                  meeting={scheduler.selection}
                  inquiry={wizard.inquiry}
                  isSubmitting={wizard.isSubmitting}
                  onEditSchedule={() => wizard.goToStep("schedule")}
                  onEditInquiry={() => wizard.goToStep("inquiry")}
                  onConfirm={() => wizard.confirmBooking(scheduler.selection)}
                />
              </div>
            )}

            {wizard.step === "success" && wizard.confirmation && (
              <BookingSuccess confirmation={wizard.confirmation} meeting={scheduler.selection} />
            )}
     </div>
      </Container>
    </Section>
  );
}
