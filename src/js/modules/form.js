import modalRemoveHandler from "./modal-remove.js";
import removeCartItems from "./removeCartItems.js";
import clearLocalStorage from "./clearLocalStorage.js";
import createOrder from "./createOrder.js";

async function formRender() {
  const modal = document.querySelector(".modal"),
    formDetails = document.querySelector(".form__details"),
    formDestination = document.querySelector(".form__destination"),
    submitBtn = modal.querySelector(".form__btn"),
    cart = document.querySelector(".cart"),
    emptyCart = document.querySelector(".empty__cart");

  const form = {
    user: {},
    address: {},
  };

  //Выдает ошибку 400 с сообщением, что неверный id у пиццы, скрин есть в ДС

  const postData = async (url, data) => {
    console.log(data);
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: data,
    });

    return await res.json();
  };

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    form.user = createFormObj(formDetails);
    form.address = createFormObj(formDestination);

    removeCartItems(cart);
    console.log(createOrder(form));
    const json = JSON.stringify(createOrder(form));

    postData(
      "https://shift-winter-2023-backend.onrender.com/api/pizza/createOrder/",
      json
    )
      .then((data) => {
        console.log(data);
      })
      .catch(() => {
        console.log("bad");
      })
      .finally(() => {});

    clearLocalStorage();
    emptyCart.classList.add("show-cart");
  });

  modalRemoveHandler(modal);

  function createFormObj(form) {
    const formData = new FormData(form);
    return Object.fromEntries(formData.entries());
  }
}

export default formRender;
