import { createSupabaseClient } from "@/utils/supabase/client";

async function useSales({ companyId, forVisualizer }) {
  const supabase = createSupabaseClient();

  try {
    if (forVisualizer) {
      const { data, error } = await supabase
        .from("sales")
        .select()
        .eq("company_id", companyId)
        .order("created_at", { ascending: false })
        .limit(12);

      if (data?.length > 0) {
        return data;
      } else {
        return [];
      }
    } else {
      const { data, error } = await supabase
        .from("sales")
        .select()
        .eq("company_id", companyId)
        .order("created_at", { ascending: false });

      if (data?.length > 0) {
        return data;
      } else {
        return [];
      }
    }
  } catch (error) {
    console.log(error?.message);
  }
}

export default useSales;
