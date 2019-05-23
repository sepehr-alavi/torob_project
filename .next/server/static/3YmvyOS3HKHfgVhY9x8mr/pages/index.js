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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "3niX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__("cDcd");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__("SevZ"));

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

/***/ "9kyW":
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

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "MX0m":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3niX")


/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("eVuF");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js


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
    promise_default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new promise_default.a(function (resolve, reject) {
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
// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    define_property_default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js
var get_prototype_of = __webpack_require__("Bhuq");
var get_prototype_of_default = /*#__PURE__*/__webpack_require__.n(get_prototype_of);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js


function getPrototypeOf_getPrototypeOf(o) {
  getPrototypeOf_getPrototypeOf = set_prototype_of_default.a ? get_prototype_of_default.a : function _getPrototypeOf(o) {
    return o.__proto__ || get_prototype_of_default()(o);
  };
  return getPrototypeOf_getPrototypeOf(o);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// EXTERNAL MODULE: external "next/Head"
var Head_ = __webpack_require__("ZOYG");
var Head_default = /*#__PURE__*/__webpack_require__.n(Head_);

// CONCATENATED MODULE: ./components/section.js









var section_Section =
/*#__PURE__*/
function (_Component) {
  _inherits(Section, _Component);

  function Section() {
    _classCallCheck(this, Section);

    return _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Section).apply(this, arguments));
  }

  _createClass(Section, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return external_react_default.a.createElement("div", {
        className: "jsx-752580740" + " " + "section ".concat(this.props.className || '')
      }, children, external_react_default.a.createElement(style_default.a, {
        id: "2137273029"
      }, [".section.jsx-752580740{padding:0 24px 0 24px;border-bottom:1px solid #e5e5e5;}", ".thick_border.jsx-752580740{border-top:3px solid #ecedef;}", ".no-left-padding.jsx-752580740{padding-left:0;}", ".padding-top.jsx-752580740{padding-top:24px;}"]), external_react_default.a.createElement(style_default.a, {
        id: "2524047592"
      }, [".section .img_container{width:120px;height:120px;overflow:hidden;background-color:#ecedef;}", ".section .img_container img{width:100%;}", ".float-right{float:right;}", ".float-left{float:left;}", ".en{color:#666;direction:ltr;}", ".primary{color:var(--primary);}"]), external_react_default.a.createElement("script", {
        src: "https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js",
        className: "jsx-752580740"
      }));
    }
  }]);

  return Section;
}(external_react_["Component"]);

/* harmony default export */ var section = (section_Section);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// CONCATENATED MODULE: ./components/showcaseCarousel.js









var showcaseCarousel_ShowcaseCarousel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ShowcaseCarousel, _React$Component);

  function ShowcaseCarousel() {
    _classCallCheck(this, ShowcaseCarousel);

    return _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(ShowcaseCarousel).apply(this, arguments));
  }

  _createClass(ShowcaseCarousel, [{
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
      return external_react_default.a.createElement("div", {
        className: "jsx-3878460324"
      }, external_react_default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        charset: "UTF-8",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
        className: "jsx-3878460324"
      }), external_react_default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
        className: "jsx-3878460324"
      }), external_react_default.a.createElement(external_react_slick_default.a, settings, this.props.images.urls.map(function (url, i) {
        return external_react_default.a.createElement("div", {
          key: i,
          className: "jsx-3878460324" + " " + 'slide'
        }, external_react_default.a.createElement("img", {
          src: url,
          alt: "Galaxy 8",
          className: "jsx-3878460324"
        }));
      })), external_react_default.a.createElement(style_default.a, {
        id: "3878460324"
      }, [".slide.jsx-3878460324{width:120px;height:120px;text-align:center;}", ".slide.jsx-3878460324 img.jsx-3878460324{width:120px;height:120px;margin-left:auto;margin-right:auto;}"]));
    }
  }]);

  return ShowcaseCarousel;
}(external_react_default.a.Component);

/* harmony default export */ var showcaseCarousel = (showcaseCarousel_ShowcaseCarousel);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./components/sections/showcase.js












var showcase_Showcase =
/*#__PURE__*/
function (_Component) {
  _inherits(Showcase, _Component);

  function Showcase() {
    _classCallCheck(this, Showcase);

    return _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Showcase).apply(this, arguments));
  }

  _createClass(Showcase, [{
    key: "render",
    value: function render() {
      var generalInfo = this.props.generalInfo;
      return external_react_default.a.createElement(section, {
        className: "no-left-padding padding-top"
      }, external_react_default.a.createElement(showcaseCarousel, {
        images: generalInfo.image_urls[0]
      }), external_react_default.a.createElement("div", {
        className: "jsx-3830485302" + " " + "showcaseTitle"
      }, external_react_default.a.createElement("h3", {
        className: "jsx-3830485302"
      }, generalInfo.persian_name), external_react_default.a.createElement("h3", {
        className: "jsx-3830485302" + " " + 'en'
      }, generalInfo.english_name)), external_react_default.a.createElement(style_default.a, {
        id: "3830485302"
      }, ["h3.jsx-3830485302{color:#333;font-size:16px;line-height:1.5;}", ".en.jsx-3830485302{color:#666;}", ".showcaseTitle.jsx-3830485302{padding-left:24px;}"]));
    }
  }]);

  return Showcase;
}(external_react_["Component"]);

