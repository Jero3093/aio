"use client";

import { createSupabaseClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

function CreateClientForm({ session }) {
  const [fullname, setFullname] = useState("");

  const supabase = createSupabaseClient();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (fullname === "")
      return toast.error("Debe completar todos los campos para continuar");

    try {
      const { error } = await supabase.from("clients").insert({
        full_name: fullname,
        registered_by: session?._id,
        company_id: session?._id,
      });

      if (error)
        return error.code === "23505"
          ? toast.error("El cliente ya existe")
          : toast.error("Error al ingresar el cliente");

      toast.success("Cliente ingresado exitosamente");

      setTimeout(() => {
        router.push("/dashboard/clients");
      }, 2000);
    } catch (error) {
      console.log(error?.message);
    }
  };

  return (
    <form
      className="w-full flex flex-col gap-4"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type="text"
        id="fullname"
        className="bg-stone-800 text-gray-300 placeholder:text-gray-500 border border-gray-600 rounded-lg p-3 w-full h-12"
        placeholder="Nombre Completo del Cliente"
        onChange={(e) => setFullname(e.target.value)}
      />

      <button
        type="submit"
        className="w-full h-12 rounded-md bg-green-400 text-black px-10 text-lg cursor-pointer flex items-center justify-center"
      >
        <p>Ingresar Cliente</p>
      </button>
    </form>
  );
}

export default CreateClientForm;
