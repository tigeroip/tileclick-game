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
                    className: 'jsx-582269547' + ' ' + 'container-welcome-content',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'a',
                    { onClick: this.props.start, className: 'jsx-582269547' + ' ' + 'start',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 7
                        }
                    },
                    'Start'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '582269547',
                    css: '.container-welcome-content.jsx-582269547{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;margin:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100%;}.start.jsx-582269547{box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2);padding:0 2rem;text-transform:uppercase;border:none;border-radius:2px;font-size:1rem;outline:0;text-decoration:none;color:#fff;background-color:#26a69a;text-align:center;-webkit-letter-spacing:.5px;-moz-letter-spacing:.5px;-ms-letter-spacing:.5px;letter-spacing:.5px;height:54px;line-height:54px;position:relative;cursor:pointer;display:inline-block;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;vertical-align:middle;z-index:1;-webkit-transition:.3s ease-out;transition:.3s ease-out;}.start.jsx-582269547:hover{outline:0;box-shadow:0 3px 3px 0 rgba(0,0,0,0.14),0 1px 7px 0 rgba(0,0,0,0.12),0 3px 1px -1px rgba(0,0,0,0.2);background-color:#2bbbad;}.start.jsx-582269547:active{outline:0;}.start.jsx-582269547:focus{background-color:#1d7d74;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFdlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2dDLEFBR3NDLEFBU3lGLEFBeUI1RixBQUtBLEFBR2UsVUFQNkUsQUFLMUcsZUFHQSxpREExQ2UsV0FDRixTQUNVLE1BT0osVUEwQlUsS0F6QkEsb0JBMEI3QixLQXpCZ0IsWUFDTSxrQkFDSCxlQUNMLEVBWFksUUFZRCxxQkFDVixXQUNjLHlCQUNQLGFBZEssS0FlSCw4RkFkUixHQWVBLFNBZGhCLEdBZXFCLGlCQUNDLGtCQUNILGVBQ00scUJBQ0wsZ0JBQ0MscUZBQ3VCLHdDQUNsQixzQkFDWixVQUNjLHdEQUM1QiIsImZpbGUiOiJjb21wb25lbnRzXFxXZWxjb21lLmpzIiwic291cmNlUm9vdCI6IkQ6L3JlcG9zL2Rldi90aWxlY2xpY2stZ2FtZS90aWxlY2xpY2stZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRXZWxjb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXdlbGNvbWUtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInN0YXJ0XCIgb25DbGljaz17dGhpcy5wcm9wcy5zdGFydH0+U3RhcnQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWluZXItd2VsY29tZS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLDAsMCwwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwwLjEyKSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmE2OWE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDU0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDNweCAwIHJnYmEoMCwwLDAsMC4xNCksIDAgMXB4IDdweCAwIHJnYmEoMCwwLDAsMC4xMiksIDAgM3B4IDFweCAtMXB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJiYmJhZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0OmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydDpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDdkNzQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=components\\Welcome.js */'
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
          className: "jsx-2848040324" + " " + "tile",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { onClick: function onClick() {
            return _this2.props.handleClick(_this2.props.active);
          }, className: "jsx-2848040324" + " " + (this.props.className || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "2848040324",
          css: ".tile.jsx-2848040324{border:1px solid white;background:#03A9F4;height:33%;width:33%;margin:0;}.active.jsx-2848040324{height:100%;width:100%;cursor:pointer;background:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGdhbWVcXFRpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT3NCLEFBR2dDLEFBUVgsWUFDRCxXQVJRLEFBU0osZUFDQSxJQVRKLFdBQ0QsQUFTWixVQVJXLFNBQ2IiLCJmaWxlIjoiY29tcG9uZW50c1xcZ2FtZVxcVGlsZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9yZXBvcy9kZXYvdGlsZWNsaWNrLWdhbWUvdGlsZWNsaWNrLWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgVGlsZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWxlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9IG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlQ2xpY2sodGhpcy5wcm9wcy5hY3RpdmUpfT48L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLnRpbGUge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwM0E5RjQ7XHJcbiAgICAgICAgaGVpZ2h0OiAzMyU7XHJcbiAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlsZTsiXX0= */\n/*@ sourceURL=components\\game\\Tile.js */"
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
            maxactivetiles: 5
        };
        return _this;
    }

    _createClass(Gameboard, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.socket.emit('ready', true);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.props.socket.on('activateboard', function (data) {
                _this2.setState(function (state, props) {
                    return _extends({}, data);
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

            // if (this.state.maxactivetiles > 0) {
            var tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            return tiles.map(function (tile) {
                if (_this3.state.activetile === tile) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_game_Tile__["a" /* default */], { key: tile, className: 'active', handleClick: _this3.handleClick, active: 1, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                    }
                });else return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_game_Tile__["a" /* default */], { key: tile, active: 0, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                    className: 'jsx-996583168' + ' ' + 'container',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 82
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_game_Game__["a" /* default */], { starttime: this.state.starttime, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_game_Score__["a" /* default */], { score: this.state.score, opponentscore: this.state.opponentscore, tilesleft: this.state.maxactivetiles, delay: this.state.delay, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 84
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        className: 'jsx-996583168' + ' ' + 'container-tiles',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 85
                        }
                    },
                    this.renderTiles()
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '996583168',
                    css: '.container.jsx-996583168{position:relative;height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:#ffffff;}.container-tiles.jsx-996583168{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:35px auto 0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.active.jsx-996583168{background:red !important;}.container-score.jsx-996583168{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXEdhbWVib2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RndCLEFBR3VDLEFBUUwsQUFTYSxBQUdiLGtCQW5CRCxRQWlCaEIsSUFoQmUsV0FDRSxpQ0FNRixBQVlrQixXQVhqQixZQUNPLGtCQVBHLDJFQVFILEdBUE0sSUFpQk4sWUFUSixTQVBuQixnREFRMkIsd0JBU1osV0FDZixnRUFUQSIsImZpbGUiOiJjb250YWluZXJzXFxHYW1lYm9hcmQuanMiLCJzb3VyY2VSb290IjoiRDovcmVwb3MvZGV2L3RpbGVjbGljay1nYW1lL3RpbGVjbGljay1nYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xyXG5pbXBvcnQgQ29tcG9uZW50R2FtZSBmcm9tICcuLi9jb21wb25lbnRzL2dhbWUvR2FtZSdcclxuaW1wb3J0IENvbXBvbmVudFRpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9nYW1lL1RpbGUnXHJcbmltcG9ydCBDb21wb25lbnRTY29yZSBmcm9tICcuLi9jb21wb25lbnRzL2dhbWUvU2NvcmUnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzdGFydHRpbWU6IG51bGwsXHJcbiAgICAgICAgICAgIGFjdGl2ZXRpbGU6IG51bGwsXHJcbiAgICAgICAgICAgIHNjb3JlOiAwLFxyXG4gICAgICAgICAgICBvcHBvbmVudHNjb3JlOiAwLFxyXG4gICAgICAgICAgICBkZWxheTogbnVsbCxcclxuICAgICAgICAgICAgbWF4YWN0aXZldGlsZXM6IDVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc29ja2V0LmVtaXQoJ3JlYWR5JywgdHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5vbignYWN0aXZhdGVib2FyZCcsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlLCBwcm9wcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAuLi5kYXRhXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQub24oJ3Njb3JlJywgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUsIHByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgIC4uLmRhdGFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5vbignZ2FtZWZpbmlzaGVkJywgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZ290b3Bvc3RnYW1lID09PSB0cnVlKSB0aGlzLnBvc3RHYW1lKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XHJcbiAgICAgICAgaWYgKG5leHRTdGF0ZS5tYXhhY3RpdmV0aWxlcyA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5lbWl0KCdnYW1lZmluaXNoZWQnLCB0cnVlKVxyXG4gICAgICAgIH0gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHBvc3RHYW1lID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMucG9zdEdhbWUoKVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrID0gKGlzQWN0aXZlKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzQWN0aXZlID09IDEpIHtcclxuICAgICAgICAgICAgbGV0IGhpdCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGxldCBkZWxheSA9IGhpdCAtIHRoaXMuc3RhdGUuc3RhcnR0aW1lOyBcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQuZW1pdCgnc2NvcmUnLCB7c3RhcnR0aW1lIDogdGhpcy5zdGF0ZS5zdGFydHRpbWUsIGhpdDogaGl0fSlcclxuICAgICAgICAgICAgLy8gcmVzZXQgdGhlIGdhbWVib2FyZFxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZTdGF0ZS5tYXhhY3RpdmV0aWxlcyAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIHthY3RpdmV0aWxlOiBudWxsLCBkZWxheSA6IGRlbGF5LCBtYXhhY3RpdmV0aWxlczogcHJldlN0YXRlLm1heGFjdGl2ZXRpbGVzIC0gMX1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyVGlsZXMoKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuc3RhdGUubWF4YWN0aXZldGlsZXMgPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbGVzID0gWzEsMiwzLDQsNSw2LDcsOCw5XTtcclxuICAgICAgICAgICAgcmV0dXJuIHRpbGVzLm1hcCgodGlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZldGlsZSA9PT0gdGlsZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbXBvbmVudFRpbGUga2V5PXt0aWxlfSBjbGFzc05hbWU9XCJhY3RpdmVcIiBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGlja30gYWN0aXZlPXsxfS8+XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb21wb25lbnRUaWxlIGtleT17dGlsZX0gYWN0aXZlPXswfS8+XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnRHYW1lIHN0YXJ0dGltZT17dGhpcy5zdGF0ZS5zdGFydHRpbWV9Lz5cclxuICAgICAgICAgICAgPENvbXBvbmVudFNjb3JlIHNjb3JlPXt0aGlzLnN0YXRlLnNjb3JlfSBvcHBvbmVudHNjb3JlPXt0aGlzLnN0YXRlLm9wcG9uZW50c2NvcmV9IHRpbGVzbGVmdD17dGhpcy5zdGF0ZS5tYXhhY3RpdmV0aWxlc30gZGVsYXk9e3RoaXMuc3RhdGUuZGVsYXl9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItdGlsZXNcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRpbGVzKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb250YWluZXItdGlsZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzNXB4IGF1dG8gMDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb250YWluZXItc2NvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=containers\\Gameboard.js */'
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
                    className: 'jsx-3304331300' + ' ' + 'container-options',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        className: 'jsx-3304331300' + ' ' + 'header',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        {
                            className: 'jsx-3304331300' + ' ' + 'header-text',
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
                        className: 'jsx-3304331300' + ' ' + 'form-error',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                        }
                    },
                    this.state.formerror
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'form',
                    { onSubmit: this.handleSubmit, className: 'jsx-3304331300',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        {
                            className: 'jsx-3304331300' + ' ' + 'input-field',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 66
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { id: 'playername', onChange: this.onChange, name: 'playername', type: 'text', className: 'jsx-3304331300',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 67
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'label',
                            { htmlFor: 'playername', className: 'jsx-3304331300',
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
                            className: 'jsx-3304331300' + ' ' + 'input-field',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 70
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { id: 'gamename', onChange: this.onChange, name: 'gamename', type: 'text', className: 'jsx-3304331300',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 71
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'label',
                            { htmlFor: 'gamename', className: 'jsx-3304331300',
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
                            className: 'jsx-3304331300' + ' ' + 'form-checkbox',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 74
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { onChange: this.onChange, checked: this.state.joingame, type: 'checkbox', name: 'joingame', id: 'joingame', className: 'jsx-3304331300',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 75
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'label',
                            { htmlFor: 'joingame', className: 'jsx-3304331300',
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
                            className: 'jsx-3304331300' + ' ' + 'form-checkbox',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 78
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { onChange: this.onChange, checked: this.state.newgame, type: 'checkbox', name: 'newgame', id: 'newgame', className: 'jsx-3304331300',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 79
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'label',
                            { htmlFor: 'newgame', className: 'jsx-3304331300',
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
                        { type: 'submit', className: 'jsx-3304331300' + ' ' + 'waves-effect waves-light btn-large',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 82
                            }
                        },
                        'Go'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '3304331300',
                    css: '.container-options.jsx-3304331300{margin:0;text-align:center;background:#ffffff;width:100%;height:100%;}.header.jsx-3304331300{height:40px;background-color:#3661B0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.header-text.jsx-3304331300{color:#fff;font-size:21px;font-weight:600;}.form-error.jsx-3304331300{color:#F44336;margin:15px 0 0 0;}form.jsx-3304331300{width:90%;margin:40px auto 0;}.form-checkbox.jsx-3304331300{margin:5px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXE9wdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUZnQyxBQUdrQyxBQU9HLEFBT0QsQUFLSyxBQUlOLEFBSUcsU0ExQkssQ0F1QkMsQ0FUSixDQVBVLENBb0IzQixDQVJzQixZQUpKLENBZEcsRUF1QnJCLEdBSkEsS0FaZSxLQVFmLElBZGEsV0FDQyxZQUNoQiwwQ0FLdUIsNkZBQ0ksbUdBQ3pCIiwiZmlsZSI6ImNvbnRhaW5lcnNcXE9wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiRDovcmVwb3MvZGV2L3RpbGVjbGljay1nYW1lL3RpbGVjbGljay1nYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGxheWVybmFtZTogJycsXHJcbiAgICAgICAgICAgIGdhbWVuYW1lOiAnJyxcclxuICAgICAgICAgICAgam9pbmdhbWU6IGZhbHNlLFxyXG4gICAgICAgICAgICBuZXdnYW1lOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9ybWVycm9yOiAnJyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5vbignZm9ybWVycm9yJywgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9ybWVycm9yOmRhdGF9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQub24oXCJnb3RvZ2FtZWJvYXJkXCIsIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PT0gJ3RydWUnKVxyXG4gICAgICAgICAgICB0aGlzLnJlYWR5KClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVhZHkgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5wbGF5KCk7XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyA/IHRhcmdldC5jaGVja2VkIDogdGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBbbmFtZV06IHZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgaWYgKCh0aGlzLnN0YXRlLmdhbWVuYW1lLmxlbmd0aCA8IDEpICYmICh0aGlzLnN0YXRlLnBsYXllcm5hbWUubGVuZ3RoIDwgMSkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmb3JtZXJyb3I6ICdQbGVhc2UgZW50ZXIgeW91ciBuYW1lIGFuZCBnYW1lIG5hbWUnfSlcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLmdhbWVuYW1lLmxlbmd0aCA8IDEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmb3JtZXJyb3I6ICdQbGVhc2UgZW50ZXIgZ2FtZSBuYW1lJ30pXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5wbGF5ZXJuYW1lLmxlbmd0aCA8IDEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmb3JtZXJyb3I6ICdQbGVhc2UgZW50ZXIgeW91ciBuYW1lJ30pXHJcbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuc3RhdGUuam9pbmdhbWUgJiYgIXRoaXMuc3RhdGUubmV3Z2FtZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1lcnJvcjogJ1BsZWFzZSBzZWxlY3Qgb3B0aW9uIHRvIGNyZWF0ZSBvciBqb2luIGEgZ2FtZSd9KVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuam9pbmdhbWUgJiYgdGhpcy5zdGF0ZS5uZXdnYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmb3JtZXJyb3I6ICdQbGVhc2Ugc2VsZWN0IHRvIGpvaW4gb3IgY3JlYXRlIGEgZ2FtZSBhbmQgbm90IGJvdGgnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKHRoaXMuc3RhdGUuZ2FtZW5hbWUubGVuZ3RoID4gMCkgJiYgKHRoaXMuc3RhdGUucGxheWVybmFtZS5sZW5ndGggPiAwKSAmJiAodGhpcy5zdGF0ZS5qb2luZ2FtZSAmJiAhdGhpcy5zdGF0ZS5uZXdnYW1lIHx8ICF0aGlzLnN0YXRlLmpvaW5nYW1lICYmIHRoaXMuc3RhdGUubmV3Z2FtZSkpe1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5lbWl0KCdjaGVja2dhbWVpbmZvJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcm5hbWU6dGhpcy5zdGF0ZS5wbGF5ZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVuYW1lOnRoaXMuc3RhdGUuZ2FtZW5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Z2FtZTogdGhpcy5zdGF0ZS5uZXdnYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5nYW1lOiB0aGlzLnN0YXRlLmpvaW5nYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgICAgIFxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLW9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPjxwIGNsYXNzTmFtZT1cImhlYWRlci10ZXh0XCI+T3B0aW9uczwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+e3RoaXMuc3RhdGUuZm9ybWVycm9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGxheWVybmFtZVwiIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBuYW1lPVwicGxheWVybmFtZVwiIHR5cGU9XCJ0ZXh0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBsYXllcm5hbWVcIj5Zb3VyIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZ2FtZW5hbWVcIiBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gbmFtZT1cImdhbWVuYW1lXCIgdHlwZT1cInRleHRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2FtZW5hbWVcIj5HYW1lIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IGNoZWNrZWQ9e3RoaXMuc3RhdGUuam9pbmdhbWV9IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJqb2luZ2FtZVwiIGlkPVwiam9pbmdhbWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiam9pbmdhbWVcIj5Kb2luIEdhbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IGNoZWNrZWQ9e3RoaXMuc3RhdGUubmV3Z2FtZX0gdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIm5ld2dhbWVcIiBpZD1cIm5ld2dhbWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmV3Z2FtZVwiPk5ldyBHYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuLWxhcmdlXCIgdHlwZT1cInN1Ym1pdFwiPkdvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyLW9wdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM2NjFCMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmZvcm0tZXJyb3Ige1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRjQ0MzM2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwIDAgMDtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDQwcHggYXV0byAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=containers\\Options.js */'
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("socket.io-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
var _jsxFileName = 'D:\\repos\\dev\\tileclick-game\\tileclick-game\\containers\\Postgame.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var PostGame = function (_Component) {
    _inherits(PostGame, _Component);

    function PostGame(props) {
        _classCallCheck(this, PostGame);

        var _this = _possibleConstructorReturn(this, (PostGame.__proto__ || Object.getPrototypeOf(PostGame)).call(this, props));

        _this.state = {
            winner: 0,
            score: 0
        };
        return _this;
    }

    _createClass(PostGame, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.props.socket.emit('postgame', true);
            this.props.socket.on('postgame', function (data) {
                _this2.setState(function (state, props) {
                    return _extends({}, data);
                });
            });
        }
    }, {
        key: 'renderGameInfo',
        value: function renderGameInfo() {
            if (this.state.winner === 1) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'winner', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 24
                        }
                    },
                    'You Won!'
                );
            }
            if (this.state.winner === 0) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'loser', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        }
                    },
                    'You Lost'
                );
            }
            if (this.state.winner === 2) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'tie', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 30
                        }
                    },
                    'The game is a tie'
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
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'container', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                    }
                },
                this.renderGameInfo(),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'score', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41
                        }
                    },
                    'Your score: ',
                    this.state.score
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { onClick: this.playAgain, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                        }
                    },
                    'Play Again?'
                )
            );
        }
    }]);

    return PostGame;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (PostGame);

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
          className: 'jsx-3266932450' + ' ' + 'container-welcome',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-3266932450' + ' ' + 'header',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'p',
            {
              className: 'jsx-3266932450' + ' ' + 'header-text',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            },
            'TileClick'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Welcome__["a" /* default */], { start: this.start, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3266932450',
          css: '.container-welcome.jsx-3266932450{display:block;width:100%;margin:0;background:#ffffff;text-align:center;height:100%;}.header.jsx-3266932450{height:40px;background-color:#3661B0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.header-text.jsx-3266932450{color:#fff;font-size:21px;font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXFdlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0J3QixBQUdxQyxBQVFGLEFBT0QsV0FDSSxDQVBVLEVBUmQsV0FDRixDQWVPLFFBZEcsR0FPTixLQVFmLFdBZG9CLGtCQUNOLFlBQ2QsNEJBS3FCLDZGQUNJLG1HQUN6QiIsImZpbGUiOiJjb250YWluZXJzXFxXZWxjb21lLmpzIiwic291cmNlUm9vdCI6IkQ6L3JlcG9zL2Rldi90aWxlY2xpY2stZ2FtZS90aWxlY2xpY2stZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcclxuaW1wb3J0IENvbXBvbmVudFdlbGNvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9XZWxjb21lJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlbGNvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBzdGFydCA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMuc29ja2V0LmVtaXQoJ3N0YXJ0JywgRGF0ZS5ub3coKSkgXHJcbiAgICB0aGlzLnByb3BzLnN0YXJ0KClcclxuICB9XHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItd2VsY29tZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+PHAgY2xhc3NOYW1lPVwiaGVhZGVyLXRleHRcIj5UaWxlQ2xpY2s8L3A+PC9kaXY+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnRXZWxjb21lIHN0YXJ0PXt0aGlzLnN0YXJ0fS8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyLXdlbGNvbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM2NjFCMDtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=containers\\Welcome.js */'
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
            className: 'jsx-1192817639' + ' ' + 'container-main',
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
                className: 'jsx-1192817639',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                }
              },
              'Tile Click Game'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-1192817639',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet', className: 'jsx-1192817639',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/css/materialize.min.css', className: 'jsx-1192817639',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('script', { src: '/static/js/jquery-3.3.1.min.js', className: 'jsx-1192817639',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('script', { src: '/static/js/materialize.min.js', className: 'jsx-1192817639',
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
            styleId: '1192817639',
            css: 'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:\'\';content:none;}table{border-collapse:collapse;border-spacing:0;}html,body{height:100%;width:100%;}body{background:#aaaaaa;}#__next{margin:0;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.container-main{height:400px;width:90%;max-width:400px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRDZCLEFBZXNCLEFBU0ssQUFHQSxBQUdFLEFBR0osQUFJRCxBQUljLEFBSWIsQUFJUyxBQUdWLEFBUUksU0E1Q0wsQUFxQ0csRUFmQSxDQUpmLEFBWWEsQ0FlQyxDQXBDZCxBQUdBLEVBR0EsR0FkVyxBQWlDVCxDQUljLEdBUGhCLEFBZW9CLENBdkJwQixDQUdtQixHQXhCRixJQXFDQSxPQVFmLEdBcEJGLENBeEJlLGFBQ1csd0JBQzFCLDBCQW1DdUIsNkZBQ0ksbUdBQ3pCIiwiZmlsZSI6InBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJEOi9yZXBvcy9kZXYvdGlsZWNsaWNrLWdhbWUvdGlsZWNsaWNrLWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFdlbGNvbWUgZnJvbSAnLi4vY29udGFpbmVycy9XZWxjb21lJ1xyXG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuLi9jb250YWluZXJzL09wdGlvbnMnXHJcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi4vY29udGFpbmVycy9HYW1lYm9hcmQnXHJcbmltcG9ydCBQb3N0Z2FtZSBmcm9tICcuLi9jb250YWluZXJzL1Bvc3RnYW1lJ1xyXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcclxuaW1wb3J0IHticm93c2VySGlzdG9yeSwgUm91dGVyLCBSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5pbXBvcnQge2NyZWF0ZU1lbW9yeUhpc3Rvcnl9IGZyb20gJ2hpc3RvcnknXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcblxyXG52YXIgbG9jYXRpb24gPSB7fTtcclxuY29uc3QgaGlzdG9yeSA9IGNyZWF0ZU1lbW9yeUhpc3RvcnkobG9jYXRpb24pXHJcblxyXG5jb25zdCBzZXJ2ZXJwYXRoID0gJ2xvY2FsaG9zdDo0MDAwJ1xyXG5jb25zdCBzb2NrZXQgPSBpbyhzZXJ2ZXJwYXRoKVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XHJcbiAgICAgIHRoaXMuc29ja2V0ID0gc29ja2V0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICBjb25zdCBzdGFydCA9ICgpID0+ICggPFdlbGNvbWUgc29ja2V0PXt0aGlzLnNvY2tldH0gc3RhcnQ9eygpID0+IGhpc3RvcnkucHVzaCgnL29wdGlvbnMnKX0vPiApXHJcbiAgICBjb25zdCBvcHRpb25zID0gKCkgPT4gKCA8T3B0aW9ucyBzb2NrZXQ9e3RoaXMuc29ja2V0fSBwbGF5PXsoKSA9PiBoaXN0b3J5LnB1c2goJy9nYW1lYm9hcmQnKX0gLz4gKVxyXG4gICAgY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4gKCA8R2FtZWJvYXJkIHNvY2tldD17dGhpcy5zb2NrZXR9IHBvc3RHYW1lPXsoKSA9PiBoaXN0b3J5LnB1c2goJy9wb3N0Z2FtZScpfS8+KVxyXG4gICAgY29uc3QgcG9zdGdhbWUgPSAoKSA9PiAoIDxQb3N0Z2FtZSBzb2NrZXQ9e3RoaXMuc29ja2V0fS8+KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbWFpblwiPlxyXG4gICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+VGlsZSBDbGljayBHYW1lPC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9jc3MvbWF0ZXJpYWxpemUubWluLmNzc1wiLz5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCIvc3RhdGljL2pzL2pxdWVyeS0zLjMuMS5taW4uanNcIi8+XHJcbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL3N0YXRpYy9qcy9tYXRlcmlhbGl6ZS5taW4uanNcIi8+XHJcbiAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiByZW5kZXI9e3N0YXJ0fS8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9vcHRpb25zXCIgY29tcG9uZW50PXtvcHRpb25zfS8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9nYW1lYm9hcmRcIiBjb21wb25lbnQ9e2dhbWVib2FyZH0vPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcG9zdGdhbWVcIiBjb21wb25lbnQ9e3Bvc3RnYW1lfS8+XHJcbiAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxyXG4gICAgICAgICAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxyXG4gICAgICAgICAgYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxyXG4gICAgICAgICAgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxyXG4gICAgICAgICAgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcclxuICAgICAgICAgIGIsIHUsIGksIGNlbnRlcixcclxuICAgICAgICAgIGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXHJcbiAgICAgICAgICBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcclxuICAgICAgICAgIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxyXG4gICAgICAgICAgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxyXG4gICAgICAgICAgZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcclxuICAgICAgICAgIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxyXG4gICAgICAgICAgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICAgICAgZm9udDogaW5oZXJpdDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXHJcbiAgICAgICAgICBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9sLCB1bCB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBibG9ja3F1b3RlLCBxIHtcclxuICAgICAgICAgICAgcXVvdGVzOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXHJcbiAgICAgICAgICBxOmJlZm9yZSwgcTphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBjb250ZW50OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgICAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGh0bWwsIGJvZHkge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYWFhYWFhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNfX25leHQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb250YWluZXItbWFpbiB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Sb3V0ZXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=pages\\index.js */'
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