/* harmony default export */ var showcase = (showcase_Showcase);
// CONCATENATED MODULE: ./components/sections/notif.js










var notif_Notif =
/*#__PURE__*/
function (_Component) {
  _inherits(Notif, _Component);

  function Notif() {
    var _this;

    _classCallCheck(this, Notif);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Notif).call(this));
    _this.state = {
      liked: false,
      likeType: 'far fa-heart',
      likeColor: '#999',
      notification: false,
      notificationType: 'far fa-bell'
    };
    _this.like = _this.like.bind(_assertThisInitialized(_this));
    _this.notification = _this.notification.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Notif, [{
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
      return external_react_default.a.createElement(section, null, external_react_default.a.createElement("div", {
        className: "jsx-2627096679" + " " + 'notif_box'
      }, external_react_default.a.createElement("div", {
        onClick: this.notification,
        className: "jsx-2627096679" + " " + 'icon_container float-right bell'
      }, external_react_default.a.createElement("i", {
        className: "jsx-2627096679" + " " + (this.state.notificationType || "")
      })), external_react_default.a.createElement("p", {
        className: "jsx-2627096679"
      }, "\u0627\u0637\u0644\u0627\u0639 \u0627\u0632 \u062A\u063A\u06CC\u06CC\u0631 \u0642\u06CC\u0645\u062A"), external_react_default.a.createElement("div", {
        className: "jsx-2627096679" + " " + 'icon_container float-left share'
      }, external_react_default.a.createElement("i", {
        className: "jsx-2627096679" + " " + 'fas fa-share-alt'
      })), external_react_default.a.createElement("div", {
        onClick: this.like,
        className: "jsx-2627096679" + " " + 'icon_container float-left heart'
      }, external_react_default.a.createElement("i", {
        className: "jsx-2627096679" + " " + (this.state.likeType || "")
      }))), external_react_default.a.createElement(style_default.a, {
        id: "2627096679"
      }, ["p.jsx-2627096679{margin:14px 9px 0 0;font-size:14px;color:#999;float:right;}", ".notif_box.jsx-2627096679{height:48px;}", ".icon_container.jsx-2627096679:first-child{margin:12px 0;}", ".bell.jsx-2627096679:hover{color:var(--primary);-webkit-transition:200ms;transition:200ms;}", ".heart.jsx-2627096679:hover{color:var(--primary);-webkit-transition:300ms;transition:300ms;}"]));
    }
  }]);

  return Notif;
}(external_react_["Component"]);

/* harmony default export */ var notif = (notif_Notif);
// CONCATENATED MODULE: ./components/storeCard.js








var storeCard_StoreCard =
/*#__PURE__*/
function (_Component) {
  _inherits(StoreCard, _Component);

  function StoreCard() {
    _classCallCheck(this, StoreCard);

    return _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(StoreCard).apply(this, arguments));
  }

  _createClass(StoreCard, [{
    key: "render",
    value: function render() {
      var store = this.props.store;
      return external_react_default.a.createElement("div", {
        className: "jsx-3397115756" + " " + 'store_card'
      }, external_react_default.a.createElement("div", {
        className: "jsx-3397115756" + " " + 'title'
      }, external_react_default.a.createElement("h3", {
        className: "jsx-3397115756" + " " + 'float-right'
      }, store.shop_name), external_react_default.a.createElement("div", {
        className: "jsx-3397115756" + " " + 'votes'
      }, external_react_default.a.createElement("span", {
        className: "jsx-3397115756" + " " + "vote_span float-left green"
      }, "92%"), external_react_default.a.createElement("p", {
        className: "jsx-3397115756" + " " + 'float-left'
      }, "56 \u0631\u0627\u06CC"))), external_react_default.a.createElement("div", {
        className: "jsx-3397115756"
      }, external_react_default.a.createElement("h4", {
        className: "jsx-3397115756" + " " + 'fa'
      }, store.persian_name), external_react_default.a.createElement("h4", {
        className: "jsx-3397115756" + " " + 'en'
      }, store.english_name)), external_react_default.a.createElement("div", {
        className: "jsx-3397115756" + " " + 'purchase'
      }, external_react_default.a.createElement("a", {
        href: store.page_url,
        className: "jsx-3397115756"
      }, external_react_default.a.createElement("span", {
        className: "jsx-3397115756" + " " + 'purchase_button float-right'
      }, "\u062E\u0631\u06CC\u062F")), external_react_default.a.createElement("h4", {
        className: "jsx-3397115756" + " " + 'price float-right'
      }, store.price), external_react_default.a.createElement("h4", {
        className: "jsx-3397115756" + " " + 'price old'
      }, store.price_before_offer)), external_react_default.a.createElement(style_default.a, {
        id: "3397115756"
      }, ["h3.jsx-3397115756{color:#333;}", "h4.jsx-3397115756{color:#666;}", ".fa.jsx-3397115756{margin:0 0 2px 0;line-height:1.5;font-weight:200;}", ".en.jsx-3397115756{color:#999;line-height:1.5;margin-top:2px;font-weight:200;}", "p.jsx-3397115756{font-size:12px;color:#808080;margin:15px 0;line-height:2;}", ".title.jsx-3397115756{height:32px;}", ".vote_span.jsx-3397115756{margin:16px 8px 16px 0;padding:4px 8px;color:white;border-radius:10px;font-size:12px;}", ".purchase.jsx-3397115756{height:44px;text-align:right;}", ".purchase_button.jsx-3397115756{padding:5px 16px;background-color:var(--primary);font-size:16px;color:white;border-radius:4px;margin-left:8px;}", ".green.jsx-3397115756{background-color:green;}", ".yellow.jsx-3397115756{background-color:#fba700;}", ".grey.jsx-3397115756{background-color:#8897a8;}", ".price.jsx-3397115756{color:#333;line-height:2;margin:0 0 0 12px;}", ".old.jsx-3397115756{color:#999;-webkit-text-decoration:line-through;text-decoration:line-through;margin:0 0 0 12px;}"]));
    }
  }]);

  return StoreCard;
}(external_react_["Component"]);

