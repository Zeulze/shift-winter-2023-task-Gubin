"use strict";

import toRenderPizzas from "./modules/pizza/renderPizzas";
import getPizzas from "./modules/pizza/getPizzas";
import modal from "./modules/modal/modal";

async function App() {
  const pizzas = await getPizzas(
    "https://shift-winter-2023-backend.onrender.com/api/pizza"
  );

  localStorage.setItem("NumberOfItems", pizzas.length);
  toRenderPizzas(pizzas);
  modal(pizzas);
}

App();
