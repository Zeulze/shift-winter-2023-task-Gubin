import showIngredients from "./ingredients";

function modal(pizzas) {
  // console.log(pizzas);
  const btn = document.querySelectorAll("#menu__item-btn"),
    modal = document.querySelector(".modal"),
    modalName = modal.querySelector(".modal__header-name"),
    modalImg = modal.querySelector(".modal__header-img"),
    modalHeaderPrice = modal.querySelectorAll(".modal__header-price"),
    modalHeaderBtn = modal.querySelectorAll(".modal__header-right-btn"),
    totalPrice = modal.querySelector(".total-price");

  let prices = {
    default: 0,
    medium: 0,
    large: 0,
  };

  let total = 0;
  let ingredients = "";
  let imgSizeDefault = 200;

  console.log(pizzas);

  btn.forEach((item, index) => {
    item.addEventListener("click", () => {
      modal.classList.add("show");
      setModalHeaderBtn(modalHeaderBtn, 0);
      setModalPrices(prices, index);
      setIngredients(pizzas[index]);
      modalName.textContent = `${pizzas[index].name}`;
      modalImg.src = `${pizzas[index].img}`;
      modalImg.alt = `${pizzas[index].alt}`;

      total = prices.default;
      totalPrice.textContent = total;
    });
  });

  modalHeaderBtn.forEach((item, btnIndex) => {
    item.addEventListener("click", () => {
      setModalHeaderBtn(modalHeaderBtn, btnIndex);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      modal.classList.remove("show");
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });

  modalHeaderPrice.forEach((item, index) => {});

  function setModalPrices(prices, index) {
    prices.default = pizzas[index].price.default;
    prices.medium = pizzas[index].price.size.medium;
    prices.large = pizzas[index].price.size.large;

    modalHeaderPrice[0].textContent = `${prices.default}₽`;
    modalHeaderPrice[1].textContent = `+${prices.medium}₽`;
    modalHeaderPrice[2].textContent = `+${prices.large}₽`;
  }

  function setModalHeaderBtn(btn, index) {
    btn.forEach((item) => item.classList.remove("selected"));
    btn[index].classList.add("selected");

    if (index === 0) {
      total = prices.default;
      modalImg.style.width = `${imgSizeDefault}px`;
    }
    if (index === 1) {
      total = prices.default + prices.medium;
      modalImg.style.width = `${imgSizeDefault + 50}px`;
    }
    if (index === 2) {
      total = prices.default + prices.large;
      modalImg.style.width = `${imgSizeDefault + 100}px`;
    }

    totalPrice.textContent = total;
  }

  function setIngredients(pizza) {
    ingredients = `
      ${showIngredients(pizza.ingredients)}
    `;

    modal.querySelector(".modal__ingredients").textContent = ingredients;
  }
}

export default modal;
