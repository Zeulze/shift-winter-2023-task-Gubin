/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/getPizzas.js":
/*!*************************************!*\
  !*** ./src/js/modules/getPizzas.js ***!
  \*************************************/
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

/***/ "./src/js/modules/ingredients.js":
/*!***************************************!*\
  !*** ./src/js/modules/ingredients.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function showIngredients(ingredients) {
  let str = "";

  ingredients.forEach((item) => (str += item + ", "));
  str = str[0].toUpperCase() + str.slice(1, str.length - 2);

  return str;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showIngredients);


/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ingredients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingredients */ "./src/js/modules/ingredients.js");


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
      ${(0,_ingredients__WEBPACK_IMPORTED_MODULE_0__["default"])(pizza.ingredients)}
    `;

    modal.querySelector(".modal__ingredients").textContent = ingredients;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./src/js/modules/renderPizzas.js":
/*!****************************************!*\
  !*** ./src/js/modules/renderPizzas.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ingredients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingredients */ "./src/js/modules/ingredients.js");


function toRenderPizzas(pizzas) {
  const menuSection = document.querySelector(".menu");

  pizzas.forEach((pizza) => {
    const div = document.createElement("div");

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
        <button class="menu__item-btn" id="menu__item-btn">Выбрать</button>
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
/* harmony import */ var _modules_renderPizzas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/renderPizzas */ "./src/js/modules/renderPizzas.js");
/* harmony import */ var _modules_getPizzas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getPizzas */ "./src/js/modules/getPizzas.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");






async function App() {
  const pizzas = await (
    await _modules_getPizzas__WEBPACK_IMPORTED_MODULE_1__["default"]
  )("https://shift-winter-2023-backend.onrender.com/api/pizza");

  (0,_modules_renderPizzas__WEBPACK_IMPORTED_MODULE_0__["default"])(pizzas);
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])(pizzas);
}

App();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map