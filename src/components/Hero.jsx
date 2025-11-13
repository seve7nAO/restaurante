import Button from "./button";
import heroImg from "../assets/img/jhamy.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className=" bg-cover bg-center h-screen flex items-center justify-center relative backdrop-blur-sm"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="relative z-10 text-center p-8 max-w-3xl">
        <h1 className="text-4xl md:text-6xl mb-4 text-[var(--color-primary)] drop-shadow-sm font-[var(--font-serif)]">
          Bem-vindo ao Café Jhamylys
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-white">
          Experimente um sabor e ambiente inigualáveis.
        </p>

        <Button href="#menu">Explorar menu</Button>
      </div>
    </section>
  );
}
