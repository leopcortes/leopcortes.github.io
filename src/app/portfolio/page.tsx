import Inicio from "./_components/Inicio";
import Navbar from "./_components/Navbar";

export default function Portfolio() {
  return (
    <div className="text-texto_principal flex h-screen flex-col bg-[#081426]">
      {/* <div className="pointer-events-none fixed top-0 left-0 z-10 h-[100vh] w-[100vw] bg-black/70 opacity-0 transition duration-300"></div> */}
      <Navbar />
      <Inicio />
    </div>
  );
}
