"use strict";

function showIngedients(ingredients) {
  let str = "";

  ingredients.forEach((item) => (str += item + ", "));
  str = str[0].toUpperCase() + str.slice(1, str.length - 2);

  return str;
}

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
    <p class="menu__item-ingredients">${showIngedients(pizza.ingredients)}</p>
  `;
    menuSection.append(div);
  });
}

getPizzas("https://shift-winter-2023-backend.onrender.com/api/pizza");
