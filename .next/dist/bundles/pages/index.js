module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Welcome.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
var _jsxFileName = 'D:\\repos\\dev\\tileclick-game\\tileclick-game\\components\\Welcome.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ComponentWelcome = function (_Component) {
    _inherits(ComponentWelcome, _Component);

    function ComponentWelcome() {
        _classCallCheck(this, ComponentWelcome);

        return _possibleConstructorReturn(this, (ComponentWelcome.__proto__ || Object.getPrototypeOf(ComponentWelcome)).apply(this, arguments));
    }

    _createClass(ComponentWelcome, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                    className: 'jsx-3108616449' + ' ' + 'container-welcome-content',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'a',
                    { onClick: this.props.start, className: 'jsx-3108616449' + ' ' + 'start',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 7
                        }
                    },
                    'Start'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '3108616449',
                    css: '.container-welcome-content.jsx-3108616449{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;margin:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.start.jsx-3108616449{box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2);padding:0 2rem;text-transform:uppercase;border:none;border-radius:2px;font-size:1rem;outline:0;text-decoration:none;color:#fff;background-color:#26a69a;text-align:center;-webkit-letter-spacing:.5px;-moz-letter-spacing:.5px;-ms-letter-spacing:.5px;letter-spacing:.5px;height:54px;line-height:54px;position:relative;cursor:pointer;display:inline-block;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;vertical-align:middle;z-index:1;-webkit-transition:.3s ease-out;transition:.3s ease-out;}.start.jsx-3108616449:hover{outline:0;box-shadow:0 3px 3px 0 rgba(0,0,0,0.14),0 1px 7px 0 rgba(0,0,0,0.12),0 3px 1px -1px rgba(0,0,0,0.2);background-color:#2bbbad;}.start.jsx-3108616449:active{outline:0;}.start.jsx-3108616449:focus{background-color:#1d7d74;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFdlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2dDLEFBR3NDLEFBUXlGLEFBeUI1RixBQUtBLEFBR2UsVUFQNkUsQUFLMUcsZUFHQSxpREF6Q2UsV0FDRixTQUNVLE1BTUosVUEwQlUsS0F6QkEsb0JBMEI3QixLQXpCZ0IsWUFDTSxrQkFDSCxlQUNMLEVBVlksUUFXRCxxQkFDVixXQUNjLHlCQUNQLGFBYkssS0FjSCw4RkFieEIsR0FjZ0IsWUFDSyxpQkFDQyxrQkFDSCxlQUNNLHFCQUNMLGdCQUNDLHFGQUN1Qix3Q0FDbEIsc0JBQ1osVUFDYyx3REFDNUIiLCJmaWxlIjoiY29tcG9uZW50c1xcV2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9yZXBvcy9kZXYvdGlsZWNsaWNrLWdhbWUvdGlsZWNsaWNrLWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50V2VsY29tZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci13ZWxjb21lLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzdGFydFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuc3RhcnR9PlN0YXJ0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyLXdlbGNvbWUtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsMCwwLDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLDAuMTIpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YTY5YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLW91dDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0OmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggM3B4IDAgcmdiYSgwLDAsMCwwLjE0KSwgMCAxcHggN3B4IDAgcmdiYSgwLDAsMCwwLjEyKSwgMCAzcHggMXB4IC0xcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmJiYmFkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQ6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0OmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFkN2Q3NDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=components\\Welcome.js */'
                })
            );
        }
    }]);

    return ComponentWelcome;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ComponentWelcome);

/***/ }),

/***/ "./components/game/Game.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "D:\\repos\\dev\\tileclick-game\\tileclick-game\\components\\game\\Game.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Game = function (_Component) {
    _inherits(Game, _Component);

    function Game() {
        _classCallCheck(this, Game);

        return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).apply(this, arguments));
    }

    _createClass(Game, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "header",
                {
                    className: "jsx-939086276",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 5
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "div",
                    {
                        className: "jsx-939086276",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 6
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "h1",
                        {
                            className: "jsx-939086276" + " " + "title-text",
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 7
                            }
                        },
                        "TileClick"
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: "939086276",
                    css: "header.jsx-939086276{background:#3661B0;line-height:1;text-align:center;font-size:16px;margin:0;padding:0;width:100%;height:80px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.title-text.jsx-939086276{color:#fff;font-size:21px;font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGdhbWVcXEdhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUTRCLEFBR29DLEFBYVIsV0FDSSxRQWJELE9BY0UsT0FiRSxTQWN0QixTQWJtQixlQUNOLFNBQ0MsVUFDQyxXQUNDLFlBQ0MsMEVBQ00sNkZBQ0ksbUdBQzNCIiwiZmlsZSI6ImNvbXBvbmVudHNcXGdhbWVcXEdhbWUuanMiLCJzb3VyY2VSb290IjoiRDovcmVwb3MvZGV2L3RpbGVjbGljay1nYW1lL3RpbGVjbGljay1nYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUtdGV4dFwiPlRpbGVDbGljazwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNjYxQjA7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpdGxlLXRleHQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=components\\game\\Game.js */"
                })
            );
        }
    }]);

    return Game;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Game);

/***/ }),

