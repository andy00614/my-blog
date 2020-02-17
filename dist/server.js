/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Layout.tsx":
/*!************************!*\
  !*** ./src/Layout.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\n\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nconst routes_1 = __webpack_require__(/*! ./routes */ \"./src/routes.ts\");\n\nconst Layout = props => {\n  const innerRoute = () => react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(react_router_dom_1.Link, {\n    to: \"/content\"\n  }, \"content\"), react_1.default.createElement(react_router_dom_1.Link, {\n    to: \"/\"\n  }, \"Home\"), react_1.default.createElement(react_router_dom_1.Switch, null, routes_1.routers.map(item => {\n    console.log('hahaha', item.path);\n    return react_1.default.createElement(react_router_dom_1.Route, {\n      path: item.path,\n      key: item.key,\n      exact: item.exact\n    }, react_1.default.createElement(item.component, {\n      data: props.propsData\n    }));\n  })));\n\n  return react_1.default.createElement(\"div\", null, props.type === 'client' ? react_1.default.createElement(react_router_dom_1.BrowserRouter, null, innerRoute()) : react_1.default.createElement(react_router_dom_1.StaticRouter, {\n    location: props.req.path,\n    context: {}\n  }, innerRoute()));\n};\n\nexports.default = Layout;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0LnRzeD8zNmM4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQVFBLE1BQU0sTUFBTSxHQUFzQixLQUFELElBQVU7QUFDMUMsUUFBTSxVQUFVLEdBQUcsTUFDbEIsOERBQ0MsOEJBQUMsdUJBQUQsRUFBSztBQUFDLE1BQUUsRUFBQztBQUFKLEdBQUwsRUFBbUIsU0FBbkIsQ0FERCxFQUVDLDhCQUFDLHVCQUFELEVBQUs7QUFBQyxNQUFFLEVBQUM7QUFBSixHQUFMLEVBQVksTUFBWixDQUZELEVBR0MsOEJBQUMseUJBQUQsRUFBTyxJQUFQLEVBQ0UsaUJBQVEsR0FBUixDQUFhLElBQUQsSUFBUztBQUNyQixXQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBcUIsSUFBSSxDQUFDLElBQTFCO0FBQ0EsV0FDQyw4QkFBQyx3QkFBRCxFQUFNO0FBQUMsVUFBSSxFQUFFLElBQUksQ0FBQyxJQUFaO0FBQWtCLFNBQUcsRUFBRSxJQUFJLENBQUMsR0FBNUI7QUFBaUMsV0FBSyxFQUFFLElBQUksQ0FBQztBQUE3QyxLQUFOLEVBQ0MsOEJBQUMsSUFBSSxDQUFDLFNBQU4sRUFBZTtBQUFDLFVBQUksRUFBRSxLQUFLLENBQUM7QUFBYixLQUFmLENBREQsQ0FERDtBQUtBLEdBUEEsQ0FERixDQUhELENBREQ7O0FBZ0JBLFNBQ0MsMkNBQ0UsS0FBSyxDQUFDLElBQU4sS0FBZSxRQUFmLEdBQ0EsOEJBQUMsZ0NBQUQsRUFBYyxJQUFkLEVBQWdCLFVBQVUsRUFBMUIsQ0FEQSxHQUdBLDhCQUFDLCtCQUFELEVBQWE7QUFBQyxZQUFRLEVBQUUsS0FBSyxDQUFDLEdBQU4sQ0FBVSxJQUFyQjtBQUEyQixXQUFPLEVBQUU7QUFBcEMsR0FBYixFQUNFLFVBQVUsRUFEWixDQUpGLENBREQ7QUFXQSxDQTVCRDs7QUE2QkEsa0JBQWUsTUFBZiIsImZpbGUiOiIuL3NyYy9MYXlvdXQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0YXRpY1JvdXRlciwgQnJvd3NlclJvdXRlciwgUm91dGUsIFN3aXRjaCwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgcm91dGVycyB9IGZyb20gJy4vcm91dGVzJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG5cdHByb3BzRGF0YT86IGFueTtcblx0dHlwZTogJ3NlcnZlcicgfCAnY2xpZW50Jztcblx0W3Byb3BzOiBzdHJpbmddOiBhbnk7XG59XG5cbmNvbnN0IExheW91dDogUmVhY3QuRkM8SVByb3BzPiA9IChwcm9wcykgPT4ge1xuXHRjb25zdCBpbm5lclJvdXRlID0gKCkgPT4gKFxuXHRcdDw+XG5cdFx0XHQ8TGluayB0bz1cIi9jb250ZW50XCI+Y29udGVudDwvTGluaz5cblx0XHRcdDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+XG5cdFx0XHQ8U3dpdGNoPlxuXHRcdFx0XHR7cm91dGVycy5tYXAoKGl0ZW0pID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnaGFoYWhhJyxpdGVtLnBhdGgpXG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxSb3V0ZSBwYXRoPXtpdGVtLnBhdGh9IGtleT17aXRlbS5rZXl9IGV4YWN0PXtpdGVtLmV4YWN0fT5cblx0XHRcdFx0XHRcdFx0PGl0ZW0uY29tcG9uZW50IGRhdGE9e3Byb3BzLnByb3BzRGF0YX0gLz5cblx0XHRcdFx0XHRcdDwvUm91dGU+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L1N3aXRjaD5cblx0XHQ8Lz5cblx0KTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0e3Byb3BzLnR5cGUgPT09ICdjbGllbnQnID8gKFxuXHRcdFx0XHQ8QnJvd3NlclJvdXRlcj57aW5uZXJSb3V0ZSgpfTwvQnJvd3NlclJvdXRlcj5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3Byb3BzLnJlcS5wYXRofSBjb250ZXh0PXt7fX0+XG5cdFx0XHRcdFx0e2lubmVyUm91dGUoKX1cblx0XHRcdFx0PC9TdGF0aWNSb3V0ZXI+XG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Layout.tsx\n");

