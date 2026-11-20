import { createClient } from "@supabase/supabase-js";
import { processFetch } from "next/dist/client/components/router-reducer/fetch-server-response";

export const supabase = createClient (
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
)