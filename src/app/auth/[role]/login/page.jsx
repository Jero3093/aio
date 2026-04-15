import { Toaster } from "sonner";
import LogInForm from "@/components/auth/LogInForm";
import Copyright from "@/components/Copyright";
import Link from "next/link";
import useSession from "@/hooks/useSession";
import { redirect } from "next/navigation";

export default async function LogIn({ params }) {
  const { role } = await params;

  const session = await useSession();

  session && redirect("/dashboard");

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
        <LogInForm role={role} />
      </section>
      {role === "company" && (
        <section>
          <p className="text-2xl text-stone-600">
            ¿No tienes una cuenta?{" "}
            <Link href={`/auth/${role}/signup`} className="text-white">
              Registrarse{" "}
            </Link>
          </p>
        </section>
      )}
      <footer>
        <Copyright />
      </footer>
    </main>
  );
}
