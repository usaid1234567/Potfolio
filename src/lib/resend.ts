import { Resend } from "resend";

console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
console.log("CONTACT_EMAIL:", process.env.CONTACT_EMAIL);

export const resend =
  process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : null;