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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/contact.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/contact_form.js":
/*!************************************!*\
  !*** ./components/contact_form.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emailjs-com */ \"emailjs-com\");\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/components/contact_form.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst SERVICE_ID = process.env.SERVICE_ID;\nconst TEMPLATE_ID = process.env.TEMPLATE_ID;\nconst USER_ID = process.env.USER_ID;\n\nclass Form extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      name: \"\",\n      email: \"\",\n      message: \"\"\n    });\n\n    _defineProperty(this, \"handleSubmit\", e => {\n      e.preventDefault();\n      let templateParams = {\n        from_name: this.state.email,\n        to_name: \"OJOS\",\n        message_html: this.state.message,\n        reply_to: this.state.email\n      };\n      emailjs_com__WEBPACK_IMPORTED_MODULE_1___default.a.send(\"gmail\", {\n        TEMPLATE_ID\n      }, templateParams, {\n        USER_ID\n      }).then(this.resetForm());\n    });\n\n    _defineProperty(this, \"handleChange\", e => {\n      this.setState({\n        [e.target.name]: e.target.value\n      });\n    });\n  }\n\n  resetForm() {\n    this.setState({\n      name: \"\",\n      email: \"\",\n      message: \"\"\n    });\n  }\n\n  render() {\n    return __jsx(\"section\", {\n      className: \"sub-section\",\n      id: \"contact\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }\n    }, __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }\n    }, __jsx(\"form\", {\n      className: \"contact-form\",\n      onSubmit: this.handleSubmit,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 11\n      }\n    }, __jsx(\"input\", {\n      type: \"text\",\n      name: \"name\",\n      value: this.state.name,\n      onChange: this.handleChange,\n      placeholder: \"Name\",\n      className: \"contact-form-input\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }\n    }), __jsx(\"input\", {\n      required: true,\n      type: \"email\",\n      name: \"email\",\n      value: this.state.email,\n      onChange: this.handleChange,\n      placeholder: \"Email\",\n      className: \"contact-form-input\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 13\n      }\n    }), __jsx(\"textarea\", {\n      required: true,\n      rows: \"10\",\n      name: \"message\",\n      value: this.state.message,\n      onChange: this.handleChange,\n      placeholder: \"Message\",\n      className: \"contact-form-input\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 13\n      }\n    }), __jsx(\"button\", {\n      type: \"submit\",\n      className: \"contact-form-input-button\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 13\n      }\n    }, \"Send\"))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhY3RfZm9ybS5qcz82ODFkIl0sIm5hbWVzIjpbIlNFUlZJQ0VfSUQiLCJwcm9jZXNzIiwiZW52IiwiVEVNUExBVEVfSUQiLCJVU0VSX0lEIiwiRm9ybSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibmFtZSIsImVtYWlsIiwibWVzc2FnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRlbXBsYXRlUGFyYW1zIiwiZnJvbV9uYW1lIiwic3RhdGUiLCJ0b19uYW1lIiwibWVzc2FnZV9odG1sIiwicmVwbHlfdG8iLCJlbWFpbGpzIiwic2VuZCIsInRoZW4iLCJyZXNldEZvcm0iLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicmVuZGVyIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsVUFBVSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsVUFBL0I7QUFDQSxNQUFNRyxXQUFXLEdBQUdGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxXQUFoQztBQUNBLE1BQU1DLE9BQU8sR0FBR0gsT0FBTyxDQUFDQyxHQUFSLENBQVlFLE9BQTVCOztBQUVBLE1BQU1DLElBQU4sU0FBbUJDLDRDQUFLLENBQUNDLFNBQXpCLENBQW1DO0FBQUE7QUFBQTs7QUFBQSxtQ0FDekI7QUFDTkMsVUFBSSxFQUFFLEVBREE7QUFFTkMsV0FBSyxFQUFFLEVBRkQ7QUFHTkMsYUFBTyxFQUFFO0FBSEgsS0FEeUI7O0FBQUEsMENBT2pCQyxDQUFELElBQU87QUFDcEJBLE9BQUMsQ0FBQ0MsY0FBRjtBQUVBLFVBQUlDLGNBQWMsR0FBRztBQUNuQkMsaUJBQVMsRUFBRSxLQUFLQyxLQUFMLENBQVdOLEtBREg7QUFFbkJPLGVBQU8sRUFBRSxNQUZVO0FBR25CQyxvQkFBWSxFQUFFLEtBQUtGLEtBQUwsQ0FBV0wsT0FITjtBQUluQlEsZ0JBQVEsRUFBRSxLQUFLSCxLQUFMLENBQVdOO0FBSkYsT0FBckI7QUFPQVUsd0RBQU8sQ0FDSkMsSUFESCxDQUNRLE9BRFIsRUFDaUI7QUFBRWpCO0FBQUYsT0FEakIsRUFDa0NVLGNBRGxDLEVBQ2tEO0FBQUVUO0FBQUYsT0FEbEQsRUFFR2lCLElBRkgsQ0FFUSxLQUFLQyxTQUFMLEVBRlI7QUFHRCxLQXBCZ0M7O0FBQUEsMENBOEJqQlgsQ0FBRCxJQUFPO0FBQ3BCLFdBQUtZLFFBQUwsQ0FBYztBQUFFLFNBQUNaLENBQUMsQ0FBQ2EsTUFBRixDQUFTaEIsSUFBVixHQUFpQkcsQ0FBQyxDQUFDYSxNQUFGLENBQVNDO0FBQTVCLE9BQWQ7QUFDRCxLQWhDZ0M7QUFBQTs7QUFzQmpDSCxXQUFTLEdBQUc7QUFDVixTQUFLQyxRQUFMLENBQWM7QUFDWmYsVUFBSSxFQUFFLEVBRE07QUFFWkMsV0FBSyxFQUFFLEVBRks7QUFHWkMsYUFBTyxFQUFFO0FBSEcsS0FBZDtBQUtEOztBQU1EZ0IsUUFBTSxHQUFHO0FBQ1AsV0FDRTtBQUFTLGVBQVMsRUFBQyxhQUFuQjtBQUFpQyxRQUFFLEVBQUMsU0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxjQUFoQjtBQUErQixjQUFRLEVBQUUsS0FBS0MsWUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLE1BRFA7QUFFRSxVQUFJLEVBQUMsTUFGUDtBQUdFLFdBQUssRUFBRSxLQUFLWixLQUFMLENBQVdQLElBSHBCO0FBSUUsY0FBUSxFQUFFLEtBQUtvQixZQUpqQjtBQUtFLGlCQUFXLEVBQUMsTUFMZDtBQU1FLGVBQVMsRUFBQyxvQkFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFTRTtBQUNFLGNBQVEsTUFEVjtBQUVFLFVBQUksRUFBQyxPQUZQO0FBR0UsVUFBSSxFQUFDLE9BSFA7QUFJRSxXQUFLLEVBQUUsS0FBS2IsS0FBTCxDQUFXTixLQUpwQjtBQUtFLGNBQVEsRUFBRSxLQUFLbUIsWUFMakI7QUFNRSxpQkFBVyxFQUFDLE9BTmQ7QUFPRSxlQUFTLEVBQUMsb0JBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVRGLEVBa0JFO0FBQ0UsY0FBUSxNQURWO0FBRUUsVUFBSSxFQUFDLElBRlA7QUFHRSxVQUFJLEVBQUMsU0FIUDtBQUlFLFdBQUssRUFBRSxLQUFLYixLQUFMLENBQVdMLE9BSnBCO0FBS0UsY0FBUSxFQUFFLEtBQUtrQixZQUxqQjtBQU1FLGlCQUFXLEVBQUMsU0FOZDtBQU9FLGVBQVMsRUFBQyxvQkFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BbEJGLEVBMkJFO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBUyxFQUFDLDJCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0JGLENBREYsQ0FERixDQURGO0FBcUNEOztBQXhFZ0M7O0FBMkVwQnZCLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb250YWN0X2Zvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZW1haWxqcyBmcm9tIFwiZW1haWxqcy1jb21cIjtcblxuY29uc3QgU0VSVklDRV9JRCA9IHByb2Nlc3MuZW52LlNFUlZJQ0VfSUQ7XG5jb25zdCBURU1QTEFURV9JRCA9IHByb2Nlc3MuZW52LlRFTVBMQVRFX0lEO1xuY29uc3QgVVNFUl9JRCA9IHByb2Nlc3MuZW52LlVTRVJfSUQ7XG5cbmNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIGVtYWlsOiBcIlwiLFxuICAgIG1lc3NhZ2U6IFwiXCIsXG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgdGVtcGxhdGVQYXJhbXMgPSB7XG4gICAgICBmcm9tX25hbWU6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICB0b19uYW1lOiBcIk9KT1NcIixcbiAgICAgIG1lc3NhZ2VfaHRtbDogdGhpcy5zdGF0ZS5tZXNzYWdlLFxuICAgICAgcmVwbHlfdG86IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgfTtcblxuICAgIGVtYWlsanNcbiAgICAgIC5zZW5kKFwiZ21haWxcIiwgeyBURU1QTEFURV9JRCB9LCB0ZW1wbGF0ZVBhcmFtcywgeyBVU0VSX0lEIH0pXG4gICAgICAudGhlbih0aGlzLnJlc2V0Rm9ybSgpKTtcbiAgfTtcblxuICByZXNldEZvcm0oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICBtZXNzYWdlOiBcIlwiLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInN1Yi1zZWN0aW9uXCIgaWQ9XCJjb250YWN0XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWN0LWZvcm0taW5wdXRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtLWlucHV0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgcm93cz1cIjEwXCJcbiAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tZXNzYWdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtLWlucHV0LWJ1dHRvblwiPlxuICAgICAgICAgICAgICBTZW5kXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/contact_form.js\n");

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_contact_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/contact_form */ \"./components/contact_form.js\");\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/pages/contact.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Contact = () => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, \"OJOS | Contact\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  })), __jsx(\"h1\", {\n    className: \"page-title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, \"Contact\"), __jsx(\"p\", {\n    className: \"contact-des\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, \"Hola! If you would like to contact us please do so at isojos@icloud.com or via our contact form. We will get back to you as soon as possible. Have a lovely day.\"), __jsx(_components_contact_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzPzAwYjciXSwibmFtZXMiOlsiQ29udGFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsTUFBTTtBQUNwQixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBRUU7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixFQU1FO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3S0FORixFQVdFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLENBREY7QUFlRCxDQWhCRDs7QUFrQmVBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29udGFjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250YWN0X2Zvcm1cIjtcblxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5PSk9TIHwgQ29udGFjdDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+Q29udGFjdDwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJjb250YWN0LWRlc1wiPlxuICAgICAgICBIb2xhISBJZiB5b3Ugd291bGQgbGlrZSB0byBjb250YWN0IHVzIHBsZWFzZSBkbyBzbyBhdCBpc29qb3NAaWNsb3VkLmNvbVxuICAgICAgICBvciB2aWEgb3VyIGNvbnRhY3QgZm9ybS4gV2Ugd2lsbCBnZXQgYmFjayB0byB5b3UgYXMgc29vbiBhcyBwb3NzaWJsZS5cbiAgICAgICAgSGF2ZSBhIGxvdmVseSBkYXkuXG4gICAgICA8L3A+XG4gICAgICA8Q29udGFjdEZvcm0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ }),

/***/ "emailjs-com":
/*!******************************!*\
  !*** external "emailjs-com" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"emailjs-com\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbWFpbGpzLWNvbVwiPzViYjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZW1haWxqcy1jb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbWFpbGpzLWNvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///emailjs-com\n");

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

/***/ })

/******/ });