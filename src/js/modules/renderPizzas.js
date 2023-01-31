import showIngredients from "./ingredients";

function toRenderPizzas(pizzas) {
  const menuSection = document.querySelector(".menu");

  pizzas.forEach((pizza) => {
    const div = document.createElement("div");
    const pizzaBasketCheck = localStorage.getItem(pizza.id)
      ? "В корзине"
      : "Выбрать";
    div.classList.add("menu__item");
    div.innerHTML += `
    <div class="menu__item-image_wrapper">
        <img class="menu__item-image" src="${pizza.img}" alt="${pizzas.name}">
    </div>
    <p class="menu__item-name">${pizza.name}</p>
    <hr>
    <p class="menu__item-ingredients">${showIngredients(pizza.ingredients)}</p>
    <div class="menu__item-footer">
        <p class="menu__item-price">От ${pizza.price.default}₽</p>
        <hr>
        <button class="menu__item-btn" id="menu__item-btn">${pizzaBasketCheck}</button>
    </div>
     
  `;
    menuSection.append(div);
  });
}

export default toRenderPizzas;
