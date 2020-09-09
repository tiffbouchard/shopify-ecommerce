module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/policy.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/policy.js":
/*!*************************!*\
  !*** ./pages/policy.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/pages/policy.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Policy = () => {\n  return __jsx(\"div\", {\n    className: \"policy-container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, \"OJOS | Policy\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  })), __jsx(\"h1\", {\n    className: \"page-title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, \"Store Policy\"), __jsx(\"div\", {\n    className: \"policy-body\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(\"h4\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, \"Return and Exchange Policy\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, \"If you\\u2019re not satisfied with your order, we are happy to offer you store credit or process and exchange for eligible items. At this time, we do not issue refunds for orders. Returns must be requested within 14 days of receiving your order. Eligible items must be unworn, unwashed, free of damage, and have the original tags. Sale items, jewelry, sunglasses, and gift cards are final sale and not eligible for returns. Customers are responsible for shipping costs associated with returns and exchanges.\", \" \"), __jsx(\"h4\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, \"Requesting a Return or Exchange\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, \"To request a refund or exchange of an item, email with your order number and items you would like to return. Once approved, we will email you a return label for the items. Please pack and send items back in their original packaging. Upon receipt of your return, you will receive a refund as a store credit (minus the cost of shipping). We have the right to deny return credits if items received do not meet our return criteria. In this case, the items will be sent back to the customer without store credit.\"), __jsx(\"h4\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, \"Shipping Policies\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, \"Please allow 10-14 days for the shipping process. Orders are typically processed in 3-7 days, with an additional 5-7 business days for shipping. If you have not received your items after 14 days, please reach out to for assistance. Shop-P\\xEAche is not responsible for damaged or lost packages due to the shipping process. However, if you incur issues, email us, and we will try to assist the best we can.\"), __jsx(\"h4\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, \"International Orders\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, \"Shop-P\\xEAche ships worldwide and provides free shipping on orders $200 and up. Once your order is processed (about 3-7 days), your items will be shipped with DHL/UPS and should arrive in an additional 5-7 business days.\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Policy);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb2xpY3kuanM/MGNhZiJdLCJuYW1lcyI6WyJQb2xpY3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDbkIsU0FDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVFO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0U7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxGLEVBTUU7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbWdCQVE4QixHQVI5QixDQUZGLEVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FaRixFQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbWdCQWJGLEVBdUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBdkJGLEVBd0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNlpBeEJGLEVBZ0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBaENGLEVBaUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb09BakNGLENBTkYsQ0FERjtBQWlERCxDQWxERDs7QUFvRGVBLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcG9saWN5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5jb25zdCBQb2xpY3kgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktY29udGFpbmVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk9KT1MgfCBQb2xpY3k8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPlN0b3JlIFBvbGljeTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1ib2R5XCI+XG4gICAgICAgIDxoND5SZXR1cm4gYW5kIEV4Y2hhbmdlIFBvbGljeTwvaDQ+XG4gICAgICAgIDxwPlxuICAgICAgICAgIElmIHlvdeKAmXJlIG5vdCBzYXRpc2ZpZWQgd2l0aCB5b3VyIG9yZGVyLCB3ZSBhcmUgaGFwcHkgdG8gb2ZmZXIgeW91XG4gICAgICAgICAgc3RvcmUgY3JlZGl0IG9yIHByb2Nlc3MgYW5kIGV4Y2hhbmdlIGZvciBlbGlnaWJsZSBpdGVtcy4gQXQgdGhpcyB0aW1lLFxuICAgICAgICAgIHdlIGRvIG5vdCBpc3N1ZSByZWZ1bmRzIGZvciBvcmRlcnMuIFJldHVybnMgbXVzdCBiZSByZXF1ZXN0ZWQgd2l0aGluXG4gICAgICAgICAgMTQgZGF5cyBvZiByZWNlaXZpbmcgeW91ciBvcmRlci4gRWxpZ2libGUgaXRlbXMgbXVzdCBiZSB1bndvcm4sXG4gICAgICAgICAgdW53YXNoZWQsIGZyZWUgb2YgZGFtYWdlLCBhbmQgaGF2ZSB0aGUgb3JpZ2luYWwgdGFncy4gU2FsZSBpdGVtcyxcbiAgICAgICAgICBqZXdlbHJ5LCBzdW5nbGFzc2VzLCBhbmQgZ2lmdCBjYXJkcyBhcmUgZmluYWwgc2FsZSBhbmQgbm90IGVsaWdpYmxlXG4gICAgICAgICAgZm9yIHJldHVybnMuIEN1c3RvbWVycyBhcmUgcmVzcG9uc2libGUgZm9yIHNoaXBwaW5nIGNvc3RzIGFzc29jaWF0ZWRcbiAgICAgICAgICB3aXRoIHJldHVybnMgYW5kIGV4Y2hhbmdlcy57XCIgXCJ9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGg0PlJlcXVlc3RpbmcgYSBSZXR1cm4gb3IgRXhjaGFuZ2U8L2g0PlxuICAgICAgICA8cD5cbiAgICAgICAgICBUbyByZXF1ZXN0IGEgcmVmdW5kIG9yIGV4Y2hhbmdlIG9mIGFuIGl0ZW0sIGVtYWlsIHdpdGggeW91ciBvcmRlclxuICAgICAgICAgIG51bWJlciBhbmQgaXRlbXMgeW91IHdvdWxkIGxpa2UgdG8gcmV0dXJuLiBPbmNlIGFwcHJvdmVkLCB3ZSB3aWxsXG4gICAgICAgICAgZW1haWwgeW91IGEgcmV0dXJuIGxhYmVsIGZvciB0aGUgaXRlbXMuIFBsZWFzZSBwYWNrIGFuZCBzZW5kIGl0ZW1zXG4gICAgICAgICAgYmFjayBpbiB0aGVpciBvcmlnaW5hbCBwYWNrYWdpbmcuIFVwb24gcmVjZWlwdCBvZiB5b3VyIHJldHVybiwgeW91XG4gICAgICAgICAgd2lsbCByZWNlaXZlIGEgcmVmdW5kIGFzIGEgc3RvcmUgY3JlZGl0IChtaW51cyB0aGUgY29zdCBvZiBzaGlwcGluZykuXG4gICAgICAgICAgV2UgaGF2ZSB0aGUgcmlnaHQgdG8gZGVueSByZXR1cm4gY3JlZGl0cyBpZiBpdGVtcyByZWNlaXZlZCBkbyBub3QgbWVldFxuICAgICAgICAgIG91ciByZXR1cm4gY3JpdGVyaWEuIEluIHRoaXMgY2FzZSwgdGhlIGl0ZW1zIHdpbGwgYmUgc2VudCBiYWNrIHRvIHRoZVxuICAgICAgICAgIGN1c3RvbWVyIHdpdGhvdXQgc3RvcmUgY3JlZGl0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxoND5TaGlwcGluZyBQb2xpY2llczwvaDQ+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFBsZWFzZSBhbGxvdyAxMC0xNCBkYXlzIGZvciB0aGUgc2hpcHBpbmcgcHJvY2Vzcy4gT3JkZXJzIGFyZSB0eXBpY2FsbHlcbiAgICAgICAgICBwcm9jZXNzZWQgaW4gMy03IGRheXMsIHdpdGggYW4gYWRkaXRpb25hbCA1LTcgYnVzaW5lc3MgZGF5cyBmb3JcbiAgICAgICAgICBzaGlwcGluZy4gSWYgeW91IGhhdmUgbm90IHJlY2VpdmVkIHlvdXIgaXRlbXMgYWZ0ZXIgMTQgZGF5cywgcGxlYXNlXG4gICAgICAgICAgcmVhY2ggb3V0IHRvIGZvciBhc3Npc3RhbmNlLiBTaG9wLVDDqmNoZSBpcyBub3QgcmVzcG9uc2libGUgZm9yIGRhbWFnZWRcbiAgICAgICAgICBvciBsb3N0IHBhY2thZ2VzIGR1ZSB0byB0aGUgc2hpcHBpbmcgcHJvY2Vzcy4gSG93ZXZlciwgaWYgeW91IGluY3VyXG4gICAgICAgICAgaXNzdWVzLCBlbWFpbCB1cywgYW5kIHdlIHdpbGwgdHJ5IHRvIGFzc2lzdCB0aGUgYmVzdCB3ZSBjYW4uXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGg0PkludGVybmF0aW9uYWwgT3JkZXJzPC9oND5cbiAgICAgICAgPHA+XG4gICAgICAgICAgU2hvcC1Qw6pjaGUgc2hpcHMgd29ybGR3aWRlIGFuZCBwcm92aWRlcyBmcmVlIHNoaXBwaW5nIG9uIG9yZGVycyAkMjAwXG4gICAgICAgICAgYW5kIHVwLiBPbmNlIHlvdXIgb3JkZXIgaXMgcHJvY2Vzc2VkIChhYm91dCAzLTcgZGF5cyksIHlvdXIgaXRlbXMgd2lsbFxuICAgICAgICAgIGJlIHNoaXBwZWQgd2l0aCBESEwvVVBTIGFuZCBzaG91bGQgYXJyaXZlIGluIGFuIGFkZGl0aW9uYWwgNS03XG4gICAgICAgICAgYnVzaW5lc3MgZGF5cy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb2xpY3k7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/policy.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });