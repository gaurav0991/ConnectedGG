"use strict";
exports.id = 371;
exports.ids = [371];
exports.modules = {

/***/ 254:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ AsideTrends),
/* harmony export */   "o": () => (/* binding */ variants)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _lib_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1944);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6269);
/* harmony import */ var _lib_api_trends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9476);
/* harmony import */ var _components_ui_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6028);
/* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4266);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4685);
/* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3276);
/* harmony import */ var _components_ui_loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9570);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _lib_api_trends__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _lib_api_trends__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const variants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    transition: {
        duration: 0.8
    }
};
function AsideTrends({ inTrendsPage  }) {
    const { data , loading  } = (0,_lib_api_trends__WEBPACK_IMPORTED_MODULE_5__/* .useTrends */ .H)(1, inTrendsPage ? 100 : 10, {
        refreshInterval: 30000
    });
    const { trends , location  } = data ?? {};
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(!inTrendsPage && "hover-animation rounded-2xl bg-main-sidebar-background"),
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loading__WEBPACK_IMPORTED_MODULE_10__/* .Loading */ .g, {}) : trends ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("inner:px-4 inner:py-3", inTrendsPage && "mt-0.5"),
            ...variants,
            children: [
                !inTrendsPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "text-xl font-extrabold",
                    children: "Trends for you"
                }),
                trends.map(({ name , query , tweet_volume , url  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: url,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            className: "hover-animation accent-tab hover-card relative flex cursor-not-allowed flex-col gap-0.5",
                            onClick: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_11__/* .preventBubbling */ .Db)(),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute right-2 top-2",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                        className: "hover-animation group relative cursor-not-allowed p-2 hover:bg-accent-blue/10 focus-visible:bg-accent-blue/20 focus-visible:!ring-accent-blue/80",
                                        onClick: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_11__/* .preventBubbling */ .Db)(),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_7__/* .HeroIcon */ .e, {
                                                className: "h-5 w-5 text-light-secondary group-hover:text-accent-blue group-focus-visible:text-accent-blue dark:text-dark-secondary",
                                                iconName: "EllipsisHorizontalIcon"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_9__/* .ToolTip */ .e, {
                                                tip: "More"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "text-sm text-light-secondary dark:text-dark-secondary",
                                    children: [
                                        "Trending",
                                        " ",
                                        location === "Worldwide" ? "Worldwide" : `in ${location}`
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "font-bold",
                                    children: name
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "text-sm text-light-secondary dark:text-dark-secondary",
                                    children: [
                                        (0,_lib_date__WEBPACK_IMPORTED_MODULE_4__/* .formatNumber */ .u)(tweet_volume),
                                        " tweets"
                                    ]
                                })
                            ]
                        })
                    }, query)),
                !inTrendsPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/trends",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "custom-button accent-tab hover-card block w-full rounded-2xl rounded-t-none text-center text-main-accent",
                        children: "Show more"
                    })
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error__WEBPACK_IMPORTED_MODULE_6__/* .Error */ .j, {})
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* binding */ Aside)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/lib/context/window-context.tsx
var window_context = __webpack_require__(6625);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/components/ui/hero-icon.tsx
var hero_icon = __webpack_require__(4266);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(4685);
;// CONCATENATED MODULE: ./src/components/aside/search-bar.tsx






function SearchBar() {
    const { 0: inputValue , 1: setInputValue  } = (0,external_react_.useState)("");
    const { push  } = (0,router_.useRouter)();
    const inputRef = (0,external_react_.useRef)(null);
    const handleChange = ({ target: { value  }  })=>setInputValue(value);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (inputValue) void push(`/search?q=${inputValue}`);
    };
    const clearInputValue = (focus)=>{
        return ()=>{
            var ref, ref1;
            if (focus) (ref = inputRef.current) === null || ref === void 0 ? void 0 : ref.focus();
            else (ref1 = inputRef.current) === null || ref1 === void 0 ? void 0 : ref1.blur();
            setInputValue("");
        };
    };
    const handleEscape = ({ key  })=>{
        if (key === "Escape") clearInputValue()();
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("form", {
        className: "hover-animation sticky top-0 z-10 -my-2 bg-main-background py-2",
        onSubmit: handleSubmit,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
            className: "group flex items-center justify-between gap-4 rounded-full bg-main-search-background px-4 py-2 transition focus-within:bg-main-background focus-within:ring-2 focus-within:ring-main-accent",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(hero_icon/* HeroIcon */.e, {
                        className: "h-5 w-5 text-light-secondary transition-colors group-focus-within:text-main-accent dark:text-dark-secondary",
                        iconName: "MagnifyingGlassIcon"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    className: "peer flex-1 bg-transparent outline-none placeholder:text-light-secondary dark:placeholder:text-dark-secondary",
                    type: "text",
                    placeholder: "Search",
                    ref: inputRef,
                    value: inputValue,
                    onChange: handleChange,
                    onKeyUp: handleEscape
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* Button */.z, {
                    className: external_clsx_default()("accent-tab scale-50 bg-main-accent p-1 opacity-0 transition hover:brightness-90 disabled:opacity-0", inputValue && "focus:scale-100 focus:opacity-100 peer-focus:scale-100 peer-focus:opacity-100"),
                    onClick: clearInputValue(true),
                    disabled: !inputValue,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(hero_icon/* HeroIcon */.e, {
                        className: "h-3 w-3 stroke-white",
                        iconName: "XMarkIcon"
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/aside/aside-footer.tsx

const footerLinks = [
    [
        "Terms of Service",
        "https://twitter.com/tos"
    ],
    [
        "Privacy Policy",
        "https://twitter.com/privacy"
    ],
    [
        "Cookie Policy",
        "https://support.twitter.com/articles/20170514"
    ],
    [
        "Accessibility",
        "https://help.twitter.com/resources/accessibility"
    ],
    [
        "Ads Info",
        "https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html"
    ]
];
function AsideFooter() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "sticky top-16 flex flex-col gap-3 text-center text-sm text-light-secondary dark:text-dark-secondary",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "flex flex-wrap justify-center gap-2",
                children: footerLinks.map(([linkName, href])=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "custom-underline",
                        target: "_blank",
                        rel: "noreferrer",
                        href: href,
                        children: linkName
                    }, href))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "\xa9 2022 ConnectED, Inc."
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/aside/aside.tsx




function Aside({ children  }) {
    const { width  } = (0,window_context/* useWindow */.zY)();
    if (width < 1024) return null;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
        className: "flex w-96 flex-col gap-4 px-4 py-3 pt-1",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SearchBar, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(AsideFooter, {})
        ]
    });
}


/***/ }),

/***/ 6125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ Suggestions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1492);
/* harmony import */ var _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2108);
/* harmony import */ var _lib_hooks_useCollection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3639);
/* harmony import */ var _lib_hooks_useDocument__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6051);
/* harmony import */ var _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5342);
/* harmony import */ var _components_user_user_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7238);
/* harmony import */ var _components_ui_loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9570);
/* harmony import */ var _components_ui_error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6028);
/* harmony import */ var _aside_trends__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(254);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_5__, _lib_hooks_useCollection__WEBPACK_IMPORTED_MODULE_6__, _lib_hooks_useDocument__WEBPACK_IMPORTED_MODULE_7__, _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_8__, _components_user_user_card__WEBPACK_IMPORTED_MODULE_9__, _aside_trends__WEBPACK_IMPORTED_MODULE_12__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_5__, _lib_hooks_useCollection__WEBPACK_IMPORTED_MODULE_6__, _lib_hooks_useDocument__WEBPACK_IMPORTED_MODULE_7__, _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_8__, _components_user_user_card__WEBPACK_IMPORTED_MODULE_9__, _aside_trends__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function Suggestions() {
    const { randomSeed  } = (0,_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_5__/* .useAuth */ .aC)();
    const { data: adminData , loading: adminLoading  } = (0,_lib_hooks_useDocument__WEBPACK_IMPORTED_MODULE_7__/* .useDocument */ .k)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_lib_firebase_collections__WEBPACK_IMPORTED_MODULE_8__/* .usersCollection */ .W$, "Twt0A27bx9YcG4vu3RTsR7ifJzf2"), {
        allowNull: true
    });
    const { data: suggestionsData , loading: suggestionsLoading  } = (0,_lib_hooks_useCollection__WEBPACK_IMPORTED_MODULE_6__/* .useCollection */ .K)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)(_lib_firebase_collections__WEBPACK_IMPORTED_MODULE_8__/* .usersCollection */ .W$, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.where)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.documentId)(), ">=", randomSeed), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.orderBy)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.documentId)()), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.limit)(2)), {
        allowNull: true
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "hover-animation rounded-2xl bg-main-sidebar-background",
        children: adminLoading || suggestionsLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loading__WEBPACK_IMPORTED_MODULE_10__/* .Loading */ .g, {
            className: "flex h-52 items-center justify-center p-4"
        }) : suggestionsData ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
            className: "inner:px-4 inner:py-3",
            ..._aside_trends__WEBPACK_IMPORTED_MODULE_12__/* .variants */ .o,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "text-xl font-bold",
                    children: "Who to follow"
                }),
                adminData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_card__WEBPACK_IMPORTED_MODULE_9__/* .UserCard */ .O, {
                    ...adminData
                }),
                suggestionsData === null || suggestionsData === void 0 ? void 0 : suggestionsData.map((userData)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_user_user_card__WEBPACK_IMPORTED_MODULE_9__/* .UserCard */ .O, {
                        ...userData,
                        key: userData.id
                    })),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/people",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "custom-button accent-tab hover-card block w-full rounded-2xl rounded-t-none text-center text-main-accent",
                        children: "Show more"
                    })
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error__WEBPACK_IMPORTED_MODULE_11__/* .Error */ .j, {})
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ MainContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


function MainContainer({ children , className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(`hover-animation flex min-h-screen w-full max-w-xl flex-col border-x-0
         border-light-border pb-96 dark:border-dark-border xs:border-x`, className),
        children: children
    });
}


/***/ }),

