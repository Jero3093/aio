"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

function LogOutBtn() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "DELETE",
      });

      const parseRes = await res.json();

      if (parseRes?.value) {
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        toast.error("Error al cerrar sesión");
      }
    } catch (error) {
      console.log(error?.message);
    }
  };

  return (
    <button
      onClick={() => handleLogout()}
      className="w-fit h-12 bg-red-500 text-black font-semibold text-xl p-4 px-8 flex items-center justify-center rounded-md cursor-pointer transition-all duration-300 hover:bg-red-600 hover:scale-105"
    >
      Cerrar Sesión
    </button>
  );
}

export default LogOutBtn;
