import { NextResponse } from 'next/server';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      return NextResponse.json({ success: true, token: 'admin-token', username: ADMIN_USERNAME });
    }
    return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ success: false, error: msg }, { status: 400 });
  }
}