/***/ }),

/***/ "./src/components/content/index.tsx":
/*!******************************************!*\
  !*** ./src/components/content/index.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n  result[\"default\"] = mod;\n  return result;\n};\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\n\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\n\nfunction Content(props) {\n  const [list, setList] = react_1.useState(props.data || []);\n  react_1.useEffect(() => {\n    if (!props.data || props.data.length === 0) {\n      axios_1.default.get('http://39.105.148.23:8000/').then(res => {\n        setList(res.data.data);\n      });\n    }\n  }, []);\n  return react_1.default.createElement(\"div\", null, \"Content\", list.map(item => react_1.default.createElement(\"div\", {\n    key: item.title\n  }, item.title)));\n}\n\nexports.default = Content;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb250ZW50L2luZGV4LnRzeD9hNzU5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsU0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXNCO0FBQ3JCLFFBQU0sQ0FBQyxJQUFELEVBQU0sT0FBTixJQUFpQixpQkFBUyxLQUFLLENBQUMsSUFBTixJQUFjLEVBQXZCLENBQXZCO0FBQ0Esb0JBQVUsTUFBSztBQUNkLFFBQUcsQ0FBQyxLQUFLLENBQUMsSUFBUCxJQUFlLEtBQUssQ0FBQyxJQUFOLENBQVcsTUFBWCxLQUFzQixDQUF4QyxFQUEyQztBQUMxQyxzQkFBTSxHQUFOLENBQVUsNEJBQVYsRUFBd0MsSUFBeEMsQ0FBNkMsR0FBRyxJQUFHO0FBQ2xELGVBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSixDQUFTLElBQVYsQ0FBUDtBQUNBLE9BRkQ7QUFHQTtBQUNELEdBTkQsRUFNRSxFQU5GO0FBUUEsU0FDQywyQyxTQUFBLEVBRUUsSUFBSSxDQUFDLEdBQUwsQ0FBVSxJQUFELElBQ1Q7QUFBSyxPQUFHLEVBQUUsSUFBSSxDQUFDO0FBQWYsS0FBdUIsSUFBSSxDQUFDLEtBQTVCLENBREEsQ0FGRixDQUREO0FBUUE7O0FBQ0Qsa0JBQWUsT0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2NvbnRlbnQvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmZ1bmN0aW9uIENvbnRlbnQocHJvcHMpIHtcblx0Y29uc3QgW2xpc3Qsc2V0TGlzdF0gPSB1c2VTdGF0ZShwcm9wcy5kYXRhIHx8IFtdKVxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmKCFwcm9wcy5kYXRhIHx8IHByb3BzLmRhdGEubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRheGlvcy5nZXQoJ2h0dHA6Ly8zOS4xMDUuMTQ4LjIzOjgwMDAvJykudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRzZXRMaXN0KHJlcy5kYXRhLmRhdGEpXG5cdFx0XHR9KVxuXHRcdH1cblx0fSxbXSlcblx0XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdENvbnRlbnRcblx0XHRcdHtsaXN0Lm1hcCgoaXRlbSkgPT4gKFxuXHRcdFx0XHQ8ZGl2IGtleT17aXRlbS50aXRsZX0+e2l0ZW0udGl0bGV9PC9kaXY+XG5cdFx0XHQpKX1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/content/index.tsx\n");

/***/ }),

