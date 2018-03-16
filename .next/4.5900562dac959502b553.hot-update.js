webpackHotUpdate(4,{

/***/ "./containers/Options.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
var _jsxFileName = 'D:\\repos\\dev\\tileclick-game\\tileclick-game\\containers\\Options.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

    enterModule && enterModule(module);
})();

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
                    className: 'jsx-2247979503' + ' ' + 'container-main-content',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'h1',
                    {
                        className: 'jsx-2247979503',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 62
                        }
                    },
                    'Your Info'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                        className: 'jsx-2247979503',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                        }
                    },
                    this.state.formerror
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'form',
                    { onSubmit: this.handleSubmit, className: 'jsx-2247979503',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { onChange: this.onChange, name: 'playername', placeholder: 'Your Name', className: 'jsx-2247979503',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { onChange: this.onChange, checked: this.state.joingame, type: 'checkbox', name: 'joingame', placeholder: 'enter', id: 'joingame', className: 'jsx-2247979503',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 66
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'label',
                        { 'for': 'joingame', className: 'jsx-2247979503',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 67
                            }
                        },
                        'Join Game'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { onChange: this.onChange, checked: this.state.newgame, type: 'checkbox', name: 'newgame', placeholder: 'enter', id: 'newgame', className: 'jsx-2247979503',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 68
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'label',
                        { 'for': 'newgame', className: 'jsx-2247979503',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 69
                            }
                        },
                        'New Game'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { onChange: this.onChange, name: 'gamename', placeholder: 'Game Name', className: 'jsx-2247979503',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'button',
                        { type: 'submit', className: 'jsx-2247979503',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 71
                            }
                        },
                        'Go'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '2247979503',
                    css: '.container-main-content.jsx-2247979503{margin:0;text-align:center;background:#03A9F4;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXE9wdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VnQyxBQUdrQyxTQUNTLGtCQUNDLG1CQUNSLFdBQ0MsWUFDQywwRUFDUyw4RUFDSCw2RkFDSSxtR0FDM0IiLCJmaWxlIjoiY29udGFpbmVyc1xcT3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJEOi9yZXBvcy9kZXYvdGlsZWNsaWNrLWdhbWUvdGlsZWNsaWNrLWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25zIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHBsYXllcm5hbWU6ICcnLFxyXG4gICAgICAgICAgICBnYW1lbmFtZTogJycsXHJcbiAgICAgICAgICAgIGpvaW5nYW1lOiBmYWxzZSxcclxuICAgICAgICAgICAgbmV3Z2FtZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvcm1lcnJvcjogJycsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQub24oJ2Zvcm1lcnJvcicsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1lcnJvcjpkYXRhfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucHJvcHMuc29ja2V0Lm9uKFwiZ290b2dhbWVib2FyZFwiLCBkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgPT09ICd0cnVlJylcclxuICAgICAgICAgICAgdGhpcy5yZWFkeSgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlYWR5ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMucGxheSgpO1xyXG4gICAgfVxyXG4gICAgb25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcgPyB0YXJnZXQuY2hlY2tlZCA6IHRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgW25hbWVdOiB2YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIGlmICgodGhpcy5zdGF0ZS5nYW1lbmFtZS5sZW5ndGggPCAxKSAmJiAodGhpcy5zdGF0ZS5wbGF5ZXJuYW1lLmxlbmd0aCA8IDEpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9ybWVycm9yOiAnUGxlYXNlIGVudGVyIHlvdXIgbmFtZSBhbmQgZ2FtZSBuYW1lJ30pXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5nYW1lbmFtZS5sZW5ndGggPCAxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9ybWVycm9yOiAnUGxlYXNlIGVudGVyIGdhbWUgbmFtZSd9KVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUucGxheWVybmFtZS5sZW5ndGggPCAxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9ybWVycm9yOiAnUGxlYXNlIGVudGVyIHlvdXIgbmFtZSd9KVxyXG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLnN0YXRlLmpvaW5nYW1lICYmICF0aGlzLnN0YXRlLm5ld2dhbWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmb3JtZXJyb3I6ICdQbGVhc2Ugc2VsZWN0IG9wdGlvbiB0byBjcmVhdGUgb3Igam9pbiBhIGdhbWUnfSlcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLmpvaW5nYW1lICYmIHRoaXMuc3RhdGUubmV3Z2FtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9ybWVycm9yOiAnUGxlYXNlIHNlbGVjdCB0byBqb2luIG9yIGNyZWF0ZSBhIGdhbWUgYW5kIG5vdCBib3RoJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCh0aGlzLnN0YXRlLmdhbWVuYW1lLmxlbmd0aCA+IDApICYmICh0aGlzLnN0YXRlLnBsYXllcm5hbWUubGVuZ3RoID4gMCkgJiYgKHRoaXMuc3RhdGUuam9pbmdhbWUgJiYgIXRoaXMuc3RhdGUubmV3Z2FtZSB8fCAhdGhpcy5zdGF0ZS5qb2luZ2FtZSAmJiB0aGlzLnN0YXRlLm5ld2dhbWUpKXtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQuZW1pdCgnY2hlY2tnYW1laW5mbycsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJuYW1lOnRoaXMuc3RhdGUucGxheWVybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lbmFtZTp0aGlzLnN0YXRlLmdhbWVuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld2dhbWU6IHRoaXMuc3RhdGUubmV3Z2FtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2luZ2FtZTogdGhpcy5zdGF0ZS5qb2luZ2FtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1tYWluLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+WW91ciBJbmZvPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5mb3JtZXJyb3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gbmFtZT1cInBsYXllcm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBjaGVja2VkPXt0aGlzLnN0YXRlLmpvaW5nYW1lfSB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiam9pbmdhbWVcIiBwbGFjZWhvbGRlcj1cImVudGVyXCIgaWQ9XCJqb2luZ2FtZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImpvaW5nYW1lXCI+Sm9pbiBHYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBjaGVja2VkPXt0aGlzLnN0YXRlLm5ld2dhbWV9IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJuZXdnYW1lXCIgcGxhY2Vob2xkZXI9XCJlbnRlclwiIGlkPVwibmV3Z2FtZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5ld2dhbWVcIj5OZXcgR2FtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gbmFtZT1cImdhbWVuYW1lXCIgcGxhY2Vob2xkZXI9XCJHYW1lIE5hbWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkdvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyLW1haW4tY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDNBOUY0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=containers\\Options.js */'
                })
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Options;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = Options;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Options, 'Options', 'D:/repos/dev/tileclick-game/tileclick-game/containers/Options.js');
    reactHotLoader.register(_default, 'default', 'D:/repos/dev/tileclick-game/tileclick-game/containers/Options.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.5900562dac959502b553.hot-update.js.map