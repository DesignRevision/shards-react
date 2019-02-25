/*
* Shards React v1.0.3 (https://designrevision.com/downloads/shards-react/)
* Based on: Bootstrap ^4.1.3 (https://getbootstrap.com)
* Based on: Shards ^2.1.2 (https://designrevision.com/downloads/shards/)
* Copyright 2017-2019 DesignRevision (https://designrevision.com)
* Copyright 2017-2019 Catalin Vasile (http://catalin.me)
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash.pick'), require('lodash.isfunction'), require('react-datepicker'), require('shortid'), require('react-transition-group'), require('react-dom'), require('react-popper'), require('lodash.tonumber'), require('nouislider'), require('react'), require('classnames'), require('lodash.omit')) :
  typeof define === 'function' && define.amd ? define(['exports', 'lodash.pick', 'lodash.isfunction', 'react-datepicker', 'shortid', 'react-transition-group', 'react-dom', 'react-popper', 'lodash.tonumber', 'nouislider', 'react', 'classnames', 'lodash.omit'], factory) :
  (factory((global['shards-React'] = {}),global.pick,global.isFunction,global.ReactDatePicker,global.shortid,global.ReactTransitionGroup,global.ReactDOM,global.ReactPopper,global.toNumber,global.nouislider,global.React,global.classNames,global.omit));
}(this, (function (exports,pick,isFunction,ReactDatePicker,shortid,reactTransitionGroup,ReactDOM,reactPopper,toNumber,nouislider,React,classNames,omit) { 'use strict';

  pick = pick && pick.hasOwnProperty('default') ? pick['default'] : pick;
  isFunction = isFunction && isFunction.hasOwnProperty('default') ? isFunction['default'] : isFunction;
  ReactDatePicker = ReactDatePicker && ReactDatePicker.hasOwnProperty('default') ? ReactDatePicker['default'] : ReactDatePicker;
  shortid = shortid && shortid.hasOwnProperty('default') ? shortid['default'] : shortid;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;
  toNumber = toNumber && toNumber.hasOwnProperty('default') ? toNumber['default'] : toNumber;
  nouislider = nouislider && nouislider.hasOwnProperty('default') ? nouislider['default'] : nouislider;
  var React__default = 'default' in React ? React['default'] : React;
  classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;
  omit = omit && omit.hasOwnProperty('default') ? omit['default'] : omit;

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
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

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  function getCjsExportFromNamespace (n) {
  	return n && n.default || n;
  }

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */

  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }

    return Object(val);
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      } // Detect buggy property enumeration order in older V8 versions.
      // https://bugs.chromium.org/p/v8/issues/detail?id=4118


      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

      test1[5] = 'de';

      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


      var test2 = {};

      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }

      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });

      if (order2.join('') !== '0123456789') {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });

      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;

    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);

      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }

      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);

        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }

    return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var printWarning = function printWarning() {};

  if (process.env.NODE_ENV !== 'production') {
    var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
    var loggedTypeFailures = {};

    printWarning = function printWarning(text) {
      var message = 'Warning: ' + text;

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
          var error; // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.

          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
              err.name = 'Invariant Violation';
              throw err;
            }

            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
          } catch (ex) {
            error = ex;
          }

          if (error && !(error instanceof Error)) {
            printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
          }

          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : '';
            printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
          }
        }
      }
    }
  }

  var checkPropTypes_1 = checkPropTypes;

  var printWarning$1 = function printWarning() {};

  if (process.env.NODE_ENV !== 'production') {
    printWarning$1 = function printWarning(text) {
      var message = 'Warning: ' + text;

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
  }

  function emptyFunctionThatReturnsNull() {
    return null;
  }

  var factoryWithTypeCheckers = function factoryWithTypeCheckers(isValidElement, throwOnDirectAccess) {
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


    var ANONYMOUS = '<<anonymous>>'; // Important!
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
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker
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
    } // Make `instanceof Error` still work for returned errors.


    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      if (process.env.NODE_ENV !== 'production') {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }

      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret_1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
            err.name = 'Invariant Violation';
            throw err;
          } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;

            if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3) {
              printWarning$1('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
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
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
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
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);

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
        process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
        return emptyFunctionThatReturnsNull;
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
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

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
        process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (typeof checker !== 'function') {
          printWarning$1('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];

          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
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

          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

          if (error) {
            return error;
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        } // We need to check all keys in case some are required but missing from
        // props.


        var allKeys = objectAssign({}, props[propName], shapeTypes);

        for (var key in allKeys) {
          var checker = shapeTypes[key];

          if (!checker) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
          }

          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

          if (error) {
            return error;
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (_typeof(propValue)) {
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
      } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      } // Fallback for non-spec compliant Symbols which are polyfilled.


      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }

      return false;
    } // Equivalent of `typeof` but with special handling for array and regexp.


    function getPropType(propValue) {
      var propType = _typeof(propValue);

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
    } // This handles more types than `getPropType`. Only used for error messages.
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
    } // Returns a string that is postfixed to a warning about an invalid type.
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
    } // Returns class name of the object, if any.


    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }

      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes_1;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };

  function emptyFunction() {}

  var factoryWithThrowingShims = function factoryWithThrowingShims() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return;
      }

      var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
      err.name = 'Invariant Violation';
      throw err;
    }
    shim.isRequired = shim;

    function getShim() {
      return shim;
    }
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
      shape: getShim,
      exact: getShim
    };
    ReactPropTypes.checkPropTypes = emptyFunction;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    if (process.env.NODE_ENV !== 'production') {
      var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

      var isValidElement = function isValidElement(object) {
        return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }; // By explicitly using `prop-types` you are opting into new development behavior.
      // http://fb.me/prop-types-in-prod


      var throwOnDirectAccess = true;
      module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
    } else {
      // By explicitly using `prop-types` you are opting into new production behavior.
      // http://fb.me/prop-types-in-prod
      module.exports = factoryWithThrowingShims();
    }
  });

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  function componentWillMount() {
    // Call this.constructor.gDSFP to support sub-classes.
    var state = this.constructor.getDerivedStateFromProps(this.props, this.state);

    if (state !== null && state !== undefined) {
      this.setState(state);
    }
  }

  function componentWillReceiveProps(nextProps) {
    // Call this.constructor.gDSFP to support sub-classes.
    // Use the setState() updater to ensure state isn't stale in certain edge cases.
    function updater(prevState) {
      var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
      return state !== null && state !== undefined ? state : null;
    } // Binding "this" is important for shallow renderer support.


    this.setState(updater.bind(this));
  }

  function componentWillUpdate(nextProps, nextState) {
    try {
      var prevProps = this.props;
      var prevState = this.state;
      this.props = nextProps;
      this.state = nextState;
      this.__reactInternalSnapshotFlag = true;
      this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
    } finally {
      this.props = prevProps;
      this.state = prevState;
    }
  } // React may warn about cWM/cWRP/cWU methods being deprecated.
  // Add a flag to suppress these warnings for this special case.


  componentWillMount.__suppressDeprecationWarning = true;
  componentWillReceiveProps.__suppressDeprecationWarning = true;
  componentWillUpdate.__suppressDeprecationWarning = true;

  function polyfill(Component) {
    var prototype = Component.prototype;

    if (!prototype || !prototype.isReactComponent) {
      throw new Error('Can only polyfill class components');
    }

    if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
      return Component;
    } // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Error if any of these lifecycles are present,
    // Because they would work differently between older and newer (16.3+) versions of React.


    var foundWillMountName = null;
    var foundWillReceivePropsName = null;
    var foundWillUpdateName = null;

    if (typeof prototype.componentWillMount === 'function') {
      foundWillMountName = 'componentWillMount';
    } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
      foundWillMountName = 'UNSAFE_componentWillMount';
    }

    if (typeof prototype.componentWillReceiveProps === 'function') {
      foundWillReceivePropsName = 'componentWillReceiveProps';
    } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
      foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
    }

    if (typeof prototype.componentWillUpdate === 'function') {
      foundWillUpdateName = 'componentWillUpdate';
    } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
      foundWillUpdateName = 'UNSAFE_componentWillUpdate';
    }

    if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
      var componentName = Component.displayName || Component.name;
      var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
      throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
    } // React <= 16.2 does not support static getDerivedStateFromProps.
    // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
    // Newer versions of React will ignore these lifecycles if gDSFP exists.


    if (typeof Component.getDerivedStateFromProps === 'function') {
      prototype.componentWillMount = componentWillMount;
      prototype.componentWillReceiveProps = componentWillReceiveProps;
    } // React <= 16.2 does not support getSnapshotBeforeUpdate.
    // As a workaround, use cWU to invoke the new lifecycle.
    // Newer versions of React will ignore that lifecycle if gSBU exists.


    if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
      if (typeof prototype.componentDidUpdate !== 'function') {
        throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
      }

      prototype.componentWillUpdate = componentWillUpdate;
      var componentDidUpdate = prototype.componentDidUpdate;

      prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
        // 16.3+ will not execute our will-update method;
        // It will pass a snapshot value to did-update though.
        // Older versions will require our polyfilled will-update value.
        // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
        // Because for <= 15.x versions this might be a "prevContext" object.
        // We also can't just check "__reactInternalSnapshot",
        // Because get-snapshot might return a falsy value.
        // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
        var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
        componentDidUpdate.call(this, prevProps, prevState, snapshot);
      };
    }

    return Component;
  }

  var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
    polyfill: polyfill
  });

  var PropTypes = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.transitionTimeout = transitionTimeout;
    exports.classNamesShape = exports.timeoutsShape = void 0;

    var _propTypes = _interopRequireDefault(propTypes);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function transitionTimeout(transitionType) {
      var timeoutPropName = 'transition' + transitionType + 'Timeout';
      var enabledPropName = 'transition' + transitionType;
      return function (props) {
        // If the transition is enabled
        if (props[enabledPropName]) {
          // If no timeout duration is provided
          if (props[timeoutPropName] == null) {
            return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.'); // If the duration isn't a number
          } else if (typeof props[timeoutPropName] !== 'number') {
            return new Error(timeoutPropName + ' must be a number (in milliseconds)');
          }
        }

        return null;
      };
    }

    var timeoutsShape = _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
      enter: _propTypes.default.number,
      exit: _propTypes.default.number
    }).isRequired]);

    exports.timeoutsShape = timeoutsShape;

    var classNamesShape = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
      enter: _propTypes.default.string,
      exit: _propTypes.default.string,
      active: _propTypes.default.string
    }), _propTypes.default.shape({
      enter: _propTypes.default.string,
      enterDone: _propTypes.default.string,
      enterActive: _propTypes.default.string,
      exit: _propTypes.default.string,
      exitDone: _propTypes.default.string,
      exitActive: _propTypes.default.string
    })]);

    exports.classNamesShape = classNamesShape;
  });
  unwrapExports(PropTypes);
  var PropTypes_1 = PropTypes.transitionTimeout;
  var PropTypes_2 = PropTypes.classNamesShape;
  var PropTypes_3 = PropTypes.timeoutsShape;

  var _reactLifecyclesCompat = getCjsExportFromNamespace(reactLifecyclesCompat_es);

  var Transition_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

    var PropTypes$$1 = _interopRequireWildcard(propTypes);

    var _react = _interopRequireDefault(React__default);

    var _reactDom = _interopRequireDefault(ReactDOM);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};

        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

              if (desc.get || desc.set) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
        }

        newObj.default = obj;
        return newObj;
      }
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;

      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }

      return target;
    }

    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }

    var UNMOUNTED = 'unmounted';
    exports.UNMOUNTED = UNMOUNTED;
    var EXITED = 'exited';
    exports.EXITED = EXITED;
    var ENTERING = 'entering';
    exports.ENTERING = ENTERING;
    var ENTERED = 'entered';
    exports.ENTERED = ENTERED;
    var EXITING = 'exiting';
    /**
     * The Transition component lets you describe a transition from one component
     * state to another _over time_ with a simple declarative API. Most commonly
     * it's used to animate the mounting and unmounting of a component, but can also
     * be used to describe in-place transition states as well.
     *
     * By default the `Transition` component does not alter the behavior of the
     * component it renders, it only tracks "enter" and "exit" states for the components.
     * It's up to you to give meaning and effect to those states. For example we can
     * add styles to a component when it enters or exits:
     *
     * ```jsx
     * import Transition from 'react-transition-group/Transition';
     *
     * const duration = 300;
     *
     * const defaultStyle = {
     *   transition: `opacity ${duration}ms ease-in-out`,
     *   opacity: 0,
     * }
     *
     * const transitionStyles = {
     *   entering: { opacity: 0 },
     *   entered:  { opacity: 1 },
     * };
     *
     * const Fade = ({ in: inProp }) => (
     *   <Transition in={inProp} timeout={duration}>
     *     {(state) => (
     *       <div style={{
     *         ...defaultStyle,
     *         ...transitionStyles[state]
     *       }}>
     *         I'm a fade Transition!
     *       </div>
     *     )}
     *   </Transition>
     * );
     * ```
     *
     * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
     * What it does do is track transition states over time so you can update the
     * component (such as by adding styles or classes) when it changes states.
     *
     * There are 4 main states a Transition can be in:
     *  - `'entering'`
     *  - `'entered'`
     *  - `'exiting'`
     *  - `'exited'`
     *
     * Transition state is toggled via the `in` prop. When `true` the component begins the
     * "Enter" stage. During this stage, the component will shift from its current transition state,
     * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
     * it's complete. Let's take the following example:
     *
     * ```jsx
     * state = { in: false };
     *
     * toggleEnterState = () => {
     *   this.setState({ in: true });
     * }
     *
     * render() {
     *   return (
     *     <div>
     *       <Transition in={this.state.in} timeout={500} />
     *       <button onClick={this.toggleEnterState}>Click to Enter</button>
     *     </div>
     *   );
     * }
     * ```
     *
     * When the button is clicked the component will shift to the `'entering'` state and
     * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
     *
     * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
     *
     * ## Timing
     *
     * Timing is often the trickiest part of animation, mistakes can result in slight delays
     * that are hard to pin down. A common example is when you want to add an exit transition,
     * you should set the desired final styles when the state is `'exiting'`. That's when the
     * transition to those styles will start and, if you matched the `timeout` prop with the
     * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
     *
     * > **Note**: For simpler transitions the `Transition` component might be enough, but
     * > take into account that it's platform-agnostic, while the `CSSTransition` component
     * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
     * > in order to make more complex transitions more predictable. For example, even though
     * > classes `example-enter` and `example-enter-active` are applied immediately one after
     * > another, you can still transition from one to the other because of the forced reflow
     * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
     * > for more info). Take this into account when choosing between `Transition` and
     * > `CSSTransition`.
     */

    exports.EXITING = EXITING;

    var Transition =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(Transition, _React$Component);

      function Transition(props, context) {
        var _this;

        _this = _React$Component.call(this, props, context) || this;
        var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus;
        _this.appearStatus = null;

        if (props.in) {
          if (appear) {
            initialStatus = EXITED;
            _this.appearStatus = ENTERING;
          } else {
            initialStatus = ENTERED;
          }
        } else {
          if (props.unmountOnExit || props.mountOnEnter) {
            initialStatus = UNMOUNTED;
          } else {
            initialStatus = EXITED;
          }
        }

        _this.state = {
          status: initialStatus
        };
        _this.nextCallback = null;
        return _this;
      }

      var _proto = Transition.prototype;

      _proto.getChildContext = function getChildContext() {
        return {
          transitionGroup: null // allows for nested Transitions

        };
      };

      Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
        var nextIn = _ref.in;

        if (nextIn && prevState.status === UNMOUNTED) {
          return {
            status: EXITED
          };
        }

        return null;
      }; // getSnapshotBeforeUpdate(prevProps) {
      //   let nextStatus = null
      //   if (prevProps !== this.props) {
      //     const { status } = this.state
      //     if (this.props.in) {
      //       if (status !== ENTERING && status !== ENTERED) {
      //         nextStatus = ENTERING
      //       }
      //     } else {
      //       if (status === ENTERING || status === ENTERED) {
      //         nextStatus = EXITING
      //       }
      //     }
      //   }
      //   return { nextStatus }
      // }


      _proto.componentDidMount = function componentDidMount() {
        this.updateStatus(true, this.appearStatus);
      };

      _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        var nextStatus = null;

        if (prevProps !== this.props) {
          var status = this.state.status;

          if (this.props.in) {
            if (status !== ENTERING && status !== ENTERED) {
              nextStatus = ENTERING;
            }
          } else {
            if (status === ENTERING || status === ENTERED) {
              nextStatus = EXITING;
            }
          }
        }

        this.updateStatus(false, nextStatus);
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        this.cancelNextCallback();
      };

      _proto.getTimeouts = function getTimeouts() {
        var timeout = this.props.timeout;
        var exit, enter, appear;
        exit = enter = appear = timeout;

        if (timeout != null && typeof timeout !== 'number') {
          exit = timeout.exit;
          enter = timeout.enter;
          appear = timeout.appear;
        }

        return {
          exit: exit,
          enter: enter,
          appear: appear
        };
      };

      _proto.updateStatus = function updateStatus(mounting, nextStatus) {
        if (mounting === void 0) {
          mounting = false;
        }

        if (nextStatus !== null) {
          // nextStatus will always be ENTERING or EXITING.
          this.cancelNextCallback();

          var node = _reactDom.default.findDOMNode(this);

          if (nextStatus === ENTERING) {
            this.performEnter(node, mounting);
          } else {
            this.performExit(node);
          }
        } else if (this.props.unmountOnExit && this.state.status === EXITED) {
          this.setState({
            status: UNMOUNTED
          });
        }
      };

      _proto.performEnter = function performEnter(node, mounting) {
        var _this2 = this;

        var enter = this.props.enter;
        var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
        var timeouts = this.getTimeouts(); // no enter animation skip right to ENTERED
        // if we are mounting and running this it means appear _must_ be set

        if (!mounting && !enter) {
          this.safeSetState({
            status: ENTERED
          }, function () {
            _this2.props.onEntered(node);
          });
          return;
        }

        this.props.onEnter(node, appearing);
        this.safeSetState({
          status: ENTERING
        }, function () {
          _this2.props.onEntering(node, appearing); // FIXME: appear timeout?


          _this2.onTransitionEnd(node, timeouts.enter, function () {
            _this2.safeSetState({
              status: ENTERED
            }, function () {
              _this2.props.onEntered(node, appearing);
            });
          });
        });
      };

      _proto.performExit = function performExit(node) {
        var _this3 = this;

        var exit = this.props.exit;
        var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

        if (!exit) {
          this.safeSetState({
            status: EXITED
          }, function () {
            _this3.props.onExited(node);
          });
          return;
        }

        this.props.onExit(node);
        this.safeSetState({
          status: EXITING
        }, function () {
          _this3.props.onExiting(node);

          _this3.onTransitionEnd(node, timeouts.exit, function () {
            _this3.safeSetState({
              status: EXITED
            }, function () {
              _this3.props.onExited(node);
            });
          });
        });
      };

      _proto.cancelNextCallback = function cancelNextCallback() {
        if (this.nextCallback !== null) {
          this.nextCallback.cancel();
          this.nextCallback = null;
        }
      };

      _proto.safeSetState = function safeSetState(nextState, callback) {
        // This shouldn't be necessary, but there are weird race conditions with
        // setState callbacks and unmounting in testing, so always make sure that
        // we can cancel any pending setState callbacks after we unmount.
        callback = this.setNextCallback(callback);
        this.setState(nextState, callback);
      };

      _proto.setNextCallback = function setNextCallback(callback) {
        var _this4 = this;

        var active = true;

        this.nextCallback = function (event) {
          if (active) {
            active = false;
            _this4.nextCallback = null;
            callback(event);
          }
        };

        this.nextCallback.cancel = function () {
          active = false;
        };

        return this.nextCallback;
      };

      _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
        this.setNextCallback(handler);

        if (node) {
          if (this.props.addEndListener) {
            this.props.addEndListener(node, this.nextCallback);
          }

          if (timeout != null) {
            setTimeout(this.nextCallback, timeout);
          }
        } else {
          setTimeout(this.nextCallback, 0);
        }
      };

      _proto.render = function render() {
        var status = this.state.status;

        if (status === UNMOUNTED) {
          return null;
        }

        var _this$props = this.props,
            children = _this$props.children,
            childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


        delete childProps.in;
        delete childProps.mountOnEnter;
        delete childProps.unmountOnExit;
        delete childProps.appear;
        delete childProps.enter;
        delete childProps.exit;
        delete childProps.timeout;
        delete childProps.addEndListener;
        delete childProps.onEnter;
        delete childProps.onEntering;
        delete childProps.onEntered;
        delete childProps.onExit;
        delete childProps.onExiting;
        delete childProps.onExited;

        if (typeof children === 'function') {
          return children(status, childProps);
        }

        var child = _react.default.Children.only(children);

        return _react.default.cloneElement(child, childProps);
      };

      return Transition;
    }(_react.default.Component);

    Transition.contextTypes = {
      transitionGroup: PropTypes$$1.object
    };
    Transition.childContextTypes = {
      transitionGroup: function transitionGroup() {}
    };
    Transition.propTypes = process.env.NODE_ENV !== "production" ? {
      /**
       * A `function` child can be used instead of a React element.
       * This function is called with the current transition status
       * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
       * to apply context specific props to a component.
       *
       * ```jsx
       * <Transition timeout={150}>
       *   {(status) => (
       *     <MyComponent className={`fade fade-${status}`} />
       *   )}
       * </Transition>
       * ```
       */
      children: PropTypes$$1.oneOfType([PropTypes$$1.func.isRequired, PropTypes$$1.element.isRequired]).isRequired,

      /**
       * Show the component; triggers the enter or exit states
       */
      in: PropTypes$$1.bool,

      /**
       * By default the child component is mounted immediately along with
       * the parent `Transition` component. If you want to "lazy mount" the component on the
       * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
       * mounted, even on "exited", unless you also specify `unmountOnExit`.
       */
      mountOnEnter: PropTypes$$1.bool,

      /**
       * By default the child component stays mounted after it reaches the `'exited'` state.
       * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
       */
      unmountOnExit: PropTypes$$1.bool,

      /**
       * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
       * If you want to transition on the first mount set `appear` to `true`, and the
       * component will transition in as soon as the `<Transition>` mounts.
       *
       * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
       */
      appear: PropTypes$$1.bool,

      /**
       * Enable or disable enter transitions.
       */
      enter: PropTypes$$1.bool,

      /**
       * Enable or disable exit transitions.
       */
      exit: PropTypes$$1.bool,

      /**
       * The duration of the transition, in milliseconds.
       * Required unless `addEndListener` is provided
       *
       * You may specify a single timeout for all transitions like: `timeout={500}`,
       * or individually like:
       *
       * ```jsx
       * timeout={{
       *  enter: 300,
       *  exit: 500,
       * }}
       * ```
       *
       * @type {number | { enter?: number, exit?: number }}
       */
      timeout: function timeout(props) {
        var pt = process.env.NODE_ENV !== "production" ? PropTypes.timeoutsShape : {};
        if (!props.addEndListener) pt = pt.isRequired;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return pt.apply(void 0, [props].concat(args));
      },

      /**
       * Add a custom transition end trigger. Called with the transitioning
       * DOM node and a `done` callback. Allows for more fine grained transition end
       * logic. **Note:** Timeouts are still used as a fallback if provided.
       *
       * ```jsx
       * addEndListener={(node, done) => {
       *   // use the css transitionend event to mark the finish of a transition
       *   node.addEventListener('transitionend', done, false);
       * }}
       * ```
       */
      addEndListener: PropTypes$$1.func,

      /**
       * Callback fired before the "entering" status is applied. An extra parameter
       * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
       *
       * @type Function(node: HtmlElement, isAppearing: bool) -> void
       */
      onEnter: PropTypes$$1.func,

      /**
       * Callback fired after the "entering" status is applied. An extra parameter
       * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
       *
       * @type Function(node: HtmlElement, isAppearing: bool)
       */
      onEntering: PropTypes$$1.func,

      /**
       * Callback fired after the "entered" status is applied. An extra parameter
       * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
       *
       * @type Function(node: HtmlElement, isAppearing: bool) -> void
       */
      onEntered: PropTypes$$1.func,

      /**
       * Callback fired before the "exiting" status is applied.
       *
       * @type Function(node: HtmlElement) -> void
       */
      onExit: PropTypes$$1.func,

      /**
       * Callback fired after the "exiting" status is applied.
       *
       * @type Function(node: HtmlElement) -> void
       */
      onExiting: PropTypes$$1.func,

      /**
       * Callback fired after the "exited" status is applied.
       *
       * @type Function(node: HtmlElement) -> void
       */
      onExited: PropTypes$$1.func // Name the function so it is clearer in the documentation

    } : {};

    function noop() {}

    Transition.defaultProps = {
      in: false,
      mountOnEnter: false,
      unmountOnExit: false,
      appear: false,
      enter: true,
      exit: true,
      onEnter: noop,
      onEntering: noop,
      onEntered: noop,
      onExit: noop,
      onExiting: noop,
      onExited: noop
    };
    Transition.UNMOUNTED = 0;
    Transition.EXITED = 1;
    Transition.ENTERING = 2;
    Transition.ENTERED = 3;
    Transition.EXITING = 4;

    var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

    exports.default = _default;
  });
  var Transition = unwrapExports(Transition_1);
  var Transition_2 = Transition_1.EXITING;
  var Transition_3 = Transition_1.ENTERED;
  var Transition_4 = Transition_1.ENTERING;
  var Transition_5 = Transition_1.EXITED;
  var Transition_6 = Transition_1.UNMOUNTED;

  var _TRANSITION_CLASS_MAP;

  var TIMEOUT = {
    FADE: 150,
    COLLAPSE: 350,
    SHOW: 0,
    HIDE: 0
  };
  var EVENTS = {
    CLICK: ["click", "touchstart", "keyup"],
    MOUSE: ["mouseenter", "mouseleave"],
    FOCUS: ["focusin", "focusout"]
  };
  var KEYCODES = {
    ESC: 27,
    SPACE: 32,
    ENTER: 13,
    TAB: 9,
    UP: 38,
    DOWN: 40
  };
  var TRANSITION_KEYS = ["in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"];
  var TRANSITION_STATUS = {
    ENTERING: "entering",
    ENTERED: "entered",
    EXITING: "exiting",
    EXITED: "exited"
  };
  var TRANSITION_CLASS_MAP = (_TRANSITION_CLASS_MAP = {}, _defineProperty(_TRANSITION_CLASS_MAP, TRANSITION_STATUS.ENTERING, "collapsing"), _defineProperty(_TRANSITION_CLASS_MAP, TRANSITION_STATUS.ENTERED, "collapse show"), _defineProperty(_TRANSITION_CLASS_MAP, TRANSITION_STATUS.EXITING, "collapsing"), _defineProperty(_TRANSITION_CLASS_MAP, TRANSITION_STATUS.EXITED, "collapse"), _TRANSITION_CLASS_MAP);
  var POPPER_PLACEMENTS = ["top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start", "auto-start", "auto", "auto-end"];
  var DROPDOWN_POSITION_MAP = {
    UP: "top",
    LEFT: "left",
    RIGHT: "right",
    DOWN: "bottom"
  };
  var BREAKPOINTS = ["xs", "sm", "md", "lg", "xl"];
  /**
   * FORMS
   */

  var INPUT_TYPES = ["text", "password", "email", "number", "tel", "url", "search", "range", "color", "date", "time", "datetime", "datetime-local", "month", "week", "file"];
  var INPUT_GROUP_ADDON_TYPES = ["prepend", "append"];

  /**
   * The `Fade` component allows you to easily fade in and out content and is powered by [react-transition-group](https://github.com/reactjs/react-transition-group).
   */

  var Fade = function Fade(props) {
    var Tag = props.tag,
        baseClass = props.baseClass,
        baseClassActive = props.baseClassActive,
        className = props.className,
        children = props.children,
        innerRef = props.innerRef,
        attrs = _objectWithoutProperties(props, ["tag", "baseClass", "baseClassActive", "className", "children", "innerRef"]);

    var transitionProps = pick(attrs, TRANSITION_KEYS);
    var childProps = omit(attrs, TRANSITION_KEYS);
    return React__default.createElement(Transition, transitionProps, function (status) {
      var isActive = status === "entered";
      var classes = classNames(className, baseClass, isActive && baseClassActive);
      return React__default.createElement(Tag, _extends({
        className: classes
      }, childProps, {
        ref: innerRef
      }), children);
    });
  };

  Fade.propTypes = _objectSpread({}, Transition.propTypes, {
    tag: propTypes.oneOfType([propTypes.string, propTypes.func]),
    baseClass: propTypes.string,
    baseClassActive: propTypes.string,
    className: propTypes.string,
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func]),
    children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node])
  });
  Fade.defaultProps = _objectSpread({}, Transition.defaultProps, {
    tag: "div",
    baseClass: "fade",
    baseClassActive: "show",
    timeout: TIMEOUT.FADE,
    appear: true,
    enter: true,
    exit: true,
    in: true
  });

  /**
   * The alert component can be used to display contextual user messages.
   */

  var Alert = function Alert(props) {
    var className = props.className,
        closeClassName = props.closeClassName,
        closeAriaLabel = props.closeAriaLabel,
        Tag = props.tag,
        theme = props.theme,
        open = props.open,
        dismissible = props.dismissible,
        children = props.children,
        transition = props.transition,
        fade = props.fade,
        attrs = _objectWithoutProperties(props, ["className", "closeClassName", "closeAriaLabel", "tag", "theme", "open", "dismissible", "children", "transition", "fade"]);

    var classes = classNames(className, "alert", "alert-".concat(theme), dismissible && "alert-dismissible");
    var closeClasses = classNames("close", closeClassName);

    var alertTransition = _objectSpread({}, Fade.defaultProps, transition, {
      baseClass: fade ? transition.baseClass : "",
      timeout: fade ? transition.timeout : 0
    });

    return React__default.createElement(Fade, _extends({}, attrs, alertTransition, {
      tag: Tag,
      className: classes,
      in: open,
      role: "alert"
    }), dismissible ? React__default.createElement("button", {
      type: "button",
      className: closeClasses,
      "aria-label": closeAriaLabel,
      onClick: dismissible
    }, React__default.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7")) : null, children);
  };

  Alert.propTypes = {
    /**
     * The children nodes.
     */
    children: propTypes.node,

    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The close button's class name.
     */
    closeClassName: propTypes.string,

    /**
     * The close button's aria label.
     */
    closeAriaLabel: propTypes.string,

    /**
     * The theme color.
     */
    theme: propTypes.string,

    /**
     * Whether it should fade, or not.
     */
    fade: propTypes.bool,

    /**
     * Whether is open, or not.
     */
    open: propTypes.bool,

    /**
     * Whether is dismissible, or not.
     */
    dismissible: propTypes.func,

    /**
     * The transition config. See `Fade` component for more details.
     */
    transition: propTypes.shape(Fade.propTypes),

    /**
     * The component tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  Alert.defaultProps = {
    theme: "primary",
    open: true,
    tag: "div",
    closeAriaLabel: "Close",
    fade: true,
    transition: _objectSpread({}, Fade.defaultProps, {
      unmountOnExit: true
    })
  };

  /**
   * Badges are really great for labels and count values.
   */

  var Badge = function Badge(props) {
    var Tag = props.tag,
        className = props.className,
        theme = props.theme,
        pill = props.pill,
        outline = props.outline,
        attrs = _objectWithoutProperties(props, ["tag", "className", "theme", "pill", "outline"]);

    var classes = classNames(className, "badge", theme && !outline && "badge-".concat(theme), outline && "badge-outline-".concat(theme), pill && "badge-pill");
    Tag = attrs.href && Tag === "span" ? "a" : Tag;
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  Badge.propTypes = {
    /**
     * The children nodes.
     */
    children: propTypes.node,

    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The theme color.
     */
    theme: propTypes.string,

    /**
     * Whether it should be outlined, or not.
     */
    outline: propTypes.bool,

    /**
     * Whether it should be a pill, or not.
     */
    pill: propTypes.bool,

    /**
     * The component tag.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  Badge.defaultProps = {
    theme: "primary",
    pill: false,
    outline: false,
    tag: "span"
  };

  /**
   * The breadcrumb component is great for indicating the current page's location within a navigational hierarchy.
   */

  var Breadcrumb = function Breadcrumb(props) {
    var className = props.className,
        listClassName = props.listClassName,
        children = props.children,
        Tag = props.tag,
        ListTag = props.listTag,
        label = props["aria-label"],
        attrs = _objectWithoutProperties(props, ["className", "listClassName", "children", "tag", "listTag", "aria-label"]);

    var classes = classNames(className);
    var listClasses = classNames("breadcrumb", listClassName);
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes,
      "aria-label": label
    }), React__default.createElement(ListTag, {
      className: listClasses
    }, children));
  };

  Breadcrumb.propTypes = {
    /**
     * The breadcrumb list class name.
     */
    listClassName: propTypes.string,

    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The aria label value.
     */
    "aria-label": propTypes.string,

    /**
     * The children nodes.
     */
    children: propTypes.node,

    /**
     * The component tag name.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),

    /**
     * The breadcrumb list tag.
     */
    listTag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  Breadcrumb.defaultProps = {
    "aria-label": "breadcrumb",
    tag: "nav",
    listTag: "ol"
  };

  var BreadcrumbItem = function BreadcrumbItem(props) {
    var className = props.className,
        active = props.active,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "active", "tag"]);

    var classes = classNames(className, active && "active", "breadcrumb-item");
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes,
      "aria-current": active ? "page" : undefined
    }));
  };

  BreadcrumbItem.propTypes = {
    /**
     * Whether it is active, or not.
     */
    active: propTypes.bool,

    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The component tag.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  BreadcrumbItem.defaultProps = {
    tag: "li"
  };

  /**
   * Buttons are Bootstrap's core component for triggering various actions. In Shards, they're very flxible, support multiple sizes, styles, states and many more.
   */

  var Button =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button(props) {
      var _this;

      _classCallCheck(this, Button);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));
      _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(Button, [{
      key: "onClick",
      value: function onClick(e) {
        if (this.props.disabled) {
          e.preventDefault();
          return;
        }

        if (this.props.onClick) {
          this.props.onClick(e);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            theme = _this$props.theme,
            size = _this$props.size,
            pill = _this$props.pill,
            outline = _this$props.outline,
            squared = _this$props.squared,
            active = _this$props.active,
            disabled = _this$props.disabled,
            innerRef = _this$props.innerRef,
            Tag = _this$props.tag,
            block = _this$props.block,
            attrs = _objectWithoutProperties(_this$props, ["className", "theme", "size", "pill", "outline", "squared", "active", "disabled", "innerRef", "tag", "block"]);

        var classes = classNames(className, "btn", theme && "btn-".concat(outline ? "outline-" : "").concat(theme), size && "btn-".concat(size), pill && "btn-pill", squared && "btn-squared", block && "btn-block", active && "active");
        Tag = attrs.href && Tag === "button" ? "a" : Tag;
        var tagType = Tag === "button" && attrs.onClick ? "button" : undefined;
        return React__default.createElement(Tag, _extends({
          ref: innerRef,
          type: tagType
        }, attrs, {
          className: classes,
          disabled: disabled,
          onClick: this.onClick
        }));
      }
    }]);

    return Button;
  }(React__default.Component);

  Button.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The children nodes.
     */
    children: propTypes.node,

    /**
     * The theme color.
     */
    theme: propTypes.string,

    /**
     * The size.
     */
    size: propTypes.string,

    /**
     * Whether it is outline, or not.
     */
    outline: propTypes.bool,

    /**
     * Whether it is pill, or not.
     */
    pill: propTypes.bool,

    /**
     * Whether it is squared, or not.
     */
    squared: propTypes.bool,

    /**
     * Whether it is active, or not.
     */
    active: propTypes.bool,

    /**
     * Whether it should be displayed as a block (full-width), or not.
     */
    block: propTypes.bool,

    /**
     * Whether it is disabled, or not.
     */
    disabled: propTypes.bool,

    /**
     * The component tag.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),

    /**
     * The inner ref.
     * @type {[type]}
     */
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string])
  };
  Button.defaultProps = {
    theme: "primary",
    tag: "button"
  };

  /**
   * Button groups allow you to group buttons together on a single line.
   */

  var ButtonGroup = function ButtonGroup(props) {
    var className = props.className,
        vertical = props.vertical,
        size = props.size,
        attrs = _objectWithoutProperties(props, ["className", "vertical", "size"]);

    var classes = classNames(className, size && "btn-group-".concat(size), vertical ? "btn-group-vertical" : "btn-group");
    return React__default.createElement("div", _extends({
      className: classes
    }, attrs));
  };

  ButtonGroup.propTypes = {
    /**
     * The children nodes.
     */
    children: propTypes.node,

    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The size.
     */
    size: propTypes.string,

    /**
     * Whether it is vertical, or not.
     */
    vertical: propTypes.bool
  };

  /**
   * Button toolbars allow you to group a series of button or input groups on a single line.
   */

  var ButtonToolbar = function ButtonToolbar(props) {
    var className = props.className,
        attrs = _objectWithoutProperties(props, ["className"]);

    var classes = classNames(className, "btn-toolbar");
    return React__default.createElement("div", _extends({
      className: classes
    }, attrs));
  };

  ButtonToolbar.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The children nodes.
     */
    children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node])
  };

  /**
   * Cards provide a flexible content container that you can use to display a variety of content using contextual background colors, headers and footers.
   */

  var Card = function Card(props) {
    var className = props.className,
        innerRef = props.innerRef,
        Tag = props.tag,
        theme = props.theme,
        outline = props.outline,
        small = props.small,
        attrs = _objectWithoutProperties(props, ["className", "innerRef", "tag", "theme", "outline", "small"]);

    var classes = classNames(className, "card", small && "card-small", theme && "".concat(outline ? "border" : "bg", "-").concat(theme));
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes,
      ref: innerRef
    }));
  };

  Card.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The theme color.
     */
    theme: propTypes.string,

    /**
     * Whether it is outline, or not.
     */
    outline: propTypes.bool,

    /**
     * The component tag.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),

    /**
     * Whether the card is small, or not.
     */
    small: propTypes.bool,

    /**
     * The inner ref.
     */
    innerRef: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.func])
  };
  Card.defaultProps = {
    tag: "div"
  };

  var CardBody = function CardBody(props) {
    var className = props.className,
        Tag = props.tag,
        children = props.children,
        attrs = _objectWithoutProperties(props, ["className", "tag", "children"]);

    var classes = classNames(className, "card-body");
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }), children);
  };

  CardBody.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The children nodes.
     */
    children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),

    /**
     * The component tag.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  CardBody.defaultProps = {
    tag: "div"
  };

  var CardColumns = function CardColumns(props) {
    var className = props.className,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "tag"]);

    var classes = classNames(className, "card-columns");
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  CardColumns.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The component tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  CardColumns.defaultProps = {
    tag: "div"
  };

  var CardFooter = function CardFooter(props) {
    var className = props.className,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "tag"]);

    var classes = classNames(className, "card-footer");
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  CardFooter.propTypes = {
    /**
     * The component tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),

    /**
     * The class name.
     */
    className: propTypes.string
  };
  CardFooter.defaultProps = {
    tag: "div"
  };

  var CardGroup = function CardGroup(props) {
    var className = props.className,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "tag"]);

    var classes = classNames(className, "card-group");
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  CardGroup.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The component tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  CardGroup.defaultProps = {
    tag: "div"
  };

  var CardDeck = function CardDeck(props) {
    var className = props.className,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "tag"]);

    var classes = classNames(className, "card-deck");
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  CardDeck.propTypes = {
    /**
     * The component tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),

    /**
     * The class name.
     */
    className: propTypes.string
  };
  CardDeck.defaultProps = {
    tag: "div"
  };

  var CardHeader = function CardHeader(props) {
    var className = props.className,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "tag"]);

    var classes = classNames(className, "card-header");
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  CardHeader.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The component tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  CardHeader.defaultProps = {
    tag: "div"
  };

  var CardImg = function CardImg(props) {
    var className = props.className,
        top = props.top,
        bottom = props.bottom,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "top", "bottom", "tag"]);

    var cardImgClass = "";

    if (top) {
      cardImgClass = "card-img-top";
    }

    if (bottom) {
      cardImgClass = "card-img-bottom";
    }

    cardImgClass = classNames(className, cardImgClass);
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: cardImgClass
    }));
  };

  CardImg.propTypes = {
    /**
     * Whether the image is positioned at the top of the card, or not.
     */
    top: propTypes.bool,

    /**
     * Whether the image is positioned at the bottom of the card, or not.
     */
    bottom: propTypes.bool,

    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The component's tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  CardImg.defaultProps = {
    tag: "img"
  };

  var CardImgOverlay = function CardImgOverlay(props) {
    var className = props.className,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "tag"]);

    var classes = classNames(className, "card-img-overlay");
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  CardImgOverlay.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The component's tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  CardImgOverlay.defaultProps = {
    tag: "div"
  };

  var CardLink = function CardLink(props) {
    var className = props.className,
        Tag = props.tag,
        innerRef = props.innerRef,
        attrs = _objectWithoutProperties(props, ["className", "tag", "innerRef"]);

    var classes = classNames(className, "card-link");
    return React__default.createElement(Tag, _extends({}, attrs, {
      ref: innerRef,
      className: classes
    }));
  };

  CardLink.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The component's tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),

    /**
     * The inner ref.
     */
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string])
  };
  CardLink.defaultProps = {
    tag: "a"
  };

  var CardSubtitle = function CardSubtitle(props) {
    var className = props.className,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "tag"]);

    var classes = classNames(className, "card-subtitle", "text-muted");
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  CardSubtitle.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The component's tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  CardSubtitle.defaultProps = {
    tag: "h6"
  };

  var CardText = function CardText(props) {
    var className = props.className,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "tag"]);

    var classes = classNames(className, "card-text");
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  CardText.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  CardText.defaultProps = {
    tag: "p"
  };

  var CardTitle = function CardTitle(props) {
    var className = props.className,
        Tag = props.tag,
        attributes = _objectWithoutProperties(props, ["className", "tag"]);

    var classes = classNames(className, "card-title");
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  CardTitle.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The component's tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  CardTitle.defaultProps = {
    tag: "h5"
  };

  var reflow = function reflow(node) {
    void node.offsetHeight;
  };
  var getNodeHeight = function getNodeHeight(node) {
    return node.scrollHeight;
  };
  var isBrowser = !!(typeof window !== "undefined" && window.document);
  var isRef = function isRef(target) {
    if (target && _typeof(target) === "object") {
      return "current" in target;
    }

    return false;
  };
  var getDOMElements = function getDOMElements(target) {
    if (isFunction(target)) {
      return target();
    }

    if (isRef(target)) {
      return target.current;
    }

    if (!isBrowser && typeof target !== "string") {
      return target;
    }

    var results = document.querySelectorAll(target);

    if (!results.length) {
      throw new Error("No DOM elements were found for ".concat(target, "."));
    }

    return results;
  };
  var getTarget = function getTarget(target) {
    var results = getDOMElements(target);
    return results.length ? results[0] : results;
  };
  var CustomPropTypes = {
    target: propTypes.oneOfType([propTypes.string, propTypes.func, propTypes.element, propTypes.shape({
      current: propTypes.any
    })]),
    column: propTypes.oneOfType([propTypes.bool, propTypes.number, propTypes.string, propTypes.shape({
      offset: propTypes.oneOfType([propTypes.number, propTypes.string]),
      size: propTypes.oneOfType([propTypes.bool, propTypes.number, propTypes.string]),
      order: propTypes.oneOfType([propTypes.number, propTypes.string])
    })])
  };

  /**
   * The `Collapse` component allows you to easily toggle the visibility of your content.
   */

  var Collapse =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Collapse, _React$Component);

    function Collapse(props) {
      var _this;

      _classCallCheck(this, Collapse);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Collapse).call(this, props));
      _this.state = {
        height: null
      };
      return _this;
    }

    _createClass(Collapse, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            Tag = _this$props.tag,
            open = _this$props.open,
            className = _this$props.className,
            navbar = _this$props.navbar,
            children = _this$props.children,
            innerRef = _this$props.innerRef,
            attrs = _objectWithoutProperties(_this$props, ["tag", "open", "className", "navbar", "children", "innerRef"]);

        var height = this.state.height;
        var transitionProps = pick(attrs, TRANSITION_KEYS);
        var childProps = omit(attrs, TRANSITION_KEYS);
        return React__default.createElement(Transition, _extends({}, transitionProps, {
          in: open,
          onEntering: this.onEntering.bind(this),
          onEntered: this.onEntered.bind(this),
          onExit: this.onExit.bind(this),
          onExiting: this.onExiting.bind(this),
          onExited: this.onExited.bind(this)
        }), function (status) {
          var style = {
            height: height || null,
            display: status !== "exited" && "block"
          };
          var classes = classNames(className, TRANSITION_CLASS_MAP[status] || "collapse", navbar && "navbar-collapse");
          return React__default.createElement(Tag, _extends({}, childProps, {
            style: _objectSpread({}, childProps.style, style),
            className: classes,
            ref: innerRef
          }), children);
        });
      }
    }, {
      key: "onEntering",
      value: function onEntering(node, isAppearing) {
        this.setState({
          height: getNodeHeight(node)
        });
        this.props.onEntering(node, isAppearing);
      }
    }, {
      key: "onEntered",
      value: function onEntered(node, isAppearing) {
        this.setState({
          height: null
        });
        this.props.onEntered(node, isAppearing);
      }
    }, {
      key: "onExit",
      value: function onExit(node) {
        this.setState({
          height: getNodeHeight(node)
        });
        this.props.onExit(node);
      }
    }, {
      key: "onExiting",
      value: function onExiting(node) {
        reflow(node);
        this.setState({
          height: 0
        });
        this.props.onExiting(node);
      }
    }, {
      key: "onExited",
      value: function onExited(node) {
        this.setState({
          height: null
        });
        this.props.onExited(node);
      }
    }]);

    return Collapse;
  }(React__default.Component);

  Collapse.propTypes = _objectSpread({}, Transition.propTypes, {
    /**
     * Whether it is open, or not.
     */
    open: propTypes.bool,

    /**
     * The children components.
     */
    children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),

    /**
     * The element tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),

    /**
     * The class name.
     */
    className: propTypes.node,

    /**
     * Whether it is located inside a navbar, or not.
     */
    navbar: propTypes.bool,

    /**
     * The inner ref.
     */
    innerRef: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.object])
  });
  Collapse.defaultProps = _objectSpread({}, Transition.defaultProps, {
    open: false,
    appear: false,
    enter: true,
    exit: true,
    tag: "div",
    timeout: TIMEOUT.COLLAPSE
  });

  /**
   * Shards React provides support for all native Bootstrap 4 layout elements including **containers**, **rows**, **columns** and **form rows** so you can use its full power while building your project's responsive layout powered by flexbox.
   */

  var Container = function Container(props) {
    var className = props.className,
        fluid = props.fluid,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "fluid", "tag"]);

    var classes = classNames(className, fluid ? "container-fluid" : "container");
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  Container.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * Whether it is fluid, or not.
     */
    fluid: propTypes.bool,

    /**
     * The component's tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  Container.defaultProps = {
    tag: "div"
  };

  var Row = function Row(props) {
    var noGutters = props.noGutters,
        form = props.form,
        className = props.className,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["noGutters", "form", "className", "tag"]);

    var classes = classNames(className, noGutters ? 'no-gutters' : null, form ? 'form-row' : 'row');
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  Row.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * Whether it has gutters, or not.
     */
    noGutters: propTypes.bool,

    /**
     * Whether it is located inside a form, or not.
     */
    form: propTypes.bool,

    /**
     * The component's tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  Row.defaultProps = {
    tag: 'div'
  };

  var makeColumnClass = function makeColumnClass(isXs, breakpoint, colSize) {
    if (colSize === true || colSize === "") {
      return isXs ? "col" : "col-".concat(breakpoint);
    } else if (colSize === "auto") {
      return isXs ? "col-auto" : "col-".concat(breakpoint, "-auto");
    }

    return isXs ? "col-".concat(colSize) : "col-".concat(breakpoint, "-").concat(colSize);
  };

  var Col = function Col(props) {
    var className = props.className,
        breakpoints = props.breakpoints,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "breakpoints", "tag"]);

    var columnClasses = [];
    breakpoints.forEach(function (breakpoint, idx) {
      var _classNames;

      var columnProp = props[breakpoint];
      delete attrs[breakpoint];

      if (!columnProp && columnProp !== "") {
        return;
      }

      var isXs = idx === 0;

      if (_typeof(columnProp) !== "object") {
        var _colClass = makeColumnClass(isXs, breakpoint, columnProp);

        columnClasses.push(_colClass);
        return;
      }

      var colSizeInterfix = isXs ? "-" : "-".concat(breakpoint, "-");
      var colClass = makeColumnClass(isXs, breakpoint, columnProp.size);
      columnClasses.push(classNames((_classNames = {}, _defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ""), _defineProperty(_classNames, "order".concat(colSizeInterfix).concat(columnProp.order), columnProp.order || columnProp.order === 0), _defineProperty(_classNames, "offset".concat(colSizeInterfix).concat(columnProp.offset), columnProp.offset || columnProp.offset === 0), _classNames)));
    });

    if (!columnClasses.length) {
      columnClasses.push("col");
    }

    var classes = classNames(className, columnClasses);
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  Col.propTypes = {
    /**
     * Col number or config object for xs viewports.
     */
    xs: CustomPropTypes.column,

    /**
     * Col number or config object for sm viewports.
     */
    sm: CustomPropTypes.column,

    /**
     * Col number or config object for md viewports.
     */
    md: CustomPropTypes.column,

    /**
     * Col number or config object for lg viewports.
     */
    lg: CustomPropTypes.column,

    /**
     * Col number or config object for xl viewports.
     */
    xl: CustomPropTypes.column,

    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The available breakpoints.
     */
    breakpoints: propTypes.array,

    /**
     * The component tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  Col.defaultProps = {
    tag: "div",
    breakpoints: BREAKPOINTS
  };

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ".react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow {\n  margin-left: -8px;\n  position: absolute;\n}\n\n.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n.react-datepicker__month-read-view--down-arrow::before,\n.react-datepicker__month-year-read-view--down-arrow::before {\n  box-sizing: content-box;\n  position: absolute;\n  border: 8px solid transparent;\n  height: 0;\n  width: 1px;\n}\n\n.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n.react-datepicker__month-read-view--down-arrow::before,\n.react-datepicker__month-year-read-view--down-arrow::before {\n  content: \"\";\n  z-index: -1;\n  border-width: 8px;\n  left: -8px;\n  border-bottom-color: #aeaeae;\n}\n\n.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle {\n  top: 0;\n  margin-top: -8px;\n}\n\n.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle::before {\n  border-top: none;\n  border-bottom-color: #f0f0f0;\n}\n\n.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle::before {\n  top: -1px;\n  border-bottom-color: #aeaeae;\n}\n\n.react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow {\n  bottom: 0;\n  margin-bottom: -8px;\n}\n\n.react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n.react-datepicker__month-read-view--down-arrow::before,\n.react-datepicker__month-year-read-view--down-arrow::before {\n  border-bottom: none;\n  border-top-color: #fff;\n}\n\n.react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n.react-datepicker__month-read-view--down-arrow::before,\n.react-datepicker__month-year-read-view--down-arrow::before {\n  bottom: -1px;\n  border-top-color: #aeaeae;\n}\n\n.react-datepicker-wrapper {\n  display: inline-block;\n}\n\n.react-datepicker {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 0.8rem;\n  background-color: #fff;\n  color: #000;\n  border: 1px solid #aeaeae;\n  border-radius: 0.3rem;\n  display: inline-block;\n  position: relative;\n}\n\n.react-datepicker--time-only .react-datepicker__triangle {\n  left: 35px;\n}\n\n.react-datepicker--time-only .react-datepicker__time-container {\n  border-left: 0;\n}\n\n.react-datepicker--time-only .react-datepicker__time {\n  border-radius: 0.3rem;\n}\n\n.react-datepicker--time-only .react-datepicker__time-box {\n  border-radius: 0.3rem;\n}\n\n.react-datepicker__triangle {\n  position: absolute;\n  left: 50px;\n}\n\n.react-datepicker-popper {\n  z-index: 1;\n}\n\n.react-datepicker-popper[data-placement^=\"bottom\"] {\n  margin-top: 10px;\n}\n\n.react-datepicker-popper[data-placement^=\"top\"] {\n  margin-bottom: 10px;\n}\n\n.react-datepicker-popper[data-placement^=\"right\"] {\n  margin-left: 8px;\n}\n\n.react-datepicker-popper[data-placement^=\"right\"] .react-datepicker__triangle {\n  left: auto;\n  right: 42px;\n}\n\n.react-datepicker-popper[data-placement^=\"left\"] {\n  margin-right: 8px;\n}\n\n.react-datepicker-popper[data-placement^=\"left\"] .react-datepicker__triangle {\n  left: 42px;\n  right: auto;\n}\n\n.react-datepicker__header {\n  text-align: center;\n  background-color: #f0f0f0;\n  border-bottom: 1px solid #aeaeae;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n  padding-top: 8px;\n  position: relative;\n}\n\n.react-datepicker__header--time {\n  padding-bottom: 8px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.react-datepicker__year-dropdown-container--select,\n.react-datepicker__month-dropdown-container--select,\n.react-datepicker__month-year-dropdown-container--select,\n.react-datepicker__year-dropdown-container--scroll,\n.react-datepicker__month-dropdown-container--scroll,\n.react-datepicker__month-year-dropdown-container--scroll {\n  display: inline-block;\n  margin: 0 2px;\n}\n\n.react-datepicker__current-month,\n.react-datepicker-time__header {\n  margin-top: 0;\n  color: #000;\n  font-weight: bold;\n  font-size: 0.944rem;\n}\n\n.react-datepicker-time__header {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.react-datepicker__navigation {\n  background: none;\n  line-height: 1.7rem;\n  text-align: center;\n  cursor: pointer;\n  position: absolute;\n  top: 10px;\n  width: 0;\n  padding: 0;\n  border: 0.45rem solid transparent;\n  z-index: 1;\n  height: 10px;\n  width: 10px;\n  text-indent: -999em;\n  overflow: hidden;\n}\n\n.react-datepicker__navigation--previous {\n  left: 10px;\n  border-right-color: #ccc;\n}\n\n.react-datepicker__navigation--previous:hover {\n  border-right-color: #b3b3b3;\n}\n\n.react-datepicker__navigation--previous--disabled, .react-datepicker__navigation--previous--disabled:hover {\n  border-right-color: #e6e6e6;\n  cursor: default;\n}\n\n.react-datepicker__navigation--next {\n  right: 10px;\n  border-left-color: #ccc;\n}\n\n.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {\n  right: 80px;\n}\n\n.react-datepicker__navigation--next:hover {\n  border-left-color: #b3b3b3;\n}\n\n.react-datepicker__navigation--next--disabled, .react-datepicker__navigation--next--disabled:hover {\n  border-left-color: #e6e6e6;\n  cursor: default;\n}\n\n.react-datepicker__navigation--years {\n  position: relative;\n  top: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.react-datepicker__navigation--years-previous {\n  top: 4px;\n  border-top-color: #ccc;\n}\n\n.react-datepicker__navigation--years-previous:hover {\n  border-top-color: #b3b3b3;\n}\n\n.react-datepicker__navigation--years-upcoming {\n  top: -4px;\n  border-bottom-color: #ccc;\n}\n\n.react-datepicker__navigation--years-upcoming:hover {\n  border-bottom-color: #b3b3b3;\n}\n\n.react-datepicker__month-container {\n  float: left;\n}\n\n.react-datepicker__month {\n  margin: 0.4rem;\n  text-align: center;\n}\n\n.react-datepicker__time-container {\n  float: right;\n  border-left: 1px solid #aeaeae;\n  width: 70px;\n}\n\n.react-datepicker__time-container--with-today-button {\n  display: inline;\n  border: 1px solid #aeaeae;\n  border-radius: 0.3rem;\n  position: absolute;\n  right: -72px;\n  top: 0;\n}\n\n.react-datepicker__time-container .react-datepicker__time {\n  position: relative;\n  background: white;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {\n  width: 70px;\n  overflow-x: hidden;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {\n  list-style: none;\n  margin: 0;\n  height: calc(195px + (1.7rem / 2));\n  overflow-y: scroll;\n  padding-right: 0px;\n  padding-left: 0px;\n  width: 100%;\n  box-sizing: content-box;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {\n  height: 30px;\n  padding: 5px 10px;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {\n  cursor: pointer;\n  background-color: #f0f0f0;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {\n  background-color: #216ba5;\n  color: white;\n  font-weight: bold;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {\n  background-color: #216ba5;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled {\n  color: #ccc;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover {\n  cursor: default;\n  background-color: transparent;\n}\n\n.react-datepicker__week-number {\n  color: #ccc;\n  display: inline-block;\n  width: 1.7rem;\n  line-height: 1.7rem;\n  text-align: center;\n  margin: 0.166rem;\n}\n\n.react-datepicker__week-number.react-datepicker__week-number--clickable {\n  cursor: pointer;\n}\n\n.react-datepicker__week-number.react-datepicker__week-number--clickable:hover {\n  border-radius: 0.3rem;\n  background-color: #f0f0f0;\n}\n\n.react-datepicker__day-names,\n.react-datepicker__week {\n  white-space: nowrap;\n}\n\n.react-datepicker__day-name,\n.react-datepicker__day,\n.react-datepicker__time-name {\n  color: #000;\n  display: inline-block;\n  width: 1.7rem;\n  line-height: 1.7rem;\n  text-align: center;\n  margin: 0.166rem;\n}\n\n.react-datepicker__day {\n  cursor: pointer;\n}\n\n.react-datepicker__day:hover {\n  border-radius: 0.3rem;\n  background-color: #f0f0f0;\n}\n\n.react-datepicker__day--today {\n  font-weight: bold;\n}\n\n.react-datepicker__day--highlighted {\n  border-radius: 0.3rem;\n  background-color: #3dcc4a;\n  color: #fff;\n}\n\n.react-datepicker__day--highlighted:hover {\n  background-color: #32be3f;\n}\n\n.react-datepicker__day--highlighted-custom-1 {\n  color: magenta;\n}\n\n.react-datepicker__day--highlighted-custom-2 {\n  color: green;\n}\n\n.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range {\n  border-radius: 0.3rem;\n  background-color: #216ba5;\n  color: #fff;\n}\n\n.react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover {\n  background-color: #1d5d90;\n}\n\n.react-datepicker__day--keyboard-selected {\n  border-radius: 0.3rem;\n  background-color: #2a87d0;\n  color: #fff;\n}\n\n.react-datepicker__day--keyboard-selected:hover {\n  background-color: #1d5d90;\n}\n\n.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range) {\n  background-color: rgba(33, 107, 165, 0.5);\n}\n\n.react-datepicker__month--selecting-range .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range) {\n  background-color: #f0f0f0;\n  color: #000;\n}\n\n.react-datepicker__day--disabled {\n  cursor: default;\n  color: #ccc;\n}\n\n.react-datepicker__day--disabled:hover {\n  background-color: transparent;\n}\n\n.react-datepicker__input-container {\n  position: relative;\n  display: inline-block;\n}\n\n.react-datepicker__year-read-view,\n.react-datepicker__month-read-view,\n.react-datepicker__month-year-read-view {\n  border: 1px solid transparent;\n  border-radius: 0.3rem;\n}\n\n.react-datepicker__year-read-view:hover,\n.react-datepicker__month-read-view:hover,\n.react-datepicker__month-year-read-view:hover {\n  cursor: pointer;\n}\n\n.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow {\n  border-top-color: #b3b3b3;\n}\n\n.react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow {\n  border-top-color: #ccc;\n  float: right;\n  margin-left: 20px;\n  top: 8px;\n  position: relative;\n  border-width: 0.45rem;\n}\n\n.react-datepicker__year-dropdown,\n.react-datepicker__month-dropdown,\n.react-datepicker__month-year-dropdown {\n  background-color: #f0f0f0;\n  position: absolute;\n  width: 50%;\n  left: 25%;\n  top: 30px;\n  z-index: 1;\n  text-align: center;\n  border-radius: 0.3rem;\n  border: 1px solid #aeaeae;\n}\n\n.react-datepicker__year-dropdown:hover,\n.react-datepicker__month-dropdown:hover,\n.react-datepicker__month-year-dropdown:hover {\n  cursor: pointer;\n}\n\n.react-datepicker__year-dropdown--scrollable,\n.react-datepicker__month-dropdown--scrollable,\n.react-datepicker__month-year-dropdown--scrollable {\n  height: 150px;\n  overflow-y: scroll;\n}\n\n.react-datepicker__year-option,\n.react-datepicker__month-option,\n.react-datepicker__month-year-option {\n  line-height: 20px;\n  width: 100%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.react-datepicker__year-option:first-of-type,\n.react-datepicker__month-option:first-of-type,\n.react-datepicker__month-year-option:first-of-type {\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n}\n\n.react-datepicker__year-option:last-of-type,\n.react-datepicker__month-option:last-of-type,\n.react-datepicker__month-year-option:last-of-type {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border-bottom-left-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n\n.react-datepicker__year-option:hover,\n.react-datepicker__month-option:hover,\n.react-datepicker__month-year-option:hover {\n  background-color: #ccc;\n}\n\n.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,\n.react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,\n.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming {\n  border-bottom-color: #b3b3b3;\n}\n\n.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,\n.react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,\n.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous {\n  border-top-color: #b3b3b3;\n}\n\n.react-datepicker__year-option--selected,\n.react-datepicker__month-option--selected,\n.react-datepicker__month-year-option--selected {\n  position: absolute;\n  left: 15px;\n}\n\n.react-datepicker__close-icon {\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n  outline: 0;\n  padding: 0;\n  vertical-align: middle;\n  position: absolute;\n  height: 16px;\n  width: 16px;\n  top: 25%;\n  right: 7px;\n}\n\n.react-datepicker__close-icon::after {\n  background-color: #216ba5;\n  border-radius: 50%;\n  bottom: 0;\n  box-sizing: border-box;\n  color: #fff;\n  content: \"\\00d7\";\n  cursor: pointer;\n  font-size: 12px;\n  height: 16px;\n  width: 16px;\n  line-height: 1;\n  margin: -8px auto 0;\n  padding: 2px;\n  position: absolute;\n  right: 0px;\n  text-align: center;\n}\n\n.react-datepicker__today-button {\n  background: #f0f0f0;\n  border-top: 1px solid #aeaeae;\n  cursor: pointer;\n  text-align: center;\n  font-weight: bold;\n  padding: 5px 0;\n  clear: left;\n}\n\n.react-datepicker__portal {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.8);\n  left: 0;\n  top: 0;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  z-index: 2147483647;\n}\n\n.react-datepicker__portal .react-datepicker__day-name,\n.react-datepicker__portal .react-datepicker__day,\n.react-datepicker__portal .react-datepicker__time-name {\n  width: 3rem;\n  line-height: 3rem;\n}\n\n@media (max-width: 400px), (max-height: 550px) {\n  .react-datepicker__portal .react-datepicker__day-name,\n  .react-datepicker__portal .react-datepicker__day,\n  .react-datepicker__portal .react-datepicker__time-name {\n    width: 2rem;\n    line-height: 2rem;\n  }\n}\n\n.react-datepicker__portal .react-datepicker__current-month,\n.react-datepicker__portal .react-datepicker-time__header {\n  font-size: 1.44rem;\n}\n\n.react-datepicker__portal .react-datepicker__navigation {\n  border: 0.81rem solid transparent;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--previous {\n  border-right-color: #ccc;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--previous:hover {\n  border-right-color: #b3b3b3;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--previous--disabled, .react-datepicker__portal .react-datepicker__navigation--previous--disabled:hover {\n  border-right-color: #e6e6e6;\n  cursor: default;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--next {\n  border-left-color: #ccc;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--next:hover {\n  border-left-color: #b3b3b3;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--next--disabled, .react-datepicker__portal .react-datepicker__navigation--next--disabled:hover {\n  border-left-color: #e6e6e6;\n  cursor: default;\n}\n";
  styleInject(css);

  var css$1 = "/**\n * Datepicker Styles\n */\n\n.react-datepicker {\n  border: none;\n}\n\n.react-datepicker-popper,\n.react-datepicker {\n  z-index: 1000;\n}\n\n.react-datepicker__month-container {\n  border: none;\n  box-shadow: 0 0.5rem 4rem rgba(0, 0, 0, 0.11), 0 10px 20px rgba(0, 0, 0, 0.05),\n    0 2px 3px rgba(0, 0, 0, 0.06);\n}\n\n.react-datepicker__header {\n  border: none;\n  background: #fff;\n  padding-top: 20px;\n}\n\n.react-datepicker__day-name,\n.react-datepicker__day,\n.react-datepicker__time-name,\n.react-datepicker__current-month {\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,\n    Helvetica Neue, Arial, sans-serif;\n  color: #5a6169;\n}\n\n.react-datepicker__day--disabled {\n  color: #ddd;\n}\n\n.react-datepicker__day--disabled:hover {\n  background: transparent !important;\n}\n\n.react-datepicker__day {\n  transition: all 0.25s cubic-bezier(0.27, 0.01, 0.38, 1.06);\n}\n\n.react-datepicker__day:hover {\n  background-color: #eceeef;\n}\n\n.react-datepicker__current-month {\n  font-weight: 600;\n}\n\n.react-datepicker__day,\n.react-datepicker__day:hover,\n.react-datepicker__day--keyboard-selected {\n  border-radius: 50%;\n}\n\n.react-datepicker__day--highlighted {\n  background: #e6f2ff;\n}\n\n.react-datepicker__day--keyboard-selected,\n.react-datepicker__day--selected {\n  color: #fff;\n  background: #007bff;\n}\n\n.react-datepicker__day--keyboard-selected:hover,\n.react-datepicker__day--selected:hover {\n  background: #006fe6;\n}\n\n.react-datepicker__header,\n.react-datepicker__month-container {\n  border-bottom-left-radius: 0.375rem;\n  border-bottom-right-radius: 0.375rem;\n}\n\n.react-datepicker__header {\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n}\n\n.react-datepicker {\n  border-radius: 0.375rem;\n}\n\n.react-datepicker__navigation {\n  top: 25px;\n}\n\n.react-datepicker__triangle:before {\n  border-bottom-color: #e3e3e3 !important;\n}\n\n.react-datepicker__month {\n  padding: 10px 15px;\n}\n\n/* Datepicker & Input Groups */\n\n.input-group > .react-datepicker-wrapper .form-control {\n  position: relative;\n}\n\n.input-group > .react-datepicker-wrapper:not(:first-child) .form-control {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group > .react-datepicker-wrapper:not(:last-child) .form-control {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group > .react-datepicker-wrapper ~ .react-datepicker-wrapper input {\n  margin-left: -1px;\n}\n\n.input-group\n  > .react-datepicker-wrapper\n  ~ .react-datepicker-wrapper\n  ~ .input-group-append {\n  margin-left: -2px;\n}\n\n.input-group > .react-datepicker-wrapper .form-control:focus {\n  z-index: 3;\n}\n";
  styleInject(css$1);

  /**
   * The `DatePicker` component is a wrapper for the [react-datepicker](https://github.com/Hacker0x01/react-datepicker) component.
   *
   * > **Note:** Make sure to check out its official documentation for the complete list of available props.
   */

  var DatePicker = function DatePicker(props) {
    var className = props.className,
        size = props.size,
        attrs = _objectWithoutProperties(props, ["className", "size"]);

    var classes = classNames(className, "form-control", size && "form-control-".concat(size));

    if (!attrs.dropdownMode) {
      attrs.dropdownMode = "select";
    }

    return React__default.createElement(ReactDatePicker, _extends({}, props, {
      className: classes
    }));
  };

  DatePicker.propTypes = _objectSpread({}, ReactDatePicker.propTypes, {
    size: propTypes.string
  });

  var DropdownContext = React__default.createContext({
    toggle: function toggle() {},
    open: false,
    direction: "down",
    nav: false
  });

  /**
   * You can use dropdowns to display accessible contextual overlays for displaying lists of links and more.
   */

  var Dropdown =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Dropdown, _React$Component);

    function Dropdown(props) {
      var _this;

      _classCallCheck(this, Dropdown);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));
      _this.handleListeners = _this.handleListeners.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.addListeners = _this.addListeners.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.removeListeners = _this.removeListeners.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.getContainer = _this.getContainer.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(Dropdown, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.handleListeners();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.removeListeners();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (this.props.open !== prevProps.open) {
          this.handleListeners();
        }
      }
    }, {
      key: "handleListeners",
      value: function handleListeners() {
        if (this.props.open) {
          this.addListeners();
          return;
        }

        this.removeListeners();
      }
    }, {
      key: "addListeners",
      value: function addListeners() {
        var _this2 = this;

        EVENTS.CLICK.forEach(function (e) {
          return document.addEventListener(e, _this2.handleDocumentClick, true);
        });
      }
    }, {
      key: "removeListeners",
      value: function removeListeners() {
        var _this3 = this;

        EVENTS.CLICK.forEach(function (e) {
          return document.removeEventListener(e, _this3.handleDocumentClick, true);
        });
      }
    }, {
      key: "getContainer",
      value: function getContainer() {
        return ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node
      }
    }, {
      key: "handleDocumentClick",
      value: function handleDocumentClick(e) {
        if (e && (e.which === 3 || e.type === "keyup" && e.which !== KEYCODES.TAB)) return;
        var container = this.getContainer();

        if (container.contains(e.target) && container !== e.target && (e.type !== "keyup" || e.which === KEYCODES.TAB)) {
          return;
        }

        this.toggle(e);
      }
    }, {
      key: "toggle",
      value: function toggle(e) {
        if (this.props.disabled) {
          return e && e.preventDefault();
        }

        return this.props.toggle(e);
      }
    }, {
      key: "render",
      value: function render() {
        var props = omit(this.props, ["toggle", "disabled", "inNavbar", "direction"]);

        var className = props.className,
            children = props.children,
            dropup = props.dropup,
            open = props.open,
            group = props.group,
            size = props.size,
            nav = props.nav,
            setActiveFromChild = props.setActiveFromChild,
            active = props.active,
            addonType = props.addonType,
            attrs = _objectWithoutProperties(props, ["className", "children", "dropup", "open", "group", "size", "nav", "setActiveFromChild", "active", "addonType"]);

        var direction = this.props.direction === "down" && dropup ? "up" : this.props.direction;
        attrs.tag = attrs.tag || (nav ? "li" : "div");
        var subItemIsActive = false;

        if (setActiveFromChild) {
          React__default.Children.map(this.props.children[1].props.children, function (dropdownItem) {
            if (dropdownItem && dropdownItem.props.active) subItemIsActive = true;
          });
        }

        var classes = classNames(className, direction !== "down" && "drop".concat(direction), nav && active && "active", setActiveFromChild && subItemIsActive && "active", addonType && "input-group-".concat(addonType), group && "btn-group", !!size && "btn-group-".concat(size), !group && !addonType && "dropdown", open && "show", nav && "nav-item");
        var toggle = this.toggle;
        return React__default.createElement(DropdownContext.Provider, {
          value: {
            toggle: toggle,
            open: open,
            direction: direction,
            nav: nav
          }
        }, React__default.createElement(reactPopper.Manager, attrs, React__default.createElement(DropdownContext.Consumer, null, function () {
          return React__default.createElement("div", {
            className: classes
          }, children);
        })));
      }
    }]);

    return Dropdown;
  }(React__default.Component);

  Dropdown.propTypes = {
    /**
     * Whether it is open, or not.
     */
    open: propTypes.bool,

    /**
     * Whether it is disabled, or not.
     */
    disabled: propTypes.bool,

    /**
     * The toggle function.
     */
    toggle: propTypes.func,

    /**
     * Whether it is located inside a navbar, or not.
     */
    inNavbar: propTypes.bool,

    /**
     * Whether it is a drop-up, or not.
     */
    dropup: propTypes.bool,

    /**
     * The component's tag type.
     */
    tag: propTypes.string,

    /**
     * Whether it is located inside a Nav, or not.
     */
    nav: propTypes.bool,

    /**
     * The direction.
     */
    direction: propTypes.oneOf(["up", "down", "left", "right"])
  };
  Dropdown.defaultProps = {
    open: false,
    direction: "down",
    nav: false
  };

  var DropdownToggle =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(DropdownToggle, _React$Component);

    function DropdownToggle(props) {
      var _this;

      _classCallCheck(this, DropdownToggle);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DropdownToggle).call(this, props));
      _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(DropdownToggle, [{
      key: "onClick",
      value: function onClick(e) {
        if (this.props.disabled) {
          e.preventDefault();
          return;
        }

        if (this.props.nav && !this.props.tag) {
          e.preventDefault();
        }

        if (this.props.onClick) {
          this.props.onClick(e);
        }

        this.context.toggle(e);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            className = _this$props.className,
            theme = _this$props.theme,
            caret = _this$props.caret,
            split = _this$props.split,
            nav = _this$props.nav,
            tag = _this$props.tag,
            attrs = _objectWithoutProperties(_this$props, ["className", "theme", "caret", "split", "nav", "tag"]);

        var ariaLabel = attrs["aria-label"] || "Toggle Dropdown";
        var classes = classNames(className, (caret || split) && "dropdown-toggle", split && "dropdown-toggle-split", nav && "nav-link");
        var children = attrs.children || React__default.createElement("span", {
          className: "sr-only"
        }, ariaLabel);
        var Tag;

        if (nav && !tag) {
          Tag = "a";
          attrs.href = "#";
        } else if (!tag) {
          Tag = Button;
          attrs.theme = theme;
        } else {
          Tag = tag;
        }

        if (this.context.inNavbar) {
          return React__default.createElement(reactPopper.Reference, null, function () {
            return React__default.createElement(Tag, _extends({}, attrs, {
              className: classes,
              onClick: _this2.onClick,
              "aria-expanded": _this2.context.isOpen
            }), children);
          });
        }

        return React__default.createElement(reactPopper.Reference, null, function () {
          return React__default.createElement(Tag, _extends({}, attrs, {
            className: classes,
            onClick: _this2.onClick,
            "aria-expanded": _this2.context.isOpen
          }), children);
        });
      }
    }]);

    return DropdownToggle;
  }(React__default.Component);

  DropdownToggle.propTypes = {
    /**
     * Whether it should display a caret, or not.
     */
    caret: propTypes.bool,

    /**
     * The theme color.
     */
    theme: propTypes.string,

    /**
     * The children nodes.
     */
    children: propTypes.node,

    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * Whether it is disabled, or not.
     */
    disabled: propTypes.bool,

    /**
     * The function that should be triggered on click.
     */
    onClick: propTypes.func,

    /**
     * The aria-haspopup attribute.
     */
    "aria-haspopup": propTypes.bool,

    /**
     * Whether it is split, or not.
     */
    split: propTypes.bool,

    /**
     * Whether it is located inside a nav, or not.
     */
    nav: propTypes.bool,

    /**
     * The component's tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  DropdownToggle.defaultProps = {
    "aria-haspopup": true,
    theme: "primary"
  };
  DropdownToggle.contextType = DropdownContext;

  var DropdownMenu =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(DropdownMenu, _React$Component);

    function DropdownMenu() {
      _classCallCheck(this, DropdownMenu);

      return _possibleConstructorReturn(this, _getPrototypeOf(DropdownMenu).apply(this, arguments));
    }

    _createClass(DropdownMenu, [{
      key: "render",
      value: function render() {
        var _this = this;

        var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children,
            right = _this$props.right,
            Tag = _this$props.tag,
            flip = _this$props.flip,
            small = _this$props.small,
            modifiers = _this$props.modifiers,
            persist = _this$props.persist,
            attrs = _objectWithoutProperties(_this$props, ["className", "children", "right", "tag", "flip", "small", "modifiers", "persist"]);

        var classes = classNames(className, "dropdown-menu", small && "dropdown-menu-small", right && "dropdown-menu-right", this.context.open && "show");

        if (persist || this.context.open && !this.context.inNavbar) {
          var pos1 = DROPDOWN_POSITION_MAP[this.context.direction.toUpperCase()] || "bottom";
          var pos2 = right ? "end" : "start";
          attrs.placement = "".concat(pos1, "-").concat(pos2);
          attrs.component = Tag;
          attrs.modifiers = !flip ? _objectSpread({}, modifiers, {
            flip: {
              enabled: false
            }
          }) : modifiers;
          return React__default.createElement(reactPopper.Popper, attrs, function (_ref) {
            var ref = _ref.ref,
                placement = _ref.placement;
            return React__default.createElement("div", {
              ref: ref,
              className: classes,
              "x-placement": placement,
              "aria-hidden": !_this.context.open,
              tabIndex: "-1",
              role: "menu"
            }, children);
          });
        }

        return React__default.createElement(Tag, _extends({
          tabIndex: "-1",
          role: "menu"
        }, attrs, {
          className: classes
        }), children);
      }
    }]);

    return DropdownMenu;
  }(React__default.Component);

  DropdownMenu.propTypes = {
    /**
     * The component tag.
     */
    tag: propTypes.string,

    /**
     * The children nodes.
     */
    children: propTypes.node.isRequired,

    /**
     * Whether it is positioned on the right side, or not.
     */
    right: propTypes.bool,

    /**
     * Whether it should flip, or not.
     */
    flip: propTypes.bool,

    /**
     * Whether the dropdown is small, or not.
     */
    small: propTypes.bool,

    /**
     * The modifiers config object.
     */
    modifiers: propTypes.object,

    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * Whether it should persist, or not.
     */
    persist: propTypes.bool
  };
  DropdownMenu.defaultProps = {
    tag: "div",
    flip: true
  };
  DropdownMenu.contextType = DropdownContext;

  var DropdownItem =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(DropdownItem, _React$Component);

    function DropdownItem(props) {
      var _this;

      _classCallCheck(this, DropdownItem);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DropdownItem).call(this, props));
      _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.getTabIndex = _this.getTabIndex.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(DropdownItem, [{
      key: "onClick",
      value: function onClick(e) {
        if (this.props.disabled || this.props.header || this.props.divider) {
          e.preventDefault();
          return;
        }

        if (this.props.onClick) {
          this.props.onClick(e);
        }

        if (this.props.toggle) {
          this.context.toggle(e);
        }
      }
    }, {
      key: "getTabIndex",
      value: function getTabIndex() {
        if (this.props.disabled || this.props.header || this.props.divider) {
          return "-1";
        }

        return "0";
      }
    }, {
      key: "render",
      value: function render() {
        var _omit = omit(this.props, ["toggle"]),
            className = _omit.className,
            divider = _omit.divider,
            Tag = _omit.tag,
            header = _omit.header,
            active = _omit.active,
            attrs = _objectWithoutProperties(_omit, ["className", "divider", "tag", "header", "active"]);

        var tabIndex = this.getTabIndex();
        var classes = classNames(className, attrs.disabled && "disabled", !divider && !header && "dropdown-item", header && "dropdown-header", divider && "dropdown-divider", active && "active");

        if (Tag === "button") {
          if (header) {
            Tag = "h6";
          } else if (divider) {
            Tag = "div";
          } else if (attrs.href) {
            Tag = "a";
          }
        }

        return React__default.createElement(Tag, _extends({
          type: Tag === "button" && (attrs.onClick || attrs.toggle) ? "button" : undefined
        }, attrs, {
          tabIndex: tabIndex,
          className: classes,
          onClick: this.onClick
        }));
      }
    }]);

    return DropdownItem;
  }(React__default.Component);

  DropdownItem.propTypes = {
    /**
     * The children nodes.
     */
    children: propTypes.node,

    /**
     * Whether it is active, or not.
     */
    active: propTypes.bool,

    /**
     * Whether it is disabled, or not.
     */
    disabled: propTypes.bool,

    /**
     * Whether it is a divider, or not.
     */
    divider: propTypes.bool,

    /**
     * Whether it is a dropdown header item, or not.
     */
    header: propTypes.bool,

    /**
     * The function that should be triggered on click.
     */
    onClick: propTypes.func,

    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * Whether it should toggle the dropdown, or not.
     */
    toggle: propTypes.bool,

    /**
     * The component's tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  DropdownItem.defaultProps = {
    tag: "button",
    toggle: true
  };
  DropdownItem.contextType = DropdownContext;

  /**
   * Examples and usage guidelines for form controls.
   */

  var Form =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form(props) {
      var _this;

      _classCallCheck(this, Form);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this, props));
      _this.getRef = _this.getRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.submit = _this.submit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(Form, [{
      key: "getRef",
      value: function getRef(ref) {
        if (this.props.innerRef) {
          this.props.innerRef(ref);
        }

        this.ref = ref;
      }
    }, {
      key: "submit",
      value: function submit() {
        if (this.ref) {
          this.ref.submit();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            Tag = _this$props.tag,
            inline = _this$props.inline,
            innerRef = _this$props.innerRef,
            attrs = _objectWithoutProperties(_this$props, ["className", "tag", "inline", "innerRef"]);

        var classes = classNames(className, inline && "form-inline");
        return React__default.createElement(Tag, _extends({}, attrs, {
          ref: innerRef,
          className: classes
        }));
      }
    }]);

    return Form;
  }(React__default.Component);

  Form.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * Whether it is inline, or not.
     */
    inline: propTypes.bool,

    /**
     * The children nodes.
     */
    children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),

    /**
     * The inner ref.
     */
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),

    /**
     * The component's tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  Form.defaultProps = {
    tag: "form"
  };

  var FormFeedback = function FormFeedback(props) {
    var className = props.className,
        valid = props.valid,
        tooltip = props.tooltip,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "valid", "tooltip", "tag"]);

    var validMode = tooltip ? "tooltip" : "feedback";
    var classes = classNames(className, valid ? "valid-".concat(validMode) : "invalid-".concat(validMode));
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  FormFeedback.propTypes = {
    /**
     * The children.
     */
    children: propTypes.node,

    /**
     * The tag type.
     */
    tag: propTypes.string,

    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * Whether the feedback is valid, or not.
     */
    valid: propTypes.bool,

    /**
     * Whether the feedback should be displayed as tooltip.
     */
    tooltip: propTypes.bool
  };
  FormFeedback.defaultProps = {
    tag: "div",
    valid: undefined
  };

  /**
   * The `FormCheckbox` component is a wrapper over Bootstrap's [custom checkbox component](https://getbootstrap.com/docs/4.1/components/forms/#checkboxes-and-radios-1).
   */

  var FormCheckbox =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(FormCheckbox, _React$Component);

    function FormCheckbox(props) {
      var _this;

      _classCallCheck(this, FormCheckbox);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FormCheckbox).call(this, props));
      _this.getRef = _this.getRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(FormCheckbox, [{
      key: "getRef",
      value: function getRef(ref) {
        if (this.props.innerRef) {
          this.props.innerRef(ref);
        }

        this.ref = ref;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children,
            inline = _this$props.inline,
            valid = _this$props.valid,
            invalid = _this$props.invalid,
            innerRef = _this$props.innerRef,
            toggle = _this$props.toggle,
            small = _this$props.small,
            _id = _this$props.id,
            attrs = _objectWithoutProperties(_this$props, ["className", "children", "inline", "valid", "invalid", "innerRef", "toggle", "small", "id"]);

        var labelClasses = classNames(className, "custom-control", !toggle ? "custom-checkbox" : "custom-toggle", toggle && small && "custom-toggle-sm", inline && "custom-control-inline", valid && "is-valid", invalid && "is-invalid");
        var inputClasses = classNames("custom-control-input", valid && "is-valid", invalid && "is-invalid");

        var id = _id || "dr-checkbox-".concat(shortid.generate());

        return React__default.createElement("label", {
          className: labelClasses
        }, React__default.createElement("input", _extends({}, attrs, {
          ref: innerRef,
          id: id,
          type: "checkbox",
          className: inputClasses
        })), React__default.createElement("label", {
          id: id,
          className: "custom-control-label",
          "aria-hidden": "true",
          onClick: this.props.onChange
        }), React__default.createElement("span", {
          className: "custom-control-description"
        }, children));
      }
    }]);

    return FormCheckbox;
  }(React__default.Component);

  FormCheckbox.defaultProps = {
    onChange: function onChange() {}
  };
  FormCheckbox.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The children nodes.
     */
    children: propTypes.node,

    /**
     * Whether it is inline, or not.
     */
    inline: propTypes.bool,

    /**
     * Whether it is valid, or not.
     */
    valid: propTypes.bool,

    /**
     * Whether it is invalid, or not.
     */
    invalid: propTypes.bool,

    /**
     * Whether it is a toggle button, or not.
     */
    toggle: propTypes.bool,

    /**
     * Whether it is small (toggle), or not.
     */
    small: propTypes.bool,

    /**
     * The onChange handler.
     */
    onChange: propTypes.func,

    /**
     * The inner ref.
     */
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string])
  };

  /**
   * Form groups allow you to easily add structure to your forms.
   */

  var FormGroup = function FormGroup(props) {
    var className = props.className,
        row = props.row,
        disabled = props.disabled,
        check = props.check,
        inline = props.inline,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "row", "disabled", "check", "inline", "tag"]);

    var classes = classNames(className, row && "row", check ? "form-check" : "form-group", check && inline && "form-check-inline", check && disabled && "disabled");
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  FormGroup.propTypes = {
    /**
     * The children nodes.
     */
    children: propTypes.node,

    /**
     * Whether it is a row, or not.
     */
    row: propTypes.bool,

    /**
     * Whether it is a form check, or not.
     */
    check: propTypes.bool,

    /**
     * Whether it is displayed inline (form check) or not.
     */
    inline: propTypes.bool,

    /**
     * Whether it is disabled, or not.
     */
    disabled: propTypes.bool,

    /**
     * The components' tag type.
     */
    tag: propTypes.string,

    /**
     * The class name.
     */
    className: propTypes.string
  };
  FormGroup.defaultProps = {
    tag: "div"
  };

  /**
   * The form input allows you to create various text style inputs such as `text`, `password`, `email`, `number`, `url`, `search` and more.
   */

  var FormInput =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(FormInput, _React$Component);

    function FormInput(props) {
      var _this;

      _classCallCheck(this, FormInput);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FormInput).call(this, props));
      _this.ref = null;
      _this.getRef = _this.getRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.focus = _this.focus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(FormInput, [{
      key: "getRef",
      value: function getRef(ref) {
        if (this.props.innerRef) {
          this.props.innerRef(ref);
        }

        this.ref = ref;
      }
    }, {
      key: "focus",
      value: function focus() {
        if (this.ref) {
          this.ref.focus();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            plaintext = _this$props.plaintext,
            size = _this$props.size,
            invalid = _this$props.invalid,
            valid = _this$props.valid,
            innerRef = _this$props.innerRef,
            attrs = _objectWithoutProperties(_this$props, ["className", "plaintext", "size", "invalid", "valid", "innerRef"]);

        var classes = classNames(className, plaintext ? "form-control-plaintext" : "form-control", plaintext && "w-100", size && "form-control-".concat(size), valid && "is-valid", invalid && "is-invalid");
        return React__default.createElement("input", _extends({}, attrs, {
          ref: innerRef,
          className: classes
        }));
      }
    }]);

    return FormInput;
  }(React__default.Component);

  FormInput.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The children nodes.
     */
    children: propTypes.node,

    /**
     * Whether it is inline, or not.
     */
    inline: propTypes.bool,

    /**
     * The input type.
     */
    type: propTypes.oneOf(INPUT_TYPES),

    /**
     * Whether it is plaintext, or not.
     */
    plaintext: propTypes.bool,

    /**
     * The input's size.
     */
    size: propTypes.string,

    /**
     * Whether it is valid, or not.
     */
    valid: propTypes.bool,

    /**
     * Whether it is invalid, or not.
     */
    invalid: propTypes.bool,

    /**
     * The inner ref.
     */
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string])
  };

  var FormRadio =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(FormRadio, _React$Component);

    function FormRadio(props) {
      var _this;

      _classCallCheck(this, FormRadio);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FormRadio).call(this, props));
      _this.getRef = _this.getRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(FormRadio, [{
      key: "getRef",
      value: function getRef(ref) {
        if (this.props.innerRef) {
          this.props.innerRef(ref);
        }

        this.ref = ref;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children,
            inline = _this$props.inline,
            valid = _this$props.valid,
            invalid = _this$props.invalid,
            innerRef = _this$props.innerRef,
            onChange = _this$props.onChange,
            _id = _this$props.id,
            attrs = _objectWithoutProperties(_this$props, ["className", "children", "inline", "valid", "invalid", "innerRef", "onChange", "id"]);

        var labelClasses = classNames("custom-control", "custom-radio", inline && "custom-control-inline", valid && "is-valid", invalid && "is-invalid");
        var inputClasses = classNames(className, "custom-control-input", valid && "is-valid", invalid && "is-invalid");

        var id = _id || "dr-radio-".concat(shortid.generate());

        return React__default.createElement("label", {
          className: labelClasses
        }, React__default.createElement("input", _extends({}, attrs, {
          ref: innerRef,
          id: id,
          type: "radio",
          className: inputClasses,
          onChange: onChange
        })), React__default.createElement("label", {
          id: id,
          className: "custom-control-label",
          "aria-hidden": "true",
          onClick: onChange
        }), React__default.createElement("span", {
          className: "custom-control-description"
        }, children));
      }
    }]);

    return FormRadio;
  }(React__default.Component);

  FormRadio.defaultProps = {
    onChange: function onChange() {}
  };
  FormRadio.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The children.
     */
    children: propTypes.node,

    /**
     * Whether it is inline, or not.
     */
    inline: propTypes.bool,

    /**
     * Whether it is valid, or not.
     */
    valid: propTypes.bool,

    /**
     * The function that should run on change.
     */
    onChange: propTypes.func,

    /**
     * Whether it is invalid, or not.
     */
    invalid: propTypes.bool,

    /**
     * The inner ref.
     */
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string])
  };

  /**
   * The `FormSelect` component is a wrapper over Bootstrap's [custom select component](https://getbootstrap.com/docs/4.1/components/forms/#select-menu).
   */

  var FormSelect =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(FormSelect, _React$Component);

    function FormSelect(props) {
      var _this;

      _classCallCheck(this, FormSelect);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FormSelect).call(this, props));
      _this.getRef = _this.getRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(FormSelect, [{
      key: "getRef",
      value: function getRef(ref) {
        if (this.props.innerRef) {
          this.props.innerRef(ref);
        }

        this.ref = ref;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children,
            size = _this$props.size,
            valid = _this$props.valid,
            invalid = _this$props.invalid,
            innerRef = _this$props.innerRef,
            attrs = _objectWithoutProperties(_this$props, ["className", "children", "size", "valid", "invalid", "innerRef"]);

        var classes = classNames(className, "form-control", "custom-select", valid && "is-valid", invalid && "is-invalid", size && "form-control-".concat(size), size && "custom-select-".concat(size));
        return React__default.createElement("select", _extends({}, attrs, {
          className: classes,
          ref: innerRef
        }), children);
      }
    }]);

    return FormSelect;
  }(React__default.Component);

  FormSelect.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The children nodes.
     */
    children: propTypes.node,

    /**
     * The size.
     */
    size: propTypes.string,

    /**
     * Whether it is valid, or not.
     */
    valid: propTypes.bool,

    /**
     * Whether it is invalid, or not.
     */
    invalid: propTypes.bool,

    /**
     * The inner ref.
     */
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string])
  };

  /**
   * The `FormTextarea` component allows you to easily create multi-line text inputs.
   */

  var FormTextarea =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(FormTextarea, _React$Component);

    function FormTextarea(props) {
      var _this;

      _classCallCheck(this, FormTextarea);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FormTextarea).call(this, props));
      _this.getRef = _this.getRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(FormTextarea, [{
      key: "getRef",
      value: function getRef(ref) {
        if (this.props.innerRef) {
          this.props.innerRef(ref);
        }

        this.ref = ref;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children,
            innerRef = _this$props.innerRef,
            plaintext = _this$props.plaintext,
            size = _this$props.size,
            valid = _this$props.valid,
            invalid = _this$props.invalid,
            attrs = _objectWithoutProperties(_this$props, ["className", "children", "innerRef", "plaintext", "size", "valid", "invalid"]);

        var classes = classNames(className, children, plaintext ? "form-control-plaintext" : "form-control", plaintext && "w-100", size && "form-control-".concat(size), valid && "is-valid", invalid && "is-invalid");
        return React__default.createElement("textarea", _extends({}, attrs, {
          className: classes,
          ref: innerRef
        }));
      }
    }]);

    return FormTextarea;
  }(React__default.Component);

  FormTextarea.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The children nodes.
     */
    children: propTypes.node,

    /**
     * The size.
     */
    size: propTypes.string,

    /**
     * Whether it should be displayed as plain text, or not.
     */
    plaintext: propTypes.bool,

    /**
     * Whether it is valid, or not.
     */
    valid: propTypes.bool,

    /**
     * Whether it is invalid, or not.
     */
    invalid: propTypes.bool,

    /**
     * The inner ref.
     */
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string])
  };

  /**
   * Using the `InputGroup` component you can easily extend form controls by adding various elements such as text, buttons and button groups.
   */

  var InputGroup = function InputGroup(props) {
    var className = props.className,
        Tag = props.tag,
        size = props.size,
        seamless = props.seamless,
        attrs = _objectWithoutProperties(props, ["className", "tag", "size", "seamless"]);

    var classes = classNames(className, "input-group", seamless && "input-group-seamless", size && "input-group-".concat(size));
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  InputGroup.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The children nodes.
     */
    children: propTypes.node,

    /**
     * The size.
     */
    size: propTypes.string,

    /**
     * Whether it is seamless, or not.
     */
    seamless: propTypes.bool,

    /**
     * The tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  InputGroup.defaultProps = {
    tag: "div"
  };

  var InputGroupText = function InputGroupText(props) {
    var className = props.className,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "tag"]);

    var classes = classNames(className, "input-group-text");
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  InputGroupText.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The component's tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  InputGroupText.defaultProps = {
    tag: "span"
  };

  var InputGroupAddon = function InputGroupAddon(props) {
    var className = props.className,
        children = props.children,
        Tag = props.tag,
        type = props.type,
        attrs = _objectWithoutProperties(props, ["className", "children", "tag", "type"]);

    var classes = classNames(className, "input-group-".concat(type));

    if (typeof children === "string") {
      return React__default.createElement(Tag, _extends({}, attrs, {
        className: classes
      }), React__default.createElement(InputGroupText, null, children));
    }

    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }), children);
  };

  InputGroupAddon.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The children nodes.
     */
    children: propTypes.node,

    /**
     * The addon type.
     */
    type: propTypes.oneOf(INPUT_GROUP_ADDON_TYPES).isRequired,

    /**
     * The component's tag type.
     */
    tag: propTypes.string
  };
  InputGroupAddon.defaultProps = {
    tag: "div"
  };

  /**
   * List groups allow you to display series of content.
   */

  var ListGroup = function ListGroup(props) {
    var className = props.className,
        Tag = props.tag,
        flush = props.flush,
        small = props.small,
        attrs = _objectWithoutProperties(props, ["className", "tag", "flush", "small"]);

    var classes = classNames(className, "list-group", small && "list-group-sm", flush && "list-group-flush");
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  ListGroup.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * Whether the list group should be flushed, or not.
     */
    flush: propTypes.bool,

    /**
     * Whether the list group is small, or not.
     */
    small: propTypes.bool,

    /**
     * The component's tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  ListGroup.defaultProps = {
    tag: "ul"
  };

  var ListGroupItem = function ListGroupItem(props) {
    var className = props.className,
        Tag = props.tag,
        active = props.active,
        action = props.action,
        disabled = props.disabled,
        theme = props.theme,
        attrs = _objectWithoutProperties(props, ["className", "tag", "active", "action", "disabled", "theme"]);

    var classes = classNames(className, active && "active", disabled && "disabled", action && "list-group-item-action", theme && "list-group-item-".concat(theme), "list-group-item");

    if (disabled) {
      attrs.onClick = function (e) {
        e.preventDefault();
      };
    }

    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  ListGroupItem.propTypes = {
    /**
     * Whether it is active, or not.
     */
    active: propTypes.bool,

    /**
     * Whether it is disabled, or not.
     */
    disabled: propTypes.bool,

    /**
     * The theme color.
     */
    theme: propTypes.string,

    /**
     * Whether it is an action item, or not.
     */
    action: propTypes.bool,

    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The component's tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  ListGroupItem.defaultProps = {
    tag: "li"
  };

  var ListGroupItemHeading = function ListGroupItemHeading(props) {
    var className = props.className,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "tag"]);

    var classes = classNames(className, "list-group-item-heading");
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  ListGroupItemHeading.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.any,

    /**
     * The component's tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  ListGroupItemHeading.defaultProps = {
    tag: "h5"
  };

  var ListGroupItemText = function ListGroupItemText(props) {
    var className = props.className,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "tag"]);

    var classes = classNames(className, "list-group-item-text");
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  ListGroupItemText.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The component's tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  ListGroupItemText.defaultProps = {
    tag: "p"
  };

  /**
   * Creating flexible modal dialogs can be achieved using the `Modal` component. They feature a series of helpful subcomponents, sizes and various other options that you can use to customize the display and behavior of your modals.
   */

  var Modal =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal(props) {
      var _this;

      _classCallCheck(this, Modal);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));
      _this.state = {
        open: _this.props.open || false
      };
      _this.handleOnEntered = _this.handleOnEntered.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.handleOnExit = _this.handleOnExit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.handleOnExited = _this.handleOnExited.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.handleBackdropClick = _this.handleBackdropClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.modalContent = null;
      return _this;
    }

    _createClass(Modal, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (prevState.open !== this.props.open) {
          this.setState({
            open: this.props.open
          });
        }
      }
    }, {
      key: "handleOnEntered",
      value: function handleOnEntered(type, node) {
        var _this$props = this.props,
            fade = _this$props.fade,
            showModal = _this$props.showModal;

        if (type === "backdrop" && fade === false) {
          return;
        }

        node.classList.add("show");

        if (type === "modal") {
          showModal && showModal();
        }
      }
    }, {
      key: "handleOnExit",
      value: function handleOnExit(type, node) {
        var _this$props2 = this.props,
            fade = _this$props2.fade,
            hideModal = _this$props2.hideModal;

        if (type === "backdrop" && fade === false) {
          return;
        }

        node.classList.remove("show");

        if (type === "modal") {
          hideModal && hideModal();
        }
      }
    }, {
      key: "handleOnExited",
      value: function handleOnExited() {
        this.props.hiddenModal && this.props.hiddenModal();
      }
    }, {
      key: "handleBackdropClick",
      value: function handleBackdropClick(e) {
        if (!this.modalContent.contains(e.target)) {
          this.props.toggle();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        if (!this.state.open) {
          return null;
        }

        var _this$props3 = this.props,
            id = _this$props3.id,
            backdrop = _this$props3.backdrop,
            fade = _this$props3.fade,
            tabIndex = _this$props3.tabIndex,
            backdropClassName = _this$props3.backdropClassName,
            modalClassName = _this$props3.modalClassName,
            animation = _this$props3.animation,
            modalContentClassName = _this$props3.modalContentClassName,
            position = _this$props3.position,
            role = _this$props3.role,
            size = _this$props3.size,
            children = _this$props3.children,
            centered = _this$props3.centered,
            className = _this$props3.className; // open, showModal, hideModal, hiddenModal, toggle

        var backdropClasses = classNames("modal-backdrop", fade ? "fade" : "show", backdropClassName);
        var modalClasses = classNames("modal", fade && "fade", modalClassName, fade && (animation || position && position.split("-").slice(-1)[0] || "top"));
        var modalAttrs = {
          "aria-hidden": true,
          id: id || undefined,
          tabIndex: tabIndex,
          role: role,
          style: {
            display: "block"
          }
        };
        var modalDialogClasses = classNames("modal-dialog", className, size && "modal-".concat(size), centered && "modal-dialog-centered", position && "modal-".concat(position));
        var contentClasses = classNames("modal-content", modalContentClassName);
        return React__default.createElement(React.Fragment, null, backdrop && React__default.createElement(reactTransitionGroup.Transition, {
          timeout: fade ? TIMEOUT.FADE : 0,
          in: this.state.open,
          appear: this.state.open,
          mountOnEnter: true,
          unmountOnExit: true,
          onEntered: function onEntered(node) {
            return _this2.handleOnEntered("backdrop", node);
          },
          onExit: function onExit(node) {
            return _this2.handleOnExit("backdrop", node);
          },
          onExited: this.handleOnExited
        }, React__default.createElement("div", {
          className: backdropClasses
        })), React__default.createElement(reactTransitionGroup.Transition, {
          timeout: fade ? TIMEOUT.FADE : 0,
          in: this.state.open,
          appear: this.state.open,
          mountOnEnter: true,
          unmountOnExit: true,
          onClick: this.handleBackdropClick,
          onEntered: function onEntered(node) {
            return _this2.handleOnEntered("modal", node);
          },
          onExit: function onExit(node) {
            return _this2.handleOnExit("modal", node);
          }
        }, React__default.createElement("div", _extends({
          className: modalClasses
        }, modalAttrs), React__default.createElement("div", {
          className: modalDialogClasses,
          role: "document"
        }, React__default.createElement("div", {
          ref: function ref(el) {
            return _this2.modalContent = el;
          },
          className: contentClasses
        }, children)))));
      }
    }]);

    return Modal;
  }(React__default.Component);

  Modal.propTypes = {
    /**
     * The id.
     */
    id: propTypes.string,

    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * Whether it is open, or not.
     */
    open: propTypes.bool,

    /**
     * Whether it should fade, or not.
     */
    fade: propTypes.bool,

    /**
     * Whether it should display a backdrop, or not.
     */
    backdrop: propTypes.bool,

    /**
     * The function that should be triggered when the modal is shown.
     */
    showModal: propTypes.func,

    /**
     * The function that should be triggered when the modal is set to hide.
     */
    hideModal: propTypes.func,

    /**
     * The function that should be triggered when the modal is finally hidden.
     */
    hiddenModal: propTypes.func,

    /**
     * Whether it should be centered, or not.
     */
    centered: propTypes.bool,

    /**
     * The class name for the backdrop element.
     */
    backdropClassName: propTypes.string,

    /**
     * The toggle function.
     */
    toggle: propTypes.func,

    /**
     * The class name for the modal.
     */
    modalClassName: propTypes.string,

    /**
     *
     */
    animation: propTypes.bool,

    /**
     * The position.
     */
    position: propTypes.string,

    /**
     * The size.
     */
    size: propTypes.string,

    /**
     * The tab index.
     */
    tabIndex: propTypes.string,

    /**
     * The class name for the modal content.
     */
    modalContentClassName: propTypes.string,

    /**
     * The role attribute for the modal.
     */
    role: propTypes.string,

    /**
     * The children nodes.
     */
    children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node])
  };
  Modal.defaultProps = {
    open: false,
    fade: true,
    backdrop: true,
    role: "dialog"
  };

  var ModalBody = function ModalBody(props) {
    var className = props.className,
        children = props.children,
        attrs = _objectWithoutProperties(props, ["className", "children"]);

    var classes = classNames("modal-body", className);
    return React__default.createElement("div", _extends({
      className: classes
    }, attrs), children);
  };

  ModalBody.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The children nodes.
     */
    children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node])
  };

  var ModalHeader = function ModalHeader(props) {
    var className = props.className,
        children = props.children,
        toggle = props.toggle,
        Tag = props.tag,
        closeAriaLabel = props.closeAriaLabel,
        titleClass = props.titleClass,
        attrs = _objectWithoutProperties(props, ["className", "children", "toggle", "tag", "closeAriaLabel", "titleClass"]);

    var classes = classNames("modal-header", className);
    var titleClasses = classNames("modal-title", titleClass);
    var closeButton = null;

    if (toggle) {
      closeButton = React__default.createElement("button", {
        type: "button",
        onClick: toggle,
        className: "close",
        "aria-label": closeAriaLabel
      }, React__default.createElement("span", {
        "aria-hidden": "true"
      }, String.fromCharCode(215)));
    }

    return React__default.createElement("div", _extends({
      className: classes
    }, attrs), React__default.createElement(Tag, {
      className: titleClasses
    }, children), closeButton);
  };

  ModalHeader.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The toggle function.
     */
    toggle: propTypes.func,

    /**
     * The component's tag type.
     */
    tag: propTypes.string,

    /**
     * The close button's aria label.
     */
    closeAriaLabel: propTypes.string,

    /**
     * The class for the modal title.
     */
    titleClass: propTypes.string,

    /**
     * The children nodes.
     */
    children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node])
  };
  ModalHeader.defaultProps = {
    tag: "h5",
    closeAriaLabel: "Close"
  };

  var ModalFooter = function ModalFooter(props) {
    var className = props.className,
        children = props.children,
        attrs = _objectWithoutProperties(props, ["className", "children"]);

    var classes = classNames("modal-footer", className);
    return React__default.createElement("div", _extends({
      className: classes
    }, attrs), children);
  };

  ModalFooter.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The children nodes.
     */
    children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node])
  };

  /**
   * The `Nav` component allows you to build all types of navigation components.
   */

  var Nav = function Nav(props) {
    var className = props.className,
        navbar = props.navbar,
        horizontal = props.horizontal,
        vertical = props.vertical,
        tabs = props.tabs,
        card = props.card,
        pills = props.pills,
        justified = props.justified,
        fill = props.fill,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "navbar", "horizontal", "vertical", "tabs", "card", "pills", "justified", "fill", "tag"]);

    var verticalClass;

    if (vertical === true || vertical === "xs") {
      verticalClass = "flex-column";
    } else if (vertical === false) {
      verticalClass = false;
    } else if (typeof vertical === "string") {
      verticalClass = "flex-".concat(vertical, "-column");
    }

    var classes = classNames(className, navbar ? "navbar-nav" : "nav", horizontal && "justify-content-".concat(horizontal), verticalClass, tabs && "nav-tabs", card && tabs && "card-header-tabs", pills && "nav-pills", card && pills && "card-header-pills", justified && "nav-justified", fill && "nav-fill");
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  Nav.defaultProps = {
    tag: "ul",
    vertical: false
  };
  Nav.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * Whether it is located inside a Navbar, or not.
     */
    navbar: propTypes.bool,

    /**
     * Justify content horizontally.
     */
    horizontal: propTypes.string,

    /**
     * Whether it should be displayed as tabs, or not.
     */
    tabs: propTypes.bool,

    /**
     * Whether it is located inside a card, or not.
     */
    card: propTypes.bool,

    /**
     * Whether it should be displayed as pills, or not.
     */
    pills: propTypes.bool,

    /**
     * Whether it is justified, or not.
     */
    justified: propTypes.bool,

    /**
     * Whether it should fill the entire space, or not.
     */
    fill: propTypes.bool,

    /**
     * Whether it is vertical, or not.
     */
    vertical: propTypes.oneOfType([propTypes.bool, propTypes.string]),

    /**
     * The component's tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };

  var NavItem = function NavItem(props) {
    var className = props.className,
        active = props.active,
        disabled = props.disabled,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "active", "disabled", "tag"]);

    var classes = classNames(className, "nav-item", active && "active", disabled && "disabled");
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  NavItem.propTypes = {
    /**
     * Whether it is active, or not.
     */
    active: propTypes.bool,

    /**
     * Whether it is disabled, or not.
     */
    disabled: propTypes.bool,

    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The component's tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  NavItem.defaultProps = {
    tag: "li"
  };

  var NavLink =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(NavLink, _React$Component);

    function NavLink(props) {
      var _this;

      _classCallCheck(this, NavLink);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(NavLink).call(this, props));
      _this.handleOnClick = _this.handleOnClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(NavLink, [{
      key: "handleOnClick",
      value: function handleOnClick(e) {
        if (this.props.disabled) {
          e.preventDefault();
          return;
        }

        if (this.props.href === "#") {
          e.preventDefault();
        }

        if (this.props.onClick) {
          this.props.onClick(e);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            active = _this$props.active,
            disabled = _this$props.disabled,
            Tag = _this$props.tag,
            innerRef = _this$props.innerRef,
            attrs = _objectWithoutProperties(_this$props, ["className", "active", "disabled", "tag", "innerRef"]);

        var classes = classNames(className, "nav-link", disabled && "disabled", active && "active");
        return React__default.createElement(Tag, _extends({}, attrs, {
          ref: innerRef,
          onClick: this.handleOnClick,
          className: classes
        }));
      }
    }]);

    return NavLink;
  }(React__default.Component);

  NavLink.propTypes = {
    /**
     * Whether it is disabled, or not.
     */
    disabled: propTypes.bool,

    /**
     * Whether it is active, or not.
     */
    active: propTypes.bool,

    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The function that should be triggered on click.
     */
    onClick: propTypes.func,

    /**
     * The href attribute value.
     */
    href: propTypes.any,

    /**
     * The component's tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),

    /**
     * The inner ref.
     */
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string])
  };
  NavLink.defaultProps = {
    tag: "a"
  };

  /**
   * Using the `Navbar` component you can create powerful and responsive navigation headers.
   */

  var Navbar = function Navbar(props) {
    var className = props.className,
        expand = props.expand,
        fixed = props.fixed,
        sticky = props.sticky,
        theme = props.theme,
        type = props.type,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "expand", "fixed", "sticky", "theme", "type", "tag"]);

    var expandClass;

    if (expand === false) {
      expandClass = false;
    } else if (expand === true || expand === "xs") {
      expandClass = "navbar-expand";
    } else if (typeof expand === "string") {
      expandClass = "navbar-expand-".concat(expand);
    }

    var classes = classNames(className, "navbar", expandClass, type === "light" && "navbar-light", type === "dark" && "navbar-dark", theme && "bg-".concat(theme), fixed && "fixed-".concat(fixed), sticky && "sticky-".concat(sticky));
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  Navbar.propTypes = {
    /**
     * Whether it is full, or not.
     */
    full: propTypes.bool,

    /**
     * Whether it is fixed, or not.
     */
    fixed: propTypes.string,

    /**
     * Whether it is sticky, or not.
     */
    sticky: propTypes.string,

    /**
     * The theme color.
     */
    theme: propTypes.string,

    /**
     * The role attribute.
     */
    role: propTypes.string,

    /**
     * The class name attribute.
     */
    className: propTypes.string,

    /**
     * The navbar type.
     */
    type: propTypes.oneOf(["dark", "light"]),

    /**
     * The component's tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),

    /**
     * Whether it should expand, or not.
     */
    expand: propTypes.oneOfType([propTypes.bool, propTypes.string])
  };
  Navbar.defaultProps = {
    tag: "nav",
    expand: false
  };

  var NavbarBrand = function NavbarBrand(props) {
    var className = props.className,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "tag"]);

    var classes = classNames(className, "navbar-brand");
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  NavbarBrand.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The component's tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  NavbarBrand.defaultProps = {
    tag: "a"
  };

  var NavbarToggler = function NavbarToggler(props) {
    var className = props.className,
        children = props.children,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "children", "tag"]);

    var classes = classNames(className, "navbar-toggler");
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }), children || React__default.createElement("span", {
      className: "navbar-toggler-icon"
    }));
  };

  NavbarToggler.propTypes = {
    /**
     * The component's tag type.
     */
    type: propTypes.string,

    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The children nodes.
     */
    children: propTypes.node,

    /**
     * The tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  NavbarToggler.defaultProps = {
    tag: "button",
    type: "button"
  };

  var PopperManager =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(PopperManager, _React$Component);

    function PopperManager(props) {
      var _this;

      _classCallCheck(this, PopperManager);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(PopperManager).call(this, props));
      _this.handlePlacementChange = _this.handlePlacementChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.setTargetNode = _this.setTargetNode.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.getReferenceElement = _this.getReferenceElement.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this._element = null;
      _this.state = {
        placement: null
      };
      return _this;
    }

    _createClass(PopperManager, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (this._element && this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
          this._element.childNodes[0].focus();
        }
      }
    }, {
      key: "setTargetNode",
      value: function setTargetNode(node) {
        this.targetNode = node;
      }
    }, {
      key: "getReferenceElement",
      value: function getReferenceElement() {
        return this.targetNode;
      }
    }, {
      key: "getContainerNode",
      value: function getContainerNode() {
        return getTarget(this.props.container);
      }
    }, {
      key: "handlePlacementChange",
      value: function handlePlacementChange(data) {
        if (this.state.placement !== data.placement) {
          this.setState({
            placement: data.placement
          });
        }

        return data;
      }
    }, {
      key: "renderChildren",
      value: function renderChildren() {
        var _this$props = this.props,
            children = _this$props.children,
            open = _this$props.open,
            target = _this$props.target,
            offset = _this$props.offset,
            placementPrefix = _this$props.placementPrefix,
            noArrow = _this$props.noArrow,
            arrowClassName = _this$props.arrowClassName,
            className = _this$props.className,
            container = _this$props.container,
            modifiers = _this$props.modifiers,
            boundariesElement = _this$props.boundariesElement,
            flip = _this$props.flip,
            fallbackPlacement = _this$props.fallbackPlacement,
            tag = _this$props.tag,
            attrs = _objectWithoutProperties(_this$props, ["children", "open", "target", "offset", "placementPrefix", "noArrow", "arrowClassName", "className", "container", "modifiers", "boundariesElement", "flip", "fallbackPlacement", "tag"]);

        var _placement = this.state.placement || attrs.placement;

        var _className = classNames(className, placementPrefix ? "".concat(placementPrefix, "-").concat(_placement) : _placement);

        var _arrowClassName = classNames('arrow', arrowClassName);

        var _modifiers = _objectSpread({
          offset: {
            offset: offset
          },
          flip: {
            enabled: flip,
            behavior: fallbackPlacement
          },
          preventOverflow: {
            boundariesElement: boundariesElement
          },
          update: {
            enabled: true,
            order: 950,
            fn: this.handlePlacementChange
          }
        }, modifiers);

        return React__default.createElement(reactPopper.Popper, _extends({
          referenceElement: this.getReferenceElement(),
          modifiers: _modifiers,
          placement: _placement
        }, attrs), function (_ref) {
          var ref = _ref.ref,
              style = _ref.style,
              placement = _ref.placement,
              arrowProps = _ref.arrowProps;
          return React__default.createElement("div", {
            ref: ref,
            className: _className,
            style: style,
            "data-placement": placement
          }, children, !noArrow && React__default.createElement("div", {
            ref: arrowProps.ref,
            style: arrowProps.style,
            className: _arrowClassName
          }));
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            target = _this$props2.target,
            open = _this$props2.open,
            container = _this$props2.container;
        this.setTargetNode(getTarget(target));

        if (!open) {
          return null;
        }

        if (container === 'inline') {
          return this.renderChildren();
        }

        var containerNode = this.getContainerNode();
        return ReactDOM.createPortal(React__default.createElement("div", null, this.renderChildren()), containerNode);
      }
    }]);

    return PopperManager;
  }(React__default.Component);

  PopperManager.propTypes = {
    /**
     * The target.
     */
    target: CustomPropTypes.target.isRequired,

    /**
     * The container.
     */
    container: CustomPropTypes.target,

    /**
     * The children.
     */
    children: propTypes.node.isRequired,

    /**
     * Whether the Popper is open, or not.
     */
    open: propTypes.bool,

    /**
     * Whether the Popper should flip, or not.
     */
    flip: propTypes.bool,

    /**
     * The Popper offset.
     */
    offset: propTypes.oneOfType([propTypes.string, propTypes.number]),

    /**
     * The Popper fallback placement.
     */
    fallbackPlacement: propTypes.oneOfType([propTypes.string, propTypes.array]),

    /**
     * The Popper placement prefix.
     */
    placementPrefix: propTypes.string,

    /**
     * The Popper's arrow className.
     */
    arrowClassName: propTypes.string,

    /**
     * Whether to hide the arrow, or not.
     */
    noArrow: propTypes.bool,

    /**
     * The Popper class name.
     */
    className: propTypes.string,

    /**
     * The component tag.
     */
    tag: propTypes.string,

    /**
     * The modifiers object.
     */
    modifiers: propTypes.object,

    /**
     * The boundaries element for the Popper instance.
     */
    boundariesElement: propTypes.oneOfType([propTypes.string, propTypes.element])
  };
  PopperManager.defaultProps = {
    boundariesElement: 'scrollParent',
    placement: 'auto',
    arrow: true,
    open: false,
    offset: 0,
    fallbackPlacement: 'flip',
    flip: true,
    container: 'body',
    modifiers: Object.create(null)
  };

  /**
   * Popovers are powerful elements similar to tooltips and powered by Popper.js that can be applies to any interactive element.
   */

  var Popover =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Popover, _React$Component);

    function Popover(props) {
      var _this;

      _classCallCheck(this, Popover);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Popover).call(this, props));
      _this.show = _this.show.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.hide = _this.hide.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.maybeShow = _this.maybeShow.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.addListeners = _this.addListeners.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.removeListeners = _this.removeListeners.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.getDelay = _this.getDelay.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this._target = null;
      _this._hideTimeout = null;
      _this._showTimeout = null;
      return _this;
    }

    _createClass(Popover, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._target = getTarget(this.props.target);
        this.maybeShow();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.maybeShow();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearTimeout(this._showTimeout);
        clearTimeout(this._hideTimeout);
        this.removeListeners();
      }
    }, {
      key: "show",
      value: function show() {
        clearTimeout(this._hideTimeout);
        this.addListeners();

        if (!this.props.open) {
          clearTimeout(this._showTimeout);
          this._showTimeout = setTimeout(this.toggle, this.getDelay("show"));
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        clearTimeout(this._showTimeout);
        this.removeListeners();

        if (this.props.open) {
          clearTimeout(this._hideTimeout);
          this._hideTimeout = setTimeout(this.toggle, this.getDelay("hide"));
        }
      }
    }, {
      key: "maybeShow",
      value: function maybeShow() {
        if (this.props.open) {
          this.show();
          return;
        }

        this.hide();
      }
    }, {
      key: "toggle",
      value: function toggle(event) {
        if (this.props.disabled) {
          event.preventDefault();
          return;
        }

        return this.props.toggle(event);
      }
    }, {
      key: "addListeners",
      value: function addListeners() {
        var _this2 = this;

        EVENTS.CLICK.forEach(function (event) {
          return document.addEventListener(event, _this2.handleClick, true);
        });
      }
    }, {
      key: "removeListeners",
      value: function removeListeners() {
        var _this3 = this;

        EVENTS.CLICK.forEach(function (event) {
          document.removeEventListener(event, _this3.handleClick, true);
        });
      }
    }, {
      key: "handleClick",
      value: function handleClick(event) {
        if (!this._target) {
          return;
        }

        if (event.target !== this._target && !this._target.contains(event.target) && event.target !== this._popover && !(this._popover && this._popover.contains(event.target))) {
          if (this._hideTimeout) {
            clearTimeout(this._hideTimeout);
          }

          if (this.props.open) {
            this.toggle(event);
          }
        }
      }
    }, {
      key: "getDelay",
      value: function getDelay(key) {
        key = key.toUpperCase();

        if (_typeof(this.props.delay) === "object") {
          return isNaN(this.props.delay[key]) ? TIMEOUT[key] : this.props.delay[key];
        }

        return this.props.delay;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            target = _this$props.target,
            container = _this$props.container,
            modifiers = _this$props.modifiers,
            open = _this$props.open,
            innerClassName = _this$props.innerClassName,
            noArrow = _this$props.noArrow,
            arrowClassName = _this$props.arrowClassName,
            placement = _this$props.placement,
            placementPrefix = _this$props.placementPrefix,
            boundariesElement = _this$props.boundariesElement,
            offset = _this$props.offset,
            attrs = _objectWithoutProperties(_this$props, ["className", "target", "container", "modifiers", "open", "innerClassName", "noArrow", "arrowClassName", "placement", "placementPrefix", "boundariesElement", "offset"]); // disabled, toggle, delay


        if (!open) {
          return null;
        }

        var classes = classNames("popover-inner", innerClassName);
        var popperClasses = classNames("popover", "show", className);
        return React__default.createElement(PopperManager, {
          className: popperClasses,
          target: target,
          container: container,
          modifiers: modifiers,
          offset: offset,
          open: open,
          noArrow: noArrow,
          arrowClassName: arrowClassName,
          placement: placement,
          placementPrefix: placementPrefix,
          boundariesElement: boundariesElement
        }, React__default.createElement("div", _extends({}, attrs, {
          className: classes
        })));
      }
    }]);

    return Popover;
  }(React__default.Component);

  Popover.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The target element.
     */
    target: CustomPropTypes.target.isRequired,

    /**
     * The popover container.
     */
    container: CustomPropTypes.target,

    /**
     * Popper modifiers object.
     */
    modifiers: propTypes.object,

    /**
     * Whether the popover is open, or not.
     */
    open: propTypes.bool,

    /**
     * The inner class name.
     */
    innerClassName: propTypes.string,

    /**
     * Whether the popover is disabled, or not.
     */
    disabled: propTypes.bool,

    /**
     * Whether to hide the arrow, or not.
     */
    noArrow: propTypes.bool,

    /**
     * The arrow class name.
     */
    arrowClassName: propTypes.string,

    /**
     * The boundaries element for the Popover instance.
     */
    boundariesElement: propTypes.oneOfType([propTypes.string, propTypes.element]),

    /**
     * The popover placement.
     */
    placement: propTypes.string,

    /**
     * The placement prefix.
     */
    placementPrefix: propTypes.string,

    /**
     * The popover offset.
     */
    offset: propTypes.oneOfType([propTypes.string, propTypes.number]),

    /**
     * The toggle function.
     */
    toggle: propTypes.func.isRequired,

    /**
     * The show/hide delay in ms.
     */
    delay: propTypes.oneOfType([propTypes.number, propTypes.shape({
      show: propTypes.number,
      hide: propTypes.number
    })])
  };
  Popover.defaultProps = {
    open: false,
    noArrow: false,
    placement: "top",
    placementPrefix: "bs-popover",
    delay: {
      show: 0,
      hide: 0
    },
    toggle: function toggle() {}
  };

  var PopoverBody = function PopoverBody(props) {
    var className = props.className,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "tag"]);

    var classes = classNames(className, "popover-body");
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  PopoverBody.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The component's tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  PopoverBody.defaultProps = {
    tag: "div"
  };

  var PopoverHeader = function PopoverHeader(props) {
    var className = props.className,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["className", "tag"]);

    var classes = classNames(className, "popover-header");
    return React__default.createElement(Tag, _extends({}, attrs, {
      className: classes
    }));
  };

  PopoverHeader.propTypes = {
    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The tag type.
     */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  PopoverHeader.defaultProps = {
    tag: "h3"
  };

  /**
   * You can use the `Progress` component to display simple or complex progress bars.
   */

  var Progress = function Progress(props) {
    var children = props.children,
        className = props.className,
        barClassName = props.barClassName,
        value = props.value,
        max = props.max,
        animated = props.animated,
        striped = props.striped,
        theme = props.theme,
        bar = props.bar,
        multi = props.multi,
        Tag = props.tag,
        attrs = _objectWithoutProperties(props, ["children", "className", "barClassName", "value", "max", "animated", "striped", "theme", "bar", "multi", "tag"]);

    var percent = toNumber(value) / toNumber(max) * 100;
    var progressClasses = classNames(className, "progress");
    var progressBarClasses = classNames("progress-bar", bar ? className || barClassName : barClassName, animated && "progress-bar-animated", theme && "bg-".concat(theme), (striped || animated) && "progress-bar-striped");
    var ProgressBar = multi ? children : React__default.createElement("div", {
      className: progressBarClasses,
      style: {
        width: "".concat(percent, "%")
      },
      role: "progressbar",
      "aria-valuenow": value,
      "aria-valuemin": "0",
      "aria-valuemax": max
    }, children);

    if (bar) {
      return ProgressBar;
    }

    return React__default.createElement(Tag, _extends({}, attrs, {
      className: progressClasses
    }), ProgressBar);
  };

  Progress.propTypes = {
    /**
     * The children nodes.
     */
    children: propTypes.node,

    /**
     * Whether it is a bar, or not.
     */
    bar: propTypes.bool,

    /**
     * Whether there are multiple progress bars nested, or not.
     */
    multi: propTypes.bool,

    /**
     * The component's tag type.
     */
    tag: propTypes.string,

    /**
     * Whether it is animated, or not.
     */
    animated: propTypes.bool,

    /**
     * Whether it is striped, or not.
     */
    striped: propTypes.bool,

    /**
     * The theme color.
     */
    theme: propTypes.string,

    /**
     * The class name.
     */
    className: propTypes.string,

    /**
     * The class name for the bar element.
     */
    barClassName: propTypes.string,

    /**
     * The value.
     */
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),

    /**
     * The max value.
     */
    max: propTypes.oneOfType([propTypes.string, propTypes.number])
  };
  Progress.defaultProps = {
    tag: "div",
    value: 0,
    max: 100,
    theme: "primary"
  };

  /**
   * The slider component is powered behind the scenes by the [NoUiSlider](https://refreshless.com/nouislider/) library.
   */

  var Slider =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Slider, _React$Component);

    function Slider() {
      _classCallCheck(this, Slider);

      return _possibleConstructorReturn(this, _getPrototypeOf(Slider).apply(this, arguments));
    }

    _createClass(Slider, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.disabled) {
          this.sliderContainer.setAttribute("disabled", true);
        } else {
          this.sliderContainer.removeAttribute("disabled");
        }

        this.createSlider();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (this.props.disabled) {
          this.sliderContainer.setAttribute("disabled", true);
        } else {
          this.sliderContainer.removeAttribute("disabled");
        }

        this.slider.destroy();
        this.createSlider();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.slider.destroy();
      }
    }, {
      key: "createSlider",
      value: function createSlider() {
        var slider = this.slider = nouislider.create(this.sliderContainer, _objectSpread({}, this.props));

        if (this.props.onUpdate) {
          slider.on("update", this.props.onUpdate);
        }

        if (this.props.onChange) {
          slider.on("change", this.props.onChange);
        }

        if (this.props.onSlide) {
          slider.on("slide", this.props.onSlide);
        }

        if (this.props.onStart) {
          slider.on("start", this.props.onStart);
        }

        if (this.props.onEnd) {
          slider.on("end", this.props.onEnd);
        }

        if (this.props.onSet) {
          slider.on("set", this.props.onSet);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this = this;

        var _this$props = this.props,
            className = _this$props.className,
            theme = _this$props.theme;
        var classes = classNames(className, theme && "slider-".concat(theme));
        return React__default.createElement("div", {
          className: classes,
          ref: function ref(slider) {
            _this.sliderContainer = slider;
          }
        });
      }
    }]);

    return Slider;
  }(React__default.Component);

  Slider.propTypes = {
    className: propTypes.string,
    theme: propTypes.string,
    animate: propTypes.bool,
    behaviour: propTypes.string,
    cssPrefix: propTypes.string,
    disabled: propTypes.bool,
    limit: propTypes.number,
    margin: propTypes.number,
    onChange: propTypes.func,
    onEnd: propTypes.func,
    onSet: propTypes.func,
    onSlide: propTypes.func,
    onStart: propTypes.func,
    onUpdate: propTypes.func,
    pips: propTypes.object,
    range: propTypes.object.isRequired,
    start: propTypes.arrayOf(propTypes.number).isRequired,
    step: propTypes.number,
    direction: propTypes.oneOf(["ltr", "rtl"]),
    orientation: propTypes.oneOf(["horizontal", "vertical"]),
    connect: propTypes.oneOfType([propTypes.arrayOf(propTypes.bool), propTypes.bool]),
    tooltips: propTypes.oneOfType([propTypes.bool, propTypes.arrayOf(propTypes.shape({
      to: propTypes.func
    }))])
  };

  /**
   * Tooltips are powerful components powered behind the scenes by Popper.js that can be attached to any element.
   */

  var Tooltip =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Tooltip, _React$Component);

    function Tooltip(props) {
      var _this;

      _classCallCheck(this, Tooltip);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).call(this, props));
      _this.addListeners = _this.addListeners.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.removeListeners = _this.removeListeners.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.handleMouseEnter = _this.handleMouseEnter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.handleMouseLeave = _this.handleMouseLeave.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.handleMouseOverContent = _this.handleMouseOverContent.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.handleMouseLeaveContent = _this.handleMouseLeaveContent.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.show = _this.show.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.hide = _this.hide.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this._target = null;
      _this._hideTimeout = null;
      _this._showTimeout = null;
      return _this;
    }

    _createClass(Tooltip, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._target = getTarget(this.props.target);
        this.addListeners();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearTimeout(this._hideTimeout);
        clearTimeout(this._showTimeout);
        this.removeListeners();
      }
    }, {
      key: "addListeners",
      value: function addListeners() {
        var _this2 = this;

        var triggers = this.props.trigger.trim().split(/\s+/);
        triggers.forEach(function (trigger) {
          switch (trigger) {
            case "click":
              EVENTS.CLICK.forEach(function (e) {
                return document.addEventListener(e, _this2);
              });
              break;

            case "hover":
              EVENTS.MOUSE.forEach(function (e) {
                return _this2._target.addEventListener(e, _this2);
              });
              break;

            case "focus":
              EVENTS.FOCUS.forEach(function (e) {
                return _this2._target.addEventListener(e, _this2);
              });
              break;

            default:
              break;
          }
        }, this);
      }
    }, {
      key: "removeListeners",
      value: function removeListeners() {
        var _this3 = this;

        EVENTS.CLICK.forEach(function (e) {
          return document.removeEventListener(e, _this3);
        }, this);
        EVENTS.MOUSE.concat(EVENTS.FOCUS).forEach(function (e) {
          return _this3._target.removeEventListener(e, _this3);
        }, this);
      }
    }, {
      key: "handleEvent",
      value: function handleEvent(e) {
        if (this.props.disabled || this._target === null) {
          return;
        }

        switch (e.type) {
          case "click":
          case "touchstart":
            this.handleClick(e);
            break;

          case "mouseenter":
            this.handleMouseEnter(e);
            break;

          case "mouseleave":
            this.handleMouseLeave(e);
            break;

          case "focusin":
            this.show(e);
            break;

          case "focusout":
            this.hide(e);
            break;

          default:
            break;
        }
      }
    }, {
      key: "handleClick",
      value: function handleClick(e) {
        if (this._target !== null && (e.target === this._target || this._target.contains(e.target))) {
          if (this._hideTimeout) {
            clearTimeout(this._hideTimeout);
          }

          if (!this.props.open) {
            this.toggle(e);
          }

          return;
        }

        if (this.props.open && e.target.getAttribute("role") !== "tooltip") {
          if (this._showTimeout) {
            clearTimeout(this._showTimeout);
          }

          this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay("hide"));
        }
      }
    }, {
      key: "handleMouseEnter",
      value: function handleMouseEnter(e) {
        if (this._hideTimeout) {
          clearTimeout(this._hideTimeout);
        }

        this._showTimeout = setTimeout(this.show.bind(this, e), this.getDelay("show"));
      }
    }, {
      key: "handleMouseLeave",
      value: function handleMouseLeave(e) {
        if (this._showTimeout) {
          clearTimeout(this._showTimeout);
        }

        this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay("hide"));
      }
    }, {
      key: "handleMouseOverContent",
      value: function handleMouseOverContent() {
        if (this.props.autohide) {
          return;
        }

        if (this._hideTimeout) {
          clearTimeout(this._hideTimeout);
        }
      }
    }, {
      key: "handleMouseLeaveContent",
      value: function handleMouseLeaveContent(e) {
        if (this.props.autohide) {
          return;
        }

        if (this._showTimeout) {
          clearTimeout(this._showTimeout);
        }

        e.persist();
        this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay("hide"));
      }
    }, {
      key: "getDelay",
      value: function getDelay(key) {
        key = key.toUpperCase();

        if (_typeof(this.props.delay) === "object") {
          return isNaN(this.props.delay[key]) ? TIMEOUT[key] : this.props.delay[key];
        }

        return this.props.delay;
      }
    }, {
      key: "show",
      value: function show(e) {
        if (!this.props.open) {
          clearTimeout(this._showTimeout);
          this.toggle(e);
        }
      }
    }, {
      key: "hide",
      value: function hide(e) {
        if (this.props.open) {
          clearTimeout(this._hideTimeout);
          this.toggle(e);
        }
      }
    }, {
      key: "toggle",
      value: function toggle(e) {
        if (this.props.disabled) {
          return e && e.preventDefault();
        }

        return this.props.toggle(e);
      }
    }, {
      key: "render",
      value: function render() {
        var _props = omit(this.props, ["trigger", "disabled", "delay", "toggle", "autohide"]);

        var target = _props.target,
            container = _props.container,
            open = _props.open,
            className = _props.className,
            arrowClassName = _props.arrowClassName,
            innerClassName = _props.innerClassName,
            boundariesElement = _props.boundariesElement,
            placement = _props.placement,
            placementPrefix = _props.placementPrefix,
            modifiers = _props.modifiers,
            offset = _props.offset,
            noArrow = _props.noArrow,
            attrs = _objectWithoutProperties(_props, ["target", "container", "open", "className", "arrowClassName", "innerClassName", "boundariesElement", "placement", "placementPrefix", "modifiers", "offset", "noArrow"]);

        if (!open) {
          return null;
        }

        var classes = classNames("tooltip-inner", innerClassName);
        var popperClasses = classNames("tooltip", "show", className);
        return React__default.createElement(PopperManager, {
          container: container,
          className: popperClasses,
          arrowClassName: arrowClassName,
          target: target,
          open: open,
          noArrow: noArrow,
          boundariesElement: boundariesElement,
          placement: placement,
          placementPrefix: placementPrefix,
          modifiers: modifiers,
          offset: offset
        }, React__default.createElement("div", _extends({}, attrs, {
          className: classes,
          role: "tooltip",
          "aria-hidden": open,
          onMouseOver: this.handleMouseOverContent,
          onMouseLeave: this.handleMouseLeaveContent
        })));
      }
    }]);

    return Tooltip;
  }(React__default.Component);

  Tooltip.propTypes = {
    /**
     * The target element.
     */
    target: CustomPropTypes.target.isRequired,

    /**
     * The tooltip container.
     */
    container: CustomPropTypes.target,

    /**
     * The trigger(s) (click, hover, focus).
     */
    trigger: propTypes.string,

    /**
     * Whether the tooltip is open, or not.
     */
    open: propTypes.bool,

    /**
     * Whether the tooltip is disabled, or not.
     */
    disabled: propTypes.bool,

    /**
     * The tooltip class name.
     */
    className: propTypes.string,

    /**
     * The arrow class name.
     */
    arrowClassName: propTypes.string,

    /**
     * The tooltip inner class name.
     */
    innerClassName: propTypes.string,

    /**
     * The tooltip offset.
     */
    offset: propTypes.oneOfType([propTypes.string, propTypes.number]),

    /**
     * The show/hide delay in ms.
     */
    delay: propTypes.oneOfType([propTypes.number, propTypes.shape({
      show: propTypes.number,
      hide: propTypes.number
    })]),

    /**
     * The boundaries element for the tooltip instance.
     */
    boundariesElement: propTypes.oneOfType([propTypes.string, propTypes.element]),

    /**
     * The tooltip placement.
     */
    placement: propTypes.oneOf(POPPER_PLACEMENTS),

    /**
     * The placement prefix.
     */
    placementPrefix: propTypes.string,

    /**
     * Whether to hide the arrow, or not.
     */
    noArrow: propTypes.bool,

    /**
     * The toggle function.
     */
    toggle: propTypes.func.isRequired,

    /**
     * Popper modifiers object.
     */
    modifiers: propTypes.object,

    /**
     * Whether the tooltip should auto-hide, or not.
     */
    autohide: propTypes.bool
  };
  Tooltip.defaultProps = {
    trigger: "hover",
    open: false,
    disabled: false,
    noArrow: false,
    placement: "top",
    placementPrefix: "bs-tooltip",
    autohide: true,
    delay: {
      show: 0,
      hide: 0
    },
    toggle: function toggle() {}
  };

  exports.Alert = Alert;
  exports.Badge = Badge;
  exports.Breadcrumb = Breadcrumb;
  exports.BreadcrumbItem = BreadcrumbItem;
  exports.Button = Button;
  exports.ButtonGroup = ButtonGroup;
  exports.ButtonToolbar = ButtonToolbar;
  exports.Card = Card;
  exports.CardBody = CardBody;
  exports.CardColumns = CardColumns;
  exports.CardFooter = CardFooter;
  exports.CardGroup = CardGroup;
  exports.CardHeader = CardHeader;
  exports.CardImg = CardImg;
  exports.CardImgOverlay = CardImgOverlay;
  exports.CardLink = CardLink;
  exports.CardSubtitle = CardSubtitle;
  exports.CardText = CardText;
  exports.CardDeck = CardDeck;
  exports.CardTitle = CardTitle;
  exports.Collapse = Collapse;
  exports.Container = Container;
  exports.Row = Row;
  exports.Col = Col;
  exports.DatePicker = DatePicker;
  exports.Dropdown = Dropdown;
  exports.DropdownToggle = DropdownToggle;
  exports.DropdownMenu = DropdownMenu;
  exports.DropdownItem = DropdownItem;
  exports.Fade = Fade;
  exports.Form = Form;
  exports.FormFeedback = FormFeedback;
  exports.FormCheckbox = FormCheckbox;
  exports.FormGroup = FormGroup;
  exports.FormInput = FormInput;
  exports.FormRadio = FormRadio;
  exports.FormSelect = FormSelect;
  exports.FormTextarea = FormTextarea;
  exports.InputGroup = InputGroup;
  exports.InputGroupAddon = InputGroupAddon;
  exports.InputGroupText = InputGroupText;
  exports.ListGroup = ListGroup;
  exports.ListGroupItem = ListGroupItem;
  exports.ListGroupItemHeading = ListGroupItemHeading;
  exports.ListGroupItemText = ListGroupItemText;
  exports.Modal = Modal;
  exports.ModalBody = ModalBody;
  exports.ModalHeader = ModalHeader;
  exports.ModalFooter = ModalFooter;
  exports.Nav = Nav;
  exports.NavItem = NavItem;
  exports.NavLink = NavLink;
  exports.Navbar = Navbar;
  exports.NavbarBrand = NavbarBrand;
  exports.NavbarToggler = NavbarToggler;
  exports.Popover = Popover;
  exports.PopoverBody = PopoverBody;
  exports.PopoverHeader = PopoverHeader;
  exports.Progress = Progress;
  exports.Slider = Slider;
  exports.Tooltip = Tooltip;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=shards-react.umd.js.map
