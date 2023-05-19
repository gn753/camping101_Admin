"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 4069:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Em": () => (/* binding */ postingId),
/* harmony export */   "SY": () => (/* binding */ postingIdSelector)
/* harmony export */ });
/* unused harmony export isLoginAtom */
/* harmony import */ var api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7907);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([api_api__WEBPACK_IMPORTED_MODULE_0__]);
api_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const isLoginAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({
    key: "isLogin",
    default: true
});
const postingId = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({
    key: "userData",
    default: ""
});
const postingIdSelector = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.selector)({
    key: "postingId",
    get: async ()=>{
        const getNum = await api_api__WEBPACK_IMPORTED_MODULE_0__/* .axiosSetting.get */ .r.get("/api/member", {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return getNum.data;
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9888:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7907);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _atom_loginAtom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4069);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_api__WEBPACK_IMPORTED_MODULE_3__, _atom_loginAtom__WEBPACK_IMPORTED_MODULE_7__]);
([_api_api__WEBPACK_IMPORTED_MODULE_3__, _atom_loginAtom__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const url = "api/signin/mail";
const Login = ({ jwt  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const [userJwt, setUserJwt] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_atom_loginAtom__WEBPACK_IMPORTED_MODULE_7__/* .postingId */ .Em);
    const [selectedType, setSelectedType] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!jwt) return;
        if (jwt) {
            router.push("/");
        }
    }, [
        jwt,
        router
    ]);
    const onSubmit = async (body)=>{
        if (jwt) return;
        if (selectedType === "") return alert("주인 혹은 관리자를 선택해주세요");
        // 멤버 타입 설정 변수
        // const memberTypeVlue = selectedType === '주인' ? 'OWNER' : 'ADMIN';
        // body post 데이터 객체
        const loginData = {
            ...body
        };
        console.log(loginData);
        //const url = `api/signin/mail?email=${loginData.email}&memberType=${loginData.memberType}&password=${loginData.password}`;
        await _api_api__WEBPACK_IMPORTED_MODULE_3__/* .axiosSetting.post */ .r.post(url, body).then(async (e)=>{
            const jwtData = {
                access_token: e.headers.access_token,
                refresh_token: e.headers.refresh_token
            };
            localStorage.setItem("jwt", JSON.stringify(jwtData));
            localStorage.setItem("member", selectedType);
            const getNum = await _api_api__WEBPACK_IMPORTED_MODULE_3__/* .axiosSetting.get */ .r.get("/api/member", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: e.headers.access_token
                }
            });
            setUserJwt(getNum.data);
            router.push("/");
        }).catch((e)=>{
            router.push("/login");
            if (e.response.status === 401) {
                alert("아이디 혹은 비밀번호를 다시한번 확인해주세요");
            }
        });
    };
    const hanldeClick = (text)=>{
        setSelectedType(text);
    };
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LoginLayout, {
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FormTitle, {
                children: "캠핑 101 어드민"
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MemberTypeBox, {
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MemberDiv, {
                        selected: selectedType.includes("주인"),
                        onClick: ()=>hanldeClick("주인"),
                        children: "주인"
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MemberDiv, {
                        selected: selectedType.includes("관리자"),
                        onClick: ()=>hanldeClick("관리자"),
                        children: "관리자"
                    })
                ]
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                justify: "center",
                align: "middle",
                style: {
                    height: "auto",
                    width: "100%"
                },
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    lg: {
                        span: 6,
                        offset: 0
                    },
                    children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
                        initialValues: {
                            remember: true
                        },
                        onFinish: onSubmit,
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                name: "email",
                                rules: [
                                    {
                                        required: true,
                                        message: "이메일을 확인해주세요."
                                    }
                                ],
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                    placeholder: "이메일",
                                    autoComplete: "off",
                                    style: {
                                        height: "5vh",
                                        backgroundColor: "#d1d1d1"
                                    }
                                })
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                name: "password",
                                rules: [
                                    {
                                        required: true,
                                        message: "비밀번호를 확인해주세요."
                                    }
                                ],
                                style: {
                                    marginTop: 8
                                },
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                    type: "password",
                                    placeholder: "비밀번호",
                                    autoComplete: "off",
                                    style: {
                                        height: "5vh",
                                        backgroundColor: "#d1d1d1"
                                    }
                                })
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    type: "primary",
                                    htmlType: "submit",
                                    className: "login-form-button",
                                    style: {
                                        width: "100%",
                                        height: "40px",
                                        marginTop: 16,
                                        backgroundColor: "green",
                                        color: "#ffffff",
                                        borderRadius: "13px"
                                    },
                                    children: "Log in"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
const LoginLayout = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-top: 100px;
`;
const FormTitle = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`
  width: 100%;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin: 10px auto;
`;
const MemberTypeBox = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`
  width: 100%;
  margin: 20px auto;
  text-align: center;

  div {
    display: inline-block;
    cursor: pointer;
    margin: 0 20px;
    font-size: 20px;
  }
`;
const MemberDiv = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`
  font-weight: ${(props)=>props.selected ? "700" : "400"};
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [907], () => (__webpack_exec__(9888)));
module.exports = __webpack_exports__;

})();