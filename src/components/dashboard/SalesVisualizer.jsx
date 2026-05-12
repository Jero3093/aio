import useClients from "@/hooks/useClients";
import Link from "next/link";

async function SalesVisualizer({ sales, session }) {
  const clients = await useClients({
    companyId: session?._id,
    forVisualizer: false,
  });

  return (
    <section className="w-full min-h-56 max-h-72 bg-stone-200 rounded-md mt-6 flex flex-col p-6 gap-4">
      <h2 className="text-2xl font-semibold text-orange-600">Ventas</h2>
      <span className="w-full border-b-2 border-orange-500"></span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden overflow-y-scroll">
        {sales.map((sale) => (
          <Link
            key={sale.id}
            href={`/dashboard/sales/${sale.id}`}
            className="p-4 rounded-lg cursor-pointer hover:bg-stone-300 transition-colors"
          >
            <h3 className="text-lg font-bold">
              Cliente:{" "}
              {clients.find((c) => c?.id === sale?.client_id)?.full_name}
            </h3>
            <p className="text-gray-700">Precio Final: ${sale.total_billing}</p>
            <p className="text-gray-700">
              Estatus: {sale.billing_complete ? "Completa" : "Incompleta"}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default SalesVisualizer;
