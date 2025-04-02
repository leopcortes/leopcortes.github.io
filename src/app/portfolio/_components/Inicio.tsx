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
    <div className="relative w-full overflow-hidden" id="inicio">
      <div className="mx-48 flex flex-row justify-between lg:mx-64 xl:mx-96">
        <div className="">
          {/* <h3 className="leading-3.5 mb-3 border-l-[3px] border-azul_principal px-3 py-[0.2rem] text-[0.85rem] font-medium uppercase tracking-[0.5px] text-verde_principal transition duration-300">
            Programador
          </h3> */}

          <h1 className="leading-20 font-abril_fatface text-[3.7rem] font-normal text-texto_principal transition duration-300">
            Leonardo Pereira Côrtes
          </h1>

          <p className="text-[0.95rem] leading-10 text-texto_secundario">
            Desenvolvedor Web Full Stack.
          </p>

          <button
            onClick={baixarPdf}
            className="radius-0 relative mt-2 cursor-pointer border-b-[2.5px] border-azul_principal bg-transparent px-[0.15rem] text-[1.1rem] font-medium tracking-normal text-verde_principal transition duration-300 ease-in hover:border-verde_principal hover:text-verde_hover hover:transition hover:duration-300"
          >
            Meu Currículo
          </button>
        </div>

        <div className="mb-4 flex items-center">
          <div className="h-48 w-48 rounded-full bg-texto_principal"></div>
        </div>
      </div>
    </div>
  );
}