/* harmony default export */ var storeCard = (storeCard_StoreCard);
// CONCATENATED MODULE: ./components/sections/stores.js












var stores_Stores =
/*#__PURE__*/
function (_Component) {
  _inherits(Stores, _Component);

  function Stores(props) {
    var _this;

    _classCallCheck(this, Stores);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Stores).call(this, props));
    _this.state = {
      stores: _this.props.storesInfo.result,
      itemsToShow: 3,
      expanded: false
    };
    _this.showMore = _this.showMore.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Stores, [{
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
      return external_react_default.a.createElement(section, null, external_react_default.a.createElement("div", {
        className: "jsx-1054586404" + " " + 'store_box'
      }, external_react_default.a.createElement("h3", {
        className: "jsx-1054586404"
      }, "\u0641\u0631\u0648\u0634\u06AF\u0627\u0647 \u0647\u0627"), external_react_default.a.createElement("ul", {
        className: "jsx-1054586404" + " " + 'storesList'
      }, this.state.stores.slice(0, this.state.itemsToShow).map(function (store, i) {
        return external_react_default.a.createElement("li", {
          key: i,
          className: "jsx-1054586404"
        }, external_react_default.a.createElement(storeCard, {
          store: store
        }));
      })), external_react_default.a.createElement("a", {
        onClick: this.showMore,
        className: "jsx-1054586404"
      }, this.state.expanded ? external_react_default.a.createElement("h4", {
        className: "jsx-1054586404" + " " + "btn primary"
      }, "\u0646\u0645\u0627\u06CC\u0634 \u0641\u0631\u0648\u0634\u06AF\u0627\u0647 \u0647\u0627\u06CC \u06A9\u0645\u062A\u0631") : external_react_default.a.createElement("h4", {
        className: "jsx-1054586404" + " " + "btn primary"
      }, "\u0646\u0645\u0627\u06CC\u0634 \u062A\u0645\u0627\u0645 ", this.state.stores.length, " \u0641\u0631\u0648\u0634\u06AF\u0627\u0647"))), external_react_default.a.createElement(style_default.a, {
        id: "1054586404"
      }, ["h3.jsx-1054586404{font-size:16px;color:#000;}", "h4.jsx-1054586404{text-align:center;}", ".storesList.jsx-1054586404 li.jsx-1054586404{border-bottom:1px solid #e5e5e5;}", ".storesList.jsx-1054586404 li.jsx-1054586404:last-child{border-bottom:none;}"]));
    }
  }]);

  return Stores;
}(external_react_["Component"]);

/* harmony default export */ var stores = (stores_Stores);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./components/sections/product.js











