import showIngredients from "./ingredients.js";
import removeItems from "./removeCartItems.js";
import toOrderBtnHandler from "./orderCartBtn.js";
import formRender from "./form.js";

const cart = document.querySelector(".cart"),
  emptyCart = document.querySelector(".empty__cart"),
  orderBtn = document.querySelector(".order__btn");
let cartItemsId;

render();

async function render() {
  cartItemsId = [];
  let count = 0;

  await formRender();
  removeItems(cart);

  for (let i = 0; i <= +localStorage.getItem("NumberOfItems"); i++) {
    if (localStorage.getItem(`${i}`)) {
      const itemLocalStorage = JSON.parse(localStorage.getItem(`${i}`));
      const pizza = await fetch(
        `https://shift-winter-2023-backend.onrender.com/api/pizza/${i}`
      ).then((resp) => resp.json());

      const currentPrice = setPrice(
        itemLocalStorage.size,
        i,
        pizza,
        itemLocalStorage
      );

      cartItemsId.push(i);
      renderItem(i, currentPrice, pizza, itemLocalStorage);
      count++;
    }
  }

  if (!count) {
    emptyCart.classList.add("show-cart");
    orderBtn.removeEventListener("click", toOrderBtnHandler);
  } else {
    emptyCart.classList.remove("show-cart");
    orderBtn.addEventListener("click", toOrderBtnHandler);
  }

  cart.addEventListener("click", deleteBtnHandle);
}

function deleteBtnHandle(e) {
  const btn = document.querySelectorAll(".delete__item-btn");
  const target = e.target;
  if (target && target.classList.contains("delete__item-btn")) {
    btn.forEach((item, index) => {
      if (target === item) {
        localStorage.removeItem(cartItemsId[index]);
        render();
      }
    });
  }
}

async function renderItem(id, price, pizza, localStor) {
  const item = JSON.parse(localStorage.getItem(id));
  let cartItem = document.createElement("div");

  console.log(pizza);
  cartItem.classList.add("cart__item");
  cartItem.innerHTML = `
    <div class="cart__item__left">
        <img src="${pizza.img}" alt="" class="modal__header-img">
            <p class="total-price">${price} руб</p>
    </div>
    <div class="cart__item__middle">
        <div class="middle__header">
            <p class="menu__item-name">${pizza.name}</p>
            <p class="menu__item-name"><span>Размер: </span><span class="item__size">${
              localStor.size
            }</span></p>
        </div>
        <div class="middle__bottom">
            <p><span style="font-size: 20px; font-weight: bold; color: #66b5ff">Состав: </span><span
                class="menu__item-ingredients">${showIngredients(
                  pizza.ingredients
                )}</span>
            </p>
        </div>
    </div>
    <div class="cart__item__right">
        <button class="menu__item-btn delete__item-btn">Удалить</button>
    </div>
  `;
  cart.append(cartItem);
}

function setPrice(size, id, pizza) {
  const sizes = {
    small: "",
    medium: "",
    large: "",
  };

  sizes.small = pizza.price.default;
  sizes.medium = pizza.price.size.medium;
  sizes.large = pizza.price.size.large;

  console.log(sizes);

  if (size === "small") return sizes.small;
  if (size === "medium") return sizes.small + sizes.medium;
  if (size === "large") return sizes.small + sizes.large;
}
