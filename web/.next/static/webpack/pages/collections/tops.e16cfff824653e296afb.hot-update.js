webpackHotUpdate_N_E("pages/collections/tops",{

/***/ "./components/Collection/Collection.js":
/*!*********************************************!*\
  !*** ./components/Collection/Collection.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _context_shopContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/shopContext */ \"./context/shopContext.js\");\n/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Product/Product */ \"./components/Product/Product.js\");\n/* harmony import */ var _Collection_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Collection.module.css */ \"./components/Collection/Collection.module.css\");\n/* harmony import */ var _Collection_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Collection_module_css__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace.nosync/ojos/web/components/Collection/Collection.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Collection = function Collection() {\n  _s();\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_context_shopContext__WEBPACK_IMPORTED_MODULE_3__[\"ShopContext\"]),\n      collection = _React$useContext.collection;\n\n  if (!collection.products) return __jsx(\"div\", {\n    className: \"page-spinner\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Spinner\"], {\n    animation: \"border\",\n    role: \"status\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: \"sr-only\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 11\n    }\n  }, \"Loading...\")));else if (!collection.products[0]) return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"page-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, collection.title), __jsx(\"div\", {\n    className: \"no-products-msg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, \"No products right now, check back later!\")));\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, \"OJOS | \", collection.title), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  })), __jsx(\"h1\", {\n    className: \"page-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, collection.title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    fluid: \"lg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, collection.products.map(function (product) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n      xs: 12,\n      sm: 6,\n      md: 6,\n      lg: 4,\n      key: product.id,\n      className: _Collection_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.column,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 13\n      }\n    }, __jsx(_Product_Product__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      product: product,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 15\n      }\n    }));\n  }))));\n};\n\n_s(Collection, \"Rei0DcJAe1zaaK/Xdsp96qiLUec=\");\n\n_c = Collection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Collection);\n\nvar _c;\n\n$RefreshReg$(_c, \"Collection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2xsZWN0aW9uL0NvbGxlY3Rpb24uanM/MWI5MyJdLCJuYW1lcyI6WyJDb2xsZWN0aW9uIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiU2hvcENvbnRleHQiLCJjb2xsZWN0aW9uIiwicHJvZHVjdHMiLCJ0aXRsZSIsIm1hcCIsInByb2R1Y3QiLCJpZCIsInN0eWxlcyIsImNvbHVtbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLDBCQUNBQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyxnRUFBakIsQ0FEQTtBQUFBLE1BQ2ZDLFVBRGUscUJBQ2ZBLFVBRGU7O0FBR3ZCLE1BQUksQ0FBQ0EsVUFBVSxDQUFDQyxRQUFoQixFQUNFLE9BQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUFTLGFBQVMsRUFBQyxRQUFuQjtBQUE0QixRQUFJLEVBQUMsUUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FERixDQURGLENBREYsS0FRSyxJQUFJLENBQUNELFVBQVUsQ0FBQ0MsUUFBWCxDQUFvQixDQUFwQixDQUFMLEVBQ0gsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCRCxVQUFVLENBQUNFLEtBQXZDLENBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFERixDQUZGLENBREY7QUFRRixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFlRixVQUFVLENBQUNFLEtBQTFCLENBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QkYsVUFBVSxDQUFDRSxLQUF2QyxDQUxGLEVBTUUsTUFBQyx5REFBRDtBQUFXLFNBQUssRUFBQyxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLFVBQVUsQ0FBQ0MsUUFBWCxDQUFvQkUsR0FBcEIsQ0FBd0IsVUFBQ0MsT0FBRDtBQUFBLFdBQ3ZCLE1BQUMsbURBQUQ7QUFBSyxRQUFFLEVBQUUsRUFBVDtBQUFhLFFBQUUsRUFBRSxDQUFqQjtBQUFvQixRQUFFLEVBQUUsQ0FBeEI7QUFBMkIsUUFBRSxFQUFFLENBQS9CO0FBQWtDLFNBQUcsRUFBRUEsT0FBTyxDQUFDQyxFQUEvQztBQUFtRCxlQUFTLEVBQUVDLDZEQUFNLENBQUNDLE1BQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHdEQUFEO0FBQVMsYUFBTyxFQUFFSCxPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEdUI7QUFBQSxHQUF4QixDQURILENBREYsQ0FORixDQURGO0FBa0JELENBdENEOztHQUFNUixVOztLQUFBQSxVO0FBd0NTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29sbGVjdGlvbi9Db2xsZWN0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBTcGlubmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5pbXBvcnQgeyBTaG9wQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L3Nob3BDb250ZXh0XCI7XG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vUHJvZHVjdC9Qcm9kdWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NvbGxlY3Rpb24ubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBDb2xsZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCB7IGNvbGxlY3Rpb24gfSA9IFJlYWN0LnVzZUNvbnRleHQoU2hvcENvbnRleHQpO1xuXG4gIGlmICghY29sbGVjdGlvbi5wcm9kdWN0cylcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXNwaW5uZXJcIj5cbiAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICA8L1NwaW5uZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICBlbHNlIGlmICghY29sbGVjdGlvbi5wcm9kdWN0c1swXSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj57Y29sbGVjdGlvbi50aXRsZX08L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLXByb2R1Y3RzLW1zZ1wiPlxuICAgICAgICAgIDxwPk5vIHByb2R1Y3RzIHJpZ2h0IG5vdywgY2hlY2sgYmFjayBsYXRlciE8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5PSk9TIHwge2NvbGxlY3Rpb24udGl0bGV9PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj57Y29sbGVjdGlvbi50aXRsZX08L2gxPlxuICAgICAgPENvbnRhaW5lciBmbHVpZD1cImxnXCI+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAge2NvbGxlY3Rpb24ucHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezZ9IG1kPXs2fSBsZz17NH0ga2V5PXtwcm9kdWN0LmlkfSBjbGFzc05hbWU9e3N0eWxlcy5jb2x1bW59PlxuICAgICAgICAgICAgICA8UHJvZHVjdCBwcm9kdWN0PXtwcm9kdWN0fS8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Collection/Collection.js\n");

/***/ })

})