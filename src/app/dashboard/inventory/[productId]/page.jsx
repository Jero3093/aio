import DashboardNav from "@/components/dashboard/DashboardNav";
import ProductOptions from "@/components/inventory/ProductOptions";
import useProduct from "@/hooks/useProduct";
import useSession from "@/hooks/useSession";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";

export default async function Product({ params }) {
  const { productId } = await params;

  const session = await useSession();

  !session && redirect("/");

  const product = await useProduct({ productId: productId });

  return (
    <main className="w-full max-h-screen flex flex-row gap-10 py-6">
      <DashboardNav />
      <Toaster position="top-right" richColors />
      <section className="w-full max-h-screen p-6 overflow-y-scroll overflow-hidden">
        <h2 className="text-4xl font-bold">Usuario</h2>
        <section className="w-full h-56 bg-stone-800 rounded-md mt-6 flex flex-col gap-2 p-4">
          <h3 className="text-2xl font-semiboldF">{product?.name}</h3>
          <h3 className="text-xl">{product?.price}</h3>
          <h3 className="text-xl">{product?.stock}</h3>
          <h3 className="text-xl">{product?.description}</h3>
          <ProductOptions productId={productId} />
        </section>
      </section>
    </main>
  );
}
