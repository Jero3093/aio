"use client";

import { createSupabaseClient } from "@/utils/supabase/client";
import { useState } from "react";
import { toast } from "sonner";

function SignInForm({ role }) {
  const supabase = createSupabaseClient();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { error } = await supabase.from("companies").insert({
        name,
        email,
        password,
        description,
      });

      error == null && toast.success("Empresa registrada exitosamente");

      console.log(error);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      method="post"
      className="w-full px-14"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-col gap-5">
        <input
          type="text"
          placeholder={
            role === "company" ? "Nombre de la Empresa" : "Nombre de Usuario"
          }
          className="bg-stone-800 text-gray-300 placeholder:text-gray-500 border border-gray-600 rounded-lg p-3 w-full h-12"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder={
            role === "company"
              ? "Correo Electrónico de la Empresa"
              : "Correo Electrónico"
          }
          className="bg-stone-800 text-gray-300 placeholder:text-gray-500 border border-gray-600 rounded-lg p-3 w-full h-12"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="bg-stone-800 text-gray-300 placeholder:text-gray-500 border border-gray-600 rounded-lg p-3 w-full h-12"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {role === "company" && (
          <input
            type="text"
            placeholder="Descripción de la Empresa"
            className="bg-stone-800 text-gray-300 placeholder:text-gray-500 border border-gray-600 rounded-lg p-3 w-full h-12"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        )}
      </div>
      <button
        type="submit"
        className="mt-7 text-lg bg-white text-black font-bold py-2 px-4 rounded-lg w-full cursor-pointer h-12"
      >
        Registrarse
      </button>
    </form>
  );
}

export default SignInForm;
