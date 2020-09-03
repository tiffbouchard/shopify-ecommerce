module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/collections/all.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./context/shopContext.js":
/*!********************************!*\
  !*** ./context/shopContext.js ***!
  \********************************/
/*! exports provided: ShopConsumer, ShopContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShopConsumer\", function() { return ShopConsumer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShopContext\", function() { return ShopContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shopify-buy */ \"shopify-buy\");\n/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shopify_buy__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/context/shopContext.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst ShopContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();\nconst client = shopify_buy__WEBPACK_IMPORTED_MODULE_1___default.a.buildClient({\n  domain: \"ojos-store.myshopify.com\",\n  storefrontAccessToken: \"e52f8498c6bb5dea9c7c6670860b7224\"\n});\n\nclass ShopProvider extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      products: [],\n      product: {},\n      checkout: {},\n      checkoutTotal: 0\n    });\n\n    _defineProperty(this, \"createCheckout\", async () => {\n      const checkout = await client.checkout.create();\n      localStorage.setItem(\"checkout\", checkout.id);\n      this.setState({\n        checkout: checkout\n      });\n    });\n\n    _defineProperty(this, \"fetchCheckout\", async checkoutId => {\n      client.checkout.fetch(checkoutId).then(checkout => {\n        this.setState({\n          checkout: checkout\n        });\n      }).catch(err => console.log(err));\n    });\n\n    _defineProperty(this, \"addItemToCheckout\", async (variantId, quantity) => {\n      const lineItemsToAdd = [{\n        variantId,\n        quantity: parseInt(quantity, 10)\n      }];\n      const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd);\n      this.setState({\n        checkout: checkout\n      });\n      const checkoutTotal = parseInt(this.state.checkoutTotal, 10) + 1;\n      this.setState({\n        checkoutTotal: checkoutTotal\n      });\n      localStorage.setItem(\"checkoutTotal\", this.state.checkoutTotal);\n    });\n\n    _defineProperty(this, \"removeItemFromCheckout\", async (checkoutId, lineItemsIds) => {\n      const checkoutIdToModify = await checkoutId; // ID of an existing checkout\n\n      const lineItemsIdToRemove = await lineItemsIds; // Remove an item from the checkout\n\n      client.checkout.removeLineItems(checkoutIdToModify, lineItemsIdToRemove).then(checkout => {\n        // Do something with the updated checkout\n        this.setState({\n          checkout: checkout\n        });\n        const checkoutTotal = parseInt(this.state.checkoutTotal, 10) - 1;\n        this.setState({\n          checkoutTotal: checkoutTotal\n        });\n        localStorage.setItem(\"checkoutTotal\", this.state.checkoutTotal);\n      });\n    });\n\n    _defineProperty(this, \"fetchAllProducts\", async () => {\n      const products = await client.product.fetchAll();\n      this.setState({\n        products: products\n      });\n    });\n\n    _defineProperty(this, \"fetchProductByHandle\", async handle => {\n      const product = await client.product.fetchByHandle(handle);\n      this.setState({\n        product: product\n      });\n    });\n  }\n\n  componentDidMount() {\n    if (localStorage.checkout) {\n      this.fetchCheckout(localStorage.checkout);\n    } else {\n      this.createCheckout();\n    }\n\n    if (localStorage.checkoutTotal) {\n      const checkoutTotal = localStorage.getItem(\"checkoutTotal\");\n      this.setState({\n        checkoutTotal: checkoutTotal\n      });\n    }\n  }\n\n  // checkIfItemInCart = async (checkout, itemId) => {\n  //   const currentCheckout = checkout;\n  //   for (item in currentCheckout.lineItems) {\n  //     if (item.id === itemId) {\n  //       this.setState({ itemInCart: true });\n  //     }\n  //   }\n  // };\n  render() {\n    return __jsx(ShopContext.Provider, {\n      value: _objectSpread(_objectSpread({}, this.state), {}, {\n        fetchAllProducts: this.fetchAllProducts,\n        fetchProductByHandle: this.fetchProductByHandle,\n        addItemToCheckout: this.addItemToCheckout,\n        removeItemFromCheckout: this.removeItemFromCheckout\n      }),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 7\n      }\n    }, this.props.children);\n  }\n\n}\n\nconst ShopConsumer = ShopContext.Consumer;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShopProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L3Nob3BDb250ZXh0LmpzPzRmN2YiXSwibmFtZXMiOlsiU2hvcENvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJjbGllbnQiLCJDbGllbnQiLCJidWlsZENsaWVudCIsImRvbWFpbiIsInN0b3JlZnJvbnRBY2Nlc3NUb2tlbiIsIlNob3BQcm92aWRlciIsIkNvbXBvbmVudCIsInByb2R1Y3RzIiwicHJvZHVjdCIsImNoZWNrb3V0IiwiY2hlY2tvdXRUb3RhbCIsImNyZWF0ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJpZCIsInNldFN0YXRlIiwiY2hlY2tvdXRJZCIsImZldGNoIiwidGhlbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInZhcmlhbnRJZCIsInF1YW50aXR5IiwibGluZUl0ZW1zVG9BZGQiLCJwYXJzZUludCIsImFkZExpbmVJdGVtcyIsInN0YXRlIiwibGluZUl0ZW1zSWRzIiwiY2hlY2tvdXRJZFRvTW9kaWZ5IiwibGluZUl0ZW1zSWRUb1JlbW92ZSIsInJlbW92ZUxpbmVJdGVtcyIsImZldGNoQWxsIiwiaGFuZGxlIiwiZmV0Y2hCeUhhbmRsZSIsImNvbXBvbmVudERpZE1vdW50IiwiZmV0Y2hDaGVja291dCIsImNyZWF0ZUNoZWNrb3V0IiwiZ2V0SXRlbSIsInJlbmRlciIsImZldGNoQWxsUHJvZHVjdHMiLCJmZXRjaFByb2R1Y3RCeUhhbmRsZSIsImFkZEl0ZW1Ub0NoZWNrb3V0IiwicmVtb3ZlSXRlbUZyb21DaGVja291dCIsInByb3BzIiwiY2hpbGRyZW4iLCJTaG9wQ29uc3VtZXIiLCJDb25zdW1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsNENBQUssQ0FBQ0MsYUFBTixFQUFwQjtBQUVBLE1BQU1DLE1BQU0sR0FBR0Msa0RBQU0sQ0FBQ0MsV0FBUCxDQUFtQjtBQUNoQ0MsUUFBTSxFQUFFLDBCQUR3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cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbGllbnQgZnJvbSBcInNob3BpZnktYnV5XCI7XG5cbmNvbnN0IFNob3BDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBjbGllbnQgPSBDbGllbnQuYnVpbGRDbGllbnQoe1xuICBkb21haW46IFwib2pvcy1zdG9yZS5teXNob3BpZnkuY29tXCIsXG4gIHN0b3JlZnJvbnRBY2Nlc3NUb2tlbjogXCJlNTJmODQ5OGM2YmI1ZGVhOWM3YzY2NzA4NjBiNzIyNFwiLFxufSk7XG5cbmNsYXNzIFNob3BQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHByb2R1Y3RzOiBbXSxcbiAgICBwcm9kdWN0OiB7fSxcbiAgICBjaGVja291dDoge30sXG4gICAgY2hlY2tvdXRUb3RhbDogMCxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmNoZWNrb3V0KSB7XG4gICAgICB0aGlzLmZldGNoQ2hlY2tvdXQobG9jYWxTdG9yYWdlLmNoZWNrb3V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jcmVhdGVDaGVja291dCgpO1xuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLmNoZWNrb3V0VG90YWwpIHtcbiAgICAgIGNvbnN0IGNoZWNrb3V0VG90YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNoZWNrb3V0VG90YWxcIik7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tvdXRUb3RhbDogY2hlY2tvdXRUb3RhbCB9KTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVDaGVja291dCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjaGVja291dCA9IGF3YWl0IGNsaWVudC5jaGVja291dC5jcmVhdGUoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoZWNrb3V0XCIsIGNoZWNrb3V0LmlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tvdXQ6IGNoZWNrb3V0IH0pO1xuICB9O1xuXG4gIGZldGNoQ2hlY2tvdXQgPSBhc3luYyAoY2hlY2tvdXRJZCkgPT4ge1xuICAgIGNsaWVudC5jaGVja291dFxuICAgICAgLmZldGNoKGNoZWNrb3V0SWQpXG4gICAgICAudGhlbigoY2hlY2tvdXQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrb3V0OiBjaGVja291dCB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH07XG5cbiAgYWRkSXRlbVRvQ2hlY2tvdXQgPSBhc3luYyAodmFyaWFudElkLCBxdWFudGl0eSkgPT4ge1xuICAgIGNvbnN0IGxpbmVJdGVtc1RvQWRkID0gW1xuICAgICAge1xuICAgICAgICB2YXJpYW50SWQsXG4gICAgICAgIHF1YW50aXR5OiBwYXJzZUludChxdWFudGl0eSwgMTApLFxuICAgICAgfSxcbiAgICBdO1xuICAgIGNvbnN0IGNoZWNrb3V0ID0gYXdhaXQgY2xpZW50LmNoZWNrb3V0LmFkZExpbmVJdGVtcyhcbiAgICAgIHRoaXMuc3RhdGUuY2hlY2tvdXQuaWQsXG4gICAgICBsaW5lSXRlbXNUb0FkZFxuICAgICk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrb3V0OiBjaGVja291dCB9KTtcbiAgICBjb25zdCBjaGVja291dFRvdGFsID0gcGFyc2VJbnQodGhpcy5zdGF0ZS5jaGVja291dFRvdGFsLCAxMCkgKyAxO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja291dFRvdGFsOiBjaGVja291dFRvdGFsIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hlY2tvdXRUb3RhbFwiLCB0aGlzLnN0YXRlLmNoZWNrb3V0VG90YWwpO1xuICB9O1xuXG4gIHJlbW92ZUl0ZW1Gcm9tQ2hlY2tvdXQgPSBhc3luYyAoY2hlY2tvdXRJZCwgbGluZUl0ZW1zSWRzKSA9PiB7XG4gICAgY29uc3QgY2hlY2tvdXRJZFRvTW9kaWZ5ID0gYXdhaXQgY2hlY2tvdXRJZDsgLy8gSUQgb2YgYW4gZXhpc3RpbmcgY2hlY2tvdXRcbiAgICBjb25zdCBsaW5lSXRlbXNJZFRvUmVtb3ZlID0gYXdhaXQgbGluZUl0ZW1zSWRzO1xuICAgIC8vIFJlbW92ZSBhbiBpdGVtIGZyb20gdGhlIGNoZWNrb3V0XG4gICAgY2xpZW50LmNoZWNrb3V0XG4gICAgICAucmVtb3ZlTGluZUl0ZW1zKGNoZWNrb3V0SWRUb01vZGlmeSwgbGluZUl0ZW1zSWRUb1JlbW92ZSlcbiAgICAgIC50aGVuKChjaGVja291dCkgPT4ge1xuICAgICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCB0aGUgdXBkYXRlZCBjaGVja291dFxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tvdXQ6IGNoZWNrb3V0IH0pO1xuICAgICAgICBjb25zdCBjaGVja291dFRvdGFsID0gcGFyc2VJbnQodGhpcy5zdGF0ZS5jaGVja291dFRvdGFsLCAxMCkgLSAxO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tvdXRUb3RhbDogY2hlY2tvdXRUb3RhbCB9KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGVja291dFRvdGFsXCIsIHRoaXMuc3RhdGUuY2hlY2tvdXRUb3RhbCk7XG4gICAgICB9KTtcbiAgfTtcblxuICBmZXRjaEFsbFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgY2xpZW50LnByb2R1Y3QuZmV0Y2hBbGwoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdHM6IHByb2R1Y3RzIH0pO1xuICB9O1xuXG4gIGZldGNoUHJvZHVjdEJ5SGFuZGxlID0gYXN5bmMgKGhhbmRsZSkgPT4ge1xuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBjbGllbnQucHJvZHVjdC5mZXRjaEJ5SGFuZGxlKGhhbmRsZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3Q6IHByb2R1Y3QgfSk7XG4gIH07XG5cbiAgLy8gY2hlY2tJZkl0ZW1JbkNhcnQgPSBhc3luYyAoY2hlY2tvdXQsIGl0ZW1JZCkgPT4ge1xuICAvLyAgIGNvbnN0IGN1cnJlbnRDaGVja291dCA9IGNoZWNrb3V0O1xuICAvLyAgIGZvciAoaXRlbSBpbiBjdXJyZW50Q2hlY2tvdXQubGluZUl0ZW1zKSB7XG4gIC8vICAgICBpZiAoaXRlbS5pZCA9PT0gaXRlbUlkKSB7XG4gIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtSW5DYXJ0OiB0cnVlIH0pO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaG9wQ29udGV4dC5Qcm92aWRlclxuICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgZmV0Y2hBbGxQcm9kdWN0czogdGhpcy5mZXRjaEFsbFByb2R1Y3RzLFxuICAgICAgICAgIGZldGNoUHJvZHVjdEJ5SGFuZGxlOiB0aGlzLmZldGNoUHJvZHVjdEJ5SGFuZGxlLFxuICAgICAgICAgIGFkZEl0ZW1Ub0NoZWNrb3V0OiB0aGlzLmFkZEl0ZW1Ub0NoZWNrb3V0LFxuICAgICAgICAgIHJlbW92ZUl0ZW1Gcm9tQ2hlY2tvdXQ6IHRoaXMucmVtb3ZlSXRlbUZyb21DaGVja291dCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L1Nob3BDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgU2hvcENvbnN1bWVyID0gU2hvcENvbnRleHQuQ29uc3VtZXI7XG5cbmV4cG9ydCB7IFNob3BDb25zdW1lciwgU2hvcENvbnRleHQgfTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcFByb3ZpZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/shopContext.js\n");

