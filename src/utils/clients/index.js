import { createSupabaseClient } from "@/utils/supabase/client";
import { toast } from "sonner";

async function DeleteClient({ clientId }) {
  const supabase = createSupabaseClient();

  const { error } = await supabase
    .from("inventory")
    .delete()
    .eq("id", clientId);

  if (error) return toast.error("Error al eliminar el cliente");

  toast.success("Cliente eliminado correctamente");

  return true;
}

async function EditClient({ clientId, newClientData }) {
  const supabase = createSupabaseClient();

  const { error } = await supabase
    .from("inventory")
    .update(newClientData)
    .eq("id", clientId);

  if (error) return false;

  return true;
}

export { DeleteClient, EditClient };