/***/ "./src/components/demo/index.tsx":
/*!***************************************!*\
  !*** ./src/components/demo/index.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\n\nexports.default = props => {\n  return react_1.default.createElement(\"div\", null, \"Hello React ssr\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZW1vL2luZGV4LnRzeD85ZGU3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLGtCQUFnQixLQUFELElBQVU7QUFDeEIsU0FBTyw2REFBUDtBQUNBLENBRkQiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kZW1vL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuXHRyZXR1cm4gPGRpdj5IZWxsbyBSZWFjdCBzc3I8L2Rpdj47XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/demo/index.tsx\n");

/***/ }),

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst demo_1 = __importDefault(__webpack_require__(/*! @/components/demo */ \"./src/components/demo/index.tsx\"));\nconst content_1 = __importDefault(__webpack_require__(/*! @/components/content */ \"./src/components/content/index.tsx\"));\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nexports.routers = [\n    {\n        path: '/',\n        component: demo_1.default,\n        key: 'home',\n        exact: true,\n        loadData() {\n            return axios_1.default.get('http://39.105.148.23:8000/');\n        }\n    },\n    {\n        path: '/content',\n        component: content_1.default,\n        key: 'content',\n        loadData() {\n            return axios_1.default.get('http://39.105.148.23:8000/');\n        }\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzLnRzPzgwYjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnSEFBb0M7QUFDcEMseUhBQTJDO0FBQzNDLDJFQUEwQjtBQUViLGVBQU8sR0FBRztJQUN0QjtRQUNDLElBQUksRUFBRSxHQUFHO1FBQ1QsU0FBUyxFQUFFLGNBQUc7UUFDZCxHQUFHLEVBQUUsTUFBTTtRQUNYLEtBQUssRUFBRSxJQUFJO1FBQ1gsUUFBUTtZQUNQLE9BQU8sZUFBSyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FDRDtJQUNEO1FBQ0MsSUFBSSxFQUFFLFVBQVU7UUFDaEIsU0FBUyxFQUFFLGlCQUFPO1FBQ2xCLEdBQUcsRUFBRSxTQUFTO1FBQ2QsUUFBUTtZQUNQLE9BQU8sZUFBSyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FDRDtDQUNELENBQUMiLCJmaWxlIjoiLi9zcmMvcm91dGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICdAL2NvbXBvbmVudHMvZGVtbyc7XG5pbXBvcnQgQ29udGVudCBmcm9tICdAL2NvbXBvbmVudHMvY29udGVudCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3Qgcm91dGVycyA9IFtcblx0e1xuXHRcdHBhdGg6ICcvJyxcblx0XHRjb21wb25lbnQ6IEFwcCxcblx0XHRrZXk6ICdob21lJyxcblx0XHRleGFjdDogdHJ1ZSxcblx0XHRsb2FkRGF0YSgpIHtcblx0XHRcdHJldHVybiBheGlvcy5nZXQoJ2h0dHA6Ly8zOS4xMDUuMTQ4LjIzOjgwMDAvJyk7XG5cdFx0fVxuXHR9LFxuXHR7XG5cdFx0cGF0aDogJy9jb250ZW50Jyxcblx0XHRjb21wb25lbnQ6IENvbnRlbnQsXG5cdFx0a2V5OiAnY29udGVudCcsXG5cdFx0bG9hZERhdGEoKSB7XG5cdFx0XHRyZXR1cm4gYXhpb3MuZ2V0KCdodHRwOi8vMzkuMTA1LjE0OC4yMzo4MDAwLycpO1xuXHRcdH1cblx0fVxuXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes.ts\n");

/***/ }),

