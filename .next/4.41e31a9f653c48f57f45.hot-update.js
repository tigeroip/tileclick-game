webpackHotUpdate(4,{

/***/ "./components/Welcome.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: D:/repos/dev/tileclick-game/tileclick-game/components/Welcome.js: Adjacent JSX elements must be wrapped in an enclosing tag (7:20)\n\n\u001b[0m \u001b[90m  5 | \u001b[39m        \u001b[36mreturn\u001b[39m (\n \u001b[90m  6 | \u001b[39m                    \u001b[33m<\u001b[39m\u001b[33mh1\u001b[39m\u001b[33m>\u001b[39m\u001b[33mWelcome\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mh1\u001b[39m\u001b[33m>\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  7 | \u001b[39m                    \u001b[33m<\u001b[39m\u001b[33mbutton\u001b[39m onClick\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m.\u001b[39mstart}\u001b[33m>\u001b[39m\u001b[33mStart\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mbutton\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m    | \u001b[39m                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m  8 | \u001b[39m                    \u001b[33m<\u001b[39m\u001b[33mstyle\u001b[39m jsx\u001b[33m>\u001b[39m{\u001b[32m`\u001b[39m\n \u001b[90m  9 | \u001b[39m\u001b[32m                    .container-welcome {\u001b[39m\n \u001b[90m 10 | \u001b[39m\u001b[32m                      display: block;\u001b[39m\u001b[0m\n");

/***/ }),

/***/ "./containers/Welcome.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Welcome__ = __webpack_require__("./components/Welcome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Welcome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Welcome__);
var _jsxFileName = 'D:\\repos\\dev\\tileclick-game\\tileclick-game\\containers\\Welcome.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'container-welcome', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Welcome__["default"], { start: this.start, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Welcome;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Welcome;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Welcome, 'Welcome', 'D:/repos/dev/tileclick-game/tileclick-game/containers/Welcome.js');
  reactHotLoader.register(_default, 'default', 'D:/repos/dev/tileclick-game/tileclick-game/containers/Welcome.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
false,

/***/ "./node_modules/babel-runtime/core-js/promise.js":
false,

/***/ "./node_modules/babel-runtime/core-js/set.js":
false,

/***/ "./node_modules/babel-runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/babel-runtime/helpers/extends.js":
false,

/***/ "./node_modules/babel-runtime/regenerator/index.js":
false,

/***/ "./node_modules/core-js/library/fn/object/assign.js":
false,

/***/ "./node_modules/core-js/library/fn/promise.js":
false,

/***/ "./node_modules/core-js/library/fn/set.js":
false,

/***/ "./node_modules/core-js/library/modules/_invoke.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
false,

/***/ "./node_modules/core-js/library/modules/_microtask.js":
false,

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
false,

/***/ "./node_modules/core-js/library/modules/_perform.js":
false,

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
false,

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
false,

/***/ "./node_modules/core-js/library/modules/_task.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.set.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.set.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.set.of.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.set.to-json.js":
false,

/***/ "./node_modules/next/dist/lib/EventEmitter.js":
false,

/***/ "./node_modules/next/dist/lib/p-queue.js":
false,

/***/ "./node_modules/next/dist/lib/router/index.js":
false,

/***/ "./node_modules/next/dist/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/lib/router/with-router.js":
false,

/***/ "./node_modules/next/dist/lib/shallow-equals.js":
false,

/***/ "./node_modules/next/dist/lib/utils.js":
false,

/***/ "./node_modules/next/router.js":
false,

/***/ "./node_modules/punycode/punycode.js":
false,

/***/ "./node_modules/querystring-es3/decode.js":
false,

/***/ "./node_modules/querystring-es3/encode.js":
false,

/***/ "./node_modules/querystring-es3/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./node_modules/url/url.js":
false,

/***/ "./node_modules/url/util.js":
false

})
//# sourceMappingURL=4.41e31a9f653c48f57f45.hot-update.js.map