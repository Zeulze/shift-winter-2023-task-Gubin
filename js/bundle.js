/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/modal/modal-remove.js":
/*!**********************************************!*\
  !*** ./src/js/modules/modal/modal-remove.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function modalRemoveHandler(modal) {
  document.addEventListener("keydown", modalRemoveOnKeydown);
  document.addEventListener("click", modalRemoveOnClick);

  function modalRemoveOnKeydown(e) {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      modal.classList.remove("show");
    }
  }

  function modalRemoveOnClick(e) {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalRemoveHandler);


/***/ }),

/***/ "./src/js/modules/modal/modal.js":
/*!***************************************!*\
  !*** ./src/js/modules/modal/modal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pizza_ingredients_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pizza/ingredients.js */ "./src/js/modules/pizza/ingredients.js");
/* harmony import */ var _modal_remove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-remove.js */ "./src/js/modules/modal/modal-remove.js");



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

  (0,_modal_remove_js__WEBPACK_IMPORTED_MODULE_1__["default"])(modal);

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
      ${(0,_pizza_ingredients_js__WEBPACK_IMPORTED_MODULE_0__["default"])(pizza.ingredients)}
    `;

    modal.querySelector(".modal__ingredients").textContent =
      pizzaMainInfo.ingredients;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./src/js/modules/pizza/getPizzas.js":
/*!*******************************************!*\
  !*** ./src/js/modules/pizza/getPizzas.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function getPizzas(url) {
  return await fetch(url).then((resp) => resp.json());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPizzas);


/***/ }),

/***/ "./src/js/modules/pizza/ingredients.js":
/*!*********************************************!*\
  !*** ./src/js/modules/pizza/ingredients.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function showIngredients(ingredients) {
  let str = "";

  ingredients.forEach((item) => (str += item + ", "));

  return str[0].toUpperCase() + str.slice(1, str.length - 2);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showIngredients);


/***/ }),

/***/ "./src/js/modules/pizza/renderPizzas.js":
/*!**********************************************!*\
  !*** ./src/js/modules/pizza/renderPizzas.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ingredients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingredients */ "./src/js/modules/pizza/ingredients.js");


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
    <p class="menu__item-ingredients">${(0,_ingredients__WEBPACK_IMPORTED_MODULE_0__["default"])(pizza.ingredients)}</p>
    <div class="menu__item-footer">
        <p class="menu__item-price">От ${pizza.price.default}₽</p>
        <hr>
        <button class="menu__item-btn" id="menu__item-btn">${pizzaBasketCheck}</button>
    </div>
     
  `;
    menuSection.append(div);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toRenderPizzas);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_pizza_renderPizzas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pizza/renderPizzas */ "./src/js/modules/pizza/renderPizzas.js");
/* harmony import */ var _modules_pizza_getPizzas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pizza/getPizzas */ "./src/js/modules/pizza/getPizzas.js");
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal/modal */ "./src/js/modules/modal/modal.js");






async function App() {
  const pizzas = await (0,_modules_pizza_getPizzas__WEBPACK_IMPORTED_MODULE_1__["default"])(
    "https://shift-winter-2023-backend.onrender.com/api/pizza"
  );

  localStorage.setItem("NumberOfItems", pizzas.length);
  (0,_modules_pizza_renderPizzas__WEBPACK_IMPORTED_MODULE_0__["default"])(pizzas);
  (0,_modules_modal_modal__WEBPACK_IMPORTED_MODULE_2__["default"])(pizzas);
}

App();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map