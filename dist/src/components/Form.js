'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Add = function (_Component) {
    _inherits(Add, _Component);

    function Add(props) {
        _classCallCheck(this, Add);

        var _this = _possibleConstructorReturn(this, (Add.__proto__ || Object.getPrototypeOf(Add)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.onCheckRuleClick = _this.onCheckRuleClick.bind(_this);
        return _this;
    }

    _createClass(Add, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _reactDom2.default.findDOMNode(this.refs.text).focus();
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ myValue: event.target.value });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit() {
            alert('author: ' + _reactDom2.default.findDOMNode(this.refs.author).value + '\ntext' + _reactDom2.default.findDOMNode(this.refs.text).value);
        }
    }, {
        key: 'onCheckRuleClick',
        value: function onCheckRuleClick(event) {
            _reactDom2.default.findDOMNode(this.refs.alertButton).disabled = !event.target.checked;
        }
    }, {
        key: 'render',
        value: function render() {
            return;
        }
    }]);

    return Add;
}(_react.Component);

exports.default = Add;
//# sourceMappingURL=Form.js.map