/***/ "./components/game/Score.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "D:\\repos\\dev\\tileclick-game\\tileclick-game\\components\\game\\Score.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Score = function (_Component) {
    _inherits(Score, _Component);

    function Score() {
        _classCallCheck(this, Score);

        return _possibleConstructorReturn(this, (Score.__proto__ || Object.getPrototypeOf(Score)).apply(this, arguments));
    }

    _createClass(Score, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "div",
                {
                    className: "jsx-2752983132",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "div",
                    {
                        className: "jsx-2752983132" + " " + "container-score",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 7
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "div",
                        {
                            className: "jsx-2752983132" + " " + "container-score-titles",
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 8
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "p",
                            {
                                className: "jsx-2752983132" + " " + "score-title",
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 9
                                }
                            },
                            "Score"
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "p",
                            {
                                className: "jsx-2752983132" + " " + "score-title",
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 10
                                }
                            },
                            "Opponent"
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "p",
                            {
                                className: "jsx-2752983132" + " " + "score-title",
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 11
                                }
                            },
                            "Tiles Left"
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "p",
                            {
                                className: "jsx-2752983132" + " " + "score-title",
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 12
                                }
                            },
                            "Click Time"
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "div",
                        {
                            className: "jsx-2752983132" + " " + "container-score-values",
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 14
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "p",
                            {
                                className: "jsx-2752983132" + " " + "score-value",
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 15
                                }
                            },
                            this.props.score
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "p",
                            {
                                className: "jsx-2752983132" + " " + "score-value",
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 16
                                }
                            },
                            this.props.opponentscore
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "p",
                            {
                                className: "jsx-2752983132" + " " + "score-value",
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 17
                                }
                            },
                            this.props.tilesleft
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "p",
                            {
                                className: "jsx-2752983132" + " " + "score-value",
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 18
                                }
                            },
                            this.props.delay
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: "2752983132",
                    css: ".container-score.jsx-2752983132{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:50px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.container-score-titles.jsx-2752983132{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.container-score-values.jsx-2752983132{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.score-title.jsx-2752983132{width:25%;text-align:center;}.score-value.jsx-2752983132{width:25%;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGdhbWVcXFNjb3JlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CNEIsQUFHa0MsQUFRQSxBQU1BLEFBTUgsQUFJQSxVQUhRLEFBSUEsa0JBSHRCLEFBSUEsOENBekJ1QixBQVFSLEFBTUEsV0FMUSxBQU1BLGtGQWRSLFdBQ1csQUFRUSxBQU1BLDhFQWJkLGdCQUNhLHFCQU9qQyxBQU1BLHNHQVpBIiwiZmlsZSI6ImNvbXBvbmVudHNcXGdhbWVcXFNjb3JlLmpzIiwic291cmNlUm9vdCI6IkQ6L3JlcG9zL2Rldi90aWxlY2xpY2stZ2FtZS90aWxlY2xpY2stZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXNjb3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItc2NvcmUtdGl0bGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc2NvcmUtdGl0bGUnPlNjb3JlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3Njb3JlLXRpdGxlJz5PcHBvbmVudDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdzY29yZS10aXRsZSc+VGlsZXMgTGVmdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdzY29yZS10aXRsZSc+Q2xpY2sgVGltZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1zY29yZS12YWx1ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdzY29yZS12YWx1ZSc+e3RoaXMucHJvcHMuc2NvcmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3Njb3JlLXZhbHVlJz57dGhpcy5wcm9wcy5vcHBvbmVudHNjb3JlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdzY29yZS12YWx1ZSc+e3RoaXMucHJvcHMudGlsZXNsZWZ0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdzY29yZS12YWx1ZSc+e3RoaXMucHJvcHMuZGVsYXl9PC9wPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5jb250YWluZXItc2NvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyLXNjb3JlLXRpdGxlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb250YWluZXItc2NvcmUtdmFsdWVzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNjb3JlLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zY29yZS12YWx1ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=components\\game\\Score.js */"
                })
            );
        }
    }]);

    return Score;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Score);

/***/ }),

/***/ "./components/game/Tile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "D:\\repos\\dev\\tileclick-game\\tileclick-game\\components\\game\\Tile.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Tile = function (_Component) {
  _inherits(Tile, _Component);

  function Tile() {
    _classCallCheck(this, Tile);

    return _possibleConstructorReturn(this, (Tile.__proto__ || Object.getPrototypeOf(Tile)).apply(this, arguments));
  }

  _createClass(Tile, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-2001956454" + " " + "tile",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { onClick: function onClick() {
            return _this2.props.handleClick(_this2.props.active);
          }, className: "jsx-2001956454" + " " + (this.props.className || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "2001956454",
          css: ".tile.jsx-2001956454{border:1px solid white;background:#03A9F4;height:32%;width:32%;margin:0;box-sizing:content-box;}.active.jsx-2001956454{height:100%;width:100%;cursor:pointer;background:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGdhbWVcXFRpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT3NCLEFBR2dDLEFBU1gsWUFDRCxXQVRRLEFBVUosZUFDQSxJQVZKLFdBQ0QsQUFVWixVQVRXLFNBQ2MsdUJBQzNCIiwiZmlsZSI6ImNvbXBvbmVudHNcXGdhbWVcXFRpbGUuanMiLCJzb3VyY2VSb290IjoiRDovcmVwb3MvZGV2L3RpbGVjbGljay1nYW1lL3RpbGVjbGljay1nYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFRpbGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlsZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhhbmRsZUNsaWNrKHRoaXMucHJvcHMuYWN0aXZlKX0+PC9kaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC50aWxlIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDNBOUY0O1xyXG4gICAgICAgIGhlaWdodDogMzIlO1xyXG4gICAgICAgIHdpZHRoOiAzMiU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbGU7Il19 */\n/*@ sourceURL=components\\game\\Tile.js */"
        })
      );
    }
  }]);

  return Tile;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Tile);

/***/ }),

