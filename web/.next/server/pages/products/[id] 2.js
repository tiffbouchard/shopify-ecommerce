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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/products/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n  projectId: \"vbpxqaqc\",\n  // you can find this in sanity.json\n  dataset: \"production\",\n  // or the name you chose in step 1\n  useCdn: true // `false` if you want to ensure fresh data\n\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQuanM/Y2MyNSJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwidXNlQ2RuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlQSxvSEFBWSxDQUFDO0FBQzFCQyxXQUFTLEVBQUUsVUFEZTtBQUNIO0FBQ3ZCQyxTQUFPLEVBQUUsWUFGaUI7QUFFSDtBQUN2QkMsUUFBTSxFQUFFLElBSGtCLENBR1o7O0FBSFksQ0FBRCxDQUEzQiIsImZpbGUiOiIuL2NsaWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSBcIkBzYW5pdHkvY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHNhbml0eUNsaWVudCh7XG4gIHByb2plY3RJZDogXCJ2YnB4cWFxY1wiLCAvLyB5b3UgY2FuIGZpbmQgdGhpcyBpbiBzYW5pdHkuanNvblxuICBkYXRhc2V0OiBcInByb2R1Y3Rpb25cIiwgLy8gb3IgdGhlIG5hbWUgeW91IGNob3NlIGluIHN0ZXAgMVxuICB1c2VDZG46IHRydWUsIC8vIGBmYWxzZWAgaWYgeW91IHdhbnQgdG8gZW5zdXJlIGZyZXNoIGRhdGFcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client.js\n");

/***/ }),

/***/ "./context/shopContext.js":
/*!********************************!*\
  !*** ./context/shopContext.js ***!
  \********************************/
