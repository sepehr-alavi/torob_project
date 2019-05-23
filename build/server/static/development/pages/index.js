module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/chart.js":
/*!*****************************!*\
  !*** ./components/chart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\chart.js";



var Chart =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Chart, _Component);

  function Chart(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Chart);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Chart).call(this, props));
    var chartData = _this.props.chartData;
    var entriesValues1 = [];
    var entriesValues2 = [];
    {
      _this.props.chartData.dataSets[0].entries.map(function (entry) {
        entriesValues1.push(entry.val);
      });
    }
    {
      _this.props.chartData.dataSets[1].entries.map(function (entry) {
        entriesValues2.push(entry.val);
      });
    }
    _this.state = {
      chartData: {
        labels: chartData.labels,
        datasets: [{
          label: chartData.dataSets[0].label,
          fill: false,
          backgroundColor: chartData.dataSets[0].color,
          data: entriesValues1
        }, {
          label: chartData.dataSets[1].label,
          fill: false,
          backgroundColor: chartData.dataSets[1].color,
          data: entriesValues2
        }]
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Chart, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__["Line"], {
        data: this.state.chartData,
        options: {
          maintainAspectRatio: false
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      });
    }
  }]);

  return Chart;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./components/commercialCard.js":
/*!**************************************!*\
  !*** ./components/commercialCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\commercialCard.js";



var CommercialCard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CommercialCard, _Component);

  function CommercialCard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CommercialCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CommercialCard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CommercialCard, [{
    key: "render",
    value: function render() {
      var commercial = this.props.commercial;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-823693154" + " " + 'commercial_card',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: commercial.more_info_url,
        className: "jsx-823693154",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-823693154" + " " + 'comm_img_container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: commercial.image_url,
        className: "jsx-823693154",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        className: "jsx-823693154",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, commercial.text1), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", {
        className: "jsx-823693154",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, commercial.text2), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", {
        className: "jsx-823693154" + " " + 'lighter',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, commercial.text3), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-823693154" + " " + 'price',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        className: "jsx-823693154" + " " + "float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, commercial.price), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        className: "jsx-823693154" + " " + "unit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, commercial.price_unit))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "823693154",
        __self: this
      }, ".commercial_card.jsx-823693154{width:164px;margin-bottom:24px;}.comm_img_container.jsx-823693154{width:164px;height:96px;}.comm_img_container.jsx-823693154 img.jsx-823693154{width:100%;height:100%;}h5.jsx-823693154{color:#333;font-weight:700;}h6.jsx-823693154{color:#666;font-weight:500;}.lighter.jsx-823693154{color:#999;}.unit.jsx-823693154{margin-right:2px;display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2VwZWhyXFxEZXNrdG9wXFxSZWFjdFxcdG9yb2ItcHJvamVjdFxcY29tcG9uZW50c1xcY29tbWVyY2lhbENhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJXLEFBRzJCLEFBSUEsQUFLRCxBQUtBLEFBS0EsQUFLQSxBQUlNLFdBbEJMLEFBS0ksQUFLQSxBQUtsQixDQXhCcUIsQUFJUCxLQXdCUyxNQWxCdkIsQ0FMQSxHQVVBLEFBS0EsSUFuQkEsT0E0QkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxTZXBlaHJcXERlc2t0b3BcXFJlYWN0XFx0b3JvYi1wcm9qZWN0XFxjb21wb25lbnRzXFxjb21tZXJjaWFsQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBDb21tZXJjaWFsQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjb21tZXJjaWFsIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbW1lcmNpYWxfY2FyZCc+XHJcbiAgICAgICAgPGEgaHJlZj17Y29tbWVyY2lhbC5tb3JlX2luZm9fdXJsfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21tX2ltZ19jb250YWluZXInPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17Y29tbWVyY2lhbC5pbWFnZV91cmx9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoNT57Y29tbWVyY2lhbC50ZXh0MX08L2g1PlxyXG4gICAgICAgICAgPGg2Pntjb21tZXJjaWFsLnRleHQyfTwvaDY+XHJcbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPSdsaWdodGVyJz57Y29tbWVyY2lhbC50ZXh0M308L2g2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByaWNlJz5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+e2NvbW1lcmNpYWwucHJpY2V9PC9oNT5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInVuaXRcIj57Y29tbWVyY2lhbC5wcmljZV91bml0fTwvaDU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAuY29tbWVyY2lhbF9jYXJkIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTY0cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29tbV9pbWdfY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTY0cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29tbV9pbWdfY29udGFpbmVyIGltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDYge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5saWdodGVyIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnVuaXQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZXJjaWFsQ2FyZDtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\commercialCard.js */"));
    }
  }]);

  return CommercialCard;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CommercialCard);

/***/ }),

/***/ "./components/recommendationCard.js":
/*!******************************************!*\
  !*** ./components/recommendationCard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\recommendationCard.js";



var RecommendationCard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(RecommendationCard, _Component);

  function RecommendationCard() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RecommendationCard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(RecommendationCard).call(this));
    _this.state = {
      liked: false,
      likeType: 'far fa-heart',
      likeColor: '#999',
      notification: false,
      notificationType: 'far fa-bell'
    };
    _this.like = _this.like.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.notification = _this.notification.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RecommendationCard, [{
    key: "like",
    value: function like() {
      this.state.liked ? this.setState({
        liked: false,
        likeType: 'far fa-heart'
      }) : this.setState({
        liked: true,
        likeType: 'fas fa-heart primary'
      });
    }
  }, {
    key: "notification",
    value: function notification() {
      this.state.notification ? this.setState({
        notification: false,
        notificationType: 'far fa-bell'
      }) : this.setState({
        notification: true,
        notificationType: 'fas fa-bell primary'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var recommended = this.props.recommended;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2456710751" + " " + 'recomm_card',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-2456710751",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2456710751" + " " + "recomm_img_container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: recommended.image_url,
        alt: recommended.persian_name,
        className: "jsx-2456710751",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        className: "jsx-2456710751" + " " + "pe",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, recommended.persian_name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        className: "jsx-2456710751" + " " + "en",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, recommended.english_name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        className: "jsx-2456710751" + " " + "primary centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "\u0627\u0632 ".concat(recommended.price, " \u062A\u0648\u0645\u0627\u0646")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        className: "jsx-2456710751" + " " + "shops centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "\u062F\u0631 ".concat(recommended.shop_num, " \u0641\u0631\u0648\u0634\u06AF\u0627\u0647"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2456710751" + " " + "icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: this.notification,
        className: "jsx-2456710751" + " " + "icon_container bell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "jsx-2456710751" + " " + (this.state.notificationType || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: this.like,
        className: "jsx-2456710751" + " " + "icon_container heart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "jsx-2456710751" + " " + (this.state.likeType || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2456710751" + " " + "push",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2456710751",
        __self: this
      }, ".recomm_card.jsx-2456710751{position:relative;box-sizing:border-box;width:169.5px;padding:12px 16.5px 17px 17px;background:#fff;}.recomm_img_container.jsx-2456710751{width:100%;height:136px;}.recomm_img_container.jsx-2456710751 img.jsx-2456710751{width:100%;height:100%;}.pe.jsx-2456710751{color:#333;margin-bottom:5px;margin-top:8px;}.en.jsx-2456710751{color:#666;font-weight:100;margin-bottom:8px;}.shops.jsx-2456710751{color:#999;font-weight:100;margin-bottom:16px;}h5.jsx-2456710751{margin:0;}.icons.jsx-2456710751{position:absolute;bottom:0;}.push.jsx-2456710751{height:20px;}.icon_container.jsx-2456710751{display:inline-block;text-align:center;margin:0 0 10px 0;}.bell.jsx-2456710751{margin:0 30px 10px 17px;}.heart.jsx-2456710751{margin:0 17px 10px 30px;}.bell.jsx-2456710751:hover{color:var(--primary);-webkit-transition:200ms;transition:200ms;}.heart.jsx-2456710751:hover{color:var(--primary);-webkit-transition:300ms;transition:300ms;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2VwZWhyXFxEZXNrdG9wXFxSZWFjdFxcdG9yb2ItcHJvamVjdFxcY29tcG9uZW50c1xccmVjb21tZW5kYXRpb25DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFVyxBQUdpQyxBQVFQLEFBS0EsQUFLQSxBQU1BLEFBTUEsQUFNRixBQUlTLEFBS04sQUFJUyxBQU1HLEFBSUEsQUFJSCxBQUtBLFNBL0J2QixFQTVCZSxBQUtELEFBS00sQUFNRixBQU1BLENBZWxCLE1BN0N3QixBQXdDYixHQVNTLEFBY0QsQUFLQSxFQXREbkIsQ0FMQSxBQThDQSxBQUlBLEdBbENvQixBQU1DLEFBVXJCLEVBdEJpQixVQStCRyxDQWpESixJQW1CaEIsQ0FNQSxDQU1BLFFBOUJnQyxHQWlEaEMsTUFhQSxBQUtBLHFCQWxFa0IsZ0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcU2VwZWhyXFxEZXNrdG9wXFxSZWFjdFxcdG9yb2ItcHJvamVjdFxcY29tcG9uZW50c1xccmVjb21tZW5kYXRpb25DYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFJlY29tbWVuZGF0aW9uQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGxpa2VkOiBmYWxzZSxcclxuICAgICAgbGlrZVR5cGU6ICdmYXIgZmEtaGVhcnQnLFxyXG4gICAgICBsaWtlQ29sb3I6ICcjOTk5JyxcclxuICAgICAgbm90aWZpY2F0aW9uOiBmYWxzZSxcclxuICAgICAgbm90aWZpY2F0aW9uVHlwZTogJ2ZhciBmYS1iZWxsJ1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmxpa2UgPSB0aGlzLmxpa2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMubm90aWZpY2F0aW9uID0gdGhpcy5ub3RpZmljYXRpb24uYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGxpa2UoKSB7XHJcbiAgICB0aGlzLnN0YXRlLmxpa2VkXHJcbiAgICAgID8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBsaWtlZDogZmFsc2UsXHJcbiAgICAgICAgICBsaWtlVHlwZTogJ2ZhciBmYS1oZWFydCdcclxuICAgICAgICB9KVxyXG4gICAgICA6IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbGlrZWQ6IHRydWUsXHJcbiAgICAgICAgICBsaWtlVHlwZTogJ2ZhcyBmYS1oZWFydCBwcmltYXJ5J1xyXG4gICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbm90aWZpY2F0aW9uKCkge1xyXG4gICAgdGhpcy5zdGF0ZS5ub3RpZmljYXRpb25cclxuICAgICAgPyB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIG5vdGlmaWNhdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICBub3RpZmljYXRpb25UeXBlOiAnZmFyIGZhLWJlbGwnXHJcbiAgICAgICAgfSlcclxuICAgICAgOiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIG5vdGlmaWNhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgIG5vdGlmaWNhdGlvblR5cGU6ICdmYXMgZmEtYmVsbCBwcmltYXJ5J1xyXG4gICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyByZWNvbW1lbmRlZCB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWNvbW1fY2FyZCc+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29tbV9pbWdfY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtyZWNvbW1lbmRlZC5pbWFnZV91cmx9IGFsdD17cmVjb21tZW5kZWQucGVyc2lhbl9uYW1lfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwZVwiPntyZWNvbW1lbmRlZC5wZXJzaWFuX25hbWV9PC9oNT5cclxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJlblwiPntyZWNvbW1lbmRlZC5lbmdsaXNoX25hbWV9PC9oNT5cclxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwcmltYXJ5IGNlbnRlcmVkXCI+e2DYp9iyICR7cmVjb21tZW5kZWQucHJpY2V9INiq2YjZhdin2YZgfTwvaDU+XHJcbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwic2hvcHMgY2VudGVyZWRcIj57YNiv2LEgJHtyZWNvbW1lbmRlZC5zaG9wX251bX0g2YHYsdmI2LTar9in2YdgfTwvaDU+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbnNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbl9jb250YWluZXIgYmVsbFwiIG9uQ2xpY2s9e3RoaXMubm90aWZpY2F0aW9ufT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLm5vdGlmaWNhdGlvblR5cGV9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbl9jb250YWluZXIgaGVhcnRcIiBvbkNsaWNrPXt0aGlzLmxpa2V9PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e3RoaXMuc3RhdGUubGlrZVR5cGV9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1c2hcIiAvPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2AgIFxyXG4gICAgICAgICAgICAucmVjb21tX2NhcmQge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxNjkuNXB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMTYuNXB4IDE3cHggMTdweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucmVjb21tX2ltZ19jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTM2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5yZWNvbW1faW1nX2NvbnRhaW5lciBpbWcge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnBlIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZW4ge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2hvcHMge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmljb25zIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucHVzaCB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaWNvbl9jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYmVsbCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDMwcHggMTBweCAxN3B4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaGVhcnQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCAxN3B4IDEwcHggMzBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJlbGw6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhlYXJ0OmhvdmVyIHtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMzAwbXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcblxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY29tbWVuZGF0aW9uQ2FyZDtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\recommendationCard.js */"));
    }
  }]);

  return RecommendationCard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RecommendationCard);

