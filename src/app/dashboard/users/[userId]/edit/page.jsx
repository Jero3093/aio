import DashboardNav from "@/components/dashboard/DashboardNav";
import EditUserForm from "@/components/user/EditUserForm";
import useUser from "@/hooks/useUser";
import { Toaster } from "sonner";

export default async function EditUser({ params }) {
  const { userId } = await params;

  const user = await useUser({ userId });

  return (
    <main className="w-full max-h-screen flex flex-row gap-10 py-6">
      <DashboardNav />
      <Toaster position="top-right" richColors />
      <section className="w-full max-h-screen p-6 overflow-y-scroll overflow-hidden">
        <h2 className="text-4xl font-bold">Editar Usuario</h2>
        <section className="w-full h-fit bg-stone-800 rounded-md mt-6 flex flex-col gap-2 p-4">
          <EditUserForm user={user} />
        </section>
      </section>
    </main>
  );
}
