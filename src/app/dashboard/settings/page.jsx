import LogOutBtn from "@/components/auth/LogOutBtn";
import DashboardNav from "@/components/dashboard/DashboardNav";
import useSession from "@/hooks/useSession";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Settings() {
  const session = await useSession();

  !session && redirect("/");

  return (
    <main className="w-full max-h-screen flex flex-row gap-10 py-6">
      <DashboardNav />
      <section className="w-full max-h-screen p-6 overflow-y-scroll overflow-hidden">
        <h2 className="text-4xl font-bold">Ajustes</h2>
        <section className="w-full h-fit bg-stone-800 rounded-md mt-6 flex flex-col p-6">
          <ul className="flex flex-col gap-10">
            <li>
              <Link href="/dashboard/settings/profile">
                <h4>Ajustes de Perfil</h4>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings/account">
                <h4>Preferencias de Cuenta</h4>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings/notifications">
                <h4>Ajustes de Notificaciones</h4>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings/security">
                <h4>Ajustes de Seguridad</h4>
              </Link>
            </li>
            <li>
              <LogOutBtn />
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}
