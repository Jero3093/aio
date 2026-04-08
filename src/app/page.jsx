import Copyright from "@/components/Copyright";
import { BsBuildings } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-between gap-10 py-14">
      <header className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-4xl font-bold">AIO - All In One</h1>
        <h2 className="text-md">
          Sistema de Gestión todo en uno para empresas
        </h2>
      </header>
      <section
        id="options"
        className="flex flex-col items-center justify-center gap-12 bg-stone-900 w-full max-w-2xl p-10 rounded-lg"
      >
        <p className="text-2xl">Menu de Opciónes</p>
        <div className="flex flex-row gap-12 items-center ">
          <Link
            href="/auth/company/login"
            className="flex flex-col gap-5 items-center justify-center border-2 border-gray-600 rounded-lg p-5 shadow-sm shadow-gray-500"
          >
            <BsBuildings size={42} /> <p>Ingresar como Empresa</p>
          </Link>
          <Link
            href="/auth/user/login"
            className="flex flex-col gap-5 items-center justify-center border-2 border-gray-600 rounded-lg p-5 shadow-sm shadow-gray-500"
          >
            <FaUser size={42} /> <p>Ingresar como Usuario</p>
          </Link>
        </div>
      </section>
      <footer>
        <Copyright />
      </footer>
    </main>
  );
}
