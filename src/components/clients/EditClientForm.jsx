"use client";

import { EditClient } from "@/utils/clients";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

function EditClientForm({ client }) {
  const [fullName, setFullName] = useState(client?.full_name);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (fullName !== "") {
      try {
        const resEdit = await EditClient({
          clientId: client?.id,
          newClientData: { full_name: fullName },
        });

        if (resEdit) {
          toast.success("cliento editado correctamente");

          setTimeout(() => {
            router.push("/dashboard/clients");
          }, 2000);
        } else {
          toast.error("Error al editar el cliente");
        }
      } catch (error) {
        console.log(error?.message);
      }
    } else {
      toast.error("Ningun campo puede quedar vacio");
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
          placeholder="Nombre Completo del Cliente"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
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

export default EditClientForm;
