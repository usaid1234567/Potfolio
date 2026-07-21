import { z } from "zod";

export const meetingSchema = z.object({
  day: z.string().min(1, "Select a day"),
  time: z.string().min(1, "Select a time slot"),
  duration: z.union([z.literal(30), z.literal(60), z.literal(90)]),
  timezone: z.string().min(1, "Select a time zone"),
  platform: z.enum(["zoom", "google-meet", "teams", "discord"]),
});

export type MeetingSchemaValues = z.infer<typeof meetingSchema>;
