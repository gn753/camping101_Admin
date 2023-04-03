"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/api.ts":
/*!********************!*\
  !*** ./api/api.ts ***!
  \********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"axiosSetting\": () => (/* binding */ axiosSetting)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst axiosSetting = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create();\naxiosSetting.defaults.baseURL = \"http://52.78.245.43:8080/\";\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ25CLE1BQU1DLGVBQWVELG9EQUFZLEdBQUc7QUFDM0NDLGFBQWFFLFFBQVEsQ0FBQ0MsT0FBTyxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FtcGluZzEwMV9hZG1pbi8uL2FwaS9hcGkudHM/NzJmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuZXhwb3J0IGNvbnN0IGF4aW9zU2V0dGluZyA9IGF4aW9zLmNyZWF0ZSgpO1xuYXhpb3NTZXR0aW5nLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovLzUyLjc4LjI0NS40Mzo4MDgwLyc7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJheGlvc1NldHRpbmciLCJjcmVhdGUiLCJkZWZhdWx0cyIsImJhc2VVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/api.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! api/api */ \"./api/api.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([api_api__WEBPACK_IMPORTED_MODULE_3__]);\napi_api__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst redirectTo = \"/\";\nconst Index = ()=>{\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        api();\n    }, []);\n    const api = async ()=>{\n        try {\n            const res = await api_api__WEBPACK_IMPORTED_MODULE_3__.axiosSetting.get(`/api/admin/member?memberType=ADMIN`);\n            console.log(res, \"성공\");\n        } catch (err) {\n            console.log(err, \"옴?\");\n        }\n    };\n    if (false) {}\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: \"메인입니다\"\n    }, void 0, false);\n};\n// Index.getInitialProps = async ({ ctx }: any) => {\n//   if (ctx && ctx.req) {\n//     ctx.res.statusCode = 302;\n//     ctx.res.setHeader('Location', redirectTo);\n//   }\n//   return { props: '' };\n// };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBRU47QUFDSztBQUN2QyxNQUFNRyxhQUFhO0FBRW5CLE1BQU1DLFFBQVEsSUFBTTtJQUNsQkgsZ0RBQVNBLENBQUMsSUFBTTtRQUNkSTtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1BLE1BQU0sVUFBWTtRQUN0QixJQUFJO1lBQ0YsTUFBTUMsTUFBTSxNQUFNSixxREFBZ0IsQ0FBQyxDQUFDLGtDQUFrQyxDQUFDO1lBQ3ZFTSxRQUFRQyxHQUFHLENBQUNILEtBQUs7UUFDbkIsRUFBRSxPQUFPSSxLQUFLO1lBQ1pGLFFBQVFDLEdBQUcsQ0FBQ0MsS0FBSztRQUNuQjtJQUNGO0lBRUEsSUFBSSxLQUFrQixFQUFhLEVBR2xDO0lBQ0QscUJBQU87a0JBQUU7O0FBQ1g7QUFFQSxvREFBb0Q7QUFDcEQsMEJBQTBCO0FBQzFCLGdDQUFnQztBQUNoQyxpREFBaUQ7QUFDakQsTUFBTTtBQUNOLDBCQUEwQjtBQUMxQixLQUFLO0FBRUwsaUVBQWVOLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW1waW5nMTAxX2FkbWluLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBheGlvc1NldHRpbmcgfSBmcm9tICdhcGkvYXBpJztcbmNvbnN0IHJlZGlyZWN0VG8gPSAnLyc7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFwaSgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgYXBpID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvc1NldHRpbmcuZ2V0KGAvYXBpL2FkbWluL21lbWJlcj9tZW1iZXJUeXBlPUFETUlOYCk7XG4gICAgICBjb25zb2xlLmxvZyhyZXMsICfshLHqs7UnKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVyciwgJ+yYtD8nKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgcm91dGVyLnB1c2gocmVkaXJlY3RUbyk7XG4gIH1cbiAgcmV0dXJuIDw+66mU7J247J6F64uI64ukPC8+O1xufTtcblxuLy8gSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4IH06IGFueSkgPT4ge1xuLy8gICBpZiAoY3R4ICYmIGN0eC5yZXEpIHtcbi8vICAgICBjdHgucmVzLnN0YXR1c0NvZGUgPSAzMDI7XG4vLyAgICAgY3R4LnJlcy5zZXRIZWFkZXIoJ0xvY2F0aW9uJywgcmVkaXJlY3RUbyk7XG4vLyAgIH1cbi8vICAgcmV0dXJuIHsgcHJvcHM6ICcnIH07XG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJheGlvc1NldHRpbmciLCJyZWRpcmVjdFRvIiwiSW5kZXgiLCJhcGkiLCJyZXMiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwicm91dGVyIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-dev-runtime");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();