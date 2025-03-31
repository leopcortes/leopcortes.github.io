export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-20 w-full justify-center transition duration-300">
      <nav className="flex flex-wrap items-center">
        <a
          href="#"
          className="text-texto_principal mr-12 text-[2rem] leading-20 tracking-[1px] transition duration-300"
        >
          <span className="text-verde_principal">L</span>PC.
        </a>
        <div className="flex flex-row justify-between">
          <ul className="flex w-full items-center gap-12">
            <li>
              <a
                href="#inicio"
                className="text-texto_secundario hover:text-verde_principal mx-0 my-4 inline-block text-sm font-semibold tracking-[0.5px] uppercase opacity-90 transition duration-300 ease-in"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#sobremim"
                className="text-texto_secundario hover:text-verde_principal mx-0 my-4 inline-block text-sm font-semibold tracking-[0.5px] uppercase opacity-90 transition duration-300 ease-in"
              >
                Sobre Mim
              </a>
            </li>
            <li>
              <a
                href="#conhecimentos"
                className="text-texto_secundario hover:text-verde_principal mx-0 my-4 inline-block text-sm font-semibold tracking-[0.5px] uppercase opacity-90 transition duration-300 ease-in"
              >
                Conhecimentos
              </a>
            </li>
            <li>
              <a
                href="#projetos"
                className="text-texto_secundario hover:text-verde_principal mx-0 my-4 inline-block text-sm font-semibold tracking-[0.5px] uppercase opacity-90 transition duration-300 ease-in"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contatos"
                className="text-texto_secundario hover:text-verde_principal mx-0 my-4 inline-block text-sm font-semibold tracking-[0.5px] uppercase opacity-90 transition duration-300 ease-in"
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