var product_Showcase =
/*#__PURE__*/
function (_Component) {
  _inherits(Showcase, _Component);

  function Showcase(props) {
    var _this;

    _classCallCheck(this, Showcase);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Showcase).call(this, props));
    _this.state = {
      info: _this.props.productInfo.structural_specs.headers[0].specs,
      itemsToShow: 2,
      expanded: false,
      rotateClass: ''
    };
    _this.showMore = _this.showMore.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Showcase, [{
    key: "showMore",
    value: function showMore() {
      this.state.itemsToShow === 2 ? this.setState({
        itemsToShow: keys_default()(this.state.info).length,
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
      return external_react_default.a.createElement(section, {
        className: "thick_border"
      }, external_react_default.a.createElement("div", {
        className: "jsx-235990398" + " " + 'info_box'
      }, external_react_default.a.createElement("div", {
        className: "jsx-235990398" + " " + 'title'
      }, external_react_default.a.createElement("h3", {
        className: "jsx-235990398" + " " + 'float-right'
      }, "\u0645\u0634\u062E\u0635\u0627\u062A \u0645\u062D\u0635\u0648\u0644"), external_react_default.a.createElement("i", {
        onClick: this.showMore,
        className: "jsx-235990398" + " " + "fas fa-chevron-left float-left ".concat(this.state.rotateClass)
      })), external_react_default.a.createElement("ul", {
        className: "jsx-235990398" + " " + 'infoList'
      }, keys_default()(this.state.info).slice(0, this.state.itemsToShow).map(function (key) {
        return external_react_default.a.createElement("li", {
          className: "jsx-235990398"
        }, external_react_default.a.createElement("h4", {
          className: "jsx-235990398" + " " + 'spec'
        }, key), external_react_default.a.createElement("h4", {
          className: "jsx-235990398" + " " + 'specInfo'
        }, _this2.state.info[key]));
      })), external_react_default.a.createElement("a", {
        onClick: this.showMore,
        className: "jsx-235990398"
      }, this.state.expanded ? external_react_default.a.createElement("h4", {
        className: "jsx-235990398" + " " + 'btn primary'
      }, "\u0646\u0645\u0627\u06CC\u0634 \u0645\u0634\u062E\u0635\u0627\u062A \u06A9\u0645\u062A\u0631") : external_react_default.a.createElement("h4", {
        className: "jsx-235990398" + " " + 'btn primary'
      }, "\u0646\u0645\u0627\u06CC\u0634 \u062A\u0645\u0627\u0645 \u0645\u0634\u062E\u0635\u0627\u062A"))), external_react_default.a.createElement(style_default.a, {
        id: "235990398"
      }, ["h4.jsx-235990398{font-size:14px;}", ".btn.jsx-235990398{text-align:center;}", ".spec.jsx-235990398{color:#333;}", ".specInfo.jsx-235990398{color:#666;font-weight:100;}", ".infoList.jsx-235990398 li.jsx-235990398{border-bottom:1px solid #e5e5e5;}", ".infoList.jsx-235990398 li.jsx-235990398:last-child{border-bottom:none;}", ".title.jsx-235990398{height:56px;}", ".title.jsx-235990398 i.jsx-235990398{margin-top:24px;-webkit-transition:300ms;transition:300ms;cursor:pointer;}", ".rotate.jsx-235990398{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transition:300ms;transition:300ms;}"]));
    }
  }]);

  return Showcase;
}(external_react_["Component"]);

/* harmony default export */ var product = (product_Showcase);
// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__("t3hY");

// CONCATENATED MODULE: ./components/chart.js








var chart_Chart =
/*#__PURE__*/
function (_Component) {
  _inherits(Chart, _Component);

  function Chart(props) {
    var _this;

    _classCallCheck(this, Chart);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Chart).call(this, props));
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

  _createClass(Chart, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_chartjs_2_["Line"], {
        data: this.state.chartData,
        options: {
          maintainAspectRatio: false
        }
      });
    }
  }]);

  return Chart;
}(external_react_["Component"]);

/* harmony default export */ var chart = (chart_Chart);
// CONCATENATED MODULE: ./components/sections/priceVariation.js










var priceVariation_PriceVariation =
/*#__PURE__*/
function (_Component) {
  _inherits(PriceVariation, _Component);

  function PriceVariation(props) {
    var _this;

    _classCallCheck(this, PriceVariation);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(PriceVariation).call(this, props));
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


  _createClass(PriceVariation, [{
    key: "render",
    value: function render() {
      var prices = this.props.prices;
      return external_react_default.a.createElement(section, {
        className: "thick_border"
      }, external_react_default.a.createElement("div", {
        className: "jsx-3473952430" + " " + 'chart_box'
      }, external_react_default.a.createElement("div", {
        className: "jsx-3473952430" + " " + 'title'
      }, external_react_default.a.createElement("h3", {
        className: "jsx-3473952430" + " " + 'float-right'
      }, "\u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u0642\u06CC\u0645\u062A"), external_react_default.a.createElement("i", {
        onClick: this.showMore,
        className: "jsx-3473952430" + " " + "fas fa-chevron-left float-left ".concat(this.state.rotateClass)
      })), external_react_default.a.createElement("div", {
        className: "jsx-3473952430" + " " + 'chart_container'
      }, external_react_default.a.createElement(chart, {
        chartData: prices
      })), external_react_default.a.createElement("h4", {
        className: "jsx-3473952430" + " " + 'btn primary centered'
      }, "\u0644\u06CC\u0633\u062A \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u0642\u06CC\u0645\u062A")), external_react_default.a.createElement(style_default.a, {
        id: "3473952430"
      }, [".title.jsx-3473952430{height:56px;}", ".title.jsx-3473952430 i.jsx-3473952430{margin-top:24px;-webkit-transition:300ms;transition:300ms;cursor:pointer;}", ".chart_container.jsx-3473952430{width:100%;height:200px;}"]));
    }
  }]);

  return PriceVariation;
}(external_react_["Component"]);

