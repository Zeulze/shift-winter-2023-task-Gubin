import modalRemoveHandler from "./modal-remove.js";
import createOrder from "./createOrder.js";
import postData from "./post.js";

function formRender() {
  const modal = document.querySelector(".modal"),
    formDetails = document.querySelector(".form__details"),
    formDestination = document.querySelector(".form__destination"),
    submitBtn = modal.querySelector(".form__btn"),
    cart = document.querySelector(".cart");

  const form = {
    user: {},
    address: {},
  };

  const urlPost =
    "https://shift-winter-2023-backend.onrender.com/api/pizza/createOrder/";

  modalRemoveHandler(modal);

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    form.user = createFormObj(formDetails);
    form.address = createFormObj(formDestination);

    const json = JSON.stringify(changeId(createOrder(form)));

    postData(urlPost, json, modal, cart);
  });

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
