import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// Initialize the Supabase client (for public frontend use)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Initialize the Supabase Admin client (for backend API use to bypass RLS)
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;
export const supabaseAdmin = supabaseServiceKey 
  ? createClient(supabaseUrl, supabaseServiceKey) 
  : supabase;
