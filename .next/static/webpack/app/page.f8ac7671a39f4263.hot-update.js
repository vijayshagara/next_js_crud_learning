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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _RemoveBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RemoveBtn */ \"(app-pages-browser)/./components/RemoveBtn.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _barrel_optimize_names_HiPencilAlt_react_icons_hi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=HiPencilAlt!=!react-icons/hi */ \"(app-pages-browser)/./node_modules/react-icons/hi/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst TopicList = ()=>{\n    _s();\n    const [allData, setAllData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getdata = async ()=>{\n        const response = fetch(\"/api/topics\");\n        const data = await response.json();\n        if (data.length) {\n            setAllData(data);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getdata();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: allData.length && allData.map((d)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 border border-slate-300 my-3    flex justify-between gap-5 items-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"font-bold text-2xl\",\n                                children: d.title\n                            }, void 0, false, {\n                                fileName: \"D:\\\\project\\\\next_js_crud_learning\\\\components\\\\TopicList.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: d.description\n                            }, void 0, false, {\n                                fileName: \"D:\\\\project\\\\next_js_crud_learning\\\\components\\\\TopicList.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\project\\\\next_js_crud_learning\\\\components\\\\TopicList.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RemoveBtn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                id: d._id\n                            }, void 0, false, {\n                                fileName: \"D:\\\\project\\\\next_js_crud_learning\\\\components\\\\TopicList.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"/editTopic/\".concat(d._id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiPencilAlt_react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiPencilAlt, {\n                                    size: 24\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\project\\\\next_js_crud_learning\\\\components\\\\TopicList.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\project\\\\next_js_crud_learning\\\\components\\\\TopicList.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\project\\\\next_js_crud_learning\\\\components\\\\TopicList.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, d._id, true, {\n                fileName: \"D:\\\\project\\\\next_js_crud_learning\\\\components\\\\TopicList.jsx\",\n                lineNumber: 26,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false);\n};\n_s(TopicList, \"wvSF2ckxQjUNASfZMrdtN9Q7fbY=\");\n_c = TopicList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopicList);\nvar _c;\n$RefreshReg$(_c, \"TopicList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVG9waWNMaXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDbUQ7QUFDZjtBQUNQO0FBQ2dCO0FBRzdDLE1BQU1NLFlBQVk7O0lBQ2hCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU1PLFVBQVU7UUFDZCxNQUFNQyxXQUFXQyxNQUFNO1FBQ3ZCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtRQUNoQyxJQUFJRCxLQUFLRSxNQUFNLEVBQUU7WUFDZk4sV0FBV0k7UUFDYjtJQUNGO0lBRUFYLGdEQUFTQSxDQUFDO1FBQ1JRO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0U7a0JBQ0dGLFFBQVFPLE1BQU0sSUFDYlAsUUFBUVEsR0FBRyxDQUFDLENBQUNDLGtCQUNYLDhEQUFDQztnQkFFQ0MsV0FBVTs7a0NBR1YsOERBQUNEOzswQ0FDQyw4REFBQ0U7Z0NBQUdELFdBQVU7MENBQXNCRixFQUFFSSxLQUFLOzs7Ozs7MENBQzNDLDhEQUFDSDswQ0FBS0QsRUFBRUssV0FBVzs7Ozs7Ozs7Ozs7O2tDQUVyQiw4REFBQ0o7OzBDQUNDLDhEQUFDZCxrREFBU0E7Z0NBQUNtQixJQUFJTixFQUFFTyxHQUFHOzs7Ozs7MENBQ3BCLDhEQUFDbkIsaURBQUlBO2dDQUFDb0IsTUFBTSxjQUFvQixPQUFOUixFQUFFTyxHQUFHOzBDQUM3Qiw0RUFBQ2xCLDBGQUFXQTtvQ0FBQ29CLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztlQVhwQlQsRUFBRU8sR0FBRzs7Ozs7O0FBa0JwQjtHQXJDTWpCO0tBQUFBO0FBdUNOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9waWNMaXN0LmpzeD9hNjI0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiOyBcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlbW92ZUJ0biBmcm9tIFwiLi9SZW1vdmVCdG5cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBIaVBlbmNpbEFsdCB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xyXG5cclxuXHJcbmNvbnN0IFRvcGljTGlzdCA9ICgpID0+IHtcclxuICBjb25zdCBbYWxsRGF0YSwgc2V0QWxsRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgZ2V0ZGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gZmV0Y2goXCIvYXBpL3RvcGljc1wiKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBpZiAoZGF0YS5sZW5ndGgpIHtcclxuICAgICAgc2V0QWxsRGF0YShkYXRhKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0ZGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHthbGxEYXRhLmxlbmd0aCAmJlxyXG4gICAgICAgIGFsbERhdGEubWFwKChkKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBrZXk9e2QuX2lkfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIGJvcmRlci1zbGF0ZS0zMDAgbXktMyBcclxuICAgICAgICAgICAgZmxleCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTUgaXRlbXMtc3RhcnRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGxcIj57ZC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXY+e2QuZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxSZW1vdmVCdG4gaWQ9e2QuX2lkfS8+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9lZGl0VG9waWMvJHtkLl9pZH1gfT5cclxuICAgICAgICAgICAgICAgIDxIaVBlbmNpbEFsdCBzaXplPXsyNH0gLz5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9waWNMaXN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJlbW92ZUJ0biIsIkxpbmsiLCJIaVBlbmNpbEFsdCIsIlRvcGljTGlzdCIsImFsbERhdGEiLCJzZXRBbGxEYXRhIiwiZ2V0ZGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImxlbmd0aCIsIm1hcCIsImQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpZCIsIl9pZCIsImhyZWYiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/TopicList.jsx\n"));

/***/ })

});