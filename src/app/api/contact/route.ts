import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? "");
  try {
    const body = await req.json();
    const { name, email, company, projectType, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM ?? "onboarding@resend.dev",
      to: [process.env.CONTACT_EMAIL ?? "aileentalent@gmail.com"],
      replyTo: email,
      subject: `New Booking Inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
          <div style="background: #1a1a2e; padding: 24px; border-radius: 12px 12px 0 0;">
            <h2 style="color: #b8972e; margin: 0; font-size: 20px;">New Booking Inquiry</h2>
            <p style="color: #aaa; margin: 4px 0 0; font-size: 13px;">Aileen Talent Agency</p>
          </div>
          <div style="background: #fff; padding: 24px; border: 1px solid #eee; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px; width: 130px; vertical-align: top;">Name</td>
                <td style="padding: 8px 0; font-size: 14px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top;">Email</td>
                <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #b8972e;">${email}</a></td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top;">Company</td>
                <td style="padding: 8px 0; font-size: 14px;">${company}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top;">Project Type</td>
                <td style="padding: 8px 0; font-size: 14px;">${projectType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top;">Budget</td>
                <td style="padding: 8px 0; font-size: 14px;">${budget}</td>
              </tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: #fafaf8; border-radius: 8px; border-left: 3px solid #b8972e;">
              <p style="margin: 0; font-size: 13px; color: #666; font-weight: 600; margin-bottom: 8px;">Message</p>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("[resend]", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
