import CardPizza from "./CardPizza";
import Header from "./Header";
import { pizzas } from "../data/pizzas";

function Home() {
  return (
    <>
      <Header />
      <section className="menu" aria-labelledby="menu-title">
        <div className="section-heading">
          <span>Nuestro menú</span>
          <h2 id="menu-title">Elige tu favorita</h2>
          <p>Seis recetas preparadas con ingredientes seleccionados.</p>
        </div>

        <div className="pizza-grid">
          {pizzas.map((pizza) => (
            <CardPizza key={pizza.id} {...pizza} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
