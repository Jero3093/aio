import Link from "next/link";

function InventoryVisualizer({ inventory }) {
  return (
    <section className="w-full min-h-56 max-h-72 bg-stone-200 rounded-md mt-6 flex flex-col p-6 gap-4">
      <h2 className="text-2xl font-semibold text-orange-600">Inventario</h2>
      <span className="w-full border-b-2 border-orange-500"></span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden overflow-y-scroll">
        {inventory.map((product) => (
          <Link
            key={product.id}
            href={`/dashboard/inventory/${product.id}`}
            className="p-4 rounded-lg cursor-pointer hover:bg-stone-700 transition-colors"
          >
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-700">${product.price}</p>
            <p className="text-gray-700">Stock: {product.stock}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default InventoryVisualizer;
