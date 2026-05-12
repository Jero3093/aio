import DashboardNav from "@/components/dashboard/DashboardNav";
import InventoryVisualizer from "@/components/dashboard/InventoryVisualizer";
import SalesVisualizer from "@/components/dashboard/SalesVisualizer";
import UsersVisualizer from "@/components/dashboard/UsersVisualizer";
import useInventory from "@/hooks/useInventory";
import useSales from "@/hooks/useSales";
import useSession from "@/hooks/useSession";
import useUsers from "@/hooks/useUsers";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await useSession();

  !session && redirect("/");

  const users = await useUsers({
    companyId: session?._id,
    forVisualizer: true,
  });

  const inventory = await useInventory({
    companyId: session?._id,
    forVisualizer: true,
  });

  const sales = await useSales({
    companyId: session?._id,
    forVisualizer: true,
  });

  return (
    <main className="w-full max-h-screen flex flex-col gap-10 py-6 lg:flex-row">
      <DashboardNav />
      <section className="w-full max-h-screen p-6 overflow-y-scroll overflow-hidden">
        <h2 className="text-4xl font-bold text-orange-700">Dashboard</h2>
        <SalesVisualizer sales={sales} session={session} />
        <InventoryVisualizer inventory={inventory} />
        <UsersVisualizer users={users} />
      </section>
    </main>
  );
}
