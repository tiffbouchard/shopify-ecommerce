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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/products/[slug].js");
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

/***/ "./pages/products/[slug].js":
/*!**********************************!*\
  !*** ./pages/products/[slug].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var _imageUrlBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../imageUrlBuilder */ \"./imageUrlBuilder.js\");\n/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Image */ \"react-bootstrap/Image\");\n/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/pages/products/[slug].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // Sanity.io\n\n\n // Bootstrap\n\n\n\nconst ProductDetails = props => {\n  const {\n    title,\n    price,\n    sizes,\n    description,\n    image,\n    imageUrl,\n    quantity\n  } = props;\n  const [size, setSize] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState();\n  const product = {\n    name: {\n      title\n    },\n    price: {\n      price\n    },\n    quantity: {\n      quantity\n    },\n    image: {\n      imageUrl\n    },\n    size: {\n      size\n    }\n  };\n  console.log(product);\n\n  const handleChange = event => {\n    setSize(event.target.value);\n  };\n\n  return __jsx(\"div\", {\n    id: \"product-details-page\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \"OJOS | \", title), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    id: \"product-details-container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    id: \"product-image\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    className: \"products\",\n    fluid: true,\n    src: Object(_imageUrlBuilder__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(image).quality(100).url(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    id: \"product-details\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, title), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, \"$\", price), __jsx(\"select\", {\n    id: \"size-select\",\n    onChange: handleChange,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, __jsx(\"option\", {\n    key: \"null\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, \"Select Size\"), sizes && sizes.map(size => __jsx(\"option\", {\n    value: size,\n    key: size,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 17\n    }\n  }, size))), size === undefined || size === \"Select Size\" ? __jsx(\"button\", {\n    disabled: true,\n    className: \"add-to-cart-btn\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, \"Add to Cart\") : __jsx(\"button\", {\n    className: \"add-to-cart-btn\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }, \"Add to Cart\"), __jsx(\"h4\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }, \"Description\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, description), __jsx(\"h4\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, \"Sizing\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, \"Complimentary ground shipping on all domestic orders. Returns accepted within 7 days of delivery on full price items. All sale items and masks are final sale. International shipping available to select countries.\"), __jsx(\"h4\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, \"Shipping\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }, \"Complimentary ground shipping on all domestic orders. Returns accepted within 7 days of delivery on full price items. All sale items and masks are final sale. International shipping available to select countries.\"))));\n}; // Fetching data from Sanity.io with GROQ query\n\n\nProductDetails.getInitialProps = async function (context) {\n  const {\n    slug = \" \"\n  } = context.query;\n  return await _client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fetch(`\n    *[_type == \"product\" && slug.current == $slug][0]{title, price, sizes, description, image, slug, \"imageUrl\": image.asset->url, quantity}\n  `, {\n    slug\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0cy9bc2x1Z10uanM/Yjk0ZiJdLCJuYW1lcyI6WyJQcm9kdWN0RGV0YWlscyIsInByb3BzIiwidGl0bGUiLCJwcmljZSIsInNpemVzIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImltYWdlVXJsIiwicXVhbnRpdHkiLCJzaXplIiwic2V0U2l6ZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJwcm9kdWN0IiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidXJsRm9yIiwicXVhbGl0eSIsInVybCIsIm1hcCIsInVuZGVmaW5lZCIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJzbHVnIiwicXVlcnkiLCJjbGllbnQiLCJmZXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ0E7Q0FHQTs7QUFDQTs7QUFFQSxNQUFNQSxjQUFjLEdBQUlDLEtBQUQsSUFBVztBQUNoQyxRQUFNO0FBQUVDLFNBQUY7QUFBU0MsU0FBVDtBQUFnQkMsU0FBaEI7QUFBdUJDLGVBQXZCO0FBQW9DQyxTQUFwQztBQUEyQ0MsWUFBM0M7QUFBcURDO0FBQXJELE1BQWtFUCxLQUF4RTtBQUNBLFFBQU0sQ0FBQ1EsSUFBRCxFQUFPQyxPQUFQLElBQWtCQyw0Q0FBSyxDQUFDQyxRQUFOLEVBQXhCO0FBRUEsUUFBTUMsT0FBTyxHQUFHO0FBQ2RDLFFBQUksRUFBRTtBQUFFWjtBQUFGLEtBRFE7QUFFZEMsU0FBSyxFQUFFO0FBQUVBO0FBQUYsS0FGTztBQUdkSyxZQUFRLEVBQUU7QUFBRUE7QUFBRixLQUhJO0FBSWRGLFNBQUssRUFBRTtBQUFFQztBQUFGLEtBSk87QUFLZEUsUUFBSSxFQUFFO0FBQUVBO0FBQUY7QUFMUSxHQUFoQjtBQVFBTSxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBWjs7QUFFQSxRQUFNSSxZQUFZLEdBQUlDLEtBQUQsSUFBVztBQUM5QlIsV0FBTyxDQUFDUSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxTQUNFO0FBQUssTUFBRSxFQUFDLHNCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFlbEIsS0FBZixDQURGLEVBRUU7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRTtBQUFLLE1BQUUsRUFBQywyQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxNQUFFLEVBQUMsZUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUNFLGFBQVMsRUFBQyxVQURaO0FBRUUsU0FBSyxNQUZQO0FBR0UsT0FBRyxFQUFFbUIsZ0VBQU0sQ0FBQ2YsS0FBRCxDQUFOLENBQWNnQixPQUFkLENBQXNCLEdBQXRCLEVBQTJCQyxHQUEzQixFQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBUUU7QUFBSyxNQUFFLEVBQUMsaUJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS3JCLEtBQUwsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBS0MsS0FBTCxDQUZGLEVBR0U7QUFBUSxNQUFFLEVBQUMsYUFBWDtBQUF5QixZQUFRLEVBQUVjLFlBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLE9BQUcsRUFBQyxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFR2IsS0FBSyxJQUNKQSxLQUFLLENBQUNvQixHQUFOLENBQVdmLElBQUQsSUFDUjtBQUFRLFNBQUssRUFBRUEsSUFBZjtBQUFxQixPQUFHLEVBQUVBLElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsSUFESCxDQURGLENBSEosQ0FIRixFQVlHQSxJQUFJLEtBQUtnQixTQUFULElBQXNCaEIsSUFBSSxLQUFLLGFBQS9CLEdBQ0M7QUFBUSxZQUFRLE1BQWhCO0FBQWlCLGFBQVMsRUFBQyxpQkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxHQUtDO0FBQVEsYUFBUyxFQUFDLGlCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpCSixFQW1CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5CRixFQW9CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlKLFdBQUosQ0FwQkYsRUFxQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCRixFQXNCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDROQXRCRixFQTRCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTVCRixFQTZCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDROQTdCRixDQVJGLENBTEYsQ0FERjtBQXFERCxDQXZFRCxDLENBeUVBOzs7QUFDQUwsY0FBYyxDQUFDMEIsZUFBZixHQUFpQyxnQkFBZ0JDLE9BQWhCLEVBQXlCO0FBQ3hELFFBQU07QUFBRUMsUUFBSSxHQUFHO0FBQVQsTUFBaUJELE9BQU8sQ0FBQ0UsS0FBL0I7QUFDQSxTQUFPLE1BQU1DLCtDQUFNLENBQUNDLEtBQVAsQ0FDVjs7R0FEVSxFQUlYO0FBQUVIO0FBQUYsR0FKVyxDQUFiO0FBTUQsQ0FSRDs7QUFVZTVCLDZFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZHVjdHMvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG4vLyBTYW5pdHkuaW9cbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uLy4uL2NsaWVudFwiO1xuaW1wb3J0IHVybEZvciBmcm9tIFwiLi4vLi4vaW1hZ2VVcmxCdWlsZGVyXCI7XG5cbi8vIEJvb3RzdHJhcFxuaW1wb3J0IEltYWdlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSW1hZ2VcIjtcblxuY29uc3QgUHJvZHVjdERldGFpbHMgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0aXRsZSwgcHJpY2UsIHNpemVzLCBkZXNjcmlwdGlvbiwgaW1hZ2UsIGltYWdlVXJsLCBxdWFudGl0eSB9ID0gcHJvcHM7XG4gIGNvbnN0IFtzaXplLCBzZXRTaXplXSA9IFJlYWN0LnVzZVN0YXRlKCk7XG5cbiAgY29uc3QgcHJvZHVjdCA9IHtcbiAgICBuYW1lOiB7IHRpdGxlIH0sXG4gICAgcHJpY2U6IHsgcHJpY2UgfSxcbiAgICBxdWFudGl0eTogeyBxdWFudGl0eSB9LFxuICAgIGltYWdlOiB7IGltYWdlVXJsIH0sXG4gICAgc2l6ZTogeyBzaXplIH0sXG4gIH07XG5cbiAgY29uc29sZS5sb2cocHJvZHVjdCk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0U2l6ZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cInByb2R1Y3QtZGV0YWlscy1wYWdlXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk9KT1MgfCB7dGl0bGV9PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBpZD1cInByb2R1Y3QtZGV0YWlscy1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBpZD1cInByb2R1Y3QtaW1hZ2VcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3RzXCJcbiAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICBzcmM9e3VybEZvcihpbWFnZSkucXVhbGl0eSgxMDApLnVybCgpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwicHJvZHVjdC1kZXRhaWxzXCI+XG4gICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgIDxwPiR7cHJpY2V9PC9wPlxuICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzaXplLXNlbGVjdFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9XCJudWxsXCI+U2VsZWN0IFNpemU8L29wdGlvbj5cbiAgICAgICAgICAgIHtzaXplcyAmJlxuICAgICAgICAgICAgICBzaXplcy5tYXAoKHNpemUpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtzaXplfSBrZXk9e3NpemV9PlxuICAgICAgICAgICAgICAgICAge3NpemV9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIHtzaXplID09PSB1bmRlZmluZWQgfHwgc2l6ZSA9PT0gXCJTZWxlY3QgU2l6ZVwiID8gKFxuICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZCBjbGFzc05hbWU9XCJhZGQtdG8tY2FydC1idG5cIj5cbiAgICAgICAgICAgICAgQWRkIHRvIENhcnRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFkZC10by1jYXJ0LWJ0blwiPkFkZCB0byBDYXJ0PC9idXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8aDQ+RGVzY3JpcHRpb248L2g0PlxuICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPGg0PlNpemluZzwvaDQ+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBDb21wbGltZW50YXJ5IGdyb3VuZCBzaGlwcGluZyBvbiBhbGwgZG9tZXN0aWMgb3JkZXJzLiBSZXR1cm5zXG4gICAgICAgICAgICBhY2NlcHRlZCB3aXRoaW4gNyBkYXlzIG9mIGRlbGl2ZXJ5IG9uIGZ1bGwgcHJpY2UgaXRlbXMuIEFsbCBzYWxlXG4gICAgICAgICAgICBpdGVtcyBhbmQgbWFza3MgYXJlIGZpbmFsIHNhbGUuIEludGVybmF0aW9uYWwgc2hpcHBpbmcgYXZhaWxhYmxlIHRvXG4gICAgICAgICAgICBzZWxlY3QgY291bnRyaWVzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDQ+U2hpcHBpbmc8L2g0PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQ29tcGxpbWVudGFyeSBncm91bmQgc2hpcHBpbmcgb24gYWxsIGRvbWVzdGljIG9yZGVycy4gUmV0dXJuc1xuICAgICAgICAgICAgYWNjZXB0ZWQgd2l0aGluIDcgZGF5cyBvZiBkZWxpdmVyeSBvbiBmdWxsIHByaWNlIGl0ZW1zLiBBbGwgc2FsZVxuICAgICAgICAgICAgaXRlbXMgYW5kIG1hc2tzIGFyZSBmaW5hbCBzYWxlLiBJbnRlcm5hdGlvbmFsIHNoaXBwaW5nIGF2YWlsYWJsZSB0b1xuICAgICAgICAgICAgc2VsZWN0IGNvdW50cmllcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyBGZXRjaGluZyBkYXRhIGZyb20gU2FuaXR5LmlvIHdpdGggR1JPUSBxdWVyeVxuUHJvZHVjdERldGFpbHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgY29uc3QgeyBzbHVnID0gXCIgXCIgfSA9IGNvbnRleHQucXVlcnk7XG4gIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2goXG4gICAgYFxuICAgICpbX3R5cGUgPT0gXCJwcm9kdWN0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXt0aXRsZSwgcHJpY2UsIHNpemVzLCBkZXNjcmlwdGlvbiwgaW1hZ2UsIHNsdWcsIFwiaW1hZ2VVcmxcIjogaW1hZ2UuYXNzZXQtPnVybCwgcXVhbnRpdHl9XG4gIGAsXG4gICAgeyBzbHVnIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWxzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/[slug].js\n");

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

/***/ })

/******/ });