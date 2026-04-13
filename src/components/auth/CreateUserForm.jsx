"use client";

import { createSupabaseClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

function CreateUserForm({ session }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const supabase = createSupabaseClient();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (fullName === "" || email === "" || password === "")
      return toast.error("Debe completar todos los campos para continuar");

    try {
      const { error } = await supabase.from("users").insert({
        name: fullName,
        email,
        password,
        company_id: session?._id,
      });

      if (error)
        return error.code === "23505"
          ? toast.error("El usuario ya existe")
          : toast.error("Error al crear el usuario");

      toast.success("Usuario creado exitosamente");

      setTimeout(() => {
        router.push("/dashboard/users");
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
        name="name"
        id="name"
        placeholder="Nombre Completo"
        className="w-full h-12 rounded-lg border-2 border-stone-600 placeholder:text-lg placeholder:text-stone-700 p-4"
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Correo Electronico"
        className="w-full h-12 rounded-lg border-2 border-stone-600 placeholder:text-lg placeholder:text-stone-700 p-4"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Contraseña"
        className="w-full h-12 rounded-lg border-2 border-stone-600 placeholder:text-lg placeholder:text-stone-700 p-4"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="w-full h-12 rounded-md bg-green-400 text-black px-10 text-lg cursor-pointer flex items-center justify-center"
      >
        <p>Crear Usuario</p>
      </button>
    </form>
  );
}

export default CreateUserForm;
