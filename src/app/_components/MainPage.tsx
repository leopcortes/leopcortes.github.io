import Link from "next/link";

export default function MainPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#0f0f0f] text-center">
      <div className="flex flex-col items-center">
        {/* Nome */}
        <div className="mx-0 my-auto cursor-default text-9xl font-bold uppercase leading-[99%]">
          <span className="not-hover:duration-[2000ms] inline-block align-middle hover:drop-shadow-[0_0_15px_#fff] hover:transition hover:duration-300">
            l
          </span>
          <span className="not-hover:duration-[2000ms] inline-block align-middle hover:drop-shadow-[0_0_15px_#fff] hover:transition hover:duration-300">
            e
          </span>
          <span className="not-hover:duration-[2000ms] inline-block align-middle hover:drop-shadow-[0_0_15px_#fff] hover:transition hover:duration-300">
            o
          </span>
          <span className="not-hover:duration-[2000ms] inline-block align-middle hover:drop-shadow-[0_0_15px_#fff] hover:transition hover:duration-300">
            n
          </span>
          <span className="not-hover:duration-[2000ms] inline-block align-middle hover:drop-shadow-[0_0_15px_#fff] hover:transition hover:duration-300">
            a
          </span>
          <span className="not-hover:duration-[2000ms] inline-block align-middle hover:drop-shadow-[0_0_15px_#fff] hover:transition hover:duration-300">
            r
          </span>
          <span className="not-hover:duration-[2000ms] inline-block align-middle hover:drop-shadow-[0_0_15px_#fff] hover:transition hover:duration-300">
            d
          </span>
          <Link
            href="https://github.com/leopcortes"
            className="not-hover:duration-[2000ms] inline-block align-middle hover:drop-shadow-[0_0_15px_#fff] hover:transition hover:duration-300"
          >
            o
          </Link>
        </div>

        {/* Sobrenome */}
        <div className="mx-0 my-auto cursor-default text-[83px] font-bold uppercase leading-[99%]">
          <span className="not-hover:duration-[2000ms] inline-block align-middle hover:drop-shadow-[0_0_12px_#fff] hover:transition hover:duration-300">
            p
          </span>
          <span className="not-hover:duration-[2000ms] inline-block align-middle hover:drop-shadow-[0_0_12px_#fff] hover:transition hover:duration-300">
            e
          </span>
          <span className="not-hover:duration-[2000ms] inline-block align-middle hover:drop-shadow-[0_0_12px_#fff] hover:transition hover:duration-300">
            r
          </span>
          <span className="not-hover:duration-[2000ms] inline-block align-middle hover:drop-shadow-[0_0_12px_#fff] hover:transition hover:duration-300">
            e
          </span>
          <span className="not-hover:duration-[2000ms] inline-block align-middle hover:drop-shadow-[0_0_12px_#fff] hover:transition hover:duration-300">
            i
          </span>
          <span className="not-hover:duration-[2000ms] inline-block align-middle hover:drop-shadow-[0_0_12px_#fff] hover:transition hover:duration-300">
            r
          </span>
          <span className="not-hover:duration-[2000ms] inline-block align-middle hover:drop-shadow-[0_0_12px_#fff] hover:transition hover:duration-300">
            a
          </span>{" "}
          <span className="not-hover:duration-[2000ms] inline-block align-middle hover:drop-shadow-[0_0_12px_#fff] hover:transition hover:duration-300">
            c
          </span>
          <span className="not-hover:duration-[2000ms] inline-block align-middle hover:drop-shadow-[0_0_12px_#fff] hover:transition hover:duration-300">
            ô
          </span>
          <span className="not-hover:duration-[2000ms] inline-block align-middle hover:drop-shadow-[0_0_12px_#fff] hover:transition hover:duration-300">
            r
          </span>
          <span className="not-hover:duration-[2000ms] inline-block align-middle hover:drop-shadow-[0_0_12px_#fff] hover:transition hover:duration-300">
            t
          </span>
          <span className="not-hover:duration-[2000ms] inline-block align-middle hover:drop-shadow-[0_0_12px_#fff] hover:transition hover:duration-300">
            e
          </span>
          <span className="not-hover:duration-[2000ms] inline-block align-middle hover:drop-shadow-[0_0_12px_#fff] hover:transition hover:duration-300">
            s
          </span>
        </div>

        {/* Botão - Portfólio */}
        <div className="flex w-full p-2">
          <Link
            className="pointer bg-verde_principal hover:bg-verde_hover relative inline-block w-full py-6 text-4xl font-bold uppercase text-white/70 transition-all duration-300 ease-in-out hover:text-white/100 active:translate-y-[2px] active:bg-[#474a5c] active:shadow-[0.5px_0.5px_rgb(59,59,59)]"
            href="/portfolio"
          >
            PORTFÓLIO
          </Link>
        </div>

        {/* Botão - Calculadoras */}
        <div className="flex w-full p-2">
          <Link
            className="pointer relative inline-block w-full bg-[#606582] py-6 text-4xl font-bold uppercase text-white/70 transition-all duration-300 ease-in-out hover:bg-[#50546e] hover:text-white/100 active:translate-y-[2px] active:bg-[#474a5c] active:shadow-[0.5px_0.5px_rgb(59,59,59)]"
            href="/calculadora"
          >
            PROJETO CALCULADORAS
          </Link>
        </div>
      </div>
    </div>
  );
}
