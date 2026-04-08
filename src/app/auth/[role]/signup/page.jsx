import { Toaster } from "sonner";
import SignInForm from "@/components/auth/SignInForm";
import Copyright from "@/components/Copyright";
import Link from "next/link";

export default async function SignUp({ params }) {
  const { role } = await params;

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-between gap-10 py-14">
      <Toaster richColors position="top-right" />
      <header className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-4xl font-bold">AIO - All In One</h1>
        <h2 className="text-md">
          Sistema de Gestión todo en uno para empresas
        </h2>
      </header>
      <section
        id="options"
        className="flex flex-col items-center justify-center gap-10 bg-stone-900 w-full max-w-2xl p-10 rounded-lg"
      >
        <p className="text-2xl">
          Autenticacion de {role === "company" ? "Empresa" : "Usuario"}
        </p>
        <SignInForm role={role} />
      </section>
      <section>
        <p className="text-2xl">
          ¿Ya tienes una cuenta?{" "}
          <Link
            href={`/auth/${role}/login`}
            className="text-blue-500 hover:underline"
          >
            Iniciar Sesion{" "}
          </Link>
        </p>
      </section>
      <footer>
        <Copyright />
      </footer>
    </main>
  );
}
