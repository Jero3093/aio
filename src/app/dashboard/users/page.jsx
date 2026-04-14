import DashboardNav from "@/components/dashboard/DashboardNav";
import useSession from "@/hooks/useSession";
import useUsers from "@/hooks/useUsers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Users() {
  const session = await useSession();

  !session && redirect("/");

  const users = await useUsers({
    companyId: session._id,
    forVisualizer: false,
  });

  return (
    <main className="w-full max-h-screen flex flex-row gap-10 py-6">
      <DashboardNav />
      <section className="w-full max-h-screen p-6 overflow-y-scroll overflow-hidden flex flex-col gap-4">
        <header className="flex flex-row items-center justify-between">
          <h2 className="text-4xl font-bold">Usuarios</h2>
          <Link
            href="/dashboard/users/newUser"
            className="w-fit h-12 rounded-md bg-green-400 text-black px-10 text-lg cursor-pointer flex items-center justify-center"
          >
            <p>Agregar Usuario</p>
          </Link>
        </header>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Buscar usuarios..."
          className="w-full h-12 rounded-lg border-2 border-stone-600 placeholder:text-lg placeholder:text-stone-700 p-4"
        />
        <section className="w-full h-fit bg-stone-900 rounded-md mt-6 flex flex-col items-center justify-center p-6">
          <article className="w-full grid grid-cols-3 items-center h-12">
            <h3 className="text-xl font-semibold">Nombre</h3>
            <h3 className="text-xl font-semibold">Email</h3>
            <h3 className="text-xl font-semibold">Fecha de Creacion</h3>
          </article>
          <ul className="w-full h-full flex flex-col gap-4 p-4">
            {users.map((user) => (
              <li
                key={user.id}
                className="w-full h-full gap-4 p-4 rounded-md cursor-pointer hover:bg-stone-800 transition-colors"
              >
                <Link
                  href={`/dashboard/users/${user.id}`}
                  className="grid grid-cols-3"
                >
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                  <p>{user.created_at.substring(0, 10)}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
