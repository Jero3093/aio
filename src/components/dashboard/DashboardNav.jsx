import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { FaUsers, FaBoxOpen } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { PiCashRegisterFill } from "react-icons/pi";
import { LuDot } from "react-icons/lu";

function DashboardNav() {
  return (
    <nav className="flex flex-col items-center justify-between w-52 h-full px-4 py-2 gap-16">
      <section className="flex flex-row items-center justify-between w-52 h-16 bg-stone-900 rounded-r-full px-4 py-2">
        <Link href="/dashboard">
          <h1 className="text-2xl">AIO</h1>
        </Link>
        <button className="cursor-pointer">
          <FiMenu size={30} />
        </button>
      </section>
      <menu className="flex flex-col gap-8">
        <h2 className="text-3xl font-semibold">Menu</h2>
        <ul className="flex flex-col gap-10">
          <li>
            <Link
              href="/dashboard/inventory"
              className="flex flex-row items-center gap-2"
            >
              <FaBoxOpen size={32} />
              <LuDot size={20} />
              <p>Inventario</p>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/billing"
              className="flex flex-row items-center gap-2"
            >
              <MdPayment size={32} />
              <LuDot size={20} />
              <p>Facturacion</p>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/sales"
              className="flex flex-row items-center gap-2"
            >
              <PiCashRegisterFill size={32} />
              <LuDot size={20} />
              <p>Ventas</p>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/users"
              className="flex flex-row items-center gap-2"
            >
              <FaUsers size={32} />
              <LuDot size={20} />
              <p>Usuarios</p>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/settings"
              className="flex flex-row items-center gap-2"
            >
              <IoSettingsSharp size={32} />
              <LuDot size={20} />
              <p>Ajustes</p>
            </Link>
          </li>
        </ul>
      </menu>
    </nav>
  );
}

export default DashboardNav;