/* harmony default export */ var priceVariation = (priceVariation_PriceVariation);
// CONCATENATED MODULE: ./components/commercialCard.js








var commercialCard_CommercialCard =
/*#__PURE__*/
function (_Component) {
  _inherits(CommercialCard, _Component);

  function CommercialCard() {
    _classCallCheck(this, CommercialCard);

    return _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(CommercialCard).apply(this, arguments));
  }

  _createClass(CommercialCard, [{
    key: "render",
    value: function render() {
      var commercial = this.props.commercial;
      return external_react_default.a.createElement("div", {
        className: "jsx-823693154" + " " + 'commercial_card'
      }, external_react_default.a.createElement("a", {
        href: commercial.more_info_url,
        className: "jsx-823693154"
      }, external_react_default.a.createElement("div", {
        className: "jsx-823693154" + " " + 'comm_img_container'
      }, external_react_default.a.createElement("img", {
        src: commercial.image_url,
        className: "jsx-823693154"
      })), external_react_default.a.createElement("h5", {
        className: "jsx-823693154"
      }, commercial.text1), external_react_default.a.createElement("h6", {
        className: "jsx-823693154"
      }, commercial.text2), external_react_default.a.createElement("h6", {
        className: "jsx-823693154" + " " + 'lighter'
      }, commercial.text3), external_react_default.a.createElement("div", {
        className: "jsx-823693154" + " " + 'price'
      }, external_react_default.a.createElement("h5", {
        className: "jsx-823693154" + " " + "float-right"
      }, commercial.price), external_react_default.a.createElement("h5", {
        className: "jsx-823693154" + " " + "unit"
      }, commercial.price_unit))), external_react_default.a.createElement(style_default.a, {
        id: "823693154"
      }, [".commercial_card.jsx-823693154{width:164px;margin-bottom:24px;}", ".comm_img_container.jsx-823693154{width:164px;height:96px;}", ".comm_img_container.jsx-823693154 img.jsx-823693154{width:100%;height:100%;}", "h5.jsx-823693154{color:#333;font-weight:700;}", "h6.jsx-823693154{color:#666;font-weight:500;}", ".lighter.jsx-823693154{color:#999;}", ".unit.jsx-823693154{margin-right:2px;display:inline-block;}"]));
    }
  }]);

  return CommercialCard;
}(external_react_["Component"]);

/* harmony default export */ var commercialCard = (commercialCard_CommercialCard);
// CONCATENATED MODULE: ./components/sections/commercialsCarousel.js











var commercialsCarousel_PriceVariation =
/*#__PURE__*/
function (_Component) {
  _inherits(PriceVariation, _Component);

  function PriceVariation() {
    _classCallCheck(this, PriceVariation);

    return _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(PriceVariation).apply(this, arguments));
  }

  _createClass(PriceVariation, [{
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
      return external_react_default.a.createElement(section, {
        className: "thick_border no-left-padding"
      }, external_react_default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        charset: "UTF-8",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
        className: "jsx-3326733786"
      }), external_react_default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
        className: "jsx-3326733786"
      }), external_react_default.a.createElement("h3", {
        className: "jsx-3326733786"
      }, "\u0622\u06AF\u0647\u06CC \u0647\u0627\u06CC \u0645\u0634\u0627\u0628\u0647"), external_react_default.a.createElement(external_react_slick_default.a, settings, commercials.result.map(function (commercial, i) {
        return external_react_default.a.createElement("div", {
          key: i,
          className: "jsx-3326733786" + " " + 'slide'
        }, external_react_default.a.createElement(commercialCard, {
          commercial: commercial
        }));
      })), external_react_default.a.createElement(style_default.a, {
        id: "3326733786"
      }, [".slide.jsx-3326733786{text-align:right;}"]));
    }
  }]);

  return PriceVariation;
}(external_react_["Component"]);

/* harmony default export */ var commercialsCarousel = (commercialsCarousel_PriceVariation);
// CONCATENATED MODULE: ./components/recommendationCard.js









