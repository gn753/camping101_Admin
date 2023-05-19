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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var styles_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/global */ \"./styles/global.ts\");\n/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/theme */ \"./styles/theme.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layouts/Layout */ \"./components/layouts/Layout.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// const Layout = dynamic(() => import('components/layouts/Layout'), {\n//   ssr: false,\n// });\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [jwt, setJwt] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const page = localStorage.getItem(\"page\");\n        const localStorageData = localStorage.getItem(\"jwt\");\n        setJwt(localStorageData);\n        if (page) {\n            router.push(page);\n            return;\n        }\n        if (localStorageData === null) {\n            router.push(\"/login\");\n            return;\n        }\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        jwt,\n        router.asPath\n    ]);\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_0__.RecoilRoot, {\n        children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {\n            theme: styles_theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            children: [\n                /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {\n                    styles: styles_global__WEBPACK_IMPORTED_MODULE_1__.global\n                }, void 0, false, {\n                    fileName: \"/Users/taehyeon/Documents/vsc/side/camping101_Admin/pages/_app.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                !jwt && /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Component, {\n                    ...pageProps,\n                    jwt: jwt\n                }, void 0, false, {\n                    fileName: \"/Users/taehyeon/Documents/vsc/side/camping101_Admin/pages/_app.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 18\n                }, this),\n                jwt && /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    router: undefined,\n                    jwt: jwt,\n                    children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Component, {\n                        ...pageProps,\n                        jwt: jwt\n                    }, void 0, false, {\n                        fileName: \"/Users/taehyeon/Documents/vsc/side/camping101_Admin/pages/_app.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/taehyeon/Documents/vsc/side/camping101_Admin/pages/_app.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/taehyeon/Documents/vsc/side/camping101_Admin/pages/_app.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/taehyeon/Documents/vsc/side/camping101_Admin/pages/_app.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"LqLwVPkJ2YDpQngo8Z3wzd4YDkU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ087QUFDcUI7QUFFN0I7QUFDTjtBQUMyQjtBQUNwQjtBQUlVO0FBRWxELHNFQUFzRTtBQUN0RSxnQkFBZ0I7QUFDaEIsTUFBTTtBQUVOLFNBQVNTLElBQUksS0FBa0MsRUFBRTtRQUFwQyxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxHQUFsQzs7SUFDWCxNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTSxDQUFDTSxLQUFLQyxPQUFPLEdBQUdSLCtDQUFRQSxDQUFDLElBQUk7SUFFbkNELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNVSxPQUFPQyxhQUFhQyxPQUFPLENBQUM7UUFDbEMsTUFBTUMsbUJBQXdCRixhQUFhQyxPQUFPLENBQUM7UUFDbkRILE9BQU9JO1FBQ1AsSUFBSUgsTUFBTTtZQUNSSCxPQUFPTyxJQUFJLENBQUNKO1lBQ1o7UUFDRixDQUFDO1FBQ0QsSUFBSUcscUJBQXFCLElBQUksRUFBRTtZQUM3Qk4sT0FBT08sSUFBSSxDQUFDO1lBQ1o7UUFDRixDQUFDO0lBQ0QsdURBQXVEO0lBQ3pELEdBQUc7UUFBQ047UUFBS0QsT0FBT1EsTUFBTTtLQUFDO0lBRXZCLHFCQUNFLHVFQUFDbEIsOENBQVVBO2tCQUNULHFGQUFDRCx5REFBYUE7WUFBQ0csT0FBT0Esb0RBQUtBOzs4QkFDekIsdUVBQUNKLGtEQUFNQTtvQkFBQ3FCLFFBQVFsQixpREFBTUE7Ozs7OztnQkFDckIsQ0FBQ1UscUJBQU8sdUVBQUNIO29CQUFXLEdBQUdDLFNBQVM7b0JBQUVFLEtBQUtBOzs7Ozs7Z0JBQ3ZDQSxxQkFDQyx1RUFBQ0wsa0VBQU1BO29CQUFDSSxRQUFRVTtvQkFBV1QsS0FBS0E7OEJBQzlCLHFGQUFDSDt3QkFBVyxHQUFHQyxTQUFTO3dCQUFFRSxLQUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0zQztHQWhDU0o7O1FBQ1FGLGtEQUFTQTs7O0tBRGpCRTtBQWtDVCwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdsb2JhbCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyBSZWNvaWxSb290LCB1c2VSZWNvaWxTdGF0ZSwgdXNlUmVjb2lsVmFsdWUgfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IGdsb2JhbCB9IGZyb20gJ3N0eWxlcy9nbG9iYWwnO1xuaW1wb3J0IHRoZW1lIGZyb20gJ3N0eWxlcy90aGVtZSc7XG5pbXBvcnQgeyBTZXRTdGF0ZUFjdGlvbiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQgeyBpc0xvZ2luQXRvbSB9IGZyb20gJ2F0b20vbG9naW5BdG9tJztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2xvZ2luJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXRzL0xheW91dCc7XG5pbXBvcnQgeyBJbG9jYWxQcm9wcyB9IGZyb20gJ3R5cGVzJztcbi8vIGNvbnN0IExheW91dCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdjb21wb25lbnRzL2xheW91dHMvTGF5b3V0JyksIHtcbi8vICAgc3NyOiBmYWxzZSxcbi8vIH0pO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2p3dCwgc2V0Snd0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcGFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwYWdlJyk7XG4gICAgY29uc3QgbG9jYWxTdG9yYWdlRGF0YTogYW55ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2p3dCcpO1xuICAgIHNldEp3dChsb2NhbFN0b3JhZ2VEYXRhKTtcbiAgICBpZiAocGFnZSkge1xuICAgICAgcm91dGVyLnB1c2gocGFnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChsb2NhbFN0b3JhZ2VEYXRhID09PSBudWxsKSB7XG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2p3dCwgcm91dGVyLmFzUGF0aF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlY29pbFJvb3Q+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8R2xvYmFsIHN0eWxlcz17Z2xvYmFsfSAvPlxuICAgICAgICB7IWp3dCAmJiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGp3dD17and0fSAvPn1cbiAgICAgICAge2p3dCAmJiAoXG4gICAgICAgICAgPExheW91dCByb3V0ZXI9e3VuZGVmaW5lZH0gand0PXtqd3R9PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBqd3Q9e2p3dH0gLz5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKX1cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L1JlY29pbFJvb3Q+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJHbG9iYWwiLCJUaGVtZVByb3ZpZGVyIiwiUmVjb2lsUm9vdCIsImdsb2JhbCIsInRoZW1lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJMYXlvdXQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJqd3QiLCJzZXRKd3QiLCJwYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvY2FsU3RvcmFnZURhdGEiLCJwdXNoIiwiYXNQYXRoIiwic3R5bGVzIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});