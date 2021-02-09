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

/***/ "./components/ContactForm/ContactForm.js":
/*!***********************************************!*\
  !*** ./components/ContactForm/ContactForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emailjs-com */ \"emailjs-com\");\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace.nosync/ojos/web/components/ContactForm/ContactForm.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst SERVICE_ID = process.env.SERVICE_ID;\nconst TEMPLATE_ID = process.env.TEMPLATE_ID;\nconst USER_ID = process.env.USER_ID;\n\nclass Form extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      name: \"\",\n      email: \"\",\n      message: \"\"\n    });\n\n    _defineProperty(this, \"handleSubmit\", e => {\n      e.preventDefault();\n      let templateParams = {\n        from_name: this.state.email,\n        to_name: \"OJOS\",\n        message_html: this.state.message,\n        reply_to: this.state.email\n      };\n      emailjs_com__WEBPACK_IMPORTED_MODULE_1___default.a.send(\"gmail\", {\n        TEMPLATE_ID\n      }, templateParams, {\n        USER_ID\n      }).then(this.resetForm());\n    });\n\n    _defineProperty(this, \"handleChange\", e => {\n      this.setState({\n        [e.target.name]: e.target.value\n      });\n    });\n  }\n\n  resetForm() {\n    this.setState({\n      name: \"\",\n      email: \"\",\n      message: \"\"\n    });\n  }\n\n  render() {\n    return __jsx(\"section\", {\n      className: \"sub-section\",\n      id: \"contact\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }\n    }, __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }\n    }, __jsx(\"form\", {\n      className: \"contact-form\",\n      onSubmit: this.handleSubmit,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 11\n      }\n    }, __jsx(\"input\", {\n      type: \"text\",\n      name: \"name\",\n      value: this.state.name,\n      onChange: this.handleChange,\n      placeholder: \"Name\",\n      className: \"contact-form-input\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }\n    }), __jsx(\"input\", {\n      required: true,\n      type: \"email\",\n      name: \"email\",\n      value: this.state.email,\n      onChange: this.handleChange,\n      placeholder: \"Email\",\n      className: \"contact-form-input\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 13\n      }\n    }), __jsx(\"textarea\", {\n      required: true,\n      rows: \"10\",\n      name: \"message\",\n      value: this.state.message,\n      onChange: this.handleChange,\n      placeholder: \"Message\",\n      className: \"contact-form-input\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 13\n      }\n    }), __jsx(\"button\", {\n      type: \"submit\",\n      className: \"contact-form-input-button\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 13\n      }\n    }, \"Send\"))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtL0NvbnRhY3RGb3JtLmpzPzA0NWQiXSwibmFtZXMiOlsiU0VSVklDRV9JRCIsInByb2Nlc3MiLCJlbnYiLCJURU1QTEFURV9JRCIsIlVTRVJfSUQiLCJGb3JtIiwiUmVhY3QiLCJDb21wb25lbnQiLCJuYW1lIiwiZW1haWwiLCJtZXNzYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGVtcGxhdGVQYXJhbXMiLCJmcm9tX25hbWUiLCJzdGF0ZSIsInRvX25hbWUiLCJtZXNzYWdlX2h0bWwiLCJyZXBseV90byIsImVtYWlsanMiLCJzZW5kIiwidGhlbiIsInJlc2V0Rm9ybSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJyZW5kZXIiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixVQUEvQjtBQUNBLE1BQU1HLFdBQVcsR0FBR0YsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQWhDO0FBQ0EsTUFBTUMsT0FBTyxHQUFHSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsT0FBNUI7O0FBRUEsTUFBTUMsSUFBTixTQUFtQkMsNENBQUssQ0FBQ0MsU0FBekIsQ0FBbUM7QUFBQTtBQUFBOztBQUFBLG1DQUN6QjtBQUNOQyxVQUFJLEVBQUUsRUFEQTtBQUVOQyxXQUFLLEVBQUUsRUFGRDtBQUdOQyxhQUFPLEVBQUU7QUFISCxLQUR5Qjs7QUFBQSwwQ0FPakJDLENBQUQsSUFBTztBQUNwQkEsT0FBQyxDQUFDQyxjQUFGO0FBRUEsVUFBSUMsY0FBYyxHQUFHO0FBQ25CQyxpQkFBUyxFQUFFLEtBQUtDLEtBQUwsQ0FBV04sS0FESDtBQUVuQk8sZUFBTyxFQUFFLE1BRlU7QUFHbkJDLG9CQUFZLEVBQUUsS0FBS0YsS0FBTCxDQUFXTCxPQUhOO0FBSW5CUSxnQkFBUSxFQUFFLEtBQUtILEtBQUwsQ0FBV047QUFKRixPQUFyQjtBQU9BVSx3REFBTyxDQUNKQyxJQURILENBQ1EsT0FEUixFQUNpQjtBQUFFakI7QUFBRixPQURqQixFQUNrQ1UsY0FEbEMsRUFDa0Q7QUFBRVQ7QUFBRixPQURsRCxFQUVHaUIsSUFGSCxDQUVRLEtBQUtDLFNBQUwsRUFGUjtBQUdELEtBcEJnQzs7QUFBQSwwQ0E4QmpCWCxDQUFELElBQU87QUFDcEIsV0FBS1ksUUFBTCxDQUFjO0FBQUUsU0FBQ1osQ0FBQyxDQUFDYSxNQUFGLENBQVNoQixJQUFWLEdBQWlCRyxDQUFDLENBQUNhLE1BQUYsQ0FBU0M7QUFBNUIsT0FBZDtBQUNELEtBaENnQztBQUFBOztBQXNCakNILFdBQVMsR0FBRztBQUNWLFNBQUtDLFFBQUwsQ0FBYztBQUNaZixVQUFJLEVBQUUsRUFETTtBQUVaQyxXQUFLLEVBQUUsRUFGSztBQUdaQyxhQUFPLEVBQUU7QUFIRyxLQUFkO0FBS0Q7O0FBTURnQixRQUFNLEdBQUc7QUFDUCxXQUNFO0FBQVMsZUFBUyxFQUFDLGFBQW5CO0FBQWlDLFFBQUUsRUFBQyxTQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFDLGNBQWhCO0FBQStCLGNBQVEsRUFBRSxLQUFLQyxZQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxVQUFJLEVBQUMsTUFEUDtBQUVFLFVBQUksRUFBQyxNQUZQO0FBR0UsV0FBSyxFQUFFLEtBQUtaLEtBQUwsQ0FBV1AsSUFIcEI7QUFJRSxjQUFRLEVBQUUsS0FBS29CLFlBSmpCO0FBS0UsaUJBQVcsRUFBQyxNQUxkO0FBTUUsZUFBUyxFQUFDLG9CQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQVNFO0FBQ0UsY0FBUSxNQURWO0FBRUUsVUFBSSxFQUFDLE9BRlA7QUFHRSxVQUFJLEVBQUMsT0FIUDtBQUlFLFdBQUssRUFBRSxLQUFLYixLQUFMLENBQVdOLEtBSnBCO0FBS0UsY0FBUSxFQUFFLEtBQUttQixZQUxqQjtBQU1FLGlCQUFXLEVBQUMsT0FOZDtBQU9FLGVBQVMsRUFBQyxvQkFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVEYsRUFrQkU7QUFDRSxjQUFRLE1BRFY7QUFFRSxVQUFJLEVBQUMsSUFGUDtBQUdFLFVBQUksRUFBQyxTQUhQO0FBSUUsV0FBSyxFQUFFLEtBQUtiLEtBQUwsQ0FBV0wsT0FKcEI7QUFLRSxjQUFRLEVBQUUsS0FBS2tCLFlBTGpCO0FBTUUsaUJBQVcsRUFBQyxTQU5kO0FBT0UsZUFBUyxFQUFDLG9CQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFsQkYsRUEyQkU7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFTLEVBQUMsMkJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzQkYsQ0FERixDQURGLENBREY7QUFxQ0Q7O0FBeEVnQzs7QUEyRXBCdkIsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtL0NvbnRhY3RGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVtYWlsanMgZnJvbSBcImVtYWlsanMtY29tXCI7XG5cbmNvbnN0IFNFUlZJQ0VfSUQgPSBwcm9jZXNzLmVudi5TRVJWSUNFX0lEO1xuY29uc3QgVEVNUExBVEVfSUQgPSBwcm9jZXNzLmVudi5URU1QTEFURV9JRDtcbmNvbnN0IFVTRVJfSUQgPSBwcm9jZXNzLmVudi5VU0VSX0lEO1xuXG5jbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbmFtZTogXCJcIixcbiAgICBlbWFpbDogXCJcIixcbiAgICBtZXNzYWdlOiBcIlwiLFxuICB9O1xuXG4gIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IHRlbXBsYXRlUGFyYW1zID0ge1xuICAgICAgZnJvbV9uYW1lOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgdG9fbmFtZTogXCJPSk9TXCIsXG4gICAgICBtZXNzYWdlX2h0bWw6IHRoaXMuc3RhdGUubWVzc2FnZSxcbiAgICAgIHJlcGx5X3RvOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgIH07XG5cbiAgICBlbWFpbGpzXG4gICAgICAuc2VuZChcImdtYWlsXCIsIHsgVEVNUExBVEVfSUQgfSwgdGVtcGxhdGVQYXJhbXMsIHsgVVNFUl9JRCB9KVxuICAgICAgLnRoZW4odGhpcy5yZXNldEZvcm0oKSk7XG4gIH07XG5cbiAgcmVzZXRGb3JtKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgbWVzc2FnZTogXCJcIixcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzdWItc2VjdGlvblwiIGlkPVwiY29udGFjdFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybVwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtLWlucHV0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIHJvd3M9XCIxMFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWVzc2FnZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWN0LWZvcm0taW5wdXRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybS1pbnB1dC1idXR0b25cIj5cbiAgICAgICAgICAgICAgU2VuZFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ContactForm/ContactForm.js\n");

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ContactForm_ContactForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContactForm/ContactForm */ \"./components/ContactForm/ContactForm.js\");\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace.nosync/ojos/web/pages/contact.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Contact = () => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, \"OJOS | Contact\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  })), __jsx(\"h1\", {\n    className: \"page-title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, \"Contact\"), __jsx(\"p\", {\n    className: \"contact-des\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, \"Hola! If you would like to contact us please do so at isojos@icloud.com or via our contact form. We will get back to you as soon as possible. Have a lovely day.\"), __jsx(_components_ContactForm_ContactForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzPzAwYjciXSwibmFtZXMiOlsiQ29udGFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsTUFBTTtBQUNwQixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBRUU7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixFQU1FO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3S0FORixFQVdFLE1BQUMsMkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLENBREY7QUFlRCxDQWhCRDs7QUFrQmVBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29udGFjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybS9Db250YWN0Rm9ybVwiO1xuXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk9KT1MgfCBDb250YWN0PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5Db250YWN0PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRhY3QtZGVzXCI+XG4gICAgICAgIEhvbGEhIElmIHlvdSB3b3VsZCBsaWtlIHRvIGNvbnRhY3QgdXMgcGxlYXNlIGRvIHNvIGF0IGlzb2pvc0BpY2xvdWQuY29tXG4gICAgICAgIG9yIHZpYSBvdXIgY29udGFjdCBmb3JtLiBXZSB3aWxsIGdldCBiYWNrIHRvIHlvdSBhcyBzb29uIGFzIHBvc3NpYmxlLlxuICAgICAgICBIYXZlIGEgbG92ZWx5IGRheS5cbiAgICAgIDwvcD5cbiAgICAgIDxDb250YWN0Rm9ybSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

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