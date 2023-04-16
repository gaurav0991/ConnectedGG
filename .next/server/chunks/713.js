"use strict";
exports.id = 713;
exports.ids = [713];
exports.modules = {

/***/ 7713:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ UserHomeLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2108);
/* harmony import */ var _lib_context_user_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5127);
/* harmony import */ var _components_common_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(585);
/* harmony import */ var _components_user_user_home_cover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2230);
/* harmony import */ var _components_user_user_home_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3995);
/* harmony import */ var _components_user_user_details__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7616);
/* harmony import */ var _components_user_user_nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7993);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4685);
/* harmony import */ var _components_ui_loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9570);
/* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4266);
/* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3276);
/* harmony import */ var _components_ui_follow_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5122);
/* harmony import */ var _components_user_user_header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8162);
/* harmony import */ var _components_user_user_edit_profile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7276);
/* harmony import */ var _components_user_user_share__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8121);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_3__, _components_user_user_home_cover__WEBPACK_IMPORTED_MODULE_6__, _components_user_user_home_avatar__WEBPACK_IMPORTED_MODULE_7__, _components_user_user_details__WEBPACK_IMPORTED_MODULE_8__, _components_user_user_nav__WEBPACK_IMPORTED_MODULE_9__, _components_ui_follow_button__WEBPACK_IMPORTED_MODULE_14__, _components_user_user_header__WEBPACK_IMPORTED_MODULE_15__, _components_user_user_edit_profile__WEBPACK_IMPORTED_MODULE_16__, _components_user_user_share__WEBPACK_IMPORTED_MODULE_17__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _lib_context_auth_context__WEBPACK_IMPORTED_MODULE_3__, _components_user_user_home_cover__WEBPACK_IMPORTED_MODULE_6__, _components_user_user_home_avatar__WEBPACK_IMPORTED_MODULE_7__, _components_user_user_details__WEBPACK_IMPORTED_MODULE_8__, _components_user_user_nav__WEBPACK_IMPORTED_MODULE_9__, _components_ui_follow_button__WEBPACK_IMPORTED_MODULE_14__, _components_user_user_header__WEBPACK_IMPORTED_MODULE_15__, _components_user_user_edit_profile__WEBPACK_IMPORTED_MODULE_16__, _components_user_user_share__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















