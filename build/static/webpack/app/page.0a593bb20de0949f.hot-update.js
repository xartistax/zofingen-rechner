"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/utils/calculations.ts":
/*!***************************************!*\
  !*** ./src/app/utils/calculations.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Calculator: function() { return /* binding */ Calculator; },\n/* harmony export */   pdfsDirectory: function() { return /* binding */ pdfsDirectory; }\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"(app-pages-browser)/./node_modules/next/dist/compiled/path-browserify/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n\nclass Calculator {\n    static calculateRechnungen(x) {\n        if (x >= 1 && x <= 5) {\n            return x * 9.5 * 12;\n        } else if (x >= 6 && x <= 10) {\n            return x * 8.25 * 12;\n        } else if (x >= 11 && x <= 20) {\n            return x * 7.5 * 12;\n        } else if (x >= 21 && x <= 30) {\n            return x * 7 * 12;\n        } else if (x >= 31 && x <= 50) {\n            return x * 6.5 * 12;\n        } else if (x >= 51 && x <= 75) {\n            return x * 6 * 12;\n        } else if (x >= 76 && x <= 100) {\n            return x * 5 * 12;\n        } else if (x > 100) {\n            return x * 4 * 12;\n        }\n    }\n    static calculateMwst(text) {\n        switch(text){\n            case \"Item 1\":\n                return 0;\n            case \"Item 2\":\n                return 360;\n            case \"Item 3\":\n                return 180;\n            case \"Item 4\":\n                return 90;\n        }\n    }\n    static calculateMitarbeiter(x) {\n        if (x >= 1 && x <= 9) {\n            return 348 * x;\n        } else if (x >= 10 && x <= 19) {\n            return 315 * x;\n        } else if (x >= 20 && x <= 29) {\n            return 300 * x;\n        } else if (x >= 30) {\n            return 270 * x;\n        }\n    }\n}\nconst pdfsDirectory = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"public\", \"pdfs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdXRpbHMvY2FsY3VsYXRpb25zLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtDO0FBRTNCLE1BQU1DO0lBRVQsT0FBT0Msb0JBQW9CQyxDQUFTLEVBQUU7UUFDbEMsSUFBSUEsS0FBSyxLQUFLQSxLQUFLLEdBQUc7WUFDbEIsT0FBT0EsSUFBSSxNQUFNO1FBQ3JCLE9BQU8sSUFBSUEsS0FBSyxLQUFLQSxLQUFLLElBQUk7WUFDMUIsT0FBT0EsSUFBSSxPQUFPO1FBQ3RCLE9BQU8sSUFBSUEsS0FBSyxNQUFNQSxLQUFLLElBQUk7WUFDM0IsT0FBT0EsSUFBSSxNQUFNO1FBQ3JCLE9BQU8sSUFBSUEsS0FBSyxNQUFNQSxLQUFLLElBQUk7WUFDM0IsT0FBT0EsSUFBSSxJQUFJO1FBQ25CLE9BQU8sSUFBSUEsS0FBSyxNQUFNQSxLQUFLLElBQUk7WUFDM0IsT0FBT0EsSUFBSSxNQUFNO1FBQ3JCLE9BQU8sSUFBSUEsS0FBSyxNQUFNQSxLQUFLLElBQUk7WUFDM0IsT0FBT0EsSUFBSSxJQUFJO1FBQ25CLE9BQU8sSUFBSUEsS0FBSyxNQUFNQSxLQUFLLEtBQUs7WUFDNUIsT0FBT0EsSUFBSSxJQUFJO1FBQ25CLE9BQU8sSUFBSUEsSUFBSSxLQUFLO1lBQ2hCLE9BQU9BLElBQUksSUFBSTtRQUNuQjtJQUNKO0lBRUEsT0FBT0MsY0FBY0MsSUFBUyxFQUFFO1FBQzVCLE9BQVFBO1lBQ0osS0FBSztnQkFDRCxPQUFPO1lBQ1gsS0FBSztnQkFDRCxPQUFPO1lBQ1gsS0FBSztnQkFDRCxPQUFPO1lBQ1gsS0FBSztnQkFDRCxPQUFPO1FBQ2Y7SUFDSjtJQUVBLE9BQU9DLHFCQUFxQkgsQ0FBUyxFQUFFO1FBQ25DLElBQUlBLEtBQUssS0FBS0EsS0FBSyxHQUFHO1lBQ2xCLE9BQU8sTUFBTUE7UUFDakIsT0FBTyxJQUFJQSxLQUFLLE1BQU1BLEtBQUssSUFBSTtZQUMzQixPQUFPLE1BQU1BO1FBQ2pCLE9BQU8sSUFBSUEsS0FBSyxNQUFNQSxLQUFLLElBQUk7WUFDM0IsT0FBTyxNQUFNQTtRQUNqQixPQUFPLElBQUlBLEtBQUssSUFBSTtZQUNoQixPQUFPLE1BQU1BO1FBQ2pCO0lBQ0o7QUFDSjtBQUtPLE1BQU1JLGdCQUF3QlAsZ0RBQVMsQ0FBQ1MsT0FBT0EsQ0FBQ0MsR0FBRyxJQUFJLFVBQVUsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3V0aWxzL2NhbGN1bGF0aW9ucy50cz8xYjI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoLCB7IGpvaW4gfSBmcm9tIFwicGF0aFwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsY3VsYXRvciB7XG5cbiAgICBzdGF0aWMgY2FsY3VsYXRlUmVjaG51bmdlbih4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHggPj0gMSAmJiB4IDw9IDUpIHtcbiAgICAgICAgICAgIHJldHVybiB4ICogOS41ICogMTI7XG4gICAgICAgIH0gZWxzZSBpZiAoeCA+PSA2ICYmIHggPD0gMTApIHtcbiAgICAgICAgICAgIHJldHVybiB4ICogOC4yNSAqIDEyO1xuICAgICAgICB9IGVsc2UgaWYgKHggPj0gMTEgJiYgeCA8PSAyMCkge1xuICAgICAgICAgICAgcmV0dXJuIHggKiA3LjUgKiAxMjtcbiAgICAgICAgfSBlbHNlIGlmICh4ID49IDIxICYmIHggPD0gMzApIHtcbiAgICAgICAgICAgIHJldHVybiB4ICogNyAqIDEyO1xuICAgICAgICB9IGVsc2UgaWYgKHggPj0gMzEgJiYgeCA8PSA1MCkge1xuICAgICAgICAgICAgcmV0dXJuIHggKiA2LjUgKiAxMjtcbiAgICAgICAgfSBlbHNlIGlmICh4ID49IDUxICYmIHggPD0gNzUpIHtcbiAgICAgICAgICAgIHJldHVybiB4ICogNiAqIDEyO1xuICAgICAgICB9IGVsc2UgaWYgKHggPj0gNzYgJiYgeCA8PSAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiB4ICogNSAqIDEyO1xuICAgICAgICB9IGVsc2UgaWYgKHggPiAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiB4ICogNCAqIDEyO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIHN0YXRpYyBjYWxjdWxhdGVNd3N0KHRleHQ6IGFueSkge1xuICAgICAgICBzd2l0Y2ggKHRleHQpIHtcbiAgICAgICAgICAgIGNhc2UgJ0l0ZW0gMSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICBjYXNlICdJdGVtIDInOlxuICAgICAgICAgICAgICAgIHJldHVybiAzNjA7XG4gICAgICAgICAgICBjYXNlICdJdGVtIDMnOlxuICAgICAgICAgICAgICAgIHJldHVybiAxODA7XG4gICAgICAgICAgICBjYXNlICdJdGVtIDQnOlxuICAgICAgICAgICAgICAgIHJldHVybiA5MDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjYWxjdWxhdGVNaXRhcmJlaXRlcih4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHggPj0gMSAmJiB4IDw9IDkpIHtcbiAgICAgICAgICAgIHJldHVybiAzNDggKiB4O1xuICAgICAgICB9IGVsc2UgaWYgKHggPj0gMTAgJiYgeCA8PSAxOSkge1xuICAgICAgICAgICAgcmV0dXJuIDMxNSAqIHg7XG4gICAgICAgIH0gZWxzZSBpZiAoeCA+PSAyMCAmJiB4IDw9IDI5KSB7XG4gICAgICAgICAgICByZXR1cm4gMzAwICogeDtcbiAgICAgICAgfSBlbHNlIGlmICh4ID49IDMwKSB7XG4gICAgICAgICAgICByZXR1cm4gMjcwICogeDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cblxuZXhwb3J0IGNvbnN0IHBkZnNEaXJlY3Rvcnk6IHN0cmluZyA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncHVibGljJywgJ3BkZnMnKTtcbiJdLCJuYW1lcyI6WyJwYXRoIiwiQ2FsY3VsYXRvciIsImNhbGN1bGF0ZVJlY2hudW5nZW4iLCJ4IiwiY2FsY3VsYXRlTXdzdCIsInRleHQiLCJjYWxjdWxhdGVNaXRhcmJlaXRlciIsInBkZnNEaXJlY3RvcnkiLCJqb2luIiwicHJvY2VzcyIsImN3ZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/utils/calculations.ts\n"));

/***/ })

});