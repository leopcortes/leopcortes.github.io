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
          <h3 className="text-verde_principal border-azul_principal mb-3 border-l-[3px] px-3 py-[0.2rem] text-[0.85rem] leading-3.5 font-medium tracking-[0.5px] uppercase transition duration-300">
            Programador
          </h3>

          <h1 className="text-texto_principal text-[4rem] leading-20 font-normal transition duration-300">
            Leonardo Pereira Côrtes
          </h1>

          <p className="text-texto_secundario text-[0.95rem] leading-10">
            Desenvolvedor Web Full Stack.
          </p>
        </div>

        <div className="mb-4 ml-4 flex items-center">
          <button
            onClick={baixarPdf}
            className="radius-0 text-verde_principal hover:border-verde_principal border-azul_principal relative cursor-pointer border-b-[2.5px] bg-transparent px-[0.15rem] pt-4 text-[1rem] font-medium tracking-normal transition duration-300 ease-in hover:text-[#68c7b2]"
          >
            Meu Currículo
          </button>
        </div>
      </div>
    </div>
  );
}
