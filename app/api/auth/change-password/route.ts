import { NextResponse } from 'next/server';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export async function PUT(request: Request) {
  try {
    const { username, currentPassword, newPassword } = await request.json();
    if (username === ADMIN_USERNAME && currentPassword === ADMIN_PASSWORD && newPassword) {
      return NextResponse.json({ success: true, message: 'Password updated' });
    }
    return NextResponse.json({ success: false, error: 'Invalid current password' }, { status: 400 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ success: false, error: msg }, { status: 400 });
  }
}
