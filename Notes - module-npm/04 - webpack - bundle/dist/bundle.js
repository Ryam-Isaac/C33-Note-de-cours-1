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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\nwindow.addEventListener(\"load\", () => {\r\n    console.log(\"Hello world!!!\");\r\n    \r\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateAsciiArt)();\r\n});\n\n//# sourceURL=webpack://webpack-test/./src/index.js?\n}");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateAsciiArt: () => (/* binding */ generateAsciiArt)\n/* harmony export */ });\nconst generateAsciiArt = () => {\r\n    document.body.innerHTML = \"<pre>\" +\r\n\"    _,                          _                  \\n\"+\r\n\"    .'  `.                  ___.&gt;\\\"''-..-.      \\n\"+   \r\n\"    `-.   ;           .--\\\"\\\"\\\"        .-._@;      \\n\"+\r\n\"       ;  !_.--..._ .'      /     .[_@'`'.         \\n\"+\r\n\"      ;            /       : .'  ; :_.._  `.       \\n\"+\r\n\"      :           ;        ;[   _T-\\\"  `.'-. `-.   \\n\"+\r\n\"       \\\\        .-:      ; `.`-=_,88p.   _.}.-\\\"  \\n\"+\r\n\"        `-.__.-'   \\\\    /L._ Y\\\",P$T888;  \\\"\\\"    \\n\"+\r\n\"                 .-'_.-'  / ;$$$$$$]8P;            \\n\"+\r\n\"                 \\\\ /     / / \\\"Y$$P\\\" ^\\\"         \\n\"+\r\n\"         fsc      ;\\\\_    `.\\\\_._                  \\n\"+\r\n\"                  ]__\\\\     \\\\___;   \\n\"+\r\n    \"</pre>\";\r\n}\r\n\r\nconst alertMessage = msg => {\r\n    alert(msg);\r\n}\n\n//# sourceURL=webpack://webpack-test/./src/utils.js?\n}");

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