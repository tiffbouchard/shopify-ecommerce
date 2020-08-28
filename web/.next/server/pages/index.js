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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
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

/***/ "./components/instagram.js":
/*!*********************************!*\
  !*** ./components/instagram.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/components/instagram.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Instagram() {\n  const {\n    0: error,\n    1: setError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const {\n    0: isLoaded,\n    1: setIsLoaded\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: images,\n    1: setImages\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    fetch(\"https://www.instagram.com/unikaswim/?__a=1\").then(res => res.json()).then(result => {\n      setIsLoaded(true);\n      setImages(result.graphql.user.edge_owner_to_timeline_media.edges);\n    }, error => {\n      setIsLoaded(true);\n      setError(error);\n    });\n  }, []);\n\n  if (error) {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 12\n      }\n    }, \"Error: \", error.message);\n  } else if (!isLoaded) {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 12\n      }\n    }, \"Loading...\");\n  } else {\n    return __jsx(\"div\", {\n      className: \"instagram-feed\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 7\n      }\n    }, images.slice(0, 6).map(image => __jsx(\"a\", {\n      href: \"http://instagram.com/p/\" + image.node.shortcode,\n      target: \"blank\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }\n    }, __jsx(\"img\", {\n      src: image.node.thumbnail_src,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 13\n      }\n    }))));\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Instagram);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luc3RhZ3JhbS5qcz83NDQ2Il0sIm5hbWVzIjpbIkluc3RhZ3JhbSIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VTdGF0ZSIsImlzTG9hZGVkIiwic2V0SXNMb2FkZWQiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0IiwiZ3JhcGhxbCIsInVzZXIiLCJlZGdlX293bmVyX3RvX3RpbWVsaW5lX21lZGlhIiwiZWRnZXMiLCJtZXNzYWdlIiwic2xpY2UiLCJtYXAiLCJpbWFnZSIsIm5vZGUiLCJzaG9ydGNvZGUiLCJ0aHVtYm5haWxfc3JjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxTQUFULEdBQXFCO0FBQ25CLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxJQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCRixzREFBUSxDQUFDLEtBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JKLHNEQUFRLENBQUMsRUFBRCxDQUFwQztBQUVBSyx5REFBUyxDQUFDLE1BQU07QUFDZEMsU0FBSyxDQUFDLDRDQUFELENBQUwsQ0FDR0MsSUFESCxDQUNTQyxHQUFELElBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQURqQixFQUVHRixJQUZILENBR0tHLE1BQUQsSUFBWTtBQUNWUixpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBRSxlQUFTLENBQUNNLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyxJQUFmLENBQW9CQyw0QkFBcEIsQ0FBaURDLEtBQWxELENBQVQ7QUFDRCxLQU5MLEVBT0toQixLQUFELElBQVc7QUFDVEksaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDQUgsY0FBUSxDQUFDRCxLQUFELENBQVI7QUFDRCxLQVZMO0FBWUQsR0FiUSxFQWFOLEVBYk0sQ0FBVDs7QUFlQSxNQUFJQSxLQUFKLEVBQVc7QUFDVCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWFBLEtBQUssQ0FBQ2lCLE9BQW5CLENBQVA7QUFDRCxHQUZELE1BRU8sSUFBSSxDQUFDZCxRQUFMLEVBQWU7QUFDcEIsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFQO0FBQ0QsR0FGTSxNQUVBO0FBQ0wsV0FDRTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dFLE1BQU0sQ0FBQ2EsS0FBUCxDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUJDLEdBQW5CLENBQXdCQyxLQUFELElBQ3RCO0FBQ0UsVUFBSSxFQUFFLDRCQUE0QkEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFNBRC9DO0FBRUUsWUFBTSxFQUFDLE9BRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlFO0FBQUssU0FBRyxFQUFFRixLQUFLLENBQUNDLElBQU4sQ0FBV0UsYUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpGLENBREQsQ0FESCxDQURGO0FBWUQ7QUFDRjs7QUFFY3hCLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9pbnN0YWdyYW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIEluc3RhZ3JhbSgpIHtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdW5pa2Fzd2ltLz9fX2E9MVwiKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKFxuICAgICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XG4gICAgICAgICAgc2V0SW1hZ2VzKHJlc3VsdC5ncmFwaHFsLnVzZXIuZWRnZV9vd25lcl90b190aW1lbGluZV9tZWRpYS5lZGdlcyk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xuICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfSwgW10pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XG4gIH0gZWxzZSBpZiAoIWlzTG9hZGVkKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0YWdyYW0tZmVlZFwiPlxuICAgICAgICB7aW1hZ2VzLnNsaWNlKDAsIDYpLm1hcCgoaW1hZ2UpID0+IChcbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17XCJodHRwOi8vaW5zdGFncmFtLmNvbS9wL1wiICsgaW1hZ2Uubm9kZS5zaG9ydGNvZGV9XG4gICAgICAgICAgICB0YXJnZXQ9XCJibGFua1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlLm5vZGUudGh1bWJuYWlsX3NyY30gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YWdyYW07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/instagram.js\n");

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _imageUrlBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imageUrlBuilder */ \"./imageUrlBuilder.js\");\n/* harmony import */ var _components_instagram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/instagram */ \"./components/instagram.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Container */ \"react-bootstrap/Container\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Image */ \"react-bootstrap/Image\");\n/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // Sanity.io\n\n\n // Custom components\n\n // Bootstrap\n\n\n\n\n\nconst Home = props => {\n  const {\n    images = []\n  } = props; // Assigns variables to specific images to maintain order (without this images would show up in random orders, and for ex. the index 0 would not necessarily correspond with imageOne - mostly for client so the titles in Sanity studio correspond with the placement of the specific image)\n\n  const imageOne = images.filter(image => {\n    return image.title === \"Image One\";\n  });\n  const imageTwo = images.filter(image => {\n    return image.title === \"Image Two\";\n  });\n  const imageThree = images.filter(image => {\n    return image.title === \"Image Three\";\n  });\n  const imageFour = images.filter(image => {\n    return image.title === \"Image Four\";\n  }); // Show sub modal when page first loads..need to work on\n  // const [modalShow, setModalShow] = React.useState(false);\n  // useEffect(() => {\n  //   setModalShow(true);\n  // }, []);\n\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, \"OJOS\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  })), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    fluid: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Row\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 5,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: imageOne[0].url,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-one\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    fluid: true,\n    src: Object(_imageUrlBuilder__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(imageOne[0].image).quality(100).url(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  }), __jsx(\"a\", {\n    href: imageOne[0].url,\n    className: \"image-description\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 17\n    }\n  }, imageOne[0].description)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 7,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: imageTwo[0].url,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-two\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    fluid: true,\n    src: Object(_imageUrlBuilder__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(imageTwo[0].image).quality(100).url(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 17\n    }\n  }), __jsx(\"a\", {\n    href: imageTwo[0].url,\n    className: \"image-description\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 17\n    }\n  }, imageTwo[0].description))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Row\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 6,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: imageThree[0].url,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-three\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    fluid: true,\n    src: Object(_imageUrlBuilder__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(imageThree[0].image).quality(100).url(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 17\n    }\n  }), __jsx(\"a\", {\n    href: imageThree[0].url,\n    className: \"image-description\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 17\n    }\n  }, imageThree[0].description)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 6,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: imageFour[0].url,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-four\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    fluid: true,\n    src: Object(_imageUrlBuilder__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(imageFour[0].image).quality(100).url(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 17\n    }\n  }), __jsx(\"a\", {\n    href: imageFour[0].url,\n    className: \"image-description\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 17\n    }\n  }, imageFour[0].description)))))), __jsx(\"h4\", {\n    className: \"follow-header\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }\n  }, \"FOLLOW OJOS ON INSTAGRAM\"), __jsx(_components_instagram__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }\n  }));\n}; // Fetching data from Sanity.io with GROQ query\n\n\nHome.getInitialProps = async () => ({\n  images: await _client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fetch(`\n  *[_type == \"homepage\"]{url, description, title, image}\n  `)\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImltYWdlcyIsImltYWdlT25lIiwiZmlsdGVyIiwiaW1hZ2UiLCJ0aXRsZSIsImltYWdlVHdvIiwiaW1hZ2VUaHJlZSIsImltYWdlRm91ciIsInVybCIsInVybEZvciIsInF1YWxpdHkiLCJkZXNjcmlwdGlvbiIsImdldEluaXRpYWxQcm9wcyIsImNsaWVudCIsImZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0E7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFJQyxLQUFELElBQVc7QUFDdEIsUUFBTTtBQUFFQyxVQUFNLEdBQUc7QUFBWCxNQUFrQkQsS0FBeEIsQ0FEc0IsQ0FHdEI7O0FBQ0EsUUFBTUUsUUFBUSxHQUFHRCxNQUFNLENBQUNFLE1BQVAsQ0FBZUMsS0FBRCxJQUFXO0FBQ3hDLFdBQU9BLEtBQUssQ0FBQ0MsS0FBTixLQUFnQixXQUF2QjtBQUNELEdBRmdCLENBQWpCO0FBSUEsUUFBTUMsUUFBUSxHQUFHTCxNQUFNLENBQUNFLE1BQVAsQ0FBZUMsS0FBRCxJQUFXO0FBQ3hDLFdBQU9BLEtBQUssQ0FBQ0MsS0FBTixLQUFnQixXQUF2QjtBQUNELEdBRmdCLENBQWpCO0FBSUEsUUFBTUUsVUFBVSxHQUFHTixNQUFNLENBQUNFLE1BQVAsQ0FBZUMsS0FBRCxJQUFXO0FBQzFDLFdBQU9BLEtBQUssQ0FBQ0MsS0FBTixLQUFnQixhQUF2QjtBQUNELEdBRmtCLENBQW5CO0FBSUEsUUFBTUcsU0FBUyxHQUFHUCxNQUFNLENBQUNFLE1BQVAsQ0FBZUMsS0FBRCxJQUFXO0FBQ3pDLFdBQU9BLEtBQUssQ0FBQ0MsS0FBTixLQUFnQixZQUF2QjtBQUNELEdBRmlCLENBQWxCLENBaEJzQixDQW9CdEI7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUNFO0FBQUE7QUFB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Q0FBYUMsR0FBdEI7QUFBMkIsYUFBUyxFQUFDLG1CQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUksV0FEaEIsQ0FMRixDQURGLENBREYsQ0FkRixDQTdCRixDQUxGLEVBK0RFO0FBQUksYUFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0EvREYsRUFnRUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEVGLENBREY7QUFvRUQsQ0EvRkQsQyxDQWlHQTs7O0FBQ0FiLElBQUksQ0FBQ2MsZUFBTCxHQUF1QixhQUFhO0FBQ2xDWixRQUFNLEVBQUUsTUFBTWEsK0NBQU0sQ0FBQ0MsS0FBUCxDQUFjOztHQUFkO0FBRG9CLENBQWIsQ0FBdkI7O0FBTWVoQixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBTYW5pdHkuaW9cbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uL2NsaWVudFwiO1xuaW1wb3J0IHVybEZvciBmcm9tIFwiLi4vaW1hZ2VVcmxCdWlsZGVyXCI7XG5cbi8vIEN1c3RvbSBjb21wb25lbnRzXG5pbXBvcnQgSW5zdGFncmFtIGZyb20gXCIuLi9jb21wb25lbnRzL2luc3RhZ3JhbVwiO1xuXG4vLyBCb290c3RyYXBcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0ltYWdlXCI7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuY29uc3QgSG9tZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGltYWdlcyA9IFtdIH0gPSBwcm9wcztcblxuICAvLyBBc3NpZ25zIHZhcmlhYmxlcyB0byBzcGVjaWZpYyBpbWFnZXMgdG8gbWFpbnRhaW4gb3JkZXIgKHdpdGhvdXQgdGhpcyBpbWFnZXMgd291bGQgc2hvdyB1cCBpbiByYW5kb20gb3JkZXJzLCBhbmQgZm9yIGV4LiB0aGUgaW5kZXggMCB3b3VsZCBub3QgbmVjZXNzYXJpbHkgY29ycmVzcG9uZCB3aXRoIGltYWdlT25lIC0gbW9zdGx5IGZvciBjbGllbnQgc28gdGhlIHRpdGxlcyBpbiBTYW5pdHkgc3R1ZGlvIGNvcnJlc3BvbmQgd2l0aCB0aGUgcGxhY2VtZW50IG9mIHRoZSBzcGVjaWZpYyBpbWFnZSlcbiAgY29uc3QgaW1hZ2VPbmUgPSBpbWFnZXMuZmlsdGVyKChpbWFnZSkgPT4ge1xuICAgIHJldHVybiBpbWFnZS50aXRsZSA9PT0gXCJJbWFnZSBPbmVcIjtcbiAgfSk7XG5cbiAgY29uc3QgaW1hZ2VUd28gPSBpbWFnZXMuZmlsdGVyKChpbWFnZSkgPT4ge1xuICAgIHJldHVybiBpbWFnZS50aXRsZSA9PT0gXCJJbWFnZSBUd29cIjtcbiAgfSk7XG5cbiAgY29uc3QgaW1hZ2VUaHJlZSA9IGltYWdlcy5maWx0ZXIoKGltYWdlKSA9PiB7XG4gICAgcmV0dXJuIGltYWdlLnRpdGxlID09PSBcIkltYWdlIFRocmVlXCI7XG4gIH0pO1xuXG4gIGNvbnN0IGltYWdlRm91ciA9IGltYWdlcy5maWx0ZXIoKGltYWdlKSA9PiB7XG4gICAgcmV0dXJuIGltYWdlLnRpdGxlID09PSBcIkltYWdlIEZvdXJcIjtcbiAgfSk7XG5cbiAgLy8gU2hvdyBzdWIgbW9kYWwgd2hlbiBwYWdlIGZpcnN0IGxvYWRzLi5uZWVkIHRvIHdvcmsgb25cbiAgLy8gY29uc3QgW21vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHNldE1vZGFsU2hvdyh0cnVlKTtcbiAgLy8gfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+T0pPUzwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb250YWluZXIgZmx1aWQ+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezV9PlxuICAgICAgICAgICAgPGEgaHJlZj17aW1hZ2VPbmVbMF0udXJsfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLWltYWdlLW9uZVwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKGltYWdlT25lWzBdLmltYWdlKS5xdWFsaXR5KDEwMCkudXJsKCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtpbWFnZU9uZVswXS51cmx9IGNsYXNzTmFtZT1cImltYWdlLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICB7aW1hZ2VPbmVbMF0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17N30+XG4gICAgICAgICAgICA8YSBocmVmPXtpbWFnZVR3b1swXS51cmx9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmRpbmctaW1hZ2UtdHdvXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IoaW1hZ2VUd29bMF0uaW1hZ2UpLnF1YWxpdHkoMTAwKS51cmwoKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2ltYWdlVHdvWzBdLnVybH0gY2xhc3NOYW1lPVwiaW1hZ2UtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgIHtpbWFnZVR3b1swXS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICA8YSBocmVmPXtpbWFnZVRocmVlWzBdLnVybH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZy1pbWFnZS10aHJlZVwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKGltYWdlVGhyZWVbMF0uaW1hZ2UpLnF1YWxpdHkoMTAwKS51cmwoKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2ltYWdlVGhyZWVbMF0udXJsfSBjbGFzc05hbWU9XCJpbWFnZS1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAge2ltYWdlVGhyZWVbMF0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICA8YSBocmVmPXtpbWFnZUZvdXJbMF0udXJsfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLWltYWdlLWZvdXJcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihpbWFnZUZvdXJbMF0uaW1hZ2UpLnF1YWxpdHkoMTAwKS51cmwoKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2ltYWdlRm91clswXS51cmx9IGNsYXNzTmFtZT1cImltYWdlLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICB7aW1hZ2VGb3VyWzBdLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8aDQgY2xhc3NOYW1lPVwiZm9sbG93LWhlYWRlclwiPkZPTExPVyBPSk9TIE9OIElOU1RBR1JBTTwvaDQ+XG4gICAgICA8SW5zdGFncmFtIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyBGZXRjaGluZyBkYXRhIGZyb20gU2FuaXR5LmlvIHdpdGggR1JPUSBxdWVyeVxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xuICBpbWFnZXM6IGF3YWl0IGNsaWVudC5mZXRjaChgXG4gICpbX3R5cGUgPT0gXCJob21lcGFnZVwiXXt1cmwsIGRlc2NyaXB0aW9uLCB0aXRsZSwgaW1hZ2V9XG4gIGApLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ })

/******/ });