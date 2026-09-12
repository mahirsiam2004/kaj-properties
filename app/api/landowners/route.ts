import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT = 'hellokazpnd@gmail.com';
const FROM = 'Kaz Properties <onboarding@resend.dev>';

interface LandownerBody {
  locality?: string;
  landSize?: string;
  address?: string;
  roadWidth?: string;
  roadType?: string;
  facing?: string;
  attractiveFeatures?: string;
  ownerName?: string;
  email?: string;
  phone?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LandownerBody;
    const {
      locality,
      landSize,
      address,
      roadWidth,
      roadType,
      facing,
      attractiveFeatures,
      ownerName,
      email,
      phone,
    } = body;

    // Basic validation
    if (!locality?.trim() || !address?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Locality and Address are required.' },
        { status: 400 }
      );
    }

    const row = (label: string, value?: string) => `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#888;width:180px;vertical-align:top;font-size:13px;">${escapeHtml(label)}</td>
        <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-weight:600;font-size:13px;color:#111;">${escapeHtml(value?.trim() || '—')}</td>
      </tr>`;

    const { error } = await resend.emails.send({
      from: FROM,
      to: [RECIPIENT],
      replyTo: email?.trim() || undefined,
      subject: `New Land Inquiry from ${ownerName?.trim() || locality?.trim()}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
          <!-- Header -->
          <div style="background:#000;padding:24px 32px;">
            <h1 style="color:#BE9F98;margin:0;font-size:22px;font-weight:400;letter-spacing:2px;text-transform:uppercase;">Kaz Properties</h1>
            <p style="color:#ffffff80;margin:4px 0 0;font-size:12px;letter-spacing:1px;text-transform:uppercase;">New Land Inquiry</p>
          </div>

          <!-- Section: Land Information -->
          <div style="padding:28px 32px 8px;">
            <h2 style="margin:0 0 16px;font-size:14px;text-transform:uppercase;letter-spacing:2px;color:#BE9F98;font-weight:700;">Land Information</h2>
            <table style="width:100%;border-collapse:collapse;">
              ${row('Locality', locality)}
              ${row('Size (Kathas)', landSize)}
              ${row('Address', address)}
              ${row('Road Width (Feet)', roadWidth)}
              ${row('Road Type', roadType)}
              ${row('Facing', facing)}
              ${row('Attractive Features', attractiveFeatures)}
            </table>
          </div>

          <!-- Section: Owner Information -->
          <div style="padding:16px 32px 28px;">
            <h2 style="margin:0 0 16px;font-size:14px;text-transform:uppercase;letter-spacing:2px;color:#BE9F98;font-weight:700;">Owner Information</h2>
            <table style="width:100%;border-collapse:collapse;">
              ${row('Land Owner Name', ownerName)}
              ${row('Email', email)}
              ${row('Phone Number', phone)}
            </table>
          </div>

          <!-- Footer -->
          <div style="background:#faf7f5;padding:16px 32px;border-top:1px solid #e5e7eb;font-size:11px;color:#aaa;text-align:center;">
            Sent via Kaz Properties website — Landowners page
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('[landowners/route] Resend error:', JSON.stringify(error));
      return NextResponse.json(
        { success: false, error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[landowners/route] Unexpected error:', err);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
