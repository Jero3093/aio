import DashboardNav from "@/components/dashboard/DashboardNav";
import UsersVisualizer from "@/components/dashboard/UsersVisualizer";
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

  return (
    <main className="w-full max-h-screen flex flex-row gap-10 py-6">
      <DashboardNav />
      <section className="w-full max-h-screen p-6 overflow-y-scroll overflow-hidden">
        <h2 className="text-4xl font-bold">Dashboard</h2>
        <UsersVisualizer users={users.reverse()} />
        <section className="w-full h-56 bg-stone-800 rounded-md mt-6 flex items-center justify-center"></section>
        <section className="w-full h-56 bg-stone-800 rounded-md mt-6 flex items-center justify-center"></section>
      </section>
    </main>
  );
}
