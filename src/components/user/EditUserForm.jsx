"use client";

import EditUser from "@/utils/auth/users/editUser";
import { useState } from "react";
import { toast } from "sonner";

function EditUserForm({ user }) {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resEdit = await EditUser({
        userId: user?.id,
        newUserData: { name, email },
      });

      resEdit
        ? toast.success("Usuario editado correctamente")
        : toast.error("Error al editar el usuario");
    } catch (error) {
      console.log(error?.message);
    }
  };

  return (
    <form className="flex flex-col gap-8 p-4" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="name" className="text-sm font-medium">
        Nombre
        <input
          type="text"
          id="name"
          className="bg-stone-800 text-gray-300 placeholder:text-gray-500 border border-gray-600 rounded-lg p-3 w-full h-12"
          placeholder="Nombre del usuario"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="email" className="text-sm font-medium">
        Correo Electrónico
        <input
          type="email"
          id="email"
          className="bg-stone-800 text-gray-300 placeholder:text-gray-500 border border-gray-600 rounded-lg p-3 w-full h-12"
          placeholder="Correo electrónico del usuario"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Guardar Cambios
      </button>
    </form>
  );
}

export default EditUserForm;
