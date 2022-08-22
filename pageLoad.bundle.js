"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["pageLoad"],{

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg");


function loadPage() {
	const _contentElement = document.createElement("div");
    _contentElement.id = "content";

	const _contentHeadline = document.createElement("h1");
	_contentHeadline.textContent = "Welcome to Foodfy";

	const _contentRestaurantImg = new Image();
	_contentRestaurantImg.classList.add("main-restaurant-img");
	_contentRestaurantImg.src = _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;

	const _contentDescription = document.createElement("h3");
	_contentDescription.textContent =
		"Our restaurant has the loveliest interior design and the finest cuisine one can imagine!";

	_contentElement.append(
        _contentHeadline,
        _contentRestaurantImg,
        _contentDescription
    );

    document.body.appendChild(_contentElement);
}

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27a72eb75fd6c357ce66.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/page-load.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTZDOztBQUU5QjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLDRDQUFhOztBQUUxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVzdGF1cmFudEltZyBmcm9tIFwiLi9yZXN0YXVyYW50LmpwZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcblx0Y29uc3QgX2NvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBfY29udGVudEVsZW1lbnQuaWQgPSBcImNvbnRlbnRcIjtcblxuXHRjb25zdCBfY29udGVudEhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRfY29udGVudEhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIEZvb2RmeVwiO1xuXG5cdGNvbnN0IF9jb250ZW50UmVzdGF1cmFudEltZyA9IG5ldyBJbWFnZSgpO1xuXHRfY29udGVudFJlc3RhdXJhbnRJbWcuY2xhc3NMaXN0LmFkZChcIm1haW4tcmVzdGF1cmFudC1pbWdcIik7XG5cdF9jb250ZW50UmVzdGF1cmFudEltZy5zcmMgPSBSZXN0YXVyYW50SW1nO1xuXG5cdGNvbnN0IF9jb250ZW50RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdF9jb250ZW50RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxuXHRcdFwiT3VyIHJlc3RhdXJhbnQgaGFzIHRoZSBsb3ZlbGllc3QgaW50ZXJpb3IgZGVzaWduIGFuZCB0aGUgZmluZXN0IGN1aXNpbmUgb25lIGNhbiBpbWFnaW5lIVwiO1xuXG5cdF9jb250ZW50RWxlbWVudC5hcHBlbmQoXG4gICAgICAgIF9jb250ZW50SGVhZGxpbmUsXG4gICAgICAgIF9jb250ZW50UmVzdGF1cmFudEltZyxcbiAgICAgICAgX2NvbnRlbnREZXNjcmlwdGlvblxuICAgICk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKF9jb250ZW50RWxlbWVudCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9