/***/ 3258:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ MainHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4685);
/* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4266);
/* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3276);
/* harmony import */ var _components_sidebar_mobile_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8289);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_sidebar_mobile_sidebar__WEBPACK_IMPORTED_MODULE_5__]);
_components_sidebar_mobile_sidebar__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function MainHeader({ tip , title , children , iconName , className , disableSticky , useActionButton , useMobileSidebar , action  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("hover-animation even z-10 bg-main-background/60 px-4 py-2 backdrop-blur-md", !disableSticky && "sticky top-0", className ?? "flex items-center gap-6"),
        children: [
            useActionButton && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                className: "dark-bg-tab group relative p-2 hover:bg-light-primary/10 active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20",
                onClick: action,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_3__/* .HeroIcon */ .e, {
                        className: "h-5 w-5",
                        iconName: iconName ?? "ArrowLeftIcon"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_4__/* .ToolTip */ .e, {
                        tip: tip ?? "Back"
                    })
                ]
            }),
            title && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-8",
                children: [
                    useMobileSidebar && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sidebar_mobile_sidebar__WEBPACK_IMPORTED_MODULE_5__/* .MobileSidebar */ .n, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-xl font-bold",
                        children: title
                    }, title)
                ]
            }),
            children
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1400:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ ImagePreview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3040);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6269);
/* harmony import */ var _components_modal_image_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3644);
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9099);
/* harmony import */ var _components_ui_next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4664);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4685);
/* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4266);
/* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3276);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_modal_image_modal__WEBPACK_IMPORTED_MODULE_5__, _components_modal_modal__WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_modal_image_modal__WEBPACK_IMPORTED_MODULE_5__, _components_modal_modal__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const variants = {
    initial: {
        opacity: 0,
        scale: 0.5
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3
        }
    },
    exit: {
        opacity: 0,
        scale: 0.5
    },
    transition: {
        type: "spring",
        duration: 0.5
    }
};
const postImageBorderRadius = {
    1: [
        "rounded-2xl"
    ],
    2: [
        "rounded-tl-2xl rounded-bl-2xl",
        "rounded-tr-2xl rounded-br-2xl"
    ],
    3: [
        "rounded-tl-2xl rounded-bl-2xl",
        "rounded-tr-2xl",
        "rounded-br-2xl"
    ],
    4: [
        "rounded-tl-2xl",
        "rounded-tr-2xl",
        "rounded-bl-2xl",
        "rounded-br-2xl"
    ]
};
function ImagePreview({ tweet , viewTweet , previewCount , imagesPreview , removeImage  }) {
    const { 0: selectedIndex , 1: setSelectedIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: selectedImage , 1: setSelectedImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { open , openModal , closeModal  } = (0,_lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_4__/* .useModal */ .d)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const imageData = imagesPreview[selectedIndex];
        setSelectedImage(imageData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        selectedIndex
    ]);
    const handleSelectedImage = (index)=>()=>{
            setSelectedIndex(index);
            openModal();
        };
    const handleNextIndex = (type)=>()=>{
            const nextIndex = type === "prev" ? selectedIndex === 0 ? previewCount - 1 : selectedIndex - 1 : selectedIndex === previewCount - 1 ? 0 : selectedIndex + 1;
            setSelectedIndex(nextIndex);
        };
    const isTweet = tweet ?? viewTweet;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("grid grid-cols-2 grid-rows-2 rounded-2xl", viewTweet ? "h-[51vw] xs:h-[42vw] md:h-[305px]" : "h-[42vw] xs:h-[37vw] md:h-[271px]", isTweet ? "mt-2 gap-0.5" : "gap-3"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_modal__WEBPACK_IMPORTED_MODULE_6__/* .Modal */ .u_, {
                modalClassName: clsx__WEBPACK_IMPORTED_MODULE_3___default()("flex justify-center w-full items-center relative", isTweet && "h-full"),
                open: open,
                closeModal: closeModal,
                closePanelOnClick: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_image_modal__WEBPACK_IMPORTED_MODULE_5__/* .ImageModal */ .y, {
                    tweet: isTweet,
                    imageData: selectedImage,
                    previewCount: previewCount,
                    selectedIndex: selectedIndex,
                    handleNextIndex: handleNextIndex
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
                mode: "popLayout",
                children: imagesPreview.map(({ id , src , alt  }, index)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {
                        type: "button",
                        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("accent-tab relative transition-shadow", isTweet ? postImageBorderRadius[previewCount][index] : "rounded-2xl", {
                            "col-span-2 row-span-2": previewCount === 1,
                            "row-span-2": previewCount === 2 || index === 0 && previewCount === 3
                        }),
                        ...variants,
                        onClick: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_11__/* .preventBubbling */ .Db)(handleSelectedImage(index)),
                        layout: !isTweet ? true : false,
                        key: id,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_next_image__WEBPACK_IMPORTED_MODULE_7__/* .NextImage */ .o, {
                                className: "relative h-full w-full cursor-pointer transition hover:brightness-75 hover:duration-200",
                                imgClassName: clsx__WEBPACK_IMPORTED_MODULE_3___default()(isTweet ? postImageBorderRadius[previewCount][index] : "rounded-2xl"),
                                previewCount: previewCount,
                                layout: "fill",
                                src: src,
                                alt: alt,
                                useSkeleton: isTweet
                            }),
                            removeImage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                className: "group absolute top-0 left-0 translate-x-1 translate-y-1 bg-light-primary/75 p-1 backdrop-blur-sm hover:bg-image-preview-hover/75",
                                onClick: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_11__/* .preventBubbling */ .Db)(removeImage(id)),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_9__/* .HeroIcon */ .e, {
                                        className: "h-5 w-5 text-white",
                                        iconName: "XMarkIcon"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_10__/* .ToolTip */ .e, {
                                        className: "translate-y-2",
                                        tip: "Remove"
                                    })
                                ]
                            })
                        ]
                    }))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 926:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ InputAccentRadio)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_context_theme_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5655);
/* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4266);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_context_theme_context__WEBPACK_IMPORTED_MODULE_2__]);
_lib_context_theme_context__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const InputColors = {
    yellow: "bg-accent-yellow hover:ring-accent-yellow/10 active:ring-accent-yellow/20",
    blue: "bg-accent-blue hover:ring-accent-blue/10 active:ring-accent-blue/20",
    pink: "bg-accent-pink hover:ring-accent-pink/10 active:ring-accent-pink/20",
    purple: "bg-accent-purple hover:ring-accent-purple/10 active:ring-accent-purple/20",
    orange: "bg-accent-orange hover:ring-accent-orange/10 active:ring-accent-orange/20",
    green: "bg-accent-green hover:ring-accent-green/10 active:ring-accent-green/20"
};
function InputAccentRadio({ type  }) {
    const { accent , changeAccent  } = (0,_lib_context_theme_context__WEBPACK_IMPORTED_MODULE_2__/* .useTheme */ .Fg)();
    const bgColor = InputColors[type];
    const isChecked = type === accent;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(`hover-animation flex h-10 w-10 cursor-pointer items-center justify-center
         rounded-full hover:ring`, bgColor),
        htmlFor: type,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: "peer absolute h-0 w-0 opacity-0",
                id: type,
                type: "radio",
                name: "accent",
                value: type,
                checked: isChecked,
                onChange: changeAccent
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: "text-white peer-checked:inner:opacity-100",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_3__/* .HeroIcon */ .e, {
                    className: "h-6 w-6 opacity-0 transition-opacity duration-200",
                    iconName: "CheckIcon"
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1273:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M5": () => (/* binding */ InputForm),
/* harmony export */   "TW": () => (/* binding */ fromTop)
/* harmony export */ });
/* unused harmony export fromBottom */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(649);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3040);
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9099);
/* harmony import */ var _components_modal_action_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9253);
/* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4266);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4685);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _components_modal_modal__WEBPACK_IMPORTED_MODULE_5__, _components_modal_action_modal__WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _components_modal_modal__WEBPACK_IMPORTED_MODULE_5__, _components_modal_action_modal__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const variants = [
    {
        initial: {
            y: -25,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring"
            }
        }
    },
    {
        initial: {
            x: 25,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring"
            }
        }
    }
];
const [fromTop, fromBottom] = variants;
function InputForm({ modal , reply , formId , loading , visited , children , inputRef , replyModal , inputValue , isValidTweet , isUploadingImages , sendTweet , handleFocus , discardTweet , handleChange , handleImageUpload  }) {
    const { open , openModal , closeModal  } = (0,_lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_4__/* .useModal */ .d)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>handleShowHideNav(true), []);
    const handleKeyboardShortcut = ({ key , ctrlKey  })=>{
        if (!modal && key === "Escape") if (isValidTweet) {
            var ref;
            (ref = inputRef.current) === null || ref === void 0 ? void 0 : ref.blur();
            openModal();
        } else discardTweet();
        else if (ctrlKey && key === "Enter" && isValidTweet) void sendTweet();
    };
    const handleShowHideNav = (blur)=>()=>{
            const sidebar = document.getElementById("sidebar");
            if (!sidebar) return;
            if (blur) {
                setTimeout(()=>sidebar.style.opacity = "", 200);
                return;
            }
            if (window.innerWidth < 500) sidebar.style.opacity = "0";
        };
    const handleFormFocus = ()=>{
        handleShowHideNav()();
        handleFocus();
    };
    const handleClose = ()=>{
        discardTweet();
        closeModal();
    };
    const isVisibilityShown = visited && !reply && !replyModal && !loading;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex min-h-[48px] w-full flex-col justify-center gap-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_modal__WEBPACK_IMPORTED_MODULE_5__/* .Modal */ .u_, {
                modalClassName: "max-w-xs bg-main-background w-full p-8 rounded-2xl",
                open: open,
                closeModal: closeModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_action_modal__WEBPACK_IMPORTED_MODULE_6__/* .ActionModal */ .W, {
                    title: "Discard Post?",
                    description: "This can’t be undone and you’ll lose your draft.",
                    mainBtnClassName: "bg-accent-red hover:bg-accent-red/90 active:bg-accent-red/75",
                    mainBtnLabel: "Discard",
                    action: handleClose,
                    closeModal: closeModal
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-6",
                children: [
                    isVisibilityShown && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.button, {
                        type: "button",
                        className: "custom-button accent-tab accent-bg-tab flex cursor-not-allowed items-center gap-1 self-start border border-light-line-reply py-0 px-3 text-main-accent hover:bg-main-accent/10 active:bg-main-accent/20 dark:border-light-secondary",
                        ...fromTop,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "font-bold",
                                children: "Everyone"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_7__/* .HeroIcon */ .e, {
                                className: "h-4 w-4",
                                iconName: "ChevronDownIcon"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default()), {
                                id: formId,
                                className: "w-full min-w-0 resize-none bg-transparent text-xl outline-none placeholder:text-light-secondary dark:placeholder:text-dark-secondary",
                                value: inputValue,
                                placeholder: reply || replyModal ? "Post your reply" : "What's happening?",
                                onBlur: handleShowHideNav(true),
                                minRows: loading ? 1 : modal && !isUploadingImages ? 3 : 1,
                                maxRows: isUploadingImages ? 5 : 15,
                                onFocus: handleFormFocus,
                                onPaste: handleImageUpload,
                                onKeyUp: handleKeyboardShortcut,
                                onChange: handleChange,
                                ref: inputRef
                            }),
                            reply && !visited && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                className: "cursor-pointer bg-main-accent px-4 py-1.5 font-bold text-white opacity-50",
                                onClick: handleFocus,
                                children: "Reply"
                            })
                        ]
                    })
                ]
            }),
            children,
            isVisibilityShown && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                className: "flex border-b border-light-border pb-2 dark:border-dark-border",
                ...fromBottom,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    type: "button",
                    className: "custom-button accent-tab accent-bg-tab flex cursor-not-allowed items-center gap-1 py-0 px-3 text-main-accent hover:bg-main-accent/10 active:bg-main-accent/20",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_7__/* .HeroIcon */ .e, {
                            className: "h-4 w-4",
                            iconName: "GlobeAmericasIcon"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "font-bold",
                            children: "Everyone can reply"
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3562:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ InputOptions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4685);
/* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4266);
/* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3276);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7277);
/* harmony import */ var _progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1225);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _input__WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _input__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const options = [
    {
        name: "Media",
        iconName: "PhotoIcon",
        disabled: false
    },
    {
        name: "GIF",
        iconName: "GifIcon",
        disabled: true
    },
    {
        name: "Poll",
        iconName: "ChartBarIcon",
        disabled: true
    },
    {
        name: "Emoji",
        iconName: "FaceSmileIcon",
        disabled: true
    },
    {
        name: "Schedule",
        iconName: "CalendarDaysIcon",
        disabled: true
    },
    {
        name: "Location",
        iconName: "MapPinIcon",
        disabled: true
    }
];
function InputOptions({ reply , modal , inputLimit , inputLength , isValidTweet , isCharLimitExceeded , handleImageUpload  }) {
    const inputFileRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const onClick = ()=>{
        var ref;
        return (ref = inputFileRef.current) === null || ref === void 0 ? void 0 : ref.click();
    };
    let filteredOptions = options;
    if (reply) filteredOptions = filteredOptions.filter((_, index)=>![
            2,
            4
        ].includes(index));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        className: "flex justify-between",
        ..._input__WEBPACK_IMPORTED_MODULE_6__/* .variants */ .o,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex text-main-accent xs:[&>button:nth-child(n+6)]:hidden md:[&>button]:!block [&>button:nth-child(n+4)]:hidden",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: "hidden",
                        type: "file",
                        accept: "image/*",
                        onChange: handleImageUpload,
                        ref: inputFileRef,
                        multiple: true
                    }),
                    filteredOptions.map(({ name , iconName , disabled  }, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z, {
                            className: "accent-tab accent-bg-tab group relative rounded-full p-2 hover:bg-main-accent/10 active:bg-main-accent/20",
                            onClick: index === 0 ? onClick : undefined,
                            disabled: disabled,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_4__/* .HeroIcon */ .e, {
                                    className: "h-5 w-5",
                                    iconName: iconName
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_5__/* .ToolTip */ .e, {
                                    tip: name,
                                    modal: modal
                                })
                            ]
                        }, name))
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        className: "flex items-center gap-4",
                        animate: inputLength ? {
                            opacity: 1,
                            scale: 1
                        } : {
                            opacity: 0,
                            scale: 0
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_progress_bar__WEBPACK_IMPORTED_MODULE_7__/* .ProgressBar */ .k, {
                                modal: modal,
                                inputLimit: inputLimit,
                                inputLength: inputLength,
                                isCharLimitExceeded: isCharLimitExceeded
                            }),
                            !reply && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "hidden h-8 w-[1px] bg-[#B9CAD3] dark:bg-[#3E4144] xs:block"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z, {
                                        className: "group relative hidden rounded-full border border-light-line-reply p-[1px] text-main-accent dark:border-light-secondary xs:block",
                                        disabled: true,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_4__/* .HeroIcon */ .e, {
                                                className: "h-5 w-5",
                                                iconName: "PlusIcon"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_5__/* .ToolTip */ .e, {
                                                tip: "Add",
                                                modal: modal
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z, {
                        type: "submit",
                        className: "accent-tab bg-main-accent px-4 py-1.5 font-bold text-white enabled:hover:bg-main-accent/90 enabled:active:bg-main-accent/75",
                        disabled: !isValidTweet,
                        children: reply ? "Reply" : "Tweet"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9141:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ InputThemeRadio)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_context_theme_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5655);
/* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4266);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_context_theme_context__WEBPACK_IMPORTED_MODULE_2__]);
_lib_context_theme_context__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const inputThemeData = {
    light: {
        textColor: "text-black",
        backgroundColor: "bg-white",
        iconBorderColor: "border-[#B9CAD3]",
        hoverBackgroundColor: "[&:hover>div]:bg-light-secondary/10 [&:active>div]:bg-light-secondary/20"
    },
    dim: {
        textColor: "text-[#F7F9F9]",
        backgroundColor: "bg-[#15202B]",
        iconBorderColor: "border-[#5C6E7E]",
        hoverBackgroundColor: "[&:hover>div]:bg-light-secondary/10 [&:active>div]:bg-light-secondary/20"
    },
    dark: {
        textColor: "text-dark-primary",
        backgroundColor: "bg-black",
        iconBorderColor: "border-[#3E4144]",
        hoverBackgroundColor: "[&:hover>div]:bg-dark-primary/10 [&:active>div]:bg-dark-primary/20"
    }
};
function InputThemeRadio({ type , label  }) {
    const { theme , changeTheme  } = (0,_lib_context_theme_context__WEBPACK_IMPORTED_MODULE_2__/* .useTheme */ .Fg)();
    const { textColor , backgroundColor , iconBorderColor , hoverBackgroundColor  } = inputThemeData[type];
    const isChecked = type == theme;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(`flex cursor-pointer items-center gap-2 rounded p-3 font-bold ring-main-accent transition
         duration-200 [&:has(div>input:checked)]:ring-2`, textColor, backgroundColor, hoverBackgroundColor),
        htmlFor: type,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "hover-animation flex h-10 w-10 items-center justify-center rounded-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: "peer absolute h-0 w-0 opacity-0",
                        id: type,
                        type: "radio",
                        name: "theme",
                        value: type,
                        checked: isChecked,
                        onChange: changeTheme
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(`flex h-5 w-5 items-center justify-center rounded-full 
             border-2 border-[#B9CAD3] text-white transition
             duration-200 peer-checked:border-transparent
             peer-checked:bg-main-accent peer-checked:inner:opacity-100`, iconBorderColor),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_3__/* .HeroIcon */ .e, {
                            className: "h-full w-full p-0.5 opacity-0 transition-opacity duration-200",
                            iconName: "CheckIcon"
                        })
                    })
                ]
            }),
            label
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7277:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ Input),
/* harmony export */   "o": () => (/* binding */ variants)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6201);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1492);
/* harmony import */ var _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5342);
/* harmony import */ var _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7359);
/* harmony import */ var _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2108);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6269);
/* harmony import */ var _lib_validation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3521);
/* harmony import */ var _components_user_user_avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1708);
/* harmony import */ var _input_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1273);
/* harmony import */ var _image_preview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1400);
/* harmony import */ var _input_options__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3562);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_7__, _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_8__, _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_9__, _input_form__WEBPACK_IMPORTED_MODULE_11__, _image_preview__WEBPACK_IMPORTED_MODULE_12__, _input_options__WEBPACK_IMPORTED_MODULE_13__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_7__, _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_8__, _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_9__, _input_form__WEBPACK_IMPORTED_MODULE_11__, _image_preview__WEBPACK_IMPORTED_MODULE_12__, _input_options__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const variants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    }
};
function Input({ modal , reply , parent , disabled , children , replyModal , closeModal  }) {
    const { 0: selectedImages , 1: setSelectedImages  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: imagesPreview , 1: setImagesPreview  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: inputValue , 1: setInputValue  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: visited , 1: setVisited  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { user , isAdmin  } = (0,_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_9__/* .useAuth */ .aC)();
    const { name , username , photoURL  } = user;
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const previewCount = imagesPreview.length;
    const isUploadingImages = !!previewCount;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        var ref;
        if (modal) (ref = inputRef.current) === null || ref === void 0 ? void 0 : ref.focus();
        return cleanImage;
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    const sendTweet = async ()=>{
        var ref;
        (ref = inputRef.current) === null || ref === void 0 ? void 0 : ref.blur();
        setLoading(true);
        const isReplying = reply ?? replyModal;
        const userId = user === null || user === void 0 ? void 0 : user.id;
        const tweetData = {
            text: inputValue.trim() || null,
            parent: isReplying && parent ? parent : null,
            images: await (0,_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_8__/* .uploadImages */ .eg)(userId, selectedImages),
            userLikes: [],
            createdBy: userId,
            createdAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.serverTimestamp)(),
            updatedAt: null,
            userReplies: 0,
            userRetweets: []
        };
        await (0,_lib_utils__WEBPACK_IMPORTED_MODULE_14__/* .sleep */ ._v)(500);
        const [tweetRef] = await Promise.all([
            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.addDoc)(_lib_firebase_collections__WEBPACK_IMPORTED_MODULE_7__/* .tweetsCollection */ .VV, tweetData),
            (0,_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_8__/* .manageTotalTweets */ .$1)("increment", userId),
            tweetData.images && (0,_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_8__/* .manageTotalPhotos */ .iq)("increment", userId),
            isReplying && (0,_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_8__/* .manageReply */ .Mq)("increment", parent === null || parent === void 0 ? void 0 : parent.id)
        ]);
        const { id: tweetId  } = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDoc)(tweetRef);
        if (!modal && !replyModal) {
            discardTweet();
            setLoading(false);
        }
        if (closeModal) closeModal();
        react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.success(()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "flex gap-2",
                children: [
                    "Your Tweet was sent",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: `/tweet/${tweetId}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "custom-underline font-bold",
                            children: "View"
                        })
                    })
                ]
            }), {
            duration: 6000
        });
    };
    const handleImageUpload = (e)=>{
        var ref;
        const isClipboardEvent = "clipboardData" in e;
        if (isClipboardEvent) {
            const isPastingText = e.clipboardData.getData("text");
            if (isPastingText) return;
        }
        const files = isClipboardEvent ? e.clipboardData.files : e.target.files;
        const imagesData = (0,_lib_validation__WEBPACK_IMPORTED_MODULE_15__/* .getImagesData */ .t6)(files, previewCount);
        if (!imagesData) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.error("Please choose a GIF or photo up to 4");
            return;
        }
        const { imagesPreviewData , selectedImagesData  } = imagesData;
        setImagesPreview([
            ...imagesPreview,
            ...imagesPreviewData
        ]);
        setSelectedImages([
            ...selectedImages,
            ...selectedImagesData
        ]);
        (ref = inputRef.current) === null || ref === void 0 ? void 0 : ref.focus();
    };
    const removeImage = (targetId)=>()=>{
            setSelectedImages(selectedImages.filter(({ id  })=>id !== targetId));
            setImagesPreview(imagesPreview.filter(({ id  })=>id !== targetId));
            const { src  } = imagesPreview.find(({ id  })=>id === targetId);
            URL.revokeObjectURL(src);
        };
    const cleanImage = ()=>{
        imagesPreview.forEach(({ src  })=>URL.revokeObjectURL(src));
        setSelectedImages([]);
        setImagesPreview([]);
    };
    const discardTweet = ()=>{
        var ref;
        setInputValue("");
        setVisited(false);
        cleanImage();
        (ref = inputRef.current) === null || ref === void 0 ? void 0 : ref.blur();
    };
    const handleChange = ({ target: { value  }  })=>setInputValue(value);
    const handleSubmit = (e)=>{
        e.preventDefault();
        void sendTweet();
    };
    const handleFocus = ()=>setVisited(!loading);
    const formId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
    const inputLimit = isAdmin ? 560 : 280;
    const inputLength = inputValue.length;
    const isValidInput = !!inputValue.trim().length;
    const isCharLimitExceeded = inputLength > inputLimit;
    const isValidTweet = !isCharLimitExceeded && (isValidInput || isUploadingImages);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: clsx__WEBPACK_IMPORTED_MODULE_4___default()("flex flex-col", {
            "-mx-4": reply,
            "gap-2": replyModal,
            "cursor-not-allowed": disabled
        }),
        onSubmit: handleSubmit,
        children: [
            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.i, {
                className: "h-1 animate-pulse bg-main-accent",
                ...variants
            }),
            children,
            reply && visited && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.p, {
                className: "ml-[75px] -mb-2 mt-2 text-light-secondary dark:text-dark-secondary",
                ..._input_form__WEBPACK_IMPORTED_MODULE_11__/* .fromTop */ .TW,
                children: [
                    "Replying to",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: `/user/${parent === null || parent === void 0 ? void 0 : parent.username}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "custom-underline text-main-accent",
                            children: parent === null || parent === void 0 ? void 0 : parent.username
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                className: clsx__WEBPACK_IMPORTED_MODULE_4___default()("hover-animation grid w-full grid-cols-[auto,1fr] gap-3 px-4 py-3", reply ? "pt-3 pb-1" : replyModal ? "pt-0" : "border-b-2 border-light-border dark:border-dark-border", (disabled || loading) && "pointer-events-none opacity-50"),
                htmlFor: formId,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_avatar__WEBPACK_IMPORTED_MODULE_10__/* .UserAvatar */ .Y, {
                        src: photoURL,
                        alt: name,
                        username: username
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex w-full flex-col gap-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_input_form__WEBPACK_IMPORTED_MODULE_11__/* .InputForm */ .M5, {
                                modal: modal,
                                reply: reply,
                                formId: formId,
                                visited: visited,
                                loading: loading,
                                inputRef: inputRef,
                                replyModal: replyModal,
                                inputValue: inputValue,
                                isValidTweet: isValidTweet,
                                isUploadingImages: isUploadingImages,
                                sendTweet: sendTweet,
                                handleFocus: handleFocus,
                                discardTweet: discardTweet,
                                handleChange: handleChange,
                                handleImageUpload: handleImageUpload,
                                children: isUploadingImages && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_image_preview__WEBPACK_IMPORTED_MODULE_12__/* .ImagePreview */ .e, {
                                    imagesPreview: imagesPreview,
                                    previewCount: previewCount,
                                    removeImage: !loading ? removeImage : undefined
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {
                                initial: false,
                                children: (reply ? reply && visited && !loading : !loading) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_input_options__WEBPACK_IMPORTED_MODULE_13__/* .InputOptions */ .S, {
                                    reply: reply,
                                    modal: modal,
                                    inputLimit: inputLimit,
                                    inputLength: inputLength,
                                    isValidTweet: isValidTweet,
                                    isCharLimitExceeded: isCharLimitExceeded,
                                    handleImageUpload: handleImageUpload
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ ProgressBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3276);



const baseOffset = [
    56.5487,
    87.9646
];
const circleStyles = [
    {
        container: null,
        viewBox: "0 0 20 20",
        stroke: "stroke-main-accent",
        r: 9
    },
    {
        container: "scale-150",
        viewBox: "0 0 30 30",
        stroke: "stroke-accent-yellow",
        r: 14
    }
];
function ProgressBar({ modal , inputLimit , inputLength , isCharLimitExceeded  }) {
    const isCloseToLimit = inputLength >= inputLimit - 20;
    const baseCircle = baseOffset[+isCloseToLimit];
    const inputPercentage = inputLength / inputLimit * 100;
    const circleLength = baseCircle - baseCircle * inputPercentage / 100;
    const remainingCharacters = inputLimit - inputLength;
    const isHittingCharLimit = remainingCharacters <= 0;
    const { container , viewBox , stroke , r  } = circleStyles[+isCloseToLimit];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: "group relative cursor-pointer outline-none",
        type: "button",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("flex h-5 w-5 -rotate-90 items-center justify-center transition", container, remainingCharacters <= -10 && "opacity-0"),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                    className: "overflow-visible",
                    width: "100%",
                    height: "100%",
                    viewBox: viewBox,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                            className: "stroke-light-border dark:stroke-dark-border",
                            cx: "50%",
                            cy: "50%",
                            fill: "none",
                            strokeWidth: "2",
                            r: r
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("transition-colors", isHittingCharLimit ? "stroke-accent-red" : stroke),
                            cx: "50%",
                            cy: "50%",
                            fill: "none",
                            strokeWidth: "2",
                            r: r,
                            strokeLinecap: "round",
                            style: {
                                strokeDashoffset: !isCharLimitExceeded ? circleLength : 0,
                                strokeDasharray: baseCircle
                            }
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%]
           scale-50 text-xs opacity-0`, {
                    "scale-100 opacity-100 transition": isCloseToLimit,
                    "text-accent-red": isHittingCharLimit
                }),
                children: remainingCharacters
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_2__/* .ToolTip */ .e, {
                tip: isCharLimitExceeded ? "You have exceeded the character limit" : `${remainingCharacters} characters remaining`,
                modal: modal
            })
        ]
    });
}


/***/ }),

/***/ 3238:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IP": () => (/* binding */ ProtectedLayout),
/* harmony export */   "OS": () => (/* binding */ TrendsLayout),
/* harmony export */   "Os": () => (/* binding */ HomeLayout),
/* harmony export */   "rf": () => (/* binding */ UserLayout),
/* harmony export */   "vK": () => (/* binding */ PeopleLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_hooks_useRequireAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2843);
/* harmony import */ var _components_aside_aside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2965);
/* harmony import */ var _components_aside_aside_trends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(254);
/* harmony import */ var _components_aside_suggestions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6125);
/* harmony import */ var _components_common_placeholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(643);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_hooks_useRequireAuth__WEBPACK_IMPORTED_MODULE_1__, _components_aside_aside_trends__WEBPACK_IMPORTED_MODULE_3__, _components_aside_suggestions__WEBPACK_IMPORTED_MODULE_4__]);
([_lib_hooks_useRequireAuth__WEBPACK_IMPORTED_MODULE_1__, _components_aside_aside_trends__WEBPACK_IMPORTED_MODULE_3__, _components_aside_suggestions__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function ProtectedLayout({ children  }) {
    const user = (0,_lib_hooks_useRequireAuth__WEBPACK_IMPORTED_MODULE_1__/* .useRequireAuth */ .Q)();
    if (!user) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_placeholder__WEBPACK_IMPORTED_MODULE_5__/* .Placeholder */ .V, {});
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
}
function HomeLayout({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            children,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_aside_aside__WEBPACK_IMPORTED_MODULE_2__/* .Aside */ .x, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_aside_aside_trends__WEBPACK_IMPORTED_MODULE_3__/* .AsideTrends */ .j, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_aside_suggestions__WEBPACK_IMPORTED_MODULE_4__/* .Suggestions */ .D, {})
                ]
            })
        ]
    });
}
function UserLayout({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            children,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_aside_aside__WEBPACK_IMPORTED_MODULE_2__/* .Aside */ .x, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_aside_suggestions__WEBPACK_IMPORTED_MODULE_4__/* .Suggestions */ .D, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_aside_aside_trends__WEBPACK_IMPORTED_MODULE_3__/* .AsideTrends */ .j, {})
                ]
            })
        ]
    });
}
function TrendsLayout({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_aside_aside__WEBPACK_IMPORTED_MODULE_2__/* .Aside */ .x, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_aside_suggestions__WEBPACK_IMPORTED_MODULE_4__/* .Suggestions */ .D, {})
            })
        ]
    });
}
function PeopleLayout({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_aside_aside__WEBPACK_IMPORTED_MODULE_2__/* .Aside */ .x, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_aside_aside_trends__WEBPACK_IMPORTED_MODULE_3__/* .AsideTrends */ .j, {})
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4415:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MainLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6201);
/* harmony import */ var _lib_context_window_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6625);
/* harmony import */ var _components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8283);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_2__, _components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_4__]);
([swr__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_2__, _components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const toastOptions = {
    style: {
        color: "white",
        borderRadius: "4px",
        backgroundColor: "rgb(var(--main-accent))"
    },
    success: {
        duration: 4000
    }
};
function MainLayout({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex w-full justify-center gap-0 lg:gap-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_lib_context_window_context__WEBPACK_IMPORTED_MODULE_3__/* .WindowContextProvider */ .En, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_4__/* .Sidebar */ .Y, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swr__WEBPACK_IMPORTED_MODULE_1__.SWRConfig, {
                        children: children
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {
                position: "bottom-center",
                toastOptions: toastOptions,
                containerClassName: "mb-12 xs:mb-0"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9253:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ ActionModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4685);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_3__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function ActionModal({ title , useIcon , description , mainBtnLabel , focusOnMainBtn , mainBtnClassName , secondaryBtnLabel , secondaryBtnClassName , action , closeModal  }) {
    const mainBtn = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!focusOnMainBtn) return;
        const timeoutId = setTimeout(()=>{
            var ref;
            return (ref = mainBtn.current) === null || ref === void 0 ? void 0 : ref.focus();
        }, 50);
        return ()=>clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col gap-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [
                    useIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "mx-auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "assets/logo2.jpeg"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Title, {
                                className: "text-xl font-bold",
                                children: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Description, {
                                className: "text-light-secondary dark:text-dark-secondary",
                                children: description
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-3 inner:py-2 inner:font-bold",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("custom-button main-tab text-white", mainBtnClassName ?? `bg-light-primary hover:bg-light-primary/90 focus-visible:bg-light-primary/90 active:bg-light-primary/80
               dark:bg-light-border dark:text-light-primary dark:hover:bg-light-border/90
               dark:focus-visible:bg-light-border/90 dark:active:bg-light-border/75`),
                        ref: mainBtn,
                        onClick: action,
                        children: mainBtnLabel
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("border border-light-line-reply dark:border-light-secondary dark:text-light-border", secondaryBtnClassName ?? `hover:bg-light-primary/10 focus-visible:bg-light-primary/10 active:bg-light-primary/20
               dark:hover:bg-light-border/10 dark:focus-visible:bg-light-border/10 dark:active:bg-light-border/20`),
                        onClick: closeModal,
                        children: secondaryBtnLabel ?? "Cancel"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 330:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ DisplayModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_user_user_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1708);
/* harmony import */ var _components_user_user_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4531);
/* harmony import */ var _components_input_input_theme_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9141);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4685);
/* harmony import */ var _components_input_input_accent_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_input_input_theme_radio__WEBPACK_IMPORTED_MODULE_3__, _components_input_input_accent_radio__WEBPACK_IMPORTED_MODULE_5__]);
([_components_input_input_theme_radio__WEBPACK_IMPORTED_MODULE_3__, _components_input_input_accent_radio__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const themes = [
    [
        "light",
        "Default"
    ],
    [
        "dim",
        "Dim"
    ],
    [
        "dark",
        "Lights out"
    ]
];
const accentsColor = [
    "blue",
    "yellow",
    "pink",
    "purple",
    "orange",
    "green"
];
function DisplayModal({ closeModal  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-center gap-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-3 text-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-2xl font-bold",
                        children: "Customize your view"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-light-secondary dark:text-dark-secondary",
                        children: "These settings affect all the Twitter accounts on this browser."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                className: "hover-animation mx-8 rounded-2xl border border-light-border px-4 py-3 dark:border-dark-border",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid grid-cols-[auto,1fr] gap-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_avatar__WEBPACK_IMPORTED_MODULE_1__/* .UserAvatar */ .Y, {
                            src: "/assets/twitter-avatar.jpg",
                            alt: "Twitter"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex gap-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_name__WEBPACK_IMPORTED_MODULE_2__/* .UserName */ .v, {
                                            verified: true,
                                            name: "Twitter"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-light-secondary dark:text-dark-secondary",
                                            children: "@twitter"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex gap-1 text-light-secondary dark:text-dark-secondary",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    children: "\xb7"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "26m"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "whitespace-pre-line break-words",
                                    children: [
                                        "At the heart of Twitter are short messages called Tweets — just like this one — which can include photos, videos, links, text, hashtags, and mentions like",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-main-accent",
                                            children: "@twitter"
                                        }),
                                        "."
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-full flex-col gap-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-sm font-bold text-light-secondary dark:text-dark-secondary",
                        children: "Color"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hover-animation grid grid-cols-3 grid-rows-2 justify-items-center gap-3 rounded-2xl bg-main-sidebar-background py-3 xs:grid-cols-6 xs:grid-rows-none",
                        children: accentsColor.map((accentColor)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_input_input_accent_radio__WEBPACK_IMPORTED_MODULE_5__/* .InputAccentRadio */ .x, {
                                type: accentColor
                            }, accentColor))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-full flex-col gap-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-sm font-bold text-light-secondary dark:text-dark-secondary",
                        children: "Background"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hover-animation grid grid-rows-3 gap-3 rounded-2xl bg-main-sidebar-background px-4 py-3 xs:grid-cols-3 xs:grid-rows-none",
                        children: themes.map(([themeType, label])=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_input_input_theme_radio__WEBPACK_IMPORTED_MODULE_3__/* .InputThemeRadio */ .f, {
                                type: themeType,
                                label: label
                            }, themeType))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                className: "bg-main-accent px-4 py-1.5 font-bold text-white hover:bg-main-accent/90 active:bg-main-accent/75",
                onClick: closeModal,
                children: "Done"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3644:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ ImageModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6269);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4685);
/* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4266);
/* harmony import */ var _components_ui_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9570);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9099);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _modal__WEBPACK_IMPORTED_MODULE_7__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _modal__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react-hooks/exhaustive-deps */ 









const arrowButtons = [
    [
        "prev",
        null,
        "ArrowLeftIcon"
    ],
    [
        "next",
        "order-1",
        "ArrowRightIcon"
    ]
];
function ImageModal({ tweet , imageData , previewCount , selectedIndex , handleNextIndex  }) {
    const { 0: indexes , 1: setIndexes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { src , alt  } = imageData;
    const requireArrows = handleNextIndex && previewCount > 1;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (tweet && selectedIndex !== undefined && !indexes.includes(selectedIndex)) {
            setLoading(true);
            setIndexes([
                ...indexes,
                selectedIndex
            ]);
        }
        const image = new Image();
        image.src = src;
        image.onload = ()=>setLoading(false);
    }, [
        ...tweet && previewCount > 1 ? [
            src
        ] : []
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!requireArrows) return;
        const handleKeyDown = ({ key  })=>{
            const callback = key === "ArrowLeft" ? handleNextIndex("prev") : key === "ArrowRight" ? handleNextIndex("next") : null;
            if (callback) callback();
        };
        document.addEventListener("keydown", handleKeyDown);
        return ()=>document.removeEventListener("keydown", handleKeyDown);
    }, [
        handleNextIndex
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            requireArrows && arrowButtons.map(([name, className, iconName])=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(`absolute z-10 hover:bg-light-primary/10 active:bg-light-primary/20
               dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20`, name === "prev" ? "left-2" : "right-2", className),
                    onClick: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_8__/* .preventBubbling */ .Db)(handleNextIndex(name)),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_5__/* .HeroIcon */ .e, {
                        iconName: iconName
                    })
                }, name)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
                mode: "wait",
                children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: "mx-auto",
                    ..._modal__WEBPACK_IMPORTED_MODULE_7__/* .backdrop */ .zi,
                    exit: tweet ? _modal__WEBPACK_IMPORTED_MODULE_7__/* .backdrop.exit */ .zi.exit : undefined,
                    transition: {
                        duration: 0.15
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loading__WEBPACK_IMPORTED_MODULE_6__/* .Loading */ .g, {
                        iconClassName: "w-20 h-20"
                    })
                }) : /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: "relative mx-auto",
                    ..._modal__WEBPACK_IMPORTED_MODULE_7__/* .modal */ .oC,
                    key: src,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("picture", {
                            className: "group relative flex max-w-3xl",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                    srcSet: src,
                                    type: "image/*"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "max-h-[75vh] rounded-md object-contain md:max-h-[80vh]",
                                    src: src,
                                    alt: alt,
                                    onClick: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_8__/* .preventBubbling */ .Db)()
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "trim-alt accent-tab absolute bottom-0 right-0 mx-2 mb-2 translate-y-4 rounded-md bg-main-background/40 px-2 py-1 text-sm text-light-primary/80 opacity-0 transition hover:bg-main-accent hover:text-white focus-visible:translate-y-0 focus-visible:bg-main-accent focus-visible:text-white focus-visible:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 dark:text-dark-primary/80",
                                    href: src,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    onClick: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_8__/* .preventBubbling */ .Db)(null, true),
                                    children: alt
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "custom-underline absolute left-0 -bottom-7 font-medium text-light-primary/80 decoration-transparent underline-offset-2 transition hover:text-light-primary hover:underline hover:decoration-light-primary focus-visible:text-light-primary dark:text-dark-primary/80 dark:hover:text-dark-primary dark:hover:decoration-dark-primary dark:focus-visible:text-dark-primary",
                            href: src,
                            target: "_blank",
                            rel: "noreferrer",
                            onClick: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_8__/* .preventBubbling */ .Db)(null, true),
                            children: "Open original"
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8539:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ MobileSidebarModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2108);
/* harmony import */ var _lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3040);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4685);
/* harmony import */ var _components_user_user_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1708);
/* harmony import */ var _components_ui_next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4664);
/* harmony import */ var _components_user_user_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4531);
/* harmony import */ var _components_user_user_username__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7876);
/* harmony import */ var _components_home_main_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3258);
/* harmony import */ var _components_sidebar_mobile_sidebar_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3715);
/* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4266);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9099);
/* harmony import */ var _action_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9253);
/* harmony import */ var _display_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(330);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_3__, _components_home_main_header__WEBPACK_IMPORTED_MODULE_10__, _modal__WEBPACK_IMPORTED_MODULE_13__, _action_modal__WEBPACK_IMPORTED_MODULE_14__, _display_modal__WEBPACK_IMPORTED_MODULE_15__]);
([_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_3__, _components_home_main_header__WEBPACK_IMPORTED_MODULE_10__, _modal__WEBPACK_IMPORTED_MODULE_13__, _action_modal__WEBPACK_IMPORTED_MODULE_14__, _display_modal__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const topNavLinks = [
    {
        href: "/trends",
        linkName: "Topics",
        iconName: "ChatBubbleBottomCenterTextIcon"
    },
    {
        href: "/bookmarks",
        linkName: "Bookmarks",
        iconName: "BookmarkIcon"
    },
    {
        href: "/lists",
        linkName: "Lists",
        iconName: "Bars3BottomLeftIcon",
        disabled: true
    },
    {
        href: "/people",
        linkName: "Twitter Circle",
        iconName: "UserGroupIcon"
    }
];
const bottomNavLinks = [
    {
        href: "/settings",
        linkName: "Settings and privacy",
        iconName: "Cog8ToothIcon",
        disabled: true
    },
    {
        href: "/help-center",
        linkName: "Help center",
        iconName: "QuestionMarkCircleIcon",
        disabled: true
    }
];
function MobileSidebarModal({ name , username , verified , photoURL , following , followers , coverPhotoURL , closeModal  }) {
    const { signOut  } = (0,_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .aC)();
    const { open: displayOpen , openModal: displayOpenModal , closeModal: displayCloseModal  } = (0,_lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_4__/* .useModal */ .d)();
    const { open: logOutOpen , openModal: logOutOpenModal , closeModal: logOutCloseModal  } = (0,_lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_4__/* .useModal */ .d)();
    const allStats = [
        [
            "following",
            "Following",
            following.length
        ],
        [
            "followers",
            "Followers",
            followers.length
        ]
    ];
    const userLink = `/user/${username}`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal__WEBPACK_IMPORTED_MODULE_13__/* .Modal */ .u_, {
                className: "items-center justify-center xs:flex",
                modalClassName: "max-w-xl bg-main-background w-full p-8 rounded-2xl hover-animation",
                open: displayOpen,
                closeModal: displayCloseModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_display_modal__WEBPACK_IMPORTED_MODULE_15__/* .DisplayModal */ .J, {
                    closeModal: displayCloseModal
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal__WEBPACK_IMPORTED_MODULE_13__/* .Modal */ .u_, {
                modalClassName: "max-w-xs bg-main-background w-full p-8 rounded-2xl",
                open: logOutOpen,
                closeModal: logOutCloseModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_action_modal__WEBPACK_IMPORTED_MODULE_14__/* .ActionModal */ .W, {
                    useIcon: true,
                    focusOnMainBtn: true,
                    title: "Log out of ConnectED?",
                    description: "You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account.",
                    mainBtnLabel: "Log out",
                    action: signOut,
                    closeModal: logOutCloseModal
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_main_header__WEBPACK_IMPORTED_MODULE_10__/* .MainHeader */ .c, {
                useActionButton: true,
                className: "flex flex-row-reverse items-center justify-between",
                iconName: "XMarkIcon",
                title: "Account info",
                tip: "Close",
                action: closeModal
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "mt-0.5 flex flex-col gap-2 px-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: userLink,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "blur-picture relative h-20 rounded-md",
                            children: coverPhotoURL ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_next_image__WEBPACK_IMPORTED_MODULE_7__/* .NextImage */ .o, {
                                useSkeleton: true,
                                imgClassName: "rounded-md",
                                src: coverPhotoURL,
                                alt: name,
                                layout: "fill"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-full rounded-md bg-light-line-reply dark:bg-dark-line-reply"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mb-8 ml-2 -mt-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_avatar__WEBPACK_IMPORTED_MODULE_6__/* .UserAvatar */ .Y, {
                            className: "absolute -translate-y-1/2 bg-main-background p-1 hover:brightness-100 [&>figure>span]:[transition:200ms] [&:hover>figure>span]:brightness-75",
                            username: username,
                            src: photoURL,
                            alt: name,
                            size: 60
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col gap-4 rounded-xl bg-main-sidebar-background p-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_name__WEBPACK_IMPORTED_MODULE_8__/* .UserName */ .v, {
                                        name: name,
                                        username: username,
                                        verified: verified,
                                        className: "-mb-1"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_username__WEBPACK_IMPORTED_MODULE_9__/* .UserUsername */ .a, {
                                        username: username
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-secondary flex gap-4",
                                children: allStats.map(([id, label, stat])=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: `${userLink}/${id}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            className: "hover-animation flex h-4 items-center gap-1 border-b border-b-transparent outline-none hover:border-b-light-primary focus-visible:border-b-light-primary dark:hover:border-b-dark-primary dark:focus-visible:border-b-dark-primary",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "font-bold",
                                                    children: stat
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-light-secondary dark:text-dark-secondary",
                                                    children: label
                                                })
                                            ]
                                        })
                                    }, id))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "h-0.5 bg-light-line-reply dark:bg-dark-line-reply"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sidebar_mobile_sidebar_link__WEBPACK_IMPORTED_MODULE_11__/* .MobileSidebarLink */ .c, {
                                        href: `/user/${username}`,
                                        iconName: "UserIcon",
                                        linkName: "Profile"
                                    }),
                                    topNavLinks.map((linkData)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_sidebar_mobile_sidebar_link__WEBPACK_IMPORTED_MODULE_11__/* .MobileSidebarLink */ .c, {
                                            ...linkData,
                                            key: linkData.href
                                        }))
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "h-0.5 bg-light-line-reply dark:bg-dark-line-reply"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                className: "flex flex-col",
                                children: [
                                    bottomNavLinks.map((linkData)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_sidebar_mobile_sidebar_link__WEBPACK_IMPORTED_MODULE_11__/* .MobileSidebarLink */ .c, {
                                            bottom: true,
                                            ...linkData,
                                            key: linkData.href
                                        })),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                        className: "accent-tab accent-bg-tab flex items-center gap-2 rounded-md p-1.5 font-bold transition hover:bg-light-primary/10 focus-visible:ring-2 first:focus-visible:ring-[#878a8c] dark:hover:bg-dark-primary/10 dark:focus-visible:ring-white",
                                        onClick: displayOpenModal,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_12__/* .HeroIcon */ .e, {
                                                className: "h-5 w-5",
                                                iconName: "PaintBrushIcon"
                                            }),
                                            "Display"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                        className: "accent-tab accent-bg-tab flex items-center gap-2 rounded-md p-1.5 font-bold transition hover:bg-light-primary/10 focus-visible:ring-2 first:focus-visible:ring-[#878a8c] dark:hover:bg-dark-primary/10 dark:focus-visible:ring-white",
                                        onClick: logOutOpenModal,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_12__/* .HeroIcon */ .e, {
                                                className: "h-5 w-5",
                                                iconName: "ArrowRightOnRectangleIcon"
                                            }),
                                            "Log out"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9099:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oC": () => (/* binding */ modal),
