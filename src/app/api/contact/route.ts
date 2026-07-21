import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { contactSchema } from "@/lib/contactSchema";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid form data",
          issues: parsed.error.flatten().fieldErrors,
        },
        {
          status: 400,
        }
      );
    }

    const {
      name,
      email,
      company,
      subject,
      projectType,
      budget,
      message,
    } = parsed.data;

    if (!resend) {
      console.error("RESEND_API_KEY is not configured");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured",
        },
        {
          status: 500,
        }
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New Contact Form - ${subject}`,
      text: `
New Contact Request

Name: ${name}
Email: ${email}
Company: ${company || "-"}

Project Type: ${projectType}
Budget: ${budget || "-"}

Message:
${message}
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

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}