import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Insert into Supabase using the Admin client to bypass RLS
    const { data, error } = await supabaseAdmin
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          message,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Supabase insertion error:', error);
      return NextResponse.json(
        { error: `Database error: ${error.message} - ${error.details || ''}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully!', data },
      { status: 200 }
    );
  } catch (err: any) {
    console.error('Unexpected error:', err);
    return NextResponse.json(
      { error: err.message || 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
