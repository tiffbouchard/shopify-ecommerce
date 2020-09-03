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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"react-bootstrap/Navbar\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Nav */ \"react-bootstrap/Nav\");\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modal_subscribe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal_subscribe */ \"./components/modal_subscribe.js\");\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/components/footer.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Footer = () => {\n  const [modalShow, setModalShow] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);\n  return __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    className: \"footer\",\n    bg: \"white\",\n    fixed: \"sticky\",\n    expand: \"md\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: \"mr-auto\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {\n    href: \"/contact\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, \"Contact\"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {\n    href: \"/policy\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, \"Store Policy\"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {\n    onClick: () => setModalShow(true),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, \"Subscribe\"), __jsx(_modal_subscribe__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    show: modalShow,\n    onHide: () => setModalShow(false),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  })), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {\n    href: \"http://tiffbouchard.com\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, \"\\xA92020 OJOS - Built & Designed by Tiffany Bouchard \\uD83C\\uDF31\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci5qcz82ODgzIl0sIm5hbWVzIjpbIkZvb3RlciIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsIlJlYWN0IiwidXNlU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ25CLFFBQU0sQ0FBQ0MsU0FBRCxFQUFZQyxZQUFaLElBQTRCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUFsQztBQUNBLFNBQ0UsTUFBQyw2REFBRDtBQUFRLGFBQVMsRUFBQyxRQUFsQjtBQUEyQixNQUFFLEVBQUMsT0FBOUI7QUFBc0MsU0FBSyxFQUFDLFFBQTVDO0FBQXFELFVBQU0sRUFBQyxJQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFELENBQUssSUFBTDtBQUFVLFFBQUksRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFLE1BQUMsMERBQUQsQ0FBSyxJQUFMO0FBQVUsUUFBSSxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixFQUdFLE1BQUMsMERBQUQsQ0FBSyxJQUFMO0FBQVUsV0FBTyxFQUFFLE1BQU1GLFlBQVksQ0FBQyxJQUFELENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsRUFJRSxNQUFDLHdEQUFEO0FBQWdCLFFBQUksRUFBRUQsU0FBdEI7QUFBaUMsVUFBTSxFQUFFLE1BQU1DLFlBQVksQ0FBQyxLQUFELENBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGLEVBT0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRCxDQUFLLElBQUw7QUFBVSxRQUFJLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5RUFERixDQVBGLENBREY7QUFlRCxDQWpCRDs7QUFtQmVGLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9mb290ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI7XG5pbXBvcnQgTmF2IGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2XCI7XG5cbmltcG9ydCBTdWJzY3JpYmVNb2RhbCBmcm9tIFwiLi9tb2RhbF9zdWJzY3JpYmVcIjtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxOYXZiYXIgY2xhc3NOYW1lPVwiZm9vdGVyXCIgYmc9XCJ3aGl0ZVwiIGZpeGVkPVwic3RpY2t5XCIgZXhwYW5kPVwibWRcIj5cbiAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxuICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdDwvTmF2Lkxpbms+XG4gICAgICAgIDxOYXYuTGluayBocmVmPVwiL3BvbGljeVwiPlN0b3JlIFBvbGljeTwvTmF2Lkxpbms+XG4gICAgICAgIDxOYXYuTGluayBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbFNob3codHJ1ZSl9PlN1YnNjcmliZTwvTmF2Lkxpbms+XG4gICAgICAgIDxTdWJzY3JpYmVNb2RhbCBzaG93PXttb2RhbFNob3d9IG9uSGlkZT17KCkgPT4gc2V0TW9kYWxTaG93KGZhbHNlKX0gLz5cbiAgICAgIDwvTmF2PlxuICAgICAgPE5hdj5cbiAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCJodHRwOi8vdGlmZmJvdWNoYXJkLmNvbVwiPlxuICAgICAgICAgIMKpMjAyMCBPSk9TIC0gQnVpbHQgJiBEZXNpZ25lZCBieSBUaWZmYW55IEJvdWNoYXJkIPCfjLFcbiAgICAgICAgPC9OYXYuTGluaz5cbiAgICAgIDwvTmF2PlxuICAgIDwvTmF2YmFyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/footer.js\n");

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ \"./components/nav.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./components/footer.js\");\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/components/layout.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Layout = ({\n  children\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }), __jsx(\"main\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, children), __jsx(_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC5qcz8wOWE3Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQy9CLFNBQ0UsbUVBQ0UsTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9BLFFBQVAsQ0FGRixFQUdFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREY7QUFPRCxDQVJEOztBQVVlRCxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdiBmcm9tIFwiLi9uYXZcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdiAvPlxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.js\n");

