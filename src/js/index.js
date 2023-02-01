"use strict";

import toRenderPizzas from "./modules/renderPizzas";
import getPizzas from "./modules/getPizzas";
import modal from "./modules/modal";

async function App() {
  const pizzas = await (
    await getPizzas
  )("https://shift-winter-2023-backend.onrender.com/api/pizza");

  localStorage.setItem("NumberOfItems", pizzas.length);
  toRenderPizzas(pizzas);
  modal(pizzas);
}

App();