/* harmony export */   "u_": () => (/* binding */ Modal),
/* harmony export */   "zi": () => (/* binding */ backdrop)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _headlessui_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const variants = [
    {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    },
    {
        initial: {
            opacity: 0,
            scale: 0.8
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                duration: 0.5,
                bounce: 0.4
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.15
            }
        }
    }
];
const [backdrop, modal] = variants;
function Modal({ open , children , className , modalAnimation , modalClassName , closePanelOnClick , closeModal  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {
        children: open && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
            className: "relative z-50",
            open: open,
            onClose: closeModal,
            static: true,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                    className: "hover-animation fixed inset-0 bg-black/40 dark:bg-[#5B7083]/40",
                    "aria-hidden": "true",
                    ...backdrop
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("fixed inset-0 overflow-y-auto p-4", className ?? "flex items-center justify-center"),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Panel, {
                        className: modalClassName,
                        as: framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div,
                        ...modalAnimation ?? modal,
                        onClick: closePanelOnClick ? closeModal : undefined,
                        children: children
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export MenuLink */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



// eslint-disable-next-line react/display-name
const MenuLink = /*#__PURE__*/ (/* unused pure expression or super */ null && (forwardRef(({ href , children , ...rest }, ref)=>/*#__PURE__*/ _jsx(Link, {
        href: href,
        children: /*#__PURE__*/ _jsx("a", {
            ref: ref,
            ...rest,
            children: children
        })
    }))));


/***/ }),

/***/ 3715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ MobileSidebarLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6269);
/* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4266);





function MobileSidebarLink({ href , bottom , linkName , iconName , disabled  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(`custom-button accent-tab accent-bg-tab flex items-center rounded-md font-bold 
           transition hover:bg-light-primary/10 focus-visible:ring-2 first:focus-visible:ring-[#878a8c]
           dark:hover:bg-dark-primary/10 dark:focus-visible:ring-white`, bottom ? "gap-2 p-1.5 text-base" : "gap-4 p-2 text-xl", disabled && "cursor-not-allowed"),
            onClick: disabled ? (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .preventBubbling */ .Db)() : undefined,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_3__/* .HeroIcon */ .e, {
                    className: bottom ? "h-5 w-5" : "h-7 w-7",
                    iconName: iconName
                }),
                linkName
            ]
        })
    }, href);
}