/***/ }),

/***/ "./pages/collections/all.js":
/*!**********************************!*\
  !*** ./pages/collections/all.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_shopContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/shopContext */ \"./context/shopContext.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ \"react-bootstrap/Container\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Image */ \"react-bootstrap/Image\");\n/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ \"react-bootstrap/Row\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ \"react-bootstrap/Col\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Spinner */ \"react-bootstrap/Spinner\");\n/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/pages/collections/all.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n //Bootstrap\n\n\n\n\n\n\n\nconst AllProducts = props => {\n  const {\n    fetchAllProducts,\n    products\n  } = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_context_shopContext__WEBPACK_IMPORTED_MODULE_2__[\"ShopContext\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    fetchAllProducts();\n    return () => {};\n  }, [fetchAllProducts]);\n  if (!products) return __jsx(\"div\", {\n    className: \"page-spinner\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    animation: \"border\",\n    role: \"status\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: \"sr-only\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, \"Loading...\")));\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, \"OJOS | All\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  })), __jsx(\"h1\", {\n    className: \"page-title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, \"All\"), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    fluid: \"lg\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, products ? products.map(product => __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    xs: 12,\n    sm: 6,\n    md: 6,\n    lg: 4,\n    key: product.id,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    className: \"product-section\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    href: `/products/${product.handle}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 19\n    }\n  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    className: \"products\",\n    fluid: true,\n    src: product.images[0].src,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 21\n    }\n  }))), __jsx(\"div\", {\n    className: \"product-description\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    href: `/products/${product.handle}`,\n    className: \"product-name\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 19\n    }\n  }, product.title), __jsx(\"a\", {\n    href: \"/products/:id\",\n    className: \"product-price\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 19\n    }\n  }, \"$\", product.variants[0].price)))) : __jsx(\"div\", {\n    className: \"no-products-msg\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 15\n    }\n  }, \"No products right now, check back later!\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllProducts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb2xsZWN0aW9ucy9hbGwuanM/Mjk1NyJdLCJuYW1lcyI6WyJBbGxQcm9kdWN0cyIsInByb3BzIiwiZmV0Y2hBbGxQcm9kdWN0cyIsInByb2R1Y3RzIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiU2hvcENvbnRleHQiLCJ1c2VFZmZlY3QiLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJoYW5kbGUiLCJpbWFnZXMiLCJzcmMiLCJ0aXRsZSIsInZhcmlhbnRzIiwicHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBSUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUlDLEtBQUQsSUFBVztBQUM3QixRQUFNO0FBQUVDLG9CQUFGO0FBQW9CQztBQUFwQixNQUFpQ0MsNENBQUssQ0FBQ0MsVUFBTixDQUFpQkMsZ0VBQWpCLENBQXZDO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkTCxvQkFBZ0I7QUFDaEIsV0FBTyxNQUFNLENBQUUsQ0FBZjtBQUNELEdBSFEsRUFHTixDQUFDQSxnQkFBRCxDQUhNLENBQVQ7QUFLQSxNQUFJLENBQUNDLFFBQUwsRUFDRSxPQUNFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBUyxhQUFTLEVBQUMsUUFBbkI7QUFBNEIsUUFBSSxFQUFDLFFBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBREYsQ0FERjtBQU9GLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUxGLEVBTUUsTUFBQyxnRUFBRDtBQUFXLFNBQUssRUFBQyxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLFFBQVEsR0FDUEEsUUFBUSxDQUFDSyxHQUFULENBQWNDLE9BQUQsSUFDWCxNQUFDLDBEQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsQ0FBakI7QUFBb0IsTUFBRSxFQUFFLENBQXhCO0FBQTJCLE1BQUUsRUFBRSxDQUEvQjtBQUFrQyxPQUFHLEVBQUVBLE9BQU8sQ0FBQ0MsRUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBRyxhQUFZRCxPQUFPLENBQUNFLE1BQU8sRUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFDRSxhQUFTLEVBQUMsVUFEWjtBQUVFLFNBQUssTUFGUDtBQUdFLE9BQUcsRUFBRUYsT0FBTyxDQUFDRyxNQUFSLENBQWUsQ0FBZixFQUFrQkMsR0FIekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERixFQVVFO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBRyxhQUFZSixPQUFPLENBQUNFLE1BQU8sRUFEcEM7QUFFRSxhQUFTLEVBQUMsY0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUdGLE9BQU8sQ0FBQ0ssS0FKWCxDQURGLEVBT0U7QUFBRyxRQUFJLEVBQUMsZUFBUjtBQUF3QixhQUFTLEVBQUMsZUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUNJTCxPQUFPLENBQUNNLFFBQVIsQ0FBaUIsQ0FBakIsRUFBb0JDLEtBRHhCLENBUEYsQ0FWRixDQURGLENBRE8sR0EwQlA7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0RBREYsQ0EzQkosQ0FERixDQU5GLENBREY7QUEyQ0QsQ0EzREQ7O0FBNkRlaEIsMEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb2xsZWN0aW9ucy9hbGwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgU2hvcENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9zaG9wQ29udGV4dFwiO1xuXG4vL0Jvb3RzdHJhcFxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSW1hZ2VcIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvU3Bpbm5lclwiO1xuXG5jb25zdCBBbGxQcm9kdWN0cyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGZldGNoQWxsUHJvZHVjdHMsIHByb2R1Y3RzIH0gPSBSZWFjdC51c2VDb250ZXh0KFNob3BDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoQWxsUHJvZHVjdHMoKTtcbiAgICByZXR1cm4gKCkgPT4ge307XG4gIH0sIFtmZXRjaEFsbFByb2R1Y3RzXSk7XG5cbiAgaWYgKCFwcm9kdWN0cylcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXNwaW5uZXJcIj5cbiAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICA8L1NwaW5uZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk9KT1MgfCBBbGw8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPkFsbDwvaDE+XG4gICAgICA8Q29udGFpbmVyIGZsdWlkPVwibGdcIj5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICB7cHJvZHVjdHMgPyAoXG4gICAgICAgICAgICBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXs2fSBtZD17Nn0gbGc9ezR9IGtleT17cHJvZHVjdC5pZH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvcHJvZHVjdHMvJHtwcm9kdWN0LmhhbmRsZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdHNcIlxuICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlc1swXS5zcmN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3Byb2R1Y3RzLyR7cHJvZHVjdC5oYW5kbGV9YH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3Byb2R1Y3RzLzppZFwiIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtwcm9kdWN0LnZhcmlhbnRzWzBdLnByaWNlfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tcHJvZHVjdHMtbXNnXCI+XG4gICAgICAgICAgICAgIDxwPk5vIHByb2R1Y3RzIHJpZ2h0IG5vdywgY2hlY2sgYmFjayBsYXRlciE8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxsUHJvZHVjdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/collections/all.js\n");

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

