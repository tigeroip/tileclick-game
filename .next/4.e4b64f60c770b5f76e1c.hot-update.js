webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_Welcome__ = __webpack_require__("./containers/Welcome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_Options__ = __webpack_require__("./containers/Options.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_Gameboard__ = __webpack_require__("./containers/Gameboard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router__ = __webpack_require__("./node_modules/react-router/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_history__ = __webpack_require__("./node_modules/history/es/index.js");
var _jsxFileName = 'D:\\repos\\dev\\tileclick-game\\tileclick-game\\pages\\index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var location = {};
var history = Object(__WEBPACK_IMPORTED_MODULE_7_history__["b" /* createMemoryHistory */])(location);

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
        __WEBPACK_IMPORTED_MODULE_6_react_router__["b" /* Router */],
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
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router__["a" /* Route */], { exact: true, path: '/', render: start, __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router__["a" /* Route */], { path: '/options', component: options, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_router__["a" /* Route */], { path: '/gameboard', component: gameboard, __source: {
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
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = Index;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(location, 'location', 'D:/repos/dev/tileclick-game/tileclick-game/pages/index.js');
  reactHotLoader.register(history, 'history', 'D:/repos/dev/tileclick-game/tileclick-game/pages/index.js');
  reactHotLoader.register(serverpath, 'serverpath', 'D:/repos/dev/tileclick-game/tileclick-game/pages/index.js');
  reactHotLoader.register(socket, 'socket', 'D:/repos/dev/tileclick-game/tileclick-game/pages/index.js');
  reactHotLoader.register(Index, 'Index', 'D:/repos/dev/tileclick-game/tileclick-game/pages/index.js');
  reactHotLoader.register(_default, 'default', 'D:/repos/dev/tileclick-game/tileclick-game/pages/index.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.e4b64f60c770b5f76e1c.hot-update.js.map