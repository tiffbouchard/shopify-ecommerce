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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  // 1. Destructure the email address from the request body.\n  const {\n    email\n  } = req.body;\n\n  if (!email) {\n    return res.status(400).json({\n      error: \"Email is required\"\n    });\n  }\n\n  try {\n    const LIST_ID = \"a3160a904b\";\n    const API_KEY = \"cac217a0987980264d853d249f6eb883-us17\";\n    const DATACENTER = \"us17\";\n    const data = {\n      email_address: email,\n      status: \"subscribed\"\n    };\n    const response = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {\n      body: JSON.stringify(data),\n      headers: {\n        Authorization: `apikey ${API_KEY}`,\n        \"Content-Type\": \"application/json\"\n      },\n      method: \"POST\"\n    });\n\n    if (response.status >= 400) {\n      return res.status(400).json({\n        error: `There was an error subscribing to the newsletter. Shoot me an email at isojos@icloud.com and I'll add you to the list.`\n      });\n    }\n\n    return res.status(201).json({\n      error: \"\"\n    });\n  } catch (error) {\n    return res.status(500).json({\n      error: error.message || error.toString()\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc3Vic2NyaWJlLmpzP2FjNzMiXSwibmFtZXMiOlsicmVxIiwicmVzIiwiZW1haWwiLCJib2R5Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiTElTVF9JRCIsInByb2Nlc3MiLCJBUElfS0VZIiwiREFUQUNFTlRFUiIsImRhdGEiLCJlbWFpbF9hZGRyZXNzIiwicmVzcG9uc2UiLCJmZXRjaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIm1ldGhvZCIsIm1lc3NhZ2UiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSxzRUFBT0EsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVlGLEdBQUcsQ0FBQ0csSUFBdEI7O0FBRUEsTUFBSSxDQUFDRCxLQUFMLEVBQVk7QUFDVixXQUFPRCxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUFyQixDQUFQO0FBQ0Q7O0FBRUQsTUFBSTtBQUNGLFVBQU1DLE9BQU8sR0FBR0MsWUFBaEI7QUFDQSxVQUFNQyxPQUFPLEdBQUdELHVDQUFoQjtBQUNBLFVBQU1FLFVBQVUsR0FBR0YsTUFBbkI7QUFFQSxVQUFNRyxJQUFJLEdBQUc7QUFDWEMsbUJBQWEsRUFBRVYsS0FESjtBQUVYRSxZQUFNLEVBQUU7QUFGRyxLQUFiO0FBS0EsVUFBTVMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FDekIsV0FBVUosVUFBVyxnQ0FBK0JILE9BQVEsVUFEbkMsRUFFMUI7QUFDRUosVUFBSSxFQUFFWSxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsSUFBZixDQURSO0FBRUVNLGFBQU8sRUFBRTtBQUNQQyxxQkFBYSxFQUFHLFVBQVNULE9BQVEsRUFEMUI7QUFFUCx3QkFBZ0I7QUFGVCxPQUZYO0FBTUVVLFlBQU0sRUFBRTtBQU5WLEtBRjBCLENBQTVCOztBQVlBLFFBQUlOLFFBQVEsQ0FBQ1QsTUFBVCxJQUFtQixHQUF2QixFQUE0QjtBQUMxQixhQUFPSCxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUMxQkMsYUFBSyxFQUFHO0FBRGtCLE9BQXJCLENBQVA7QUFHRDs7QUFFRCxXQUFPTCxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUFyQixDQUFQO0FBQ0QsR0E3QkQsQ0E2QkUsT0FBT0EsS0FBUCxFQUFjO0FBQ2QsV0FBT0wsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsV0FBSyxFQUFFQSxLQUFLLENBQUNjLE9BQU4sSUFBaUJkLEtBQUssQ0FBQ2UsUUFBTjtBQUExQixLQUFyQixDQUFQO0FBQ0Q7QUFDRixDQXhDRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9zdWJzY3JpYmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgLy8gMS4gRGVzdHJ1Y3R1cmUgdGhlIGVtYWlsIGFkZHJlc3MgZnJvbSB0aGUgcmVxdWVzdCBib2R5LlxuICBjb25zdCB7IGVtYWlsIH0gPSByZXEuYm9keTtcblxuICBpZiAoIWVtYWlsKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IFwiRW1haWwgaXMgcmVxdWlyZWRcIiB9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgTElTVF9JRCA9IHByb2Nlc3MuZW52Lk1BSUxDSElNUF9MSVNUX0lEO1xuICAgIGNvbnN0IEFQSV9LRVkgPSBwcm9jZXNzLmVudi5NQUlMQ0hJTVBfQVBJX0tFWTtcbiAgICBjb25zdCBEQVRBQ0VOVEVSID0gcHJvY2Vzcy5lbnYuREFUQUNFTlRFUjtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBlbWFpbF9hZGRyZXNzOiBlbWFpbCxcbiAgICAgIHN0YXR1czogXCJzdWJzY3JpYmVkXCIsXG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly8ke0RBVEFDRU5URVJ9LmFwaS5tYWlsY2hpbXAuY29tLzMuMC9saXN0cy8ke0xJU1RfSUR9L21lbWJlcnNgLFxuICAgICAge1xuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBhcGlrZXkgJHtBUElfS0VZfWAsXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gNDAwKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe1xuICAgICAgICBlcnJvcjogYFRoZXJlIHdhcyBhbiBlcnJvciBzdWJzY3JpYmluZyB0byB0aGUgbmV3c2xldHRlci4gU2hvb3QgbWUgYW4gZW1haWwgYXQgaXNvam9zQGljbG91ZC5jb20gYW5kIEknbGwgYWRkIHlvdSB0byB0aGUgbGlzdC5gLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgZXJyb3I6IFwiXCIgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IudG9TdHJpbmcoKSB9KTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/subscribe.js\n");

/***/ })

/******/ });