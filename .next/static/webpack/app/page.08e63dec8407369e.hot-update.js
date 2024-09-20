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

/***/ "(app-pages-browser)/./components/TopicList.jsx":
/*!**********************************!*\
  !*** ./components/TopicList.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _RemoveBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RemoveBtn */ \"(app-pages-browser)/./components/RemoveBtn.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _barrel_optimize_names_HiPencilAlt_react_icons_hi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=HiPencilAlt!=!react-icons/hi */ \"(app-pages-browser)/./node_modules/react-icons/hi/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst TopicList = ()=>{\n    _s();\n    let orgin_url = process.env.ORGIN_URL;\n    const [allData, setAllData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const getdata = async ()=>{\n        const response = await fetch(\"/api/topics\");\n        const data = await response.json();\n        if (data.length) {\n            setAllData(data);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getdata();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: allData.length && allData.map((d)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 border border-slate-300 my-3    flex justify-between gap-5 items-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"font-bold text-2xl\",\n                                children: d.title\n                            }, void 0, false, {\n                                fileName: \"D:\\\\project\\\\next_js_crud_learning\\\\components\\\\TopicList.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: d.description\n                            }, void 0, false, {\n                                fileName: \"D:\\\\project\\\\next_js_crud_learning\\\\components\\\\TopicList.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\project\\\\next_js_crud_learning\\\\components\\\\TopicList.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RemoveBtn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                id: d._id\n                            }, void 0, false, {\n                                fileName: \"D:\\\\project\\\\next_js_crud_learning\\\\components\\\\TopicList.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"/editTopic/\".concat(d._id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiPencilAlt_react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiPencilAlt, {\n                                    size: 24\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\project\\\\next_js_crud_learning\\\\components\\\\TopicList.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\project\\\\next_js_crud_learning\\\\components\\\\TopicList.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\project\\\\next_js_crud_learning\\\\components\\\\TopicList.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, d._id, true, {\n                fileName: \"D:\\\\project\\\\next_js_crud_learning\\\\components\\\\TopicList.jsx\",\n                lineNumber: 30,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false);\n};\n_s(TopicList, \"ehJLP95BCq5r0NB/uuXz9VJGEsc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = TopicList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopicList);\nvar _c;\n$RefreshReg$(_c, \"TopicList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVG9waWNMaXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVtRDtBQUNmO0FBQ1A7QUFDZ0I7QUFDRDtBQUc1QyxNQUFNTyxZQUFZOztJQUNoQixJQUFJQyxZQUFZQyxPQUFPQSxDQUFDQyxHQUFHLENBQUNDLFNBQVM7SUFDckMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDLEVBQUU7SUFDekMsTUFBTVksU0FBU1IsMERBQVNBO0lBQ3hCLE1BQU1TLFVBQVU7UUFDZCxNQUFNQyxXQUFXLE1BQU1DLE1BQU87UUFDOUIsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1FBQ2hDLElBQUlELEtBQUtFLE1BQU0sRUFBRTtZQUNmUCxXQUFXSztRQUNiO0lBQ0Y7SUFFQWpCLGdEQUFTQSxDQUFDO1FBQ1JjO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0U7a0JBQ0dILFFBQVFRLE1BQU0sSUFDYlIsUUFBUVMsR0FBRyxDQUFDLENBQUNDLGtCQUNYLDhEQUFDQztnQkFFQ0MsV0FBVTs7a0NBR1YsOERBQUNEOzswQ0FDQyw4REFBQ0U7Z0NBQUdELFdBQVU7MENBQXNCRixFQUFFSSxLQUFLOzs7Ozs7MENBQzNDLDhEQUFDSDswQ0FBS0QsRUFBRUssV0FBVzs7Ozs7Ozs7Ozs7O2tDQUVyQiw4REFBQ0o7OzBDQUNDLDhEQUFDcEIsa0RBQVNBO2dDQUFDeUIsSUFBSU4sRUFBRU8sR0FBRzs7Ozs7OzBDQUNwQiw4REFBQ3pCLGlEQUFJQTtnQ0FBQzBCLE1BQU0sY0FBb0IsT0FBTlIsRUFBRU8sR0FBRzswQ0FDN0IsNEVBQUN4QiwwRkFBV0E7b0NBQUMwQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFYcEJULEVBQUVPLEdBQUc7Ozs7OztBQWtCcEI7R0F2Q010Qjs7UUFHV0Qsc0RBQVNBOzs7S0FIcEJDO0FBeUNOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9waWNMaXN0LmpzeD9hNjI0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiOyBcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZW1vdmVCdG4gZnJvbSBcIi4vUmVtb3ZlQnRuXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgSGlQZW5jaWxBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuXHJcbmNvbnN0IFRvcGljTGlzdCA9ICgpID0+IHtcclxuICBsZXQgb3JnaW5fdXJsID0gcHJvY2Vzcy5lbnYuT1JHSU5fVVJMXHJcbiAgY29uc3QgW2FsbERhdGEsIHNldEFsbERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgZ2V0ZGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvdG9waWNzYCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgaWYgKGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgIHNldEFsbERhdGEoZGF0YSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldGRhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7YWxsRGF0YS5sZW5ndGggJiZcclxuICAgICAgICBhbGxEYXRhLm1hcCgoZCkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXtkLl9pZH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC00IGJvcmRlciBib3JkZXItc2xhdGUtMzAwIG15LTMgXHJcbiAgICAgIGZsZXgganVzdGlmeS1iZXR3ZWVuIGdhcC01IGl0ZW1zLXN0YXJ0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMnhsXCI+e2QudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2PntkLmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8UmVtb3ZlQnRuIGlkPXtkLl9pZH0vPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZWRpdFRvcGljLyR7ZC5faWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8SGlQZW5jaWxBbHQgc2l6ZT17MjR9IC8+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcGljTGlzdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSZW1vdmVCdG4iLCJMaW5rIiwiSGlQZW5jaWxBbHQiLCJ1c2VSb3V0ZXIiLCJUb3BpY0xpc3QiLCJvcmdpbl91cmwiLCJwcm9jZXNzIiwiZW52IiwiT1JHSU5fVVJMIiwiYWxsRGF0YSIsInNldEFsbERhdGEiLCJyb3V0ZXIiLCJnZXRkYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibGVuZ3RoIiwibWFwIiwiZCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImlkIiwiX2lkIiwiaHJlZiIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/TopicList.jsx\n"));

/***/ })

});