function UserHomeLayout({ children  }) {
    const { user , isAdmin  } = (0,_lib_context_auth_context__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .aC)();
    const { user: userData , loading  } = (0,_lib_context_user_context__WEBPACK_IMPORTED_MODULE_4__/* .useUser */ .aF)();
    const { query: { id  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const coverData = (userData === null || userData === void 0 ? void 0 : userData.coverPhotoURL) ? {
        src: userData.coverPhotoURL,
        alt: userData.name
    } : null;
    const profileData = userData ? {
        src: userData.photoURL,
        alt: userData.name
    } : null;
    const { id: userId  } = user ?? {};
    const isOwner = (userData === null || userData === void 0 ? void 0 : userData.id) === userId;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            userData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_seo__WEBPACK_IMPORTED_MODULE_5__/* .SEO */ .H, {
                title: `${`${userData.name} (@${userData.username})`} / Twitter`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.section, {
                ..._components_user_user_header__WEBPACK_IMPORTED_MODULE_15__/* .variants */ .o,
                exit: undefined,
                children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loading__WEBPACK_IMPORTED_MODULE_11__/* .Loading */ .g, {
                    className: "mt-5"
                }) : !userData ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_home_cover__WEBPACK_IMPORTED_MODULE_6__/* .UserHomeCover */ .D, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col gap-8",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative flex flex-col gap-3 px-4 py-3",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_home_avatar__WEBPACK_IMPORTED_MODULE_7__/* .UserHomeAvatar */ .b, {}),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-xl font-bold",
                                            children: [
                                                "@",
                                                id
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "p-8 text-center",
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
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_home_cover__WEBPACK_IMPORTED_MODULE_6__/* .UserHomeCover */ .D, {
                            coverData: coverData
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "relative flex flex-col gap-3 px-4 py-3",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_home_avatar__WEBPACK_IMPORTED_MODULE_7__/* .UserHomeAvatar */ .b, {
                                            profileData: profileData
                                        }),
                                        isOwner ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_edit_profile__WEBPACK_IMPORTED_MODULE_16__/* .UserEditProfile */ ._, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex gap-2 self-start",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_share__WEBPACK_IMPORTED_MODULE_17__/* .UserShare */ .R, {
                                                    username: userData.username
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_10__/* .Button */ .z, {
                                                    className: "dark-bg-tab group relative cursor-not-allowed border border-light-line-reply p-2 hover:bg-light-primary/10 active:bg-light-primary/20 dark:border-light-secondary dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_12__/* .HeroIcon */ .e, {
                                                            className: "h-5 w-5",
                                                            iconName: "EnvelopeIcon"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_13__/* .ToolTip */ .e, {
                                                            tip: "Message"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_follow_button__WEBPACK_IMPORTED_MODULE_14__/* .FollowButton */ .e, {
                                                    userTargetId: userData.id,
                                                    userTargetUsername: userData.username
                                                }),
                                                isAdmin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_edit_profile__WEBPACK_IMPORTED_MODULE_16__/* .UserEditProfile */ ._, {
                                                    hide: true
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_details__WEBPACK_IMPORTED_MODULE_8__/* .UserDetails */ .x, {
                                    ...userData
                                })
                            ]
                        })
                    ]
                })
            }),
            userData && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_user_user_nav__WEBPACK_IMPORTED_MODULE_9__/* .UserNav */ .T, {}),
                    children
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7903:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ EditProfileModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_home_main_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3258);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4685);
/* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4266);
/* harmony import */ var _components_ui_next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4664);
/* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3276);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_home_main_header__WEBPACK_IMPORTED_MODULE_3__]);
_components_home_main_header__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function EditProfileModal({ name , loading , photoURL , children , coverPhotoURL , inputNameError , editImage , closeModal , updateData , removeCoverImage , resetUserEditData  }) {
    const coverInputFileRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const profileInputFileRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleClick = (type)=>{
        return ()=>{
            var ref, ref1;
            if (type === "cover") (ref = coverInputFileRef.current) === null || ref === void 0 ? void 0 : ref.click();
            else (ref1 = profileInputFileRef.current) === null || ref1 === void 0 ? void 0 : ref1.click();
        };
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_main_header__WEBPACK_IMPORTED_MODULE_3__/* .MainHeader */ .c, {
                useActionButton: true,
                disableSticky: true,
                iconName: "XMarkIcon",
                tip: "Close",
                className: "absolute flex w-full items-center gap-6 rounded-tl-2xl",
                title: "Edit profile",
                action: closeModal,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "ml-auto flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                            className: "dark-bg-tab group relative p-2 hover:bg-light-primary/10 active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/10",
                            onClick: resetUserEditData,
                            disabled: loading,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_5__/* .HeroIcon */ .e, {
                                    className: "h-5 w-5",
                                    iconName: "ArrowPathIcon"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_7__/* .ToolTip */ .e, {
                                    tip: "Reset"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                            className: "bg-light-primary py-1 px-4 font-bold text-white focus-visible:bg-light-primary/90 enabled:hover:bg-light-primary/90 enabled:active:bg-light-primary/80 disabled:brightness-75 dark:bg-light-border dark:text-light-primary dark:focus-visible:bg-light-border/90 dark:enabled:hover:bg-light-border/90 dark:enabled:active:bg-light-border/75",
                            onClick: updateData,
                            disabled: !!inputNameError,
                            loading: loading,
                            children: "Save"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("h-full overflow-y-auto transition-opacity", loading && "pointer-events-none opacity-50"),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "group relative mt-[52px] h-36 xs:h-44 sm:h-48",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: "hidden",
                                type: "file",
                                accept: "image/*",
                                ref: coverInputFileRef,
                                onChange: editImage("cover")
                            }),
                            coverPhotoURL ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_next_image__WEBPACK_IMPORTED_MODULE_6__/* .NextImage */ .o, {
                                useSkeleton: true,
                                className: "relative h-full",
                                imgClassName: "object-cover transition group-hover:brightness-75 duration-200 group-focus-within:brightness-75",
                                src: coverPhotoURL,
                                alt: name,
                                layout: "fill"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-full bg-light-line-reply dark:bg-dark-line-reply"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "absolute left-1/2 top-1/2 flex -translate-y-1/2 -translate-x-1/2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                                        className: "group/inner relative bg-light-primary/60 p-2 hover:bg-image-preview-hover/50 focus-visible:bg-image-preview-hover/50",
                                        onClick: handleClick("cover"),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_5__/* .HeroIcon */ .e, {
                                                className: "hover-animation h-6 w-6 text-dark-primary group-hover:text-white",
                                                iconName: "CameraIcon"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_7__/* .ToolTip */ .e, {
                                                groupInner: true,
                                                tip: "Add photo"
                                            })
                                        ]
                                    }),
                                    coverPhotoURL && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                                        className: "group/inner relative bg-light-primary/60 p-2 hover:bg-image-preview-hover/50 focus-visible:bg-image-preview-hover/50",
                                        onClick: removeCoverImage,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_5__/* .HeroIcon */ .e, {
                                                className: "hover-animation h-6 w-6 text-dark-primary group-hover:text-white",
                                                iconName: "XMarkIcon"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_7__/* .ToolTip */ .e, {
                                                groupInner: true,
                                                tip: "Remove photo"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative flex flex-col gap-6 px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mb-8 xs:mb-12 sm:mb-14",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: "hidden",
                                        type: "file",
                                        accept: "image/*",
                                        ref: profileInputFileRef,
                                        onChange: editImage("profile")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "group absolute aspect-square w-24 -translate-y-1/2 overflow-hidden rounded-full xs:w-32 sm:w-36",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_next_image__WEBPACK_IMPORTED_MODULE_6__/* .NextImage */ .o, {
                                                useSkeleton: true,
                                                className: "h-full w-full bg-main-background inner:!m-1 inner:rounded-full",
                                                imgClassName: "rounded-full transition group-hover:brightness-75 duration-200 group-focus-within:brightness-75",
                                                src: photoURL,
                                                alt: name,
                                                layout: "fill"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                                                className: "group/inner absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-light-primary/60 p-2 hover:bg-image-preview-hover/50 focus-visible:bg-image-preview-hover/50",
                                                onClick: handleClick("profile"),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_5__/* .HeroIcon */ .e, {
                                                        className: "hover-animation h-6 w-6 text-dark-primary group-hover:text-white",
                                                        iconName: "CameraIcon"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_7__/* .ToolTip */ .e, {
                                                        groupInner: true,
                                                        tip: "Add photo"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            children,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                                className: "accent-tab -mx-4 mb-4 flex cursor-not-allowed items-center justify-between rounded-none py-2 hover:bg-light-primary/10 active:bg-light-primary/20 disabled:brightness-100 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "mx-2 text-xl",
                                        children: "Switch to professional"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_5__/* .HeroIcon */ .e, {
                                            className: "h-6 w-6 text-light-secondary dark:text-dark-secondary",
                                            iconName: "ChevronRightIcon"
                                        })
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

/***/ 7616:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ UserDetails)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1944);
/* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4266);
/* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3276);
/* harmony import */ var _user_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4531);
/* harmony import */ var _user_following__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6154);
/* harmony import */ var _user_follow_stats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8647);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_user_following__WEBPACK_IMPORTED_MODULE_5__, _user_follow_stats__WEBPACK_IMPORTED_MODULE_6__]);
([_user_following__WEBPACK_IMPORTED_MODULE_5__, _user_follow_stats__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function UserDetails({ id , bio , name , website , username , location , verified , createdAt , following , followers  }) {
    const detailIcons = [
        [
            location,
            "MapPinIcon"
        ],
        [
            website,
            "LinkIcon"
        ],
        [
            `Joined ${(0,_lib_date__WEBPACK_IMPORTED_MODULE_1__/* .formatDate */ .p)(createdAt, "joined")}`,
            "CalendarDaysIcon"
        ]
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_user_name__WEBPACK_IMPORTED_MODULE_4__/* .UserName */ .v, {
                        className: "-mb-1 text-xl",
                        name: name,
                        iconClassName: "w-6 h-6",
                        verified: verified
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center gap-1 text-light-secondary dark:text-dark-secondary",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "@",
                                    username
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_user_following__WEBPACK_IMPORTED_MODULE_5__/* .UserFollowing */ .y, {
                                userTargetId: id
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                    bio && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "whitespace-pre-line break-words",
                        children: bio
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-wrap gap-x-3 gap-y-1 text-light-secondary dark:text-dark-secondary",
                        children: detailIcons.map(([detail, icon], index)=>detail && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_2__/* .HeroIcon */ .e, {
                                            className: "h-5 w-5",
                                            iconName: icon
                                        })
                                    }),
                                    index === 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "custom-underline text-main-accent",
                                        href: `https://${detail}`,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: detail
                                    }) : index === 2 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: "custom-underline group relative",
                                        children: [
                                            detail,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_3__/* .ToolTip */ .e, {
                                                className: "translate-y-1",
                                                tip: (0,_lib_date__WEBPACK_IMPORTED_MODULE_1__/* .formatDate */ .p)(createdAt, "full")
                                            })
                                        ]
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: detail
                                    })
                                ]
                            }, icon))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_user_follow_stats__WEBPACK_IMPORTED_MODULE_6__/* .UserFollowStats */ .t, {
                following: following,
                followers: followers
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7276:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ UserEditProfile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6201);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_context_user_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5127);
/* harmony import */ var _lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3040);
/* harmony import */ var _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7359);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6269);
/* harmony import */ var _lib_validation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3521);
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9099);
/* harmony import */ var _components_modal_edit_profile_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7903);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4685);
/* harmony import */ var _components_input_input_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2050);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_2__, _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_6__, _components_modal_modal__WEBPACK_IMPORTED_MODULE_7__, _components_modal_edit_profile_modal__WEBPACK_IMPORTED_MODULE_8__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_2__, _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_6__, _components_modal_modal__WEBPACK_IMPORTED_MODULE_7__, _components_modal_edit_profile_modal__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function UserEditProfile({ hide  }) {
    var ref;
    const { user  } = (0,_lib_context_user_context__WEBPACK_IMPORTED_MODULE_4__/* .useUser */ .aF)();
    const { open , openModal , closeModal  } = (0,_lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_5__/* .useModal */ .d)();
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { bio , name , website , location , photoURL , coverPhotoURL  } = user;
    const { 0: editUserData , 1: setEditUserData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        bio,
        name,
        website,
        photoURL,
        location,
        coverPhotoURL
    });
    const { 0: userImages , 1: setUserImages  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        photoURL: [],
        coverPhotoURL: []
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>cleanImage, []);
    const inputNameError = !((ref = editUserData.name) === null || ref === void 0 ? void 0 : ref.trim()) ? "Name can't be blank" : "";
    const updateData = async ()=>{
        setLoading(true);
        const userId = user === null || user === void 0 ? void 0 : user.id;
        const { photoURL , coverPhotoURL: coverURL  } = userImages;
        const [newPhotoURL, newCoverPhotoURL] = await Promise.all([
            photoURL,
            coverURL
        ].map((image)=>(0,_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_6__/* .uploadImages */ .eg)(userId, image)));
        const newImages = {
            coverPhotoURL: coverPhotoURL === editUserData.coverPhotoURL ? coverPhotoURL : (newCoverPhotoURL === null || newCoverPhotoURL === void 0 ? void 0 : newCoverPhotoURL[0].src) ?? null,
            ...newPhotoURL && {
                photoURL: newPhotoURL[0].src
            }
        };
        const trimmedKeys = [
            "name",
            "bio",
            "location",
            "website"
        ];
        const trimmedTexts = trimmedKeys.reduce((acc, curr)=>{
            var ref;
            return {
                ...acc,
                [curr]: ((ref = editUserData[curr]) === null || ref === void 0 ? void 0 : ref.trim()) ?? null
            };
        }, {});
        const newUserData = {
            ...editUserData,
            ...trimmedTexts,
            ...newImages
        };
        await (0,_lib_utils__WEBPACK_IMPORTED_MODULE_11__/* .sleep */ ._v)(500);
        await (0,_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_6__/* .updateUserData */ .Al)(userId, newUserData);
        closeModal();
        cleanImage();
        setLoading(false);
        setEditUserData(newUserData);
        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success("Profile updated successfully");
    };
    const editImage = (type)=>({ target: { files  }  })=>{
            const imagesData = (0,_lib_validation__WEBPACK_IMPORTED_MODULE_12__/* .getImagesData */ .t6)(files);
            if (!imagesData) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error("Please choose a valid GIF or Photo");
                return;
            }
            const { imagesPreviewData , selectedImagesData  } = imagesData;
            const targetKey = type === "cover" ? "coverPhotoURL" : "photoURL";
            const newImage = imagesPreviewData[0].src;
            setEditUserData({
                ...editUserData,
                [targetKey]: newImage
            });
            setUserImages({
                ...userImages,
                [targetKey]: selectedImagesData
            });
        };
    const removeCoverImage = ()=>{
        setEditUserData({
            ...editUserData,
            coverPhotoURL: null
        });
        setUserImages({
            ...userImages,
            coverPhotoURL: []
        });
        URL.revokeObjectURL(editUserData.coverPhotoURL ?? "");
    };
    const cleanImage = ()=>{
        const imagesKey = [
            "photoURL",
            "coverPhotoURL"
        ];
        imagesKey.forEach((image)=>URL.revokeObjectURL(editUserData[image] ?? ""));
        setUserImages({
            photoURL: [],
            coverPhotoURL: []
        });
    };
    const resetUserEditData = ()=>setEditUserData({
            bio,
            name,
            website,
            photoURL,
            location,
            coverPhotoURL
        });
    const handleChange = (key)=>({ target: { value  }  })=>setEditUserData({
                ...editUserData,
                [key]: value
            });
    const handleKeyboardShortcut = ({ key , target , ctrlKey  })=>{
        if (ctrlKey && key === "Enter" && !inputNameError) {
            target.blur();
            void updateData();
        }
    };
    const inputFields = [
        {
            label: "Name",
            inputId: "name",
            inputValue: editUserData.name,
            inputLimit: 50,
            errorMessage: inputNameError
        },
        {
            label: "Bio",
            inputId: "bio",
            inputValue: editUserData.bio,
            inputLimit: 160,
            useTextArea: true
        },
        {
            label: "Location",
            inputId: "location",
            inputValue: editUserData.location,
            inputLimit: 30
        },
        {
            label: "Website",
            inputId: "website",
            inputValue: editUserData.website,
            inputLimit: 100
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(hide && "hidden md:block"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_modal__WEBPACK_IMPORTED_MODULE_7__/* .Modal */ .u_, {
                modalClassName: "relative bg-main-background rounded-2xl max-w-xl w-full h-[672px] overflow-hidden",
                open: open,
                closeModal: closeModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_edit_profile_modal__WEBPACK_IMPORTED_MODULE_8__/* .EditProfileModal */ .y, {
                    name: name,
                    loading: loading,
                    photoURL: editUserData.photoURL,
                    coverPhotoURL: editUserData.coverPhotoURL,
                    inputNameError: inputNameError,
                    editImage: editImage,
                    closeModal: closeModal,
                    updateData: updateData,
                    removeCoverImage: removeCoverImage,
                    resetUserEditData: resetUserEditData,
                    children: inputFields.map((inputData)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_input_input_field__WEBPACK_IMPORTED_MODULE_10__/* .InputField */ .U, {
                            ...inputData,
                            handleChange: handleChange(inputData.inputId),
                            handleKeyboardShortcut: handleKeyboardShortcut,
                            key: inputData.inputId
                        }))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_9__/* .Button */ .z, {
                className: "dark-bg-tab self-start border border-light-line-reply px-4 py-1.5 font-bold hover:bg-light-primary/10 active:bg-light-primary/20 dark:border-light-secondary dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20",
                onClick: openModal,
                children: "Edit profile"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8647:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ UserFollowStats)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_tweet_number_stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5072);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_tweet_number_stats__WEBPACK_IMPORTED_MODULE_4__]);
_components_tweet_number_stats__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable react-hooks/exhaustive-deps */ 




function UserFollowStats({ following , followers  }) {
    const totalFollowing = following.length;
    const totalFollowers = followers.length;
    const { 0: { currentFollowers , currentFollowing  } , 1: setCurrentStats  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        currentFollowing: totalFollowing,
        currentFollowers: totalFollowers
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setCurrentStats({
            currentFollowing: totalFollowing,
            currentFollowers: totalFollowers
        });
    }, [
        totalFollowing,
        totalFollowers
    ]);
    const followingMove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>totalFollowing > currentFollowing ? -25 : 25, [
        totalFollowing
    ]);
    const followersMove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>totalFollowers > currentFollowers ? -25 : 25, [
        totalFollowers
    ]);
    const { query: { id  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const userPath = `/user/${id}`;
    const allStats = [
        [
            "Following",
            `${userPath}/following`,
            followingMove,
            currentFollowing
        ],
        [
            "Follower",
            `${userPath}/followers`,
            followersMove,
            currentFollowers
        ]
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex gap-4 text-light-secondary dark:text-dark-secondary [&>a>div]:font-bold [&>a>div]:text-light-primary dark:[&>a>div]:text-dark-primary",
        children: allStats.map(([title, link, move, stats], index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: link,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    className: "hover-animation mt-0.5 mb-[3px] flex h-4 items-center gap-1 border-b border-b-transparent outline-none hover:border-b-light-primary focus-visible:border-b-light-primary dark:hover:border-b-dark-primary dark:focus-visible:border-b-dark-primary",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_tweet_number_stats__WEBPACK_IMPORTED_MODULE_4__/* .NumberStats */ .H, {
                            move: move,
                            stats: stats,
                            alwaysShowStats: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: index === 1 && stats > 1 ? `${title}s` : title
                        })
                    ]
                })
            }, title))
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3995:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ UserHomeAvatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3040);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4685);
/* harmony import */ var _components_ui_next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4664);
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9099);
/* harmony import */ var _components_modal_image_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3644);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_modal_modal__WEBPACK_IMPORTED_MODULE_4__, _components_modal_image_modal__WEBPACK_IMPORTED_MODULE_5__]);
([_components_modal_modal__WEBPACK_IMPORTED_MODULE_4__, _components_modal_image_modal__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function UserHomeAvatar({ profileData  }) {
    const { open , openModal , closeModal  } = (0,_lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_1__/* .useModal */ .d)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-8 xs:mb-14 sm:mb-16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_modal__WEBPACK_IMPORTED_MODULE_4__/* .Modal */ .u_, {
                open: open,
                closeModal: closeModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_image_modal__WEBPACK_IMPORTED_MODULE_5__/* .ImageModal */ .y, {
                    imageData: {
                        src: profileData === null || profileData === void 0 ? void 0 : profileData.src,
                        alt: profileData === null || profileData === void 0 ? void 0 : profileData.alt
                    },
                    previewCount: 1
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                className: "accent-tab absolute -mt-3 aspect-square w-24 -translate-y-1/2 overflow-hidden p-0 disabled:cursor-auto disabled:opacity-100 xs:w-32 sm:w-36 [&:hover>figure>span]:brightness-75",
                onClick: openModal,
                disabled: !profileData,
                children: profileData ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_next_image__WEBPACK_IMPORTED_MODULE_3__/* .NextImage */ .o, {
                    useSkeleton: true,
                    className: "hover-animation relative h-full w-full bg-main-background inner:!m-1 inner:rounded-full inner:transition inner:duration-200",
                    imgClassName: "rounded-full",
                    src: profileData.src,
                    alt: profileData.alt,
                    layout: "fill"
                }, profileData.src) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "h-full rounded-full bg-main-background p-1",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-full rounded-full bg-main-sidebar-background"
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2230:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ UserHomeCover)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3040);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4685);
/* harmony import */ var _components_ui_next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4664);
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9099);
/* harmony import */ var _components_modal_image_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3644);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_modal_modal__WEBPACK_IMPORTED_MODULE_4__, _components_modal_image_modal__WEBPACK_IMPORTED_MODULE_5__]);
([_components_modal_modal__WEBPACK_IMPORTED_MODULE_4__, _components_modal_image_modal__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function UserHomeCover({ coverData  }) {
    const { open , openModal , closeModal  } = (0,_lib_hooks_useModal__WEBPACK_IMPORTED_MODULE_1__/* .useModal */ .d)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-0.5 h-36 xs:h-48 sm:h-52",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_modal__WEBPACK_IMPORTED_MODULE_4__/* .Modal */ .u_, {
                open: open,
                closeModal: closeModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modal_image_modal__WEBPACK_IMPORTED_MODULE_5__/* .ImageModal */ .y, {
                    imageData: coverData,
                    previewCount: 1
                })
            }),
            coverData ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                className: "accent-tab relative h-full w-full rounded-none p-0 transition hover:brightness-75",
                onClick: openModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_next_image__WEBPACK_IMPORTED_MODULE_3__/* .NextImage */ .o, {
                    useSkeleton: true,
                    layout: "fill",
                    imgClassName: "object-cover",
                    src: coverData.src,
                    alt: coverData.alt
                }, coverData.src)
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-full bg-light-line-reply dark:bg-dark-line-reply"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8121:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ UserShare)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6201);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6269);
/* harmony import */ var _lib_env__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1923);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4685);
/* harmony import */ var _components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4266);
/* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3276);
/* harmony import */ var _components_tweet_tweet_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _components_tweet_tweet_actions__WEBPACK_IMPORTED_MODULE_8__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _components_tweet_tweet_actions__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function UserShare({ username  }) {
    const handleCopy = (closeMenu)=>async ()=>{
            closeMenu();
            await navigator.clipboard.writeText(`${_lib_env__WEBPACK_IMPORTED_MODULE_9__/* .siteURL */ .f7}/user/${username}`);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.toast.success("Copied to clipboard");
        };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Popover, {
        className: "relative",
        children: ({ open , close  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Popover.Button, {
                        as: _components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z,
                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(`dark-bg-tab group relative border border-light-line-reply p-2
               hover:bg-light-primary/10 active:bg-light-primary/20 dark:border-light-secondary
               dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20`, open && "bg-light-primary/10 dark:bg-dark-primary/10"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_6__/* .HeroIcon */ .e, {
                                className: "h-5 w-5",
                                iconName: "EllipsisHorizontalIcon"
                            }),
                            !open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_7__/* .ToolTip */ .e, {
                                tip: "More"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {
                        children: open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Popover.Panel, {
                            className: "menu-container group absolute right-0 top-11 whitespace-nowrap text-light-primary dark:text-dark-primary",
                            as: framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div,
                            ..._components_tweet_tweet_actions__WEBPACK_IMPORTED_MODULE_8__/* .variants */ .o,
                            static: true,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Popover.Button, {
                                className: "flex w-full gap-3 rounded-md rounded-b-none p-4 hover:bg-main-sidebar-background",
                                as: _components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z,
                                onClick: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_10__/* .preventBubbling */ .Db)(handleCopy(close)),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hero_icon__WEBPACK_IMPORTED_MODULE_6__/* .HeroIcon */ .e, {
                                        iconName: "LinkIcon"
                                    }),
                                    "Copy link to Profile"
                                ]
                            })
                        })
                    })
                ]
            })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;