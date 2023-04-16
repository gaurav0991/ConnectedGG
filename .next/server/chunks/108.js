"use strict";
exports.id = 108;
exports.ids = [108];
exports.modules = {

/***/ 2108:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HD": () => (/* binding */ AuthContextProvider),
/* harmony export */   "aC": () => (/* binding */ useAuth)
/* harmony export */ });
/* unused harmony export AuthContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
/* harmony import */ var _lib_firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1636);
/* harmony import */ var _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5342);
/* harmony import */ var _lib_random__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5195);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _lib_firebase_app__WEBPACK_IMPORTED_MODULE_4__, _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _lib_firebase_app__WEBPACK_IMPORTED_MODULE_4__, _lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function AuthContextProvider({ children  }) {
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: userBookmarks , 1: setUserBookmarks  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const manageUser = async (authUser)=>{
            const { uid , displayName , photoURL  } = authUser;
            const userSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__/* .usersCollection */ .W$, uid));
            if (!userSnapshot.exists()) {
                let available = false;
                let randomUsername = "";
                while(!available){
                    const normalizeName = displayName === null || displayName === void 0 ? void 0 : displayName.replace(/\s/g, "").toLowerCase();
                    const randomInt = (0,_lib_random__WEBPACK_IMPORTED_MODULE_6__/* .getRandomInt */ .X)(1, 10000);
                    randomUsername = `${normalizeName}${randomInt}`;
                    const randomUserSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__/* .usersCollection */ .W$, randomUsername));
                    if (!randomUserSnapshot.exists()) available = true;
                }
                const userData = {
                    id: uid,
                    bio: null,
                    name: displayName,
                    theme: null,
                    accent: null,
                    website: null,
                    location: null,
                    photoURL: photoURL,
                    username: randomUsername,
                    verified: false,
                    following: [],
                    followers: [],
                    createdAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.serverTimestamp)(),
                    updatedAt: null,
                    totalTweets: 0,
                    totalPhotos: 0,
                    pinnedTweet: null,
                    coverPhotoURL: null
                };
                const userStatsData = {
                    likes: [],
                    tweets: [],
                    updatedAt: null
                };
                try {
                    await Promise.all([
                        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__/* .usersCollection */ .W$, uid), userData),
                        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)((0,_lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__/* .userStatsCollection */ .bR)(uid), "stats"), userStatsData)
                    ]);
                    const newUser = (await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__/* .usersCollection */ .W$, uid))).data();
                    setUser(newUser);
                } catch (error) {
                    setError(error);
                }
            } else {
                const userData1 = userSnapshot.data();
                setUser(userData1);
            }
            setLoading(false);
        };
        const handleUserAuth = (authUser)=>{
            setLoading(true);
            if (authUser) void manageUser(authUser);
            else {
                setUser(null);
                setLoading(false);
            }
        };
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_lib_firebase_app__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I, handleUserAuth);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!user) return;
        const { id  } = user;
        const unsubscribeUser = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__/* .usersCollection */ .W$, id), (doc)=>{
            setUser(doc.data());
        });
        const unsubscribeBookmarks = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.onSnapshot)((0,_lib_firebase_collections__WEBPACK_IMPORTED_MODULE_5__/* .userBookmarksCollection */ .we)(id), (snapshot)=>{
            const bookmarks = snapshot.docs.map((doc)=>doc.data());
            setUserBookmarks(bookmarks);
        });
        return ()=>{
            unsubscribeUser();
            unsubscribeBookmarks();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        user === null || user === void 0 ? void 0 : user.id
    ]);
    const signInWithGoogle = async ()=>{
        try {
            const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();
            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_lib_firebase_app__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I, provider);
        } catch (error) {
            setError(error);
        }
    };
    const signOut = async ()=>{
        try {
            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(_lib_firebase_app__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I);
        } catch (error) {
            setError(error);
        }
    };
    const isAdmin = user ? user.username === "ccrsxx" : false;
    const randomSeed = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(_lib_random__WEBPACK_IMPORTED_MODULE_6__/* .getRandomId */ .w, [
        user === null || user === void 0 ? void 0 : user.id
    ]);
    const value = {
        user,
        error,
        loading,
        isAdmin,
        randomSeed,
        userBookmarks,
        signOut,
        signInWithGoogle
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: value,
        children: children
    });
}
function useAuth() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthContextProvider");
    return context;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1636:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ auth),
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "t": () => (/* binding */ storage)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3392);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(630);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)((0,_config__WEBPACK_IMPORTED_MODULE_4__/* .getFirebaseConfig */ .d)());
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)();
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5342:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VV": () => (/* binding */ tweetsCollection),
/* harmony export */   "W$": () => (/* binding */ usersCollection),
/* harmony export */   "bR": () => (/* binding */ userStatsCollection),
/* harmony export */   "we": () => (/* binding */ userBookmarksCollection)
/* harmony export */ });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1492);
/* harmony import */ var _lib_types_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3771);
/* harmony import */ var _lib_types_tweet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9144);
/* harmony import */ var _lib_types_bookmark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1524);
/* harmony import */ var _lib_types_stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7831);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1636);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, _app__WEBPACK_IMPORTED_MODULE_5__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, _app__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const usersCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_app__WEBPACK_IMPORTED_MODULE_5__.db, "users").withConverter(_lib_types_user__WEBPACK_IMPORTED_MODULE_1__/* .userConverter */ .x);
const tweetsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_app__WEBPACK_IMPORTED_MODULE_5__.db, "tweets").withConverter(_lib_types_tweet__WEBPACK_IMPORTED_MODULE_2__/* .tweetConverter */ .f);
function userBookmarksCollection(id) {
    return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_app__WEBPACK_IMPORTED_MODULE_5__.db, `users/${id}/bookmarks`).withConverter(_lib_types_bookmark__WEBPACK_IMPORTED_MODULE_3__/* .bookmarkConverter */ .N);
}
function userStatsCollection(id) {
    return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_app__WEBPACK_IMPORTED_MODULE_5__.db, `users/${id}/stats`).withConverter(_lib_types_stats__WEBPACK_IMPORTED_MODULE_4__/* .statsConverter */ .Y);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ getFirebaseConfig)
