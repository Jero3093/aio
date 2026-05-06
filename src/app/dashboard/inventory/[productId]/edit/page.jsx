import DashboardNav from "@/components/dashboard/DashboardNav";
import EditProductForm from "@/components/inventory/EditProductForm";
import useProduct from "@/hooks/useProduct";
import useSession from "@/hooks/useSession";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";

export default async function EditProduct({ params }) {
  const { productId } = await params;

  const session = await useSession();

  !session && redirect("/");

  const product = await useProduct({ productId });

  return (
    <main className="w-full max-h-screen flex flex-col gap-10 py-6 lg:flex-row">
      <DashboardNav />
      <section className="w-full max-h-screen p-6 overflow-y-scroll overflow-hidden">
        <h2 className="text-4xl font-bold text-orange-700">Editar Usuario</h2>
        <Toaster position="top-right" richColors />
        <section className="w-full h-fit bg-stone-300 rounded-md mt-6 flex flex-col gap-2 p-4">
          <EditProductForm product={product} />
        </section>
      </section>
    </main>
  );
}
