"use client";

import { createSupabaseClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

function CreateProductForm({ session }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");

  const supabase = createSupabaseClient();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === "" || price === "" || stock === "" || description === "")
      return toast.error("Debe completar todos los campos para continuar");

    try {
      const { error } = await supabase.from("inventory").insert({
        name,
        price,
        stock,
        description,
        company_id: session?._id,
      });

      if (error)
        return error.code === "23505"
          ? toast.error("El producto ya existe")
          : toast.error("Error al crear el producto");

      toast.success("Producto creado exitosamente");

      setTimeout(() => {
        router.push("/dashboard/inventory");
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
        id="name"
        className="bg-stone-800 text-gray-300 placeholder:text-gray-500 border border-gray-600 rounded-lg p-3 w-full h-12"
        placeholder="Nombre del Producto"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        id="price"
        className="bg-stone-800 text-gray-300 placeholder:text-gray-500 border border-gray-600 rounded-lg p-3 w-full h-12"
        placeholder="Precio del Producto"
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="number"
        id="stock"
        className="bg-stone-800 text-gray-300 placeholder:text-gray-500 border border-gray-600 rounded-lg p-3 w-full h-12"
        placeholder="Stock del Producto"
        onChange={(e) => setStock(e.target.value)}
      />
      <textarea
        id="description"
        className="bg-stone-800 text-gray-300 placeholder:text-gray-500 border border-gray-600 rounded-lg p-3 w-full h-32"
        placeholder="Descripcion del Producto"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        type="submit"
        className="w-full h-12 rounded-md bg-green-400 text-black px-10 text-lg cursor-pointer flex items-center justify-center"
      >
        <p>Crear Producto</p>
      </button>
    </form>
  );
}

export default CreateProductForm;
