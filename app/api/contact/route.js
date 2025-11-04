import { NextResponse } from "next/server";
import postmark from "postmark";

const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message, taxNumber } = await req.json();

    if (taxNumber) {
      return NextResponse.json(
        { success: false, message: "Spam Detected – Sending Denied" },
        { status: 400 }
      );
    }

    await client.sendEmail({
      From: process.env.POSTMARK_SENDER_EMAIL,
      To: process.env.POSTMARK_SENDER_EMAIL, 
      Subject: `Portfolio Contact Form - ${name}`,
      TextBody: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      HtmlBody: `<strong>Name:</strong> ${name}<br/>
                 <strong>Email:</strong> ${email}<br/><br/>
                 <strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}`,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
