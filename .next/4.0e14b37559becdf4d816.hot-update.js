webpackHotUpdate(4,{

/***/ "./containers/Postgame.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
var _jsxFileName = 'D:\\repos\\dev\\tileclick-game\\tileclick-game\\containers\\Postgame.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

    enterModule && enterModule(module);
})();

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
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'container', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                    }
                },
                this.renderGameInfo(),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'score', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 38
                        }
                    },
                    'Your score: ',
                    this.state.score
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return PostGame;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = PostGame;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(PostGame, 'PostGame', 'D:/repos/dev/tileclick-game/tileclick-game/containers/Postgame.js');
    reactHotLoader.register(_default, 'default', 'D:/repos/dev/tileclick-game/tileclick-game/containers/Postgame.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.0e14b37559becdf4d816.hot-update.js.map