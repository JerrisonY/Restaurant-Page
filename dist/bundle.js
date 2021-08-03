/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutTab\": () => (/* binding */ aboutTab)\n/* harmony export */ });\nconst main = document.querySelector('main');\n\nlet aboutTab = () => {\n    main.removeAttribute('class') // removes all classes within main tag\n    console.log('hi')\n}\n\n\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\nconst main = document.querySelector('main');\nconst imageOne = document.querySelector('.bg-image');\nconst home = document.querySelector('#home');\nconst menu = document.querySelector('#menu');\nconst about = document.querySelector('#about');\n\n\nlet createButtons = () => {\n    let container = document.createElement('div');\n    let leftBtn = document.createElement('span');\n    let rightBtn = document.createElement('span');\n\n    container.classList.add('btn-container')\n    leftBtn.classList.add('left-arrow');\n    rightBtn.classList.add('right-arrow');\n\n    leftBtn.textContent = '\\u2329';\n    rightBtn.textContent = '\\u232a';\n\n    container.append(leftBtn, rightBtn)\n    main.append(container)\n\n    rightBtn.addEventListener('click', () => {\n        if (main.classList.contains('bg-image2')) {\n            main.classList.remove('bg-image2')\n            main.classList.add('bg-image')\n        } else {\n            main.classList.add('bg-image2')\n            main.classList.remove('bg-image')\n        }\n    })\n\n    leftBtn.addEventListener('click', () => {\n        if (main.classList.contains('bg-image2')) {\n            main.classList.remove('bg-image2')\n            main.classList.add('bg-image')\n        } else {\n            main.classList.add('bg-image2')\n            main.classList.remove('bg-image')\n        }\n    })\n}\n\ncreateButtons()\n\nhome.addEventListener('click', () => {\n    const menuContainer = document.querySelector('.menu-container')\n    menuContainer.remove()\n\n    createButtons();\n    main.classList.add('bg-image2');\n\n})\n\nmenu.addEventListener('click', () => {\n    const btnContainer = document.querySelector('.btn-container')\n    btnContainer.remove()\n\n    ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.menuTab)()\n})\n\nabout.addEventListener('click', () => {\n    const btnContainer = document.querySelector('.btn-container');\n    btnContainer.remove();\n    // const menuContainer = document.querySelector('.menu-container');\n    // menuContainer.remove();\n\n    (0,_about_js__WEBPACK_IMPORTED_MODULE_1__.aboutTab)()\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuTab\": () => (/* binding */ menuTab)\n/* harmony export */ });\nconst main = document.querySelector('main');\n\nlet menuTab = () => {\n    main.removeAttribute('class') // removes all classes within main tag\n    \n    let container = document.createElement('div');\n    let header = document.createElement('h4');\n    let item = document.createElement('div');\n    let text = document.createElement('h5')\n    let texta = document.createElement('p')\n    \n    let item2 = document.createElement('div');\n    let text2 = document.createElement('h5');\n    let textb = document.createElement('p');\n\n    let item3 = document.createElement('div');\n    let text3 = document.createElement('h5');\n    let textc = document.createElement('p');\n\n    let item4 = document.createElement('div');\n    let text4 = document.createElement('h5');\n    let textd = document.createElement('p');\n\n    let item5 = document.createElement('div');\n    let text5 = document.createElement('h5');\n    let texte = document.createElement('p');\n\n\n    container.classList.add('menu-container');\n    header.classList.add('menu-header');\n\n    item.classList.add('menu-items');\n    item2.classList.add('menu-items');\n    item3.classList.add('menu-items');\n    item4.classList.add('menu-items');\n    item5.classList.add('menu-items');\n\n    header.textContent = 'The Taste';\n    text.textContent = 'Oyster';\n    texta.textContent = 'bison tartare + truffle custard';\n\n    text2.textContent = 'roasted scallop';\n    textb.textContent = 'whipped salmon roe, sour apple, pine nuts, sea lettuce';\n\n    text3.textContent = 'crab porridge';\n    textc.textContent = 'Prairie grains, pickled daylily, foie gras + celtuce';\n\n    text4.textContent = 'nose to tail';\n    textd.textContent = 'stuffed pig’s trotter, crispy cheek, Ontario morels + Madeira jus';\n\n    text5.textContent = 'halibut';\n    texte.textContent = 'sablefish larded halibut, caramelized squash, smoked mussel + vermouth';\n\n    item.append(text, texta)\n    item2.append(text2, textb)\n    item3.append(text3, textc)\n    item4.append(text4, textd)\n    item5.append(text5, texte)\n    container.append(header, item, item2, item3, item4, item5)\n    main.append(container)\n\n}\n\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;