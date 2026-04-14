import Link from "next/link";
import { FiMenu } from "react-icons/fi";

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
        <ul className="flex flex-col gap-5">
          <li>
            <p>Inventario</p>
          </li>
          <li>
            <p>Facturacion</p>
          </li>
          <li>
            <p>Ventas</p>
          </li>
          <li>
            <Link href="/dashboard/users">
              <p>Usuarios</p>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings">
              <p>Ajustes</p>
            </Link>
          </li>
        </ul>
      </menu>
    </nav>
  );
}

export default DashboardNav;
