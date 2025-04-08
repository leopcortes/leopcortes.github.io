import {
  BatteryCharging,
  Box,
  Calculator,
  ChartArea,
  CircleGauge,
  CircuitBoard,
  Clock,
  DatabaseZap,
  Gauge,
  GraduationCap,
  Paintbrush,
  Rabbit,
  Ruler,
  Scale,
  SquareSigma,
  ThermometerSun,
  Unplug,
  Weight,
} from "lucide-react";
import Link from "next/link";

export default function Calculadora() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#212121] p-8 sm:p-24">
      <div className="grid w-full grid-cols-1 bg-[#212121] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Link
          href="/calculadoras/calculadoracientifica"
          className="m-[9px] flex w-3/4 cursor-pointer items-center justify-center gap-1.5 self-center justify-self-center rounded-[7px] border-[1px] border-none bg-[#e02443] p-[10px] font-normal text-white decoration-transparent drop-shadow-[0px_0px_2px_#101010] hover:-translate-y-[1px] hover:bg-[#c20e2c] active:translate-y-[2px] active:bg-[#c20e2c] active:shadow-[0.5px_0.5px_rgb(59,59,59)]"
        >
          <Calculator strokeWidth={1.5} />
          Cientifica
        </Link>
        <Link
          href="/calculadoras/calculadorasistemas"
          className="m-[9px] flex w-3/4 cursor-pointer items-center justify-center gap-1.5 self-center justify-self-center rounded-[7px] border-[1px] border-none bg-[#e02443] p-[10px] font-normal text-white decoration-transparent drop-shadow-[0px_0px_2px_#101010] hover:-translate-y-[1px] hover:bg-[#c20e2c] active:translate-y-[2px] active:bg-[#c20e2c] active:shadow-[0.5px_0.5px_rgb(59,59,59)]"
        >
          <SquareSigma strokeWidth={1.5} />
          Sistemas
        </Link>
        <Link
          href="/calculadoras/calculadorasigaa"
          className="m-[9px] flex w-3/4 cursor-pointer items-center justify-center gap-1.5 self-center justify-self-center rounded-[7px] border-[1px] border-none bg-[#00853e] p-[10px] font-normal text-white decoration-transparent drop-shadow-[0px_0px_2px_#101010] hover:-translate-y-[1px] hover:bg-[#046d35] active:translate-y-[2px] active:bg-[#046d35] active:shadow-[0.5px_0.5px_rgb(59,59,59)]"
        >
          <GraduationCap strokeWidth={1.5} />
          SIGAA
        </Link>
        <Link
          href="/calculadoras/conversaotempo"
          className="m-[9px] flex w-3/4 cursor-pointer items-center justify-center gap-1.5 self-center justify-self-center rounded-[7px] border-[1px] border-none bg-[#606582] p-[10px] font-normal text-white decoration-transparent drop-shadow-[0px_0px_2px_#101010] hover:-translate-y-[1px] hover:bg-[#474a5c] active:translate-y-[2px] active:bg-[#474a5c] active:shadow-[0.5px_0.5px_rgb(59,59,59)]"
        >
          <Clock strokeWidth={1.5} />
          Tempo
        </Link>
        <Link
          href="/calculadoras/conversaovelocidade"
          className="m-[9px] flex w-3/4 cursor-pointer items-center justify-center gap-1.5 self-center justify-self-center rounded-[7px] border-[1px] border-none bg-[#606582] p-[10px] font-normal text-white decoration-transparent drop-shadow-[0px_0px_2px_#101010] hover:-translate-y-[1px] hover:bg-[#474a5c] active:translate-y-[2px] active:bg-[#474a5c] active:shadow-[0.5px_0.5px_rgb(59,59,59)]"
        >
          <Gauge strokeWidth={1.5} />
          Velocidade
        </Link>
        <Link
          href="/calculadoras/conversaomassa"
          className="m-[9px] flex w-3/4 cursor-pointer items-center justify-center gap-1.5 self-center justify-self-center rounded-[7px] border-[1px] border-none bg-[#606582] p-[10px] font-normal text-white decoration-transparent drop-shadow-[0px_0px_2px_#101010] hover:-translate-y-[1px] hover:bg-[#474a5c] active:translate-y-[2px] active:bg-[#474a5c] active:shadow-[0.5px_0.5px_rgb(59,59,59)]"
        >
          <Weight strokeWidth={1.5} />
          Massa
        </Link>
        <Link
          href="/calculadoras/conversaocomprimento"
          className="m-[9px] flex w-3/4 cursor-pointer items-center justify-center gap-1.5 self-center justify-self-center rounded-[7px] border-[1px] border-none bg-[#606582] p-[10px] font-normal text-white decoration-transparent drop-shadow-[0px_0px_2px_#101010] hover:-translate-y-[1px] hover:bg-[#474a5c] active:translate-y-[2px] active:bg-[#474a5c] active:shadow-[0.5px_0.5px_rgb(59,59,59)]"
        >
          <Ruler strokeWidth={1.5} />
          Comprimento
        </Link>
        <Link
          href="/calculadoras/conversaodados"
          className="m-[9px] flex w-3/4 cursor-pointer items-center justify-center gap-1.5 self-center justify-self-center rounded-[7px] border-[1px] border-none bg-[#606582] p-[10px] font-normal text-white decoration-transparent drop-shadow-[0px_0px_2px_#101010] hover:-translate-y-[1px] hover:bg-[#474a5c] active:translate-y-[2px] active:bg-[#474a5c] active:shadow-[0.5px_0.5px_rgb(59,59,59)]"
        >
          <DatabaseZap strokeWidth={1.5} />
          Dados
        </Link>
        <Link
          href="/calculadoras/conversaotemperatura"
          className="m-[9px] flex w-3/4 cursor-pointer items-center justify-center gap-1.5 self-center justify-self-center rounded-[7px] border-[1px] border-none bg-[#606582] p-[10px] font-normal text-white decoration-transparent drop-shadow-[0px_0px_2px_#101010] hover:-translate-y-[1px] hover:bg-[#474a5c] active:translate-y-[2px] active:bg-[#474a5c] active:shadow-[0.5px_0.5px_rgb(59,59,59)]"
        >
          <ThermometerSun strokeWidth={1.5} />
          Temperatura
        </Link>
        <Link
          href="/calculadoras/conversaovolume"
          className="m-[9px] flex w-3/4 cursor-pointer items-center justify-center gap-1.5 self-center justify-self-center rounded-[7px] border-[1px] border-none bg-[#606582] p-[10px] font-normal text-white decoration-transparent drop-shadow-[0px_0px_2px_#101010] hover:-translate-y-[1px] hover:bg-[#474a5c] active:translate-y-[2px] active:bg-[#474a5c] active:shadow-[0.5px_0.5px_rgb(59,59,59)]"
        >
          <Box strokeWidth={1.5} />
          Volume
        </Link>
        <Link
          href="/calculadoras/conversaoarea"
          className="m-[9px] flex w-3/4 cursor-pointer items-center justify-center gap-1.5 self-center justify-self-center rounded-[7px] border-[1px] border-none bg-[#606582] p-[10px] font-normal text-white decoration-transparent drop-shadow-[0px_0px_2px_#101010] hover:-translate-y-[1px] hover:bg-[#474a5c] active:translate-y-[2px] active:bg-[#474a5c] active:shadow-[0.5px_0.5px_rgb(59,59,59)]"
        >
          <ChartArea strokeWidth={1.5} />
          Área
        </Link>
        <Link
          href="/calculadoras/conversaopressao"
          className="m-[9px] flex w-3/4 cursor-pointer items-center justify-center gap-1.5 self-center justify-self-center rounded-[7px] border-[1px] border-none bg-[#606582] p-[10px] font-normal text-white decoration-transparent drop-shadow-[0px_0px_2px_#101010] hover:-translate-y-[1px] hover:bg-[#474a5c] active:translate-y-[2px] active:bg-[#474a5c] active:shadow-[0.5px_0.5px_rgb(59,59,59)]"
        >
          <CircleGauge strokeWidth={1.5} />
          Pressão
        </Link>
        <Link
          href="/calculadoras/associacaoresistores"
          className="m-[9px] flex w-3/4 cursor-pointer items-center justify-center gap-1.5 self-center justify-self-center rounded-[7px] border-[1px] border-none bg-[#814e13] p-[10px] font-normal text-white decoration-transparent drop-shadow-[0px_0px_2px_#101010] hover:-translate-y-[1px] hover:bg-[#663b0b] active:translate-y-[2px] active:bg-[#663b0b] active:shadow-[0.5px_0.5px_rgb(59,59,59)]"
        >
          <Unplug strokeWidth={1.5} />
          Resistores
        </Link>
        <Link
          href="/calculadoras/associacaocapacitores"
          className="m-[9px] flex w-3/4 cursor-pointer items-center justify-center gap-1.5 self-center justify-self-center rounded-[7px] border-[1px] border-none bg-[#814e13] p-[10px] font-normal text-white decoration-transparent drop-shadow-[0px_0px_2px_#101010] hover:-translate-y-[1px] hover:bg-[#663b0b] active:translate-y-[2px] active:bg-[#663b0b] active:shadow-[0.5px_0.5px_rgb(59,59,59)]"
        >
          <CircuitBoard strokeWidth={1.5} />
          Capacitores
        </Link>
        <Link
          href="/calculadoras/associacaoindutores"
          className="m-[9px] flex w-3/4 cursor-pointer items-center justify-center gap-1.5 self-center justify-self-center rounded-[7px] border-[1px] border-none bg-[#814e13] p-[10px] font-normal text-white decoration-transparent drop-shadow-[0px_0px_2px_#101010] hover:-translate-y-[1px] hover:bg-[#663b0b] active:translate-y-[2px] active:bg-[#663b0b] active:shadow-[0.5px_0.5px_rgb(59,59,59)]"
        >
          <BatteryCharging strokeWidth={1.5} />
          Indutores
        </Link>
        <Link
          href="/calculadoras/codigocoresresistores"
          className="m-[9px] flex w-3/4 cursor-pointer items-center justify-center gap-1.5 self-center justify-self-center rounded-[7px] border-[1px] border-none bg-[#bea05d] p-[10px] font-normal text-white decoration-transparent drop-shadow-[0px_0px_2px_#101010] hover:-translate-y-[1px] hover:bg-[#a7894f] active:translate-y-[2px] active:bg-[#a7894f] active:shadow-[0.5px_0.5px_rgb(59,59,59)]"
        >
          <Paintbrush strokeWidth={1.5} />
          Cores Resistores
        </Link>
        <Link
          href="/calculadoras/calculadoraimc"
          className="m-[9px] flex w-3/4 cursor-pointer items-center justify-center gap-1.5 self-center justify-self-center rounded-[7px] border-[1px] border-none bg-[#194b8c] p-[10px] font-normal text-white decoration-transparent drop-shadow-[0px_0px_2px_#101010] hover:-translate-y-[1px] hover:bg-[#0f3566] active:translate-y-[2px] active:bg-[#0f3566] active:shadow-[0.5px_0.5px_rgb(59,59,59)]"
        >
          <Scale strokeWidth={1.5} />
          IMC
        </Link>
        <Link
          href="/calculadoras/calculadorapace"
          className="m-[9px] flex w-3/4 cursor-pointer items-center justify-center gap-1.5 self-center justify-self-center rounded-[7px] border-[1px] border-none bg-[#ed4224] p-[10px] font-normal text-white decoration-transparent drop-shadow-[0px_0px_2px_#101010] hover:-translate-y-[1px] hover:bg-[#b1321c] active:translate-y-[2px] active:bg-[#b1321c] active:shadow-[0.5px_0.5px_rgb(59,59,59)]"
        >
          <Rabbit strokeWidth={1.5} />
          Pace
        </Link>
      </div>
    </div>
  );
}
