import { TriangleAlert } from "lucide-react";
import Link from "next/link";

export default function Calculadora() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-slate-700 text-white">
      <div className="flex gap-4">
        <TriangleAlert size={40} />
        <h1 className="font-lexend text-3xl">Em Manutenção...</h1>
      </div>
      <Link
        href="/"
        className="rounded-xl bg-white px-6 py-2 text-black transition duration-200 ease-in hover:bg-black hover:text-white"
      >
        Voltar
      </Link>
    </div>
  );
}
