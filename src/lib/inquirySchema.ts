import { z } from "zod";

export const inquirySchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  company: z.string().optional(),
  country: z.string().min(1, "Select a country"),
  projectType: z.string().min(1, "Select a project type"),
  budget: z.coerce.number({ invalid_type_error: "Enter your budget as a number" }).positive("Enter a budget greater than 0"),
  timeline: z.string().min(1, "Select a timeline"),
  description: z.string().min(20, "Add a bit more detail (at least 20 characters)"),
  additionalNotes: z.string().optional(),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;