/***/ "./src/server/index.tsx":
/*!******************************!*\
  !*** ./src/server/index.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\n\nconst server_1 = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\n\nconst Layout_1 = __importDefault(__webpack_require__(/*! @/Layout */ \"./src/Layout.tsx\"));\n\nconst routes_1 = __webpack_require__(/*! ../routes */ \"./src/routes.ts\");\n\nconst react_router_config_1 = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nconst app = express_1.default();\napp.use(express_1.default.static('public'));\napp.get('*', (req, res) => {\n  console.log('req.path', req.path);\n  const matchedRouter = react_router_config_1.matchRoutes(routes_1.routers, req.path);\n  console.log('matchedRouter', matchedRouter);\n  const loadData = matchedRouter[0].route.loadData;\n  console.log('loadData', loadData);\n  loadData().then(response => {\n    const data = response.data.data;\n    const content = server_1.renderToString(react_1.default.createElement(Layout_1.default, {\n      propsData: data,\n      req: req,\n      type: \"server\"\n    }));\n    res.send(\"<html>\\n    <head>\\n        <title>ssr</title>\\n        <body>\\n          <h2>hello ssr</h2>\\n          <div id=\\\"root\\\">\".concat(content, \"</div>\\n          <script src=\\\"/bundle.js\\\"></script>\\n        </body>\\n      </head>\\n    </html>\"));\n  });\n});\napp.listen(7012);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2luZGV4LnRzeD8yODdhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLE1BQU0sR0FBRyxHQUFHLG1CQUFaO0FBRUEsR0FBRyxDQUFDLEdBQUosQ0FBUSxrQkFBUSxNQUFSLENBQWUsUUFBZixDQUFSO0FBR0EsR0FBRyxDQUFDLEdBQUosQ0FBUSxHQUFSLEVBQWEsQ0FBQyxHQUFELEVBQU0sR0FBTixLQUFhO0FBQ3hCLFNBQU8sQ0FBQyxHQUFSLENBQVksVUFBWixFQUF1QixHQUFHLENBQUMsSUFBM0I7QUFDQSxRQUFNLGFBQWEsR0FBRyxrQ0FBWSxnQkFBWixFQUFxQixHQUFHLENBQUMsSUFBekIsQ0FBdEI7QUFDQSxTQUFPLENBQUMsR0FBUixDQUFZLGVBQVosRUFBNEIsYUFBNUI7QUFDQSxRQUFNLFFBQVEsR0FBRyxhQUFhLENBQUMsQ0FBRCxDQUFiLENBQWlCLEtBQWpCLENBQXVCLFFBQXhDO0FBQ0EsU0FBTyxDQUFDLEdBQVIsQ0FBWSxVQUFaLEVBQXVCLFFBQXZCO0FBQ0QsVUFBUSxHQUFHLElBQVgsQ0FBaUIsUUFBRCxJQUFhO0FBQzVCLFVBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFULENBQWMsSUFBM0I7QUFDRSxVQUFNLE9BQU8sR0FBRyx3QkFBZSw4QkFBQyxnQkFBRCxFQUFPO0FBQUMsZUFBUyxFQUFFLElBQVo7QUFBa0IsU0FBRyxFQUFFLEdBQXZCO0FBQTRCLFVBQUksRUFBQztBQUFqQyxLQUFQLENBQWYsQ0FBaEI7QUFDRixPQUFHLENBQUMsSUFBSixvSUFLeUIsT0FMekI7QUFVQSxHQWJEO0FBY0EsQ0FwQkQ7QUFzQkEsR0FBRyxDQUFDLE1BQUosQ0FBVyxJQUFYIiwiZmlsZSI6Ii4vc3JjL3NlcnZlci9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICdAL0xheW91dCc7XG5pbXBvcnQgeyByb3V0ZXJzIH0gZnJvbSAnLi4vcm91dGVzJztcbmltcG9ydCB7IG1hdGNoUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWNvbmZpZyc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpXG5cblxuYXBwLmdldCgnKicsIChyZXEsIHJlcykgPT4ge1xuICBjb25zb2xlLmxvZygncmVxLnBhdGgnLHJlcS5wYXRoKVxuICBjb25zdCBtYXRjaGVkUm91dGVyID0gbWF0Y2hSb3V0ZXMocm91dGVycywgcmVxLnBhdGgpO1xuICBjb25zb2xlLmxvZygnbWF0Y2hlZFJvdXRlcicsbWF0Y2hlZFJvdXRlcilcbiAgY29uc3QgbG9hZERhdGEgPSBtYXRjaGVkUm91dGVyWzBdLnJvdXRlLmxvYWREYXRhO1xuICBjb25zb2xlLmxvZygnbG9hZERhdGEnLGxvYWREYXRhKVxuXHRsb2FkRGF0YSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0Y29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICBjb25zdCBjb250ZW50ID0gcmVuZGVyVG9TdHJpbmcoPExheW91dCBwcm9wc0RhdGE9e2RhdGF9IHJlcT17cmVxfSB0eXBlPVwic2VydmVyXCIgLz4pO1xuXHRcdHJlcy5zZW5kKGA8aHRtbD5cbiAgICA8aGVhZD5cbiAgICAgICAgPHRpdGxlPnNzcjwvdGl0bGU+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxoMj5oZWxsbyBzc3I8L2gyPlxuICAgICAgICAgIDxkaXYgaWQ9XCJyb290XCI+JHtjb250ZW50fTwvZGl2PlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL2J1bmRsZS5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2hlYWQ+XG4gICAgPC9odG1sPmApO1xuXHR9KTtcbn0pO1xuXG5hcHAubGlzdGVuKDcwMTIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/server/index.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCI/MjJmZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJleHByZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCI/OTQzOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1kb20vc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-dom/server\n");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItY29uZmlnXCI/NTM0YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1yb3V0ZXItY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-router-config\n");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCI/NTNiOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1yb3V0ZXItZG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-router-dom\n");

/***/ })

/******/ });