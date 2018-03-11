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
                'main',
                {
                    className: 'jsx-1192018766' + ' ' + 'banner',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        className: 'jsx-1192018766',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 7
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h1',
                        {
                            className: 'jsx-1192018766',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 8
                            }
                        },
                        'Welcome'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'button',
                        { onClick: this.props.start, className: 'jsx-1192018766',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 9
                            }
                        },
                        'Start'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '1192018766',
                    css: '.banner.jsx-1192018766{display:block;width:100%;margin:0;background:#03A9F4 !important;position:absolute;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFdlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVTRCLEFBR3FDLGNBQ0gsV0FDRixTQUNxQiw4QkFDWixrQkFDQSxrQkFDcEIiLCJmaWxlIjoiY29tcG9uZW50c1xcV2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9yZXBvcy9kZXYvdGlsZWNsaWNrLWdhbWUvdGlsZWNsaWNrLWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50V2VsY29tZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImJhbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+V2VsY29tZTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnN0YXJ0fT5TdGFydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmJhbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAzQTlGNCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=components\\Welcome.js */'
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
                        'Main Game will start in ',
                        this.props.starttime
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '911921598',
                    css: 'header.jsx-911921598{background:grey;line-height:1;text-align:center;font-size:16px;margin:0;padding:0;width:100%;height:80px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGdhbWVcXEdhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUTRCLEFBR2lDLGdCQUNGLGNBQ0ksa0JBQ0gsZUFDTixTQUNDLFVBQ0MsV0FDQyxZQUNoQiIsImZpbGUiOiJjb21wb25lbnRzXFxnYW1lXFxHYW1lLmpzIiwic291cmNlUm9vdCI6IkQ6L3JlcG9zL2Rldi90aWxlY2xpY2stZ2FtZS90aWxlY2xpY2stZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPk1haW4gR2FtZSB3aWxsIHN0YXJ0IGluIHt0aGlzLnByb3BzLnN0YXJ0dGltZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=components\\game\\Game.js */'
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
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
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'score', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 7
                        }
                    },
                    'Your score: ',
                    this.props.score
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'score', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 8
                        }
                    },
                    'Opponent\'s score: ',
                    this.props.opponentscore
                )
            );
        }
    }]);

    return Score;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

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
          className: "jsx-2575407210" + " " + "tile",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { onClick: function onClick() {
            return _this2.props.handleClick(_this2.props.active);
          }, className: "jsx-2575407210" + " " + (this.props.className || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "2575407210",
          css: ".tile.jsx-2575407210{margin:1px;background:#03A9F4;height:95px;width:164px;}.active.jsx-2575407210{height:100%;width:100%;cursor:pointer;background:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGdhbWVcXFRpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT3NCLEFBR29CLEFBT0MsV0FOTyxDQU9SLFdBQ0ksT0FQSCxRQVFHLElBUEgsV0FRZCxDQVBGIiwiZmlsZSI6ImNvbXBvbmVudHNcXGdhbWVcXFRpbGUuanMiLCJzb3VyY2VSb290IjoiRDovcmVwb3MvZGV2L3RpbGVjbGljay1nYW1lL3RpbGVjbGljay1nYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFRpbGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlsZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhhbmRsZUNsaWNrKHRoaXMucHJvcHMuYWN0aXZlKX0+PC9kaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC50aWxlIHtcclxuICAgICAgICBtYXJnaW46IDFweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDNBOUY0O1xyXG4gICAgICAgIGhlaWdodDogOTVweDtcclxuICAgICAgICB3aWR0aDogMTY0cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlsZTsiXX0= */\n/*@ sourceURL=components\\game\\Tile.js */"
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

        _this.handleClick = function (isActive) {
            if (isActive == 1) {
                _this.props.socket.emit('score', { starttime: _this.state.starttime, hit: Date.now() });
                // reset the gameboard
                _this.setState({ activetile: null });
            }
        };

        _this.state = {
            starttime: null,
            activetile: null,
            score: 0,
            opponentscore: 0
        };
        return _this;
    }

    _createClass(Gameboard, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.props.socket.emit('ready', true);
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
        }
    }, {
        key: 'renderTiles',
        value: function renderTiles() {
            var _this3 = this;

            var tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            return tiles.map(function (tile) {
                if (_this3.state.activetile === tile) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_game_Tile__["a" /* default */], { key: tile, className: 'active', handleClick: _this3.handleClick, active: 1, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                    }
                });else return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_game_Tile__["a" /* default */], { key: tile, active: 0, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
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
                    className: 'jsx-4015689933' + ' ' + 'container',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_game_Game__["a" /* default */], { starttime: this.state.starttime, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_game_Score__["a" /* default */], { score: this.state.score, opponentscore: this.state.opponentscore, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        className: 'jsx-4015689933' + ' ' + 'container-tiles',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 61
                        }
                    },
                    this.renderTiles()
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '4015689933',
                    css: '.container.jsx-4015689933{position:absolute;height:500px;width:600px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.container-tiles.jsx-4015689933{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:500px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:62px auto 0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.active.jsx-4015689933{background:red !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXEdhbWVib2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRXdCLEFBR3VDLEFBT0wsQUFPYSxrQkFiYixRQWNqQixLQWJnQixZQUNDLCtCQUtELFlBQ08sK0JBTEcsOERBTUgsZ0JBTHZCLEdBTW1CLHlEQUNuQiIsImZpbGUiOiJjb250YWluZXJzXFxHYW1lYm9hcmQuanMiLCJzb3VyY2VSb290IjoiRDovcmVwb3MvZGV2L3RpbGVjbGljay1nYW1lL3RpbGVjbGljay1nYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xyXG5pbXBvcnQgQ29tcG9uZW50R2FtZSBmcm9tICcuLi9jb21wb25lbnRzL2dhbWUvR2FtZSdcclxuaW1wb3J0IENvbXBvbmVudFRpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9nYW1lL1RpbGUnXHJcbmltcG9ydCBDb21wb25lbnRTY29yZSBmcm9tICcuLi9jb21wb25lbnRzL2dhbWUvU2NvcmUnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc3RhcnR0aW1lOiBudWxsLFxyXG4gICAgICAgICAgICBhY3RpdmV0aWxlOiBudWxsLFxyXG4gICAgICAgICAgICBzY29yZTogMCxcclxuICAgICAgICAgICAgb3Bwb25lbnRzY29yZTogMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5lbWl0KCdyZWFkeScsIHRydWUpXHJcbiAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQub24oJ2FjdGl2YXRlYm9hcmQnLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSwgcHJvcHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgLi4uZGF0YVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucHJvcHMuc29ja2V0Lm9uKCdzY29yZScsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlLCBwcm9wcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAuLi5kYXRhXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2sgPSAoaXNBY3RpdmUpID0+IHtcclxuICAgICAgICBpZiAoaXNBY3RpdmUgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5lbWl0KCdzY29yZScsIHtzdGFydHRpbWUgOiB0aGlzLnN0YXRlLnN0YXJ0dGltZSwgaGl0OiBEYXRlLm5vdygpfSlcclxuICAgICAgICAgICAgLy8gcmVzZXQgdGhlIGdhbWVib2FyZFxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmV0aWxlOiBudWxsfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyVGlsZXMoKSB7XHJcbiAgICAgICAgY29uc3QgdGlsZXMgPSBbMSwyLDMsNCw1LDYsNyw4LDldO1xyXG4gICAgICAgIHJldHVybiB0aWxlcy5tYXAoKHRpbGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZldGlsZSA9PT0gdGlsZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiA8Q29tcG9uZW50VGlsZSBrZXk9e3RpbGV9IGNsYXNzTmFtZT1cImFjdGl2ZVwiIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBhY3RpdmU9ezF9Lz5cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDb21wb25lbnRUaWxlIGtleT17dGlsZX0gYWN0aXZlPXswfS8+XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPENvbXBvbmVudEdhbWUgc3RhcnR0aW1lPXt0aGlzLnN0YXRlLnN0YXJ0dGltZX0vPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50U2NvcmUgc2NvcmU9e3RoaXMuc3RhdGUuc2NvcmV9IG9wcG9uZW50c2NvcmU9e3RoaXMuc3RhdGUub3Bwb25lbnRzY29yZX0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci10aWxlc1wiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVGlsZXMoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lci10aWxlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDYycHggYXV0byAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=containers\\Gameboard.js */'
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
                _this.props.socketObj('checkgameinfo', {
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
                'main',
                {
                    className: 'jsx-1971096717' + ' ' + 'banner',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        className: 'jsx-1971096717',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 62
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h1',
                        {
                            className: 'jsx-1971096717',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 63
                            }
                        },
                        'Your Info'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        {
                            className: 'jsx-1971096717',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 64
                            }
                        },
                        this.state.formerror
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'form',
                        { onSubmit: this.handleSubmit, className: 'jsx-1971096717',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 65
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { onChange: this.onChange, name: 'playername', placeholder: 'Your Name', className: 'jsx-1971096717',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 66
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { onChange: this.onChange, checked: this.state.joingame, type: 'checkbox', name: 'joingame', placeholder: 'enter', className: 'jsx-1971096717',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 67
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { onChange: this.onChange, checked: this.state.newgame, type: 'checkbox', name: 'newgame', placeholder: 'enter', className: 'jsx-1971096717',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 68
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { onChange: this.onChange, name: 'gamename', placeholder: 'Game Name', className: 'jsx-1971096717',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 69
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'button',
                            { type: 'submit', className: 'jsx-1971096717',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 70
                                }
                            },
                            'Go'
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '1971096717',
                    css: '.banner.jsx-1971096717{display:block;width:600px;margin:0;background:#03A9F4 !important;position:absolute;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXE9wdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0U0QixBQUdxQyxjQUNGLFlBQ0gsU0FDcUIsOEJBQ1osa0JBQ0Esa0JBQ3BCIiwiZmlsZSI6ImNvbnRhaW5lcnNcXE9wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiRDovcmVwb3MvZGV2L3RpbGVjbGljay1nYW1lL3RpbGVjbGljay1nYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9ucyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwbGF5ZXJuYW1lOiAnJyxcclxuICAgICAgICAgICAgZ2FtZW5hbWU6ICcnLFxyXG4gICAgICAgICAgICBqb2luZ2FtZTogZmFsc2UsXHJcbiAgICAgICAgICAgIG5ld2dhbWU6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb3JtZXJyb3I6ICcnLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc29ja2V0Lm9uKCdmb3JtZXJyb3InLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmb3JtZXJyb3I6ZGF0YX0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5vbihcImdvdG9nYW1lYm9hcmRcIiwgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09PSAndHJ1ZScpXHJcbiAgICAgICAgICAgIHRoaXMucmVhZHkoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZWFkeSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLnBsYXkoKTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC50eXBlID09PSAnY2hlY2tib3gnID8gdGFyZ2V0LmNoZWNrZWQgOiB0YXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIFtuYW1lXTogdmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICBpZiAoKHRoaXMuc3RhdGUuZ2FtZW5hbWUubGVuZ3RoIDwgMSkgJiYgKHRoaXMuc3RhdGUucGxheWVybmFtZS5sZW5ndGggPCAxKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1lcnJvcjogJ1BsZWFzZSBlbnRlciB5b3VyIG5hbWUgYW5kIGdhbWUgbmFtZSd9KVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuZ2FtZW5hbWUubGVuZ3RoIDwgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1lcnJvcjogJ1BsZWFzZSBlbnRlciBnYW1lIG5hbWUnfSlcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnBsYXllcm5hbWUubGVuZ3RoIDwgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1lcnJvcjogJ1BsZWFzZSBlbnRlciB5b3VyIG5hbWUnfSlcclxuICAgICAgICBlbHNlIGlmICghdGhpcy5zdGF0ZS5qb2luZ2FtZSAmJiAhdGhpcy5zdGF0ZS5uZXdnYW1lKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9ybWVycm9yOiAnUGxlYXNlIHNlbGVjdCBvcHRpb24gdG8gY3JlYXRlIG9yIGpvaW4gYSBnYW1lJ30pXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5qb2luZ2FtZSAmJiB0aGlzLnN0YXRlLm5ld2dhbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1lcnJvcjogJ1BsZWFzZSBzZWxlY3QgdG8gam9pbiBvciBjcmVhdGUgYSBnYW1lIGFuZCBub3QgYm90aCd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgodGhpcy5zdGF0ZS5nYW1lbmFtZS5sZW5ndGggPiAwKSAmJiAodGhpcy5zdGF0ZS5wbGF5ZXJuYW1lLmxlbmd0aCA+IDApICYmICh0aGlzLnN0YXRlLmpvaW5nYW1lICYmICF0aGlzLnN0YXRlLm5ld2dhbWUgfHwgIXRoaXMuc3RhdGUuam9pbmdhbWUgJiYgdGhpcy5zdGF0ZS5uZXdnYW1lKSl7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc29ja2V0T2JqKCdjaGVja2dhbWVpbmZvJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcm5hbWU6dGhpcy5zdGF0ZS5wbGF5ZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVuYW1lOnRoaXMuc3RhdGUuZ2FtZW5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Z2FtZTogdGhpcy5zdGF0ZS5uZXdnYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5nYW1lOiB0aGlzLnN0YXRlLmpvaW5nYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgICAgIFxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiYmFubmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5Zb3VyIEluZm88L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLmZvcm1lcnJvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBuYW1lPVwicGxheWVybmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IGNoZWNrZWQ9e3RoaXMuc3RhdGUuam9pbmdhbWV9IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJqb2luZ2FtZVwiIHBsYWNlaG9sZGVyPVwiZW50ZXJcIiAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBjaGVja2VkPXt0aGlzLnN0YXRlLm5ld2dhbWV9IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJuZXdnYW1lXCIgcGxhY2Vob2xkZXI9XCJlbnRlclwiICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IG5hbWU9XCJnYW1lbmFtZVwiIHBsYWNlaG9sZGVyPVwiR2FtZSBOYW1lXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5HbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5iYW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDNBOUY0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=containers\\Options.js */'
                })
            );
        }
    }]);

    return Options;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Options);

