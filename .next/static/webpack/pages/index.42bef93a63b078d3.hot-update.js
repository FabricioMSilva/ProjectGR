"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/PushMat.tsx":
/*!***************************!*\
  !*** ./pages/PushMat.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PushMat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction PushMat(ID) {\n    _s();\n    const [todmat, setTodmat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getAllData = ()=>{\n        fetch(\"/api/materiais/Materiais\").then((result)=>result.json()).then((result)=>setTodmat(result));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getAllData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Material para Reparo\"\n            }, void 0, false, {\n                fileName: \"/home/fabriciosilva/\\xc1rea de Trabalho/ProjectGr/ProjetoGR/projectgr/Project/pages/PushMat.tsx\",\n                lineNumber: 20,\n                columnNumber: 12\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ID, {}, void 0, false, {\n                fileName: \"/home/fabriciosilva/\\xc1rea de Trabalho/ProjectGr/ProjetoGR/projectgr/Project/pages/PushMat.tsx\",\n                lineNumber: 21,\n                columnNumber: 12\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"ID\"\n                                }, void 0, false, {\n                                    fileName: \"/home/fabriciosilva/\\xc1rea de Trabalho/ProjectGr/ProjetoGR/projectgr/Project/pages/PushMat.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"CODIGO\"\n                                }, void 0, false, {\n                                    fileName: \"/home/fabriciosilva/\\xc1rea de Trabalho/ProjectGr/ProjetoGR/projectgr/Project/pages/PushMat.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"MATERIAL\"\n                                }, void 0, false, {\n                                    fileName: \"/home/fabriciosilva/\\xc1rea de Trabalho/ProjectGr/ProjetoGR/projectgr/Project/pages/PushMat.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"QTD JN\"\n                                }, void 0, false, {\n                                    fileName: \"/home/fabriciosilva/\\xc1rea de Trabalho/ProjectGr/ProjetoGR/projectgr/Project/pages/PushMat.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/fabriciosilva/\\xc1rea de Trabalho/ProjectGr/ProjetoGR/projectgr/Project/pages/PushMat.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 25\n                        }, this),\n                        todmat === null || todmat === void 0 ? void 0 : todmat.map((item)=>{\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item === null || item === void 0 ? void 0 : item.ID\n                                    }, void 0, false, {\n                                        fileName: \"/home/fabriciosilva/\\xc1rea de Trabalho/ProjectGr/ProjetoGR/projectgr/Project/pages/PushMat.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item === null || item === void 0 ? void 0 : item.C\n                                    }, void 0, false, {\n                                        fileName: \"/home/fabriciosilva/\\xc1rea de Trabalho/ProjectGr/ProjetoGR/projectgr/Project/pages/PushMat.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item === null || item === void 0 ? void 0 : item.MATERIAL\n                                    }, void 0, false, {\n                                        fileName: \"/home/fabriciosilva/\\xc1rea de Trabalho/ProjectGr/ProjetoGR/projectgr/Project/pages/PushMat.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item === null || item === void 0 ? void 0 : item.UTILIZADO\n                                    }, void 0, false, {\n                                        fileName: \"/home/fabriciosilva/\\xc1rea de Trabalho/ProjectGr/ProjetoGR/projectgr/Project/pages/PushMat.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item === null || item === void 0 ? void 0 : item.REF\n                                    }, void 0, false, {\n                                        fileName: \"/home/fabriciosilva/\\xc1rea de Trabalho/ProjectGr/ProjetoGR/projectgr/Project/pages/PushMat.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item === null || item === void 0 ? void 0 : item.JN\n                                    }, void 0, false, {\n                                        fileName: \"/home/fabriciosilva/\\xc1rea de Trabalho/ProjectGr/ProjetoGR/projectgr/Project/pages/PushMat.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: item === null || item === void 0 ? void 0 : item.VALOR\n                                    }, void 0, false, {\n                                        fileName: \"/home/fabriciosilva/\\xc1rea de Trabalho/ProjectGr/ProjetoGR/projectgr/Project/pages/PushMat.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/fabriciosilva/\\xc1rea de Trabalho/ProjectGr/ProjetoGR/projectgr/Project/pages/PushMat.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/fabriciosilva/\\xc1rea de Trabalho/ProjectGr/ProjetoGR/projectgr/Project/pages/PushMat.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/fabriciosilva/\\xc1rea de Trabalho/ProjectGr/ProjetoGR/projectgr/Project/pages/PushMat.tsx\",\n                lineNumber: 23,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/fabriciosilva/\\xc1rea de Trabalho/ProjectGr/ProjetoGR/projectgr/Project/pages/PushMat.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_s(PushMat, \"KBdzMAJ9JjPWNzX+43e6HYD4yhk=\");\n_c = PushMat;\nvar _c;\n$RefreshReg$(_c, \"PushMat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9QdXNoTWF0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ21EO0FBRXBDLFNBQVNHLFFBQVFDLEVBQVMsRUFBRTs7SUFDdkMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFFdkMsTUFBTU0sYUFBYSxJQUFNO1FBQ3JCQyxNQUFNLDRCQUNKQyxJQUFJLENBQUMsQ0FBQ0MsU0FBU0EsT0FBT0MsSUFBSSxJQUN2QkYsSUFBSSxDQUFDLENBQUNDLFNBQVdKLFVBQVVJO0lBQ2hDO0lBR0pSLGdEQUFTQSxDQUFDLElBQU07UUFDWks7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ0s7OzBCQUNFLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDVDs7Ozs7MEJBRUksOERBQUNROzBCQUVHLDRFQUFDRTs7c0NBRUcsOERBQUNDOzs4Q0FDRyw4REFBQ0M7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs7Ozs7Ozt3QkFHWFgsbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRWSxHQUFHLENBQUMsQ0FBQ0M7MENBQ1YscUVBQUNIOztrREFDRyw4REFBQ0k7a0RBQUlELGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTWQsRUFBRTs7Ozs7O2tEQUNiLDhEQUFDZTtrREFBSUQsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNRSxDQUFDOzs7Ozs7a0RBQ1osOERBQUNEO2tEQUFJRCxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1HLFFBQVE7Ozs7OztrREFDbkIsOERBQUNGO2tEQUFJRCxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1JLFNBQVM7Ozs7OztrREFDcEIsOERBQUNIO2tEQUFJRCxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1LLEdBQUc7Ozs7OztrREFDZCw4REFBQ0o7a0RBQUlELGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTU0sRUFBRTs7Ozs7O2tEQUNiLDhEQUFDTDtrREFBSUQsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNTyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVNUMsQ0FBQztHQWhEdUJ0QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9QdXNoTWF0LnRzeD8zMjcyIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFB1c2hNYXQoSUQ6c3RyaW5nKSB7XG4gICAgY29uc3QgW3RvZG1hdCwgc2V0VG9kbWF0XSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGdldEFsbERhdGEgPSAoKSA9PiB7XG4gICAgICAgIGZldGNoKCcvYXBpL21hdGVyaWFpcy9NYXRlcmlhaXMnKVxuICAgICAgICAgLnRoZW4oKHJlc3VsdCk9PnJlc3VsdC5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiBzZXRUb2RtYXQocmVzdWx0KSlcbiAgICAgICAgfVxuICAgIFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0QWxsRGF0YSgpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICA8aDE+TWF0ZXJpYWwgcGFyYSBSZXBhcm88L2gxPlxuICAgICAgICAgICA8SUQvPlxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JRDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNPRElHTzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1BVEVSSUFMPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UVREIEpOPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICB7dG9kbWF0Py5tYXAoKGl0ZW06IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbT8uSUR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0/LkN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0/Lk1BVEVSSUFMfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtPy5VVElMSVpBRE99PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0/LlJFRn08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbT8uSk59PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0/LlZBTE9SfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG5cbiAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlB1c2hNYXQiLCJJRCIsInRvZG1hdCIsInNldFRvZG1hdCIsImdldEFsbERhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXN1bHQiLCJqc29uIiwiZGl2IiwiaDEiLCJ0YWJsZSIsInRyIiwidGgiLCJtYXAiLCJpdGVtIiwidGQiLCJDIiwiTUFURVJJQUwiLCJVVElMSVpBRE8iLCJSRUYiLCJKTiIsIlZBTE9SIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/PushMat.tsx\n"));

/***/ })

});