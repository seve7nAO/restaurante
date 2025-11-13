import Cupcake from "../assets/img/Cup.png";
import Button from "./button";
import Bolinho from "../assets/img/bolo.png";
function Specials() {
  return (
    <div className="bg-[var(--nav-bar)] text-white p-7 flex flex-col md:flex-row items-center justify-evenly gap-10">
      {/* TEXTO */}
      <div className="flex flex-col items-center justify-center gap-6 text-center px-6 py-12 md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-[#d4af37]">
          Cada doce nasce de um toque de encanto.
        </h2>
        <p className="text-lg text-[#f5f3ef] font-medium">
          Cada doce nasce de um toque de encanto.
        </p>
        <p className="text-[#f5f3ef] max-w-md">
          Jhamylys — a musa que deu gosto à nossa inspiração.
        </p>

        <div className="pt-3">
          <Button>Prove já</Button>
        </div>
      </div>

      {/* IMAGENS */}
      <div className="flex flex-col sm:flex-row gap-6 md:w-1/2 items-center justify-center  transition-transform duration-300">
        <div className="border-4 border-[#d4af37] bg-transparent rounded-xl overflow-hidden w-60 h-60 hover:rotate-4 transition-transform duration-300">
          <img
            src={Cupcake}
            alt="Prato especial 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="border-4 border-[#d4af37] bg-transparent rounded-xl overflow-hidden w-60 h-60 hover:rotate-4 transition-transform duration-300">
          <img
            src={Bolinho}
            alt="Prato especial 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Specials;
