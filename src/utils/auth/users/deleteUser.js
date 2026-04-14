import { createSupabaseClient } from "@/utils/supabase/client";
import { toast } from "sonner";

async function DeleteUser({ userId }) {
  const supabase = createSupabaseClient();

  const { error } = await supabase.from("users").delete().eq("id", userId);

  if (error) return toast.error("Error al eliminar el usuario");

  toast.success("Usuario eliminado correctamente");

  return true;
}

export default DeleteUser;
