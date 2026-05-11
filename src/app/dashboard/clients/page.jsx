import DashboardNav from "@/components/dashboard/DashboardNav";
import useClients from "@/hooks/useClients";
import useSession from "@/hooks/useSession";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Clients() {
  const session = await useSession();

  !session && redirect("/");

  const clients = await useClients({
    companyId: session?._id,
    forVisualizer: false,
  });

  return (
    <main className="w-full max-h-screen flex flex-col gap-10 py-6 lg:flex-row">
      <DashboardNav />
      <section className="w-full max-h-screen p-6 overflow-y-scroll overflow-hidden flex flex-col gap-4">
        <header className="flex flex-col lg:flex-row gap-5 lg:items-center justify-between">
          <h2 className="text-4xl font-bold text-orange-700">Clientes</h2>
          <Link
            href="/dashboard/clients/newClient"
            className="w-fit h-12 rounded-md bg-green-400 text-black px-10 text-lg cursor-pointer flex items-center justify-center"
          >
            <p>Agregar Cliente</p>
          </Link>
        </header>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Buscar cliente..."
          className="w-full h-12 rounded-lg border-2 border-stone-600 placeholder:text-lg placeholder:text-stone-700 p-4"
        />
        <section className="w-full h-fit bg-stone-200 rounded-md mt-6 flex flex-col items-center justify-center p-6">
          <article className="w-full grid grid-cols-2 items-center h-12 border-b border-orange-500 lg:grid-cols-3">
            <h3 className="text-xl font-semibold text-orange-500">Nombre</h3>
            <h3 className="text-xl font-semibold text-orange-500">
              Ingresado Por
            </h3>
            <h3 className="text-xl font-semibold text-orange-500 hidden lg:block">
              Fecha de Creacion
            </h3>
          </article>
          <ul className="w-full h-full flex flex-col gap-4 py-6">
            {clients.map((client) => (
              <li
                key={client.id}
                className="w-full h-full gap-4 p-4 rounded-md cursor-pointer hover:bg-stone-300 transition-colors"
              >
                <Link
                  href={`/dashboard/clients/${client.id}`}
                  className="grid grid-cols-2 lg:grid-cols-3 w-full h-full"
                >
                  <p>{client.full_name}</p>
                  <p>{client.registered_by}</p>
                  <p className="hidden lg:block">
                    {client.created_at.substring(0, 10)}
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
