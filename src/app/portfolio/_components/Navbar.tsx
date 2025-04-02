"use client";
import { useRouter } from "next/navigation";
import { Link } from "react-scroll";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="fixed left-0 top-0 z-50 flex h-16 w-full justify-center bg-white/5 backdrop-blur-lg transition duration-300">
      <nav className="flex flex-wrap items-center">
        <Link
          to=""
          spy={true}
          smooth={true}
          duration={700}
          onClick={() => router.push("/")}
          className="leading-20 mr-12 cursor-pointer font-abril_fatface text-[2rem] tracking-[1px] text-texto_principal transition duration-300"
        >
          <span className="text-verde_principal">L</span>PC.
        </Link>
        <div className="flex flex-row justify-between">
          <ul className="flex w-full items-center gap-12">
            <li>
              <Link
                to="inicio"
                spy={true}
                smooth={true}
                duration={700}
                offset={-200}
                className="mx-0 my-4 inline-block cursor-pointer text-sm font-semibold uppercase tracking-[0.5px] text-texto_secundario opacity-90 transition duration-300 ease-in hover:text-verde_principal"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="sobremim"
                spy={true}
                smooth={true}
                duration={700}
                offset={-200}
                className="mx-0 my-4 inline-block cursor-pointer text-sm font-semibold uppercase tracking-[0.5px] text-texto_secundario opacity-90 transition duration-300 ease-in hover:text-verde_principal"
              >
                Sobre Mim
              </Link>
            </li>
            <li>
              <Link
                to="projetos"
                spy={true}
                smooth={true}
                duration={700}
                offset={-200}
                className="mx-0 my-4 inline-block cursor-pointer text-sm font-semibold uppercase tracking-[0.5px] text-texto_secundario opacity-90 transition duration-300 ease-in hover:text-verde_principal"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="experiencias"
                spy={true}
                smooth={true}
                duration={700}
                offset={-200}
                className="mx-0 my-4 inline-block cursor-pointer text-sm font-semibold uppercase tracking-[0.5px] text-texto_secundario opacity-90 transition duration-300 ease-in hover:text-verde_principal"
              >
                Experiências
              </Link>
            </li>
            <li>
              <Link
                to="contatos"
                spy={true}
                smooth={true}
                duration={700}
                offset={-200}
                className="mx-0 my-4 inline-block cursor-pointer text-sm font-semibold uppercase tracking-[0.5px] text-texto_secundario opacity-90 transition duration-300 ease-in hover:text-verde_principal"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
