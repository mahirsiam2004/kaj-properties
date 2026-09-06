import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import Update from '@/lib/models/Update';

export async function GET() {
  try {
    await dbConnect();
    const updates = await Update.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: updates });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ success: false, error: msg }, { status: 400 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const update = await Update.create(body);
    return NextResponse.json({ success: true, data: update }, { status: 201 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ success: false, error: msg }, { status: 400 });
  }
}
