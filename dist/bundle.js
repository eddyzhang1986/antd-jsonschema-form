/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _reactJsonschemaForm = __webpack_require__(1);

	var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var schema = {
	  title: "Todo",
	  type: "object",
	  required: ["title"],
	  properties: {
	    title: { type: "string", title: "Title", default: "A new task" },
	    done: { type: "boolean", title: "Done?", default: false }
	  }
	};

	var log = function log(type) {
	  return console.log.bind(console, type);
	};

	(0, _reactDom.render)(_react2.default.createElement(_reactJsonschemaForm2.default, { schema: schema,
	  onChange: log("changed"),
	  onSubmit: log("submitted"),
	  onError: log("errors") }), document.getElementById("main"));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Form = __webpack_require__(2);

	var _Form2 = _interopRequireDefault(_Form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Form2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _ErrorList = __webpack_require__(12);

	var _ErrorList2 = _interopRequireDefault(_ErrorList);

	var _utils = __webpack_require__(13);

	var _validate = __webpack_require__(46);

	var _validate2 = _interopRequireDefault(_validate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Form = function (_Component) {
	  _inherits(Form, _Component);

	  function Form(props) {
	    _classCallCheck(this, Form);

	    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

	    _this.onChange = function (formData) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { validate: false };

	      var mustValidate = !_this.props.noValidate && (_this.props.liveValidate || options.validate);
	      var state = { status: "editing", formData: formData };
	      if (mustValidate) {
	        var _this$validate = _this.validate(formData),
	            errors = _this$validate.errors,
	            errorSchema = _this$validate.errorSchema;

	        state = _extends({}, state, { errors: errors, errorSchema: errorSchema });
	      }
	      (0, _utils.setState)(_this, state, function () {
	        if (_this.props.onChange) {
	          _this.props.onChange(_this.state);
	        }
	      });
	    };

	    _this.onBlur = function () {
	      if (_this.props.onBlur) {
	        var _this$props;

	        (_this$props = _this.props).onBlur.apply(_this$props, arguments);
	      }
	    };

	    _this.onSubmit = function (event) {
	      event.preventDefault();
	      _this.setState({ status: "submitted" });

	      if (!_this.props.noValidate) {
	        var _this$validate2 = _this.validate(_this.state.formData),
	            errors = _this$validate2.errors,
	            errorSchema = _this$validate2.errorSchema;

	        if (Object.keys(errors).length > 0) {
	          (0, _utils.setState)(_this, { errors: errors, errorSchema: errorSchema }, function () {
	            if (_this.props.onError) {
	              _this.props.onError(errors);
	            } else {
	              console.error("Form validation failed", errors);
	            }
	          });
	          return;
	        }
	      }

	      if (_this.props.onSubmit) {
	        _this.props.onSubmit(_this.state);
	      }
	      _this.setState({ status: "initial", errors: [], errorSchema: {} });
	    };

	    _this.state = _this.getStateFromProps(props);
	    return _this;
	  }

	  _createClass(Form, [{
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState(this.getStateFromProps(nextProps));
	    }
	  }, {
	    key: "getStateFromProps",
	    value: function getStateFromProps(props) {
	      var state = this.state || {};
	      var schema = "schema" in props ? props.schema : this.props.schema;
	      var uiSchema = "uiSchema" in props ? props.uiSchema : this.props.uiSchema;
	      var edit = typeof props.formData !== "undefined";
	      var liveValidate = props.liveValidate || this.props.liveValidate;
	      var mustValidate = edit && !props.noValidate && liveValidate;
	      var definitions = schema.definitions;

	      var formData = (0, _utils.getDefaultFormState)(schema, props.formData, definitions);

	      var _ref = mustValidate ? this.validate(formData, schema) : {
	        errors: state.errors || [],
	        errorSchema: state.errorSchema || {}
	      },
	          errors = _ref.errors,
	          errorSchema = _ref.errorSchema;

	      var idSchema = (0, _utils.toIdSchema)(schema, uiSchema["ui:rootFieldId"], definitions);
	      return {
	        status: "initial",
	        schema: schema,
	        uiSchema: uiSchema,
	        idSchema: idSchema,
	        formData: formData,
	        edit: edit,
	        errors: errors,
	        errorSchema: errorSchema
	      };
	    }
	  }, {
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _utils.shouldRender)(this, nextProps, nextState);
	    }
	  }, {
	    key: "validate",
	    value: function validate(formData, schema) {
	      var _props = this.props,
	          validate = _props.validate,
	          transformErrors = _props.transformErrors;

	      return (0, _validate2.default)(formData, schema || this.props.schema, validate, transformErrors);
	    }
	  }, {
	    key: "renderErrors",
	    value: function renderErrors() {
	      var _state = this.state,
	          status = _state.status,
	          errors = _state.errors;
	      var _props2 = this.props,
	          ErrorList = _props2.ErrorList,
	          showErrorList = _props2.showErrorList;


	      if (status !== "editing" && errors.length && showErrorList != false) {
	        return _react2.default.createElement(ErrorList, { errors: errors });
	      }
	      return null;
	    }
	  }, {
	    key: "getRegistry",
	    value: function getRegistry() {
	      // For BC, accept passed SchemaField and TitleField props and pass them to
	      // the "fields" registry one.
	      var _getDefaultRegistry = (0, _utils.getDefaultRegistry)(),
	          fields = _getDefaultRegistry.fields,
	          widgets = _getDefaultRegistry.widgets;

	      return {
	        fields: _extends({}, fields, this.props.fields),
	        widgets: _extends({}, widgets, this.props.widgets),
	        ArrayFieldTemplate: this.props.ArrayFieldTemplate,
	        FieldTemplate: this.props.FieldTemplate,
	        definitions: this.props.schema.definitions || {},
	        formContext: this.props.formContext || {}
	      };
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _props3 = this.props,
	          children = _props3.children,
	          safeRenderCompletion = _props3.safeRenderCompletion,
	          id = _props3.id,
	          className = _props3.className,
	          name = _props3.name,
	          method = _props3.method,
	          target = _props3.target,
	          action = _props3.action,
	          autocomplete = _props3.autocomplete,
	          enctype = _props3.enctype,
	          acceptcharset = _props3.acceptcharset,
	          noHtml5Validate = _props3.noHtml5Validate;
	      var _state2 = this.state,
	          schema = _state2.schema,
	          uiSchema = _state2.uiSchema,
	          formData = _state2.formData,
	          errorSchema = _state2.errorSchema,
	          idSchema = _state2.idSchema;

	      var registry = this.getRegistry();
	      var _SchemaField = registry.fields.SchemaField;

	      return _react2.default.createElement(
	        "form",
	        {
	          className: className ? className : "rjsf",
	          id: id,
	          name: name,
	          method: method,
	          target: target,
	          action: action,
	          autoComplete: autocomplete,
	          encType: enctype,
	          acceptCharset: acceptcharset,
	          noValidate: noHtml5Validate,
	          onSubmit: this.onSubmit },
	        this.renderErrors(),
	        _react2.default.createElement(_SchemaField, {
	          schema: schema,
	          uiSchema: uiSchema,
	          errorSchema: errorSchema,
	          idSchema: idSchema,
	          formData: formData,
	          onChange: this.onChange,
	          onBlur: this.onBlur,
	          registry: registry,
	          safeRenderCompletion: safeRenderCompletion
	        }),
	        children ? children : _react2.default.createElement(
	          "p",
	          null,
	          _react2.default.createElement(
	            "button",
	            { type: "submit", className: "btn btn-info" },
	            "Submit"
	          )
	        )
	      );
	    }
	  }]);

	  return Form;
	}(_react.Component);

	Form.defaultProps = {
	  uiSchema: {},
	  noValidate: false,
	  liveValidate: false,
	  safeRenderCompletion: false,
	  noHtml5Validate: false,
	  ErrorList: _ErrorList2.default
	};
	exports.default = Form;


	if (process.env.NODE_ENV !== "production") {
	  Form.propTypes = {
	    schema: _propTypes2.default.object.isRequired,
	    uiSchema: _propTypes2.default.object,
	    formData: _propTypes2.default.any,
	    widgets: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object])),
	    fields: _propTypes2.default.objectOf(_propTypes2.default.func),
	    ArrayFieldTemplate: _propTypes2.default.func,
	    FieldTemplate: _propTypes2.default.func,
	    ErrorList: _propTypes2.default.func,
	    onChange: _propTypes2.default.func,
	    onError: _propTypes2.default.func,
	    showErrorList: _propTypes2.default.bool,
	    onSubmit: _propTypes2.default.func,
	    id: _propTypes2.default.string,
	    className: _propTypes2.default.string,
	    name: _propTypes2.default.string,
	    method: _propTypes2.default.string,
	    target: _propTypes2.default.string,
	    action: _propTypes2.default.string,
	    autocomplete: _propTypes2.default.string,
	    enctype: _propTypes2.default.string,
	    acceptcharset: _propTypes2.default.string,
	    noValidate: _propTypes2.default.bool,
	    noHtml5Validate: _propTypes2.default.bool,
	    liveValidate: _propTypes2.default.bool,
	    validate: _propTypes2.default.func,
	    transformErrors: _propTypes2.default.func,
	    safeRenderCompletion: _propTypes2.default.bool,
	    formContext: _propTypes2.default.object
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(5)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(11)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(6);
	var invariant = __webpack_require__(7);
	var warning = __webpack_require__(8);

	var ReactPropTypesSecret = __webpack_require__(9);
	var checkPropTypes = __webpack_require__(10);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(6);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(7);
	  var warning = __webpack_require__(8);
	  var ReactPropTypesSecret = __webpack_require__(9);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(6);
	var invariant = __webpack_require__(7);
	var ReactPropTypesSecret = __webpack_require__(9);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ErrorList;

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ErrorList(props) {
	  var errors = props.errors;

	  return _react2.default.createElement(
	    "div",
	    { className: "panel panel-danger errors" },
	    _react2.default.createElement(
	      "div",
	      { className: "panel-heading" },
	      _react2.default.createElement(
	        "h3",
	        { className: "panel-title" },
	        "Errors"
	      )
	    ),
	    _react2.default.createElement(
	      "ul",
	      { className: "list-group" },
	      errors.map(function (error, i) {
	        return _react2.default.createElement(
	          "li",
	          { key: i, className: "list-group-item text-danger" },
	          error.stack
	        );
	      })
	    )
	  );
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.getDefaultRegistry = getDefaultRegistry;
	exports.getWidget = getWidget;
	exports.getDefaultFormState = getDefaultFormState;
	exports.getUiOptions = getUiOptions;
	exports.isObject = isObject;
	exports.mergeObjects = mergeObjects;
	exports.asNumber = asNumber;
	exports.orderProperties = orderProperties;
	exports.isMultiSelect = isMultiSelect;
	exports.isFilesArray = isFilesArray;
	exports.isFixedItems = isFixedItems;
	exports.allowAdditionalItems = allowAdditionalItems;
	exports.optionsList = optionsList;
	exports.retrieveSchema = retrieveSchema;
	exports.deepEquals = deepEquals;
	exports.shouldRender = shouldRender;
	exports.toIdSchema = toIdSchema;
	exports.parseDateString = parseDateString;
	exports.toDateString = toDateString;
	exports.pad = pad;
	exports.setState = setState;
	exports.dataURItoBlob = dataURItoBlob;
	exports.rangeSpec = rangeSpec;

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var widgetMap = {
	  boolean: {
	    checkbox: "CheckboxWidget",
	    radio: "RadioWidget",
	    select: "SelectWidget",
	    hidden: "HiddenWidget"
	  },
	  string: {
	    text: "TextWidget",
	    password: "PasswordWidget",
	    email: "EmailWidget",
	    hostname: "TextWidget",
	    ipv4: "TextWidget",
	    ipv6: "TextWidget",
	    uri: "URLWidget",
	    "data-url": "FileWidget",
	    radio: "RadioWidget",
	    select: "SelectWidget",
	    textarea: "TextareaWidget",
	    hidden: "HiddenWidget",
	    date: "DateWidget",
	    datetime: "DateTimeWidget",
	    "date-time": "DateTimeWidget",
	    "alt-date": "AltDateWidget",
	    "alt-datetime": "AltDateTimeWidget",
	    color: "ColorWidget",
	    file: "FileWidget"
	  },
	  number: {
	    text: "TextWidget",
	    select: "SelectWidget",
	    updown: "UpDownWidget",
	    range: "RangeWidget",
	    radio: "RadioWidget",
	    hidden: "HiddenWidget"
	  },
	  integer: {
	    text: "TextWidget",
	    select: "SelectWidget",
	    updown: "UpDownWidget",
	    range: "RangeWidget",
	    radio: "RadioWidget",
	    hidden: "HiddenWidget"
	  },
	  array: {
	    select: "SelectWidget",
	    checkboxes: "CheckboxesWidget",
	    files: "FileWidget"
	  }
	};

	function getDefaultRegistry() {
	  return {
	    fields: __webpack_require__(16).default,
	    widgets: __webpack_require__(26).default,
	    definitions: {},
	    formContext: {}
	  };
	}

	function getWidget(schema, widget) {
	  var registeredWidgets = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var type = schema.type;


	  function mergeOptions(Widget) {
	    // cache return value as property of widget for proper react reconciliation
	    if (!Widget.MergedWidget) {
	      var defaultOptions = Widget.defaultProps && Widget.defaultProps.options || {};
	      Widget.MergedWidget = function (_ref) {
	        var _ref$options = _ref.options,
	            options = _ref$options === undefined ? {} : _ref$options,
	            props = _objectWithoutProperties(_ref, ["options"]);

	        return _react2.default.createElement(Widget, _extends({ options: _extends({}, defaultOptions, options) }, props));
	      };
	    }
	    return Widget.MergedWidget;
	  }

	  if (typeof widget === "function") {
	    return mergeOptions(widget);
	  }

	  if (typeof widget !== "string") {
	    throw new Error("Unsupported widget definition: " + (typeof widget === "undefined" ? "undefined" : _typeof(widget)));
	  }

	  if (registeredWidgets.hasOwnProperty(widget)) {
	    var registeredWidget = registeredWidgets[widget];
	    return getWidget(schema, registeredWidget, registeredWidgets);
	  }

	  if (!widgetMap.hasOwnProperty(type)) {
	    throw new Error("No widget for type \"" + type + "\"");
	  }

	  if (widgetMap[type].hasOwnProperty(widget)) {
	    var _registeredWidget = registeredWidgets[widgetMap[type][widget]];
	    return getWidget(schema, _registeredWidget, registeredWidgets);
	  }

	  throw new Error("No widget \"" + widget + "\" for type \"" + type + "\"");
	}

	function computeDefaults(schema, parentDefaults) {
	  var definitions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  // Compute the defaults recursively: give highest priority to deepest nodes.
	  var defaults = parentDefaults;
	  if (isObject(defaults) && isObject(schema.default)) {
	    // For object defaults, only override parent defaults that are defined in
	    // schema.default.
	    defaults = mergeObjects(defaults, schema.default);
	  } else if ("default" in schema) {
	    // Use schema defaults for this node.
	    defaults = schema.default;
	  } else if ("$ref" in schema) {
	    // Use referenced schema defaults for this node.
	    var refSchema = findSchemaDefinition(schema.$ref, definitions);
	    return computeDefaults(refSchema, defaults, definitions);
	  } else if (isFixedItems(schema)) {
	    defaults = schema.items.map(function (itemSchema) {
	      return computeDefaults(itemSchema, undefined, definitions);
	    });
	  }
	  // Not defaults defined for this node, fallback to generic typed ones.
	  if (typeof defaults === "undefined") {
	    defaults = schema.default;
	  }

	  switch (schema.type) {
	    // We need to recur for object schema inner default values.
	    case "object":
	      return Object.keys(schema.properties || {}).reduce(function (acc, key) {
	        // Compute the defaults for this node, with the parent defaults we might
	        // have from a previous run: defaults[key].
	        acc[key] = computeDefaults(schema.properties[key], (defaults || {})[key], definitions);
	        return acc;
	      }, {});

	    case "array":
	      if (schema.minItems) {
	        return new Array(schema.minItems).fill(computeDefaults(schema.items, defaults, definitions));
	      }
	  }
	  return defaults;
	}

	function getDefaultFormState(_schema, formData) {
	  var definitions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  if (!isObject(_schema)) {
	    throw new Error("Invalid schema: " + _schema);
	  }
	  var schema = retrieveSchema(_schema, definitions);
	  var defaults = computeDefaults(schema, _schema.default, definitions);
	  if (typeof formData === "undefined") {
	    // No form data? Use schema defaults.
	    return defaults;
	  }
	  if (isObject(formData)) {
	    // Override schema defaults with form data.
	    return mergeObjects(defaults, formData);
	  }
	  return formData || defaults;
	}

	function getUiOptions(uiSchema) {
	  // get all passed options from ui:widget, ui:options, and ui:<optionName>
	  return Object.keys(uiSchema).filter(function (key) {
	    return key.indexOf("ui:") === 0;
	  }).reduce(function (options, key) {
	    var value = uiSchema[key];

	    if (key === "ui:widget" && isObject(value)) {
	      console.warn("Setting options via ui:widget object is deprecated, use ui:options instead");
	      return _extends({}, options, value.options || {}, {
	        widget: value.component
	      });
	    }
	    if (key === "ui:options" && isObject(value)) {
	      return _extends({}, options, value);
	    }
	    return _extends({}, options, _defineProperty({}, key.substring(3), value));
	  }, {});
	}

	function isObject(thing) {
	  return (typeof thing === "undefined" ? "undefined" : _typeof(thing)) === "object" && thing !== null && !Array.isArray(thing);
	}

	function mergeObjects(obj1, obj2) {
	  var concatArrays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	  // Recursively merge deeply nested objects.
	  var acc = Object.assign({}, obj1); // Prevent mutation of source object.
	  return Object.keys(obj2).reduce(function (acc, key) {
	    var left = obj1[key],
	        right = obj2[key];
	    if (obj1.hasOwnProperty(key) && isObject(right)) {
	      acc[key] = mergeObjects(left, right, concatArrays);
	    } else if (concatArrays && Array.isArray(left) && Array.isArray(right)) {
	      acc[key] = left.concat(right);
	    } else {
	      acc[key] = right;
	    }
	    return acc;
	  }, acc);
	}

	function asNumber(value) {
	  if (value === "") {
	    return undefined;
	  }
	  if (/\.$/.test(value)) {
	    // "3." can't really be considered a number even if it parses in js. The
	    // user is most likely entering a float.
	    return value;
	  }
	  if (/\.0$/.test(value)) {
	    // we need to return this as a string here, to allow for input like 3.07
	    return value;
	  }
	  var n = Number(value);
	  var valid = typeof n === "number" && !Number.isNaN(n);

	  if (/\.\d*0$/.test(value)) {
	    // It's a number, that's cool - but we need it as a string so it doesn't screw
	    // with the user when entering dollar amounts or other values (such as those with
	    // specific precision or number of significant digits)
	    return value;
	  }

	  return valid ? n : value;
	}

	function orderProperties(properties, order) {
	  if (!Array.isArray(order)) {
	    return properties;
	  }

	  var arrayToHash = function arrayToHash(arr) {
	    return arr.reduce(function (prev, curr) {
	      prev[curr] = true;
	      return prev;
	    }, {});
	  };
	  var errorPropList = function errorPropList(arr) {
	    return arr.length > 1 ? "properties '" + arr.join("', '") + "'" : "property '" + arr[0] + "'";
	  };
	  var propertyHash = arrayToHash(properties);
	  var orderHash = arrayToHash(order);
	  var extraneous = order.filter(function (prop) {
	    return prop !== "*" && !propertyHash[prop];
	  });
	  if (extraneous.length) {
	    throw new Error("uiSchema order list contains extraneous " + errorPropList(extraneous));
	  }
	  var rest = properties.filter(function (prop) {
	    return !orderHash[prop];
	  });
	  var restIndex = order.indexOf("*");
	  if (restIndex === -1) {
	    if (rest.length) {
	      throw new Error("uiSchema order list does not contain " + errorPropList(rest));
	    }
	    return order;
	  }
	  if (restIndex !== order.lastIndexOf("*")) {
	    throw new Error("uiSchema order list contains more than one wildcard item");
	  }

	  var complete = [].concat(_toConsumableArray(order));
	  complete.splice.apply(complete, [restIndex, 1].concat(_toConsumableArray(rest)));
	  return complete;
	}

	function isMultiSelect(schema) {
	  return schema.items ? Array.isArray(schema.items.enum) && schema.uniqueItems : false;
	}

	function isFilesArray(schema, uiSchema) {
	  return schema.items && schema.items.type === "string" && schema.items.format === "data-url" || uiSchema["ui:widget"] === "files";
	}

	function isFixedItems(schema) {
	  return Array.isArray(schema.items) && schema.items.length > 0 && schema.items.every(function (item) {
	    return isObject(item);
	  });
	}

	function allowAdditionalItems(schema) {
	  if (schema.additionalItems === true) {
	    console.warn("additionalItems=true is currently not supported");
	  }
	  return isObject(schema.additionalItems);
	}

	function optionsList(schema) {
	  return schema.enum.map(function (value, i) {
	    var label = schema.enumNames && schema.enumNames[i] || String(value);
	    return { label: label, value: value };
	  });
	}

	function findSchemaDefinition($ref) {
	  var definitions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  // Extract and use the referenced definition if we have it.
	  var match = /^#\/definitions\/(.*)$/.exec($ref);
	  if (match && match[1]) {
	    var parts = match[1].split("/");
	    var current = definitions;
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var part = _step.value;

	        part = part.replace(/~1/g, "/").replace(/~0/g, "~");
	        if (current.hasOwnProperty(part)) {
	          current = current[part];
	        } else {
	          // No matching definition found, that's an error (bogus schema?)
	          throw new Error("Could not find a definition for " + $ref + ".");
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }

	    return current;
	  }

	  // No matching definition found, that's an error (bogus schema?)
	  throw new Error("Could not find a definition for " + $ref + ".");
	}

	function retrieveSchema(schema) {
	  var definitions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  // No $ref attribute found, returning the original schema.
	  if (!schema.hasOwnProperty("$ref")) {
	    return schema;
	  }
	  // Retrieve the referenced schema definition.
	  var $refSchema = findSchemaDefinition(schema.$ref, definitions);
	  // Drop the $ref property of the source schema.

	  var $ref = schema.$ref,
	      localSchema = _objectWithoutProperties(schema, ["$ref"]);
	  // Update referenced schema definition with local schema properties.


	  return _extends({}, $refSchema, localSchema);
	}

	function isArguments(object) {
	  return Object.prototype.toString.call(object) === "[object Arguments]";
	}

	function deepEquals(a, b) {
	  var ca = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	  var cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

	  // Partially extracted from node-deeper and adapted to exclude comparison
	  // checks for functions.
	  // https://github.com/othiym23/node-deeper
	  if (a === b) {
	    return true;
	  } else if (typeof a === "function" || typeof b === "function") {
	    // Assume all functions are equivalent
	    // see https://github.com/mozilla-services/react-jsonschema-form/issues/255
	    return true;
	  } else if ((typeof a === "undefined" ? "undefined" : _typeof(a)) !== "object" || (typeof b === "undefined" ? "undefined" : _typeof(b)) !== "object") {
	    return false;
	  } else if (a === null || b === null) {
	    return false;
	  } else if (a instanceof Date && b instanceof Date) {
	    return a.getTime() === b.getTime();
	  } else if (a instanceof RegExp && b instanceof RegExp) {
	    return a.source === b.source && a.global === b.global && a.multiline === b.multiline && a.lastIndex === b.lastIndex && a.ignoreCase === b.ignoreCase;
	  } else if (isArguments(a) || isArguments(b)) {
	    if (!(isArguments(a) && isArguments(b))) {
	      return false;
	    }
	    var slice = Array.prototype.slice;
	    return deepEquals(slice.call(a), slice.call(b), ca, cb);
	  } else {
	    if (a.constructor !== b.constructor) {
	      return false;
	    }

	    var ka = Object.keys(a);
	    var kb = Object.keys(b);
	    // don't bother with stack acrobatics if there's nothing there
	    if (ka.length === 0 && kb.length === 0) {
	      return true;
	    }
	    if (ka.length !== kb.length) {
	      return false;
	    }

	    var cal = ca.length;
	    while (cal--) {
	      if (ca[cal] === a) {
	        return cb[cal] === b;
	      }
	    }
	    ca.push(a);
	    cb.push(b);

	    ka.sort();
	    kb.sort();
	    for (var j = ka.length - 1; j >= 0; j--) {
	      if (ka[j] !== kb[j]) {
	        return false;
	      }
	    }

	    var key = void 0;
	    for (var k = ka.length - 1; k >= 0; k--) {
	      key = ka[k];
	      if (!deepEquals(a[key], b[key], ca, cb)) {
	        return false;
	      }
	    }

	    ca.pop();
	    cb.pop();

	    return true;
	  }
	}

	function shouldRender(comp, nextProps, nextState) {
	  var props = comp.props,
	      state = comp.state;

	  return !deepEquals(props, nextProps) || !deepEquals(state, nextState);
	}

	function toIdSchema(schema, id, definitions) {
	  var idSchema = {
	    $id: id || "root"
	  };
	  if ("$ref" in schema) {
	    var _schema = retrieveSchema(schema, definitions);
	    return toIdSchema(_schema, id, definitions);
	  }
	  if ("items" in schema && !schema.items.$ref) {
	    return toIdSchema(schema.items, id, definitions);
	  }
	  if (schema.type !== "object") {
	    return idSchema;
	  }
	  for (var name in schema.properties || {}) {
	    var field = schema.properties[name];
	    var fieldId = idSchema.$id + "_" + name;
	    idSchema[name] = toIdSchema(field, fieldId, definitions);
	  }
	  return idSchema;
	}

	function parseDateString(dateString) {
	  var includeTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	  if (!dateString) {
	    return {
	      year: -1,
	      month: -1,
	      day: -1,
	      hour: includeTime ? -1 : 0,
	      minute: includeTime ? -1 : 0,
	      second: includeTime ? -1 : 0
	    };
	  }
	  var date = new Date(dateString);
	  if (Number.isNaN(date.getTime())) {
	    throw new Error("Unable to parse date " + dateString);
	  }
	  return {
	    year: date.getUTCFullYear(),
	    month: date.getUTCMonth() + 1, // oh you, javascript.
	    day: date.getUTCDate(),
	    hour: includeTime ? date.getUTCHours() : 0,
	    minute: includeTime ? date.getUTCMinutes() : 0,
	    second: includeTime ? date.getUTCSeconds() : 0
	  };
	}

	function toDateString(_ref2) {
	  var year = _ref2.year,
	      month = _ref2.month,
	      day = _ref2.day,
	      _ref2$hour = _ref2.hour,
	      hour = _ref2$hour === undefined ? 0 : _ref2$hour,
	      _ref2$minute = _ref2.minute,
	      minute = _ref2$minute === undefined ? 0 : _ref2$minute,
	      _ref2$second = _ref2.second,
	      second = _ref2$second === undefined ? 0 : _ref2$second;
	  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	  var utcTime = Date.UTC(year, month - 1, day, hour, minute, second);
	  var datetime = new Date(utcTime).toJSON();
	  return time ? datetime : datetime.slice(0, 10);
	}

	function pad(num, size) {
	  var s = String(num);
	  while (s.length < size) {
	    s = "0" + s;
	  }
	  return s;
	}

	function setState(instance, state, callback) {
	  var safeRenderCompletion = instance.props.safeRenderCompletion;

	  if (safeRenderCompletion) {
	    instance.setState(state, callback);
	  } else {
	    instance.setState(state);
	    setImmediate(callback);
	  }
	}

	function dataURItoBlob(dataURI) {
	  // Split metadata from data
	  var splitted = dataURI.split(",");
	  // Split params
	  var params = splitted[0].split(";");
	  // Get mime-type from params
	  var type = params[0].replace("data:", "");
	  // Filter the name property from params
	  var properties = params.filter(function (param) {
	    return param.split("=")[0] === "name";
	  });
	  // Look for the name and use unknown if no name property.
	  var name = void 0;
	  if (properties.length !== 1) {
	    name = "unknown";
	  } else {
	    // Because we filtered out the other property,
	    // we only have the name case here.
	    name = properties[0].split("=")[1];
	  }

	  // Built the Uint8Array Blob parameter from the base64 string.
	  var binary = atob(splitted[1]);
	  var array = [];
	  for (var i = 0; i < binary.length; i++) {
	    array.push(binary.charCodeAt(i));
	  }
	  // Create the blob object
	  var blob = new window.Blob([new Uint8Array(array)], { type: type });

	  return { blob: blob, name: name };
	}

	function rangeSpec(schema) {
	  var spec = {};
	  if (schema.multipleOf) {
	    spec.step = schema.multipleOf;
	  }
	  if (schema.minimum || schema.minimum === 0) {
	    spec.min = schema.minimum;
	  }
	  if (schema.maximum || schema.maximum === 0) {
	    spec.max = schema.maximum;
	  }
	  return spec;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14).setImmediate))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var apply = Function.prototype.apply;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// setimmediate attaches itself to the global object
	__webpack_require__(15);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14).setImmediate, __webpack_require__(14).clearImmediate))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
	    "use strict";

	    if (global.setImmediate) {
	        return;
	    }

	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;

	    function setImmediate(callback) {
	      // Callback can either be a function or a string
	      if (typeof callback !== "function") {
	        callback = new Function("" + callback);
	      }
	      // Copy function arguments
	      var args = new Array(arguments.length - 1);
	      for (var i = 0; i < args.length; i++) {
	          args[i] = arguments[i + 1];
	      }
	      // Store and register the task
	      var task = { callback: callback, args: args };
	      tasksByHandle[nextHandle] = task;
	      registerImmediate(nextHandle);
	      return nextHandle++;
	    }

	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }

	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	        case 0:
	            callback();
	            break;
	        case 1:
	            callback(args[0]);
	            break;
	        case 2:
	            callback(args[0], args[1]);
	            break;
	        case 3:
	            callback(args[0], args[1], args[2]);
	            break;
	        default:
	            callback.apply(undefined, args);
	            break;
	        }
	    }

	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }

	    function installNextTickImplementation() {
	        registerImmediate = function(handle) {
	            process.nextTick(function () { runIfPresent(handle); });
	        };
	    }

	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function() {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }

	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function(event) {
	            if (event.source === global &&
	                typeof event.data === "string" &&
	                event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };

	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }

	        registerImmediate = function(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }

	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function(event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };

	        registerImmediate = function(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }

	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }

	    function installSetTimeoutImplementation() {
	        registerImmediate = function(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }

	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();

	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();

	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();

	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();

	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }

	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(3)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ArrayField = __webpack_require__(17);

	var _ArrayField2 = _interopRequireDefault(_ArrayField);

	var _BooleanField = __webpack_require__(18);

	var _BooleanField2 = _interopRequireDefault(_BooleanField);

	var _DescriptionField = __webpack_require__(19);

	var _DescriptionField2 = _interopRequireDefault(_DescriptionField);

	var _NumberField = __webpack_require__(20);

	var _NumberField2 = _interopRequireDefault(_NumberField);

	var _ObjectField = __webpack_require__(21);

	var _ObjectField2 = _interopRequireDefault(_ObjectField);

	var _SchemaField = __webpack_require__(22);

	var _SchemaField2 = _interopRequireDefault(_SchemaField);

	var _StringField = __webpack_require__(24);

	var _StringField2 = _interopRequireDefault(_StringField);

	var _TitleField = __webpack_require__(25);

	var _TitleField2 = _interopRequireDefault(_TitleField);

	var _UnsupportedField = __webpack_require__(23);

	var _UnsupportedField2 = _interopRequireDefault(_UnsupportedField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  ArrayField: _ArrayField2.default,
	  BooleanField: _BooleanField2.default,
	  DescriptionField: _DescriptionField2.default,
	  NumberField: _NumberField2.default,
	  ObjectField: _ObjectField2.default,
	  SchemaField: _SchemaField2.default,
	  StringField: _StringField2.default,
	  TitleField: _TitleField2.default,
	  UnsupportedField: _UnsupportedField2.default
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _utils = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function ArrayFieldTitle(_ref) {
	  var TitleField = _ref.TitleField,
	      idSchema = _ref.idSchema,
	      title = _ref.title,
	      required = _ref.required;

	  if (!title) {
	    // See #312: Ensure compatibility with old versions of React.
	    return _react2.default.createElement("div", null);
	  }
	  var id = idSchema.$id + "__title";
	  return _react2.default.createElement(TitleField, { id: id, title: title, required: required });
	}

	function ArrayFieldDescription(_ref2) {
	  var DescriptionField = _ref2.DescriptionField,
	      idSchema = _ref2.idSchema,
	      description = _ref2.description;

	  if (!description) {
	    // See #312: Ensure compatibility with old versions of React.
	    return _react2.default.createElement("div", null);
	  }
	  var id = idSchema.$id + "__description";
	  return _react2.default.createElement(DescriptionField, { id: id, description: description });
	}

	function IconBtn(props) {
	  var _props$type = props.type,
	      type = _props$type === undefined ? "default" : _props$type,
	      icon = props.icon,
	      className = props.className,
	      otherProps = _objectWithoutProperties(props, ["type", "icon", "className"]);

	  return _react2.default.createElement(
	    "button",
	    _extends({
	      type: "button",
	      className: "btn btn-" + type + " " + className
	    }, otherProps),
	    _react2.default.createElement("i", { className: "glyphicon glyphicon-" + icon })
	  );
	}

	// Used in the two templates
	function DefaultArrayItem(props) {
	  var btnStyle = {
	    flex: 1,
	    paddingLeft: 6,
	    paddingRight: 6,
	    fontWeight: "bold"
	  };
	  return _react2.default.createElement(
	    "div",
	    { key: props.index, className: props.className },
	    _react2.default.createElement(
	      "div",
	      { className: props.hasToolbar ? "col-xs-9" : "col-xs-12" },
	      props.children
	    ),
	    props.hasToolbar && _react2.default.createElement(
	      "div",
	      { className: "col-xs-3 array-item-toolbox" },
	      _react2.default.createElement(
	        "div",
	        {
	          className: "btn-group",
	          style: { display: "flex", justifyContent: "space-around" } },
	        (props.hasMoveUp || props.hasMoveDown) && _react2.default.createElement(IconBtn, {
	          icon: "arrow-up",
	          className: "array-item-move-up",
	          tabIndex: "-1",
	          style: btnStyle,
	          disabled: props.disabled || props.readonly || !props.hasMoveUp,
	          onClick: props.onReorderClick(props.index, props.index - 1)
	        }),
	        (props.hasMoveUp || props.hasMoveDown) && _react2.default.createElement(IconBtn, {
	          icon: "arrow-down",
	          className: "array-item-move-down",
	          tabIndex: "-1",
	          style: btnStyle,
	          disabled: props.disabled || props.readonly || !props.hasMoveDown,
	          onClick: props.onReorderClick(props.index, props.index + 1)
	        }),
	        props.hasRemove && _react2.default.createElement(IconBtn, {
	          type: "danger",
	          icon: "remove",
	          className: "array-item-remove",
	          tabIndex: "-1",
	          style: btnStyle,
	          disabled: props.disabled || props.readonly,
	          onClick: props.onDropIndexClick(props.index)
	        })
	      )
	    )
	  );
	}

	function DefaultFixedArrayFieldTemplate(props) {
	  return _react2.default.createElement(
	    "fieldset",
	    { className: props.className },
	    _react2.default.createElement(ArrayFieldTitle, {
	      key: "array-field-title-" + props.idSchema.$id,
	      TitleField: props.TitleField,
	      idSchema: props.idSchema,
	      title: props.title,
	      required: props.required
	    }),
	    props.schema.description && _react2.default.createElement(
	      "div",
	      {
	        className: "field-description",
	        key: "field-description-" + props.idSchema.$id },
	      props.schema.description
	    ),
	    _react2.default.createElement(
	      "div",
	      {
	        className: "row array-item-list",
	        key: "array-item-list-" + props.idSchema.$id },
	      props.items && props.items.map(DefaultArrayItem)
	    ),
	    props.canAdd && _react2.default.createElement(AddButton, {
	      onClick: props.onAddClick,
	      disabled: props.disabled || props.readonly
	    })
	  );
	}

	function DefaultNormalArrayFieldTemplate(props) {
	  return _react2.default.createElement(
	    "fieldset",
	    { className: props.className },
	    _react2.default.createElement(ArrayFieldTitle, {
	      key: "array-field-title-" + props.idSchema.$id,
	      TitleField: props.TitleField,
	      idSchema: props.idSchema,
	      title: props.title,
	      required: props.required
	    }),
	    props.schema.description && _react2.default.createElement(ArrayFieldDescription, {
	      key: "array-field-description-" + props.idSchema.$id,
	      DescriptionField: props.DescriptionField,
	      idSchema: props.idSchema,
	      description: props.schema.description
	    }),
	    _react2.default.createElement(
	      "div",
	      {
	        className: "row array-item-list",
	        key: "array-item-list-" + props.idSchema.$id },
	      props.items && props.items.map(function (p) {
	        return DefaultArrayItem(p);
	      })
	    ),
	    props.canAdd && _react2.default.createElement(AddButton, {
	      onClick: props.onAddClick,
	      disabled: props.disabled || props.readonly
	    })
	  );
	}

	var ArrayField = function (_Component) {
	  _inherits(ArrayField, _Component);

	  function ArrayField() {
	    var _ref3;

	    var _temp, _this, _ret;

	    _classCallCheck(this, ArrayField);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = ArrayField.__proto__ || Object.getPrototypeOf(ArrayField)).call.apply(_ref3, [this].concat(args))), _this), _this.onAddClick = function (event) {
	      event.preventDefault();
	      var _this$props = _this.props,
	          schema = _this$props.schema,
	          formData = _this$props.formData,
	          _this$props$registry = _this$props.registry,
	          registry = _this$props$registry === undefined ? (0, _utils.getDefaultRegistry)() : _this$props$registry;
	      var definitions = registry.definitions;

	      var itemSchema = schema.items;
	      if ((0, _utils.isFixedItems)(schema) && (0, _utils.allowAdditionalItems)(schema)) {
	        itemSchema = schema.additionalItems;
	      }
	      _this.props.onChange([].concat(_toConsumableArray(formData), [(0, _utils.getDefaultFormState)(itemSchema, undefined, definitions)]), { validate: false });
	    }, _this.onDropIndexClick = function (index) {
	      return function (event) {
	        if (event) {
	          event.preventDefault();
	        }
	        var _this$props2 = _this.props,
	            formData = _this$props2.formData,
	            onChange = _this$props2.onChange;
	        // refs #195: revalidate to ensure properly reindexing errors

	        onChange(formData.filter(function (_, i) {
	          return i !== index;
	        }), { validate: true });
	      };
	    }, _this.onReorderClick = function (index, newIndex) {
	      return function (event) {
	        if (event) {
	          event.preventDefault();
	          event.target.blur();
	        }
	        var _this$props3 = _this.props,
	            formData = _this$props3.formData,
	            onChange = _this$props3.onChange;

	        onChange(formData.map(function (item, i) {
	          if (i === newIndex) {
	            return formData[index];
	          } else if (i === index) {
	            return formData[newIndex];
	          } else {
	            return item;
	          }
	        }), { validate: true });
	      };
	    }, _this.onChangeForIndex = function (index) {
	      return function (value) {
	        var _this$props4 = _this.props,
	            formData = _this$props4.formData,
	            onChange = _this$props4.onChange;

	        var newFormData = formData.map(function (item, i) {
	          // We need to treat undefined items as nulls to have validation.
	          // See https://github.com/tdegrunt/jsonschema/issues/206
	          var jsonValue = typeof value === "undefined" ? null : value;
	          return index === i ? jsonValue : item;
	        });
	        onChange(newFormData, { validate: false });
	      };
	    }, _this.onSelectChange = function (value) {
	      _this.props.onChange(value, { validate: false });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ArrayField, [{
	    key: "isItemRequired",
	    value: function isItemRequired(itemSchema) {
	      if (Array.isArray(itemSchema.type)) {
	        // While we don't yet support composite/nullable jsonschema types, it's
	        // future-proof to check for requirement against these.
	        return !itemSchema.type.includes("null");
	      }
	      // All non-null array item types are inherently required by design
	      return itemSchema.type !== "null";
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _props = this.props,
	          schema = _props.schema,
	          uiSchema = _props.uiSchema;

	      if ((0, _utils.isFilesArray)(schema, uiSchema)) {
	        return this.renderFiles();
	      }
	      if ((0, _utils.isFixedItems)(schema)) {
	        return this.renderFixedArray();
	      }
	      if ((0, _utils.isMultiSelect)(schema)) {
	        return this.renderMultiSelect();
	      }
	      return this.renderNormalArray();
	    }
	  }, {
	    key: "renderNormalArray",
	    value: function renderNormalArray() {
	      var _this2 = this;

	      var _props2 = this.props,
	          schema = _props2.schema,
	          uiSchema = _props2.uiSchema,
	          formData = _props2.formData,
	          errorSchema = _props2.errorSchema,
	          idSchema = _props2.idSchema,
	          name = _props2.name,
	          required = _props2.required,
	          disabled = _props2.disabled,
	          readonly = _props2.readonly,
	          autofocus = _props2.autofocus,
	          _props2$registry = _props2.registry,
	          registry = _props2$registry === undefined ? (0, _utils.getDefaultRegistry)() : _props2$registry,
	          formContext = _props2.formContext,
	          onBlur = _props2.onBlur;

	      var title = schema.title === undefined ? name : schema.title;
	      var ArrayFieldTemplate = registry.ArrayFieldTemplate,
	          definitions = registry.definitions,
	          fields = registry.fields;
	      var TitleField = fields.TitleField,
	          DescriptionField = fields.DescriptionField;

	      var itemsSchema = (0, _utils.retrieveSchema)(schema.items, definitions);

	      var _getUiOptions = (0, _utils.getUiOptions)(uiSchema),
	          _getUiOptions$addable = _getUiOptions.addable,
	          addable = _getUiOptions$addable === undefined ? true : _getUiOptions$addable;

	      var arrayProps = {
	        canAdd: addable,
	        items: formData.map(function (item, index) {
	          var itemErrorSchema = errorSchema ? errorSchema[index] : undefined;
	          var itemIdPrefix = idSchema.$id + "_" + index;
	          var itemIdSchema = (0, _utils.toIdSchema)(itemsSchema, itemIdPrefix, definitions);
	          return _this2.renderArrayFieldItem({
	            index: index,
	            canMoveUp: index > 0,
	            canMoveDown: index < formData.length - 1,
	            itemSchema: itemsSchema,
	            itemIdSchema: itemIdSchema,
	            itemErrorSchema: itemErrorSchema,
	            itemData: formData[index],
	            itemUiSchema: uiSchema.items,
	            autofocus: autofocus && index === 0,
	            onBlur: onBlur
	          });
	        }),
	        className: "field field-array field-array-of-" + itemsSchema.type,
	        DescriptionField: DescriptionField,
	        disabled: disabled,
	        idSchema: idSchema,
	        uiSchema: uiSchema,
	        onAddClick: this.onAddClick,
	        readonly: readonly,
	        required: required,
	        schema: schema,
	        title: title,
	        TitleField: TitleField,
	        formContext: formContext
	      };

	      // Check if a custom render function was passed in
	      var Component = ArrayFieldTemplate || DefaultNormalArrayFieldTemplate;
	      return _react2.default.createElement(Component, arrayProps);
	    }
	  }, {
	    key: "renderMultiSelect",
	    value: function renderMultiSelect() {
	      var _props3 = this.props,
	          schema = _props3.schema,
	          idSchema = _props3.idSchema,
	          uiSchema = _props3.uiSchema,
	          disabled = _props3.disabled,
	          readonly = _props3.readonly,
	          autofocus = _props3.autofocus,
	          onBlur = _props3.onBlur,
	          _props3$registry = _props3.registry,
	          registry = _props3$registry === undefined ? (0, _utils.getDefaultRegistry)() : _props3$registry;

	      var items = this.props.formData;
	      var widgets = registry.widgets,
	          definitions = registry.definitions,
	          formContext = registry.formContext;

	      var itemsSchema = (0, _utils.retrieveSchema)(schema.items, definitions);
	      var enumOptions = (0, _utils.optionsList)(itemsSchema);

	      var _getUiOptions$enumOpt = _extends({}, (0, _utils.getUiOptions)(uiSchema), {
	        enumOptions: enumOptions
	      }),
	          _getUiOptions$enumOpt2 = _getUiOptions$enumOpt.widget,
	          widget = _getUiOptions$enumOpt2 === undefined ? "select" : _getUiOptions$enumOpt2,
	          options = _objectWithoutProperties(_getUiOptions$enumOpt, ["widget"]);

	      var Widget = (0, _utils.getWidget)(schema, widget, widgets);
	      return _react2.default.createElement(Widget, {
	        id: idSchema && idSchema.$id,
	        multiple: true,
	        onChange: this.onSelectChange,
	        onBlur: onBlur,
	        options: options,
	        schema: schema,
	        value: items,
	        disabled: disabled,
	        readonly: readonly,
	        formContext: formContext,
	        autofocus: autofocus
	      });
	    }
	  }, {
	    key: "renderFiles",
	    value: function renderFiles() {
	      var _props4 = this.props,
	          schema = _props4.schema,
	          uiSchema = _props4.uiSchema,
	          idSchema = _props4.idSchema,
	          name = _props4.name,
	          disabled = _props4.disabled,
	          readonly = _props4.readonly,
	          autofocus = _props4.autofocus,
	          onBlur = _props4.onBlur,
	          _props4$registry = _props4.registry,
	          registry = _props4$registry === undefined ? (0, _utils.getDefaultRegistry)() : _props4$registry;

	      var title = schema.title || name;
	      var items = this.props.formData;
	      var widgets = registry.widgets,
	          formContext = registry.formContext;

	      var _getUiOptions2 = (0, _utils.getUiOptions)(uiSchema),
	          _getUiOptions2$widget = _getUiOptions2.widget,
	          widget = _getUiOptions2$widget === undefined ? "files" : _getUiOptions2$widget,
	          options = _objectWithoutProperties(_getUiOptions2, ["widget"]);

	      var Widget = (0, _utils.getWidget)(schema, widget, widgets);
	      return _react2.default.createElement(Widget, {
	        options: options,
	        id: idSchema && idSchema.$id,
	        multiple: true,
	        onChange: this.onSelectChange,
	        onBlur: onBlur,
	        schema: schema,
	        title: title,
	        value: items,
	        disabled: disabled,
	        readonly: readonly,
	        formContext: formContext,
	        autofocus: autofocus
	      });
	    }
	  }, {
	    key: "renderFixedArray",
	    value: function renderFixedArray() {
	      var _this3 = this;

	      var _props5 = this.props,
	          schema = _props5.schema,
	          uiSchema = _props5.uiSchema,
	          errorSchema = _props5.errorSchema,
	          idSchema = _props5.idSchema,
	          name = _props5.name,
	          required = _props5.required,
	          disabled = _props5.disabled,
	          readonly = _props5.readonly,
	          autofocus = _props5.autofocus,
	          _props5$registry = _props5.registry,
	          registry = _props5$registry === undefined ? (0, _utils.getDefaultRegistry)() : _props5$registry,
	          onBlur = _props5.onBlur;

	      var title = schema.title || name;
	      var items = this.props.formData;
	      var ArrayFieldTemplate = registry.ArrayFieldTemplate,
	          definitions = registry.definitions,
	          fields = registry.fields;
	      var TitleField = fields.TitleField;

	      var itemSchemas = schema.items.map(function (item) {
	        return (0, _utils.retrieveSchema)(item, definitions);
	      });
	      var additionalSchema = (0, _utils.allowAdditionalItems)(schema) ? (0, _utils.retrieveSchema)(schema.additionalItems, definitions) : null;

	      var _getUiOptions3 = (0, _utils.getUiOptions)(uiSchema),
	          _getUiOptions3$addabl = _getUiOptions3.addable,
	          addable = _getUiOptions3$addabl === undefined ? true : _getUiOptions3$addabl;

	      var canAdd = addable && additionalSchema;

	      if (!items || items.length < itemSchemas.length) {
	        // to make sure at least all fixed items are generated
	        items = items || [];
	        items = items.concat(new Array(itemSchemas.length - items.length));
	      }

	      // These are the props passed into the render function
	      var arrayProps = {
	        canAdd: canAdd,
	        className: "field field-array field-array-fixed-items",
	        disabled: disabled,
	        idSchema: idSchema,
	        items: items.map(function (item, index) {
	          var additional = index >= itemSchemas.length;
	          var itemSchema = additional ? additionalSchema : itemSchemas[index];
	          var itemIdPrefix = idSchema.$id + "_" + index;
	          var itemIdSchema = (0, _utils.toIdSchema)(itemSchema, itemIdPrefix, definitions);
	          var itemUiSchema = additional ? uiSchema.additionalItems || {} : Array.isArray(uiSchema.items) ? uiSchema.items[index] : uiSchema.items || {};
	          var itemErrorSchema = errorSchema ? errorSchema[index] : undefined;

	          return _this3.renderArrayFieldItem({
	            index: index,
	            canRemove: additional,
	            canMoveUp: index >= itemSchemas.length + 1,
	            canMoveDown: additional && index < items.length - 1,
	            itemSchema: itemSchema,
	            itemData: item,
	            itemUiSchema: itemUiSchema,
	            itemIdSchema: itemIdSchema,
	            itemErrorSchema: itemErrorSchema,
	            autofocus: autofocus && index === 0,
	            onBlur: onBlur
	          });
	        }),
	        onAddClick: this.onAddClick,
	        readonly: readonly,
	        required: required,
	        schema: schema,
	        uiSchema: uiSchema,
	        title: title,
	        TitleField: TitleField
	      };

	      // Check if a custom template template was passed in
	      var Template = ArrayFieldTemplate || DefaultFixedArrayFieldTemplate;
	      return _react2.default.createElement(Template, arrayProps);
	    }
	  }, {
	    key: "renderArrayFieldItem",
	    value: function renderArrayFieldItem(props) {
	      var index = props.index,
	          _props$canRemove = props.canRemove,
	          canRemove = _props$canRemove === undefined ? true : _props$canRemove,
	          _props$canMoveUp = props.canMoveUp,
	          canMoveUp = _props$canMoveUp === undefined ? true : _props$canMoveUp,
	          _props$canMoveDown = props.canMoveDown,
	          canMoveDown = _props$canMoveDown === undefined ? true : _props$canMoveDown,
	          itemSchema = props.itemSchema,
	          itemData = props.itemData,
	          itemUiSchema = props.itemUiSchema,
	          itemIdSchema = props.itemIdSchema,
	          itemErrorSchema = props.itemErrorSchema,
	          autofocus = props.autofocus,
	          onBlur = props.onBlur;
	      var _props6 = this.props,
	          disabled = _props6.disabled,
	          readonly = _props6.readonly,
	          uiSchema = _props6.uiSchema,
	          _props6$registry = _props6.registry,
	          registry = _props6$registry === undefined ? (0, _utils.getDefaultRegistry)() : _props6$registry;
	      var SchemaField = registry.fields.SchemaField;

	      var _orderable$removable$ = _extends({
	        orderable: true,
	        removable: true
	      }, uiSchema["ui:options"]),
	          orderable = _orderable$removable$.orderable,
	          removable = _orderable$removable$.removable;

	      var has = {
	        moveUp: orderable && canMoveUp,
	        moveDown: orderable && canMoveDown,
	        remove: removable && canRemove
	      };
	      has.toolbar = Object.keys(has).some(function (key) {
	        return has[key];
	      });

	      return {
	        children: _react2.default.createElement(SchemaField, {
	          schema: itemSchema,
	          uiSchema: itemUiSchema,
	          formData: itemData,
	          errorSchema: itemErrorSchema,
	          idSchema: itemIdSchema,
	          required: this.isItemRequired(itemSchema),
	          onChange: this.onChangeForIndex(index),
	          onBlur: onBlur,
	          registry: this.props.registry,
	          disabled: this.props.disabled,
	          readonly: this.props.readonly,
	          autofocus: autofocus
	        }),
	        className: "array-item",
	        disabled: disabled,
	        hasToolbar: has.toolbar,
	        hasMoveUp: has.moveUp,
	        hasMoveDown: has.moveDown,
	        hasRemove: has.remove,
	        index: index,
	        onDropIndexClick: this.onDropIndexClick,
	        onReorderClick: this.onReorderClick,
	        readonly: readonly
	      };
	    }
	  }, {
	    key: "itemTitle",
	    get: function get() {
	      var schema = this.props.schema;

	      return schema.items.title || schema.items.description || "Item";
	    }
	  }]);

	  return ArrayField;
	}(_react.Component);

	ArrayField.defaultProps = {
	  uiSchema: {},
	  formData: [],
	  idSchema: {},
	  required: false,
	  disabled: false,
	  readonly: false,
	  autofocus: false
	};


	function AddButton(_ref4) {
	  var onClick = _ref4.onClick,
	      disabled = _ref4.disabled;

	  return _react2.default.createElement(
	    "div",
	    { className: "row" },
	    _react2.default.createElement(
	      "p",
	      { className: "col-xs-3 col-xs-offset-9 array-item-add text-right" },
	      _react2.default.createElement(IconBtn, {
	        type: "info",
	        icon: "plus",
	        className: "btn-add col-xs-12",
	        tabIndex: "0",
	        onClick: onClick,
	        disabled: disabled
	      })
	    )
	  );
	}

	if (process.env.NODE_ENV !== "production") {
	  ArrayField.propTypes = {
	    schema: _propTypes2.default.object.isRequired,
	    uiSchema: _propTypes2.default.shape({
	      "ui:options": _propTypes2.default.shape({
	        addable: _propTypes2.default.bool,
	        orderable: _propTypes2.default.bool,
	        removable: _propTypes2.default.bool
	      })
	    }),
	    idSchema: _propTypes2.default.object,
	    errorSchema: _propTypes2.default.object,
	    onChange: _propTypes2.default.func.isRequired,
	    onBlur: _propTypes2.default.func,
	    formData: _propTypes2.default.array,
	    required: _propTypes2.default.bool,
	    disabled: _propTypes2.default.bool,
	    readonly: _propTypes2.default.bool,
	    autofocus: _propTypes2.default.bool,
	    registry: _propTypes2.default.shape({
	      widgets: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object])).isRequired,
	      fields: _propTypes2.default.objectOf(_propTypes2.default.func).isRequired,
	      definitions: _propTypes2.default.object.isRequired,
	      formContext: _propTypes2.default.object.isRequired
	    })
	  };
	}

	exports.default = ArrayField;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _utils = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function BooleanField(props) {
	  var schema = props.schema,
	      name = props.name,
	      uiSchema = props.uiSchema,
	      idSchema = props.idSchema,
	      formData = props.formData,
	      _props$registry = props.registry,
	      registry = _props$registry === undefined ? (0, _utils.getDefaultRegistry)() : _props$registry,
	      required = props.required,
	      disabled = props.disabled,
	      readonly = props.readonly,
	      autofocus = props.autofocus,
	      onChange = props.onChange;
	  var title = schema.title;
	  var widgets = registry.widgets,
	      formContext = registry.formContext;

	  var _getUiOptions = (0, _utils.getUiOptions)(uiSchema),
	      _getUiOptions$widget = _getUiOptions.widget,
	      widget = _getUiOptions$widget === undefined ? "checkbox" : _getUiOptions$widget,
	      options = _objectWithoutProperties(_getUiOptions, ["widget"]);

	  var Widget = (0, _utils.getWidget)(schema, widget, widgets);
	  var enumOptions = (0, _utils.optionsList)({
	    enum: [true, false],
	    enumNames: schema.enumNames || ["yes", "no"]
	  });
	  return _react2.default.createElement(Widget, {
	    options: _extends({}, options, { enumOptions: enumOptions }),
	    schema: schema,
	    id: idSchema && idSchema.$id,
	    onChange: onChange,
	    label: title === undefined ? name : title,
	    value: formData,
	    required: required,
	    disabled: disabled,
	    readonly: readonly,
	    registry: registry,
	    formContext: formContext,
	    autofocus: autofocus
	  });
	}

	if (process.env.NODE_ENV !== "production") {
	  BooleanField.propTypes = {
	    schema: _propTypes2.default.object.isRequired,
	    uiSchema: _propTypes2.default.object,
	    idSchema: _propTypes2.default.object,
	    onChange: _propTypes2.default.func.isRequired,
	    formData: _propTypes2.default.bool,
	    required: _propTypes2.default.bool,
	    disabled: _propTypes2.default.bool,
	    readonly: _propTypes2.default.bool,
	    autofocus: _propTypes2.default.bool,
	    registry: _propTypes2.default.shape({
	      widgets: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object])).isRequired,
	      fields: _propTypes2.default.objectOf(_propTypes2.default.func).isRequired,
	      definitions: _propTypes2.default.object.isRequired,
	      formContext: _propTypes2.default.object.isRequired
	    })
	  };
	}

	BooleanField.defaultProps = {
	  uiSchema: {},
	  disabled: false,
	  readonly: false,
	  autofocus: false
	};

	exports.default = BooleanField;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function DescriptionField(props) {
	  var id = props.id,
	      description = props.description;

	  if (!description) {
	    // See #312: Ensure compatibility with old versions of React.
	    return _react2.default.createElement("div", null);
	  }
	  if (typeof description === "string") {
	    return _react2.default.createElement(
	      "p",
	      { id: id, className: "field-description" },
	      description
	    );
	  } else {
	    return _react2.default.createElement(
	      "div",
	      { id: id, className: "field-description" },
	      description
	    );
	  }
	}

	if (process.env.NODE_ENV !== "production") {
	  DescriptionField.propTypes = {
	    id: _propTypes2.default.string,
	    description: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
	  };
	}

	exports.default = DescriptionField;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _utils = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function NumberField(props) {
	  var StringField = props.registry.fields.StringField;

	  return _react2.default.createElement(StringField, _extends({}, props, {
	    onChange: function onChange(value) {
	      return props.onChange((0, _utils.asNumber)(value));
	    }
	  }));
	}

	if (process.env.NODE_ENV !== "production") {
	  NumberField.propTypes = {
	    schema: _propTypes2.default.object.isRequired,
	    uiSchema: _propTypes2.default.object,
	    idSchema: _propTypes2.default.object,
	    onChange: _propTypes2.default.func.isRequired,
	    formData: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
	    required: _propTypes2.default.bool,
	    formContext: _propTypes2.default.object.isRequired
	  };
	}

	NumberField.defaultProps = {
	  uiSchema: {}
	};

	exports.default = NumberField;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _utils = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ObjectField = function (_Component) {
	  _inherits(ObjectField, _Component);

	  function ObjectField() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, ObjectField);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ObjectField.__proto__ || Object.getPrototypeOf(ObjectField)).call.apply(_ref, [this].concat(args))), _this), _this.onPropertyChange = function (name) {
	      return function (value, options) {
	        var newFormData = _extends({}, _this.props.formData, _defineProperty({}, name, value));
	        _this.props.onChange(newFormData, options);
	      };
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ObjectField, [{
	    key: "isRequired",
	    value: function isRequired(name) {
	      var schema = this.props.schema;
	      return Array.isArray(schema.required) && schema.required.indexOf(name) !== -1;
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props,
	          uiSchema = _props.uiSchema,
	          formData = _props.formData,
	          errorSchema = _props.errorSchema,
	          idSchema = _props.idSchema,
	          name = _props.name,
	          required = _props.required,
	          disabled = _props.disabled,
	          readonly = _props.readonly,
	          onBlur = _props.onBlur,
	          _props$registry = _props.registry,
	          registry = _props$registry === undefined ? (0, _utils.getDefaultRegistry)() : _props$registry;
	      var definitions = registry.definitions,
	          fields = registry.fields,
	          formContext = registry.formContext;
	      var SchemaField = fields.SchemaField,
	          TitleField = fields.TitleField,
	          DescriptionField = fields.DescriptionField;

	      var schema = (0, _utils.retrieveSchema)(this.props.schema, definitions);
	      var title = schema.title === undefined ? name : schema.title;
	      var orderedProperties = void 0;
	      try {
	        var properties = Object.keys(schema.properties);
	        orderedProperties = (0, _utils.orderProperties)(properties, uiSchema["ui:order"]);
	      } catch (err) {
	        return _react2.default.createElement(
	          "div",
	          null,
	          _react2.default.createElement(
	            "p",
	            { className: "config-error", style: { color: "red" } },
	            "Invalid ",
	            name || "root",
	            " object field configuration:",
	            _react2.default.createElement(
	              "em",
	              null,
	              err.message
	            ),
	            "."
	          ),
	          _react2.default.createElement(
	            "pre",
	            null,
	            JSON.stringify(schema)
	          )
	        );
	      }
	      return _react2.default.createElement(
	        "fieldset",
	        null,
	        title && _react2.default.createElement(TitleField, {
	          id: idSchema.$id + "__title",
	          title: title,
	          required: required,
	          formContext: formContext
	        }),
	        schema.description && _react2.default.createElement(DescriptionField, {
	          id: idSchema.$id + "__description",
	          description: schema.description,
	          formContext: formContext
	        }),
	        orderedProperties.map(function (name, index) {
	          return _react2.default.createElement(SchemaField, {
	            key: index,
	            name: name,
	            required: _this2.isRequired(name),
	            schema: schema.properties[name],
	            uiSchema: uiSchema[name],
	            errorSchema: errorSchema[name],
	            idSchema: idSchema[name],
	            formData: formData[name],
	            onChange: _this2.onPropertyChange(name),
	            onBlur: onBlur,
	            registry: registry,
	            disabled: disabled,
	            readonly: readonly
	          });
	        })
	      );
	    }
	  }]);

	  return ObjectField;
	}(_react.Component);

	ObjectField.defaultProps = {
	  uiSchema: {},
	  formData: {},
	  errorSchema: {},
	  idSchema: {},
	  required: false,
	  disabled: false,
	  readonly: false
	};


	if (process.env.NODE_ENV !== "production") {
	  ObjectField.propTypes = {
	    schema: _propTypes2.default.object.isRequired,
	    uiSchema: _propTypes2.default.object,
	    errorSchema: _propTypes2.default.object,
	    idSchema: _propTypes2.default.object,
	    onChange: _propTypes2.default.func.isRequired,
	    formData: _propTypes2.default.object,
	    required: _propTypes2.default.bool,
	    disabled: _propTypes2.default.bool,
	    readonly: _propTypes2.default.bool,
	    registry: _propTypes2.default.shape({
	      widgets: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object])).isRequired,
	      fields: _propTypes2.default.objectOf(_propTypes2.default.func).isRequired,
	      definitions: _propTypes2.default.object.isRequired,
	      formContext: _propTypes2.default.object.isRequired
	    })
	  };
	}

	exports.default = ObjectField;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _utils = __webpack_require__(13);

	var _UnsupportedField = __webpack_require__(23);

	var _UnsupportedField2 = _interopRequireDefault(_UnsupportedField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var REQUIRED_FIELD_SYMBOL = "*";
	var COMPONENT_TYPES = {
	  array: "ArrayField",
	  boolean: "BooleanField",
	  integer: "NumberField",
	  number: "NumberField",
	  object: "ObjectField",
	  string: "StringField"
	};

	function getFieldComponent(schema, uiSchema, fields) {
	  var field = uiSchema["ui:field"];
	  if (typeof field === "function") {
	    return field;
	  }
	  if (typeof field === "string" && field in fields) {
	    return fields[field];
	  }
	  var componentName = COMPONENT_TYPES[schema.type];
	  return componentName in fields ? fields[componentName] : _UnsupportedField2.default;
	}

	function Label(props) {
	  var label = props.label,
	      required = props.required,
	      id = props.id;

	  if (!label) {
	    // See #312: Ensure compatibility with old versions of React.
	    return _react2.default.createElement("div", null);
	  }
	  return _react2.default.createElement(
	    "label",
	    { className: "control-label", htmlFor: id },
	    required ? label + REQUIRED_FIELD_SYMBOL : label
	  );
	}

	function Help(props) {
	  var help = props.help;

	  if (!help) {
	    // See #312: Ensure compatibility with old versions of React.
	    return _react2.default.createElement("div", null);
	  }
	  if (typeof help === "string") {
	    return _react2.default.createElement(
	      "p",
	      { className: "help-block" },
	      help
	    );
	  }
	  return _react2.default.createElement(
	    "div",
	    { className: "help-block" },
	    help
	  );
	}

	function ErrorList(props) {
	  var _props$errors = props.errors,
	      errors = _props$errors === undefined ? [] : _props$errors;

	  if (errors.length === 0) {
	    return _react2.default.createElement("div", null);
	  }
	  return _react2.default.createElement(
	    "div",
	    null,
	    _react2.default.createElement("p", null),
	    _react2.default.createElement(
	      "ul",
	      { className: "error-detail bs-callout bs-callout-info" },
	      errors.map(function (error, index) {
	        return _react2.default.createElement(
	          "li",
	          { className: "text-danger", key: index },
	          error
	        );
	      })
	    )
	  );
	}

	function DefaultTemplate(props) {
	  var id = props.id,
	      classNames = props.classNames,
	      label = props.label,
	      children = props.children,
	      errors = props.errors,
	      help = props.help,
	      description = props.description,
	      hidden = props.hidden,
	      required = props.required,
	      displayLabel = props.displayLabel;

	  if (hidden) {
	    return children;
	  }

	  return _react2.default.createElement(
	    "div",
	    { className: classNames },
	    displayLabel && _react2.default.createElement(Label, { label: label, required: required, id: id }),
	    displayLabel && description ? description : null,
	    children,
	    errors,
	    help
	  );
	}

	if (process.env.NODE_ENV !== "production") {
	  DefaultTemplate.propTypes = {
	    id: _propTypes2.default.string,
	    classNames: _propTypes2.default.string,
	    label: _propTypes2.default.string,
	    children: _propTypes2.default.node.isRequired,
	    errors: _propTypes2.default.element,
	    rawErrors: _propTypes2.default.arrayOf(_propTypes2.default.string),
	    help: _propTypes2.default.element,
	    rawHelp: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
	    description: _propTypes2.default.element,
	    rawDescription: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
	    hidden: _propTypes2.default.bool,
	    required: _propTypes2.default.bool,
	    readonly: _propTypes2.default.bool,
	    displayLabel: _propTypes2.default.bool,
	    fields: _propTypes2.default.object,
	    formContext: _propTypes2.default.object
	  };
	}

	DefaultTemplate.defaultProps = {
	  hidden: false,
	  readonly: false,
	  required: false,
	  displayLabel: true
	};

	function SchemaFieldRender(props) {
	  var uiSchema = props.uiSchema,
	      errorSchema = props.errorSchema,
	      idSchema = props.idSchema,
	      name = props.name,
	      required = props.required,
	      _props$registry = props.registry,
	      registry = _props$registry === undefined ? (0, _utils.getDefaultRegistry)() : _props$registry;
	  var definitions = registry.definitions,
	      fields = registry.fields,
	      formContext = registry.formContext,
	      _registry$FieldTempla = registry.FieldTemplate,
	      FieldTemplate = _registry$FieldTempla === undefined ? DefaultTemplate : _registry$FieldTempla;

	  var schema = (0, _utils.retrieveSchema)(props.schema, definitions);
	  var FieldComponent = getFieldComponent(schema, uiSchema, fields);
	  var DescriptionField = fields.DescriptionField;

	  var disabled = Boolean(props.disabled || uiSchema["ui:disabled"]);
	  var readonly = Boolean(props.readonly || uiSchema["ui:readonly"]);
	  var autofocus = Boolean(props.autofocus || uiSchema["ui:autofocus"]);

	  if (Object.keys(schema).length === 0) {
	    // See #312: Ensure compatibility with old versions of React.
	    return _react2.default.createElement("div", null);
	  }

	  var uiOptions = (0, _utils.getUiOptions)(uiSchema);
	  var _uiOptions$label = uiOptions.label,
	      displayLabel = _uiOptions$label === undefined ? true : _uiOptions$label;

	  if (schema.type === "array") {
	    displayLabel = (0, _utils.isMultiSelect)(schema) || (0, _utils.isFilesArray)(schema, uiSchema);
	  }
	  if (schema.type === "object") {
	    displayLabel = false;
	  }
	  if (schema.type === "boolean" && !uiSchema["ui:widget"]) {
	    displayLabel = false;
	  }
	  if (uiSchema["ui:field"]) {
	    displayLabel = false;
	  }

	  var __errors = errorSchema.__errors,
	      fieldErrorSchema = _objectWithoutProperties(errorSchema, ["__errors"]);

	  // See #439: uiSchema: Don't pass consumed class names to child components


	  var field = _react2.default.createElement(FieldComponent, _extends({}, props, {
	    schema: schema,
	    uiSchema: _extends({}, uiSchema, { classNames: undefined }),
	    disabled: disabled,
	    readonly: readonly,
	    autofocus: autofocus,
	    errorSchema: fieldErrorSchema,
	    formContext: formContext
	  }));

	  var type = schema.type;

	  var id = idSchema.$id;
	  var label = uiSchema["ui:title"] || props.schema.title || schema.title || name;
	  var description = uiSchema["ui:description"] || props.schema.description || schema.description;
	  var errors = __errors;
	  var help = uiSchema["ui:help"];
	  var hidden = uiSchema["ui:widget"] === "hidden";
	  var classNames = ["form-group", "field", "field-" + type, errors && errors.length > 0 ? "field-error has-error has-danger" : "", uiSchema.classNames].join(" ").trim();

	  var fieldProps = {
	    description: _react2.default.createElement(DescriptionField, {
	      id: id + "__description",
	      description: description,
	      formContext: formContext
	    }),
	    rawDescription: description,
	    help: _react2.default.createElement(Help, { help: help }),
	    rawHelp: typeof help === "string" ? help : undefined,
	    errors: _react2.default.createElement(ErrorList, { errors: errors }),
	    rawErrors: errors,
	    id: id,
	    label: label,
	    hidden: hidden,
	    required: required,
	    readonly: readonly,
	    displayLabel: displayLabel,
	    classNames: classNames,
	    formContext: formContext,
	    fields: fields,
	    schema: schema,
	    uiSchema: uiSchema
	  };

	  return _react2.default.createElement(
	    FieldTemplate,
	    fieldProps,
	    field
	  );
	}

	var SchemaField = function (_React$Component) {
	  _inherits(SchemaField, _React$Component);

	  function SchemaField() {
	    _classCallCheck(this, SchemaField);

	    return _possibleConstructorReturn(this, (SchemaField.__proto__ || Object.getPrototypeOf(SchemaField)).apply(this, arguments));
	  }

	  _createClass(SchemaField, [{
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      // if schemas are equal idSchemas will be equal as well,
	      // so it is not necessary to compare
	      return !(0, _utils.deepEquals)(_extends({}, this.props, { idSchema: undefined }), _extends({}, nextProps, { idSchema: undefined }));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return SchemaFieldRender(this.props);
	    }
	  }]);

	  return SchemaField;
	}(_react2.default.Component);

	SchemaField.defaultProps = {
	  uiSchema: {},
	  errorSchema: {},
	  idSchema: {},
	  disabled: false,
	  readonly: false,
	  autofocus: false
	};

	if (process.env.NODE_ENV !== "production") {
	  SchemaField.propTypes = {
	    schema: _propTypes2.default.object.isRequired,
	    uiSchema: _propTypes2.default.object,
	    idSchema: _propTypes2.default.object,
	    formData: _propTypes2.default.any,
	    errorSchema: _propTypes2.default.object,
	    registry: _propTypes2.default.shape({
	      widgets: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object])).isRequired,
	      fields: _propTypes2.default.objectOf(_propTypes2.default.func).isRequired,
	      definitions: _propTypes2.default.object.isRequired,
	      ArrayFieldTemplate: _propTypes2.default.func,
	      FieldTemplate: _propTypes2.default.func,
	      formContext: _propTypes2.default.object.isRequired
	    })
	  };
	}

	exports.default = SchemaField;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = UnsupportedField;

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function UnsupportedField(_ref) {
	  var schema = _ref.schema;

	  // XXX render json as string so dev can inspect faulty subschema
	  return _react2.default.createElement(
	    "div",
	    { className: "unsupported-field" },
	    "Unsupported field schema ",
	    JSON.stringify(schema, null, 2),
	    "."
	  );
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _utils = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function StringField(props) {
	  var schema = props.schema,
	      name = props.name,
	      uiSchema = props.uiSchema,
	      idSchema = props.idSchema,
	      formData = props.formData,
	      required = props.required,
	      disabled = props.disabled,
	      readonly = props.readonly,
	      autofocus = props.autofocus,
	      onChange = props.onChange,
	      onBlur = props.onBlur,
	      _props$registry = props.registry,
	      registry = _props$registry === undefined ? (0, _utils.getDefaultRegistry)() : _props$registry;
	  var title = schema.title,
	      format = schema.format;
	  var widgets = registry.widgets,
	      formContext = registry.formContext;

	  var enumOptions = Array.isArray(schema.enum) && (0, _utils.optionsList)(schema);
	  var defaultWidget = format || (enumOptions ? "select" : "text");

	  var _getUiOptions = (0, _utils.getUiOptions)(uiSchema),
	      _getUiOptions$widget = _getUiOptions.widget,
	      widget = _getUiOptions$widget === undefined ? defaultWidget : _getUiOptions$widget,
	      _getUiOptions$placeho = _getUiOptions.placeholder,
	      placeholder = _getUiOptions$placeho === undefined ? "" : _getUiOptions$placeho,
	      options = _objectWithoutProperties(_getUiOptions, ["widget", "placeholder"]);

	  var Widget = (0, _utils.getWidget)(schema, widget, widgets);

	  return _react2.default.createElement(Widget, {
	    options: _extends({}, options, { enumOptions: enumOptions }),
	    schema: schema,
	    id: idSchema && idSchema.$id,
	    label: title === undefined ? name : title,
	    value: formData,
	    onChange: onChange,
	    onBlur: onBlur,
	    required: required,
	    disabled: disabled,
	    readonly: readonly,
	    formContext: formContext,
	    autofocus: autofocus,
	    registry: registry,
	    placeholder: placeholder
	  });
	}

	if (process.env.NODE_ENV !== "production") {
	  StringField.propTypes = {
	    schema: _propTypes2.default.object.isRequired,
	    uiSchema: _propTypes2.default.object.isRequired,
	    idSchema: _propTypes2.default.object,
	    onChange: _propTypes2.default.func.isRequired,
	    onBlur: _propTypes2.default.func,
	    formData: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	    registry: _propTypes2.default.shape({
	      widgets: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object])).isRequired,
	      fields: _propTypes2.default.objectOf(_propTypes2.default.func).isRequired,
	      definitions: _propTypes2.default.object.isRequired,
	      formContext: _propTypes2.default.object.isRequired
	    }),
	    formContext: _propTypes2.default.object.isRequired,
	    required: _propTypes2.default.bool,
	    disabled: _propTypes2.default.bool,
	    readonly: _propTypes2.default.bool,
	    autofocus: _propTypes2.default.bool
	  };
	}

	StringField.defaultProps = {
	  uiSchema: {},
	  disabled: false,
	  readonly: false,
	  autofocus: false
	};

	exports.default = StringField;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var REQUIRED_FIELD_SYMBOL = "*";

	function TitleField(props) {
	  var id = props.id,
	      title = props.title,
	      required = props.required;

	  var legend = required ? title + REQUIRED_FIELD_SYMBOL : title;
	  return _react2.default.createElement(
	    "legend",
	    { id: id },
	    legend
	  );
	}

	if (process.env.NODE_ENV !== "production") {
	  TitleField.propTypes = {
	    id: _propTypes2.default.string,
	    title: _propTypes2.default.string,
	    required: _propTypes2.default.bool
	  };
	}

	exports.default = TitleField;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _AltDateWidget = __webpack_require__(27);

	var _AltDateWidget2 = _interopRequireDefault(_AltDateWidget);

	var _AltDateTimeWidget = __webpack_require__(28);

	var _AltDateTimeWidget2 = _interopRequireDefault(_AltDateTimeWidget);

	var _CheckboxWidget = __webpack_require__(29);

	var _CheckboxWidget2 = _interopRequireDefault(_CheckboxWidget);

	var _CheckboxesWidget = __webpack_require__(30);

	var _CheckboxesWidget2 = _interopRequireDefault(_CheckboxesWidget);

	var _ColorWidget = __webpack_require__(31);

	var _ColorWidget2 = _interopRequireDefault(_ColorWidget);

	var _DateWidget = __webpack_require__(33);

	var _DateWidget2 = _interopRequireDefault(_DateWidget);

	var _DateTimeWidget = __webpack_require__(34);

	var _DateTimeWidget2 = _interopRequireDefault(_DateTimeWidget);

	var _EmailWidget = __webpack_require__(35);

	var _EmailWidget2 = _interopRequireDefault(_EmailWidget);

	var _FileWidget = __webpack_require__(36);

	var _FileWidget2 = _interopRequireDefault(_FileWidget);

	var _HiddenWidget = __webpack_require__(37);

	var _HiddenWidget2 = _interopRequireDefault(_HiddenWidget);

	var _PasswordWidget = __webpack_require__(38);

	var _PasswordWidget2 = _interopRequireDefault(_PasswordWidget);

	var _RadioWidget = __webpack_require__(39);

	var _RadioWidget2 = _interopRequireDefault(_RadioWidget);

	var _RangeWidget = __webpack_require__(40);

	var _RangeWidget2 = _interopRequireDefault(_RangeWidget);

	var _SelectWidget = __webpack_require__(41);

	var _SelectWidget2 = _interopRequireDefault(_SelectWidget);

	var _TextareaWidget = __webpack_require__(42);

	var _TextareaWidget2 = _interopRequireDefault(_TextareaWidget);

	var _TextWidget = __webpack_require__(43);

	var _TextWidget2 = _interopRequireDefault(_TextWidget);

	var _URLWidget = __webpack_require__(44);

	var _URLWidget2 = _interopRequireDefault(_URLWidget);

	var _UpDownWidget = __webpack_require__(45);

	var _UpDownWidget2 = _interopRequireDefault(_UpDownWidget);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  PasswordWidget: _PasswordWidget2.default,
	  RadioWidget: _RadioWidget2.default,
	  UpDownWidget: _UpDownWidget2.default,
	  RangeWidget: _RangeWidget2.default,
	  SelectWidget: _SelectWidget2.default,
	  TextWidget: _TextWidget2.default,
	  DateWidget: _DateWidget2.default,
	  DateTimeWidget: _DateTimeWidget2.default,
	  AltDateWidget: _AltDateWidget2.default,
	  AltDateTimeWidget: _AltDateTimeWidget2.default,
	  EmailWidget: _EmailWidget2.default,
	  URLWidget: _URLWidget2.default,
	  TextareaWidget: _TextareaWidget2.default,
	  HiddenWidget: _HiddenWidget2.default,
	  ColorWidget: _ColorWidget2.default,
	  FileWidget: _FileWidget2.default,
	  CheckboxWidget: _CheckboxWidget2.default,
	  CheckboxesWidget: _CheckboxesWidget2.default
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _utils = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function rangeOptions(start, stop) {
	  var options = [];
	  for (var i = start; i <= stop; i++) {
	    options.push({ value: i, label: (0, _utils.pad)(i, 2) });
	  }
	  return options;
	}

	function readyForChange(state) {
	  return Object.keys(state).every(function (key) {
	    return state[key] !== -1;
	  });
	}

	function DateElement(props) {
	  var type = props.type,
	      range = props.range,
	      value = props.value,
	      select = props.select,
	      rootId = props.rootId,
	      disabled = props.disabled,
	      readonly = props.readonly,
	      autofocus = props.autofocus,
	      registry = props.registry,
	      onBlur = props.onBlur;

	  var id = rootId + "_" + type;
	  var SelectWidget = registry.widgets.SelectWidget;

	  return _react2.default.createElement(SelectWidget, {
	    schema: { type: "integer" },
	    id: id,
	    className: "form-control",
	    options: { enumOptions: rangeOptions(range[0], range[1]) },
	    placeholder: type,
	    value: value,
	    disabled: disabled,
	    readonly: readonly,
	    autofocus: autofocus,
	    onChange: function onChange(value) {
	      return select(type, value);
	    },
	    onBlur: onBlur
	  });
	}

	var AltDateWidget = function (_Component) {
	  _inherits(AltDateWidget, _Component);

	  function AltDateWidget(props) {
	    _classCallCheck(this, AltDateWidget);

	    var _this = _possibleConstructorReturn(this, (AltDateWidget.__proto__ || Object.getPrototypeOf(AltDateWidget)).call(this, props));

	    _this.onChange = function (property, value) {
	      _this.setState(_defineProperty({}, property, typeof value === "undefined" ? -1 : value), function () {
	        // Only propagate to parent state if we have a complete date{time}
	        if (readyForChange(_this.state)) {
	          _this.props.onChange((0, _utils.toDateString)(_this.state, _this.props.time));
	        }
	      });
	    };

	    _this.setNow = function (event) {
	      event.preventDefault();
	      var _this$props = _this.props,
	          time = _this$props.time,
	          disabled = _this$props.disabled,
	          readonly = _this$props.readonly,
	          onChange = _this$props.onChange;

	      if (disabled || readonly) {
	        return;
	      }
	      var nowDateObj = (0, _utils.parseDateString)(new Date().toJSON(), time);
	      _this.setState(nowDateObj, function () {
	        return onChange((0, _utils.toDateString)(_this.state, time));
	      });
	    };

	    _this.clear = function (event) {
	      event.preventDefault();
	      var _this$props2 = _this.props,
	          time = _this$props2.time,
	          disabled = _this$props2.disabled,
	          readonly = _this$props2.readonly,
	          onChange = _this$props2.onChange;

	      if (disabled || readonly) {
	        return;
	      }
	      _this.setState((0, _utils.parseDateString)("", time), function () {
	        return onChange(undefined);
	      });
	    };

	    _this.state = (0, _utils.parseDateString)(props.value, props.time);
	    return _this;
	  }

	  _createClass(AltDateWidget, [{
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState((0, _utils.parseDateString)(nextProps.value, nextProps.time));
	    }
	  }, {
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _utils.shouldRender)(this, nextProps, nextState);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props,
	          id = _props.id,
	          disabled = _props.disabled,
	          readonly = _props.readonly,
	          autofocus = _props.autofocus,
	          registry = _props.registry,
	          onBlur = _props.onBlur;

	      return _react2.default.createElement(
	        "ul",
	        { className: "list-inline" },
	        this.dateElementProps.map(function (elemProps, i) {
	          return _react2.default.createElement(
	            "li",
	            { key: i },
	            _react2.default.createElement(DateElement, _extends({
	              rootId: id,
	              select: _this2.onChange
	            }, elemProps, {
	              disabled: disabled,
	              readonly: readonly,
	              registry: registry,
	              onBlur: onBlur,
	              autofocus: autofocus && i === 0
	            }))
	          );
	        }),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "#", className: "btn btn-info btn-now", onClick: this.setNow },
	            "Now"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            {
	              href: "#",
	              className: "btn btn-warning btn-clear",
	              onClick: this.clear },
	            "Clear"
	          )
	        )
	      );
	    }
	  }, {
	    key: "dateElementProps",
	    get: function get() {
	      var time = this.props.time;
	      var _state = this.state,
	          year = _state.year,
	          month = _state.month,
	          day = _state.day,
	          hour = _state.hour,
	          minute = _state.minute,
	          second = _state.second;

	      var data = [{ type: "year", range: [1900, 2020], value: year }, { type: "month", range: [1, 12], value: month }, { type: "day", range: [1, 31], value: day }];
	      if (time) {
	        data.push({ type: "hour", range: [0, 23], value: hour }, { type: "minute", range: [0, 59], value: minute }, { type: "second", range: [0, 59], value: second });
	      }
	      return data;
	    }
	  }]);

	  return AltDateWidget;
	}(_react.Component);

	AltDateWidget.defaultProps = {
	  time: false,
	  disabled: false,
	  readonly: false,
	  autofocus: false
	};


	if (process.env.NODE_ENV !== "production") {
	  AltDateWidget.propTypes = {
	    schema: _propTypes2.default.object.isRequired,
	    id: _propTypes2.default.string.isRequired,
	    value: _propTypes2.default.string,
	    required: _propTypes2.default.bool,
	    disabled: _propTypes2.default.bool,
	    readonly: _propTypes2.default.bool,
	    autofocus: _propTypes2.default.bool,
	    onChange: _propTypes2.default.func,
	    onBlur: _propTypes2.default.func,
	    time: _propTypes2.default.bool
	  };
	}

	exports.default = AltDateWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function AltDateTimeWidget(props) {
	  var AltDateWidget = props.registry.widgets.AltDateWidget;

	  return _react2.default.createElement(AltDateWidget, _extends({ time: true }, props));
	}

	if (process.env.NODE_ENV !== "production") {
	  AltDateTimeWidget.propTypes = {
	    schema: _propTypes2.default.object.isRequired,
	    id: _propTypes2.default.string.isRequired,
	    value: _propTypes2.default.string,
	    required: _propTypes2.default.bool,
	    onChange: _propTypes2.default.func
	  };
	}

	exports.default = AltDateTimeWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _DescriptionField = __webpack_require__(19);

	var _DescriptionField2 = _interopRequireDefault(_DescriptionField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function CheckboxWidget(props) {
	  var schema = props.schema,
	      id = props.id,
	      value = props.value,
	      required = props.required,
	      disabled = props.disabled,
	      readonly = props.readonly,
	      label = props.label,
	      autofocus = props.autofocus,
	      _onChange = props.onChange;

	  return _react2.default.createElement(
	    "div",
	    { className: "checkbox " + (disabled || readonly ? "disabled" : "") },
	    schema.description && _react2.default.createElement(_DescriptionField2.default, { description: schema.description }),
	    _react2.default.createElement(
	      "label",
	      null,
	      _react2.default.createElement("input", {
	        type: "checkbox",
	        id: id,
	        checked: typeof value === "undefined" ? false : value,
	        required: required,
	        disabled: disabled || readonly,
	        autoFocus: autofocus,
	        onChange: function onChange(event) {
	          return _onChange(event.target.checked);
	        }
	      }),
	      _react2.default.createElement(
	        "span",
	        null,
	        label
	      )
	    )
	  );
	}

	CheckboxWidget.defaultProps = {
	  autofocus: false
	};

	if (process.env.NODE_ENV !== "production") {
	  CheckboxWidget.propTypes = {
	    schema: _propTypes2.default.object.isRequired,
	    id: _propTypes2.default.string.isRequired,
	    value: _propTypes2.default.bool,
	    required: _propTypes2.default.bool,
	    disabled: _propTypes2.default.bool,
	    readonly: _propTypes2.default.bool,
	    autofocus: _propTypes2.default.bool,
	    onChange: _propTypes2.default.func
	  };
	}

	exports.default = CheckboxWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function selectValue(value, selected, all) {
	  var at = all.indexOf(value);
	  var updated = selected.slice(0, at).concat(value, selected.slice(at));
	  // As inserting values at predefined index positions doesn't work with empty
	  // arrays, we need to reorder the updated selection to match the initial order
	  return updated.sort(function (a, b) {
	    return all.indexOf(a) > all.indexOf(b);
	  });
	}

	function deselectValue(value, selected) {
	  return selected.filter(function (v) {
	    return v !== value;
	  });
	}

	function CheckboxesWidget(props) {
	  var id = props.id,
	      disabled = props.disabled,
	      options = props.options,
	      value = props.value,
	      autofocus = props.autofocus,
	      readonly = props.readonly,
	      _onChange = props.onChange;
	  var enumOptions = options.enumOptions,
	      inline = options.inline;

	  return _react2.default.createElement(
	    "div",
	    { className: "checkboxes", id: id },
	    enumOptions.map(function (option, index) {
	      var checked = value.indexOf(option.value) !== -1;
	      var disabledCls = disabled || readonly ? "disabled" : "";
	      var checkbox = _react2.default.createElement(
	        "span",
	        null,
	        _react2.default.createElement("input", {
	          type: "checkbox",
	          id: id + "_" + index,
	          checked: checked,
	          disabled: disabled || readonly,
	          autoFocus: autofocus && index === 0,
	          onChange: function onChange(event) {
	            var all = enumOptions.map(function (_ref) {
	              var value = _ref.value;
	              return value;
	            });
	            if (event.target.checked) {
	              _onChange(selectValue(option.value, value, all));
	            } else {
	              _onChange(deselectValue(option.value, value));
	            }
	          }
	        }),
	        _react2.default.createElement(
	          "span",
	          null,
	          option.label
	        )
	      );
	      return inline ? _react2.default.createElement(
	        "label",
	        { key: index, className: "checkbox-inline " + disabledCls },
	        checkbox
	      ) : _react2.default.createElement(
	        "div",
	        { key: index, className: "checkbox " + disabledCls },
	        _react2.default.createElement(
	          "label",
	          null,
	          checkbox
	        )
	      );
	    })
	  );
	}

	CheckboxesWidget.defaultProps = {
	  autofocus: false,
	  options: {
	    inline: false
	  }
	};

	if (process.env.NODE_ENV !== "production") {
	  CheckboxesWidget.propTypes = {
	    schema: _propTypes2.default.object.isRequired,
	    id: _propTypes2.default.string.isRequired,
	    options: _propTypes2.default.shape({
	      enumOptions: _propTypes2.default.array,
	      inline: _propTypes2.default.bool
	    }).isRequired,
	    value: _propTypes2.default.any,
	    required: _propTypes2.default.bool,
	    readonly: _propTypes2.default.bool,
	    disabled: _propTypes2.default.bool,
	    multiple: _propTypes2.default.bool,
	    autofocus: _propTypes2.default.bool,
	    onChange: _propTypes2.default.func
	  };
	}

	exports.default = CheckboxesWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _BaseInput = __webpack_require__(32);

	var _BaseInput2 = _interopRequireDefault(_BaseInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ColorWidget(props) {
	  var disabled = props.disabled,
	      readonly = props.readonly;

	  return _react2.default.createElement(_BaseInput2.default, _extends({ type: "color" }, props, { disabled: disabled || readonly }));
	}

	if (process.env.NODE_ENV !== "production") {
	  ColorWidget.propTypes = {
	    schema: _propTypes2.default.object.isRequired,
	    id: _propTypes2.default.string.isRequired,
	    value: _propTypes2.default.string,
	    required: _propTypes2.default.bool,
	    disabled: _propTypes2.default.bool,
	    readonly: _propTypes2.default.bool,
	    autofocus: _propTypes2.default.bool,
	    onChange: _propTypes2.default.func
	  };
	}

	exports.default = ColorWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function BaseInput(props) {
	  // Note: since React 15.2.0 we can't forward unknown element attributes, so we
	  // exclude the "options" and "schema" ones here.
	  var value = props.value,
	      readonly = props.readonly,
	      disabled = props.disabled,
	      autofocus = props.autofocus,
	      onBlur = props.onBlur,
	      options = props.options,
	      schema = props.schema,
	      formContext = props.formContext,
	      registry = props.registry,
	      inputProps = _objectWithoutProperties(props, ["value", "readonly", "disabled", "autofocus", "onBlur", "options", "schema", "formContext", "registry"]);

	  inputProps.type = options.inputType || inputProps.type || "text";
	  var _onChange = function _onChange(_ref) {
	    var value = _ref.target.value;

	    return props.onChange(value === "" ? options.emptyValue : value);
	  };
	  return _react2.default.createElement("input", _extends({
	    className: "form-control",
	    readOnly: readonly,
	    disabled: disabled,
	    autoFocus: autofocus,
	    value: value == null ? "" : value
	  }, inputProps, {
	    onChange: _onChange,
	    onBlur: onBlur && function (event) {
	      return onBlur(inputProps.id, event.target.value);
	    }
	  }));
	}

	BaseInput.defaultProps = {
	  type: "text",
	  required: false,
	  disabled: false,
	  readonly: false,
	  autofocus: false
	};

	if (process.env.NODE_ENV !== "production") {
	  BaseInput.propTypes = {
	    id: _propTypes2.default.string.isRequired,
	    placeholder: _propTypes2.default.string,
	    value: _propTypes2.default.any,
	    required: _propTypes2.default.bool,
	    disabled: _propTypes2.default.bool,
	    readonly: _propTypes2.default.bool,
	    autofocus: _propTypes2.default.bool,
	    onChange: _propTypes2.default.func,
	    onBlur: _propTypes2.default.func
	  };
	}

	exports.default = BaseInput;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _BaseInput = __webpack_require__(32);

	var _BaseInput2 = _interopRequireDefault(_BaseInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function DateWidget(props) {
	  var _onChange = props.onChange;

	  return _react2.default.createElement(_BaseInput2.default, _extends({
	    type: "date"
	  }, props, {
	    onChange: function onChange(value) {
	      return _onChange(value || undefined);
	    }
	  }));
	}

	if (process.env.NODE_ENV !== "production") {
	  DateWidget.propTypes = {
	    value: _propTypes2.default.string
	  };
	}

	exports.default = DateWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _BaseInput = __webpack_require__(32);

	var _BaseInput2 = _interopRequireDefault(_BaseInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function fromJSONDate(jsonDate) {
	  return jsonDate ? jsonDate.slice(0, 19) : "";
	}

	function toJSONDate(dateString) {
	  if (dateString) {
	    return new Date(dateString).toJSON();
	  }
	}

	function DateTimeWidget(props) {
	  var value = props.value,
	      _onChange = props.onChange;

	  return _react2.default.createElement(_BaseInput2.default, _extends({
	    type: "datetime-local"
	  }, props, {
	    value: fromJSONDate(value),
	    onChange: function onChange(value) {
	      return _onChange(toJSONDate(value));
	    }
	  }));
	}

	if (process.env.NODE_ENV !== "production") {
	  DateTimeWidget.propTypes = {
	    value: _propTypes2.default.string
	  };
	}

	exports.default = DateTimeWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _BaseInput = __webpack_require__(32);

	var _BaseInput2 = _interopRequireDefault(_BaseInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function EmailWidget(props) {
	  return _react2.default.createElement(_BaseInput2.default, _extends({ type: "email" }, props));
	}

	if (process.env.NODE_ENV !== "production") {
	  EmailWidget.propTypes = {
	    value: _propTypes2.default.string
	  };
	}

	exports.default = EmailWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _utils = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function addNameToDataURL(dataURL, name) {
	  return dataURL.replace(";base64", ";name=" + name + ";base64");
	}

	function processFile(file) {
	  var name = file.name,
	      size = file.size,
	      type = file.type;

	  return new Promise(function (resolve, reject) {
	    var reader = new window.FileReader();
	    reader.onload = function (event) {
	      resolve({
	        dataURL: addNameToDataURL(event.target.result, name),
	        name: name,
	        size: size,
	        type: type
	      });
	    };
	    reader.readAsDataURL(file);
	  });
	}

	function processFiles(files) {
	  return Promise.all([].map.call(files, processFile));
	}

	function FilesInfo(props) {
	  var filesInfo = props.filesInfo;

	  if (filesInfo.length === 0) {
	    return null;
	  }
	  return _react2.default.createElement(
	    "ul",
	    { className: "file-info" },
	    filesInfo.map(function (fileInfo, key) {
	      var name = fileInfo.name,
	          size = fileInfo.size,
	          type = fileInfo.type;

	      return _react2.default.createElement(
	        "li",
	        { key: key },
	        _react2.default.createElement(
	          "strong",
	          null,
	          name
	        ),
	        " (",
	        type,
	        ", ",
	        size,
	        " bytes)"
	      );
	    })
	  );
	}

	function extractFileInfo(dataURLs) {
	  return dataURLs.filter(function (dataURL) {
	    return typeof dataURL !== "undefined";
	  }).map(function (dataURL) {
	    var _dataURItoBlob = (0, _utils.dataURItoBlob)(dataURL),
	        blob = _dataURItoBlob.blob,
	        name = _dataURItoBlob.name;

	    return {
	      name: name,
	      size: blob.size,
	      type: blob.type
	    };
	  });
	}

	var FileWidget = function (_Component) {
	  _inherits(FileWidget, _Component);

	  function FileWidget(props) {
	    _classCallCheck(this, FileWidget);

	    var _this = _possibleConstructorReturn(this, (FileWidget.__proto__ || Object.getPrototypeOf(FileWidget)).call(this, props));

	    _this.defaultProps = {
	      multiple: false
	    };

	    _this.onChange = function (event) {
	      var _this$props = _this.props,
	          multiple = _this$props.multiple,
	          onChange = _this$props.onChange;

	      processFiles(event.target.files).then(function (filesInfo) {
	        var state = {
	          values: filesInfo.map(function (fileInfo) {
	            return fileInfo.dataURL;
	          }),
	          filesInfo: filesInfo
	        };
	        (0, _utils.setState)(_this, state, function () {
	          if (multiple) {
	            onChange(state.values);
	          } else {
	            onChange(state.values[0]);
	          }
	        });
	      });
	    };

	    var value = props.value;

	    var values = Array.isArray(value) ? value : [value];
	    _this.state = { values: values, filesInfo: extractFileInfo(values) };
	    return _this;
	  }

	  _createClass(FileWidget, [{
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _utils.shouldRender)(this, nextProps, nextState);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props,
	          multiple = _props.multiple,
	          id = _props.id,
	          readonly = _props.readonly,
	          disabled = _props.disabled,
	          autofocus = _props.autofocus;
	      var filesInfo = this.state.filesInfo;

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "p",
	          null,
	          _react2.default.createElement("input", {
	            ref: function ref(_ref) {
	              return _this2.inputRef = _ref;
	            },
	            id: id,
	            type: "file",
	            disabled: readonly || disabled,
	            onChange: this.onChange,
	            defaultValue: "",
	            autoFocus: autofocus,
	            multiple: multiple
	          })
	        ),
	        _react2.default.createElement(FilesInfo, { filesInfo: filesInfo })
	      );
	    }
	  }]);

	  return FileWidget;
	}(_react.Component);

	FileWidget.defaultProps = {
	  autofocus: false
	};

	if (process.env.NODE_ENV !== "production") {
	  FileWidget.propTypes = {
	    multiple: _propTypes2.default.bool,
	    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
	    autofocus: _propTypes2.default.bool
	  };
	}

	exports.default = FileWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function HiddenWidget(_ref) {
	  var id = _ref.id,
	      value = _ref.value;

	  return _react2.default.createElement("input", {
	    type: "hidden",
	    id: id,
	    value: typeof value === "undefined" ? "" : value
	  });
	}

	if (process.env.NODE_ENV !== "production") {
	  HiddenWidget.propTypes = {
	    id: _propTypes2.default.string.isRequired,
	    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool])
	  };
	}

	exports.default = HiddenWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _BaseInput = __webpack_require__(32);

	var _BaseInput2 = _interopRequireDefault(_BaseInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function PasswordWidget(props) {
	  return _react2.default.createElement(_BaseInput2.default, _extends({ type: "password" }, props));
	}

	if (process.env.NODE_ENV !== "production") {
	  PasswordWidget.propTypes = {
	    value: _propTypes2.default.string
	  };
	}

	exports.default = PasswordWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function RadioWidget(props) {
	  var options = props.options,
	      value = props.value,
	      required = props.required,
	      disabled = props.disabled,
	      readonly = props.readonly,
	      autofocus = props.autofocus,
	      _onChange = props.onChange;
	  // Generating a unique field name to identify this set of radio buttons

	  var name = Math.random().toString();
	  var enumOptions = options.enumOptions,
	      inline = options.inline;
	  // checked={checked} has been moved above name={name}, As mentioned in #349;
	  // this is a temporary fix for radio button rendering bug in React, facebook/react#7630.

	  return _react2.default.createElement(
	    "div",
	    { className: "field-radio-group" },
	    enumOptions.map(function (option, i) {
	      var checked = option.value === value;
	      var disabledCls = disabled || readonly ? "disabled" : "";
	      var radio = _react2.default.createElement(
	        "span",
	        null,
	        _react2.default.createElement("input", {
	          type: "radio",
	          checked: checked,
	          name: name,
	          required: required,
	          value: option.value,
	          disabled: disabled || readonly,
	          autoFocus: autofocus && i === 0,
	          onChange: function onChange(_) {
	            return _onChange(option.value);
	          }
	        }),
	        _react2.default.createElement(
	          "span",
	          null,
	          option.label
	        )
	      );

	      return inline ? _react2.default.createElement(
	        "label",
	        { key: i, className: "radio-inline " + disabledCls },
	        radio
	      ) : _react2.default.createElement(
	        "div",
	        { key: i, className: "radio " + disabledCls },
	        _react2.default.createElement(
	          "label",
	          null,
	          radio
	        )
	      );
	    })
	  );
	}

	RadioWidget.defaultProps = {
	  autofocus: false
	};

	if (process.env.NODE_ENV !== "production") {
	  RadioWidget.propTypes = {
	    schema: _propTypes2.default.object.isRequired,
	    id: _propTypes2.default.string.isRequired,
	    options: _propTypes2.default.shape({
	      enumOptions: _propTypes2.default.array,
	      inline: _propTypes2.default.bool
	    }).isRequired,
	    value: _propTypes2.default.any,
	    required: _propTypes2.default.bool,
	    disabled: _propTypes2.default.bool,
	    readonly: _propTypes2.default.bool,
	    autofocus: _propTypes2.default.bool,
	    onChange: _propTypes2.default.func
	  };
	}
	exports.default = RadioWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _utils = __webpack_require__(13);

	var _BaseInput = __webpack_require__(32);

	var _BaseInput2 = _interopRequireDefault(_BaseInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function RangeWidget(props) {
	  var schema = props.schema,
	      value = props.value;

	  return _react2.default.createElement(
	    "div",
	    { className: "field-range-wrapper" },
	    _react2.default.createElement(_BaseInput2.default, _extends({ type: "range" }, props, (0, _utils.rangeSpec)(schema))),
	    _react2.default.createElement(
	      "span",
	      { className: "range-view" },
	      value
	    )
	  );
	}

	if (process.env.NODE_ENV !== "production") {
	  RangeWidget.propTypes = {
	    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
	  };
	}

	exports.default = RangeWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _utils = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * This is a silly limitation in the DOM where option change event values are
	 * always retrieved as strings.
	 */
	function processValue(_ref, value) {
	  var type = _ref.type,
	      items = _ref.items;

	  if (value === "") {
	    return undefined;
	  } else if (type === "array" && items && ["number", "integer"].includes(items.type)) {
	    return value.map(_utils.asNumber);
	  } else if (type === "boolean") {
	    return value === "true";
	  } else if (type === "number") {
	    return (0, _utils.asNumber)(value);
	  }
	  return value;
	}

	function getValue(event, multiple) {
	  if (multiple) {
	    return [].slice.call(event.target.options).filter(function (o) {
	      return o.selected;
	    }).map(function (o) {
	      return o.value;
	    });
	  } else {
	    return event.target.value;
	  }
	}

	function SelectWidget(props) {
	  var schema = props.schema,
	      id = props.id,
	      options = props.options,
	      value = props.value,
	      required = props.required,
	      disabled = props.disabled,
	      readonly = props.readonly,
	      multiple = props.multiple,
	      autofocus = props.autofocus,
	      _onChange = props.onChange,
	      onBlur = props.onBlur,
	      placeholder = props.placeholder;
	  var enumOptions = options.enumOptions;

	  var emptyValue = multiple ? [] : "";
	  return _react2.default.createElement(
	    "select",
	    {
	      id: id,
	      multiple: multiple,
	      className: "form-control",
	      value: typeof value === "undefined" ? emptyValue : value,
	      required: required,
	      disabled: disabled || readonly,
	      autoFocus: autofocus,
	      onBlur: onBlur && function (event) {
	        var newValue = getValue(event, multiple);
	        onBlur(id, processValue(schema, newValue));
	      },
	      onChange: function onChange(event) {
	        var newValue = getValue(event, multiple);
	        _onChange(processValue(schema, newValue));
	      } },
	    !multiple && !schema.default && _react2.default.createElement(
	      "option",
	      { value: "" },
	      placeholder
	    ),
	    enumOptions.map(function (_ref2, i) {
	      var value = _ref2.value,
	          label = _ref2.label;

	      return _react2.default.createElement(
	        "option",
	        { key: i, value: value },
	        label
	      );
	    })
	  );
	}

	SelectWidget.defaultProps = {
	  autofocus: false
	};

	if (process.env.NODE_ENV !== "production") {
	  SelectWidget.propTypes = {
	    schema: _propTypes2.default.object.isRequired,
	    id: _propTypes2.default.string.isRequired,
	    options: _propTypes2.default.shape({
	      enumOptions: _propTypes2.default.array
	    }).isRequired,
	    value: _propTypes2.default.any,
	    required: _propTypes2.default.bool,
	    disabled: _propTypes2.default.bool,
	    readonly: _propTypes2.default.bool,
	    multiple: _propTypes2.default.bool,
	    autofocus: _propTypes2.default.bool,
	    onChange: _propTypes2.default.func,
	    onBlur: _propTypes2.default.func
	  };
	}

	exports.default = SelectWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function TextareaWidget(props) {
	  var id = props.id,
	      options = props.options,
	      placeholder = props.placeholder,
	      value = props.value,
	      required = props.required,
	      disabled = props.disabled,
	      readonly = props.readonly,
	      autofocus = props.autofocus,
	      onChange = props.onChange,
	      onBlur = props.onBlur;

	  var _onChange = function _onChange(_ref) {
	    var value = _ref.target.value;

	    return onChange(value === "" ? options.emptyValue : value);
	  };
	  return _react2.default.createElement("textarea", {
	    id: id,
	    className: "form-control",
	    value: typeof value === "undefined" ? "" : value,
	    placeholder: placeholder,
	    required: required,
	    disabled: disabled,
	    readOnly: readonly,
	    autoFocus: autofocus,
	    rows: options.rows,
	    onBlur: onBlur && function (event) {
	      return onBlur(id, event.target.value);
	    },
	    onChange: _onChange
	  });
	}

	TextareaWidget.defaultProps = {
	  autofocus: false,
	  options: {}
	};

	if (process.env.NODE_ENV !== "production") {
	  TextareaWidget.propTypes = {
	    schema: _propTypes2.default.object.isRequired,
	    id: _propTypes2.default.string.isRequired,
	    placeholder: _propTypes2.default.string,
	    options: _propTypes2.default.shape({
	      rows: _propTypes2.default.number
	    }),
	    value: _propTypes2.default.string,
	    required: _propTypes2.default.bool,
	    disabled: _propTypes2.default.bool,
	    readonly: _propTypes2.default.bool,
	    autofocus: _propTypes2.default.bool,
	    onChange: _propTypes2.default.func,
	    onBlur: _propTypes2.default.func
	  };
	}

	exports.default = TextareaWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _BaseInput = __webpack_require__(32);

	var _BaseInput2 = _interopRequireDefault(_BaseInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function TextWidget(props) {
	  return _react2.default.createElement(_BaseInput2.default, props);
	}

	if (process.env.NODE_ENV !== "production") {
	  TextWidget.propTypes = {
	    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
	  };
	}

	exports.default = TextWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _BaseInput = __webpack_require__(32);

	var _BaseInput2 = _interopRequireDefault(_BaseInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function URLWidget(props) {
	  return _react2.default.createElement(_BaseInput2.default, _extends({ type: "url" }, props));
	}

	if (process.env.NODE_ENV !== "production") {
	  URLWidget.propTypes = {
	    value: _propTypes2.default.string
	  };
	}

	exports.default = URLWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _utils = __webpack_require__(13);

	var _BaseInput = __webpack_require__(32);

	var _BaseInput2 = _interopRequireDefault(_BaseInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function UpDownWidget(props) {
	  return _react2.default.createElement(_BaseInput2.default, _extends({ type: "number" }, props, (0, _utils.rangeSpec)(props.schema)));
	}

	if (process.env.NODE_ENV !== "production") {
	  UpDownWidget.propTypes = {
	    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
	  };
	}

	exports.default = UpDownWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.toErrorList = toErrorList;
	exports.default = validateFormData;

	var _lodash = __webpack_require__(47);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _jsonschema = __webpack_require__(48);

	var _utils = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function toErrorSchema(errors) {
	  // Transforms a jsonschema validation errors list:
	  // [
	  //   {property: "instance.level1.level2[2].level3", message: "err a"},
	  //   {property: "instance.level1.level2[2].level3", message: "err b"},
	  //   {property: "instance.level1.level2[4].level3", message: "err b"},
	  // ]
	  // Into an error tree:
	  // {
	  //   level1: {
	  //     level2: {
	  //       2: {level3: {errors: ["err a", "err b"]}},
	  //       4: {level3: {errors: ["err b"]}},
	  //     }
	  //   }
	  // };
	  if (!errors.length) {
	    return {};
	  }
	  return errors.reduce(function (errorSchema, error) {
	    var property = error.property,
	        message = error.message;

	    var path = (0, _lodash2.default)(property);
	    var parent = errorSchema;
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = path.slice(1)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var segment = _step.value;

	        if (!(segment in parent)) {
	          parent[segment] = {};
	        }
	        parent = parent[segment];
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }

	    if (Array.isArray(parent.__errors)) {
	      // We store the list of errors for this node in a property named __errors
	      // to avoid name collision with a possible sub schema field named
	      // "errors" (see `validate.createErrorHandler`).
	      parent.__errors = parent.__errors.concat(message);
	    } else {
	      parent.__errors = [message];
	    }
	    return errorSchema;
	  }, {});
	}

	function toErrorList(errorSchema) {
	  var fieldName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "root";

	  // XXX: We should transform fieldName as a full field path string.
	  var errorList = [];
	  if ("__errors" in errorSchema) {
	    errorList = errorList.concat(errorSchema.__errors.map(function (stack) {
	      return {
	        stack: fieldName + ": " + stack
	      };
	    }));
	  }
	  return Object.keys(errorSchema).reduce(function (acc, key) {
	    if (key !== "__errors") {
	      acc = acc.concat(toErrorList(errorSchema[key], key));
	    }
	    return acc;
	  }, errorList);
	}

	function createErrorHandler(formData) {
	  var handler = {
	    // We store the list of errors for this node in a property named __errors
	    // to avoid name collision with a possible sub schema field named
	    // "errors" (see `utils.toErrorSchema`).
	    __errors: [],
	    addError: function addError(message) {
	      this.__errors.push(message);
	    }
	  };
	  if ((0, _utils.isObject)(formData)) {
	    return Object.keys(formData).reduce(function (acc, key) {
	      return _extends({}, acc, _defineProperty({}, key, createErrorHandler(formData[key])));
	    }, handler);
	  }
	  if (Array.isArray(formData)) {
	    return formData.reduce(function (acc, value, key) {
	      return _extends({}, acc, _defineProperty({}, key, createErrorHandler(value)));
	    }, handler);
	  }
	  return handler;
	}

	function unwrapErrorHandler(errorHandler) {
	  return Object.keys(errorHandler).reduce(function (acc, key) {
	    if (key === "addError") {
	      return acc;
	    } else if (key === "__errors") {
	      return _extends({}, acc, _defineProperty({}, key, errorHandler[key]));
	    }
	    return _extends({}, acc, _defineProperty({}, key, unwrapErrorHandler(errorHandler[key])));
	  }, {});
	}

	/**
	 * This function processes the formData with a user `validate` contributed
	 * function, which receives the form data and an `errorHandler` object that
	 * will be used to add custom validation errors for each field.
	 */
	function validateFormData(formData, schema, customValidate, transformErrors) {
	  var _jsonValidate = (0, _jsonschema.validate)(formData, schema),
	      errors = _jsonValidate.errors;

	  if (typeof transformErrors === "function") {
	    errors = transformErrors(errors);
	  }
	  var errorSchema = toErrorSchema(errors);

	  if (typeof customValidate !== "function") {
	    return { errors: errors, errorSchema: errorSchema };
	  }

	  var errorHandler = customValidate(formData, createErrorHandler(formData));
	  var userErrorSchema = unwrapErrorHandler(errorHandler);
	  var newErrorSchema = (0, _utils.mergeObjects)(errorSchema, userErrorSchema, true);
	  // XXX: The errors list produced is not fully compliant with the format
	  // exposed by the jsonschema lib, which contains full field paths and other
	  // properties.
	  var newErrors = toErrorList(newErrorSchema);

	  return { errors: newErrors, errorSchema: newErrorSchema };
	}

/***/ },
/* 47 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    symbolTag = '[object Symbol]';

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/** Built-in value references. */
	var Symbol = root.Symbol,
	    splice = arrayProto.splice;

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map'),
	    nativeCreate = getNative(Object, 'create');

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  string = toString(string);

	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	/**
	 * Converts `value` to a property path array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Util
	 * @param {*} value The value to convert.
	 * @returns {Array} Returns the new property path array.
	 * @example
	 *
	 * _.toPath('a.b.c');
	 * // => ['a', 'b', 'c']
	 *
	 * _.toPath('a[0].b.c');
	 * // => ['a', '0', 'b', 'c']
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return arrayMap(value, toKey);
	  }
	  return isSymbol(value) ? [value] : copyArray(stringToPath(value));
	}

	module.exports = toPath;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Validator = module.exports.Validator = __webpack_require__(49);

	module.exports.ValidatorResult = __webpack_require__(58).ValidatorResult;
	module.exports.ValidationError = __webpack_require__(58).ValidationError;
	module.exports.SchemaError = __webpack_require__(58).SchemaError;

	module.exports.validate = function (instance, schema, options) {
	  var v = new Validator();
	  return v.validate(instance, schema, options);
	};


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var urilib = __webpack_require__(50);

	var attribute = __webpack_require__(57);
	var helpers = __webpack_require__(58);
	var ValidatorResult = helpers.ValidatorResult;
	var SchemaError = helpers.SchemaError;
	var SchemaContext = helpers.SchemaContext;

	/**
	 * Creates a new Validator object
	 * @name Validator
	 * @constructor
	 */
	var Validator = function Validator () {
	  // Allow a validator instance to override global custom formats or to have their
	  // own custom formats.
	  this.customFormats = Object.create(Validator.prototype.customFormats);
	  this.schemas = {};
	  this.unresolvedRefs = [];

	  // Use Object.create to make this extensible without Validator instances stepping on each other's toes.
	  this.types = Object.create(types);
	  this.attributes = Object.create(attribute.validators);
	};

	// Allow formats to be registered globally.
	Validator.prototype.customFormats = {};

	// Hint at the presence of a property
	Validator.prototype.schemas = null;
	Validator.prototype.types = null;
	Validator.prototype.attributes = null;
	Validator.prototype.unresolvedRefs = null;

	/**
	 * Adds a schema with a certain urn to the Validator instance.
	 * @param schema
	 * @param urn
	 * @return {Object}
	 */
	Validator.prototype.addSchema = function addSchema (schema, uri) {
	  if (!schema) {
	    return null;
	  }
	  var ourUri = uri || schema.id;
	  this.addSubSchema(ourUri, schema);
	  if (ourUri) {
	    this.schemas[ourUri] = schema;
	  }
	  return this.schemas[ourUri];
	};

	Validator.prototype.addSubSchema = function addSubSchema(baseuri, schema) {
	  if(!schema || typeof schema!='object') return;
	  // Mark all referenced schemas so we can tell later which schemas are referred to, but never defined
	  if(schema.$ref){
	    var resolvedUri = urilib.resolve(baseuri, schema.$ref);
	    // Only mark unknown schemas as unresolved
	    if (this.schemas[resolvedUri] === undefined) {
	      this.schemas[resolvedUri] = null;
	      this.unresolvedRefs.push(resolvedUri);
	    }
	    return;
	  }
	  var ourUri = schema.id && urilib.resolve(baseuri, schema.id);
	  var ourBase = ourUri || baseuri;
	  if (ourUri) {
	    if(this.schemas[ourUri]){
	      if(!helpers.deepCompareStrict(this.schemas[ourUri], schema)){
	        throw new Error('Schema <'+schema+'> already exists with different definition');
	      }
	      return this.schemas[ourUri];
	    }
	    this.schemas[ourUri] = schema;
	    var documentUri = ourUri.replace(/^([^#]*)#$/, '$1');
	    this.schemas[documentUri] = schema;
	  }
	  this.addSubSchemaArray(ourBase, ((schema.items instanceof Array)?schema.items:[schema.items]));
	  this.addSubSchemaArray(ourBase, ((schema.extends instanceof Array)?schema.extends:[schema.extends]));
	  this.addSubSchema(ourBase, schema.additionalItems);
	  this.addSubSchemaObject(ourBase, schema.properties);
	  this.addSubSchema(ourBase, schema.additionalProperties);
	  this.addSubSchemaObject(ourBase, schema.definitions);
	  this.addSubSchemaObject(ourBase, schema.patternProperties);
	  this.addSubSchemaObject(ourBase, schema.dependencies);
	  this.addSubSchemaArray(ourBase, schema.disallow);
	  this.addSubSchemaArray(ourBase, schema.allOf);
	  this.addSubSchemaArray(ourBase, schema.anyOf);
	  this.addSubSchemaArray(ourBase, schema.oneOf);
	  this.addSubSchema(ourBase, schema.not);
	  return this.schemas[ourUri];
	};

	Validator.prototype.addSubSchemaArray = function addSubSchemaArray(baseuri, schemas) {
	  if(!(schemas instanceof Array)) return;
	  for(var i=0; i<schemas.length; i++){
	    this.addSubSchema(baseuri, schemas[i]);
	  }
	};

	Validator.prototype.addSubSchemaObject = function addSubSchemaArray(baseuri, schemas) {
	  if(!schemas || typeof schemas!='object') return;
	  for(var p in schemas){
	    this.addSubSchema(baseuri, schemas[p]);
	  }
	};



	/**
	 * Sets all the schemas of the Validator instance.
	 * @param schemas
	 */
	Validator.prototype.setSchemas = function setSchemas (schemas) {
	  this.schemas = schemas;
	};

	/**
	 * Returns the schema of a certain urn
	 * @param urn
	 */
	Validator.prototype.getSchema = function getSchema (urn) {
	  return this.schemas[urn];
	};

	/**
	 * Validates instance against the provided schema
	 * @param instance
	 * @param schema
	 * @param [options]
	 * @param [ctx]
	 * @return {Array}
	 */
	Validator.prototype.validate = function validate (instance, schema, options, ctx) {
	  if (!options) {
	    options = {};
	  }
	  var propertyName = options.propertyName || 'instance';
	  // This will work so long as the function at uri.resolve() will resolve a relative URI to a relative URI
	  var base = urilib.resolve(options.base||'/', schema.id||'');
	  if(!ctx){
	    ctx = new SchemaContext(schema, options, propertyName, base, Object.create(this.schemas));
	    if (!ctx.schemas[base]) {
	      ctx.schemas[base] = schema;
	    }
	  }
	  if (schema) {
	    var result = this.validateSchema(instance, schema, options, ctx);
	    if (!result) {
	      throw new Error('Result undefined');
	    }
	    return result;
	  }
	  throw new SchemaError('no schema specified', schema);
	};

	/**
	* @param Object schema
	* @return mixed schema uri or false
	*/
	function shouldResolve(schema) {
	  var ref = (typeof schema === 'string') ? schema : schema.$ref;
	  if (typeof ref=='string') return ref;
	  return false;
	}

	/**
	 * Validates an instance against the schema (the actual work horse)
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @private
	 * @return {ValidatorResult}
	 */
	Validator.prototype.validateSchema = function validateSchema (instance, schema, options, ctx) {
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!schema) {
	    throw new Error("schema is undefined");
	  }

	  if (schema['extends']) {
	    if (schema['extends'] instanceof Array) {
	      var schemaobj = {schema: schema, ctx: ctx};
	      schema['extends'].forEach(this.schemaTraverser.bind(this, schemaobj));
	      schema = schemaobj.schema;
	      schemaobj.schema = null;
	      schemaobj.ctx = null;
	      schemaobj = null;
	    } else {
	      schema = helpers.deepMerge(schema, this.superResolve(schema['extends'], ctx));
	    }
	  }

	  var switchSchema;
	  if (switchSchema = shouldResolve(schema)) {
	    var resolved = this.resolve(schema, switchSchema, ctx);
	    var subctx = new SchemaContext(resolved.subschema, options, ctx.propertyPath, resolved.switchSchema, ctx.schemas);
	    return this.validateSchema(instance, resolved.subschema, options, subctx);
	  }

	  var skipAttributes = options && options.skipAttributes || [];
	  // Validate each schema attribute against the instance
	  for (var key in schema) {
	    if (!attribute.ignoreProperties[key] && skipAttributes.indexOf(key) < 0) {
	      var validatorErr = null;
	      var validator = this.attributes[key];
	      if (validator) {
	        validatorErr = validator.call(this, instance, schema, options, ctx);
	      } else if (options.allowUnknownAttributes === false) {
	        // This represents an error with the schema itself, not an invalid instance
	        throw new SchemaError("Unsupported attribute: " + key, schema);
	      }
	      if (validatorErr) {
	        result.importErrors(validatorErr);
	      }
	    }
	  }

	  if (typeof options.rewrite == 'function') {
	    var value = options.rewrite.call(this, instance, schema, options, ctx);
	    result.instance = value;
	  }
	  return result;
	};

	/**
	* @private
	* @param Object schema
	* @param SchemaContext ctx
	* @returns Object schema or resolved schema
	*/
	Validator.prototype.schemaTraverser = function schemaTraverser (schemaobj, s) {
	  schemaobj.schema = helpers.deepMerge(schemaobj.schema, this.superResolve(s, schemaobj.ctx));
	}

	/**
	* @private
	* @param Object schema
	* @param SchemaContext ctx
	* @returns Object schema or resolved schema
	*/
	Validator.prototype.superResolve = function superResolve (schema, ctx) {
	  var ref;
	  if(ref = shouldResolve(schema)) {
	    return this.resolve(schema, ref, ctx).subschema;
	  }
	  return schema;
	}

	/**
	* @private
	* @param Object schema
	* @param Object switchSchema
	* @param SchemaContext ctx
	* @return Object resolved schemas {subschema:String, switchSchema: String}
	* @thorws SchemaError
	*/
	Validator.prototype.resolve = function resolve (schema, switchSchema, ctx) {
	  switchSchema = ctx.resolve(switchSchema);
	  // First see if the schema exists under the provided URI
	  if (ctx.schemas[switchSchema]) {
	    return {subschema: ctx.schemas[switchSchema], switchSchema: switchSchema};
	  }
	  // Else try walking the property pointer
	  var parsed = urilib.parse(switchSchema);
	  var fragment = parsed && parsed.hash;
	  var document = fragment && fragment.length && switchSchema.substr(0, switchSchema.length - fragment.length);
	  if (!document || !ctx.schemas[document]) {
	    throw new SchemaError("no such schema <" + switchSchema + ">", schema);
	  }
	  var subschema = helpers.objectGetPath(ctx.schemas[document], fragment.substr(1));
	  if(subschema===undefined){
	    throw new SchemaError("no such schema " + fragment + " located in <" + document + ">", schema);
	  }
	  return {subschema: subschema, switchSchema: switchSchema};
	};

	/**
	 * Tests whether the instance if of a certain type.
	 * @private
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @param type
	 * @return {boolean}
	 */
	Validator.prototype.testType = function validateType (instance, schema, options, ctx, type) {
	  if (typeof this.types[type] == 'function') {
	    return this.types[type].call(this, instance);
	  }
	  if (type && typeof type == 'object') {
	    var res = this.validateSchema(instance, type, options, ctx);
	    return res === undefined || !(res && res.errors.length);
	  }
	  // Undefined or properties not on the list are acceptable, same as not being defined
	  return true;
	};

	var types = Validator.prototype.types = {};
	types.string = function testString (instance) {
	  return typeof instance == 'string';
	};
	types.number = function testNumber (instance) {
	  // isFinite returns false for NaN, Infinity, and -Infinity
	  return typeof instance == 'number' && isFinite(instance);
	};
	types.integer = function testInteger (instance) {
	  return (typeof instance == 'number') && instance % 1 === 0;
	};
	types.boolean = function testBoolean (instance) {
	  return typeof instance == 'boolean';
	};
	types.array = function testArray (instance) {
	  return instance instanceof Array;
	};
	types['null'] = function testNull (instance) {
	  return instance === null;
	};
	types.date = function testDate (instance) {
	  return instance instanceof Date;
	};
	types.any = function testAny (instance) {
	  return true;
	};
	types.object = function testObject (instance) {
	  // TODO: fix this - see #15
	  return instance && (typeof instance) === 'object' && !(instance instanceof Array) && !(instance instanceof Date);
	};

	module.exports = Validator;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var punycode = __webpack_require__(51);
	var util = __webpack_require__(53);

	exports.parse = urlParse;
	exports.resolve = urlResolve;
	exports.resolveObject = urlResolveObject;
	exports.format = urlFormat;

	exports.Url = Url;

	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}

	// Reference: RFC 3986, RFC 1808, RFC 2396

	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,

	    // Special case for a simple path URL
	    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

	    // RFC 2396: characters not allowed for various reasons.
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = ['\''].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    },
	    querystring = __webpack_require__(54);

	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && util.isObject(url) && url instanceof Url) return url;

	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}

	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!util.isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }

	  // Copy chrome, IE, opera backslash-handling behavior.
	  // Back slashes before the query string get converted to forward slashes
	  // See: https://code.google.com/p/chromium/issues/detail?id=25916
	  var queryIndex = url.indexOf('?'),
	      splitter =
	          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
	      uSplit = url.split(splitter),
	      slashRegex = /\\/g;
	  uSplit[0] = uSplit[0].replace(slashRegex, '/');
	  url = uSplit.join(splitter);

	  var rest = url;

	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();

	  if (!slashesDenoteHost && url.split('#').length === 1) {
	    // Try fast path regexp
	    var simplePath = simplePathPattern.exec(rest);
	    if (simplePath) {
	      this.path = rest;
	      this.href = rest;
	      this.pathname = simplePath[1];
	      if (simplePath[2]) {
	        this.search = simplePath[2];
	        if (parseQueryString) {
	          this.query = querystring.parse(this.search.substr(1));
	        } else {
	          this.query = this.search.substr(1);
	        }
	      } else if (parseQueryString) {
	        this.search = '';
	        this.query = {};
	      }
	      return this;
	    }
	  }

	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }

	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }

	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {

	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c

	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.

	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }

	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }

	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }

	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1)
	      hostEnd = rest.length;

	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);

	    // pull out port.
	    this.parseHost();

	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';

	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';

	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }

	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }

	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a punycoded representation of "domain".
	      // It only converts parts of the domain name that
	      // have non-ASCII characters, i.e. it doesn't matter if
	      // you call it with a domain that already is ASCII-only.
	      this.hostname = punycode.toASCII(this.hostname);
	    }

	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;

	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }

	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {

	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      if (rest.indexOf(ae) === -1)
	        continue;
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }


	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }

	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }

	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};

	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (util.isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}

	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }

	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';

	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }

	  if (this.query &&
	      util.isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }

	  var search = this.search || (query && ('?' + query)) || '';

	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }

	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;

	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');

	  return protocol + host + pathname + search + hash;
	};

	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}

	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};

	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}

	Url.prototype.resolveObject = function(relative) {
	  if (util.isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }

	  var result = new Url();
	  var tkeys = Object.keys(this);
	  for (var tk = 0; tk < tkeys.length; tk++) {
	    var tkey = tkeys[tk];
	    result[tkey] = this[tkey];
	  }

	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;

	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }

	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    var rkeys = Object.keys(relative);
	    for (var rk = 0; rk < rkeys.length; rk++) {
	      var rkey = rkeys[rk];
	      if (rkey !== 'protocol')
	        result[rkey] = relative[rkey];
	    }

	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }

	    result.href = result.format();
	    return result;
	  }

	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      var keys = Object.keys(relative);
	      for (var v = 0; v < keys.length; v++) {
	        var k = keys[v];
	        result[k] = relative[k];
	      }
	      result.href = result.format();
	      return result;
	    }

	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }

	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];

	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }

	  if (isRelAbs) {
	    // it's absolute.
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!util.isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especially happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }

	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }

	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host || srcPath.length > 1) &&
	      (last === '.' || last === '..') || last === '');

	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last === '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }

	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }

	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }

	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');

	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especially happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }

	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }

	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }

	  //to support request.http
	  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};

	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function(root) {

		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}

		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,

		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'

		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},

		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,

		/** Temporary variable */
		key;

		/*--------------------------------------------------------------------------*/

		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}

		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;

			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;

				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);

			}

			return ucs2encode(output);
		}

		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);

			// Cache the length
			inputLength = input.length;

			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;

			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.

			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}

			// Main encoding loop:
			while (handledCPCount < inputLength) {

				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;

			}
			return output.join('');
		}

		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}

		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}

		/*--------------------------------------------------------------------------*/

		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)(module), (function() { return this; }())))

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  isString: function(arg) {
	    return typeof(arg) === 'string';
	  },
	  isObject: function(arg) {
	    return typeof(arg) === 'object' && arg !== null;
	  },
	  isNull: function(arg) {
	    return arg === null;
	  },
	  isNullOrUndefined: function(arg) {
	    return arg == null;
	  }
	};


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(55);
	exports.encode = exports.stringify = __webpack_require__(56);


