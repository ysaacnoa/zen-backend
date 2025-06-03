import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

const result = dotenv.config();
if (result.error) {
  throw result.error;
}

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    '❌ SUPABASE_URL o SUPABASE_ANON_KEY no están definidos en .env',
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
