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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about.js");
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

/***/ "./imageUrlBuilder.js":
/*!****************************!*\
  !*** ./imageUrlBuilder.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return urlFor; });\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ \"./client.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\n\n // imageUrlBuilder method from Sanity.io in order to retrieve higher quality images\n\nconst builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nfunction urlFor(source) {\n  return builder.image(source);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbWFnZVVybEJ1aWxkZXIuanM/ZjExMiJdLCJuYW1lcyI6WyJidWlsZGVyIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOztBQUNBLE1BQU1BLE9BQU8sR0FBR0Msd0RBQWUsQ0FBQ0MsK0NBQUQsQ0FBL0I7QUFFZSxTQUFTQyxNQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUNyQyxTQUFPSixPQUFPLENBQUNLLEtBQVIsQ0FBY0QsTUFBZCxDQUFQO0FBQ0QiLCJmaWxlIjoiLi9pbWFnZVVybEJ1aWxkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50IGZyb20gXCIuL2NsaWVudFwiO1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcblxuLy8gaW1hZ2VVcmxCdWlsZGVyIG1ldGhvZCBmcm9tIFNhbml0eS5pbyBpbiBvcmRlciB0byByZXRyaWV2ZSBoaWdoZXIgcXVhbGl0eSBpbWFnZXNcbmNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICByZXR1cm4gYnVpbGRlci5pbWFnZShzb3VyY2UpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./imageUrlBuilder.js\n");

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _imageUrlBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imageUrlBuilder */ \"./imageUrlBuilder.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/pages/about.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst About = props => {\n  const {\n    sections = []\n  } = props;\n  const sectionOne = sections.filter(section => {\n    return section.title === \"Section One\";\n  });\n  const sectionTwo = sections.filter(section => {\n    return section.title === \"Section Two\";\n  });\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, \"OJOS | About\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  })), __jsx(\"h1\", {\n    className: \"page-title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, \"About\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    fluid: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 6,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"about-image-one\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Image\"], {\n    fluid: true,\n    src: Object(_imageUrlBuilder__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(sectionOne[0].image).quality(100).url(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 15\n    }\n  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 6,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"about-paragraph\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 15\n    }\n  }, sectionOne[0].description)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 6,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"about-paragraph\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 15\n    }\n  }, sectionTwo[0].description))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 6,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"about-image-two\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Image\"], {\n    fluid: true,\n    src: Object(_imageUrlBuilder__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(sectionTwo[0].image).quality(100).url(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 15\n    }\n  }))))));\n}; // Fetching data from Sanity.io with GROQ query\n\n\nAbout.getInitialProps = async () => ({\n  sections: await _client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fetch(`\n  *[_type == \"about\"]{description, image, title}\n  `)\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz8yNmVjIl0sIm5hbWVzIjpbIkFib3V0IiwicHJvcHMiLCJzZWN0aW9ucyIsInNlY3Rpb25PbmUiLCJmaWx0ZXIiLCJzZWN0aW9uIiwidGl0bGUiLCJzZWN0aW9uVHdvIiwidXJsRm9yIiwiaW1hZ2UiLCJxdWFsaXR5IiwidXJsIiwiZGVzY3JpcHRpb24iLCJnZXRJbml0aWFsUHJvcHMiLCJjbGllbnQiLCJmZXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsS0FBSyxHQUFJQyxLQUFELElBQVc7QUFDdkIsUUFBTTtBQUFFQyxZQUFRLEdBQUc7QUFBYixNQUFvQkQsS0FBMUI7QUFFQSxRQUFNRSxVQUFVLEdBQUdELFFBQVEsQ0FBQ0UsTUFBVCxDQUFpQkMsT0FBRCxJQUFhO0FBQzlDLFdBQU9BLE9BQU8sQ0FBQ0MsS0FBUixLQUFrQixhQUF6QjtBQUNELEdBRmtCLENBQW5CO0FBSUEsUUFBTUMsVUFBVSxHQUFHTCxRQUFRLENBQUNFLE1BQVQsQ0FBaUJDLE9BQUQsSUFBYTtBQUM5QyxXQUFPQSxPQUFPLENBQUNDLEtBQVIsS0FBa0IsYUFBekI7QUFDRCxHQUZrQixDQUFuQjtBQUlBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLEVBTUUsTUFBQyx5REFBRDtBQUFXLFNBQUssTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxFQUFqQjtBQUFxQixNQUFFLEVBQUUsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQ0UsU0FBSyxNQURQO0FBRUUsT0FBRyxFQUFFRSxnRUFBTSxDQUFDTCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNNLEtBQWYsQ0FBTixDQUE0QkMsT0FBNUIsQ0FBb0MsR0FBcEMsRUFBeUNDLEdBQXpDLEVBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERixFQVNFLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxFQUFqQjtBQUFxQixNQUFFLEVBQUUsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlSLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY1MsV0FBbEIsQ0FERixDQURGLENBVEYsQ0FERixFQWdCRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsRUFBakI7QUFBcUIsTUFBRSxFQUFFLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJTCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNLLFdBQWxCLENBREYsQ0FERixDQURGLEVBTUUsTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQXFCLE1BQUUsRUFBRSxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFDRSxTQUFLLE1BRFA7QUFFRSxPQUFHLEVBQUVKLGdFQUFNLENBQUNELFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY0UsS0FBZixDQUFOLENBQTRCQyxPQUE1QixDQUFvQyxHQUFwQyxFQUF5Q0MsR0FBekMsRUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQU5GLENBaEJGLENBTkYsQ0FERjtBQXlDRCxDQXBERCxDLENBc0RBOzs7QUFDQVgsS0FBSyxDQUFDYSxlQUFOLEdBQXdCLGFBQWE7QUFDbkNYLFVBQVEsRUFBRSxNQUFNWSwrQ0FBTSxDQUFDQyxLQUFQLENBQWM7O0dBQWQ7QUFEbUIsQ0FBYixDQUF4Qjs7QUFNZWYsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hYm91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vY2xpZW50XCI7XG5pbXBvcnQgdXJsRm9yIGZyb20gXCIuLi9pbWFnZVVybEJ1aWxkZXJcIjtcblxuaW1wb3J0IHsgUm93LCBDb2wsIENvbnRhaW5lciwgSW1hZ2UgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmNvbnN0IEFib3V0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgc2VjdGlvbnMgPSBbXSB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgc2VjdGlvbk9uZSA9IHNlY3Rpb25zLmZpbHRlcigoc2VjdGlvbikgPT4ge1xuICAgIHJldHVybiBzZWN0aW9uLnRpdGxlID09PSBcIlNlY3Rpb24gT25lXCI7XG4gIH0pO1xuXG4gIGNvbnN0IHNlY3Rpb25Ud28gPSBzZWN0aW9ucy5maWx0ZXIoKHNlY3Rpb24pID0+IHtcbiAgICByZXR1cm4gc2VjdGlvbi50aXRsZSA9PT0gXCJTZWN0aW9uIFR3b1wiO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk9KT1MgfCBBYm91dDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+QWJvdXQ8L2gxPlxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LWltYWdlLW9uZVwiPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKHNlY3Rpb25PbmVbMF0uaW1hZ2UpLnF1YWxpdHkoMTAwKS51cmwoKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXs2fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtcGFyYWdyYXBoXCI+XG4gICAgICAgICAgICAgIDxwPntzZWN0aW9uT25lWzBdLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXBhcmFncmFwaFwiPlxuICAgICAgICAgICAgICA8cD57c2VjdGlvblR3b1swXS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LWltYWdlLXR3b1wiPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKHNlY3Rpb25Ud29bMF0uaW1hZ2UpLnF1YWxpdHkoMTAwKS51cmwoKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gRmV0Y2hpbmcgZGF0YSBmcm9tIFNhbml0eS5pbyB3aXRoIEdST1EgcXVlcnlcbkFib3V0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XG4gIHNlY3Rpb25zOiBhd2FpdCBjbGllbnQuZmV0Y2goYFxuICAqW190eXBlID09IFwiYWJvdXRcIl17ZGVzY3JpcHRpb24sIGltYWdlLCB0aXRsZX1cbiAgYCksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/about.js\n");

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

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIj8zODUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap\n");

/***/ })

/******/ });