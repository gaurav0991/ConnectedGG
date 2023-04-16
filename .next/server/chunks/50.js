"use strict";
exports.id = 50;
exports.ids = [50];
exports.modules = {

/***/ 2050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ InputField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


function InputField({ label , inputId , inputValue , inputLimit , useTextArea , errorMessage , handleChange , handleKeyboardShortcut  }) {
    const slicedInputValue = (inputValue === null || inputValue === void 0 ? void 0 : inputValue.slice(0, inputLimit)) ?? "";
    const inputLength = slicedInputValue.length;
    const isHittingInputLimit = inputLimit && inputLength > inputLimit;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col gap-1",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("relative rounded ring-1 transition-shadow duration-200", errorMessage ? "ring-accent-red" : `ring-light-line-reply focus-within:ring-2 
                 focus-within:!ring-main-accent dark:ring-dark-border`),
                children: [
                    useTextArea ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        className: "peer mt-6 w-full resize-none bg-inherit px-3 pb-1 placeholder-transparent outline-none transition",
                        id: inputId,
                        placeholder: inputId,
                        onChange: !isHittingInputLimit ? handleChange : undefined,
                        onKeyUp: handleKeyboardShortcut,
                        value: slicedInputValue,
                        rows: 3
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: "peer mt-6 w-full bg-inherit px-3 pb-1 placeholder-transparent outline-none transition",
                        id: inputId,
                        type: "text",
                        placeholder: inputId,
                        onChange: !isHittingInputLimit ? handleChange : undefined,
                        value: slicedInputValue,
                        onKeyUp: handleKeyboardShortcut
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(`group-peer absolute left-3 translate-y-1 bg-main-background text-sm
             text-light-secondary transition-all peer-placeholder-shown:translate-y-3
             peer-placeholder-shown:text-lg peer-focus:translate-y-1 peer-focus:text-sm
             dark:text-dark-secondary`, errorMessage ? "!text-accent-red peer-focus:text-accent-red" : "peer-focus:text-main-accent"),
                        htmlFor: inputId,
                        children: label
                    }),
                    inputLimit && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(`absolute right-3 top-0 translate-y-1 text-sm text-light-secondary transition-opacity 
               duration-200 peer-focus:visible peer-focus:opacity-100 dark:text-dark-secondary`, errorMessage ? "visible opacity-100" : "invisible opacity-0"),
                        children: [
                            inputLength,
                            " / ",
                            inputLimit
                        ]
                    })
                ]
            }),
            errorMessage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-sm text-accent-red",
                children: errorMessage
            })
        ]
    });
}


/***/ })

};
;