import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  company: z.string().optional(),
  subject: z.string().min(2, "Enter a subject"),
  projectType: z.string().min(1, "Select a project type"),
  budget: z.string().optional(),
  message: z.string().min(20, "Add a bit more detail (at least 20 characters)"),
  consent: z.literal(true, { errorMap: () => ({ message: "Consent is required to submit this form" }) }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
