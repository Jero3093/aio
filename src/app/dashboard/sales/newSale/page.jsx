import DashboardNav from "@/components/dashboard/DashboardNav";
import CreateSaleForm from "@/components/sales/CreateSaleForm";
import useClients from "@/hooks/useClients";
import useInventory from "@/hooks/useInventory";
import useSession from "@/hooks/useSession";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";

export default async function NewSales() {
  const session = await useSession();

  !session && redirect("/");

  const clients = await useClients({
    companyId: session?._id,
    forVisualizer: false,
  });

  const inventory = await useInventory({
    companyId: session?._id,
    forVisualizer: false,
  });

  return (
    <main className="w-full max-h-screen flex flex-row gap-10 py-6">
      <DashboardNav />
      <Toaster richColors position="top-right" />
      <section className="w-full max-h-screen p-6 overflow-y-scroll overflow-hidden flex flex-col gap-4">
        <header className="flex flex-row items-center justify-between">
          <h2 className="text-4xl font-bold">Ingresar Venta</h2>
        </header>
        <section className="w-full h-fit bg-stone-900 rounded-md mt-6 flex flex-col items-center justify-center p-6">
          <CreateSaleForm
            session={session}
            clients={clients}
            inventory={inventory}
          />
        </section>
      </section>
    </main>
  );
}
