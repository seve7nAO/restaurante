import restauranteImg from "../assets/img/restaurante.jpg";
import Cake from "../assets/img/cake.jpg";
import Coffee from "../assets/img/ja.png";
import Service from "../assets/img/services.png";

function Features() {
  return (
    <div
      className="min-h-screen text-center justify-center bg-[var(--color-background-light)] p-1.5 "
      id="about"
    >
      <h1 className="font-bold text-5xl p-10">Destaques</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch">
        <div className="p-6 text-center flex flex-col h-full md:border-r border-gray-300">
          <div className="mb-4 rounded-full overflow-hidden w-32 h-32 mx-auto border-4 border-[#d4af37]">
            <img
              src={restauranteImg}
              alt="Interior do restaurante, ambiente acolhedor"
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Ambiente Acolhedor</h2>
          <p className="text-gray-700 flex-grow">
            Desfrute de um espaço confortável e elegante, perfeito para todas as
            ocasiões.
          </p>
        </div>

        <div className="p-6 text-center flex flex-col h-full md:border-r border-gray-300">
          <div className="mb-4 rounded-full overflow-hidden w-32 h-32 mx-auto border-4 border-[#d4af37]">
            <img
              src={Coffee}
              alt="Café romantico"
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Café de Qualidade</h2>
          <p className="text-gray-700 flex-grow">
            Saboreie cafés preparados com grãos selecionados, garantindo uma
            experiência única a cada xícara.
          </p>
        </div>

        <div className="p-6 text-center flex flex-col h-full md:border-r border-gray-300">
          <div className="mb-4 rounded-full overflow-hidden w-32 h-32 mx-auto border-4 border-[#d4af37]">
            <img
              src={Cake}
              alt="Um bolo"
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            Bolinhos e Doces Caseiros
          </h2>
          <p className="text-gray-700 flex-grow">
            Delicie-se com nossos bolos e doces feitos artesanalmente, com
            ingredientes frescos e aquele toque caseiro especial.
          </p>
        </div>

        <div className="p-6 text-center flex flex-col h-full">
          <div className="mb-4 rounded-full overflow-hidden w-32 h-32 mx-auto border-4 border-[#d4af37]">
            <img
              src={Service}
              alt="serviços"
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            Atendimento Personalizado
          </h2>
          <p className="text-gray-700 flex-grow">
            Nossa equipe dedicada está pronta para oferecer um serviço amigável
            e eficiente, garantindo que sua visita seja sempre agradável.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
