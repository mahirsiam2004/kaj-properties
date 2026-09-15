import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Change these two when your domain is verified ───────────────────────────
// RECIPIENT: where form submissions are delivered
// NOTE: Until you verify kazdevelopers.com at resend.com/domains, this must be
// the email address you used to sign up for Resend (siddiqueab13@gmail.com).
// Once the domain is verified, change FROM to e.g. 'Kaz Properties <noreply@kazdevelopers.com>'
const RECIPIENT = 'siddiqueab13@gmail.com';
const FROM = 'Kaz Properties <onboarding@resend.dev>';
// ─────────────────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, message } = body as {
      name?: string;
      phone?: string;
      email?: string;
      message?: string;
    };

    // Basic validation
    if (!name?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Name and message are required.' },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: FROM,
      to: [RECIPIENT],
      replyTo: email?.trim() || undefined,
      subject: `New Appointment from ${name.trim()}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
          <div style="background:#000;padding:24px 32px;">
            <h1 style="color:#BE9F98;margin:0;font-size:22px;font-weight:400;letter-spacing:2px;text-transform:uppercase;">Kaz Properties</h1>
            <p style="color:#ffffff80;margin:4px 0 0;font-size:12px;letter-spacing:1px;text-transform:uppercase;">New Appointment</p>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;font-size:14px;color:#111;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#888;width:120px;vertical-align:top;">Full Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-weight:600;">${escapeHtml(name.trim())}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#888;vertical-align:top;">Phone</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">${escapeHtml(phone?.trim() || '—')}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#888;vertical-align:top;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">${escapeHtml(email?.trim() || '—')}</td>
              </tr>
              <tr>
                <td style="padding:14px 0 0;color:#888;vertical-align:top;">Message</td>
                <td style="padding:14px 0 0;line-height:1.6;white-space:pre-line;">${escapeHtml(message.trim())}</td>
              </tr>
            </table>
          </div>
          <div style="background:#faf7f5;padding:16px 32px;border-top:1px solid #e5e7eb;font-size:11px;color:#aaa;text-align:center;">
            Sent via Kaz Properties website contact form
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('[contact/route] Resend error:', JSON.stringify(error));
      return NextResponse.json(
        { success: false, error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact/route] Unexpected error:', err);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}

/** Prevent HTML injection in email body */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
