"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var styles_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/global */ \"./styles/global.ts\");\n/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/theme */ \"./styles/theme.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login */ \"./pages/login/index.tsx\");\n/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layouts/Layout */ \"./components/layouts/Layout.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n// const Layout = dynamic(() => import('components/layouts/Layout'), {\n//   ssr: false,\n// });\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [jwt, setJwt] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    console.log(jwt);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const localStorageData = localStorage.getItem(\"jwt\");\n        setJwt(localStorageData);\n    }, [\n        jwt\n    ]);\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_0__.RecoilRoot, {\n        children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.ThemeProvider, {\n            theme: styles_theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            children: [\n                /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.Global, {\n                    styles: styles_global__WEBPACK_IMPORTED_MODULE_1__.global\n                }, void 0, false, {\n                    fileName: \"/Users/taehyeon/Documents/vsc/side/camping101_Admin/pages/_app.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                jwt === null ? /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_login__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    jwt: jwt\n                }, void 0, false, {\n                    fileName: \"/Users/taehyeon/Documents/vsc/side/camping101_Admin/pages/_app.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    router: undefined,\n                    jwt: jwt,\n                    children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Component, {\n                        ...pageProps,\n                        jwt: jwt\n                    }, void 0, false, {\n                        fileName: \"/Users/taehyeon/Documents/vsc/side/camping101_Admin/pages/_app.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/taehyeon/Documents/vsc/side/camping101_Admin/pages/_app.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/taehyeon/Documents/vsc/side/camping101_Admin/pages/_app.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/taehyeon/Documents/vsc/side/camping101_Admin/pages/_app.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"LqLwVPkJ2YDpQngo8Z3wzd4YDkU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNPO0FBQ3FCO0FBRTdCO0FBQ047QUFDMkI7QUFDcEI7QUFHWjtBQUNzQjtBQUNsRCxzRUFBc0U7QUFDdEUsZ0JBQWdCO0FBQ2hCLE1BQU07QUFFTixTQUFTVSxJQUFJLEtBQWtDLEVBQUU7UUFBcEMsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksR0FBbEM7O0lBQ1gsTUFBTUMsU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ08sS0FBS0MsT0FBTyxHQUFHVCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ25DVSxRQUFRQyxHQUFHLENBQUNIO0lBRVpULGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNYSxtQkFBd0JDLGFBQWFDLE9BQU8sQ0FBQztRQUNuREwsT0FBT0c7SUFDVCxHQUFHO1FBQUNKO0tBQUk7SUFFUixxQkFDRSx1RUFBQ1osOENBQVVBO2tCQUNULHFGQUFDRCx5REFBYUE7WUFBQ0csT0FBT0Esb0RBQUtBOzs4QkFDekIsdUVBQUNKLGtEQUFNQTtvQkFBQ3FCLFFBQVFsQixpREFBTUE7Ozs7OztnQkFDckJXLFFBQVEsSUFBSSxpQkFDWCx1RUFBQ04sOENBQUtBO29CQUFDTSxLQUFLQTs7Ozs7eUNBRVosdUVBQUNMLGtFQUFNQTtvQkFBQ0ksUUFBUVM7b0JBQVdSLEtBQUtBOzhCQUM5QixxRkFBQ0g7d0JBQVcsR0FBR0MsU0FBUzt3QkFBRUUsS0FBS0E7Ozs7Ozs7Ozs7d0JBRWxDOzs7Ozs7Ozs7Ozs7QUFJVDtHQXhCU0o7O1FBQ1FILGtEQUFTQTs7O0tBRGpCRztBQTBCVCwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdsb2JhbCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyBSZWNvaWxSb290LCB1c2VSZWNvaWxTdGF0ZSwgdXNlUmVjb2lsVmFsdWUgfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IGdsb2JhbCB9IGZyb20gJ3N0eWxlcy9nbG9iYWwnO1xuaW1wb3J0IHRoZW1lIGZyb20gJ3N0eWxlcy90aGVtZSc7XG5pbXBvcnQgeyBTZXRTdGF0ZUFjdGlvbiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQgeyBpc0xvZ2luQXRvbSB9IGZyb20gJ2F0b20vbG9naW5BdG9tJztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2xvZ2luJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXRzL0xheW91dCc7XG4vLyBjb25zdCBMYXlvdXQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnY29tcG9uZW50cy9sYXlvdXRzL0xheW91dCcpLCB7XG4vLyAgIHNzcjogZmFsc2UsXG4vLyB9KTtcblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtqd3QsIHNldEp3dF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc29sZS5sb2coand0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvY2FsU3RvcmFnZURhdGE6IGFueSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3QnKTtcbiAgICBzZXRKd3QobG9jYWxTdG9yYWdlRGF0YSk7XG4gIH0sIFtqd3RdKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWNvaWxSb290PlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPEdsb2JhbCBzdHlsZXM9e2dsb2JhbH0gLz5cbiAgICAgICAge2p3dCA9PT0gbnVsbCA/IChcbiAgICAgICAgICA8TG9naW4gand0PXtqd3R9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPExheW91dCByb3V0ZXI9e3VuZGVmaW5lZH0gand0PXtqd3R9PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBqd3Q9e2p3dH0gLz5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKX1cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L1JlY29pbFJvb3Q+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJHbG9iYWwiLCJUaGVtZVByb3ZpZGVyIiwiUmVjb2lsUm9vdCIsImdsb2JhbCIsInRoZW1lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJMb2dpbiIsIkxheW91dCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsImp3dCIsInNldEp3dCIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2VEYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0eWxlcyIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});