webpackHotUpdate_N_E("pages/_app",{

/***/ "./context/shopContext.js":
/*!********************************!*\
  !*** ./context/shopContext.js ***!
  \********************************/
/*! exports provided: ShopConsumer, ShopContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShopConsumer\", function() { return ShopConsumer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShopContext\", function() { return ShopContext; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shopify-buy */ \"./node_modules/shopify-buy/index.js\");\n/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(shopify_buy__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/context/shopContext.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\nvar ShopContext = react__WEBPACK_IMPORTED_MODULE_9___default.a.createContext();\nvar client = shopify_buy__WEBPACK_IMPORTED_MODULE_10___default.a.buildClient({\n  domain: \"ojos-store.myshopify.com\",\n  storefrontAccessToken: \"e52f8498c6bb5dea9c7c6670860b7224\"\n});\n\nvar ShopProvider = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ShopProvider, _React$Component);\n\n  var _super = _createSuper(ShopProvider);\n\n  function ShopProvider() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, ShopProvider);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"state\", {\n      products: [],\n      product: {},\n      checkout: {},\n      checkoutTotal: 0\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"createCheckout\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var checkout;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return client.checkout.create();\n\n            case 2:\n              checkout = _context.sent;\n              localStorage.setItem(\"checkout\", checkout.id);\n\n              _this.setState({\n                checkout: checkout\n              });\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"fetchCheckout\", /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(checkoutId) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                client.checkout.fetch(checkoutId).then(function (checkout) {\n                  _this.setState({\n                    checkout: checkout\n                  });\n                })[\"catch\"](function (err) {\n                  return console.log(err);\n                });\n\n              case 1:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"addItemToCheckout\", /*#__PURE__*/function () {\n      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(variantId, quantity) {\n        var lineItemsToAdd, checkout, checkoutTotal;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                lineItemsToAdd = [{\n                  variantId: variantId,\n                  quantity: parseInt(quantity, 10)\n                }];\n                _context3.next = 3;\n                return client.checkout.addLineItems(_this.state.checkout.id, lineItemsToAdd);\n\n              case 3:\n                checkout = _context3.sent;\n\n                _this.setState({\n                  checkout: checkout\n                });\n\n                checkoutTotal = parseInt(_this.state.checkoutTotal, 10) + 1;\n\n                _this.setState({\n                  checkoutTotal: checkoutTotal\n                });\n\n                localStorage.setItem(\"checkoutTotal\", _this.state.checkoutTotal);\n\n              case 8:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function (_x2, _x3) {\n        return _ref3.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"removeItemFromCheckout\", /*#__PURE__*/function () {\n      var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(checkoutId, lineItemsIds) {\n        var checkoutIdToModify, linesItemIdToRemove;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                checkoutIdToModify = checkoutId; // ID of an existing checkout\n\n                linesItemIdToRemove = [lineItemsIds]; // Remove an item from the checkout\n\n                client.checkout.removeLineItems(checkoutIdToModify, lineItemsIdToRemove).then(function (checkout) {\n                  // Do something with the updated checkout\n                  console.log(checkout.lineItems); // Checkout with line item 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=' removed\n                });\n\n              case 3:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n\n      return function (_x4, _x5) {\n        return _ref4.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"fetchAllProducts\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {\n      var products;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              _context5.next = 2;\n              return client.product.fetchAll();\n\n            case 2:\n              products = _context5.sent;\n\n              _this.setState({\n                products: products\n              });\n\n            case 4:\n            case \"end\":\n              return _context5.stop();\n          }\n        }\n      }, _callee5);\n    })));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"fetchProductById\", /*#__PURE__*/function () {\n      var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(id) {\n        var product;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {\n          while (1) {\n            switch (_context6.prev = _context6.next) {\n              case 0:\n                _context6.next = 2;\n                return client.product.fetch(id);\n\n              case 2:\n                product = _context6.sent;\n\n                _this.setState({\n                  product: product\n                });\n\n              case 4:\n              case \"end\":\n                return _context6.stop();\n            }\n          }\n        }, _callee6);\n      }));\n\n      return function (_x6) {\n        return _ref6.apply(this, arguments);\n      };\n    }());\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ShopProvider, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (localStorage.checkout) {\n        this.fetchCheckout(localStorage.checkout);\n      } else {\n        this.createCheckout();\n      }\n\n      if (localStorage.checkoutTotal) {\n        var checkoutTotal = localStorage.getItem(\"checkoutTotal\");\n        this.setState({\n          checkoutTotal: checkoutTotal\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(ShopContext.Provider, {\n        value: _objectSpread(_objectSpread({}, this.state), {}, {\n          fetchAllProducts: this.fetchAllProducts,\n          fetchProductById: this.fetchProductById,\n          incrementCheckoutTotal: this.incrementCheckoutTotal,\n          addItemToCheckout: this.addItemToCheckout\n        }),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 7\n        }\n      }, this.props.children);\n    }\n  }]);\n\n  return ShopProvider;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\nvar ShopConsumer = ShopContext.Consumer;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShopProvider);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9zaG9wQ29udGV4dC5qcz80ZjdmIl0sIm5hbWVzIjpbIlNob3BDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiY2xpZW50IiwiQ2xpZW50IiwiYnVpbGRDbGllbnQiLCJkb21haW4iLCJzdG9yZWZyb250QWNjZXNzVG9rZW4iLCJTaG9wUHJvdmlkZXIiLCJwcm9kdWN0cyIsInByb2R1Y3QiLCJjaGVja291dCIsImNoZWNrb3V0VG90YWwiLCJjcmVhdGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiaWQiLCJzZXRTdGF0ZSIsImNoZWNrb3V0SWQiLCJmZXRjaCIsInRoZW4iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidmFyaWFudElkIiwicXVhbnRpdHkiLCJsaW5lSXRlbXNUb0FkZCIsInBhcnNlSW50IiwiYWRkTGluZUl0ZW1zIiwic3RhdGUiLCJsaW5lSXRlbXNJZHMiLCJjaGVja291dElkVG9Nb2RpZnkiLCJsaW5lc0l0ZW1JZFRvUmVtb3ZlIiwicmVtb3ZlTGluZUl0ZW1zIiwibGluZUl0ZW1zSWRUb1JlbW92ZSIsImxpbmVJdGVtcyIsImZldGNoQWxsIiwiZmV0Y2hDaGVja291dCIsImNyZWF0ZUNoZWNrb3V0IiwiZ2V0SXRlbSIsImZldGNoQWxsUHJvZHVjdHMiLCJmZXRjaFByb2R1Y3RCeUlkIiwiaW5jcmVtZW50Q2hlY2tvdXRUb3RhbCIsImFkZEl0ZW1Ub0NoZWNrb3V0IiwicHJvcHMiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsIlNob3BDb25zdW1lciIsIkNvbnN1bWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLEVBQXBCO0FBRUEsSUFBTUMsTUFBTSxHQUFHQyxtREFBTSxDQUFDQyxXQUFQLENBQW1CO0FBQ2hDQyxRQUFNLEVBQUUsMEJBRHdCO0FBRWhD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dC9zaG9wQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbGllbnQgZnJvbSBcInNob3BpZnktYnV5XCI7XG5cbmNvbnN0IFNob3BDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBjbGllbnQgPSBDbGllbnQuYnVpbGRDbGllbnQoe1xuICBkb21haW46IFwib2pvcy1zdG9yZS5teXNob3BpZnkuY29tXCIsXG4gIHN0b3JlZnJvbnRBY2Nlc3NUb2tlbjogXCJlNTJmODQ5OGM2YmI1ZGVhOWM3YzY2NzA4NjBiNzIyNFwiLFxufSk7XG5cbmNsYXNzIFNob3BQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHByb2R1Y3RzOiBbXSxcbiAgICBwcm9kdWN0OiB7fSxcbiAgICBjaGVja291dDoge30sXG4gICAgY2hlY2tvdXRUb3RhbDogMCxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmNoZWNrb3V0KSB7XG4gICAgICB0aGlzLmZldGNoQ2hlY2tvdXQobG9jYWxTdG9yYWdlLmNoZWNrb3V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jcmVhdGVDaGVja291dCgpO1xuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLmNoZWNrb3V0VG90YWwpIHtcbiAgICAgIGNvbnN0IGNoZWNrb3V0VG90YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNoZWNrb3V0VG90YWxcIik7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tvdXRUb3RhbDogY2hlY2tvdXRUb3RhbCB9KTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVDaGVja291dCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjaGVja291dCA9IGF3YWl0IGNsaWVudC5jaGVja291dC5jcmVhdGUoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoZWNrb3V0XCIsIGNoZWNrb3V0LmlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tvdXQ6IGNoZWNrb3V0IH0pO1xuICB9O1xuXG4gIGZldGNoQ2hlY2tvdXQgPSBhc3luYyAoY2hlY2tvdXRJZCkgPT4ge1xuICAgIGNsaWVudC5jaGVja291dFxuICAgICAgLmZldGNoKGNoZWNrb3V0SWQpXG4gICAgICAudGhlbigoY2hlY2tvdXQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrb3V0OiBjaGVja291dCB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH07XG5cbiAgYWRkSXRlbVRvQ2hlY2tvdXQgPSBhc3luYyAodmFyaWFudElkLCBxdWFudGl0eSkgPT4ge1xuICAgIGNvbnN0IGxpbmVJdGVtc1RvQWRkID0gW1xuICAgICAge1xuICAgICAgICB2YXJpYW50SWQsXG4gICAgICAgIHF1YW50aXR5OiBwYXJzZUludChxdWFudGl0eSwgMTApLFxuICAgICAgfSxcbiAgICBdO1xuICAgIGNvbnN0IGNoZWNrb3V0ID0gYXdhaXQgY2xpZW50LmNoZWNrb3V0LmFkZExpbmVJdGVtcyhcbiAgICAgIHRoaXMuc3RhdGUuY2hlY2tvdXQuaWQsXG4gICAgICBsaW5lSXRlbXNUb0FkZFxuICAgICk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrb3V0OiBjaGVja291dCB9KTtcbiAgICBjb25zdCBjaGVja291dFRvdGFsID0gcGFyc2VJbnQodGhpcy5zdGF0ZS5jaGVja291dFRvdGFsLCAxMCkgKyAxO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja291dFRvdGFsOiBjaGVja291dFRvdGFsIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hlY2tvdXRUb3RhbFwiLCB0aGlzLnN0YXRlLmNoZWNrb3V0VG90YWwpO1xuICB9O1xuXG4gIHJlbW92ZUl0ZW1Gcm9tQ2hlY2tvdXQgPSBhc3luYyAoY2hlY2tvdXRJZCwgbGluZUl0ZW1zSWRzKSA9PiB7XG4gICAgY29uc3QgY2hlY2tvdXRJZFRvTW9kaWZ5ID0gY2hlY2tvdXRJZDsgLy8gSUQgb2YgYW4gZXhpc3RpbmcgY2hlY2tvdXRcbiAgICBjb25zdCBsaW5lc0l0ZW1JZFRvUmVtb3ZlID0gW2xpbmVJdGVtc0lkc107XG4gICAgLy8gUmVtb3ZlIGFuIGl0ZW0gZnJvbSB0aGUgY2hlY2tvdXRcbiAgICBjbGllbnQuY2hlY2tvdXRcbiAgICAgIC5yZW1vdmVMaW5lSXRlbXMoY2hlY2tvdXRJZFRvTW9kaWZ5LCBsaW5lSXRlbXNJZFRvUmVtb3ZlKVxuICAgICAgLnRoZW4oKGNoZWNrb3V0KSA9PiB7XG4gICAgICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHRoZSB1cGRhdGVkIGNoZWNrb3V0XG4gICAgICAgIGNvbnNvbGUubG9nKGNoZWNrb3V0LmxpbmVJdGVtcyk7IC8vIENoZWNrb3V0IHdpdGggbGluZSBpdGVtICdaMmxrT2k4dmMyaHZjR2xtZVM5UWNtOWtkV04wTHpjNE5UYzVPRGt6T0RRPScgcmVtb3ZlZFxuICAgICAgfSk7XG4gIH07XG5cbiAgZmV0Y2hBbGxQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGNsaWVudC5wcm9kdWN0LmZldGNoQWxsKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RzOiBwcm9kdWN0cyB9KTtcbiAgfTtcblxuICBmZXRjaFByb2R1Y3RCeUlkID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGNsaWVudC5wcm9kdWN0LmZldGNoKGlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdDogcHJvZHVjdCB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaG9wQ29udGV4dC5Qcm92aWRlclxuICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgZmV0Y2hBbGxQcm9kdWN0czogdGhpcy5mZXRjaEFsbFByb2R1Y3RzLFxuICAgICAgICAgIGZldGNoUHJvZHVjdEJ5SWQ6IHRoaXMuZmV0Y2hQcm9kdWN0QnlJZCxcbiAgICAgICAgICBpbmNyZW1lbnRDaGVja291dFRvdGFsOiB0aGlzLmluY3JlbWVudENoZWNrb3V0VG90YWwsXG4gICAgICAgICAgYWRkSXRlbVRvQ2hlY2tvdXQ6IHRoaXMuYWRkSXRlbVRvQ2hlY2tvdXQsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9TaG9wQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IFNob3BDb25zdW1lciA9IFNob3BDb250ZXh0LkNvbnN1bWVyO1xuXG5leHBvcnQgeyBTaG9wQ29uc3VtZXIsIFNob3BDb250ZXh0IH07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3BQcm92aWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/shopContext.js\n");

/***/ })

})