/***/ }),

/***/ "./components/modal_subscribe.js":
/*!***************************************!*\
  !*** ./components/modal_subscribe.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Modal */ \"react-bootstrap/Modal\");\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ \"react-bootstrap/Button\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form */ \"react-bootstrap/Form\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/FormControl */ \"react-bootstrap/FormControl\");\n/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/components/modal_subscribe.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\nfunction SubscribeModal(props) {\n  return __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, props, {\n    size: \"xl\",\n    \"aria-labelledby\": \"contained-modal-title-vcenter\",\n    centered: true,\n    style: {\n      border: \"0px\",\n      borderRadius: \"0px\",\n      backgroundClip: \"none\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default.a.Header, {\n    closeButton: true,\n    style: {\n      borderBottom: \"none\",\n      backgroundColor: \"rgb(173, 223, 173)\",\n      border: \"none\",\n      borderRadius: \"0\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default.a.Body, {\n    style: {\n      backgroundColor: \"rgb(173, 223, 173)\",\n      height: \"180px\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, \"Join the list for exclusive details on products and events\"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    className: \"subscribe-form\",\n    inline: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    type: \"text\",\n    placeholder: \"Email\",\n    style: {\n      borderBottom: \"none\",\n      backgroundColor: \"rgb(173, 223, 173)\",\n      border: \"1px solid black\",\n      borderRadius: \"0px\",\n      width: \"50%\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    style: {\n      borderBottom: \"none\",\n      backgroundColor: \"rgb(173, 223, 173)\",\n      border: \"1px solid black\",\n      borderRadius: \"0px\",\n      color: \"black\",\n      margin: \"5px\"\n    },\n    type: \"submit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }, \"Subscribe\"))));\n} // .modal-header {\n//   border-bottom: none;\n// }\n// .modal-content {\n//   background-color: rgb(173, 223, 173);\n//   border: none;\n//   border-radius: 0px;\n// }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubscribeModal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsX3N1YnNjcmliZS5qcz84MzJmIl0sIm5hbWVzIjpbIlN1YnNjcmliZU1vZGFsIiwicHJvcHMiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ2xpcCIsImJvcmRlckJvdHRvbSIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsIndpZHRoIiwiY29sb3IiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFDN0IsU0FDRSxNQUFDLDREQUFELGVBQ01BLEtBRE47QUFFRSxRQUFJLEVBQUMsSUFGUDtBQUdFLHVCQUFnQiwrQkFIbEI7QUFJRSxZQUFRLE1BSlY7QUFLRSxTQUFLLEVBQUU7QUFDTEMsWUFBTSxFQUFFLEtBREg7QUFFTEMsa0JBQVksRUFBRSxLQUZUO0FBR0xDLG9CQUFjLEVBQUU7QUFIWCxLQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFXRSxNQUFDLDREQUFELENBQU8sTUFBUDtBQUNFLGVBQVcsTUFEYjtBQUVFLFNBQUssRUFBRTtBQUNMQyxrQkFBWSxFQUFFLE1BRFQ7QUFFTEMscUJBQWUsRUFBRSxvQkFGWjtBQUdMSixZQUFNLEVBQUUsTUFISDtBQUlMQyxrQkFBWSxFQUFFO0FBSlQsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsRUFvQkUsTUFBQyw0REFBRCxDQUFPLElBQVA7QUFDRSxTQUFLLEVBQUU7QUFDTEcscUJBQWUsRUFBRSxvQkFEWjtBQUVMQyxZQUFNLEVBQUU7QUFGSCxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtFQU5GLEVBT0UsTUFBQywyREFBRDtBQUFNLGFBQVMsRUFBQyxnQkFBaEI7QUFBaUMsVUFBTSxNQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsZUFBVyxFQUFDLE9BRmQ7QUFHRSxTQUFLLEVBQUU7QUFDTEYsa0JBQVksRUFBRSxNQURUO0FBRUxDLHFCQUFlLEVBQUUsb0JBRlo7QUFHTEosWUFBTSxFQUFFLGlCQUhIO0FBSUxDLGtCQUFZLEVBQUUsS0FKVDtBQUtMSyxXQUFLLEVBQUU7QUFMRixLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVlFLE1BQUMsNkRBQUQ7QUFDRSxTQUFLLEVBQUU7QUFDTEgsa0JBQVksRUFBRSxNQURUO0FBRUxDLHFCQUFlLEVBQUUsb0JBRlo7QUFHTEosWUFBTSxFQUFFLGlCQUhIO0FBSUxDLGtCQUFZLEVBQUUsS0FKVDtBQUtMTSxXQUFLLEVBQUUsT0FMRjtBQU1MQyxZQUFNLEVBQUU7QUFOSCxLQURUO0FBU0UsUUFBSSxFQUFDLFFBVFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRixDQVBGLENBcEJGLENBREY7QUF5REQsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVlViw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbW9kYWxfc3Vic2NyaWJlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTW9kYWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2xcIjtcblxuZnVuY3Rpb24gU3Vic2NyaWJlTW9kYWwocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8TW9kYWxcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIHNpemU9XCJ4bFwiXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXG4gICAgICBjZW50ZXJlZFxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYm9yZGVyOiBcIjBweFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMHB4XCIsXG4gICAgICAgIGJhY2tncm91bmRDbGlwOiBcIm5vbmVcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPE1vZGFsLkhlYWRlclxuICAgICAgICBjbG9zZUJ1dHRvblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJvcmRlckJvdHRvbTogXCJub25lXCIsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigxNzMsIDIyMywgMTczKVwiLFxuICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBcIixcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8TW9kYWwuQm9keVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTczLCAyMjMsIDE3MylcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTgwcHhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGg0PkpvaW4gdGhlIGxpc3QgZm9yIGV4Y2x1c2l2ZSBkZXRhaWxzIG9uIHByb2R1Y3RzIGFuZCBldmVudHM8L2g0PlxuICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJzdWJzY3JpYmUtZm9ybVwiIGlubGluZT5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigxNzMsIDIyMywgMTczKVwiLFxuICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwcHhcIixcbiAgICAgICAgICAgICAgd2lkdGg6IFwiNTAlXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigxNzMsIDIyMywgMTczKVwiLFxuICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwcHhcIixcbiAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjVweFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFN1YnNjcmliZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L01vZGFsLkJvZHk+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn1cblxuLy8gLm1vZGFsLWhlYWRlciB7XG4vLyAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4vLyB9XG4vLyAubW9kYWwtY29udGVudCB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDIyMywgMTczKTtcbi8vICAgYm9yZGVyOiBub25lO1xuLy8gICBib3JkZXItcmFkaXVzOiAwcHg7XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnNjcmliZU1vZGFsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/modal_subscribe.js\n");

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_shopContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/shopContext */ \"./context/shopContext.js\");\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/components/nav.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Navigation = () => {\n  const [clicked, setClicked] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);\n\n  const toggleClick = () => setClicked(!clicked);\n\n  const {\n    checkoutTotal\n  } = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_context_shopContext__WEBPACK_IMPORTED_MODULE_1__[\"ShopContext\"]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"nav\", {\n    className: \"navigation\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    id: \"nav-two\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    onClick: toggleClick,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 11\n    }\n  }, \"Shop\"), __jsx(\"a\", {\n    href: \"/about\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 11\n    }\n  }, \"About\")), __jsx(\"div\", {\n    id: \"nav-header\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: \"/\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  }, \"OJOS\")), __jsx(\"div\", {\n    id: \"nav-two\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: \"/search\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, \"Search\"), __jsx(\"a\", {\n    href: \"/cart\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, \"Cart \", checkoutTotal > 0 ? checkoutTotal : \"()\"))), __jsx(\"nav\", {\n    className: clicked ? \"dropdown-nav-hover\" : \"dropdown-nav\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: \"/collections/new\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, \"New\"), __jsx(\"a\", {\n    href: \"/collections/tops\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, \"Tops\"), __jsx(\"a\", {\n    href: \"/collections/bottoms\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, \"Bottoms\"), __jsx(\"a\", {\n    href: \"/collections/accessories\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, \"Accessories\"), __jsx(\"a\", {\n    href: \"/collections/bags\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, \"Bags\"), __jsx(\"a\", {\n    href: \"/collections/jewelry\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"Jewelry\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdi5qcz8zMWIyIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJjbGlja2VkIiwic2V0Q2xpY2tlZCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0b2dnbGVDbGljayIsImNoZWNrb3V0VG90YWwiLCJ1c2VDb250ZXh0IiwiU2hvcENvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUcsTUFBTTtBQUN2QixRQUFNLENBQUNDLE9BQUQsRUFBVUMsVUFBVixJQUF3QkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FBOUI7O0FBQ0EsUUFBTUMsV0FBVyxHQUFHLE1BQU1ILFVBQVUsQ0FBQyxDQUFDRCxPQUFGLENBQXBDOztBQUVBLFFBQU07QUFBRUs7QUFBRixNQUFvQkgsNENBQUssQ0FBQ0ksVUFBTixDQUFpQkMsZ0VBQWpCLENBQTFCO0FBRUEsU0FDRSxtRUFDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE1BQUUsRUFBQyxTQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFdBQU8sRUFBRUgsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBRyxRQUFJLEVBQUMsUUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsQ0FERixFQUtFO0FBQUssTUFBRSxFQUFDLFlBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBTEYsRUFRRTtBQUFLLE1BQUUsRUFBQyxTQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxTQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFO0FBQUcsUUFBSSxFQUFDLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFzQkMsYUFBYSxHQUFHLENBQWhCLEdBQW9CQSxhQUFwQixHQUFvQyxJQUExRCxDQUZGLENBUkYsQ0FERixFQWNFO0FBQUssYUFBUyxFQUFFTCxPQUFPLEdBQUcsb0JBQUgsR0FBMEIsY0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLGtCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERixFQUVFO0FBQUcsUUFBSSxFQUFDLG1CQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQUdFO0FBQUcsUUFBSSxFQUFDLHNCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixFQUlFO0FBQUcsUUFBSSxFQUFDLDBCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsRUFLRTtBQUFHLFFBQUksRUFBQyxtQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsRUFNRTtBQUFHLFFBQUksRUFBQyxzQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkYsQ0FkRixDQURGO0FBeUJELENBL0JEOztBQWlDZUQseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNob3BDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvc2hvcENvbnRleHRcIjtcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW2NsaWNrZWQsIHNldENsaWNrZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVDbGljayA9ICgpID0+IHNldENsaWNrZWQoIWNsaWNrZWQpO1xuXG4gIGNvbnN0IHsgY2hlY2tvdXRUb3RhbCB9ID0gUmVhY3QudXNlQ29udGV4dChTaG9wQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJuYXYtdHdvXCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVDbGlja30+U2hvcDwvYnV0dG9uPlxuICAgICAgICAgIDxhIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJuYXYtaGVhZGVyXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIi9cIj5PSk9TPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cIm5hdi10d29cIj5cbiAgICAgICAgICA8YSBocmVmPVwiL3NlYXJjaFwiPlNlYXJjaDwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiL2NhcnRcIj5DYXJ0IHtjaGVja291dFRvdGFsID4gMCA/IGNoZWNrb3V0VG90YWwgOiBcIigpXCJ9PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9e2NsaWNrZWQgPyBcImRyb3Bkb3duLW5hdi1ob3ZlclwiIDogXCJkcm9wZG93bi1uYXZcIn0+XG4gICAgICAgIDxhIGhyZWY9XCIvY29sbGVjdGlvbnMvbmV3XCI+TmV3PC9hPlxuICAgICAgICA8YSBocmVmPVwiL2NvbGxlY3Rpb25zL3RvcHNcIj5Ub3BzPC9hPlxuICAgICAgICA8YSBocmVmPVwiL2NvbGxlY3Rpb25zL2JvdHRvbXNcIj5Cb3R0b21zPC9hPlxuICAgICAgICA8YSBocmVmPVwiL2NvbGxlY3Rpb25zL2FjY2Vzc29yaWVzXCI+QWNjZXNzb3JpZXM8L2E+XG4gICAgICAgIDxhIGhyZWY9XCIvY29sbGVjdGlvbnMvYmFnc1wiPkJhZ3M8L2E+XG4gICAgICAgIDxhIGhyZWY9XCIvY29sbGVjdGlvbnMvamV3ZWxyeVwiPkpld2Vscnk8L2E+XG4gICAgICA8L25hdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/nav.js\n");

