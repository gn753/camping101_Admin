"use strict";
exports.id = 907;
exports.ids = [907];
exports.modules = {

/***/ 7907:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ axiosSetting)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const axiosSetting = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    headers: {
        "Content-Type": "application/json"
    }
});
axiosSetting.defaults.withCredentials = true;
axiosSetting.interceptors.request.use(function(config) {
    const user = localStorage.getItem("jwt");
    if (!user) {
        // config.headers.access_token = null;
        // config.headers.refresh_token = null;
        config.headers.Authorization = null;
        return config;
    }
    if (config.data) {
        const { access_token  } = JSON.parse(user);
        config.headers.Authorization = access_token;
        return config;
    }
    const { access_token , refresh_token  } = JSON.parse(user);
    config.headers.Authorization = access_token;
    // config.headers['access_token'] = access_token;
    // config.headers['refresh_token'] = refresh_token;
    return config;
});
axiosSetting.interceptors.response.use(function(response) {
    return response;
}, async function(error) {
    // error.response &&
    // if (error.error.response.status === 401) {
    //   localStorage.removeItem('jwt');
    // }
    if (error.response.status === 403) {
        let user = null;
        try {
            user = localStorage.getItem("jwt");
            const originalRequest = error.config;
            const { refresh_token  } = JSON.parse(user); //로컬스토리지에 있는 리프레쉬 토큰
            if (!refresh_token) {
                localStorage.removeItem("jwt");
            }
            const data = await axiosSetting.post("/api/signin/refresh", refresh_token, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (data) {
                const { access_token  } = data.data;
                originalRequest.headers.Authorization = access_token;
                // originalRequest.headers['access_token'] = access_token;
                // originalRequest.headers['Content-Type'] = 'application/json';
                const jwtData = {
                    access_token: access_token
                };
                localStorage.setItem("jwt", JSON.stringify(jwtData));
                return await axiosSetting.request(originalRequest);
            }
        } catch (error) {
            console.log("실행 리플레쉬 실패함요");
        }
        return Promise.reject(error);
    }
    return Promise.reject(error);
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;