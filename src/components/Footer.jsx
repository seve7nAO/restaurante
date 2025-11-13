import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Clock,
  Phone,
  Map,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    <div className="bg-[var(--nav-bar)]  text-[#f5f3ef]  text-center mt-10 pt-5 pb-3">
      <div className="flex justify-evenly P-2 border-b-2 border-gray-300 w-full flex-wrap gap-6 pb-6 mb-6   ">
        <div className="flex flex-col gap-2 text-left">
          <h2 className="logo text-2xl md:text-3xl text-left ">
            Café <br />
            Jhamylys
          </h2>

          <p className="flex">
            <MapPin size={20} />
            Rua do Mar Azul, nº 9
          </p>
          <p className="flex">
            {" "}
            <Map size={20} />
            Porto, Portugal
          </p>
          <p className="flex">
            {" "}
            <Phone size={20} />
            Telefone: +351 9 777 314 159
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#d4af37] text-2xl">Horário de Funcionamento</p>
          <p className="flex">
            {"  "}
            <Clock size={20} />
            Segunda a Sexta: 8h - 22h
          </p>
          <p className="flex">
            {"  "}
            <Clock size={20} />
            Sábado e Domingo: 9h - 23h
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-[#d4af37] text-2xl">Links Rápidos</p>
          <a href="#home" className="flex hover:translate-x-1 transition">
            <ArrowRight size={20} />
            Home
          </a>
          <a href="#menu" className="flex hover:translate-x-1 transition">
            <ArrowRight size={20} />
            menu
          </a>
          <a href="#contact" className="flex hover:translate-x-1 transition">
            <ArrowRight size={20} />
            Contacto
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-[#d4af37] text-2xl">Junte-se a nós</p>
          <div className="flex gap-5">
            <a
              href="#"
              className="text-[#d4af37] bg-white rounded-full p-2 hover:scale-110 transition hover:shadow-lg hover:bg-gray-300"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-[#d4af37] bg-white rounded-full p-2 hover:scale-110 transition hover:shadow-lg hover:bg-gray-300"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-[#d4af37] bg-white rounded-full p-2 hover:scale-110 transition hover:shadow-lg hover:bg-gray-300"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
      <p>
        &copy; 2024 Café Jhamylys. Todos os direitos reservados. Criado por{" "}
        <a href="">Seven</a>
      </p>
    </div>
  );
}

export default Footer;
