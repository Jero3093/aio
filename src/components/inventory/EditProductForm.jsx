"use client";

import { EditProduct } from "@/utils/inventory";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

function EditProductForm({ product }) {
  const [name, setName] = useState(product?.name);
  const [price, setPrice] = useState(product?.price || "");
  const [stock, setStock] = useState(product?.stock || "");
  const [description, setDescription] = useState(product?.description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name !== "" && price !== "" && stock !== "" && description !== "") {
      try {
        const resEdit = await EditProduct({
          productId: product?.id,
          newProductData: { name, price, stock, description },
        });

        resEdit
          ? toast.success("Producto editado correctamente")
          : toast.error("Error al editar el producto");

        setTimeout(() => {
          router.push("/dashboard/inventory");
        }, 2000);
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
          placeholder="Nombre del Producto"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="price" className="text-sm font-medium">
        Precio
        <input
          type="number"
          id="price"
          className="bg-stone-800 text-gray-300 placeholder:text-gray-500 border border-gray-600 rounded-lg p-3 w-full h-12"
          placeholder="Precio del Producto"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label htmlFor="stock" className="text-sm font-medium">
        Stock
        <input
          type="number"
          id="stock"
          className="bg-stone-800 text-gray-300 placeholder:text-gray-500 border border-gray-600 rounded-lg p-3 w-full h-12"
          placeholder="Stock del Producto"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
      </label>
      <label htmlFor="description" className="text-sm font-medium">
        Descripcion
        <textarea
          id="description"
          className="bg-stone-800 text-gray-300 placeholder:text-gray-500 border border-gray-600 rounded-lg p-3 w-full h-32"
          placeholder="Descripcion del Producto"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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

export default EditProductForm;