/***/ }),

/***/ 8289:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ MobileSidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2108);
/* harmony import */ var _lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3040);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4685);
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9099);
/* harmony import */ var _components_modal_mobile_sidebar_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8539);
/* harmony import */ var _components_user_user_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1708);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_1__, _components_modal_modal__WEBPACK_IMPORTED_MODULE_4__, _components_modal_mobile_sidebar_modal__WEBPACK_IMPORTED_MODULE_5__]);
([_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_1__, _components_modal_modal__WEBPACK_IMPORTED_MODULE_4__, _components_modal_mobile_sidebar_modal__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const variant = {
    initial: {
        x: "-100%",
        opacity: 0.8
    },
    animate: {
        x: -8,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 0.8
        }
    },
    exit: {
        x: "-100%",
        opacity: 0.8,
        transition: {
            duration: 0.4
        }
    }
};
function MobileSidebar() {
    const { user  } = (0,_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_1__/* .useAuth */ .aC)();
    const { photoURL , name  } = user;
    const { open , openModal , closeModal  } = (0,_lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_2__/* .useModal */ .d)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_modal__WEBPACK_IMPORTED_MODULE_4__/* .Modal */ .u_, {
                className: "p-0",
                modalAnimation: variant,
                modalClassName: "pb-4 pl-2 min-h-screen w-72 bg-main-background",
                open: open,
                closeModal: closeModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_mobile_sidebar_modal__WEBPACK_IMPORTED_MODULE_5__/* .MobileSidebarModal */ .w, {
                    ...user,
                    closeModal: closeModal
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z, {
                className: "accent-tab p-0 xs:hidden",
                onClick: openModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_avatar__WEBPACK_IMPORTED_MODULE_6__/* .UserAvatar */ .Y, {
                    src: photoURL,
                    alt: name,
                    size: 30
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9066:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ variants)
/* harmony export */ });
/* unused harmony export MoreSettings */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3040);
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9099);
/* harmony import */ var _components_modal_display_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(330);
/* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4266);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4685);
/* harmony import */ var _menu_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5709);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _headlessui_react__WEBPACK_IMPORTED_MODULE_2__, _components_modal_modal__WEBPACK_IMPORTED_MODULE_5__, _components_modal_display_modal__WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _headlessui_react__WEBPACK_IMPORTED_MODULE_2__, _components_modal_modal__WEBPACK_IMPORTED_MODULE_5__, _components_modal_display_modal__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const variants = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 0.4
        }
    },
    exit: {
        opacity: 0,
        y: 50,
        transition: {
            duration: 0.2
        }
    }
};
function MoreSettings() {
    const { open , openModal , closeModal  } = useModal();
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Modal, {
                modalClassName: "max-w-xl bg-main-background w-full p-8 rounded-2xl hover-animation",
                open: open,
                closeModal: closeModal,
                children: /*#__PURE__*/ _jsx(DisplayModal, {
                    closeModal: closeModal
                })
            }),
            /*#__PURE__*/ _jsx(Menu, {
                className: "relative",
                as: "div",
                children: ({ open  })=>/*#__PURE__*/ _jsxs(_Fragment, {
                        children: [
                            /*#__PURE__*/ _jsx(Menu.Button, {
                                className: "group relative flex w-full py-1 outline-none",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: cn(`custom-button flex gap-4 text-xl transition group-hover:bg-light-primary/10 group-focus-visible:ring-2
                   group-focus-visible:ring-[#878a8c] dark:group-hover:bg-dark-primary/10 dark:group-focus-visible:ring-white
                   xl:pr-5`, open && "bg-light-primary/10 dark:bg-dark-primary/10"),
                                    children: [
                                        /*#__PURE__*/ _jsx(HeroIcon, {
                                            className: "h-7 w-7",
                                            iconName: "EllipsisHorizontalCircleIcon"
                                        }),
                                        " ",
                                        /*#__PURE__*/ _jsx("p", {
                                            className: "hidden xl:block",
                                            children: "More"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx(AnimatePresence, {
                                children: open && /*#__PURE__*/ _jsxs(Menu.Items, {
                                    className: "menu-container absolute -top-44 w-60 font-medium xl:w-11/12",
                                    as: motion.div,
                                    ...variants,
                                    static: true,
                                    children: [
                                        /*#__PURE__*/ _jsx(Menu.Item, {
                                            children: ({ active  })=>/*#__PURE__*/ _jsxs(MenuLink, {
                                                    className: cn("flex w-full cursor-not-allowed gap-3 rounded-t-md p-4 duration-200", active && "bg-main-sidebar-background"),
                                                    href: "/settings",
                                                    onClick: preventBubbling(),
                                                    children: [
                                                        /*#__PURE__*/ _jsx(HeroIcon, {
                                                            iconName: "Cog8ToothIcon"
                                                        }),
                                                        "Settings and privacy"
                                                    ]
                                                })
                                        }),
                                        /*#__PURE__*/ _jsx(Menu.Item, {
                                            children: ({ active  })=>/*#__PURE__*/ _jsxs(MenuLink, {
                                                    className: cn("flex w-full cursor-not-allowed gap-3 rounded-t-md p-4 duration-200", active && "bg-main-sidebar-background"),
                                                    href: "/help-center",
                                                    onClick: preventBubbling(),
                                                    children: [
                                                        /*#__PURE__*/ _jsx(HeroIcon, {
                                                            iconName: "QuestionMarkCircleIcon"
                                                        }),
                                                        "Help center"
                                                    ]
                                                })
                                        }),
                                        /*#__PURE__*/ _jsx(Menu.Item, {
                                            children: ({ active  })=>/*#__PURE__*/ _jsxs(Button, {
                                                    className: cn("flex w-full gap-3 rounded-none rounded-b-md p-4 duration-200", active && "bg-main-sidebar-background"),
                                                    onClick: openModal,
                                                    children: [
                                                        /*#__PURE__*/ _jsx(HeroIcon, {
                                                            iconName: "PaintBrushIcon"
                                                        }),
                                                        "Display"
                                                    ]
                                                })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ SidebarLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6269);
/* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4266);






function SidebarLink({ href , username , iconName , linkName , disabled , canBeHidden  }) {
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const isActive = username ? asPath.includes(username) : asPath === href;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: href,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("group py-1 outline-none", canBeHidden ? "hidden xs:flex" : "flex", disabled && "cursor-not-allowed"),
            onClick: disabled ? (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__/* .preventBubbling */ .Db)() : undefined,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(`custom-button flex items-center justify-center gap-4 self-start p-2 text-xl transition 
             duration-200 group-hover:bg-light-primary/10 group-focus-visible:ring-2 
             group-focus-visible:ring-[#878a8c] dark:group-hover:bg-dark-primary/10 
             dark:group-focus-visible:ring-white xs:p-3 xl:pr-5`, isActive && "font-bold"),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_4__/* .HeroIcon */ .e, {
                        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("h-7 w-7", isActive && [
                            "Explore",
                            "Lists"
                        ].includes(linkName) && "stroke-white"),
                        iconName: iconName,
                        solid: isActive
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "hidden xl:block",
                        children: linkName
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 4826:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ SidebarProfile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2108);
/* harmony import */ var _lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3040);
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9099);
/* harmony import */ var _components_modal_action_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9253);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4685);
/* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4266);
/* harmony import */ var _components_ui_custom_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2365);
/* harmony import */ var _components_user_user_avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1708);
/* harmony import */ var _components_user_user_name__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4531);
/* harmony import */ var _components_user_user_username__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7876);
/* harmony import */ var _more_settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9066);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _headlessui_react__WEBPACK_IMPORTED_MODULE_2__, _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_4__, _components_modal_modal__WEBPACK_IMPORTED_MODULE_6__, _components_modal_action_modal__WEBPACK_IMPORTED_MODULE_7__, _more_settings__WEBPACK_IMPORTED_MODULE_14__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _headlessui_react__WEBPACK_IMPORTED_MODULE_2__, _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_4__, _components_modal_modal__WEBPACK_IMPORTED_MODULE_6__, _components_modal_action_modal__WEBPACK_IMPORTED_MODULE_7__, _more_settings__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function SidebarProfile() {
    const { user , signOut  } = (0,_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_4__/* .useAuth */ .aC)();
    const { open , openModal , closeModal  } = (0,_lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_5__/* .useModal */ .d)();
    const { name , username , verified , photoURL  } = user;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_modal__WEBPACK_IMPORTED_MODULE_6__/* .Modal */ .u_, {
                modalClassName: "max-w-xs bg-main-background w-full p-8 rounded-2xl",
                open: open,
                closeModal: closeModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_action_modal__WEBPACK_IMPORTED_MODULE_7__/* .ActionModal */ .W, {
                    useIcon: true,
                    focusOnMainBtn: true,
                    title: "Log out of ConnectED?",
                    description: "You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account.",
                    mainBtnLabel: "Log out",
                    action: signOut,
                    closeModal: closeModal
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
                className: "relative",
                as: "section",
                children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Button, {
                                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(`custom-button main-tab dark-bg-tab flex w-full items-center 
                 justify-between hover:bg-light-primary/10 active:bg-light-primary/20
                 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20`, open && "bg-light-primary/10 dark:bg-dark-primary/10"),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex gap-3 truncate",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_avatar__WEBPACK_IMPORTED_MODULE_11__/* .UserAvatar */ .Y, {
                                                src: photoURL,
                                                alt: name,
                                                size: 40
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "hidden truncate text-start leading-5 xl:block",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_name__WEBPACK_IMPORTED_MODULE_12__/* .UserName */ .v, {
                                                        name: name,
                                                        className: "start",
                                                        verified: verified
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_username__WEBPACK_IMPORTED_MODULE_13__/* .UserUsername */ .a, {
                                                        username: username,
                                                        disableLink: true
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_9__/* .HeroIcon */ .e, {
                                        className: "hidden h-6 w-6 xl:block",
                                        iconName: "EllipsisHorizontalIcon"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {
                                children: open && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Items, {
                                    className: "menu-container absolute left-0 right-0 -top-36 w-60 xl:w-full",
                                    as: framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div,
                                    ..._more_settings__WEBPACK_IMPORTED_MODULE_14__/* .variants */ .o,
                                    static: true,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                            className: "flex items-center justify-between gap-4 border-b border-light-border px-4 py-3 dark:border-dark-border",
                                            as: "div",
                                            disabled: true,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center gap-3 truncate",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_avatar__WEBPACK_IMPORTED_MODULE_11__/* .UserAvatar */ .Y, {
                                                            src: photoURL,
                                                            alt: name
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "truncate",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_name__WEBPACK_IMPORTED_MODULE_12__/* .UserName */ .v, {
                                                                    name: name,
                                                                    verified: verified
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_username__WEBPACK_IMPORTED_MODULE_13__/* .UserUsername */ .a, {
                                                                    username: username,
                                                                    disableLink: true
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_9__/* .HeroIcon */ .e, {
                                                        className: "h-5 w-5 text-main-accent",
                                                        iconName: "CheckIcon"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                            children: ({ active  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                                    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("flex w-full gap-3 rounded-md rounded-t-none p-4", active && "bg-main-sidebar-background"),
                                                    onClick: openModal,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_9__/* .HeroIcon */ .e, {
                                                            iconName: "ArrowRightOnRectangleIcon"
                                                        }),
                                                        "Log out @",
                                                        username
                                                    ]
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "absolute -bottom-[10px] left-2 translate-x-1/2 rotate-180 [filter:drop-shadow(#cfd9de_1px_-1px_1px)] dark:[filter:drop-shadow(#333639_1px_-1px_1px)] xl:left-1/2 xl:-translate-x-1/2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_custom_icon__WEBPACK_IMPORTED_MODULE_10__/* .CustomIcon */ .d, {
                                                className: "h-4 w-6 fill-main-background",
                                                iconName: "TriangleIcon"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8283:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2108);
/* harmony import */ var _lib_context_window_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6625);
/* harmony import */ var _lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3040);
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9099);
/* harmony import */ var _components_input_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7277);
/* harmony import */ var _components_ui_custom_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2365);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4685);
/* harmony import */ var _sidebar_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6624);
/* harmony import */ var _sidebar_profile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4826);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_3__, _components_modal_modal__WEBPACK_IMPORTED_MODULE_6__, _components_input_input__WEBPACK_IMPORTED_MODULE_7__, _sidebar_profile__WEBPACK_IMPORTED_MODULE_11__]);
([_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_3__, _components_modal_modal__WEBPACK_IMPORTED_MODULE_6__, _components_input_input__WEBPACK_IMPORTED_MODULE_7__, _sidebar_profile__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const navLinks = [
    {
        href: "/home",
        linkName: "Home",
        iconName: "HomeIcon"
    },
    {
        href: "/messages",
        linkName: "Build Your CV",
        iconName: "EnvelopeIcon",
        disabled: true
    },
    {
        href: "/bookmarks",
        linkName: "Carrer Guidance",
        iconName: "BookmarkIcon",
        canBeHidden: true
    },
    {
        href: "/lists",
        linkName: "Courses",
        iconName: "Bars3BottomLeftIcon",
        disabled: true,
        canBeHidden: true
    }
];
function Sidebar() {
    const { user  } = (0,_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .aC)();
    const { isMobile  } = (0,_lib_context_window_context__WEBPACK_IMPORTED_MODULE_4__/* .useWindow */ .zY)();
    const { open , openModal , closeModal  } = (0,_lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_5__/* .useModal */ .d)();
    const username = user === null || user === void 0 ? void 0 : user.username;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        id: "sidebar",
        className: "flex w-0 shrink-0 transition-opacity duration-200 xs:w-20 md:w-24 lg:max-w-none xl:-mr-4 xl:w-full xl:max-w-xs xl:justify-end",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_modal__WEBPACK_IMPORTED_MODULE_6__/* .Modal */ .u_, {
                className: "flex items-start justify-center",
                modalClassName: "bg-main-background rounded-2xl max-w-xl w-full mt-8 overflow-hidden",
                open: open,
                closeModal: closeModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_input_input__WEBPACK_IMPORTED_MODULE_7__/* .Input */ .I, {
                    modal: true,
                    closeModal: closeModal
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "fixed bottom-0 z-10 flex w-full flex-col justify-between border-t border-light-border bg-main-background py-0 dark:border-dark-border xs:top-0 xs:h-full xs:w-auto xs:border-0 xs:bg-transparent xs:px-2 xs:py-3 xs:pt-2 md:px-4 xl:w-72",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "flex flex-col justify-center gap-2 xs:items-center xl:items-stretch",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "hidden xs:flex",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/home",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "custom-button main-tab text-accent-blue transition hover:bg-light-primary/10 focus-visible:bg-accent-blue/10 focus-visible:!ring-accent-blue/80 dark:text-twitter-icon dark:hover:bg-dark-primary/10",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            height: 50,
                                            width: 50,
                                            src: "assets/logo2.jpeg"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                className: "flex items-center justify-around xs:flex-col xs:justify-center xl:block",
                                children: navLinks.map(({ ...linkData })=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_sidebar_link__WEBPACK_IMPORTED_MODULE_10__/* .SidebarLink */ .G, {
                                        ...linkData,
                                        key: linkData.href
                                    }))
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z, {
                                className: "accent-tab absolute right-4 -translate-y-[72px] bg-main-accent text-lg font-bold text-white outline-none transition hover:brightness-90 active:brightness-75 xs:static xs:translate-y-0 xs:hover:bg-main-accent/90 xs:active:bg-main-accent/75 xl:w-11/12",
                                onClick: openModal,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_custom_icon__WEBPACK_IMPORTED_MODULE_8__/* .CustomIcon */ .d, {
                                        className: "block h-6 w-6 xl:hidden",
                                        iconName: "FeatherIcon"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "hidden xl:block",
                                        children: "Post"
                                    })
                                ]
                            })
                        ]
                    }),
                    !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sidebar_profile__WEBPACK_IMPORTED_MODULE_11__/* .SidebarProfile */ .u, {})
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hero_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4266);


function Error({ message  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-center justify-center gap-2 py-5 px-3 text-light-secondary dark:text-dark-secondary",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hero_icon__WEBPACK_IMPORTED_MODULE_1__/* .HeroIcon */ .e, {
                    className: "h-10 w-10",
                    iconName: "ExclamationTriangleIcon"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: message ?? "Something went wrong. Try Loading."
            })
        ]
    });
}


