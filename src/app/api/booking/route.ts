import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/inquirySchema";
import { meetingSchema } from "@/lib/meetingSchema";
import { resend } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const payload = body as {
      meeting?: unknown;
      inquiry?: unknown;
    };

    const meetingResult = meetingSchema.safeParse(payload.meeting);
    const inquiryResult = inquirySchema.safeParse(payload.inquiry);

    if (!meetingResult.success || !inquiryResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid booking data",
          issues: {
            meeting: meetingResult.success
              ? undefined
              : meetingResult.error.flatten().fieldErrors,
            inquiry: inquiryResult.success
              ? undefined
              : inquiryResult.error.flatten().fieldErrors,
          },
        },
        {
          status: 400,
        }
      );
    }

    const meeting = meetingResult.data;
    const inquiry = inquiryResult.data;

    // Check if Resend is configured
    if (!resend) {
      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: inquiry.email,
      subject: `New Hire Me Booking - ${inquiry.fullName}`,
      text: `
========================
NEW HIRE ME BOOKING
========================

MEETING DETAILS

Meeting Day: ${meeting.day}
Meeting Time: ${meeting.time}
Meeting Duration: ${meeting.duration} minutes
Timezone: ${meeting.timezone}
Platform: ${meeting.platform}

------------------------

CLIENT DETAILS

Name: ${inquiry.fullName}
Email: ${inquiry.email}
Company: ${inquiry.company || "-"}
Country: ${inquiry.country}

------------------------

PROJECT DETAILS

Project Type: ${inquiry.projectType}
Budget: $${inquiry.budget}
Timeline: ${inquiry.timeline}

Description:
${inquiry.description}

Additional Notes:
${inquiry.additionalNotes || "-"}

========================
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }

    const confirmationId = `BK-${Date.now()
      .toString(36)
      .toUpperCase()}`;

    return NextResponse.json({
      success: true,
      confirmationId,
      expectedResponseHours: 24,
    });
  } catch (error) {
    console.error("BOOKING API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}