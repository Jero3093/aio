import { createSupabaseClient } from "@/utils/supabase/client";

async function useUsers({ companyId }) {
  const supabase = createSupabaseClient();

  try {
    const { data: users, error } = await supabase
      .from("users")
      .select("*")
      .eq("company_id", companyId);

    if (error) throw new Error(error.message);

    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export default useUsers;
