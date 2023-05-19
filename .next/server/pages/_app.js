"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
;// CONCATENATED MODULE: ./styles/global.ts

const global = react_namespaceObject.css`
  * {
    margin: 0;
    padding: 0;
  }
  /* 기본 설정값 */
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  dl,
  dt,
  dd,
  table,
  th,
  td,
  form,
  fieldset,
  legend,
  input,
  textarea,
  a,
  button,
  select {
    margin: 0;
    padding: 0;
  }

  body,
  input,
  textarea,
  select,
  button,
  table {
    font-family: 🌈;
    font-size: 🌈;
    line-height: 🌈;
  }

  html,
  body {
    height: 100%;
  }

  body {
    position: relative;
    background-color: 🌈;
    color: 🌈;
    -webkit-text-size-adjust: none; /* 텍스트 크기 자동 조절 기능 : none */
  }

  textarea {
    width: 100%;
    resize: vertical;
    box-sizing: border-box;
  }

  img,
  fieldset,
  iframe {
    border: 0;
  }

  img {
    max-width: 100%;
    vertical-align: top;
  }

  ul,
  ol {
    list-style: none;
  }

  em,
  address {
    font-style: normal;
  }

  a {
    text-decoration: none;
  }

  table {
    width: 100%;
    table-layout: fixed;
    border-spacing: 0;
    border-collapse: collapse;
  }

  a:focus,
  input:focus,
  button:focus,
  textarea:focus {
    outline: none;
  }
  button {
    border: none;
    background: none;
    outline: none;
  }

  html,
  body {
    height: 100%; /* ✔️ Height on the parent will fix this issue. */
  }
  body {
    margin-top: 0px;
  }
  html,
  body,
  body > div:first-child,
  div#__next,
  div#__next > div {
    height: 100%;
  }
`;

;// CONCATENATED MODULE: ./styles/theme.ts
const theme = {};
/* harmony default export */ const styles_theme = (theme);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/layouts/Layout.tsx






const { Header , Content , Footer , Sider  } = external_antd_.Layout;
// const { SubMenu } = item;
function MenuLayout(props) {
    const member = localStorage.getItem("member");
    const menuItems = member === "주인" ? [
        {
            label: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/ownerCamp",
                children: "주인캠핑장 관리"
            }),
            key: "/ownerCamp"
        }
    ] : [
        {
            label: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/userInfo",
                children: "회원관리"
            }),
            key: "/userInfo"
        },
        {
            label: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/camp",
                children: "캠핑장 관리"
            }),
            key: "/camp"
        },
        {
            label: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/camplog",
                children: "캠프로그"
            }),
            key: "/camplog"
        },
        {
            label: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/tag",
                children: "추천태그"
            }),
            key: "/tag"
        }
    ];
    const [current, setCurrent] = (0,external_react_.useState)("/");
    const router = (0,router_.useRouter)();
    const [jwt, setJwt] = (0,external_react_.useState)("");
    const onMenu = (e)=>{
        setCurrent(e.key);
        localStorage.setItem("page", e.key);
        router.push(e.key);
    };
    (0,external_react_.useEffect)(()=>{
        const page = localStorage.getItem("page");
        // console.log(page, 'page');
        if (page) {
            setCurrent(page);
            // router.push(page);
            return;
        }
        const localStorageData = localStorage.getItem("jwt");
        setJwt(localStorageData);
    }, [
        jwt
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Layout, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Sider, {
                    width: 170,
                    style: {
                        overflow: "auto",
                        height: "100vh",
                        position: "fixed",
                        left: 0
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                                children: "캠핑101"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu, {
                            theme: "dark",
                            onClick: onMenu,
                            selectedKeys: [
                                current
                            ],
                            items: menuItems,
                            mode: "inline"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Layout, {
                    className: "site-layout",
                    style: {
                        marginLeft: 200
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Content, {
                            className: "site-layout-background",
                            style: {
                                margin: "24px 16px",
                                padding: 24,
                                height: "84vh"
                            },
                            children: props.children
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                            style: {
                                textAlign: "center",
                                position: "fixed",
                                bottom: 0,
                                left: 170,
                                right: 0,
                                border: "1px solid #dcdcdc"
                            },
                            children: "캠핑101"
                        })
                    ]
                })
            ]
        })
    });
}
const Logo = (styled_default()).div`
  height: 32px;
  margin: 16px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;

;// CONCATENATED MODULE: ./pages/_app.tsx









// const Layout = dynamic(() => import('components/layouts/Layout'), {
//   ssr: false,
// });
function App({ Component , pageProps  }) {
    const router = (0,router_.useRouter)();
    const [jwt, setJwt] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        const page = localStorage.getItem("page");
        if (page) {
            router.push(page);
        }
        if (jwt === null) {
            router.push("/login");
        }
        const localStorageData = localStorage.getItem("jwt");
        setJwt(localStorageData);
    }, [
        jwt,
        router,
        router.pathname
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_recoil_.RecoilRoot, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.ThemeProvider, {
            theme: styles_theme,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Global, {
                    styles: global
                }),
                !jwt && /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps,
                    jwt: jwt
                }),
                jwt && /*#__PURE__*/ jsx_runtime_.jsx(MenuLayout, {
                    router: undefined,
                    jwt: jwt,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps,
                        jwt: jwt
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 5193:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(4663)));
module.exports = __webpack_exports__;

})();