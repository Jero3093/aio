"use client";

import { DeleteClient } from "@/utils/clients";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function ClientOptions({ clientId }) {
  const router = useRouter();

  const showToast = () => {
    toast("Seguro de eliminar este cliente?", {
      action: {
        label: "Eliminar",
        onClick: () => handleDelete(),
      },
    });

    setTimeout(() => {
      router.push("/dashboard/clients");
    }, 2000);
  };

  const handleDelete = async () => await DeleteClient({ clientId });

  return (
    <section className="flex flex-row items-center gap-6">
      <Link
        href={`/dashboard/clients/${clientId}/edit`}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Editar
      </Link>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        onClick={() => showToast()}
      >
        Eliminar
      </button>
    </section>
  );
}

export default ClientOptions;
