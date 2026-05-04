"use client";

import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { FaUsers, FaBoxOpen } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { PiCashRegisterFill } from "react-icons/pi";
import { LuDot } from "react-icons/lu";
import { PiUsersFourFill } from "react-icons/pi";

function DashboardNav() {
  const menu = (show) => {
    const menu = document.getElementById("menu");

    if (show) {
      menu.classList.remove("hidden");
      menu.classList.add("flex");
    } else {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
    }
  };

  const MenuItems = () => {
    return (
      <ul className="flex flex-col gap-12">
        <li>
          <Link
            href="/dashboard/inventory"
            className="flex flex-row items-center gap-2"
          >
            <FaBoxOpen size={32} color="oklch(64.6% 0.222 41.116)" />
            <LuDot size={20} />
            <p className="text-lg">Inventario</p>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/billing"
            className="flex flex-row items-center gap-2"
          >
            <MdPayment size={32} color="oklch(64.6% 0.222 41.116)" />
            <LuDot size={20} />
            <p className="text-lg">Facturacion</p>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/sales"
            className="flex flex-row items-center gap-2"
          >
            <PiCashRegisterFill size={32} color="oklch(64.6% 0.222 41.116)" />
            <LuDot size={20} />
            <p className="text-lg">Ventas</p>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/users"
            className="flex flex-row items-center gap-2"
          >
            <FaUsers size={32} color="oklch(64.6% 0.222 41.116)" />
            <LuDot size={20} />
            <p className="text-lg">Usuarios</p>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/clients"
            className="flex flex-row items-center gap-2"
          >
            <PiUsersFourFill size={32} color="oklch(64.6% 0.222 41.116)" />
            <LuDot size={20} />
            <p className="text-lg">Clientes</p>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/settings"
            className="flex flex-row items-center gap-2"
          >
            <IoSettingsSharp size={32} color="oklch(64.6% 0.222 41.116)" />
            <LuDot size={20} />
            <p className="text-lg">Ajustes</p>
          </Link>
        </li>
      </ul>
    );
  };

  const MobileMenu = () => {
    return (
      <menu
        className="flex-col gap-12 hidden z-0 w-screen h-screen bg-white fixed items-center justify-center"
        id="menu"
      >
        <MenuItems />
        <button
          className="cursor-pointer w-full h-12 max-w-64 border-4 border-zinc-700 text-orange-600 rounded-full text-xl font-semibold shadow-md"
          onClick={() => menu(false)}
        >
          Cerrar Menu
        </button>
      </menu>
    );
  };

  return (
    <>
      <MobileMenu />
      <nav className="flex flex-col items-center justify-between w-52 h-full px-4 py-2 gap-16">
        <section className="flex flex-row items-center justify-between w-52 h-16 bg-stone-800 rounded-r-full px-4 py-2">
          <Link href="/dashboard">
            <img src="/logo.png" className="w-22.5 h-10 aspect-auto" />
          </Link>
          <button className="cursor-pointer" onClick={() => menu(true)}>
            <FiMenu size={32} color="oklch(75% 0.183 55.934)" />
          </button>
        </section>
        <menu className="flex-col gap-8 hidden lg:flex">
          <h2 className="text-3xl font-semibold">Menu</h2>
          <MenuItems />
        </menu>
      </nav>
    </>
  );
}

export default DashboardNav;