/***/ }),

/***/ "react-bootstrap/Col":
/*!**************************************!*\
  !*** external "react-bootstrap/Col" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Col\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ29sXCI/NGNjOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAvQ29sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Col\n");

/***/ }),

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Container\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI/ZGM2MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Container\n");

/***/ }),

/***/ "react-bootstrap/Image":
/*!****************************************!*\
  !*** external "react-bootstrap/Image" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Image\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvSW1hZ2VcIj8zZGYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC9JbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9JbWFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Image\n");

/***/ }),

/***/ "react-bootstrap/Row":
/*!**************************************!*\
  !*** external "react-bootstrap/Row" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Row\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvUm93XCI/MWM3NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAvUm93LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Row\n");

/***/ }),

/***/ "react-bootstrap/Spinner":
/*!******************************************!*\
  !*** external "react-bootstrap/Spinner" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Spinner\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvU3Bpbm5lclwiPzc5YTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtYm9vdHN0cmFwL1NwaW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvU3Bpbm5lclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Spinner\n");

/***/ }),

/***/ "shopify-buy":
/*!******************************!*\
  !*** external "shopify-buy" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"shopify-buy\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9waWZ5LWJ1eVwiPzA4YWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic2hvcGlmeS1idXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9waWZ5LWJ1eVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///shopify-buy\n");

/***/ })

/******/ });