'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./countdown.css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Countdown = function (_React$Component) {
    _inherits(Countdown, _React$Component);

    function Countdown(props) {
        _classCallCheck(this, Countdown);

        var _this = _possibleConstructorReturn(this, (Countdown.__proto__ || Object.getPrototypeOf(Countdown)).call(this, props));

        _this.expDate = new Date(_this.props.expireDate).getTime();
        _this.state = {
            isDue: false
        };
        return _this;
    }

    /*
        Calculate the distance between today's date and expireDate props
        return a number in milliseconds
    */


    _createClass(Countdown, [{
        key: 'calculateDistance',
        value: function calculateDistance() {

            var today = new Date().getTime();
            var d = this.expDate - today;
            return d;
        }
    }, {
        key: 'checkIfDue',
        value: function checkIfDue() {
            var d = this.calculateDistance();
            this.setState({ isDue: d < 1000 ? true : false });
        }
    }, {
        key: 'intervalHandler',
        value: function intervalHandler() {
            var _this2 = this;

            this.checkIfDue();
            this.intervalId = setInterval(function () {
                if (_this2.state.isDue) {
                    clearInterval(_this2.intervalId);
                } else {
                    _this2.checkIfDue();
                }
            }, 1000);
        }
    }, {
        key: 'countDownBuilder',
        value: function countDownBuilder() {

            var t = this.calculateDistance();
            var days = t > 0 ? Math.floor(t / (1000 * 60 * 60 * 24)) : 0;
            var hours = t > 0 ? Math.floor(t / (1000 * 60 * 60) % 24) : 0;
            var minutes = t > 0 ? Math.floor(t / 1000 / 60 % 60) : 0;
            var seconds = t > 0 ? Math.floor(t / 1000 % 60) : 0;

            // We build an array of objects containing all values and labels
            // This will be use in the render method with a map
            var remain = [{
                id: 0,
                type: 'days',
                label: "days",
                value: days
            }, {
                id: 1,
                type: 'hours',
                label: "hours",
                value: hours
            }, {
                id: 2,
                type: 'minutes',
                label: "minutes",
                value: minutes
            }];

            // Is you set viewSeconds prop on TRUE, 
            // the seconds object is added to remain array
            if (this.props.viewSeconds) {
                var secsWrapper = {
                    id: 3,
                    type: 'seconds',
                    label: "seconds",
                    value: seconds
                };
                remain.push(secsWrapper);
            }
            return remain;
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.checkIfDue(); // We change state isDue if data communicated is due
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.intervalHandler();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {

            if (this.expDate != new Date(this.props.expireDate).getTime()) {

                this.expDate = new Date(this.props.expireDate).getTime();
                this.intervalHandler();
            }

            if (this.props.theme != this.props.theme) {
                this.props.theme = this.props.theme;
            }

            if (this.props.children != this.props.children) {
                this.props.children = this.props.children;
            }
        }
    }, {
        key: 'render',
        value: function render() {

            // If isDue state is TRUE, AND component has children
            // we display the children of the component
            if (this.state.isDue && this.props.children) {

                return this.props.children;
            }
            // ELSE
            //  We display the countDown item
            else {

                    var countDonwItems = this.countDownBuilder().map(function (item) {
                        return _react2.default.createElement(
                            'div',
                            {
                                key: item.id,
                                className: 'rcd-item rcd-item-' + item.label
                            },
                            _react2.default.createElement(
                                'div',
                                { className: 'rcd-card rcd-card-' + item.label },
                                _react2.default.createElement(
                                    'strong',
                                    { className: 'rcd-value' },
                                    item.value
                                ),
                                _react2.default.createElement(
                                    'small',
                                    { className: 'rcd-label' },
                                    item.label
                                )
                            )
                        );
                    });

                    var isDarkClass = this.props.isDark ? 'is-dark' : '';
                    var templateClass = this.props.theme !== 'default' ? 'rcd-theme-' + this.props.theme : '';
                    // If template props not "default", we add extra class that handles CD styling
                    var gridClasses = 'rcd-grid ' + templateClass + ' ' + isDarkClass;

                    return _react2.default.createElement(
                        'div',
                        {
                            className: gridClasses
                        },
                        countDonwItems
                    );
                }
        }
    }]);

    return Countdown;
}(_react2.default.Component);

exports.default = Countdown;


Countdown.propTypes = {
    expireDate: _propTypes2.default.string.isRequired

};

Countdown.defaultProps = {
    viewSeconds: true,
    theme: 'default',
    isDark: false
};