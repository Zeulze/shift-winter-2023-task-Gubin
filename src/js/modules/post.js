import removeCartItems from "./removeCartItems.js";
import clearLocalStorage from "./clearLocalStorage.js";
import toOrderBtnHandler from "./orderCartBtn.js";

async function postData(url, data, modal, cart) {
  const emptyCart = document.querySelector(".empty__cart");
  const messages = {
    Succes: "Ваш заказ принят",
    Error: "Ошибка, повторите попытку позже",
  };

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

  function resultMessageHandle(modal, messageElement) {
    const formElement = document.querySelector("#form");
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
}

export default postData;
