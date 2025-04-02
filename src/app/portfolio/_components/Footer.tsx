export default function Footer() {
  return (
    <footer className="p-0">
      <div className="mx-48 flex flex-wrap items-center justify-between py-6 lg:mx-64 xl:mx-96">
        <a
          href="#"
          className="leading-20 mr-12 rounded-full font-abril_fatface text-[2rem] tracking-[1px] text-texto_principal transition duration-300"
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
