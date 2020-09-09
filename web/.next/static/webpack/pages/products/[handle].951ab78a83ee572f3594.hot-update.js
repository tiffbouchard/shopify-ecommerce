webpackHotUpdate_N_E("pages/products/[handle]",{

/***/ "./components/instagram.js":
/*!*********************************!*\
  !*** ./components/instagram.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/components/instagram.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nfunction Instagram() {\n  _s();\n\n  var _this = this;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      error = _React$useState2[0],\n      setError = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      isLoaded = _React$useState4[0],\n      setIsLoaded = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),\n      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState5, 2),\n      images = _React$useState6[0],\n      setImages = _React$useState6[1];\n\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    fetch(\"https://www.instagram.com/tiffbouchard/?__a=1\").then(function (res) {\n      return res.json();\n    }).then(function (result) {\n      setIsLoaded(true);\n      setImages(result.graphql.user.edge_owner_to_timeline_media.edges);\n    }, function (error) {\n      setIsLoaded(true);\n      setError(error);\n    });\n  }, []);\n\n  if (error) {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 12\n      }\n    }, \"Error: \", error.message);\n  } else if (!isLoaded) {\n    return __jsx(\"div\", {\n      className: \"ig-spinner\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Spinner\"], {\n      animation: \"border\",\n      role: \"status\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }\n    }, __jsx(\"span\", {\n      className: \"sr-only\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 11\n      }\n    }, \"Loading...\")));\n  } else {\n    return __jsx(\"div\", {\n      className: \"instagram-feed\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 7\n      }\n    }, images.slice(0, 6).map(function (image) {\n      return __jsx(\"a\", {\n        href: \"http://instagram.com/p/\" + image.node.shortcode,\n        target: \"blank\",\n        key: image.node.shortcode,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }\n      }, __jsx(\"img\", {\n        src: image.node.thumbnail_src,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }\n      }));\n    }));\n  }\n}\n\n_s(Instagram, \"fEeflKynIVFHBaMwWUxO5oMPJTE=\");\n\n_c = Instagram;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Instagram);\n\nvar _c;\n\n$RefreshReg$(_c, \"Instagram\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnN0YWdyYW0uanM/NzQ0NiJdLCJuYW1lcyI6WyJJbnN0YWdyYW0iLCJSZWFjdCIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImlzTG9hZGVkIiwic2V0SXNMb2FkZWQiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0IiwiZ3JhcGhxbCIsInVzZXIiLCJlZGdlX293bmVyX3RvX3RpbWVsaW5lX21lZGlhIiwiZWRnZXMiLCJtZXNzYWdlIiwic2xpY2UiLCJtYXAiLCJpbWFnZSIsIm5vZGUiLCJzaG9ydGNvZGUiLCJ0aHVtYm5haWxfc3JjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUE7O0FBQUEsd0JBQ09DLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBRFA7QUFBQTtBQUFBLE1BQ1pDLEtBRFk7QUFBQSxNQUNMQyxRQURLOztBQUFBLHlCQUVhSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUZiO0FBQUE7QUFBQSxNQUVaRyxRQUZZO0FBQUEsTUFFRkMsV0FGRTs7QUFBQSx5QkFHU0wsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FIVDtBQUFBO0FBQUEsTUFHWkssTUFIWTtBQUFBLE1BR0pDLFNBSEk7O0FBS25CUCw4Q0FBSyxDQUFDUSxTQUFOLENBQWdCLFlBQU07QUFDcEJDLFNBQUssQ0FBQywrQ0FBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxLQURSLEVBRUdGLElBRkgsQ0FHSSxVQUFDRyxNQUFELEVBQVk7QUFDVlIsaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDQUUsZUFBUyxDQUFDTSxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsSUFBZixDQUFvQkMsNEJBQXBCLENBQWlEQyxLQUFsRCxDQUFUO0FBQ0QsS0FOTCxFQU9JLFVBQUNmLEtBQUQsRUFBVztBQUNURyxpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBRixjQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNELEtBVkw7QUFZRCxHQWJELEVBYUcsRUFiSDs7QUFlQSxNQUFJQSxLQUFKLEVBQVc7QUFDVCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWFBLEtBQUssQ0FBQ2dCLE9BQW5CLENBQVA7QUFDRCxHQUZELE1BRU8sSUFBSSxDQUFDZCxRQUFMLEVBQWU7QUFDcEIsV0FDRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHVEQUFEO0FBQVMsZUFBUyxFQUFDLFFBQW5CO0FBQTRCLFVBQUksRUFBQyxRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQURGLENBREY7QUFPRCxHQVJNLE1BUUE7QUFDTCxXQUNFO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0UsTUFBTSxDQUFDYSxLQUFQLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQkMsR0FBbkIsQ0FBdUIsVUFBQ0MsS0FBRDtBQUFBLGFBQ3RCO0FBQ0UsWUFBSSxFQUFFLDRCQUE0QkEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFNBRC9DO0FBRUUsY0FBTSxFQUFDLE9BRlQ7QUFHRSxXQUFHLEVBQUVGLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxTQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBS0U7QUFBSyxXQUFHLEVBQUVGLEtBQUssQ0FBQ0MsSUFBTixDQUFXRSxhQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTEYsQ0FEc0I7QUFBQSxLQUF2QixDQURILENBREY7QUFhRDtBQUNGOztHQTdDUXpCLFM7O0tBQUFBLFM7QUErQ01BLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9pbnN0YWdyYW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcGlubmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5mdW5jdGlvbiBJbnN0YWdyYW0oKSB7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3RpZmZib3VjaGFyZC8/X19hPTFcIilcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihcbiAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xuICAgICAgICAgIHNldEltYWdlcyhyZXN1bHQuZ3JhcGhxbC51c2VyLmVkZ2Vfb3duZXJfdG9fdGltZWxpbmVfbWVkaWEuZWRnZXMpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcbiAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH0sIFtdKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xuICB9IGVsc2UgaWYgKCFpc0xvYWRlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlnLXNwaW5uZXJcIj5cbiAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICA8L1NwaW5uZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3RhZ3JhbS1mZWVkXCI+XG4gICAgICAgIHtpbWFnZXMuc2xpY2UoMCwgNikubWFwKChpbWFnZSkgPT4gKFxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtcImh0dHA6Ly9pbnN0YWdyYW0uY29tL3AvXCIgKyBpbWFnZS5ub2RlLnNob3J0Y29kZX1cbiAgICAgICAgICAgIHRhcmdldD1cImJsYW5rXCJcbiAgICAgICAgICAgIGtleT17aW1hZ2Uubm9kZS5zaG9ydGNvZGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlLm5vZGUudGh1bWJuYWlsX3NyY30gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YWdyYW07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/instagram.js\n");

/***/ })

})