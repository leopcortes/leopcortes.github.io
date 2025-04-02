export default function Navbar() {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-16 w-full justify-center bg-white/5 backdrop-blur-lg transition duration-300">
      <nav className="flex flex-wrap items-center">
        <a
          href="#"
          className="leading-20 mr-12 font-abril_fatface text-[2rem] tracking-[1px] text-texto_principal transition duration-300"
        >
          <span className="text-verde_principal">L</span>PC.
        </a>
        <div className="flex flex-row justify-between">
          <ul className="flex w-full items-center gap-12">
            <li>
              <a
                href="#inicio"
                className="mx-0 my-4 inline-block text-sm font-semibold uppercase tracking-[0.5px] text-texto_secundario opacity-90 transition duration-300 ease-in hover:text-verde_principal"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#sobremim"
                className="mx-0 my-4 inline-block text-sm font-semibold uppercase tracking-[0.5px] text-texto_secundario opacity-90 transition duration-300 ease-in hover:text-verde_principal"
              >
                Sobre Mim
              </a>
            </li>
            <li>
              <a
                href="#projetos"
                className="mx-0 my-4 inline-block text-sm font-semibold uppercase tracking-[0.5px] text-texto_secundario opacity-90 transition duration-300 ease-in hover:text-verde_principal"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#experiencias"
                className="mx-0 my-4 inline-block text-sm font-semibold uppercase tracking-[0.5px] text-texto_secundario opacity-90 transition duration-300 ease-in hover:text-verde_principal"
              >
                Experiências
              </a>
            </li>
            <li>
              <a
                href="#contatos"
                className="mx-0 my-4 inline-block text-sm font-semibold uppercase tracking-[0.5px] text-texto_secundario opacity-90 transition duration-300 ease-in hover:text-verde_principal"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
