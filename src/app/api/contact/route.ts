import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Phase 4: Wire up Resend here
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "J.Style Contact Form <noreply@jstyle.com>",
    //   to: "hello@jstyle.com",
    //   subject: `New inquiry from ${name}`,
    //   html: `
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Service:</strong> ${service || "Not specified"}</p>
    //     <p><strong>Message:</strong><br/>${message}</p>
    //   `,
    // });

    // Placeholder: log to console until Resend is configured
    console.log("Contact form submission:", { name, email, service, message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