/*! exports provided: ShopConsumer, ShopContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShopConsumer\", function() { return ShopConsumer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShopContext\", function() { return ShopContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shopify-buy */ \"shopify-buy\");\n/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shopify_buy__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/context/shopContext.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst ShopContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();\nconst client = shopify_buy__WEBPACK_IMPORTED_MODULE_1___default.a.buildClient({\n  domain: \"ojos-store.myshopify.com\",\n  storefrontAccessToken: \"e52f8498c6bb5dea9c7c6670860b7224\"\n});\n\nclass ShopProvider extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      products: [],\n      product: {},\n      checkout: {},\n      checkoutTotal: 0\n    });\n\n    _defineProperty(this, \"createCheckout\", async () => {\n      const checkout = await client.checkout.create();\n      this.setState({\n        checkout: checkout\n      });\n    });\n\n    _defineProperty(this, \"addItemToCheckout\", async (variantId, quantity) => {\n      const lineItemsToAdd = [{\n        variantId,\n        quantity: parseInt(quantity, 10)\n      }];\n      const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd);\n      this.setState({\n        checkout: checkout\n      });\n      this.setState({\n        checkoutTotal: this.state.checkoutTotal + 1\n      });\n    });\n\n    _defineProperty(this, \"fetchAllProducts\", async () => {\n      const products = await client.product.fetchAll();\n      this.setState({\n        products: products\n      });\n    });\n\n    _defineProperty(this, \"fetchProductById\", async id => {\n      const product = await client.product.fetch(id);\n      this.setState({\n        product: product\n      });\n    });\n\n    _defineProperty(this, \"incrementCheckoutTotal\", async () => {\n      this.setState({\n        checkoutTotal: checkoutTotal + 1\n      });\n      localStorage.setItem(\"checkoutTotal\", checkoutTotal);\n    });\n  }\n\n  componentDidMount() {\n    this.createCheckout();\n  }\n\n  render() {\n    return __jsx(ShopContext.Provider, {\n      value: _objectSpread(_objectSpread({}, this.state), {}, {\n        fetchAllProducts: this.fetchAllProducts,\n        fetchProductById: this.fetchProductById,\n        incrementCheckoutTotal: this.incrementCheckoutTotal,\n        addItemToCheckout: this.addItemToCheckout\n      }),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 7\n      }\n    }, this.props.children);\n  }\n\n}\n\nconst ShopConsumer = ShopContext.Consumer;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShopProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L3Nob3BDb250ZXh0LmpzPzRmN2YiXSwibmFtZXMiOlsiU2hvcENvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJjbGllbnQiLCJDbGllbnQiLCJidWlsZENsaWVudCIsImRvbWFpbiIsInN0b3JlZnJvbnRBY2Nlc3NUb2tlbiIsIlNob3BQcm92aWRlciIsIkNvbXBvbmVudCIsInByb2R1Y3RzIiwicHJvZHVjdCIsImNoZWNrb3V0IiwiY2hlY2tvdXRUb3RhbCIsImNyZWF0ZSIsInNldFN0YXRlIiwidmFyaWFudElkIiwicXVhbnRpdHkiLCJsaW5lSXRlbXNUb0FkZCIsInBhcnNlSW50IiwiYWRkTGluZUl0ZW1zIiwic3RhdGUiLCJpZCIsImZldGNoQWxsIiwiZmV0Y2giLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiY29tcG9uZW50RGlkTW91bnQiLCJjcmVhdGVDaGVja291dCIsInJlbmRlciIsImZldGNoQWxsUHJvZHVjdHMiLCJmZXRjaFByb2R1Y3RCeUlkIiwiaW5jcmVtZW50Q2hlY2tvdXRUb3RhbCIsImFkZEl0ZW1Ub0NoZWNrb3V0IiwicHJvcHMiLCJjaGlsZHJlbiIsIlNob3BDb25zdW1lciIsIkNvbnN1bWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsV0FBVyxHQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLEVBQXBCO0FBRUEsTUFBTUMsTUFBTSxHQUFHQyxrREFBTSxDQUFDQyxXQUFQLENBQW1CO0FBQ2hDQyxRQUFNLEVBQUUsMEJBRHdCO0FBRWhDQyx1QkFBcUIsRUFBRTtBQUZTLENBQW5CLENBQWY7O0FBS0EsTUFBTUMsWUFBTixTQUEyQlAsNENBQUssQ0FBQ1EsU0FBakMsQ0FBMkM7QUFBQTtBQUFBOztBQUFBLG1DQUNqQztBQUNOQyxjQUFRLEVBQUUsRUFESjtBQUVOQyxhQUFPLEVBQUUsRUFGSDtBQUdOQyxjQUFRLEVBQUUsRUFISjtBQUlOQyxtQkFBYSxFQUFFO0FBSlQsS0FEaUM7O0FBQUEsNENBWXhCLFlBQVk7QUFDM0IsWUFBTUQsUUFBUSxHQUFHLE1BQU1ULE1BQU0sQ0FBQ1MsUUFBUCxDQUFnQkUsTUFBaEIsRUFBdkI7QUFDQSxXQUFLQyxRQUFMLENBQWM7QUFBRUgsZ0JBQVEsRUFBRUE7QUFBWixPQUFkO0FBQ0QsS0Fmd0M7O0FBQUEsK0NBaUJyQixPQUFPSSxTQUFQLEVBQWtCQyxRQUFsQixLQUErQjtBQUNqRCxZQUFNQyxjQUFjLEdBQUcsQ0FDckI7QUFDRUYsaUJBREY7QUFFRUMsZ0JBQVEsRUFBRUUsUUFBUSxDQUFDRixRQUFELEVBQVcsRUFBWDtBQUZwQixPQURxQixDQUF2QjtBQU1BLFlBQU1MLFFBQVEsR0FBRyxNQUFNVCxNQUFNLENBQUNTLFFBQVAsQ0FBZ0JRLFlBQWhCLENBQ3JCLEtBQUtDLEtBQUwsQ0FBV1QsUUFBWCxDQUFvQlUsRUFEQyxFQUVyQkosY0FGcUIsQ0FBdkI7QUFJQSxXQUFLSCxRQUFMLENBQWM7QUFBRUgsZ0JBQVEsRUFBRUE7QUFBWixPQUFkO0FBQ0EsV0FBS0csUUFBTCxDQUFjO0FBQUVGLHFCQUFhLEVBQUUsS0FBS1EsS0FBTCxDQUFXUixhQUFYLEdBQTJCO0FBQTVDLE9BQWQ7QUFDRCxLQTlCd0M7O0FBQUEsOENBZ0N0QixZQUFZO0FBQzdCLFlBQU1ILFFBQVEsR0FBRyxNQUFNUCxNQUFNLENBQUNRLE9BQVAsQ0FBZVksUUFBZixFQUF2QjtBQUNBLFdBQUtSLFFBQUwsQ0FBYztBQUFFTCxnQkFBUSxFQUFFQTtBQUFaLE9BQWQ7QUFDRCxLQW5Dd0M7O0FBQUEsOENBcUN0QixNQUFPWSxFQUFQLElBQWM7QUFDL0IsWUFBTVgsT0FBTyxHQUFHLE1BQU1SLE1BQU0sQ0FBQ1EsT0FBUCxDQUFlYSxLQUFmLENBQXFCRixFQUFyQixDQUF0QjtBQUNBLFdBQUtQLFFBQUwsQ0FBYztBQUFFSixlQUFPLEVBQUVBO0FBQVgsT0FBZDtBQUNELEtBeEN3Qzs7QUFBQSxvREEwQ2hCLFlBQVk7QUFDbkMsV0FBS0ksUUFBTCxDQUFjO0FBQUVGLHFCQUFhLEVBQUVBLGFBQWEsR0FBRztBQUFqQyxPQUFkO0FBQ0FZLGtCQUFZLENBQUNDLE9BQWIsQ0FBcUIsZUFBckIsRUFBc0NiLGFBQXRDO0FBQ0QsS0E3Q3dDO0FBQUE7O0FBUXpDYyxtQkFBaUIsR0FBRztBQUNsQixTQUFLQyxjQUFMO0FBQ0Q7O0FBcUNEQyxRQUFNLEdBQUc7QUFDUCxXQUNFLE1BQUMsV0FBRCxDQUFhLFFBQWI7QUFDRSxXQUFLLGtDQUNBLEtBQUtSLEtBREw7QUFFSFMsd0JBQWdCLEVBQUUsS0FBS0EsZ0JBRnBCO0FBR0hDLHdCQUFnQixFQUFFLEtBQUtBLGdCQUhwQjtBQUlIQyw4QkFBc0IsRUFBRSxLQUFLQSxzQkFKMUI7QUFLSEMseUJBQWlCLEVBQUUsS0FBS0E7QUFMckIsUUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BU0csS0FBS0MsS0FBTCxDQUFXQyxRQVRkLENBREY7QUFhRDs7QUE3RHdDOztBQWdFM0MsTUFBTUMsWUFBWSxHQUFHcEMsV0FBVyxDQUFDcUMsUUFBakM7QUFFQTtBQUVlN0IsMkVBQWYiLCJmaWxlIjoiLi9jb250ZXh0L3Nob3BDb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsaWVudCBmcm9tIFwic2hvcGlmeS1idXlcIjtcblxuY29uc3QgU2hvcENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IGNsaWVudCA9IENsaWVudC5idWlsZENsaWVudCh7XG4gIGRvbWFpbjogXCJvam9zLXN0b3JlLm15c2hvcGlmeS5jb21cIixcbiAgc3RvcmVmcm9udEFjY2Vzc1Rva2VuOiBcImU1MmY4NDk4YzZiYjVkZWE5YzdjNjY3MDg2MGI3MjI0XCIsXG59KTtcblxuY2xhc3MgU2hvcFByb3ZpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgcHJvZHVjdHM6IFtdLFxuICAgIHByb2R1Y3Q6IHt9LFxuICAgIGNoZWNrb3V0OiB7fSxcbiAgICBjaGVja291dFRvdGFsOiAwLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuY3JlYXRlQ2hlY2tvdXQoKTtcbiAgfVxuXG4gIGNyZWF0ZUNoZWNrb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrb3V0ID0gYXdhaXQgY2xpZW50LmNoZWNrb3V0LmNyZWF0ZSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja291dDogY2hlY2tvdXQgfSk7XG4gIH07XG5cbiAgYWRkSXRlbVRvQ2hlY2tvdXQgPSBhc3luYyAodmFyaWFudElkLCBxdWFudGl0eSkgPT4ge1xuICAgIGNvbnN0IGxpbmVJdGVtc1RvQWRkID0gW1xuICAgICAge1xuICAgICAgICB2YXJpYW50SWQsXG4gICAgICAgIHF1YW50aXR5OiBwYXJzZUludChxdWFudGl0eSwgMTApLFxuICAgICAgfSxcbiAgICBdO1xuICAgIGNvbnN0IGNoZWNrb3V0ID0gYXdhaXQgY2xpZW50LmNoZWNrb3V0LmFkZExpbmVJdGVtcyhcbiAgICAgIHRoaXMuc3RhdGUuY2hlY2tvdXQuaWQsXG4gICAgICBsaW5lSXRlbXNUb0FkZFxuICAgICk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrb3V0OiBjaGVja291dCB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tvdXRUb3RhbDogdGhpcy5zdGF0ZS5jaGVja291dFRvdGFsICsgMSB9KTtcbiAgfTtcblxuICBmZXRjaEFsbFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgY2xpZW50LnByb2R1Y3QuZmV0Y2hBbGwoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdHM6IHByb2R1Y3RzIH0pO1xuICB9O1xuXG4gIGZldGNoUHJvZHVjdEJ5SWQgPSBhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgY2xpZW50LnByb2R1Y3QuZmV0Y2goaWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0OiBwcm9kdWN0IH0pO1xuICB9O1xuXG4gIGluY3JlbWVudENoZWNrb3V0VG90YWwgPSBhc3luYyAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrb3V0VG90YWw6IGNoZWNrb3V0VG90YWwgKyAxIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hlY2tvdXRUb3RhbFwiLCBjaGVja291dFRvdGFsKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaG9wQ29udGV4dC5Qcm92aWRlclxuICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgZmV0Y2hBbGxQcm9kdWN0czogdGhpcy5mZXRjaEFsbFByb2R1Y3RzLFxuICAgICAgICAgIGZldGNoUHJvZHVjdEJ5SWQ6IHRoaXMuZmV0Y2hQcm9kdWN0QnlJZCxcbiAgICAgICAgICBpbmNyZW1lbnRDaGVja291dFRvdGFsOiB0aGlzLmluY3JlbWVudENoZWNrb3V0VG90YWwsXG4gICAgICAgICAgYWRkSXRlbVRvQ2hlY2tvdXQ6IHRoaXMuYWRkSXRlbVRvQ2hlY2tvdXQsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9TaG9wQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IFNob3BDb25zdW1lciA9IFNob3BDb250ZXh0LkNvbnN1bWVyO1xuXG5leHBvcnQgeyBTaG9wQ29uc3VtZXIsIFNob3BDb250ZXh0IH07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3BQcm92aWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/shopContext.js\n");

