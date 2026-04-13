"use client";

import createSession from "@/utils/auth/createSession";
import { createSupabaseClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

function LogInForm({ role }) {
  const supabase = createSupabaseClient();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name !== "" && email !== "" && password !== "") {
      try {
        const { data } = await supabase.from("companies").select();

        for (let i = 0; i < data.length; i++) {
          if (
            data[i].name === name &&
            data[i].email === email &&
            data[i].password === password
          ) {
            const res = await createSession({
              _id: data[i].id,
              name: data[i].name,
              email: data[i].email,
              role: "empresa",
            });

            if (res.ok) {
              toast.success("Inicio de sesión exitoso");
            } else {
              toast.error("Error al iniciar sesión");
            }
          }
          setTimeout(() => {
            router.push("/dashboard");
          }, 1000);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form
      method="get"
      className="w-full px-14"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-col gap-7">
        <input
          type="text"
          placeholder={
            role === "empresa" ? "Nombre de la Empresa" : "Nombre de Usuario"
          }
          className="bg-stone-800 text-gray-300 placeholder:text-gray-500 border border-gray-600 rounded-lg p-3 w-full h-12"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder={
            role === "empresa"
              ? "Correo Electrónico de la Empresa"
              : "Correo Electrónico"
          }
          className="bg-stone-800 text-gray-300 placeholder:text-gray-500 border border-gray-600 rounded-lg p-3 w-full h-12"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="bg-stone-800 text-gray-300 placeholder:text-gray-500 border border-gray-600 rounded-lg p-3 w-full h-12"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="mt-7 text-lg bg-white text-black font-bold py-2 px-4 rounded-lg w-full cursor-pointer h-12"
      >
        Iniciar Sesión
      </button>
    </form>
  );
}

export default LogInForm;