/***/ },
/* 55 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};


/***/ },
/* 56 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var helpers = __webpack_require__(58);

	/** @type ValidatorResult */
	var ValidatorResult = helpers.ValidatorResult;
	/** @type SchemaError */
	var SchemaError = helpers.SchemaError;

	var attribute = {};

	attribute.ignoreProperties = {
	  // informative properties
	  'id': true,
	  'default': true,
	  'description': true,
	  'title': true,
	  // arguments to other properties
	  'exclusiveMinimum': true,
	  'exclusiveMaximum': true,
	  'additionalItems': true,
	  // special-handled properties
	  '$schema': true,
	  '$ref': true,
	  'extends': true
	};

	/**
	 * @name validators
	 */
	var validators = attribute.validators = {};

	/**
	 * Validates whether the instance if of a certain type
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {ValidatorResult|null}
	 */
	validators.type = function validateType (instance, schema, options, ctx) {
	  // Ignore undefined instances
	  if (instance === undefined) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var types = Array.isArray(schema.type) ? schema.type : [schema.type];
	  if (!types.some(this.testType.bind(this, instance, schema, options, ctx))) {
	    var list = types.map(function (v) {
	      return v.id && ('<' + v.id + '>') || (v+'');
	    });
	    result.addError({
	      name: 'type',
	      argument: list,
	      message: "is not of a type(s) " + list,
	    });
	  }
	  return result;
	};

	function testSchema(instance, options, ctx, callback, schema){
	  var res = this.validateSchema(instance, schema, options, ctx);
	  if (! res.valid && callback instanceof Function) {
	    callback(res);
	  }
	  return res.valid;
	}

	/**
	 * Validates whether the instance matches some of the given schemas
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {ValidatorResult|null}
	 */
	validators.anyOf = function validateAnyOf (instance, schema, options, ctx) {
	  // Ignore undefined instances
	  if (instance === undefined) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var inner = new ValidatorResult(instance, schema, options, ctx);
	  if (!Array.isArray(schema.anyOf)){
	    throw new SchemaError("anyOf must be an array");
	  }
	  if (!schema.anyOf.some(
	    testSchema.bind(
	      this, instance, options, ctx, function(res){inner.importErrors(res);}
	      ))) {
	    var list = schema.anyOf.map(function (v, i) {
	      return (v.id && ('<' + v.id + '>')) || (v.title && JSON.stringify(v.title)) || (v['$ref'] && ('<' + v['$ref'] + '>')) || '[subschema '+i+']';
	    });
	    if (options.nestedErrors) {
	      result.importErrors(inner);
	    }
	    result.addError({
	      name: 'anyOf',
	      argument: list,
	      message: "is not any of " + list.join(','),
	    });
	  }
	  return result;
	};

	/**
	 * Validates whether the instance matches every given schema
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {String|null}
	 */
	validators.allOf = function validateAllOf (instance, schema, options, ctx) {
	  // Ignore undefined instances
	  if (instance === undefined) {
	    return null;
	  }
	  if (!Array.isArray(schema.allOf)){
	    throw new SchemaError("allOf must be an array");
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var self = this;
	  schema.allOf.forEach(function(v, i){
	    var valid = self.validateSchema(instance, v, options, ctx);
	    if(!valid.valid){
	      var msg = (v.id && ('<' + v.id + '>')) || (v.title && JSON.stringify(v.title)) || (v['$ref'] && ('<' + v['$ref'] + '>')) || '[subschema '+i+']';
	      result.addError({
	        name: 'allOf',
	        argument: { id: msg, length: valid.errors.length, valid: valid },
	        message: 'does not match allOf schema ' + msg + ' with ' + valid.errors.length + ' error[s]:',
	      });
	      result.importErrors(valid);
	    }
	  });
	  return result;
	};

	/**
	 * Validates whether the instance matches exactly one of the given schemas
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {String|null}
	 */
	validators.oneOf = function validateOneOf (instance, schema, options, ctx) {
	  // Ignore undefined instances
	  if (instance === undefined) {
	    return null;
	  }
	  if (!Array.isArray(schema.oneOf)){
	    throw new SchemaError("oneOf must be an array");
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var inner = new ValidatorResult(instance, schema, options, ctx);
	  var count = schema.oneOf.filter(
	    testSchema.bind(
	      this, instance, options, ctx, function(res) {inner.importErrors(res);}
	      ) ).length;
	  var list = schema.oneOf.map(function (v, i) {
	    return (v.id && ('<' + v.id + '>')) || (v.title && JSON.stringify(v.title)) || (v['$ref'] && ('<' + v['$ref'] + '>')) || '[subschema '+i+']';
	  });
	  if (count!==1) {
	    if (options.nestedErrors) {
	      result.importErrors(inner);
	    }
	    result.addError({
	      name: 'oneOf',
	      argument: list,
	      message: "is not exactly one from " + list.join(','),
	    });
	  }
	  return result;
	};

	/**
	 * Validates properties
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {String|null|ValidatorResult}
	 */
	validators.properties = function validateProperties (instance, schema, options, ctx) {
	  if(instance === undefined || !(instance instanceof Object)) return;
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var properties = schema.properties || {};
	  for (var property in properties) {
	    var prop = (instance || undefined) && instance[property];
	    var res = this.validateSchema(prop, properties[property], options, ctx.makeChild(properties[property], property));
	    if(res.instance !== result.instance[property]) result.instance[property] = res.instance;
	    result.importErrors(res);
	  }
	  return result;
	};

	/**
	 * Test a specific property within in instance against the additionalProperties schema attribute
	 * This ignores properties with definitions in the properties schema attribute, but no other attributes.
	 * If too many more types of property-existance tests pop up they may need their own class of tests (like `type` has)
	 * @private
	 * @return {boolean}
	 */
	function testAdditionalProperty (instance, schema, options, ctx, property, result) {
	  if (schema.properties && schema.properties[property] !== undefined) {
	    return;
	  }
	  if (schema.additionalProperties === false) {
	    result.addError({
	      name: 'additionalProperties',
	      argument: property,
	      message: "additionalProperty " + JSON.stringify(property) + " exists in instance when not allowed",
	    });
	  } else {
	    var additionalProperties = schema.additionalProperties || {};
	    var res = this.validateSchema(instance[property], additionalProperties, options, ctx.makeChild(additionalProperties, property));
	    if(res.instance !== result.instance[property]) result.instance[property] = res.instance;
	    result.importErrors(res);
	  }
	}

	/**
	 * Validates patternProperties
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {String|null|ValidatorResult}
	 */
	validators.patternProperties = function validatePatternProperties (instance, schema, options, ctx) {
	  if(instance === undefined) return;
	  if(!this.types.object(instance)) return;
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var patternProperties = schema.patternProperties || {};

	  for (var property in instance) {
	    var test = true;
	    for (var pattern in patternProperties) {
	      var expr = new RegExp(pattern);
	      if (!expr.test(property)) {
	        continue;
	      }
	      test = false;
	      var res = this.validateSchema(instance[property], patternProperties[pattern], options, ctx.makeChild(patternProperties[pattern], property));
	      if(res.instance !== result.instance[property]) result.instance[property] = res.instance;
	      result.importErrors(res);
	    }
	    if (test) {
	      testAdditionalProperty.call(this, instance, schema, options, ctx, property, result);
	    }
	  }

	  return result;
	};

	/**
	 * Validates additionalProperties
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {String|null|ValidatorResult}
	 */
	validators.additionalProperties = function validateAdditionalProperties (instance, schema, options, ctx) {
	  if(instance === undefined) return;
	  if(!this.types.object(instance)) return;
	  // if patternProperties is defined then we'll test when that one is called instead
	  if (schema.patternProperties) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  for (var property in instance) {
	    testAdditionalProperty.call(this, instance, schema, options, ctx, property, result);
	  }
	  return result;
	};

	/**
	 * Validates whether the instance value is at least of a certain length, when the instance value is a string.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.minProperties = function validateMinProperties (instance, schema, options, ctx) {
	  if (!instance || typeof instance !== 'object') {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var keys = Object.keys(instance);
	  if (!(keys.length >= schema.minProperties)) {
	    result.addError({
	      name: 'minProperties',
	      argument: schema.minProperties,
	      message: "does not meet minimum property length of " + schema.minProperties,
	    })
	  }
	  return result;
	};

	/**
	 * Validates whether the instance value is at most of a certain length, when the instance value is a string.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.maxProperties = function validateMaxProperties (instance, schema, options, ctx) {
	  if (!instance || typeof instance !== 'object') {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var keys = Object.keys(instance);
	  if (!(keys.length <= schema.maxProperties)) {
	    result.addError({
	      name: 'maxProperties',
	      argument: schema.maxProperties,
	      message: "does not meet maximum property length of " + schema.maxProperties,
	    });
	  }
	  return result;
	};

	/**
	 * Validates items when instance is an array
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {String|null|ValidatorResult}
	 */
	validators.items = function validateItems (instance, schema, options, ctx) {
	  if (!Array.isArray(instance)) {
	    return null;
	  }
	  var self = this;
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (instance === undefined || !schema.items) {
	    return result;
	  }
	  instance.every(function (value, i) {
	    var items = Array.isArray(schema.items) ? (schema.items[i] || schema.additionalItems) : schema.items;
	    if (items === undefined) {
	      return true;
	    }
	    if (items === false) {
	      result.addError({
	        name: 'items',
	        message: "additionalItems not permitted",
	      });
	      return false;
	    }
	    var res = self.validateSchema(value, items, options, ctx.makeChild(items, i));
	    if(res.instance !== result.instance[i]) result.instance[i] = res.instance;
	    result.importErrors(res);
	    return true;
	  });
	  return result;
	};

	/**
	 * Validates minimum and exclusiveMinimum when the type of the instance value is a number.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.minimum = function validateMinimum (instance, schema, options, ctx) {
	  if (typeof instance !== 'number') {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var valid = true;
	  if (schema.exclusiveMinimum && schema.exclusiveMinimum === true) {
	    valid = instance > schema.minimum;
	  } else {
	    valid = instance >= schema.minimum;
	  }
	  if (!valid) {
	    result.addError({
	      name: 'minimum',
	      argument: schema.minimum,
	      message: "must have a minimum value of " + schema.minimum,
	    });
	  }
	  return result;
	};

	/**
	 * Validates maximum and exclusiveMaximum when the type of the instance value is a number.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.maximum = function validateMaximum (instance, schema, options, ctx) {
	  if (typeof instance !== 'number') {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var valid;
	  if (schema.exclusiveMaximum && schema.exclusiveMaximum === true) {
	    valid = instance < schema.maximum;
	  } else {
	    valid = instance <= schema.maximum;
	  }
	  if (!valid) {
	    result.addError({
	      name: 'maximum',
	      argument: schema.maximum,
	      message: "must have a maximum value of " + schema.maximum,
	    });
	  }
	  return result;
	};

	/**
	 * Validates divisibleBy when the type of the instance value is a number.
	 * Of course, this is susceptible to floating point error since it compares the floating points
	 * and not the JSON byte sequences to arbitrary precision.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.divisibleBy = function validateDivisibleBy (instance, schema, options, ctx) {
	  if (typeof instance !== 'number') {
	    return null;
	  }

	  if (schema.divisibleBy == 0) {
	    throw new SchemaError("divisibleBy cannot be zero");
	  }

	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (instance / schema.divisibleBy % 1) {
	    result.addError({
	      name: 'divisibleBy',
	      argument: schema.divisibleBy,
	      message: "is not divisible by (multiple of) " + JSON.stringify(schema.divisibleBy),
	    });
	  }
	  return result;
	};

	/**
	 * Validates divisibleBy when the type of the instance value is a number.
	 * Of course, this is susceptible to floating point error since it compares the floating points
	 * and not the JSON byte sequences to arbitrary precision.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.multipleOf = function validateMultipleOf (instance, schema, options, ctx) {
	  if (typeof instance !== 'number') {
	    return null;
	  }

	  if (schema.multipleOf == 0) {
	    throw new SchemaError("multipleOf cannot be zero");
	  }

	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (instance / schema.multipleOf % 1) {
	    result.addError({
	      name: 'multipleOf',
	      argument:  schema.multipleOf,
	      message: "is not a multiple of (divisible by) " + JSON.stringify(schema.multipleOf),
	    });
	  }
	  return result;
	};

	/**
	 * Validates whether the instance value is present.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.required = function validateRequired (instance, schema, options, ctx) {
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (instance === undefined && schema.required === true) {
	    result.addError({
	      name: 'required',
	      message: "is required"
	    });
	  } else if (instance && typeof instance==='object' && Array.isArray(schema.required)) {
	    schema.required.forEach(function(n){
	      if(instance[n]===undefined){
	        result.addError({
	          name: 'required',
	          argument: n,
	          message: "requires property " + JSON.stringify(n),
	        });
	      }
	    });
	  }
	  return result;
	};

	/**
	 * Validates whether the instance value matches the regular expression, when the instance value is a string.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.pattern = function validatePattern (instance, schema, options, ctx) {
	  if (typeof instance !== 'string') {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!instance.match(schema.pattern)) {
	    result.addError({
	      name: 'pattern',
	      argument: schema.pattern,
	      message: "does not match pattern " + JSON.stringify(schema.pattern),
	    });
	  }
	  return result;
	};

	/**
	 * Validates whether the instance value is of a certain defined format or a custom
	 * format.
	 * The following formats are supported for string types:
	 *   - date-time
	 *   - date
	 *   - time
	 *   - ip-address
	 *   - ipv6
	 *   - uri
	 *   - color
	 *   - host-name
	 *   - alpha
	 *   - alpha-numeric
	 *   - utc-millisec
	 * @param instance
	 * @param schema
	 * @param [options]
	 * @param [ctx]
	 * @return {String|null}
	 */
	validators.format = function validateFormat (instance, schema, options, ctx) {
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!result.disableFormat && !helpers.isFormat(instance, schema.format, this)) {
	    result.addError({
	      name: 'format',
	      argument: schema.format,
	      message: "does not conform to the " + JSON.stringify(schema.format) + " format",
	    });
	  }
	  return result;
	};

	/**
	 * Validates whether the instance value is at least of a certain length, when the instance value is a string.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.minLength = function validateMinLength (instance, schema, options, ctx) {
	  if (!(typeof instance === 'string')) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!(instance.length >= schema.minLength)) {
	    result.addError({
	      name: 'minLength',
	      argument: schema.minLength,
	      message: "does not meet minimum length of " + schema.minLength,
	    });
	  }
	  return result;
	};

	/**
	 * Validates whether the instance value is at most of a certain length, when the instance value is a string.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.maxLength = function validateMaxLength (instance, schema, options, ctx) {
	  if (!(typeof instance === 'string')) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!(instance.length <= schema.maxLength)) {
	    result.addError({
	      name: 'maxLength',
	      argument: schema.maxLength,
	      message: "does not meet maximum length of " + schema.maxLength,
	    });
	  }
	  return result;
	};

	/**
	 * Validates whether instance contains at least a minimum number of items, when the instance is an Array.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.minItems = function validateMinItems (instance, schema, options, ctx) {
	  if (!Array.isArray(instance)) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!(instance.length >= schema.minItems)) {
	    result.addError({
	      name: 'minItems',
	      argument: schema.minItems,
	      message: "does not meet minimum length of " + schema.minItems,
	    });
	  }
	  return result;
	};

	/**
	 * Validates whether instance contains no more than a maximum number of items, when the instance is an Array.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.maxItems = function validateMaxItems (instance, schema, options, ctx) {
	  if (!Array.isArray(instance)) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!(instance.length <= schema.maxItems)) {
	    result.addError({
	      name: 'maxItems',
	      argument: schema.maxItems,
	      message: "does not meet maximum length of " + schema.maxItems,
	    });
	  }
	  return result;
	};

	/**
	 * Validates that every item in an instance array is unique, when instance is an array
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {String|null|ValidatorResult}
	 */
	validators.uniqueItems = function validateUniqueItems (instance, schema, options, ctx) {
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!Array.isArray(instance)) {
	    return result;
	  }
	  function testArrays (v, i, a) {
	    for (var j = i + 1; j < a.length; j++) if (helpers.deepCompareStrict(v, a[j])) {
	      return false;
	    }
	    return true;
	  }
	  if (!instance.every(testArrays)) {
	    result.addError({
	      name: 'uniqueItems',
	      message: "contains duplicate item",
	    });
	  }
	  return result;
	};

	/**
	 * Deep compares arrays for duplicates
	 * @param v
	 * @param i
	 * @param a
	 * @private
	 * @return {boolean}
	 */
	function testArrays (v, i, a) {
	  var j, len = a.length;
	  for (j = i + 1, len; j < len; j++) {
	    if (helpers.deepCompareStrict(v, a[j])) {
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Validates whether there are no duplicates, when the instance is an Array.
	 * @param instance
	 * @return {String|null}
	 */
	validators.uniqueItems = function validateUniqueItems (instance, schema, options, ctx) {
	  if (!Array.isArray(instance)) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!instance.every(testArrays)) {
	    result.addError({
	      name: 'uniqueItems',
	      message: "contains duplicate item",
	    });
	  }
	  return result;
	};

	/**
	 * Validate for the presence of dependency properties, if the instance is an object.
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {null|ValidatorResult}
	 */
	validators.dependencies = function validateDependencies (instance, schema, options, ctx) {
	  if (!instance || typeof instance != 'object') {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  for (var property in schema.dependencies) {
	    if (instance[property] === undefined) {
	      continue;
	    }
	    var dep = schema.dependencies[property];
	    var childContext = ctx.makeChild(dep, property);
	    if (typeof dep == 'string') {
	      dep = [dep];
	    }
	    if (Array.isArray(dep)) {
	      dep.forEach(function (prop) {
	        if (instance[prop] === undefined) {
	          result.addError({
	            // FIXME there's two different "dependencies" errors here with slightly different outputs
	            // Can we make these the same? Or should we create different error types?
	            name: 'dependencies',
	            argument: childContext.propertyPath,
	            message: "property " + prop + " not found, required by " + childContext.propertyPath,
	          });
	        }
	      });
	    } else {
	      var res = this.validateSchema(instance, dep, options, childContext);
	      if(result.instance !== res.instance) result.instance = res.instance;
	      if (res && res.errors.length) {
	        result.addError({
	          name: 'dependencies',
	          argument: childContext.propertyPath,
	          message: "does not meet dependency required by " + childContext.propertyPath,
	        });
	        result.importErrors(res);
	      }
	    }
	  }
	  return result;
	};

	/**
	 * Validates whether the instance value is one of the enumerated values.
	 *
	 * @param instance
	 * @param schema
	 * @return {ValidatorResult|null}
	 */
	validators['enum'] = function validateEnum (instance, schema, options, ctx) {
	  if (!Array.isArray(schema['enum'])) {
	    throw new SchemaError("enum expects an array", schema);
	  }
	  if (instance === undefined) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!schema['enum'].some(helpers.deepCompareStrict.bind(null, instance))) {
	    result.addError({
	      name: 'enum',
	      argument: schema['enum'],
	      message: "is not one of enum values: " + schema['enum'].join(','),
	    });
	  }
	  return result;
	};

	/**
	 * Validates whether the instance if of a prohibited type.
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {null|ValidatorResult}
	 */
	validators.not = validators.disallow = function validateNot (instance, schema, options, ctx) {
	  var self = this;
	  if(instance===undefined) return null;
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var notTypes = schema.not || schema.disallow;
	  if(!notTypes) return null;
	  if(!Array.isArray(notTypes)) notTypes=[notTypes];
	  notTypes.forEach(function (type) {
	    if (self.testType(instance, schema, options, ctx, type)) {
	      var schemaId = type && type.id && ('<' + type.id + '>') || type;
	      result.addError({
	        name: 'not',
	        argument: schemaId,
	        message: "is of prohibited type " + schemaId,
	      });
	    }
	  });
	  return result;
	};

	module.exports = attribute;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var uri = __webpack_require__(50);

	var ValidationError = exports.ValidationError = function ValidationError (message, instance, schema, propertyPath, name, argument) {
	  if (propertyPath) {
	    this.property = propertyPath;
	  }
	  if (message) {
	    this.message = message;
	  }
	  if (schema) {
	    if (schema.id) {
	      this.schema = schema.id;
	    } else {
	      this.schema = schema;
	    }
	  }
	  if (instance) {
	    this.instance = instance;
	  }
	  this.name = name;
	  this.argument = argument;
	  this.stack = this.toString();
	};

	ValidationError.prototype.toString = function toString() {
	  return this.property + ' ' + this.message;
	};

	var ValidatorResult = exports.ValidatorResult = function ValidatorResult(instance, schema, options, ctx) {
	  this.instance = instance;
	  this.schema = schema;
	  this.propertyPath = ctx.propertyPath;
	  this.errors = [];
	  this.throwError = options && options.throwError;
	  this.disableFormat = options && options.disableFormat === true;
	};

	ValidatorResult.prototype.addError = function addError(detail) {
	  var err;
	  if (typeof detail == 'string') {
	    err = new ValidationError(detail, this.instance, this.schema, this.propertyPath);
	  } else {
	    if (!detail) throw new Error('Missing error detail');
	    if (!detail.message) throw new Error('Missing error message');
	    if (!detail.name) throw new Error('Missing validator type');
	    err = new ValidationError(detail.message, this.instance, this.schema, this.propertyPath, detail.name, detail.argument);
	  }

	  if (this.throwError) {
	    throw err;
	  }
	  this.errors.push(err);
	  return err;
	};

	ValidatorResult.prototype.importErrors = function importErrors(res) {
	  if (typeof res == 'string' || (res && res.validatorType)) {
	    this.addError(res);
	  } else if (res && res.errors) {
	    Array.prototype.push.apply(this.errors, res.errors);
	  }
	};

	function stringizer (v,i){
	  return i+': '+v.toString()+'\n';
	}
	ValidatorResult.prototype.toString = function toString(res) {
	  return this.errors.map(stringizer).join('');
	};

	Object.defineProperty(ValidatorResult.prototype, "valid", { get: function() {
	  return !this.errors.length;
	} });

	/**
	 * Describes a problem with a Schema which prevents validation of an instance
	 * @name SchemaError
	 * @constructor
	 */
	var SchemaError = exports.SchemaError = function SchemaError (msg, schema) {
	  this.message = msg;
	  this.schema = schema;
	  Error.call(this, msg);
	  Error.captureStackTrace(this, SchemaError);
	};
	SchemaError.prototype = Object.create(Error.prototype,
	  { constructor: {value: SchemaError, enumerable: false}
	  , name: {value: 'SchemaError', enumerable: false}
	  });

	var SchemaContext = exports.SchemaContext = function SchemaContext (schema, options, propertyPath, base, schemas) {
	  this.schema = schema;
	  this.options = options;
	  this.propertyPath = propertyPath;
	  this.base = base;
	  this.schemas = schemas;
	};

	SchemaContext.prototype.resolve = function resolve (target) {
	  return uri.resolve(this.base, target);
	};

	SchemaContext.prototype.makeChild = function makeChild(schema, propertyName){
	  var propertyPath = (propertyName===undefined) ? this.propertyPath : this.propertyPath+makeSuffix(propertyName);
	  var base = uri.resolve(this.base, schema.id||'');
	  var ctx = new SchemaContext(schema, this.options, propertyPath, base, Object.create(this.schemas));
	  if(schema.id && !ctx.schemas[base]){
	    ctx.schemas[base] = schema;
	  }
	  return ctx;
	}

	var FORMAT_REGEXPS = exports.FORMAT_REGEXPS = {
	  'date-time': /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])[tT ](2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])(\.\d+)?([zZ]|[+-]([0-5][0-9]):(60|[0-5][0-9]))$/,
	  'date': /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])$/,
	  'time': /^(2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])$/,

	  'email': /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
	  'ip-address': /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
	  'ipv6': /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
	  'uri': /^[a-zA-Z][a-zA-Z0-9+-.]*:[^\s]*$/,

	  'color': /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,

	  // hostname regex from: http://stackoverflow.com/a/1420225/5628
	  'hostname': /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
	  'host-name': /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,

	  'alpha': /^[a-zA-Z]+$/,
	  'alphanumeric': /^[a-zA-Z0-9]+$/,
	  'utc-millisec': function (input) {
	    return (typeof input === 'string') && parseFloat(input) === parseInt(input, 10) && !isNaN(input);
	  },
	  'regex': function (input) {
	    var result = true;
	    try {
	      new RegExp(input);
	    } catch (e) {
	      result = false;
	    }
	    return result;
	  },
	  'style': /\s*(.+?):\s*([^;]+);?/g,
	  'phone': /^\+(?:[0-9] ?){6,14}[0-9]$/
	};

	FORMAT_REGEXPS.regexp = FORMAT_REGEXPS.regex;
	FORMAT_REGEXPS.pattern = FORMAT_REGEXPS.regex;
	FORMAT_REGEXPS.ipv4 = FORMAT_REGEXPS['ip-address'];

	exports.isFormat = function isFormat (input, format, validator) {
	  if (typeof input === 'string' && FORMAT_REGEXPS[format] !== undefined) {
	    if (FORMAT_REGEXPS[format] instanceof RegExp) {
	      return FORMAT_REGEXPS[format].test(input);
	    }
	    if (typeof FORMAT_REGEXPS[format] === 'function') {
	      return FORMAT_REGEXPS[format](input);
	    }
	  } else if (validator && validator.customFormats &&
	      typeof validator.customFormats[format] === 'function') {
	    return validator.customFormats[format](input);
	  }
	  return true;
	};

	var makeSuffix = exports.makeSuffix = function makeSuffix (key) {
	  key = key.toString();
	  // This function could be capable of outputting valid a ECMAScript string, but the
	  // resulting code for testing which form to use would be tens of thousands of characters long
	  // That means this will use the name form for some illegal forms
	  if (!key.match(/[.\s\[\]]/) && !key.match(/^[\d]/)) {
	    return '.' + key;
	  }
	  if (key.match(/^\d+$/)) {
	    return '[' + key + ']';
	  }
	  return '[' + JSON.stringify(key) + ']';
	};

	exports.deepCompareStrict = function deepCompareStrict (a, b) {
	  if (typeof a !== typeof b) {
	    return false;
	  }
	  if (a instanceof Array) {
	    if (!(b instanceof Array)) {
	      return false;
	    }
	    if (a.length !== b.length) {
	      return false;
	    }
	    return a.every(function (v, i) {
	      return deepCompareStrict(a[i], b[i]);
	    });
	  }
	  if (typeof a === 'object') {
	    if (!a || !b) {
	      return a === b;
	    }
	    var aKeys = Object.keys(a);
	    var bKeys = Object.keys(b);
	    if (aKeys.length !== bKeys.length) {
	      return false;
	    }
	    return aKeys.every(function (v) {
	      return deepCompareStrict(a[v], b[v]);
	    });
	  }
	  return a === b;
	};

	function deepMerger (target, dst, e, i) {
	  if (typeof e === 'object') {
	    dst[i] = deepMerge(target[i], e)
	  } else {
	    if (target.indexOf(e) === -1) {
	      dst.push(e)
	    }
	  }
	}

	function copyist (src, dst, key) {
	  dst[key] = src[key];
	}

	function copyistWithDeepMerge (target, src, dst, key) {
	  if (typeof src[key] !== 'object' || !src[key]) {
	    dst[key] = src[key];
	  }
	  else {
	    if (!target[key]) {
	      dst[key] = src[key];
	    } else {
	      dst[key] = deepMerge(target[key], src[key])
	    }
	  }
	}

	function deepMerge (target, src) {
	  var array = Array.isArray(src);
	  var dst = array && [] || {};

	  if (array) {
	    target = target || [];
	    dst = dst.concat(target);
	    src.forEach(deepMerger.bind(null, target, dst));
	  } else {
	    if (target && typeof target === 'object') {
	      Object.keys(target).forEach(copyist.bind(null, target, dst));
	    }
	    Object.keys(src).forEach(copyistWithDeepMerge.bind(null, target, src, dst));
	  }

	  return dst;
	};

	module.exports.deepMerge = deepMerge;

	/**
	 * Validates instance against the provided schema
	 * Implements URI+JSON Pointer encoding, e.g. "%7e"="~0"=>"~", "~1"="%2f"=>"/"
	 * @param o
	 * @param s The path to walk o along
	 * @return any
	 */
	exports.objectGetPath = function objectGetPath(o, s) {
	  var parts = s.split('/').slice(1);
	  var k;
	  while (typeof (k=parts.shift()) == 'string') {
	    var n = decodeURIComponent(k.replace(/~0/,'~').replace(/~1/g,'/'));
	    if (!(n in o)) return;
	    o = o[n];
	  }
	  return o;
	};

	function pathEncoder (v) {
	  return '/'+encodeURIComponent(v).replace(/~/g,'%7E');
	}
	/**
	 * Accept an Array of property names and return a JSON Pointer URI fragment
	 * @param Array a
	 * @return {String}
	 */
	exports.encodePath = function encodePointer(a){
		// ~ must be encoded explicitly because hacks
		// the slash is encoded by encodeURIComponent
		return a.map(pathEncoder).join('');
	};


/***/ }
/******/ ]);