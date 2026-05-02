"use client";

import { createSupabaseClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import QuantityButtons from "./QuantityButtons";

function CreateSaleForm({ session, clients, inventory }) {
  const [clientId, setClientId] = useState("");
  const [products, setProducts] = useState([]);
  const [totalBilling, setTotalBilling] = useState(0);
  const [billingComplete, setBillingComplete] = useState(false);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const supabase = createSupabaseClient();

  const router = useRouter();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (clientId === "" || products.length === 0 || totalBilling === 0)
  //     return toast.error("Debe completar todos los campos para continuar");

  //   try {
  //     const { error } = await supabase.from("sales").insert({
  //       company_id: session?._id,
  //       client_id: clientId,
  //       products: products,
  //       total_billing: totalBilling,
  //       registered_by: session?._id,
  //       billing_complete: billingComplete,
  //     });

  //     if (!error) {
  //       toast.success("Venta añadida correctamente");

  //       setTimeout(() => {
  //         router.push("/dashboard/sales");
  //       }, 2000);
  //     } else {
  //       toast.error("Error al ingrear la venta");
  //     }
  //   } catch (error) {
  //     console.log(error?.message);
  //   }
  // };

  // Client Select Component
  const ClientSelect = () => {
    return (
      <select
        name="clients"
        id="clients"
        className="bg-stone-800 text-gray-300 placeholder:text-gray-500 border border-gray-600 rounded-lg p-3 w-full h-12 cursor-pointer "
        onChange={(e) => setClientId(e.target.value)}
      >
        <option value="Clientes">Clientes</option>
        <optgroup title="Clientes">
          {clients?.length > 0 &&
            clients.map((client) => {
              return (
                <option
                  title={client?.full_name}
                  value={client?.id}
                  key={client?.id}
                >
                  {client?.full_name}
                </option>
              );
            })}
        </optgroup>
      </select>
    );
  };

  //Modal Functions
  const modal = (show) => {
    const modal = document.getElementById("modal");

    if (show) {
      modal.classList.remove("hidden");
      modal.classList.add("grid");
    } else {
      modal.classList.add("hidden");
      modal.classList.remove("grid");
    }
  };

  const handleSelectProduct = (e) => {
    if (selectedProducts.some((v) => v?.id == e.target.value)) {
      toast.error("Este product ya fue agregado");
    } else {
      setSelectedProducts([
        ...selectedProducts,
        { id: e.target.value, quantity: 0 },
      ]);
    }
  };

  // Products Modal Component
  function ProductsModal({ products }) {
    return (
      <article
        id="modal"
        className="hidden bg-zinc-700/25 backdrop-blur-md fixed place-items-center w-screen h-screen"
      >
        <menu className="w-full max-w-96 p-8 h-125 flex flex-col items-center gap-5 bg-stone-700 rounded-md shadow-md">
          <h4 className="text-2xl font-semibold">Productos Disponibles</h4>

          <select
            name="products"
            id="products"
            multiple
            className="bg-stone-800 rounded-md w-full h-full outline-none p-2"
            onChange={(e) => handleSelectProduct(e)}
          >
            {products.length > 0 &&
              products.map((product) => {
                return (
                  <option
                    value={product.id}
                    key={product.id}
                    className="h-12 flex items-center border-b border-b-stone-600 p-2"
                  >
                    <p>{product.name}</p>
                  </option>
                );
              })}
          </select>

          <button
            onClick={() => modal(false)}
            className="mt-auto cursor-pointer"
          >
            Cerrar Ventana
          </button>
        </menu>
      </article>
    );
  }

  // Show Selected Products Component
  function ShowSelectedProducts() {
    return (
      <article>
        {selectedProducts.map((product) => {
          for (const prod of inventory) {
            if (prod.id === product?.id) {
              const addQuantity = () => {
                if (product?.quantity >= prod.stock) {
                  toast.error("No existe mas stock de este producto");
                } else {
                  for (let i = 0; i <= selectedProducts.length; i++) {
                    if (selectedProducts[i]?.id === product?.id) {
                      selectedProducts.splice(i, 1, {
                        id: product?.id,
                        quantity: product?.quantity + 1,
                      });
                    }
                  }
                  setTimeout(() => {
                    setTotalBilling(totalBilling + prod.price);
                  }, 1000);
                }
              };

              const removeQuantity = () => {
                if (product?.quantity <= 0) {
                  toast.error("No puede restar mas de este numero");
                } else {
                  for (let i = 0; i <= selectedProducts.length; i++) {
                    if (selectedProducts[i]?.id === product?.id) {
                      selectedProducts.splice(i, 1, {
                        id: product?.id,
                        quantity: product?.quantity - 1,
                      });
                    }
                  }
                  setTimeout(() => {
                    setTotalBilling(totalBilling - prod.price);
                  }, 1000);
                }
              };

              return (
                <div
                  key={prod.id}
                  className="w-full h-16 flex flex-row items-center justify-between p-2 border-b border-b-stone-700"
                >
                  <section className="flex flex-col gap-3">
                    <p>{prod.name}</p>
                    <div className="flex flex-row items-center gap-3">
                      <span>Precio c/u: ${prod.price}</span>
                      <span>Stock: {prod.stock}</span>
                    </div>
                  </section>
                  <QuantityButtons
                    addQuantity={() => addQuantity()}
                    removeQuantity={() => removeQuantity()}
                    quantity={product?.quantity}
                  />
                </div>
              );
            }
          }
        })}
      </article>
    );
  }

  //Main Return
  return (
    <>
      <ProductsModal products={inventory} collection={selectedProducts} />
      <form
        className="w-full flex flex-col gap-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor="clients" className="flex flex-col gap-4">
          <h3 className="text-xl">Seleccionar Cliente:</h3>
          <ClientSelect />
        </label>
        <label htmlFor="products" className="flex flex-col gap-2">
          <h3 className="text-xl">Productos:</h3>
          <ShowSelectedProducts />
          <div
            className="border-2 border-green-600 p-2 text-xl rounded-md cursor-pointer flex items-center justify-center"
            onClick={() => modal(true)}
          >
            <p>Agregar Articulos +</p>
          </div>
        </label>
        <p className="mt-5 text-lg">Precio Final: ${totalBilling}</p>
        <button
          type="submit"
          className="w-full h-12 rounded-md bg-green-400 text-black px-10 text-lg cursor-pointer flex items-center justify-center mt-10 font-semibold"
        >
          <p>Ingresar Venta</p>
        </button>
      </form>
    </>
  );
}

export default CreateSaleForm;