var recommendationCard_RecommendationCard =
/*#__PURE__*/
function (_Component) {
  _inherits(RecommendationCard, _Component);

  function RecommendationCard() {
    var _this;

    _classCallCheck(this, RecommendationCard);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(RecommendationCard).call(this));
    _this.state = {
      liked: false,
      likeType: 'far fa-heart',
      likeColor: '#999',
      notification: false,
      notificationType: 'far fa-bell'
    };
    _this.like = _this.like.bind(_assertThisInitialized(_this));
    _this.notification = _this.notification.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RecommendationCard, [{
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
      return external_react_default.a.createElement("div", {
        className: "jsx-2456710751" + " " + 'recomm_card'
      }, external_react_default.a.createElement("a", {
        className: "jsx-2456710751"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2456710751" + " " + "recomm_img_container"
      }, external_react_default.a.createElement("img", {
        src: recommended.image_url,
        alt: recommended.persian_name,
        className: "jsx-2456710751"
      })), external_react_default.a.createElement("h5", {
        className: "jsx-2456710751" + " " + "pe"
      }, recommended.persian_name), external_react_default.a.createElement("h5", {
        className: "jsx-2456710751" + " " + "en"
      }, recommended.english_name), external_react_default.a.createElement("h5", {
        className: "jsx-2456710751" + " " + "primary centered"
      }, "\u0627\u0632 ".concat(recommended.price, " \u062A\u0648\u0645\u0627\u0646")), external_react_default.a.createElement("h5", {
        className: "jsx-2456710751" + " " + "shops centered"
      }, "\u062F\u0631 ".concat(recommended.shop_num, " \u0641\u0631\u0648\u0634\u06AF\u0627\u0647"))), external_react_default.a.createElement("div", {
        className: "jsx-2456710751" + " " + "icons"
      }, external_react_default.a.createElement("div", {
        onClick: this.notification,
        className: "jsx-2456710751" + " " + "icon_container bell"
      }, external_react_default.a.createElement("i", {
        className: "jsx-2456710751" + " " + (this.state.notificationType || "")
      })), external_react_default.a.createElement("div", {
        onClick: this.like,
        className: "jsx-2456710751" + " " + "icon_container heart"
      }, external_react_default.a.createElement("i", {
        className: "jsx-2456710751" + " " + (this.state.likeType || "")
      }))), external_react_default.a.createElement("div", {
        className: "jsx-2456710751" + " " + "push"
      }), external_react_default.a.createElement(style_default.a, {
        id: "2456710751"
      }, [".recomm_card.jsx-2456710751{position:relative;box-sizing:border-box;width:169.5px;padding:12px 16.5px 17px 17px;background:#fff;}", ".recomm_img_container.jsx-2456710751{width:100%;height:136px;}", ".recomm_img_container.jsx-2456710751 img.jsx-2456710751{width:100%;height:100%;}", ".pe.jsx-2456710751{color:#333;margin-bottom:5px;margin-top:8px;}", ".en.jsx-2456710751{color:#666;font-weight:100;margin-bottom:8px;}", ".shops.jsx-2456710751{color:#999;font-weight:100;margin-bottom:16px;}", "h5.jsx-2456710751{margin:0;}", ".icons.jsx-2456710751{position:absolute;bottom:0;}", ".push.jsx-2456710751{height:20px;}", ".icon_container.jsx-2456710751{display:inline-block;text-align:center;margin:0 0 10px 0;}", ".bell.jsx-2456710751{margin:0 30px 10px 17px;}", ".heart.jsx-2456710751{margin:0 17px 10px 30px;}", ".bell.jsx-2456710751:hover{color:var(--primary);-webkit-transition:200ms;transition:200ms;}", ".heart.jsx-2456710751:hover{color:var(--primary);-webkit-transition:300ms;transition:300ms;}"]));
    }
  }]);

  return RecommendationCard;
}(external_react_["Component"]);

/* harmony default export */ var recommendationCard = (recommendationCard_RecommendationCard);
// CONCATENATED MODULE: ./components/sections/recommendation.js









var recommendation_Stores =
/*#__PURE__*/
function (_Component) {
  _inherits(Stores, _Component);

  function Stores() {
    _classCallCheck(this, Stores);

    return _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Stores).apply(this, arguments));
  }

  _createClass(Stores, [{
    key: "render",
    value: function render() {
      var recommendations = this.props.recommendations;
      return external_react_default.a.createElement("div", {
        className: "jsx-733678399" + " " + "recomm_section"
      }, external_react_default.a.createElement("h3", {
        className: "jsx-733678399"
      }, "\u0645\u062D\u0635\u0648\u0644\u0627\u062A \u0645\u0634\u0627\u0628\u0647"), external_react_default.a.createElement("div", {
        className: "jsx-733678399" + " " + "products"
      }, external_react_default.a.createElement(recommendationCard, {
        recommended: recommendations.result[0]
      }), recommendations.result.map(function (recommended, key) {
        return external_react_default.a.createElement(recommendationCard, {
          recommended: recommended
        });
      })), external_react_default.a.createElement(style_default.a, {
        id: "733678399"
      }, [".recomm_section.jsx-733678399{background:#E5E5E5;padding:16px 12.5px 17px 11px;}", ".products.jsx-733678399{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:12.5px;padding:16px 0 0 0;}", ".box.jsx-733678399{width:169.5px;height:304px;background:#fff;}", "h3.jsx-733678399{margin:0;}"]));
    }
  }]);

  return Stores;
}(external_react_["Component"]);

