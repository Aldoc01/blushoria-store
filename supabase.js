import { createClient } from
'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl =
'https://emcdsuboutrbpsofxdjn.supabase.co'

const supabaseKey =
'sb_publishable_duaRAaTPArjd3sqyV69b-Q_N7iOmx2c'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)