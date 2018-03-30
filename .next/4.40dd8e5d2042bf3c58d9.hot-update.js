webpackHotUpdate(4,{

/***/ "./containers/Gameboard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_game_Game__ = __webpack_require__("./components/game/Game.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_game_Tile__ = __webpack_require__("./components/game/Tile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_game_Score__ = __webpack_require__("./components/game/Score.js");
var _jsxFileName = 'D:\\repos\\dev\\tileclick-game\\tileclick-game\\containers\\Gameboard.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

    enterModule && enterModule(module);
})();

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
        key: 'showLoadingScreen',
        value: function showLoadingScreen() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                    className: 'jsx-2587049671',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 81
                    }
                },
                ' ',
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                        className: 'jsx-2587049671' + ' ' + 'loading',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 81
                        }
                    },
                    'Waiting for other player to connect.'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '2587049671',
                    css: '.loading.jsx-2587049671{color:red;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXEdhbWVib2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRjRCLEFBR21DLFVBQ1Esa0JBQ3RCIiwiZmlsZSI6ImNvbnRhaW5lcnNcXEdhbWVib2FyZC5qcyIsInNvdXJjZVJvb3QiOiJEOi9yZXBvcy9kZXYvdGlsZWNsaWNrLWdhbWUvdGlsZWNsaWNrLWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXHJcbmltcG9ydCBDb21wb25lbnRHYW1lIGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZS9HYW1lJ1xyXG5pbXBvcnQgQ29tcG9uZW50VGlsZSBmcm9tICcuLi9jb21wb25lbnRzL2dhbWUvVGlsZSdcclxuaW1wb3J0IENvbXBvbmVudFNjb3JlIGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZS9TY29yZSdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHN0YXJ0dGltZTogbnVsbCxcclxuICAgICAgICAgICAgYWN0aXZldGlsZTogbnVsbCxcclxuICAgICAgICAgICAgc2NvcmU6IDAsXHJcbiAgICAgICAgICAgIG9wcG9uZW50c2NvcmU6IDAsXHJcbiAgICAgICAgICAgIGRlbGF5OiBudWxsLFxyXG4gICAgICAgICAgICBtYXhhY3RpdmV0aWxlczogMTAsXHJcbiAgICAgICAgICAgIGlzbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQuZW1pdCgncmVhZHknLCB0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc29ja2V0Lm9uKCdhY3RpdmF0ZWJvYXJkJywgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUsIHByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgIC4uLmRhdGEsIGlzbG9hZGluZzpmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucHJvcHMuc29ja2V0Lm9uKCdzY29yZScsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlLCBwcm9wcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAuLi5kYXRhXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQub24oJ2dhbWVmaW5pc2hlZCcsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmdvdG9wb3N0Z2FtZSA9PT0gdHJ1ZSkgdGhpcy5wb3N0R2FtZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xyXG4gICAgICAgIGlmIChuZXh0U3RhdGUubWF4YWN0aXZldGlsZXMgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQuZW1pdCgnZ2FtZWZpbmlzaGVkJywgdHJ1ZSlcclxuICAgICAgICB9ICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwb3N0R2FtZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLnBvc3RHYW1lKClcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljayA9IChpc0FjdGl2ZSkgPT4ge1xyXG4gICAgICAgIGlmIChpc0FjdGl2ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBoaXQgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBsZXQgZGVsYXkgPSBoaXQgLSB0aGlzLnN0YXRlLnN0YXJ0dGltZTsgXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc29ja2V0LmVtaXQoJ3Njb3JlJywge3N0YXJ0dGltZSA6IHRoaXMuc3RhdGUuc3RhcnR0aW1lLCBoaXQ6IGhpdH0pXHJcbiAgICAgICAgICAgIC8vIHJlc2V0IHRoZSBnYW1lYm9hcmRcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKT0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2U3RhdGUubWF4YWN0aXZldGlsZXMgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgIHJldHVybiB7YWN0aXZldGlsZTogbnVsbCwgZGVsYXkgOiBkZWxheSwgbWF4YWN0aXZldGlsZXM6IHByZXZTdGF0ZS5tYXhhY3RpdmV0aWxlcyAtIDF9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclRpbGVzKCkge1xyXG4gICAgICAgICAgICBjb25zdCB0aWxlcyA9IFsxLDIsMyw0LDUsNiw3LDgsOV07XHJcbiAgICAgICAgICAgIHJldHVybiB0aWxlcy5tYXAoKHRpbGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZXRpbGUgPT09IHRpbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb21wb25lbnRUaWxlIGtleT17dGlsZX0gY2xhc3NOYW1lPVwiYWN0aXZlXCIgaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGFjdGl2ZT17MX0vPlxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29tcG9uZW50VGlsZSBrZXk9e3RpbGV9IGFjdGl2ZT17MH0vPlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dMb2FkaW5nU2NyZWVuKCkge1xyXG4gICAgICAgIHJldHVybiAoPGRpdj4gPHAgY2xhc3NOYW1lPVwibG9hZGluZ1wiPldhaXRpbmcgZm9yIG90aGVyIHBsYXllciB0byBjb25uZWN0LjwvcD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAubG9hZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICB9XHJcblxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50R2FtZSBzdGFydHRpbWU9e3RoaXMuc3RhdGUuc3RhcnR0aW1lfS8+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzbG9hZGluZyA/IHRoaXMuc2hvd0xvYWRpbmdTY3JlZW4oKSA6IDxDb21wb25lbnRTY29yZSBzY29yZT17dGhpcy5zdGF0ZS5zY29yZX0gb3Bwb25lbnRzY29yZT17dGhpcy5zdGF0ZS5vcHBvbmVudHNjb3JlfSB0aWxlc2xlZnQ9e3RoaXMuc3RhdGUubWF4YWN0aXZldGlsZXN9IGRlbGF5PXt0aGlzLnN0YXRlLmRlbGF5fS8+fVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci10aWxlc1wiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVGlsZXMoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lci10aWxlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDM1cHggYXV0byAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyLXNjb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=containers\\Gameboard.js */'
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
                        lineNumber: 94
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_game_Game__["a" /* default */], { starttime: this.state.starttime, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 95
                    }
                }),
                this.state.isloading ? this.showLoadingScreen() : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_game_Score__["a" /* default */], { score: this.state.score, opponentscore: this.state.opponentscore, tilesleft: this.state.maxactivetiles, delay: this.state.delay, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 96
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        className: 'jsx-318123692' + ' ' + 'container-tiles',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 97
                        }
                    },
                    this.renderTiles()
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '318123692',
                    css: '.container.jsx-318123692{position:relative;height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:#ffffff;}.container-tiles.jsx-318123692{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:35px auto 0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:10px;}.active.jsx-318123692{background:red !important;}.container-score.jsx-318123692{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXEdhbWVib2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvR3dCLEFBR3VDLEFBUUwsQUFVYSxBQUdiLGtCQXBCRCxRQWtCaEIsSUFqQmUsV0FDRSxpQ0FNRixBQWFrQixXQVpqQixZQUNPLGtCQVBHLDJFQVFILEdBUE0sSUFrQk4sWUFWSixTQVBuQixnREFRMkIsd0JBVVosV0FDZixnRUFWaUIsYUFDakIiLCJmaWxlIjoiY29udGFpbmVyc1xcR2FtZWJvYXJkLmpzIiwic291cmNlUm9vdCI6IkQ6L3JlcG9zL2Rldi90aWxlY2xpY2stZ2FtZS90aWxlY2xpY2stZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcclxuaW1wb3J0IENvbXBvbmVudEdhbWUgZnJvbSAnLi4vY29tcG9uZW50cy9nYW1lL0dhbWUnXHJcbmltcG9ydCBDb21wb25lbnRUaWxlIGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZS9UaWxlJ1xyXG5pbXBvcnQgQ29tcG9uZW50U2NvcmUgZnJvbSAnLi4vY29tcG9uZW50cy9nYW1lL1Njb3JlJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc3RhcnR0aW1lOiBudWxsLFxyXG4gICAgICAgICAgICBhY3RpdmV0aWxlOiBudWxsLFxyXG4gICAgICAgICAgICBzY29yZTogMCxcclxuICAgICAgICAgICAgb3Bwb25lbnRzY29yZTogMCxcclxuICAgICAgICAgICAgZGVsYXk6IG51bGwsXHJcbiAgICAgICAgICAgIG1heGFjdGl2ZXRpbGVzOiAxMCxcclxuICAgICAgICAgICAgaXNsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5lbWl0KCdyZWFkeScsIHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQub24oJ2FjdGl2YXRlYm9hcmQnLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSwgcHJvcHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgLi4uZGF0YSwgaXNsb2FkaW5nOmZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQub24oJ3Njb3JlJywgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUsIHByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgIC4uLmRhdGFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5vbignZ2FtZWZpbmlzaGVkJywgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZ290b3Bvc3RnYW1lID09PSB0cnVlKSB0aGlzLnBvc3RHYW1lKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XHJcbiAgICAgICAgaWYgKG5leHRTdGF0ZS5tYXhhY3RpdmV0aWxlcyA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5lbWl0KCdnYW1lZmluaXNoZWQnLCB0cnVlKVxyXG4gICAgICAgIH0gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHBvc3RHYW1lID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMucG9zdEdhbWUoKVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrID0gKGlzQWN0aXZlKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzQWN0aXZlID09IDEpIHtcclxuICAgICAgICAgICAgbGV0IGhpdCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGxldCBkZWxheSA9IGhpdCAtIHRoaXMuc3RhdGUuc3RhcnR0aW1lOyBcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQuZW1pdCgnc2NvcmUnLCB7c3RhcnR0aW1lIDogdGhpcy5zdGF0ZS5zdGFydHRpbWUsIGhpdDogaGl0fSlcclxuICAgICAgICAgICAgLy8gcmVzZXQgdGhlIGdhbWVib2FyZFxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZTdGF0ZS5tYXhhY3RpdmV0aWxlcyAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIHthY3RpdmV0aWxlOiBudWxsLCBkZWxheSA6IGRlbGF5LCBtYXhhY3RpdmV0aWxlczogcHJldlN0YXRlLm1heGFjdGl2ZXRpbGVzIC0gMX1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyVGlsZXMoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbGVzID0gWzEsMiwzLDQsNSw2LDcsOCw5XTtcclxuICAgICAgICAgICAgcmV0dXJuIHRpbGVzLm1hcCgodGlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZldGlsZSA9PT0gdGlsZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbXBvbmVudFRpbGUga2V5PXt0aWxlfSBjbGFzc05hbWU9XCJhY3RpdmVcIiBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGlja30gYWN0aXZlPXsxfS8+XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb21wb25lbnRUaWxlIGtleT17dGlsZX0gYWN0aXZlPXswfS8+XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0xvYWRpbmdTY3JlZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuICg8ZGl2PiA8cCBjbGFzc05hbWU9XCJsb2FkaW5nXCI+V2FpdGluZyBmb3Igb3RoZXIgcGxheWVyIHRvIGNvbm5lY3QuPC9wPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5sb2FkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgIH1cclxuXHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnRHYW1lIHN0YXJ0dGltZT17dGhpcy5zdGF0ZS5zdGFydHRpbWV9Lz5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNsb2FkaW5nID8gdGhpcy5zaG93TG9hZGluZ1NjcmVlbigpIDogPENvbXBvbmVudFNjb3JlIHNjb3JlPXt0aGlzLnN0YXRlLnNjb3JlfSBvcHBvbmVudHNjb3JlPXt0aGlzLnN0YXRlLm9wcG9uZW50c2NvcmV9IHRpbGVzbGVmdD17dGhpcy5zdGF0ZS5tYXhhY3RpdmV0aWxlc30gZGVsYXk9e3RoaXMuc3RhdGUuZGVsYXl9Lz59XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXRpbGVzXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJUaWxlcygpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyLXRpbGVzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMzVweCBhdXRvIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb250YWluZXItc2NvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=containers\\Gameboard.js */'
                })
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Gameboard;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = Gameboard;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Gameboard, 'Gameboard', 'D:/repos/dev/tileclick-game/tileclick-game/containers/Gameboard.js');
    reactHotLoader.register(_default, 'default', 'D:/repos/dev/tileclick-game/tileclick-game/containers/Gameboard.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.40dd8e5d2042bf3c58d9.hot-update.js.map