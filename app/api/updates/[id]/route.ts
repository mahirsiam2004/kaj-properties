import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import Update from '@/lib/models/Update';

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await dbConnect();
    const { id } = await params;
    const body = await request.json();
    const update = await Update.findByIdAndUpdate(id, body, { new: true });
    if (!update) return NextResponse.json({ success: false, error: 'Update not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: update });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ success: false, error: msg }, { status: 400 });
  }
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await dbConnect();
    const { id } = await params;
    const update = await Update.findByIdAndDelete(id);
    if (!update) return NextResponse.json({ success: false, error: 'Update not found' }, { status: 404 });
    return NextResponse.json({ success: true, message: 'Update deleted' });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ success: false, error: msg }, { status: 400 });
  }
}
