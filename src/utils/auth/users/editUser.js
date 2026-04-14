import { createSupabaseClient } from "@/utils/supabase/client";

async function EditUser({ userId, newUserData }) {
  const supabase = createSupabaseClient();

  const { error } = await supabase
    .from("users")
    .update(newUserData)
    .eq("id", userId);

  if (error) return false;

  return true;
}

export default EditUser;
