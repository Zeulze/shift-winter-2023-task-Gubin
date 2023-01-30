import showIngredients from "./ingredients";

async function getPizzas(url) {
  const menuSection = document.querySelector(".menu");

  const pizzas = await fetch(url).then((resp) => resp.json());

  pizzas.forEach((pizza) => {
    const div = document.createElement("div");

    div.classList.add("menu__item");
    div.innerHTML = `
    <div class="menu__item-image_wrapper">
        <img class="menu__item-image" src="${pizza.img}" alt="${pizzas.name}">
    </div>
    <p class="menu__item-name">${pizza.name}</p>
    <p class="menu__item-ingredients">${showIngredients(pizza.ingredients)}</p>
  `;
    menuSection.append(div);
  });
}

export default getPizzas;