/***/ }),

/***/ "./components/section.js":
/*!*******************************!*\
  !*** ./components/section.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/Head */ "next/Head");
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_Head__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\section.js";




var Section =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Section, _Component);

  function Section() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Section);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Section).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Section, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-752580740" + " " + "section ".concat(this.props.className || ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, children, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2137273029",
        __self: this
      }, ".section.jsx-752580740{padding:0 24px 0 24px;border-bottom:1px solid #e5e5e5;}.thick_border.jsx-752580740{border-top:3px solid #ecedef;}.no-left-padding.jsx-752580740{padding-left:0;}.padding-top.jsx-752580740{padding-top:24px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2VwZWhyXFxEZXNrdG9wXFxSZWFjdFxcdG9yb2ItcHJvamVjdFxcY29tcG9uZW50c1xcc2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVVyxBQUdxQyxBQUtPLEFBSWQsQUFJRSxlQUhuQixFQUlBLEtBYmtDLE9BS2xDLHlCQUpBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcU2VwZWhyXFxEZXNrdG9wXFxSZWFjdFxcdG9yb2ItcHJvamVjdFxcY29tcG9uZW50c1xcc2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvSGVhZCc7XHJcblxyXG5jbGFzcyBTZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BzZWN0aW9uICR7dGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJyd9YH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAuc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAyNHB4IDAgMjRweDtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRoaWNrX2JvcmRlciB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNlY2VkZWY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uby1sZWZ0LXBhZGRpbmcge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnBhZGRpbmctdG9wIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLnNlY3Rpb24gLmltZ19jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWRlZjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNlY3Rpb24gLmltZ19jb250YWluZXIgaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZsb2F0LXJpZ2h0IHtcclxuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5mbG9hdC1sZWZ0IHtcclxuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmVuIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnByaW1hcnkge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPSdodHRwczovL3VucGtnLmNvbS9mbGlja2l0eUAyL2Rpc3QvZmxpY2tpdHkucGtnZC5taW4uanMnIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\section.js */"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2524047592",
        __self: this
      }, ".section .img_container{width:120px;height:120px;overflow:hidden;background-color:#ecedef;}.section .img_container img{width:100%;}.float-right{float:right;}.float-left{float:left;}.en{color:#666;direction:ltr;}.primary{color:var(--primary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2VwZWhyXFxEZXNrdG9wXFxSZWFjdFxcdG9yb2ItcHJvamVjdFxcY29tcG9uZW50c1xcc2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QlcsQUFHMkIsQUFPRCxBQUlDLEFBSUQsQUFJQSxBQUtVLFdBaEJ2QixBQVFBLEFBSWdCLENBbkJELEFBV2YsU0FhQSxJQXZCa0IsQUFtQmxCLGdCQWxCMkIseUJBQzNCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcU2VwZWhyXFxEZXNrdG9wXFxSZWFjdFxcdG9yb2ItcHJvamVjdFxcY29tcG9uZW50c1xcc2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvSGVhZCc7XHJcblxyXG5jbGFzcyBTZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BzZWN0aW9uICR7dGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJyd9YH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAuc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAyNHB4IDAgMjRweDtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRoaWNrX2JvcmRlciB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNlY2VkZWY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uby1sZWZ0LXBhZGRpbmcge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnBhZGRpbmctdG9wIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLnNlY3Rpb24gLmltZ19jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWRlZjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNlY3Rpb24gLmltZ19jb250YWluZXIgaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZsb2F0LXJpZ2h0IHtcclxuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5mbG9hdC1sZWZ0IHtcclxuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmVuIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnByaW1hcnkge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPSdodHRwczovL3VucGtnLmNvbS9mbGlja2l0eUAyL2Rpc3QvZmxpY2tpdHkucGtnZC5taW4uanMnIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\section.js */"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("script", {
        src: "https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js",
        className: "jsx-752580740",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }));
    }
  }]);

  return Section;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./components/sections/commercialsCarousel.js":
/*!****************************************************!*\
  !*** ./components/sections/commercialsCarousel.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../section */ "./components/section.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _commercialCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../commercialCard */ "./components/commercialCard.js");






var _jsxFileName = "C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\sections\\commercialsCarousel.js";






var PriceVariation =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PriceVariation, _Component);

  function PriceVariation() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PriceVariation);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(PriceVariation).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PriceVariation, [{
    key: "render",
    value: function render() {
      var commercials = this.props.commercials;
      var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        rtl: true,
        initialSlide: 1,
        slidesToShow: 2,
        slidesToScroll: 1
      };
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "thick_border no-left-padding",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        charset: "UTF-8",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
        className: "jsx-3326733786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
        className: "jsx-3326733786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "jsx-3326733786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "\u0622\u06AF\u0647\u06CC \u0647\u0627\u06CC \u0645\u0634\u0627\u0628\u0647"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), commercials.result.map(function (commercial, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          key: i,
          className: "jsx-3326733786" + " " + 'slide',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_commercialCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
          commercial: commercial,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }));
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3326733786",
        __self: this
      }, ".slide.jsx-3326733786{text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2VwZWhyXFxEZXNrdG9wXFxSZWFjdFxcdG9yb2ItcHJvamVjdFxcY29tcG9uZW50c1xcc2VjdGlvbnNcXGNvbW1lcmNpYWxzQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENXLEFBR2dDLGlCQUNuQiIsImZpbGUiOiJDOlxcVXNlcnNcXFNlcGVoclxcRGVza3RvcFxcUmVhY3RcXHRvcm9iLXByb2plY3RcXGNvbXBvbmVudHNcXHNlY3Rpb25zXFxjb21tZXJjaWFsc0Nhcm91c2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vc2VjdGlvbic7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3Qtc2xpY2snO1xyXG5pbXBvcnQgQ29tbWVyY2lhbENhcmQgZnJvbSAnLi4vY29tbWVyY2lhbENhcmQnO1xyXG5cclxuY2xhc3MgUHJpY2VWYXJpYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY29tbWVyY2lhbHMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgdmFyIHNldHRpbmdzID0ge1xyXG4gICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICBzcGVlZDogNTAwLFxyXG4gICAgICBydGw6IHRydWUsXHJcbiAgICAgIGluaXRpYWxTbGlkZTogMSxcclxuICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT1cInRoaWNrX2JvcmRlciBuby1sZWZ0LXBhZGRpbmdcIj5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPSdzdHlsZXNoZWV0J1xyXG4gICAgICAgICAgdHlwZT0ndGV4dC9jc3MnXHJcbiAgICAgICAgICBjaGFyc2V0PSdVVEYtOCdcclxuICAgICAgICAgIGhyZWY9J2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3MnXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPSdzdHlsZXNoZWV0J1xyXG4gICAgICAgICAgdHlwZT0ndGV4dC9jc3MnXHJcbiAgICAgICAgICBocmVmPSdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzJ1xyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxoMz7Yotqv2YfbjCDZh9in24wg2YXYtNin2KjZhzwvaDM+XHJcbiAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAge2NvbW1lcmNpYWxzLnJlc3VsdC5tYXAoKGNvbW1lcmNpYWwsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGUnIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICA8Q29tbWVyY2lhbENhcmQgY29tbWVyY2lhbD17Y29tbWVyY2lhbH0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvU2xpZGVyPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLnNsaWRlIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L1NlY3Rpb24+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VWYXJpYXRpb247XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\sections\\commercialsCarousel.js */"));
    }
  }]);

  return PriceVariation;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PriceVariation);

