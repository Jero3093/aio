import DashboardNav from "@/components/dashboard/DashboardNav";
import useSales from "@/hooks/useSales";
import useSession from "@/hooks/useSession";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Sales() {
  const session = await useSession();

  !session && redirect("/");

  const sales = await useSales({
    companyId: session?._id,
    forVisualizer: false,
  });

  return (
    <main className="w-full max-h-screen flex flex-row gap-10 py-6">
      <DashboardNav />
      <section className="w-full max-h-screen p-6 overflow-y-scroll overflow-hidden flex flex-col gap-4">
        <header className="flex flex-row items-center justify-between">
          <h2 className="text-4xl font-bold">Ventas</h2>
          <Link
            href="/dashboard/sales/newSale"
            className="w-fit h-12 rounded-md bg-green-400 text-black px-10 text-lg cursor-pointer flex items-center justify-center"
          >
            <p>Ingresar Venta</p>
          </Link>
        </header>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Buscar venta..."
          className="w-full h-12 rounded-lg border-2 border-stone-600 placeholder:text-lg placeholder:text-stone-700 p-4"
        />
        <section className="w-full h-fit bg-stone-900 rounded-md mt-6 flex flex-col items-center justify-center p-6">
          <article className="w-full grid grid-cols-4 items-center h-12">
            <h3 className="text-xl font-semibold">Nombre</h3>
            <h3 className="text-xl font-semibold">Precio</h3>
            <h3 className="text-xl font-semibold">Stock</h3>
            <h3 className="text-xl font-semibold">Fecha de Creacion</h3>
          </article>
          <ul className="w-full h-full flex flex-col gap-4 py-6">
            {/* {sales.length > 0 &&
              sales.map((sale) => (
                <li
                  key={sale.id}
                  className="w-full h-full gap-4 p-4 rounded-md cursor-pointer hover:bg-stone-800 transition-colors"
                >
                  <Link
                    href={`/dashboard/sales/${sale.id}`}
                    className="grid grid-cols-4 w-full h-full"
                  >
                    <p>{sale.name}</p>
                    <p>${sale.price}</p>
                    <p>{sale.stock}</p>
                    <p>{sale.created_at.substring(0, 10)}</p>
                  </Link>
                </li>
              ))} */}
          </ul>
        </section>
      </section>
    </main>
  );
}
