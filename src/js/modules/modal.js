import showIngredients from "./ingredients.js";
import modalRemoveHandler from "./modal-remove.js";

function modal(pizzas) {
  const btn = document.querySelectorAll("#menu__item-btn"),
    modal = document.querySelector(".modal"),
    modalName = modal.querySelector(".modal__header-name"),
    modalImg = modal.querySelector(".modal__header-img"),
    modalHeaderPrice = modal.querySelectorAll(".modal__header-price"),
    modalHeaderBtn = modal.querySelectorAll(".modal__header-right-btn"),
    totalPrice = modal.querySelector(".total-price"),
    addBtn = modal.querySelector(".add-btn");

  const pizzaMainInfo = {
    idPizza: 0,
    prices: {
      default: 0,
      medium: 0,
      large: 0,
    },
    total: 0,
    ingredients: "",
    imgSizeDefault: 200,
    size: "",
  };

  modalRemoveHandler(modal);
  //Нужен рефакторинг

  btn.forEach((item, index) => {
    item.addEventListener("click", () => {
      pizzaMainInfo.idPizza = pizzas[index].id;
      pizzaMainInfo.total = pizzaMainInfo.prices.default;
      totalPrice.textContent = pizzaMainInfo.total;
      modal.classList.add("show");
      setModalPrices(pizzaMainInfo.prices, index);
      if (!localStorage.getItem(pizzaMainInfo.idPizza)) {
        setModalHeaderBtn(modalHeaderBtn, 0, true);
        addBtn.textContent = "Добавить пиццу в корзину";
      } else {
        setModalHeaderBtn(
          modalHeaderBtn,
          checkPrice(pizzaMainInfo.idPizza),
          false
        );
        addBtn.textContent = "Удалить из корзины";
      }
      setIngredients(pizzas[index]);
      modalName.textContent = `${pizzas[index].name}`;
      modalImg.src = `${pizzas[index].img}`;
      modalImg.alt = `${pizzas[index].alt}`;
    });
  });

  addBtn.addEventListener("click", () => {
    const itemCardBtn =
      document.querySelectorAll("#menu__item-btn")[pizzaMainInfo.idPizza - 1];
    const pizzaInfo = {
      id: `${pizzaMainInfo.idPizza}`,
      size: `${pizzaMainInfo.size}`,
      crust: "",
    };

    if (!localStorage.getItem(pizzaMainInfo.idPizza)) {
      localStorage.setItem(pizzaMainInfo.idPizza, JSON.stringify(pizzaInfo));
      addBtn.textContent = "Удалить из корзины";
      itemCardBtn.textContent = "В корзине";
    } else {
      addBtn.textContent = "Добавить пиццу в корзину";
      itemCardBtn.textContent = "Выбрать";
      localStorage.removeItem(pizzaMainInfo.idPizza);
    }
  });

  modalHeaderBtn.forEach((item, btnIndex) => {
    item.addEventListener("click", () => {
      setModalHeaderBtn(modalHeaderBtn, btnIndex);
    });
  });

  function setModalPrices(prices, index) {
    prices.default = pizzas[index].price.default;
    prices.medium = pizzas[index].price.size.medium;
    prices.large = pizzas[index].price.size.large;

    modalHeaderPrice[0].textContent = `${prices.default}₽`;
    modalHeaderPrice[1].textContent = `+${prices.medium}₽`;
    modalHeaderPrice[2].textContent = `+${prices.large}₽`;
  }

  function checkPrice(id) {
    const pizza = JSON.parse(localStorage.getItem(id));
    if (pizza.size === "medium") return 1;
    if (pizza.size === "large") return 2;
    return 0;
  }

  function setModalHeaderBtn(btn, index, flag) {
    btn.forEach((item) => item.classList.remove("selected"));
    btn[index].classList.add("selected");

    if (flag) {
      localStorage.removeItem(pizzaMainInfo.idPizza);
      addBtn.textContent = "Добавить пиццу в корзину";
    }

    totalPrice.textContent = setPrice(index);
  }

  function setPrice(index) {
    console.log(pizzaMainInfo.prices.default + pizzaMainInfo.prices.medium);
    if (index === 0) {
      console.log("0");
      pizzaMainInfo.total = pizzaMainInfo.prices.default;
      pizzaMainInfo.size = "small";
      modalImg.style.width = `${pizzaMainInfo.imgSizeDefault}px`;
    }
    if (index === 1) {
      console.log("1");
      pizzaMainInfo.total =
        pizzaMainInfo.prices.default + pizzaMainInfo.prices.medium;
      pizzaMainInfo.size = "medium";
      modalImg.style.width = `${pizzaMainInfo.imgSizeDefault + 50}px`;
    }
    if (index === 2) {
      pizzaMainInfo.total =
        pizzaMainInfo.prices.default + pizzaMainInfo.prices.large;
      pizzaMainInfo.size = "large";
      modalImg.style.width = `${pizzaMainInfo.imgSizeDefault + 100}px`;
    }
    return pizzaMainInfo.total;
  }

  function setIngredients(pizza) {
    pizzaMainInfo.ingredients = `
      ${showIngredients(pizza.ingredients)}
    `;

    modal.querySelector(".modal__ingredients").textContent =
      pizzaMainInfo.ingredients;
  }
}

export default modal;