/***/ }),

/***/ "./containers/Welcome.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Welcome__ = __webpack_require__("./components/Welcome.js");
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
      _this.props.socketObj('start', Date.now());
      _this.props.start();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Welcome, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'container', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Welcome__["a" /* default */], { start: this.start, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        })
      );
    }
  }]);

  return Welcome;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client__ = __webpack_require__("socket.io-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router__ = __webpack_require__("react-router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_history__ = __webpack_require__("history");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_history___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_history__);
var _jsxFileName = 'D:\\repos\\dev\\tileclick-game\\tileclick-game\\pages\\index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var location = {};
var history = Object(__WEBPACK_IMPORTED_MODULE_7_history__["createMemoryHistory"])(location);

var serverpath = 'localhost:4000';
var socket = __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default()(serverpath);

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.socket = socket;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var start = function start() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__containers_Welcome__["a" /* default */], { socketObj: function socketObj(path, data) {
            return socket.emit(path, data);
          }, start: function start() {
            return history.push('/options');
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        });
      };
      var options = function options() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__containers_Options__["a" /* default */], { socket: _this2.socket, socketObj: function socketObj(path, data) {
            return socket.emit(path, data);
          }, play: function play() {
            return history.push('/gameboard');
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        });
      };
      var gameboard = function gameboard() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__containers_Gameboard__["a" /* default */], { socket: _this2.socket, socketObj: function socketObj(path, data) {
            return socket.emit(path, data);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        });
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6_react_router__["Router"],
        { history: history, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-1921204274',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router__["Route"], { exact: true, path: '/', render: start, __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router__["Route"], { path: '/options', component: options, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router__["Route"], { path: '/gameboard', component: gameboard, __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '1921204274',
            css: 'html{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}body{background:orange;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:600px;height:500px;border:2px solid black;margin:0;position:absolute;left:20px;top:20px;}body div{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQzZCLEFBR3dCLEFBUVMsQUFXVCxTQWxCQyxBQW1CWixTQVhlLENBUEosU0FDTSxlQUNGLGFBQ1csd0JBQzFCLFlBSWMsWUFDQyxhQUNVLHVCQUNkLFNBQ1Msa0JBQ1IsVUFDRCxTQUNYIiwiZmlsZSI6InBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJEOi9yZXBvcy9kZXYvdGlsZWNsaWNrLWdhbWUvdGlsZWNsaWNrLWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFdlbGNvbWUgZnJvbSAnLi4vY29udGFpbmVycy9XZWxjb21lJ1xyXG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuLi9jb250YWluZXJzL09wdGlvbnMnXHJcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi4vY29udGFpbmVycy9HYW1lYm9hcmQnXHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xyXG5pbXBvcnQge2Jyb3dzZXJIaXN0b3J5LCBSb3V0ZXIsIFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcbmltcG9ydCB7Y3JlYXRlTWVtb3J5SGlzdG9yeX0gZnJvbSAnaGlzdG9yeSdcclxuXHJcblxyXG52YXIgbG9jYXRpb24gPSB7fTtcclxuY29uc3QgaGlzdG9yeSA9IGNyZWF0ZU1lbW9yeUhpc3RvcnkobG9jYXRpb24pXHJcblxyXG5jb25zdCBzZXJ2ZXJwYXRoID0gJ2xvY2FsaG9zdDo0MDAwJ1xyXG5jb25zdCBzb2NrZXQgPSBpbyhzZXJ2ZXJwYXRoKVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgICAgdGhpcy5zb2NrZXQgPSBzb2NrZXQ7XHJcbiAgICB9XHJcblxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgIGNvbnN0IHN0YXJ0ID0gKCkgPT4gKCA8V2VsY29tZSBzb2NrZXRPYmo9eyhwYXRoLCBkYXRhKSA9PiBzb2NrZXQuZW1pdChwYXRoLCBkYXRhKX0gc3RhcnQ9eygpID0+IGhpc3RvcnkucHVzaCgnL29wdGlvbnMnKX0vPiApXHJcbiAgICBjb25zdCBvcHRpb25zID0gKCkgPT4gKCA8T3B0aW9ucyBzb2NrZXQ9e3RoaXMuc29ja2V0fSBzb2NrZXRPYmo9eyhwYXRoLCBkYXRhKSA9PiBzb2NrZXQuZW1pdChwYXRoLCBkYXRhKX0gcGxheT17KCkgPT4gaGlzdG9yeS5wdXNoKCcvZ2FtZWJvYXJkJyl9IC8+IClcclxuICAgIGNvbnN0IGdhbWVib2FyZCA9ICgpID0+ICggPEdhbWVib2FyZCBzb2NrZXQ9e3RoaXMuc29ja2V0fSBzb2NrZXRPYmo9eyhwYXRoLGRhdGEpID0+IHNvY2tldC5lbWl0KHBhdGgsZGF0YSl9IC8+KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIHJlbmRlcj17c3RhcnR9Lz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL29wdGlvbnNcIiBjb21wb25lbnQ9e29wdGlvbnN9Lz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2dhbWVib2FyZFwiIGNvbXBvbmVudD17Z2FtZWJvYXJkfS8+XHJcbiAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgICBodG1sIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm9keSBkaXYge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1JvdXRlcj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=pages\\index.js */'
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