/***/ }),

/***/ "./context/shopContext.js":
/*!********************************!*\
  !*** ./context/shopContext.js ***!
  \********************************/
/*! exports provided: ShopConsumer, ShopContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShopConsumer\", function() { return ShopConsumer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShopContext\", function() { return ShopContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shopify-buy */ \"shopify-buy\");\n/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shopify_buy__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/context/shopContext.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst ShopContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();\nconst client = shopify_buy__WEBPACK_IMPORTED_MODULE_1___default.a.buildClient({\n  domain: \"ojos-store.myshopify.com\",\n  storefrontAccessToken: \"e52f8498c6bb5dea9c7c6670860b7224\"\n});\n\nclass ShopProvider extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      products: [],\n      product: {},\n      checkout: {},\n      checkoutTotal: 0\n    });\n\n    _defineProperty(this, \"createCheckout\", async () => {\n      const checkout = await client.checkout.create();\n      localStorage.setItem(\"checkout\", checkout.id);\n      this.setState({\n        checkout: checkout\n      });\n    });\n\n    _defineProperty(this, \"fetchCheckout\", async checkoutId => {\n      client.checkout.fetch(checkoutId).then(checkout => {\n        this.setState({\n          checkout: checkout\n        });\n      }).catch(err => console.log(err));\n    });\n\n    _defineProperty(this, \"addItemToCheckout\", async (variantId, quantity) => {\n      const lineItemsToAdd = [{\n        variantId,\n        quantity: parseInt(quantity, 10)\n      }];\n      const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd);\n      this.setState({\n        checkout: checkout\n      });\n      const checkoutTotal = parseInt(this.state.checkoutTotal, 10) + 1;\n      this.setState({\n        checkoutTotal: checkoutTotal\n      });\n      localStorage.setItem(\"checkoutTotal\", this.state.checkoutTotal);\n    });\n\n    _defineProperty(this, \"fetchAllProducts\", async () => {\n      const products = await client.product.fetchAll();\n      this.setState({\n        products: products\n      });\n    });\n\n    _defineProperty(this, \"fetchProductById\", async id => {\n      const product = await client.product.fetch(id);\n      this.setState({\n        product: product\n      });\n    });\n  }\n\n  componentDidMount() {\n    if (localStorage.checkout) {\n      this.fetchCheckout(localStorage.checkout);\n    } else {\n      this.createCheckout();\n    }\n\n    if (localStorage.checkoutTotal) {\n      const checkoutTotal = localStorage.getItem(\"checkoutTotal\");\n      this.setState({\n        checkoutTotal: checkoutTotal\n      });\n    }\n  }\n\n  render() {\n    return __jsx(ShopContext.Provider, {\n      value: _objectSpread(_objectSpread({}, this.state), {}, {\n        fetchAllProducts: this.fetchAllProducts,\n        fetchProductById: this.fetchProductById,\n        incrementCheckoutTotal: this.incrementCheckoutTotal,\n        addItemToCheckout: this.addItemToCheckout\n      }),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 7\n      }\n    }, this.props.children);\n  }\n\n}\n\nconst ShopConsumer = ShopContext.Consumer;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShopProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L3Nob3BDb250ZXh0LmpzPzRmN2YiXSwibmFtZXMiOlsiU2hvcENvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJjbGllbnQiLCJDbGllbnQiLCJidWlsZENsaWVudCIsImRvbWFpbiIsInN0b3JlZnJvbnRBY2Nlc3NUb2tlbiIsIlNob3BQcm92aWRlciIsIkNvbXBvbmVudCIsInByb2R1Y3RzIiwicHJvZHVjdCIsImNoZWNrb3V0IiwiY2hlY2tvdXRUb3RhbCIsImNyZWF0ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJpZCIsInNldFN0YXRlIiwiY2hlY2tvdXRJZCIsImZldGNoIiwidGhlbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInZhcmlhbnRJZCIsInF1YW50aXR5IiwibGluZUl0ZW1zVG9BZGQiLCJwYXJzZUludCIsImFkZExpbmVJdGVtcyIsInN0YXRlIiwiZmV0Y2hBbGwiLCJjb21wb25lbnREaWRNb3VudCIsImZldGNoQ2hlY2tvdXQiLCJjcmVhdGVDaGVja291dCIsImdldEl0ZW0iLCJyZW5kZXIiLCJmZXRjaEFsbFByb2R1Y3RzIiwiZmV0Y2hQcm9kdWN0QnlJZCIsImluY3JlbWVudENoZWNrb3V0VG90YWwiLCJhZGRJdGVtVG9DaGVja291dCIsInByb3BzIiwiY2hpbGRyZW4iLCJTaG9wQ29uc3VtZXIiLCJDb25zdW1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsNENBQUssQ0FBQ0MsYUFBTixFQUFwQjtBQUVBLE1BQU1DLE1BQU0sR0FBR0Msa0RBQU0sQ0FBQ0MsV0FBUCxDQUFtQjtBQUNoQ0MsUUFBTSxFQUFFLDBCQUR3QjtBQUVoQ0MsdUJBQXFCLEVBQUU7QUFGUyxDQUFuQixDQUFmOztBQUtBLE1BQU1DLFlBQU4sU0FBMkJQLDRDQUFLLENBQUNRLFNBQWpDLENBQTJDO0FBQUE7QUFBQTs7QUFBQSxtQ0FD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SUhDLDhCQUFzQixFQUFFLEtBQUtBLHNCQUoxQjtBQUtIQyx5QkFBaUIsRUFBRSxLQUFLQTtBQUxyQixRQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FTRyxLQUFLQyxLQUFMLENBQVdDLFFBVGQsQ0FERjtBQWFEOztBQWxGd0M7O0FBcUYzQyxNQUFNQyxZQUFZLEdBQUc1QyxXQUFXLENBQUM2QyxRQUFqQztBQUVBO0FBRWVyQywyRUFBZiIsImZpbGUiOiIuL2NvbnRleHQvc2hvcENvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xpZW50IGZyb20gXCJzaG9waWZ5LWJ1eVwiO1xuXG5jb25zdCBTaG9wQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgY2xpZW50ID0gQ2xpZW50LmJ1aWxkQ2xpZW50KHtcbiAgZG9tYWluOiBcIm9qb3Mtc3RvcmUubXlzaG9waWZ5LmNvbVwiLFxuICBzdG9yZWZyb250QWNjZXNzVG9rZW46IFwiZTUyZjg0OThjNmJiNWRlYTljN2M2NjcwODYwYjcyMjRcIixcbn0pO1xuXG5jbGFzcyBTaG9wUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBwcm9kdWN0czogW10sXG4gICAgcHJvZHVjdDoge30sXG4gICAgY2hlY2tvdXQ6IHt9LFxuICAgIGNoZWNrb3V0VG90YWw6IDAsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5jaGVja291dCkge1xuICAgICAgdGhpcy5mZXRjaENoZWNrb3V0KGxvY2FsU3RvcmFnZS5jaGVja291dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3JlYXRlQ2hlY2tvdXQoKTtcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5jaGVja291dFRvdGFsKSB7XG4gICAgICBjb25zdCBjaGVja291dFRvdGFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGVja291dFRvdGFsXCIpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrb3V0VG90YWw6IGNoZWNrb3V0VG90YWwgfSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlQ2hlY2tvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY2hlY2tvdXQgPSBhd2FpdCBjbGllbnQuY2hlY2tvdXQuY3JlYXRlKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGVja291dFwiLCBjaGVja291dC5pZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrb3V0OiBjaGVja291dCB9KTtcbiAgfTtcblxuICBmZXRjaENoZWNrb3V0ID0gYXN5bmMgKGNoZWNrb3V0SWQpID0+IHtcbiAgICBjbGllbnQuY2hlY2tvdXRcbiAgICAgIC5mZXRjaChjaGVja291dElkKVxuICAgICAgLnRoZW4oKGNoZWNrb3V0KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja291dDogY2hlY2tvdXQgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9O1xuXG4gIGFkZEl0ZW1Ub0NoZWNrb3V0ID0gYXN5bmMgKHZhcmlhbnRJZCwgcXVhbnRpdHkpID0+IHtcbiAgICBjb25zdCBsaW5lSXRlbXNUb0FkZCA9IFtcbiAgICAgIHtcbiAgICAgICAgdmFyaWFudElkLFxuICAgICAgICBxdWFudGl0eTogcGFyc2VJbnQocXVhbnRpdHksIDEwKSxcbiAgICAgIH0sXG4gICAgXTtcbiAgICBjb25zdCBjaGVja291dCA9IGF3YWl0IGNsaWVudC5jaGVja291dC5hZGRMaW5lSXRlbXMoXG4gICAgICB0aGlzLnN0YXRlLmNoZWNrb3V0LmlkLFxuICAgICAgbGluZUl0ZW1zVG9BZGRcbiAgICApO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja291dDogY2hlY2tvdXQgfSk7XG4gICAgY29uc3QgY2hlY2tvdXRUb3RhbCA9IHBhcnNlSW50KHRoaXMuc3RhdGUuY2hlY2tvdXRUb3RhbCwgMTApICsgMTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tvdXRUb3RhbDogY2hlY2tvdXRUb3RhbCB9KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoZWNrb3V0VG90YWxcIiwgdGhpcy5zdGF0ZS5jaGVja291dFRvdGFsKTtcbiAgfTtcblxuICAvLyBpbmNyZW1lbnRDaGVja291dFRvdGFsID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgIGNvbnN0IGNoZWNrb3V0VG90YWwgPVxuICAvLyAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja291dFRvdGFsOiB0aGlzLnN0YXRlLmNoZWNrb3V0VG90YWwgfSk7XG4gIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGVja291dFRvdGFsXCIsIHRoaXMuc3RhdGUuY2hlY2tvdXRUb3RhbCk7XG4gIC8vIH1cblxuICBmZXRjaEFsbFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgY2xpZW50LnByb2R1Y3QuZmV0Y2hBbGwoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdHM6IHByb2R1Y3RzIH0pO1xuICB9O1xuXG4gIGZldGNoUHJvZHVjdEJ5SWQgPSBhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgY2xpZW50LnByb2R1Y3QuZmV0Y2goaWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0OiBwcm9kdWN0IH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNob3BDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICBmZXRjaEFsbFByb2R1Y3RzOiB0aGlzLmZldGNoQWxsUHJvZHVjdHMsXG4gICAgICAgICAgZmV0Y2hQcm9kdWN0QnlJZDogdGhpcy5mZXRjaFByb2R1Y3RCeUlkLFxuICAgICAgICAgIGluY3JlbWVudENoZWNrb3V0VG90YWw6IHRoaXMuaW5jcmVtZW50Q2hlY2tvdXRUb3RhbCxcbiAgICAgICAgICBhZGRJdGVtVG9DaGVja291dDogdGhpcy5hZGRJdGVtVG9DaGVja291dCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L1Nob3BDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgU2hvcENvbnN1bWVyID0gU2hvcENvbnRleHQuQ29uc3VtZXI7XG5cbmV4cG9ydCB7IFNob3BDb25zdW1lciwgU2hvcENvbnRleHQgfTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcFByb3ZpZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/shopContext.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/bootstrap/dist/css/bootstrap.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_shopContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/shopContext */ \"./context/shopContext.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(_context_shopContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxTQUNFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRCxlQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGLENBREY7QUFPRDs7QUFFY0Ysb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xuaW1wb3J0IFNob3BQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dC9zaG9wQ29udGV4dFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFNob3BQcm92aWRlcj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvU2hvcFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globals.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Button\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI/ZmFhOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAvQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Button\n");

/***/ }),

/***/ "react-bootstrap/Form":
/*!***************************************!*\
  !*** external "react-bootstrap/Form" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Form\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiPzljZDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtYm9vdHN0cmFwL0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Form\n");

/***/ }),

/***/ "react-bootstrap/FormControl":
/*!**********************************************!*\
  !*** external "react-bootstrap/FormControl" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/FormControl\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2xcIj9kMTU0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/FormControl\n");

/***/ }),

/***/ "react-bootstrap/Modal":
/*!****************************************!*\
  !*** external "react-bootstrap/Modal" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Modal\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTW9kYWxcIj8xMGI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC9Nb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Nb2RhbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Modal\n");

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Nav\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTmF2XCI/Yzk3NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAvTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL05hdlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Nav\n");

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!*****************************************!*\
  !*** external "react-bootstrap/Navbar" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Navbar\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI/YWRmNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAvTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Navbar\n");

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