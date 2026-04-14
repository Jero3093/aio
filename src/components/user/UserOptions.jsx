"use client";

import DeleteUser from "@/utils/auth/users/deleteUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function UserOptions({ userId }) {
  const router = useRouter();

  const showToast = () => {
    toast("Seguro de eliminar este usuario?", {
      action: {
        label: "Eliminar",
        onClick: () => handleDelete(),
      },
    });

    setTimeout(() => {
      router.push("/dashboard/users");
    }, 2000);
  };

  const handleDelete = async () => await DeleteUser({ userId });

  return (
    <section className="flex flex-row items-center gap-6">
      <Link
        href={`/dashboard/users/${userId}/edit`}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Editar
      </Link>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => showToast()}
      >
        Eliminar
      </button>
    </section>
  );
}

export default UserOptions;
