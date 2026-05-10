import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:8px 0;color:#666;font-size:13px;width:160px;vertical-align:top;">${label}</td>
      <td style="padding:8px 0;font-size:14px;font-weight:500;">${value || "—"}</td>
    </tr>`;
}

function photoRow(label: string, url: string) {
  return `
    <tr>
      <td style="padding:8px 0;color:#666;font-size:13px;width:160px;vertical-align:top;">${label}</td>
      <td style="padding:8px 0;font-size:14px;">
        <a href="${url}" style="color:#b8972e;">${url}</a>
      </td>
    </tr>`;
}

function section(title: string, content: string) {
  return `
    <div style="margin-top:24px;">
      <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#b8972e;">${title}</p>
      <table style="width:100%;border-collapse:collapse;border-top:1px solid #eee;">
        ${content}
      </table>
    </div>`;
}

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? "");

  try {
    const body = await req.json();

    const {
      firstName, lastName, cityState, email, phone, instagram, language,
      eyeColor, hairColor, ethnicity, tattoos, piercings,
      bio, languagesSpoken, eventsWorked, brandsRepresented,
      headshotUrl, fullLengthUrl, eventPhotoUrl,
    } = body;

    const html = `
      <div style="font-family:sans-serif;max-width:640px;margin:0 auto;color:#111;">
        <div style="background:#1a1a2e;padding:24px;border-radius:12px 12px 0 0;">
          <h2 style="color:#b8972e;margin:0;font-size:20px;">New Talent Application</h2>
          <p style="color:#aaa;margin:4px 0 0;font-size:13px;">Aileen Talent Agency</p>
        </div>
        <div style="background:#fff;padding:24px;border:1px solid #eee;border-top:none;border-radius:0 0 12px 12px;">
          ${section("Personal Information", `
            ${row("Name", `${firstName} ${lastName}`)}
            ${row("City / State", cityState)}
            ${row("Email", email)}
            ${row("Phone", phone)}
            ${row("Instagram", instagram ? `@${instagram}` : "—")}
            ${row("Language", language)}
          `)}
          ${section("Appearance", `
            ${row("Eye Color", eyeColor)}
            ${row("Hair Color", hairColor)}
            ${row("Ethnicity", ethnicity)}
            ${row("Tattoos", tattoos)}
            ${row("Piercings", piercings)}
          `)}
          ${section("Other", `
            ${row("Languages Spoken", languagesSpoken)}
            ${row("Events / Trade Shows", eventsWorked || "—")}
            ${row("Brands Represented", brandsRepresented || "—")}
          `)}
          <div style="margin-top:24px;padding:16px;background:#fafaf8;border-radius:8px;border-left:3px solid #b8972e;">
            <p style="margin:0 0 8px;font-size:13px;color:#666;font-weight:700;">Bio</p>
            <p style="margin:0;font-size:14px;line-height:1.7;white-space:pre-wrap;">${bio}</p>
          </div>
          ${section("Photos", `
            ${headshotUrl   ? photoRow("Headshot", headshotUrl) : ""}
            ${fullLengthUrl ? photoRow("Full Length", fullLengthUrl) : ""}
            ${eventPhotoUrl ? photoRow("Event Photo", eventPhotoUrl) : ""}
          `)}
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM ?? "onboarding@resend.dev",
      to: [process.env.CONTACT_EMAIL ?? "aileentalent@gmail.com"],
      replyTo: email,
      subject: `New Talent Application — ${firstName} ${lastName}`,
      html,
    });

    if (error) {
      console.error("[resend]", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[join]", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
