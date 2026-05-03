import Copyright from "@/components/Copyright";
import { BsBuildings } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import useSession from "@/hooks/useSession";
import { redirect } from "next/navigation";
import Header from "@/components/Header";

export default async function Home() {
  const session = await useSession();

  session && redirect("/dashboard");

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-between gap-10 py-14 px-5 md:px-0">
      <Header />
      <section
        id="options"
        className="flex flex-col items-center justify-center gap-12 w-full max-w-2xl p-10 rounded-lg border-4 border-orange-400 bg-stone-100"
      >
        <p className="text-2xl md:text-3xl font-semibold">Menu de Opciónes</p>
        <div className="flex flex-col gap-12 items-center w-full">
          <Link
            href="/auth/company/login"
            className="flex flex-row gap-14 items-center justify-center rounded-lg p-5 bg-stone-400/30 w-full"
          >
            <BsBuildings size={42} color="oklch(64.6% 0.222 41.116)" />{" "}
            <p className="text-lg">Ingresar como Empresa</p>
          </Link>
          <Link
            href="/auth/user/login"
            className="flex flex-row gap-14 items-center justify-center rounded-lg p-5 bg-stone-400/30 w-full"
          >
            <FaUser size={42} color="oklch(64.6% 0.222 41.116)" />{" "}
            <p className="text-lg">Ingresar como Usuario</p>
          </Link>
        </div>
      </section>
      <footer>
        <Copyright />
      </footer>
    </main>
  );
}
