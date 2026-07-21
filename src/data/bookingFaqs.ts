import type { Faq } from "@/types";

export const BOOKING_FAQS: Faq[] = [
  { id: "response-time", question: "How quickly will I hear back?", answer: "Within one business day — usually sooner. You'll get a confirmation email as soon as the booking lands." },
  { id: "reschedule", question: "Can I reschedule after booking?", answer: "Yes, just reply to the confirmation email with a new time and I'll adjust it." },
  { id: "what-to-prepare", question: "What should I prepare for the call?", answer: "Nothing required — a rough idea of the problem or goal is plenty. Any docs or links are a bonus, not a requirement." },
  { id: "no-slot-fits", question: "None of the slots work for my timezone — what now?", answer: "Use the final contact form below and mention a few times that work; I'll find an overlap." },
  { id: "file-types", question: "What can I attach to the inquiry?", answer: "PDFs, docs, and images up to 10MB each — briefs, mockups, or existing specs are all useful." },
];
