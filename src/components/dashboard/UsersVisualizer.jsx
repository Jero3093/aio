import Link from "next/link";

function UsersVisualizer({ users }) {
  return (
    <section className="w-full min-h-56 max-h-72 bg-stone-800 rounded-md mt-6 flex flex-col p-6 gap-4">
      <h2 className="text-2xl font-semibold">Usuarios</h2>
      <span className="w-full border-b-2 border-stone-900"></span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden overflow-y-scroll">
        {users.map((user) => (
          <Link
            key={user.id}
            href={`/dashboard/users/${user.id}`}
            className="p-4 rounded-lg cursor-pointer hover:bg-stone-700 transition-colors"
          >
            <h3 className="text-lg font-bold">{user.name}</h3>
            <p className="text-gray-400">{user.email}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default UsersVisualizer;
