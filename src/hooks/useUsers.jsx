import { createSupabaseClient } from "@/utils/supabase/client";

async function useUsers({ companyId, forVisualizer }) {
  const supabase = createSupabaseClient();

  try {
    if (forVisualizer) {
      const { data: users, error } = await supabase
        .from("users")
        .select("*")
        .eq("company_id", companyId)
        .order("created_at", { ascending: false })
        .limit(12);

      if (error) throw new Error(error.message);

      return users;
    } else {
      const { data: users, error } = await supabase
        .from("users")
        .select("*")
        .eq("company_id", companyId)
        .order("created_at", { ascending: false });

      if (error) throw new Error(error.message);

      return users;
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export default useUsers;
