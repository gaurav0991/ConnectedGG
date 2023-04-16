"use strict";
exports.id = 655;
exports.ids = [655];
exports.modules = {

/***/ 5655:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fg": () => (/* binding */ useTheme),
/* harmony export */   "ze": () => (/* binding */ ThemeContextProvider)
/* harmony export */ });
/* unused harmony export ThemeContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_firebase_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7359);
/* harmony import */ var _auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2108);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_2__, _auth_context__WEBPACK_IMPORTED_MODULE_3__]);
([_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_2__, _auth_context__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react-hooks/exhaustive-deps */ 



const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function setInitialTheme() {
    if (true) return "dark";
    const savedTheme = "dark";
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedTheme ?? (prefersDark ? "dark" : "light");
}
function setInitialAccent() {
    if (true) return "purple";
    const savedAccent = "purple";
    return savedAccent ?? "purple";
}
function ThemeContextProvider({ children  }) {
    const { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(setInitialTheme);
    const { 0: accent , 1: setAccent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(setInitialAccent);
    const { user  } = (0,_auth_context__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .aC)();
    const { id: userId , theme: userTheme , accent: userAccent  } = user ?? {};
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (user && userTheme) setTheme(userTheme);
    }, [
        userId,
        userTheme
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (user && userAccent) setAccent(userAccent);
    }, [
        userId,
        userAccent
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const flipTheme = (theme)=>{
            const root = document.documentElement;
            const targetTheme = theme === "dim" ? "dark" : theme;
            if (targetTheme === "dark") root.classList.add("dark");
            else root.classList.remove("dark");
            root.style.setProperty("--main-background", `var(--${theme}-background)`);
            root.style.setProperty("--main-search-background", `var(--${theme}-search-background)`);
            root.style.setProperty("--main-sidebar-background", `var(--${theme}-sidebar-background)`);
            if (user) {
                localStorage.setItem("theme", theme);
                return setTimeout(()=>void (0,_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_2__/* .updateUserTheme */ .Zs)(user.id, {
                        theme
                    }), 500);
            }
            return undefined;
        };
        const timeoutId = flipTheme(theme);
        return ()=>clearTimeout(timeoutId);
    }, [
        userId,
        theme
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const flipAccent = (accent)=>{
            const root = document.documentElement;
            root.style.setProperty("--main-accent", `var(--accent-${accent})`);
            if (user) {
                localStorage.setItem("accent", accent);
                return setTimeout(()=>void (0,_lib_firebase_utils__WEBPACK_IMPORTED_MODULE_2__/* .updateUserTheme */ .Zs)(user.id, {
                        accent
                    }), 500);
            }
            return undefined;
        };
        const timeoutId = flipAccent(accent);
        return ()=>clearTimeout(timeoutId);
    }, [
        userId,
        accent
    ]);
    const changeTheme = ({ target: { value  }  })=>setTheme(value);
    const changeAccent = ({ target: { value  }  })=>setAccent(value);
    const value = {
        theme,
        accent,
        changeTheme,
        changeAccent
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeContext.Provider, {
        value: value,
        children: children
    });
}
function useTheme() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);
    if (!context) throw new Error("useTheme must be used within an ThemeContextProvider");
    return context;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7359:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$1": () => (/* binding */ manageTotalTweets),
/* harmony export */   "Al": () => (/* binding */ updateUserData),
/* harmony export */   "BB": () => (/* binding */ getCollectionCount),
/* harmony export */   "EJ": () => (/* binding */ checkUsernameAvailability),
/* harmony export */   "Mq": () => (/* binding */ manageReply),
/* harmony export */   "R1": () => (/* binding */ manageLike),
/* harmony export */   "X_": () => (/* binding */ managePinnedTweet),
/* harmony export */   "Zs": () => (/* binding */ updateUserTheme),
/* harmony export */   "_A": () => (/* binding */ removeTweet),
/* harmony export */   "_S": () => (/* binding */ updateUsername),
/* harmony export */   "aE": () => (/* binding */ manageRetweet),
/* harmony export */   "as": () => (/* binding */ clearAllBookmarks),
/* harmony export */   "eg": () => (/* binding */ uploadImages),
/* harmony export */   "gL": () => (/* binding */ manageFollow),
/* harmony export */   "iq": () => (/* binding */ manageTotalPhotos),
/* harmony export */   "mN": () => (/* binding */ manageBookmark)
/* harmony export */ });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1492);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3392);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1636);
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5342);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, firebase_storage__WEBPACK_IMPORTED_MODULE_1__, _app__WEBPACK_IMPORTED_MODULE_2__, _collections__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, firebase_storage__WEBPACK_IMPORTED_MODULE_1__, _app__WEBPACK_IMPORTED_MODULE_2__, _collections__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function checkUsernameAvailability(username) {
    const { empty  } = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.query)(_collections__WEBPACK_IMPORTED_MODULE_3__/* .usersCollection */ .W$, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.where)("username", "==", username), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.limit)(1)));
    return empty;
}
async function getCollectionCount(collection) {
    const snapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getCountFromServer)(collection);
    return snapshot.data().count;
}
async function updateUserData(userId, userData) {
    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_collections__WEBPACK_IMPORTED_MODULE_3__/* .usersCollection */ .W$, userId);
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(userRef, {
        ...userData,
        updatedAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
    });
}
async function updateUserTheme(userId, themeData) {
    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_collections__WEBPACK_IMPORTED_MODULE_3__/* .usersCollection */ .W$, userId);
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(userRef, {
        ...themeData
    });
}
async function updateUsername(userId, username) {
    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_collections__WEBPACK_IMPORTED_MODULE_3__/* .usersCollection */ .W$, userId);
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(userRef, {
        ...username && {
            username
        },
        updatedAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
    });
}
async function managePinnedTweet(type, userId, tweetId) {
    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_collections__WEBPACK_IMPORTED_MODULE_3__/* .usersCollection */ .W$, userId);
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(userRef, {
        updatedAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)(),
        pinnedTweet: type === "pin" ? tweetId : null
    });
}
async function manageFollow(type, userId, targetUserId) {
    const batch = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.writeBatch)(_app__WEBPACK_IMPORTED_MODULE_2__.db);
    const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_collections__WEBPACK_IMPORTED_MODULE_3__/* .usersCollection */ .W$, userId);
    const targetUserDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_collections__WEBPACK_IMPORTED_MODULE_3__/* .usersCollection */ .W$, targetUserId);
    if (type === "follow") {
        batch.update(userDocRef, {
            following: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayUnion)(targetUserId),
            updatedAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
        });
        batch.update(targetUserDocRef, {
            followers: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayUnion)(userId),
            updatedAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
        });
    } else {
        batch.update(userDocRef, {
            following: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(targetUserId),
            updatedAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
        });
        batch.update(targetUserDocRef, {
            followers: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(userId),
            updatedAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
        });
    }
    await batch.commit();
}
async function removeTweet(tweetId) {
    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_collections__WEBPACK_IMPORTED_MODULE_3__/* .tweetsCollection */ .VV, tweetId);
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteDoc)(userRef);
}
async function uploadImages(userId, files) {
    if (!files.length) return null;
    const imagesPreview = await Promise.all(files.map(async (file)=>{
        let src;
        const { id , name: alt  } = file;
        const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.ref)(_app__WEBPACK_IMPORTED_MODULE_2__/* .storage */ .t, `images/${userId}/${alt}`);
        try {
            src = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getDownloadURL)(storageRef);
        } catch  {
            await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.uploadBytesResumable)(storageRef, file);
            src = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getDownloadURL)(storageRef);
        }
        return {
            id,
            src,
            alt
        };
    }));
    return imagesPreview;
}
async function manageReply(type, tweetId) {
    const tweetRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_collections__WEBPACK_IMPORTED_MODULE_3__/* .tweetsCollection */ .VV, tweetId);
    try {
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(tweetRef, {
            userReplies: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.increment)(type === "increment" ? 1 : -1),
            updatedAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
        });
    } catch  {
    // do nothing, because parent tweet was already deleted
    }
}
async function manageTotalTweets(type, userId) {
    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_collections__WEBPACK_IMPORTED_MODULE_3__/* .usersCollection */ .W$, userId);
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(userRef, {
        totalTweets: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.increment)(type === "increment" ? 1 : -1),
        updatedAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
    });
}
async function manageTotalPhotos(type, userId) {
    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_collections__WEBPACK_IMPORTED_MODULE_3__/* .usersCollection */ .W$, userId);
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(userRef, {
        totalPhotos: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.increment)(type === "increment" ? 1 : -1),
        updatedAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
    });
}
function manageRetweet(type, userId, tweetId) {
    return async ()=>{
        const batch = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.writeBatch)(_app__WEBPACK_IMPORTED_MODULE_2__.db);
        const tweetRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_collections__WEBPACK_IMPORTED_MODULE_3__/* .tweetsCollection */ .VV, tweetId);
        const userStatsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)((0,_collections__WEBPACK_IMPORTED_MODULE_3__/* .userStatsCollection */ .bR)(userId), "stats");
        if (type === "retweet") {
            batch.update(tweetRef, {
                userRetweets: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayUnion)(userId),
                updatedAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
            });
            batch.update(userStatsRef, {
                tweets: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayUnion)(tweetId),
                updatedAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
            });
        } else {
            batch.update(tweetRef, {
                userRetweets: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(userId),
                updatedAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
            });
            batch.update(userStatsRef, {
                tweets: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(tweetId),
                updatedAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
            });
        }
        await batch.commit();
    };
}
function manageLike(type, userId, tweetId) {
    return async ()=>{
        const batch = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.writeBatch)(_app__WEBPACK_IMPORTED_MODULE_2__.db);
        const userStatsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)((0,_collections__WEBPACK_IMPORTED_MODULE_3__/* .userStatsCollection */ .bR)(userId), "stats");
        const tweetRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(_collections__WEBPACK_IMPORTED_MODULE_3__/* .tweetsCollection */ .VV, tweetId);
        if (type === "like") {
            batch.update(tweetRef, {
                userLikes: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayUnion)(userId),
                updatedAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
            });
            batch.update(userStatsRef, {
                likes: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayUnion)(tweetId),
                updatedAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
            });
        } else {
            batch.update(tweetRef, {
                userLikes: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(userId),
                updatedAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
            });
            batch.update(userStatsRef, {
                likes: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayRemove)(tweetId),
                updatedAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
            });
        }
        await batch.commit();
    };
}
async function manageBookmark(type, userId, tweetId) {
    const bookmarkRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)((0,_collections__WEBPACK_IMPORTED_MODULE_3__/* .userBookmarksCollection */ .we)(userId), tweetId);
    if (type === "bookmark") {
        const bookmarkData = {
            id: tweetId,
            createdAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)()
        };
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)(bookmarkRef, bookmarkData);
    } else await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteDoc)(bookmarkRef);
}
async function clearAllBookmarks(userId) {
    const bookmarksRef = (0,_collections__WEBPACK_IMPORTED_MODULE_3__/* .userBookmarksCollection */ .we)(userId);
    const bookmarksSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(bookmarksRef);
    const batch = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.writeBatch)(_app__WEBPACK_IMPORTED_MODULE_2__.db);
    bookmarksSnapshot.forEach(({ ref  })=>batch.delete(ref));
    await batch.commit();
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;