/***/ }),

/***/ "./components/sections/notif.js":
/*!**************************************!*\
  !*** ./components/sections/notif.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../section */ "./components/section.js");






var _jsxFileName = "C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\sections\\notif.js";




var Notif =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Notif, _Component);

  function Notif() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Notif);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Notif).call(this));
    _this.state = {
      liked: false,
      likeType: 'far fa-heart',
      likeColor: '#999',
      notification: false,
      notificationType: 'far fa-bell'
    };
    _this.like = _this.like.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.notification = _this.notification.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Notif, [{
    key: "like",
    value: function like() {
      this.state.liked ? this.setState({
        liked: false,
        likeType: 'far fa-heart'
      }) : this.setState({
        liked: true,
        likeType: 'fas fa-heart primary'
      });
    }
  }, {
    key: "notification",
    value: function notification() {
      this.state.notification ? this.setState({
        notification: false,
        notificationType: 'far fa-bell'
      }) : this.setState({
        notification: true,
        notificationType: 'fas fa-bell primary'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2627096679" + " " + 'notif_box',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: this.notification,
        className: "jsx-2627096679" + " " + 'icon_container float-right bell',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "jsx-2627096679" + " " + (this.state.notificationType || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2627096679",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "\u0627\u0637\u0644\u0627\u0639 \u0627\u0632 \u062A\u063A\u06CC\u06CC\u0631 \u0642\u06CC\u0645\u062A"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2627096679" + " " + 'icon_container float-left share',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "jsx-2627096679" + " " + 'fas fa-share-alt',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: this.like,
        className: "jsx-2627096679" + " " + 'icon_container float-left heart',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "jsx-2627096679" + " " + (this.state.likeType || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2627096679",
        __self: this
      }, "p.jsx-2627096679{margin:14px 9px 0 0;font-size:14px;color:#999;float:right;}.notif_box.jsx-2627096679{height:48px;}.icon_container.jsx-2627096679:first-child{margin:12px 0;}.bell.jsx-2627096679:hover{color:var(--primary);-webkit-transition:200ms;transition:200ms;}.heart.jsx-2627096679:hover{color:var(--primary);-webkit-transition:300ms;transition:300ms;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2VwZWhyXFxEZXNrdG9wXFxSZWFjdFxcdG9yb2ItcHJvamVjdFxcY29tcG9uZW50c1xcc2VjdGlvbnNcXG5vdGlmLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1FVyxBQUdtQyxBQU9SLEFBSUUsQUFJTyxBQUtBLFlBWnZCLEVBSUEsTUFYaUIsQ0FlRSxBQUtBLGNBbkJOLFdBQ0MsWUFDZCxLQWFBLEFBS0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxTZXBlaHJcXERlc2t0b3BcXFJlYWN0XFx0b3JvYi1wcm9qZWN0XFxjb21wb25lbnRzXFxzZWN0aW9uc1xcbm90aWYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9zZWN0aW9uJztcclxuXHJcbmNsYXNzIE5vdGlmIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbGlrZWQ6IGZhbHNlLFxyXG4gICAgICBsaWtlVHlwZTogJ2ZhciBmYS1oZWFydCcsXHJcbiAgICAgIGxpa2VDb2xvcjogJyM5OTknLFxyXG4gICAgICBub3RpZmljYXRpb246IGZhbHNlLFxyXG4gICAgICBub3RpZmljYXRpb25UeXBlOiAnZmFyIGZhLWJlbGwnXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubGlrZSA9IHRoaXMubGlrZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5ub3RpZmljYXRpb24gPSB0aGlzLm5vdGlmaWNhdGlvbi5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbGlrZSgpIHtcclxuICAgIHRoaXMuc3RhdGUubGlrZWRcclxuICAgICAgPyB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGxpa2VkOiBmYWxzZSxcclxuICAgICAgICAgIGxpa2VUeXBlOiAnZmFyIGZhLWhlYXJ0J1xyXG4gICAgICAgIH0pXHJcbiAgICAgIDogdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBsaWtlZDogdHJ1ZSxcclxuICAgICAgICAgIGxpa2VUeXBlOiAnZmFzIGZhLWhlYXJ0IHByaW1hcnknXHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBub3RpZmljYXRpb24oKSB7XHJcbiAgICB0aGlzLnN0YXRlLm5vdGlmaWNhdGlvblxyXG4gICAgICA/IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbm90aWZpY2F0aW9uOiBmYWxzZSxcclxuICAgICAgICAgIG5vdGlmaWNhdGlvblR5cGU6ICdmYXIgZmEtYmVsbCdcclxuICAgICAgICB9KVxyXG4gICAgICA6IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbm90aWZpY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgbm90aWZpY2F0aW9uVHlwZTogJ2ZhcyBmYS1iZWxsIHByaW1hcnknXHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbm90aWZfYm94Jz5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdpY29uX2NvbnRhaW5lciBmbG9hdC1yaWdodCBiZWxsJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm5vdGlmaWNhdGlvbn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLm5vdGlmaWNhdGlvblR5cGV9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwPtin2LfZhNin2Lkg2KfYsiDYqti624zbjNixINmC24zZhdiqPC9wPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpY29uX2NvbnRhaW5lciBmbG9hdC1sZWZ0IHNoYXJlJz5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYXMgZmEtc2hhcmUtYWx0JyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naWNvbl9jb250YWluZXIgZmxvYXQtbGVmdCBoZWFydCdcclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5saWtlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e3RoaXMuc3RhdGUubGlrZVR5cGV9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMTRweCA5cHggMCAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ub3RpZl9ib3gge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmljb25fY29udGFpbmVyOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDEycHggMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJlbGw6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhlYXJ0OmhvdmVyIHtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMzAwbXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGlmO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\sections\\notif.js */"));
    }
  }]);

  return Notif;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Notif);

/***/ }),

/***/ "./components/sections/priceVariation.js":
/*!***********************************************!*\
  !*** ./components/sections/priceVariation.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../section */ "./components/section.js");
/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../chart */ "./components/chart.js");





var _jsxFileName = "C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\sections\\priceVariation.js";





var PriceVariation =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PriceVariation, _Component);

  function PriceVariation(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PriceVariation);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PriceVariation).call(this, props));
    _this.state = {
      itemsToShow: 2,
      expanded: false,
      rotateClass: ''
    };
    return _this;
  } // showMore() {
  //   this.state.itemsToShow === 2
  //     ? this.setState({
  //         itemsToShow: Object.keys(this.state.info).length,
  //         expanded: true,
  //         rotateClass: 'rotate'
  //       })
  //     : this.setState({ itemsToShow: 2, expanded: false, rotateClass: '' });
  // }


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PriceVariation, [{
    key: "render",
    value: function render() {
      var prices = this.props.prices;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_section__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "thick_border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3473952430" + " " + 'chart_box',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3473952430" + " " + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: "jsx-3473952430" + " " + 'float-right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "\u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u0642\u06CC\u0645\u062A"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        onClick: this.showMore,
        className: "jsx-3473952430" + " " + "fas fa-chevron-left float-left ".concat(this.state.rotateClass),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3473952430" + " " + 'chart_container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_chart__WEBPACK_IMPORTED_MODULE_8__["default"], {
        chartData: prices,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "jsx-3473952430" + " " + 'btn primary centered',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "\u0644\u06CC\u0633\u062A \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u0642\u06CC\u0645\u062A")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3473952430",
        __self: this
      }, ".title.jsx-3473952430{height:56px;}.title.jsx-3473952430 i.jsx-3473952430{margin-top:24px;-webkit-transition:300ms;transition:300ms;cursor:pointer;}.chart_container.jsx-3473952430{width:100%;height:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2VwZWhyXFxEZXNrdG9wXFxSZWFjdFxcdG9yb2ItcHJvamVjdFxcY29tcG9uZW50c1xcc2VjdGlvbnNcXHByaWNlVmFyaWF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDb0IsQUFHeUIsQUFJSSxBQU1MLFdBQ0UsQ0FWZixJQUltQixRQU9uQixrQ0FOaUIsZUFDakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxTZXBlaHJcXERlc2t0b3BcXFJlYWN0XFx0b3JvYi1wcm9qZWN0XFxjb21wb25lbnRzXFxzZWN0aW9uc1xccHJpY2VWYXJpYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9zZWN0aW9uJztcclxuaW1wb3J0IENoYXJ0IGZyb20gJy4uL2NoYXJ0JztcclxuXHJcbmNsYXNzIFByaWNlVmFyaWF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXRlbXNUb1Nob3c6IDIsXHJcbiAgICAgIGV4cGFuZGVkOiBmYWxzZSxcclxuICAgICAgcm90YXRlQ2xhc3M6ICcnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gc2hvd01vcmUoKSB7XHJcbiAgLy8gICB0aGlzLnN0YXRlLml0ZW1zVG9TaG93ID09PSAyXHJcbiAgLy8gICAgID8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgICAgICBpdGVtc1RvU2hvdzogT2JqZWN0LmtleXModGhpcy5zdGF0ZS5pbmZvKS5sZW5ndGgsXHJcbiAgLy8gICAgICAgICBleHBhbmRlZDogdHJ1ZSxcclxuICAvLyAgICAgICAgIHJvdGF0ZUNsYXNzOiAncm90YXRlJ1xyXG4gIC8vICAgICAgIH0pXHJcbiAgLy8gICAgIDogdGhpcy5zZXRTdGF0ZSh7IGl0ZW1zVG9TaG93OiAyLCBleHBhbmRlZDogZmFsc2UsIHJvdGF0ZUNsYXNzOiAnJyB9KTtcclxuICAvLyB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgcHJpY2VzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNlY3Rpb24gY2xhc3NOYW1lPSd0aGlja19ib3JkZXInPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGFydF9ib3gnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlJz5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nZmxvYXQtcmlnaHQnPtiq2LrbjNuM2LHYp9iqINmC24zZhdiqPC9oMz5cclxuICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmYXMgZmEtY2hldnJvbi1sZWZ0IGZsb2F0LWxlZnQgJHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucm90YXRlQ2xhc3NcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dNb3JlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXJ0X2NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIDxDaGFydCBjaGFydERhdGE9e3ByaWNlc30gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT0nYnRuIHByaW1hcnkgY2VudGVyZWQnPtmE24zYs9iqINiq2LrbjNuM2LHYp9iqINmC24zZhdiqPC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpdGxlIGkge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jaGFydF9jb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvU2VjdGlvbj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljZVZhcmlhdGlvbjtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\sections\\priceVariation.js */"));
    }
  }]);

  return PriceVariation;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PriceVariation);

