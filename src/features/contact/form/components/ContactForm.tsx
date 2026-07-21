"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Section, Container } from "@/components/layout";
import { Heading, Text, Caption, Label } from "@/components/typography";
import { Input, Textarea, Select, Checkbox } from "@/components/inputs";
import { GlassCard } from "@/components/cards";
import { LoadingButton } from "@/components/buttons";
import { Alert } from "@/components/feedback";
import { contactSchema, type ContactFormValues } from "@/lib/contactSchema";
import { submitContactForm } from "@/services/contact.service";
import { PROJECT_TYPES, BUDGET_RANGES } from "@/data/bookingOptions";
import { toSelectOptions } from "@/utils/toSelectOptions";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { register, handleSubmit, control, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { consent: undefined as unknown as true },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      setStatus("idle");
      await submitContactForm(values);
      setStatus("success");
      reset();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Please try again in a moment.");
      setStatus("error");
    }
  }

  return (
    <Section id="contact-form" className="border-t border-line">
      <Container className="max-w-2xl">
        <div className="text-center">
          <Caption eyebrow>Send a Message</Caption>
          <Heading level={2} size="lg" className="mt-3">
            Tell me what&apos;s on your mind.
          </Heading>
          <Text size="lg" className="mt-3">
            I read every message myself — no sales team in between.
          </Text>
        </div>

        <GlassCard className="mt-10">
          {status === "success" && <Alert tone="success" title="Message sent" className="mb-5">Thanks — I'll get back to you within a business day.</Alert>}
          {status === "error" && <Alert tone="error" title="Something went wrong" className="mb-5">{errorMessage || "Please try again in a moment."}</Alert>}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <Label required htmlFor="name">Full Name</Label>
                <Input id="name" className="mt-2" error={errors.name?.message} {...register("name")} />
              </div>
              <div>
                <Label required htmlFor="email">Email</Label>
                <Input id="email" type="email" className="mt-2" error={errors.email?.message} {...register("email")} />
              </div>
              <div>
                <Label htmlFor="company">Company (optional)</Label>
                <Input id="company" className="mt-2" {...register("company")} />
              </div>
              <div>
                <Label required htmlFor="subject">Subject</Label>
                <Input id="subject" className="mt-2" error={errors.subject?.message} {...register("subject")} />
              </div>
              <div>
                <Label required htmlFor="projectType">Project Type</Label>
                <Select id="projectType" className="mt-2" placeholder="Select a project type" options={toSelectOptions(PROJECT_TYPES)} error={errors.projectType?.message} {...register("projectType")} />
              </div>
              <div>
                <Label htmlFor="budget">Budget (optional)</Label>
                <Select id="budget" className="mt-2" placeholder="Select a budget range" options={toSelectOptions(BUDGET_RANGES)} {...register("budget")} />
              </div>
            </div>

            <div>
              <Label required htmlFor="message">Message</Label>
              <Textarea id="message" className="mt-2" rows={5} error={errors.message?.message} {...register("message")} />
            </div>

            <Controller
              name="consent"
              control={control}
              render={({ field }) => (
                <div>
                  <Checkbox
                    label="I agree to be contacted about this inquiry."
                    checked={field.value === true}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                  {errors.consent && <p className="text-xs text-rose-400 mt-1.5">{errors.consent.message}</p>}
                </div>
              )}
            />

            <LoadingButton type="submit" isLoading={isSubmitting} loadingText="Sending…" fullWidth>
              Send Message
            </LoadingButton>
          </form>
        </GlassCard>
      </Container>
    </Section>
  );
}
