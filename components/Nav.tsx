"use client";

const Header = () => {
  return (
    <header className="fixed top-0 w-full h-[65px] text-start text-white shadow-md bg-black border-b border-borders-light z-40 select-none">
      <nav className="mx-auto flex items-center justify-between container-class gap-4">
        <section className="justify-between text-xl flex mt-4 mx-8">
          Actividad 2 - La calidad de software
        </section>
        <ul className="flex flex-col items-center mt-3 font-medium lg:flex-row mr-4">
          <li>
            <a href="/">
              <button className="w-full py-2 mx-2 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                Inicio
              </button>
            </a>
          </li>
          <li>
            <a href="/paradigmas">
              <button className="w-full py-2 mx-2 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                Paradigmas
              </button>
            </a>
          </li>
          <li>
            <a href="/bibliografias">
              <button className="w-full py-2 mx-2 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                Referencias Bibliograficas
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
