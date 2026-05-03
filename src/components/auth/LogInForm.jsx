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

  const handleSubmitCompany = async (e) => {
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
              return toast.error("Error al iniciar sesión");
            }

            return setTimeout(() => {
              router.push("/dashboard");
            }, 1000);
          }
        }

        return toast.error("La empresa no esta registrada");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmitUser = async (e) => {
    e.preventDefault();

    if (name !== "" && email !== "" && password !== "") {
      try {
        const { data } = await supabase.from("users").select();

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
              role: "user",
            });

            if (res.ok) {
              toast.success("Inicio de sesión exitoso");
            } else {
              toast.error("Error al iniciar sesión");
            }
            return setTimeout(() => {
              router.push("/dashboard");
            }, 1000);
          }
        }

        return toast.error("El usuario no existe");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form
      method="get"
      className="w-full md:px-14"
      onSubmit={(e) =>
        role === "company" ? handleSubmitCompany(e) : handleSubmitUser(e)
      }
    >
      <div className="flex flex-col gap-7">
        <input
          type="text"
          placeholder={
            role === "company" ? "Nombre de la Empresa" : "Nombre de Usuario"
          }
          className="flex flex-row gap-14 items-center justify-center rounded-lg p-5 bg-stone-400/30 w-full h-12 placeholder:text-stone-600"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder={
            role === "company"
              ? "Correo Electrónico de la Empresa"
              : "Correo Electrónico"
          }
          className="flex flex-row gap-14 items-center justify-center rounded-lg p-5 bg-stone-400/30 w-full h-12 placeholder:text-stone-600"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="flex flex-row gap-14 items-center justify-center rounded-lg p-5 bg-stone-400/30 w-full h-12 placeholder:text-stone-600"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="mt-7 bg-stone-800 text-orange-500 text-2xl font-bold py-2 px-4 rounded-lg w-full cursor-pointer h-14"
      >
        Iniciar Sesión
      </button>
    </form>
  );
}

export default LogInForm;