/***/ }),

/***/ "./imageUrlBuilder.js":
/*!****************************!*\
  !*** ./imageUrlBuilder.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return urlFor; });\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ \"./client.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\n\n // imageUrlBuilder method from Sanity.io in order to retrieve higher quality images\n\nconst builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nfunction urlFor(source) {\n  return builder.image(source);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbWFnZVVybEJ1aWxkZXIuanM/ZjExMiJdLCJuYW1lcyI6WyJidWlsZGVyIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOztBQUNBLE1BQU1BLE9BQU8sR0FBR0Msd0RBQWUsQ0FBQ0MsK0NBQUQsQ0FBL0I7QUFFZSxTQUFTQyxNQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUNyQyxTQUFPSixPQUFPLENBQUNLLEtBQVIsQ0FBY0QsTUFBZCxDQUFQO0FBQ0QiLCJmaWxlIjoiLi9pbWFnZVVybEJ1aWxkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50IGZyb20gXCIuL2NsaWVudFwiO1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcblxuLy8gaW1hZ2VVcmxCdWlsZGVyIG1ldGhvZCBmcm9tIFNhbml0eS5pbyBpbiBvcmRlciB0byByZXRyaWV2ZSBoaWdoZXIgcXVhbGl0eSBpbWFnZXNcbmNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICByZXR1cm4gYnVpbGRlci5pbWFnZShzb3VyY2UpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./imageUrlBuilder.js\n");

/***/ }),