/***/ }),

/***/ 5122:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ FollowButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2108);
/* harmony import */ var _lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3040);
/* harmony import */ var _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7359);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6269);
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9099);
/* harmony import */ var _components_modal_action_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9253);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4685);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_1__, _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_3__, _components_modal_modal__WEBPACK_IMPORTED_MODULE_4__, _components_modal_action_modal__WEBPACK_IMPORTED_MODULE_5__]);
([_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_1__, _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_3__, _components_modal_modal__WEBPACK_IMPORTED_MODULE_4__, _components_modal_action_modal__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function FollowButton({ userTargetId , userTargetUsername  }) {
    const { user  } = (0,_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_1__/* .useAuth */ .aC)();
    const { open , openModal , closeModal  } = (0,_lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_2__/* .useModal */ .d)();
    if ((user === null || user === void 0 ? void 0 : user.id) === userTargetId) return null;
    const { id: userId , following  } = user ?? {};
    const handleFollow = ()=>(0,_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_3__/* .manageFollow */ .gL)("follow", userId, userTargetId);
    const handleUnfollow = async ()=>{
        await (0,_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_3__/* .manageFollow */ .gL)("unfollow", userId, userTargetId);
        closeModal();
    };
    const userIsFollowed = !!(following === null || following === void 0 ? void 0 : following.includes(userTargetId ?? ""));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_modal__WEBPACK_IMPORTED_MODULE_4__/* .Modal */ .u_, {
                modalClassName: "flex flex-col gap-6 max-w-xs bg-main-background w-full p-8 rounded-2xl",
                open: open,
                closeModal: closeModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_action_modal__WEBPACK_IMPORTED_MODULE_5__/* .ActionModal */ .W, {
                    title: `Unfollow @${userTargetUsername}?`,
                    description: "Their Posts will no longer show up in your home timeline. You can still view their profile, unless their Posts are protected.",
                    mainBtnLabel: "Unfollow",
                    action: handleUnfollow,
                    closeModal: closeModal
                })
            }),
            userIsFollowed ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                className: 'dark-bg-tab min-w-[106px] self-start border border-light-line-reply px-4 py-1.5 font-bold hover:border-accent-red hover:bg-accent-red/10 hover:text-accent-red hover:before:content-["Unfollow"] inner:hover:hidden dark:border-light-secondary',
                onClick: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__/* .preventBubbling */ .Db)(openModal),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "Following"
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                className: "self-start border bg-light-primary px-4 py-1.5 font-bold text-white hover:bg-light-primary/90 focus-visible:bg-light-primary/90 active:bg-light-border/75 dark:bg-light-border dark:text-light-primary dark:hover:bg-light-border/90 dark:focus-visible:bg-light-border/90 dark:active:bg-light-border/75",
                onClick: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__/* .preventBubbling */ .Db)(handleFollow),
                children: "Follow"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ HeroIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8802);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable import/namespace */ 


