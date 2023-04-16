"use strict";
exports.id = 89;
exports.ids = [89];
exports.modules = {

/***/ 4089:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ useInfiniteScroll)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
/* harmony import */ var _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7359);
/* harmony import */ var _components_ui_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9570);
/* harmony import */ var _useCollection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3639);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_4__, _useCollection__WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_4__, _useCollection__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react-hooks/exhaustive-deps */ 






function useInfiniteScroll(collection, queryConstraints, fetchOptions, options) {
    const { initialSize , stepSize , marginBottom  } = options ?? {};
    const { 0: tweetsLimit , 1: setTweetsLimit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialSize ?? 20);
    const { 0: tweetsSize , 1: setTweetsSize  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: reachedLimit , 1: setReachedLimit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: loadMoreInView , 1: setLoadMoreInView  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { data , loading  } = (0,_useCollection__WEBPACK_IMPORTED_MODULE_6__/* .useCollection */ .K)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(collection, ...[
        ...queryConstraints ?? [],
        ...!reachedLimit ? [
            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(tweetsLimit)
        ] : []
    ]), fetchOptions);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const checkLimit = tweetsSize ? tweetsLimit >= tweetsSize : false;
        setReachedLimit(checkLimit);
    }, [
        tweetsSize,
        tweetsLimit
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (reachedLimit) return;
        const setTweetsLength = async ()=>{
            const currentTweetsSize = await (0,_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_4__/* .getCollectionCount */ .BB)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(collection, ...queryConstraints ?? []));
            setTweetsSize(currentTweetsSize);
        };
        void setTweetsLength();
    }, [
        data === null || data === void 0 ? void 0 : data.length
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (reachedLimit) return;
        if (loadMoreInView) setTweetsLimit(tweetsLimit + (stepSize ?? 20));
    }, [
        loadMoreInView
    ]);
    const makeItInView = ()=>setLoadMoreInView(true);
    const makeItNotInView = ()=>setLoadMoreInView(false);
    const isLoadMoreHidden = reachedLimit && ((data === null || data === void 0 ? void 0 : data.length) ?? 0) >= (tweetsSize ?? 0);
    const LoadMore = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            className: isLoadMoreHidden ? "hidden" : "block",
            viewport: {
                margin: `0px 0px ${marginBottom ?? 1000}px`
            },
            onViewportEnter: makeItInView,
            onViewportLeave: makeItNotInView,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loading__WEBPACK_IMPORTED_MODULE_5__/* .Loading */ .g, {
                className: "mt-5"
            })
        }), [
        isLoadMoreHidden
    ]);
    return {
        data,
        loading,
        LoadMore
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;