/***/ }),

/***/ "./components/sections/product.js":
/*!****************************************!*\
  !*** ./components/sections/product.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../section */ "./components/section.js");







var _jsxFileName = "C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\sections\\product.js";




var Showcase =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Showcase, _Component);

  function Showcase(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Showcase);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Showcase).call(this, props));
    _this.state = {
      info: _this.props.productInfo.structural_specs.headers[0].specs,
      itemsToShow: 2,
      expanded: false,
      rotateClass: ''
    };
    _this.showMore = _this.showMore.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Showcase, [{
    key: "showMore",
    value: function showMore() {
      this.state.itemsToShow === 2 ? this.setState({
        itemsToShow: _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.state.info).length,
        expanded: true,
        rotateClass: 'rotate'
      }) : this.setState({
        itemsToShow: 2,
        expanded: false,
        rotateClass: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var productInfo = this.props.productInfo;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_section__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "thick_border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-235990398" + " " + 'info_box',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-235990398" + " " + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-235990398" + " " + 'float-right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "\u0645\u0634\u062E\u0635\u0627\u062A \u0645\u062D\u0635\u0648\u0644"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        onClick: this.showMore,
        className: "jsx-235990398" + " " + "fas fa-chevron-left float-left ".concat(this.state.rotateClass),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        className: "jsx-235990398" + " " + 'infoList',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.state.info).slice(0, this.state.itemsToShow).map(function (key) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
          className: "jsx-235990398",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
          className: "jsx-235990398" + " " + 'spec',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, key), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
          className: "jsx-235990398" + " " + 'specInfo',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, _this2.state.info[key]));
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        onClick: this.showMore,
        className: "jsx-235990398",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, this.state.expanded ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "jsx-235990398" + " " + 'btn primary',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "\u0646\u0645\u0627\u06CC\u0634 \u0645\u0634\u062E\u0635\u0627\u062A \u06A9\u0645\u062A\u0631") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "jsx-235990398" + " " + 'btn primary',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "\u0646\u0645\u0627\u06CC\u0634 \u062A\u0645\u0627\u0645 \u0645\u0634\u062E\u0635\u0627\u062A"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "235990398",
        __self: this
      }, "h4.jsx-235990398{font-size:14px;}.btn.jsx-235990398{text-align:center;}.spec.jsx-235990398{color:#333;}.specInfo.jsx-235990398{color:#666;font-weight:100;}.infoList.jsx-235990398 li.jsx-235990398{border-bottom:1px solid #e5e5e5;}.infoList.jsx-235990398 li.jsx-235990398:last-child{border-bottom:none;}.title.jsx-235990398{height:56px;}.title.jsx-235990398 i.jsx-235990398{margin-top:24px;-webkit-transition:300ms;transition:300ms;cursor:pointer;}.rotate.jsx-235990398{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transition:300ms;transition:300ms;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2VwZWhyXFxEZXNrdG9wXFxSZWFjdFxcdG9yb2ItcHJvamVjdFxcY29tcG9uZW50c1xcc2VjdGlvbnNcXHByb2R1Y3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkRvQixBQUc0QixBQUlHLEFBSVAsQUFJQSxBQUtxQixBQUliLEFBSVAsQUFJSSxBQU1TLFdBMUIzQixBQUlrQixDQWFsQixHQXpCQSxDQTZCbUIsRUF6Qm5CLENBaUJBLFFBUkEsS0FJQSwwQkFhaUIsZUFDakIsY0FJbUIsMENBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcU2VwZWhyXFxEZXNrdG9wXFxSZWFjdFxcdG9yb2ItcHJvamVjdFxcY29tcG9uZW50c1xcc2VjdGlvbnNcXHByb2R1Y3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9zZWN0aW9uJztcclxuXHJcbmNsYXNzIFNob3djYXNlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaW5mbzogdGhpcy5wcm9wcy5wcm9kdWN0SW5mby5zdHJ1Y3R1cmFsX3NwZWNzLmhlYWRlcnNbMF0uc3BlY3MsXHJcbiAgICAgIGl0ZW1zVG9TaG93OiAyLFxyXG4gICAgICBleHBhbmRlZDogZmFsc2UsXHJcbiAgICAgIHJvdGF0ZUNsYXNzOiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNob3dNb3JlID0gdGhpcy5zaG93TW9yZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgc2hvd01vcmUoKSB7XHJcbiAgICB0aGlzLnN0YXRlLml0ZW1zVG9TaG93ID09PSAyXHJcbiAgICAgID8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpdGVtc1RvU2hvdzogT2JqZWN0LmtleXModGhpcy5zdGF0ZS5pbmZvKS5sZW5ndGgsXHJcbiAgICAgICAgICBleHBhbmRlZDogdHJ1ZSxcclxuICAgICAgICAgIHJvdGF0ZUNsYXNzOiAncm90YXRlJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIDogdGhpcy5zZXRTdGF0ZSh7IGl0ZW1zVG9TaG93OiAyLCBleHBhbmRlZDogZmFsc2UsIHJvdGF0ZUNsYXNzOiAnJyB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgcHJvZHVjdEluZm8gfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2VjdGlvbiBjbGFzc05hbWU9J3RoaWNrX2JvcmRlcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2luZm9fYm94Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2Zsb2F0LXJpZ2h0Jz7Zhdi02K7Ytdin2Kog2YXYrdi12YjZhDwvaDM+XHJcbiAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmFzIGZhLWNoZXZyb24tbGVmdCBmbG9hdC1sZWZ0ICR7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJvdGF0ZUNsYXNzXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zaG93TW9yZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT0naW5mb0xpc3QnPlxyXG4gICAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5zdGF0ZS5pbmZvKVxyXG4gICAgICAgICAgICAgIC5zbGljZSgwLCB0aGlzLnN0YXRlLml0ZW1zVG9TaG93KVxyXG4gICAgICAgICAgICAgIC5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdzcGVjJz57a2V5fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nc3BlY0luZm8nPnt0aGlzLnN0YXRlLmluZm9ba2V5XX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zaG93TW9yZX0+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmV4cGFuZGVkID8gKFxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J2J0biBwcmltYXJ5Jz7ZhtmF2KfbjNi0INmF2LTYrti12KfYqiDaqdmF2KrYsTwvaDQ+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nYnRuIHByaW1hcnknPtmG2YXYp9uM2LQg2KrZhdin2YUg2YXYtNiu2LXYp9iqPC9oND5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zcGVjIHtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNwZWNJbmZvIHtcclxuICAgICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmluZm9MaXN0IGxpIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmluZm9MaXN0IGxpOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGl0bGUgaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDMwMG1zO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnJvdGF0ZSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDMwMG1zO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3djYXNlO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\sections\\product.js */"));
    }
  }]);

  return Showcase;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Showcase);

/***/ }),

/***/ "./components/sections/recommendation.js":
/*!***********************************************!*\
  !*** ./components/sections/recommendation.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _recommendationCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../recommendationCard */ "./components/recommendationCard.js");





var _jsxFileName = "C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\sections\\recommendation.js";




