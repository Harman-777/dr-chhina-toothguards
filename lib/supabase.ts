import { createClient } from "@supabase/supabase-js";

// Strip any trailing path like /rest/v1/ — the Supabase JS SDK only accepts the base URL
function sanitizeUrl(url: string): string {
  try {
    const parsed = new URL(url);
    // Keep only origin (scheme + host), drop any path/query
    return parsed.origin;
  } catch {
    return url.replace(/\/rest\/v1\/?$/, "").replace(/\/+$/, "");
  }
}

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseUrl = sanitizeUrl(rawUrl) || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getServiceSupabase = () => {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY is missing from environment variables.");
  }
  return createClient(supabaseUrl, serviceKey);
};

