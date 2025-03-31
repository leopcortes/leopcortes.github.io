export default function Footer() {
  return (
    <footer className="p-0">
      <div className="mx-96 flex flex-wrap items-center justify-between py-6">
        <a
          href="#"
          className="leading-20 font-abril_fatface mr-12 rounded-full text-[2rem] tracking-[1px] text-texto_principal transition duration-300"
        >
          <span className="text-verde_principal">L</span>PC.
        </a>
        <p className="pt-[10px] text-texto_secundario">
          &copy; Copyright 2025. Todos os diretos reservados.
        </p>
      </div>
    </footer>
  );
}