var Stores =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Stores, _Component);

  function Stores() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Stores);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Stores).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Stores, [{
    key: "render",
    value: function render() {
      var recommendations = this.props.recommendations;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-733678399" + " " + "recomm_section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: "jsx-733678399",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, "\u0645\u062D\u0635\u0648\u0644\u0627\u062A \u0645\u0634\u0627\u0628\u0647"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-733678399" + " " + "products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_recommendationCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
        recommended: recommendations.result[0],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }), recommendations.result.map(function (recommended, key) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_recommendationCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
          recommended: recommended,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "733678399",
        __self: this
      }, ".recomm_section.jsx-733678399{background:#E5E5E5;padding:16px 12.5px 17px 11px;}.products.jsx-733678399{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:12.5px;padding:16px 0 0 0;}.box.jsx-733678399{width:169.5px;height:304px;background:#fff;}h3.jsx-733678399{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2VwZWhyXFxEZXNrdG9wXFxSZWFjdFxcdG9yb2ItcHJvamVjdFxcY29tcG9uZW50c1xcc2VjdGlvbnNcXHJlY29tbWVuZGF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CVyxBQUdrQyxBQUlOLEFBT0MsQUFNTCxTQUNYLElBYnVDLENBT3hCLEtBWGlCLFFBWWQsZ0JBQ2xCLE1BWkEsQUFJa0IsZ0JBQ0csbUJBQ3JCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcU2VwZWhyXFxEZXNrdG9wXFxSZWFjdFxcdG9yb2ItcHJvamVjdFxcY29tcG9uZW50c1xcc2VjdGlvbnNcXHJlY29tbWVuZGF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlY29tbWVuZGF0aW9uQ2FyZCBmcm9tICcuLi9yZWNvbW1lbmRhdGlvbkNhcmQnO1xyXG5cclxuY2xhc3MgU3RvcmVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHJlY29tbWVuZGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb21tX3NlY3Rpb25cIj5cclxuICAgICAgICA8aDM+2YXYrdi12YjZhNin2Kog2YXYtNin2KjZhzwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c1wiPlxyXG4gICAgICAgICAgPFJlY29tbWVuZGF0aW9uQ2FyZCByZWNvbW1lbmRlZD17cmVjb21tZW5kYXRpb25zLnJlc3VsdFswXX0vPlxyXG4gICAgICAgICAge3JlY29tbWVuZGF0aW9ucy5yZXN1bHQubWFwKChyZWNvbW1lbmRlZCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPFJlY29tbWVuZGF0aW9uQ2FyZCByZWNvbW1lbmRlZD17cmVjb21tZW5kZWR9Lz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIC5yZWNvbW1fc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0U1RTVFNTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDEyLjVweCAxN3B4IDExcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDEyLjVweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDAgMCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYm94IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTY5LjVweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwNHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmVzO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\sections\\recommendation.js */"));
    }
  }]);

  return Stores;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Stores);

/***/ }),

/***/ "./components/sections/review.js":
/*!***************************************!*\
  !*** ./components/sections/review.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../section */ "./components/section.js");







var _jsxFileName = "C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\sections\\review.js";




var PriceVariation =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(PriceVariation, _Component);

  function PriceVariation(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PriceVariation);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(PriceVariation).call(this, props));
    _this.state = {
      reviews: _this.props.reviews,
      itemsToShow: 3,
      expanded: false,
      rotateClass: ''
    };
    _this.showMore = _this.showMore.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PriceVariation, [{
    key: "showMore",
    value: function showMore() {
      this.state.itemsToShow === 3 ? this.setState({
        itemsToShow: _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.state.reviews).length,
        expanded: true,
        rotateClass: 'rotate'
      }) : this.setState({
        itemsToShow: 3,
        expanded: false,
        rotateClass: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_section__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "thick_border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1290075013" + " " + 'rivew_box',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1290075013" + " " + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-1290075013" + " " + 'float-right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "\u0646\u0642\u062F \u0648 \u0628\u0631\u0631\u0633\u06CC"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        onClick: this.showMore,
        className: "jsx-1290075013" + " " + "fas fa-chevron-left float-left ".concat(this.state.rotateClass),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        className: "jsx-1290075013",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, this.state.reviews.map(function (review) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
          className: "jsx-1290075013" + " " + "review",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          href: review.content_url,
          className: "jsx-1290075013",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, _this2.state.expanded ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-1290075013",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-1290075013" + " " + 'logo float-right',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: review.publisher_logo,
          className: "jsx-1290075013",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
          className: "jsx-1290075013" + " " + 'review_title',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, review.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", {
          className: "jsx-1290075013",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, review.description)) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-1290075013" + " " + 'review',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-1290075013" + " " + 'logo float-right',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: review.publisher_logo,
          className: "jsx-1290075013",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
          className: "jsx-1290075013" + " " + 'review_title',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, review.title))));
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        onClick: this.showMore,
        className: "jsx-1290075013",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, this.state.expanded ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "jsx-1290075013" + " " + 'btn primary centered',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "\u0646\u0645\u0627\u06CC\u0634 \u0645\u0634\u062E\u0635\u0627\u062A \u06A9\u0645\u062A\u0631") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "jsx-1290075013" + " " + 'btn primary centered',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "\u0646\u0645\u0627\u06CC\u0634 \u062A\u0645\u0627\u0645 ".concat(this.state.reviews.length, " \u0646\u0642\u062F")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1290075013",
        __self: this
      }, ".title.jsx-1290075013{height:56px;}.title.jsx-1290075013 i.jsx-1290075013{margin-top:24px;-webkit-transition:300ms;transition:300ms;cursor:pointer;}.rotate.jsx-1290075013{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transition:300ms;transition:300ms;}.logo.jsx-1290075013{position:relative;width:32px;height:32px;vertical-align:middle;}.logo.jsx-1290075013 img.jsx-1290075013{width:100%;margin:auto 0 auto 0;position:absolute;top:50%;right:50%;-webkit-transform:translate(50%,-50%);-ms-transform:translate(50%,-50%);transform:translate(50%,-50%);display:inline-block;}.review_title.jsx-1290075013{line-height:1.8;margin-right:44px;font-weight:100;}h5.jsx-1290075013{font-weight:100;color:#666;margin-bottom:10px;}.review.jsx-1290075013{border-bottom:1px solid #e5e5e5;}.review.jsx-1290075013:last-child{border-bottom:none;}a.jsx-1290075013{color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2VwZWhyXFxEZXNrdG9wXFxSZWFjdFxcdG9yb2ItcHJvamVjdFxcY29tcG9uZW50c1xcc2VjdGlvbnNcXHJldmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RW9CLEFBR3lCLEFBSUksQUFNUyxBQUtQLEFBT1AsQUFVSyxBQU1BLEFBTWdCLEFBSWIsQUFJUixXQTdCVSxBQThCdkIsQ0FwREEsSUFJbUIsQUE0QkMsQUFNUCxFQXZCQSxDQWlDYixRQVRxQixFQXZCUCxHQU9NLEFBcUJwQixFQVhrQixPQWhCTSxLQXVCeEIsSUFoQlUsQUFVVixRQTdCaUIsQUFvQkwsS0FQWixLQVFpQyxLQXBCakMsY0FJbUIsMENBQ25CLHlDQWdCdUIscUJBQ3ZCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcU2VwZWhyXFxEZXNrdG9wXFxSZWFjdFxcdG9yb2ItcHJvamVjdFxcY29tcG9uZW50c1xcc2VjdGlvbnNcXHJldmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL3NlY3Rpb24nO1xyXG5cclxuY2xhc3MgUHJpY2VWYXJpYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICByZXZpZXdzOiB0aGlzLnByb3BzLnJldmlld3MsXHJcbiAgICAgIGl0ZW1zVG9TaG93OiAzLFxyXG4gICAgICBleHBhbmRlZDogZmFsc2UsXHJcbiAgICAgIHJvdGF0ZUNsYXNzOiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNob3dNb3JlID0gdGhpcy5zaG93TW9yZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgc2hvd01vcmUoKSB7XHJcbiAgICB0aGlzLnN0YXRlLml0ZW1zVG9TaG93ID09PSAzXHJcbiAgICAgID8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpdGVtc1RvU2hvdzogT2JqZWN0LmtleXModGhpcy5zdGF0ZS5yZXZpZXdzKS5sZW5ndGgsXHJcbiAgICAgICAgICBleHBhbmRlZDogdHJ1ZSxcclxuICAgICAgICAgIHJvdGF0ZUNsYXNzOiAncm90YXRlJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIDogdGhpcy5zZXRTdGF0ZSh7IGl0ZW1zVG9TaG93OiAzLCBleHBhbmRlZDogZmFsc2UsIHJvdGF0ZUNsYXNzOiAnJyB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT0ndGhpY2tfYm9yZGVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncml2ZXdfYm94Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2Zsb2F0LXJpZ2h0Jz7ZhtmC2K8g2Ygg2KjYsdix2LPbjDwvaDM+XHJcbiAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmFzIGZhLWNoZXZyb24tbGVmdCBmbG9hdC1sZWZ0ICR7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJvdGF0ZUNsYXNzXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zaG93TW9yZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUucmV2aWV3cy5tYXAocmV2aWV3ID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJldmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtyZXZpZXcuY29udGVudF91cmx9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmV4cGFuZGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ28gZmxvYXQtcmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXZpZXcucHVibGlzaGVyX2xvZ299IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdyZXZpZXdfdGl0bGUnPntyZXZpZXcudGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PntyZXZpZXcuZGVzY3JpcHRpb259PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmV2aWV3Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ28gZmxvYXQtcmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXZpZXcucHVibGlzaGVyX2xvZ299IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdyZXZpZXdfdGl0bGUnPntyZXZpZXcudGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2hvd01vcmV9PlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5leHBhbmRlZCA/IChcclxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdidG4gcHJpbWFyeSBjZW50ZXJlZCc+2YbZhdin24zYtCDZhdi02K7Ytdin2Kog2qnZhdiq2LE8L2g0PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J2J0biBwcmltYXJ5IGNlbnRlcmVkJz57YNmG2YXYp9uM2LQg2KrZhdin2YUgJHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmV2aWV3cy5sZW5ndGhcclxuICAgICAgICAgICAgICB9INmG2YLYr2B9PC9oND5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50aXRsZSBpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMzAwbXM7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucm90YXRlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMzAwbXM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmxvZ28gaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0byAwIGF1dG8gMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgcmlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5yZXZpZXdfdGl0bGUge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucmV2aWV3IHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnJldmlldzpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L1NlY3Rpb24+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VWYXJpYXRpb247XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\sections\\review.js */"));
    }
  }]);

  return PriceVariation;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PriceVariation);

/***/ }),

/***/ "./components/sections/showcase.js":
/*!*****************************************!*\
  !*** ./components/sections/showcase.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../section */ "./components/section.js");
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/Head */ "next/Head");
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_Head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _showcaseCarousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../showcaseCarousel */ "./components/showcaseCarousel.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\sections\\showcase.js";







