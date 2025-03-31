"use client";

export default function Inicio() {
  const baixarPdf = () => {
    const link = document.createElement("a");
    link.href = "/Curriculo_Leonardo_Cortes.pdf";
    link.download = "Curriculo_Leonardo_Cortes.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative w-full overflow-hidden pt-[140px]" id="inicio">
      <div className="flex h-[200px] flex-row items-center justify-center gap-16">
        <div>
          {/* <h3 className="leading-3.5 mb-3 border-l-[3px] border-azul_principal px-3 py-[0.2rem] text-[0.85rem] font-medium uppercase tracking-[0.5px] text-verde_principal transition duration-300">
            Programador
          </h3> */}

          <h1 className="font-abril_fatface leading-20 text-[4rem] font-normal text-texto_principal transition duration-300">
            Leonardo Pereira Côrtes
          </h1>

          <p className="text-[0.95rem] leading-10 text-texto_secundario">
            Desenvolvedor Web Full Stack.
          </p>
        </div>

        <div className="mb-4 ml-4 flex items-center">
          <button
            onClick={baixarPdf}
            className="radius-0 relative mb-2 cursor-pointer border-b-[2.5px] border-azul_principal bg-transparent px-[0.15rem] text-[1rem] font-medium tracking-normal text-verde_principal transition duration-300 ease-in hover:border-verde_principal hover:text-[#68c7b2] hover:transition hover:duration-300"
          >
            Meu Currículo
          </button>
        </div>
      </div>
    </div>
  );
}
