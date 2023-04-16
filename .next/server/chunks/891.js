"use strict";
exports.id = 891;
exports.ids = [891];
exports.modules = {

/***/ 2706:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ TweetReplyModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_input_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7277);
/* harmony import */ var _components_tweet_tweet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7293);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_input_input__WEBPACK_IMPORTED_MODULE_1__, _components_tweet_tweet__WEBPACK_IMPORTED_MODULE_2__]);
([_components_input_input__WEBPACK_IMPORTED_MODULE_1__, _components_tweet_tweet__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function TweetReplyModal({ tweet , closeModal  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_input_input__WEBPACK_IMPORTED_MODULE_1__/* .Input */ .I, {
        modal: true,
        replyModal: true,
        parent: {
            id: tweet.id,
            username: tweet.user.username
        },
        closeModal: closeModal,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_tweet_tweet__WEBPACK_IMPORTED_MODULE_2__/* .Tweet */ .t, {
            modal: true,
            parentTweet: true,
            ...tweet
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2661:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ TweetStatsModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_home_main_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3258);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_home_main_header__WEBPACK_IMPORTED_MODULE_1__]);
_components_home_main_header__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function TweetStatsModal({ children , statsType , handleClose  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_main_header__WEBPACK_IMPORTED_MODULE_1__/* .MainHeader */ .c, {
                useActionButton: true,
                disableSticky: true,
                tip: "Close",
                iconName: "XMarkIcon",
                className: "absolute flex w-full items-center gap-6 rounded-tl-2xl",
                title: `${statsType === "likes" ? "Liked" : "Retweeted"} by`,
                action: handleClose
            }),
            children
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5072:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ NumberStats)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6269);
/* harmony import */ var _lib_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1944);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function NumberStats({ move , stats , alwaysShowStats  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "overflow-hidden",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
            mode: "wait",
            initial: false,
            children: (alwaysShowStats || !!stats) && /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.p, {
                className: "text-sm",
                ...(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__/* .getStatsMove */ .DX)(move),
                key: stats
            }, (0,_lib_date__WEBPACK_IMPORTED_MODULE_3__/* .formatNumber */ .u)(stats))
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ variants),
/* harmony export */   "r": () => (/* binding */ TweetActions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1185);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6201);
/* harmony import */ var _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2108);
/* harmony import */ var _lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3040);
/* harmony import */ var _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5342);
/* harmony import */ var _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7359);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6269);
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9099);
/* harmony import */ var _components_modal_action_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9253);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4685);
/* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3276);
/* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4266);
/* harmony import */ var _components_ui_custom_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2365);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _headlessui_react__WEBPACK_IMPORTED_MODULE_4__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__, _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_8__, _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_10__, _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_11__, _components_modal_modal__WEBPACK_IMPORTED_MODULE_12__, _components_modal_action_modal__WEBPACK_IMPORTED_MODULE_13__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _headlessui_react__WEBPACK_IMPORTED_MODULE_4__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__, _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_8__, _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_10__, _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_11__, _components_modal_modal__WEBPACK_IMPORTED_MODULE_12__, _components_modal_action_modal__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const variants = {
    initial: {
        opacity: 0,
        y: -25
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
        y: -25,
        transition: {
            duration: 0.2
        }
    }
};
const pinModalData = [
    {
        title: "Pin Tweet to from profile?",
        description: "This will appear at the top of your profile and replace any previously pinned Tweet.",
        mainBtnLabel: "Pin"
    },
    {
        title: "Unpin Tweet from profile?",
        description: "This will no longer appear automatically at the top of your profile.",
        mainBtnLabel: "Unpin"
    }
];
function TweetActions({ isOwner , ownerId , tweetId , parentId , username , hasImages , viewTweet , createdBy  }) {
    const { user , isAdmin  } = (0,_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_8__/* .useAuth */ .aC)();
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { open: removeOpen , openModal: removeOpenModal , closeModal: removeCloseModal  } = (0,_lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_9__/* .useModal */ .d)();
    const { open: pinOpen , openModal: pinOpenModal , closeModal: pinCloseModal  } = (0,_lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_9__/* .useModal */ .d)();
    const { id: userId , following , pinnedTweet  } = user;
    const isInAdminControl = isAdmin && !isOwner;
    const tweetIsPinned = pinnedTweet === tweetId;
    const handleRemove = async ()=>{
        if (viewTweet) if (parentId) {
            const parentSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase_collections__WEBPACK_IMPORTED_MODULE_10__/* .tweetsCollection */ .VV, parentId));
            if (parentSnapshot.exists()) {
                await push(`/tweet/${parentId}`, undefined, {
                    scroll: false
                });
                (0,_lib_utils__WEBPACK_IMPORTED_MODULE_18__/* .delayScroll */ .wX)(200)();
                await (0,_lib_utils__WEBPACK_IMPORTED_MODULE_18__/* .sleep */ ._v)(50);
            } else await push("/home");
        } else await push("/home");
        await Promise.all([
            (0,_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_11__/* .removeTweet */ ._A)(tweetId),
            (0,_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_11__/* .manageTotalTweets */ .$1)("decrement", ownerId),
            hasImages && (0,_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_11__/* .manageTotalPhotos */ .iq)("decrement", createdBy),
            parentId && (0,_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_11__/* .manageReply */ .Mq)("decrement", parentId)
        ]);
        react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.success(`${isInAdminControl ? `@${username}'s` : "Your"} Tweet was deleted`);
        removeCloseModal();
    };
    const handlePin = async ()=>{
        await (0,_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_11__/* .managePinnedTweet */ .X_)(tweetIsPinned ? "unpin" : "pin", userId, tweetId);
        react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.success(`Your tweet was ${tweetIsPinned ? "unpinned" : "pinned"} to your profile`);
        pinCloseModal();
    };
    const handleFollow = (closeMenu, ...args)=>async ()=>{
            const [type] = args;
            closeMenu();
            await (0,_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_11__/* .manageFollow */ .gL)(...args);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.success(`You ${type === "follow" ? "followed" : "unfollowed"} @${username}`);
        };
    const userIsFollowed = following.includes(createdBy);
    const currentPinModalData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>pinModalData[+tweetIsPinned], // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        pinOpen
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_modal__WEBPACK_IMPORTED_MODULE_12__/* .Modal */ .u_, {
                modalClassName: "max-w-xs bg-main-background w-full p-8 rounded-2xl",
                open: removeOpen,
                closeModal: removeCloseModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_action_modal__WEBPACK_IMPORTED_MODULE_13__/* .ActionModal */ .W, {
                    title: "Delete Tweet?",
                    description: `This can’t be undone and it will be removed from ${isInAdminControl ? `@${username}'s` : "your"} profile, the timeline of any accounts that follow ${isInAdminControl ? `@${username}` : "you"}, and from Twitter search results.`,
                    mainBtnClassName: "bg-accent-red hover:bg-accent-red/90 active:bg-accent-red/75 accent-tab focus-visible:bg-accent-red/90",
                    mainBtnLabel: "Delete",
                    focusOnMainBtn: true,
                    action: handleRemove,
                    closeModal: removeCloseModal
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_modal__WEBPACK_IMPORTED_MODULE_12__/* .Modal */ .u_, {
                modalClassName: "max-w-xs bg-main-background w-full p-8 rounded-2xl",
                open: pinOpen,
                closeModal: pinCloseModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_action_modal__WEBPACK_IMPORTED_MODULE_13__/* .ActionModal */ .W, {
                    ...currentPinModalData,
                    mainBtnClassName: "bg-light-primary hover:bg-light-primary/90 active:bg-light-primary/80 dark:text-light-primary dark:bg-light-border dark:hover:bg-light-border/90 dark:active:bg-light-border/75",
                    focusOnMainBtn: true,
                    action: handlePin,
                    closeModal: pinCloseModal
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Popover, {
                children: ({ open , close  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Popover.Button, {
                                as: _components_ui_button__WEBPACK_IMPORTED_MODULE_14__/* .Button */ .z,
                                className: clsx__WEBPACK_IMPORTED_MODULE_6___default()(`main-tab group group absolute top-2 right-2 p-2 
                 hover:bg-accent-blue/10 focus-visible:bg-accent-blue/10
                 focus-visible:!ring-accent-blue/80 active:bg-accent-blue/20`, open && "bg-accent-blue/10 [&>div>svg]:text-accent-blue"),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "group relative",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_16__/* .HeroIcon */ .e, {
                                            className: "h-5 w-5 text-light-secondary group-hover:text-accent-blue group-focus-visible:text-accent-blue dark:text-dark-secondary/80",
                                            iconName: "EllipsisHorizontalIcon"
                                        }),
                                        !open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_15__/* .ToolTip */ .e, {
                                            tip: "More"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {
                                children: open && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Popover.Panel, {
                                    className: "menu-container group absolute top-[50px] right-2 whitespace-nowrap text-light-primary dark:text-dark-primary",
                                    as: framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div,
                                    ...variants,
                                    static: true,
                                    children: [
                                        (isAdmin || isOwner) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Popover.Button, {
                                            className: "accent-tab flex w-full gap-3 rounded-md rounded-b-none p-4 text-accent-red hover:bg-main-sidebar-background",
                                            as: _components_ui_button__WEBPACK_IMPORTED_MODULE_14__/* .Button */ .z,
                                            onClick: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_18__/* .preventBubbling */ .Db)(removeOpenModal),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_16__/* .HeroIcon */ .e, {
                                                    iconName: "TrashIcon"
                                                }),
                                                "Delete"
                                            ]
                                        }),
                                        isOwner ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Popover.Button, {
                                            className: "accent-tab flex w-full gap-3 rounded-md rounded-t-none p-4 hover:bg-main-sidebar-background",
                                            as: _components_ui_button__WEBPACK_IMPORTED_MODULE_14__/* .Button */ .z,
                                            onClick: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_18__/* .preventBubbling */ .Db)(pinOpenModal),
                                            children: tweetIsPinned ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_custom_icon__WEBPACK_IMPORTED_MODULE_17__/* .CustomIcon */ .d, {
                                                        iconName: "PinOffIcon"
                                                    }),
                                                    "Unpin from profile"
                                                ]
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_custom_icon__WEBPACK_IMPORTED_MODULE_17__/* .CustomIcon */ .d, {
                                                        iconName: "PinIcon"
                                                    }),
                                                    "Pin to your profile"
                                                ]
                                            })
                                        }) : userIsFollowed ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Popover.Button, {
                                            className: "accent-tab flex w-full gap-3 rounded-md rounded-t-none p-4 hover:bg-main-sidebar-background",
                                            as: _components_ui_button__WEBPACK_IMPORTED_MODULE_14__/* .Button */ .z,
                                            onClick: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_18__/* .preventBubbling */ .Db)(handleFollow(close, "unfollow", userId, createdBy)),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_16__/* .HeroIcon */ .e, {
                                                    iconName: "UserMinusIcon"
                                                }),
                                                "Unfollow @",
                                                username
                                            ]
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Popover.Button, {
                                            className: "accent-tab flex w-full gap-3 rounded-md rounded-t-none p-4 hover:bg-main-sidebar-background",
                                            as: _components_ui_button__WEBPACK_IMPORTED_MODULE_14__/* .Button */ .z,
                                            onClick: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_18__/* .preventBubbling */ .Db)(handleFollow(close, "follow", userId, createdBy)),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_16__/* .HeroIcon */ .e, {
                                                    iconName: "UserPlusIcon"
                                                }),
                                                "Follow @",
                                                username
                                            ]
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

