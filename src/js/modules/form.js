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

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-type": "application/json",
      },
    });

    console.log(data);

    return await res.json();
  };

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    form.user = createFormObj(formDetails);
    form.address = createFormObj(formDestination);

    removeCartItems(cart);

    const json = JSON.stringify(createOrder(form));
    console.log(json);

    postData(
      "https://shift-winter-2023-backend.onrender.com/api/pizza/createOrder",
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
