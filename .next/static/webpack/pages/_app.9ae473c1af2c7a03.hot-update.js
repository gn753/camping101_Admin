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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var styles_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/global */ \"./styles/global.ts\");\n/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/theme */ \"./styles/theme.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layouts/Layout */ \"./components/layouts/Layout.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// const Layout = dynamic(() => import('components/layouts/Layout'), {\n//   ssr: false,\n// });\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [jwt, setJwt] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const page = localStorage.getItem(\"page\");\n        const localStorageData = localStorage.getItem(\"jwt\");\n        setJwt(localStorageData);\n        if (page) {\n            router.push(page);\n            return;\n        }\n        if (localStorageData === null) {\n            router.push(\"/login\");\n            return;\n        }\n    }, [\n        jwt\n    ]);\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_0__.RecoilRoot, {\n        children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {\n            theme: styles_theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            children: [\n                /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {\n                    styles: styles_global__WEBPACK_IMPORTED_MODULE_1__.global\n                }, void 0, false, {\n                    fileName: \"/Users/taehyeon/Documents/vsc/side/camping101_Admin/pages/_app.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                !jwt && /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Component, {\n                    ...pageProps,\n                    jwt: jwt\n                }, void 0, false, {\n                    fileName: \"/Users/taehyeon/Documents/vsc/side/camping101_Admin/pages/_app.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 18\n                }, this),\n                jwt && /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    router: undefined,\n                    jwt: jwt,\n                    children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Component, {\n                        ...pageProps,\n                        jwt: jwt\n                    }, void 0, false, {\n                        fileName: \"/Users/taehyeon/Documents/vsc/side/camping101_Admin/pages/_app.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/taehyeon/Documents/vsc/side/camping101_Admin/pages/_app.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/taehyeon/Documents/vsc/side/camping101_Admin/pages/_app.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/taehyeon/Documents/vsc/side/camping101_Admin/pages/_app.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"LqLwVPkJ2YDpQngo8Z3wzd4YDkU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ087QUFDcUI7QUFFN0I7QUFDTjtBQUMyQjtBQUNwQjtBQUlVO0FBRWxELHNFQUFzRTtBQUN0RSxnQkFBZ0I7QUFDaEIsTUFBTTtBQUVOLFNBQVNTLElBQUksS0FBa0MsRUFBRTtRQUFwQyxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxHQUFsQzs7SUFDWCxNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTSxDQUFDTSxLQUFLQyxPQUFPLEdBQUdSLCtDQUFRQSxDQUFDLElBQUk7SUFFbkNELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNVSxPQUFPQyxhQUFhQyxPQUFPLENBQUM7UUFDbEMsTUFBTUMsbUJBQXdCRixhQUFhQyxPQUFPLENBQUM7UUFDbkRILE9BQU9JO1FBQ1AsSUFBSUgsTUFBTTtZQUNSSCxPQUFPTyxJQUFJLENBQUNKO1lBQ1o7UUFDRixDQUFDO1FBQ0QsSUFBSUcscUJBQXFCLElBQUksRUFBRTtZQUM3Qk4sT0FBT08sSUFBSSxDQUFDO1lBQ1o7UUFDRixDQUFDO0lBQ0gsR0FBRztRQUFDTjtLQUFJO0lBRVIscUJBQ0UsdUVBQUNYLDhDQUFVQTtrQkFDVCxxRkFBQ0QseURBQWFBO1lBQUNHLE9BQU9BLG9EQUFLQTs7OEJBQ3pCLHVFQUFDSixrREFBTUE7b0JBQUNvQixRQUFRakIsaURBQU1BOzs7Ozs7Z0JBQ3JCLENBQUNVLHFCQUFPLHVFQUFDSDtvQkFBVyxHQUFHQyxTQUFTO29CQUFFRSxLQUFLQTs7Ozs7O2dCQUN2Q0EscUJBQ0MsdUVBQUNMLGtFQUFNQTtvQkFBQ0ksUUFBUVM7b0JBQVdSLEtBQUtBOzhCQUM5QixxRkFBQ0g7d0JBQVcsR0FBR0MsU0FBUzt3QkFBRUUsS0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0M7R0EvQlNKOztRQUNRRixrREFBU0E7OztLQURqQkU7QUFpQ1QsK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWwgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgUmVjb2lsUm9vdCwgdXNlUmVjb2lsU3RhdGUsIHVzZVJlY29pbFZhbHVlIH0gZnJvbSAncmVjb2lsJztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBnbG9iYWwgfSBmcm9tICdzdHlsZXMvZ2xvYmFsJztcbmltcG9ydCB0aGVtZSBmcm9tICdzdHlsZXMvdGhlbWUnO1xuaW1wb3J0IHsgU2V0U3RhdGVBY3Rpb24sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IHsgaXNMb2dpbkF0b20gfSBmcm9tICdhdG9tL2xvZ2luQXRvbSc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9sb2dpbic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0cy9MYXlvdXQnO1xuaW1wb3J0IHsgSWxvY2FsUHJvcHMgfSBmcm9tICd0eXBlcyc7XG4vLyBjb25zdCBMYXlvdXQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnY29tcG9uZW50cy9sYXlvdXRzL0xheW91dCcpLCB7XG4vLyAgIHNzcjogZmFsc2UsXG4vLyB9KTtcblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtqd3QsIHNldEp3dF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHBhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFnZScpO1xuICAgIGNvbnN0IGxvY2FsU3RvcmFnZURhdGE6IGFueSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3QnKTtcbiAgICBzZXRKd3QobG9jYWxTdG9yYWdlRGF0YSk7XG4gICAgaWYgKHBhZ2UpIHtcbiAgICAgIHJvdXRlci5wdXNoKHBhZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlRGF0YSA9PT0gbnVsbCkge1xuICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSwgW2p3dF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlY29pbFJvb3Q+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8R2xvYmFsIHN0eWxlcz17Z2xvYmFsfSAvPlxuICAgICAgICB7IWp3dCAmJiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGp3dD17and0fSAvPn1cbiAgICAgICAge2p3dCAmJiAoXG4gICAgICAgICAgPExheW91dCByb3V0ZXI9e3VuZGVmaW5lZH0gand0PXtqd3R9PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBqd3Q9e2p3dH0gLz5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKX1cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L1JlY29pbFJvb3Q+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJHbG9iYWwiLCJUaGVtZVByb3ZpZGVyIiwiUmVjb2lsUm9vdCIsImdsb2JhbCIsInRoZW1lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJMYXlvdXQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJqd3QiLCJzZXRKd3QiLCJwYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvY2FsU3RvcmFnZURhdGEiLCJwdXNoIiwic3R5bGVzIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});