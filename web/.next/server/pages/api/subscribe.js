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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/subscribe.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/subscribe.js":
/*!********************************!*\
  !*** ./pages/api/subscribe.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    email\n  } = req.body;\n\n  if (!email) {\n    return res.status(400).json({\n      error: \"Email is required\"\n    });\n  }\n\n  try {\n    const LIST_ID = \"9bdf80fa7c\";\n    const API_KEY = \"a59221eb05f3b40210836bb59581d41f-us7\";\n    const DATACENTER = \"us7\";\n    const data = {\n      email_address: email,\n      status: \"subscribed\"\n    };\n    const response = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {\n      body: JSON.stringify(data),\n      headers: {\n        Authorization: `apikey ${API_KEY}`,\n        \"Content-Type\": \"application/json\"\n      },\n      method: \"POST\"\n    });\n\n    if (response.status >= 400) {\n      return res.status(400).json({\n        error: `There was an error subscribing to the newsletter. Shoot me an email at isojos@icloud.com and I'll add you to the list.`\n      });\n    }\n\n    return res.status(201).json({\n      error: \"\"\n    });\n  } catch (error) {\n    return res.status(500).json({\n      error: error.message || error.toString()\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc3Vic2NyaWJlLmpzP2FjNzMiXSwibmFtZXMiOlsicmVxIiwicmVzIiwiZW1haWwiLCJib2R5Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiTElTVF9JRCIsInByb2Nlc3MiLCJBUElfS0VZIiwiREFUQUNFTlRFUiIsImRhdGEiLCJlbWFpbF9hZGRyZXNzIiwicmVzcG9uc2UiLCJmZXRjaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIm1ldGhvZCIsIm1lc3NhZ2UiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSxzRUFBT0EsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLFFBQU07QUFBRUM7QUFBRixNQUFZRixHQUFHLENBQUNHLElBQXRCOztBQUVBLE1BQUksQ0FBQ0QsS0FBTCxFQUFZO0FBQ1YsV0FBT0QsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBckIsQ0FBUDtBQUNEOztBQUVELE1BQUk7QUFDRixVQUFNQyxPQUFPLEdBQUdDLFlBQWhCO0FBQ0EsVUFBTUMsT0FBTyxHQUFHRCxzQ0FBaEI7QUFDQSxVQUFNRSxVQUFVLEdBQUdGLEtBQW5CO0FBRUEsVUFBTUcsSUFBSSxHQUFHO0FBQ1hDLG1CQUFhLEVBQUVWLEtBREo7QUFFWEUsWUFBTSxFQUFFO0FBRkcsS0FBYjtBQUtBLFVBQU1TLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQ3pCLFdBQVVKLFVBQVcsZ0NBQStCSCxPQUFRLFVBRG5DLEVBRTFCO0FBQ0VKLFVBQUksRUFBRVksSUFBSSxDQUFDQyxTQUFMLENBQWVMLElBQWYsQ0FEUjtBQUVFTSxhQUFPLEVBQUU7QUFDUEMscUJBQWEsRUFBRyxVQUFTVCxPQUFRLEVBRDFCO0FBRVAsd0JBQWdCO0FBRlQsT0FGWDtBQU1FVSxZQUFNLEVBQUU7QUFOVixLQUYwQixDQUE1Qjs7QUFZQSxRQUFJTixRQUFRLENBQUNULE1BQVQsSUFBbUIsR0FBdkIsRUFBNEI7QUFDMUIsYUFBT0gsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDMUJDLGFBQUssRUFBRztBQURrQixPQUFyQixDQUFQO0FBR0Q7O0FBRUQsV0FBT0wsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBckIsQ0FBUDtBQUNELEdBN0JELENBNkJFLE9BQU9BLEtBQVAsRUFBYztBQUNkLFdBQU9MLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFdBQUssRUFBRUEsS0FBSyxDQUFDYyxPQUFOLElBQWlCZCxLQUFLLENBQUNlLFFBQU47QUFBMUIsS0FBckIsQ0FBUDtBQUNEO0FBQ0YsQ0F2Q0QiLCJmaWxlIjoiLi9wYWdlcy9hcGkvc3Vic2NyaWJlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgZW1haWwgfSA9IHJlcS5ib2R5O1xuXG4gIGlmICghZW1haWwpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogXCJFbWFpbCBpcyByZXF1aXJlZFwiIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBMSVNUX0lEID0gcHJvY2Vzcy5lbnYuTUFJTENISU1QX0xJU1RfSUQ7XG4gICAgY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52Lk1BSUxDSElNUF9BUElfS0VZO1xuICAgIGNvbnN0IERBVEFDRU5URVIgPSBwcm9jZXNzLmVudi5EQVRBQ0VOVEVSO1xuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGVtYWlsX2FkZHJlc3M6IGVtYWlsLFxuICAgICAgc3RhdHVzOiBcInN1YnNjcmliZWRcIixcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovLyR7REFUQUNFTlRFUn0uYXBpLm1haWxjaGltcC5jb20vMy4wL2xpc3RzLyR7TElTVF9JRH0vbWVtYmVyc2AsXG4gICAgICB7XG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYGFwaWtleSAke0FQSV9LRVl9YCxcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7XG4gICAgICAgIGVycm9yOiBgVGhlcmUgd2FzIGFuIGVycm9yIHN1YnNjcmliaW5nIHRvIHRoZSBuZXdzbGV0dGVyLiBTaG9vdCBtZSBhbiBlbWFpbCBhdCBpc29qb3NAaWNsb3VkLmNvbSBhbmQgSSdsbCBhZGQgeW91IHRvIHRoZSBsaXN0LmAsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oeyBlcnJvcjogXCJcIiB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCBlcnJvci50b1N0cmluZygpIH0pO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/subscribe.js\n");

/***/ })

/******/ });