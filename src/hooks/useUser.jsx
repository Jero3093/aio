import { createSupabaseClient } from "@/utils/supabase/client";

async function useUser({ userId }) {
  const supabase = createSupabaseClient();

  try {
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("id", userId);

    if (error) return null;

    if (data[0]?.id) {
      return data[0];
    }
  } catch (error) {
    console.log(error?.message);
  }
}

export default useUser;
