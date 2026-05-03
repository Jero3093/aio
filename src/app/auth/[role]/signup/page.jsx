import { Toaster } from "sonner";
import SignInForm from "@/components/auth/SignInForm";
import Copyright from "@/components/Copyright";
import Link from "next/link";
import useSession from "@/hooks/useSession";
import { redirect } from "next/navigation";
import Header from "@/components/Header";

export default async function SignUp({ params }) {
  const { role } = await params;

  const session = await useSession();

  session && redirect("/dashboard");

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-between gap-10 py-10 px-5 md:px-0">
      <Toaster richColors position="top-right" />
      <Header />
      <section
        id="options"
        className="flex flex-col items-center justify-center gap-12 w-full max-w-2xl p-10 rounded-lg border-4 border-orange-400 bg-stone-100"
      >
        <p className="text-2xl md:text-3xl font-semibold text-center">
          Autenticacion de {role === "company" ? "Empresa" : "Usuario"}
        </p>
        <SignInForm role={role} />
      </section>
      <section>
        <p className="text-2xl text-stone-600">
          ¿Ya tienes una cuenta?{" "}
          <Link
            href={`/auth/${role}/login`}
            className="text-orange-600 font-semibold"
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
