import DashboardNav from "@/components/dashboard/DashboardNav";
import UserOptions from "@/components/user/UserOptions";
import useSession from "@/hooks/useSession";
import useUser from "@/hooks/useUser";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";

export default async function User({ params }) {
  const { userId } = await params;

    const session = await useSession();

  !session && redirect("/");

  const user = await useUser({ userId });

  return (
    <main className="w-full max-h-screen flex flex-row gap-10 py-6">
      <DashboardNav />
      <Toaster position="top-right" richColors />
      <section className="w-full max-h-screen p-6 overflow-y-scroll overflow-hidden">
        <h2 className="text-4xl font-bold">Usuario</h2>
        <section className="w-full h-56 bg-stone-800 rounded-md mt-6 flex flex-col gap-2 p-4">
          <h3 className="text-2xl font-semiboldF">{user?.name}</h3>
          <h3 className="text-xl">{user?.email}</h3>
          <UserOptions userId={userId} />
        </section>
      </section>
    </main>
  );
}
