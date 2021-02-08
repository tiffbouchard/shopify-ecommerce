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

/***/ "./components/Instagram/Instagram.js":
/*!*******************************************!*\
  !*** ./components/Instagram/Instagram.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace.nosync/ojos/web/components/Instagram/Instagram.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Instagram() {\n  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);\n  const [isLoaded, setIsLoaded] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);\n  const [images, setImages] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {\n    fetch(\"https://www.instagram.com/ssense/?__a=1\").then(res => res.json()).then(result => {\n      setIsLoaded(true);\n      setImages(result.graphql.user.edge_owner_to_timeline_media.edges);\n    }, error => {\n      setIsLoaded(true);\n      setError(error);\n    });\n  }, []);\n\n  if (error) {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 12\n      }\n    }, \"Error: \", error.message);\n  } else if (!isLoaded) {\n    return __jsx(\"div\", {\n      className: \"ig-spinner\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Spinner\"], {\n      animation: \"border\",\n      role: \"status\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }\n    }, __jsx(\"span\", {\n      className: \"sr-only\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 11\n      }\n    }, \"Loading...\")));\n  } else {\n    return __jsx(\"div\", {\n      className: \"instagram-feed\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 7\n      }\n    }, images.slice(0, 6).map(image => __jsx(\"a\", {\n      href: \"http://instagram.com/p/\" + image.node.shortcode,\n      target: \"blank\",\n      key: image.node.shortcode,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }\n    }, __jsx(\"img\", {\n      src: image.node.thumbnail_src,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 13\n      }\n    }))));\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Instagram);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0luc3RhZ3JhbS9JbnN0YWdyYW0uanM/YWViOCJdLCJuYW1lcyI6WyJJbnN0YWdyYW0iLCJlcnJvciIsInNldEVycm9yIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImlzTG9hZGVkIiwic2V0SXNMb2FkZWQiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0IiwiZ3JhcGhxbCIsInVzZXIiLCJlZGdlX293bmVyX3RvX3RpbWVsaW5lX21lZGlhIiwiZWRnZXMiLCJtZXNzYWdlIiwic2xpY2UiLCJtYXAiLCJpbWFnZSIsIm5vZGUiLCJzaG9ydGNvZGUiLCJ0aHVtYm5haWxfc3JjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFDbkIsUUFBTSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsSUFBb0JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBQTFCO0FBQ0EsUUFBTSxDQUFDQyxRQUFELEVBQVdDLFdBQVgsSUFBMEJILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBQWhDO0FBQ0EsUUFBTSxDQUFDRyxNQUFELEVBQVNDLFNBQVQsSUFBc0JMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBQTVCO0FBRUFELDhDQUFLLENBQUNNLFNBQU4sQ0FBZ0IsTUFBTTtBQUNwQkMsU0FBSyxDQUFDLHlDQUFELENBQUwsQ0FDR0MsSUFESCxDQUNTQyxHQUFELElBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQURqQixFQUVHRixJQUZILENBR0tHLE1BQUQsSUFBWTtBQUNWUixpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBRSxlQUFTLENBQUNNLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyxJQUFmLENBQW9CQyw0QkFBcEIsQ0FBaURDLEtBQWxELENBQVQ7QUFDRCxLQU5MLEVBT0tqQixLQUFELElBQVc7QUFDVEssaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDQUosY0FBUSxDQUFDRCxLQUFELENBQVI7QUFDRCxLQVZMO0FBWUQsR0FiRCxFQWFHLEVBYkg7O0FBZUEsTUFBSUEsS0FBSixFQUFXO0FBQ1QsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFhQSxLQUFLLENBQUNrQixPQUFuQixDQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUksQ0FBQ2QsUUFBTCxFQUFlO0FBQ3BCLFdBQ0U7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx1REFBRDtBQUFTLGVBQVMsRUFBQyxRQUFuQjtBQUE0QixVQUFJLEVBQUMsUUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FERixDQURGO0FBT0QsR0FSTSxNQVFBO0FBQ0wsV0FDRTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dFLE1BQU0sQ0FBQ2EsS0FBUCxDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUJDLEdBQW5CLENBQXdCQyxLQUFELElBQ3RCO0FBQ0UsVUFBSSxFQUFFLDRCQUE0QkEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFNBRC9DO0FBRUUsWUFBTSxFQUFDLE9BRlQ7QUFHRSxTQUFHLEVBQUVGLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxTQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0U7QUFBSyxTQUFHLEVBQUVGLEtBQUssQ0FBQ0MsSUFBTixDQUFXRSxhQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEYsQ0FERCxDQURILENBREY7QUFhRDtBQUNGOztBQUVjekIsd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0luc3RhZ3JhbS9JbnN0YWdyYW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcGlubmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5mdW5jdGlvbiBJbnN0YWdyYW0oKSB7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3NzZW5zZS8/X19hPTFcIilcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihcbiAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xuICAgICAgICAgIHNldEltYWdlcyhyZXN1bHQuZ3JhcGhxbC51c2VyLmVkZ2Vfb3duZXJfdG9fdGltZWxpbmVfbWVkaWEuZWRnZXMpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcbiAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH0sIFtdKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xuICB9IGVsc2UgaWYgKCFpc0xvYWRlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlnLXNwaW5uZXJcIj5cbiAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICA8L1NwaW5uZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3RhZ3JhbS1mZWVkXCI+XG4gICAgICAgIHtpbWFnZXMuc2xpY2UoMCwgNikubWFwKChpbWFnZSkgPT4gKFxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtcImh0dHA6Ly9pbnN0YWdyYW0uY29tL3AvXCIgKyBpbWFnZS5ub2RlLnNob3J0Y29kZX1cbiAgICAgICAgICAgIHRhcmdldD1cImJsYW5rXCJcbiAgICAgICAgICAgIGtleT17aW1hZ2Uubm9kZS5zaG9ydGNvZGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlLm5vZGUudGh1bWJuYWlsX3NyY30gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN0YWdyYW07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Instagram/Instagram.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Instagram_Instagram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Instagram/Instagram */ \"./components/Instagram/Instagram.js\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _imageUrlBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imageUrlBuilder */ \"./imageUrlBuilder.js\");\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace.nosync/ojos/web/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // Bootstrap\n\n\n // Sanity.io\n\n\n\n\nconst Home = props => {\n  const {\n    images = []\n  } = props; // Assigns variables to specific images to maintain order (without this images would show up in random orders, and for ex. the index 0 would not necessarily correspond with imageOne - mostly for client so the titles in Sanity studio correspond with the placement of the specific image, maybe find better way to accomplish)\n\n  const imageOne = images.filter(image => {\n    return image.title === \"Image One\";\n  });\n  const imageTwo = images.filter(image => {\n    return image.title === \"Image Two\";\n  });\n  const imageThree = images.filter(image => {\n    return image.title === \"Image Three\";\n  });\n  const imageFour = images.filter(image => {\n    return image.title === \"Image Four\";\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, \"OJOS\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    fluid: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 5,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-one\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    href: imageOne[0].url,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n    fluid: true,\n    src: Object(_imageUrlBuilder__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(imageOne[0].image).quality(100).url(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }\n  })), __jsx(\"a\", {\n    href: imageOne[0].url,\n    className: \"image-description\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 15\n    }\n  }, imageOne[0].description))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 7,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-two\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    href: imageTwo[0].url,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n    fluid: true,\n    src: Object(_imageUrlBuilder__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(imageTwo[0].image).quality(100).url(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 17\n    }\n  })), __jsx(\"a\", {\n    href: imageTwo[0].url,\n    className: \"image-description\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 15\n    }\n  }, imageTwo[0].description)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 6,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-three\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    href: imageThree[0].url,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n    fluid: true,\n    src: Object(_imageUrlBuilder__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(imageThree[0].image).quality(100).url(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 17\n    }\n  })), __jsx(\"a\", {\n    href: imageThree[0].url,\n    className: \"image-description\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 15\n    }\n  }, imageThree[0].description))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 6,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-four\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    href: imageFour[0].url,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n    fluid: true,\n    src: Object(_imageUrlBuilder__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(imageFour[0].image).quality(100).url(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 17\n    }\n  })), __jsx(\"a\", {\n    href: imageFour[0].url,\n    className: \"image-description\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 15\n    }\n  }, imageFour[0].description))))), __jsx(_components_Instagram_Instagram__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }\n  }));\n}; // Fetching data from Sanity.io with GROQ query\n\n\nHome.getInitialProps = async () => ({\n  images: await _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch(`\n  *[_type == \"homepage\"]{url, description, title, image}\n  `)\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImltYWdlcyIsImltYWdlT25lIiwiZmlsdGVyIiwiaW1hZ2UiLCJ0aXRsZSIsImltYWdlVHdvIiwiaW1hZ2VUaHJlZSIsImltYWdlRm91ciIsInVybCIsInVybEZvciIsInF1YWxpdHkiLCJkZXNjcmlwdGlvbiIsImdldEluaXRpYWxQcm9wcyIsImNsaWVudCIsImZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ0E7Q0FHQTs7QUFDQTtBQUNBOztBQUdBLE1BQU1BLElBQUksR0FBSUMsS0FBRCxJQUFXO0FBQ3RCLFFBQU07QUFBRUMsVUFBTSxHQUFHO0FBQVgsTUFBa0JELEtBQXhCLENBRHNCLENBR3RCOztBQUNBLFFBQU1FLFFBQVEsR0FBR0QsTUFBTSxDQUFDRSxNQUFQLENBQWVDLEtBQUQsSUFBVztBQUN4QyxXQUFPQSxLQUFLLENBQUNDLEtBQU4sS0FBZ0IsV0FBdkI7QUFDRCxHQUZnQixDQUFqQjtBQUlBLFFBQU1DLFFBQVEsR0FBR0wsTUFBTSxDQUFDRSxNQUFQLENBQWVDLEtBQUQsSUFBVztBQUN4QyxXQUFPQSxLQUFLLENBQUNDLEtBQU4sS0FBZ0IsV0FBdkI7QUFDRCxHQUZnQixDQUFqQjtBQUlBLFFBQU1FLFVBQVUsR0FBR04sTUFBTSxDQUFDRSxNQUFQLENBQWVDLEtBQUQsSUFBVztBQUMxQyxXQUFPQSxLQUFLLENBQUNDLEtBQU4sS0FBZ0IsYUFBdkI7QUFDRCxHQUZrQixDQUFuQjtBQUlBLFFBQU1HLFNBQVMsR0FBR1AsTUFBTSxDQUFDRSxNQUFQLENBQWVDLEtBQUQsSUFBVztBQUN6QyxXQUFPQSxLQUFLLENBQUNDLEtBQU4sS0FBZ0IsWUFBdkI7QUFDRCxHQUZpQixDQUFsQjtBQUlBLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtB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QyxDQUFELENBQVQsQ0FBYUksV0FEaEIsQ0FQRixDQURGLENBZEYsQ0E3QkYsQ0FMRixFQStERSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvREYsQ0FERjtBQW1FRCxDQXZGRCxDLENBeUZBOzs7QUFDQWIsSUFBSSxDQUFDYyxlQUFMLEdBQXVCLGFBQWE7QUFDbENaLFFBQU0sRUFBRSxNQUFNYSwrQ0FBTSxDQUFDQyxLQUFQLENBQWM7O0dBQWQ7QUFEb0IsQ0FBYixDQUF2Qjs7QUFNZWhCLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbi8vIEJvb3RzdHJhcFxuaW1wb3J0IHsgUm93LCBDb2wsIENvbnRhaW5lciwgSW1hZ2UgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmltcG9ydCBJbnN0YWdyYW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5zdGFncmFtL0luc3RhZ3JhbVwiO1xuLy8gU2FuaXR5LmlvXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9jbGllbnRcIjtcbmltcG9ydCB1cmxGb3IgZnJvbSBcIi4uL2ltYWdlVXJsQnVpbGRlclwiO1xuXG5cbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpbWFnZXMgPSBbXSB9ID0gcHJvcHM7XG5cbiAgLy8gQXNzaWducyB2YXJpYWJsZXMgdG8gc3BlY2lmaWMgaW1hZ2VzIHRvIG1haW50YWluIG9yZGVyICh3aXRob3V0IHRoaXMgaW1hZ2VzIHdvdWxkIHNob3cgdXAgaW4gcmFuZG9tIG9yZGVycywgYW5kIGZvciBleC4gdGhlIGluZGV4IDAgd291bGQgbm90IG5lY2Vzc2FyaWx5IGNvcnJlc3BvbmQgd2l0aCBpbWFnZU9uZSAtIG1vc3RseSBmb3IgY2xpZW50IHNvIHRoZSB0aXRsZXMgaW4gU2FuaXR5IHN0dWRpbyBjb3JyZXNwb25kIHdpdGggdGhlIHBsYWNlbWVudCBvZiB0aGUgc3BlY2lmaWMgaW1hZ2UsIG1heWJlIGZpbmQgYmV0dGVyIHdheSB0byBhY2NvbXBsaXNoKVxuICBjb25zdCBpbWFnZU9uZSA9IGltYWdlcy5maWx0ZXIoKGltYWdlKSA9PiB7XG4gICAgcmV0dXJuIGltYWdlLnRpdGxlID09PSBcIkltYWdlIE9uZVwiO1xuICB9KTtcblxuICBjb25zdCBpbWFnZVR3byA9IGltYWdlcy5maWx0ZXIoKGltYWdlKSA9PiB7XG4gICAgcmV0dXJuIGltYWdlLnRpdGxlID09PSBcIkltYWdlIFR3b1wiO1xuICB9KTtcblxuICBjb25zdCBpbWFnZVRocmVlID0gaW1hZ2VzLmZpbHRlcigoaW1hZ2UpID0+IHtcbiAgICByZXR1cm4gaW1hZ2UudGl0bGUgPT09IFwiSW1hZ2UgVGhyZWVcIjtcbiAgfSk7XG5cbiAgY29uc3QgaW1hZ2VGb3VyID0gaW1hZ2VzLmZpbHRlcigoaW1hZ2UpID0+IHtcbiAgICByZXR1cm4gaW1hZ2UudGl0bGUgPT09IFwiSW1hZ2UgRm91clwiO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk9KT1M8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXs1fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZy1pbWFnZS1vbmVcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj17aW1hZ2VPbmVbMF0udXJsfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihpbWFnZU9uZVswXS5pbWFnZSkucXVhbGl0eSgxMDApLnVybCgpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj17aW1hZ2VPbmVbMF0udXJsfSBjbGFzc05hbWU9XCJpbWFnZS1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIHtpbWFnZU9uZVswXS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezd9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLWltYWdlLXR3b1wiPlxuICAgICAgICAgICAgICA8YSBocmVmPXtpbWFnZVR3b1swXS51cmx9PlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKGltYWdlVHdvWzBdLmltYWdlKS5xdWFsaXR5KDEwMCkudXJsKCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPXtpbWFnZVR3b1swXS51cmx9IGNsYXNzTmFtZT1cImltYWdlLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAge2ltYWdlVHdvWzBdLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLWltYWdlLXRocmVlXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2ltYWdlVGhyZWVbMF0udXJsfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihpbWFnZVRocmVlWzBdLmltYWdlKS5xdWFsaXR5KDEwMCkudXJsKCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPXtpbWFnZVRocmVlWzBdLnVybH0gY2xhc3NOYW1lPVwiaW1hZ2UtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICB7aW1hZ2VUaHJlZVswXS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLWltYWdlLWZvdXJcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj17aW1hZ2VGb3VyWzBdLnVybH0+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IoaW1hZ2VGb3VyWzBdLmltYWdlKS5xdWFsaXR5KDEwMCkudXJsKCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPXtpbWFnZUZvdXJbMF0udXJsfSBjbGFzc05hbWU9XCJpbWFnZS1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIHtpbWFnZUZvdXJbMF0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPEluc3RhZ3JhbSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuLy8gRmV0Y2hpbmcgZGF0YSBmcm9tIFNhbml0eS5pbyB3aXRoIEdST1EgcXVlcnlcbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcbiAgaW1hZ2VzOiBhd2FpdCBjbGllbnQuZmV0Y2goYFxuICAqW190eXBlID09IFwiaG9tZXBhZ2VcIl17dXJsLCBkZXNjcmlwdGlvbiwgdGl0bGUsIGltYWdlfVxuICBgKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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