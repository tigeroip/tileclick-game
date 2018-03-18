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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
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
                    className: 'jsx-157798236' + ' ' + 'container-options',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_next_head___default.a,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.4/css/materialize.min.css', className: 'jsx-157798236',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.4/js/materialize.min.js', className: 'jsx-157798236',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    {
                        className: 'jsx-157798236' + ' ' + 'header',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 67
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'p',
                        {
                            className: 'jsx-157798236' + ' ' + 'header-text',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 67
                            }
                        },
                        'Options'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    {
                        className: 'jsx-157798236',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 68
                        }
                    },
                    this.state.formerror
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'form',
                    { onSubmit: this.handleSubmit, className: 'jsx-157798236',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 69
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        {
                            className: 'jsx-157798236' + ' ' + 'input-field',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 70
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { id: 'playername', onChange: this.onChange, name: 'playername', placeholder: 'Your Name', type: 'text', className: 'jsx-157798236',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 71
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'label',
                            { htmlFor: 'playername', className: 'jsx-157798236',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 72
                                }
                            },
                            'Join Game'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        {
                            className: 'jsx-157798236' + ' ' + 'input-field col s6',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 74
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { placeholder: 'Placeholder', id: 'firstname', type: 'text', className: 'jsx-157798236' + ' ' + 'validate',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 75
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'label',
                            { htmlFor: 'firstname', className: 'jsx-157798236',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 76
                                }
                            },
                            'First Name'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        {
                            className: 'jsx-157798236' + ' ' + 'input-field',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 78
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { onChange: this.onChange, name: 'gamename', placeholder: 'Game Name', className: 'jsx-157798236',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 79
                            }
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { onChange: this.onChange, checked: this.state.joingame, type: 'checkbox', name: 'joingame', placeholder: 'enter', id: 'joingame', className: 'jsx-157798236',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 81
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { onChange: this.onChange, checked: this.state.newgame, type: 'checkbox', name: 'newgame', placeholder: 'enter', id: 'newgame', className: 'jsx-157798236',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 82
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'label',
                        { htmlFor: 'joingame', className: 'jsx-157798236',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 83
                            }
                        },
                        'Join Game'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'label',
                        { htmlFor: 'newgame', className: 'jsx-157798236',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 84
                            }
                        },
                        'New Game'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'button',
                        { type: 'submit', className: 'jsx-157798236',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 85
                            }
                        },
                        'Go'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '157798236',
                    css: '.container-options.jsx-157798236{margin:0;text-align:center;background:#c0c3c6;width:100%;height:100%;}.header.jsx-157798236{height:40px;background-color:#2196f3;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.header-text.jsx-157798236{color:#fff;font-size:21px;font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXE9wdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0ZnQyxBQUdrQyxBQU9HLEFBT0QsU0FiTyxFQWNILENBUFUsY0FRVCxDQWRHLFVBT04sS0FRZixJQWRhLFdBQ0MsWUFDaEIsMENBS3VCLDZGQUNJLG1HQUN6QiIsImZpbGUiOiJjb250YWluZXJzXFxPcHRpb25zLmpzIiwic291cmNlUm9vdCI6IkQ6L3JlcG9zL2Rldi90aWxlY2xpY2stZ2FtZS90aWxlY2xpY2stZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9ucyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwbGF5ZXJuYW1lOiAnJyxcclxuICAgICAgICAgICAgZ2FtZW5hbWU6ICcnLFxyXG4gICAgICAgICAgICBqb2luZ2FtZTogZmFsc2UsXHJcbiAgICAgICAgICAgIG5ld2dhbWU6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb3JtZXJyb3I6ICcnLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc29ja2V0Lm9uKCdmb3JtZXJyb3InLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmb3JtZXJyb3I6ZGF0YX0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5vbihcImdvdG9nYW1lYm9hcmRcIiwgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09PSAndHJ1ZScpXHJcbiAgICAgICAgICAgIHRoaXMucmVhZHkoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZWFkeSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLnBsYXkoKTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC50eXBlID09PSAnY2hlY2tib3gnID8gdGFyZ2V0LmNoZWNrZWQgOiB0YXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIFtuYW1lXTogdmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICBpZiAoKHRoaXMuc3RhdGUuZ2FtZW5hbWUubGVuZ3RoIDwgMSkgJiYgKHRoaXMuc3RhdGUucGxheWVybmFtZS5sZW5ndGggPCAxKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1lcnJvcjogJ1BsZWFzZSBlbnRlciB5b3VyIG5hbWUgYW5kIGdhbWUgbmFtZSd9KVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuZ2FtZW5hbWUubGVuZ3RoIDwgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1lcnJvcjogJ1BsZWFzZSBlbnRlciBnYW1lIG5hbWUnfSlcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnBsYXllcm5hbWUubGVuZ3RoIDwgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1lcnJvcjogJ1BsZWFzZSBlbnRlciB5b3VyIG5hbWUnfSlcclxuICAgICAgICBlbHNlIGlmICghdGhpcy5zdGF0ZS5qb2luZ2FtZSAmJiAhdGhpcy5zdGF0ZS5uZXdnYW1lKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9ybWVycm9yOiAnUGxlYXNlIHNlbGVjdCBvcHRpb24gdG8gY3JlYXRlIG9yIGpvaW4gYSBnYW1lJ30pXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5qb2luZ2FtZSAmJiB0aGlzLnN0YXRlLm5ld2dhbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1lcnJvcjogJ1BsZWFzZSBzZWxlY3QgdG8gam9pbiBvciBjcmVhdGUgYSBnYW1lIGFuZCBub3QgYm90aCd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgodGhpcy5zdGF0ZS5nYW1lbmFtZS5sZW5ndGggPiAwKSAmJiAodGhpcy5zdGF0ZS5wbGF5ZXJuYW1lLmxlbmd0aCA+IDApICYmICh0aGlzLnN0YXRlLmpvaW5nYW1lICYmICF0aGlzLnN0YXRlLm5ld2dhbWUgfHwgIXRoaXMuc3RhdGUuam9pbmdhbWUgJiYgdGhpcy5zdGF0ZS5uZXdnYW1lKSl7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc29ja2V0LmVtaXQoJ2NoZWNrZ2FtZWluZm8nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVybmFtZTp0aGlzLnN0YXRlLnBsYXllcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZW5hbWU6dGhpcy5zdGF0ZS5nYW1lbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdnYW1lOiB0aGlzLnN0YXRlLm5ld2dhbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam9pbmdhbWU6IHRoaXMuc3RhdGUuam9pbmdhbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItb3B0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsaXplLzEuMC4wLWFscGhhLjQvY3NzL21hdGVyaWFsaXplLm1pbi5jc3NcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWF0ZXJpYWxpemUvMS4wLjAtYWxwaGEuNC9qcy9tYXRlcmlhbGl6ZS5taW4uanNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+PHAgY2xhc3NOYW1lPVwiaGVhZGVyLXRleHRcIj5PcHRpb25zPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLmZvcm1lcnJvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInBsYXllcm5hbWVcIiBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gbmFtZT1cInBsYXllcm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiIHR5cGU9XCJ0ZXh0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBsYXllcm5hbWVcIj5Kb2luIEdhbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XHJcbiAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJQbGFjZWhvbGRlclwiIGlkPVwiZmlyc3RuYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ2YWxpZGF0ZVwiLz5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3RuYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IG5hbWU9XCJnYW1lbmFtZVwiIHBsYWNlaG9sZGVyPVwiR2FtZSBOYW1lXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IGNoZWNrZWQ9e3RoaXMuc3RhdGUuam9pbmdhbWV9IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJqb2luZ2FtZVwiIHBsYWNlaG9sZGVyPVwiZW50ZXJcIiBpZD1cImpvaW5nYW1lXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IGNoZWNrZWQ9e3RoaXMuc3RhdGUubmV3Z2FtZX0gdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIm5ld2dhbWVcIiBwbGFjZWhvbGRlcj1cImVudGVyXCIgaWQ9XCJuZXdnYW1lXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImpvaW5nYW1lXCI+Sm9pbiBHYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuZXdnYW1lXCI+TmV3IEdhbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5HbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lci1vcHRpb25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjMGMzYzY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmhlYWRlci10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=containers\\Options.js */'
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
//# sourceMappingURL=4.15e6496191502cbc6584.hot-update.js.map