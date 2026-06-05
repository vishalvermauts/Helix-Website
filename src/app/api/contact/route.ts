import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Send email notification via Resend
    try {
      await resend.emails.send({
        from: 'Helix Engine <onboarding@resend.dev>',
        to: 'vishalvr28@gmail.com',
        subject: `New Contact Form Submission: ${name}`,
        replyTo: email,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      // We don't fail the request here, since the database save was successful
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
