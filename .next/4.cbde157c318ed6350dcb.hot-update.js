webpackHotUpdate(4,{

/***/ "./components/game/Score.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "D:\\repos\\dev\\tileclick-game\\tileclick-game\\components\\game\\Score.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

    enterModule && enterModule(module);
})();

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
    }, {
        key: "__reactstandin__regenerateByEval",
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Score;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = Score;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Score, "Score", "D:/repos/dev/tileclick-game/tileclick-game/components/game/Score.js");
    reactHotLoader.register(_default, "default", "D:/repos/dev/tileclick-game/tileclick-game/components/game/Score.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.cbde157c318ed6350dcb.hot-update.js.map