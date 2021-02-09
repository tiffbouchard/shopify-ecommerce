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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emailjs-com */ \"emailjs-com\");\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace.nosync/ojos/web/components/ContactForm/ContactForm.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst TEMPLATE_ID = \"template_cr1frl1\";\nconst USER_ID = \"user_TXMxqXKmIaNtAMGcrfEP9\";\nconst SERVICE_ID = \"service_ifoljr8\";\n\nclass Form extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      name: \"\",\n      email: \"\",\n      message: \"\",\n      response: \"\",\n      loading: false\n    });\n\n    _defineProperty(this, \"handleSubmit\", e => {\n      e.preventDefault();\n      const {\n        email,\n        message\n      } = this.state;\n      let templateParams = {\n        from_name: email,\n        to_name: \"OJOS\",\n        message_html: message,\n        reply_to: email\n      };\n      this.sendEmail(templateParams);\n    });\n\n    _defineProperty(this, \"sendEmail\", templateParams => {\n      this.setState({\n        loading: true\n      });\n      emailjs_com__WEBPACK_IMPORTED_MODULE_1___default.a.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(response => {\n        this.setState({\n          loading: false\n        });\n        this.setState({\n          response: \"Yay! 🎉 Your message has been sent. We will get back to you ASAP\"\n        });\n        this.resetForm();\n      }, error => {\n        this.setState({\n          loading: false\n        });\n        this.setState({\n          response: error.text\n        });\n      });\n    });\n\n    _defineProperty(this, \"handleChange\", e => {\n      this.setState({\n        [e.target.name]: e.target.value\n      });\n    });\n  }\n\n  resetForm() {\n    this.setState({\n      name: \"\",\n      email: \"\",\n      message: \"\"\n    });\n  }\n\n  render() {\n    const {\n      response,\n      loading,\n      message,\n      email,\n      name\n    } = this.state;\n    return __jsx(\"section\", {\n      className: \"sub-section\",\n      id: \"contact\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 7\n      }\n    }, __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }\n    }, __jsx(\"form\", {\n      className: \"contact-form\",\n      onSubmit: this.handleSubmit,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 11\n      }\n    }, __jsx(\"input\", {\n      type: \"text\",\n      name: \"name\",\n      value: name,\n      onChange: this.handleChange,\n      placeholder: \"Name\",\n      className: \"contact-form-input\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 13\n      }\n    }), __jsx(\"input\", {\n      required: true,\n      type: \"email\",\n      name: \"email\",\n      value: email,\n      onChange: this.handleChange,\n      placeholder: \"Email\",\n      className: \"contact-form-input\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 13\n      }\n    }), __jsx(\"textarea\", {\n      required: true,\n      rows: \"10\",\n      name: \"message\",\n      value: message,\n      onChange: this.handleChange,\n      placeholder: \"Message\",\n      className: \"contact-form-input\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 13\n      }\n    }), __jsx(\"button\", {\n      type: \"submit\",\n      className: \"contact-form-input-button\",\n      disabled: loading,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 13\n      }\n    }, loading ? \"Sending...\" : \"Send\"), __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 13\n      }\n    }, response ? response : \" \"))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtL0NvbnRhY3RGb3JtLmpzPzA0NWQiXSwibmFtZXMiOlsiVEVNUExBVEVfSUQiLCJwcm9jZXNzIiwiVVNFUl9JRCIsIlNFUlZJQ0VfSUQiLCJGb3JtIiwiUmVhY3QiLCJDb21wb25lbnQiLCJuYW1lIiwiZW1haWwiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJsb2FkaW5nIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RhdGUiLCJ0ZW1wbGF0ZVBhcmFtcyIsImZyb21fbmFtZSIsInRvX25hbWUiLCJtZXNzYWdlX2h0bWwiLCJyZXBseV90byIsInNlbmRFbWFpbCIsInNldFN0YXRlIiwiZW1haWxqcyIsInNlbmQiLCJ0aGVuIiwicmVzZXRGb3JtIiwiZXJyb3IiLCJ0ZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJyZW5kZXIiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxXQUFXLEdBQUdDLGtCQUFwQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0QsNEJBQWhCO0FBQ0EsTUFBTUUsVUFBVSxHQUFHRixpQkFBbkI7O0FBRUEsTUFBTUcsSUFBTixTQUFtQkMsNENBQUssQ0FBQ0MsU0FBekIsQ0FBbUM7QUFBQTtBQUFBOztBQUFBLG1DQUN6QjtBQUNOQyxVQUFJLEVBQUUsRUFEQTtBQUVOQyxXQUFLLEVBQUUsRUFGRDtBQUdOQyxhQUFPLEVBQUUsRUFISDtBQUlOQyxjQUFRLEVBQUUsRUFKSjtBQUtOQyxhQUFPLEVBQUU7QUFMSCxLQUR5Qjs7QUFBQSwwQ0FTakJDLENBQUQsSUFBTztBQUNwQkEsT0FBQyxDQUFDQyxjQUFGO0FBRUEsWUFBTTtBQUFFTCxhQUFGO0FBQVNDO0FBQVQsVUFBcUIsS0FBS0ssS0FBaEM7QUFFQSxVQUFJQyxjQUFjLEdBQUc7QUFDbkJDLGlCQUFTLEVBQUVSLEtBRFE7QUFFbkJTLGVBQU8sRUFBRSxNQUZVO0FB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QUcsWUFBSCxHQUFrQixNQUQ1QixDQTNCRixFQThCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU1ELFFBQVEsR0FBR0EsUUFBSCxHQUFjLEdBQTVCLENBOUJGLENBREYsQ0FERixDQURGO0FBc0NEOztBQWhHZ0M7O0FBbUdwQk4sbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtL0NvbnRhY3RGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVtYWlsanMgZnJvbSBcImVtYWlsanMtY29tXCI7XG5cbmNvbnN0IFRFTVBMQVRFX0lEID0gcHJvY2Vzcy5lbnYuRU1BSUxKU19URU1QTEFURV9JRDtcbmNvbnN0IFVTRVJfSUQgPSBwcm9jZXNzLmVudi5FTUFJTEpTX1VTRVJfSUQ7XG5jb25zdCBTRVJWSUNFX0lEID0gcHJvY2Vzcy5lbnYuRU1BSUxKU19TRVJWSUNFX0lEO1xuXG5jbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbmFtZTogXCJcIixcbiAgICBlbWFpbDogXCJcIixcbiAgICBtZXNzYWdlOiBcIlwiLFxuICAgIHJlc3BvbnNlOiBcIlwiLFxuICAgIGxvYWRpbmc6IGZhbHNlXG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB7IGVtYWlsLCBtZXNzYWdlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgbGV0IHRlbXBsYXRlUGFyYW1zID0ge1xuICAgICAgZnJvbV9uYW1lOiBlbWFpbCxcbiAgICAgIHRvX25hbWU6IFwiT0pPU1wiLFxuICAgICAgbWVzc2FnZV9odG1sOiBtZXNzYWdlLFxuICAgICAgcmVwbHlfdG86IGVtYWlsLFxuICAgIH07XG5cbiAgICB0aGlzLnNlbmRFbWFpbCh0ZW1wbGF0ZVBhcmFtcyk7XG4gIH07XG5cbiAgc2VuZEVtYWlsID0gKHRlbXBsYXRlUGFyYW1zKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmcgOiB0cnVlIH0pO1xuXG4gICAgZW1haWxqcy5zZW5kKFxuICAgICAgU0VSVklDRV9JRCwgXG4gICAgICBURU1QTEFURV9JRCwgXG4gICAgICB0ZW1wbGF0ZVBhcmFtcyxcbiAgICAgIFVTRVJfSURcbiAgICAgIClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZyA6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVzcG9uc2UgOiBcIllheSEg8J+OiSBZb3VyIG1lc3NhZ2UgaGFzIGJlZW4gc2VudC4gV2Ugd2lsbCBnZXQgYmFjayB0byB5b3UgQVNBUFwiIH0pO1xuICAgICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nIDogZmFsc2UgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXNwb25zZSA6IGVycm9yLnRleHQgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNldEZvcm0oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICBtZXNzYWdlOiBcIlwiLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByZXNwb25zZSwgbG9hZGluZywgbWVzc2FnZSwgZW1haWwgLCBuYW1lIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInN1Yi1zZWN0aW9uXCIgaWQ9XCJjb250YWN0XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtLWlucHV0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWN0LWZvcm0taW5wdXRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICByb3dzPVwiMTBcIlxuICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtLWlucHV0LWJ1dHRvblwiIGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICAgICAge2xvYWRpbmcgPyBcIlNlbmRpbmcuLi5cIiA6IFwiU2VuZFwifVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2PntyZXNwb25zZSA/IHJlc3BvbnNlIDogXCIgXCJ9PC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ContactForm/ContactForm.js\n");

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ContactForm_ContactForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContactForm/ContactForm */ \"./components/ContactForm/ContactForm.js\");\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace.nosync/ojos/web/pages/contact.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Contact = () => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, \"OJOS | Contact\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  })), __jsx(\"h1\", {\n    className: \"page-title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, \"Contact\"), __jsx(\"p\", {\n    className: \"contact-des\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, \"Hey there! If you would like to contact us please do so at isojos@icloud.com or via our contact form. We will get back to you as soon as possible. Have a lovely day.\"), __jsx(_components_ContactForm_ContactForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzPzAwYjciXSwibmFtZXMiOlsiQ29udGFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsTUFBTTtBQUNwQixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBRUU7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixFQU1FO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2S0FORixFQVdFLE1BQUMsMkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLENBREY7QUFlRCxDQWhCRDs7QUFrQmVBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29udGFjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybS9Db250YWN0Rm9ybVwiO1xuXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk9KT1MgfCBDb250YWN0PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5Db250YWN0PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRhY3QtZGVzXCI+XG4gICAgICAgIEhleSB0aGVyZSEgSWYgeW91IHdvdWxkIGxpa2UgdG8gY29udGFjdCB1cyBwbGVhc2UgZG8gc28gYXQgaXNvam9zQGljbG91ZC5jb21cbiAgICAgICAgb3IgdmlhIG91ciBjb250YWN0IGZvcm0uIFdlIHdpbGwgZ2V0IGJhY2sgdG8geW91IGFzIHNvb24gYXMgcG9zc2libGUuXG4gICAgICAgIEhhdmUgYSBsb3ZlbHkgZGF5LlxuICAgICAgPC9wPlxuICAgICAgPENvbnRhY3RGb3JtIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

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