/***/ "./containers/Gameboard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("socket.io-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_game_Game__ = __webpack_require__("./components/game/Game.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_game_Tile__ = __webpack_require__("./components/game/Tile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_game_Score__ = __webpack_require__("./components/game/Score.js");
var _jsxFileName = 'D:\\repos\\dev\\tileclick-game\\tileclick-game\\containers\\Gameboard.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Gameboard = function (_Component) {
    _inherits(Gameboard, _Component);

    function Gameboard(props) {
        _classCallCheck(this, Gameboard);

        var _this = _possibleConstructorReturn(this, (Gameboard.__proto__ || Object.getPrototypeOf(Gameboard)).call(this, props));

        _this.postGame = function () {
            _this.props.postGame();
        };

        _this.handleClick = function (isActive) {
            if (isActive == 1) {
                var hit = Date.now();
                var delay = hit - _this.state.starttime;
                _this.props.socket.emit('score', { starttime: _this.state.starttime, hit: hit });
                // reset the gameboard
                _this.setState(function (prevState) {
                    if (prevState.maxactivetiles != 0) {
                        return { activetile: null, delay: delay, maxactivetiles: prevState.maxactivetiles - 1 };
                    }
                });
            }
        };

        _this.state = {
            starttime: null,
            activetile: null,
            score: 0,
            opponentscore: 0,
            delay: null,
            maxactivetiles: 10,
            isloading: true
        };
        return _this;
    }

    // componentWillMount() {
    //     this.props.socket.emit('ready', true)
    // }

    _createClass(Gameboard, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.props.socket.emit('ready', true);

            this.props.socket.on('activateboard', function (data) {
                _this2.setState(function (state, props) {
                    return _extends({}, data, { isloading: false
                    });
                });
            });
            this.props.socket.on('score', function (data) {
                _this2.setState(function (state, props) {
                    return _extends({}, data);
                });
            });
            this.props.socket.on('gamefinished', function (data) {
                if (data.gotopostgame === true) _this2.postGame();
            });
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            if (nextState.maxactivetiles === 0) {
                this.props.socket.emit('gamefinished', true);
            }
        }
    }, {
        key: 'renderTiles',
        value: function renderTiles() {
            var _this3 = this;

            var tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            return tiles.map(function (tile) {
                if (_this3.state.activetile === tile) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_game_Tile__["a" /* default */], { key: tile, className: 'active', handleClick: _this3.handleClick, active: 1, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                    }
                });else return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_game_Tile__["a" /* default */], { key: tile, active: 0, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 78
                    }
                });
            });
        }
    }, {
        key: 'showLoadingScreen',
        value: function showLoadingScreen() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                    className: 'jsx-2587049671',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83
                    }
                },
                ' ',
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                        className: 'jsx-2587049671' + ' ' + 'loading',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 83
                        }
                    },
                    'Waiting for other player to connect.'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '2587049671',
                    css: '.loading.jsx-2587049671{color:red;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXEdhbWVib2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRjRCLEFBR21DLFVBQ1Esa0JBQ3RCIiwiZmlsZSI6ImNvbnRhaW5lcnNcXEdhbWVib2FyZC5qcyIsInNvdXJjZVJvb3QiOiJEOi9yZXBvcy9kZXYvdGlsZWNsaWNrLWdhbWUvdGlsZWNsaWNrLWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXHJcbmltcG9ydCBDb21wb25lbnRHYW1lIGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZS9HYW1lJ1xyXG5pbXBvcnQgQ29tcG9uZW50VGlsZSBmcm9tICcuLi9jb21wb25lbnRzL2dhbWUvVGlsZSdcclxuaW1wb3J0IENvbXBvbmVudFNjb3JlIGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZS9TY29yZSdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHN0YXJ0dGltZTogbnVsbCxcclxuICAgICAgICAgICAgYWN0aXZldGlsZTogbnVsbCxcclxuICAgICAgICAgICAgc2NvcmU6IDAsXHJcbiAgICAgICAgICAgIG9wcG9uZW50c2NvcmU6IDAsXHJcbiAgICAgICAgICAgIGRlbGF5OiBudWxsLFxyXG4gICAgICAgICAgICBtYXhhY3RpdmV0aWxlczogMTAsXHJcbiAgICAgICAgICAgIGlzbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5wcm9wcy5zb2NrZXQuZW1pdCgncmVhZHknLCB0cnVlKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc29ja2V0LmVtaXQoJ3JlYWR5JywgdHJ1ZSlcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQub24oJ2FjdGl2YXRlYm9hcmQnLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSwgcHJvcHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgLi4uZGF0YSwgaXNsb2FkaW5nOmZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQub24oJ3Njb3JlJywgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUsIHByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgIC4uLmRhdGFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5vbignZ2FtZWZpbmlzaGVkJywgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZ290b3Bvc3RnYW1lID09PSB0cnVlKSB0aGlzLnBvc3RHYW1lKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XHJcbiAgICAgICAgaWYgKG5leHRTdGF0ZS5tYXhhY3RpdmV0aWxlcyA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5lbWl0KCdnYW1lZmluaXNoZWQnLCB0cnVlKVxyXG4gICAgICAgIH0gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHBvc3RHYW1lID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMucG9zdEdhbWUoKVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrID0gKGlzQWN0aXZlKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzQWN0aXZlID09IDEpIHtcclxuICAgICAgICAgICAgbGV0IGhpdCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGxldCBkZWxheSA9IGhpdCAtIHRoaXMuc3RhdGUuc3RhcnR0aW1lOyBcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQuZW1pdCgnc2NvcmUnLCB7c3RhcnR0aW1lIDogdGhpcy5zdGF0ZS5zdGFydHRpbWUsIGhpdDogaGl0fSlcclxuICAgICAgICAgICAgLy8gcmVzZXQgdGhlIGdhbWVib2FyZFxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZTdGF0ZS5tYXhhY3RpdmV0aWxlcyAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIHthY3RpdmV0aWxlOiBudWxsLCBkZWxheSA6IGRlbGF5LCBtYXhhY3RpdmV0aWxlczogcHJldlN0YXRlLm1heGFjdGl2ZXRpbGVzIC0gMX1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyVGlsZXMoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbGVzID0gWzEsMiwzLDQsNSw2LDcsOCw5XTtcclxuICAgICAgICAgICAgcmV0dXJuIHRpbGVzLm1hcCgodGlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZldGlsZSA9PT0gdGlsZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbXBvbmVudFRpbGUga2V5PXt0aWxlfSBjbGFzc05hbWU9XCJhY3RpdmVcIiBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGlja30gYWN0aXZlPXsxfS8+XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb21wb25lbnRUaWxlIGtleT17dGlsZX0gYWN0aXZlPXswfS8+XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0xvYWRpbmdTY3JlZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuICg8ZGl2PiA8cCBjbGFzc05hbWU9XCJsb2FkaW5nXCI+V2FpdGluZyBmb3Igb3RoZXIgcGxheWVyIHRvIGNvbm5lY3QuPC9wPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5sb2FkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgIH1cclxuXHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnRHYW1lIHN0YXJ0dGltZT17dGhpcy5zdGF0ZS5zdGFydHRpbWV9Lz5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNsb2FkaW5nID8gdGhpcy5zaG93TG9hZGluZ1NjcmVlbigpIDogPENvbXBvbmVudFNjb3JlIHNjb3JlPXt0aGlzLnN0YXRlLnNjb3JlfSBvcHBvbmVudHNjb3JlPXt0aGlzLnN0YXRlLm9wcG9uZW50c2NvcmV9IHRpbGVzbGVmdD17dGhpcy5zdGF0ZS5tYXhhY3RpdmV0aWxlc30gZGVsYXk9e3RoaXMuc3RhdGUuZGVsYXl9Lz59XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXRpbGVzXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJUaWxlcygpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyLXRpbGVzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMzVweCBhdXRvIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb250YWluZXItc2NvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=containers\\Gameboard.js */'
                })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                    className: 'jsx-318123692' + ' ' + 'container',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 96
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_game_Game__["a" /* default */], { starttime: this.state.starttime, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 97
                    }
                }),
                this.state.isloading ? this.showLoadingScreen() : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_game_Score__["a" /* default */], { score: this.state.score, opponentscore: this.state.opponentscore, tilesleft: this.state.maxactivetiles, delay: this.state.delay, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 98
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        className: 'jsx-318123692' + ' ' + 'container-tiles',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 99
                        }
                    },
                    this.renderTiles()
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '318123692',
                    css: '.container.jsx-318123692{position:relative;height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:#ffffff;}.container-tiles.jsx-318123692{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:35px auto 0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:10px;}.active.jsx-318123692{background:red !important;}.container-score.jsx-318123692{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXEdhbWVib2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzR3dCLEFBR3VDLEFBUUwsQUFVYSxBQUdiLGtCQXBCRCxRQWtCaEIsSUFqQmUsV0FDRSxpQ0FNRixBQWFrQixXQVpqQixZQUNPLGtCQVBHLDJFQVFILEdBUE0sSUFrQk4sWUFWSixTQVBuQixnREFRMkIsd0JBVVosV0FDZixnRUFWaUIsYUFDakIiLCJmaWxlIjoiY29udGFpbmVyc1xcR2FtZWJvYXJkLmpzIiwic291cmNlUm9vdCI6IkQ6L3JlcG9zL2Rldi90aWxlY2xpY2stZ2FtZS90aWxlY2xpY2stZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcclxuaW1wb3J0IENvbXBvbmVudEdhbWUgZnJvbSAnLi4vY29tcG9uZW50cy9nYW1lL0dhbWUnXHJcbmltcG9ydCBDb21wb25lbnRUaWxlIGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZS9UaWxlJ1xyXG5pbXBvcnQgQ29tcG9uZW50U2NvcmUgZnJvbSAnLi4vY29tcG9uZW50cy9nYW1lL1Njb3JlJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc3RhcnR0aW1lOiBudWxsLFxyXG4gICAgICAgICAgICBhY3RpdmV0aWxlOiBudWxsLFxyXG4gICAgICAgICAgICBzY29yZTogMCxcclxuICAgICAgICAgICAgb3Bwb25lbnRzY29yZTogMCxcclxuICAgICAgICAgICAgZGVsYXk6IG51bGwsXHJcbiAgICAgICAgICAgIG1heGFjdGl2ZXRpbGVzOiAxMCxcclxuICAgICAgICAgICAgaXNsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIC8vICAgICB0aGlzLnByb3BzLnNvY2tldC5lbWl0KCdyZWFkeScsIHRydWUpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQuZW1pdCgncmVhZHknLCB0cnVlKVxyXG5cclxuICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5vbignYWN0aXZhdGVib2FyZCcsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlLCBwcm9wcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAuLi5kYXRhLCBpc2xvYWRpbmc6ZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5vbignc2NvcmUnLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSwgcHJvcHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgLi4uZGF0YVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucHJvcHMuc29ja2V0Lm9uKCdnYW1lZmluaXNoZWQnLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5nb3RvcG9zdGdhbWUgPT09IHRydWUpIHRoaXMucG9zdEdhbWUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcclxuICAgICAgICBpZiAobmV4dFN0YXRlLm1heGFjdGl2ZXRpbGVzID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc29ja2V0LmVtaXQoJ2dhbWVmaW5pc2hlZCcsIHRydWUpXHJcbiAgICAgICAgfSAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcG9zdEdhbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5wb3N0R2FtZSgpXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2sgPSAoaXNBY3RpdmUpID0+IHtcclxuICAgICAgICBpZiAoaXNBY3RpdmUgPT0gMSkge1xyXG4gICAgICAgICAgICBsZXQgaGl0ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgbGV0IGRlbGF5ID0gaGl0IC0gdGhpcy5zdGF0ZS5zdGFydHRpbWU7IFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5lbWl0KCdzY29yZScsIHtzdGFydHRpbWUgOiB0aGlzLnN0YXRlLnN0YXJ0dGltZSwgaGl0OiBoaXR9KVxyXG4gICAgICAgICAgICAvLyByZXNldCB0aGUgZ2FtZWJvYXJkXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSk9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJldlN0YXRlLm1heGFjdGl2ZXRpbGVzICE9IDApIHtcclxuICAgICAgICAgICAgICAgICByZXR1cm4ge2FjdGl2ZXRpbGU6IG51bGwsIGRlbGF5IDogZGVsYXksIG1heGFjdGl2ZXRpbGVzOiBwcmV2U3RhdGUubWF4YWN0aXZldGlsZXMgLSAxfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJUaWxlcygpIHtcclxuICAgICAgICAgICAgY29uc3QgdGlsZXMgPSBbMSwyLDMsNCw1LDYsNyw4LDldO1xyXG4gICAgICAgICAgICByZXR1cm4gdGlsZXMubWFwKCh0aWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmV0aWxlID09PSB0aWxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29tcG9uZW50VGlsZSBrZXk9e3RpbGV9IGNsYXNzTmFtZT1cImFjdGl2ZVwiIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBhY3RpdmU9ezF9Lz5cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbXBvbmVudFRpbGUga2V5PXt0aWxlfSBhY3RpdmU9ezB9Lz5cclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93TG9hZGluZ1NjcmVlbigpIHtcclxuICAgICAgICByZXR1cm4gKDxkaXY+IDxwIGNsYXNzTmFtZT1cImxvYWRpbmdcIj5XYWl0aW5nIGZvciBvdGhlciBwbGF5ZXIgdG8gY29ubmVjdC48L3A+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmxvYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPENvbXBvbmVudEdhbWUgc3RhcnR0aW1lPXt0aGlzLnN0YXRlLnN0YXJ0dGltZX0vPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc2xvYWRpbmcgPyB0aGlzLnNob3dMb2FkaW5nU2NyZWVuKCkgOiA8Q29tcG9uZW50U2NvcmUgc2NvcmU9e3RoaXMuc3RhdGUuc2NvcmV9IG9wcG9uZW50c2NvcmU9e3RoaXMuc3RhdGUub3Bwb25lbnRzY29yZX0gdGlsZXNsZWZ0PXt0aGlzLnN0YXRlLm1heGFjdGl2ZXRpbGVzfSBkZWxheT17dGhpcy5zdGF0ZS5kZWxheX0vPn1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItdGlsZXNcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRpbGVzKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb250YWluZXItdGlsZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzNXB4IGF1dG8gMDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lci1zY29yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=containers\\Gameboard.js */'
                })
            );
        }
    }]);

    return Gameboard;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Gameboard);

