"use strict";
exports.id = 928;
exports.ids = [928];
exports.modules = {

/***/ 8893:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ UserFollowLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _lib_context_user_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5127);
/* harmony import */ var _components_ui_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9570);
/* harmony import */ var _components_user_user_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7993);
/* harmony import */ var _components_user_user_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8162);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components_user_user_nav__WEBPACK_IMPORTED_MODULE_4__, _components_user_user_header__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components_user_user_nav__WEBPACK_IMPORTED_MODULE_4__, _components_user_user_header__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function UserFollowLayout({ children  }) {
    const { user: userData , loading  } = (0,_lib_context_user_context__WEBPACK_IMPORTED_MODULE_2__/* .useUser */ .aF)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: !userData ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.section, {
            ..._components_user_user_header__WEBPACK_IMPORTED_MODULE_5__/* .variants */ .o,
            children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loading__WEBPACK_IMPORTED_MODULE_3__/* .Loading */ .g, {
                className: "mt-5 w-full"
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full p-8 text-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-3xl font-bold",
                        children: "This account doesn’t exist"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-light-secondary dark:text-dark-secondary",
                        children: "Try searching for another."
                    })
                ]
            })
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_nav__WEBPACK_IMPORTED_MODULE_4__/* .UserNav */ .T, {
                    follow: true
                }),
                children
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6809:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ UserFollow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var _lib_context_user_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5127);
/* harmony import */ var _lib_hooks_useCollection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3639);
/* harmony import */ var _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5342);
/* harmony import */ var _components_common_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(585);
/* harmony import */ var _components_user_user_cards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3779);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _lib_hooks_useCollection__WEBPACK_IMPORTED_MODULE_3__, _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_4__, _components_user_user_cards__WEBPACK_IMPORTED_MODULE_6__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _lib_hooks_useCollection__WEBPACK_IMPORTED_MODULE_3__, _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_4__, _components_user_user_cards__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function UserFollow({ type  }) {
    const { user  } = (0,_lib_context_user_context__WEBPACK_IMPORTED_MODULE_2__/* .useUser */ .aF)();
    const { name , username  } = user;
    const { data , loading  } = (0,_lib_hooks_useCollection__WEBPACK_IMPORTED_MODULE_3__/* .useCollection */ .K)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(_lib_firebase_collections__WEBPACK_IMPORTED_MODULE_4__/* .usersCollection */ .W$, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)(type === "following" ? "followers" : "following", "array-contains", user === null || user === void 0 ? void 0 : user.id)), {
        allowNull: true
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_seo__WEBPACK_IMPORTED_MODULE_5__/* .SEO */ .H, {
                title: `People ${type === "following" ? "followed by" : "following"} ${name} (@${username}) / Twitter`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_cards__WEBPACK_IMPORTED_MODULE_6__/* .UserCards */ .G, {
                follow: true,
                data: data,
                type: type,
                loading: loading
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;