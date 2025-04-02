import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

export default function Projetos() {
  return (
    <div className="mb-16 flex flex-col gap-8" id="projetos">
      <div>
        <h3 className="leading-3.5 mb-3 border-l-[3px] border-azul_principal px-3 py-[0.2rem] text-[0.85rem] font-medium uppercase tracking-[0.5px] text-verde_principal transition duration-300">
          Projetos
        </h3>

        <h1 className="leading-20 font-abril_fatface text-[2.5rem] font-normal text-texto_principal transition duration-300">
          Projetos que já realizei
        </h1>

        <p className="mt-3 text-[0.95rem] leading-8 text-texto_secundario">
          Esses são alguns dos projetos que já realizei, alguns por conta
          própria outros foram feitos para universidade. Nesses projetos busquei
          trabalhar com aquilo que me interessa buscando aprimorar meus
          conceitos nas áreas necessárias.
        </p>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem className="xl:basis-1/2 2xl:basis-1/3">
            <div className="flex h-full flex-col rounded-2xl bg-fundo_azul_2 p-5">
              <div className="flex-grow">
                <h3 className="mb-3 border-l-[3px] border-azul_principal px-3 py-[0.3rem] text-sm font-medium uppercase leading-3 tracking-[0.5px] text-verde_principal transition duration-300">
                  Projeto para Empresa Júnior
                </h3>

                <h1 className="leading-20 font-lexend text-2xl font-semibold text-texto_principal transition duration-300">
                  <a href="https://www.struct.unb.br/" target="_blank">
                    Site Struct EJ
                  </a>
                </h1>

                <p className="mt-3 text-[0.95rem] leading-6 text-texto_secundario">
                  Projeto do atual site da empresa júnior de engenharia de
                  computação da Universidade de Brasília onde atuei como
                  gerente, designer e desenvolvedor. Feito utilizando React,
                  TypeScript, Prisma, TailwindCSS.
                </p>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="xl:basis-1/2 2xl:basis-1/3">
            <div className="flex h-full flex-col rounded-2xl bg-fundo_azul_2 p-5">
              <div className="flex-grow">
                <h3 className="mb-3 border-l-[3px] border-azul_principal px-3 py-[0.3rem] text-sm font-medium uppercase leading-3 tracking-[0.5px] text-verde_principal transition duration-300">
                  Projeto para Empresa Júnior
                </h3>

                <h1 className="leading-20 font-lexend text-2xl font-semibold text-texto_principal transition duration-300">
                  Aplicativo para o Evento CSBC 2024
                </h1>

                <p className="mt-3 text-[0.95rem] leading-6 text-texto_secundario">
                  Aplicativo para consulta de eventos e recebimento de notícias
                  do evento Congresso da Sociedade Brasileira de Computação
                  2024. Prototipação e desenvolvimento do front-end. Feito
                  utilizando React Native e Expo.
                </p>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="xl:basis-1/2 2xl:basis-1/3">
            <div className="flex h-full flex-col rounded-2xl bg-fundo_azul_2 p-5">
              <div className="flex-grow">
                <h3 className="mb-3 border-l-[3px] border-azul_principal px-3 py-[0.3rem] text-sm font-medium uppercase leading-3 tracking-[0.5px] text-verde_principal transition duration-300">
                  Projeto para Empresa Júnior
                </h3>

                <h1 className="leading-20 font-lexend text-2xl font-semibold text-texto_principal transition duration-300">
                  Sistema de Gerenciamento de Estoque
                </h1>

                <p className="mt-3 text-[0.95rem] leading-6 text-texto_secundario">
                  Sistema web de gerenciamento de estoque para empresa que
                  assessora restaurantes. Interfaces para controle de usuários,
                  estoque, importação de notas fiscais, geração de inventários,
                  entre outros. Gerência da equipe, prototipação e
                  desenvolvimento full-stack. Feito utilizando React,
                  TypeScript, Prisma, TailwindCSS.
                </p>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="xl:basis-1/2 2xl:basis-1/3">
            <div className="flex h-full flex-col rounded-2xl bg-fundo_azul_2 p-5">
              <div className="flex-grow">
                <h3 className="mb-3 border-l-[3px] border-azul_principal px-3 py-[0.3rem] text-sm font-medium uppercase leading-3 tracking-[0.5px] text-verde_principal transition duration-300">
                  Projeto para universidade
                </h3>

                <h1 className="leading-20 font-lexend text-2xl font-semibold text-texto_principal transition duration-300">
                  Irrigador Automático
                </h1>

                <p className="mt-3 text-[0.95rem] leading-6 text-texto_secundario">
                  Projeto para a universidade de um irrigador automático para
                  plantas pequenas. Feito utilizando Arduino com C++, sensores
                  de umidade, bomba peristáltica e LEDs.
                </p>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="xl:basis-1/2 2xl:basis-1/3">
            <div className="flex h-full flex-col rounded-2xl bg-fundo_azul_2 p-5">
              <div className="flex-grow">
                <h3 className="mb-3 border-l-[3px] border-azul_principal px-3 py-[0.3rem] text-sm font-medium uppercase leading-3 tracking-[0.5px] text-verde_principal transition duration-300">
                  Projeto para universidade
                </h3>

                <h1 className="leading-20 font-lexend text-2xl font-semibold text-texto_principal transition duration-300">
                  Cofre Automático
                </h1>

                <p className="mt-3 text-[0.95rem] leading-6 text-texto_secundario">
                  Projeto para a universidade de um cofre inteligente com
                  abertura via senha ou celular. Feito utilizando Arduino com
                  C++, LCS, motores e LEDs.
                </p>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="xl:basis-1/2 2xl:basis-1/3">
            <div className="flex h-full flex-col rounded-2xl bg-fundo_azul_2 p-5">
              <div className="flex-grow">
                <h3 className="mb-3 border-l-[3px] border-azul_principal px-3 py-[0.3rem] text-sm font-medium uppercase leading-3 tracking-[0.5px] text-verde_principal transition duration-300">
                  Projeto Pessoal
                </h3>

                <h1 className="leading-20 font-lexend text-2xl font-semibold text-texto_principal transition duration-300">
                  Jogo Escape
                </h1>

                <p className="mt-3 text-[0.95rem] leading-6 text-texto_secundario">
                  Projeto de um pequeno jogo de fuga da prisão feito na engine
                  Unity com linguagem C#.
                </p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="border-none bg-fundo_azul_2 text-white" />
        <CarouselNext className="border-none bg-fundo_azul_2 text-white" />
      </Carousel>
    </div>
  );
}