/***/ }),

/***/ "./containers/Options.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("socket.io-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
var _jsxFileName = 'D:\\repos\\dev\\tileclick-game\\tileclick-game\\containers\\Options.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Options = function (_Component) {
    _inherits(Options, _Component);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this.ready = function () {
            _this.props.play();
        };

        _this.onChange = function (e) {
            var target = e.target;
            var value = target.type === 'checkbox' ? target.checked : target.value;
            var name = target.name;
            _this.setState(_defineProperty({}, name, value));
        };

        _this.handleSubmit = function (e) {
            e.preventDefault();
            if (_this.state.gamename.length < 1 && _this.state.playername.length < 1) _this.setState({ formerror: 'Please enter your name and game name' });else if (_this.state.gamename.length < 1) _this.setState({ formerror: 'Please enter game name' });else if (_this.state.playername.length < 1) _this.setState({ formerror: 'Please enter your name' });else if (!_this.state.joingame && !_this.state.newgame) _this.setState({ formerror: 'Please select option to create or join a game' });else if (_this.state.joingame && _this.state.newgame) {
                _this.setState({ formerror: 'Please select to join or create a game and not both' });
            } else if (_this.state.gamename.length > 0 && _this.state.playername.length > 0 && (_this.state.joingame && !_this.state.newgame || !_this.state.joingame && _this.state.newgame)) {
                _this.props.socket.emit('checkgameinfo', {
                    playername: _this.state.playername,
                    gamename: _this.state.gamename,
                    newgame: _this.state.newgame,
                    joingame: _this.state.joingame
                });
            }
        };

        _this.state = {
            playername: '',
            gamename: '',
            joingame: false,
            newgame: false,
            formerror: ''
        };
        return _this;
    }

    _createClass(Options, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.props.socket.on('formerror', function (data) {
                _this2.setState({ formerror: data });
            });
            this.props.socket.on("gotogameboard", function (data) {
                if (data === 'true') _this2.ready();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                    className: 'jsx-2734704444' + ' ' + 'container-options',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        className: 'jsx-2734704444' + ' ' + 'header',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        {
                            className: 'jsx-2734704444' + ' ' + 'header-text',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 63
                            }
                        },
                        'Options'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                        className: 'jsx-2734704444' + ' ' + 'form-error',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                        }
                    },
                    this.state.formerror
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'form',
                    { onSubmit: this.handleSubmit, className: 'jsx-2734704444',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        {
                            className: 'jsx-2734704444' + ' ' + 'input-field',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 66
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { id: 'playername', onChange: this.onChange, name: 'playername', type: 'text', className: 'jsx-2734704444',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 67
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'label',
                            { htmlFor: 'playername', className: 'jsx-2734704444',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 68
                                }
                            },
                            'Your Name'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        {
                            className: 'jsx-2734704444' + ' ' + 'input-field',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 70
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { id: 'gamename', onChange: this.onChange, name: 'gamename', type: 'text', className: 'jsx-2734704444',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 71
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'label',
                            { htmlFor: 'gamename', className: 'jsx-2734704444',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 72
                                }
                            },
                            'Game Name'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        {
                            className: 'jsx-2734704444' + ' ' + 'form-checkbox',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 74
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { onChange: this.onChange, checked: this.state.joingame, type: 'checkbox', name: 'joingame', id: 'joingame', className: 'jsx-2734704444',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 75
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'label',
                            { htmlFor: 'joingame', className: 'jsx-2734704444',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 76
                                }
                            },
                            'Join Game'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        {
                            className: 'jsx-2734704444' + ' ' + 'form-checkbox',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 78
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { onChange: this.onChange, checked: this.state.newgame, type: 'checkbox', name: 'newgame', id: 'newgame', className: 'jsx-2734704444',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 79
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'label',
                            { htmlFor: 'newgame', className: 'jsx-2734704444',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 80
                                }
                            },
                            'New Game'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'button',
                        { type: 'submit', className: 'jsx-2734704444' + ' ' + 'margin-top waves-effect waves-light btn-large',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 82
                            }
                        },
                        'Play'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '2734704444',
                    css: '.container-options.jsx-2734704444{margin:0;text-align:center;background:#ffffff;width:100%;height:400px;}.header.jsx-2734704444{height:60px;background-color:#3661B0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.header-text.jsx-2734704444{color:#fff;font-size:21px;font-weight:600;}.form-error.jsx-2734704444{color:#F44336;margin:15px 0 0 0;}form.jsx-2734704444{width:90%;margin:15px auto 0;}.form-checkbox.jsx-2734704444{margin:5px 0;}.margin-top.jsx-2734704444{margin-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXE9wdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUZnQyxBQUdrQyxBQU9HLEFBT0QsQUFLSyxBQUlOLEFBSUcsQUFHSyxTQTdCQSxDQXVCQyxDQVRKLENBUFUsQ0FvQjNCLENBUnNCLEVBV3RCLFVBZmtCLENBZEcsRUF1QnJCLEdBSkEsS0FaZSxLQVFmLElBZGEsV0FDRSxhQUNqQix5Q0FLdUIsNkZBQ0ksbUdBQ3pCIiwiZmlsZSI6ImNvbnRhaW5lcnNcXE9wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiRDovcmVwb3MvZGV2L3RpbGVjbGljay1nYW1lL3RpbGVjbGljay1nYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGxheWVybmFtZTogJycsXHJcbiAgICAgICAgICAgIGdhbWVuYW1lOiAnJyxcclxuICAgICAgICAgICAgam9pbmdhbWU6IGZhbHNlLFxyXG4gICAgICAgICAgICBuZXdnYW1lOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9ybWVycm9yOiAnJyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5vbignZm9ybWVycm9yJywgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9ybWVycm9yOmRhdGF9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQub24oXCJnb3RvZ2FtZWJvYXJkXCIsIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PT0gJ3RydWUnKVxyXG4gICAgICAgICAgICB0aGlzLnJlYWR5KClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVhZHkgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5wbGF5KCk7XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyA/IHRhcmdldC5jaGVja2VkIDogdGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBbbmFtZV06IHZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgaWYgKCh0aGlzLnN0YXRlLmdhbWVuYW1lLmxlbmd0aCA8IDEpICYmICh0aGlzLnN0YXRlLnBsYXllcm5hbWUubGVuZ3RoIDwgMSkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmb3JtZXJyb3I6ICdQbGVhc2UgZW50ZXIgeW91ciBuYW1lIGFuZCBnYW1lIG5hbWUnfSlcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLmdhbWVuYW1lLmxlbmd0aCA8IDEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmb3JtZXJyb3I6ICdQbGVhc2UgZW50ZXIgZ2FtZSBuYW1lJ30pXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5wbGF5ZXJuYW1lLmxlbmd0aCA8IDEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmb3JtZXJyb3I6ICdQbGVhc2UgZW50ZXIgeW91ciBuYW1lJ30pXHJcbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuc3RhdGUuam9pbmdhbWUgJiYgIXRoaXMuc3RhdGUubmV3Z2FtZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1lcnJvcjogJ1BsZWFzZSBzZWxlY3Qgb3B0aW9uIHRvIGNyZWF0ZSBvciBqb2luIGEgZ2FtZSd9KVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuam9pbmdhbWUgJiYgdGhpcy5zdGF0ZS5uZXdnYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmb3JtZXJyb3I6ICdQbGVhc2Ugc2VsZWN0IHRvIGpvaW4gb3IgY3JlYXRlIGEgZ2FtZSBhbmQgbm90IGJvdGgnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKHRoaXMuc3RhdGUuZ2FtZW5hbWUubGVuZ3RoID4gMCkgJiYgKHRoaXMuc3RhdGUucGxheWVybmFtZS5sZW5ndGggPiAwKSAmJiAodGhpcy5zdGF0ZS5qb2luZ2FtZSAmJiAhdGhpcy5zdGF0ZS5uZXdnYW1lIHx8ICF0aGlzLnN0YXRlLmpvaW5nYW1lICYmIHRoaXMuc3RhdGUubmV3Z2FtZSkpe1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5lbWl0KCdjaGVja2dhbWVpbmZvJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcm5hbWU6dGhpcy5zdGF0ZS5wbGF5ZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVuYW1lOnRoaXMuc3RhdGUuZ2FtZW5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Z2FtZTogdGhpcy5zdGF0ZS5uZXdnYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5nYW1lOiB0aGlzLnN0YXRlLmpvaW5nYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgICAgIFxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLW9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPjxwIGNsYXNzTmFtZT1cImhlYWRlci10ZXh0XCI+T3B0aW9uczwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+e3RoaXMuc3RhdGUuZm9ybWVycm9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGxheWVybmFtZVwiIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBuYW1lPVwicGxheWVybmFtZVwiIHR5cGU9XCJ0ZXh0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBsYXllcm5hbWVcIj5Zb3VyIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZ2FtZW5hbWVcIiBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gbmFtZT1cImdhbWVuYW1lXCIgdHlwZT1cInRleHRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2FtZW5hbWVcIj5HYW1lIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IGNoZWNrZWQ9e3RoaXMuc3RhdGUuam9pbmdhbWV9IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJqb2luZ2FtZVwiIGlkPVwiam9pbmdhbWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiam9pbmdhbWVcIj5Kb2luIEdhbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IGNoZWNrZWQ9e3RoaXMuc3RhdGUubmV3Z2FtZX0gdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIm5ld2dhbWVcIiBpZD1cIm5ld2dhbWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmV3Z2FtZVwiPk5ldyBHYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtYXJnaW4tdG9wIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4tbGFyZ2VcIiB0eXBlPVwic3VibWl0XCI+UGxheTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lci1vcHRpb25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY2MUIwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXItdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1lcnJvciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGNDQzMzY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDAgMCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCBhdXRvIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAubWFyZ2luLXRvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=containers\\Options.js */'
                })
            );
        }
    }]);

    return Options;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Options);

