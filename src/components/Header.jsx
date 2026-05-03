function Header() {
  return (
    <header className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-4xl font-bold md:text-5xl">
        <span className="text-orange-500">AI</span>
        <span className="text-stone-700">O</span> -{" "}
        <span className="text-orange-500">All In</span>{" "}
        <span className="text-stone-700">One</span>
      </h1>
      <div className="flex flex-row items-center gap-3">
        <span className="w-10 h-0.5 bg-orange-400"></span>
        <h2 className="text-lg font-sans">
          Sistema de Gestión todo en uno para empresas
        </h2>
        <span className="w-10 h-0.5 bg-orange-400"></span>
      </div>
    </header>
  );
}

export default Header;
