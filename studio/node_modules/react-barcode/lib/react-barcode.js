"use strict";

var _react = _interopRequireDefault(require("react"));

var _jsbarcode = _interopRequireDefault(require("jsbarcode"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var getDOMNode; // Super naive semver detection but it's good enough. We support 0.12, 0.13
// which both have getDOMNode on the ref. 0.14 and 15 make the DOM node the ref.

var version = _react["default"].version.split(/[.-]/);

if (version[0] === '0' && (version[1] === '13' || version[1] === '12')) {
  getDOMNode = function getDOMNode(ref) {
    return ref.getDOMNode();
  };
} else {
  getDOMNode = function getDOMNode(ref) {
    return ref;
  };
}

var Barcode =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Barcode, _React$Component);

  function Barcode(props) {
    var _this;

    _classCallCheck(this, Barcode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Barcode).call(this, props));
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Barcode, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      return Object.keys(Barcode.propTypes).some(function (k) {
        return _this2.props[k] !== nextProps[k];
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.update();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      var renderElement = getDOMNode(this.refs.renderElement);

      try {
        new _jsbarcode["default"](renderElement, this.props.value, Object.assign({}, this.props));
      } catch (e) {
        // prevent stop the parent process
        window.console.error(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.renderer === 'svg') {
        return _react["default"].createElement("svg", {
          ref: "renderElement"
        });
      } else if (this.props.renderer === 'canvas') {
        return _react["default"].createElement("canvas", {
          ref: "renderElement"
        });
      } else if (this.props.renderer === 'img') {
        return _react["default"].createElement("img", {
          ref: "renderElement"
        });
      }
    }
  }]);

  return Barcode;
}(_react["default"].Component);

Barcode.propTypes = {
  value: _propTypes["default"].string.isRequired,
  renderer: _propTypes["default"].string,
  format: _propTypes["default"].string,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  displayValue: _propTypes["default"].bool,
  fontOptions: _propTypes["default"].string,
  font: _propTypes["default"].string,
  textAlign: _propTypes["default"].string,
  textPosition: _propTypes["default"].string,
  textMargin: _propTypes["default"].number,
  fontSize: _propTypes["default"].number,
  background: _propTypes["default"].string,
  lineColor: _propTypes["default"].string,
  margin: _propTypes["default"].number,
  marginTop: _propTypes["default"].number,
  marginBottom: _propTypes["default"].number,
  marginLeft: _propTypes["default"].number,
  marginRight: _propTypes["default"].number
};
Barcode.defaultProps = {
  format: 'CODE128',
  renderer: 'svg',
  width: 2,
  height: 100,
  displayValue: true,
  fontOptions: '',
  font: 'monospace',
  textAlign: 'center',
  textPosition: 'bottom',
  textMargin: 2,
  fontSize: 20,
  background: '#ffffff',
  lineColor: '#000000',
  margin: 10
};
module.exports = Barcode;