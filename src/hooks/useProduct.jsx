import { createSupabaseClient } from "@/utils/supabase/client";

async function useProduct({ productId }) {
  const supabase = createSupabaseClient();

  try {
    const { data, error } = await supabase
      .from("inventory")
      .select()
      .eq("id", productId);

    if (error) return null;

    if (data[0]?.id) {
      return data[0];
    }
  } catch (error) {
    console.log(error?.message);
  }
}

export default useProduct;