/* harmony default export */ var recommendation = (recommendation_Stores);
// CONCATENATED MODULE: ./components/sections/review.js











var review_PriceVariation =
/*#__PURE__*/
function (_Component) {
  _inherits(PriceVariation, _Component);

  function PriceVariation(props) {
    var _this;

    _classCallCheck(this, PriceVariation);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(PriceVariation).call(this, props));
    _this.state = {
      reviews: _this.props.reviews,
      itemsToShow: 3,
      expanded: false,
      rotateClass: ''
    };
    _this.showMore = _this.showMore.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PriceVariation, [{
    key: "showMore",
    value: function showMore() {
      this.state.itemsToShow === 3 ? this.setState({
        itemsToShow: keys_default()(this.state.reviews).length,
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

      return external_react_default.a.createElement(section, {
        className: "thick_border"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1290075013" + " " + 'rivew_box'
      }, external_react_default.a.createElement("div", {
        className: "jsx-1290075013" + " " + 'title'
      }, external_react_default.a.createElement("h3", {
        className: "jsx-1290075013" + " " + 'float-right'
      }, "\u0646\u0642\u062F \u0648 \u0628\u0631\u0631\u0633\u06CC"), external_react_default.a.createElement("i", {
        onClick: this.showMore,
        className: "jsx-1290075013" + " " + "fas fa-chevron-left float-left ".concat(this.state.rotateClass)
      })), external_react_default.a.createElement("ul", {
        className: "jsx-1290075013"
      }, this.state.reviews.map(function (review) {
        return external_react_default.a.createElement("li", {
          className: "jsx-1290075013" + " " + "review"
        }, external_react_default.a.createElement("a", {
          href: review.content_url,
          className: "jsx-1290075013"
        }, _this2.state.expanded ? external_react_default.a.createElement("div", {
          className: "jsx-1290075013"
        }, external_react_default.a.createElement("div", {
          className: "jsx-1290075013" + " " + 'logo float-right'
        }, external_react_default.a.createElement("img", {
          src: review.publisher_logo,
          className: "jsx-1290075013"
        })), external_react_default.a.createElement("h4", {
          className: "jsx-1290075013" + " " + 'review_title'
        }, review.title), external_react_default.a.createElement("h5", {
          className: "jsx-1290075013"
        }, review.description)) : external_react_default.a.createElement("div", {
          className: "jsx-1290075013" + " " + 'review'
        }, external_react_default.a.createElement("div", {
          className: "jsx-1290075013" + " " + 'logo float-right'
        }, external_react_default.a.createElement("img", {
          src: review.publisher_logo,
          className: "jsx-1290075013"
        })), external_react_default.a.createElement("h4", {
          className: "jsx-1290075013" + " " + 'review_title'
        }, review.title))));
      })), external_react_default.a.createElement("a", {
        onClick: this.showMore,
        className: "jsx-1290075013"
      }, this.state.expanded ? external_react_default.a.createElement("h4", {
        className: "jsx-1290075013" + " " + 'btn primary centered'
      }, "\u0646\u0645\u0627\u06CC\u0634 \u0645\u0634\u062E\u0635\u0627\u062A \u06A9\u0645\u062A\u0631") : external_react_default.a.createElement("h4", {
        className: "jsx-1290075013" + " " + 'btn primary centered'
      }, "\u0646\u0645\u0627\u06CC\u0634 \u062A\u0645\u0627\u0645 ".concat(this.state.reviews.length, " \u0646\u0642\u062F")))), external_react_default.a.createElement(style_default.a, {
        id: "1290075013"
      }, [".title.jsx-1290075013{height:56px;}", ".title.jsx-1290075013 i.jsx-1290075013{margin-top:24px;-webkit-transition:300ms;transition:300ms;cursor:pointer;}", ".rotate.jsx-1290075013{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transition:300ms;transition:300ms;}", ".logo.jsx-1290075013{position:relative;width:32px;height:32px;vertical-align:middle;}", ".logo.jsx-1290075013 img.jsx-1290075013{width:100%;margin:auto 0 auto 0;position:absolute;top:50%;right:50%;-webkit-transform:translate(50%,-50%);-ms-transform:translate(50%,-50%);transform:translate(50%,-50%);display:inline-block;}", ".review_title.jsx-1290075013{line-height:1.8;margin-right:44px;font-weight:100;}", "h5.jsx-1290075013{font-weight:100;color:#666;margin-bottom:10px;}", ".review.jsx-1290075013{border-bottom:1px solid #e5e5e5;}", ".review.jsx-1290075013:last-child{border-bottom:none;}", "a.jsx-1290075013{color:#000;}"]));
    }
  }]);

  return PriceVariation;
}(external_react_["Component"]);