function HeroIcon({ solid , iconName , className  }) {
    const Icon = solid ? _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_1__[iconName] : _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__[iconName];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
        className: className ?? "h-6 w-6"
    });
}


/***/ }),

/***/ 4664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ NextImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);




/**
 *
 * @description Must set width and height, if not add layout='fill'
 * @param useSkeleton add background with pulse animation, don't use it if image is transparent
 */ function NextImage({ src , alt , width , height , children , className , useSkeleton , imgClassName , previewCount , blurClassName , ...rest }) {
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!!useSkeleton);
    const handleLoad = ()=>setLoading(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
        style: {
            width
        },
        className: className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(imgClassName, loading ? blurClassName ?? "animate-pulse bg-light-secondary dark:bg-dark-secondary" : previewCount === 1 ? "!h-auto !min-h-0 !w-auto !min-w-0 rounded-lg object-contain" : "object-cover"),
                src: src,
                width: width,
                height: height,
                alt: alt,
                onLoadingComplete: handleLoad,
                layout: "responsive",
                ...rest
            }),
            children
        ]
    });
}


/***/ }),

/***/ 3276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ ToolTip)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


function ToolTip({ tip , modal , className , groupInner  }) {
    if (modal) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(`invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs
         text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69]`, groupInner ? `group-hover/inner:visible group-hover/inner:opacity-100 group-hover/inner:delay-500 
             group-focus-visible/inner:visible group-focus-visible/inner:opacity-100 group-focus-visible/inner:delay-200` : `group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible 
             group-focus-visible:opacity-100`, className ?? "translate-y-3"),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: tip
        })
    });
}


/***/ }),

/***/ 1708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ UserAvatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4664);




function UserAvatar({ src , alt , size , username , className  }) {
    const pictureSize = size ?? 48;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: username ? `/user/${username}` : "#",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("blur-picture flex self-start", !username && "pointer-events-none", className),
            tabIndex: username ? 0 : -1,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_next_image__WEBPACK_IMPORTED_MODULE_3__/* .NextImage */ .o, {
                useSkeleton: true,
                imgClassName: "rounded-full",
                width: pictureSize,
                height: pictureSize,
                src: src,
                alt: alt
            }, src)
        })
    });
}


/***/ }),

/***/ 7238:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ UserCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_user_user_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1708);
/* harmony import */ var _components_ui_follow_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5122);
/* harmony import */ var _user_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7391);
/* harmony import */ var _user_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4531);
/* harmony import */ var _user_following__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6154);
/* harmony import */ var _user_username__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7876);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_follow_button__WEBPACK_IMPORTED_MODULE_3__, _user_tooltip__WEBPACK_IMPORTED_MODULE_4__, _user_following__WEBPACK_IMPORTED_MODULE_6__]);
([_components_ui_follow_button__WEBPACK_IMPORTED_MODULE_3__, _user_tooltip__WEBPACK_IMPORTED_MODULE_4__, _user_following__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function UserCard(user) {
    const { id , bio , name , modal , follow , username , verified , photoURL  } = user;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/user/${username}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: "accent-tab hover-animation grid grid-cols-[auto,1fr] gap-3 px-4 py-3 hover:bg-light-primary/5 dark:hover:bg-dark-primary/5",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_user_tooltip__WEBPACK_IMPORTED_MODULE_4__/* .UserTooltip */ .Y, {
                    avatar: true,
                    ...user,
                    modal: modal,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_avatar__WEBPACK_IMPORTED_MODULE_2__/* .UserAvatar */ .Y, {
                        src: photoURL,
                        alt: name,
                        username: username
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col gap-1 truncate xs:overflow-visible",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-between gap-2 truncate xs:overflow-visible",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col justify-center truncate xs:overflow-visible xs:whitespace-normal",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_user_tooltip__WEBPACK_IMPORTED_MODULE_4__/* .UserTooltip */ .Y, {
                                            ...user,
                                            modal: modal,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_user_name__WEBPACK_IMPORTED_MODULE_5__/* .UserName */ .v, {
                                                className: "-mb-1",
                                                name: name,
                                                username: username,
                                                verified: verified
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center gap-1 text-light-secondary dark:text-dark-secondary",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_user_tooltip__WEBPACK_IMPORTED_MODULE_4__/* .UserTooltip */ .Y, {
                                                    ...user,
                                                    modal: modal,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_user_username__WEBPACK_IMPORTED_MODULE_7__/* .UserUsername */ .a, {
                                                        username: username
                                                    })
                                                }),
                                                follow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_user_following__WEBPACK_IMPORTED_MODULE_6__/* .UserFollowing */ .y, {
                                                    userTargetId: id
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_follow_button__WEBPACK_IMPORTED_MODULE_3__/* .FollowButton */ .e, {
                                    userTargetId: id,
                                    userTargetUsername: username
                                })
                            ]
                        }),
                        follow && bio && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "whitespace-normal",
                            children: bio
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6154:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ UserFollowing)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2108);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_1__]);
_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function UserFollowing({ userTargetId  }) {
    const { user  } = (0,_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_1__/* .useAuth */ .aC)();
    const isOwner = (user === null || user === void 0 ? void 0 : user.id) !== userTargetId && (user === null || user === void 0 ? void 0 : user.followers.includes(userTargetId));
    if (!isOwner) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "rounded bg-main-search-background px-1 text-xs",
        children: "Follows you"
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ UserName)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4266);




function UserName({ tag , name , verified , username , className , iconClassName  }) {
    const CustomTag = tag ? tag : "p";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: username ? `/user/${username}` : "#",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("flex items-center gap-1 truncate font-bold", username ? "custom-underline" : "pointer-events-none", className),
            tabIndex: username ? 0 : -1,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomTag, {
                    className: "truncate",
                    children: name
                }),
                verified && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_3__/* .HeroIcon */ .e, {
                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("fill-accent-blue", iconClassName ?? "h-5 w-5"),
                        iconName: "CheckBadgeIcon",
                        solid: true
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 7391:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ UserTooltip)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_context_window_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6625);
/* harmony import */ var _components_ui_follow_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5122);
/* harmony import */ var _components_ui_next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4664);
/* harmony import */ var _user_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1708);
/* harmony import */ var _user_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4531);
/* harmony import */ var _user_following__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6154);
/* harmony import */ var _user_username__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7876);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_follow_button__WEBPACK_IMPORTED_MODULE_4__, _user_following__WEBPACK_IMPORTED_MODULE_8__]);
([_components_ui_follow_button__WEBPACK_IMPORTED_MODULE_4__, _user_following__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function UserTooltip({ id , bio , name , modal , avatar , verified , children , photoURL , username , following , followers , coverPhotoURL  }) {
    const { isMobile  } = (0,_lib_context_window_context__WEBPACK_IMPORTED_MODULE_3__/* .useWindow */ .zY)();
    if (isMobile || modal) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
    const userLink = `/user/${username}`;
    const allStats = [
        [
            "following",
            "Following",
            following.length
        ],
        [
            "followers",
            "Followers",
            followers.length
        ]
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("group relative self-start text-light-primary dark:text-dark-primary", avatar ? "[&>div]:translate-y-2" : "grid [&>div]:translate-y-7"),
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "menu-container invisible absolute left-1/2 w-72 -translate-x-1/2 rounded-2xl opacity-0 [transition:visibility_0ms_ease_400ms,opacity_200ms_ease_200ms] group-hover:visible group-hover:opacity-100 group-hover:delay-500",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col gap-3 p-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "-mx-4 -mt-4",
                                    children: coverPhotoURL ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: userLink,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "blur-picture",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_next_image__WEBPACK_IMPORTED_MODULE_5__/* .NextImage */ .o, {
                                                useSkeleton: true,
                                                className: "relative h-24",
                                                imgClassName: "rounded-t-2xl",
                                                src: coverPhotoURL,
                                                alt: name,
                                                layout: "fill"
                                            })
                                        })
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-16 rounded-t-2xl bg-light-line-reply dark:bg-dark-line-reply"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mb-10",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_user_avatar__WEBPACK_IMPORTED_MODULE_6__/* .UserAvatar */ .Y, {
                                                className: "absolute -translate-y-1/2 bg-main-background p-1 hover:brightness-100 [&>figure>span]:[transition:200ms] [&:hover>figure>span]:brightness-75",
                                                src: photoURL,
                                                alt: name,
                                                size: 64,
                                                username: username
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_follow_button__WEBPACK_IMPORTED_MODULE_4__/* .FollowButton */ .e, {
                                            userTargetId: id,
                                            userTargetUsername: username
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_user_name__WEBPACK_IMPORTED_MODULE_7__/* .UserName */ .v, {
                                            className: "-mb-1 text-lg",
                                            name: name,
                                            username: username,
                                            verified: verified
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center gap-1 text-light-secondary dark:text-dark-secondary",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_user_username__WEBPACK_IMPORTED_MODULE_9__/* .UserUsername */ .a, {
                                                    username: username
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_user_following__WEBPACK_IMPORTED_MODULE_8__/* .UserFollowing */ .y, {
                                                    userTargetId: id
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        bio && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: bio
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-secondary flex gap-4",
                            children: allStats.map(([id, label, stat])=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: `${userLink}/${id}`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "hover-animation flex h-4 items-center gap-1 border-b border-b-transparent outline-none hover:border-b-light-primary focus-visible:border-b-light-primary dark:hover:border-b-dark-primary dark:focus-visible:border-b-dark-primary",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "font-bold",
                                                children: stat
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-light-secondary dark:text-dark-secondary",
                                                children: label
                                            })
                                        ]
                                    })
                                }, id))
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ UserUsername)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);



