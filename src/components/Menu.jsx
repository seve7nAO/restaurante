import ProductCard from "./ProductCard";
import Button from "./button";
import pancake from "../assets/img/pancake.png";
import Brown from "../assets/img/brown.png";
import Croissant from "../assets/img/croi.png";
import Tarte from "../assets/img/tarte.png";
import Mousse from "../assets/img/mousse.png";
function Menu() {
  return (
    <div
      className="bg-[var(--color-background-light)]  text-center p-9"
      id="menu"
    >
      <h1 className="text-5xl font-bold">Menu</h1>
      <div className="flex flex-wrap gap-6 justify-center  p-5">
        <ProductCard
          image={pancake}
          name="Panqueca da Aurora"
          time="10 min"
          description="Quando o silêncio ainda tem cheiro de sonho.
Macia e dourada, feita pra lembrar que todo recomeço merece doçura."
          price="2.00"
        />
        <ProductCard
          image={Brown}
          name="Brownie do Encontro"
          time="8 min"
          description="Entre o amargo e o doce, há o instante certo.
Chocolate intenso, com o toque suave que lembra o primeiro olhar que fez o tempo parar."
          price="3.00"
        />
        <ProductCard
          image={Croissant}
          name="Croissant da Tarde Serena"
          time="8 min"
          description="Um abraço quente, disfarçado de massa folhada.
Feito com manteiga e calma — porque amor também é paciência."
          price="2.50"
        />
        <ProductCard
          image={Tarte}
          name="Tarte da Flor"
          time="8 min"
          description="Uma homenagem a tudo que floresce.
Crocante por fora, suave por dentro — um lembrete de que delicadeza também é força."
          price="3.00"
        />
        <ProductCard
          image={Mousse}
          name="Mousse do Crepúsculo"
          time="8 min"
          description="Para encerrar o dia com paz.
Chocolate e baunilha em harmonia — um equilíbrio raro, como dois corações no mesmo compasso."
          price="2.80"
        />
      </div>
      <div className="p-3">
        <Button href="#">Ver mais</Button>
      </div>
    </div>
  );
}

export default Menu;