var Showcase =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Showcase, _Component);

  function Showcase() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Showcase);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Showcase).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Showcase, [{
    key: "render",
    value: function render() {
      var generalInfo = this.props.generalInfo;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_section__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "no-left-padding padding-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_showcaseCarousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
        images: generalInfo.image_urls[0],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3830485302" + " " + "showcaseTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: "jsx-3830485302",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, generalInfo.persian_name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: "jsx-3830485302" + " " + 'en',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, generalInfo.english_name)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3830485302",
        __self: this
      }, "h3.jsx-3830485302{color:#333;font-size:16px;line-height:1.5;}.en.jsx-3830485302{color:#666;}.showcaseTitle.jsx-3830485302{padding-left:24px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2VwZWhyXFxEZXNrdG9wXFxSZWFjdFxcdG9yb2ItcHJvamVjdFxcY29tcG9uZW50c1xcc2VjdGlvbnNcXHNob3djYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCVyxBQUkwQixBQU1BLEFBSU8sV0FUSCxBQU1qQixPQUlBLFFBVGtCLGdCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXFNlcGVoclxcRGVza3RvcFxcUmVhY3RcXHRvcm9iLXByb2plY3RcXGNvbXBvbmVudHNcXHNlY3Rpb25zXFxzaG93Y2FzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL3NlY3Rpb24nO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L0hlYWQnO1xyXG5pbXBvcnQgU2hvd2Nhc2VDYXJvdXNlbCBmcm9tICcuLi9zaG93Y2FzZUNhcm91c2VsJztcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIFNob3djYXNlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGdlbmVyYWxJbmZvIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNlY3Rpb24gY2xhc3NOYW1lPVwibm8tbGVmdC1wYWRkaW5nIHBhZGRpbmctdG9wXCI+XHJcbiAgICAgICAgPFNob3djYXNlQ2Fyb3VzZWwgaW1hZ2VzPXtnZW5lcmFsSW5mby5pbWFnZV91cmxzWzBdfSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvd2Nhc2VUaXRsZVwiPlxyXG4gICAgICAgICAgPGgzPntnZW5lcmFsSW5mby5wZXJzaWFuX25hbWV9PC9oMz5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2VuJz57Z2VuZXJhbEluZm8uZW5nbGlzaF9uYW1lfTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5lbiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zaG93Y2FzZVRpdGxlIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3djYXNlO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\sections\\showcase.js */"));
    }
  }]);

  return Showcase;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Showcase);

/***/ }),

/***/ "./components/sections/stores.js":
/*!***************************************!*\
  !*** ./components/sections/stores.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../section */ "./components/section.js");
/* harmony import */ var _storeCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../storeCard */ "./components/storeCard.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\sections\\stores.js";






var Stores =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Stores, _Component);

  function Stores(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Stores);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Stores).call(this, props));
    _this.state = {
      stores: _this.props.storesInfo.result,
      itemsToShow: 3,
      expanded: false
    };
    _this.showMore = _this.showMore.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Stores, [{
    key: "showMore",
    value: function showMore() {
      this.state.itemsToShow === 3 ? this.setState({
        itemsToShow: this.state.stores.length,
        expanded: true
      }) : this.setState({
        itemsToShow: 3,
        expanded: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1054586404" + " " + 'store_box',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "jsx-1054586404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "\u0641\u0631\u0648\u0634\u06AF\u0627\u0647 \u0647\u0627"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-1054586404" + " " + 'storesList',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, this.state.stores.slice(0, this.state.itemsToShow).map(function (store, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: i,
          className: "jsx-1054586404",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_storeCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
          store: store,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }));
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: this.showMore,
        className: "jsx-1054586404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, this.state.expanded ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "jsx-1054586404" + " " + "btn primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "\u0646\u0645\u0627\u06CC\u0634 \u0641\u0631\u0648\u0634\u06AF\u0627\u0647 \u0647\u0627\u06CC \u06A9\u0645\u062A\u0631") : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "jsx-1054586404" + " " + "btn primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "\u0646\u0645\u0627\u06CC\u0634 \u062A\u0645\u0627\u0645 ", this.state.stores.length, " \u0641\u0631\u0648\u0634\u06AF\u0627\u0647"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1054586404",
        __self: this
      }, "h3.jsx-1054586404{font-size:16px;color:#000;}h4.jsx-1054586404{text-align:center;}.storesList.jsx-1054586404 li.jsx-1054586404{border-bottom:1px solid #e5e5e5;}.storesList.jsx-1054586404 li.jsx-1054586404:last-child{border-bottom:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2VwZWhyXFxEZXNrdG9wXFxSZWFjdFxcdG9yb2ItcHJvamVjdFxcY29tcG9uZW50c1xcc2VjdGlvbnNcXHN0b3Jlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRFcsQUFHOEIsQUFLRyxBQUljLEFBR2IsZUFYUixHQUtiLENBT0EsT0FYQSxNQVFBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcU2VwZWhyXFxEZXNrdG9wXFxSZWFjdFxcdG9yb2ItcHJvamVjdFxcY29tcG9uZW50c1xcc2VjdGlvbnNcXHN0b3Jlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL3NlY3Rpb24nO1xyXG5pbXBvcnQgU3RvcmVDYXJkIGZyb20gJy4uL3N0b3JlQ2FyZCc7XHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBTdG9yZXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzdG9yZXM6IHRoaXMucHJvcHMuc3RvcmVzSW5mby5yZXN1bHQsXHJcbiAgICAgIGl0ZW1zVG9TaG93OiAzLFxyXG4gICAgICBleHBhbmRlZDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zaG93TW9yZSA9IHRoaXMuc2hvd01vcmUuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHNob3dNb3JlKCkge1xyXG4gICAgdGhpcy5zdGF0ZS5pdGVtc1RvU2hvdyA9PT0gM1xyXG4gICAgICA/IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaXRlbXNUb1Nob3c6IHRoaXMuc3RhdGUuc3RvcmVzLmxlbmd0aCxcclxuICAgICAgICAgIGV4cGFuZGVkOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgOiB0aGlzLnNldFN0YXRlKHsgaXRlbXNUb1Nob3c6IDMsIGV4cGFuZGVkOiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdG9yZV9ib3gnPlxyXG4gICAgICAgICAgPGgzPtmB2LHZiNi02q/Yp9mHINmH2Kc8L2gzPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT0nc3RvcmVzTGlzdCc+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN0b3Jlc1xyXG4gICAgICAgICAgICAgIC5zbGljZSgwLCB0aGlzLnN0YXRlLml0ZW1zVG9TaG93KVxyXG4gICAgICAgICAgICAgIC5tYXAoKHN0b3JlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICA8U3RvcmVDYXJkIHN0b3JlPXtzdG9yZX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2hvd01vcmV9PlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5leHBhbmRlZCA/IChcclxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYnRuIHByaW1hcnlcIj7ZhtmF2KfbjNi0INmB2LHZiNi02q/Yp9mHINmH2KfbjCDaqdmF2KrYsTwvaDQ+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImJ0biBwcmltYXJ5XCI+2YbZhdin24zYtCDYqtmF2KfZhSB7dGhpcy5zdGF0ZS5zdG9yZXMubGVuZ3RofSDZgdix2YjYtNqv2KfZhzwvaDQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3RvcmVzTGlzdCBsaSB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN0b3Jlc0xpc3QgbGk6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L1NlY3Rpb24+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmVzO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\sections\\stores.js */"));
    }
  }]);

  return Stores;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Stores);

/***/ }),

/***/ "./components/showcaseCarousel.js":
/*!****************************************!*\
  !*** ./components/showcaseCarousel.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\showcaseCarousel.js";




var ShowcaseCarousel =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ShowcaseCarousel, _React$Component);

  function ShowcaseCarousel() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ShowcaseCarousel);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ShowcaseCarousel).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ShowcaseCarousel, [{
    key: "render",
    value: function render() {
      var images = this.props.images;
      var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        rtl: true,
        initialSlide: 1,
        slidesToShow: 2,
        slidesToScroll: 1
      };
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3878460324",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        charset: "UTF-8",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
        className: "jsx-3878460324",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
        className: "jsx-3878460324",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_8___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), this.props.images.urls.map(function (url, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          key: i,
          className: "jsx-3878460324" + " " + 'slide',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: url,
          alt: "Galaxy 8",
          className: "jsx-3878460324",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }));
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3878460324",
        __self: this
      }, ".slide.jsx-3878460324{width:120px;height:120px;text-align:center;}.slide.jsx-3878460324 img.jsx-3878460324{width:120px;height:120px;margin-left:auto;margin-right:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2VwZWhyXFxEZXNrdG9wXFxSZWFjdFxcdG9yb2ItcHJvamVjdFxcY29tcG9uZW50c1xcc2hvd2Nhc2VDYXJvdXNlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q1csQUFHMkIsQUFNQSxZQUxDLEFBTUEsYUFMSyxBQU1ELGlCQUNDLENBTnBCLGlCQU9BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcU2VwZWhyXFxEZXNrdG9wXFxSZWFjdFxcdG9yb2ItcHJvamVjdFxcY29tcG9uZW50c1xcc2hvd2Nhc2VDYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3Qtc2xpY2snO1xyXG5cclxuY2xhc3MgU2hvd2Nhc2VDYXJvdXNlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICB2YXIgc2V0dGluZ3MgPSB7XHJcbiAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgIHJ0bDogdHJ1ZSxcclxuICAgICAgaW5pdGlhbFNsaWRlOiAxLFxyXG4gICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPSdzdHlsZXNoZWV0J1xyXG4gICAgICAgICAgdHlwZT0ndGV4dC9jc3MnXHJcbiAgICAgICAgICBjaGFyc2V0PSdVVEYtOCdcclxuICAgICAgICAgIGhyZWY9J2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3MnXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPSdzdHlsZXNoZWV0J1xyXG4gICAgICAgICAgdHlwZT0ndGV4dC9jc3MnXHJcbiAgICAgICAgICBocmVmPSdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuaW1hZ2VzLnVybHMubWFwKCh1cmwsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGUnIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXJsfSBhbHQ9J0dhbGF4eSA4JyAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9TbGlkZXI+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAuc2xpZGUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNsaWRlIGltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3djYXNlQ2Fyb3VzZWw7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\showcaseCarousel.js */"));
    }
  }]);

  return ShowcaseCarousel;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ShowcaseCarousel);

