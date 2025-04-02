import Contato from "./_components/Contato";
import Experiencias from "./_components/Experiencias";
import Footer from "./_components/Footer";
import Inicio from "./_components/Inicio";
import Navbar from "./_components/Navbar";
import Projetos from "./_components/Projetos";
import SobreMim from "./_components/SobreMim";

export default function Portfolio() {
  return (
    <div className="flex h-full flex-col bg-fundo_azul_1 text-texto_principal">
      <Navbar />
      <div className="mb-32 mt-[140px] grid grid-cols-9 gap-4 lg:grid-cols-5">
        <div className="col-span-1"></div>
        <div className="col-span-7 flex flex-col gap-28 lg:col-span-3">
          <Inicio />
          <SobreMim />
          <Projetos />
          <Experiencias />
          <Contato />
        </div>
        <div className="col-span-1"></div>
      </div>
      <Footer />
    </div>
  );
}