/***/ "./pages/products/[id].js":
/*!********************************!*\
  !*** ./pages/products/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_shopContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/shopContext */ \"./context/shopContext.js\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var _imageUrlBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../imageUrlBuilder */ \"./imageUrlBuilder.js\");\n/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Image */ \"react-bootstrap/Image\");\n/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/pages/products/[id].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // Sanity.io\n\n\n // Bootstrap\n\n\n\n\nconst ProductDetails = props => {\n  // const [size, setSize] = React.useState();\n  // const [product, setProduct] = React.useState();\n  // const handleChange = (event) => {\n  //   setSize(event.target.value);\n  // };\n  // const handleClick = () => {\n  //   setProduct(currentProduct);\n  //   localStorage.setItem(\"product\", JSON.stringify(currentProduct));\n  // };\n  let id = props.params.id;\n  const {\n    fetchProductById,\n    addItemToCheckout,\n    product\n  } = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_context_shopContext__WEBPACK_IMPORTED_MODULE_2__[\"ShopContext\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    fetchProductById(id);\n    return () => {};\n  }, [fetchProductById, id]);\n  if (!product.title) return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 30\n    }\n  }, \"Loading...\");\n  return __jsx(\"div\", {\n    id: \"product-details-page\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, \"OJOS | \", product.title), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    id: \"product-details-container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    id: \"product-image\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    className: \"products\",\n    fluid: true,\n    src: product.images[0].src,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    id: \"product-details\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }, product.title), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, \"$\", product.variants[0].price), __jsx(\"button\", {\n    className: \"add-to-cart-btn\",\n    onClick: () => addItemToCheckout(product.variants[0].id, 1),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }, \"Add to Cart\"), __jsx(\"h4\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }, \"Description\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 11\n    }\n  }, product.description), __jsx(\"h4\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, \"Sizing\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }, \"Complimentary ground shipping on all domestic orders. Returns accepted within 7 days of delivery on full price items. All sale items and masks are final sale. International shipping available to select countries.\"), __jsx(\"h4\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  }, \"Shipping\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }, \"Complimentary ground shipping on all domestic orders. Returns accepted within 7 days of delivery on full price items. All sale items and masks are final sale. International shipping available to select countries.\"))));\n}; // Fetching data from Sanity.io with GROQ query\n\n\nProductDetails.getInitialProps = async function (context) {\n  const params = await context.query;\n  return {\n    params: params\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0cy8uanM/YzE3YiJdLCJuYW1lcyI6WyJQcm9kdWN0RGV0YWlscyIsInByb3BzIiwiaWQiLCJwYXJhbXMiLCJmZXRjaFByb2R1Y3RCeUlkIiwiYWRkSXRlbVRvQ2hlY2tvdXQiLCJwcm9kdWN0IiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiU2hvcENvbnRleHQiLCJ1c2VFZmZlY3QiLCJ0aXRsZSIsImltYWdlcyIsInNyYyIsInZhcmlhbnRzIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0E7Q0FHQTs7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGNBQWMsR0FBSUMsS0FBRCxJQUFXO0FBQ2hDO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQUlDLEVBQUUsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFELEVBQXRCO0FBQ0EsUUFBTTtBQUFFRSxvQkFBRjtBQUFvQkMscUJBQXBCO0FBQXVDQztBQUF2QyxNQUFtREMsNENBQUssQ0FBQ0MsVUFBTixDQUN2REMsZ0VBRHVELENBQXpEO0FBSUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkTixvQkFBZ0IsQ0FBQ0YsRUFBRCxDQUFoQjtBQUNBLFdBQU8sTUFBTSxDQUFFLENBQWY7QUFDRCxHQUhRLEVBR04sQ0FBQ0UsZ0JBQUQsRUFBbUJGLEVBQW5CLENBSE0sQ0FBVDtBQUtBLE1BQUksQ0FBQ0ksT0FBTyxDQUFDSyxLQUFiLEVBQW9CLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBUDtBQUNwQixTQUNFO0FBQUssTUFBRSxFQUFDLHNCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFlTCxPQUFPLENBQUNLLEtBQXZCLENBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFO0FBQUssTUFBRSxFQUFDLDJCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE1BQUUsRUFBQyxlQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQU8sYUFBUyxFQUFDLFVBQWpCO0FBQTRCLFNBQUssTUFBakM7QUFBa0MsT0FBRyxFQUFFTCxPQUFPLENBQUNNLE1BQVIsQ0FBZSxDQUFmLEVBQWtCQyxHQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUssTUFBRSxFQUFDLGlCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtQLE9BQU8sQ0FBQ0ssS0FBYixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFLTCxPQUFPLENBQUNRLFFBQVIsQ0FBaUIsQ0FBakIsRUFBb0JDLEtBQXpCLENBRkYsRUFjRTtBQUNFLGFBQVMsRUFBQyxpQkFEWjtBQUVFLFdBQU8sRUFBRSxNQUFNVixpQkFBaUIsQ0FBQ0MsT0FBTyxDQUFDUSxRQUFSLENBQWlCLENBQWpCLEVBQW9CWixFQUFyQixFQUF5QixDQUF6QixDQUZsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWRGLEVBb0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcEJGLEVBcUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUksT0FBTyxDQUFDVSxXQUFaLENBckJGLEVBc0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0QkYsRUF1QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0TkF2QkYsRUE2QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE3QkYsRUE4QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0TkE5QkYsQ0FKRixDQUxGLENBREY7QUFrREQsQ0ExRUQsQyxDQTRFQTs7O0FBQ0FoQixjQUFjLENBQUNpQixlQUFmLEdBQWlDLGdCQUFnQkMsT0FBaEIsRUFBeUI7QUFDeEQsUUFBTWYsTUFBTSxHQUFHLE1BQU1lLE9BQU8sQ0FBQ0MsS0FBN0I7QUFDQSxTQUFPO0FBQUVoQixVQUFNLEVBQUVBO0FBQVYsR0FBUDtBQUNELENBSEQ7O0FBS2VILDZFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZHVjdHMvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFNob3BDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvc2hvcENvbnRleHRcIjtcblxuLy8gU2FuaXR5LmlvXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi9jbGllbnRcIjtcbmltcG9ydCB1cmxGb3IgZnJvbSBcIi4uLy4uL2ltYWdlVXJsQnVpbGRlclwiO1xuXG4vLyBCb290c3RyYXBcbmltcG9ydCBJbWFnZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0ltYWdlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUHJvZHVjdERldGFpbHMgPSAocHJvcHMpID0+IHtcbiAgLy8gY29uc3QgW3NpemUsIHNldFNpemVdID0gUmVhY3QudXNlU3RhdGUoKTtcbiAgLy8gY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gUmVhY3QudXNlU3RhdGUoKTtcblxuICAvLyBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgLy8gICBzZXRTaXplKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIC8vIH07XG5cbiAgLy8gY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gIC8vICAgc2V0UHJvZHVjdChjdXJyZW50UHJvZHVjdCk7XG4gIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9kdWN0XCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRQcm9kdWN0KSk7XG4gIC8vIH07XG5cbiAgbGV0IGlkID0gcHJvcHMucGFyYW1zLmlkO1xuICBjb25zdCB7IGZldGNoUHJvZHVjdEJ5SWQsIGFkZEl0ZW1Ub0NoZWNrb3V0LCBwcm9kdWN0IH0gPSBSZWFjdC51c2VDb250ZXh0KFxuICAgIFNob3BDb250ZXh0XG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFByb2R1Y3RCeUlkKGlkKTtcbiAgICByZXR1cm4gKCkgPT4ge307XG4gIH0sIFtmZXRjaFByb2R1Y3RCeUlkLCBpZF0pO1xuXG4gIGlmICghcHJvZHVjdC50aXRsZSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwicHJvZHVjdC1kZXRhaWxzLXBhZ2VcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+T0pPUyB8IHtwcm9kdWN0LnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgaWQ9XCJwcm9kdWN0LWRldGFpbHMtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJwcm9kdWN0LWltYWdlXCI+XG4gICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cInByb2R1Y3RzXCIgZmx1aWQgc3JjPXtwcm9kdWN0LmltYWdlc1swXS5zcmN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwicHJvZHVjdC1kZXRhaWxzXCI+XG4gICAgICAgICAgPGgxPntwcm9kdWN0LnRpdGxlfTwvaDE+XG4gICAgICAgICAgPHA+JHtwcm9kdWN0LnZhcmlhbnRzWzBdLnByaWNlfTwvcD5cbiAgICAgICAgICB7LyogPHNlbGVjdCBpZD1cInNpemUtc2VsZWN0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICA8b3B0aW9uIGtleT1cIm51bGxcIj5TZWxlY3QgU2l6ZTwvb3B0aW9uPlxuICAgICAgICAgICAge3NpemVzICYmXG4gICAgICAgICAgICAgIHNpemVzLm1hcCgoc2l6ZSkgPT4gPG9wdGlvbiB2YWx1ZT17c2l6ZX0ga2V5PXtzaXplfT48L29wdGlvbj4pfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIHtzaXplID09PSB1bmRlZmluZWQgfHwgc2l6ZSA9PT0gXCJTZWxlY3QgU2l6ZVwiID8gKFxuICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZCBjbGFzc05hbWU9XCJhZGQtdG8tY2FydC1idG5cIj5cbiAgICAgICAgICAgICAgQWRkIHRvIENhcnRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgKX0gKi99XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkLXRvLWNhcnQtYnRuXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW1Ub0NoZWNrb3V0KHByb2R1Y3QudmFyaWFudHNbMF0uaWQsIDEpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFkZCB0byBDYXJ0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGg0PkRlc2NyaXB0aW9uPC9oND5cbiAgICAgICAgICA8cD57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPGg0PlNpemluZzwvaDQ+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBDb21wbGltZW50YXJ5IGdyb3VuZCBzaGlwcGluZyBvbiBhbGwgZG9tZXN0aWMgb3JkZXJzLiBSZXR1cm5zXG4gICAgICAgICAgICBhY2NlcHRlZCB3aXRoaW4gNyBkYXlzIG9mIGRlbGl2ZXJ5IG9uIGZ1bGwgcHJpY2UgaXRlbXMuIEFsbCBzYWxlXG4gICAgICAgICAgICBpdGVtcyBhbmQgbWFza3MgYXJlIGZpbmFsIHNhbGUuIEludGVybmF0aW9uYWwgc2hpcHBpbmcgYXZhaWxhYmxlIHRvXG4gICAgICAgICAgICBzZWxlY3QgY291bnRyaWVzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDQ+U2hpcHBpbmc8L2g0PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQ29tcGxpbWVudGFyeSBncm91bmQgc2hpcHBpbmcgb24gYWxsIGRvbWVzdGljIG9yZGVycy4gUmV0dXJuc1xuICAgICAgICAgICAgYWNjZXB0ZWQgd2l0aGluIDcgZGF5cyBvZiBkZWxpdmVyeSBvbiBmdWxsIHByaWNlIGl0ZW1zLiBBbGwgc2FsZVxuICAgICAgICAgICAgaXRlbXMgYW5kIG1hc2tzIGFyZSBmaW5hbCBzYWxlLiBJbnRlcm5hdGlvbmFsIHNoaXBwaW5nIGF2YWlsYWJsZSB0b1xuICAgICAgICAgICAgc2VsZWN0IGNvdW50cmllcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyBGZXRjaGluZyBkYXRhIGZyb20gU2FuaXR5LmlvIHdpdGggR1JPUSBxdWVyeVxuUHJvZHVjdERldGFpbHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1zID0gYXdhaXQgY29udGV4dC5xdWVyeTtcbiAgcmV0dXJuIHsgcGFyYW1zOiBwYXJhbXMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWxzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/[id].js\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sanity/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiPzNmYTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHNhbml0eS9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sanity/client\n");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sanity/image-url\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2ltYWdlLXVybFwiPzhlZmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHNhbml0eS9pbWFnZS11cmwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2ltYWdlLXVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sanity/image-url\n");

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

/***/ "react-bootstrap/Image":
/*!****************************************!*\
  !*** external "react-bootstrap/Image" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Image\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvSW1hZ2VcIj8zZGYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC9JbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9JbWFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Image\n");

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