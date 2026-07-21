"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";
import { Input, Textarea, Select, Combobox } from "@/components/inputs";
import { Label } from "@/components/typography";
import { GlassCard } from "@/components/cards";
import { LoadingButton } from "@/components/buttons";
import { inquirySchema, type InquiryFormValues } from "@/lib/inquirySchema";
import { PROJECT_TYPES, PROJECT_TIMELINES } from "@/data/bookingOptions";
import { COUNTRIES } from "@/data/countries";
import { toSelectOptions } from "@/utils/toSelectOptions";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { cardGrid, cardItem } from "@/animations/cards";

export interface ProjectInquiryFormProps {
  onSubmit: (values: InquiryFormValues) => void;
  isSubmitting?: boolean;
}

const countryOptions = toSelectOptions(COUNTRIES);

export function ProjectInquiryForm({ onSubmit, isSubmitting }: ProjectInquiryFormProps) {
  const variants = useAnimationVariants({ cardGrid, cardItem });
  const { register, handleSubmit, control, formState: { errors } } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
  });

  return (
    <GlassCard>
      <motion.form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate initial="hidden" animate="visible" variants={variants.cardGrid}>
        <motion.div variants={variants.cardItem} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <Label required htmlFor="fullName">Full Name</Label>
            <Input id="fullName" className="mt-2" error={errors.fullName?.message} {...register("fullName")} />
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
            <Label required htmlFor="country">Country</Label>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Combobox
                  id="country"
                  label="Country"
                  options={countryOptions}
                  placeholder="Search your country…"
                  value={field.value ?? ""}
                  onChange={field.onChange}
                  error={errors.country?.message}
                  className="mt-2"
                />
              )}
            />
          </div>
          <div>
            <Label required htmlFor="projectType">Project Type</Label>
            <Select id="projectType" className="mt-2" placeholder="Select a project type" options={toSelectOptions(PROJECT_TYPES)} error={errors.projectType?.message} {...register("projectType")} />
          </div>
          <div>
            <Label required htmlFor="budget">Your Budget (USD)</Label>
            <div className="relative mt-2">
              <DollarSign className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-mist-faint" />
              <Input
                id="budget"
                type="number"
                min={1}
                step="any"
                placeholder="e.g. 500"
                className="pl-9"
                error={errors.budget?.message}
                {...register("budget")}
              />
            </div>
          </div>
          <div>
            <Label required htmlFor="timeline">Timeline</Label>
            <Select id="timeline" className="mt-2" placeholder="Select a timeline" options={toSelectOptions(PROJECT_TIMELINES)} error={errors.timeline?.message} {...register("timeline")} />
          </div>
        </motion.div>

        <motion.div variants={variants.cardItem}>
          <Label required htmlFor="description">Project Description</Label>
          <Textarea id="description" className="mt-2" rows={5} error={errors.description?.message} {...register("description")} />
        </motion.div>

        <motion.div variants={variants.cardItem}>
          <Label htmlFor="additionalNotes">Additional Notes</Label>
          <Textarea id="additionalNotes" className="mt-2" rows={3} {...register("additionalNotes")} />
        </motion.div>

        <motion.div variants={variants.cardItem}>
          <LoadingButton type="submit" isLoading={isSubmitting} loadingText="Reviewing…" fullWidth>
            Continue to Summary
          </LoadingButton>
        </motion.div>
      </motion.form>
    </GlassCard>
  );
}
