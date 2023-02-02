import modalRemoveHandler from "./modal-remove.js";
import removeCartItems from "./removeCartItems.js";
import clearLocalStorage from "./clearLocalStorage.js";
import createOrder from "./createOrder.js";
import toOrderBtnHandler from "./orderCartBtn.js";

function formRender() {
  const modal = document.querySelector(".modal"),
    formDetails = document.querySelector(".form__details"),
    formDestination = document.querySelector(".form__destination"),
    submitBtn = modal.querySelector(".form__btn"),
    cart = document.querySelector(".cart"),
    emptyCart = document.querySelector(".empty__cart"),
    formElement = document.querySelector("#form");

  const form = {
    user: {},
    address: {},
  };

  const urlPost =
    "https://shift-winter-2023-backend.onrender.com/api/pizza/createOrder/";

  const messages = {
    Succes: "Ваш заказ принят",
    Error: "Ошибка, повторите попытку позже",
  };

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: data,
    });
    console.log(res.status);

    if (res.status === 200 || res.status === 201) {
      const message = createResultModalMessage(messages.Succes);
      const orderBtn = document.querySelector(".order__btn");
      removeCartItems(cart);
      clearLocalStorage();
      orderBtn.removeEventListener("click", toOrderBtnHandler);
      emptyCart.classList.add("show-cart");
      resultMessageHandle(modal, message);
    } else {
      const message = createResultModalMessage(messages.Error);
      resultMessageHandle(modal, message);
    }
  };

  modalRemoveHandler(modal);

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    form.user = createFormObj(formDetails);
    form.address = createFormObj(formDestination);

    const json = JSON.stringify(changeId(createOrder(form)));

    postData(urlPost, json);
  });

  function resultMessageHandle(modal, messageElement) {
    formElement.classList.add("hide");
    modal.append(messageElement);

    setTimeout(() => {
      modal.classList.remove("show");
      formElement.classList.remove("hide");
      messageElement.remove();
    }, 3500);
  }

  function createResultModalMessage(message) {
    const div = document.createElement("div");
    div.classList.add("modal__content");
    div.classList.add("message");
    div.innerHTML = `
      <div class="">
       ${message}
      </div>
    `;
    return div;
  }

  function changeId(form) {
    form.pizzas.forEach((item) => {
      item.id = +item.id;
    });
    return form;
  }

  function createFormObj(form) {
    const formData = new FormData(form);
    return Object.fromEntries(formData.entries());
  }
}

export default formRender;
