"use client";
import { ArrowRight, ClipboardCopy } from "lucide-react";
import { Element } from "react-scroll";

export default function Contato() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => console.log("Copiado para a área de transferência!"))
      .catch((err) => console.error("Erro ao copiar: ", err));
  };

  return (
    <Element
      className="grid grid-cols-[1.05fr_0.8fr] justify-between gap-8"
      name="contatos"
    >
      <div>
        <h3 className="leading-3.5 mb-3 border-l-[3px] border-azul_principal px-3 py-[0.2rem] text-[0.85rem] font-medium uppercase tracking-[0.5px] text-verde_principal transition duration-300">
          Contate-me
        </h3>

        <h1 className="leading-20 font-abril_fatface text-[2.5rem] font-normal text-texto_principal transition duration-300">
          Vamos trabalhar juntos
        </h1>

        <p className="mt-3 text-[0.95rem] leading-8 text-texto_secundario">
          Moro em Brasília-DF, tenho horários flexíveis e desejo colocar meus
          conhecimentos em prática buscando crescer profissionalmente,
          adquirindo experiência e novas habilidades na área de tecnologia,
          computação e programação.
        </p>
      </div>

      <div className="flex h-full items-center pt-16">
        <ul className="flex flex-col gap-1">
          <a
            href="#contatos"
            className="group flex cursor-pointer items-center gap-2 text-[1.1rem] font-medium text-verde_principal transition duration-300 ease-in-out hover:text-verde_hover"
          >
            <span>
              email{" "}
              <span className="hidden group-hover:inline">
                - leo.pereira.cortes@gmail.com
              </span>
            </span>
            <ArrowRight
              size={20}
              className="transition-transform duration-300 ease-in-out group-hover:translate-x-[5px]"
            />
          </a>

          <a
            href="https://github.com/leopcortes"
            target="_blank"
            className="group flex cursor-pointer items-center gap-2 text-[1.1rem] font-medium text-verde_principal transition duration-300 ease-in-out hover:text-verde_hover"
          >
            github{" "}
            <span className="hidden group-hover:inline">- leopcortes</span>
            <ArrowRight
              size={20}
              className="transition-transform duration-300 ease-in-out group-hover:translate-x-[5px]"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/leonardo-c%C3%B4rtes-a789a91bb/"
            target="_blank"
            className="group flex cursor-pointer items-center gap-2 text-[1.1rem] font-medium text-verde_principal transition duration-300 ease-in-out hover:text-verde_hover"
          >
            linkedin{" "}
            <span className="hidden group-hover:inline">- Leonardo Côrtes</span>
            <ArrowRight
              size={20}
              className="transition-transform duration-300 ease-in-out group-hover:translate-x-[5px]"
            />
          </a>

          <a
            href="https://www.instagram.com/leop.cortes"
            target="_blank"
            className="group flex cursor-pointer items-center gap-2 text-[1.1rem] font-medium text-verde_principal transition duration-300 ease-in-out hover:text-verde_hover"
          >
            instagram{" "}
            <span className="hidden group-hover:inline">- leop.cortes</span>
            <ArrowRight
              size={20}
              className="transition-transform duration-300 ease-in-out group-hover:translate-x-[5px]"
            />
          </a>

          <a
            onClick={() => copyToClipboard("(61)991164633")}
            className="ease-- group flex cursor-pointer items-center gap-2 text-[1.1rem] font-medium text-verde_principal transition duration-300 hover:text-verde_hover"
          >
            whatsapp{" "}
            <span className="hidden group-hover:inline">- (61)991164633</span>
            <ClipboardCopy
              size={20}
              className="transition-transform duration-300 ease-in-out group-hover:translate-x-[5px]"
            />
          </a>

          <a
            onClick={() => copyToClipboard("leop#3838")}
            className="group flex cursor-pointer items-center gap-2 text-[1.1rem] font-medium text-verde_principal transition duration-300 ease-in-out hover:text-verde_hover"
          >
            discord{" "}
            <span className="hidden group-hover:inline">- leop#3838</span>
            <ClipboardCopy
              size={20}
              className="transition-transform duration-300 ease-in-out group-hover:translate-x-[5px]"
            />
          </a>
        </ul>
      </div>
    </Element>
  );
}
