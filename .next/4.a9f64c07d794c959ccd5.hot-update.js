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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_Postgame__ = __webpack_require__("./containers/Postgame.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router__ = __webpack_require__("./node_modules/react-router/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_history__ = __webpack_require__("./node_modules/history/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_next_head__);
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
var history = Object(__WEBPACK_IMPORTED_MODULE_8_history__["b" /* createMemoryHistory */])(location);

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
        __WEBPACK_IMPORTED_MODULE_7_react_router__["b" /* Router */],
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
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router__["a" /* Route */], { exact: true, path: '/', render: start, __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router__["a" /* Route */], { path: '/options', component: options, __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router__["a" /* Route */], { path: '/gameboard', component: gameboard, __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router__["a" /* Route */], { path: '/postgame', component: postgame, __source: {
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
//# sourceMappingURL=4.a9f64c07d794c959ccd5.hot-update.js.map