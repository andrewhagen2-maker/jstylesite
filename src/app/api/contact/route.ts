import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Johana's email — update this before launch
const JOHANA_EMAIL = process.env.CONTACT_EMAIL ?? "hello@jstyle.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, service, message, website } = body;

    // Honeypot: bots fill hidden fields, humans don't
    if (website) {
      // Silently return success so bots think it worked
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      // Dev mode: log to console if key not configured
      console.log("📬 [DEV] Contact form submission:", { name, email, service, message });
      return NextResponse.json({ success: true }, { status: 200 });
    }

    await resend.emails.send({
      from: "J.Style Contact Form <onboarding@resend.dev>",
      to: JOHANA_EMAIL,
      replyTo: email,
      subject: `New inquiry from ${name}${service ? ` — ${service}` : ""}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px; background: #FBF7F0; color: #1A1A1A;">
          <div style="border-top: 3px solid #C9A84C; padding-top: 24px; margin-bottom: 32px;">
            <h1 style="color: #6D2B3D; font-size: 28px; font-weight: 300; margin: 0 0 4px 0;">New Client Inquiry</h1>
            <p style="color: #999; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; margin: 0;">J.Style Contact Form</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8D5A3; color: #6D2B3D; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; width: 130px; vertical-align: top;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8D5A3; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8D5A3; color: #6D2B3D; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; vertical-align: top;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8D5A3; font-size: 14px;">
                <a href="mailto:${email}" style="color: #6D2B3D; text-decoration: none;">${email}</a>
              </td>
            </tr>
            ${service ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8D5A3; color: #6D2B3D; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; vertical-align: top;">Service</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8D5A3; font-size: 14px;">${service}</td>
            </tr>
            ` : ""}
          </table>

          <div style="margin-top: 24px;">
            <p style="color: #6D2B3D; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; margin: 0 0 12px 0;">Message</p>
            <div style="padding: 20px; background: #F5E6C8; border-left: 3px solid #C9A84C; font-size: 14px; line-height: 1.8;">
              ${message.replace(/\n/g, "<br/>")}
            </div>
          </div>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #E8D5A3;">
            <a
              href="mailto:${email}"
              style="display: inline-block; background: #6D2B3D; color: #FBF7F0; padding: 12px 28px; text-decoration: none; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-family: Arial, sans-serif;"
            >
              Reply to ${name}
            </a>
          </div>

          <p style="margin-top: 40px; font-size: 11px; color: #999; font-family: Arial, sans-serif;">
            This message was submitted via jstyle.com/contact
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
