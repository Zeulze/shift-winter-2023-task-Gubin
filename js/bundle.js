/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/js/modules/pizzas.js":
/*!**********************************!*\
  !*** ./src/js/modules/pizzas.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ingredients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingredients */ "./src/js/modules/ingredients.js");


async function getPizzas(url) {
  const menuSection = document.querySelector(".menu");

  const pizzas = await fetch(url).then((resp) => resp.json());

  pizzas.forEach((pizza) => {
    const div = document.createElement("div");

    console.log(pizza.price);

    div.classList.add("menu__item");
    div.innerHTML = `
    <div class="menu__item-image_wrapper">
        <img class="menu__item-image" src="${pizza.img}" alt="${pizzas.name}">
    </div>
    <p class="menu__item-name">${pizza.name}</p>
    <p class="menu__item-ingredients">${(0,_ingredients__WEBPACK_IMPORTED_MODULE_0__["default"])(pizza.ingredients)}</p>
    <div class="menu__item-footer">
        <p class="menu__item-price">От ${pizza.price.default}₽</p>
        <button class="menu__item-btn">Выбрать</button>
    </div>
  `;
    menuSection.append(div);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPizzas);


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
/* harmony import */ var _modules_pizzas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pizzas */ "./src/js/modules/pizzas.js");




(0,_modules_pizzas__WEBPACK_IMPORTED_MODULE_0__["default"])("https://shift-winter-2023-backend.onrender.com/api/pizza");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map