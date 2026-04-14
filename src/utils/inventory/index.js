import { createSupabaseClient } from "@/utils/supabase/client";
import { toast } from "sonner";

async function DeleteProduct({ productId }) {
  const supabase = createSupabaseClient();

  const { error } = await supabase
    .from("inventory")
    .delete()
    .eq("id", productId);

  if (error) return toast.error("Error al eliminar el producto");

  toast.success("Producto eliminado correctamente");

  return true;
}

async function EditProduct({ productId, newProductData }) {
  const supabase = createSupabaseClient();

  const { error } = await supabase
    .from("inventory")
    .update(newProductData)
    .eq("id", productId);

  if (error) return false;

  return true;
}

export { DeleteProduct, EditProduct };