/* harmony default export */ var sections_review = (review_PriceVariation);
// CONCATENATED MODULE: ./pages/index.js















var pages_Index = function Index(props) {
  return external_react_default.a.createElement("div", {
    className: "jsx-1626792481"
  }, external_react_default.a.createElement(Head_default.a, null, external_react_default.a.createElement("title", {
    className: "jsx-1626792481"
  }, props.info.name2), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.8.2/css/all.css",
    integrity: "sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay",
    crossorigin: "anonymous",
    className: "jsx-1626792481"
  })), external_react_default.a.createElement(showcase, {
    generalInfo: props.info
  }), external_react_default.a.createElement(notif, null), external_react_default.a.createElement(stores, {
    storesInfo: props.info.products_info
  }), external_react_default.a.createElement(product, {
    productInfo: props.info
  }), external_react_default.a.createElement(priceVariation, {
    prices: props.prices
  }), external_react_default.a.createElement(commercialsCarousel, {
    commercials: props.commercials
  }), external_react_default.a.createElement(sections_review, {
    reviews: props.info.contents
  }), external_react_default.a.createElement(recommendation, {
    recommendations: props.recommendations
  }), external_react_default.a.createElement(style_default.a, {
    id: "1626792481"
  }, ["@font-face{font-family:vazir;src:url('/static/font/Vazir-FD.eot');src:url('/static/font/Vazir-FD.eot?#iefix') format('embedded-opentype'), url('/static/font/Vazir-FD.woff2') format('woff2'), url('/static/font/Vazir-FD.woff') format('woff'), url('/static/font/Vazir-FD.ttf') format('truetype');font-weight:normal;font-style:normal;}", "@font-face{font-family:vazir-bold;src:url('/static/font/Vazir-Bold-FD.eot');src:url('/static/font/Vazir-Bold-FD.eot?#iefix') format('embedded-opentype'), url('/static/font/Vazir-Bold-FD.woff2') format('woff2'), url('/static/font/Vazir-Bold-FD.woff') format('woff'), url('/static/font/Vazir-Bold-FD.ttf') format('truetype');font-weight:bold;font-style:normal;}", ":root{--primary:#d73948;}", "body{font-family:'vazir',sans-serif;direction:rtl;margin:0;padding:0;width:375px;}", "ul{padding:0;margin:0;}", "ul li{list-style-type:none;}", "a{-webkit-text-decoration:none;text-decoration:none;}", ".btn:hover{cursor:pointer;}", ".hidden{visibility:hidden;}", "h3{font-size:16px;}", "h4{font-size:14px;}", "h5{font-size:12px;margin:12px 0 2px 0;line-height:1.5;}", "h6{font-size:10px;margin:2px 0 2px 0;line-height:1.5;}", ".centered{text-align:center;}", ".icon_container{width:20px;height:20px;overflow:hidden;margin:12px 24px 14px 0;color:#999;}", ".icon_container:hover{cursor:pointer;}", ".icon_container i{width:100%;font-size:20px;}", "*:focus{outline:0;outline:none;}"]));
};

pages_Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regenerator_default.a.mark(function _callee() {
  var res, data, res2, data2, res3, data3, res4, data4;
  return regenerator_default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return external_axios_default.a.get("https://api.torob.com/base-product-more-info/?random_key=7f7f9794-0f12-47ab-ad98-4003278baa6b&source=somewhere&discover_method=direct");

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.data;

        case 5:
          data = _context.sent;
          _context.next = 8;
          return external_axios_default.a.get("https://api.torob.com/android-api/3/search/similar-listings/?prk=7f7f9794-0f12-47ab-ad98-4003278baa6b&source=somewhere\n");

        case 8:
          res2 = _context.sent;
          _context.next = 11;
          return res2.data;

        case 11:
          data2 = _context.sent;
          _context.next = 14;
          return external_axios_default.a.get("https://api.torob.com/android-api/3/similar-products/?prk=7f7f9794-0f12-47ab-ad98-4003278baa6b&limit=25&page=1\n    ");

        case 14:
          res3 = _context.sent;
          _context.next = 17;
          return res3.data;

        case 17:
          data3 = _context.sent;
          _context.next = 20;
          return external_axios_default.a.get("https://api.torob.com/android-api/3/base-product-price-chart/?prk=7f7f9794-0f12-47ab-ad98-4003278baa6b\n    ");

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
/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),

/***/ "SevZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__("9kyW"));

var _stylesheet = _interopRequireDefault(__webpack_require__("bVZc"));

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

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZOYG":
/***/ (function(module, exports) {

module.exports = require("next/Head");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bVZc":
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
var isProd = process.env && "production" === 'production';

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "t3hY":
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });