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
      {/* <div className="pointer-events-none fixed top-0 left-0 z-10 h-[100vh] w-[100vw] bg-black/70 opacity-0 transition duration-300"></div> */}
      <Navbar />
      <div className="mt-[140px] flex flex-col gap-[70px]">
        <Inicio />
        <SobreMim />
        <Projetos />
        <Experiencias />
        <Contato />
      </div>
      <Footer />
    </div>
  );
}