/***/ }),

/***/ "./components/storeCard.js":
/*!*********************************!*\
  !*** ./components/storeCard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\storeCard.js";



var StoreCard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StoreCard, _Component);

  function StoreCard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StoreCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StoreCard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StoreCard, [{
    key: "render",
    value: function render() {
      var store = this.props.store;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3397115756" + " " + 'store_card',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3397115756" + " " + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: "jsx-3397115756" + " " + 'float-right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, store.shop_name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3397115756" + " " + 'votes',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-3397115756" + " " + "vote_span float-left green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "92%"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-3397115756" + " " + 'float-left',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "56 \u0631\u0627\u06CC"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3397115756",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "jsx-3397115756" + " " + 'fa',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, store.persian_name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "jsx-3397115756" + " " + 'en',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, store.english_name)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3397115756" + " " + 'purchase',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: store.page_url,
        className: "jsx-3397115756",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-3397115756" + " " + 'purchase_button float-right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "\u062E\u0631\u06CC\u062F")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "jsx-3397115756" + " " + 'price float-right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, store.price), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "jsx-3397115756" + " " + 'price old',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, store.price_before_offer)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3397115756",
        __self: this
      }, "h3.jsx-3397115756{color:#333;}h4.jsx-3397115756{color:#666;}.fa.jsx-3397115756{margin:0 0 2px 0;line-height:1.5;font-weight:200;}.en.jsx-3397115756{color:#999;line-height:1.5;margin-top:2px;font-weight:200;}p.jsx-3397115756{font-size:12px;color:#808080;margin:15px 0;line-height:2;}.title.jsx-3397115756{height:32px;}.vote_span.jsx-3397115756{margin:16px 8px 16px 0;padding:4px 8px;color:white;border-radius:10px;font-size:12px;}.purchase.jsx-3397115756{height:44px;text-align:right;}.purchase_button.jsx-3397115756{padding:5px 16px;background-color:var(--primary);font-size:16px;color:white;border-radius:4px;margin-left:8px;}.green.jsx-3397115756{background-color:green;}.yellow.jsx-3397115756{background-color:#fba700;}.grey.jsx-3397115756{background-color:#8897a8;}.price.jsx-3397115756{color:#333;line-height:2;margin:0 0 0 12px;}.old.jsx-3397115756{color:#999;-webkit-text-decoration:line-through;text-decoration:line-through;margin:0 0 0 12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2VwZWhyXFxEZXNrdG9wXFxSZWFjdFxcdG9yb2ItcHJvamVjdFxcY29tcG9uZW50c1xcc3RvcmVDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCVyxBQUcwQixBQUlBLEFBSU0sQUFNTixBQU9JLEFBT0gsQUFJVyxBQVFYLEFBS0ssQUFTTSxBQUlFLEFBR0EsQUFJZCxBQU1BLFdBdEViLEFBSUEsQUFVa0IsQUFtREYsQUFNZSxDQTNDL0IsQUFZbUIsR0FuQkgsRUFiRSxBQXFDZ0IsTUFiaEIsQUFzQmxCLEVBSUEsQUFHQSxBQUtvQixFQW5ESCxFQU9ELEFBbUJoQixJQWhDa0IsTUF3QkosR0FqQkksQ0FPRixBQTRDaEIsTUF6REEsQUFvQ2lCLEVBWkksTUFWckIsQ0FQQSxNQThCYyxNQVpHLE1BYUcsQ0F3QkEsUUFwQ3BCLFNBYWtCLENBd0JsQixlQXZCQSIsImZpbGUiOiJDOlxcVXNlcnNcXFNlcGVoclxcRGVza3RvcFxcUmVhY3RcXHRvcm9iLXByb2plY3RcXGNvbXBvbmVudHNcXHN0b3JlQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTdG9yZUNhcmQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RvcmVfY2FyZCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlJz5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2Zsb2F0LXJpZ2h0Jz57c3RvcmUuc2hvcF9uYW1lfTwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndm90ZXMnPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B2b3RlX3NwYW4gZmxvYXQtbGVmdCBncmVlbmB9PjkyJTwvc3Bhbj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmbG9hdC1sZWZ0Jz41NiDYsdin24w8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT0nZmEnPntzdG9yZS5wZXJzaWFuX25hbWV9PC9oND5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9J2VuJz57c3RvcmUuZW5nbGlzaF9uYW1lfTwvaDQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B1cmNoYXNlJz5cclxuICAgICAgICAgIDxhIGhyZWY9e3N0b3JlLnBhZ2VfdXJsfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwdXJjaGFzZV9idXR0b24gZmxvYXQtcmlnaHQnPtiu2LHbjNivPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT0ncHJpY2UgZmxvYXQtcmlnaHQnPntzdG9yZS5wcmljZX08L2g0PlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT0ncHJpY2Ugb2xkJz57c3RvcmUucHJpY2VfYmVmb3JlX29mZmVyfTwvaDQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZhIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgMCAycHggMDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5lbiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnZvdGVfc3BhbiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxNnB4IDhweCAxNnB4IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wdXJjaGFzZSB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucHVyY2hhc2VfYnV0dG9uIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTZweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZ3JlZW4ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAueWVsbG93IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJhNzAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ncmV5IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg5N2E4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucHJpY2Uge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTJweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm9sZCB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JlQ2FyZDtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\components\\storeCard.js */"));
    }
  }]);

  return StoreCard;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StoreCard);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_sections_showcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sections/showcase */ "./components/sections/showcase.js");
/* harmony import */ var _components_sections_notif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sections/notif */ "./components/sections/notif.js");
/* harmony import */ var _components_sections_stores__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/sections/stores */ "./components/sections/stores.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/Head */ "next/Head");
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_Head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_sections_product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/sections/product */ "./components/sections/product.js");
/* harmony import */ var _components_sections_priceVariation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/sections/priceVariation */ "./components/sections/priceVariation.js");
/* harmony import */ var _components_sections_commercialsCarousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/sections/commercialsCarousel */ "./components/sections/commercialsCarousel.js");
/* harmony import */ var _components_sections_recommendation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/sections/recommendation */ "./components/sections/recommendation.js");
/* harmony import */ var _components_sections_review__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/sections/review */ "./components/sections/review.js");


var _jsxFileName = "C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\pages\\index.js";













