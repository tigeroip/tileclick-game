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
var _jsxFileName = 'D:\\repos\\dev\\tileclick-game\\tileclick-game\\components\\game\\Game.js';

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
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'header',
                {
                    className: 'jsx-911921598',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 5
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        className: 'jsx-911921598',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 6
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h1',
                        {
                            className: 'jsx-911921598',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 7
                            }
                        },
                        'TileClick'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '911921598',
                    css: 'header.jsx-911921598{background:grey;line-height:1;text-align:center;font-size:16px;margin:0;padding:0;width:100%;height:80px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGdhbWVcXEdhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUTRCLEFBR2lDLGdCQUNGLGNBQ0ksa0JBQ0gsZUFDTixTQUNDLFVBQ0MsV0FDQyxZQUNoQiIsImZpbGUiOiJjb21wb25lbnRzXFxnYW1lXFxHYW1lLmpzIiwic291cmNlUm9vdCI6IkQ6L3JlcG9zL2Rldi90aWxlY2xpY2stZ2FtZS90aWxlY2xpY2stZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPlRpbGVDbGljazwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=components\\game\\Game.js */'
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
var _jsxFileName = 'D:\\repos\\dev\\tileclick-game\\tileclick-game\\components\\game\\Score.js';

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
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                    className: 'jsx-3142422089',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        className: 'jsx-3142422089' + ' ' + 'container-score',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 7
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        {
                            className: 'jsx-3142422089' + ' ' + 'score',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 8
                            }
                        },
                        'Your score: ',
                        this.props.score
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        {
                            className: 'jsx-3142422089' + ' ' + 'score',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 9
                            }
                        },
                        'Opponent\'s score: ',
                        this.props.opponentscore
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        {
                            className: 'jsx-3142422089' + ' ' + 'score',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 10
                            }
                        },
                        'Tiles remaining: ',
                        this.props.tilesleft
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        {
                            className: 'jsx-3142422089' + ' ' + 'score',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 11
                            }
                        },
                        'Your delay: ',
                        this.props.delay
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '3142422089',
                    css: '.container-score.jsx-3142422089{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGdhbWVcXFNjb3JlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVk0QixBQUdrQywwRUFDZ0IsMkhBQ1YsNkZBQ1IsV0FDZiIsImZpbGUiOiJjb21wb25lbnRzXFxnYW1lXFxTY29yZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9yZXBvcy9kZXYvdGlsZWNsaWNrLWdhbWUvdGlsZWNsaWNrLWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1zY29yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc2NvcmUnPllvdXIgc2NvcmU6IHt0aGlzLnByb3BzLnNjb3JlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3Njb3JlJz5PcHBvbmVudCdzIHNjb3JlOiB7dGhpcy5wcm9wcy5vcHBvbmVudHNjb3JlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3Njb3JlJz5UaWxlcyByZW1haW5pbmc6IHt0aGlzLnByb3BzLnRpbGVzbGVmdH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdzY29yZSc+WW91ciBkZWxheToge3RoaXMucHJvcHMuZGVsYXl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyLXNjb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=components\\game\\Score.js */'
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
                    className: 'jsx-297915458' + ' ' + 'container',
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
                        className: 'jsx-297915458' + ' ' + 'container-tiles',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 85
                        }
                    },
                    this.renderTiles()
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '297915458',
                    css: '.container.jsx-297915458{position:relative;height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.container-tiles.jsx-297915458{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:35px auto 0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.active.jsx-297915458{background:red !important;}.container-score.jsx-297915458{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXEdhbWVib2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RndCLEFBR3VDLEFBT0wsQUFRYSxBQUdiLGtCQWpCRCxRQWVoQixJQWRlLFdBQ0UsaUNBS0YsQUFXa0IsV0FWakIsWUFDTyxrQkFORywyRUFPSCxHQU52QixJQWV1QixZQVJKLHlEQUNuQix3QkFRZSxXQUNmIiwiZmlsZSI6ImNvbnRhaW5lcnNcXEdhbWVib2FyZC5qcyIsInNvdXJjZVJvb3QiOiJEOi9yZXBvcy9kZXYvdGlsZWNsaWNrLWdhbWUvdGlsZWNsaWNrLWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXHJcbmltcG9ydCBDb21wb25lbnRHYW1lIGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZS9HYW1lJ1xyXG5pbXBvcnQgQ29tcG9uZW50VGlsZSBmcm9tICcuLi9jb21wb25lbnRzL2dhbWUvVGlsZSdcclxuaW1wb3J0IENvbXBvbmVudFNjb3JlIGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZS9TY29yZSdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHN0YXJ0dGltZTogbnVsbCxcclxuICAgICAgICAgICAgYWN0aXZldGlsZTogbnVsbCxcclxuICAgICAgICAgICAgc2NvcmU6IDAsXHJcbiAgICAgICAgICAgIG9wcG9uZW50c2NvcmU6IDAsXHJcbiAgICAgICAgICAgIGRlbGF5OiBudWxsLFxyXG4gICAgICAgICAgICBtYXhhY3RpdmV0aWxlczogNVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQuZW1pdCgncmVhZHknLCB0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc29ja2V0Lm9uKCdhY3RpdmF0ZWJvYXJkJywgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUsIHByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgIC4uLmRhdGFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5vbignc2NvcmUnLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSwgcHJvcHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgLi4uZGF0YVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucHJvcHMuc29ja2V0Lm9uKCdnYW1lZmluaXNoZWQnLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5nb3RvcG9zdGdhbWUgPT09IHRydWUpIHRoaXMucG9zdEdhbWUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcclxuICAgICAgICBpZiAobmV4dFN0YXRlLm1heGFjdGl2ZXRpbGVzID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc29ja2V0LmVtaXQoJ2dhbWVmaW5pc2hlZCcsIHRydWUpXHJcbiAgICAgICAgfSAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcG9zdEdhbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5wb3N0R2FtZSgpXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2sgPSAoaXNBY3RpdmUpID0+IHtcclxuICAgICAgICBpZiAoaXNBY3RpdmUgPT0gMSkge1xyXG4gICAgICAgICAgICBsZXQgaGl0ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgbGV0IGRlbGF5ID0gaGl0IC0gdGhpcy5zdGF0ZS5zdGFydHRpbWU7IFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5lbWl0KCdzY29yZScsIHtzdGFydHRpbWUgOiB0aGlzLnN0YXRlLnN0YXJ0dGltZSwgaGl0OiBoaXR9KVxyXG4gICAgICAgICAgICAvLyByZXNldCB0aGUgZ2FtZWJvYXJkXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSk9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJldlN0YXRlLm1heGFjdGl2ZXRpbGVzICE9IDApIHtcclxuICAgICAgICAgICAgICAgICByZXR1cm4ge2FjdGl2ZXRpbGU6IG51bGwsIGRlbGF5IDogZGVsYXksIG1heGFjdGl2ZXRpbGVzOiBwcmV2U3RhdGUubWF4YWN0aXZldGlsZXMgLSAxfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJUaWxlcygpIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5zdGF0ZS5tYXhhY3RpdmV0aWxlcyA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgdGlsZXMgPSBbMSwyLDMsNCw1LDYsNyw4LDldO1xyXG4gICAgICAgICAgICByZXR1cm4gdGlsZXMubWFwKCh0aWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmV0aWxlID09PSB0aWxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29tcG9uZW50VGlsZSBrZXk9e3RpbGV9IGNsYXNzTmFtZT1cImFjdGl2ZVwiIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBhY3RpdmU9ezF9Lz5cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbXBvbmVudFRpbGUga2V5PXt0aWxlfSBhY3RpdmU9ezB9Lz5cclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPENvbXBvbmVudEdhbWUgc3RhcnR0aW1lPXt0aGlzLnN0YXRlLnN0YXJ0dGltZX0vPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50U2NvcmUgc2NvcmU9e3RoaXMuc3RhdGUuc2NvcmV9IG9wcG9uZW50c2NvcmU9e3RoaXMuc3RhdGUub3Bwb25lbnRzY29yZX0gdGlsZXNsZWZ0PXt0aGlzLnN0YXRlLm1heGFjdGl2ZXRpbGVzfSBkZWxheT17dGhpcy5zdGF0ZS5kZWxheX0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci10aWxlc1wiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVGlsZXMoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb250YWluZXItdGlsZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzNXB4IGF1dG8gMDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb250YWluZXItc2NvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=containers\\Gameboard.js */'
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
                    className: 'jsx-3032720613' + ' ' + 'container-options',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        className: 'jsx-3032720613' + ' ' + 'header',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        {
                            className: 'jsx-3032720613' + ' ' + 'header-text',
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
                        className: 'jsx-3032720613' + ' ' + 'form-error',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                        }
                    },
                    this.state.formerror
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'form',
                    { onSubmit: this.handleSubmit, className: 'jsx-3032720613',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        {
                            className: 'jsx-3032720613' + ' ' + 'input-field',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 66
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { id: 'playername', onChange: this.onChange, name: 'playername', type: 'text', className: 'jsx-3032720613',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 67
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'label',
                            { htmlFor: 'playername', className: 'jsx-3032720613',
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
                            className: 'jsx-3032720613' + ' ' + 'input-field',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 70
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { id: 'gamename', onChange: this.onChange, name: 'gamename', type: 'text', className: 'jsx-3032720613',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 71
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'label',
                            { htmlFor: 'gamename', className: 'jsx-3032720613',
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
                            className: 'jsx-3032720613',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 74
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { onChange: this.onChange, checked: this.state.joingame, type: 'checkbox', name: 'joingame', id: 'joingame', className: 'jsx-3032720613',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 75
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'label',
                            { htmlFor: 'joingame', className: 'jsx-3032720613',
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
                            className: 'jsx-3032720613',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 78
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { onChange: this.onChange, checked: this.state.newgame, type: 'checkbox', name: 'newgame', id: 'newgame', className: 'jsx-3032720613',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 79
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'label',
                            { htmlFor: 'newgame', className: 'jsx-3032720613',
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
                        { type: 'submit', className: 'jsx-3032720613' + ' ' + 'waves-effect waves-light btn-large',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 82
                            }
                        },
                        'Go'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '3032720613',
                    css: '.container-options.jsx-3032720613{margin:0;text-align:center;background:#c0c3c6;width:100%;height:100%;}.header.jsx-3032720613{height:40px;background-color:#2196f3;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.header-text.jsx-3032720613{color:#fff;font-size:21px;font-weight:600;}.form-error.jsx-3032720613{color:#F44336;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXE9wdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUZnQyxBQUdrQyxBQU9HLEFBT0QsQUFLSyxTQWxCRSxFQWNILENBUFUsRUFZM0IsWUFKa0IsQ0FkRyxVQU9OLEtBUWYsSUFkYSxXQUNDLFlBQ2hCLDBDQUt1Qiw2RkFDSSxtR0FDekIiLCJmaWxlIjoiY29udGFpbmVyc1xcT3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJEOi9yZXBvcy9kZXYvdGlsZWNsaWNrLWdhbWUvdGlsZWNsaWNrLWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9ucyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwbGF5ZXJuYW1lOiAnJyxcclxuICAgICAgICAgICAgZ2FtZW5hbWU6ICcnLFxyXG4gICAgICAgICAgICBqb2luZ2FtZTogZmFsc2UsXHJcbiAgICAgICAgICAgIG5ld2dhbWU6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb3JtZXJyb3I6ICcnLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc29ja2V0Lm9uKCdmb3JtZXJyb3InLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmb3JtZXJyb3I6ZGF0YX0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5vbihcImdvdG9nYW1lYm9hcmRcIiwgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09PSAndHJ1ZScpXHJcbiAgICAgICAgICAgIHRoaXMucmVhZHkoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZWFkeSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLnBsYXkoKTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC50eXBlID09PSAnY2hlY2tib3gnID8gdGFyZ2V0LmNoZWNrZWQgOiB0YXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIFtuYW1lXTogdmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICBpZiAoKHRoaXMuc3RhdGUuZ2FtZW5hbWUubGVuZ3RoIDwgMSkgJiYgKHRoaXMuc3RhdGUucGxheWVybmFtZS5sZW5ndGggPCAxKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1lcnJvcjogJ1BsZWFzZSBlbnRlciB5b3VyIG5hbWUgYW5kIGdhbWUgbmFtZSd9KVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuZ2FtZW5hbWUubGVuZ3RoIDwgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1lcnJvcjogJ1BsZWFzZSBlbnRlciBnYW1lIG5hbWUnfSlcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnBsYXllcm5hbWUubGVuZ3RoIDwgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1lcnJvcjogJ1BsZWFzZSBlbnRlciB5b3VyIG5hbWUnfSlcclxuICAgICAgICBlbHNlIGlmICghdGhpcy5zdGF0ZS5qb2luZ2FtZSAmJiAhdGhpcy5zdGF0ZS5uZXdnYW1lKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9ybWVycm9yOiAnUGxlYXNlIHNlbGVjdCBvcHRpb24gdG8gY3JlYXRlIG9yIGpvaW4gYSBnYW1lJ30pXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5qb2luZ2FtZSAmJiB0aGlzLnN0YXRlLm5ld2dhbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1lcnJvcjogJ1BsZWFzZSBzZWxlY3QgdG8gam9pbiBvciBjcmVhdGUgYSBnYW1lIGFuZCBub3QgYm90aCd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgodGhpcy5zdGF0ZS5nYW1lbmFtZS5sZW5ndGggPiAwKSAmJiAodGhpcy5zdGF0ZS5wbGF5ZXJuYW1lLmxlbmd0aCA+IDApICYmICh0aGlzLnN0YXRlLmpvaW5nYW1lICYmICF0aGlzLnN0YXRlLm5ld2dhbWUgfHwgIXRoaXMuc3RhdGUuam9pbmdhbWUgJiYgdGhpcy5zdGF0ZS5uZXdnYW1lKSl7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc29ja2V0LmVtaXQoJ2NoZWNrZ2FtZWluZm8nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVybmFtZTp0aGlzLnN0YXRlLnBsYXllcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZW5hbWU6dGhpcy5zdGF0ZS5nYW1lbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdnYW1lOiB0aGlzLnN0YXRlLm5ld2dhbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam9pbmdhbWU6IHRoaXMuc3RhdGUuam9pbmdhbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItb3B0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+PHAgY2xhc3NOYW1lPVwiaGVhZGVyLXRleHRcIj5PcHRpb25zPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj57dGhpcy5zdGF0ZS5mb3JtZXJyb3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwbGF5ZXJuYW1lXCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IG5hbWU9XCJwbGF5ZXJuYW1lXCIgdHlwZT1cInRleHRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGxheWVybmFtZVwiPllvdXIgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJnYW1lbmFtZVwiIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBuYW1lPVwiZ2FtZW5hbWVcIiB0eXBlPVwidGV4dFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnYW1lbmFtZVwiPkdhbWUgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBjaGVja2VkPXt0aGlzLnN0YXRlLmpvaW5nYW1lfSB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiam9pbmdhbWVcIiBpZD1cImpvaW5nYW1lXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImpvaW5nYW1lXCI+Sm9pbiBHYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IGNoZWNrZWQ9e3RoaXMuc3RhdGUubmV3Z2FtZX0gdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIm5ld2dhbWVcIiBpZD1cIm5ld2dhbWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmV3Z2FtZVwiPk5ldyBHYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuLWxhcmdlXCIgdHlwZT1cInN1Ym1pdFwiPkdvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyLW9wdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2MwYzNjNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmZvcm0tZXJyb3Ige1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRjQ0MzM2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=containers\\Options.js */'
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
          className: 'jsx-4165277157' + ' ' + 'container-welcome',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-4165277157' + ' ' + 'header',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'p',
            {
              className: 'jsx-4165277157' + ' ' + 'header-text',
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
          styleId: '4165277157',
          css: '.container-welcome.jsx-4165277157{display:block;width:100%;margin:0;background:#c0c3c6;text-align:center;height:100%;}.header.jsx-4165277157{height:40px;background-color:#2196f3;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.header-text.jsx-4165277157{color:#fff;font-size:21px;font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXFdlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0J3QixBQUdxQyxBQVFGLEFBT0QsV0FDSSxDQVBVLEVBUmQsV0FDRixDQWVPLFFBZEcsR0FPTixLQVFmLFdBZG9CLGtCQUNOLFlBQ2QsNEJBS3FCLDZGQUNJLG1HQUN6QiIsImZpbGUiOiJjb250YWluZXJzXFxXZWxjb21lLmpzIiwic291cmNlUm9vdCI6IkQ6L3JlcG9zL2Rldi90aWxlY2xpY2stZ2FtZS90aWxlY2xpY2stZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcclxuaW1wb3J0IENvbXBvbmVudFdlbGNvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9XZWxjb21lJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlbGNvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBzdGFydCA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMuc29ja2V0LmVtaXQoJ3N0YXJ0JywgRGF0ZS5ub3coKSkgXHJcbiAgICB0aGlzLnByb3BzLnN0YXJ0KClcclxuICB9XHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItd2VsY29tZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+PHAgY2xhc3NOYW1lPVwiaGVhZGVyLXRleHRcIj5UaWxlQ2xpY2s8L3A+PC9kaXY+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnRXZWxjb21lIHN0YXJ0PXt0aGlzLnN0YXJ0fS8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyLXdlbGNvbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjMGMzYzY7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=containers\\Welcome.js */'
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
            className: 'jsx-1747521257' + ' ' + 'container-main',
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
                className: 'jsx-1747521257',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                }
              },
              'Tile Click Game'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-1747521257',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet', className: 'jsx-1747521257',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/css/materialize.min.css', className: 'jsx-1747521257',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('script', { src: '/static/js/jquery-3.3.1.min.js', className: 'jsx-1747521257',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('script', { src: '/static/js/materialize.min.js', className: 'jsx-1747521257',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
            className: 'jsx-1747521257' + ' ' + 'banner',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router__["Route"], { exact: true, path: '/', render: start, __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router__["Route"], { path: '/options', component: options, __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router__["Route"], { path: '/gameboard', component: gameboard, __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router__["Route"], { path: '/postgame', component: postgame, __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '1747521257',
            css: 'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:\'\';content:none;}table{border-collapse:collapse;border-spacing:0;}html,body{height:100%;width:100%;}body{background:#aaaaaa;}#__next{margin:0;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.container-main{height:400px;width:90%;max-width:400px;}.banner{height:20px;background-color:#1976d2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRDZCLEFBZXNCLEFBU0ssQUFHQSxBQUdFLEFBR0osQUFJRCxBQUljLEFBSWIsQUFJUyxBQUdWLEFBUUksQUFLRCxTQWpESixBQXFDRyxFQWZBLENBSmYsQUFZYSxBQW9CZ0IsQ0FMZixDQXBDZCxBQUdBLEVBR0EsR0FkVyxBQWlDVCxDQUljLEdBUGhCLEFBZW9CLENBdkJwQixDQUdtQixHQXhCRixJQXFDQSxLQVlmLEVBSkEsR0FwQkYsQ0F4QmUsYUFDVyx3QkFDMUIsMEJBbUN1Qiw2RkFDSSxtR0FDekIiLCJmaWxlIjoicGFnZXNcXGluZGV4LmpzIiwic291cmNlUm9vdCI6IkQ6L3JlcG9zL2Rldi90aWxlY2xpY2stZ2FtZS90aWxlY2xpY2stZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgV2VsY29tZSBmcm9tICcuLi9jb250YWluZXJzL1dlbGNvbWUnXHJcbmltcG9ydCBPcHRpb25zIGZyb20gJy4uL2NvbnRhaW5lcnMvT3B0aW9ucydcclxuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuLi9jb250YWluZXJzL0dhbWVib2FyZCdcclxuaW1wb3J0IFBvc3RnYW1lIGZyb20gJy4uL2NvbnRhaW5lcnMvUG9zdGdhbWUnXHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xyXG5pbXBvcnQge2Jyb3dzZXJIaXN0b3J5LCBSb3V0ZXIsIFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcbmltcG9ydCB7Y3JlYXRlTWVtb3J5SGlzdG9yeX0gZnJvbSAnaGlzdG9yeSdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuXHJcbnZhciBsb2NhdGlvbiA9IHt9O1xyXG5jb25zdCBoaXN0b3J5ID0gY3JlYXRlTWVtb3J5SGlzdG9yeShsb2NhdGlvbilcclxuXHJcbmNvbnN0IHNlcnZlcnBhdGggPSAnbG9jYWxob3N0OjQwMDAnXHJcbmNvbnN0IHNvY2tldCA9IGlvKHNlcnZlcnBhdGgpXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcclxuICAgICAgdGhpcy5zb2NrZXQgPSBzb2NrZXQ7XHJcbiAgICB9XHJcblxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgIGNvbnN0IHN0YXJ0ID0gKCkgPT4gKCA8V2VsY29tZSBzb2NrZXQ9e3RoaXMuc29ja2V0fSBzdGFydD17KCkgPT4gaGlzdG9yeS5wdXNoKCcvb3B0aW9ucycpfS8+IClcclxuICAgIGNvbnN0IG9wdGlvbnMgPSAoKSA9PiAoIDxPcHRpb25zIHNvY2tldD17dGhpcy5zb2NrZXR9IHBsYXk9eygpID0+IGhpc3RvcnkucHVzaCgnL2dhbWVib2FyZCcpfSAvPiApXHJcbiAgICBjb25zdCBnYW1lYm9hcmQgPSAoKSA9PiAoIDxHYW1lYm9hcmQgc29ja2V0PXt0aGlzLnNvY2tldH0gcG9zdEdhbWU9eygpID0+IGhpc3RvcnkucHVzaCgnL3Bvc3RnYW1lJyl9Lz4pXHJcbiAgICBjb25zdCBwb3N0Z2FtZSA9ICgpID0+ICggPFBvc3RnYW1lIHNvY2tldD17dGhpcy5zb2NrZXR9Lz4pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1tYWluXCI+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5UaWxlIENsaWNrIEdhbWU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL2Nzcy9tYXRlcmlhbGl6ZS5taW4uY3NzXCIvPlxyXG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9zdGF0aWMvanMvanF1ZXJ5LTMuMy4xLm1pbi5qc1wiLz5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCIvc3RhdGljL2pzL21hdGVyaWFsaXplLm1pbi5qc1wiLz5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCIvPlxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgcmVuZGVyPXtzdGFydH0vPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvb3B0aW9uc1wiIGNvbXBvbmVudD17b3B0aW9uc30vPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZ2FtZWJvYXJkXCIgY29tcG9uZW50PXtnYW1lYm9hcmR9Lz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Bvc3RnYW1lXCIgY29tcG9uZW50PXtwb3N0Z2FtZX0vPlxyXG4gICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgIGh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcclxuICAgICAgICAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcclxuICAgICAgICAgIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcclxuICAgICAgICAgIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcclxuICAgICAgICAgIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXHJcbiAgICAgICAgICBiLCB1LCBpLCBjZW50ZXIsXHJcbiAgICAgICAgICBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxyXG4gICAgICAgICAgZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXHJcbiAgICAgICAgICB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcclxuICAgICAgICAgIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcclxuICAgICAgICAgIGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXHJcbiAgICAgICAgICBtZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcclxuICAgICAgICAgIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAgICAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxyXG4gICAgICAgICAgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvbCwgdWwge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYmxvY2txdW90ZSwgcSB7XHJcbiAgICAgICAgICAgIHF1b3Rlczogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxyXG4gICAgICAgICAgcTpiZWZvcmUsIHE6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgY29udGVudDogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBodG1sLCBib2R5IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2FhYWFhYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjX19uZXh0IHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFpbmVyLW1haW4ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iYW5uZXIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUm91dGVyPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=pages\\index.js */'
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