import { NextResponse } from "next/server";
import { getTransport } from "@/lib/mail";
import { site } from "@/lib/site";

function isEmail(value: unknown) {
  return typeof value === "string" && /^\S+@\S+\.\S+$/.test(value);
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const phone = String(body?.phone || "").trim();
    const details = String(body?.details || "").trim();

    if (!name || !details || !isEmail(email)) {
      return NextResponse.json({ error: "Please provide a valid name, email, and message." }, { status: 400 });
    }

    const transport = getTransport();

    const subject = `New FolseTech Lead: ${name}`;
    const text = [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone || "N/A"}`, "", "Message:", details].join("\n");

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2 style="margin:0 0 8px;">New Website Lead</h2>
        <p style="margin:0 0 12px;color:#333;">FolseTech contact form submission</p>
        <table style="border-collapse:collapse;">
          <tr><td style="padding:4px 10px 4px 0;"><b>Name</b></td><td>${escapeHtml(name)}</td></tr>
          <tr><td style="padding:4px 10px 4px 0;"><b>Email</b></td><td>${escapeHtml(email)}</td></tr>
          <tr><td style="padding:4px 10px 4px 0;"><b>Phone</b></td><td>${escapeHtml(phone || "N/A")}</td></tr>
        </table>
        <hr style="margin:16px 0;"/>
        <pre style="white-space:pre-wrap;margin:0;">${escapeHtml(details)}</pre>
      </div>
    `;

    await transport.sendMail({
      from: process.env.MAIL_FROM || `FolseTech Website <no-reply@folsetech.org>`,
      to: site.email,
      replyTo: email,
      subject,
      text,
      html
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Server error while sending email." }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
