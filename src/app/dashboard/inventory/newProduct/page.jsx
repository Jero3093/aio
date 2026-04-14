import DashboardNav from "@/components/dashboard/DashboardNav";
import CreateProductForm from "@/components/inventory/CreateProductForm";
import useSession from "@/hooks/useSession";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";

export default async function NewProduct() {
  const session = await useSession();

  !session && redirect("/");

  return (
    <main className="w-full max-h-screen flex flex-row gap-10 py-6">
      <DashboardNav />
      <Toaster richColors position="top-right" />
      <section className="w-full max-h-screen p-6 overflow-y-scroll overflow-hidden flex flex-col gap-4">
        <header className="flex flex-row items-center justify-between">
          <h2 className="text-4xl font-bold">Crear Nuevo Usuario</h2>
        </header>
        <section className="w-full h-fit bg-stone-900 rounded-md mt-6 flex flex-col items-center justify-center p-6">
          <CreateProductForm session={session} />
        </section>
      </section>
    </main>
  );
}
