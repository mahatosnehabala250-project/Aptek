import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, service, message } = body;

    // Basic validation
    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: 'Name, phone, and service are required.' },
        { status: 400 }
      );
    }

    // Save inquiry to database
    await db.inquiry.create({
      data: {
        name: String(name).trim(),
        phone: String(phone).trim(),
        service: String(service).trim(),
        message: message ? String(message).trim() : null,
        status: 'new',
      },
    });

    return NextResponse.json(
      { success: true, message: 'Inquiry received successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Inquiry API error:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please try again.' },
      { status: 500 }
    );
  }
}
