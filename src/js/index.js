"use strict";

import showPizzas from "./modules/pizzas";
import getPizzas from "./modules/getPizzas";

async function App() {
  const pizzas = await (
    await getPizzas
  )("https://shift-winter-2023-backend.onrender.com/api/pizza");

  showPizzas(pizzas);
  console.log(pizzas);
}

App();
