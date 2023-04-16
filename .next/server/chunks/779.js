"use strict";
exports.id = 779;
exports.ids = [779];
exports.modules = {

/***/ 6781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ StatsEmpty)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4664);



function StatsEmpty({ title , modal , imageData , description  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("flex justify-center p-8", modal && "mt-[52px]"),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full max-w-sm",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col items-center gap-6",
                children: [
                    imageData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_next_image__WEBPACK_IMPORTED_MODULE_2__/* .NextImage */ .o, {
                        width: 336,
                        height: 168,
                        src: imageData.src,
                        alt: imageData.alt
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col gap-2 text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-3xl font-extrabold",
                                children: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-light-secondary dark:text-dark-secondary",
                                children: description
                            })
                        ]
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 3779:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ UserCards)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _components_tweet_stats_empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6781);
/* harmony import */ var _components_ui_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9570);
/* harmony import */ var _components_user_user_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8162);
/* harmony import */ var _user_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7238);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_user_user_header__WEBPACK_IMPORTED_MODULE_5__, _user_card__WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_user_user_header__WEBPACK_IMPORTED_MODULE_5__, _user_card__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const allNoStatsData = {
    retweets: {
        title: "Amplify Tweets you like",
        imageData: {
            src: "/assets/no-retweets.png",
            alt: "No retweets"
        },
        description: "Share someone else’s Tweet on your timeline by Retweeting it. When you do, it’ll show up here."
    },
    likes: {
        title: "No Tweet Likes yet",
        imageData: {
            src: "/assets/no-likes.png",
            alt: "No likes"
        },
        description: "When you like a Tweet, it’ll show up here."
    },
    following: {
        title: "Be in the know",
        description: "Following accounts is an easy way to curate your timeline and know what’s happening with the topics and people you’re interested in."
    },
    followers: {
        title: "Looking for followers?",
        imageData: {
            src: "/assets/no-followers.png",
            alt: "No followers"
        },
        description: "When someone follows this account, they’ll show up here. Tweeting and interacting with others helps boost followers."
    }
};
function UserCards({ data , type , follow , loading  }) {
    const noStatsData = allNoStatsData[type];
    const modal = [
        "retweets",
        "likes"
    ].includes(type);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(modal && "h-full overflow-y-auto [&>div:first-child>a]:mt-[52px]", loading && "flex items-center justify-center"),
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loading__WEBPACK_IMPORTED_MODULE_4__/* .Loading */ .g, {
            className: modal ? "mt-[52px]" : "mt-5"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
            mode: "popLayout",
            children: (data === null || data === void 0 ? void 0 : data.length) ? data.map((userData)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    layout: "position",
                    ..._components_user_user_header__WEBPACK_IMPORTED_MODULE_5__/* .variants */ .o,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_user_card__WEBPACK_IMPORTED_MODULE_6__/* .UserCard */ .O, {
                        ...userData,
                        follow: follow,
                        modal: modal
                    })
                }, userData.id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_tweet_stats_empty__WEBPACK_IMPORTED_MODULE_3__/* .StatsEmpty */ .Q, {
                ...noStatsData,
                modal: modal
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8162:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ variants),
/* harmony export */   "w": () => (/* binding */ UserHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _lib_hooks_useDocument__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6051);
/* harmony import */ var _lib_context_user_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5127);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6269);
/* harmony import */ var _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5342);
/* harmony import */ var _user_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4531);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__, _lib_hooks_useDocument__WEBPACK_IMPORTED_MODULE_5__, _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_7__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__, _lib_hooks_useDocument__WEBPACK_IMPORTED_MODULE_5__, _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const variants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.4
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2
        }
    }
};
function UserHeader() {
    const { pathname , query: { id  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { user , loading  } = (0,_lib_context_user_context__WEBPACK_IMPORTED_MODULE_6__/* .useUser */ .aF)();
    const userId = user ? user.id : null;
    const { data: statsData , loading: statsLoading  } = (0,_lib_hooks_useDocument__WEBPACK_IMPORTED_MODULE_5__/* .useDocument */ .k)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)((0,_lib_firebase_collections__WEBPACK_IMPORTED_MODULE_7__/* .userStatsCollection */ .bR)(userId ?? "null"), "stats"), {
        allowNull: true,
        disabled: !userId
    });
    const { tweets , likes  } = statsData ?? {};
    const [totalTweets, totalPhotos, totalLikes] = [
        ((user === null || user === void 0 ? void 0 : user.totalTweets) ?? 0) + ((tweets === null || tweets === void 0 ? void 0 : tweets.length) ?? 0),
        user === null || user === void 0 ? void 0 : user.totalPhotos,
        likes === null || likes === void 0 ? void 0 : likes.length
    ];
    const currentPage = pathname.split("/").pop() ?? "";
    const isInTweetPage = [
        "[id]",
        "with_replies"
    ].includes(currentPage);
    const isInFollowPage = [
        "following",
        "followers"
    ].includes(currentPage);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
        mode: "popLayout",
        children: loading || statsLoading ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
            className: "-mb-1 inner:animate-pulse inner:rounded-lg inner:bg-light-secondary dark:inner:bg-dark-secondary",
            ...variants,
            key: "loading",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-1 -mt-1 h-5 w-24"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "h-4 w-12"
                })
            ]
        }) : !user ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h2, {
            className: "text-xl font-bold",
            ...variants,
            key: "not-found"
        }, isInFollowPage ? `@${id}` : "User") : /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
            className: "-mb-1 truncate",
            ...variants,
            key: "found",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_user_name__WEBPACK_IMPORTED_MODULE_8__/* .UserName */ .v, {
                    tag: "h2",
                    name: user.name,
                    className: "-mt-1 text-xl",
                    iconClassName: "w-6 h-6",
                    verified: user.verified
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-xs text-light-secondary dark:text-dark-secondary",
                    children: isInFollowPage ? `@${user.username}` : isInTweetPage ? totalTweets ? `${totalTweets} ${`Tweet${(0,_lib_utils__WEBPACK_IMPORTED_MODULE_9__/* .isPlural */ .uz)(totalTweets)}`}` : "No Tweet" : currentPage === "media" ? totalPhotos ? `${totalPhotos} Photo${(0,_lib_utils__WEBPACK_IMPORTED_MODULE_9__/* .isPlural */ .uz)(totalPhotos)} & GIF${(0,_lib_utils__WEBPACK_IMPORTED_MODULE_9__/* .isPlural */ .uz)(totalPhotos)}` : "No Photo & GIF" : totalLikes ? `${totalLikes} Like${(0,_lib_utils__WEBPACK_IMPORTED_MODULE_9__/* .isPlural */ .uz)(totalLikes)}` : "No Like"
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aF": () => (/* binding */ useUser),
/* harmony export */   "fS": () => (/* binding */ UserContextProvider)
/* harmony export */ });
/* unused harmony export UserContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function UserContextProvider({ value , children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserContext.Provider, {
        value: value,
        children: children
    });
}
function useUser() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);
    if (!context) throw new Error("useUser must be used within an UserContextProvider");
    return context;
}


/***/ })

};
;