/***/ }),

/***/ "./containers/Postgame.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("socket.io-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
var _jsxFileName = 'D:\\repos\\dev\\tileclick-game\\tileclick-game\\containers\\Postgame.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Postgame = function (_Component) {
    _inherits(Postgame, _Component);

    function Postgame(props) {
        _classCallCheck(this, Postgame);

        var _this = _possibleConstructorReturn(this, (Postgame.__proto__ || Object.getPrototypeOf(Postgame)).call(this, props));

        _this.state = {
            winner: 0,
            score: 0,
            waitingforotherplayer: true
        };
        return _this;
    }

    _createClass(Postgame, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.props.socket.emit('postgame', true);
            this.props.socket.on('postgame', function (data) {
                _this2.setState(function (state, props) {
                    return _extends({}, data, { waitingforotherplayer: false
                    });
                });
            });
        }
    }, {
        key: 'renderGameInfo',
        value: function renderGameInfo() {
            var headerStyle = {
                height: '60px',
                width: '100%',
                backgroundColor: '#3661B0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            };
            var headerText = {
                color: '#fff',
                fontSize: '21px',
                fontWeight: '600'
            };
            if (this.state.winner === 1) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { style: headerStyle, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 38
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        { style: headerText, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 38
                            }
                        },
                        'You Won!'
                    )
                );
            }
            if (this.state.winner === 0) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { style: headerStyle, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        { style: headerText, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 41
                            }
                        },
                        'You Lost'
                    )
                );
            }
            if (this.state.winner === 2) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { style: headerStyle, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 44
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        { style: headerText, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 44
                            }
                        },
                        'The game is a tie'
                    )
                );
            }
        }
    }, {
        key: 'playAgain',
        value: function playAgain() {
            window.location.reload();
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                    className: 'jsx-116932489' + ' ' + 'container',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                    }
                },
                this.renderGameInfo(),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        className: 'jsx-116932489' + ' ' + 'main',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        {
                            className: 'jsx-116932489' + ' ' + 'container-score',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 56
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'p',
                            {
                                className: 'jsx-116932489' + ' ' + 'score',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 57
                                }
                            },
                            'Your score: ',
                            this.state.score
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        {
                            className: 'jsx-116932489' + ' ' + 'container-button',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 59
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'button',
                            { onClick: this.playAgain, className: 'jsx-116932489' + ' ' + 'waves-effect waves-light btn-large',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 60
                                }
                            },
                            'Play Again?'
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '116932489',
                    css: '.container.jsx-116932489{background-color:#ffffff;width:100%;margin:0;height:100%;}.main.jsx-116932489{height:340px;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.container-score.jsx-116932489,.container-button.jsx-116932489{margin:40px 0;}.score.jsx-116932489{font-size:28px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXFBvc3RnYW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThENEIsQUFHa0QsQUFNWixBQVFDLEFBR0MsYUFWSixDQVFmLENBR0EsU0FWaUIsQ0FQRixXQUNGLFNBQ0csWUFDaEIseUNBSzBCLDhFQUNILDZGQUNJLG1HQUMzQiIsImZpbGUiOiJjb250YWluZXJzXFxQb3N0Z2FtZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9yZXBvcy9kZXYvdGlsZWNsaWNrLWdhbWUvdGlsZWNsaWNrLWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0Z2FtZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgd2lubmVyOiAwLFxyXG4gICAgICAgICAgICBzY29yZTogMCxcclxuICAgICAgICAgICAgd2FpdGluZ2Zvcm90aGVycGxheWVyOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQuZW1pdCgncG9zdGdhbWUnLCB0cnVlKVxyXG4gICAgICAgIHRoaXMucHJvcHMuc29ja2V0Lm9uKCdwb3N0Z2FtZScsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlLCBwcm9wcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAuLi5kYXRhLCB3YWl0aW5nZm9yb3RoZXJwbGF5ZXI6ZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlckdhbWVJbmZvKCkge1xyXG4gICAgICAgIGxldCBoZWFkZXJTdHlsZSA9IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAnNjBweCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzNjYxQjAnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgbGV0IGhlYWRlclRleHQgPSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMjFweCcsXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICc2MDAnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLndpbm5lciA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17aGVhZGVyU3R5bGV9PjxwIHN0eWxlPXtoZWFkZXJUZXh0fT5Zb3UgV29uITwvcD48L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUud2lubmVyID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXtoZWFkZXJTdHlsZX0+PHAgc3R5bGU9e2hlYWRlclRleHR9PllvdSBMb3N0PC9wPjwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS53aW5uZXIgPT09IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e2hlYWRlclN0eWxlfT48cCBzdHlsZT17aGVhZGVyVGV4dH0+VGhlIGdhbWUgaXMgYSB0aWU8L3A+PC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGxheUFnYWluKCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckdhbWVJbmZvKCl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItc2NvcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzY29yZVwiPllvdXIgc2NvcmU6IHt0aGlzLnN0YXRlLnNjb3JlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuLWxhcmdlXCIgb25DbGljaz17dGhpcy5wbGF5QWdhaW59PlBsYXkgQWdhaW4/PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWluZXItc2NvcmUsIC5jb250YWluZXItYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zY29yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=containers\\Postgame.js */'
                })
            );
        }
    }]);

    return Postgame;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Postgame);

