import Button from "./button";
import Input from "./Input";
import Select from "./Select";

function Contato() {
  return (
    <div className="flex flex-col items-center justify-center p-9" id="contact">
      <div className="flex flex-col gap-3 p-5 text-center">
        <h1 className="text-6xl texto">Faça uma Reserva</h1>
        <p>Faça sua reserva +233 967 940 212 ou preencha o formulário abaixo</p>
      </div>

      <form className="flex flex-wrap justify-center gap-4">
        <Select />
        <Input type="date" />
        <Input type="time" />
      </form>

      <div className="mt-10">
        <Button href="#">Enviar</Button>
      </div>
    </div>
  );
}

export default Contato;
