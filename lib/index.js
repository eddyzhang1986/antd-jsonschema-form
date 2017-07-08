"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.sum = sum;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

require("bootstrap/dist/css/bootstrap.min.css");

var _reactJsonschemaForm = require("react-jsonschema-form");

var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "Title", default: "A new task" },
    title2: { type: "string", title: "Title", default: "A new task2" },
    done: { type: "boolean", title: "Done?", default: false }
  }
};

var log = function log(type) {
  return console.log.bind(console, type);
};

function sum(a, b) {
  return a + b;
}

/**
 * 导出测试发布到npm
 */

var FormTest = function (_Component) {
  _inherits(FormTest, _Component);

  function FormTest() {
    _classCallCheck(this, FormTest);

    return _possibleConstructorReturn(this, (FormTest.__proto__ || Object.getPrototypeOf(FormTest)).apply(this, arguments));
  }

  _createClass(FormTest, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_reactJsonschemaForm2.default, { schema: schema,
        onChange: log("changed"),
        onSubmit: log("submitted"),
        onError: log("errors") });
    }
  }]);

  return FormTest;
}(_react.Component);

exports.default = FormTest;


(0, _reactDom.render)(_react2.default.createElement(_reactJsonschemaForm2.default, { schema: schema,
  safeRenderCompletion: true,
  noHtml5Validate: true,
  onChange: log("changed"),
  onSubmit: log("submitted"),
  onError: log("errors") }), document.getElementById("main"));

//# sourceMappingURL=index.js.map