/***/ }),

/***/ "./containers/Welcome.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("socket.io-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Welcome__ = __webpack_require__("./components/Welcome.js");
var _jsxFileName = 'D:\\repos\\dev\\tileclick-game\\tileclick-game\\containers\\Welcome.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Welcome = function (_Component) {
  _inherits(Welcome, _Component);

  function Welcome() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Welcome);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Welcome.__proto__ || Object.getPrototypeOf(Welcome)).call.apply(_ref, [this].concat(args))), _this), _this.start = function () {
      _this.props.socket.emit('start', Date.now());
      _this.props.start();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Welcome, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-669676040' + ' ' + 'container-welcome',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-669676040' + ' ' + 'header',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'p',
            {
              className: 'jsx-669676040' + ' ' + 'header-text',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            },
            'TileClick'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-669676040' + ' ' + 'container-instructions',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'p',
            {
              className: 'jsx-669676040' + ' ' + 'instruction',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              }
            },
            'TileClick is a two player game.'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'p',
            {
              className: 'jsx-669676040' + ' ' + 'instruction',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            },
            'The player to click the most red tiles wins.'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'p',
            {
              className: 'jsx-669676040' + ' ' + 'instruction',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              }
            },
            'To play, either create a new game and share the game name with your friend or join an existing game.'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Welcome__["a" /* default */], { start: this.start, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '669676040',
          css: '.container-welcome.jsx-669676040{display:block;width:100%;margin:0;background:#ffffff;text-align:center;height:100%;}.header.jsx-669676040{height:60px;background-color:#3661B0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.header-text.jsx-669676040{color:#fff;font-size:21px;font-weight:600;}.container-instructions.jsx-669676040{height:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;}.instruction.jsx-669676040{margin:10px 0;line-height:20px;font-size:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXFdlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJ3QixBQUdxQyxBQVFGLEFBT0QsQUFLQSxBQVFHLFdBWkMsQUFLRixDQVpZLEVBUmQsQUE0Qk0sV0EzQlIsQ0FlTyxLQWFELEdBM0JJLEdBT04sS0FRZixJQWFBLE9BM0JvQixrQkFDTixZQUNkLEVBZ0J3QiwwQkFYSCxvREFZQSx5Q0FYSSxvREFZQSwrQ0FYekIsb0RBWWEsV0FDYiIsImZpbGUiOiJjb250YWluZXJzXFxXZWxjb21lLmpzIiwic291cmNlUm9vdCI6IkQ6L3JlcG9zL2Rldi90aWxlY2xpY2stZ2FtZS90aWxlY2xpY2stZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcclxuaW1wb3J0IENvbXBvbmVudFdlbGNvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9XZWxjb21lJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlbGNvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBzdGFydCA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMuc29ja2V0LmVtaXQoJ3N0YXJ0JywgRGF0ZS5ub3coKSkgXHJcbiAgICB0aGlzLnByb3BzLnN0YXJ0KClcclxuICB9XHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItd2VsY29tZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+PHAgY2xhc3NOYW1lPVwiaGVhZGVyLXRleHRcIj5UaWxlQ2xpY2s8L3A+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItaW5zdHJ1Y3Rpb25zXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbnN0cnVjdGlvblwiPlRpbGVDbGljayBpcyBhIHR3byBwbGF5ZXIgZ2FtZS48L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbnN0cnVjdGlvblwiPlRoZSBwbGF5ZXIgdG8gY2xpY2sgdGhlIG1vc3QgcmVkIHRpbGVzIHdpbnMuPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5zdHJ1Y3Rpb25cIj5UbyBwbGF5LCBlaXRoZXIgY3JlYXRlIGEgbmV3IGdhbWUgYW5kIHNoYXJlIHRoZSBnYW1lIG5hbWUgd2l0aCB5b3VyIGZyaWVuZCBvciBqb2luIGFuIGV4aXN0aW5nIGdhbWUuPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50V2VsY29tZSBzdGFydD17dGhpcy5zdGFydH0vPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lci13ZWxjb21lIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjYxQjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyLWluc3RydWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0cnVjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=containers\\Welcome.js */'
        })
      );
    }
  }]);

  return Welcome;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Welcome);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_Welcome__ = __webpack_require__("./containers/Welcome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_Options__ = __webpack_require__("./containers/Options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_Gameboard__ = __webpack_require__("./containers/Gameboard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_Postgame__ = __webpack_require__("./containers/Postgame.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client__ = __webpack_require__("socket.io-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router__ = __webpack_require__("react-router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_history__ = __webpack_require__("history");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_history___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_history__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_next_head__);
var _jsxFileName = 'D:\\repos\\dev\\tileclick-game\\tileclick-game\\pages\\index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var location = {};
var history = Object(__WEBPACK_IMPORTED_MODULE_8_history__["createMemoryHistory"])(location);

var serverpath = 'localhost:4000';
var socket = __WEBPACK_IMPORTED_MODULE_6_socket_io_client___default()(serverpath);

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.socket = socket;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var start = function start() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__containers_Welcome__["a" /* default */], { socket: _this2.socket, start: function start() {
            return history.push('/options');
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        });
      };
      var options = function options() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__containers_Options__["a" /* default */], { socket: _this2.socket, play: function play() {
            return history.push('/gameboard');
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        });
      };
      var gameboard = function gameboard() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__containers_Gameboard__["a" /* default */], { socket: _this2.socket, postGame: function postGame() {
            return history.push('/postgame');
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        });
      };
      var postgame = function postgame() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__containers_Postgame__["a" /* default */], { socket: _this2.socket, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        });
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_react_router__["Router"],
        { history: history, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-695857835' + ' ' + 'container-main',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9_next_head___default.a,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'title',
              {
                className: 'jsx-695857835',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                }
              },
              'Tile Click Game'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-695857835',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet', className: 'jsx-695857835',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/css/materialize.min.css', className: 'jsx-695857835',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('script', { src: '/static/js/jquery-3.3.1.min.js', className: 'jsx-695857835',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('script', { src: '/static/js/materialize.min.js', className: 'jsx-695857835',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router__["Route"], { exact: true, path: '/', render: start, __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router__["Route"], { path: '/options', component: options, __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router__["Route"], { path: '/gameboard', component: gameboard, __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router__["Route"], { path: '/postgame', component: postgame, __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '695857835',
            css: 'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:\'\';content:none;}table{border-collapse:collapse;border-spacing:0;}html,body{height:100%;width:100%;}body{background:#aaaaaa;}#__next{margin:0;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.container-main{height:400px;width:90%;max-width:400px;background-color:#ffffff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRDZCLEFBZXNCLEFBU0ssQUFHQSxBQUdFLEFBR0osQUFJRCxBQUljLEFBSWIsQUFJUyxBQUdWLEFBUUksU0E1Q0wsQUFxQ0csRUFmQSxDQUpmLEFBWWEsQ0FlQyxDQXBDZCxBQUdBLEVBR0EsR0FkVyxBQWlDVCxDQUljLEdBUGhCLEFBZW9CLENBdkJwQixDQUdtQixHQXhCRixJQXFDQSxPQVFZLEdBcEI3QixDQXhCZSxhQUNXLFFBNEN4QixnQkEzQ0YsMEJBbUN1Qiw2RkFDSSxtR0FDekIiLCJmaWxlIjoicGFnZXNcXGluZGV4LmpzIiwic291cmNlUm9vdCI6IkQ6L3JlcG9zL2Rldi90aWxlY2xpY2stZ2FtZS90aWxlY2xpY2stZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgV2VsY29tZSBmcm9tICcuLi9jb250YWluZXJzL1dlbGNvbWUnXHJcbmltcG9ydCBPcHRpb25zIGZyb20gJy4uL2NvbnRhaW5lcnMvT3B0aW9ucydcclxuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuLi9jb250YWluZXJzL0dhbWVib2FyZCdcclxuaW1wb3J0IFBvc3RnYW1lIGZyb20gJy4uL2NvbnRhaW5lcnMvUG9zdGdhbWUnXHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xyXG5pbXBvcnQge2Jyb3dzZXJIaXN0b3J5LCBSb3V0ZXIsIFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcbmltcG9ydCB7Y3JlYXRlTWVtb3J5SGlzdG9yeX0gZnJvbSAnaGlzdG9yeSdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuXHJcbnZhciBsb2NhdGlvbiA9IHt9O1xyXG5jb25zdCBoaXN0b3J5ID0gY3JlYXRlTWVtb3J5SGlzdG9yeShsb2NhdGlvbilcclxuXHJcbmNvbnN0IHNlcnZlcnBhdGggPSAnbG9jYWxob3N0OjQwMDAnXHJcbmNvbnN0IHNvY2tldCA9IGlvKHNlcnZlcnBhdGgpXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcclxuICAgICAgdGhpcy5zb2NrZXQgPSBzb2NrZXQ7XHJcbiAgICB9XHJcblxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgIGNvbnN0IHN0YXJ0ID0gKCkgPT4gKCA8V2VsY29tZSBzb2NrZXQ9e3RoaXMuc29ja2V0fSBzdGFydD17KCkgPT4gaGlzdG9yeS5wdXNoKCcvb3B0aW9ucycpfS8+IClcclxuICAgIGNvbnN0IG9wdGlvbnMgPSAoKSA9PiAoIDxPcHRpb25zIHNvY2tldD17dGhpcy5zb2NrZXR9IHBsYXk9eygpID0+IGhpc3RvcnkucHVzaCgnL2dhbWVib2FyZCcpfSAvPiApXHJcbiAgICBjb25zdCBnYW1lYm9hcmQgPSAoKSA9PiAoIDxHYW1lYm9hcmQgc29ja2V0PXt0aGlzLnNvY2tldH0gcG9zdEdhbWU9eygpID0+IGhpc3RvcnkucHVzaCgnL3Bvc3RnYW1lJyl9Lz4pXHJcbiAgICBjb25zdCBwb3N0Z2FtZSA9ICgpID0+ICggPFBvc3RnYW1lIHNvY2tldD17dGhpcy5zb2NrZXR9Lz4pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1tYWluXCI+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5UaWxlIENsaWNrIEdhbWU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL2Nzcy9tYXRlcmlhbGl6ZS5taW4uY3NzXCIvPlxyXG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9zdGF0aWMvanMvanF1ZXJ5LTMuMy4xLm1pbi5qc1wiLz5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCIvc3RhdGljL2pzL21hdGVyaWFsaXplLm1pbi5qc1wiLz5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIHJlbmRlcj17c3RhcnR9Lz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL29wdGlvbnNcIiBjb21wb25lbnQ9e29wdGlvbnN9Lz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2dhbWVib2FyZFwiIGNvbXBvbmVudD17Z2FtZWJvYXJkfS8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wb3N0Z2FtZVwiIGNvbXBvbmVudD17cG9zdGdhbWV9Lz5cclxuICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICBodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXHJcbiAgICAgICAgICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXHJcbiAgICAgICAgICBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXHJcbiAgICAgICAgICBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXHJcbiAgICAgICAgICBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxyXG4gICAgICAgICAgYiwgdSwgaSwgY2VudGVyLFxyXG4gICAgICAgICAgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcclxuICAgICAgICAgIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxyXG4gICAgICAgICAgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXHJcbiAgICAgICAgICBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXHJcbiAgICAgICAgICBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxyXG4gICAgICAgICAgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXHJcbiAgICAgICAgICB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250OiBpbmhlcml0O1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcclxuICAgICAgICAgIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb2wsIHVsIHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJsb2NrcXVvdGUsIHEge1xyXG4gICAgICAgICAgICBxdW90ZXM6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcclxuICAgICAgICAgIHE6YmVmb3JlLCBxOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaHRtbCwgYm9keSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhYWFhYWE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI19fbmV4dCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRhaW5lci1tYWluIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUm91dGVyPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=pages\\index.js */'
          })
        )
      );
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "history":
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-router":
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "socket.io-client":
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map