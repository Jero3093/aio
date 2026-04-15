import { createSupabaseClient } from "@/utils/supabase/client";

async function useClient({ clientId }) {
  const supabase = createSupabaseClient();

  try {
    const { data, error } = await supabase
      .from("clients")
      .select()
      .eq("id", clientId);

    if (error) return null;

    if (data[0]?.id) {
      return data[0];
    }
  } catch (error) {
    console.log(error?.message);
  }
}

export default useClient;
