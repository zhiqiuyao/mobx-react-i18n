(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('mobx-react'), require('mobx')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'mobx-react', 'mobx'], factory) :
    (global = global || self, factory(global['mobx-react-i18n'] = {}, global.react, global.mobxReact, global.mobx));
}(this, (function (exports, react, mobxReact, mobx) { 'use strict';

    react = react && Object.prototype.hasOwnProperty.call(react, 'default') ? react['default'] : react;

    /**
     * @file 国际化组件
     */

    var Language = function Language(_ref) {
      var language = _ref.language,
          resource = _ref.resource;
      return resource.indexOf('.') !== -1 ? language.resource[resource.split('.')[0]][resource.split('.')[1]] : language.resource[resource];
    };

    var Language$1 = mobxReact.inject('language')(mobxReact.observer(Language));

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

    function _initializerDefineProperty(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object.keys(descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;

      if ('value' in desc || desc.initializer) {
        desc.writable = true;
      }

      desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
      }, desc);

      if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
      }

      if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
      }

      return desc;
    }

    var _class, _descriptor, _descriptor2, _temp;
    var LanguageModel = (_class = (_temp = /*#__PURE__*/function () {
      function LanguageModel() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          currentLanguage: 'zh-CN'
        };

        _classCallCheck(this, LanguageModel);

        _initializerDefineProperty(this, "currentLanguage", _descriptor, this);

        _initializerDefineProperty(this, "languageMap", _descriptor2, this);

        this.setState(options);
      }

      _createClass(LanguageModel, [{
        key: "changeLanguageTo",
        value: function changeLanguageTo(language) {
          this.currentLanguage = language;
        }
      }, {
        key: "setState",
        value: function setState(state) {
          for (var key in state) {
            if (state.hasOwnProperty(key)) {
              this[key] = state[key];
            }
          }
        }
      }, {
        key: "resource",
        get: function get() {
          return this.languageMap[this.currentLanguage || 'zh-CN'] || {};
        }
      }]);

      return LanguageModel;
    }(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "currentLanguage", [mobx.observable], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: null
    }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "languageMap", [mobx.observable], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return {};
      }
    }), _applyDecoratedDescriptor(_class.prototype, "resource", [mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "resource"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeLanguageTo", [mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "changeLanguageTo"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setState", [mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setState"), _class.prototype)), _class);

    exports.Language = Language$1;
    exports.LanguageStore = LanguageModel;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
