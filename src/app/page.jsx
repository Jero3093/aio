import Copyright from "@/components/Copyright";
import { BsBuildings } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import useSession from "@/hooks/useSession";
import { redirect } from "next/navigation";

export default async function Home() {
  // const session = await useSession();

  // session && redirect("/dashboard");

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-between gap-10 py-14 px-5 md:px-0">
      <header className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-4xl font-bold md:text-5xl">
          <span className="text-orange-500">AI</span>
          <span className="text-stone-700">O</span> -{" "}
          <span className="text-orange-500">All In</span>{" "}
          <span className="text-stone-700">One</span>
        </h1>
        <div className="flex flex-row items-center gap-3">
          <span className="w-10 h-0.5 bg-orange-400"></span>
          <h2 className="text-lg font-sans">
            Sistema de Gestión todo en uno para empresas
          </h2>
          <span className="w-10 h-0.5 bg-orange-400"></span>
        </div>
      </header>
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