/* harmony export */ });
const config = {
    apiKey: "AIzaSyAijyJItJNjz1rmRycG2wXsoUqQfxwHaqw",
    authDomain: "expensenewtracker.firebaseapp.com",
    projectId: "expensenewtracker",
    storageBucket: "expensenewtracker.appspot.com",
    messagingSenderId: "527144301736",
    appId: "1:527144301736:web:ec87b286e8f3342794fe9d",
    measurementId: "G-QMP7PCCZBN"
};
function getFirebaseConfig() {
    if (Object.values(config).some((value)=>!value)) throw new Error("Firebase config is not set or incomplete");
    return config;
}


/***/ }),

/***/ 5195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ getRandomInt),
/* harmony export */   "w": () => (/* binding */ getRandomId)
/* harmony export */ });
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function getRandomId() {
    return Array.from({
        length: 20
    }).reduce((acc)=>acc + CHARS[~~(Math.random() * CHARS.length)], "");
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/***/ }),

/***/ 1524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ bookmarkConverter)
/* harmony export */ });
const bookmarkConverter = {
    toFirestore (bookmark) {
        return {
            ...bookmark
        };
    },
    fromFirestore (snapshot, options) {
        const data = snapshot.data(options);
        return {
            ...data
        };
    }
};


/***/ }),

/***/ 7831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ statsConverter)
/* harmony export */ });
const statsConverter = {
    toFirestore (bookmark) {
        return {
            ...bookmark
        };
    },
    fromFirestore (snapshot, options) {
        const data = snapshot.data(options);
        return {
            ...data
        };
    }
};


/***/ }),

/***/ 9144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ tweetConverter)
/* harmony export */ });
const tweetConverter = {
    toFirestore (tweet) {
        return {
            ...tweet
        };
    },
    fromFirestore (snapshot, options) {
        const { id  } = snapshot;
        const data = snapshot.data(options);
        return {
            id,
            ...data
        };
    }
};


/***/ }),

/***/ 3771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ userConverter)
/* harmony export */ });
const userConverter = {
    toFirestore (user) {
        return {
            ...user
        };
    },
    fromFirestore (snapshot, options) {
        const data = snapshot.data(options);
        return {
            ...data
        };
    }
};


/***/ })

};
;