function UserUsername({ username , className , disableLink  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/user/${username}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("truncate text-light-secondary dark:text-dark-secondary", className, disableLink && "pointer-events-none"),
            tabIndex: -1,
            children: [
                "@",
                username
            ]
        })
    });
}


/***/ }),

/***/ 9476:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ useTrends)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);
swr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function useTrends(id, limit, config) {
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])(`/api/trends/place/${id}${limit ? `?limit=${limit}` : ""}`, config);
    if (data && "errors" in data) return {
        data: undefined,
        loading: false,
        error: new Error("Sorry we could not find any trends for this place")
    };
    return {
        data,
        error: error,
        loading: !error && !data
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "En": () => (/* binding */ WindowContextProvider),
/* harmony export */   "zY": () => (/* binding */ useWindow)
/* harmony export */ });
/* unused harmony export WindowContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const WindowContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function WindowContextProvider({ children  }) {
    const { 0: windowSize , 1: setWindowSize  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        width: window.innerWidth,
        height: window.innerHeight
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleResize = ()=>setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
    const value = {
        ...windowSize,
        isMobile: windowSize.width < 500
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WindowContext.Provider, {
        value: value,
        children: children
    });
}
function useWindow() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(WindowContext);
    if (!context) throw new Error("useWindow must be used within an WindowContextProvider");
    return context;
}


/***/ }),

/***/ 1944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ formatDate),
/* harmony export */   "u": () => (/* binding */ formatNumber)
/* harmony export */ });
const RELATIVE_TIME_FORMATTER = new Intl.RelativeTimeFormat("en-gb", {
    style: "short",
    numeric: "auto"
});
const UNITS = {
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000
};
function formatDate(targetDate, mode) {
    const date = targetDate.toDate();
    if (mode === "full") return getFullTime(date);
    if (mode === "tweet") return getPostTime(date);
    if (mode === "joined") return getJoinedTime(date);
    return getShortTime(date);
}
function formatNumber(number) {
    return new Intl.NumberFormat("en-GB", {
        notation: number > 10000 ? "compact" : "standard",
        maximumFractionDigits: 1
    }).format(number);
}
function getFullTime(date) {
    const fullDate = new Intl.DateTimeFormat("en-gb", {
        hour: "numeric",
        minute: "numeric",
        day: "numeric",
        month: "short",
        year: "numeric"
    }).format(date);
    const splittedDate = fullDate.split(", ");
    const formattedDate = splittedDate.length === 2 ? [
        ...splittedDate
    ].reverse().join(" \xb7 ") : [
        splittedDate.slice(0, 2).join(", "),
        splittedDate.slice(-1)
    ].reverse().join(" \xb7 ");
    return formattedDate;
}
function getPostTime(date) {
    if (isToday(date)) return getRelativeTime(date);
    if (isYesterday(date)) return new Intl.DateTimeFormat("en-gb", {
        day: "numeric",
        month: "short"
    }).format(date);
    return new Intl.DateTimeFormat("en-gb", {
        day: "numeric",
        month: "short",
        year: isCurrentYear(date) ? undefined : "numeric"
    }).format(date);
}
function getJoinedTime(date) {
    return new Intl.DateTimeFormat("en-gb", {
        month: "long",
        year: "numeric"
    }).format(date);
}
function getShortTime(date) {
    const isNear = isToday(date) ? "today" : isYesterday(date) ? "yesterday" : null;
    return isNear ? `${isNear === "today" ? "Today" : "Yesterday"} at ${date.toLocaleTimeString("en-gb").slice(0, -3)}` : getFullTime(date);
}
function getRelativeTime(date) {
    const relativeTime = calculateRelativeTime(date);
    if (relativeTime === "now") return relativeTime;
    const [number, unit] = relativeTime.split(" ");
    return `${number}${unit[0]}`;
}
function calculateRelativeTime(date) {
    const elapsed = +date - +new Date();
    if (elapsed > 0) return "now";
    const unitsItems = Object.entries(UNITS);
    for (const [unit, millis] of unitsItems)if (Math.abs(elapsed) > millis) return RELATIVE_TIME_FORMATTER.format(Math.round(elapsed / millis), unit);
    return RELATIVE_TIME_FORMATTER.format(Math.round(elapsed / 1000), "second");
}
function isToday(date) {
    return new Date().toDateString() === date.toDateString();
}
function isYesterday(date) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toDateString() === date.toDateString();
}
function isCurrentYear(date) {
    return date.getFullYear() === new Date().getFullYear();
}


/***/ }),

/***/ 5651:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useCacheQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);
firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function useCacheQuery(query) {
    const { 0: cachedQuery , 1: setCachedQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(query);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.queryEqual)(query, cachedQuery)) setCachedQuery(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        query
    ]);
    return cachedQuery;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7243:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ useCacheRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);
firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function useCacheRef(ref) {
    const { 0: cachedRef , 1: setCachedRef  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(ref);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.refEqual)(ref, cachedRef)) setCachedRef(ref);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        ref
    ]);
    return cachedRef;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3639:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ useCollection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5342);
/* harmony import */ var _useCacheQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5651);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_2__, _useCacheQuery__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_2__, _useCacheQuery__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function useCollection(query, options) {
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const cachedQuery = (0,_useCacheQuery__WEBPACK_IMPORTED_MODULE_3__/* .useCacheQuery */ .F)(query);
    const { includeUser , allowNull , disabled , preserve  } = options ?? {};
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (disabled) {
            setLoading(false);
            return;
        }
        if (!preserve && data) {
            setData(null);
            setLoading(true);
        }
        const populateUser = async (currentData)=>{
            const dataWithUser = await Promise.all(currentData.map(async (currentData)=>{
                const user = (await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_lib_firebase_collections__WEBPACK_IMPORTED_MODULE_2__/* .usersCollection */ .W$, currentData.createdBy))).data();
                return {
                    ...currentData,
                    user
                };
            }));
            setData(dataWithUser);
            setLoading(false);
        };
        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)(cachedQuery, (snapshot)=>{
            const data = snapshot.docs.map((doc)=>doc.data({
                    serverTimestamps: "estimate"
                }));
            if (allowNull && !data.length) {
                setData(null);
                setLoading(false);
                return;
            }
            if (includeUser) void populateUser(data);
            else {
                setData(data);
                setLoading(false);
            }
        });
        return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        cachedQuery,
        disabled
    ]);
    return {
        data,
        loading
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6051:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useDocument)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5342);
/* harmony import */ var _useCacheRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7243);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_2__, _useCacheRef__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_2__, _useCacheRef__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function useDocument(docRef, options) {
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const cachedDocRef = (0,_useCacheRef__WEBPACK_IMPORTED_MODULE_3__/* .useCacheRef */ .o)(docRef);
    const { includeUser , allowNull , disabled  } = options ?? {};
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (disabled) {
            setData(null);
            setLoading(false);
            return;
        }
        setData(null);
        setLoading(true);
        const populateUser = async (currentData)=>{
            const userData = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_lib_firebase_collections__WEBPACK_IMPORTED_MODULE_2__/* .usersCollection */ .W$, currentData.createdBy));
            const dataWithUser = {
                ...currentData,
                user: userData.data()
            };
            setData(dataWithUser);
            setLoading(false);
        };
        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)(docRef, (snapshot)=>{
            const data = snapshot.data({
                serverTimestamps: "estimate"
            });
            if (allowNull && !data) {
                setData(null);
                setLoading(false);
                return;
            }
            if (includeUser) void populateUser(data);
            else {
                setData(data);
                setLoading(false);
            }
        });
        return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        cachedDocRef
    ]);
    return {
        data,
        loading
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useModal() {
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const openModal = ()=>setOpen(true);
    const closeModal = ()=>setOpen(false);
    return {
        open,
        openModal,
        closeModal
    };
}


/***/ }),

/***/ 2843:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ useRequireAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2108);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_2__]);
_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function useRequireAuth(redirectUrl) {
    const { user , loading  } = (0,_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .aC)();
    const { replace  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!loading && !user) void replace(redirectUrl ?? "/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        user,
        loading
    ]);
    return user;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rh": () => (/* binding */ isValidUsername),
/* harmony export */   "t6": () => (/* binding */ getImagesData)
/* harmony export */ });
/* unused harmony export isValidImage */
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5195);

const IMAGE_EXTENSIONS = [
    "apng",
    "avif",
    "gif",
    "jpg",
    "jpeg",
    "jfif",
    "pjpeg",
    "pjp",
    "png",
    "svg",
    "webp"
];
function isValidImageExtension(extension) {
    var ref;
    return IMAGE_EXTENSIONS.includes((ref = extension.split(".").pop()) === null || ref === void 0 ? void 0 : ref.toLowerCase());
}
function isValidImage(name, bytes) {
    return isValidImageExtension(name) && bytes < 20 * Math.pow(1024, 2);
}
function isValidUsername(username, value) {
    if (value.length < 4) return "Your username must be longer than 4 characters.";
    if (value.length > 15) return "Your username must be shorter than 15 characters.";
    if (!/^\w+$/i.test(value)) return "Your username can only contain letters, numbers and '_'.";
    if (!/[a-z]/i.test(value)) return "Include a non-number character.";
    if (value === username) return "This is your current username.";
    return null;
}
function getImagesData(files, currentFiles) {
    if (!files || !files.length) return null;
    const singleEditingMode = currentFiles === undefined;
    const rawImages = singleEditingMode || !(currentFiles === 4 || files.length > 4 - currentFiles) ? Array.from(files).filter(({ name , size  })=>isValidImage(name, size)) : null;
    if (!rawImages || !rawImages.length) return null;
    const imagesId = rawImages.map(({ name  })=>{
        const randomId = (0,_random__WEBPACK_IMPORTED_MODULE_0__/* .getRandomId */ .w)();
        return {
            id: randomId,
            name: name === "image.png" ? `${randomId}.png` : null
        };
    });
    const imagesPreviewData = rawImages.map((image, index)=>({
            id: imagesId[index].id,
            src: URL.createObjectURL(image),
            alt: imagesId[index].name ?? image.name
        }));
    const selectedImagesData = rawImages.map((image, index)=>renameFile(image, imagesId[index].id, imagesId[index].name));
    return {
        imagesPreviewData,
        selectedImagesData
    };
}
function renameFile(file, newId, newName) {
    return Object.assign(newName ? new File([
        file
    ], newName, {
        type: file.type,
        lastModified: file.lastModified
    }) : file, {
        id: newId
    });
}


/***/ })

};
;