/***/ 581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ TweetDate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1944);
/* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3276);





function TweetDate({ createdAt , tweetLink , viewTweet  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("flex gap-1", viewTweet && "py-4"),
        children: [
            !viewTweet && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                children: "\xb7"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "group relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: tweetLink,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("custom-underline peer whitespace-nowrap", viewTweet && "text-light-secondary dark:text-dark-secondary"),
                            children: (0,_lib_date__WEBPACK_IMPORTED_MODULE_3__/* .formatDate */ .p)(createdAt, viewTweet ? "full" : "tweet")
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_4__/* .ToolTip */ .e, {
                        className: "translate-y-1 peer-focus:opacity-100 peer-focus-visible:visible peer-focus-visible:delay-200",
                        tip: (0,_lib_date__WEBPACK_IMPORTED_MODULE_3__/* .formatDate */ .p)(createdAt, "full")
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3686:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ TweetOption)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6269);
/* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4266);
/* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3276);
/* harmony import */ var _number_stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5072);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_number_stats__WEBPACK_IMPORTED_MODULE_4__]);
_number_stats__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function TweetOption({ tip , move , stats , disabled , iconName , className , viewTweet , iconClassName , onClick  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(`group flex items-center gap-1.5 p-0 transition-none
         disabled:cursor-not-allowed inner:transition inner:duration-200`, disabled && "cursor-not-allowed", className),
        onClick: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__/* .preventBubbling */ .Db)(onClick),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("i", {
                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("relative rounded-full p-2 not-italic group-focus-visible:ring-2", iconClassName),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_2__/* .HeroIcon */ .e, {
                        className: viewTweet ? "h-6 w-6" : "h-5 w-5",
                        iconName: iconName
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_3__/* .ToolTip */ .e, {
                        tip: tip
                    })
                ]
            }),
            !viewTweet && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_number_stats__WEBPACK_IMPORTED_MODULE_4__/* .NumberStats */ .H, {
                move: move,
                stats: stats
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 396:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ TweetShare)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6201);
/* harmony import */ var _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2108);
/* harmony import */ var _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7359);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6269);
/* harmony import */ var _lib_env__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1923);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4685);
/* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4266);
/* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3276);
/* harmony import */ var _tweet_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_6__, _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_7__, _tweet_actions__WEBPACK_IMPORTED_MODULE_11__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_6__, _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_7__, _tweet_actions__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function TweetShare({ userId , tweetId , viewTweet  }) {
    const { userBookmarks  } = (0,_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_6__/* .useAuth */ .aC)();
    const handleBookmark = (closeMenu, ...args)=>async ()=>{
            const [type] = args;
            closeMenu();
            await (0,_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_7__/* .manageBookmark */ .mN)(...args);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.success(type === "bookmark" ? ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "flex gap-2",
                    children: [
                        "Tweet added to your Bookmarks",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/bookmarks",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "custom-underline font-bold",
                                children: "View"
                            })
                        })
                    ]
                }) : "Tweet removed from your bookmarks");
        };
    const handleCopy = (closeMenu)=>async ()=>{
            closeMenu();
            await navigator.clipboard.writeText(`${_lib_env__WEBPACK_IMPORTED_MODULE_12__/* .siteURL */ .f7}/tweet/${tweetId}`);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.success("Copied to clipboard");
        };
    const tweetIsBookmarked = !!(userBookmarks === null || userBookmarks === void 0 ? void 0 : userBookmarks.some(({ id  })=>id === tweetId));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover, {
        className: "relative",
        children: ({ open , close  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Button, {
                        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(`group relative flex items-center gap-1 p-0 outline-none 
               transition-none hover:text-accent-blue focus-visible:text-accent-blue`, open && "text-accent-blue inner:bg-accent-blue/10"),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("i", {
                            className: "relative rounded-full p-2 not-italic duration-200 group-hover:bg-accent-blue/10 group-focus-visible:bg-accent-blue/10 group-focus-visible:ring-2 group-focus-visible:ring-accent-blue/80 group-active:bg-accent-blue/20",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_9__/* .HeroIcon */ .e, {
                                    className: viewTweet ? "h-6 w-6" : "h-5 w-5",
                                    iconName: "ArrowUpTrayIcon"
                                }),
                                !open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_10__/* .ToolTip */ .e, {
                                    tip: "Share"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
                        children: open && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Panel, {
                            className: "menu-container group absolute right-0 top-11 whitespace-nowrap text-light-primary dark:text-dark-primary",
                            as: framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div,
                            ..._tweet_actions__WEBPACK_IMPORTED_MODULE_11__/* .variants */ .o,
                            static: true,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Button, {
                                    className: "accent-tab flex w-full gap-3 rounded-md rounded-b-none p-4 hover:bg-main-sidebar-background",
                                    as: _components_ui_button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z,
                                    onClick: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_13__/* .preventBubbling */ .Db)(handleCopy(close)),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_9__/* .HeroIcon */ .e, {
                                            iconName: "LinkIcon"
                                        }),
                                        "Copy link to Tweet"
                                    ]
                                }),
                                !tweetIsBookmarked ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Button, {
                                    className: "accent-tab flex w-full gap-3 rounded-md rounded-t-none p-4 hover:bg-main-sidebar-background",
                                    as: _components_ui_button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z,
                                    onClick: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_13__/* .preventBubbling */ .Db)(handleBookmark(close, "bookmark", userId, tweetId)),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_9__/* .HeroIcon */ .e, {
                                            iconName: "BookmarkIcon"
                                        }),
                                        "Bookmark"
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Button, {
                                    className: "accent-tab flex w-full gap-3 rounded-md rounded-t-none p-4 hover:bg-main-sidebar-background",
                                    as: _components_ui_button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z,
                                    onClick: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_13__/* .preventBubbling */ .Db)(handleBookmark(close, "unbookmark", userId, tweetId)),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_9__/* .HeroIcon */ .e, {
                                            iconName: "BookmarkSlashIcon"
                                        }),
                                        "Remove Tweet from Bookmarks"
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3894:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ TweetStats)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7359);
/* harmony import */ var _components_view_view_tweet_stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8337);
/* harmony import */ var _tweet_option__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3686);
/* harmony import */ var _tweet_share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(396);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_3__, _components_view_view_tweet_stats__WEBPACK_IMPORTED_MODULE_4__, _tweet_option__WEBPACK_IMPORTED_MODULE_5__, _tweet_share__WEBPACK_IMPORTED_MODULE_6__]);
([_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_3__, _components_view_view_tweet_stats__WEBPACK_IMPORTED_MODULE_4__, _tweet_option__WEBPACK_IMPORTED_MODULE_5__, _tweet_share__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react-hooks/exhaustive-deps */ 






function TweetStats({ reply , userId , isOwner , tweetId , userLikes , viewTweet , userRetweets , userReplies: totalReplies , openModal  }) {
    const totalLikes = userLikes.length;
    const totalTweets = userRetweets.length;
    const { 0: { currentReplies , currentTweets , currentLikes  } , 1: setCurrentStats  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        currentReplies: totalReplies,
        currentLikes: totalLikes,
        currentTweets: totalTweets
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setCurrentStats({
            currentReplies: totalReplies,
            currentLikes: totalLikes,
            currentTweets: totalTweets
        });
    }, [
        totalReplies,
        totalLikes,
        totalTweets
    ]);
    const replyMove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>totalReplies > currentReplies ? -25 : 25, [
        totalReplies
    ]);
    const likeMove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>totalLikes > currentLikes ? -25 : 25, [
        totalLikes
    ]);
    const tweetMove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>totalTweets > currentTweets ? -25 : 25, [
        totalTweets
    ]);
    const tweetIsLiked = userLikes.includes(userId);
    const tweetIsRetweeted = userRetweets.includes(userId);
    const isStatsVisible = !!(totalReplies || totalTweets || totalLikes);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            viewTweet && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_view_view_tweet_stats__WEBPACK_IMPORTED_MODULE_4__/* .ViewTweetStats */ .o, {
                likeMove: likeMove,
                userLikes: userLikes,
                tweetMove: tweetMove,
                replyMove: replyMove,
                userRetweets: userRetweets,
                currentLikes: currentLikes,
                currentTweets: currentTweets,
                currentReplies: currentReplies,
                isStatsVisible: isStatsVisible
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("flex text-light-secondary inner:outline-none dark:text-dark-secondary", viewTweet ? "justify-around py-2" : "max-w-md justify-between"),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tweet_option__WEBPACK_IMPORTED_MODULE_5__/* .TweetOption */ .J, {
                        className: "hover:text-accent-blue focus-visible:text-accent-blue",
                        iconClassName: "group-hover:bg-accent-blue/10 group-active:bg-accent-blue/20 group-focus-visible:bg-accent-blue/10 group-focus-visible:ring-accent-blue/80",
                        tip: "Reply",
                        move: replyMove,
                        stats: currentReplies,
                        iconName: "ChatBubbleOvalLeftIcon",
                        viewTweet: viewTweet,
                        onClick: openModal,
                        disabled: reply
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tweet_option__WEBPACK_IMPORTED_MODULE_5__/* .TweetOption */ .J, {
                        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("hover:text-accent-green focus-visible:text-accent-green", tweetIsRetweeted && "text-accent-green [&>i>svg]:[stroke-width:2px]"),
                        iconClassName: "group-hover:bg-accent-green/10 group-active:bg-accent-green/20 group-focus-visible:bg-accent-green/10 group-focus-visible:ring-accent-green/80",
                        tip: tweetIsRetweeted ? "Undo Retweet" : "Retweet",
                        move: tweetMove,
                        stats: currentTweets,
                        iconName: "ArrowPathRoundedSquareIcon",
                        viewTweet: viewTweet,
                        onClick: (0,_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_3__/* .manageRetweet */ .aE)(tweetIsRetweeted ? "unretweet" : "retweet", userId, tweetId)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tweet_option__WEBPACK_IMPORTED_MODULE_5__/* .TweetOption */ .J, {
                        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("hover:text-accent-pink focus-visible:text-accent-pink", tweetIsLiked && "text-accent-pink [&>i>svg]:fill-accent-pink"),
                        iconClassName: "group-hover:bg-accent-pink/10 group-active:bg-accent-pink/20 group-focus-visible:bg-accent-pink/10 group-focus-visible:ring-accent-pink/80",
                        tip: tweetIsLiked ? "Unlike" : "Like",
                        move: likeMove,
                        stats: currentLikes,
                        iconName: "HeartIcon",
                        viewTweet: viewTweet,
                        onClick: (0,_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_3__/* .manageLike */ .R1)(tweetIsLiked ? "unlike" : "like", userId, tweetId)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tweet_share__WEBPACK_IMPORTED_MODULE_6__/* .TweetShare */ .P, {
                        userId: userId,
                        tweetId: tweetId,
                        viewTweet: viewTweet
                    }),
                    isOwner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tweet_option__WEBPACK_IMPORTED_MODULE_5__/* .TweetOption */ .J, {
                        className: "hover:text-accent-blue focus-visible:text-accent-blue",
                        iconClassName: "group-hover:bg-accent-blue/10 group-active:bg-accent-blue/20 group-focus-visible:bg-accent-blue/10 group-focus-visible:ring-accent-blue/80",
                        tip: "Analytics",
                        iconName: "ChartPieIcon",
                        disabled: true
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2400:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ TweetStatus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4266);
/* harmony import */ var _components_ui_custom_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2365);
/* harmony import */ var _components_input_input_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1273);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components_input_input_form__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components_input_input_form__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function TweetStatus({ type , children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        className: "col-span-2 grid grid-cols-[48px,1fr] gap-3 text-light-secondary dark:text-dark-secondary",
        ..._components_input_input_form__WEBPACK_IMPORTED_MODULE_4__/* .fromTop */ .TW,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: "justify-self-end",
                children: type === "pin" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_custom_icon__WEBPACK_IMPORTED_MODULE_3__/* .CustomIcon */ .d, {
                    className: "h-5 w-5 -rotate-45 fill-light-secondary dark:fill-dark-secondary",
                    iconName: "PinIcon"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_2__/* .HeroIcon */ .e, {
                    className: "h-5 w-5",
                    iconName: "ArrowPathRoundedSquareIcon"
                })
            }),
            children
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7293:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ variants),
/* harmony export */   "t": () => (/* binding */ Tweet)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2108);
/* harmony import */ var _lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3040);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6269);
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9099);
/* harmony import */ var _components_modal_tweet_reply_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2706);
/* harmony import */ var _components_input_image_preview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1400);
/* harmony import */ var _components_user_user_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1708);
/* harmony import */ var _components_user_user_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7391);
/* harmony import */ var _components_user_user_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4531);
/* harmony import */ var _components_user_user_username__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7876);
/* harmony import */ var _tweet_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(44);
/* harmony import */ var _tweet_status__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2400);
/* harmony import */ var _tweet_stats__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3894);
/* harmony import */ var _tweet_date__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(581);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_4__, _components_modal_modal__WEBPACK_IMPORTED_MODULE_6__, _components_modal_tweet_reply_modal__WEBPACK_IMPORTED_MODULE_7__, _components_input_image_preview__WEBPACK_IMPORTED_MODULE_8__, _components_user_user_tooltip__WEBPACK_IMPORTED_MODULE_10__, _tweet_actions__WEBPACK_IMPORTED_MODULE_13__, _tweet_status__WEBPACK_IMPORTED_MODULE_14__, _tweet_stats__WEBPACK_IMPORTED_MODULE_15__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_4__, _components_modal_modal__WEBPACK_IMPORTED_MODULE_6__, _components_modal_tweet_reply_modal__WEBPACK_IMPORTED_MODULE_7__, _components_input_image_preview__WEBPACK_IMPORTED_MODULE_8__, _components_user_user_tooltip__WEBPACK_IMPORTED_MODULE_10__, _tweet_actions__WEBPACK_IMPORTED_MODULE_13__, _tweet_status__WEBPACK_IMPORTED_MODULE_14__, _tweet_stats__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const variants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.8
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2
        }
    }
};
function Tweet(tweet) {
    const { id: tweetId , text , modal , images , parent , pinned , profile , userLikes , createdBy , createdAt , parentTweet , userReplies , userRetweets , user: tweetUserData  } = tweet;
    const { id: ownerId , name , username , verified , photoURL  } = tweetUserData;
    const { user  } = (0,_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_4__/* .useAuth */ .aC)();
    const { open , openModal , closeModal  } = (0,_lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_5__/* .useModal */ .d)();
    const tweetLink = `/tweet/${tweetId}`;
    const userId = user === null || user === void 0 ? void 0 : user.id;
    const isOwner = userId === createdBy;
    const { id: parentId , username: parentUsername = username  } = parent ?? {};
    const { id: profileId , name: profileName , username: profileUsername  } = profile ?? {};
    const reply = !!parent;
    const tweetIsRetweeted = userRetweets.includes(profileId ?? "");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.article, {
        ...!modal ? {
            ...variants,
            layout: "position"
        } : {},
        animate: {
            ...variants.animate,
            ...parentTweet && {
                transition: {
                    duration: 0.2
                }
            }
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_modal__WEBPACK_IMPORTED_MODULE_6__/* .Modal */ .u_, {
                className: "flex items-start justify-center",
                modalClassName: "bg-main-background rounded-2xl max-w-xl w-full my-8 overflow-hidden",
                open: open,
                closeModal: closeModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_tweet_reply_modal__WEBPACK_IMPORTED_MODULE_7__/* .TweetReplyModal */ .h, {
                    tweet: tweet,
                    closeModal: closeModal
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: tweetLink,
                scroll: !reply,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(`accent-tab hover-card relative flex flex-col 
             gap-y-4 px-4 py-3 outline-none duration-200`, parentTweet ? "mt-0.5 pt-2.5 pb-0" : "border-b border-light-border dark:border-dark-border"),
                    onClick: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_17__/* .delayScroll */ .wX)(200),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-[auto,1fr] gap-x-3 gap-y-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
                                initial: false,
                                children: modal ? null : pinned ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tweet_status__WEBPACK_IMPORTED_MODULE_14__/* .TweetStatus */ .v, {
                                    type: "pin",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-sm font-bold",
                                        children: "Pinned Post"
                                    })
                                }) : tweetIsRetweeted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tweet_status__WEBPACK_IMPORTED_MODULE_14__/* .TweetStatus */ .v, {
                                    type: "tweet",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: profileUsername,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            className: "custom-underline truncate text-sm font-bold",
                                            children: [
                                                userId === profileId ? "You" : profileName,
                                                " Retweeted"
                                            ]
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_tooltip__WEBPACK_IMPORTED_MODULE_10__/* .UserTooltip */ .Y, {
                                        avatar: true,
                                        modal: modal,
                                        ...tweetUserData,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_avatar__WEBPACK_IMPORTED_MODULE_9__/* .UserAvatar */ .Y, {
                                            src: photoURL,
                                            alt: name,
                                            username: username
                                        })
                                    }),
                                    parentTweet && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "hover-animation h-full w-0.5 bg-light-line-reply dark:bg-dark-line-reply"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex min-w-0 flex-col",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between gap-2 text-light-secondary dark:text-dark-secondary",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex gap-1 truncate xs:overflow-visible xs:whitespace-normal",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_tooltip__WEBPACK_IMPORTED_MODULE_10__/* .UserTooltip */ .Y, {
                                                        modal: modal,
                                                        ...tweetUserData,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_name__WEBPACK_IMPORTED_MODULE_11__/* .UserName */ .v, {
                                                            name: name,
                                                            username: username,
                                                            verified: verified,
                                                            className: "text-light-primary dark:text-dark-primary"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_tooltip__WEBPACK_IMPORTED_MODULE_10__/* .UserTooltip */ .Y, {
                                                        modal: modal,
                                                        ...tweetUserData,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_username__WEBPACK_IMPORTED_MODULE_12__/* .UserUsername */ .a, {
                                                            username: username
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tweet_date__WEBPACK_IMPORTED_MODULE_16__/* .TweetDate */ .C, {
                                                        tweetLink: tweetLink,
                                                        createdAt: createdAt
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "px-4",
                                                children: !modal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tweet_actions__WEBPACK_IMPORTED_MODULE_13__/* .TweetActions */ .r, {
                                                    isOwner: isOwner,
                                                    ownerId: ownerId,
                                                    tweetId: tweetId,
                                                    parentId: parentId,
                                                    username: username,
                                                    hasImages: !!images,
                                                    createdBy: createdBy
                                                })
                                            })
                                        ]
                                    }),
                                    (reply || modal) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("text-light-secondary dark:text-dark-secondary", modal && "order-1 my-2"),
                                        children: [
                                            "Replying to",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: `/user/${parentUsername}`,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    className: "custom-underline text-main-accent",
                                                    children: [
                                                        "@",
                                                        parentUsername
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    text && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "whitespace-pre-line break-words",
                                        children: text
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mt-1 flex flex-col gap-2",
                                        children: [
                                            images && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_input_image_preview__WEBPACK_IMPORTED_MODULE_8__/* .ImagePreview */ .e, {
                                                tweet: true,
                                                imagesPreview: images,
                                                previewCount: images.length
                                            }),
                                            !modal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tweet_stats__WEBPACK_IMPORTED_MODULE_15__/* .TweetStats */ .b, {
                                                reply: reply,
                                                userId: userId,
                                                isOwner: isOwner,
                                                tweetId: tweetId,
                                                userLikes: userLikes,
                                                userReplies: userReplies,
                                                userRetweets: userRetweets,
                                                openModal: !parent ? openModal : undefined
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8337:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ ViewTweetStats)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_hooks_useArrayDocument__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2322);
/* harmony import */ var _lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3040);
/* harmony import */ var _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5342);
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9099);
/* harmony import */ var _components_modal_tweet_stats_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2661);
/* harmony import */ var _components_tweet_number_stats__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5072);
/* harmony import */ var _components_user_user_cards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3779);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_hooks_useArrayDocument__WEBPACK_IMPORTED_MODULE_3__, _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__, _components_modal_modal__WEBPACK_IMPORTED_MODULE_6__, _components_modal_tweet_stats_modal__WEBPACK_IMPORTED_MODULE_7__, _components_tweet_number_stats__WEBPACK_IMPORTED_MODULE_8__, _components_user_user_cards__WEBPACK_IMPORTED_MODULE_9__]);
([_lib_hooks_useArrayDocument__WEBPACK_IMPORTED_MODULE_3__, _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__, _components_modal_modal__WEBPACK_IMPORTED_MODULE_6__, _components_modal_tweet_stats_modal__WEBPACK_IMPORTED_MODULE_7__, _components_tweet_number_stats__WEBPACK_IMPORTED_MODULE_8__, _components_user_user_cards__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function ViewTweetStats({ likeMove , userLikes , tweetMove , replyMove , userRetweets , currentLikes , currentTweets , currentReplies , isStatsVisible  }) {
    const { 0: statsType , 1: setStatsType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { open , openModal , closeModal  } = (0,_lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_4__/* .useModal */ .d)();
    const { data , loading  } = (0,_lib_hooks_useArrayDocument__WEBPACK_IMPORTED_MODULE_3__/* .useArrayDocument */ .z)(statsType ? statsType === "likes" ? userLikes : userRetweets : [], _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__/* .usersCollection */ .W$, {
        disabled: !statsType
    });
    const handleOpen = (type)=>()=>{
            setStatsType(type);
            openModal();
        };
    const handleClose = ()=>{
        setStatsType(null);
        closeModal();
    };
    const allStats = [
        [
            "Reply",
            null,
            replyMove,
            currentReplies
        ],
        [
            "Retweet",
            "retweets",
            tweetMove,
            currentTweets
        ],
        [
            "Like",
            "likes",
            likeMove,
            currentLikes
        ]
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_modal__WEBPACK_IMPORTED_MODULE_6__/* .Modal */ .u_, {
                modalClassName: "relative bg-main-background rounded-2xl max-w-xl w-full h-[672px] overflow-hidden rounded-2xl",
                open: open,
                closeModal: handleClose,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_tweet_stats_modal__WEBPACK_IMPORTED_MODULE_7__/* .TweetStatsModal */ .R, {
                    statsType: statsType,
                    handleClose: handleClose,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_cards__WEBPACK_IMPORTED_MODULE_9__/* .UserCards */ .G, {
                        follow: true,
                        type: statsType,
                        data: data,
                        loading: loading
                    })
                })
            }),
            isStatsVisible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex gap-4 px-1 py-4 text-light-secondary dark:text-dark-secondary [&>button>div]:font-bold [&>button>div]:text-light-primary dark:[&>button>div]:text-dark-primary",
                children: allStats.map(([title, type, move, stats], index)=>!!stats && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(`hover-animation mt-0.5 mb-[3px] flex h-4 items-center gap-1 border-b 
                     border-b-transparent outline-none hover:border-b-light-primary 
                     focus-visible:border-b-light-primary dark:hover:border-b-dark-primary
                     dark:focus-visible:border-b-dark-primary`, index === 0 && "cursor-not-allowed"),
                        onClick: type ? handleOpen(type) : undefined,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_tweet_number_stats__WEBPACK_IMPORTED_MODULE_8__/* .NumberStats */ .H, {
                                move: move,
                                stats: stats
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: `${stats === 1 ? title : stats > 1 && index === 0 ? `${title.slice(0, -1)}ies` : `${title}s`}`
                            })
                        ]
                    }, title))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2322:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ useArrayDocument)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5342);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function useArrayDocument(docsId, collection, options) {
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const cachedDocsId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>docsId, [
        docsId
    ]);
    const { includeUser , disabled  } = options ?? {};
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (disabled) return;
        if (includeUser && !data) setLoading(true);
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
        const fetchData = async ()=>{
            try {
                const docsSnapshot = await Promise.all(cachedDocsId.map((id)=>(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(collection, id))));
                const docs = docsSnapshot.map((doc)=>doc.data({
                        serverTimestamps: "estimate"
                    }));
                if (!docs.length) {
                    setData(null);
                    setLoading(false);
                    return;
                }
                if (includeUser) void populateUser(docs);
                else {
                    setData(docs);
                    setLoading(false);
                }
            } catch  {
                setData(null);
                setLoading(false);
            }
        };
        void fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        cachedDocsId
    ]);
    return {
        data,
        loading
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;