var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1626792481",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_Head__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
    className: "jsx-1626792481",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, props.info.name2), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.8.2/css/all.css",
    integrity: "sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay",
    crossorigin: "anonymous",
    className: "jsx-1626792481",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_sections_showcase__WEBPACK_IMPORTED_MODULE_4__["default"], {
    generalInfo: props.info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_sections_notif__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_sections_stores__WEBPACK_IMPORTED_MODULE_6__["default"], {
    storesInfo: props.info.products_info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_sections_product__WEBPACK_IMPORTED_MODULE_9__["default"], {
    productInfo: props.info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_sections_priceVariation__WEBPACK_IMPORTED_MODULE_10__["default"], {
    prices: props.prices,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_sections_commercialsCarousel__WEBPACK_IMPORTED_MODULE_11__["default"], {
    commercials: props.commercials,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_sections_review__WEBPACK_IMPORTED_MODULE_13__["default"], {
    reviews: props.info.contents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_sections_recommendation__WEBPACK_IMPORTED_MODULE_12__["default"], {
    recommendations: props.recommendations,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1626792481",
    __self: this
  }, "@font-face{font-family:vazir;src:url('/static/font/Vazir-FD.eot');src:url('/static/font/Vazir-FD.eot?#iefix') format('embedded-opentype'), url('/static/font/Vazir-FD.woff2') format('woff2'), url('/static/font/Vazir-FD.woff') format('woff'), url('/static/font/Vazir-FD.ttf') format('truetype');font-weight:normal;font-style:normal;}@font-face{font-family:vazir-bold;src:url('/static/font/Vazir-Bold-FD.eot');src:url('/static/font/Vazir-Bold-FD.eot?#iefix') format('embedded-opentype'), url('/static/font/Vazir-Bold-FD.woff2') format('woff2'), url('/static/font/Vazir-Bold-FD.woff') format('woff'), url('/static/font/Vazir-Bold-FD.ttf') format('truetype');font-weight:bold;font-style:normal;}:root{--primary:#d73948;}body{font-family:'vazir',sans-serif;direction:rtl;margin:0;padding:0;width:375px;}ul{padding:0;margin:0;}ul li{list-style-type:none;}a{-webkit-text-decoration:none;text-decoration:none;}.btn:hover{cursor:pointer;}.hidden{visibility:hidden;}h3{font-size:16px;}h4{font-size:14px;}h5{font-size:12px;margin:12px 0 2px 0;line-height:1.5;}h6{font-size:10px;margin:2px 0 2px 0;line-height:1.5;}.centered{text-align:center;}.icon_container{width:20px;height:20px;overflow:hidden;margin:12px 24px 14px 0;color:#999;}.icon_container:hover{cursor:pointer;}.icon_container i{width:100%;font-size:20px;}*:focus{outline:0;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2VwZWhyXFxEZXNrdG9wXFxSZWFjdFxcdG9yb2ItcHJvamVjdFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDTyxBQUc2QixBQUlBLEFBV0ssQUFZUyxBQVF0QixBQUtXLEFBSUEsQUFJTixBQUlHLEFBSUgsQUFJQSxBQUlBLEFBTUEsQUFNRyxBQUlQLEFBUUksQUFJSixBQUtELFVBN0RELEFBOERJLENBakJELEFBWUcsSUE1Q2pCLEFBUUEsQUFJQSxBQUlzQixBQU1ELEFBa0JyQixHQXhGQSxBQUl1QyxBQWdEdkMsQUF3QkEsQ0F4Q0EsRUFJQSxFQXpCNEMsQUFrRTFCLEFBaUJsQixHQUxBLEtBbEVnQixHQTRDRSxDQU5BLElBaUJRLE1BdERmLEtBZ0JYLEFBNEJBLENBTkEsR0FyQ1ksQ0FwQjJDLFFBMEUxQyxDQXJEQyxDQVY4QyxTQWdFNUQsRUFyREEsOE1BckJxQixtQkFDRCxXQVVELE9BVG5CLFVBVW9CLGtCQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXFNlcGVoclxcRGVza3RvcFxcUmVhY3RcXHRvcm9iLXByb2plY3RcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaG93Y2FzZSBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL3Nob3djYXNlJztcclxuaW1wb3J0IE5vdGlmIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvbm90aWYnO1xyXG5pbXBvcnQgU3RvcmVzIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvc3RvcmVzJztcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9IZWFkJztcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9wcm9kdWN0JztcclxuaW1wb3J0IFByaWNlVmFyaWF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvcHJpY2VWYXJpYXRpb24nO1xyXG5pbXBvcnQgQ29tbWVyY2lhbHNDYXJvdXNlbCBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL2NvbW1lcmNpYWxzQ2Fyb3VzZWwnO1xyXG5pbXBvcnQgUmVjb21tZW5kYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9yZWNvbW1lbmRhdGlvbic7XHJcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9yZXZpZXcnO1xyXG5cclxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+e3Byb3BzLmluZm8ubmFtZTJ9PC90aXRsZT5cclxuICAgICAgPGxpbmtcclxuICAgICAgICByZWw9J3N0eWxlc2hlZXQnXHJcbiAgICAgICAgaHJlZj0naHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjguMi9jc3MvYWxsLmNzcydcclxuICAgICAgICBpbnRlZ3JpdHk9J3NoYTM4NC1vUzN2Sld2KzBVanpCZlF6WVVodERZVytQajJ5Y2lESnhwc0sxT1lQQVlqcVQwODVRcS8xY3E1RkxYQVpRN0F5J1xyXG4gICAgICAgIGNyb3Nzb3JpZ2luPSdhbm9ueW1vdXMnXHJcbiAgICAgIC8+XHJcbiAgICA8L0hlYWQ+XHJcblxyXG4gICAgPFNob3djYXNlIGdlbmVyYWxJbmZvPXtwcm9wcy5pbmZvfSAvPlxyXG4gICAgPE5vdGlmIC8+XHJcbiAgICA8U3RvcmVzIHN0b3Jlc0luZm89e3Byb3BzLmluZm8ucHJvZHVjdHNfaW5mb30gLz5cclxuICAgIDxQcm9kdWN0IHByb2R1Y3RJbmZvPXtwcm9wcy5pbmZvfSAvPlxyXG4gICAgPFByaWNlVmFyaWF0aW9uIHByaWNlcz17cHJvcHMucHJpY2VzfSAvPlxyXG4gICAgPENvbW1lcmNpYWxzQ2Fyb3VzZWwgY29tbWVyY2lhbHM9e3Byb3BzLmNvbW1lcmNpYWxzfSAvPlxyXG4gICAgPFJldmlldyByZXZpZXdzPXtwcm9wcy5pbmZvLmNvbnRlbnRzfSAvPlxyXG4gICAgPFJlY29tbWVuZGF0aW9uIHJlY29tbWVuZGF0aW9ucz17cHJvcHMucmVjb21tZW5kYXRpb25zfSAvPlxyXG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgIHtgXHJcbiAgICAgICAgOnJvb3Qge1xyXG4gICAgICAgICAgLS1wcmltYXJ5OiAjZDczOTQ4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogdmF6aXI7XHJcbiAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250L1ZhemlyLUZELmVvdCcpO1xyXG4gICAgICAgICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udC9WYXppci1GRC5lb3Q/I2llZml4JylcclxuICAgICAgICAgICAgICBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXHJcbiAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250L1ZhemlyLUZELndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udC9WYXppci1GRC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXHJcbiAgICAgICAgICAgIHVybCgnL3N0YXRpYy9mb250L1ZhemlyLUZELnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IHZhemlyLWJvbGQ7XHJcbiAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250L1ZhemlyLUJvbGQtRkQuZW90Jyk7XHJcbiAgICAgICAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250L1ZhemlyLUJvbGQtRkQuZW90PyNpZWZpeCcpXHJcbiAgICAgICAgICAgICAgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxyXG4gICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udC9WYXppci1Cb2xkLUZELndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udC9WYXppci1Cb2xkLUZELndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcclxuICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnQvVmF6aXItQm9sZC1GRC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICd2YXppcicsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBkaXJlY3Rpb246IHJ0bDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMzc1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwgbGkge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnRuOmhvdmVyIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oaWRkZW4ge1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxMnB4IDAgMnB4IDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDYge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAycHggMCAycHggMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VudGVyZWQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmljb25fY29udGFpbmVyIHtcclxuICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIG1hcmdpbjogMTJweCAyNHB4IDE0cHggMDtcclxuICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmljb25fY29udGFpbmVyOmhvdmVyIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pY29uX2NvbnRhaW5lciBpIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKjpmb2N1cyB7XHJcbiAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgQXhpb3MuZ2V0KFxyXG4gICAgYGh0dHBzOi8vYXBpLnRvcm9iLmNvbS9iYXNlLXByb2R1Y3QtbW9yZS1pbmZvLz9yYW5kb21fa2V5PTdmN2Y5Nzk0LTBmMTItNDdhYi1hZDk4LTQwMDMyNzhiYWE2YiZzb3VyY2U9c29tZXdoZXJlJmRpc2NvdmVyX21ldGhvZD1kaXJlY3RgXHJcbiAgKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmRhdGE7XHJcblxyXG4gIGNvbnN0IHJlczIgPSBhd2FpdCBBeGlvcy5nZXQoXHJcbiAgICBgaHR0cHM6Ly9hcGkudG9yb2IuY29tL2FuZHJvaWQtYXBpLzMvc2VhcmNoL3NpbWlsYXItbGlzdGluZ3MvP3Byaz03ZjdmOTc5NC0wZjEyLTQ3YWItYWQ5OC00MDAzMjc4YmFhNmImc291cmNlPXNvbWV3aGVyZVxyXG5gXHJcbiAgKTtcclxuICBjb25zdCBkYXRhMiA9IGF3YWl0IHJlczIuZGF0YTtcclxuXHJcbiAgY29uc3QgcmVzMyA9IGF3YWl0IEF4aW9zLmdldChcclxuICAgIGBodHRwczovL2FwaS50b3JvYi5jb20vYW5kcm9pZC1hcGkvMy9zaW1pbGFyLXByb2R1Y3RzLz9wcms9N2Y3Zjk3OTQtMGYxMi00N2FiLWFkOTgtNDAwMzI3OGJhYTZiJmxpbWl0PTI1JnBhZ2U9MVxyXG4gICAgYFxyXG4gICk7XHJcbiAgY29uc3QgZGF0YTMgPSBhd2FpdCByZXMzLmRhdGE7XHJcblxyXG4gIGNvbnN0IHJlczQgPSBhd2FpdCBBeGlvcy5nZXQoXHJcbiAgICBgaHR0cHM6Ly9hcGkudG9yb2IuY29tL2FuZHJvaWQtYXBpLzMvYmFzZS1wcm9kdWN0LXByaWNlLWNoYXJ0Lz9wcms9N2Y3Zjk3OTQtMGYxMi00N2FiLWFkOTgtNDAwMzI3OGJhYTZiXHJcbiAgICBgXHJcbiAgKTtcclxuICBjb25zdCBkYXRhNCA9IGF3YWl0IHJlczQuZGF0YTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluZm86IGRhdGEsXHJcbiAgICBjb21tZXJjaWFsczogZGF0YTIsXHJcbiAgICByZWNvbW1lbmRhdGlvbnM6IGRhdGEzLFxyXG4gICAgcHJpY2VzOiBkYXRhNFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Sepehr\\Desktop\\React\\torob-project\\pages\\index.js */"));
};

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data, res2, data2, res3, data3, res4, data4;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("https://api.torob.com/base-product-more-info/?random_key=7f7f9794-0f12-47ab-ad98-4003278baa6b&source=somewhere&discover_method=direct");

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.data;

        case 5:
          data = _context.sent;
          _context.next = 8;
          return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("https://api.torob.com/android-api/3/search/similar-listings/?prk=7f7f9794-0f12-47ab-ad98-4003278baa6b&source=somewhere\n");

        case 8:
          res2 = _context.sent;
          _context.next = 11;
          return res2.data;

        case 11:
          data2 = _context.sent;
          _context.next = 14;
          return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("https://api.torob.com/android-api/3/similar-products/?prk=7f7f9794-0f12-47ab-ad98-4003278baa6b&limit=25&page=1\n    ");

        case 14:
          res3 = _context.sent;
          _context.next = 17;
          return res3.data;

        case 17:
          data3 = _context.sent;
          _context.next = 20;
          return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("https://api.torob.com/android-api/3/base-product-price-chart/?prk=7f7f9794-0f12-47ab-ad98-4003278baa6b\n    ");

        case 20:
          res4 = _context.sent;
          _context.next = 23;
          return res4.data;

        case 23:
          data4 = _context.sent;
          return _context.abrupt("return", {
            info: data,
            commercials: data2,
            recommendations: data3,
            prices: data4
          });

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sepehr\Desktop\React\torob-project\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next/Head":
/*!****************************!*\
  !*** external "next/Head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map