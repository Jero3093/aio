import DashboardNav from "@/components/dashboard/DashboardNav";
import useSession from "@/hooks/useSession";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await useSession();

  !session && redirect("/");

  return (
    <main className="w-full max-h-screen flex flex-row gap-10 py-6">
      <DashboardNav />
      <section className="w-full max-h-screen p-6 overflow-y-scroll overflow-hidden">
        <h2 className="text-4xl font-bold">Dashboard</h2>
        <section className="w-full h-56 bg-stone-800 rounded-md mt-6 flex items-center justify-center"></section>
        <section className="w-full h-56 bg-stone-800 rounded-md mt-6 flex items-center justify-center"></section>
        <section className="w-full h-56 bg-stone-800 rounded-md mt-6 flex items-center justify-center"></section>
      </section>
    </main>
  );
}
