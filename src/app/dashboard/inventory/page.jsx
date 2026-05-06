import DashboardNav from "@/components/dashboard/DashboardNav";
import useInventory from "@/hooks/useInventory";
import useSession from "@/hooks/useSession";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Inventory() {
  const session = await useSession();

  !session && redirect("/");

  const inventory = await useInventory({
    companyId: session?._id,
    forVisualizer: false,
  });

  return (
    <main className="w-full max-h-screen flex flex-col gap-10 py-6 lg:flex-row">
      <DashboardNav />
      <section className="w-full max-h-screen p-6 overflow-y-scroll overflow-hidden flex flex-col gap-4">
        <header className="flex flex-col lg:flex-row gap-5 lg:items-center justify-between">
          <h2 className="text-4xl font-bold text-orange-700">Inventario</h2>
          <Link
            href="/dashboard/inventory/newProduct"
            className="w-fit h-12 rounded-md bg-green-400 text-black px-10 text-lg cursor-pointer flex items-center justify-center"
          >
            <p>Agregar Producto</p>
          </Link>
        </header>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Buscar producto..."
          className="w-full h-12 rounded-lg border-2 border-stone-600 placeholder:text-lg placeholder:text-stone-700 p-4"
        />
        <section className="w-full h-fit bg-stone-300 rounded-md mt-6 flex flex-col items-center justify-center p-6">
          <article className="w-full grid grid-cols-3 items-center h-12 border-b border-orange-500 lg:grid-cols-4">
            <h3 className="text-xl font-semibold text-orange-500">Nombre</h3>
            <h3 className="text-xl font-semibold text-orange-500">Precio</h3>
            <h3 className="text-xl font-semibold text-orange-500">Stock</h3>
            <h3 className="text-xl font-semibold text-orange-500 hidden lg:block">
              Fecha de Creacion
            </h3>
          </article>
          <ul className="w-full h-full flex flex-col gap-4 py-6">
            {inventory.map((product) => (
              <li
                key={product.id}
                className="w-full h-full p-2 lg:p-4 rounded-md cursor-pointer hover:bg-stone-400 transition-colors"
              >
                <Link
                  href={`/dashboard/inventory/${product.id}`}
                  className="grid grid-cols-3 lg:grid-cols-4 w-full h-full gap-7 lg:gap-0"
                >
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                  <p>{product.stock}</p>
                  <p className="hidden lg:block">
                    {product.created_at.substring(0, 10)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
