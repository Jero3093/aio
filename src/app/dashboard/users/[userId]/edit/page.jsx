import DashboardNav from "@/components/dashboard/DashboardNav";
import EditUserForm from "@/components/user/EditUserForm";
import useSession from "@/hooks/useSession";
import useUser from "@/hooks/useUser";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";

export default async function EditUser({ params }) {
  const { userId } = await params;

  const session = await useSession();

  !session && redirect("/");

  const user = await useUser({ userId });

  return (
    <main className="w-full max-h-screen flex flex-col gap-10 py-6 lg:flex-row">
      <DashboardNav />
      <section className="w-full max-h-screen p-6 overflow-y-scroll overflow-hidden">
        <h2 className="text-4xl font-bold text-orange-700">Editar Usuario</h2>
      <Toaster position="top-right" richColors />
        <section className="w-full h-fit bg-stone-200 rounded-md mt-6 flex flex-col gap-2 p-4">
          <EditUserForm user={user} />
        </section>
      </section>
    </main>
  );
}
