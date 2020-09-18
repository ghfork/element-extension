module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/utils/date-util");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/utils/dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/utils/util");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/mixins/emitter");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/utils/vue-popper");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/mixins/locale");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/utils/merge");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/input");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/utils/popup");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/utils/clickoutside");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("throttle-debounce/debounce");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/utils/resize-event");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/mixins/migrating");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/checkbox");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/locale");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/scrollbar");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/button");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/utils/vdom");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/transitions/collapse-transition");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/mixins/focus");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/utils/types");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/utils/scroll-into-view");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/utils/scrollbar-width");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/tooltip");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/utils/after-leave");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("throttle-debounce");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("throttle-debounce/throttle");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/tag");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/utils/shared");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("async-validator");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("normalize-wheel");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/select");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/option");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/utils/aria-dialog");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("element-mini-ui/lib/utils/aria-utils");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(37);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/button/src/button.vue?vue&type=template&id=ca859fb4&
var buttonvue_type_template_id_ca859fb4_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "el-button",
      class: [
        _vm.type ? "el-button--" + _vm.type : "",
        _vm.buttonSize ? "el-button--" + _vm.buttonSize : "",
        {
          "is-disabled": _vm.buttonDisabled,
          "is-loading": _vm.loading,
          "is-plain": _vm.plain,
          "is-round": _vm.round,
          "is-circle": _vm.circle
        }
      ],
      attrs: {
        disabled: _vm.buttonDisabled || _vm.loading,
        autofocus: _vm.autofocus,
        type: _vm.nativeType
      },
      on: { click: _vm.handleClick }
    },
    [
      _vm.loading ? _c("i", { staticClass: "el-icon-loading" }) : _vm._e(),
      _vm.icon && !_vm.loading ? _c("i", { class: _vm.icon }) : _vm._e(),
      _vm.$slots.default ? _c("span", [_vm._t("default")], 2) : _vm._e()
    ]
  )
}
var staticRenderFns = []
buttonvue_type_template_id_ca859fb4_render._withStripped = true


// CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=template&id=ca859fb4&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/button/src/button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: 'ElButton',

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },

  computed: {
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    buttonSize: function buttonSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    buttonDisabled: function buttonDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  },

  methods: {
    handleClick: function handleClick(evt) {
      this.$emit('click', evt);
    }
  }
});
// CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/button/src/button.vue





/* normalize component */

var component = normalizeComponent(
  src_buttonvue_type_script_lang_js_,
  buttonvue_type_template_id_ca859fb4_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/button/src/button.vue"
/* harmony default export */ var src_button = (component.exports);
// CONCATENATED MODULE: ./packages/button/index.js


/* istanbul ignore next */
src_button.install = function (Vue) {
  Vue.component(src_button.name, src_button);
};

/* harmony default export */ var packages_button = (src_button);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/button/src/button-group.vue?vue&type=template&id=3d8661d0&
var button_groupvue_type_template_id_3d8661d0_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "el-button-group" }, [_vm._t("default")], 2)
}
var button_groupvue_type_template_id_3d8661d0_staticRenderFns = []
button_groupvue_type_template_id_3d8661d0_render._withStripped = true


// CONCATENATED MODULE: ./packages/button/src/button-group.vue?vue&type=template&id=3d8661d0&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/button/src/button-group.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var button_groupvue_type_script_lang_js_ = ({
  name: 'ElButtonGroup'
});
// CONCATENATED MODULE: ./packages/button/src/button-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_button_groupvue_type_script_lang_js_ = (button_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/button/src/button-group.vue





/* normalize component */

var button_group_component = normalizeComponent(
  src_button_groupvue_type_script_lang_js_,
  button_groupvue_type_template_id_3d8661d0_render,
  button_groupvue_type_template_id_3d8661d0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var button_group_api; }
button_group_component.options.__file = "packages/button/src/button-group.vue"
/* harmony default export */ var button_group = (button_group_component.exports);
// CONCATENATED MODULE: ./packages/button-group/index.js


/* istanbul ignore next */
button_group.install = function (Vue) {
  Vue.component(button_group.name, button_group);
};

/* harmony default export */ var packages_button_group = (button_group);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/radio/src/radio.vue?vue&type=template&id=69cd6268&
var radiovue_type_template_id_69cd6268_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    {
      staticClass: "el-radio",
      class: [
        _vm.border && _vm.radioSize ? "el-radio--" + _vm.radioSize : "",
        { "is-disabled": _vm.isDisabled },
        { "is-focus": _vm.focus },
        { "is-bordered": _vm.border },
        { "is-checked": _vm.model === _vm.label }
      ],
      attrs: {
        role: "radio",
        "aria-checked": _vm.model === _vm.label,
        "aria-disabled": _vm.isDisabled,
        tabindex: _vm.tabIndex
      },
      on: {
        keydown: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])
          ) {
            return null
          }
          $event.stopPropagation()
          $event.preventDefault()
          _vm.model = _vm.isDisabled ? _vm.model : _vm.label
        }
      }
    },
    [
      _c(
        "span",
        {
          staticClass: "el-radio__input",
          class: {
            "is-disabled": _vm.isDisabled,
            "is-checked": _vm.model === _vm.label
          }
        },
        [
          _c("span", { staticClass: "el-radio__inner" }),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.model,
                expression: "model"
              }
            ],
            ref: "radio",
            staticClass: "el-radio__original",
            attrs: {
              type: "radio",
              "aria-hidden": "true",
              name: _vm.name,
              disabled: _vm.isDisabled,
              tabindex: "-1"
            },
            domProps: {
              value: _vm.label,
              checked: _vm._q(_vm.model, _vm.label)
            },
            on: {
              focus: function($event) {
                _vm.focus = true
              },
              blur: function($event) {
                _vm.focus = false
              },
              change: [
                function($event) {
                  _vm.model = _vm.label
                },
                _vm.handleChange
              ]
            }
          })
        ]
      ),
      _c(
        "span",
        {
          staticClass: "el-radio__label",
          on: {
            keydown: function($event) {
              $event.stopPropagation()
            }
          }
        },
        [
          _vm._t("default"),
          !_vm.$slots.default ? [_vm._v(_vm._s(_vm.label))] : _vm._e()
        ],
        2
      )
    ]
  )
}
var radiovue_type_template_id_69cd6268_staticRenderFns = []
radiovue_type_template_id_69cd6268_render._withStripped = true


// CONCATENATED MODULE: ./packages/radio/src/radio.vue?vue&type=template&id=69cd6268&

// EXTERNAL MODULE: external "element-mini-ui/lib/mixins/emitter"
var emitter_ = __webpack_require__(3);
var emitter_default = /*#__PURE__*/__webpack_require__.n(emitter_);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/radio/src/radio.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var radiovue_type_script_lang_js_ = ({
  name: 'ElRadio',

  mixins: [emitter_default.a],

  inject: {
    elForm: {
      default: ''
    },

    elFormItem: {
      default: ''
    }
  },

  componentName: 'ElRadio',

  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String
  },

  data: function data() {
    return {
      focus: false
    };
  },

  computed: {
    isGroup: function isGroup() {
      var parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'ElRadioGroup') {
          parent = parent.$parent;
        } else {
          this._radioGroup = parent;
          return true;
        }
      }
      return false;
    },

    model: {
      get: function get() {
        return this.isGroup ? this._radioGroup.value : this.value;
      },
      set: function set(val) {
        if (this.isGroup) {
          this.dispatch('ElRadioGroup', 'input', [val]);
        } else {
          this.$emit('input', val);
        }
        this.$refs.radio && (this.$refs.radio.checked = this.model === this.label);
      }
    },
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    radioSize: function radioSize() {
      var temRadioSize = this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      return this.isGroup ? this._radioGroup.radioGroupSize || temRadioSize : temRadioSize;
    },
    isDisabled: function isDisabled() {
      return this.isGroup ? this._radioGroup.disabled || this.disabled || (this.elForm || {}).disabled : this.disabled || (this.elForm || {}).disabled;
    },
    tabIndex: function tabIndex() {
      return this.isDisabled || this.isGroup && this.model !== this.label ? -1 : 0;
    }
  },

  methods: {
    handleChange: function handleChange() {
      var _this = this;

      this.$nextTick(function () {
        _this.$emit('change', _this.model);
        _this.isGroup && _this.dispatch('ElRadioGroup', 'handleChange', _this.model);
      });
    }
  }
});
// CONCATENATED MODULE: ./packages/radio/src/radio.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_radiovue_type_script_lang_js_ = (radiovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/radio/src/radio.vue





/* normalize component */

var radio_component = normalizeComponent(
  src_radiovue_type_script_lang_js_,
  radiovue_type_template_id_69cd6268_render,
  radiovue_type_template_id_69cd6268_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var radio_api; }
radio_component.options.__file = "packages/radio/src/radio.vue"
/* harmony default export */ var src_radio = (radio_component.exports);
// CONCATENATED MODULE: ./packages/radio/index.js


/* istanbul ignore next */
src_radio.install = function (Vue) {
  Vue.component(src_radio.name, src_radio);
};

/* harmony default export */ var packages_radio = (src_radio);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/radio/src/radio-group.vue?vue&type=template&id=818a704c&
var radio_groupvue_type_template_id_818a704c_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "el-radio-group",
      attrs: { role: "radiogroup" },
      on: { keydown: _vm.handleKeydown }
    },
    [_vm._t("default")],
    2
  )
}
var radio_groupvue_type_template_id_818a704c_staticRenderFns = []
radio_groupvue_type_template_id_818a704c_render._withStripped = true


// CONCATENATED MODULE: ./packages/radio/src/radio-group.vue?vue&type=template&id=818a704c&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/radio/src/radio-group.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//



var keyCode = Object.freeze({
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
});
/* harmony default export */ var radio_groupvue_type_script_lang_js_ = ({
  name: 'ElRadioGroup',

  componentName: 'ElRadioGroup',

  inject: {
    elFormItem: {
      default: ''
    }
  },

  mixins: [emitter_default.a],

  props: {
    value: {},
    size: String,
    fill: String,
    textColor: String,
    disabled: Boolean
  },

  computed: {
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    radioGroupSize: function radioGroupSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    }
  },

  created: function created() {
    var _this = this;

    this.$on('handleChange', function (value) {
      _this.$emit('change', value);
    });
  },
  mounted: function mounted() {
    // 当radioGroup没有默认选项时，第一个可以选中Tab导航
    var radios = this.$el.querySelectorAll('[type=radio]');
    var firstLabel = this.$el.querySelectorAll('[role=radio]')[0];
    if (![].some.call(radios, function (radio) {
      return radio.checked;
    }) && firstLabel) {
      firstLabel.tabIndex = 0;
    }
  },

  methods: {
    handleKeydown: function handleKeydown(e) {
      // 左右上下按键 可以在radio组内切换不同选项
      var target = e.target;
      var className = target.nodeName === 'INPUT' ? '[type=radio]' : '[role=radio]';
      var radios = this.$el.querySelectorAll(className);
      var length = radios.length;
      var index = [].indexOf.call(radios, target);
      var roleRadios = this.$el.querySelectorAll('[role=radio]');
      switch (e.keyCode) {
        case keyCode.LEFT:
        case keyCode.UP:
          e.stopPropagation();
          e.preventDefault();
          if (index === 0) {
            roleRadios[length - 1].click();
            roleRadios[length - 1].focus();
          } else {
            roleRadios[index - 1].click();
            roleRadios[index - 1].focus();
          }
          break;
        case keyCode.RIGHT:
        case keyCode.DOWN:
          if (index === length - 1) {
            e.stopPropagation();
            e.preventDefault();
            roleRadios[0].click();
            roleRadios[0].focus();
          } else {
            roleRadios[index + 1].click();
            roleRadios[index + 1].focus();
          }
          break;
        default:
          break;
      }
    }
  },
  watch: {
    value: function value(_value) {
      this.dispatch('ElFormItem', 'el.form.change', [this.value]);
    }
  }
});
// CONCATENATED MODULE: ./packages/radio/src/radio-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_radio_groupvue_type_script_lang_js_ = (radio_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/radio/src/radio-group.vue





/* normalize component */

var radio_group_component = normalizeComponent(
  src_radio_groupvue_type_script_lang_js_,
  radio_groupvue_type_template_id_818a704c_render,
  radio_groupvue_type_template_id_818a704c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var radio_group_api; }
radio_group_component.options.__file = "packages/radio/src/radio-group.vue"
/* harmony default export */ var radio_group = (radio_group_component.exports);
// CONCATENATED MODULE: ./packages/radio-group/index.js


/* istanbul ignore next */
radio_group.install = function (Vue) {
  Vue.component(radio_group.name, radio_group);
};

/* harmony default export */ var packages_radio_group = (radio_group);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/radio/src/radio-button.vue?vue&type=template&id=18a77a32&
var radio_buttonvue_type_template_id_18a77a32_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    {
      staticClass: "el-radio-button",
      class: [
        _vm.size ? "el-radio-button--" + _vm.size : "",
        { "is-active": _vm.value === _vm.label },
        { "is-disabled": _vm.isDisabled },
        { "is-focus": _vm.focus }
      ],
      attrs: {
        role: "radio",
        "aria-checked": _vm.value === _vm.label,
        "aria-disabled": _vm.isDisabled,
        tabindex: _vm.tabIndex
      },
      on: {
        keydown: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])
          ) {
            return null
          }
          $event.stopPropagation()
          $event.preventDefault()
          _vm.value = _vm.isDisabled ? _vm.value : _vm.label
        }
      }
    },
    [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.value,
            expression: "value"
          }
        ],
        staticClass: "el-radio-button__orig-radio",
        attrs: {
          type: "radio",
          name: _vm.name,
          disabled: _vm.isDisabled,
          tabindex: "-1"
        },
        domProps: { value: _vm.label, checked: _vm._q(_vm.value, _vm.label) },
        on: {
          change: [
            function($event) {
              _vm.value = _vm.label
            },
            _vm.handleChange
          ],
          focus: function($event) {
            _vm.focus = true
          },
          blur: function($event) {
            _vm.focus = false
          }
        }
      }),
      _c(
        "span",
        {
          staticClass: "el-radio-button__inner",
          style: _vm.value === _vm.label ? _vm.activeStyle : null,
          on: {
            keydown: function($event) {
              $event.stopPropagation()
            }
          }
        },
        [
          _vm._t("default"),
          !_vm.$slots.default ? [_vm._v(_vm._s(_vm.label))] : _vm._e()
        ],
        2
      )
    ]
  )
}
var radio_buttonvue_type_template_id_18a77a32_staticRenderFns = []
radio_buttonvue_type_template_id_18a77a32_render._withStripped = true


// CONCATENATED MODULE: ./packages/radio/src/radio-button.vue?vue&type=template&id=18a77a32&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/radio/src/radio-button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var radio_buttonvue_type_script_lang_js_ = ({
  name: 'ElRadioButton',

  mixins: [emitter_default.a],

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  props: {
    label: {},
    disabled: Boolean,
    name: String
  },
  data: function data() {
    return {
      focus: false
    };
  },

  computed: {
    value: {
      get: function get() {
        return this._radioGroup.value;
      },
      set: function set(value) {
        this._radioGroup.$emit('input', value);
      }
    },
    _radioGroup: function _radioGroup() {
      var parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'ElRadioGroup') {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }
      return false;
    },
    activeStyle: function activeStyle() {
      return {
        backgroundColor: this._radioGroup.fill || '',
        borderColor: this._radioGroup.fill || '',
        boxShadow: this._radioGroup.fill ? '-1px 0 0 0 ' + this._radioGroup.fill : '',
        color: this._radioGroup.textColor || ''
      };
    },
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    size: function size() {
      return this._radioGroup.radioGroupSize || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    isDisabled: function isDisabled() {
      return this.disabled || this._radioGroup.disabled || (this.elForm || {}).disabled;
    },
    tabIndex: function tabIndex() {
      return this.isDisabled || this._radioGroup && this.value !== this.label ? -1 : 0;
    }
  },

  methods: {
    handleChange: function handleChange() {
      var _this = this;

      this.$nextTick(function () {
        _this.dispatch('ElRadioGroup', 'handleChange', _this.value);
      });
    }
  }
});
// CONCATENATED MODULE: ./packages/radio/src/radio-button.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_radio_buttonvue_type_script_lang_js_ = (radio_buttonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/radio/src/radio-button.vue





/* normalize component */

var radio_button_component = normalizeComponent(
  src_radio_buttonvue_type_script_lang_js_,
  radio_buttonvue_type_template_id_18a77a32_render,
  radio_buttonvue_type_template_id_18a77a32_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var radio_button_api; }
radio_button_component.options.__file = "packages/radio/src/radio-button.vue"
/* harmony default export */ var radio_button = (radio_button_component.exports);
// CONCATENATED MODULE: ./packages/radio-button/index.js


/* istanbul ignore next */
radio_button.install = function (Vue) {
  Vue.component(radio_button.name, radio_button);
};

/* harmony default export */ var packages_radio_button = (radio_button);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/checkbox/src/checkbox.vue?vue&type=template&id=d0387074&
var checkboxvue_type_template_id_d0387074_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    {
      staticClass: "el-checkbox",
      class: [
        _vm.border && _vm.checkboxSize
          ? "el-checkbox--" + _vm.checkboxSize
          : "",
        { "is-disabled": _vm.isDisabled },
        { "is-bordered": _vm.border },
        { "is-checked": _vm.isChecked }
      ],
      attrs: {
        role: "checkbox",
        "aria-checked": _vm.indeterminate ? "mixed" : _vm.isChecked,
        "aria-disabled": _vm.isDisabled,
        id: _vm.id
      }
    },
    [
      _c(
        "span",
        {
          staticClass: "el-checkbox__input",
          class: {
            "is-disabled": _vm.isDisabled,
            "is-checked": _vm.isChecked,
            "is-indeterminate": _vm.indeterminate,
            "is-focus": _vm.focus
          },
          attrs: { "aria-checked": "mixed" }
        },
        [
          _c("span", { staticClass: "el-checkbox__inner" }),
          _vm.trueLabel || _vm.falseLabel
            ? _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.model,
                    expression: "model"
                  }
                ],
                staticClass: "el-checkbox__original",
                attrs: {
                  type: "checkbox",
                  "aria-hidden": "true",
                  name: _vm.name,
                  disabled: _vm.isDisabled,
                  "true-value": _vm.trueLabel,
                  "false-value": _vm.falseLabel
                },
                domProps: {
                  checked: Array.isArray(_vm.model)
                    ? _vm._i(_vm.model, null) > -1
                    : _vm._q(_vm.model, _vm.trueLabel)
                },
                on: {
                  change: [
                    function($event) {
                      var $$a = _vm.model,
                        $$el = $event.target,
                        $$c = $$el.checked ? _vm.trueLabel : _vm.falseLabel
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 && (_vm.model = $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            (_vm.model = $$a
                              .slice(0, $$i)
                              .concat($$a.slice($$i + 1)))
                        }
                      } else {
                        _vm.model = $$c
                      }
                    },
                    _vm.handleChange
                  ],
                  focus: function($event) {
                    _vm.focus = true
                  },
                  blur: function($event) {
                    _vm.focus = false
                  }
                }
              })
            : _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.model,
                    expression: "model"
                  }
                ],
                staticClass: "el-checkbox__original",
                attrs: {
                  type: "checkbox",
                  "aria-hidden": "true",
                  disabled: _vm.isDisabled,
                  name: _vm.name
                },
                domProps: {
                  value: _vm.label,
                  checked: Array.isArray(_vm.model)
                    ? _vm._i(_vm.model, _vm.label) > -1
                    : _vm.model
                },
                on: {
                  change: [
                    function($event) {
                      var $$a = _vm.model,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = _vm.label,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 && (_vm.model = $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            (_vm.model = $$a
                              .slice(0, $$i)
                              .concat($$a.slice($$i + 1)))
                        }
                      } else {
                        _vm.model = $$c
                      }
                    },
                    _vm.handleChange
                  ],
                  focus: function($event) {
                    _vm.focus = true
                  },
                  blur: function($event) {
                    _vm.focus = false
                  }
                }
              })
        ]
      ),
      _vm.$slots.default || _vm.label
        ? _c(
            "span",
            { staticClass: "el-checkbox__label" },
            [
              _vm._t("default"),
              !_vm.$slots.default ? [_vm._v(_vm._s(_vm.label))] : _vm._e()
            ],
            2
          )
        : _vm._e()
    ]
  )
}
var checkboxvue_type_template_id_d0387074_staticRenderFns = []
checkboxvue_type_template_id_d0387074_render._withStripped = true


// CONCATENATED MODULE: ./packages/checkbox/src/checkbox.vue?vue&type=template&id=d0387074&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/checkbox/src/checkbox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var checkboxvue_type_script_lang_js_ = ({
  name: 'ElCheckbox',

  mixins: [emitter_default.a],

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  componentName: 'ElCheckbox',

  data: function data() {
    return {
      selfModel: false,
      focus: false,
      isLimitExceeded: false
    };
  },


  computed: {
    model: {
      get: function get() {
        return this.isGroup ? this.store : this.value !== undefined ? this.value : this.selfModel;
      },
      set: function set(val) {
        if (this.isGroup) {
          this.isLimitExceeded = false;
          this._checkboxGroup.min !== undefined && val.length < this._checkboxGroup.min && (this.isLimitExceeded = true);

          this._checkboxGroup.max !== undefined && val.length > this._checkboxGroup.max && (this.isLimitExceeded = true);

          this.isLimitExceeded === false && this.dispatch('ElCheckboxGroup', 'input', [val]);
        } else {
          this.$emit('input', val);
          this.selfModel = val;
        }
      }
    },

    isChecked: function isChecked() {
      if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model;
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.label) > -1;
      } else if (this.model !== null && this.model !== undefined) {
        return this.model === this.trueLabel;
      }
    },
    isGroup: function isGroup() {
      var parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'ElCheckboxGroup') {
          parent = parent.$parent;
        } else {
          this._checkboxGroup = parent;
          return true;
        }
      }
      return false;
    },
    store: function store() {
      return this._checkboxGroup ? this._checkboxGroup.value : this.value;
    },


    /* used to make the isDisabled judgment under max/min props */
    isLimitDisabled: function isLimitDisabled() {
      var _checkboxGroup = this._checkboxGroup,
          max = _checkboxGroup.max,
          min = _checkboxGroup.min;

      return !!(max || min) && this.model.length >= max && !this.isChecked || this.model.length <= min && this.isChecked;
    },
    isDisabled: function isDisabled() {
      return this.isGroup ? this._checkboxGroup.disabled || this.disabled || (this.elForm || {}).disabled || this.isLimitDisabled : this.disabled || (this.elForm || {}).disabled;
    },
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    checkboxSize: function checkboxSize() {
      var temCheckboxSize = this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      return this.isGroup ? this._checkboxGroup.checkboxGroupSize || temCheckboxSize : temCheckboxSize;
    }
  },

  props: {
    value: {},
    label: {},
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number],
    id: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系*/
    controls: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系*/
    border: Boolean,
    size: String
  },

  methods: {
    addToStore: function addToStore() {
      if (Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
        this.model.push(this.label);
      } else {
        this.model = this.trueLabel || true;
      }
    },
    handleChange: function handleChange(ev) {
      var _this = this;

      if (this.isLimitExceeded) return;
      var value = void 0;
      if (ev.target.checked) {
        value = this.trueLabel === undefined ? true : this.trueLabel;
      } else {
        value = this.falseLabel === undefined ? false : this.falseLabel;
      }
      this.$emit('change', value, ev);
      this.$nextTick(function () {
        if (_this.isGroup) {
          _this.dispatch('ElCheckboxGroup', 'change', [_this._checkboxGroup.value]);
        }
      });
    }
  },

  created: function created() {
    this.checked && this.addToStore();
  },
  mounted: function mounted() {
    // 为indeterminate元素 添加aria-controls 属性
    if (this.indeterminate) {
      this.$el.setAttribute('aria-controls', this.controls);
    }
  },


  watch: {
    value: function value(_value) {
      this.dispatch('ElFormItem', 'el.form.change', _value);
    }
  }
});
// CONCATENATED MODULE: ./packages/checkbox/src/checkbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_checkboxvue_type_script_lang_js_ = (checkboxvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/checkbox/src/checkbox.vue





/* normalize component */

var checkbox_component = normalizeComponent(
  src_checkboxvue_type_script_lang_js_,
  checkboxvue_type_template_id_d0387074_render,
  checkboxvue_type_template_id_d0387074_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var checkbox_api; }
checkbox_component.options.__file = "packages/checkbox/src/checkbox.vue"
/* harmony default export */ var src_checkbox = (checkbox_component.exports);
// CONCATENATED MODULE: ./packages/checkbox/index.js


/* istanbul ignore next */
src_checkbox.install = function (Vue) {
  Vue.component(src_checkbox.name, src_checkbox);
};

/* harmony default export */ var packages_checkbox = (src_checkbox);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/checkbox/src/checkbox-button.vue?vue&type=template&id=478e906e&
var checkbox_buttonvue_type_template_id_478e906e_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    {
      staticClass: "el-checkbox-button",
      class: [
        _vm.size ? "el-checkbox-button--" + _vm.size : "",
        { "is-disabled": _vm.isDisabled },
        { "is-checked": _vm.isChecked },
        { "is-focus": _vm.focus }
      ],
      attrs: {
        role: "checkbox",
        "aria-checked": _vm.isChecked,
        "aria-disabled": _vm.isDisabled
      }
    },
    [
      _vm.trueLabel || _vm.falseLabel
        ? _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.model,
                expression: "model"
              }
            ],
            staticClass: "el-checkbox-button__original",
            attrs: {
              type: "checkbox",
              name: _vm.name,
              disabled: _vm.isDisabled,
              "true-value": _vm.trueLabel,
              "false-value": _vm.falseLabel
            },
            domProps: {
              checked: Array.isArray(_vm.model)
                ? _vm._i(_vm.model, null) > -1
                : _vm._q(_vm.model, _vm.trueLabel)
            },
            on: {
              change: [
                function($event) {
                  var $$a = _vm.model,
                    $$el = $event.target,
                    $$c = $$el.checked ? _vm.trueLabel : _vm.falseLabel
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.model = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.model = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.model = $$c
                  }
                },
                _vm.handleChange
              ],
              focus: function($event) {
                _vm.focus = true
              },
              blur: function($event) {
                _vm.focus = false
              }
            }
          })
        : _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.model,
                expression: "model"
              }
            ],
            staticClass: "el-checkbox-button__original",
            attrs: {
              type: "checkbox",
              name: _vm.name,
              disabled: _vm.isDisabled
            },
            domProps: {
              value: _vm.label,
              checked: Array.isArray(_vm.model)
                ? _vm._i(_vm.model, _vm.label) > -1
                : _vm.model
            },
            on: {
              change: [
                function($event) {
                  var $$a = _vm.model,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = _vm.label,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.model = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.model = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.model = $$c
                  }
                },
                _vm.handleChange
              ],
              focus: function($event) {
                _vm.focus = true
              },
              blur: function($event) {
                _vm.focus = false
              }
            }
          }),
      _vm.$slots.default || _vm.label
        ? _c(
            "span",
            {
              staticClass: "el-checkbox-button__inner",
              style: _vm.isChecked ? _vm.activeStyle : null
            },
            [_vm._t("default", [_vm._v(_vm._s(_vm.label))])],
            2
          )
        : _vm._e()
    ]
  )
}
var checkbox_buttonvue_type_template_id_478e906e_staticRenderFns = []
checkbox_buttonvue_type_template_id_478e906e_render._withStripped = true


// CONCATENATED MODULE: ./packages/checkbox/src/checkbox-button.vue?vue&type=template&id=478e906e&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/checkbox/src/checkbox-button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var checkbox_buttonvue_type_script_lang_js_ = ({
  name: 'ElCheckboxButton',

  mixins: [emitter_default.a],

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  data: function data() {
    return {
      selfModel: false,
      focus: false,
      isLimitExceeded: false
    };
  },


  props: {
    value: {},
    label: {},
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number]
  },
  computed: {
    model: {
      get: function get() {
        return this._checkboxGroup ? this.store : this.value !== undefined ? this.value : this.selfModel;
      },
      set: function set(val) {
        if (this._checkboxGroup) {
          this.isLimitExceeded = false;
          this._checkboxGroup.min !== undefined && val.length < this._checkboxGroup.min && (this.isLimitExceeded = true);

          this._checkboxGroup.max !== undefined && val.length > this._checkboxGroup.max && (this.isLimitExceeded = true);

          this.isLimitExceeded === false && this.dispatch('ElCheckboxGroup', 'input', [val]);
        } else if (this.value !== undefined) {
          this.$emit('input', val);
        } else {
          this.selfModel = val;
        }
      }
    },

    isChecked: function isChecked() {
      if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model;
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.label) > -1;
      } else if (this.model !== null && this.model !== undefined) {
        return this.model === this.trueLabel;
      }
    },
    _checkboxGroup: function _checkboxGroup() {
      var parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'ElCheckboxGroup') {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }
      return false;
    },
    store: function store() {
      return this._checkboxGroup ? this._checkboxGroup.value : this.value;
    },
    activeStyle: function activeStyle() {
      return {
        backgroundColor: this._checkboxGroup.fill || '',
        borderColor: this._checkboxGroup.fill || '',
        color: this._checkboxGroup.textColor || '',
        'box-shadow': '-1px 0 0 0 ' + this._checkboxGroup.fill

      };
    },
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    size: function size() {
      return this._checkboxGroup.checkboxGroupSize || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },


    /* used to make the isDisabled judgment under max/min props */
    isLimitDisabled: function isLimitDisabled() {
      var _checkboxGroup2 = this._checkboxGroup,
          max = _checkboxGroup2.max,
          min = _checkboxGroup2.min;

      return !!(max || min) && this.model.length >= max && !this.isChecked || this.model.length <= min && this.isChecked;
    },
    isDisabled: function isDisabled() {
      return this._checkboxGroup ? this._checkboxGroup.disabled || this.disabled || (this.elForm || {}).disabled || this.isLimitDisabled : this.disabled || (this.elForm || {}).disabled;
    }
  },
  methods: {
    addToStore: function addToStore() {
      if (Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
        this.model.push(this.label);
      } else {
        this.model = this.trueLabel || true;
      }
    },
    handleChange: function handleChange(ev) {
      var _this = this;

      if (this.isLimitExceeded) return;
      var value = void 0;
      if (ev.target.checked) {
        value = this.trueLabel === undefined ? true : this.trueLabel;
      } else {
        value = this.falseLabel === undefined ? false : this.falseLabel;
      }
      this.$emit('change', value, ev);
      this.$nextTick(function () {
        if (_this._checkboxGroup) {
          _this.dispatch('ElCheckboxGroup', 'change', [_this._checkboxGroup.value]);
        }
      });
    }
  },

  created: function created() {
    this.checked && this.addToStore();
  }
});
// CONCATENATED MODULE: ./packages/checkbox/src/checkbox-button.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_checkbox_buttonvue_type_script_lang_js_ = (checkbox_buttonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/checkbox/src/checkbox-button.vue





/* normalize component */

var checkbox_button_component = normalizeComponent(
  src_checkbox_buttonvue_type_script_lang_js_,
  checkbox_buttonvue_type_template_id_478e906e_render,
  checkbox_buttonvue_type_template_id_478e906e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var checkbox_button_api; }
checkbox_button_component.options.__file = "packages/checkbox/src/checkbox-button.vue"
/* harmony default export */ var checkbox_button = (checkbox_button_component.exports);
// CONCATENATED MODULE: ./packages/checkbox-button/index.js


/* istanbul ignore next */
checkbox_button.install = function (Vue) {
  Vue.component(checkbox_button.name, checkbox_button);
};

/* harmony default export */ var packages_checkbox_button = (checkbox_button);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/checkbox/src/checkbox-group.vue?vue&type=template&id=7289a290&
var checkbox_groupvue_type_template_id_7289a290_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "el-checkbox-group",
      attrs: { role: "group", "aria-label": "checkbox-group" }
    },
    [_vm._t("default")],
    2
  )
}
var checkbox_groupvue_type_template_id_7289a290_staticRenderFns = []
checkbox_groupvue_type_template_id_7289a290_render._withStripped = true


// CONCATENATED MODULE: ./packages/checkbox/src/checkbox-group.vue?vue&type=template&id=7289a290&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/checkbox/src/checkbox-group.vue?vue&type=script&lang=js&



/* harmony default export */ var checkbox_groupvue_type_script_lang_js_ = ({
  name: 'ElCheckboxGroup',

  componentName: 'ElCheckboxGroup',

  mixins: [emitter_default.a],

  inject: {
    elFormItem: {
      default: ''
    }
  },

  props: {
    value: {},
    disabled: Boolean,
    min: Number,
    max: Number,
    size: String,
    fill: String,
    textColor: String
  },

  computed: {
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    checkboxGroupSize: function checkboxGroupSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    }
  },

  watch: {
    value: function value(_value) {
      this.dispatch('ElFormItem', 'el.form.change', [_value]);
    }
  }
});
// CONCATENATED MODULE: ./packages/checkbox/src/checkbox-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_checkbox_groupvue_type_script_lang_js_ = (checkbox_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/checkbox/src/checkbox-group.vue





/* normalize component */

var checkbox_group_component = normalizeComponent(
  src_checkbox_groupvue_type_script_lang_js_,
  checkbox_groupvue_type_template_id_7289a290_render,
  checkbox_groupvue_type_template_id_7289a290_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var checkbox_group_api; }
checkbox_group_component.options.__file = "packages/checkbox/src/checkbox-group.vue"
/* harmony default export */ var checkbox_group = (checkbox_group_component.exports);
// CONCATENATED MODULE: ./packages/checkbox-group/index.js


/* istanbul ignore next */
checkbox_group.install = function (Vue) {
  Vue.component(checkbox_group.name, checkbox_group);
};

/* harmony default export */ var packages_checkbox_group = (checkbox_group);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/input/src/input.vue?vue&type=template&id=343dd774&
var inputvue_type_template_id_343dd774_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: [
        _vm.type === "textarea" ? "el-textarea" : "el-input",
        _vm.inputSize ? "el-input--" + _vm.inputSize : "",
        {
          "is-disabled": _vm.inputDisabled,
          "is-exceed": _vm.inputExceed,
          "el-input-group": _vm.$slots.prepend || _vm.$slots.append,
          "el-input-group--append": _vm.$slots.append,
          "el-input-group--prepend": _vm.$slots.prepend,
          "el-input--prefix": _vm.$slots.prefix || _vm.prefixIcon,
          "el-input--suffix":
            _vm.$slots.suffix ||
            _vm.suffixIcon ||
            _vm.clearable ||
            _vm.showPassword
        }
      ],
      on: {
        mouseenter: function($event) {
          _vm.hovering = true
        },
        mouseleave: function($event) {
          _vm.hovering = false
        }
      }
    },
    [
      _vm.type !== "textarea"
        ? [
            _vm.$slots.prepend
              ? _c(
                  "div",
                  { staticClass: "el-input-group__prepend" },
                  [_vm._t("prepend")],
                  2
                )
              : _vm._e(),
            _vm.type !== "textarea"
              ? _c(
                  "input",
                  _vm._b(
                    {
                      ref: "input",
                      staticClass: "el-input__inner",
                      attrs: {
                        tabindex: _vm.tabindex,
                        type: _vm.showPassword
                          ? _vm.passwordVisible
                            ? "text"
                            : "password"
                          : _vm.type,
                        disabled: _vm.inputDisabled,
                        readonly: _vm.readonly,
                        autocomplete: _vm.autoComplete || _vm.autocomplete,
                        "aria-label": _vm.label
                      },
                      on: {
                        compositionstart: _vm.handleCompositionStart,
                        compositionend: _vm.handleCompositionEnd,
                        input: _vm.handleInput,
                        focus: _vm.handleFocus,
                        blur: _vm.handleBlur,
                        change: _vm.handleChange
                      }
                    },
                    "input",
                    _vm.$attrs,
                    false
                  )
                )
              : _vm._e(),
            _vm.$slots.prefix || _vm.prefixIcon
              ? _c(
                  "span",
                  { staticClass: "el-input__prefix" },
                  [
                    _vm._t("prefix"),
                    _vm.prefixIcon
                      ? _c("i", {
                          staticClass: "el-input__icon",
                          class: _vm.prefixIcon
                        })
                      : _vm._e()
                  ],
                  2
                )
              : _vm._e(),
            _vm.getSuffixVisible()
              ? _c("span", { staticClass: "el-input__suffix" }, [
                  _c(
                    "span",
                    { staticClass: "el-input__suffix-inner" },
                    [
                      !_vm.showClear ||
                      !_vm.showPwdVisible ||
                      !_vm.isWordLimitVisible
                        ? [
                            _vm._t("suffix"),
                            _vm.suffixIcon
                              ? _c("i", {
                                  staticClass: "el-input__icon",
                                  class: _vm.suffixIcon
                                })
                              : _vm._e()
                          ]
                        : _vm._e(),
                      _vm.showClear
                        ? _c("i", {
                            staticClass:
                              "el-input__icon el-icon-circle-close el-input__clear",
                            on: { click: _vm.clear }
                          })
                        : _vm._e(),
                      _vm.showPwdVisible
                        ? _c("i", {
                            staticClass:
                              "el-input__icon el-icon-view el-input__clear",
                            on: { click: _vm.handlePasswordVisible }
                          })
                        : _vm._e(),
                      _vm.isWordLimitVisible
                        ? _c("span", { staticClass: "el-input__count" }, [
                            _c(
                              "span",
                              { staticClass: "el-input__count-inner" },
                              [
                                _vm._v(
                                  "\n            " +
                                    _vm._s(_vm.textLength) +
                                    "/" +
                                    _vm._s(_vm.upperLimit) +
                                    "\n          "
                                )
                              ]
                            )
                          ])
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm.validateState
                    ? _c("i", {
                        staticClass: "el-input__icon",
                        class: ["el-input__validateIcon", _vm.validateIcon]
                      })
                    : _vm._e()
                ])
              : _vm._e(),
            _vm.$slots.append
              ? _c(
                  "div",
                  { staticClass: "el-input-group__append" },
                  [_vm._t("append")],
                  2
                )
              : _vm._e()
          ]
        : _c(
            "textarea",
            _vm._b(
              {
                ref: "textarea",
                staticClass: "el-textarea__inner",
                style: _vm.textareaStyle,
                attrs: {
                  tabindex: _vm.tabindex,
                  disabled: _vm.inputDisabled,
                  readonly: _vm.readonly,
                  autocomplete: _vm.autoComplete || _vm.autocomplete,
                  "aria-label": _vm.label
                },
                on: {
                  compositionstart: _vm.handleCompositionStart,
                  compositionend: _vm.handleCompositionEnd,
                  input: _vm.handleInput,
                  focus: _vm.handleFocus,
                  blur: _vm.handleBlur,
                  change: _vm.handleChange
                }
              },
              "textarea",
              _vm.$attrs,
              false
            )
          ),
      _vm.isWordLimitVisible && _vm.type === "textarea"
        ? _c("span", { staticClass: "el-input__count" }, [
            _vm._v(_vm._s(_vm.textLength) + "/" + _vm._s(_vm.upperLimit))
          ])
        : _vm._e()
    ],
    2
  )
}
var inputvue_type_template_id_343dd774_staticRenderFns = []
inputvue_type_template_id_343dd774_render._withStripped = true


// CONCATENATED MODULE: ./packages/input/src/input.vue?vue&type=template&id=343dd774&

// EXTERNAL MODULE: external "element-mini-ui/lib/mixins/migrating"
var migrating_ = __webpack_require__(13);
var migrating_default = /*#__PURE__*/__webpack_require__.n(migrating_);

// CONCATENATED MODULE: ./packages/input/src/calcTextareaHeight.js
var hiddenTextarea = void 0;

var HIDDEN_STYLE = '\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';

var CONTEXT_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];

function calculateNodeStyling(targetElement) {
  var style = window.getComputedStyle(targetElement);

  var boxSizing = style.getPropertyValue('box-sizing');

  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));

  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));

  var contextStyle = CONTEXT_STYLE.map(function (name) {
    return name + ':' + style.getPropertyValue(name);
  }).join(';');

  return { contextStyle: contextStyle, paddingSize: paddingSize, borderSize: borderSize, boxSizing: boxSizing };
}

function calcTextareaHeight(targetElement) {
  var minRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var maxRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    document.body.appendChild(hiddenTextarea);
  }

  var _calculateNodeStyling = calculateNodeStyling(targetElement),
      paddingSize = _calculateNodeStyling.paddingSize,
      borderSize = _calculateNodeStyling.borderSize,
      boxSizing = _calculateNodeStyling.boxSizing,
      contextStyle = _calculateNodeStyling.contextStyle;

  hiddenTextarea.setAttribute('style', contextStyle + ';' + HIDDEN_STYLE);
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || '';

  var height = hiddenTextarea.scrollHeight;
  var result = {};

  if (boxSizing === 'border-box') {
    height = height + borderSize;
  } else if (boxSizing === 'content-box') {
    height = height - paddingSize;
  }

  hiddenTextarea.value = '';
  var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

  if (minRows !== null) {
    var minHeight = singleRowHeight * minRows;
    if (boxSizing === 'border-box') {
      minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
    result.minHeight = minHeight + 'px';
  }
  if (maxRows !== null) {
    var maxHeight = singleRowHeight * maxRows;
    if (boxSizing === 'border-box') {
      maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
  }
  result.height = height + 'px';
  hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea);
  hiddenTextarea = null;
  return result;
};
// EXTERNAL MODULE: external "element-mini-ui/lib/utils/merge"
var merge_ = __webpack_require__(7);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge_);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/input/src/input.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var inputvue_type_script_lang_js_ = ({
  name: 'ElInput',

  componentName: 'ElInput',

  mixins: [emitter_default.a, migrating_default.a],

  inheritAttrs: false,

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  data: function data() {
    return {
      textareaCalcStyle: {},
      hovering: false,
      focused: false,
      isComposing: false,
      passwordVisible: false
    };
  },


  props: {
    value: [String, Number],
    size: String,
    resize: String,
    form: String,
    disabled: Boolean,
    readonly: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    /** @Deprecated in next major version */
    autoComplete: {
      type: String,
      validator: function validator(val) {
         false && false;
        return true;
      }
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    suffixIcon: String,
    prefixIcon: String,
    label: String,
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    tabindex: String
  },

  computed: {
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    validateState: function validateState() {
      return this.elFormItem ? this.elFormItem.validateState : '';
    },
    needStatusIcon: function needStatusIcon() {
      return this.elForm ? this.elForm.statusIcon : false;
    },
    validateIcon: function validateIcon() {
      return {
        validating: 'el-icon-loading',
        success: 'el-icon-circle-check',
        error: 'el-icon-circle-close'
      }[this.validateState];
    },
    textareaStyle: function textareaStyle() {
      return merge_default()({}, this.textareaCalcStyle, { resize: this.resize });
    },
    inputSize: function inputSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    inputDisabled: function inputDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
    nativeInputValue: function nativeInputValue() {
      return this.value === null || this.value === undefined ? '' : String(this.value);
    },
    showClear: function showClear() {
      return this.clearable && !this.inputDisabled && !this.readonly && this.nativeInputValue && (this.focused || this.hovering);
    },
    showPwdVisible: function showPwdVisible() {
      return this.showPassword && !this.inputDisabled && !this.readonly && (!!this.nativeInputValue || this.focused);
    },
    isWordLimitVisible: function isWordLimitVisible() {
      return this.showWordLimit && this.$attrs.maxlength && (this.type === 'text' || this.type === 'textarea') && !this.inputDisabled && !this.readonly && !this.showPassword;
    },
    upperLimit: function upperLimit() {
      return this.$attrs.maxlength;
    },
    textLength: function textLength() {
      if (typeof this.value === 'number') {
        return String(this.value).length;
      }

      return (this.value || '').length;
    },
    inputExceed: function inputExceed() {
      // show exceed style if length of initial value greater then maxlength
      return this.isWordLimitVisible && this.textLength > this.upperLimit;
    }
  },

  watch: {
    value: function value(val) {
      this.$nextTick(this.resizeTextarea);
      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.change', [val]);
      }
    },

    // native input value is set explicitly
    // do not use v-model / :value in template
    // see: https://github.com/ElemeFE/element/issues/14521
    nativeInputValue: function nativeInputValue() {
      this.setNativeInputValue();
    },

    // when change between <input> and <textarea>,
    // update DOM dependent value and styles
    // https://github.com/ElemeFE/element/issues/14857
    type: function type() {
      var _this = this;

      this.$nextTick(function () {
        _this.setNativeInputValue();
        _this.resizeTextarea();
        _this.updateIconOffset();
      });
    }
  },

  methods: {
    focus: function focus() {
      this.getInput().focus();
    },
    blur: function blur() {
      this.getInput().blur();
    },
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'icon': 'icon is removed, use suffix-icon / prefix-icon instead.',
          'on-icon-click': 'on-icon-click is removed.'
        },
        events: {
          'click': 'click is removed.'
        }
      };
    },
    handleBlur: function handleBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.blur', [this.value]);
      }
    },
    select: function select() {
      this.getInput().select();
    },
    resizeTextarea: function resizeTextarea() {
      if (this.$isServer) return;
      var autosize = this.autosize,
          type = this.type;

      if (type !== 'textarea') return;
      if (!autosize) {
        this.textareaCalcStyle = {
          minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
        };
        return;
      }
      var minRows = autosize.minRows;
      var maxRows = autosize.maxRows;

      this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
    },
    setNativeInputValue: function setNativeInputValue() {
      var input = this.getInput();
      if (!input) return;
      if (input.value === this.nativeInputValue) return;
      input.value = this.nativeInputValue;
    },
    handleFocus: function handleFocus(event) {
      this.focused = true;
      this.$emit('focus', event);
    },
    handleCompositionStart: function handleCompositionStart() {
      this.isComposing = true;
    },
    handleCompositionEnd: function handleCompositionEnd(event) {
      this.isComposing = false;
      this.handleInput(event);
    },
    handleInput: function handleInput(event) {
      // should not emit input during composition
      // see: https://github.com/ElemeFE/element/issues/10516
      if (this.isComposing) return;

      // hack for https://github.com/ElemeFE/element/issues/8548
      // should remove the following line when we don't support IE
      if (event.target.value === this.nativeInputValue) return;

      this.$emit('input', event.target.value);

      // ensure native input value is controlled
      // see: https://github.com/ElemeFE/element/issues/12850
      this.$nextTick(this.setNativeInputValue);
    },
    handleChange: function handleChange(event) {
      this.$emit('change', event.target.value);
    },
    calcIconOffset: function calcIconOffset(place) {
      var elList = [].slice.call(this.$el.querySelectorAll('.el-input__' + place) || []);
      if (!elList.length) return;
      var el = null;
      for (var i = 0; i < elList.length; i++) {
        if (elList[i].parentNode === this.$el) {
          el = elList[i];
          break;
        }
      }
      if (!el) return;
      var pendantMap = {
        suffix: 'append',
        prefix: 'prepend'
      };

      var pendant = pendantMap[place];
      if (this.$slots[pendant]) {
        el.style.transform = 'translateX(' + (place === 'suffix' ? '-' : '') + this.$el.querySelector('.el-input-group__' + pendant).offsetWidth + 'px)';
      } else {
        el.removeAttribute('style');
      }
    },
    updateIconOffset: function updateIconOffset() {
      this.calcIconOffset('prefix');
      this.calcIconOffset('suffix');
    },
    clear: function clear() {
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
    },
    handlePasswordVisible: function handlePasswordVisible() {
      this.passwordVisible = !this.passwordVisible;
      this.focus();
    },
    getInput: function getInput() {
      return this.$refs.input || this.$refs.textarea;
    },
    getSuffixVisible: function getSuffixVisible() {
      return this.$slots.suffix || this.suffixIcon || this.showClear || this.showPassword || this.isWordLimitVisible || this.validateState && this.needStatusIcon;
    }
  },

  created: function created() {
    this.$on('inputSelect', this.select);
  },
  mounted: function mounted() {
    this.setNativeInputValue();
    this.resizeTextarea();
    this.updateIconOffset();
  },
  updated: function updated() {
    this.$nextTick(this.updateIconOffset);
  }
});
// CONCATENATED MODULE: ./packages/input/src/input.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_inputvue_type_script_lang_js_ = (inputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/input/src/input.vue





/* normalize component */

var input_component = normalizeComponent(
  src_inputvue_type_script_lang_js_,
  inputvue_type_template_id_343dd774_render,
  inputvue_type_template_id_343dd774_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var input_api; }
input_component.options.__file = "packages/input/src/input.vue"
/* harmony default export */ var src_input = (input_component.exports);
// CONCATENATED MODULE: ./packages/input/index.js


/* istanbul ignore next */
src_input.install = function (Vue) {
  Vue.component(src_input.name, src_input);
};

/* harmony default export */ var packages_input = (src_input);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/input-number/src/input-number.vue?vue&type=template&id=42f8cf66&
var input_numbervue_type_template_id_42f8cf66_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: [
        "el-input-number",
        _vm.inputNumberSize ? "el-input-number--" + _vm.inputNumberSize : "",
        { "is-disabled": _vm.inputNumberDisabled },
        { "is-without-controls": !_vm.controls },
        { "is-controls-right": _vm.controlsAtRight }
      ],
      on: {
        dragstart: function($event) {
          $event.preventDefault()
        }
      }
    },
    [
      _vm.controls
        ? _c(
            "span",
            {
              directives: [
                {
                  name: "repeat-click",
                  rawName: "v-repeat-click",
                  value: _vm.decrease,
                  expression: "decrease"
                }
              ],
              staticClass: "el-input-number__decrease",
              class: { "is-disabled": _vm.minDisabled },
              attrs: { role: "button" },
              on: {
                keydown: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.decrease($event)
                }
              }
            },
            [
              _c("i", {
                class:
                  "el-icon-" + (_vm.controlsAtRight ? "arrow-down" : "minus")
              })
            ]
          )
        : _vm._e(),
      _vm.controls
        ? _c(
            "span",
            {
              directives: [
                {
                  name: "repeat-click",
                  rawName: "v-repeat-click",
                  value: _vm.increase,
                  expression: "increase"
                }
              ],
              staticClass: "el-input-number__increase",
              class: { "is-disabled": _vm.maxDisabled },
              attrs: { role: "button" },
              on: {
                keydown: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.increase($event)
                }
              }
            },
            [
              _c("i", {
                class: "el-icon-" + (_vm.controlsAtRight ? "arrow-up" : "plus")
              })
            ]
          )
        : _vm._e(),
      _c("el-input", {
        ref: "input",
        attrs: {
          value: _vm.displayValue,
          placeholder: _vm.placeholder,
          disabled: _vm.inputNumberDisabled,
          size: _vm.inputNumberSize,
          max: _vm.max,
          min: _vm.min,
          name: _vm.name,
          label: _vm.label
        },
        on: {
          blur: _vm.handleBlur,
          focus: _vm.handleFocus,
          input: _vm.handleInput,
          change: _vm.handleInputChange
        },
        nativeOn: {
          keydown: [
            function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])
              ) {
                return null
              }
              $event.preventDefault()
              return _vm.increase($event)
            },
            function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "down", 40, $event.key, [
                  "Down",
                  "ArrowDown"
                ])
              ) {
                return null
              }
              $event.preventDefault()
              return _vm.decrease($event)
            }
          ]
        }
      })
    ],
    1
  )
}
var input_numbervue_type_template_id_42f8cf66_staticRenderFns = []
input_numbervue_type_template_id_42f8cf66_render._withStripped = true


// CONCATENATED MODULE: ./packages/input-number/src/input-number.vue?vue&type=template&id=42f8cf66&

// EXTERNAL MODULE: external "element-mini-ui/lib/input"
var input_ = __webpack_require__(8);
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "element-mini-ui/lib/mixins/focus"
var focus_ = __webpack_require__(20);
var focus_default = /*#__PURE__*/__webpack_require__.n(focus_);

// EXTERNAL MODULE: external "element-mini-ui/lib/utils/dom"
var dom_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/directives/repeat-click.js


/* harmony default export */ var repeat_click = ({
  bind: function bind(el, binding, vnode) {
    var interval = null;
    var startTime = void 0;
    var handler = function handler() {
      return vnode.context[binding.expression].apply();
    };
    var clear = function clear() {
      if (Date.now() - startTime < 100) {
        handler();
      }
      clearInterval(interval);
      interval = null;
    };

    Object(dom_["on"])(el, 'mousedown', function (e) {
      if (e.button !== 0) return;
      startTime = Date.now();
      Object(dom_["once"])(document, 'mouseup', clear);
      clearInterval(interval);
      interval = setInterval(handler, 100);
    });
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/input-number/src/input-number.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var input_numbervue_type_script_lang_js_ = ({
  name: 'ElInputNumber',
  mixins: [focus_default()('input')],
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  directives: {
    repeatClick: repeat_click
  },
  components: {
    ElInput: input_default.a
  },
  props: {
    step: {
      type: Number,
      default: 1
    },
    stepStrictly: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    value: {},
    disabled: Boolean,
    size: String,
    controls: {
      type: Boolean,
      default: true
    },
    controlsPosition: {
      type: String,
      default: ''
    },
    name: String,
    label: String,
    placeholder: String,
    precision: {
      type: Number,
      validator: function validator(val) {
        return val >= 0 && val === parseInt(val, 10);
      }
    }
  },
  data: function data() {
    return {
      currentValue: 0,
      userInput: null
    };
  },

  watch: {
    value: {
      immediate: true,
      handler: function handler(value) {
        var newVal = value === undefined ? value : Number(value);
        if (newVal !== undefined) {
          if (isNaN(newVal)) {
            return;
          }

          if (this.stepStrictly) {
            var stepPrecision = this.getPrecision(this.step);
            var precisionFactor = Math.pow(10, stepPrecision);
            newVal = Math.round(newVal / this.step) * precisionFactor * this.step / precisionFactor;
          }

          if (this.precision !== undefined) {
            newVal = this.toPrecision(newVal, this.precision);
          }
        }
        if (newVal >= this.max) newVal = this.max;
        if (newVal <= this.min) newVal = this.min;
        this.currentValue = newVal;
        this.userInput = null;
        this.$emit('input', newVal);
      }
    }
  },
  computed: {
    minDisabled: function minDisabled() {
      return this._decrease(this.value, this.step) < this.min;
    },
    maxDisabled: function maxDisabled() {
      return this._increase(this.value, this.step) > this.max;
    },
    numPrecision: function numPrecision() {
      var value = this.value,
          step = this.step,
          getPrecision = this.getPrecision,
          precision = this.precision;

      var stepPrecision = getPrecision(step);
      if (precision !== undefined) {
        if (stepPrecision > precision) {
          console.warn('[Element Warn][InputNumber]precision should not be less than the decimal places of step');
        }
        return precision;
      } else {
        return Math.max(getPrecision(value), stepPrecision);
      }
    },
    controlsAtRight: function controlsAtRight() {
      return this.controls && this.controlsPosition === 'right';
    },
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    inputNumberSize: function inputNumberSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    inputNumberDisabled: function inputNumberDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
    displayValue: function displayValue() {
      if (this.userInput !== null) {
        return this.userInput;
      }

      var currentValue = this.currentValue;

      if (typeof currentValue === 'number') {
        if (this.stepStrictly) {
          var stepPrecision = this.getPrecision(this.step);
          var precisionFactor = Math.pow(10, stepPrecision);
          currentValue = Math.round(currentValue / this.step) * precisionFactor * this.step / precisionFactor;
        }

        if (this.precision !== undefined) {
          currentValue = currentValue.toFixed(this.precision);
        }
      }

      return currentValue;
    }
  },
  methods: {
    toPrecision: function toPrecision(num, precision) {
      if (precision === undefined) precision = this.numPrecision;
      return parseFloat(Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision));
    },
    getPrecision: function getPrecision(value) {
      if (value === undefined) return 0;
      var valueString = value.toString();
      var dotPosition = valueString.indexOf('.');
      var precision = 0;
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1;
      }
      return precision;
    },
    _increase: function _increase(val, step) {
      if (typeof val !== 'number' && val !== undefined) return this.currentValue;

      var precisionFactor = Math.pow(10, this.numPrecision);
      // Solve the accuracy problem of JS decimal calculation by converting the value to integer.
      return this.toPrecision((precisionFactor * val + precisionFactor * step) / precisionFactor);
    },
    _decrease: function _decrease(val, step) {
      if (typeof val !== 'number' && val !== undefined) return this.currentValue;

      var precisionFactor = Math.pow(10, this.numPrecision);

      return this.toPrecision((precisionFactor * val - precisionFactor * step) / precisionFactor);
    },
    increase: function increase() {
      if (this.inputNumberDisabled || this.maxDisabled) return;
      var value = this.value || 0;
      var newVal = this._increase(value, this.step);
      this.setCurrentValue(newVal);
    },
    decrease: function decrease() {
      if (this.inputNumberDisabled || this.minDisabled) return;
      var value = this.value || 0;
      var newVal = this._decrease(value, this.step);
      this.setCurrentValue(newVal);
    },
    handleBlur: function handleBlur(event) {
      this.$emit('blur', event);
    },
    handleFocus: function handleFocus(event) {
      this.$emit('focus', event);
    },
    setCurrentValue: function setCurrentValue(newVal) {
      var oldVal = this.currentValue;
      if (typeof newVal === 'number' && this.precision !== undefined) {
        newVal = this.toPrecision(newVal, this.precision);
      }
      if (newVal >= this.max) newVal = this.max;
      if (newVal <= this.min) newVal = this.min;
      if (oldVal === newVal) return;
      this.userInput = null;
      this.$emit('input', newVal);
      this.$emit('change', newVal, oldVal);
      this.currentValue = newVal;
    },
    handleInput: function handleInput(value) {
      this.userInput = value;
    },
    handleInputChange: function handleInputChange(value) {
      var newVal = value === '' ? undefined : Number(value);
      if (!isNaN(newVal) || value === '') {
        this.setCurrentValue(newVal);
      }
      this.userInput = null;
    },
    select: function select() {
      this.$refs.input.select();
    }
  },
  mounted: function mounted() {
    var innerInput = this.$refs.input.$refs.input;
    innerInput.setAttribute('role', 'spinbutton');
    innerInput.setAttribute('aria-valuemax', this.max);
    innerInput.setAttribute('aria-valuemin', this.min);
    innerInput.setAttribute('aria-valuenow', this.currentValue);
    innerInput.setAttribute('aria-disabled', this.inputNumberDisabled);
  },
  updated: function updated() {
    if (!this.$refs || !this.$refs.input) return;
    var innerInput = this.$refs.input.$refs.input;
    innerInput.setAttribute('aria-valuenow', this.currentValue);
  }
});
// CONCATENATED MODULE: ./packages/input-number/src/input-number.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_input_numbervue_type_script_lang_js_ = (input_numbervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/input-number/src/input-number.vue





/* normalize component */

var input_number_component = normalizeComponent(
  src_input_numbervue_type_script_lang_js_,
  input_numbervue_type_template_id_42f8cf66_render,
  input_numbervue_type_template_id_42f8cf66_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var input_number_api; }
input_number_component.options.__file = "packages/input-number/src/input-number.vue"
/* harmony default export */ var input_number = (input_number_component.exports);
// CONCATENATED MODULE: ./packages/input-number/index.js


/* istanbul ignore next */
input_number.install = function (Vue) {
  Vue.component(input_number.name, input_number);
};

/* harmony default export */ var packages_input_number = (input_number);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/autocomplete/src/autocomplete.vue?vue&type=template&id=152f2ee6&
var autocompletevue_type_template_id_152f2ee6_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "clickoutside",
          rawName: "v-clickoutside",
          value: _vm.close,
          expression: "close"
        }
      ],
      staticClass: "el-autocomplete",
      attrs: {
        "aria-haspopup": "listbox",
        role: "combobox",
        "aria-expanded": _vm.suggestionVisible,
        "aria-owns": _vm.id
      }
    },
    [
      _c(
        "el-input",
        _vm._b(
          {
            ref: "input",
            on: {
              input: _vm.handleChange,
              focus: _vm.handleFocus,
              blur: _vm.handleBlur,
              clear: _vm.handleClear
            },
            nativeOn: {
              keydown: [
                function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "up", 38, $event.key, [
                      "Up",
                      "ArrowUp"
                    ])
                  ) {
                    return null
                  }
                  $event.preventDefault()
                  return _vm.highlight(_vm.highlightedIndex - 1)
                },
                function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "down", 40, $event.key, [
                      "Down",
                      "ArrowDown"
                    ])
                  ) {
                    return null
                  }
                  $event.preventDefault()
                  return _vm.highlight(_vm.highlightedIndex + 1)
                },
                function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.handleKeyEnter($event)
                },
                function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")
                  ) {
                    return null
                  }
                  return _vm.close($event)
                }
              ]
            }
          },
          "el-input",
          [_vm.$props, _vm.$attrs],
          false
        ),
        [
          _vm.$slots.prepend
            ? _c("template", { slot: "prepend" }, [_vm._t("prepend")], 2)
            : _vm._e(),
          _vm.$slots.append
            ? _c("template", { slot: "append" }, [_vm._t("append")], 2)
            : _vm._e(),
          _vm.$slots.prefix
            ? _c("template", { slot: "prefix" }, [_vm._t("prefix")], 2)
            : _vm._e(),
          _vm.$slots.suffix
            ? _c("template", { slot: "suffix" }, [_vm._t("suffix")], 2)
            : _vm._e()
        ],
        2
      ),
      _c(
        "el-autocomplete-suggestions",
        {
          ref: "suggestions",
          class: [_vm.popperClass ? _vm.popperClass : ""],
          attrs: {
            "visible-arrow": "",
            "popper-options": _vm.popperOptions,
            "append-to-body": _vm.popperAppendToBody,
            placement: _vm.placement,
            id: _vm.id
          }
        },
        _vm._l(_vm.suggestions, function(item, index) {
          return _c(
            "li",
            {
              key: index,
              class: { highlighted: _vm.highlightedIndex === index },
              attrs: {
                id: _vm.id + "-item-" + index,
                role: "option",
                "aria-selected": _vm.highlightedIndex === index
              },
              on: {
                click: function($event) {
                  return _vm.select(item)
                }
              }
            },
            [
              _vm._t(
                "default",
                [
                  _vm._v("\n        " + _vm._s(item[_vm.valueKey]) + "\n      ")
                ],
                { item: item }
              )
            ],
            2
          )
        }),
        0
      )
    ],
    1
  )
}
var autocompletevue_type_template_id_152f2ee6_staticRenderFns = []
autocompletevue_type_template_id_152f2ee6_render._withStripped = true


// CONCATENATED MODULE: ./packages/autocomplete/src/autocomplete.vue?vue&type=template&id=152f2ee6&

// EXTERNAL MODULE: external "throttle-debounce/debounce"
var debounce_ = __webpack_require__(11);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// EXTERNAL MODULE: external "element-mini-ui/lib/utils/clickoutside"
var clickoutside_ = __webpack_require__(10);
var clickoutside_default = /*#__PURE__*/__webpack_require__.n(clickoutside_);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/autocomplete/src/autocomplete-suggestions.vue?vue&type=template&id=cd10dcf0&
var autocomplete_suggestionsvue_type_template_id_cd10dcf0_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    { attrs: { name: "el-zoom-in-top" }, on: { "after-leave": _vm.doDestroy } },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showPopper,
              expression: "showPopper"
            }
          ],
          staticClass: "el-autocomplete-suggestion el-popper",
          class: {
            "is-loading": !_vm.parent.hideLoading && _vm.parent.loading
          },
          style: { width: _vm.dropdownWidth },
          attrs: { role: "region" }
        },
        [
          _c(
            "el-scrollbar",
            {
              attrs: {
                tag: "ul",
                "wrap-class": "el-autocomplete-suggestion__wrap",
                "view-class": "el-autocomplete-suggestion__list"
              }
            },
            [
              !_vm.parent.hideLoading && _vm.parent.loading
                ? _c("li", [_c("i", { staticClass: "el-icon-loading" })])
                : _vm._t("default")
            ],
            2
          )
        ],
        1
      )
    ]
  )
}
var autocomplete_suggestionsvue_type_template_id_cd10dcf0_staticRenderFns = []
autocomplete_suggestionsvue_type_template_id_cd10dcf0_render._withStripped = true


// CONCATENATED MODULE: ./packages/autocomplete/src/autocomplete-suggestions.vue?vue&type=template&id=cd10dcf0&

// EXTERNAL MODULE: external "element-mini-ui/lib/utils/vue-popper"
var vue_popper_ = __webpack_require__(5);
var vue_popper_default = /*#__PURE__*/__webpack_require__.n(vue_popper_);

// EXTERNAL MODULE: external "element-mini-ui/lib/scrollbar"
var scrollbar_ = __webpack_require__(16);
var scrollbar_default = /*#__PURE__*/__webpack_require__.n(scrollbar_);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/autocomplete/src/autocomplete-suggestions.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var autocomplete_suggestionsvue_type_script_lang_js_ = ({
  components: { ElScrollbar: scrollbar_default.a },
  mixins: [vue_popper_default.a, emitter_default.a],

  componentName: 'ElAutocompleteSuggestions',

  data: function data() {
    return {
      parent: this.$parent,
      dropdownWidth: ''
    };
  },


  props: {
    options: {
      default: function _default() {
        return {
          gpuAcceleration: false
        };
      }
    },
    id: String
  },

  methods: {
    select: function select(item) {
      this.dispatch('ElAutocomplete', 'item-click', item);
    }
  },

  updated: function updated() {
    var _this = this;

    this.$nextTick(function (_) {
      _this.popperJS && _this.updatePopper();
    });
  },
  mounted: function mounted() {
    this.$parent.popperElm = this.popperElm = this.$el;
    this.referenceElm = this.$parent.$refs.input.$refs.input;
    this.referenceList = this.$el.querySelector('.el-autocomplete-suggestion__list');
    this.referenceList.setAttribute('role', 'listbox');
    this.referenceList.setAttribute('id', this.id);
  },
  created: function created() {
    var _this2 = this;

    this.$on('visible', function (val, inputWidth) {
      _this2.dropdownWidth = inputWidth + 'px';
      _this2.showPopper = val;
    });
  }
});
// CONCATENATED MODULE: ./packages/autocomplete/src/autocomplete-suggestions.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_autocomplete_suggestionsvue_type_script_lang_js_ = (autocomplete_suggestionsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/autocomplete/src/autocomplete-suggestions.vue





/* normalize component */

var autocomplete_suggestions_component = normalizeComponent(
  src_autocomplete_suggestionsvue_type_script_lang_js_,
  autocomplete_suggestionsvue_type_template_id_cd10dcf0_render,
  autocomplete_suggestionsvue_type_template_id_cd10dcf0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var autocomplete_suggestions_api; }
autocomplete_suggestions_component.options.__file = "packages/autocomplete/src/autocomplete-suggestions.vue"
/* harmony default export */ var autocomplete_suggestions = (autocomplete_suggestions_component.exports);
// EXTERNAL MODULE: external "element-mini-ui/lib/utils/util"
var util_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/autocomplete/src/autocomplete.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var autocompletevue_type_script_lang_js_ = ({
  name: 'ElAutocomplete',

  mixins: [emitter_default.a, focus_default()('input'), migrating_default.a],

  inheritAttrs: false,

  componentName: 'ElAutocomplete',

  components: {
    ElInput: input_default.a,
    ElAutocompleteSuggestions: autocomplete_suggestions
  },

  directives: { Clickoutside: clickoutside_default.a },

  props: {
    valueKey: {
      type: String,
      default: 'value'
    },
    popperClass: String,
    popperOptions: Object,
    placeholder: String,
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    name: String,
    size: String,
    value: String,
    maxlength: Number,
    minlength: Number,
    autofocus: Boolean,
    fetchSuggestions: Function,
    triggerOnFocus: {
      type: Boolean,
      default: true
    },
    customItem: String,
    selectWhenUnmatched: {
      type: Boolean,
      default: false
    },
    prefixIcon: String,
    suffixIcon: String,
    label: String,
    debounce: {
      type: Number,
      default: 300
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    hideLoading: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    highlightFirstItem: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      activated: false,
      suggestions: [],
      loading: false,
      highlightedIndex: -1,
      suggestionDisabled: false
    };
  },

  computed: {
    suggestionVisible: function suggestionVisible() {
      var suggestions = this.suggestions;
      var isValidData = Array.isArray(suggestions) && suggestions.length > 0;
      return (isValidData || this.loading) && this.activated;
    },
    id: function id() {
      return 'el-autocomplete-' + Object(util_["generateId"])();
    }
  },
  watch: {
    suggestionVisible: function suggestionVisible(val) {
      var $input = this.getInput();
      if ($input) {
        this.broadcast('ElAutocompleteSuggestions', 'visible', [val, $input.offsetWidth]);
      }
    }
  },
  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'custom-item': 'custom-item is removed, use scoped slot instead.',
          'props': 'props is removed, use value-key instead.'
        }
      };
    },
    getData: function getData(queryString) {
      var _this = this;

      if (this.suggestionDisabled) {
        return;
      }
      this.loading = true;
      this.fetchSuggestions(queryString, function (suggestions) {
        _this.loading = false;
        if (_this.suggestionDisabled) {
          return;
        }
        if (Array.isArray(suggestions)) {
          _this.suggestions = suggestions;
          _this.highlightedIndex = _this.highlightFirstItem ? 0 : -1;
        } else {
          console.error('[Element Error][Autocomplete]autocomplete suggestions must be an array');
        }
      });
    },
    handleChange: function handleChange(value) {
      this.$emit('input', value);
      this.suggestionDisabled = false;
      if (!this.triggerOnFocus && !value) {
        this.suggestionDisabled = true;
        this.suggestions = [];
        return;
      }
      this.debouncedGetData(value);
    },
    handleFocus: function handleFocus(event) {
      this.activated = true;
      this.$emit('focus', event);
      if (this.triggerOnFocus) {
        this.debouncedGetData(this.value);
      }
    },
    handleBlur: function handleBlur(event) {
      this.$emit('blur', event);
    },
    handleClear: function handleClear() {
      this.activated = false;
      this.$emit('clear');
    },
    close: function close(e) {
      this.activated = false;
    },
    handleKeyEnter: function handleKeyEnter(e) {
      var _this2 = this;

      if (this.suggestionVisible && this.highlightedIndex >= 0 && this.highlightedIndex < this.suggestions.length) {
        e.preventDefault();
        this.select(this.suggestions[this.highlightedIndex]);
      } else if (this.selectWhenUnmatched) {
        this.$emit('select', { value: this.value });
        this.$nextTick(function (_) {
          _this2.suggestions = [];
          _this2.highlightedIndex = -1;
        });
      }
    },
    select: function select(item) {
      var _this3 = this;

      this.$emit('input', item[this.valueKey]);
      this.$emit('select', item);
      this.$nextTick(function (_) {
        _this3.suggestions = [];
        _this3.highlightedIndex = -1;
      });
    },
    highlight: function highlight(index) {
      if (!this.suggestionVisible || this.loading) {
        return;
      }
      if (index < 0) {
        this.highlightedIndex = -1;
        return;
      }
      if (index >= this.suggestions.length) {
        index = this.suggestions.length - 1;
      }
      var suggestion = this.$refs.suggestions.$el.querySelector('.el-autocomplete-suggestion__wrap');
      var suggestionList = suggestion.querySelectorAll('.el-autocomplete-suggestion__list li');

      var highlightItem = suggestionList[index];
      var scrollTop = suggestion.scrollTop;
      var offsetTop = highlightItem.offsetTop;

      if (offsetTop + highlightItem.scrollHeight > scrollTop + suggestion.clientHeight) {
        suggestion.scrollTop += highlightItem.scrollHeight;
      }
      if (offsetTop < scrollTop) {
        suggestion.scrollTop -= highlightItem.scrollHeight;
      }
      this.highlightedIndex = index;
      var $input = this.getInput();
      $input.setAttribute('aria-activedescendant', this.id + '-item-' + this.highlightedIndex);
    },
    getInput: function getInput() {
      return this.$refs.input.getInput();
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    this.debouncedGetData = debounce_default()(this.debounce, this.getData);
    this.$on('item-click', function (item) {
      _this4.select(item);
    });
    var $input = this.getInput();
    $input.setAttribute('role', 'textbox');
    $input.setAttribute('aria-autocomplete', 'list');
    $input.setAttribute('aria-controls', 'id');
    $input.setAttribute('aria-activedescendant', this.id + '-item-' + this.highlightedIndex);
  },
  beforeDestroy: function beforeDestroy() {
    this.$refs.suggestions.$destroy();
  }
});
// CONCATENATED MODULE: ./packages/autocomplete/src/autocomplete.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_autocompletevue_type_script_lang_js_ = (autocompletevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/autocomplete/src/autocomplete.vue





/* normalize component */

var autocomplete_component = normalizeComponent(
  src_autocompletevue_type_script_lang_js_,
  autocompletevue_type_template_id_152f2ee6_render,
  autocompletevue_type_template_id_152f2ee6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var autocomplete_api; }
autocomplete_component.options.__file = "packages/autocomplete/src/autocomplete.vue"
/* harmony default export */ var autocomplete = (autocomplete_component.exports);
// CONCATENATED MODULE: ./packages/autocomplete/index.js


/* istanbul ignore next */
autocomplete.install = function (Vue) {
  Vue.component(autocomplete.name, autocomplete);
};

/* harmony default export */ var packages_autocomplete = (autocomplete);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/select/src/select.vue?vue&type=template&id=0e4aade6&
var selectvue_type_template_id_0e4aade6_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "clickoutside",
          rawName: "v-clickoutside",
          value: _vm.handleClose,
          expression: "handleClose"
        }
      ],
      staticClass: "el-select",
      class: [_vm.selectSize ? "el-select--" + _vm.selectSize : ""],
      on: {
        click: function($event) {
          $event.stopPropagation()
          return _vm.toggleMenu($event)
        }
      }
    },
    [
      _vm.multiple
        ? _c(
            "div",
            {
              ref: "tags",
              staticClass: "el-select__tags",
              style: { "max-width": _vm.inputWidth - 32 + "px", width: "100%" }
            },
            [
              _vm.collapseTags && _vm.selected.length
                ? _c(
                    "span",
                    [
                      _c(
                        "el-tag",
                        {
                          attrs: {
                            closable: !_vm.selectDisabled,
                            size: _vm.collapseTagSize,
                            hit: _vm.selected[0].hitState,
                            type: "info",
                            "disable-transitions": ""
                          },
                          on: {
                            close: function($event) {
                              return _vm.deleteTag($event, _vm.selected[0])
                            }
                          }
                        },
                        [
                          _c("span", { staticClass: "el-select__tags-text" }, [
                            _vm._v(_vm._s(_vm.selected[0].currentLabel))
                          ])
                        ]
                      ),
                      _vm.selected.length > 1
                        ? _c(
                            "el-tag",
                            {
                              attrs: {
                                closable: false,
                                size: _vm.collapseTagSize,
                                type: "info",
                                "disable-transitions": ""
                              }
                            },
                            [
                              _c(
                                "span",
                                { staticClass: "el-select__tags-text" },
                                [_vm._v("+ " + _vm._s(_vm.selected.length - 1))]
                              )
                            ]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                : _vm._e(),
              !_vm.collapseTags
                ? _c(
                    "transition-group",
                    { on: { "after-leave": _vm.resetInputHeight } },
                    _vm._l(_vm.selected, function(item) {
                      return _c(
                        "el-tag",
                        {
                          key: _vm.getValueKey(item),
                          attrs: {
                            closable: !_vm.selectDisabled,
                            size: _vm.collapseTagSize,
                            hit: item.hitState,
                            type: "info",
                            "disable-transitions": ""
                          },
                          on: {
                            close: function($event) {
                              return _vm.deleteTag($event, item)
                            }
                          }
                        },
                        [
                          _c("span", { staticClass: "el-select__tags-text" }, [
                            _vm._v(_vm._s(item.currentLabel))
                          ])
                        ]
                      )
                    }),
                    1
                  )
                : _vm._e(),
              _vm.filterable
                ? _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.query,
                        expression: "query"
                      }
                    ],
                    ref: "input",
                    staticClass: "el-select__input",
                    class: [_vm.selectSize ? "is-" + _vm.selectSize : ""],
                    style: {
                      "flex-grow": "1",
                      width: _vm.inputLength / (_vm.inputWidth - 32) + "%",
                      "max-width": _vm.inputWidth - 42 + "px"
                    },
                    attrs: {
                      type: "text",
                      disabled: _vm.selectDisabled,
                      autocomplete: _vm.autoComplete || _vm.autocomplete
                    },
                    domProps: { value: _vm.query },
                    on: {
                      focus: _vm.handleFocus,
                      blur: function($event) {
                        _vm.softFocus = false
                      },
                      click: function($event) {
                        $event.stopPropagation()
                      },
                      keyup: _vm.managePlaceholder,
                      keydown: [
                        _vm.resetInputState,
                        function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k($event.keyCode, "down", 40, $event.key, [
                              "Down",
                              "ArrowDown"
                            ])
                          ) {
                            return null
                          }
                          $event.preventDefault()
                          return _vm.navigateOptions("next")
                        },
                        function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k($event.keyCode, "up", 38, $event.key, [
                              "Up",
                              "ArrowUp"
                            ])
                          ) {
                            return null
                          }
                          $event.preventDefault()
                          return _vm.navigateOptions("prev")
                        },
                        function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          $event.preventDefault()
                          return _vm.selectOption($event)
                        },
                        function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k($event.keyCode, "esc", 27, $event.key, [
                              "Esc",
                              "Escape"
                            ])
                          ) {
                            return null
                          }
                          $event.stopPropagation()
                          $event.preventDefault()
                          _vm.visible = false
                        },
                        function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "delete",
                              [8, 46],
                              $event.key,
                              ["Backspace", "Delete", "Del"]
                            )
                          ) {
                            return null
                          }
                          return _vm.deletePrevTag($event)
                        }
                      ],
                      compositionstart: _vm.handleComposition,
                      compositionupdate: _vm.handleComposition,
                      compositionend: _vm.handleComposition,
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.query = $event.target.value
                        },
                        _vm.debouncedQueryChange
                      ]
                    }
                  })
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _c(
        "el-input",
        {
          ref: "reference",
          class: { "is-focus": _vm.visible },
          attrs: {
            type: "text",
            placeholder: _vm.currentPlaceholder,
            name: _vm.name,
            id: _vm.id,
            autocomplete: _vm.autoComplete || _vm.autocomplete,
            size: _vm.selectSize,
            disabled: _vm.selectDisabled,
            readonly: _vm.readonly,
            "validate-event": false
          },
          on: { focus: _vm.handleFocus, blur: _vm.handleBlur },
          nativeOn: {
            keyup: function($event) {
              return _vm.debouncedOnInputChange($event)
            },
            keydown: [
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "down", 40, $event.key, [
                    "Down",
                    "ArrowDown"
                  ])
                ) {
                  return null
                }
                $event.stopPropagation()
                $event.preventDefault()
                return _vm.navigateOptions("next")
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "up", 38, $event.key, [
                    "Up",
                    "ArrowUp"
                  ])
                ) {
                  return null
                }
                $event.stopPropagation()
                $event.preventDefault()
                return _vm.navigateOptions("prev")
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                $event.preventDefault()
                return _vm.selectOption($event)
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "esc", 27, $event.key, [
                    "Esc",
                    "Escape"
                  ])
                ) {
                  return null
                }
                $event.stopPropagation()
                $event.preventDefault()
                _vm.visible = false
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")
                ) {
                  return null
                }
                _vm.visible = false
              }
            ],
            paste: function($event) {
              return _vm.debouncedOnInputChange($event)
            },
            mouseenter: function($event) {
              _vm.inputHovering = true
            },
            mouseleave: function($event) {
              _vm.inputHovering = false
            }
          },
          model: {
            value: _vm.selectedLabel,
            callback: function($$v) {
              _vm.selectedLabel = $$v
            },
            expression: "selectedLabel"
          }
        },
        [
          _vm.$slots.prefix
            ? _c("template", { slot: "prefix" }, [_vm._t("prefix")], 2)
            : _vm._e(),
          _c("template", { slot: "suffix" }, [
            _c("i", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.showClose,
                  expression: "!showClose"
                }
              ],
              class: [
                "el-select__caret",
                "el-input__icon",
                "el-icon-" + _vm.iconClass
              ]
            }),
            _vm.showClose
              ? _c("i", {
                  staticClass:
                    "el-select__caret el-input__icon el-icon-circle-close",
                  on: { click: _vm.handleClearClick }
                })
              : _vm._e()
          ])
        ],
        2
      ),
      _c(
        "transition",
        {
          attrs: { name: "el-zoom-in-top" },
          on: {
            "before-enter": _vm.handleMenuEnter,
            "after-leave": _vm.doDestroy
          }
        },
        [
          _c(
            "el-select-menu",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.visible && _vm.emptyText !== false,
                  expression: "visible && emptyText !== false"
                }
              ],
              ref: "popper",
              attrs: { "append-to-body": _vm.popperAppendToBody }
            },
            [
              _c(
                "el-scrollbar",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.options.length > 0 && !_vm.loading,
                      expression: "options.length > 0 && !loading"
                    }
                  ],
                  ref: "scrollbar",
                  class: {
                    "is-empty":
                      !_vm.allowCreate &&
                      _vm.query &&
                      _vm.filteredOptionsCount === 0
                  },
                  attrs: {
                    tag: "ul",
                    "wrap-class": "el-select-dropdown__wrap",
                    "view-class": "el-select-dropdown__list"
                  }
                },
                [
                  _vm.showNewOption
                    ? _c("el-option", {
                        attrs: { value: _vm.query, created: "" }
                      })
                    : _vm._e(),
                  _vm._t("default")
                ],
                2
              ),
              _vm.emptyText &&
              (!_vm.allowCreate ||
                _vm.loading ||
                (_vm.allowCreate && _vm.options.length === 0))
                ? [
                    _vm.$slots.empty
                      ? _vm._t("empty")
                      : _c("p", { staticClass: "el-select-dropdown__empty" }, [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.emptyText) +
                              "\n        "
                          )
                        ])
                  ]
                : _vm._e()
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var selectvue_type_template_id_0e4aade6_staticRenderFns = []
selectvue_type_template_id_0e4aade6_render._withStripped = true


// CONCATENATED MODULE: ./packages/select/src/select.vue?vue&type=template&id=0e4aade6&

// EXTERNAL MODULE: external "element-mini-ui/lib/mixins/locale"
var locale_ = __webpack_require__(6);
var locale_default = /*#__PURE__*/__webpack_require__.n(locale_);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/select/src/select-dropdown.vue?vue&type=template&id=06828748&
var select_dropdownvue_type_template_id_06828748_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "el-select-dropdown el-popper",
      class: [{ "is-multiple": _vm.$parent.multiple }, _vm.popperClass],
      style: { minWidth: _vm.minWidth }
    },
    [_vm._t("default")],
    2
  )
}
var select_dropdownvue_type_template_id_06828748_staticRenderFns = []
select_dropdownvue_type_template_id_06828748_render._withStripped = true


// CONCATENATED MODULE: ./packages/select/src/select-dropdown.vue?vue&type=template&id=06828748&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/select/src/select-dropdown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//



/* harmony default export */ var select_dropdownvue_type_script_lang_js_ = ({
  name: 'ElSelectDropdown',

  componentName: 'ElSelectDropdown',

  mixins: [vue_popper_default.a],

  props: {
    placement: {
      default: 'bottom-start'
    },

    boundariesPadding: {
      default: 0
    },

    popperOptions: {
      default: function _default() {
        return {
          gpuAcceleration: false
        };
      }
    },

    visibleArrow: {
      default: true
    },

    appendToBody: {
      type: Boolean,
      default: true
    }
  },

  data: function data() {
    return {
      minWidth: ''
    };
  },


  computed: {
    popperClass: function popperClass() {
      return this.$parent.popperClass;
    }
  },

  watch: {
    '$parent.inputWidth': function $parentInputWidth() {
      this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px';
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.referenceElm = this.$parent.$refs.reference.$el;
    this.$parent.popperElm = this.popperElm = this.$el;
    this.$on('updatePopper', function () {
      if (_this.$parent.visible) _this.updatePopper();
    });
    this.$on('destroyPopper', this.destroyPopper);
  }
});
// CONCATENATED MODULE: ./packages/select/src/select-dropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_select_dropdownvue_type_script_lang_js_ = (select_dropdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/select/src/select-dropdown.vue





/* normalize component */

var select_dropdown_component = normalizeComponent(
  src_select_dropdownvue_type_script_lang_js_,
  select_dropdownvue_type_template_id_06828748_render,
  select_dropdownvue_type_template_id_06828748_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var select_dropdown_api; }
select_dropdown_component.options.__file = "packages/select/src/select-dropdown.vue"
/* harmony default export */ var select_dropdown = (select_dropdown_component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/select/src/option.vue?vue&type=template&id=7a44c642&
var optionvue_type_template_id_7a44c642_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.visible,
          expression: "visible"
        }
      ],
      staticClass: "el-select-dropdown__item",
      class: {
        selected: _vm.itemSelected,
        "is-disabled": _vm.disabled || _vm.groupDisabled || _vm.limitReached,
        hover: _vm.hover
      },
      on: {
        mouseenter: _vm.hoverItem,
        click: function($event) {
          $event.stopPropagation()
          return _vm.selectOptionClick($event)
        }
      }
    },
    [_vm._t("default", [_c("span", [_vm._v(_vm._s(_vm.currentLabel))])])],
    2
  )
}
var optionvue_type_template_id_7a44c642_staticRenderFns = []
optionvue_type_template_id_7a44c642_render._withStripped = true


// CONCATENATED MODULE: ./packages/select/src/option.vue?vue&type=template&id=7a44c642&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/select/src/option.vue?vue&type=script&lang=js&
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var optionvue_type_script_lang_js_ = ({
  mixins: [emitter_default.a],

  name: 'ElOption',

  componentName: 'ElOption',

  inject: ['select'],

  props: {
    value: {
      required: true
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false
    };
  },


  computed: {
    isObject: function isObject() {
      return Object.prototype.toString.call(this.value).toLowerCase() === '[object object]';
    },
    currentLabel: function currentLabel() {
      return this.label || (this.isObject ? '' : this.value);
    },
    currentValue: function currentValue() {
      return this.value || this.label || '';
    },
    itemSelected: function itemSelected() {
      if (!this.select.multiple) {
        return this.isEqual(this.value, this.select.value);
      } else {
        return this.contains(this.select.value, this.value);
      }
    },
    limitReached: function limitReached() {
      if (this.select.multiple) {
        return !this.itemSelected && (this.select.value || []).length >= this.select.multipleLimit && this.select.multipleLimit > 0;
      } else {
        return false;
      }
    }
  },

  watch: {
    currentLabel: function currentLabel() {
      if (!this.created && !this.select.remote) this.dispatch('ElSelect', 'setSelected');
    },
    value: function value(val, oldVal) {
      var _select = this.select,
          remote = _select.remote,
          valueKey = _select.valueKey;

      if (!this.created && !remote) {
        if (valueKey && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && (typeof oldVal === 'undefined' ? 'undefined' : _typeof(oldVal)) === 'object' && val[valueKey] === oldVal[valueKey]) {
          return;
        }
        this.dispatch('ElSelect', 'setSelected');
      }
    }
  },

  methods: {
    isEqual: function isEqual(a, b) {
      if (!this.isObject) {
        return a === b;
      } else {
        var valueKey = this.select.valueKey;
        return Object(util_["getValueByPath"])(a, valueKey) === Object(util_["getValueByPath"])(b, valueKey);
      }
    },
    contains: function contains() {
      var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var target = arguments[1];

      if (!this.isObject) {
        return arr && arr.indexOf(target) > -1;
      } else {
        var valueKey = this.select.valueKey;
        return arr && arr.some(function (item) {
          return Object(util_["getValueByPath"])(item, valueKey) === Object(util_["getValueByPath"])(target, valueKey);
        });
      }
    },
    handleGroupDisabled: function handleGroupDisabled(val) {
      this.groupDisabled = val;
    },
    hoverItem: function hoverItem() {
      if (!this.disabled && !this.groupDisabled) {
        this.select.hoverIndex = this.select.options.indexOf(this);
      }
    },
    selectOptionClick: function selectOptionClick() {
      if (this.disabled !== true && this.groupDisabled !== true) {
        this.dispatch('ElSelect', 'handleOptionClick', [this, true]);
      }
    },
    queryChange: function queryChange(query) {
      this.visible = new RegExp(Object(util_["escapeRegexpString"])(query), 'i').test(this.currentLabel) || this.created;
      if (!this.visible) {
        this.select.filteredOptionsCount--;
      }
    }
  },

  created: function created() {
    this.select.options.push(this);
    this.select.cachedOptions.push(this);
    this.select.optionsCount++;
    this.select.filteredOptionsCount++;

    this.$on('queryChange', this.queryChange);
    this.$on('handleGroupDisabled', this.handleGroupDisabled);
  },
  beforeDestroy: function beforeDestroy() {
    this.select.onOptionDestroy(this.select.options.indexOf(this));
  }
});
// CONCATENATED MODULE: ./packages/select/src/option.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_optionvue_type_script_lang_js_ = (optionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/select/src/option.vue





/* normalize component */

var option_component = normalizeComponent(
  src_optionvue_type_script_lang_js_,
  optionvue_type_template_id_7a44c642_render,
  optionvue_type_template_id_7a44c642_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var option_api; }
option_component.options.__file = "packages/select/src/option.vue"
/* harmony default export */ var src_option = (option_component.exports);
// EXTERNAL MODULE: external "element-mini-ui/lib/tag"
var tag_ = __webpack_require__(28);
var tag_default = /*#__PURE__*/__webpack_require__.n(tag_);

// EXTERNAL MODULE: external "element-mini-ui/lib/utils/resize-event"
var resize_event_ = __webpack_require__(12);

// EXTERNAL MODULE: external "element-mini-ui/lib/locale"
var lib_locale_ = __webpack_require__(15);
var lib_locale_default = /*#__PURE__*/__webpack_require__.n(lib_locale_);

// EXTERNAL MODULE: external "element-mini-ui/lib/utils/scroll-into-view"
var scroll_into_view_ = __webpack_require__(22);
var scroll_into_view_default = /*#__PURE__*/__webpack_require__.n(scroll_into_view_);

// CONCATENATED MODULE: ./packages/select/src/navigation-mixin.js
/* harmony default export */ var navigation_mixin = ({
  data: function data() {
    return {
      hoverOption: -1
    };
  },


  computed: {
    optionsAllDisabled: function optionsAllDisabled() {
      return this.options.filter(function (option) {
        return option.visible;
      }).every(function (option) {
        return option.disabled;
      });
    }
  },

  watch: {
    hoverIndex: function hoverIndex(val) {
      var _this = this;

      if (typeof val === 'number' && val > -1) {
        this.hoverOption = this.options[val] || {};
      }
      this.options.forEach(function (option) {
        option.hover = _this.hoverOption === option;
      });
    }
  },

  methods: {
    navigateOptions: function navigateOptions(direction) {
      var _this2 = this;

      if (!this.visible) {
        this.visible = true;
        return;
      }
      if (this.options.length === 0 || this.filteredOptionsCount === 0) return;
      if (!this.optionsAllDisabled) {
        if (direction === 'next') {
          this.hoverIndex++;
          if (this.hoverIndex === this.options.length) {
            this.hoverIndex = 0;
          }
        } else if (direction === 'prev') {
          this.hoverIndex--;
          if (this.hoverIndex < 0) {
            this.hoverIndex = this.options.length - 1;
          }
        }
        var option = this.options[this.hoverIndex];
        if (option.disabled === true || option.groupDisabled === true || !option.visible) {
          this.navigateOptions(direction);
        }
        this.$nextTick(function () {
          return _this2.scrollToOption(_this2.hoverOption);
        });
      }
    }
  }
});
// EXTERNAL MODULE: external "element-mini-ui/lib/utils/shared"
var shared_ = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/select/src/select.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


















/* harmony default export */ var selectvue_type_script_lang_js_ = ({
  mixins: [emitter_default.a, locale_default.a, focus_default()('reference'), navigation_mixin],

  name: 'ElSelect',

  componentName: 'ElSelect',

  inject: {
    elForm: {
      default: ''
    },

    elFormItem: {
      default: ''
    }
  },

  provide: function provide() {
    return {
      'select': this
    };
  },


  computed: {
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    readonly: function readonly() {
      return !this.filterable || this.multiple || !Object(util_["isIE"])() && !Object(util_["isEdge"])() && !this.visible;
    },
    showClose: function showClose() {
      var hasValue = this.multiple ? Array.isArray(this.value) && this.value.length > 0 : this.value !== undefined && this.value !== null && this.value !== '';
      var criteria = this.clearable && !this.selectDisabled && this.inputHovering && hasValue;
      return criteria;
    },
    iconClass: function iconClass() {
      return this.remote && this.filterable ? '' : this.visible ? 'arrow-up is-reverse' : 'arrow-up';
    },
    debounce: function debounce() {
      return this.remote ? 300 : 0;
    },
    emptyText: function emptyText() {
      if (this.loading) {
        return this.loadingText || this.t('el.select.loading');
      } else {
        if (this.remote && this.query === '' && this.options.length === 0) return false;
        if (this.filterable && this.query && this.options.length > 0 && this.filteredOptionsCount === 0) {
          return this.noMatchText || this.t('el.select.noMatch');
        }
        if (this.options.length === 0) {
          return this.noDataText || this.t('el.select.noData');
        }
      }
      return null;
    },
    showNewOption: function showNewOption() {
      var _this = this;

      var hasExistingOption = this.options.filter(function (option) {
        return !option.created;
      }).some(function (option) {
        return option.currentLabel === _this.query;
      });
      return this.filterable && this.allowCreate && this.query !== '' && !hasExistingOption;
    },
    selectSize: function selectSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    selectDisabled: function selectDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
    collapseTagSize: function collapseTagSize() {
      return ['small', 'mini'].indexOf(this.selectSize) > -1 ? 'mini' : 'small';
    }
  },

  components: {
    ElInput: input_default.a,
    ElSelectMenu: select_dropdown,
    ElOption: src_option,
    ElTag: tag_default.a,
    ElScrollbar: scrollbar_default.a
  },

  directives: { Clickoutside: clickoutside_default.a },

  props: {
    name: String,
    id: String,
    value: {
      required: true
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    /** @Deprecated in next major version */
    autoComplete: {
      type: String,
      validator: function validator(val) {
         false && false;
        return true;
      }
    },
    automaticDropdown: Boolean,
    size: String,
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: String,
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String,
      default: function _default() {
        return Object(lib_locale_["t"])('el.select.placeholder');
      }
    },
    defaultFirstOption: Boolean,
    reserveKeyword: Boolean,
    valueKey: {
      type: String,
      default: 'value'
    },
    collapseTags: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true
    }
  },

  data: function data() {
    return {
      options: [],
      cachedOptions: [],
      createdLabel: null,
      createdSelected: false,
      selected: this.multiple ? [] : {},
      inputLength: 20,
      inputWidth: 0,
      initialInputHeight: 0,
      cachedPlaceHolder: '',
      optionsCount: 0,
      filteredOptionsCount: 0,
      visible: false,
      softFocus: false,
      selectedLabel: '',
      hoverIndex: -1,
      query: '',
      previousQuery: null,
      inputHovering: false,
      currentPlaceholder: '',
      menuVisibleOnFocus: false,
      isOnComposition: false,
      isSilentBlur: false
    };
  },


  watch: {
    selectDisabled: function selectDisabled() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.resetInputHeight();
      });
    },
    placeholder: function placeholder(val) {
      this.cachedPlaceHolder = this.currentPlaceholder = val;
    },
    value: function value(val, oldVal) {
      if (this.multiple) {
        this.resetInputHeight();
        if (val && val.length > 0 || this.$refs.input && this.query !== '') {
          this.currentPlaceholder = '';
        } else {
          this.currentPlaceholder = this.cachedPlaceHolder;
        }
        if (this.filterable && !this.reserveKeyword) {
          this.query = '';
          this.handleQueryChange(this.query);
        }
      }
      this.setSelected();
      if (this.filterable && !this.multiple) {
        this.inputLength = 20;
      }
      if (!Object(util_["valueEquals"])(val, oldVal)) {
        this.dispatch('ElFormItem', 'el.form.change', val);
      }
    },
    visible: function visible(val) {
      var _this3 = this;

      if (!val) {
        this.broadcast('ElSelectDropdown', 'destroyPopper');
        if (this.$refs.input) {
          this.$refs.input.blur();
        }
        this.query = '';
        this.previousQuery = null;
        this.selectedLabel = '';
        this.inputLength = 20;
        this.menuVisibleOnFocus = false;
        this.resetHoverIndex();
        this.$nextTick(function () {
          if (_this3.$refs.input && _this3.$refs.input.value === '' && _this3.selected.length === 0) {
            _this3.currentPlaceholder = _this3.cachedPlaceHolder;
          }
        });
        if (!this.multiple) {
          if (this.selected) {
            if (this.filterable && this.allowCreate && this.createdSelected && this.createdLabel) {
              this.selectedLabel = this.createdLabel;
            } else {
              this.selectedLabel = this.selected.currentLabel;
            }
            if (this.filterable) this.query = this.selectedLabel;
          }

          if (this.filterable) {
            this.currentPlaceholder = this.cachedPlaceHolder;
          }
        }
      } else {
        this.broadcast('ElSelectDropdown', 'updatePopper');
        if (this.filterable) {
          this.query = this.remote ? '' : this.selectedLabel;
          this.handleQueryChange(this.query);
          if (this.multiple) {
            this.$refs.input.focus();
          } else {
            if (!this.remote) {
              this.broadcast('ElOption', 'queryChange', '');
              this.broadcast('ElOptionGroup', 'queryChange');
            }

            if (this.selectedLabel) {
              this.currentPlaceholder = this.selectedLabel;
              this.selectedLabel = '';
            }
          }
        }
      }
      this.$emit('visible-change', val);
    },
    options: function options() {
      var _this4 = this;

      if (this.$isServer) return;
      this.$nextTick(function () {
        _this4.broadcast('ElSelectDropdown', 'updatePopper');
      });
      if (this.multiple) {
        this.resetInputHeight();
      }
      var inputs = this.$el.querySelectorAll('input');
      if ([].indexOf.call(inputs, document.activeElement) === -1) {
        this.setSelected();
      }
      if (this.defaultFirstOption && (this.filterable || this.remote) && this.filteredOptionsCount) {
        this.checkDefaultFirstOption();
      }
    }
  },

  methods: {
    handleComposition: function handleComposition(event) {
      var _this5 = this;

      var text = event.target.value;
      if (event.type === 'compositionend') {
        this.isOnComposition = false;
        this.$nextTick(function (_) {
          return _this5.handleQueryChange(text);
        });
      } else {
        var lastCharacter = text[text.length - 1] || '';
        this.isOnComposition = !Object(shared_["isKorean"])(lastCharacter);
      }
    },
    handleQueryChange: function handleQueryChange(val) {
      var _this6 = this;

      if (this.previousQuery === val || this.isOnComposition) return;
      if (this.previousQuery === null && (typeof this.filterMethod === 'function' || typeof this.remoteMethod === 'function')) {
        this.previousQuery = val;
        return;
      }
      this.previousQuery = val;
      this.$nextTick(function () {
        if (_this6.visible) _this6.broadcast('ElSelectDropdown', 'updatePopper');
      });
      this.hoverIndex = -1;
      if (this.multiple && this.filterable) {
        this.$nextTick(function () {
          var length = _this6.$refs.input.value.length * 15 + 20;
          _this6.inputLength = _this6.collapseTags ? Math.min(50, length) : length;
          _this6.managePlaceholder();
          _this6.resetInputHeight();
        });
      }
      if (this.remote && typeof this.remoteMethod === 'function') {
        this.hoverIndex = -1;
        this.remoteMethod(val);
      } else if (typeof this.filterMethod === 'function') {
        this.filterMethod(val);
        this.broadcast('ElOptionGroup', 'queryChange');
      } else {
        this.filteredOptionsCount = this.optionsCount;
        this.broadcast('ElOption', 'queryChange', val);
        this.broadcast('ElOptionGroup', 'queryChange');
      }
      if (this.defaultFirstOption && (this.filterable || this.remote) && this.filteredOptionsCount) {
        this.checkDefaultFirstOption();
      }
    },
    scrollToOption: function scrollToOption(option) {
      var target = Array.isArray(option) && option[0] ? option[0].$el : option.$el;
      if (this.$refs.popper && target) {
        var menu = this.$refs.popper.$el.querySelector('.el-select-dropdown__wrap');
        scroll_into_view_default()(menu, target);
      }
      this.$refs.scrollbar && this.$refs.scrollbar.handleScroll();
    },
    handleMenuEnter: function handleMenuEnter() {
      var _this7 = this;

      this.$nextTick(function () {
        return _this7.scrollToOption(_this7.selected);
      });
    },
    emitChange: function emitChange(val) {
      if (!Object(util_["valueEquals"])(this.value, val)) {
        this.$emit('change', val);
      }
    },
    getOption: function getOption(value) {
      var option = void 0;
      var isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]';
      var isNull = Object.prototype.toString.call(value).toLowerCase() === '[object null]';
      var isUndefined = Object.prototype.toString.call(value).toLowerCase() === '[object undefined]';

      for (var i = this.cachedOptions.length - 1; i >= 0; i--) {
        var cachedOption = this.cachedOptions[i];
        var isEqual = isObject ? Object(util_["getValueByPath"])(cachedOption.value, this.valueKey) === Object(util_["getValueByPath"])(value, this.valueKey) : cachedOption.value === value;
        if (isEqual) {
          option = cachedOption;
          break;
        }
      }
      if (option) return option;
      var label = !isObject && !isNull && !isUndefined ? value : '';
      var newOption = {
        value: value,
        currentLabel: label
      };
      if (this.multiple) {
        newOption.hitState = false;
      }
      return newOption;
    },
    setSelected: function setSelected() {
      var _this8 = this;

      if (!this.multiple) {
        var option = this.getOption(this.value);
        if (option.created) {
          this.createdLabel = option.currentLabel;
          this.createdSelected = true;
        } else {
          this.createdSelected = false;
        }
        this.selectedLabel = option.currentLabel;
        this.selected = option;
        if (this.filterable) this.query = this.selectedLabel;
        return;
      }
      var result = [];
      if (Array.isArray(this.value)) {
        this.value.forEach(function (value) {
          result.push(_this8.getOption(value));
        });
      }
      this.selected = result;
      this.$nextTick(function () {
        _this8.resetInputHeight();
      });
    },
    handleFocus: function handleFocus(event) {
      if (!this.softFocus) {
        if (this.automaticDropdown || this.filterable) {
          this.visible = true;
          this.menuVisibleOnFocus = true;
        }
        this.$emit('focus', event);
      } else {
        this.softFocus = false;
      }
    },
    blur: function blur() {
      this.visible = false;
      this.$refs.reference.blur();
    },
    handleBlur: function handleBlur(event) {
      var _this9 = this;

      setTimeout(function () {
        if (_this9.isSilentBlur) {
          _this9.isSilentBlur = false;
        } else {
          _this9.$emit('blur', event);
        }
      }, 50);
      this.softFocus = false;
    },
    handleClearClick: function handleClearClick(event) {
      this.deleteSelected(event);
    },
    doDestroy: function doDestroy() {
      this.$refs.popper && this.$refs.popper.doDestroy();
    },
    handleClose: function handleClose() {
      this.visible = false;
    },
    toggleLastOptionHitState: function toggleLastOptionHitState(hit) {
      if (!Array.isArray(this.selected)) return;
      var option = this.selected[this.selected.length - 1];
      if (!option) return;

      if (hit === true || hit === false) {
        option.hitState = hit;
        return hit;
      }

      option.hitState = !option.hitState;
      return option.hitState;
    },
    deletePrevTag: function deletePrevTag(e) {
      if (e.target.value.length <= 0 && !this.toggleLastOptionHitState()) {
        var value = this.value.slice();
        value.pop();
        this.$emit('input', value);
        this.emitChange(value);
      }
    },
    managePlaceholder: function managePlaceholder() {
      if (this.currentPlaceholder !== '') {
        this.currentPlaceholder = this.$refs.input.value ? '' : this.cachedPlaceHolder;
      }
    },
    resetInputState: function resetInputState(e) {
      if (e.keyCode !== 8) this.toggleLastOptionHitState(false);
      this.inputLength = this.$refs.input.value.length * 15 + 20;
      this.resetInputHeight();
    },
    resetInputHeight: function resetInputHeight() {
      var _this10 = this;

      if (this.collapseTags && !this.filterable) return;
      this.$nextTick(function () {
        if (!_this10.$refs.reference) return;
        var inputChildNodes = _this10.$refs.reference.$el.childNodes;
        var input = [].filter.call(inputChildNodes, function (item) {
          return item.tagName === 'INPUT';
        })[0];
        var tags = _this10.$refs.tags;
        var sizeInMap = _this10.initialInputHeight || 40;
        input.style.height = _this10.selected.length === 0 ? sizeInMap + 'px' : Math.max(tags ? tags.clientHeight + (tags.clientHeight > sizeInMap ? 6 : 0) : 0, sizeInMap) + 'px';
        if (_this10.visible && _this10.emptyText !== false) {
          _this10.broadcast('ElSelectDropdown', 'updatePopper');
        }
      });
    },
    resetHoverIndex: function resetHoverIndex() {
      var _this11 = this;

      setTimeout(function () {
        if (!_this11.multiple) {
          _this11.hoverIndex = _this11.options.indexOf(_this11.selected);
        } else {
          if (_this11.selected.length > 0) {
            _this11.hoverIndex = Math.min.apply(null, _this11.selected.map(function (item) {
              return _this11.options.indexOf(item);
            }));
          } else {
            _this11.hoverIndex = -1;
          }
        }
      }, 300);
    },
    handleOptionSelect: function handleOptionSelect(option, byClick) {
      var _this12 = this;

      if (this.multiple) {
        var value = (this.value || []).slice();
        var optionIndex = this.getValueIndex(value, option.value);
        if (optionIndex > -1) {
          value.splice(optionIndex, 1);
        } else if (this.multipleLimit <= 0 || value.length < this.multipleLimit) {
          value.push(option.value);
        }
        this.$emit('input', value);
        this.emitChange(value);
        if (option.created) {
          this.query = '';
          this.handleQueryChange('');
          this.inputLength = 20;
        }
        if (this.filterable) this.$refs.input.focus();
      } else {
        this.$emit('input', option.value);
        this.emitChange(option.value);
        this.visible = false;
      }
      this.isSilentBlur = byClick;
      this.setSoftFocus();
      if (this.visible) return;
      this.$nextTick(function () {
        _this12.scrollToOption(option);
      });
    },
    setSoftFocus: function setSoftFocus() {
      this.softFocus = true;
      var input = this.$refs.input || this.$refs.reference;
      if (input) {
        input.focus();
      }
    },
    getValueIndex: function getValueIndex() {
      var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var value = arguments[1];

      var isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]';
      if (!isObject) {
        return arr.indexOf(value);
      } else {
        var valueKey = this.valueKey;
        var index = -1;
        arr.some(function (item, i) {
          if (Object(util_["getValueByPath"])(item, valueKey) === Object(util_["getValueByPath"])(value, valueKey)) {
            index = i;
            return true;
          }
          return false;
        });
        return index;
      }
    },
    toggleMenu: function toggleMenu() {
      if (!this.selectDisabled) {
        if (this.menuVisibleOnFocus) {
          this.menuVisibleOnFocus = false;
        } else {
          this.visible = !this.visible;
        }
        if (this.visible) {
          (this.$refs.input || this.$refs.reference).focus();
        }
      }
    },
    selectOption: function selectOption() {
      if (!this.visible) {
        this.toggleMenu();
      } else {
        if (this.options[this.hoverIndex]) {
          this.handleOptionSelect(this.options[this.hoverIndex]);
        }
      }
    },
    deleteSelected: function deleteSelected(event) {
      event.stopPropagation();
      var value = this.multiple ? [] : '';
      this.$emit('input', value);
      this.emitChange(value);
      this.visible = false;
      this.$emit('clear');
    },
    deleteTag: function deleteTag(event, tag) {
      var index = this.selected.indexOf(tag);
      if (index > -1 && !this.selectDisabled) {
        var value = this.value.slice();
        value.splice(index, 1);
        this.$emit('input', value);
        this.emitChange(value);
        this.$emit('remove-tag', tag.value);
      }
      event.stopPropagation();
    },
    onInputChange: function onInputChange() {
      if (this.filterable && this.query !== this.selectedLabel) {
        this.query = this.selectedLabel;
        this.handleQueryChange(this.query);
      }
    },
    onOptionDestroy: function onOptionDestroy(index) {
      if (index > -1) {
        this.optionsCount--;
        this.filteredOptionsCount--;
        this.options.splice(index, 1);
      }
    },
    resetInputWidth: function resetInputWidth() {
      this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width;
    },
    handleResize: function handleResize() {
      this.resetInputWidth();
      if (this.multiple) this.resetInputHeight();
    },
    checkDefaultFirstOption: function checkDefaultFirstOption() {
      this.hoverIndex = -1;
      // highlight the created option
      var hasCreated = false;
      for (var i = this.options.length - 1; i >= 0; i--) {
        if (this.options[i].created) {
          hasCreated = true;
          this.hoverIndex = i;
          break;
        }
      }
      if (hasCreated) return;
      for (var _i = 0; _i !== this.options.length; ++_i) {
        var option = this.options[_i];
        if (this.query) {
          // highlight first options that passes the filter
          if (!option.disabled && !option.groupDisabled && option.visible) {
            this.hoverIndex = _i;
            break;
          }
        } else {
          // highlight currently selected option
          if (option.itemSelected) {
            this.hoverIndex = _i;
            break;
          }
        }
      }
    },
    getValueKey: function getValueKey(item) {
      if (Object.prototype.toString.call(item.value).toLowerCase() !== '[object object]') {
        return item.value;
      } else {
        return Object(util_["getValueByPath"])(item.value, this.valueKey);
      }
    }
  },

  created: function created() {
    var _this13 = this;

    this.cachedPlaceHolder = this.currentPlaceholder = this.placeholder;
    if (this.multiple && !Array.isArray(this.value)) {
      this.$emit('input', []);
    }
    if (!this.multiple && Array.isArray(this.value)) {
      this.$emit('input', '');
    }

    this.debouncedOnInputChange = debounce_default()(this.debounce, function () {
      _this13.onInputChange();
    });

    this.debouncedQueryChange = debounce_default()(this.debounce, function (e) {
      _this13.handleQueryChange(e.target.value);
    });

    this.$on('handleOptionClick', this.handleOptionSelect);
    this.$on('setSelected', this.setSelected);
  },
  mounted: function mounted() {
    var _this14 = this;

    if (this.multiple && Array.isArray(this.value) && this.value.length > 0) {
      this.currentPlaceholder = '';
    }
    Object(resize_event_["addResizeListener"])(this.$el, this.handleResize);

    var reference = this.$refs.reference;
    if (reference && reference.$el) {
      var sizeMap = {
        medium: 36,
        small: 32,
        mini: 28
      };
      var input = reference.$el.querySelector('input');
      this.initialInputHeight = input.getBoundingClientRect().height || sizeMap[this.selectSize];
    }
    if (this.remote && this.multiple) {
      this.resetInputHeight();
    }
    this.$nextTick(function () {
      if (reference && reference.$el) {
        _this14.inputWidth = reference.$el.getBoundingClientRect().width;
      }
    });
    this.setSelected();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$el && this.handleResize) Object(resize_event_["removeResizeListener"])(this.$el, this.handleResize);
  }
});
// CONCATENATED MODULE: ./packages/select/src/select.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_selectvue_type_script_lang_js_ = (selectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/select/src/select.vue





/* normalize component */

var select_component = normalizeComponent(
  src_selectvue_type_script_lang_js_,
  selectvue_type_template_id_0e4aade6_render,
  selectvue_type_template_id_0e4aade6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var select_api; }
select_component.options.__file = "packages/select/src/select.vue"
/* harmony default export */ var src_select = (select_component.exports);
// CONCATENATED MODULE: ./packages/select/index.js


/* istanbul ignore next */
src_select.install = function (Vue) {
  Vue.component(src_select.name, src_select);
};

/* harmony default export */ var packages_select = (src_select);
// CONCATENATED MODULE: ./packages/option/index.js


/* istanbul ignore next */
src_option.install = function (Vue) {
  Vue.component(src_option.name, src_option);
};

/* harmony default export */ var packages_option = (src_option);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/select/src/option-group.vue?vue&type=template&id=6685e5de&
var option_groupvue_type_template_id_6685e5de_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.visible,
          expression: "visible"
        }
      ],
      staticClass: "el-select-group__wrap"
    },
    [
      _c("li", { staticClass: "el-select-group__title" }, [
        _vm._v(_vm._s(_vm.label))
      ]),
      _c("li", [
        _c("ul", { staticClass: "el-select-group" }, [_vm._t("default")], 2)
      ])
    ]
  )
}
var option_groupvue_type_template_id_6685e5de_staticRenderFns = []
option_groupvue_type_template_id_6685e5de_render._withStripped = true


// CONCATENATED MODULE: ./packages/select/src/option-group.vue?vue&type=template&id=6685e5de&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/select/src/option-group.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var option_groupvue_type_script_lang_js_ = ({
  mixins: [emitter_default.a],

  name: 'ElOptionGroup',

  componentName: 'ElOptionGroup',

  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      visible: true
    };
  },


  watch: {
    disabled: function disabled(val) {
      this.broadcast('ElOption', 'handleGroupDisabled', val);
    }
  },

  methods: {
    queryChange: function queryChange() {
      this.visible = this.$children && Array.isArray(this.$children) && this.$children.some(function (option) {
        return option.visible === true;
      });
    }
  },

  created: function created() {
    this.$on('queryChange', this.queryChange);
  },
  mounted: function mounted() {
    if (this.disabled) {
      this.broadcast('ElOption', 'handleGroupDisabled', this.disabled);
    }
  }
});
// CONCATENATED MODULE: ./packages/select/src/option-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_option_groupvue_type_script_lang_js_ = (option_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/select/src/option-group.vue





/* normalize component */

var option_group_component = normalizeComponent(
  src_option_groupvue_type_script_lang_js_,
  option_groupvue_type_template_id_6685e5de_render,
  option_groupvue_type_template_id_6685e5de_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var option_group_api; }
option_group_component.options.__file = "packages/select/src/option-group.vue"
/* harmony default export */ var option_group = (option_group_component.exports);
// CONCATENATED MODULE: ./packages/option-group/index.js


/* istanbul ignore next */
option_group.install = function (Vue) {
  Vue.component(option_group.name, option_group);
};

/* harmony default export */ var packages_option_group = (option_group);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/date-picker/src/picker.vue?vue&type=template&id=79ae069f&
var pickervue_type_template_id_79ae069f_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !_vm.ranged
    ? _c(
        "el-input",
        _vm._b(
          {
            directives: [
              {
                name: "clickoutside",
                rawName: "v-clickoutside",
                value: _vm.handleClose,
                expression: "handleClose"
              }
            ],
            ref: "reference",
            staticClass: "el-date-editor",
            class: "el-date-editor--" + _vm.type,
            attrs: {
              readonly:
                !_vm.editable ||
                _vm.readonly ||
                _vm.type === "dates" ||
                _vm.type === "week",
              disabled: _vm.pickerDisabled,
              size: _vm.pickerSize,
              name: _vm.name,
              placeholder: _vm.placeholder,
              value: _vm.displayValue,
              validateEvent: false
            },
            on: {
              focus: _vm.handleFocus,
              input: function(value) {
                return (_vm.userInput = value)
              },
              change: _vm.handleChange
            },
            nativeOn: {
              keydown: function($event) {
                return _vm.handleKeydown($event)
              },
              mouseenter: function($event) {
                return _vm.handleMouseEnter($event)
              },
              mouseleave: function($event) {
                _vm.showClose = false
              }
            }
          },
          "el-input",
          _vm.firstInputId,
          false
        ),
        [
          _c("i", {
            staticClass: "el-input__icon",
            class: _vm.triggerClass,
            attrs: { slot: "prefix" },
            on: { click: _vm.handleFocus },
            slot: "prefix"
          }),
          _vm.haveTrigger
            ? _c("i", {
                staticClass: "el-input__icon",
                class: [_vm.showClose ? "" + _vm.clearIcon : ""],
                attrs: { slot: "suffix" },
                on: { click: _vm.handleClickIcon },
                slot: "suffix"
              })
            : _vm._e()
        ]
      )
    : _c(
        "div",
        {
          directives: [
            {
              name: "clickoutside",
              rawName: "v-clickoutside",
              value: _vm.handleClose,
              expression: "handleClose"
            }
          ],
          ref: "reference",
          staticClass: "el-date-editor el-range-editor el-input__inner",
          class: [
            "el-date-editor--" + _vm.type,
            _vm.pickerSize ? "el-range-editor--" + _vm.pickerSize : "",
            _vm.pickerDisabled ? "is-disabled" : "",
            _vm.pickerVisible ? "is-active" : ""
          ],
          on: {
            click: _vm.handleRangeClick,
            mouseenter: _vm.handleMouseEnter,
            mouseleave: function($event) {
              _vm.showClose = false
            },
            keydown: _vm.handleKeydown
          }
        },
        [
          _c("i", {
            class: ["el-input__icon", "el-range__icon", _vm.triggerClass]
          }),
          _c(
            "input",
            _vm._b(
              {
                staticClass: "el-range-input",
                attrs: {
                  autocomplete: "off",
                  placeholder: _vm.startPlaceholder,
                  disabled: _vm.pickerDisabled,
                  readonly: !_vm.editable || _vm.readonly,
                  name: _vm.name && _vm.name[0]
                },
                domProps: { value: _vm.displayValue && _vm.displayValue[0] },
                on: {
                  input: _vm.handleStartInput,
                  change: _vm.handleStartChange,
                  focus: _vm.handleFocus
                }
              },
              "input",
              _vm.firstInputId,
              false
            )
          ),
          _vm._t("range-separator", [
            _c("span", { staticClass: "el-range-separator" }, [
              _vm._v(_vm._s(_vm.rangeSeparator))
            ])
          ]),
          _c(
            "input",
            _vm._b(
              {
                staticClass: "el-range-input",
                attrs: {
                  autocomplete: "off",
                  placeholder: _vm.endPlaceholder,
                  disabled: _vm.pickerDisabled,
                  readonly: !_vm.editable || _vm.readonly,
                  name: _vm.name && _vm.name[1]
                },
                domProps: { value: _vm.displayValue && _vm.displayValue[1] },
                on: {
                  input: _vm.handleEndInput,
                  change: _vm.handleEndChange,
                  focus: _vm.handleFocus
                }
              },
              "input",
              _vm.secondInputId,
              false
            )
          ),
          _vm.haveTrigger
            ? _c("i", {
                staticClass: "el-input__icon el-range__close-icon",
                class: [_vm.showClose ? "" + _vm.clearIcon : ""],
                on: { click: _vm.handleClickIcon }
              })
            : _vm._e()
        ],
        2
      )
}
var pickervue_type_template_id_79ae069f_staticRenderFns = []
pickervue_type_template_id_79ae069f_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-picker/src/picker.vue?vue&type=template&id=79ae069f&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "element-mini-ui/lib/utils/date-util"
var date_util_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/date-picker/src/picker.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









var NewPopper = {
  props: {
    appendToBody: vue_popper_default.a.props.appendToBody,
    offset: vue_popper_default.a.props.offset,
    boundariesPadding: vue_popper_default.a.props.boundariesPadding,
    arrowOffset: vue_popper_default.a.props.arrowOffset
  },
  methods: vue_popper_default.a.methods,
  data: function data() {
    return merge_default()({ visibleArrow: true }, vue_popper_default.a.data);
  },

  beforeDestroy: vue_popper_default.a.beforeDestroy
};

var DEFAULT_FORMATS = {
  date: 'yyyy-MM-dd',
  month: 'yyyy-MM',
  datetime: 'yyyy-MM-dd HH:mm:ss',
  time: 'HH:mm:ss',
  week: 'yyyywWW',
  timerange: 'HH:mm:ss',
  daterange: 'yyyy-MM-dd',
  monthrange: 'yyyy-MM',
  datetimerange: 'yyyy-MM-dd HH:mm:ss',
  year: 'yyyy'
};
var HAVE_TRIGGER_TYPES = ['date', 'datetime', 'time', 'time-select', 'week', 'month', 'year', 'daterange', 'monthrange', 'timerange', 'datetimerange', 'dates'];
var pickervue_type_script_lang_js_DATE_FORMATTER = function DATE_FORMATTER(value, format) {
  if (format === 'timestamp') return value.getTime();
  return Object(date_util_["formatDate"])(value, format);
};
var pickervue_type_script_lang_js_DATE_PARSER = function DATE_PARSER(text, format) {
  if (format === 'timestamp') return new Date(Number(text));
  return Object(date_util_["parseDate"])(text, format);
};
var RANGE_FORMATTER = function RANGE_FORMATTER(value, format) {
  if (Array.isArray(value) && value.length === 2) {
    var start = value[0];
    var end = value[1];

    if (start && end) {
      return [pickervue_type_script_lang_js_DATE_FORMATTER(start, format), pickervue_type_script_lang_js_DATE_FORMATTER(end, format)];
    }
  }
  return '';
};
var RANGE_PARSER = function RANGE_PARSER(array, format, separator) {
  if (!Array.isArray(array)) {
    array = array.split(separator);
  }
  if (array.length === 2) {
    var range1 = array[0];
    var range2 = array[1];

    return [pickervue_type_script_lang_js_DATE_PARSER(range1, format), pickervue_type_script_lang_js_DATE_PARSER(range2, format)];
  }
  return [];
};
var TYPE_VALUE_RESOLVER_MAP = {
  default: {
    formatter: function formatter(value) {
      if (!value) return '';
      return '' + value;
    },
    parser: function parser(text) {
      if (text === undefined || text === '') return null;
      return text;
    }
  },
  week: {
    formatter: function formatter(value, format) {
      var week = Object(date_util_["getWeekNumber"])(value);
      var month = value.getMonth();
      var trueDate = new Date(value);
      if (week === 1 && month === 11) {
        trueDate.setHours(0, 0, 0, 0);
        trueDate.setDate(trueDate.getDate() + 3 - (trueDate.getDay() + 6) % 7);
      }
      var date = Object(date_util_["formatDate"])(trueDate, format);

      date = /WW/.test(date) ? date.replace(/WW/, week < 10 ? '0' + week : week) : date.replace(/W/, week);
      return date;
    },
    parser: function parser(text, format) {
      // parse as if a normal date
      return TYPE_VALUE_RESOLVER_MAP.date.parser(text, format);
    }
  },
  date: {
    formatter: pickervue_type_script_lang_js_DATE_FORMATTER,
    parser: pickervue_type_script_lang_js_DATE_PARSER
  },
  datetime: {
    formatter: pickervue_type_script_lang_js_DATE_FORMATTER,
    parser: pickervue_type_script_lang_js_DATE_PARSER
  },
  daterange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  monthrange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  datetimerange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  timerange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  time: {
    formatter: pickervue_type_script_lang_js_DATE_FORMATTER,
    parser: pickervue_type_script_lang_js_DATE_PARSER
  },
  month: {
    formatter: pickervue_type_script_lang_js_DATE_FORMATTER,
    parser: pickervue_type_script_lang_js_DATE_PARSER
  },
  year: {
    formatter: pickervue_type_script_lang_js_DATE_FORMATTER,
    parser: pickervue_type_script_lang_js_DATE_PARSER
  },
  number: {
    formatter: function formatter(value) {
      if (!value) return '';
      return '' + value;
    },
    parser: function parser(text) {
      var result = Number(text);

      if (!isNaN(text)) {
        return result;
      } else {
        return null;
      }
    }
  },
  dates: {
    formatter: function formatter(value, format) {
      return value.map(function (date) {
        return pickervue_type_script_lang_js_DATE_FORMATTER(date, format);
      });
    },
    parser: function parser(value, format) {
      return (typeof value === 'string' ? value.split(', ') : value).map(function (date) {
        return date instanceof Date ? date : pickervue_type_script_lang_js_DATE_PARSER(date, format);
      });
    }
  }
};
var PLACEMENT_MAP = {
  left: 'bottom-start',
  center: 'bottom',
  right: 'bottom-end'
};

var parseAsFormatAndType = function parseAsFormatAndType(value, customFormat, type) {
  var rangeSeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '-';

  if (!value) return null;
  var parser = (TYPE_VALUE_RESOLVER_MAP[type] || TYPE_VALUE_RESOLVER_MAP['default']).parser;
  var format = customFormat || DEFAULT_FORMATS[type];
  return parser(value, format, rangeSeparator);
};

var formatAsFormatAndType = function formatAsFormatAndType(value, customFormat, type) {
  if (!value) return null;
  var formatter = (TYPE_VALUE_RESOLVER_MAP[type] || TYPE_VALUE_RESOLVER_MAP['default']).formatter;
  var format = customFormat || DEFAULT_FORMATS[type];
  return formatter(value, format);
};

/*
 * Considers:
 *   1. Date object
 *   2. date string
 *   3. array of 1 or 2
 */
var valueEquals = function valueEquals(a, b) {
  // considers Date object and string
  var dateEquals = function dateEquals(a, b) {
    var aIsDate = a instanceof Date;
    var bIsDate = b instanceof Date;
    if (aIsDate && bIsDate) {
      return a.getTime() === b.getTime();
    }
    if (!aIsDate && !bIsDate) {
      return a === b;
    }
    return false;
  };

  var aIsArray = a instanceof Array;
  var bIsArray = b instanceof Array;
  if (aIsArray && bIsArray) {
    if (a.length !== b.length) {
      return false;
    }
    return a.every(function (item, index) {
      return dateEquals(item, b[index]);
    });
  }
  if (!aIsArray && !bIsArray) {
    return dateEquals(a, b);
  }
  return false;
};

var isString = function isString(val) {
  return typeof val === 'string' || val instanceof String;
};

var pickervue_type_script_lang_js_validator = function validator(val) {
  // either: String, Array of String, null / undefined
  return val === null || val === undefined || isString(val) || Array.isArray(val) && val.length === 2 && val.every(isString);
};

/* harmony default export */ var pickervue_type_script_lang_js_ = ({
  mixins: [emitter_default.a, NewPopper],

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  props: {
    size: String,
    format: String,
    valueFormat: String,
    readonly: Boolean,
    placeholder: String,
    startPlaceholder: String,
    endPlaceholder: String,
    prefixIcon: String,
    clearIcon: {
      type: String,
      default: 'el-icon-circle-close'
    },
    name: {
      default: '',
      validator: pickervue_type_script_lang_js_validator
    },
    disabled: Boolean,
    clearable: {
      type: Boolean,
      default: true
    },
    id: {
      default: '',
      validator: pickervue_type_script_lang_js_validator
    },
    popperClass: String,
    editable: {
      type: Boolean,
      default: true
    },
    align: {
      type: String,
      default: 'left'
    },
    value: {},
    defaultValue: {},
    defaultTime: {},
    rangeSeparator: {
      default: '-'
    },
    pickerOptions: {},
    unlinkPanels: Boolean,
    validateEvent: {
      type: Boolean,
      default: true
    }
  },

  components: { ElInput: input_default.a },

  directives: { Clickoutside: clickoutside_default.a },

  data: function data() {
    return {
      pickerVisible: false,
      showClose: false,
      userInput: null,
      valueOnOpen: null, // value when picker opens, used to determine whether to emit change
      unwatchPickerOptions: null
    };
  },


  watch: {
    pickerVisible: function pickerVisible(val) {
      if (this.readonly || this.pickerDisabled) return;
      if (val) {
        this.showPicker();
        this.valueOnOpen = Array.isArray(this.value) ? [].concat(this.value) : this.value;
      } else {
        this.hidePicker();
        this.emitChange(this.value);
        this.userInput = null;
        if (this.validateEvent) {
          this.dispatch('ElFormItem', 'el.form.blur');
        }
        this.$emit('blur', this);
        this.blur();
      }
    },

    parsedValue: {
      immediate: true,
      handler: function handler(val) {
        if (this.picker) {
          this.picker.value = val;
        }
      }
    },
    defaultValue: function defaultValue(val) {
      // NOTE: should eventually move to jsx style picker + panel ?
      if (this.picker) {
        this.picker.defaultValue = val;
      }
    },
    value: function value(val, oldVal) {
      if (!valueEquals(val, oldVal) && !this.pickerVisible && this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.change', val);
      }
    }
  },

  computed: {
    ranged: function ranged() {
      return this.type.indexOf('range') > -1;
    },
    reference: function reference() {
      var reference = this.$refs.reference;
      return reference.$el || reference;
    },
    refInput: function refInput() {
      if (this.reference) {
        return [].slice.call(this.reference.querySelectorAll('input'));
      }
      return [];
    },
    valueIsEmpty: function valueIsEmpty() {
      var val = this.value;
      if (Array.isArray(val)) {
        for (var i = 0, len = val.length; i < len; i++) {
          if (val[i]) {
            return false;
          }
        }
      } else {
        if (val) {
          return false;
        }
      }
      return true;
    },
    triggerClass: function triggerClass() {
      return this.prefixIcon || (this.type.indexOf('time') !== -1 ? 'el-icon-time' : 'el-icon-date');
    },
    selectionMode: function selectionMode() {
      if (this.type === 'week') {
        return 'week';
      } else if (this.type === 'month') {
        return 'month';
      } else if (this.type === 'year') {
        return 'year';
      } else if (this.type === 'dates') {
        return 'dates';
      }

      return 'day';
    },
    haveTrigger: function haveTrigger() {
      if (typeof this.showTrigger !== 'undefined') {
        return this.showTrigger;
      }
      return HAVE_TRIGGER_TYPES.indexOf(this.type) !== -1;
    },
    displayValue: function displayValue() {
      var formattedValue = formatAsFormatAndType(this.parsedValue, this.format, this.type, this.rangeSeparator);
      if (Array.isArray(this.userInput)) {
        return [this.userInput[0] || formattedValue && formattedValue[0] || '', this.userInput[1] || formattedValue && formattedValue[1] || ''];
      } else if (this.userInput !== null) {
        return this.userInput;
      } else if (formattedValue) {
        return this.type === 'dates' ? formattedValue.join(', ') : formattedValue;
      } else {
        return '';
      }
    },
    parsedValue: function parsedValue() {
      if (!this.value) return this.value; // component value is not set
      if (this.type === 'time-select') return this.value; // time-select does not require parsing, this might change in next major version

      var valueIsDateObject = Object(date_util_["isDateObject"])(this.value) || Array.isArray(this.value) && this.value.every(date_util_["isDateObject"]);
      if (valueIsDateObject) {
        return this.value;
      }

      if (this.valueFormat) {
        return parseAsFormatAndType(this.value, this.valueFormat, this.type, this.rangeSeparator) || this.value;
      }

      // NOTE: deal with common but incorrect usage, should remove in next major version
      // user might provide string / timestamp without value-format, coerce them into date (or array of date)
      return Array.isArray(this.value) ? this.value.map(function (val) {
        return new Date(val);
      }) : new Date(this.value);
    },
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    pickerSize: function pickerSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    pickerDisabled: function pickerDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
    firstInputId: function firstInputId() {
      var obj = {};
      var id = void 0;
      if (this.ranged) {
        id = this.id && this.id[0];
      } else {
        id = this.id;
      }
      if (id) obj.id = id;
      return obj;
    },
    secondInputId: function secondInputId() {
      var obj = {};
      var id = void 0;
      if (this.ranged) {
        id = this.id && this.id[1];
      }
      if (id) obj.id = id;
      return obj;
    }
  },

  created: function created() {
    // vue-popper
    this.popperOptions = {
      boundariesPadding: 0,
      gpuAcceleration: false
    };
    this.placement = PLACEMENT_MAP[this.align] || PLACEMENT_MAP.left;

    this.$on('fieldReset', this.handleFieldReset);
  },


  methods: {
    focus: function focus() {
      if (!this.ranged) {
        this.$refs.reference.focus();
      } else {
        this.handleFocus();
      }
    },
    blur: function blur() {
      this.refInput.forEach(function (input) {
        return input.blur();
      });
    },


    // {parse, formatTo} Value deals maps component value with internal Date
    parseValue: function parseValue(value) {
      var isParsed = Object(date_util_["isDateObject"])(value) || Array.isArray(value) && value.every(date_util_["isDateObject"]);
      if (this.valueFormat && !isParsed) {
        return parseAsFormatAndType(value, this.valueFormat, this.type, this.rangeSeparator) || value;
      } else {
        return value;
      }
    },
    formatToValue: function formatToValue(date) {
      var isFormattable = Object(date_util_["isDateObject"])(date) || Array.isArray(date) && date.every(date_util_["isDateObject"]);
      if (this.valueFormat && isFormattable) {
        return formatAsFormatAndType(date, this.valueFormat, this.type, this.rangeSeparator);
      } else {
        return date;
      }
    },


    // {parse, formatTo} String deals with user input
    parseString: function parseString(value) {
      var type = Array.isArray(value) ? this.type : this.type.replace('range', '');
      return parseAsFormatAndType(value, this.format, type);
    },
    formatToString: function formatToString(value) {
      var type = Array.isArray(value) ? this.type : this.type.replace('range', '');
      return formatAsFormatAndType(value, this.format, type);
    },
    handleMouseEnter: function handleMouseEnter() {
      if (this.readonly || this.pickerDisabled) return;
      if (!this.valueIsEmpty && this.clearable) {
        this.showClose = true;
      }
    },
    handleChange: function handleChange() {
      if (this.userInput) {
        var value = this.parseString(this.displayValue);
        if (value) {
          this.picker.value = value;
          if (this.isValidValue(value)) {
            this.emitInput(value);
            this.userInput = null;
          }
        }
      }
      if (this.userInput === '') {
        this.emitInput(null);
        this.emitChange(null);
        this.userInput = null;
      }
    },
    handleStartInput: function handleStartInput(event) {
      if (this.userInput) {
        this.userInput = [event.target.value, this.userInput[1]];
      } else {
        this.userInput = [event.target.value, null];
      }
    },
    handleEndInput: function handleEndInput(event) {
      if (this.userInput) {
        this.userInput = [this.userInput[0], event.target.value];
      } else {
        this.userInput = [null, event.target.value];
      }
    },
    handleStartChange: function handleStartChange(event) {
      var value = this.parseString(this.userInput && this.userInput[0]);
      if (value) {
        this.userInput = [this.formatToString(value), this.displayValue[1]];
        var newValue = [value, this.picker.value && this.picker.value[1]];
        this.picker.value = newValue;
        if (this.isValidValue(newValue)) {
          this.emitInput(newValue);
          this.userInput = null;
        }
      }
    },
    handleEndChange: function handleEndChange(event) {
      var value = this.parseString(this.userInput && this.userInput[1]);
      if (value) {
        this.userInput = [this.displayValue[0], this.formatToString(value)];
        var newValue = [this.picker.value && this.picker.value[0], value];
        this.picker.value = newValue;
        if (this.isValidValue(newValue)) {
          this.emitInput(newValue);
          this.userInput = null;
        }
      }
    },
    handleClickIcon: function handleClickIcon(event) {
      if (this.readonly || this.pickerDisabled) return;
      if (this.showClose) {
        this.valueOnOpen = this.value;
        event.stopPropagation();
        this.emitInput(null);
        this.emitChange(null);
        this.showClose = false;
        if (this.picker && typeof this.picker.handleClear === 'function') {
          this.picker.handleClear();
        }
      } else {
        this.pickerVisible = !this.pickerVisible;
      }
    },
    handleClose: function handleClose() {
      if (!this.pickerVisible) return;
      this.pickerVisible = false;

      if (this.type === 'dates') {
        // restore to former value
        var oldValue = parseAsFormatAndType(this.valueOnOpen, this.valueFormat, this.type, this.rangeSeparator) || this.valueOnOpen;
        this.emitInput(oldValue);
      }
    },
    handleFieldReset: function handleFieldReset(initialValue) {
      this.userInput = initialValue === '' ? null : initialValue;
    },
    handleFocus: function handleFocus() {
      var type = this.type;

      if (HAVE_TRIGGER_TYPES.indexOf(type) !== -1 && !this.pickerVisible) {
        this.pickerVisible = true;
      }
      this.$emit('focus', this);
    },
    handleKeydown: function handleKeydown(event) {
      var _this = this;

      var keyCode = event.keyCode;

      // ESC
      if (keyCode === 27) {
        this.pickerVisible = false;
        event.stopPropagation();
        return;
      }

      // Tab
      if (keyCode === 9) {
        if (!this.ranged) {
          this.handleChange();
          this.pickerVisible = this.picker.visible = false;
          this.blur();
          event.stopPropagation();
        } else {
          // user may change focus between two input
          setTimeout(function () {
            if (_this.refInput.indexOf(document.activeElement) === -1) {
              _this.pickerVisible = false;
              _this.blur();
              event.stopPropagation();
            }
          }, 0);
        }
        return;
      }

      // Enter
      if (keyCode === 13) {
        if (this.userInput === '' || this.isValidValue(this.parseString(this.displayValue))) {
          this.handleChange();
          this.pickerVisible = this.picker.visible = false;
          this.blur();
        }
        event.stopPropagation();
        return;
      }

      // if user is typing, do not let picker handle key input
      if (this.userInput) {
        event.stopPropagation();
        return;
      }

      // delegate other keys to panel
      if (this.picker && this.picker.handleKeydown) {
        this.picker.handleKeydown(event);
      }
    },
    handleRangeClick: function handleRangeClick() {
      var type = this.type;

      if (HAVE_TRIGGER_TYPES.indexOf(type) !== -1 && !this.pickerVisible) {
        this.pickerVisible = true;
      }
      this.$emit('focus', this);
    },
    hidePicker: function hidePicker() {
      if (this.picker) {
        this.picker.resetView && this.picker.resetView();
        this.pickerVisible = this.picker.visible = false;
        this.destroyPopper();
      }
    },
    showPicker: function showPicker() {
      var _this2 = this;

      if (this.$isServer) return;
      if (!this.picker) {
        this.mountPicker();
      }
      this.pickerVisible = this.picker.visible = true;

      this.updatePopper();

      this.picker.value = this.parsedValue;
      this.picker.resetView && this.picker.resetView();

      this.$nextTick(function () {
        _this2.picker.adjustSpinners && _this2.picker.adjustSpinners();
      });
    },
    mountPicker: function mountPicker() {
      var _this3 = this;

      this.picker = new external_vue_default.a(this.panel).$mount();
      this.picker.defaultValue = this.defaultValue;
      this.picker.defaultTime = this.defaultTime;
      this.picker.popperClass = this.popperClass;
      this.popperElm = this.picker.$el;
      this.picker.width = this.reference.getBoundingClientRect().width;
      this.picker.showTime = this.type === 'datetime' || this.type === 'datetimerange';
      this.picker.selectionMode = this.selectionMode;
      this.picker.unlinkPanels = this.unlinkPanels;
      this.picker.arrowControl = this.arrowControl || this.timeArrowControl || false;
      this.$watch('format', function (format) {
        _this3.picker.format = format;
      });

      var updateOptions = function updateOptions() {
        var options = _this3.pickerOptions;

        if (options && options.selectableRange) {
          var ranges = options.selectableRange;
          var parser = TYPE_VALUE_RESOLVER_MAP.datetimerange.parser;
          var format = DEFAULT_FORMATS.timerange;

          ranges = Array.isArray(ranges) ? ranges : [ranges];
          _this3.picker.selectableRange = ranges.map(function (range) {
            return parser(range, format, _this3.rangeSeparator);
          });
        }

        for (var option in options) {
          if (options.hasOwnProperty(option) &&
          // 忽略 time-picker 的该配置项
          option !== 'selectableRange') {
            _this3.picker[option] = options[option];
          }
        }

        // main format must prevail over undocumented pickerOptions.format
        if (_this3.format) {
          _this3.picker.format = _this3.format;
        }
      };
      updateOptions();
      this.unwatchPickerOptions = this.$watch('pickerOptions', function () {
        return updateOptions();
      }, { deep: true });
      this.$el.appendChild(this.picker.$el);
      this.picker.resetView && this.picker.resetView();

      this.picker.$on('dodestroy', this.doDestroy);
      this.picker.$on('pick', function () {
        var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var visible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _this3.userInput = null;
        _this3.pickerVisible = _this3.picker.visible = visible;
        _this3.emitInput(date);
        _this3.picker.resetView && _this3.picker.resetView();
      });

      this.picker.$on('select-range', function (start, end, pos) {
        if (_this3.refInput.length === 0) return;
        if (!pos || pos === 'min') {
          _this3.refInput[0].setSelectionRange(start, end);
          _this3.refInput[0].focus();
        } else if (pos === 'max') {
          _this3.refInput[1].setSelectionRange(start, end);
          _this3.refInput[1].focus();
        }
      });
    },
    unmountPicker: function unmountPicker() {
      if (this.picker) {
        this.picker.$destroy();
        this.picker.$off();
        if (typeof this.unwatchPickerOptions === 'function') {
          this.unwatchPickerOptions();
        }
        this.picker.$el.parentNode.removeChild(this.picker.$el);
      }
    },
    emitChange: function emitChange(val) {
      // determine user real change only
      if (!valueEquals(val, this.valueOnOpen)) {
        this.$emit('change', val);
        this.valueOnOpen = val;
        if (this.validateEvent) {
          this.dispatch('ElFormItem', 'el.form.change', val);
        }
      }
    },
    emitInput: function emitInput(val) {
      var formatted = this.formatToValue(val);
      if (!valueEquals(this.value, formatted)) {
        this.$emit('input', formatted);
      }
    },
    isValidValue: function isValidValue(value) {
      if (!this.picker) {
        this.mountPicker();
      }
      if (this.picker.isValidValue) {
        return value && this.picker.isValidValue(value);
      } else {
        return true;
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/date-picker/src/picker.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_pickervue_type_script_lang_js_ = (pickervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-picker/src/picker.vue





/* normalize component */

var picker_component = normalizeComponent(
  src_pickervue_type_script_lang_js_,
  pickervue_type_template_id_79ae069f_render,
  pickervue_type_template_id_79ae069f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var picker_api; }
picker_component.options.__file = "packages/date-picker/src/picker.vue"
/* harmony default export */ var picker = (picker_component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/date-picker/src/panel/date.vue?vue&type=template&id=2440d4ea&
var datevue_type_template_id_2440d4ea_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "el-zoom-in-top" },
      on: { "after-enter": _vm.handleEnter, "after-leave": _vm.handleLeave }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          staticClass: "el-picker-panel el-date-picker el-popper",
          class: [
            {
              "has-sidebar": _vm.$slots.sidebar || _vm.shortcuts,
              "has-time": _vm.showTime
            },
            _vm.popperClass
          ]
        },
        [
          _c(
            "div",
            { staticClass: "el-picker-panel__body-wrapper" },
            [
              _vm._t("sidebar"),
              _vm.shortcuts
                ? _c(
                    "div",
                    { staticClass: "el-picker-panel__sidebar" },
                    _vm._l(_vm.shortcuts, function(shortcut, key) {
                      return _c(
                        "button",
                        {
                          key: key,
                          staticClass: "el-picker-panel__shortcut",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.handleShortcutClick(shortcut)
                            }
                          }
                        },
                        [_vm._v(_vm._s(shortcut.text))]
                      )
                    }),
                    0
                  )
                : _vm._e(),
              _c("div", { staticClass: "el-picker-panel__body" }, [
                _vm.showTime
                  ? _c("div", { staticClass: "el-date-picker__time-header" }, [
                      _c(
                        "span",
                        { staticClass: "el-date-picker__editor-wrap" },
                        [
                          _c("el-input", {
                            attrs: {
                              placeholder: _vm.t("el.datepicker.selectDate"),
                              value: _vm.visibleDate,
                              size: "small"
                            },
                            on: {
                              input: function(val) {
                                return (_vm.userInputDate = val)
                              },
                              change: _vm.handleVisibleDateChange
                            }
                          })
                        ],
                        1
                      ),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "clickoutside",
                              rawName: "v-clickoutside",
                              value: _vm.handleTimePickClose,
                              expression: "handleTimePickClose"
                            }
                          ],
                          staticClass: "el-date-picker__editor-wrap"
                        },
                        [
                          _c("el-input", {
                            ref: "input",
                            attrs: {
                              placeholder: _vm.t("el.datepicker.selectTime"),
                              value: _vm.visibleTime,
                              size: "small"
                            },
                            on: {
                              focus: function($event) {
                                _vm.timePickerVisible = true
                              },
                              input: function(val) {
                                return (_vm.userInputTime = val)
                              },
                              change: _vm.handleVisibleTimeChange
                            }
                          }),
                          _c("time-picker", {
                            ref: "timepicker",
                            attrs: {
                              "time-arrow-control": _vm.arrowControl,
                              visible: _vm.timePickerVisible
                            },
                            on: {
                              pick: _vm.handleTimePick,
                              mounted: _vm.proxyTimePickerDataProperties
                            }
                          })
                        ],
                        1
                      )
                    ])
                  : _vm._e(),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.currentView !== "time",
                        expression: "currentView !== 'time'"
                      }
                    ],
                    staticClass: "el-date-picker__header",
                    class: {
                      "el-date-picker__header--bordered":
                        _vm.currentView === "year" ||
                        _vm.currentView === "month"
                    }
                  },
                  [
                    _c("button", {
                      staticClass:
                        "el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-d-arrow-left",
                      attrs: {
                        type: "button",
                        "aria-label": _vm.t("el.datepicker.prevYear")
                      },
                      on: { click: _vm.prevYear }
                    }),
                    _c("button", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.currentView === "date",
                          expression: "currentView === 'date'"
                        }
                      ],
                      staticClass:
                        "el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-arrow-left",
                      attrs: {
                        type: "button",
                        "aria-label": _vm.t("el.datepicker.prevMonth")
                      },
                      on: { click: _vm.prevMonth }
                    }),
                    _c(
                      "span",
                      {
                        staticClass: "el-date-picker__header-label",
                        attrs: { role: "button" },
                        on: { click: _vm.showYearPicker }
                      },
                      [_vm._v(_vm._s(_vm.yearLabel))]
                    ),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.currentView === "date",
                            expression: "currentView === 'date'"
                          }
                        ],
                        staticClass: "el-date-picker__header-label",
                        class: { active: _vm.currentView === "month" },
                        attrs: { role: "button" },
                        on: { click: _vm.showMonthPicker }
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.t("el.datepicker.month" + (_vm.month + 1)))
                        )
                      ]
                    ),
                    _c("button", {
                      staticClass:
                        "el-picker-panel__icon-btn el-date-picker__next-btn el-icon-d-arrow-right",
                      attrs: {
                        type: "button",
                        "aria-label": _vm.t("el.datepicker.nextYear")
                      },
                      on: { click: _vm.nextYear }
                    }),
                    _c("button", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.currentView === "date",
                          expression: "currentView === 'date'"
                        }
                      ],
                      staticClass:
                        "el-picker-panel__icon-btn el-date-picker__next-btn el-icon-arrow-right",
                      attrs: {
                        type: "button",
                        "aria-label": _vm.t("el.datepicker.nextMonth")
                      },
                      on: { click: _vm.nextMonth }
                    })
                  ]
                ),
                _c(
                  "div",
                  { staticClass: "el-picker-panel__content" },
                  [
                    _c("date-table", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.currentView === "date",
                          expression: "currentView === 'date'"
                        }
                      ],
                      attrs: {
                        "selection-mode": _vm.selectionMode,
                        "first-day-of-week": _vm.firstDayOfWeek,
                        value: _vm.value,
                        "default-value": _vm.defaultValue
                          ? new Date(_vm.defaultValue)
                          : null,
                        date: _vm.date,
                        "disabled-date": _vm.disabledDate
                      },
                      on: { pick: _vm.handleDatePick }
                    }),
                    _c("year-table", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.currentView === "year",
                          expression: "currentView === 'year'"
                        }
                      ],
                      attrs: {
                        value: _vm.value,
                        "default-value": _vm.defaultValue
                          ? new Date(_vm.defaultValue)
                          : null,
                        date: _vm.date,
                        "disabled-date": _vm.disabledDate
                      },
                      on: { pick: _vm.handleYearPick }
                    }),
                    _c("month-table", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.currentView === "month",
                          expression: "currentView === 'month'"
                        }
                      ],
                      attrs: {
                        value: _vm.value,
                        "default-value": _vm.defaultValue
                          ? new Date(_vm.defaultValue)
                          : null,
                        date: _vm.date,
                        "disabled-date": _vm.disabledDate
                      },
                      on: { pick: _vm.handleMonthPick }
                    })
                  ],
                  1
                )
              ])
            ],
            2
          ),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.footerVisible && _vm.currentView === "date",
                  expression: "footerVisible && currentView === 'date'"
                }
              ],
              staticClass: "el-picker-panel__footer"
            },
            [
              _c(
                "el-button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.selectionMode !== "dates",
                      expression: "selectionMode !== 'dates'"
                    }
                  ],
                  staticClass: "el-picker-panel__link-btn",
                  attrs: { size: "mini", type: "text" },
                  on: { click: _vm.changeToNow }
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.t("el.datepicker.now")) +
                      "\n      "
                  )
                ]
              ),
              _c(
                "el-button",
                {
                  staticClass: "el-picker-panel__link-btn",
                  attrs: { plain: "", size: "mini" },
                  on: { click: _vm.confirm }
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.t("el.datepicker.confirm")) +
                      "\n      "
                  )
                ]
              )
            ],
            1
          )
        ]
      )
    ]
  )
}
var datevue_type_template_id_2440d4ea_staticRenderFns = []
datevue_type_template_id_2440d4ea_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-picker/src/panel/date.vue?vue&type=template&id=2440d4ea&

// EXTERNAL MODULE: external "element-mini-ui/lib/button"
var button_ = __webpack_require__(17);
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/date-picker/src/panel/time.vue?vue&type=template&id=3d939089&
var timevue_type_template_id_3d939089_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "el-zoom-in-top" },
      on: {
        "after-leave": function($event) {
          return _vm.$emit("dodestroy")
        }
      }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          staticClass: "el-time-panel el-popper",
          class: _vm.popperClass
        },
        [
          _c(
            "div",
            {
              staticClass: "el-time-panel__content",
              class: { "has-seconds": _vm.showSeconds }
            },
            [
              _c("time-spinner", {
                ref: "spinner",
                attrs: {
                  "arrow-control": _vm.useArrow,
                  "show-seconds": _vm.showSeconds,
                  "am-pm-mode": _vm.amPmMode,
                  date: _vm.date
                },
                on: {
                  change: _vm.handleChange,
                  "select-range": _vm.setSelectionRange
                }
              })
            ],
            1
          ),
          _c("div", { staticClass: "el-time-panel__footer" }, [
            _c(
              "button",
              {
                staticClass: "el-time-panel__btn cancel",
                attrs: { type: "button" },
                on: { click: _vm.handleCancel }
              },
              [_vm._v(_vm._s(_vm.t("el.datepicker.cancel")))]
            ),
            _c(
              "button",
              {
                staticClass: "el-time-panel__btn",
                class: { confirm: !_vm.disabled },
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.handleConfirm()
                  }
                }
              },
              [_vm._v(_vm._s(_vm.t("el.datepicker.confirm")))]
            )
          ])
        ]
      )
    ]
  )
}
var timevue_type_template_id_3d939089_staticRenderFns = []
timevue_type_template_id_3d939089_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-picker/src/panel/time.vue?vue&type=template&id=3d939089&

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/date-picker/src/basic/time-spinner.vue?vue&type=template&id=1facadeb&
var time_spinnervue_type_template_id_1facadeb_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "el-time-spinner",
      class: { "has-seconds": _vm.showSeconds }
    },
    [
      !_vm.arrowControl
        ? [
            _c(
              "el-scrollbar",
              {
                ref: "hours",
                staticClass: "el-time-spinner__wrapper",
                attrs: {
                  "wrap-style": "max-height: inherit;",
                  "view-class": "el-time-spinner__list",
                  noresize: "",
                  tag: "ul"
                },
                nativeOn: {
                  mouseenter: function($event) {
                    return _vm.emitSelectRange("hours")
                  },
                  mousemove: function($event) {
                    return _vm.adjustCurrentSpinner("hours")
                  }
                }
              },
              _vm._l(_vm.hoursList, function(disabled, hour) {
                return _c(
                  "li",
                  {
                    key: hour,
                    staticClass: "el-time-spinner__item",
                    class: { active: hour === _vm.hours, disabled: disabled },
                    on: {
                      click: function($event) {
                        return _vm.handleClick("hours", {
                          value: hour,
                          disabled: disabled
                        })
                      }
                    }
                  },
                  [
                    _vm._v(
                      _vm._s(
                        ("0" + (_vm.amPmMode ? hour % 12 || 12 : hour)).slice(
                          -2
                        )
                      ) + _vm._s(_vm.amPm(hour))
                    )
                  ]
                )
              }),
              0
            ),
            _c(
              "el-scrollbar",
              {
                ref: "minutes",
                staticClass: "el-time-spinner__wrapper",
                attrs: {
                  "wrap-style": "max-height: inherit;",
                  "view-class": "el-time-spinner__list",
                  noresize: "",
                  tag: "ul"
                },
                nativeOn: {
                  mouseenter: function($event) {
                    return _vm.emitSelectRange("minutes")
                  },
                  mousemove: function($event) {
                    return _vm.adjustCurrentSpinner("minutes")
                  }
                }
              },
              _vm._l(_vm.minutesList, function(enabled, key) {
                return _c(
                  "li",
                  {
                    key: key,
                    staticClass: "el-time-spinner__item",
                    class: { active: key === _vm.minutes, disabled: !enabled },
                    on: {
                      click: function($event) {
                        return _vm.handleClick("minutes", {
                          value: key,
                          disabled: false
                        })
                      }
                    }
                  },
                  [_vm._v(_vm._s(("0" + key).slice(-2)))]
                )
              }),
              0
            ),
            _c(
              "el-scrollbar",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showSeconds,
                    expression: "showSeconds"
                  }
                ],
                ref: "seconds",
                staticClass: "el-time-spinner__wrapper",
                attrs: {
                  "wrap-style": "max-height: inherit;",
                  "view-class": "el-time-spinner__list",
                  noresize: "",
                  tag: "ul"
                },
                nativeOn: {
                  mouseenter: function($event) {
                    return _vm.emitSelectRange("seconds")
                  },
                  mousemove: function($event) {
                    return _vm.adjustCurrentSpinner("seconds")
                  }
                }
              },
              _vm._l(60, function(second, key) {
                return _c(
                  "li",
                  {
                    key: key,
                    staticClass: "el-time-spinner__item",
                    class: { active: key === _vm.seconds },
                    on: {
                      click: function($event) {
                        return _vm.handleClick("seconds", {
                          value: key,
                          disabled: false
                        })
                      }
                    }
                  },
                  [_vm._v(_vm._s(("0" + key).slice(-2)))]
                )
              }),
              0
            )
          ]
        : _vm._e(),
      _vm.arrowControl
        ? [
            _c(
              "div",
              {
                staticClass: "el-time-spinner__wrapper is-arrow",
                on: {
                  mouseenter: function($event) {
                    return _vm.emitSelectRange("hours")
                  }
                }
              },
              [
                _c("i", {
                  directives: [
                    {
                      name: "repeat-click",
                      rawName: "v-repeat-click",
                      value: _vm.decrease,
                      expression: "decrease"
                    }
                  ],
                  staticClass: "el-time-spinner__arrow el-icon-arrow-up"
                }),
                _c("i", {
                  directives: [
                    {
                      name: "repeat-click",
                      rawName: "v-repeat-click",
                      value: _vm.increase,
                      expression: "increase"
                    }
                  ],
                  staticClass: "el-time-spinner__arrow el-icon-arrow-down"
                }),
                _c(
                  "ul",
                  { ref: "hours", staticClass: "el-time-spinner__list" },
                  _vm._l(_vm.arrowHourList, function(hour, key) {
                    return _c(
                      "li",
                      {
                        key: key,
                        staticClass: "el-time-spinner__item",
                        class: {
                          active: hour === _vm.hours,
                          disabled: _vm.hoursList[hour]
                        }
                      },
                      [
                        _vm._v(
                          _vm._s(
                            hour === undefined
                              ? ""
                              : (
                                  "0" + (_vm.amPmMode ? hour % 12 || 12 : hour)
                                ).slice(-2) + _vm.amPm(hour)
                          )
                        )
                      ]
                    )
                  }),
                  0
                )
              ]
            ),
            _c(
              "div",
              {
                staticClass: "el-time-spinner__wrapper is-arrow",
                on: {
                  mouseenter: function($event) {
                    return _vm.emitSelectRange("minutes")
                  }
                }
              },
              [
                _c("i", {
                  directives: [
                    {
                      name: "repeat-click",
                      rawName: "v-repeat-click",
                      value: _vm.decrease,
                      expression: "decrease"
                    }
                  ],
                  staticClass: "el-time-spinner__arrow el-icon-arrow-up"
                }),
                _c("i", {
                  directives: [
                    {
                      name: "repeat-click",
                      rawName: "v-repeat-click",
                      value: _vm.increase,
                      expression: "increase"
                    }
                  ],
                  staticClass: "el-time-spinner__arrow el-icon-arrow-down"
                }),
                _c(
                  "ul",
                  { ref: "minutes", staticClass: "el-time-spinner__list" },
                  _vm._l(_vm.arrowMinuteList, function(minute, key) {
                    return _c(
                      "li",
                      {
                        key: key,
                        staticClass: "el-time-spinner__item",
                        class: { active: minute === _vm.minutes }
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(
                              minute === undefined
                                ? ""
                                : ("0" + minute).slice(-2)
                            ) +
                            "\n        "
                        )
                      ]
                    )
                  }),
                  0
                )
              ]
            ),
            _vm.showSeconds
              ? _c(
                  "div",
                  {
                    staticClass: "el-time-spinner__wrapper is-arrow",
                    on: {
                      mouseenter: function($event) {
                        return _vm.emitSelectRange("seconds")
                      }
                    }
                  },
                  [
                    _c("i", {
                      directives: [
                        {
                          name: "repeat-click",
                          rawName: "v-repeat-click",
                          value: _vm.decrease,
                          expression: "decrease"
                        }
                      ],
                      staticClass: "el-time-spinner__arrow el-icon-arrow-up"
                    }),
                    _c("i", {
                      directives: [
                        {
                          name: "repeat-click",
                          rawName: "v-repeat-click",
                          value: _vm.increase,
                          expression: "increase"
                        }
                      ],
                      staticClass: "el-time-spinner__arrow el-icon-arrow-down"
                    }),
                    _c(
                      "ul",
                      { ref: "seconds", staticClass: "el-time-spinner__list" },
                      _vm._l(_vm.arrowSecondList, function(second, key) {
                        return _c(
                          "li",
                          {
                            key: key,
                            staticClass: "el-time-spinner__item",
                            class: { active: second === _vm.seconds }
                          },
                          [
                            _vm._v(
                              "\n          " +
                                _vm._s(
                                  second === undefined
                                    ? ""
                                    : ("0" + second).slice(-2)
                                ) +
                                "\n        "
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ]
                )
              : _vm._e()
          ]
        : _vm._e()
    ],
    2
  )
}
var time_spinnervue_type_template_id_1facadeb_staticRenderFns = []
time_spinnervue_type_template_id_1facadeb_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-picker/src/basic/time-spinner.vue?vue&type=template&id=1facadeb&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/date-picker/src/basic/time-spinner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var time_spinnervue_type_script_lang_js_ = ({
  components: { ElScrollbar: scrollbar_default.a },

  directives: {
    repeatClick: repeat_click
  },

  props: {
    date: {},
    defaultValue: {}, // reserved for future use
    showSeconds: {
      type: Boolean,
      default: true
    },
    arrowControl: Boolean,
    amPmMode: {
      type: String,
      default: '' // 'a': am/pm; 'A': AM/PM
    }
  },

  computed: {
    hours: function hours() {
      return this.date.getHours();
    },
    minutes: function minutes() {
      return this.date.getMinutes();
    },
    seconds: function seconds() {
      return this.date.getSeconds();
    },
    hoursList: function hoursList() {
      return Object(date_util_["getRangeHours"])(this.selectableRange);
    },
    minutesList: function minutesList() {
      return Object(date_util_["getRangeMinutes"])(this.selectableRange, this.hours);
    },
    arrowHourList: function arrowHourList() {
      var hours = this.hours;
      return [hours > 0 ? hours - 1 : undefined, hours, hours < 23 ? hours + 1 : undefined];
    },
    arrowMinuteList: function arrowMinuteList() {
      var minutes = this.minutes;
      return [minutes > 0 ? minutes - 1 : undefined, minutes, minutes < 59 ? minutes + 1 : undefined];
    },
    arrowSecondList: function arrowSecondList() {
      var seconds = this.seconds;
      return [seconds > 0 ? seconds - 1 : undefined, seconds, seconds < 59 ? seconds + 1 : undefined];
    }
  },

  data: function data() {
    return {
      selectableRange: [],
      currentScrollbar: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      !_this.arrowControl && _this.bindScrollEvent();
    });
  },


  methods: {
    increase: function increase() {
      this.scrollDown(1);
    },
    decrease: function decrease() {
      this.scrollDown(-1);
    },
    modifyDateField: function modifyDateField(type, value) {
      switch (type) {
        case 'hours':
          this.$emit('change', Object(date_util_["modifyTime"])(this.date, value, this.minutes, this.seconds));break;
        case 'minutes':
          this.$emit('change', Object(date_util_["modifyTime"])(this.date, this.hours, value, this.seconds));break;
        case 'seconds':
          this.$emit('change', Object(date_util_["modifyTime"])(this.date, this.hours, this.minutes, value));break;
      }
    },
    handleClick: function handleClick(type, _ref) {
      var value = _ref.value,
          disabled = _ref.disabled;

      if (!disabled) {
        this.modifyDateField(type, value);
        this.emitSelectRange(type);
        this.adjustSpinner(type, value);
      }
    },
    emitSelectRange: function emitSelectRange(type) {
      if (type === 'hours') {
        this.$emit('select-range', 0, 2);
      } else if (type === 'minutes') {
        this.$emit('select-range', 3, 5);
      } else if (type === 'seconds') {
        this.$emit('select-range', 6, 8);
      }
      this.currentScrollbar = type;
    },
    bindScrollEvent: function bindScrollEvent() {
      var _this2 = this;

      var bindFuntion = function bindFuntion(type) {
        _this2.$refs[type].wrap.onscroll = function (e) {
          // TODO: scroll is emitted when set scrollTop programatically
          // should find better solutions in the future!
          _this2.handleScroll(type, e);
        };
      };
      bindFuntion('hours');
      bindFuntion('minutes');
      bindFuntion('seconds');
    },
    handleScroll: function handleScroll(type) {
      var value = Math.min(Math.floor((this.$refs[type].wrap.scrollTop - (this.scrollBarHeight(type) * 0.5 - 10) / this.typeItemHeight(type) + 3) / this.typeItemHeight(type)), type === 'hours' ? 23 : 59);
      this.modifyDateField(type, value);
    },


    // NOTE: used by datetime / date-range panel
    //       renamed from adjustScrollTop
    //       should try to refactory it
    adjustSpinners: function adjustSpinners() {
      this.adjustSpinner('hours', this.hours);
      this.adjustSpinner('minutes', this.minutes);
      this.adjustSpinner('seconds', this.seconds);
    },
    adjustCurrentSpinner: function adjustCurrentSpinner(type) {
      this.adjustSpinner(type, this[type]);
    },
    adjustSpinner: function adjustSpinner(type, value) {
      if (this.arrowControl) return;
      var el = this.$refs[type].wrap;
      if (el) {
        el.scrollTop = Math.max(0, value * this.typeItemHeight(type));
      }
    },
    scrollDown: function scrollDown(step) {
      if (!this.currentScrollbar) {
        this.emitSelectRange('hours');
      }

      var label = this.currentScrollbar;
      var hoursList = this.hoursList;
      var now = this[label];

      if (this.currentScrollbar === 'hours') {
        var total = Math.abs(step);
        step = step > 0 ? 1 : -1;
        var length = hoursList.length;
        while (length-- && total) {
          now = (now + step + hoursList.length) % hoursList.length;
          if (hoursList[now]) {
            continue;
          }
          total--;
        }
        if (hoursList[now]) return;
      } else {
        now = (now + step + 60) % 60;
      }

      this.modifyDateField(label, now);
      this.adjustSpinner(label, now);
    },
    amPm: function amPm(hour) {
      var shouldShowAmPm = this.amPmMode.toLowerCase() === 'a';
      if (!shouldShowAmPm) return '';
      var isCapital = this.amPmMode === 'A';
      var content = hour < 12 ? ' am' : ' pm';
      if (isCapital) content = content.toUpperCase();
      return content;
    },
    typeItemHeight: function typeItemHeight(type) {
      return this.$refs[type].$el.querySelector('li').offsetHeight;
    },
    scrollBarHeight: function scrollBarHeight(type) {
      return this.$refs[type].$el.offsetHeight;
    }
  }
});
// CONCATENATED MODULE: ./packages/date-picker/src/basic/time-spinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var basic_time_spinnervue_type_script_lang_js_ = (time_spinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-picker/src/basic/time-spinner.vue





/* normalize component */

var time_spinner_component = normalizeComponent(
  basic_time_spinnervue_type_script_lang_js_,
  time_spinnervue_type_template_id_1facadeb_render,
  time_spinnervue_type_template_id_1facadeb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var time_spinner_api; }
time_spinner_component.options.__file = "packages/date-picker/src/basic/time-spinner.vue"
/* harmony default export */ var time_spinner = (time_spinner_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/date-picker/src/panel/time.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var timevue_type_script_lang_js_ = ({
  mixins: [locale_default.a],

  components: {
    TimeSpinner: time_spinner
  },

  props: {
    visible: Boolean,
    timeArrowControl: Boolean
  },

  watch: {
    visible: function visible(val) {
      var _this = this;

      if (val) {
        this.oldValue = this.value;
        this.$nextTick(function () {
          return _this.$refs.spinner.emitSelectRange('hours');
        });
      } else {
        this.needInitAdjust = true;
      }
    },
    value: function value(newVal) {
      var _this2 = this;

      var date = void 0;
      if (newVal instanceof Date) {
        date = Object(date_util_["limitTimeRange"])(newVal, this.selectableRange, this.format);
      } else if (!newVal) {
        date = this.defaultValue ? new Date(this.defaultValue) : new Date();
      }

      this.date = date;
      if (this.visible && this.needInitAdjust) {
        this.$nextTick(function (_) {
          return _this2.adjustSpinners();
        });
        this.needInitAdjust = false;
      }
    },
    selectableRange: function selectableRange(val) {
      this.$refs.spinner.selectableRange = val;
    },
    defaultValue: function defaultValue(val) {
      if (!Object(date_util_["isDate"])(this.value)) {
        this.date = val ? new Date(val) : new Date();
      }
    }
  },

  data: function data() {
    return {
      popperClass: '',
      format: 'HH:mm:ss',
      value: '',
      defaultValue: null,
      date: new Date(),
      oldValue: new Date(),
      selectableRange: [],
      selectionRange: [0, 2],
      disabled: false,
      arrowControl: false,
      needInitAdjust: true
    };
  },


  computed: {
    showSeconds: function showSeconds() {
      return (this.format || '').indexOf('ss') !== -1;
    },
    useArrow: function useArrow() {
      return this.arrowControl || this.timeArrowControl || false;
    },
    amPmMode: function amPmMode() {
      if ((this.format || '').indexOf('A') !== -1) return 'A';
      if ((this.format || '').indexOf('a') !== -1) return 'a';
      return '';
    }
  },

  methods: {
    handleCancel: function handleCancel() {
      this.$emit('pick', this.oldValue, false);
    },
    handleChange: function handleChange(date) {
      // this.visible avoids edge cases, when use scrolls during panel closing animation
      if (this.visible) {
        this.date = Object(date_util_["clearMilliseconds"])(date);
        // if date is out of range, do not emit
        if (this.isValidValue(this.date)) {
          this.$emit('pick', this.date, true);
        }
      }
    },
    setSelectionRange: function setSelectionRange(start, end) {
      this.$emit('select-range', start, end);
      this.selectionRange = [start, end];
    },
    handleConfirm: function handleConfirm() {
      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var first = arguments[1];

      if (first) return;
      var date = Object(date_util_["clearMilliseconds"])(Object(date_util_["limitTimeRange"])(this.date, this.selectableRange, this.format));
      this.$emit('pick', date, visible, first);
    },
    handleKeydown: function handleKeydown(event) {
      var keyCode = event.keyCode;
      var mapping = { 38: -1, 40: 1, 37: -1, 39: 1 };

      // Left or Right
      if (keyCode === 37 || keyCode === 39) {
        var step = mapping[keyCode];
        this.changeSelectionRange(step);
        event.preventDefault();
        return;
      }

      // Up or Down
      if (keyCode === 38 || keyCode === 40) {
        var _step = mapping[keyCode];
        this.$refs.spinner.scrollDown(_step);
        event.preventDefault();
        return;
      }
    },
    isValidValue: function isValidValue(date) {
      return Object(date_util_["timeWithinRange"])(date, this.selectableRange, this.format);
    },
    adjustSpinners: function adjustSpinners() {
      return this.$refs.spinner.adjustSpinners();
    },
    changeSelectionRange: function changeSelectionRange(step) {
      var list = [0, 3].concat(this.showSeconds ? [6] : []);
      var mapping = ['hours', 'minutes'].concat(this.showSeconds ? ['seconds'] : []);
      var index = list.indexOf(this.selectionRange[0]);
      var next = (index + step + list.length) % list.length;
      this.$refs.spinner.emitSelectRange(mapping[next]);
    }
  },

  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick(function () {
      return _this3.handleConfirm(true, true);
    });
    this.$emit('mounted');
  }
});
// CONCATENATED MODULE: ./packages/date-picker/src/panel/time.vue?vue&type=script&lang=js&
 /* harmony default export */ var panel_timevue_type_script_lang_js_ = (timevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-picker/src/panel/time.vue





/* normalize component */

var time_component = normalizeComponent(
  panel_timevue_type_script_lang_js_,
  timevue_type_template_id_3d939089_render,
  timevue_type_template_id_3d939089_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var time_api; }
time_component.options.__file = "packages/date-picker/src/panel/time.vue"
/* harmony default export */ var panel_time = (time_component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/date-picker/src/basic/year-table.vue?vue&type=template&id=c86ab5e0&
var year_tablevue_type_template_id_c86ab5e0_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "table",
    { staticClass: "el-year-table", on: { click: _vm.handleYearTableClick } },
    [
      _c("tbody", [
        _c("tr", [
          _c(
            "td",
            {
              staticClass: "available",
              class: _vm.getCellStyle(_vm.startYear + 0)
            },
            [_c("a", { staticClass: "cell" }, [_vm._v(_vm._s(_vm.startYear))])]
          ),
          _c(
            "td",
            {
              staticClass: "available",
              class: _vm.getCellStyle(_vm.startYear + 1)
            },
            [
              _c("a", { staticClass: "cell" }, [
                _vm._v(_vm._s(_vm.startYear + 1))
              ])
            ]
          ),
          _c(
            "td",
            {
              staticClass: "available",
              class: _vm.getCellStyle(_vm.startYear + 2)
            },
            [
              _c("a", { staticClass: "cell" }, [
                _vm._v(_vm._s(_vm.startYear + 2))
              ])
            ]
          ),
          _c(
            "td",
            {
              staticClass: "available",
              class: _vm.getCellStyle(_vm.startYear + 3)
            },
            [
              _c("a", { staticClass: "cell" }, [
                _vm._v(_vm._s(_vm.startYear + 3))
              ])
            ]
          )
        ]),
        _c("tr", [
          _c(
            "td",
            {
              staticClass: "available",
              class: _vm.getCellStyle(_vm.startYear + 4)
            },
            [
              _c("a", { staticClass: "cell" }, [
                _vm._v(_vm._s(_vm.startYear + 4))
              ])
            ]
          ),
          _c(
            "td",
            {
              staticClass: "available",
              class: _vm.getCellStyle(_vm.startYear + 5)
            },
            [
              _c("a", { staticClass: "cell" }, [
                _vm._v(_vm._s(_vm.startYear + 5))
              ])
            ]
          ),
          _c(
            "td",
            {
              staticClass: "available",
              class: _vm.getCellStyle(_vm.startYear + 6)
            },
            [
              _c("a", { staticClass: "cell" }, [
                _vm._v(_vm._s(_vm.startYear + 6))
              ])
            ]
          ),
          _c(
            "td",
            {
              staticClass: "available",
              class: _vm.getCellStyle(_vm.startYear + 7)
            },
            [
              _c("a", { staticClass: "cell" }, [
                _vm._v(_vm._s(_vm.startYear + 7))
              ])
            ]
          )
        ]),
        _c("tr", [
          _c(
            "td",
            {
              staticClass: "available",
              class: _vm.getCellStyle(_vm.startYear + 8)
            },
            [
              _c("a", { staticClass: "cell" }, [
                _vm._v(_vm._s(_vm.startYear + 8))
              ])
            ]
          ),
          _c(
            "td",
            {
              staticClass: "available",
              class: _vm.getCellStyle(_vm.startYear + 9)
            },
            [
              _c("a", { staticClass: "cell" }, [
                _vm._v(_vm._s(_vm.startYear + 9))
              ])
            ]
          ),
          _c("td"),
          _c("td")
        ])
      ])
    ]
  )
}
var year_tablevue_type_template_id_c86ab5e0_staticRenderFns = []
year_tablevue_type_template_id_c86ab5e0_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-picker/src/basic/year-table.vue?vue&type=template&id=c86ab5e0&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/date-picker/src/basic/year-table.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var year_tablevue_type_script_lang_js_datesInYear = function datesInYear(year) {
  var numOfDays = Object(date_util_["getDayCountOfYear"])(year);
  var firstDay = new Date(year, 0, 1);
  return Object(date_util_["range"])(numOfDays).map(function (n) {
    return Object(date_util_["nextDate"])(firstDay, n);
  });
};

/* harmony default export */ var year_tablevue_type_script_lang_js_ = ({
  props: {
    disabledDate: {},
    value: {},
    defaultValue: {
      validator: function validator(val) {
        // null or valid Date Object
        return val === null || val instanceof Date && Object(date_util_["isDate"])(val);
      }
    },
    date: {}
  },

  computed: {
    startYear: function startYear() {
      return Math.floor(this.date.getFullYear() / 10) * 10;
    }
  },

  methods: {
    getCellStyle: function getCellStyle(year) {
      var style = {};
      var today = new Date();

      style.disabled = typeof this.disabledDate === 'function' ? year_tablevue_type_script_lang_js_datesInYear(year).every(this.disabledDate) : false;
      style.current = Object(util_["arrayFindIndex"])(Object(util_["coerceTruthyValueToArray"])(this.value), function (date) {
        return date.getFullYear() === year;
      }) >= 0;
      style.today = today.getFullYear() === year;
      style.default = this.defaultValue && this.defaultValue.getFullYear() === year;

      return style;
    },
    handleYearTableClick: function handleYearTableClick(event) {
      var target = event.target;
      if (target.tagName === 'A') {
        if (Object(dom_["hasClass"])(target.parentNode, 'disabled')) return;
        var year = target.textContent || target.innerText;
        this.$emit('pick', Number(year));
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/date-picker/src/basic/year-table.vue?vue&type=script&lang=js&
 /* harmony default export */ var basic_year_tablevue_type_script_lang_js_ = (year_tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-picker/src/basic/year-table.vue





/* normalize component */

var year_table_component = normalizeComponent(
  basic_year_tablevue_type_script_lang_js_,
  year_tablevue_type_template_id_c86ab5e0_render,
  year_tablevue_type_template_id_c86ab5e0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var year_table_api; }
year_table_component.options.__file = "packages/date-picker/src/basic/year-table.vue"
/* harmony default export */ var year_table = (year_table_component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/date-picker/src/basic/month-table.vue?vue&type=template&id=654d4f42&
var month_tablevue_type_template_id_654d4f42_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "table",
    {
      staticClass: "el-month-table",
      on: { click: _vm.handleMonthTableClick, mousemove: _vm.handleMouseMove }
    },
    [
      _c(
        "tbody",
        _vm._l(_vm.rows, function(row, key) {
          return _c(
            "tr",
            { key: key },
            _vm._l(row, function(cell, key) {
              return _c("td", { key: key, class: _vm.getCellStyle(cell) }, [
                _c("div", [
                  _c("a", { staticClass: "cell" }, [
                    _vm._v(
                      _vm._s(
                        _vm.t("el.datepicker.months." + _vm.months[cell.text])
                      )
                    )
                  ])
                ])
              ])
            }),
            0
          )
        }),
        0
      )
    ]
  )
}
var month_tablevue_type_template_id_654d4f42_staticRenderFns = []
month_tablevue_type_template_id_654d4f42_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-picker/src/basic/month-table.vue?vue&type=template&id=654d4f42&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/date-picker/src/basic/month-table.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var month_tablevue_type_script_lang_js_datesInMonth = function datesInMonth(year, month) {
  var numOfDays = Object(date_util_["getDayCountOfMonth"])(year, month);
  var firstDay = new Date(year, month, 1);
  return Object(date_util_["range"])(numOfDays).map(function (n) {
    return Object(date_util_["nextDate"])(firstDay, n);
  });
};

var clearDate = function clearDate(date) {
  return new Date(date.getFullYear(), date.getMonth());
};

var getMonthTimestamp = function getMonthTimestamp(time) {
  if (typeof time === 'number' || typeof time === 'string') {
    return clearDate(new Date(time)).getTime();
  } else if (time instanceof Date) {
    return clearDate(time).getTime();
  } else {
    return NaN;
  }
};
/* harmony default export */ var month_tablevue_type_script_lang_js_ = ({
  props: {
    disabledDate: {},
    value: {},
    selectionMode: {
      default: 'month'
    },
    minDate: {},

    maxDate: {},
    defaultValue: {
      validator: function validator(val) {
        // null or valid Date Object
        return val === null || Object(date_util_["isDate"])(val) || Array.isArray(val) && val.every(date_util_["isDate"]);
      }
    },
    date: {},
    rangeState: {
      default: function _default() {
        return {
          endDate: null,
          selecting: false
        };
      }
    }
  },

  mixins: [locale_default.a],

  watch: {
    'rangeState.endDate': function rangeStateEndDate(newVal) {
      this.markRange(this.minDate, newVal);
    },
    minDate: function minDate(newVal, oldVal) {
      if (getMonthTimestamp(newVal) !== getMonthTimestamp(oldVal)) {
        this.markRange(this.minDate, this.maxDate);
      }
    },
    maxDate: function maxDate(newVal, oldVal) {
      if (getMonthTimestamp(newVal) !== getMonthTimestamp(oldVal)) {
        this.markRange(this.minDate, this.maxDate);
      }
    }
  },

  data: function data() {
    return {
      months: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
      tableRows: [[], [], []],
      lastRow: null,
      lastColumn: null
    };
  },


  methods: {
    cellMatchesDate: function cellMatchesDate(cell, date) {
      var value = new Date(date);
      return this.date.getFullYear() === value.getFullYear() && Number(cell.text) === value.getMonth();
    },
    getCellStyle: function getCellStyle(cell) {
      var _this = this;

      var style = {};
      var year = this.date.getFullYear();
      var today = new Date();
      var month = cell.text;
      var defaultValue = this.defaultValue ? Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue] : [];
      style.disabled = typeof this.disabledDate === 'function' ? month_tablevue_type_script_lang_js_datesInMonth(year, month).every(this.disabledDate) : false;
      style.current = Object(util_["arrayFindIndex"])(Object(util_["coerceTruthyValueToArray"])(this.value), function (date) {
        return date.getFullYear() === year && date.getMonth() === month;
      }) >= 0;
      style.today = today.getFullYear() === year && today.getMonth() === month;
      style.default = defaultValue.some(function (date) {
        return _this.cellMatchesDate(cell, date);
      });

      if (cell.inRange) {
        style['in-range'] = true;

        if (cell.start) {
          style['start-date'] = true;
        }

        if (cell.end) {
          style['end-date'] = true;
        }
      }
      return style;
    },
    getMonthOfCell: function getMonthOfCell(month) {
      var year = this.date.getFullYear();
      return new Date(year, month, 1);
    },
    markRange: function markRange(minDate, maxDate) {
      minDate = getMonthTimestamp(minDate);
      maxDate = getMonthTimestamp(maxDate) || minDate;
      var _ref = [Math.min(minDate, maxDate), Math.max(minDate, maxDate)];
      minDate = _ref[0];
      maxDate = _ref[1];

      var rows = this.rows;
      for (var i = 0, k = rows.length; i < k; i++) {
        var row = rows[i];
        for (var j = 0, l = row.length; j < l; j++) {

          var cell = row[j];
          var index = i * 4 + j;
          var time = new Date(this.date.getFullYear(), index).getTime();

          cell.inRange = minDate && time >= minDate && time <= maxDate;
          cell.start = minDate && time === minDate;
          cell.end = maxDate && time === maxDate;
        }
      }
    },
    handleMouseMove: function handleMouseMove(event) {
      if (!this.rangeState.selecting) return;

      var target = event.target;
      if (target.tagName === 'A') {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode;
      }
      if (target.tagName !== 'TD') return;

      var row = target.parentNode.rowIndex;
      var column = target.cellIndex;
      // can not select disabled date
      if (this.rows[row][column].disabled) return;

      // only update rangeState when mouse moves to a new cell
      // this avoids frequent Date object creation and improves performance
      if (row !== this.lastRow || column !== this.lastColumn) {
        this.lastRow = row;
        this.lastColumn = column;
        this.$emit('changerange', {
          minDate: this.minDate,
          maxDate: this.maxDate,
          rangeState: {
            selecting: true,
            endDate: this.getMonthOfCell(row * 4 + column)
          }
        });
      }
    },
    handleMonthTableClick: function handleMonthTableClick(event) {
      var target = event.target;
      if (target.tagName === 'A') {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode;
      }
      if (target.tagName !== 'TD') return;
      if (Object(dom_["hasClass"])(target, 'disabled')) return;
      var column = target.cellIndex;
      var row = target.parentNode.rowIndex;
      var month = row * 4 + column;
      var newDate = this.getMonthOfCell(month);
      if (this.selectionMode === 'range') {
        if (!this.rangeState.selecting) {
          this.$emit('pick', { minDate: newDate, maxDate: null });
          this.rangeState.selecting = true;
        } else {
          if (newDate >= this.minDate) {
            this.$emit('pick', { minDate: this.minDate, maxDate: newDate });
          } else {
            this.$emit('pick', { minDate: newDate, maxDate: this.minDate });
          }
          this.rangeState.selecting = false;
        }
      } else {
        this.$emit('pick', month);
      }
    }
  },

  computed: {
    rows: function rows() {
      var _this2 = this;

      // TODO: refactory rows / getCellClasses
      var rows = this.tableRows;
      var disabledDate = this.disabledDate;
      var selectedDate = [];
      var now = getMonthTimestamp(new Date());

      for (var i = 0; i < 3; i++) {
        var row = rows[i];

        var _loop = function _loop(j) {
          var cell = row[j];
          if (!cell) {
            cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false };
          }

          cell.type = 'normal';

          var index = i * 4 + j;
          var time = new Date(_this2.date.getFullYear(), index).getTime();
          cell.inRange = time >= getMonthTimestamp(_this2.minDate) && time <= getMonthTimestamp(_this2.maxDate);
          cell.start = _this2.minDate && time === getMonthTimestamp(_this2.minDate);
          cell.end = _this2.maxDate && time === getMonthTimestamp(_this2.maxDate);
          var isToday = time === now;

          if (isToday) {
            cell.type = 'today';
          }
          cell.text = index;
          var cellDate = new Date(time);
          cell.disabled = typeof disabledDate === 'function' && disabledDate(cellDate);
          cell.selected = Object(util_["arrayFind"])(selectedDate, function (date) {
            return date.getTime() === cellDate.getTime();
          });

          _this2.$set(row, j, cell);
        };

        for (var j = 0; j < 4; j++) {
          _loop(j);
        }
      }
      return rows;
    }
  }
});
// CONCATENATED MODULE: ./packages/date-picker/src/basic/month-table.vue?vue&type=script&lang=js&
 /* harmony default export */ var basic_month_tablevue_type_script_lang_js_ = (month_tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-picker/src/basic/month-table.vue





/* normalize component */

var month_table_component = normalizeComponent(
  basic_month_tablevue_type_script_lang_js_,
  month_tablevue_type_template_id_654d4f42_render,
  month_tablevue_type_template_id_654d4f42_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var month_table_api; }
month_table_component.options.__file = "packages/date-picker/src/basic/month-table.vue"
/* harmony default export */ var month_table = (month_table_component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/date-picker/src/basic/date-table.vue?vue&type=template&id=5d1f3341&
var date_tablevue_type_template_id_5d1f3341_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "table",
    {
      staticClass: "el-date-table",
      class: { "is-week-mode": _vm.selectionMode === "week" },
      attrs: { cellspacing: "0", cellpadding: "0" },
      on: { click: _vm.handleClick, mousemove: _vm.handleMouseMove }
    },
    [
      _c(
        "tbody",
        [
          _c(
            "tr",
            [
              _vm.showWeekNumber
                ? _c("th", [_vm._v(_vm._s(_vm.t("el.datepicker.week")))])
                : _vm._e(),
              _vm._l(_vm.WEEKS, function(week, key) {
                return _c("th", { key: key }, [
                  _vm._v(_vm._s(_vm.t("el.datepicker.weeks." + week)))
                ])
              })
            ],
            2
          ),
          _vm._l(_vm.rows, function(row, key) {
            return _c(
              "tr",
              {
                key: key,
                staticClass: "el-date-table__row",
                class: { current: _vm.isWeekActive(row[1]) }
              },
              _vm._l(row, function(cell, key) {
                return _c("td", { key: key, class: _vm.getCellClasses(cell) }, [
                  _c("div", [
                    _c("span", [
                      _vm._v("\n          " + _vm._s(cell.text) + "\n        ")
                    ])
                  ])
                ])
              }),
              0
            )
          })
        ],
        2
      )
    ]
  )
}
var date_tablevue_type_template_id_5d1f3341_staticRenderFns = []
date_tablevue_type_template_id_5d1f3341_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-picker/src/basic/date-table.vue?vue&type=template&id=5d1f3341&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/date-picker/src/basic/date-table.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var _WEEKS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
var date_tablevue_type_script_lang_js_getDateTimestamp = function getDateTimestamp(time) {
  if (typeof time === 'number' || typeof time === 'string') {
    return Object(date_util_["clearTime"])(new Date(time)).getTime();
  } else if (time instanceof Date) {
    return Object(date_util_["clearTime"])(time).getTime();
  } else {
    return NaN;
  }
};

// remove the first element that satisfies `pred` from arr
// return a new array if modification occurs
// return the original array otherwise
var date_tablevue_type_script_lang_js_removeFromArray = function removeFromArray(arr, pred) {
  var idx = typeof pred === 'function' ? Object(util_["arrayFindIndex"])(arr, pred) : arr.indexOf(pred);
  return idx >= 0 ? [].concat(arr.slice(0, idx), arr.slice(idx + 1)) : arr;
};

/* harmony default export */ var date_tablevue_type_script_lang_js_ = ({
  mixins: [locale_default.a],

  props: {
    firstDayOfWeek: {
      default: 7,
      type: Number,
      validator: function validator(val) {
        return val >= 1 && val <= 7;
      }
    },

    value: {},

    defaultValue: {
      validator: function validator(val) {
        // either: null, valid Date object, Array of valid Date objects
        return val === null || Object(date_util_["isDate"])(val) || Array.isArray(val) && val.every(date_util_["isDate"]);
      }
    },

    date: {},

    selectionMode: {
      default: 'day'
    },

    showWeekNumber: {
      type: Boolean,
      default: false
    },

    disabledDate: {},

    minDate: {},

    maxDate: {},

    rangeState: {
      default: function _default() {
        return {
          endDate: null,
          selecting: false
        };
      }
    }
  },

  computed: {
    offsetDay: function offsetDay() {
      var week = this.firstDayOfWeek;
      // 周日为界限，左右偏移的天数，3217654 例如周一就是 -1，目的是调整前两行日期的位置
      return week > 3 ? 7 - week : -week;
    },
    WEEKS: function WEEKS() {
      var week = this.firstDayOfWeek;
      return _WEEKS.concat(_WEEKS).slice(week, week + 7);
    },
    year: function year() {
      return this.date.getFullYear();
    },
    month: function month() {
      return this.date.getMonth();
    },
    startDate: function startDate() {
      return Object(date_util_["getStartDateOfMonth"])(this.year, this.month);
    },
    rows: function rows() {
      var _this = this;

      // TODO: refactory rows / getCellClasses
      var date = new Date(this.year, this.month, 1);
      var day = Object(date_util_["getFirstDayOfMonth"])(date); // day of first day
      var dateCountOfMonth = Object(date_util_["getDayCountOfMonth"])(date.getFullYear(), date.getMonth());
      var dateCountOfLastMonth = Object(date_util_["getDayCountOfMonth"])(date.getFullYear(), date.getMonth() === 0 ? 11 : date.getMonth() - 1);

      day = day === 0 ? 7 : day;

      var offset = this.offsetDay;
      var rows = this.tableRows;
      var count = 1;

      var startDate = this.startDate;
      var disabledDate = this.disabledDate;
      var selectedDate = this.selectionMode === 'dates' ? Object(util_["coerceTruthyValueToArray"])(this.value) : [];
      var now = date_tablevue_type_script_lang_js_getDateTimestamp(new Date());

      for (var i = 0; i < 6; i++) {
        var row = rows[i];

        if (this.showWeekNumber) {
          if (!row[0]) {
            row[0] = { type: 'week', text: Object(date_util_["getWeekNumber"])(Object(date_util_["nextDate"])(startDate, i * 7 + 1)) };
          }
        }

        var _loop = function _loop(j) {
          var cell = row[_this.showWeekNumber ? j + 1 : j];
          if (!cell) {
            cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false };
          }

          cell.type = 'normal';

          var index = i * 7 + j;
          var time = Object(date_util_["nextDate"])(startDate, index - offset).getTime();
          cell.inRange = time >= date_tablevue_type_script_lang_js_getDateTimestamp(_this.minDate) && time <= date_tablevue_type_script_lang_js_getDateTimestamp(_this.maxDate);
          cell.start = _this.minDate && time === date_tablevue_type_script_lang_js_getDateTimestamp(_this.minDate);
          cell.end = _this.maxDate && time === date_tablevue_type_script_lang_js_getDateTimestamp(_this.maxDate);
          var isToday = time === now;

          if (isToday) {
            cell.type = 'today';
          }

          if (i >= 0 && i <= 1) {
            var numberOfDaysFromPreviousMonth = day + offset < 0 ? 7 + day + offset : day + offset;

            if (j + i * 7 >= numberOfDaysFromPreviousMonth) {
              cell.text = count++;
            } else {
              cell.text = dateCountOfLastMonth - (numberOfDaysFromPreviousMonth - j % 7) + 1 + i * 7;
              cell.type = 'prev-month';
            }
          } else {
            if (count <= dateCountOfMonth) {
              cell.text = count++;
            } else {
              cell.text = count++ - dateCountOfMonth;
              cell.type = 'next-month';
            }
          }

          var cellDate = new Date(time);
          cell.disabled = typeof disabledDate === 'function' && disabledDate(cellDate);
          cell.selected = Object(util_["arrayFind"])(selectedDate, function (date) {
            return date.getTime() === cellDate.getTime();
          });

          _this.$set(row, _this.showWeekNumber ? j + 1 : j, cell);
        };

        for (var j = 0; j < 7; j++) {
          _loop(j);
        }

        if (this.selectionMode === 'week') {
          var start = this.showWeekNumber ? 1 : 0;
          var end = this.showWeekNumber ? 7 : 6;
          var isWeekActive = this.isWeekActive(row[start + 1]);

          row[start].inRange = isWeekActive;
          row[start].start = isWeekActive;
          row[end].inRange = isWeekActive;
          row[end].end = isWeekActive;
        }
      }

      return rows;
    }
  },

  watch: {
    'rangeState.endDate': function rangeStateEndDate(newVal) {
      this.markRange(this.minDate, newVal);
    },
    minDate: function minDate(newVal, oldVal) {
      if (date_tablevue_type_script_lang_js_getDateTimestamp(newVal) !== date_tablevue_type_script_lang_js_getDateTimestamp(oldVal)) {
        this.markRange(this.minDate, this.maxDate);
      }
    },
    maxDate: function maxDate(newVal, oldVal) {
      if (date_tablevue_type_script_lang_js_getDateTimestamp(newVal) !== date_tablevue_type_script_lang_js_getDateTimestamp(oldVal)) {
        this.markRange(this.minDate, this.maxDate);
      }
    }
  },

  data: function data() {
    return {
      tableRows: [[], [], [], [], [], []],
      lastRow: null,
      lastColumn: null
    };
  },


  methods: {
    cellMatchesDate: function cellMatchesDate(cell, date) {
      var value = new Date(date);
      return this.year === value.getFullYear() && this.month === value.getMonth() && Number(cell.text) === value.getDate();
    },
    getCellClasses: function getCellClasses(cell) {
      var _this2 = this;

      var selectionMode = this.selectionMode;
      var defaultValue = this.defaultValue ? Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue] : [];

      var classes = [];
      if ((cell.type === 'normal' || cell.type === 'today') && !cell.disabled) {
        classes.push('available');
        if (cell.type === 'today') {
          classes.push('today');
        }
      } else {
        classes.push(cell.type);
      }

      if (cell.type === 'normal' && defaultValue.some(function (date) {
        return _this2.cellMatchesDate(cell, date);
      })) {
        classes.push('default');
      }

      if (selectionMode === 'day' && (cell.type === 'normal' || cell.type === 'today') && this.cellMatchesDate(cell, this.value)) {
        classes.push('current');
      }

      if (cell.inRange && (cell.type === 'normal' || cell.type === 'today' || this.selectionMode === 'week')) {
        classes.push('in-range');

        if (cell.start) {
          classes.push('start-date');
        }

        if (cell.end) {
          classes.push('end-date');
        }
      }

      if (cell.disabled) {
        classes.push('disabled');
      }

      if (cell.selected) {
        classes.push('selected');
      }

      return classes.join(' ');
    },
    getDateOfCell: function getDateOfCell(row, column) {
      var offsetFromStart = row * 7 + (column - (this.showWeekNumber ? 1 : 0)) - this.offsetDay;
      return Object(date_util_["nextDate"])(this.startDate, offsetFromStart);
    },
    isWeekActive: function isWeekActive(cell) {
      if (this.selectionMode !== 'week') return false;
      var newDate = new Date(this.year, this.month, 1);
      var year = newDate.getFullYear();
      var month = newDate.getMonth();

      if (cell.type === 'prev-month') {
        newDate.setMonth(month === 0 ? 11 : month - 1);
        newDate.setFullYear(month === 0 ? year - 1 : year);
      }

      if (cell.type === 'next-month') {
        newDate.setMonth(month === 11 ? 0 : month + 1);
        newDate.setFullYear(month === 11 ? year + 1 : year);
      }

      newDate.setDate(parseInt(cell.text, 10));

      if (Object(date_util_["isDate"])(this.value)) {
        var dayOffset = (this.value.getDay() - this.firstDayOfWeek + 7) % 7 - 1;
        var weekDate = Object(date_util_["prevDate"])(this.value, dayOffset);
        return weekDate.getTime() === newDate.getTime();
      }
      return false;
    },
    markRange: function markRange(minDate, maxDate) {
      minDate = date_tablevue_type_script_lang_js_getDateTimestamp(minDate);
      maxDate = date_tablevue_type_script_lang_js_getDateTimestamp(maxDate) || minDate;
      var _ref = [Math.min(minDate, maxDate), Math.max(minDate, maxDate)];
      minDate = _ref[0];
      maxDate = _ref[1];


      var startDate = this.startDate;
      var rows = this.rows;
      for (var i = 0, k = rows.length; i < k; i++) {
        var row = rows[i];
        for (var j = 0, l = row.length; j < l; j++) {
          if (this.showWeekNumber && j === 0) continue;

          var _cell = row[j];
          var index = i * 7 + j + (this.showWeekNumber ? -1 : 0);
          var time = Object(date_util_["nextDate"])(startDate, index - this.offsetDay).getTime();

          _cell.inRange = minDate && time >= minDate && time <= maxDate;
          _cell.start = minDate && time === minDate;
          _cell.end = maxDate && time === maxDate;
        }
      }
    },
    handleMouseMove: function handleMouseMove(event) {
      if (!this.rangeState.selecting) return;

      var target = event.target;
      if (target.tagName === 'SPAN') {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode;
      }
      if (target.tagName !== 'TD') return;

      var row = target.parentNode.rowIndex - 1;
      var column = target.cellIndex;

      // can not select disabled date
      if (this.rows[row][column].disabled) return;

      // only update rangeState when mouse moves to a new cell
      // this avoids frequent Date object creation and improves performance
      if (row !== this.lastRow || column !== this.lastColumn) {
        this.lastRow = row;
        this.lastColumn = column;
        this.$emit('changerange', {
          minDate: this.minDate,
          maxDate: this.maxDate,
          rangeState: {
            selecting: true,
            endDate: this.getDateOfCell(row, column)
          }
        });
      }
    },
    handleClick: function handleClick(event) {
      var target = event.target;
      if (target.tagName === 'SPAN') {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode;
      }

      if (target.tagName !== 'TD') return;

      var row = target.parentNode.rowIndex - 1;
      var column = this.selectionMode === 'week' ? 1 : target.cellIndex;
      var cell = this.rows[row][column];

      if (cell.disabled || cell.type === 'week') return;

      var newDate = this.getDateOfCell(row, column);

      if (this.selectionMode === 'range') {
        if (!this.rangeState.selecting) {
          this.$emit('pick', { minDate: newDate, maxDate: null });
          this.rangeState.selecting = true;
        } else {
          if (newDate >= this.minDate) {
            this.$emit('pick', { minDate: this.minDate, maxDate: newDate });
          } else {
            this.$emit('pick', { minDate: newDate, maxDate: this.minDate });
          }
          this.rangeState.selecting = false;
        }
      } else if (this.selectionMode === 'day') {
        this.$emit('pick', newDate);
      } else if (this.selectionMode === 'week') {
        var weekNumber = Object(date_util_["getWeekNumber"])(newDate);
        var value = newDate.getFullYear() + 'w' + weekNumber;
        this.$emit('pick', {
          year: newDate.getFullYear(),
          week: weekNumber,
          value: value,
          date: newDate
        });
      } else if (this.selectionMode === 'dates') {
        var _value = this.value || [];
        var newValue = cell.selected ? date_tablevue_type_script_lang_js_removeFromArray(_value, function (date) {
          return date.getTime() === newDate.getTime();
        }) : [].concat(_value, [newDate]);
        this.$emit('pick', newValue);
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/date-picker/src/basic/date-table.vue?vue&type=script&lang=js&
 /* harmony default export */ var basic_date_tablevue_type_script_lang_js_ = (date_tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-picker/src/basic/date-table.vue





/* normalize component */

var date_table_component = normalizeComponent(
  basic_date_tablevue_type_script_lang_js_,
  date_tablevue_type_template_id_5d1f3341_render,
  date_tablevue_type_template_id_5d1f3341_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var date_table_api; }
date_table_component.options.__file = "packages/date-picker/src/basic/date-table.vue"
/* harmony default export */ var date_table = (date_table_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/date-picker/src/panel/date.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











/* harmony default export */ var datevue_type_script_lang_js_ = ({
  mixins: [locale_default.a],

  directives: { Clickoutside: clickoutside_default.a },

  watch: {
    showTime: function showTime(val) {
      var _this = this;

      /* istanbul ignore if */
      if (!val) return;
      this.$nextTick(function (_) {
        var inputElm = _this.$refs.input.$el;
        if (inputElm) {
          _this.pickerWidth = inputElm.getBoundingClientRect().width + 10;
        }
      });
    },
    value: function value(val) {
      if (this.selectionMode === 'dates' && this.value) return;
      if (Object(date_util_["isDate"])(val)) {
        this.date = new Date(val);
      } else {
        this.date = this.getDefaultValue();
      }
    },
    defaultValue: function defaultValue(val) {
      if (!Object(date_util_["isDate"])(this.value)) {
        this.date = val ? new Date(val) : new Date();
      }
    },
    timePickerVisible: function timePickerVisible(val) {
      var _this2 = this;

      if (val) this.$nextTick(function () {
        return _this2.$refs.timepicker.adjustSpinners();
      });
    },
    selectionMode: function selectionMode(newVal) {
      if (newVal === 'month') {
        /* istanbul ignore next */
        if (this.currentView !== 'year' || this.currentView !== 'month') {
          this.currentView = 'month';
        }
      } else if (newVal === 'dates') {
        this.currentView = 'date';
      }
    }
  },

  methods: {
    proxyTimePickerDataProperties: function proxyTimePickerDataProperties() {
      var _this3 = this;

      var format = function format(timeFormat) {
        _this3.$refs.timepicker.format = timeFormat;
      };
      var value = function value(_value) {
        _this3.$refs.timepicker.value = _value;
      };
      var date = function date(_date) {
        _this3.$refs.timepicker.date = _date;
      };
      var selectableRange = function selectableRange(_selectableRange) {
        _this3.$refs.timepicker.selectableRange = _selectableRange;
      };

      this.$watch('value', value);
      this.$watch('date', date);
      this.$watch('selectableRange', selectableRange);

      format(this.timeFormat);
      value(this.value);
      date(this.date);
      selectableRange(this.selectableRange);
    },
    handleClear: function handleClear() {
      this.date = this.getDefaultValue();
      this.$emit('pick', null);
    },
    emit: function emit(value) {
      var _this4 = this;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (!value) {
        this.$emit.apply(this, ['pick', value].concat(args));
      } else if (Array.isArray(value)) {
        var dates = value.map(function (date) {
          return _this4.showTime ? Object(date_util_["clearMilliseconds"])(date) : Object(date_util_["clearTime"])(date);
        });
        this.$emit.apply(this, ['pick', dates].concat(args));
      } else {
        this.$emit.apply(this, ['pick', this.showTime ? Object(date_util_["clearMilliseconds"])(value) : Object(date_util_["clearTime"])(value)].concat(args));
      }
      this.userInputDate = null;
      this.userInputTime = null;
    },


    // resetDate() {
    //   this.date = new Date(this.date);
    // },

    showMonthPicker: function showMonthPicker() {
      this.currentView = 'month';
    },
    showYearPicker: function showYearPicker() {
      this.currentView = 'year';
    },


    // XXX: 没用到
    // handleLabelClick() {
    //   if (this.currentView === 'date') {
    //     this.showMonthPicker();
    //   } else if (this.currentView === 'month') {
    //     this.showYearPicker();
    //   }
    // },

    prevMonth: function prevMonth() {
      this.date = Object(date_util_["prevMonth"])(this.date);
    },
    nextMonth: function nextMonth() {
      this.date = Object(date_util_["nextMonth"])(this.date);
    },
    prevYear: function prevYear() {
      if (this.currentView === 'year') {
        this.date = Object(date_util_["prevYear"])(this.date, 10);
      } else {
        this.date = Object(date_util_["prevYear"])(this.date);
      }
    },
    nextYear: function nextYear() {
      if (this.currentView === 'year') {
        this.date = Object(date_util_["nextYear"])(this.date, 10);
      } else {
        this.date = Object(date_util_["nextYear"])(this.date);
      }
    },
    handleShortcutClick: function handleShortcutClick(shortcut) {
      if (shortcut.onClick) {
        shortcut.onClick(this);
      }
    },
    handleTimePick: function handleTimePick(value, visible, first) {
      if (Object(date_util_["isDate"])(value)) {
        var newDate = this.value ? Object(date_util_["modifyTime"])(this.value, value.getHours(), value.getMinutes(), value.getSeconds()) : Object(date_util_["modifyWithTimeString"])(this.getDefaultValue(), this.defaultTime);
        this.date = newDate;
        this.emit(this.date, true);
      } else {
        this.emit(value, true);
      }
      if (!first) {
        this.timePickerVisible = visible;
      }
    },
    handleTimePickClose: function handleTimePickClose() {
      this.timePickerVisible = false;
    },
    handleMonthPick: function handleMonthPick(month) {
      if (this.selectionMode === 'month') {
        this.date = Object(date_util_["modifyDate"])(this.date, this.year, month, 1);
        this.emit(this.date);
      } else {
        this.date = Object(date_util_["changeYearMonthAndClampDate"])(this.date, this.year, month);
        // TODO: should emit intermediate value ??
        // this.emit(this.date);
        this.currentView = 'date';
      }
    },
    handleDatePick: function handleDatePick(value) {
      if (this.selectionMode === 'day') {
        var newDate = this.value ? Object(date_util_["modifyDate"])(this.value, value.getFullYear(), value.getMonth(), value.getDate()) : Object(date_util_["modifyWithTimeString"])(value, this.defaultTime);
        // change default time while out of selectableRange
        if (!this.checkDateWithinRange(newDate)) {
          newDate = Object(date_util_["modifyDate"])(this.selectableRange[0][0], value.getFullYear(), value.getMonth(), value.getDate());
        }
        this.date = newDate;
        this.emit(this.date, this.showTime);
      } else if (this.selectionMode === 'week') {
        this.emit(value.date);
      } else if (this.selectionMode === 'dates') {
        this.emit(value, true); // set false to keep panel open
      }
    },
    handleYearPick: function handleYearPick(year) {
      if (this.selectionMode === 'year') {
        this.date = Object(date_util_["modifyDate"])(this.date, year, 0, 1);
        this.emit(this.date);
      } else {
        this.date = Object(date_util_["changeYearMonthAndClampDate"])(this.date, year, this.month);
        // TODO: should emit intermediate value ??
        // this.emit(this.date, true);
        this.currentView = 'month';
      }
    },
    changeToNow: function changeToNow() {
      // NOTE: not a permanent solution
      //       consider disable "now" button in the future
      if ((!this.disabledDate || !this.disabledDate(new Date())) && this.checkDateWithinRange(new Date())) {
        this.date = new Date();
        this.emit(this.date);
      }
    },
    confirm: function confirm() {
      if (this.selectionMode === 'dates') {
        this.emit(this.value);
      } else {
        // value were emitted in handle{Date,Time}Pick, nothing to update here
        // deal with the scenario where: user opens the picker, then confirm without doing anything
        var value = this.value ? this.value : Object(date_util_["modifyWithTimeString"])(this.getDefaultValue(), this.defaultTime);
        this.date = new Date(value); // refresh date
        this.emit(value);
      }
    },
    resetView: function resetView() {
      if (this.selectionMode === 'month') {
        this.currentView = 'month';
      } else if (this.selectionMode === 'year') {
        this.currentView = 'year';
      } else {
        this.currentView = 'date';
      }
    },
    handleEnter: function handleEnter() {
      document.body.addEventListener('keydown', this.handleKeydown);
    },
    handleLeave: function handleLeave() {
      this.$emit('dodestroy');
      document.body.removeEventListener('keydown', this.handleKeydown);
    },
    handleKeydown: function handleKeydown(event) {
      var keyCode = event.keyCode;
      var list = [38, 40, 37, 39];
      if (this.visible && !this.timePickerVisible) {
        if (list.indexOf(keyCode) !== -1) {
          this.handleKeyControl(keyCode);
          event.stopPropagation();
          event.preventDefault();
        }
        if (keyCode === 13 && this.userInputDate === null && this.userInputTime === null) {
          // Enter
          this.emit(this.date, false);
        }
      }
    },
    handleKeyControl: function handleKeyControl(keyCode) {
      var mapping = {
        'year': {
          38: -4, 40: 4, 37: -1, 39: 1, offset: function offset(date, step) {
            return date.setFullYear(date.getFullYear() + step);
          }
        },
        'month': {
          38: -4, 40: 4, 37: -1, 39: 1, offset: function offset(date, step) {
            return date.setMonth(date.getMonth() + step);
          }
        },
        'week': {
          38: -1, 40: 1, 37: -1, 39: 1, offset: function offset(date, step) {
            return date.setDate(date.getDate() + step * 7);
          }
        },
        'day': {
          38: -7, 40: 7, 37: -1, 39: 1, offset: function offset(date, step) {
            return date.setDate(date.getDate() + step);
          }
        }
      };
      var mode = this.selectionMode;
      var year = 3.1536e10;
      var now = this.date.getTime();
      var newDate = new Date(this.date.getTime());
      while (Math.abs(now - newDate.getTime()) <= year) {
        var map = mapping[mode];
        map.offset(newDate, map[keyCode]);
        if (typeof this.disabledDate === 'function' && this.disabledDate(newDate)) {
          continue;
        }
        this.date = newDate;
        this.$emit('pick', newDate, true);
        break;
      }
    },
    handleVisibleTimeChange: function handleVisibleTimeChange(value) {
      var time = Object(date_util_["parseDate"])(value, this.timeFormat);
      if (time && this.checkDateWithinRange(time)) {
        this.date = Object(date_util_["modifyDate"])(time, this.year, this.month, this.monthDate);
        this.userInputTime = null;
        this.$refs.timepicker.value = this.date;
        this.timePickerVisible = false;
        this.emit(this.date, true);
      }
    },
    handleVisibleDateChange: function handleVisibleDateChange(value) {
      var date = Object(date_util_["parseDate"])(value, this.dateFormat);
      if (date) {
        if (typeof this.disabledDate === 'function' && this.disabledDate(date)) {
          return;
        }
        this.date = Object(date_util_["modifyTime"])(date, this.date.getHours(), this.date.getMinutes(), this.date.getSeconds());
        this.userInputDate = null;
        this.resetView();
        this.emit(this.date, true);
      }
    },
    isValidValue: function isValidValue(value) {
      return value && !isNaN(value) && (typeof this.disabledDate === 'function' ? !this.disabledDate(value) : true) && this.checkDateWithinRange(value);
    },
    getDefaultValue: function getDefaultValue() {
      // if default-value is set, return it
      // otherwise, return now (the moment this method gets called)
      return this.defaultValue ? new Date(this.defaultValue) : new Date();
    },
    checkDateWithinRange: function checkDateWithinRange(date) {
      return this.selectableRange.length > 0 ? Object(date_util_["timeWithinRange"])(date, this.selectableRange, this.format || 'HH:mm:ss') : true;
    }
  },

  components: {
    TimePicker: panel_time, YearTable: year_table, MonthTable: month_table, DateTable: date_table, ElInput: input_default.a, ElButton: button_default.a
  },

  data: function data() {
    return {
      popperClass: '',
      date: new Date(),
      value: '',
      defaultValue: null, // use getDefaultValue() for time computation
      defaultTime: null,
      showTime: false,
      selectionMode: 'day',
      shortcuts: '',
      visible: false,
      currentView: 'date',
      disabledDate: '',
      selectableRange: [],
      firstDayOfWeek: 7,
      showWeekNumber: false,
      timePickerVisible: false,
      format: '',
      arrowControl: false,
      userInputDate: null,
      userInputTime: null
    };
  },


  computed: {
    year: function year() {
      return this.date.getFullYear();
    },
    month: function month() {
      return this.date.getMonth();
    },
    week: function week() {
      return Object(date_util_["getWeekNumber"])(this.date);
    },
    monthDate: function monthDate() {
      return this.date.getDate();
    },
    footerVisible: function footerVisible() {
      return this.showTime || this.selectionMode === 'dates';
    },
    visibleTime: function visibleTime() {
      if (this.userInputTime !== null) {
        return this.userInputTime;
      } else {
        return Object(date_util_["formatDate"])(this.value || this.defaultValue, this.timeFormat);
      }
    },
    visibleDate: function visibleDate() {
      if (this.userInputDate !== null) {
        return this.userInputDate;
      } else {
        return Object(date_util_["formatDate"])(this.value || this.defaultValue, this.dateFormat);
      }
    },
    yearLabel: function yearLabel() {
      var yearTranslation = this.t('el.datepicker.year');
      if (this.currentView === 'year') {
        var startYear = Math.floor(this.year / 10) * 10;
        if (yearTranslation) {
          return startYear + ' ' + yearTranslation + ' - ' + (startYear + 9) + ' ' + yearTranslation;
        }
        return startYear + ' - ' + (startYear + 9);
      }
      return this.year + ' ' + yearTranslation;
    },
    timeFormat: function timeFormat() {
      if (this.format) {
        return Object(date_util_["extractTimeFormat"])(this.format);
      } else {
        return 'HH:mm:ss';
      }
    },
    dateFormat: function dateFormat() {
      if (this.format) {
        return Object(date_util_["extractDateFormat"])(this.format);
      } else {
        return 'yyyy-MM-dd';
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/date-picker/src/panel/date.vue?vue&type=script&lang=js&
 /* harmony default export */ var panel_datevue_type_script_lang_js_ = (datevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-picker/src/panel/date.vue





/* normalize component */

var date_component = normalizeComponent(
  panel_datevue_type_script_lang_js_,
  datevue_type_template_id_2440d4ea_render,
  datevue_type_template_id_2440d4ea_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var date_api; }
date_component.options.__file = "packages/date-picker/src/panel/date.vue"
/* harmony default export */ var panel_date = (date_component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/date-picker/src/panel/date-range.vue?vue&type=template&id=2652849a&
var date_rangevue_type_template_id_2652849a_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "el-zoom-in-top" },
      on: {
        "after-leave": function($event) {
          return _vm.$emit("dodestroy")
        }
      }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          staticClass: "el-picker-panel el-date-range-picker el-popper",
          class: [
            {
              "has-sidebar": _vm.$slots.sidebar || _vm.shortcuts,
              "has-time": _vm.showTime
            },
            _vm.popperClass
          ]
        },
        [
          _c(
            "div",
            { staticClass: "el-picker-panel__body-wrapper" },
            [
              _vm._t("sidebar"),
              _vm.shortcuts
                ? _c(
                    "div",
                    { staticClass: "el-picker-panel__sidebar" },
                    _vm._l(_vm.shortcuts, function(shortcut, key) {
                      return _c(
                        "button",
                        {
                          key: key,
                          staticClass: "el-picker-panel__shortcut",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.handleShortcutClick(shortcut)
                            }
                          }
                        },
                        [_vm._v(_vm._s(shortcut.text))]
                      )
                    }),
                    0
                  )
                : _vm._e(),
              _c("div", { staticClass: "el-picker-panel__body" }, [
                _vm.showTime
                  ? _c(
                      "div",
                      { staticClass: "el-date-range-picker__time-header" },
                      [
                        _c(
                          "span",
                          { staticClass: "el-date-range-picker__editors-wrap" },
                          [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "el-date-range-picker__time-picker-wrap"
                              },
                              [
                                _c("el-input", {
                                  ref: "minInput",
                                  staticClass: "el-date-range-picker__editor",
                                  attrs: {
                                    size: "small",
                                    disabled: _vm.rangeState.selecting,
                                    placeholder: _vm.t(
                                      "el.datepicker.startDate"
                                    ),
                                    value: _vm.minVisibleDate
                                  },
                                  on: {
                                    input: function(val) {
                                      return _vm.handleDateInput(val, "min")
                                    },
                                    change: function(val) {
                                      return _vm.handleDateChange(val, "min")
                                    }
                                  }
                                })
                              ],
                              1
                            ),
                            _c(
                              "span",
                              {
                                directives: [
                                  {
                                    name: "clickoutside",
                                    rawName: "v-clickoutside",
                                    value: _vm.handleMinTimeClose,
                                    expression: "handleMinTimeClose"
                                  }
                                ],
                                staticClass:
                                  "el-date-range-picker__time-picker-wrap"
                              },
                              [
                                _c("el-input", {
                                  staticClass: "el-date-range-picker__editor",
                                  attrs: {
                                    size: "small",
                                    disabled: _vm.rangeState.selecting,
                                    placeholder: _vm.t(
                                      "el.datepicker.startTime"
                                    ),
                                    value: _vm.minVisibleTime
                                  },
                                  on: {
                                    focus: function($event) {
                                      _vm.minTimePickerVisible = true
                                    },
                                    input: function(val) {
                                      return _vm.handleTimeInput(val, "min")
                                    },
                                    change: function(val) {
                                      return _vm.handleTimeChange(val, "min")
                                    }
                                  }
                                }),
                                _c("time-picker", {
                                  ref: "minTimePicker",
                                  attrs: {
                                    "time-arrow-control": _vm.arrowControl,
                                    visible: _vm.minTimePickerVisible
                                  },
                                  on: {
                                    pick: _vm.handleMinTimePick,
                                    mounted: function($event) {
                                      _vm.$refs.minTimePicker.format =
                                        _vm.timeFormat
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        ),
                        _c("span", { staticClass: "el-icon-arrow-right" }),
                        _c(
                          "span",
                          {
                            staticClass:
                              "el-date-range-picker__editors-wrap is-right"
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "el-date-range-picker__time-picker-wrap"
                              },
                              [
                                _c("el-input", {
                                  staticClass: "el-date-range-picker__editor",
                                  attrs: {
                                    size: "small",
                                    disabled: _vm.rangeState.selecting,
                                    placeholder: _vm.t("el.datepicker.endDate"),
                                    value: _vm.maxVisibleDate,
                                    readonly: !_vm.minDate
                                  },
                                  on: {
                                    input: function(val) {
                                      return _vm.handleDateInput(val, "max")
                                    },
                                    change: function(val) {
                                      return _vm.handleDateChange(val, "max")
                                    }
                                  }
                                })
                              ],
                              1
                            ),
                            _c(
                              "span",
                              {
                                directives: [
                                  {
                                    name: "clickoutside",
                                    rawName: "v-clickoutside",
                                    value: _vm.handleMaxTimeClose,
                                    expression: "handleMaxTimeClose"
                                  }
                                ],
                                staticClass:
                                  "el-date-range-picker__time-picker-wrap"
                              },
                              [
                                _c("el-input", {
                                  staticClass: "el-date-range-picker__editor",
                                  attrs: {
                                    size: "small",
                                    disabled: _vm.rangeState.selecting,
                                    placeholder: _vm.t("el.datepicker.endTime"),
                                    value: _vm.maxVisibleTime,
                                    readonly: !_vm.minDate
                                  },
                                  on: {
                                    focus: function($event) {
                                      _vm.minDate &&
                                        (_vm.maxTimePickerVisible = true)
                                    },
                                    input: function(val) {
                                      return _vm.handleTimeInput(val, "max")
                                    },
                                    change: function(val) {
                                      return _vm.handleTimeChange(val, "max")
                                    }
                                  }
                                }),
                                _c("time-picker", {
                                  ref: "maxTimePicker",
                                  attrs: {
                                    "time-arrow-control": _vm.arrowControl,
                                    visible: _vm.maxTimePickerVisible
                                  },
                                  on: {
                                    pick: _vm.handleMaxTimePick,
                                    mounted: function($event) {
                                      _vm.$refs.maxTimePicker.format =
                                        _vm.timeFormat
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        )
                      ]
                    )
                  : _vm._e(),
                _c(
                  "div",
                  {
                    staticClass:
                      "el-picker-panel__content el-date-range-picker__content is-left"
                  },
                  [
                    _c("div", { staticClass: "el-date-range-picker__header" }, [
                      _c("button", {
                        staticClass:
                          "el-picker-panel__icon-btn el-icon-d-arrow-left",
                        attrs: { type: "button" },
                        on: { click: _vm.leftPrevYear }
                      }),
                      _c("button", {
                        staticClass:
                          "el-picker-panel__icon-btn el-icon-arrow-left",
                        attrs: { type: "button" },
                        on: { click: _vm.leftPrevMonth }
                      }),
                      _vm.unlinkPanels
                        ? _c("button", {
                            staticClass:
                              "el-picker-panel__icon-btn el-icon-d-arrow-right",
                            class: { "is-disabled": !_vm.enableYearArrow },
                            attrs: {
                              type: "button",
                              disabled: !_vm.enableYearArrow
                            },
                            on: { click: _vm.leftNextYear }
                          })
                        : _vm._e(),
                      _vm.unlinkPanels
                        ? _c("button", {
                            staticClass:
                              "el-picker-panel__icon-btn el-icon-arrow-right",
                            class: { "is-disabled": !_vm.enableMonthArrow },
                            attrs: {
                              type: "button",
                              disabled: !_vm.enableMonthArrow
                            },
                            on: { click: _vm.leftNextMonth }
                          })
                        : _vm._e(),
                      _c("div", [_vm._v(_vm._s(_vm.leftLabel))])
                    ]),
                    _c("date-table", {
                      attrs: {
                        "selection-mode": "range",
                        date: _vm.leftDate,
                        "default-value": _vm.defaultValue,
                        "min-date": _vm.minDate,
                        "max-date": _vm.maxDate,
                        "range-state": _vm.rangeState,
                        "disabled-date": _vm.disabledDate,
                        "first-day-of-week": _vm.firstDayOfWeek
                      },
                      on: {
                        changerange: _vm.handleChangeRange,
                        pick: _vm.handleRangePick
                      }
                    })
                  ],
                  1
                ),
                _c(
                  "div",
                  {
                    staticClass:
                      "el-picker-panel__content el-date-range-picker__content is-right"
                  },
                  [
                    _c("div", { staticClass: "el-date-range-picker__header" }, [
                      _vm.unlinkPanels
                        ? _c("button", {
                            staticClass:
                              "el-picker-panel__icon-btn el-icon-d-arrow-left",
                            class: { "is-disabled": !_vm.enableYearArrow },
                            attrs: {
                              type: "button",
                              disabled: !_vm.enableYearArrow
                            },
                            on: { click: _vm.rightPrevYear }
                          })
                        : _vm._e(),
                      _vm.unlinkPanels
                        ? _c("button", {
                            staticClass:
                              "el-picker-panel__icon-btn el-icon-arrow-left",
                            class: { "is-disabled": !_vm.enableMonthArrow },
                            attrs: {
                              type: "button",
                              disabled: !_vm.enableMonthArrow
                            },
                            on: { click: _vm.rightPrevMonth }
                          })
                        : _vm._e(),
                      _c("button", {
                        staticClass:
                          "el-picker-panel__icon-btn el-icon-d-arrow-right",
                        attrs: { type: "button" },
                        on: { click: _vm.rightNextYear }
                      }),
                      _c("button", {
                        staticClass:
                          "el-picker-panel__icon-btn el-icon-arrow-right",
                        attrs: { type: "button" },
                        on: { click: _vm.rightNextMonth }
                      }),
                      _c("div", [_vm._v(_vm._s(_vm.rightLabel))])
                    ]),
                    _c("date-table", {
                      attrs: {
                        "selection-mode": "range",
                        date: _vm.rightDate,
                        "default-value": _vm.defaultValue,
                        "min-date": _vm.minDate,
                        "max-date": _vm.maxDate,
                        "range-state": _vm.rangeState,
                        "disabled-date": _vm.disabledDate,
                        "first-day-of-week": _vm.firstDayOfWeek
                      },
                      on: {
                        changerange: _vm.handleChangeRange,
                        pick: _vm.handleRangePick
                      }
                    })
                  ],
                  1
                )
              ])
            ],
            2
          ),
          _vm.showTime
            ? _c(
                "div",
                { staticClass: "el-picker-panel__footer" },
                [
                  _c(
                    "el-button",
                    {
                      staticClass: "el-picker-panel__link-btn",
                      attrs: { size: "mini", type: "text" },
                      on: { click: _vm.handleClear }
                    },
                    [
                      _vm._v(
                        "\n        " +
                          _vm._s(_vm.t("el.datepicker.clear")) +
                          "\n      "
                      )
                    ]
                  ),
                  _c(
                    "el-button",
                    {
                      staticClass: "el-picker-panel__link-btn",
                      attrs: {
                        plain: "",
                        size: "mini",
                        disabled: _vm.btnDisabled
                      },
                      on: {
                        click: function($event) {
                          return _vm.handleConfirm(false)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n        " +
                          _vm._s(_vm.t("el.datepicker.confirm")) +
                          "\n      "
                      )
                    ]
                  )
                ],
                1
              )
            : _vm._e()
        ]
      )
    ]
  )
}
var date_rangevue_type_template_id_2652849a_staticRenderFns = []
date_rangevue_type_template_id_2652849a_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-picker/src/panel/date-range.vue?vue&type=template&id=2652849a&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/date-picker/src/panel/date-range.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









var date_rangevue_type_script_lang_js_calcDefaultValue = function calcDefaultValue(defaultValue) {
  if (Array.isArray(defaultValue)) {
    return [new Date(defaultValue[0]), new Date(defaultValue[1])];
  } else if (defaultValue) {
    return [new Date(defaultValue), Object(date_util_["nextDate"])(new Date(defaultValue), 1)];
  } else {
    return [new Date(), Object(date_util_["nextDate"])(new Date(), 1)];
  }
};

/* harmony default export */ var date_rangevue_type_script_lang_js_ = ({
  mixins: [locale_default.a],

  directives: { Clickoutside: clickoutside_default.a },

  computed: {
    btnDisabled: function btnDisabled() {
      return !(this.minDate && this.maxDate && !this.selecting && this.isValidValue([this.minDate, this.maxDate]));
    },
    leftLabel: function leftLabel() {
      return this.leftDate.getFullYear() + ' ' + this.t('el.datepicker.year') + ' ' + this.t('el.datepicker.month' + (this.leftDate.getMonth() + 1));
    },
    rightLabel: function rightLabel() {
      return this.rightDate.getFullYear() + ' ' + this.t('el.datepicker.year') + ' ' + this.t('el.datepicker.month' + (this.rightDate.getMonth() + 1));
    },
    leftYear: function leftYear() {
      return this.leftDate.getFullYear();
    },
    leftMonth: function leftMonth() {
      return this.leftDate.getMonth();
    },
    leftMonthDate: function leftMonthDate() {
      return this.leftDate.getDate();
    },
    rightYear: function rightYear() {
      return this.rightDate.getFullYear();
    },
    rightMonth: function rightMonth() {
      return this.rightDate.getMonth();
    },
    rightMonthDate: function rightMonthDate() {
      return this.rightDate.getDate();
    },
    minVisibleDate: function minVisibleDate() {
      if (this.dateUserInput.min !== null) return this.dateUserInput.min;
      if (this.minDate) return Object(date_util_["formatDate"])(this.minDate, this.dateFormat);
      return '';
    },
    maxVisibleDate: function maxVisibleDate() {
      if (this.dateUserInput.max !== null) return this.dateUserInput.max;
      if (this.maxDate || this.minDate) return Object(date_util_["formatDate"])(this.maxDate || this.minDate, this.dateFormat);
      return '';
    },
    minVisibleTime: function minVisibleTime() {
      if (this.timeUserInput.min !== null) return this.timeUserInput.min;
      if (this.minDate) return Object(date_util_["formatDate"])(this.minDate, this.timeFormat);
      return '';
    },
    maxVisibleTime: function maxVisibleTime() {
      if (this.timeUserInput.max !== null) return this.timeUserInput.max;
      if (this.maxDate || this.minDate) return Object(date_util_["formatDate"])(this.maxDate || this.minDate, this.timeFormat);
      return '';
    },
    timeFormat: function timeFormat() {
      if (this.format) {
        return Object(date_util_["extractTimeFormat"])(this.format);
      } else {
        return 'HH:mm:ss';
      }
    },
    dateFormat: function dateFormat() {
      if (this.format) {
        return Object(date_util_["extractDateFormat"])(this.format);
      } else {
        return 'yyyy-MM-dd';
      }
    },
    enableMonthArrow: function enableMonthArrow() {
      var nextMonth = (this.leftMonth + 1) % 12;
      var yearOffset = this.leftMonth + 1 >= 12 ? 1 : 0;
      return this.unlinkPanels && new Date(this.leftYear + yearOffset, nextMonth) < new Date(this.rightYear, this.rightMonth);
    },
    enableYearArrow: function enableYearArrow() {
      return this.unlinkPanels && this.rightYear * 12 + this.rightMonth - (this.leftYear * 12 + this.leftMonth + 1) >= 12;
    }
  },

  data: function data() {
    return {
      popperClass: '',
      value: [],
      defaultValue: null,
      defaultTime: null,
      minDate: '',
      maxDate: '',
      leftDate: new Date(),
      rightDate: Object(date_util_["nextMonth"])(new Date()),
      rangeState: {
        endDate: null,
        selecting: false,
        row: null,
        column: null
      },
      showTime: false,
      shortcuts: '',
      visible: '',
      disabledDate: '',
      firstDayOfWeek: 7,
      minTimePickerVisible: false,
      maxTimePickerVisible: false,
      format: '',
      arrowControl: false,
      unlinkPanels: false,
      dateUserInput: {
        min: null,
        max: null
      },
      timeUserInput: {
        min: null,
        max: null
      }
    };
  },


  watch: {
    minDate: function minDate(val) {
      var _this = this;

      this.dateUserInput.min = null;
      this.timeUserInput.min = null;
      this.$nextTick(function () {
        if (_this.$refs.maxTimePicker && _this.maxDate && _this.maxDate < _this.minDate) {
          var format = 'HH:mm:ss';
          _this.$refs.maxTimePicker.selectableRange = [[Object(date_util_["parseDate"])(Object(date_util_["formatDate"])(_this.minDate, format), format), Object(date_util_["parseDate"])('23:59:59', format)]];
        }
      });
      if (val && this.$refs.minTimePicker) {
        this.$refs.minTimePicker.date = val;
        this.$refs.minTimePicker.value = val;
      }
    },
    maxDate: function maxDate(val) {
      this.dateUserInput.max = null;
      this.timeUserInput.max = null;
      if (val && this.$refs.maxTimePicker) {
        this.$refs.maxTimePicker.date = val;
        this.$refs.maxTimePicker.value = val;
      }
    },
    minTimePickerVisible: function minTimePickerVisible(val) {
      var _this2 = this;

      if (val) {
        this.$nextTick(function () {
          _this2.$refs.minTimePicker.date = _this2.minDate;
          _this2.$refs.minTimePicker.value = _this2.minDate;
          _this2.$refs.minTimePicker.adjustSpinners();
        });
      }
    },
    maxTimePickerVisible: function maxTimePickerVisible(val) {
      var _this3 = this;

      if (val) {
        this.$nextTick(function () {
          _this3.$refs.maxTimePicker.date = _this3.maxDate;
          _this3.$refs.maxTimePicker.value = _this3.maxDate;
          _this3.$refs.maxTimePicker.adjustSpinners();
        });
      }
    },
    value: function value(newVal) {
      if (!newVal) {
        this.minDate = null;
        this.maxDate = null;
      } else if (Array.isArray(newVal)) {
        this.minDate = Object(date_util_["isDate"])(newVal[0]) ? new Date(newVal[0]) : null;
        this.maxDate = Object(date_util_["isDate"])(newVal[1]) ? new Date(newVal[1]) : null;
        if (this.minDate) {
          this.leftDate = this.minDate;
          if (this.unlinkPanels && this.maxDate) {
            var minDateYear = this.minDate.getFullYear();
            var minDateMonth = this.minDate.getMonth();
            var maxDateYear = this.maxDate.getFullYear();
            var maxDateMonth = this.maxDate.getMonth();
            this.rightDate = minDateYear === maxDateYear && minDateMonth === maxDateMonth ? Object(date_util_["nextMonth"])(this.maxDate) : this.maxDate;
          } else {
            this.rightDate = Object(date_util_["nextMonth"])(this.leftDate);
          }
        } else {
          this.leftDate = date_rangevue_type_script_lang_js_calcDefaultValue(this.defaultValue)[0];
          this.rightDate = Object(date_util_["nextMonth"])(this.leftDate);
        }
      }
    },
    defaultValue: function defaultValue(val) {
      if (!Array.isArray(this.value)) {
        var _calcDefaultValue = date_rangevue_type_script_lang_js_calcDefaultValue(val),
            left = _calcDefaultValue[0],
            right = _calcDefaultValue[1];

        this.leftDate = left;
        this.rightDate = val && val[1] && this.unlinkPanels ? right : Object(date_util_["nextMonth"])(this.leftDate);
      }
    }
  },

  methods: {
    handleClear: function handleClear() {
      this.minDate = null;
      this.maxDate = null;
      this.leftDate = date_rangevue_type_script_lang_js_calcDefaultValue(this.defaultValue)[0];
      this.rightDate = Object(date_util_["nextMonth"])(this.leftDate);
      this.$emit('pick', null);
    },
    handleChangeRange: function handleChangeRange(val) {
      this.minDate = val.minDate;
      this.maxDate = val.maxDate;
      this.rangeState = val.rangeState;
    },
    handleDateInput: function handleDateInput(value, type) {
      this.dateUserInput[type] = value;
      if (value.length !== this.dateFormat.length) return;
      var parsedValue = Object(date_util_["parseDate"])(value, this.dateFormat);

      if (parsedValue) {
        if (typeof this.disabledDate === 'function' && this.disabledDate(new Date(parsedValue))) {
          return;
        }
        if (type === 'min') {
          this.minDate = Object(date_util_["modifyDate"])(this.minDate || new Date(), parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate());
          this.leftDate = new Date(parsedValue);
          if (!this.unlinkPanels) {
            this.rightDate = Object(date_util_["nextMonth"])(this.leftDate);
          }
        } else {
          this.maxDate = Object(date_util_["modifyDate"])(this.maxDate || new Date(), parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate());
          this.rightDate = new Date(parsedValue);
          if (!this.unlinkPanels) {
            this.leftDate = Object(date_util_["prevMonth"])(parsedValue);
          }
        }
      }
    },
    handleDateChange: function handleDateChange(value, type) {
      var parsedValue = Object(date_util_["parseDate"])(value, this.dateFormat);
      if (parsedValue) {
        if (type === 'min') {
          this.minDate = Object(date_util_["modifyDate"])(this.minDate, parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate());
          if (this.minDate > this.maxDate) {
            this.maxDate = this.minDate;
          }
        } else {
          this.maxDate = Object(date_util_["modifyDate"])(this.maxDate, parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate());
          if (this.maxDate < this.minDate) {
            this.minDate = this.maxDate;
          }
        }
      }
    },
    handleTimeInput: function handleTimeInput(value, type) {
      var _this4 = this;

      this.timeUserInput[type] = value;
      if (value.length !== this.timeFormat.length) return;
      var parsedValue = Object(date_util_["parseDate"])(value, this.timeFormat);

      if (parsedValue) {
        if (type === 'min') {
          this.minDate = Object(date_util_["modifyTime"])(this.minDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds());
          this.$nextTick(function (_) {
            return _this4.$refs.minTimePicker.adjustSpinners();
          });
        } else {
          this.maxDate = Object(date_util_["modifyTime"])(this.maxDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds());
          this.$nextTick(function (_) {
            return _this4.$refs.maxTimePicker.adjustSpinners();
          });
        }
      }
    },
    handleTimeChange: function handleTimeChange(value, type) {
      var parsedValue = Object(date_util_["parseDate"])(value, this.timeFormat);
      if (parsedValue) {
        if (type === 'min') {
          this.minDate = Object(date_util_["modifyTime"])(this.minDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds());
          if (this.minDate > this.maxDate) {
            this.maxDate = this.minDate;
          }
          this.$refs.minTimePicker.value = this.minDate;
          this.minTimePickerVisible = false;
        } else {
          this.maxDate = Object(date_util_["modifyTime"])(this.maxDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds());
          if (this.maxDate < this.minDate) {
            this.minDate = this.maxDate;
          }
          this.$refs.maxTimePicker.value = this.minDate;
          this.maxTimePickerVisible = false;
        }
      }
    },
    handleRangePick: function handleRangePick(val) {
      var _this5 = this;

      var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var defaultTime = this.defaultTime || [];
      var minDate = Object(date_util_["modifyWithTimeString"])(val.minDate, defaultTime[0]);
      var maxDate = Object(date_util_["modifyWithTimeString"])(val.maxDate, defaultTime[1]);

      if (this.maxDate === maxDate && this.minDate === minDate) {
        return;
      }
      this.onPick && this.onPick(val);
      this.maxDate = maxDate;
      this.minDate = minDate;

      // workaround for https://github.com/ElemeFE/element/issues/7539, should remove this block when we don't have to care about Chromium 55 - 57
      setTimeout(function () {
        _this5.maxDate = maxDate;
        _this5.minDate = minDate;
      }, 10);
      if (!close || this.showTime) return;
      this.handleConfirm();
    },
    handleShortcutClick: function handleShortcutClick(shortcut) {
      if (shortcut.onClick) {
        shortcut.onClick(this);
      }
    },
    handleMinTimePick: function handleMinTimePick(value, visible, first) {
      this.minDate = this.minDate || new Date();
      if (value) {
        this.minDate = Object(date_util_["modifyTime"])(this.minDate, value.getHours(), value.getMinutes(), value.getSeconds());
      }

      if (!first) {
        this.minTimePickerVisible = visible;
      }

      if (!this.maxDate || this.maxDate && this.maxDate.getTime() < this.minDate.getTime()) {
        this.maxDate = new Date(this.minDate);
      }
    },
    handleMinTimeClose: function handleMinTimeClose() {
      this.minTimePickerVisible = false;
    },
    handleMaxTimePick: function handleMaxTimePick(value, visible, first) {
      if (this.maxDate && value) {
        this.maxDate = Object(date_util_["modifyTime"])(this.maxDate, value.getHours(), value.getMinutes(), value.getSeconds());
      }

      if (!first) {
        this.maxTimePickerVisible = visible;
      }

      if (this.maxDate && this.minDate && this.minDate.getTime() > this.maxDate.getTime()) {
        this.minDate = new Date(this.maxDate);
      }
    },
    handleMaxTimeClose: function handleMaxTimeClose() {
      this.maxTimePickerVisible = false;
    },


    // leftPrev*, rightNext* need to take care of `unlinkPanels`
    leftPrevYear: function leftPrevYear() {
      this.leftDate = Object(date_util_["prevYear"])(this.leftDate);
      if (!this.unlinkPanels) {
        this.rightDate = Object(date_util_["nextMonth"])(this.leftDate);
      }
    },
    leftPrevMonth: function leftPrevMonth() {
      this.leftDate = Object(date_util_["prevMonth"])(this.leftDate);
      if (!this.unlinkPanels) {
        this.rightDate = Object(date_util_["nextMonth"])(this.leftDate);
      }
    },
    rightNextYear: function rightNextYear() {
      if (!this.unlinkPanels) {
        this.leftDate = Object(date_util_["nextYear"])(this.leftDate);
        this.rightDate = Object(date_util_["nextMonth"])(this.leftDate);
      } else {
        this.rightDate = Object(date_util_["nextYear"])(this.rightDate);
      }
    },
    rightNextMonth: function rightNextMonth() {
      if (!this.unlinkPanels) {
        this.leftDate = Object(date_util_["nextMonth"])(this.leftDate);
        this.rightDate = Object(date_util_["nextMonth"])(this.leftDate);
      } else {
        this.rightDate = Object(date_util_["nextMonth"])(this.rightDate);
      }
    },


    // leftNext*, rightPrev* are called when `unlinkPanels` is true
    leftNextYear: function leftNextYear() {
      this.leftDate = Object(date_util_["nextYear"])(this.leftDate);
    },
    leftNextMonth: function leftNextMonth() {
      this.leftDate = Object(date_util_["nextMonth"])(this.leftDate);
    },
    rightPrevYear: function rightPrevYear() {
      this.rightDate = Object(date_util_["prevYear"])(this.rightDate);
    },
    rightPrevMonth: function rightPrevMonth() {
      this.rightDate = Object(date_util_["prevMonth"])(this.rightDate);
    },
    handleConfirm: function handleConfirm() {
      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.isValidValue([this.minDate, this.maxDate])) {
        this.$emit('pick', [this.minDate, this.maxDate], visible);
      }
    },
    isValidValue: function isValidValue(value) {
      return Array.isArray(value) && value && value[0] && value[1] && Object(date_util_["isDate"])(value[0]) && Object(date_util_["isDate"])(value[1]) && value[0].getTime() <= value[1].getTime() && (typeof this.disabledDate === 'function' ? !this.disabledDate(value[0]) && !this.disabledDate(value[1]) : true);
    },
    resetView: function resetView() {
      // NOTE: this is a hack to reset {min, max}Date on picker open.
      // TODO: correct way of doing so is to refactor {min, max}Date to be dependent on value and internal selection state
      //       an alternative would be resetView whenever picker becomes visible, should also investigate date-panel's resetView
      this.minDate = this.value && Object(date_util_["isDate"])(this.value[0]) ? new Date(this.value[0]) : null;
      this.maxDate = this.value && Object(date_util_["isDate"])(this.value[0]) ? new Date(this.value[1]) : null;
    }
  },

  components: { TimePicker: panel_time, DateTable: date_table, ElInput: input_default.a, ElButton: button_default.a }
});
// CONCATENATED MODULE: ./packages/date-picker/src/panel/date-range.vue?vue&type=script&lang=js&
 /* harmony default export */ var panel_date_rangevue_type_script_lang_js_ = (date_rangevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-picker/src/panel/date-range.vue





/* normalize component */

var date_range_component = normalizeComponent(
  panel_date_rangevue_type_script_lang_js_,
  date_rangevue_type_template_id_2652849a_render,
  date_rangevue_type_template_id_2652849a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var date_range_api; }
date_range_component.options.__file = "packages/date-picker/src/panel/date-range.vue"
/* harmony default export */ var date_range = (date_range_component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/date-picker/src/panel/month-range.vue?vue&type=template&id=f2645fb8&
var month_rangevue_type_template_id_f2645fb8_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "el-zoom-in-top" },
      on: {
        "after-leave": function($event) {
          return _vm.$emit("dodestroy")
        }
      }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          staticClass: "el-picker-panel el-date-range-picker el-popper",
          class: [
            {
              "has-sidebar": _vm.$slots.sidebar || _vm.shortcuts
            },
            _vm.popperClass
          ]
        },
        [
          _c(
            "div",
            { staticClass: "el-picker-panel__body-wrapper" },
            [
              _vm._t("sidebar"),
              _vm.shortcuts
                ? _c(
                    "div",
                    { staticClass: "el-picker-panel__sidebar" },
                    _vm._l(_vm.shortcuts, function(shortcut, key) {
                      return _c(
                        "button",
                        {
                          key: key,
                          staticClass: "el-picker-panel__shortcut",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.handleShortcutClick(shortcut)
                            }
                          }
                        },
                        [_vm._v(_vm._s(shortcut.text))]
                      )
                    }),
                    0
                  )
                : _vm._e(),
              _c("div", { staticClass: "el-picker-panel__body" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "el-picker-panel__content el-date-range-picker__content is-left"
                  },
                  [
                    _c("div", { staticClass: "el-date-range-picker__header" }, [
                      _c("button", {
                        staticClass:
                          "el-picker-panel__icon-btn el-icon-d-arrow-left",
                        attrs: { type: "button" },
                        on: { click: _vm.leftPrevYear }
                      }),
                      _vm.unlinkPanels
                        ? _c("button", {
                            staticClass:
                              "el-picker-panel__icon-btn el-icon-d-arrow-right",
                            class: { "is-disabled": !_vm.enableYearArrow },
                            attrs: {
                              type: "button",
                              disabled: !_vm.enableYearArrow
                            },
                            on: { click: _vm.leftNextYear }
                          })
                        : _vm._e(),
                      _c("div", [_vm._v(_vm._s(_vm.leftLabel))])
                    ]),
                    _c("month-table", {
                      attrs: {
                        "selection-mode": "range",
                        date: _vm.leftDate,
                        "default-value": _vm.defaultValue,
                        "min-date": _vm.minDate,
                        "max-date": _vm.maxDate,
                        "range-state": _vm.rangeState,
                        "disabled-date": _vm.disabledDate
                      },
                      on: {
                        changerange: _vm.handleChangeRange,
                        pick: _vm.handleRangePick
                      }
                    })
                  ],
                  1
                ),
                _c(
                  "div",
                  {
                    staticClass:
                      "el-picker-panel__content el-date-range-picker__content is-right"
                  },
                  [
                    _c("div", { staticClass: "el-date-range-picker__header" }, [
                      _vm.unlinkPanels
                        ? _c("button", {
                            staticClass:
                              "el-picker-panel__icon-btn el-icon-d-arrow-left",
                            class: { "is-disabled": !_vm.enableYearArrow },
                            attrs: {
                              type: "button",
                              disabled: !_vm.enableYearArrow
                            },
                            on: { click: _vm.rightPrevYear }
                          })
                        : _vm._e(),
                      _c("button", {
                        staticClass:
                          "el-picker-panel__icon-btn el-icon-d-arrow-right",
                        attrs: { type: "button" },
                        on: { click: _vm.rightNextYear }
                      }),
                      _c("div", [_vm._v(_vm._s(_vm.rightLabel))])
                    ]),
                    _c("month-table", {
                      attrs: {
                        "selection-mode": "range",
                        date: _vm.rightDate,
                        "default-value": _vm.defaultValue,
                        "min-date": _vm.minDate,
                        "max-date": _vm.maxDate,
                        "range-state": _vm.rangeState,
                        "disabled-date": _vm.disabledDate
                      },
                      on: {
                        changerange: _vm.handleChangeRange,
                        pick: _vm.handleRangePick
                      }
                    })
                  ],
                  1
                )
              ])
            ],
            2
          )
        ]
      )
    ]
  )
}
var month_rangevue_type_template_id_f2645fb8_staticRenderFns = []
month_rangevue_type_template_id_f2645fb8_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-picker/src/panel/month-range.vue?vue&type=template&id=f2645fb8&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/date-picker/src/panel/month-range.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








var month_rangevue_type_script_lang_js_calcDefaultValue = function calcDefaultValue(defaultValue) {
  if (Array.isArray(defaultValue)) {
    return [new Date(defaultValue[0]), new Date(defaultValue[1])];
  } else if (defaultValue) {
    return [new Date(defaultValue), Object(date_util_["nextMonth"])(new Date(defaultValue))];
  } else {
    return [new Date(), Object(date_util_["nextMonth"])(new Date())];
  }
};
/* harmony default export */ var month_rangevue_type_script_lang_js_ = ({
  mixins: [locale_default.a],

  directives: { Clickoutside: clickoutside_default.a },

  computed: {
    btnDisabled: function btnDisabled() {
      return !(this.minDate && this.maxDate && !this.selecting && this.isValidValue([this.minDate, this.maxDate]));
    },
    leftLabel: function leftLabel() {
      return this.leftDate.getFullYear() + ' ' + this.t('el.datepicker.year');
    },
    rightLabel: function rightLabel() {
      return this.rightDate.getFullYear() + ' ' + this.t('el.datepicker.year');
    },
    leftYear: function leftYear() {
      return this.leftDate.getFullYear();
    },
    rightYear: function rightYear() {
      return this.rightDate.getFullYear() === this.leftDate.getFullYear() ? this.leftDate.getFullYear() + 1 : this.rightDate.getFullYear();
    },
    enableYearArrow: function enableYearArrow() {
      return this.unlinkPanels && this.rightYear > this.leftYear + 1;
    }
  },

  data: function data() {
    return {
      popperClass: '',
      value: [],
      defaultValue: null,
      defaultTime: null,
      minDate: '',
      maxDate: '',
      leftDate: new Date(),
      rightDate: Object(date_util_["nextYear"])(new Date()),
      rangeState: {
        endDate: null,
        selecting: false,
        row: null,
        column: null
      },
      shortcuts: '',
      visible: '',
      disabledDate: '',
      format: '',
      arrowControl: false,
      unlinkPanels: false
    };
  },


  watch: {
    value: function value(newVal) {
      if (!newVal) {
        this.minDate = null;
        this.maxDate = null;
      } else if (Array.isArray(newVal)) {
        this.minDate = Object(date_util_["isDate"])(newVal[0]) ? new Date(newVal[0]) : null;
        this.maxDate = Object(date_util_["isDate"])(newVal[1]) ? new Date(newVal[1]) : null;
        if (this.minDate) {
          this.leftDate = this.minDate;
          if (this.unlinkPanels && this.maxDate) {
            var minDateYear = this.minDate.getFullYear();
            var maxDateYear = this.maxDate.getFullYear();
            this.rightDate = minDateYear === maxDateYear ? Object(date_util_["nextYear"])(this.maxDate) : this.maxDate;
          } else {
            this.rightDate = Object(date_util_["nextYear"])(this.leftDate);
          }
        } else {
          this.leftDate = month_rangevue_type_script_lang_js_calcDefaultValue(this.defaultValue)[0];
          this.rightDate = Object(date_util_["nextYear"])(this.leftDate);
        }
      }
    },
    defaultValue: function defaultValue(val) {
      if (!Array.isArray(this.value)) {
        var _calcDefaultValue = month_rangevue_type_script_lang_js_calcDefaultValue(val),
            left = _calcDefaultValue[0],
            right = _calcDefaultValue[1];

        this.leftDate = left;
        this.rightDate = val && val[1] && left.getFullYear() !== right.getFullYear() && this.unlinkPanels ? right : Object(date_util_["nextYear"])(this.leftDate);
      }
    }
  },

  methods: {
    handleClear: function handleClear() {
      this.minDate = null;
      this.maxDate = null;
      this.leftDate = month_rangevue_type_script_lang_js_calcDefaultValue(this.defaultValue)[0];
      this.rightDate = Object(date_util_["nextYear"])(this.leftDate);
      this.$emit('pick', null);
    },
    handleChangeRange: function handleChangeRange(val) {
      this.minDate = val.minDate;
      this.maxDate = val.maxDate;
      this.rangeState = val.rangeState;
    },
    handleRangePick: function handleRangePick(val) {
      var _this = this;

      var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var defaultTime = this.defaultTime || [];
      var minDate = Object(date_util_["modifyWithTimeString"])(val.minDate, defaultTime[0]);
      var maxDate = Object(date_util_["modifyWithTimeString"])(val.maxDate, defaultTime[1]);
      if (this.maxDate === maxDate && this.minDate === minDate) {
        return;
      }
      this.onPick && this.onPick(val);
      this.maxDate = maxDate;
      this.minDate = minDate;

      // workaround for https://github.com/ElemeFE/element/issues/7539, should remove this block when we don't have to care about Chromium 55 - 57
      setTimeout(function () {
        _this.maxDate = maxDate;
        _this.minDate = minDate;
      }, 10);
      if (!close) return;
      this.handleConfirm();
    },
    handleShortcutClick: function handleShortcutClick(shortcut) {
      if (shortcut.onClick) {
        shortcut.onClick(this);
      }
    },


    // leftPrev*, rightNext* need to take care of `unlinkPanels`
    leftPrevYear: function leftPrevYear() {
      this.leftDate = Object(date_util_["prevYear"])(this.leftDate);
      if (!this.unlinkPanels) {
        this.rightDate = Object(date_util_["prevYear"])(this.rightDate);
      }
    },
    rightNextYear: function rightNextYear() {
      if (!this.unlinkPanels) {
        this.leftDate = Object(date_util_["nextYear"])(this.leftDate);
      }
      this.rightDate = Object(date_util_["nextYear"])(this.rightDate);
    },


    // leftNext*, rightPrev* are called when `unlinkPanels` is true
    leftNextYear: function leftNextYear() {
      this.leftDate = Object(date_util_["nextYear"])(this.leftDate);
    },
    rightPrevYear: function rightPrevYear() {
      this.rightDate = Object(date_util_["prevYear"])(this.rightDate);
    },
    handleConfirm: function handleConfirm() {
      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.isValidValue([this.minDate, this.maxDate])) {
        this.$emit('pick', [this.minDate, this.maxDate], visible);
      }
    },
    isValidValue: function isValidValue(value) {
      return Array.isArray(value) && value && value[0] && value[1] && Object(date_util_["isDate"])(value[0]) && Object(date_util_["isDate"])(value[1]) && value[0].getTime() <= value[1].getTime() && (typeof this.disabledDate === 'function' ? !this.disabledDate(value[0]) && !this.disabledDate(value[1]) : true);
    },
    resetView: function resetView() {
      // NOTE: this is a hack to reset {min, max}Date on picker open.
      // TODO: correct way of doing so is to refactor {min, max}Date to be dependent on value and internal selection state
      //       an alternative would be resetView whenever picker becomes visible, should also investigate date-panel's resetView
      this.minDate = this.value && Object(date_util_["isDate"])(this.value[0]) ? new Date(this.value[0]) : null;
      this.maxDate = this.value && Object(date_util_["isDate"])(this.value[0]) ? new Date(this.value[1]) : null;
    }
  },

  components: { MonthTable: month_table, ElInput: input_default.a, ElButton: button_default.a }
});
// CONCATENATED MODULE: ./packages/date-picker/src/panel/month-range.vue?vue&type=script&lang=js&
 /* harmony default export */ var panel_month_rangevue_type_script_lang_js_ = (month_rangevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-picker/src/panel/month-range.vue





/* normalize component */

var month_range_component = normalizeComponent(
  panel_month_rangevue_type_script_lang_js_,
  month_rangevue_type_template_id_f2645fb8_render,
  month_rangevue_type_template_id_f2645fb8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var month_range_api; }
month_range_component.options.__file = "packages/date-picker/src/panel/month-range.vue"
/* harmony default export */ var month_range = (month_range_component.exports);
// CONCATENATED MODULE: ./packages/date-picker/src/picker/date-picker.js





var date_picker_getPanel = function getPanel(type) {
  if (type === 'daterange' || type === 'datetimerange') {
    return date_range;
  } else if (type === 'monthrange') {
    return month_range;
  }
  return panel_date;
};

/* harmony default export */ var date_picker = ({
  mixins: [picker],

  name: 'ElDatePicker',

  props: {
    type: {
      type: String,
      default: 'date'
    },
    timeArrowControl: Boolean
  },

  watch: {
    type: function type(_type) {
      if (this.picker) {
        this.unmountPicker();
        this.panel = date_picker_getPanel(_type);
        this.mountPicker();
      } else {
        this.panel = date_picker_getPanel(_type);
      }
    }
  },

  created: function created() {
    this.panel = date_picker_getPanel(this.type);
  }
});
// CONCATENATED MODULE: ./packages/date-picker/index.js


/* istanbul ignore next */
date_picker.install = function install(Vue) {
  Vue.component(date_picker.name, date_picker);
};

/* harmony default export */ var packages_date_picker = (date_picker);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/date-picker/src/panel/time-select.vue?vue&type=template&id=51ab9320&
var time_selectvue_type_template_id_51ab9320_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "el-zoom-in-top" },
      on: {
        "before-enter": _vm.handleMenuEnter,
        "after-leave": function($event) {
          return _vm.$emit("dodestroy")
        }
      }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          ref: "popper",
          staticClass: "el-picker-panel time-select el-popper",
          class: _vm.popperClass,
          style: { width: _vm.width + "px" }
        },
        [
          _c(
            "el-scrollbar",
            {
              attrs: { noresize: "", "wrap-class": "el-picker-panel__content" }
            },
            _vm._l(_vm.items, function(item) {
              return _c(
                "div",
                {
                  key: item.value,
                  staticClass: "time-select-item",
                  class: {
                    selected: _vm.value === item.value,
                    disabled: item.disabled,
                    default: item.value === _vm.defaultValue
                  },
                  attrs: { disabled: item.disabled },
                  on: {
                    click: function($event) {
                      return _vm.handleClick(item)
                    }
                  }
                },
                [_vm._v(_vm._s(item.value))]
              )
            }),
            0
          )
        ],
        1
      )
    ]
  )
}
var time_selectvue_type_template_id_51ab9320_staticRenderFns = []
time_selectvue_type_template_id_51ab9320_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-picker/src/panel/time-select.vue?vue&type=template&id=51ab9320&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/date-picker/src/panel/time-select.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var parseTime = function parseTime(time) {
  var values = (time || '').split(':');
  if (values.length >= 2) {
    var hours = parseInt(values[0], 10);
    var minutes = parseInt(values[1], 10);

    return {
      hours: hours,
      minutes: minutes
    };
  }
  /* istanbul ignore next */
  return null;
};

var compareTime = function compareTime(time1, time2) {
  var value1 = parseTime(time1);
  var value2 = parseTime(time2);

  var minutes1 = value1.minutes + value1.hours * 60;
  var minutes2 = value2.minutes + value2.hours * 60;

  if (minutes1 === minutes2) {
    return 0;
  }

  return minutes1 > minutes2 ? 1 : -1;
};

var formatTime = function formatTime(time) {
  return (time.hours < 10 ? '0' + time.hours : time.hours) + ':' + (time.minutes < 10 ? '0' + time.minutes : time.minutes);
};

var nextTime = function nextTime(time, step) {
  var timeValue = parseTime(time);
  var stepValue = parseTime(step);

  var next = {
    hours: timeValue.hours,
    minutes: timeValue.minutes
  };

  next.minutes += stepValue.minutes;
  next.hours += stepValue.hours;

  next.hours += Math.floor(next.minutes / 60);
  next.minutes = next.minutes % 60;

  return formatTime(next);
};

/* harmony default export */ var time_selectvue_type_script_lang_js_ = ({
  components: { ElScrollbar: scrollbar_default.a },

  watch: {
    value: function value(val) {
      var _this = this;

      if (!val) return;
      this.$nextTick(function () {
        return _this.scrollToOption();
      });
    }
  },

  methods: {
    handleClick: function handleClick(item) {
      if (!item.disabled) {
        this.$emit('pick', item.value);
      }
    },
    handleClear: function handleClear() {
      this.$emit('pick', null);
    },
    scrollToOption: function scrollToOption() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.selected';

      var menu = this.$refs.popper.querySelector('.el-picker-panel__content');
      scroll_into_view_default()(menu, menu.querySelector(selector));
    },
    handleMenuEnter: function handleMenuEnter() {
      var _this2 = this;

      var selected = this.items.map(function (item) {
        return item.value;
      }).indexOf(this.value) !== -1;
      var hasDefault = this.items.map(function (item) {
        return item.value;
      }).indexOf(this.defaultValue) !== -1;
      var option = selected && '.selected' || hasDefault && '.default' || '.time-select-item:not(.disabled)';
      this.$nextTick(function () {
        return _this2.scrollToOption(option);
      });
    },
    scrollDown: function scrollDown(step) {
      var items = this.items;
      var length = items.length;
      var total = items.length;
      var index = items.map(function (item) {
        return item.value;
      }).indexOf(this.value);
      while (total--) {
        index = (index + step + length) % length;
        if (!items[index].disabled) {
          this.$emit('pick', items[index].value, true);
          return;
        }
      }
    },
    isValidValue: function isValidValue(date) {
      return this.items.filter(function (item) {
        return !item.disabled;
      }).map(function (item) {
        return item.value;
      }).indexOf(date) !== -1;
    },
    handleKeydown: function handleKeydown(event) {
      var keyCode = event.keyCode;
      if (keyCode === 38 || keyCode === 40) {
        var mapping = { 40: 1, 38: -1 };
        var offset = mapping[keyCode.toString()];
        this.scrollDown(offset);
        event.stopPropagation();
        return;
      }
    }
  },

  data: function data() {
    return {
      popperClass: '',
      start: '09:00',
      end: '18:00',
      step: '00:30',
      value: '',
      defaultValue: '',
      visible: false,
      minTime: '',
      maxTime: '',
      width: 0
    };
  },


  computed: {
    items: function items() {
      var start = this.start;
      var end = this.end;
      var step = this.step;

      var result = [];

      if (start && end && step) {
        var current = start;
        while (compareTime(current, end) <= 0) {
          result.push({
            value: current,
            disabled: compareTime(current, this.minTime || '-1:-1') <= 0 || compareTime(current, this.maxTime || '100:100') >= 0
          });
          current = nextTime(current, step);
        }
      }

      return result;
    }
  }
});
// CONCATENATED MODULE: ./packages/date-picker/src/panel/time-select.vue?vue&type=script&lang=js&
 /* harmony default export */ var panel_time_selectvue_type_script_lang_js_ = (time_selectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-picker/src/panel/time-select.vue





/* normalize component */

var time_select_component = normalizeComponent(
  panel_time_selectvue_type_script_lang_js_,
  time_selectvue_type_template_id_51ab9320_render,
  time_selectvue_type_template_id_51ab9320_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var time_select_api; }
time_select_component.options.__file = "packages/date-picker/src/panel/time-select.vue"
/* harmony default export */ var time_select = (time_select_component.exports);
// CONCATENATED MODULE: ./packages/date-picker/src/picker/time-select.js



/* harmony default export */ var picker_time_select = ({
  mixins: [picker],

  name: 'ElTimeSelect',

  componentName: 'ElTimeSelect',

  props: {
    type: {
      type: String,
      default: 'time-select'
    }
  },

  beforeCreate: function beforeCreate() {
    this.panel = time_select;
  }
});
// CONCATENATED MODULE: ./packages/time-select/index.js


/* istanbul ignore next */
picker_time_select.install = function (Vue) {
  Vue.component(picker_time_select.name, picker_time_select);
};

/* harmony default export */ var packages_time_select = (picker_time_select);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/date-picker/src/panel/time-range.vue?vue&type=template&id=fb28660e&
var time_rangevue_type_template_id_fb28660e_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "el-zoom-in-top" },
      on: {
        "after-leave": function($event) {
          return _vm.$emit("dodestroy")
        }
      }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          staticClass: "el-time-range-picker el-picker-panel el-popper",
          class: _vm.popperClass
        },
        [
          _c("div", { staticClass: "el-time-range-picker__content" }, [
            _c("div", { staticClass: "el-time-range-picker__cell" }, [
              _c("div", { staticClass: "el-time-range-picker__header" }, [
                _vm._v(_vm._s(_vm.t("el.datepicker.startTime")))
              ]),
              _c(
                "div",
                {
                  staticClass:
                    "el-time-range-picker__body el-time-panel__content",
                  class: {
                    "has-seconds": _vm.showSeconds,
                    "is-arrow": _vm.arrowControl
                  }
                },
                [
                  _c("time-spinner", {
                    ref: "minSpinner",
                    attrs: {
                      "show-seconds": _vm.showSeconds,
                      "am-pm-mode": _vm.amPmMode,
                      "arrow-control": _vm.arrowControl,
                      date: _vm.minDate
                    },
                    on: {
                      change: _vm.handleMinChange,
                      "select-range": _vm.setMinSelectionRange
                    }
                  })
                ],
                1
              )
            ]),
            _c("div", { staticClass: "el-time-range-picker__cell" }, [
              _c("div", { staticClass: "el-time-range-picker__header" }, [
                _vm._v(_vm._s(_vm.t("el.datepicker.endTime")))
              ]),
              _c(
                "div",
                {
                  staticClass:
                    "el-time-range-picker__body el-time-panel__content",
                  class: {
                    "has-seconds": _vm.showSeconds,
                    "is-arrow": _vm.arrowControl
                  }
                },
                [
                  _c("time-spinner", {
                    ref: "maxSpinner",
                    attrs: {
                      "show-seconds": _vm.showSeconds,
                      "am-pm-mode": _vm.amPmMode,
                      "arrow-control": _vm.arrowControl,
                      date: _vm.maxDate
                    },
                    on: {
                      change: _vm.handleMaxChange,
                      "select-range": _vm.setMaxSelectionRange
                    }
                  })
                ],
                1
              )
            ])
          ]),
          _c("div", { staticClass: "el-time-panel__footer" }, [
            _c(
              "button",
              {
                staticClass: "el-time-panel__btn cancel",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.handleCancel()
                  }
                }
              },
              [_vm._v(_vm._s(_vm.t("el.datepicker.cancel")))]
            ),
            _c(
              "button",
              {
                staticClass: "el-time-panel__btn confirm",
                attrs: { type: "button", disabled: _vm.btnDisabled },
                on: {
                  click: function($event) {
                    return _vm.handleConfirm()
                  }
                }
              },
              [_vm._v(_vm._s(_vm.t("el.datepicker.confirm")))]
            )
          ])
        ]
      )
    ]
  )
}
var time_rangevue_type_template_id_fb28660e_staticRenderFns = []
time_rangevue_type_template_id_fb28660e_render._withStripped = true


// CONCATENATED MODULE: ./packages/date-picker/src/panel/time-range.vue?vue&type=template&id=fb28660e&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/date-picker/src/panel/time-range.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var MIN_TIME = Object(date_util_["parseDate"])('00:00:00', 'HH:mm:ss');
var MAX_TIME = Object(date_util_["parseDate"])('23:59:59', 'HH:mm:ss');

var time_rangevue_type_script_lang_js_minTimeOfDay = function minTimeOfDay(date) {
  return Object(date_util_["modifyDate"])(MIN_TIME, date.getFullYear(), date.getMonth(), date.getDate());
};

var time_rangevue_type_script_lang_js_maxTimeOfDay = function maxTimeOfDay(date) {
  return Object(date_util_["modifyDate"])(MAX_TIME, date.getFullYear(), date.getMonth(), date.getDate());
};

// increase time by amount of milliseconds, but within the range of day
var advanceTime = function advanceTime(date, amount) {
  return new Date(Math.min(date.getTime() + amount, time_rangevue_type_script_lang_js_maxTimeOfDay(date).getTime()));
};

/* harmony default export */ var time_rangevue_type_script_lang_js_ = ({
  mixins: [locale_default.a],

  components: { TimeSpinner: time_spinner },

  computed: {
    showSeconds: function showSeconds() {
      return (this.format || '').indexOf('ss') !== -1;
    },
    offset: function offset() {
      return this.showSeconds ? 11 : 8;
    },
    spinner: function spinner() {
      return this.selectionRange[0] < this.offset ? this.$refs.minSpinner : this.$refs.maxSpinner;
    },
    btnDisabled: function btnDisabled() {
      return this.minDate.getTime() > this.maxDate.getTime();
    },
    amPmMode: function amPmMode() {
      if ((this.format || '').indexOf('A') !== -1) return 'A';
      if ((this.format || '').indexOf('a') !== -1) return 'a';
      return '';
    }
  },

  data: function data() {
    return {
      popperClass: '',
      minDate: new Date(),
      maxDate: new Date(),
      value: [],
      oldValue: [new Date(), new Date()],
      defaultValue: null,
      format: 'HH:mm:ss',
      visible: false,
      selectionRange: [0, 2],
      arrowControl: false
    };
  },


  watch: {
    value: function value(_value) {
      if (Array.isArray(_value)) {
        this.minDate = new Date(_value[0]);
        this.maxDate = new Date(_value[1]);
      } else {
        if (Array.isArray(this.defaultValue)) {
          this.minDate = new Date(this.defaultValue[0]);
          this.maxDate = new Date(this.defaultValue[1]);
        } else if (this.defaultValue) {
          this.minDate = new Date(this.defaultValue);
          this.maxDate = advanceTime(new Date(this.defaultValue), 60 * 60 * 1000);
        } else {
          this.minDate = new Date();
          this.maxDate = advanceTime(new Date(), 60 * 60 * 1000);
        }
      }
    },
    visible: function visible(val) {
      var _this = this;

      if (val) {
        this.oldValue = this.value;
        this.$nextTick(function () {
          return _this.$refs.minSpinner.emitSelectRange('hours');
        });
      }
    }
  },

  methods: {
    handleClear: function handleClear() {
      this.$emit('pick', null);
    },
    handleCancel: function handleCancel() {
      this.$emit('pick', this.oldValue);
    },
    handleMinChange: function handleMinChange(date) {
      this.minDate = Object(date_util_["clearMilliseconds"])(date);
      this.handleChange();
    },
    handleMaxChange: function handleMaxChange(date) {
      this.maxDate = Object(date_util_["clearMilliseconds"])(date);
      this.handleChange();
    },
    handleChange: function handleChange() {
      if (this.isValidValue([this.minDate, this.maxDate])) {
        this.$refs.minSpinner.selectableRange = [[time_rangevue_type_script_lang_js_minTimeOfDay(this.minDate), this.maxDate]];
        this.$refs.maxSpinner.selectableRange = [[this.minDate, time_rangevue_type_script_lang_js_maxTimeOfDay(this.maxDate)]];
        this.$emit('pick', [this.minDate, this.maxDate], true);
      }
    },
    setMinSelectionRange: function setMinSelectionRange(start, end) {
      this.$emit('select-range', start, end, 'min');
      this.selectionRange = [start, end];
    },
    setMaxSelectionRange: function setMaxSelectionRange(start, end) {
      this.$emit('select-range', start, end, 'max');
      this.selectionRange = [start + this.offset, end + this.offset];
    },
    handleConfirm: function handleConfirm() {
      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var minSelectableRange = this.$refs.minSpinner.selectableRange;
      var maxSelectableRange = this.$refs.maxSpinner.selectableRange;

      this.minDate = Object(date_util_["limitTimeRange"])(this.minDate, minSelectableRange, this.format);
      this.maxDate = Object(date_util_["limitTimeRange"])(this.maxDate, maxSelectableRange, this.format);

      this.$emit('pick', [this.minDate, this.maxDate], visible);
    },
    adjustSpinners: function adjustSpinners() {
      this.$refs.minSpinner.adjustSpinners();
      this.$refs.maxSpinner.adjustSpinners();
    },
    changeSelectionRange: function changeSelectionRange(step) {
      var list = this.showSeconds ? [0, 3, 6, 11, 14, 17] : [0, 3, 8, 11];
      var mapping = ['hours', 'minutes'].concat(this.showSeconds ? ['seconds'] : []);
      var index = list.indexOf(this.selectionRange[0]);
      var next = (index + step + list.length) % list.length;
      var half = list.length / 2;
      if (next < half) {
        this.$refs.minSpinner.emitSelectRange(mapping[next]);
      } else {
        this.$refs.maxSpinner.emitSelectRange(mapping[next - half]);
      }
    },
    isValidValue: function isValidValue(date) {
      return Array.isArray(date) && Object(date_util_["timeWithinRange"])(this.minDate, this.$refs.minSpinner.selectableRange) && Object(date_util_["timeWithinRange"])(this.maxDate, this.$refs.maxSpinner.selectableRange);
    },
    handleKeydown: function handleKeydown(event) {
      var keyCode = event.keyCode;
      var mapping = { 38: -1, 40: 1, 37: -1, 39: 1 };

      // Left or Right
      if (keyCode === 37 || keyCode === 39) {
        var step = mapping[keyCode];
        this.changeSelectionRange(step);
        event.preventDefault();
        return;
      }

      // Up or Down
      if (keyCode === 38 || keyCode === 40) {
        var _step = mapping[keyCode];
        this.spinner.scrollDown(_step);
        event.preventDefault();
        return;
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/date-picker/src/panel/time-range.vue?vue&type=script&lang=js&
 /* harmony default export */ var panel_time_rangevue_type_script_lang_js_ = (time_rangevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/date-picker/src/panel/time-range.vue





/* normalize component */

var time_range_component = normalizeComponent(
  panel_time_rangevue_type_script_lang_js_,
  time_rangevue_type_template_id_fb28660e_render,
  time_rangevue_type_template_id_fb28660e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var time_range_api; }
time_range_component.options.__file = "packages/date-picker/src/panel/time-range.vue"
/* harmony default export */ var time_range = (time_range_component.exports);
// CONCATENATED MODULE: ./packages/date-picker/src/picker/time-picker.js




/* harmony default export */ var time_picker = ({
  mixins: [picker],

  name: 'ElTimePicker',

  props: {
    isRange: Boolean,
    arrowControl: Boolean
  },

  data: function data() {
    return {
      type: ''
    };
  },


  watch: {
    isRange: function isRange(_isRange) {
      if (this.picker) {
        this.unmountPicker();
        this.type = _isRange ? 'timerange' : 'time';
        this.panel = _isRange ? time_range : panel_time;
        this.mountPicker();
      } else {
        this.type = _isRange ? 'timerange' : 'time';
        this.panel = _isRange ? time_range : panel_time;
      }
    }
  },

  created: function created() {
    this.type = this.isRange ? 'timerange' : 'time';
    this.panel = this.isRange ? time_range : panel_time;
  }
});
// CONCATENATED MODULE: ./packages/time-picker/index.js


/* istanbul ignore next */
time_picker.install = function (Vue) {
  Vue.component(time_picker.name, time_picker);
};

/* harmony default export */ var packages_time_picker = (time_picker);
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/dropdown/src/dropdown.vue?vue&type=script&lang=js&








/* harmony default export */ var dropdownvue_type_script_lang_js_ = ({
  name: 'ElDropdown',

  componentName: 'ElDropdown',

  mixins: [emitter_default.a, migrating_default.a],

  directives: { Clickoutside: clickoutside_default.a },

  components: {
    ElButton: button_default.a,
    ElButtonGroup: packages_button_group
  },

  provide: function provide() {
    return {
      dropdown: this
    };
  },


  props: {
    trigger: {
      type: String,
      default: 'hover'
    },
    type: String,
    size: {
      type: String,
      default: ''
    },
    splitButton: Boolean,
    hideOnClick: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'bottom-end'
    },
    visibleArrow: {
      default: true
    },
    showTimeout: {
      type: Number,
      default: 250
    },
    hideTimeout: {
      type: Number,
      default: 150
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },

  data: function data() {
    return {
      timeout: null,
      visible: false,
      triggerElm: null,
      menuItems: null,
      menuItemsArray: null,
      dropdownElm: null,
      focusing: false,
      listId: 'dropdown-menu-' + Object(util_["generateId"])()
    };
  },


  computed: {
    dropdownSize: function dropdownSize() {
      return this.size || (this.$ELEMENT || {}).size;
    }
  },

  mounted: function mounted() {
    this.$on('menu-item-click', this.handleMenuItemClick);
  },


  watch: {
    visible: function visible(val) {
      this.broadcast('ElDropdownMenu', 'visible', val);
      this.$emit('visible-change', val);
    },
    focusing: function focusing(val) {
      var selfDefine = this.$el.querySelector('.el-dropdown-selfdefine');
      if (selfDefine) {
        // 自定义
        if (val) {
          selfDefine.className += ' focusing';
        } else {
          selfDefine.className = selfDefine.className.replace('focusing', '');
        }
      }
    }
  },

  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'menu-align': 'menu-align is renamed to placement.'
        }
      };
    },
    show: function show() {
      var _this = this;

      if (this.triggerElm.disabled) return;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        _this.visible = true;
      }, this.trigger === 'click' ? 0 : this.showTimeout);
    },
    hide: function hide() {
      var _this2 = this;

      if (this.triggerElm.disabled) return;
      this.removeTabindex();
      if (this.tabindex >= 0) {
        this.resetTabindex(this.triggerElm);
      }
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        _this2.visible = false;
      }, this.trigger === 'click' ? 0 : this.hideTimeout);
    },
    handleClick: function handleClick() {
      if (this.triggerElm.disabled) return;
      if (this.visible) {
        this.hide();
      } else {
        this.show();
      }
    },
    handleTriggerKeyDown: function handleTriggerKeyDown(ev) {
      var keyCode = ev.keyCode;
      if ([38, 40].indexOf(keyCode) > -1) {
        // up/down
        this.removeTabindex();
        this.resetTabindex(this.menuItems[0]);
        this.menuItems[0].focus();
        ev.preventDefault();
        ev.stopPropagation();
      } else if (keyCode === 13) {
        // space enter选中
        this.handleClick();
      } else if ([9, 27].indexOf(keyCode) > -1) {
        // tab || esc
        this.hide();
      }
    },
    handleItemKeyDown: function handleItemKeyDown(ev) {
      var keyCode = ev.keyCode;
      var target = ev.target;
      var currentIndex = this.menuItemsArray.indexOf(target);
      var max = this.menuItemsArray.length - 1;
      var nextIndex = void 0;
      if ([38, 40].indexOf(keyCode) > -1) {
        // up/down
        if (keyCode === 38) {
          // up
          nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0;
        } else {
          // down
          nextIndex = currentIndex < max ? currentIndex + 1 : max;
        }
        this.removeTabindex();
        this.resetTabindex(this.menuItems[nextIndex]);
        this.menuItems[nextIndex].focus();
        ev.preventDefault();
        ev.stopPropagation();
      } else if (keyCode === 13) {
        // enter选中
        this.triggerElmFocus();
        target.click();
        if (this.hideOnClick) {
          // click关闭
          this.visible = false;
        }
      } else if ([9, 27].indexOf(keyCode) > -1) {
        // tab // esc
        this.hide();
        this.triggerElmFocus();
      }
    },
    resetTabindex: function resetTabindex(ele) {
      // 下次tab时组件聚焦元素
      this.removeTabindex();
      ele.setAttribute('tabindex', '0'); // 下次期望的聚焦元素
    },
    removeTabindex: function removeTabindex() {
      this.triggerElm.setAttribute('tabindex', '-1');
      this.menuItemsArray.forEach(function (item) {
        item.setAttribute('tabindex', '-1');
      });
    },
    initAria: function initAria() {
      this.dropdownElm.setAttribute('id', this.listId);
      this.triggerElm.setAttribute('aria-haspopup', 'list');
      this.triggerElm.setAttribute('aria-controls', this.listId);

      if (!this.splitButton) {
        // 自定义
        this.triggerElm.setAttribute('role', 'button');
        this.triggerElm.setAttribute('tabindex', this.tabindex);
        this.triggerElm.setAttribute('class', (this.triggerElm.getAttribute('class') || '') + ' el-dropdown-selfdefine'); // 控制
      }
    },
    initEvent: function initEvent() {
      var _this3 = this;

      var trigger = this.trigger,
          show = this.show,
          hide = this.hide,
          handleClick = this.handleClick,
          splitButton = this.splitButton,
          handleTriggerKeyDown = this.handleTriggerKeyDown,
          handleItemKeyDown = this.handleItemKeyDown;

      this.triggerElm = splitButton ? this.$refs.trigger.$el : this.$slots.default[0].elm;

      var dropdownElm = this.dropdownElm;

      this.triggerElm.addEventListener('keydown', handleTriggerKeyDown); // triggerElm keydown
      dropdownElm.addEventListener('keydown', handleItemKeyDown, true); // item keydown
      // 控制自定义元素的样式
      if (!splitButton) {
        this.triggerElm.addEventListener('focus', function () {
          _this3.focusing = true;
        });
        this.triggerElm.addEventListener('blur', function () {
          _this3.focusing = false;
        });
        this.triggerElm.addEventListener('click', function () {
          _this3.focusing = false;
        });
      }
      if (trigger === 'hover') {
        this.triggerElm.addEventListener('mouseenter', show);
        this.triggerElm.addEventListener('mouseleave', hide);
        dropdownElm.addEventListener('mouseenter', show);
        dropdownElm.addEventListener('mouseleave', hide);
      } else if (trigger === 'click') {
        this.triggerElm.addEventListener('click', handleClick);
      }
    },
    handleMenuItemClick: function handleMenuItemClick(command, instance) {
      if (this.hideOnClick) {
        this.visible = false;
      }
      this.$emit('command', command, instance);
    },
    triggerElmFocus: function triggerElmFocus() {
      this.triggerElm.focus && this.triggerElm.focus();
    },
    initDomOperation: function initDomOperation() {
      this.dropdownElm = this.popperElm;
      this.menuItems = this.dropdownElm.querySelectorAll("[tabindex='-1']");
      this.menuItemsArray = [].slice.call(this.menuItems);

      this.initEvent();
      this.initAria();
    }
  },

  render: function render(h) {
    var _this4 = this;

    var hide = this.hide,
        splitButton = this.splitButton,
        type = this.type,
        dropdownSize = this.dropdownSize;


    var handleMainButtonClick = function handleMainButtonClick(event) {
      _this4.$emit('click', event);
      hide();
    };

    var triggerElm = !splitButton ? this.$slots.default : h('el-button-group', [h(
      'el-button',
      {
        attrs: { type: type, size: dropdownSize },
        nativeOn: {
          'click': handleMainButtonClick
        }
      },
      [this.$slots.default]
    ), h(
      'el-button',
      { ref: 'trigger', attrs: { type: type, size: dropdownSize },
        'class': 'el-dropdown__caret-button' },
      [h('i', { 'class': 'el-dropdown__icon el-icon-arrow-down' })]
    )]);

    return h(
      'div',
      { 'class': 'el-dropdown', directives: [{
          name: 'clickoutside',
          value: hide
        }]
      },
      [triggerElm, this.$slots.dropdown]
    );
  }
});
// CONCATENATED MODULE: ./packages/dropdown/src/dropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_dropdownvue_type_script_lang_js_ = (dropdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/dropdown/src/dropdown.vue
var dropdown_render, dropdown_staticRenderFns




/* normalize component */

var dropdown_component = normalizeComponent(
  src_dropdownvue_type_script_lang_js_,
  dropdown_render,
  dropdown_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var dropdown_api; }
dropdown_component.options.__file = "packages/dropdown/src/dropdown.vue"
/* harmony default export */ var dropdown = (dropdown_component.exports);
// CONCATENATED MODULE: ./packages/dropdown/index.js


/* istanbul ignore next */
dropdown.install = function (Vue) {
  Vue.component(dropdown.name, dropdown);
};

/* harmony default export */ var packages_dropdown = (dropdown);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/dropdown/src/dropdown-menu.vue?vue&type=template&id=0da6b714&
var dropdown_menuvue_type_template_id_0da6b714_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    { attrs: { name: "el-zoom-in-top" }, on: { "after-leave": _vm.doDestroy } },
    [
      _c(
        "ul",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showPopper,
              expression: "showPopper"
            }
          ],
          staticClass: "el-dropdown-menu el-popper",
          class: [_vm.size && "el-dropdown-menu--" + _vm.size]
        },
        [_vm._t("default")],
        2
      )
    ]
  )
}
var dropdown_menuvue_type_template_id_0da6b714_staticRenderFns = []
dropdown_menuvue_type_template_id_0da6b714_render._withStripped = true


// CONCATENATED MODULE: ./packages/dropdown/src/dropdown-menu.vue?vue&type=template&id=0da6b714&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/dropdown/src/dropdown-menu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//



/* harmony default export */ var dropdown_menuvue_type_script_lang_js_ = ({
  name: 'ElDropdownMenu',

  componentName: 'ElDropdownMenu',

  mixins: [vue_popper_default.a],

  props: {
    visibleArrow: {
      type: Boolean,
      default: true
    },
    arrowOffset: {
      type: Number,
      default: 0
    }
  },

  data: function data() {
    return {
      size: this.dropdown.dropdownSize
    };
  },


  inject: ['dropdown'],

  created: function created() {
    var _this = this;

    this.$on('updatePopper', function () {
      if (_this.showPopper) _this.updatePopper();
    });
    this.$on('visible', function (val) {
      _this.showPopper = val;
    });
  },
  mounted: function mounted() {
    this.dropdown.popperElm = this.popperElm = this.$el;
    this.referenceElm = this.dropdown.$el;
    // compatible with 2.6 new v-slot syntax
    // issue link https://github.com/ElemeFE/element/issues/14345
    this.dropdown.initDomOperation();
  },


  watch: {
    'dropdown.placement': {
      immediate: true,
      handler: function handler(val) {
        this.currentPlacement = val;
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/dropdown/src/dropdown-menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_dropdown_menuvue_type_script_lang_js_ = (dropdown_menuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/dropdown/src/dropdown-menu.vue





/* normalize component */

var dropdown_menu_component = normalizeComponent(
  src_dropdown_menuvue_type_script_lang_js_,
  dropdown_menuvue_type_template_id_0da6b714_render,
  dropdown_menuvue_type_template_id_0da6b714_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var dropdown_menu_api; }
dropdown_menu_component.options.__file = "packages/dropdown/src/dropdown-menu.vue"
/* harmony default export */ var dropdown_menu = (dropdown_menu_component.exports);
// CONCATENATED MODULE: ./packages/dropdown-menu/index.js


/* istanbul ignore next */
dropdown_menu.install = function (Vue) {
  Vue.component(dropdown_menu.name, dropdown_menu);
};

/* harmony default export */ var packages_dropdown_menu = (dropdown_menu);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/dropdown/src/dropdown-item.vue?vue&type=template&id=6359102a&
var dropdown_itemvue_type_template_id_6359102a_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      staticClass: "el-dropdown-menu__item",
      class: {
        "is-disabled": _vm.disabled,
        "el-dropdown-menu__item--divided": _vm.divided
      },
      attrs: {
        "aria-disabled": _vm.disabled,
        tabindex: _vm.disabled ? null : -1
      },
      on: { click: _vm.handleClick }
    },
    [_vm.icon ? _c("i", { class: _vm.icon }) : _vm._e(), _vm._t("default")],
    2
  )
}
var dropdown_itemvue_type_template_id_6359102a_staticRenderFns = []
dropdown_itemvue_type_template_id_6359102a_render._withStripped = true


// CONCATENATED MODULE: ./packages/dropdown/src/dropdown-item.vue?vue&type=template&id=6359102a&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/dropdown/src/dropdown-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var dropdown_itemvue_type_script_lang_js_ = ({
  name: 'ElDropdownItem',

  mixins: [emitter_default.a],

  props: {
    command: {},
    disabled: Boolean,
    divided: Boolean,
    icon: String
  },

  methods: {
    handleClick: function handleClick(e) {
      this.dispatch('ElDropdown', 'menu-item-click', [this.command, this]);
    }
  }
});
// CONCATENATED MODULE: ./packages/dropdown/src/dropdown-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_dropdown_itemvue_type_script_lang_js_ = (dropdown_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/dropdown/src/dropdown-item.vue





/* normalize component */

var dropdown_item_component = normalizeComponent(
  src_dropdown_itemvue_type_script_lang_js_,
  dropdown_itemvue_type_template_id_6359102a_render,
  dropdown_itemvue_type_template_id_6359102a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var dropdown_item_api; }
dropdown_item_component.options.__file = "packages/dropdown/src/dropdown-item.vue"
/* harmony default export */ var dropdown_item = (dropdown_item_component.exports);
// CONCATENATED MODULE: ./packages/dropdown-item/index.js


/* istanbul ignore next */
dropdown_item.install = function (Vue) {
  Vue.component(dropdown_item.name, dropdown_item);
};

/* harmony default export */ var packages_dropdown_item = (dropdown_item);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/form/src/form.vue?vue&type=template&id=a1b5ff34&
var formvue_type_template_id_a1b5ff34_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      staticClass: "el-form",
      class: [
        _vm.labelPosition ? "el-form--label-" + _vm.labelPosition : "",
        { "el-form--inline": _vm.inline }
      ]
    },
    [_vm._t("default")],
    2
  )
}
var formvue_type_template_id_a1b5ff34_staticRenderFns = []
formvue_type_template_id_a1b5ff34_render._withStripped = true


// CONCATENATED MODULE: ./packages/form/src/form.vue?vue&type=template&id=a1b5ff34&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/form/src/form.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//



/* harmony default export */ var formvue_type_script_lang_js_ = ({
  name: 'ElForm',

  componentName: 'ElForm',

  provide: function provide() {
    return {
      elForm: this
    };
  },


  props: {
    model: Object,
    rules: Object,
    labelPosition: String,
    labelWidth: String,
    labelSuffix: {
      type: String,
      default: ''
    },
    inline: Boolean,
    inlineMessage: Boolean,
    statusIcon: Boolean,
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String,
    disabled: Boolean,
    validateOnRuleChange: {
      type: Boolean,
      default: true
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    rules: function rules() {
      // remove then add event listeners on form-item after form rules change
      this.fields.forEach(function (field) {
        field.removeValidateEvents();
        field.addValidateEvents();
      });

      if (this.validateOnRuleChange) {
        this.validate(function () {});
      }
    }
  },
  computed: {
    autoLabelWidth: function autoLabelWidth() {
      if (!this.potentialLabelWidthArr.length) return 0;
      var max = Math.max.apply(Math, this.potentialLabelWidthArr);
      return max ? max + 'px' : '';
    }
  },
  data: function data() {
    return {
      fields: [],
      potentialLabelWidthArr: [] // use this array to calculate auto width
    };
  },
  created: function created() {
    var _this = this;

    this.$on('el.form.addField', function (field) {
      if (field) {
        _this.fields.push(field);
      }
    });
    /* istanbul ignore next */
    this.$on('el.form.removeField', function (field) {
      if (field.prop) {
        _this.fields.splice(_this.fields.indexOf(field), 1);
      }
    });
  },

  methods: {
    resetFields: function resetFields() {
      if (!this.model) {
        console.warn('[Element Warn][Form]model is required for resetFields to work.');
        return;
      }
      this.fields.forEach(function (field) {
        field.resetField();
      });
    },
    clearValidate: function clearValidate() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var fields = props.length ? typeof props === 'string' ? this.fields.filter(function (field) {
        return props === field.prop;
      }) : this.fields.filter(function (field) {
        return props.indexOf(field.prop) > -1;
      }) : this.fields;
      fields.forEach(function (field) {
        field.clearValidate();
      });
    },
    validate: function validate(callback) {
      var _this2 = this;

      if (!this.model) {
        console.warn('[Element Warn][Form]model is required for validate to work!');
        return;
      }

      var promise = void 0;
      // if no callback, return promise
      if (typeof callback !== 'function' && window.Promise) {
        promise = new window.Promise(function (resolve, reject) {
          callback = function callback(valid) {
            valid ? resolve(valid) : reject(valid);
          };
        });
      }

      var valid = true;
      var count = 0;
      // 如果需要验证的fields为空，调用验证时立刻返回callback
      if (this.fields.length === 0 && callback) {
        callback(true);
      }
      var invalidFields = {};
      this.fields.forEach(function (field) {
        field.validate('', function (message, field) {
          if (message) {
            valid = false;
          }
          invalidFields = merge_default()({}, invalidFields, field);
          if (typeof callback === 'function' && ++count === _this2.fields.length) {
            callback(valid, invalidFields);
          }
        });
      });

      if (promise) {
        return promise;
      }
    },
    validateField: function validateField(props, cb) {
      props = [].concat(props);
      var fields = this.fields.filter(function (field) {
        return props.indexOf(field.prop) !== -1;
      });
      if (!fields.length) {
        console.warn('[Element Warn]please pass correct props!');
        return;
      }

      fields.forEach(function (field) {
        field.validate('', cb);
      });
    },
    getLabelWidthIndex: function getLabelWidthIndex(width) {
      var index = this.potentialLabelWidthArr.indexOf(width);
      // it's impossible
      if (index === -1) {
        throw new Error('[ElementForm]unpected width ', width);
      }
      return index;
    },
    registerLabelWidth: function registerLabelWidth(val, oldVal) {
      if (val && oldVal) {
        var index = this.getLabelWidthIndex(oldVal);
        this.potentialLabelWidthArr.splice(index, 1, val);
      } else if (val) {
        this.potentialLabelWidthArr.push(val);
      }
    },
    deregisterLabelWidth: function deregisterLabelWidth(val) {
      var index = this.getLabelWidthIndex(val);
      this.potentialLabelWidthArr.splice(index, 1);
    }
  }
});
// CONCATENATED MODULE: ./packages/form/src/form.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_formvue_type_script_lang_js_ = (formvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form.vue





/* normalize component */

var form_component = normalizeComponent(
  src_formvue_type_script_lang_js_,
  formvue_type_template_id_a1b5ff34_render,
  formvue_type_template_id_a1b5ff34_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var form_api; }
form_component.options.__file = "packages/form/src/form.vue"
/* harmony default export */ var src_form = (form_component.exports);
// CONCATENATED MODULE: ./packages/form/index.js


/* istanbul ignore next */
src_form.install = function (Vue) {
  Vue.component(src_form.name, src_form);
};

/* harmony default export */ var packages_form = (src_form);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/form/src/form-item.vue?vue&type=template&id=b6f3db6c&
var form_itemvue_type_template_id_b6f3db6c_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "el-form-item",
      class: [
        {
          "el-form-item--feedback": _vm.elForm && _vm.elForm.statusIcon,
          "is-error": _vm.validateState === "error",
          "is-validating": _vm.validateState === "validating",
          "is-success": _vm.validateState === "success",
          "is-required": _vm.isRequired || _vm.required,
          "is-no-asterisk": _vm.elForm && _vm.elForm.hideRequiredAsterisk
        },
        _vm.sizeClass ? "el-form-item--" + _vm.sizeClass : ""
      ]
    },
    [
      _c(
        "label-wrap",
        {
          attrs: {
            "is-auto-width": _vm.labelStyle && _vm.labelStyle.width === "auto",
            "update-all": _vm.form.labelWidth === "auto"
          }
        },
        [
          _vm.label || _vm.$slots.label
            ? _c(
                "label",
                {
                  staticClass: "el-form-item__label",
                  style: _vm.labelStyle,
                  attrs: { for: _vm.labelFor }
                },
                [
                  _vm._t("label", [
                    _vm._v(_vm._s(_vm.label + _vm.form.labelSuffix))
                  ])
                ],
                2
              )
            : _vm._e()
        ]
      ),
      _c(
        "div",
        { staticClass: "el-form-item__content", style: _vm.contentStyle },
        [
          _vm._t("default"),
          _c(
            "transition",
            { attrs: { name: "el-zoom-in-top" } },
            [
              _vm.validateState === "error" &&
              _vm.showMessage &&
              _vm.form.showMessage
                ? _vm._t(
                    "error",
                    [
                      _c(
                        "div",
                        {
                          staticClass: "el-form-item__error",
                          class: {
                            "el-form-item__error--inline":
                              typeof _vm.inlineMessage === "boolean"
                                ? _vm.inlineMessage
                                : (_vm.elForm && _vm.elForm.inlineMessage) ||
                                  false
                          }
                        },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.validateMessage) +
                              "\n        "
                          )
                        ]
                      )
                    ],
                    { error: _vm.validateMessage }
                  )
                : _vm._e()
            ],
            2
          )
        ],
        2
      )
    ],
    1
  )
}
var form_itemvue_type_template_id_b6f3db6c_staticRenderFns = []
form_itemvue_type_template_id_b6f3db6c_render._withStripped = true


// CONCATENATED MODULE: ./packages/form/src/form-item.vue?vue&type=template&id=b6f3db6c&

// EXTERNAL MODULE: external "async-validator"
var external_async_validator_ = __webpack_require__(30);
var external_async_validator_default = /*#__PURE__*/__webpack_require__.n(external_async_validator_);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/form/src/label-wrap.vue?vue&type=script&lang=js&


/* harmony default export */ var label_wrapvue_type_script_lang_js_ = ({
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },

  inject: ['elForm', 'elFormItem'],

  render: function render() {
    var h = arguments[0];

    var slots = this.$slots.default;
    if (!slots) return null;
    if (this.isAutoWidth) {
      var autoLabelWidth = this.elForm.autoLabelWidth;
      var style = {};
      if (autoLabelWidth && autoLabelWidth !== 'auto') {
        var marginLeft = parseInt(autoLabelWidth, 10) - this.computedWidth;
        if (marginLeft) {
          style.marginLeft = marginLeft + 'px';
        }
      }
      return h(
        'div',
        { 'class': 'el-form-item__label-wrap', style: style },
        [slots]
      );
    } else {
      return slots[0];
    }
  },


  methods: {
    getLabelWidth: function getLabelWidth() {
      if (this.$el && this.$el.firstElementChild) {
        var computedWidth = window.getComputedStyle(this.$el.firstElementChild).width;
        return Math.ceil(parseFloat(computedWidth));
      } else {
        return 0;
      }
    },
    updateLabelWidth: function updateLabelWidth() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'update';

      if (this.$slots.default && this.isAutoWidth && this.$el.firstElementChild) {
        if (action === 'update') {
          this.computedWidth = this.getLabelWidth();
        } else if (action === 'remove') {
          this.elForm.deregisterLabelWidth(this.computedWidth);
        }
      }
    }
  },

  watch: {
    computedWidth: function computedWidth(val, oldVal) {
      if (this.updateAll) {
        this.elForm.registerLabelWidth(val, oldVal);
        this.elFormItem.updateComputedLabelWidth(val);
      }
    }
  },

  data: function data() {
    return {
      computedWidth: 0
    };
  },
  mounted: function mounted() {
    this.updateLabelWidth('update');
  },
  updated: function updated() {
    this.updateLabelWidth('update');
  },
  beforeDestroy: function beforeDestroy() {
    this.updateLabelWidth('remove');
  }
});
// CONCATENATED MODULE: ./packages/form/src/label-wrap.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_label_wrapvue_type_script_lang_js_ = (label_wrapvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/label-wrap.vue
var label_wrap_render, label_wrap_staticRenderFns




/* normalize component */

var label_wrap_component = normalizeComponent(
  src_label_wrapvue_type_script_lang_js_,
  label_wrap_render,
  label_wrap_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var label_wrap_api; }
label_wrap_component.options.__file = "packages/form/src/label-wrap.vue"
/* harmony default export */ var label_wrap = (label_wrap_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/form/src/form-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var form_itemvue_type_script_lang_js_ = ({
  name: 'ElFormItem',

  componentName: 'ElFormItem',

  mixins: [emitter_default.a],

  provide: function provide() {
    return {
      elFormItem: this
    };
  },


  inject: ['elForm'],

  props: {
    label: String,
    labelWidth: String,
    prop: String,
    required: {
      type: Boolean,
      default: undefined
    },
    rules: [Object, Array],
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: ''
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String
  },
  components: {
    // use this component to calculate auto width
    LabelWrap: label_wrap
  },
  watch: {
    error: {
      immediate: true,
      handler: function handler(value) {
        this.validateMessage = value;
        this.validateState = value ? 'error' : '';
      }
    },
    validateStatus: function validateStatus(value) {
      this.validateState = value;
    }
  },
  computed: {
    labelFor: function labelFor() {
      return this.for || this.prop;
    },
    labelStyle: function labelStyle() {
      var ret = {};
      if (this.form.labelPosition === 'top') return ret;
      var labelWidth = this.labelWidth || this.form.labelWidth;
      if (labelWidth) {
        ret.width = labelWidth;
      }
      return ret;
    },
    contentStyle: function contentStyle() {
      var ret = {};
      var label = this.label;
      if (this.form.labelPosition === 'top' || this.form.inline) return ret;
      if (!label && !this.labelWidth && this.isNested) return ret;
      var labelWidth = this.labelWidth || this.form.labelWidth;
      if (labelWidth === 'auto') {
        if (this.labelWidth === 'auto') {
          ret.marginLeft = this.computedLabelWidth;
        } else if (this.form.labelWidth === 'auto') {
          ret.marginLeft = this.elForm.autoLabelWidth;
        }
      } else {
        ret.marginLeft = labelWidth;
      }
      return ret;
    },
    form: function form() {
      var parent = this.$parent;
      var parentName = parent.$options.componentName;
      while (parentName !== 'ElForm') {
        if (parentName === 'ElFormItem') {
          this.isNested = true;
        }
        parent = parent.$parent;
        parentName = parent.$options.componentName;
      }
      return parent;
    },
    fieldValue: function fieldValue() {
      var model = this.form.model;
      if (!model || !this.prop) {
        return;
      }

      var path = this.prop;
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.');
      }

      return Object(util_["getPropByPath"])(model, path, true).v;
    },
    isRequired: function isRequired() {
      var rules = this.getRules();
      var isRequired = false;

      if (rules && rules.length) {
        rules.every(function (rule) {
          if (rule.required) {
            isRequired = true;
            return false;
          }
          return true;
        });
      }
      return isRequired;
    },
    _formSize: function _formSize() {
      return this.elForm.size;
    },
    elFormItemSize: function elFormItemSize() {
      return this.size || this._formSize;
    },
    sizeClass: function sizeClass() {
      return this.elFormItemSize || (this.$ELEMENT || {}).size;
    }
  },
  data: function data() {
    return {
      validateState: '',
      validateMessage: '',
      validateDisabled: false,
      validator: {},
      isNested: false,
      computedLabelWidth: ''
    };
  },

  methods: {
    validate: function validate(trigger) {
      var _this = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : util_["noop"];

      this.validateDisabled = false;
      var rules = this.getFilteredRule(trigger);
      if ((!rules || rules.length === 0) && this.required === undefined) {
        callback();
        return true;
      }

      this.validateState = 'validating';

      var descriptor = {};
      if (rules && rules.length > 0) {
        rules.forEach(function (rule) {
          delete rule.trigger;
        });
      }
      descriptor[this.prop] = rules;

      var validator = new external_async_validator_default.a(descriptor);
      var model = {};

      model[this.prop] = this.fieldValue;

      validator.validate(model, { firstFields: true }, function (errors, invalidFields) {
        _this.validateState = !errors ? 'success' : 'error';
        _this.validateMessage = errors ? errors[0].message : '';

        callback(_this.validateMessage, invalidFields);
        _this.elForm && _this.elForm.$emit('validate', _this.prop, !errors, _this.validateMessage || null);
      });
    },
    clearValidate: function clearValidate() {
      this.validateState = '';
      this.validateMessage = '';
      this.validateDisabled = false;
    },
    resetField: function resetField() {
      var _this2 = this;

      this.validateState = '';
      this.validateMessage = '';

      var model = this.form.model;
      var value = this.fieldValue;
      var path = this.prop;
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.');
      }

      var prop = Object(util_["getPropByPath"])(model, path, true);

      this.validateDisabled = true;
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(this.initialValue);
      } else {
        prop.o[prop.k] = this.initialValue;
      }

      // reset validateDisabled after onFieldChange triggered
      this.$nextTick(function () {
        _this2.validateDisabled = false;
      });

      this.broadcast('ElTimeSelect', 'fieldReset', this.initialValue);
    },
    getRules: function getRules() {
      var formRules = this.form.rules;
      var selfRules = this.rules;
      var requiredRule = this.required !== undefined ? { required: !!this.required } : [];

      var prop = Object(util_["getPropByPath"])(formRules, this.prop || '');
      formRules = formRules ? prop.o[this.prop || ''] || prop.v : [];

      return [].concat(selfRules || formRules || []).concat(requiredRule);
    },
    getFilteredRule: function getFilteredRule(trigger) {
      var rules = this.getRules();

      return rules.filter(function (rule) {
        if (!rule.trigger || trigger === '') return true;
        if (Array.isArray(rule.trigger)) {
          return rule.trigger.indexOf(trigger) > -1;
        } else {
          return rule.trigger === trigger;
        }
      }).map(function (rule) {
        return merge_default()({}, rule);
      });
    },
    onFieldBlur: function onFieldBlur() {
      this.validate('blur');
    },
    onFieldChange: function onFieldChange() {
      if (this.validateDisabled) {
        this.validateDisabled = false;
        return;
      }

      this.validate('change');
    },
    updateComputedLabelWidth: function updateComputedLabelWidth(width) {
      this.computedLabelWidth = width ? width + 'px' : '';
    },
    addValidateEvents: function addValidateEvents() {
      var rules = this.getRules();

      if (rules.length || this.required !== undefined) {
        this.$on('el.form.blur', this.onFieldBlur);
        this.$on('el.form.change', this.onFieldChange);
      }
    },
    removeValidateEvents: function removeValidateEvents() {
      this.$off();
    }
  },
  mounted: function mounted() {
    if (this.prop) {
      this.dispatch('ElForm', 'el.form.addField', [this]);

      var initialValue = this.fieldValue;
      if (Array.isArray(initialValue)) {
        initialValue = [].concat(initialValue);
      }
      Object.defineProperty(this, 'initialValue', {
        value: initialValue
      });

      this.addValidateEvents();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.dispatch('ElForm', 'el.form.removeField', [this]);
  }
});
// CONCATENATED MODULE: ./packages/form/src/form-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_form_itemvue_type_script_lang_js_ = (form_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form-item.vue





/* normalize component */

var form_item_component = normalizeComponent(
  src_form_itemvue_type_script_lang_js_,
  form_itemvue_type_template_id_b6f3db6c_render,
  form_itemvue_type_template_id_b6f3db6c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var form_item_api; }
form_item_component.options.__file = "packages/form/src/form-item.vue"
/* harmony default export */ var form_item = (form_item_component.exports);
// CONCATENATED MODULE: ./packages/form-item/index.js


/* istanbul ignore next */
form_item.install = function (Vue) {
  Vue.component(form_item.name, form_item);
};

/* harmony default export */ var packages_form_item = (form_item);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/table/src/table.vue?vue&type=template&id=493fe34e&
var tablevue_type_template_id_493fe34e_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "el-table",
      class: [
        {
          "el-table--fit": _vm.fit,
          "el-table--striped": _vm.stripe,
          "el-table--border": _vm.border || _vm.isGroup,
          "el-table--hidden": _vm.isHidden,
          "el-table--group": _vm.isGroup,
          "el-table--fluid-height": _vm.maxHeight,
          "el-table--scrollable-x": _vm.layout.scrollX,
          "el-table--scrollable-y": _vm.layout.scrollY,
          "el-table--enable-row-hover": !_vm.store.states.isComplex,
          "el-table--enable-row-transition":
            (_vm.store.states.data || []).length !== 0 &&
            (_vm.store.states.data || []).length < 100
        },
        _vm.tableSize ? "el-table--" + _vm.tableSize : ""
      ],
      on: {
        mouseleave: function($event) {
          return _vm.handleMouseLeave($event)
        }
      }
    },
    [
      _c(
        "div",
        { ref: "hiddenColumns", staticClass: "hidden-columns" },
        [_vm._t("default")],
        2
      ),
      _vm.showHeader
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "mousewheel",
                  rawName: "v-mousewheel",
                  value: _vm.handleHeaderFooterMousewheel,
                  expression: "handleHeaderFooterMousewheel"
                }
              ],
              ref: "headerWrapper",
              staticClass: "el-table__header-wrapper"
            },
            [
              _c("table-header", {
                ref: "tableHeader",
                style: {
                  width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + "px" : ""
                },
                attrs: {
                  store: _vm.store,
                  border: _vm.border,
                  "default-sort": _vm.defaultSort
                }
              })
            ],
            1
          )
        : _vm._e(),
      _c(
        "div",
        {
          ref: "bodyWrapper",
          staticClass: "el-table__body-wrapper",
          class: [
            _vm.layout.scrollX
              ? "is-scrolling-" + _vm.scrollPosition
              : "is-scrolling-none"
          ],
          style: [_vm.bodyHeight]
        },
        [
          _c("table-body", {
            style: {
              width: _vm.bodyWidth
            },
            attrs: {
              context: _vm.context,
              store: _vm.store,
              stripe: _vm.stripe,
              "row-class-name": _vm.rowClassName,
              "row-style": _vm.rowStyle,
              highlight: _vm.highlightCurrentRow
            }
          }),
          !_vm.data || _vm.data.length === 0
            ? _c(
                "div",
                {
                  ref: "emptyBlock",
                  staticClass: "el-table__empty-block",
                  style: _vm.emptyBlockStyle
                },
                [
                  _c(
                    "span",
                    { staticClass: "el-table__empty-text" },
                    [
                      _vm._t("empty", [
                        _vm._v(
                          _vm._s(_vm.emptyText || _vm.t("el.table.emptyText"))
                        )
                      ])
                    ],
                    2
                  )
                ]
              )
            : _vm._e(),
          _vm.$slots.append
            ? _c(
                "div",
                {
                  ref: "appendWrapper",
                  staticClass: "el-table__append-wrapper"
                },
                [_vm._t("append")],
                2
              )
            : _vm._e()
        ],
        1
      ),
      _vm.showSummary
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.data && _vm.data.length > 0,
                  expression: "data && data.length > 0"
                },
                {
                  name: "mousewheel",
                  rawName: "v-mousewheel",
                  value: _vm.handleHeaderFooterMousewheel,
                  expression: "handleHeaderFooterMousewheel"
                }
              ],
              ref: "footerWrapper",
              staticClass: "el-table__footer-wrapper"
            },
            [
              _c("table-footer", {
                style: {
                  width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + "px" : ""
                },
                attrs: {
                  store: _vm.store,
                  border: _vm.border,
                  "sum-text": _vm.sumText || _vm.t("el.table.sumText"),
                  "summary-method": _vm.summaryMethod,
                  "default-sort": _vm.defaultSort
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm.fixedColumns.length > 0
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "mousewheel",
                  rawName: "v-mousewheel",
                  value: _vm.handleFixedMousewheel,
                  expression: "handleFixedMousewheel"
                }
              ],
              ref: "fixedWrapper",
              staticClass: "el-table__fixed",
              style: [
                {
                  width: _vm.layout.fixedWidth
                    ? _vm.layout.fixedWidth + "px"
                    : ""
                },
                _vm.fixedHeight
              ]
            },
            [
              _vm.showHeader
                ? _c(
                    "div",
                    {
                      ref: "fixedHeaderWrapper",
                      staticClass: "el-table__fixed-header-wrapper"
                    },
                    [
                      _c("table-header", {
                        ref: "fixedTableHeader",
                        style: {
                          width: _vm.bodyWidth
                        },
                        attrs: {
                          fixed: "left",
                          border: _vm.border,
                          store: _vm.store
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _c(
                "div",
                {
                  ref: "fixedBodyWrapper",
                  staticClass: "el-table__fixed-body-wrapper",
                  style: [
                    {
                      top: _vm.layout.headerHeight + "px"
                    },
                    _vm.fixedBodyHeight
                  ]
                },
                [
                  _c("table-body", {
                    style: {
                      width: _vm.bodyWidth
                    },
                    attrs: {
                      fixed: "left",
                      store: _vm.store,
                      stripe: _vm.stripe,
                      highlight: _vm.highlightCurrentRow,
                      "row-class-name": _vm.rowClassName,
                      "row-style": _vm.rowStyle
                    }
                  }),
                  _vm.$slots.append
                    ? _c("div", {
                        staticClass: "el-table__append-gutter",
                        style: { height: _vm.layout.appendHeight + "px" }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm.showSummary
                ? _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.data && _vm.data.length > 0,
                          expression: "data && data.length > 0"
                        }
                      ],
                      ref: "fixedFooterWrapper",
                      staticClass: "el-table__fixed-footer-wrapper"
                    },
                    [
                      _c("table-footer", {
                        style: {
                          width: _vm.bodyWidth
                        },
                        attrs: {
                          fixed: "left",
                          border: _vm.border,
                          "sum-text": _vm.sumText || _vm.t("el.table.sumText"),
                          "summary-method": _vm.summaryMethod,
                          store: _vm.store
                        }
                      })
                    ],
                    1
                  )
                : _vm._e()
            ]
          )
        : _vm._e(),
      _vm.rightFixedColumns.length > 0
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "mousewheel",
                  rawName: "v-mousewheel",
                  value: _vm.handleFixedMousewheel,
                  expression: "handleFixedMousewheel"
                }
              ],
              ref: "rightFixedWrapper",
              staticClass: "el-table__fixed-right",
              style: [
                {
                  width: _vm.layout.rightFixedWidth
                    ? _vm.layout.rightFixedWidth + "px"
                    : "",
                  right: _vm.layout.scrollY
                    ? (_vm.border
                        ? _vm.layout.gutterWidth
                        : _vm.layout.gutterWidth || 0) + "px"
                    : ""
                },
                _vm.fixedHeight
              ]
            },
            [
              _vm.showHeader
                ? _c(
                    "div",
                    {
                      ref: "rightFixedHeaderWrapper",
                      staticClass: "el-table__fixed-header-wrapper"
                    },
                    [
                      _c("table-header", {
                        ref: "rightFixedTableHeader",
                        style: {
                          width: _vm.bodyWidth
                        },
                        attrs: {
                          fixed: "right",
                          border: _vm.border,
                          store: _vm.store
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _c(
                "div",
                {
                  ref: "rightFixedBodyWrapper",
                  staticClass: "el-table__fixed-body-wrapper",
                  style: [
                    {
                      top: _vm.layout.headerHeight + "px"
                    },
                    _vm.fixedBodyHeight
                  ]
                },
                [
                  _c("table-body", {
                    style: {
                      width: _vm.bodyWidth
                    },
                    attrs: {
                      fixed: "right",
                      store: _vm.store,
                      stripe: _vm.stripe,
                      "row-class-name": _vm.rowClassName,
                      "row-style": _vm.rowStyle,
                      highlight: _vm.highlightCurrentRow
                    }
                  }),
                  _vm.$slots.append
                    ? _c("div", {
                        staticClass: "el-table__append-gutter",
                        style: { height: _vm.layout.appendHeight + "px" }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm.showSummary
                ? _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.data && _vm.data.length > 0,
                          expression: "data && data.length > 0"
                        }
                      ],
                      ref: "rightFixedFooterWrapper",
                      staticClass: "el-table__fixed-footer-wrapper"
                    },
                    [
                      _c("table-footer", {
                        style: {
                          width: _vm.bodyWidth
                        },
                        attrs: {
                          fixed: "right",
                          border: _vm.border,
                          "sum-text": _vm.sumText || _vm.t("el.table.sumText"),
                          "summary-method": _vm.summaryMethod,
                          store: _vm.store
                        }
                      })
                    ],
                    1
                  )
                : _vm._e()
            ]
          )
        : _vm._e(),
      _vm.rightFixedColumns.length > 0
        ? _c("div", {
            ref: "rightFixedPatch",
            staticClass: "el-table__fixed-right-patch",
            style: {
              width: _vm.layout.scrollY ? _vm.layout.gutterWidth + "px" : "0",
              height: _vm.layout.headerHeight + "px"
            }
          })
        : _vm._e(),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.resizeProxyVisible,
            expression: "resizeProxyVisible"
          }
        ],
        ref: "resizeProxy",
        staticClass: "el-table__column-resize-proxy"
      })
    ]
  )
}
var tablevue_type_template_id_493fe34e_staticRenderFns = []
tablevue_type_template_id_493fe34e_render._withStripped = true


// CONCATENATED MODULE: ./packages/table/src/table.vue?vue&type=template&id=493fe34e&

// EXTERNAL MODULE: external "element-mini-ui/lib/checkbox"
var checkbox_ = __webpack_require__(14);
var checkbox_default = /*#__PURE__*/__webpack_require__.n(checkbox_);

// EXTERNAL MODULE: external "throttle-debounce"
var external_throttle_debounce_ = __webpack_require__(26);

// EXTERNAL MODULE: external "normalize-wheel"
var external_normalize_wheel_ = __webpack_require__(31);
var external_normalize_wheel_default = /*#__PURE__*/__webpack_require__.n(external_normalize_wheel_);

// CONCATENATED MODULE: ./src/directives/mousewheel.js


var isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

var mousewheel_mousewheel = function mousewheel(element, callback) {
  if (element && element.addEventListener) {
    element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', function (event) {
      var normalized = external_normalize_wheel_default()(event);
      callback && callback.apply(this, [event, normalized]);
    });
  }
};

/* harmony default export */ var directives_mousewheel = ({
  bind: function bind(el, binding) {
    mousewheel_mousewheel(el, binding.value);
  }
});
// CONCATENATED MODULE: ./packages/table/src/util.js
var util_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var getCell = function getCell(event) {
  var cell = event.target;

  while (cell && cell.tagName.toUpperCase() !== 'HTML') {
    if (cell.tagName.toUpperCase() === 'TD') {
      return cell;
    }
    cell = cell.parentNode;
  }

  return null;
};

var util_isObject = function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : util_typeof(obj)) === 'object';
};

var util_orderBy = function orderBy(array, sortKey, reverse, sortMethod, sortBy) {
  if (!sortKey && !sortMethod && (!sortBy || Array.isArray(sortBy) && !sortBy.length)) {
    return array;
  }
  if (typeof reverse === 'string') {
    reverse = reverse === 'descending' ? -1 : 1;
  } else {
    reverse = reverse && reverse < 0 ? -1 : 1;
  }
  var getKey = sortMethod ? null : function (value, index) {
    if (sortBy) {
      if (!Array.isArray(sortBy)) {
        sortBy = [sortBy];
      }
      return sortBy.map(function (by) {
        if (typeof by === 'string') {
          return Object(util_["getValueByPath"])(value, by);
        } else {
          return by(value, index, array);
        }
      });
    }
    if (sortKey !== '$key') {
      if (util_isObject(value) && '$value' in value) value = value.$value;
    }
    return [util_isObject(value) ? Object(util_["getValueByPath"])(value, sortKey) : value];
  };
  var compare = function compare(a, b) {
    if (sortMethod) {
      return sortMethod(a.value, b.value);
    }
    for (var i = 0, len = a.key.length; i < len; i++) {
      if (a.key[i] < b.key[i]) {
        return -1;
      }
      if (a.key[i] > b.key[i]) {
        return 1;
      }
    }
    return 0;
  };
  return array.map(function (value, index) {
    return {
      value: value,
      index: index,
      key: getKey ? getKey(value, index) : null
    };
  }).sort(function (a, b) {
    var order = compare(a, b);
    if (!order) {
      // make stable https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
      order = a.index - b.index;
    }
    return order * reverse;
  }).map(function (item) {
    return item.value;
  });
};

var getColumnById = function getColumnById(table, columnId) {
  var column = null;
  table.columns.forEach(function (item) {
    if (item.id === columnId) {
      column = item;
    }
  });
  return column;
};

var getColumnByKey = function getColumnByKey(table, columnKey) {
  var column = null;
  for (var i = 0; i < table.columns.length; i++) {
    var item = table.columns[i];
    if (item.columnKey === columnKey) {
      column = item;
      break;
    }
  }
  return column;
};

var getColumnByCell = function getColumnByCell(table, cell) {
  var matches = (cell.className || '').match(/el-table_[^\s]+/gm);
  if (matches) {
    return getColumnById(table, matches[0]);
  }
  return null;
};

var getRowIdentity = function getRowIdentity(row, rowKey) {
  if (!row) throw new Error('row is required when get row identity');
  if (typeof rowKey === 'string') {
    if (rowKey.indexOf('.') < 0) {
      return row[rowKey];
    }
    var key = rowKey.split('.');
    var current = row;
    for (var i = 0; i < key.length; i++) {
      current = current[key[i]];
    }
    return current;
  } else if (typeof rowKey === 'function') {
    return rowKey.call(null, row);
  }
};

var getKeysMap = function getKeysMap(array, rowKey) {
  var arrayMap = {};
  (array || []).forEach(function (row, index) {
    arrayMap[getRowIdentity(row, rowKey)] = { row: row, index: index };
  });
  return arrayMap;
};

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function mergeOptions(defaults, config) {
  var options = {};
  var key = void 0;
  for (key in defaults) {
    options[key] = defaults[key];
  }
  for (key in config) {
    if (hasOwn(config, key)) {
      var value = config[key];
      if (typeof value !== 'undefined') {
        options[key] = value;
      }
    }
  }
  return options;
}

function parseWidth(width) {
  if (width !== undefined) {
    width = parseInt(width, 10);
    if (isNaN(width)) {
      width = null;
    }
  }
  return width;
}

function parseMinWidth(minWidth) {
  if (typeof minWidth !== 'undefined') {
    minWidth = parseWidth(minWidth);
    if (isNaN(minWidth)) {
      minWidth = 80;
    }
  }
  return minWidth;
};

function parseHeight(height) {
  if (typeof height === 'number') {
    return height;
  }
  if (typeof height === 'string') {
    if (/^\d+(?:px)?$/.test(height)) {
      return parseInt(height, 10);
    } else {
      return height;
    }
  }
  return null;
}

// https://github.com/reduxjs/redux/blob/master/src/compose.js
function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

function toggleRowStatus(statusArr, row, newVal) {
  var changed = false;
  var index = statusArr.indexOf(row);
  var included = index !== -1;

  var addRow = function addRow() {
    statusArr.push(row);
    changed = true;
  };
  var removeRow = function removeRow() {
    statusArr.splice(index, 1);
    changed = true;
  };

  if (typeof newVal === 'boolean') {
    if (newVal && !included) {
      addRow();
    } else if (!newVal && included) {
      removeRow();
    }
  } else {
    if (included) {
      removeRow();
    } else {
      addRow();
    }
  }
  return changed;
}

function walkTreeNode(root, cb) {
  var childrenKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  var lazyKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'hasChildren';

  var isNil = function isNil(array) {
    return !(Array.isArray(array) && array.length);
  };

  function _walker(parent, children, level) {
    cb(parent, children, level);
    children.forEach(function (item) {
      if (item[lazyKey]) {
        cb(item, null, level + 1);
        return;
      }
      var children = item[childrenKey];
      if (!isNil(children)) {
        _walker(item, children, level + 1);
      }
    });
  }

  root.forEach(function (item) {
    if (item[lazyKey]) {
      cb(item, null, 0);
      return;
    }
    var children = item[childrenKey];
    if (!isNil(children)) {
      _walker(item, children, 0);
    }
  });
}
// CONCATENATED MODULE: ./packages/table/src/store/expand.js


/* harmony default export */ var expand = ({
  data: function data() {
    return {
      states: {
        defaultExpandAll: false,
        expandRows: []
      }
    };
  },


  methods: {
    updateExpandRows: function updateExpandRows() {
      var _states = this.states,
          _states$data = _states.data,
          data = _states$data === undefined ? [] : _states$data,
          rowKey = _states.rowKey,
          defaultExpandAll = _states.defaultExpandAll,
          expandRows = _states.expandRows;

      if (defaultExpandAll) {
        this.states.expandRows = data.slice();
      } else if (rowKey) {
        // TODO：这里的代码可以优化
        var expandRowsMap = getKeysMap(expandRows, rowKey);
        this.states.expandRows = data.reduce(function (prev, row) {
          var rowId = getRowIdentity(row, rowKey);
          var rowInfo = expandRowsMap[rowId];
          if (rowInfo) {
            prev.push(row);
          }
          return prev;
        }, []);
      } else {
        this.states.expandRows = [];
      }
    },
    toggleRowExpansion: function toggleRowExpansion(row, expanded) {
      var changed = toggleRowStatus(this.states.expandRows, row, expanded);
      if (changed) {
        this.table.$emit('expand-change', row, this.states.expandRows.slice());
        this.scheduleLayout();
      }
    },
    setExpandRowKeys: function setExpandRowKeys(rowKeys) {
      this.assertRowKey();
      // TODO：这里的代码可以优化
      var _states2 = this.states,
          data = _states2.data,
          rowKey = _states2.rowKey;

      var keysMap = getKeysMap(data, rowKey);
      this.states.expandRows = rowKeys.reduce(function (prev, cur) {
        var info = keysMap[cur];
        if (info) {
          prev.push(info.row);
        }
        return prev;
      }, []);
    },
    isRowExpanded: function isRowExpanded(row) {
      var _states3 = this.states,
          _states3$expandRows = _states3.expandRows,
          expandRows = _states3$expandRows === undefined ? [] : _states3$expandRows,
          rowKey = _states3.rowKey;

      if (rowKey) {
        var expandMap = getKeysMap(expandRows, rowKey);
        return !!expandMap[getRowIdentity(row, rowKey)];
      }
      return expandRows.indexOf(row) !== -1;
    }
  }
});
// CONCATENATED MODULE: ./packages/table/src/store/current.js



/* harmony default export */ var current = ({
  data: function data() {
    return {
      states: {
        // 不可响应的，设置 currentRowKey 时，data 不一定存在，也许无法算出正确的 currentRow
        // 把该值缓存一下，当用户点击修改 currentRow 时，把该值重置为 null
        _currentRowKey: null,
        currentRow: null
      }
    };
  },


  methods: {
    setCurrentRowKey: function setCurrentRowKey(key) {
      this.assertRowKey();
      this.states._currentRowKey = key;
      this.setCurrentRowByKey(key);
    },
    restoreCurrentRowKey: function restoreCurrentRowKey() {
      this.states._currentRowKey = null;
    },
    setCurrentRowByKey: function setCurrentRowByKey(key) {
      var states = this.states;
      var _states$data = states.data,
          data = _states$data === undefined ? [] : _states$data,
          rowKey = states.rowKey;

      var currentRow = null;
      if (rowKey) {
        currentRow = Object(util_["arrayFind"])(data, function (item) {
          return getRowIdentity(item, rowKey) === key;
        });
      }
      states.currentRow = currentRow;
    },
    updateCurrentRow: function updateCurrentRow(currentRow) {
      var states = this.states,
          table = this.table;

      var oldCurrentRow = states.currentRow;
      if (currentRow && currentRow !== oldCurrentRow) {
        states.currentRow = currentRow;
        table.$emit('current-change', currentRow, oldCurrentRow);
        return;
      }
      if (!currentRow && oldCurrentRow) {
        states.currentRow = null;
        table.$emit('current-change', null, oldCurrentRow);
      }
    },
    updateCurrentRowData: function updateCurrentRowData() {
      var states = this.states,
          table = this.table;
      var rowKey = states.rowKey,
          _currentRowKey = states._currentRowKey;
      // data 为 null 时，解构时的默认值会被忽略

      var data = states.data || [];
      var oldCurrentRow = states.currentRow;

      // 当 currentRow 不在 data 中时尝试更新数据
      if (data.indexOf(oldCurrentRow) === -1 && oldCurrentRow) {
        if (rowKey) {
          var currentRowKey = getRowIdentity(oldCurrentRow, rowKey);
          this.setCurrentRowByKey(currentRowKey);
        } else {
          states.currentRow = null;
        }
        if (states.currentRow === null) {
          table.$emit('current-change', null, oldCurrentRow);
        }
      } else if (_currentRowKey) {
        // 把初始时下设置的 rowKey 转化成 rowData
        this.setCurrentRowByKey(_currentRowKey);
        this.restoreCurrentRowKey();
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/table/src/store/tree.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/* harmony default export */ var tree = ({
  data: function data() {
    return {
      states: {
        // defaultExpandAll 存在于 expand.js 中，这里不重复添加
        // 在展开行中，expandRowKeys 会被转化成 expandRows，expandRowKeys 这个属性只是记录了 TreeTable 行的展开
        // TODO: 拆分为独立的 TreeTable，统一用法
        expandRowKeys: [],
        treeData: {},
        indent: 16,
        lazy: false,
        lazyTreeNodeMap: {},
        lazyColumnIdentifier: 'hasChildren',
        childrenColumnName: 'children'
      }
    };
  },


  computed: {
    // 嵌入型的数据，watch 无法是检测到变化 https://github.com/ElemeFE/element/issues/14998
    // TODO: 使用 computed 解决该问题，是否会造成性能问题？
    // @return { id: { level, children } }
    normalizedData: function normalizedData() {
      if (!this.states.rowKey) return {};
      var data = this.states.data || [];
      return this.normalize(data);
    },

    // @return { id: { children } }
    // 针对懒加载的情形，不处理嵌套数据
    normalizedLazyNode: function normalizedLazyNode() {
      var _states = this.states,
          rowKey = _states.rowKey,
          lazyTreeNodeMap = _states.lazyTreeNodeMap,
          lazyColumnIdentifier = _states.lazyColumnIdentifier;

      var keys = Object.keys(lazyTreeNodeMap);
      var res = {};
      if (!keys.length) return res;
      keys.forEach(function (key) {
        if (lazyTreeNodeMap[key].length) {
          var item = { children: [] };
          lazyTreeNodeMap[key].forEach(function (row) {
            var currentRowKey = getRowIdentity(row, rowKey);
            item.children.push(currentRowKey);
            if (row[lazyColumnIdentifier] && !res[currentRowKey]) {
              res[currentRowKey] = { children: [] };
            }
          });
          res[key] = item;
        }
      });
      return res;
    }
  },

  watch: {
    normalizedData: 'updateTreeData',
    normalizedLazyNode: 'updateTreeData'
  },

  methods: {
    normalize: function normalize(data) {
      var _states2 = this.states,
          childrenColumnName = _states2.childrenColumnName,
          lazyColumnIdentifier = _states2.lazyColumnIdentifier,
          rowKey = _states2.rowKey,
          lazy = _states2.lazy;

      var res = {};
      walkTreeNode(data, function (parent, children, level) {
        var parentId = getRowIdentity(parent, rowKey);
        if (Array.isArray(children)) {
          res[parentId] = {
            children: children.map(function (row) {
              return getRowIdentity(row, rowKey);
            }),
            level: level
          };
        } else if (lazy) {
          // 当 children 不存在且 lazy 为 true，该节点即为懒加载的节点
          res[parentId] = {
            children: [],
            lazy: true,
            level: level
          };
        }
      }, childrenColumnName, lazyColumnIdentifier);
      return res;
    },
    updateTreeData: function updateTreeData() {
      var nested = this.normalizedData;
      var normalizedLazyNode = this.normalizedLazyNode;
      var keys = Object.keys(nested);
      var newTreeData = {};
      if (keys.length) {
        var _states3 = this.states,
            oldTreeData = _states3.treeData,
            defaultExpandAll = _states3.defaultExpandAll,
            expandRowKeys = _states3.expandRowKeys,
            lazy = _states3.lazy;

        var rootLazyRowKeys = [];
        var getExpanded = function getExpanded(oldValue, key) {
          var included = defaultExpandAll || expandRowKeys && expandRowKeys.indexOf(key) !== -1;
          return !!(oldValue && oldValue.expanded || included);
        };
        // 合并 expanded 与 display，确保数据刷新后，状态不变
        keys.forEach(function (key) {
          var oldValue = oldTreeData[key];
          var newValue = _extends({}, nested[key]);
          newValue.expanded = getExpanded(oldValue, key);
          if (newValue.lazy) {
            var _ref = oldValue || {},
                _ref$loaded = _ref.loaded,
                loaded = _ref$loaded === undefined ? false : _ref$loaded,
                _ref$loading = _ref.loading,
                loading = _ref$loading === undefined ? false : _ref$loading;

            newValue.loaded = !!loaded;
            newValue.loading = !!loading;
            rootLazyRowKeys.push(key);
          }
          newTreeData[key] = newValue;
        });
        // 根据懒加载数据更新 treeData
        var lazyKeys = Object.keys(normalizedLazyNode);
        if (lazy && lazyKeys.length && rootLazyRowKeys.length) {
          lazyKeys.forEach(function (key) {
            var oldValue = oldTreeData[key];
            var lazyNodeChildren = normalizedLazyNode[key].children;
            if (rootLazyRowKeys.indexOf(key) !== -1) {
              // 懒加载的 root 节点，更新一下原有的数据，原来的 children 一定是空数组
              if (newTreeData[key].children.length !== 0) {
                throw new Error('[ElTable]children must be an empty array.');
              }
              newTreeData[key].children = lazyNodeChildren;
            } else {
              var _ref2 = oldValue || {},
                  _ref2$loaded = _ref2.loaded,
                  loaded = _ref2$loaded === undefined ? false : _ref2$loaded,
                  _ref2$loading = _ref2.loading,
                  loading = _ref2$loading === undefined ? false : _ref2$loading;

              newTreeData[key] = {
                lazy: true,
                loaded: !!loaded,
                loading: !!loading,
                expanded: getExpanded(oldValue, key),
                children: lazyNodeChildren,
                level: ''
              };
            }
          });
        }
      }
      this.states.treeData = newTreeData;
      this.updateTableScrollY();
    },
    updateTreeExpandKeys: function updateTreeExpandKeys(value) {
      this.states.expandRowKeys = value;
      this.updateTreeData();
    },
    toggleTreeExpansion: function toggleTreeExpansion(row, expanded) {
      this.assertRowKey();

      var _states4 = this.states,
          rowKey = _states4.rowKey,
          treeData = _states4.treeData;

      var id = getRowIdentity(row, rowKey);
      var data = id && treeData[id];
      if (id && data && 'expanded' in data) {
        var oldExpanded = data.expanded;
        expanded = typeof expanded === 'undefined' ? !data.expanded : expanded;
        treeData[id].expanded = expanded;
        if (oldExpanded !== expanded) {
          this.table.$emit('expand-change', row, expanded);
        }
        this.updateTableScrollY();
      }
    },
    loadOrToggle: function loadOrToggle(row) {
      this.assertRowKey();
      var _states5 = this.states,
          lazy = _states5.lazy,
          treeData = _states5.treeData,
          rowKey = _states5.rowKey;

      var id = getRowIdentity(row, rowKey);
      var data = treeData[id];
      if (lazy && data && 'loaded' in data && !data.loaded) {
        this.loadData(row, id, data);
      } else {
        this.toggleTreeExpansion(row);
      }
    },
    loadData: function loadData(row, key, treeNode) {
      var _this = this;

      var load = this.table.load;
      var _states6 = this.states,
          lazyTreeNodeMap = _states6.lazyTreeNodeMap,
          treeData = _states6.treeData;

      if (load && !treeData[key].loaded) {
        treeData[key].loading = true;
        load(row, treeNode, function (data) {
          if (!Array.isArray(data)) {
            throw new Error('[ElTable] data must be an array');
          }
          treeData[key].loading = false;
          treeData[key].loaded = true;
          treeData[key].expanded = true;
          if (data.length) {
            _this.$set(lazyTreeNodeMap, key, data);
          }
          _this.table.$emit('expand-change', row, true);
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/table/src/store/watcher.js







var watcher_sortData = function sortData(data, states) {
  var sortingColumn = states.sortingColumn;
  if (!sortingColumn || typeof sortingColumn.sortable === 'string') {
    return data;
  }
  return util_orderBy(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy);
};

var doFlattenColumns = function doFlattenColumns(columns) {
  var result = [];
  columns.forEach(function (column) {
    if (column.children) {
      result.push.apply(result, doFlattenColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};

/* harmony default export */ var watcher = (external_vue_default.a.extend({
  data: function data() {
    return {
      states: {
        // 3.0 版本后要求必须设置该属性
        rowKey: null,

        // 渲染的数据来源，是对 table 中的 data 过滤排序后的结果
        data: [],

        // 是否包含固定列
        isComplex: false,

        // 列
        _columns: [], // 不可响应的
        originColumns: [],
        columns: [],
        fixedColumns: [],
        rightFixedColumns: [],
        leafColumns: [],
        fixedLeafColumns: [],
        rightFixedLeafColumns: [],
        leafColumnsLength: 0,
        fixedLeafColumnsLength: 0,
        rightFixedLeafColumnsLength: 0,

        // 选择
        isAllSelected: false,
        selection: [],
        reserveSelection: false,
        selectOnIndeterminate: false,
        selectable: null,

        // 过滤
        filters: {}, // 不可响应的
        filteredData: null,

        // 排序
        sortingColumn: null,
        sortProp: null,
        sortOrder: null,

        hoverRow: null
      }
    };
  },


  mixins: [expand, current, tree],

  methods: {
    // 检查 rowKey 是否存在
    assertRowKey: function assertRowKey() {
      var rowKey = this.states.rowKey;
      if (!rowKey) throw new Error('[ElTable] prop row-key is required');
    },


    // 更新列
    updateColumns: function updateColumns() {
      var states = this.states;
      var _columns = states._columns || [];
      states.fixedColumns = _columns.filter(function (column) {
        return column.fixed === true || column.fixed === 'left';
      });
      states.rightFixedColumns = _columns.filter(function (column) {
        return column.fixed === 'right';
      });

      if (states.fixedColumns.length > 0 && _columns[0] && _columns[0].type === 'selection' && !_columns[0].fixed) {
        _columns[0].fixed = true;
        states.fixedColumns.unshift(_columns[0]);
      }

      var notFixedColumns = _columns.filter(function (column) {
        return !column.fixed;
      });
      states.originColumns = [].concat(states.fixedColumns).concat(notFixedColumns).concat(states.rightFixedColumns);

      var leafColumns = doFlattenColumns(notFixedColumns);
      var fixedLeafColumns = doFlattenColumns(states.fixedColumns);
      var rightFixedLeafColumns = doFlattenColumns(states.rightFixedColumns);

      states.leafColumnsLength = leafColumns.length;
      states.fixedLeafColumnsLength = fixedLeafColumns.length;
      states.rightFixedLeafColumnsLength = rightFixedLeafColumns.length;

      states.columns = [].concat(fixedLeafColumns).concat(leafColumns).concat(rightFixedLeafColumns);
      states.isComplex = states.fixedColumns.length > 0 || states.rightFixedColumns.length > 0;
    },


    // 更新 DOM
    scheduleLayout: function scheduleLayout(needUpdateColumns) {
      if (needUpdateColumns) {
        this.updateColumns();
      }
      this.table.debouncedUpdateLayout();
    },


    // 选择
    isSelected: function isSelected(row) {
      var _states$selection = this.states.selection,
          selection = _states$selection === undefined ? [] : _states$selection;

      return selection.indexOf(row) > -1;
    },
    clearSelection: function clearSelection() {
      var states = this.states;
      states.isAllSelected = false;
      var oldSelection = states.selection;
      if (oldSelection.length) {
        states.selection = [];
        this.table.$emit('selection-change', []);
      }
    },
    cleanSelection: function cleanSelection() {
      var states = this.states;
      var data = states.data,
          rowKey = states.rowKey,
          selection = states.selection;

      var deleted = void 0;
      if (rowKey) {
        deleted = [];
        var selectedMap = getKeysMap(selection, rowKey);
        var dataMap = getKeysMap(data, rowKey);
        for (var key in selectedMap) {
          if (selectedMap.hasOwnProperty(key) && !dataMap[key]) {
            deleted.push(selectedMap[key].row);
          }
        }
      } else {
        deleted = selection.filter(function (item) {
          return data.indexOf(item) === -1;
        });
      }
      if (deleted.length) {
        var newSelection = selection.filter(function (item) {
          return deleted.indexOf(item) === -1;
        });
        states.selection = newSelection;
        this.table.$emit('selection-change', newSelection.slice());
      }
    },
    toggleRowSelection: function toggleRowSelection(row, selected) {
      var emitChange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var changed = toggleRowStatus(this.states.selection, row, selected);
      if (changed) {
        var newSelection = (this.states.selection || []).slice();
        // 调用 API 修改选中值，不触发 select 事件
        if (emitChange) {
          this.table.$emit('select', newSelection, row);
        }
        this.table.$emit('selection-change', newSelection);
      }
    },
    _toggleAllSelection: function _toggleAllSelection() {
      var states = this.states;
      var _states$data = states.data,
          data = _states$data === undefined ? [] : _states$data,
          selection = states.selection;
      // when only some rows are selected (but not all), select or deselect all of them
      // depending on the value of selectOnIndeterminate

      var value = states.selectOnIndeterminate ? !states.isAllSelected : !(states.isAllSelected || selection.length);
      states.isAllSelected = value;

      var selectionChanged = false;
      data.forEach(function (row, index) {
        if (states.selectable) {
          if (states.selectable.call(null, row, index) && toggleRowStatus(selection, row, value)) {
            selectionChanged = true;
          }
        } else {
          if (toggleRowStatus(selection, row, value)) {
            selectionChanged = true;
          }
        }
      });

      if (selectionChanged) {
        this.table.$emit('selection-change', selection ? selection.slice() : []);
      }
      this.table.$emit('select-all', selection);
    },
    updateSelectionByRowKey: function updateSelectionByRowKey() {
      var states = this.states;
      var selection = states.selection,
          rowKey = states.rowKey,
          data = states.data;

      var selectedMap = getKeysMap(selection, rowKey);
      data.forEach(function (row) {
        var rowId = getRowIdentity(row, rowKey);
        var rowInfo = selectedMap[rowId];
        if (rowInfo) {
          selection[rowInfo.index] = row;
        }
      });
    },
    updateAllSelected: function updateAllSelected() {
      var states = this.states;
      var selection = states.selection,
          rowKey = states.rowKey,
          selectable = states.selectable;
      // data 为 null 时，解构时的默认值会被忽略

      var data = states.data || [];
      if (data.length === 0) {
        states.isAllSelected = false;
        return;
      }

      var selectedMap = void 0;
      if (rowKey) {
        selectedMap = getKeysMap(selection, rowKey);
      }
      var isSelected = function isSelected(row) {
        if (selectedMap) {
          return !!selectedMap[getRowIdentity(row, rowKey)];
        } else {
          return selection.indexOf(row) !== -1;
        }
      };
      var isAllSelected = true;
      var selectedCount = 0;
      for (var i = 0, j = data.length; i < j; i++) {
        var item = data[i];
        var isRowSelectable = selectable && selectable.call(null, item, i);
        if (!isSelected(item)) {
          if (!selectable || isRowSelectable) {
            isAllSelected = false;
            break;
          }
        } else {
          selectedCount++;
        }
      }

      if (selectedCount === 0) isAllSelected = false;
      states.isAllSelected = isAllSelected;
    },


    // 过滤与排序
    updateFilters: function updateFilters(columns, values) {
      if (!Array.isArray(columns)) {
        columns = [columns];
      }
      var states = this.states;
      var filters = {};
      columns.forEach(function (col) {
        states.filters[col.id] = values;
        filters[col.columnKey || col.id] = values;
      });

      return filters;
    },
    updateSort: function updateSort(column, prop, order) {
      if (this.states.sortingColumn && this.states.sortingColumn !== column) {
        this.states.sortingColumn.order = null;
      }
      this.states.sortingColumn = column;
      this.states.sortProp = prop;
      this.states.sortOrder = order;
    },
    execFilter: function execFilter() {
      var _this = this;

      var states = this.states;
      var _data = states._data,
          filters = states.filters;

      var data = _data;

      Object.keys(filters).forEach(function (columnId) {
        var values = states.filters[columnId];
        if (!values || values.length === 0) return;
        var column = getColumnById(_this.states, columnId);
        if (column && column.filterMethod) {
          data = data.filter(function (row) {
            return values.some(function (value) {
              return column.filterMethod.call(null, value, row, column);
            });
          });
        }
      });

      states.filteredData = data;
    },
    execSort: function execSort() {
      var states = this.states;
      states.data = watcher_sortData(states.filteredData, states);
    },


    // 根据 filters 与 sort 去过滤 data
    execQuery: function execQuery(ignore) {
      if (!(ignore && ignore.filter)) {
        this.execFilter();
      }
      this.execSort();
    },
    clearFilter: function clearFilter(columnKeys) {
      var states = this.states;
      var _table$$refs = this.table.$refs,
          tableHeader = _table$$refs.tableHeader,
          fixedTableHeader = _table$$refs.fixedTableHeader,
          rightFixedTableHeader = _table$$refs.rightFixedTableHeader;


      var panels = {};
      if (tableHeader) panels = merge_default()(panels, tableHeader.filterPanels);
      if (fixedTableHeader) panels = merge_default()(panels, fixedTableHeader.filterPanels);
      if (rightFixedTableHeader) panels = merge_default()(panels, rightFixedTableHeader.filterPanels);

      var keys = Object.keys(panels);
      if (!keys.length) return;

      if (typeof columnKeys === 'string') {
        columnKeys = [columnKeys];
      }

      if (Array.isArray(columnKeys)) {
        var columns = columnKeys.map(function (key) {
          return getColumnByKey(states, key);
        });
        keys.forEach(function (key) {
          var column = columns.find(function (col) {
            return col.id === key;
          });
          if (column) {
            // TODO: 优化这里的代码
            panels[key].filteredValue = [];
          }
        });
        this.commit('filterChange', {
          column: columns,
          values: [],
          silent: true,
          multi: true
        });
      } else {
        keys.forEach(function (key) {
          // TODO: 优化这里的代码
          panels[key].filteredValue = [];
        });

        states.filters = {};
        this.commit('filterChange', {
          column: {},
          values: [],
          silent: true
        });
      }
    },
    clearSort: function clearSort() {
      var states = this.states;
      if (!states.sortingColumn) return;

      this.updateSort(null, null, null);
      this.commit('changeSortCondition', {
        silent: true
      });
    },


    // 适配层，expand-row-keys 在 Expand 与 TreeTable 中都有使用
    setExpandRowKeysAdapter: function setExpandRowKeysAdapter(val) {
      // 这里会触发额外的计算，但为了兼容性，暂时这么做
      this.setExpandRowKeys(val);
      this.updateTreeExpandKeys(val);
    },


    // 展开行与 TreeTable 都要使用
    toggleRowExpansionAdapter: function toggleRowExpansionAdapter(row, expanded) {
      var hasExpandColumn = this.states.columns.some(function (_ref) {
        var type = _ref.type;
        return type === 'expand';
      });
      if (hasExpandColumn) {
        this.toggleRowExpansion(row, expanded);
      } else {
        this.toggleTreeExpansion(row, expanded);
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/table/src/store/index.js




watcher.prototype.mutations = {
  setData: function setData(states, data) {
    var dataInstanceChanged = states._data !== data;
    states._data = data;

    this.execQuery();
    // 数据变化，更新部分数据。
    // 没有使用 computed，而是手动更新部分数据 https://github.com/vuejs/vue/issues/6660#issuecomment-331417140
    this.updateCurrentRowData();
    this.updateExpandRows();
    if (states.reserveSelection) {
      this.assertRowKey();
      this.updateSelectionByRowKey();
    } else {
      if (dataInstanceChanged) {
        this.clearSelection();
      } else {
        this.cleanSelection();
      }
    }
    this.updateAllSelected();

    this.updateTableScrollY();
  },
  insertColumn: function insertColumn(states, column, index, parent) {
    var array = states._columns;
    if (parent) {
      array = parent.children;
      if (!array) array = parent.children = [];
    }

    if (typeof index !== 'undefined') {
      array.splice(index, 0, column);
    } else {
      array.push(column);
    }

    if (column.type === 'selection') {
      states.selectable = column.selectable;
      states.reserveSelection = column.reserveSelection;
    }

    if (this.table.$ready) {
      this.updateColumns(); // hack for dynamics insert column
      this.scheduleLayout();
    }
  },
  removeColumn: function removeColumn(states, column, parent) {
    var array = states._columns;
    if (parent) {
      array = parent.children;
      if (!array) array = parent.children = [];
    }
    if (array) {
      array.splice(array.indexOf(column), 1);
    }

    if (this.table.$ready) {
      this.updateColumns(); // hack for dynamics remove column
      this.scheduleLayout();
    }
  },
  sort: function sort(states, options) {
    var prop = options.prop,
        order = options.order,
        init = options.init;

    if (prop) {
      var column = Object(util_["arrayFind"])(states.columns, function (column) {
        return column.property === prop;
      });
      if (column) {
        column.order = order;
        this.updateSort(column, prop, order);
        this.commit('changeSortCondition', { init: init });
      }
    }
  },
  changeSortCondition: function changeSortCondition(states, options) {
    // 修复 pr https://github.com/ElemeFE/element/pull/15012 导致的 bug
    var column = states.sortingColumn,
        prop = states.sortProp,
        order = states.sortOrder;

    if (order === null) {
      states.sortingColumn = null;
      states.sortProp = null;
    }
    var ingore = { filter: true };
    this.execQuery(ingore);

    if (!options || !(options.silent || options.init)) {
      this.table.$emit('sort-change', {
        column: column,
        prop: prop,
        order: order
      });
    }

    this.updateTableScrollY();
  },
  filterChange: function filterChange(states, options) {
    var column = options.column,
        values = options.values,
        silent = options.silent;

    var newFilters = this.updateFilters(column, values);

    this.execQuery();

    if (!silent) {
      this.table.$emit('filter-change', newFilters);
    }

    this.updateTableScrollY();
  },
  toggleAllSelection: function toggleAllSelection() {
    this.toggleAllSelection();
  },
  rowSelectedChanged: function rowSelectedChanged(states, row) {
    this.toggleRowSelection(row);
    this.updateAllSelected();
  },
  setHoverRow: function setHoverRow(states, row) {
    states.hoverRow = row;
  },
  setCurrentRow: function setCurrentRow(states, row) {
    this.updateCurrentRow(row);
  }
};

watcher.prototype.commit = function (name) {
  var mutations = this.mutations;
  if (mutations[name]) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    mutations[name].apply(this, [this.states].concat(args));
  } else {
    throw new Error('Action not found: ' + name);
  }
};

watcher.prototype.updateTableScrollY = function () {
  external_vue_default.a.nextTick(this.table.updateScrollY);
};

/* harmony default export */ var src_store = (watcher);
// CONCATENATED MODULE: ./packages/table/src/store/helper.js



function createStore(table) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!table) {
    throw new Error('Table is required.');
  }

  var store = new src_store();
  store.table = table;
  // fix https://github.com/ElemeFE/element/issues/14075
  // related pr https://github.com/ElemeFE/element/pull/14146
  store.toggleAllSelection = debounce_default()(10, store._toggleAllSelection);
  Object.keys(initialState).forEach(function (key) {
    store.states[key] = initialState[key];
  });
  return store;
}

function mapStates(mapper) {
  var res = {};
  Object.keys(mapper).forEach(function (key) {
    var value = mapper[key];
    var fn = void 0;
    if (typeof value === 'string') {
      fn = function fn() {
        return this.store.states[value];
      };
    } else if (typeof value === 'function') {
      fn = function fn() {
        return value.call(this, this.store.states);
      };
    } else {
      console.error('invalid value type');
    }
    if (fn) {
      res[key] = fn;
    }
  });
  return res;
};
// EXTERNAL MODULE: external "element-mini-ui/lib/utils/scrollbar-width"
var scrollbar_width_ = __webpack_require__(23);
var scrollbar_width_default = /*#__PURE__*/__webpack_require__.n(scrollbar_width_);

// CONCATENATED MODULE: ./packages/table/src/table-layout.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var table_layout_TableLayout = function () {
  function TableLayout(options) {
    _classCallCheck(this, TableLayout);

    this.observers = [];
    this.table = null;
    this.store = null;
    this.columns = null;
    this.fit = true;
    this.showHeader = true;

    this.height = null;
    this.scrollX = false;
    this.scrollY = false;
    this.bodyWidth = null;
    this.fixedWidth = null;
    this.rightFixedWidth = null;
    this.tableHeight = null;
    this.headerHeight = 44; // Table Header Height
    this.appendHeight = 0; // Append Slot Height
    this.footerHeight = 44; // Table Footer Height
    this.viewportHeight = null; // Table Height - Scroll Bar Height
    this.bodyHeight = null; // Table Height - Table Header Height
    this.fixedBodyHeight = null; // Table Height - Table Header Height - Scroll Bar Height
    this.gutterWidth = scrollbar_width_default()();

    for (var name in options) {
      if (options.hasOwnProperty(name)) {
        this[name] = options[name];
      }
    }

    if (!this.table) {
      throw new Error('table is required for Table Layout');
    }
    if (!this.store) {
      throw new Error('store is required for Table Layout');
    }
  }

  TableLayout.prototype.updateScrollY = function updateScrollY() {
    var height = this.height;
    if (height === null) return false;
    var bodyWrapper = this.table.bodyWrapper;
    if (this.table.$el && bodyWrapper) {
      var body = bodyWrapper.querySelector('.el-table__body');
      var prevScrollY = this.scrollY;
      var scrollY = body.offsetHeight > this.bodyHeight;
      this.scrollY = scrollY;
      return prevScrollY !== scrollY;
    }
    return false;
  };

  TableLayout.prototype.setHeight = function setHeight(value) {
    var _this = this;

    var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'height';

    if (external_vue_default.a.prototype.$isServer) return;
    var el = this.table.$el;
    value = parseHeight(value);
    this.height = value;

    if (!el && (value || value === 0)) return external_vue_default.a.nextTick(function () {
      return _this.setHeight(value, prop);
    });

    if (typeof value === 'number') {
      el.style[prop] = value + 'px';
      this.updateElsHeight();
    } else if (typeof value === 'string') {
      el.style[prop] = value;
      this.updateElsHeight();
    }
  };

  TableLayout.prototype.setMaxHeight = function setMaxHeight(value) {
    this.setHeight(value, 'max-height');
  };

  TableLayout.prototype.getFlattenColumns = function getFlattenColumns() {
    var flattenColumns = [];
    var columns = this.table.columns;
    columns.forEach(function (column) {
      if (column.isColumnGroup) {
        flattenColumns.push.apply(flattenColumns, column.columns);
      } else {
        flattenColumns.push(column);
      }
    });

    return flattenColumns;
  };

  TableLayout.prototype.updateElsHeight = function updateElsHeight() {
    var _this2 = this;

    if (!this.table.$ready) return external_vue_default.a.nextTick(function () {
      return _this2.updateElsHeight();
    });
    var _table$$refs = this.table.$refs,
        headerWrapper = _table$$refs.headerWrapper,
        appendWrapper = _table$$refs.appendWrapper,
        footerWrapper = _table$$refs.footerWrapper;

    this.appendHeight = appendWrapper ? appendWrapper.offsetHeight : 0;

    if (this.showHeader && !headerWrapper) return;

    // fix issue (https://github.com/ElemeFE/element/pull/16956)
    var headerTrElm = headerWrapper ? headerWrapper.querySelector('.el-table__header tr') : null;
    var noneHeader = this.headerDisplayNone(headerTrElm);

    var headerHeight = this.headerHeight = !this.showHeader ? 0 : headerWrapper.offsetHeight;
    if (this.showHeader && !noneHeader && headerWrapper.offsetWidth > 0 && (this.table.columns || []).length > 0 && headerHeight < 2) {
      return external_vue_default.a.nextTick(function () {
        return _this2.updateElsHeight();
      });
    }
    var tableHeight = this.tableHeight = this.table.$el.clientHeight;
    var footerHeight = this.footerHeight = footerWrapper ? footerWrapper.offsetHeight : 0;
    if (this.height !== null) {
      this.bodyHeight = tableHeight - headerHeight - footerHeight + (footerWrapper ? 1 : 0);
    }
    this.fixedBodyHeight = this.scrollX ? this.bodyHeight - this.gutterWidth : this.bodyHeight;

    var noData = !(this.store.states.data && this.store.states.data.length);
    this.viewportHeight = this.scrollX ? tableHeight - (noData ? 0 : this.gutterWidth) : tableHeight;

    this.updateScrollY();
    this.notifyObservers('scrollable');
  };

  TableLayout.prototype.headerDisplayNone = function headerDisplayNone(elm) {
    if (!elm) return true;
    var headerChild = elm;
    while (headerChild.tagName !== 'DIV') {
      if (getComputedStyle(headerChild).display === 'none') {
        return true;
      }
      headerChild = headerChild.parentElement;
    }
    return false;
  };

  TableLayout.prototype.updateColumnsWidth = function updateColumnsWidth() {
    if (external_vue_default.a.prototype.$isServer) return;
    var fit = this.fit;
    var bodyWidth = this.table.$el.clientWidth;
    var bodyMinWidth = 0;

    var flattenColumns = this.getFlattenColumns();
    var flexColumns = flattenColumns.filter(function (column) {
      return typeof column.width !== 'number';
    });

    flattenColumns.forEach(function (column) {
      // Clean those columns whose width changed from flex to unflex
      if (typeof column.width === 'number' && column.realWidth) column.realWidth = null;
    });

    if (flexColumns.length > 0 && fit) {
      flattenColumns.forEach(function (column) {
        bodyMinWidth += column.width || column.minWidth || 80;
      });

      var scrollYWidth = this.scrollY ? this.gutterWidth : 0;

      if (bodyMinWidth <= bodyWidth - scrollYWidth) {
        // DON'T HAVE SCROLL BAR
        this.scrollX = false;

        var totalFlexWidth = bodyWidth - scrollYWidth - bodyMinWidth;

        if (flexColumns.length === 1) {
          flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth;
        } else {
          var allColumnsWidth = flexColumns.reduce(function (prev, column) {
            return prev + (column.minWidth || 80);
          }, 0);
          var flexWidthPerPixel = totalFlexWidth / allColumnsWidth;
          var noneFirstWidth = 0;

          flexColumns.forEach(function (column, index) {
            if (index === 0) return;
            var flexWidth = Math.floor((column.minWidth || 80) * flexWidthPerPixel);
            noneFirstWidth += flexWidth;
            column.realWidth = (column.minWidth || 80) + flexWidth;
          });

          flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth - noneFirstWidth;
        }
      } else {
        // HAVE HORIZONTAL SCROLL BAR
        this.scrollX = true;
        flexColumns.forEach(function (column) {
          column.realWidth = column.minWidth;
        });
      }

      this.bodyWidth = Math.max(bodyMinWidth, bodyWidth);
      this.table.resizeState.width = this.bodyWidth;
    } else {
      flattenColumns.forEach(function (column) {
        if (!column.width && !column.minWidth) {
          column.realWidth = 80;
        } else {
          column.realWidth = column.width || column.minWidth;
        }

        bodyMinWidth += column.realWidth;
      });
      this.scrollX = bodyMinWidth > bodyWidth;

      this.bodyWidth = bodyMinWidth;
    }

    var fixedColumns = this.store.states.fixedColumns;

    if (fixedColumns.length > 0) {
      var fixedWidth = 0;
      fixedColumns.forEach(function (column) {
        fixedWidth += column.realWidth || column.width;
      });

      this.fixedWidth = fixedWidth;
    }

    var rightFixedColumns = this.store.states.rightFixedColumns;
    if (rightFixedColumns.length > 0) {
      var rightFixedWidth = 0;
      rightFixedColumns.forEach(function (column) {
        rightFixedWidth += column.realWidth || column.width;
      });

      this.rightFixedWidth = rightFixedWidth;
    }

    this.notifyObservers('columns');
  };

  TableLayout.prototype.addObserver = function addObserver(observer) {
    this.observers.push(observer);
  };

  TableLayout.prototype.removeObserver = function removeObserver(observer) {
    var index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  };

  TableLayout.prototype.notifyObservers = function notifyObservers(event) {
    var _this3 = this;

    var observers = this.observers;
    observers.forEach(function (observer) {
      switch (event) {
        case 'columns':
          observer.onColumnsChange(_this3);
          break;
        case 'scrollable':
          observer.onScrollableChange(_this3);
          break;
        default:
          throw new Error('Table Layout don\'t have event ' + event + '.');
      }
    });
  };

  return TableLayout;
}();

/* harmony default export */ var table_layout = (table_layout_TableLayout);
// EXTERNAL MODULE: external "element-mini-ui/lib/tooltip"
var tooltip_ = __webpack_require__(24);
var tooltip_default = /*#__PURE__*/__webpack_require__.n(tooltip_);

// CONCATENATED MODULE: ./packages/table/src/layout-observer.js
/* harmony default export */ var layout_observer = ({
  created: function created() {
    this.tableLayout.addObserver(this);
  },
  destroyed: function destroyed() {
    this.tableLayout.removeObserver(this);
  },


  computed: {
    tableLayout: function tableLayout() {
      var layout = this.layout;
      if (!layout && this.table) {
        layout = this.table.layout;
      }
      if (!layout) {
        throw new Error('Can not find table layout.');
      }
      return layout;
    }
  },

  mounted: function mounted() {
    this.onColumnsChange(this.tableLayout);
    this.onScrollableChange(this.tableLayout);
  },
  updated: function updated() {
    if (this.__updated__) return;
    this.onColumnsChange(this.tableLayout);
    this.onScrollableChange(this.tableLayout);
    this.__updated__ = true;
  },


  methods: {
    onColumnsChange: function onColumnsChange(layout) {
      var cols = this.$el.querySelectorAll('colgroup > col');
      if (!cols.length) return;
      var flattenColumns = layout.getFlattenColumns();
      var columnsMap = {};
      flattenColumns.forEach(function (column) {
        columnsMap[column.id] = column;
      });
      for (var i = 0, j = cols.length; i < j; i++) {
        var col = cols[i];
        var name = col.getAttribute('name');
        var column = columnsMap[name];
        if (column) {
          col.setAttribute('width', column.realWidth || column.width);
        }
      }
    },
    onScrollableChange: function onScrollableChange(layout) {
      var cols = this.$el.querySelectorAll('colgroup > col[name=gutter]');
      for (var i = 0, j = cols.length; i < j; i++) {
        var col = cols[i];
        col.setAttribute('width', layout.scrollY ? layout.gutterWidth : '0');
      }
      var ths = this.$el.querySelectorAll('th.gutter');
      for (var _i = 0, _j = ths.length; _i < _j; _i++) {
        var th = ths[_i];
        th.style.width = layout.scrollY ? layout.gutterWidth + 'px' : '0';
        th.style.display = layout.scrollY ? '' : 'none';
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/table/src/table-body.js
var table_body_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var table_body_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };










/* harmony default export */ var table_body = ({
  name: 'ElTableBody',

  mixins: [layout_observer],

  components: {
    ElCheckbox: checkbox_default.a,
    ElTooltip: tooltip_default.a
  },

  props: {
    store: {
      required: true
    },
    stripe: Boolean,
    context: {},
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    fixed: String,
    highlight: Boolean
  },

  render: function render(h) {
    var _this = this;

    var data = this.data || [];
    return h(
      'table',
      {
        'class': 'el-table__body',
        attrs: { cellspacing: '0',
          cellpadding: '0',
          border: '0' }
      },
      [h('colgroup', [this.columns.map(function (column) {
        return h('col', {
          attrs: { name: column.id },
          key: column.id });
      })]), h('tbody', [data.reduce(function (acc, row) {
        return acc.concat(_this.wrappedRowRender(row, acc.length));
      }, []), h('el-tooltip', {
        attrs: { effect: this.table.tooltipEffect, placement: 'top', content: this.tooltipContent },
        ref: 'tooltip' })])]
    );
  },


  computed: table_body_extends({
    table: function table() {
      return this.$parent;
    }
  }, mapStates({
    data: 'data',
    columns: 'columns',
    treeIndent: 'indent',
    leftFixedLeafCount: 'fixedLeafColumnsLength',
    rightFixedLeafCount: 'rightFixedLeafColumnsLength',
    columnsCount: function columnsCount(states) {
      return states.columns.length;
    },
    leftFixedCount: function leftFixedCount(states) {
      return states.fixedColumns.length;
    },
    rightFixedCount: function rightFixedCount(states) {
      return states.rightFixedColumns.length;
    },
    hasExpandColumn: function hasExpandColumn(states) {
      return states.columns.some(function (_ref) {
        var type = _ref.type;
        return type === 'expand';
      });
    }
  }), {
    firstDefaultColumnIndex: function firstDefaultColumnIndex() {
      return Object(util_["arrayFindIndex"])(this.columns, function (_ref2) {
        var type = _ref2.type;
        return type === 'default';
      });
    }
  }),

  watch: {
    // don't trigger getter of currentRow in getCellClass. see https://jsfiddle.net/oe2b4hqt/
    // update DOM manually. see https://github.com/ElemeFE/element/pull/13954/files#diff-9b450c00d0a9dec0ffad5a3176972e40
    'store.states.hoverRow': function storeStatesHoverRow(newVal, oldVal) {
      var _this2 = this;

      if (!this.store.states.isComplex || this.$isServer) return;
      var raf = window.requestAnimationFrame;
      if (!raf) {
        raf = function raf(fn) {
          return setTimeout(fn, 16);
        };
      }
      raf(function () {
        var rows = _this2.$el.querySelectorAll('.el-table__row');
        var oldRow = rows[oldVal];
        var newRow = rows[newVal];
        if (oldRow) {
          Object(dom_["removeClass"])(oldRow, 'hover-row');
        }
        if (newRow) {
          Object(dom_["addClass"])(newRow, 'hover-row');
        }
      });
    }
  },

  data: function data() {
    return {
      tooltipContent: ''
    };
  },
  created: function created() {
    this.activateTooltip = debounce_default()(50, function (tooltip) {
      return tooltip.handleShowPopper();
    });
  },


  methods: {
    getKeyOfRow: function getKeyOfRow(row, index) {
      var rowKey = this.table.rowKey;
      if (rowKey) {
        return getRowIdentity(row, rowKey);
      }
      return index;
    },
    isColumnHidden: function isColumnHidden(index) {
      if (this.fixed === true || this.fixed === 'left') {
        return index >= this.leftFixedLeafCount;
      } else if (this.fixed === 'right') {
        return index < this.columnsCount - this.rightFixedLeafCount;
      } else {
        return index < this.leftFixedLeafCount || index >= this.columnsCount - this.rightFixedLeafCount;
      }
    },
    getSpan: function getSpan(row, column, rowIndex, columnIndex) {
      var rowspan = 1;
      var colspan = 1;
      var fn = this.table.spanMethod;
      if (typeof fn === 'function') {
        var result = fn({
          row: row,
          column: column,
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
        if (Array.isArray(result)) {
          rowspan = result[0];
          colspan = result[1];
        } else if ((typeof result === 'undefined' ? 'undefined' : table_body_typeof(result)) === 'object') {
          rowspan = result.rowspan;
          colspan = result.colspan;
        }
      }
      return { rowspan: rowspan, colspan: colspan };
    },
    getRowStyle: function getRowStyle(row, rowIndex) {
      var rowStyle = this.table.rowStyle;
      if (typeof rowStyle === 'function') {
        return rowStyle.call(null, {
          row: row,
          rowIndex: rowIndex
        });
      }
      return rowStyle || null;
    },
    getRowClass: function getRowClass(row, rowIndex) {
      var classes = ['el-table__row'];
      if (this.table.highlightCurrentRow && row === this.store.states.currentRow) {
        classes.push('current-row');
      }

      if (this.stripe && rowIndex % 2 === 1) {
        classes.push('el-table__row--striped');
      }
      var rowClassName = this.table.rowClassName;
      if (typeof rowClassName === 'string') {
        classes.push(rowClassName);
      } else if (typeof rowClassName === 'function') {
        classes.push(rowClassName.call(null, {
          row: row,
          rowIndex: rowIndex
        }));
      }

      if (this.store.states.expandRows.indexOf(row) > -1) {
        classes.push('expanded');
      }

      return classes;
    },
    getCellStyle: function getCellStyle(rowIndex, columnIndex, row, column) {
      var cellStyle = this.table.cellStyle;
      if (typeof cellStyle === 'function') {
        return cellStyle.call(null, {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          row: row,
          column: column
        });
      }
      return cellStyle;
    },
    getCellClass: function getCellClass(rowIndex, columnIndex, row, column) {
      var classes = [column.id, column.align, column.className];

      if (this.isColumnHidden(columnIndex)) {
        classes.push('is-hidden');
      }

      var cellClassName = this.table.cellClassName;
      if (typeof cellClassName === 'string') {
        classes.push(cellClassName);
      } else if (typeof cellClassName === 'function') {
        classes.push(cellClassName.call(null, {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          row: row,
          column: column
        }));
      }

      return classes.join(' ');
    },
    getColspanRealWidth: function getColspanRealWidth(columns, colspan, index) {
      if (colspan < 1) {
        return columns[index].realWidth;
      }
      var widthArr = columns.map(function (_ref3) {
        var realWidth = _ref3.realWidth;
        return realWidth;
      }).slice(index, index + colspan);
      return widthArr.reduce(function (acc, width) {
        return acc + width;
      }, -1);
    },
    handleCellMouseEnter: function handleCellMouseEnter(event, row) {
      var table = this.table;
      var cell = getCell(event);

      if (cell) {
        var column = getColumnByCell(table, cell);
        var hoverState = table.hoverState = { cell: cell, column: column, row: row };
        table.$emit('cell-mouse-enter', hoverState.row, hoverState.column, hoverState.cell, event);
      }

      // 判断是否text-overflow, 如果是就显示tooltip
      var cellChild = event.target.querySelector('.cell');
      if (!(Object(dom_["hasClass"])(cellChild, 'el-tooltip') && cellChild.childNodes.length)) {
        return;
      }
      // use range width instead of scrollWidth to determine whether the text is overflowing
      // to address a potential FireFox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1074543#c3
      var range = document.createRange();
      range.setStart(cellChild, 0);
      range.setEnd(cellChild, cellChild.childNodes.length);
      var rangeWidth = range.getBoundingClientRect().width;
      var padding = (parseInt(Object(dom_["getStyle"])(cellChild, 'paddingLeft'), 10) || 0) + (parseInt(Object(dom_["getStyle"])(cellChild, 'paddingRight'), 10) || 0);
      if ((rangeWidth + padding > cellChild.offsetWidth || cellChild.scrollWidth > cellChild.offsetWidth) && this.$refs.tooltip) {
        var tooltip = this.$refs.tooltip;
        // TODO 会引起整个 Table 的重新渲染，需要优化
        this.tooltipContent = cell.innerText || cell.textContent;
        tooltip.referenceElm = cell;
        tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none');
        tooltip.doDestroy();
        tooltip.setExpectedState(true);
        this.activateTooltip(tooltip);
      }
    },
    handleCellMouseLeave: function handleCellMouseLeave(event) {
      var tooltip = this.$refs.tooltip;
      if (tooltip) {
        tooltip.setExpectedState(false);
        tooltip.handleClosePopper();
      }
      var cell = getCell(event);
      if (!cell) return;

      var oldHoverState = this.table.hoverState || {};
      this.table.$emit('cell-mouse-leave', oldHoverState.row, oldHoverState.column, oldHoverState.cell, event);
    },


    handleMouseEnter: debounce_default()(30, function (index) {
      this.store.commit('setHoverRow', index);
    }),

    handleMouseLeave: debounce_default()(30, function () {
      this.store.commit('setHoverRow', null);
    }),

    handleContextMenu: function handleContextMenu(event, row) {
      this.handleEvent(event, row, 'contextmenu');
    },
    handleDoubleClick: function handleDoubleClick(event, row) {
      this.handleEvent(event, row, 'dblclick');
    },
    handleClick: function handleClick(event, row) {
      this.store.commit('setCurrentRow', row);
      this.handleEvent(event, row, 'click');
    },
    handleEvent: function handleEvent(event, row, name) {
      var table = this.table;
      var cell = getCell(event);
      var column = void 0;
      if (cell) {
        column = getColumnByCell(table, cell);
        if (column) {
          table.$emit('cell-' + name, row, column, cell, event);
        }
      }
      table.$emit('row-' + name, row, column, event);
    },
    rowRender: function rowRender(row, $index, treeRowData) {
      var _this3 = this;

      var h = this.$createElement;
      var treeIndent = this.treeIndent,
          columns = this.columns,
          firstDefaultColumnIndex = this.firstDefaultColumnIndex;

      var columnsHidden = columns.map(function (column, index) {
        return _this3.isColumnHidden(index);
      });
      var rowClasses = this.getRowClass(row, $index);
      var display = true;
      if (treeRowData) {
        rowClasses.push('el-table__row--level-' + treeRowData.level);
        display = treeRowData.display;
      }
      // 指令 v-show 会覆盖 row-style 中 display
      // 使用 :style 代替 v-show https://github.com/ElemeFE/element/issues/16995
      var displayStyle = display ? null : {
        display: 'none'
      };
      return h(
        'tr',
        {
          style: [displayStyle, this.getRowStyle(row, $index)],
          'class': rowClasses,
          key: this.getKeyOfRow(row, $index),
          on: {
            'dblclick': function dblclick($event) {
              return _this3.handleDoubleClick($event, row);
            },
            'click': function click($event) {
              return _this3.handleClick($event, row);
            },
            'contextmenu': function contextmenu($event) {
              return _this3.handleContextMenu($event, row);
            },
            'mouseenter': function mouseenter(_) {
              return _this3.handleMouseEnter($index);
            },
            'mouseleave': this.handleMouseLeave
          }
        },
        [columns.map(function (column, cellIndex) {
          var _getSpan = _this3.getSpan(row, column, $index, cellIndex),
              rowspan = _getSpan.rowspan,
              colspan = _getSpan.colspan;

          if (!rowspan || !colspan) {
            return null;
          }
          var columnData = table_body_extends({}, column);
          columnData.realWidth = _this3.getColspanRealWidth(columns, colspan, cellIndex);
          var data = {
            store: _this3.store,
            _self: _this3.context || _this3.table.$vnode.context,
            column: columnData,
            row: row,
            $index: $index
          };
          if (cellIndex === firstDefaultColumnIndex && treeRowData) {
            data.treeNode = {
              indent: treeRowData.level * treeIndent,
              level: treeRowData.level
            };
            if (typeof treeRowData.expanded === 'boolean') {
              data.treeNode.expanded = treeRowData.expanded;
              // 表明是懒加载
              if ('loading' in treeRowData) {
                data.treeNode.loading = treeRowData.loading;
              }
              if ('noLazyChildren' in treeRowData) {
                data.treeNode.noLazyChildren = treeRowData.noLazyChildren;
              }
            }
          }
          return h(
            'td',
            {
              style: _this3.getCellStyle($index, cellIndex, row, column),
              'class': _this3.getCellClass($index, cellIndex, row, column),
              attrs: { rowspan: rowspan,
                colspan: colspan
              },
              on: {
                'mouseenter': function mouseenter($event) {
                  return _this3.handleCellMouseEnter($event, row);
                },
                'mouseleave': _this3.handleCellMouseLeave
              }
            },
            [column.renderCell.call(_this3._renderProxy, _this3.$createElement, data, columnsHidden[cellIndex])]
          );
        })]
      );
    },
    wrappedRowRender: function wrappedRowRender(row, $index) {
      var _this4 = this;

      var h = this.$createElement;

      var store = this.store;
      var isRowExpanded = store.isRowExpanded,
          assertRowKey = store.assertRowKey;
      var _store$states = store.states,
          treeData = _store$states.treeData,
          lazyTreeNodeMap = _store$states.lazyTreeNodeMap,
          childrenColumnName = _store$states.childrenColumnName,
          rowKey = _store$states.rowKey;

      if (this.hasExpandColumn && isRowExpanded(row)) {
        var renderExpanded = this.table.renderExpanded;
        var tr = this.rowRender(row, $index);
        if (!renderExpanded) {
          console.error('[Element Error]renderExpanded is required.');
          return tr;
        }
        // 使用二维数组，避免修改 $index
        return [[tr, h(
          'tr',
          { key: 'expanded-row__' + tr.key },
          [h(
            'td',
            {
              attrs: { colspan: this.columnsCount },
              'class': 'el-table__expanded-cell' },
            [renderExpanded(this.$createElement, { row: row, $index: $index, store: this.store })]
          )]
        )]];
      } else if (Object.keys(treeData).length) {
        assertRowKey();
        // TreeTable 时，rowKey 必须由用户设定，不使用 getKeyOfRow 计算
        // 在调用 rowRender 函数时，仍然会计算 rowKey，不太好的操作
        var key = getRowIdentity(row, rowKey);
        var cur = treeData[key];
        var treeRowData = null;
        if (cur) {
          treeRowData = {
            expanded: cur.expanded,
            level: cur.level,
            display: true
          };
          if (typeof cur.lazy === 'boolean') {
            if (typeof cur.loaded === 'boolean' && cur.loaded) {
              treeRowData.noLazyChildren = !(cur.children && cur.children.length);
            }
            treeRowData.loading = cur.loading;
          }
        }
        var tmp = [this.rowRender(row, $index, treeRowData)];
        // 渲染嵌套数据
        if (cur) {
          // currentRow 记录的是 index，所以还需主动增加 TreeTable 的 index
          var i = 0;
          var traverse = function traverse(children, parent) {
            if (!(children && children.length && parent)) return;
            children.forEach(function (node) {
              // 父节点的 display 状态影响子节点的显示状态
              var innerTreeRowData = {
                display: parent.display && parent.expanded,
                level: parent.level + 1
              };
              var childKey = getRowIdentity(node, rowKey);
              if (childKey === undefined || childKey === null) {
                throw new Error('for nested data item, row-key is required.');
              }
              cur = table_body_extends({}, treeData[childKey]);
              // 对于当前节点，分成有无子节点两种情况。
              // 如果包含子节点的，设置 expanded 属性。
              // 对于它子节点的 display 属性由它本身的 expanded 与 display 共同决定。
              if (cur) {
                innerTreeRowData.expanded = cur.expanded;
                // 懒加载的某些节点，level 未知
                cur.level = cur.level || innerTreeRowData.level;
                cur.display = !!(cur.expanded && innerTreeRowData.display);
                if (typeof cur.lazy === 'boolean') {
                  if (typeof cur.loaded === 'boolean' && cur.loaded) {
                    innerTreeRowData.noLazyChildren = !(cur.children && cur.children.length);
                  }
                  innerTreeRowData.loading = cur.loading;
                }
              }
              i++;
              tmp.push(_this4.rowRender(node, $index + i, innerTreeRowData));
              if (cur) {
                var _nodes = lazyTreeNodeMap[childKey] || node[childrenColumnName];
                traverse(_nodes, cur);
              }
            });
          };
          // 对于 root 节点，display 一定为 true
          cur.display = true;
          var nodes = lazyTreeNodeMap[key] || row[childrenColumnName];
          traverse(nodes, cur);
        }
        return tmp;
      } else {
        return this.rowRender(row, $index);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/table/src/filter-panel.vue?vue&type=template&id=7f2c919f&
var filter_panelvue_type_template_id_7f2c919f_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "el-zoom-in-top" } }, [
    _vm.multiple
      ? _c(
          "div",
          {
            directives: [
              {
                name: "clickoutside",
                rawName: "v-clickoutside",
                value: _vm.handleOutsideClick,
                expression: "handleOutsideClick"
              },
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showPopper,
                expression: "showPopper"
              }
            ],
            staticClass: "el-table-filter"
          },
          [
            _c(
              "div",
              { staticClass: "el-table-filter__content" },
              [
                _c(
                  "el-scrollbar",
                  { attrs: { "wrap-class": "el-table-filter__wrap" } },
                  [
                    _c(
                      "el-checkbox-group",
                      {
                        staticClass: "el-table-filter__checkbox-group",
                        model: {
                          value: _vm.filteredValue,
                          callback: function($$v) {
                            _vm.filteredValue = $$v
                          },
                          expression: "filteredValue"
                        }
                      },
                      _vm._l(_vm.filters, function(filter) {
                        return _c(
                          "el-checkbox",
                          { key: filter.value, attrs: { label: filter.value } },
                          [_vm._v(_vm._s(filter.text))]
                        )
                      }),
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _c("div", { staticClass: "el-table-filter__bottom" }, [
              _c(
                "button",
                {
                  class: { "is-disabled": _vm.filteredValue.length === 0 },
                  attrs: { disabled: _vm.filteredValue.length === 0 },
                  on: { click: _vm.handleConfirm }
                },
                [_vm._v(_vm._s(_vm.t("el.table.confirmFilter")))]
              ),
              _c("button", { on: { click: _vm.handleReset } }, [
                _vm._v(_vm._s(_vm.t("el.table.resetFilter")))
              ])
            ])
          ]
        )
      : _c(
          "div",
          {
            directives: [
              {
                name: "clickoutside",
                rawName: "v-clickoutside",
                value: _vm.handleOutsideClick,
                expression: "handleOutsideClick"
              },
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showPopper,
                expression: "showPopper"
              }
            ],
            staticClass: "el-table-filter"
          },
          [
            _c(
              "ul",
              { staticClass: "el-table-filter__list" },
              [
                _c(
                  "li",
                  {
                    staticClass: "el-table-filter__list-item",
                    class: {
                      "is-active":
                        _vm.filterValue === undefined ||
                        _vm.filterValue === null
                    },
                    on: {
                      click: function($event) {
                        return _vm.handleSelect(null)
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.t("el.table.clearFilter")))]
                ),
                _vm._l(_vm.filters, function(filter) {
                  return _c(
                    "li",
                    {
                      key: filter.value,
                      staticClass: "el-table-filter__list-item",
                      class: { "is-active": _vm.isActive(filter) },
                      attrs: { label: filter.value },
                      on: {
                        click: function($event) {
                          return _vm.handleSelect(filter.value)
                        }
                      }
                    },
                    [_vm._v(_vm._s(filter.text))]
                  )
                })
              ],
              2
            )
          ]
        )
  ])
}
var filter_panelvue_type_template_id_7f2c919f_staticRenderFns = []
filter_panelvue_type_template_id_7f2c919f_render._withStripped = true


// CONCATENATED MODULE: ./packages/table/src/filter-panel.vue?vue&type=template&id=7f2c919f&

// EXTERNAL MODULE: external "element-mini-ui/lib/utils/popup"
var popup_ = __webpack_require__(9);
var popup_default = /*#__PURE__*/__webpack_require__.n(popup_);

// CONCATENATED MODULE: ./packages/table/src/dropdown.js

var dropdowns = [];

!external_vue_default.a.prototype.$isServer && document.addEventListener('click', function (event) {
  dropdowns.forEach(function (dropdown) {
    var target = event.target;
    if (!dropdown || !dropdown.$el) return;
    if (target === dropdown.$el || dropdown.$el.contains(target)) {
      return;
    }
    dropdown.handleOutsideClick && dropdown.handleOutsideClick(event);
  });
});

/* harmony default export */ var src_dropdown = ({
  open: function open(instance) {
    if (instance) {
      dropdowns.push(instance);
    }
  },
  close: function close(instance) {
    var index = dropdowns.indexOf(instance);
    if (index !== -1) {
      dropdowns.splice(instance, 1);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/table/src/filter-panel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var filter_panelvue_type_script_lang_js_ = ({
  name: 'ElTableFilterPanel',
  mixins: [vue_popper_default.a, locale_default.a],
  directives: {
    Clickoutside: clickoutside_default.a
  },

  components: {
    ElCheckbox: checkbox_default.a,
    ElCheckboxGroup: packages_checkbox_group,
    ElScrollbar: scrollbar_default.a
  },

  props: {
    placement: {
      type: String,
      default: 'bottom-end'
    }
  },

  methods: {
    isActive: function isActive(filter) {
      return filter.value === this.filterValue;
    },
    handleOutsideClick: function handleOutsideClick() {
      var _this = this;

      setTimeout(function () {
        _this.showPopper = false;
      }, 16);
    },
    handleConfirm: function handleConfirm() {
      this.confirmFilter(this.filteredValue);
      this.handleOutsideClick();
    },
    handleReset: function handleReset() {
      this.filteredValue = [];
      this.confirmFilter(this.filteredValue);
      this.handleOutsideClick();
    },
    handleSelect: function handleSelect(filterValue) {
      this.filterValue = filterValue;

      if (typeof filterValue !== 'undefined' && filterValue !== null) {
        this.confirmFilter(this.filteredValue);
      } else {
        this.confirmFilter([]);
      }

      this.handleOutsideClick();
    },
    confirmFilter: function confirmFilter(filteredValue) {
      this.table.store.commit('filterChange', {
        column: this.column,
        values: filteredValue
      });
      this.table.store.updateAllSelected();
    }
  },

  data: function data() {
    return {
      table: null,
      cell: null,
      column: null
    };
  },


  computed: {
    filters: function filters() {
      return this.column && this.column.filters;
    },


    filterValue: {
      get: function get() {
        return (this.column.filteredValue || [])[0];
      },
      set: function set(value) {
        if (this.filteredValue) {
          if (typeof value !== 'undefined' && value !== null) {
            this.filteredValue.splice(0, 1, value);
          } else {
            this.filteredValue.splice(0, 1);
          }
        }
      }
    },

    filteredValue: {
      get: function get() {
        if (this.column) {
          return this.column.filteredValue || [];
        }
        return [];
      },
      set: function set(value) {
        if (this.column) {
          this.column.filteredValue = value;
        }
      }
    },

    multiple: function multiple() {
      if (this.column) {
        return this.column.filterMultiple;
      }
      return true;
    }
  },

  mounted: function mounted() {
    var _this2 = this;

    this.popperElm = this.$el;
    this.referenceElm = this.cell;
    this.table.bodyWrapper.addEventListener('scroll', function () {
      _this2.updatePopper();
    });

    this.$watch('showPopper', function (value) {
      if (_this2.column) _this2.column.filterOpened = value;
      if (value) {
        src_dropdown.open(_this2);
      } else {
        src_dropdown.close(_this2);
      }
    });
  },

  watch: {
    showPopper: function showPopper(val) {
      if (val === true && parseInt(this.popperJS._popper.style.zIndex, 10) < popup_["PopupManager"].zIndex) {
        this.popperJS._popper.style.zIndex = popup_["PopupManager"].nextZIndex();
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/table/src/filter-panel.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_filter_panelvue_type_script_lang_js_ = (filter_panelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/table/src/filter-panel.vue





/* normalize component */

var filter_panel_component = normalizeComponent(
  src_filter_panelvue_type_script_lang_js_,
  filter_panelvue_type_template_id_7f2c919f_render,
  filter_panelvue_type_template_id_7f2c919f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var filter_panel_api; }
filter_panel_component.options.__file = "packages/table/src/filter-panel.vue"
/* harmony default export */ var filter_panel = (filter_panel_component.exports);
// CONCATENATED MODULE: ./packages/table/src/table-header.js
var table_header_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var getAllColumns = function getAllColumns(columns) {
  var result = [];
  columns.forEach(function (column) {
    if (column.children) {
      result.push(column);
      result.push.apply(result, getAllColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};

var convertToRows = function convertToRows(originColumns) {
  var maxLevel = 1;
  var traverse = function traverse(column, parent) {
    if (parent) {
      column.level = parent.level + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }
    if (column.children) {
      var colSpan = 0;
      column.children.forEach(function (subColumn) {
        traverse(subColumn, column);
        colSpan += subColumn.colSpan;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };

  originColumns.forEach(function (column) {
    column.level = 1;
    traverse(column);
  });

  var rows = [];
  for (var i = 0; i < maxLevel; i++) {
    rows.push([]);
  }

  var allColumns = getAllColumns(originColumns);

  allColumns.forEach(function (column) {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1;
    } else {
      column.rowSpan = 1;
    }
    rows[column.level - 1].push(column);
  });

  return rows;
};

/* harmony default export */ var table_header = ({
  name: 'ElTableHeader',

  mixins: [layout_observer],

  render: function render(h) {
    var _this = this;

    var originColumns = this.store.states.originColumns;
    var columnRows = convertToRows(originColumns, this.columns);
    // 是否拥有多级表头
    var isGroup = columnRows.length > 1;
    if (isGroup) this.$parent.isGroup = true;
    return h(
      'table',
      {
        'class': 'el-table__header',
        attrs: { cellspacing: '0',
          cellpadding: '0',
          border: '0' }
      },
      [h('colgroup', [this.columns.map(function (column) {
        return h('col', {
          attrs: { name: column.id },
          key: column.id });
      }), this.hasGutter ? h('col', {
        attrs: { name: 'gutter' }
      }) : '']), h(
        'thead',
        { 'class': [{ 'is-group': isGroup, 'has-gutter': this.hasGutter }] },
        [this._l(columnRows, function (columns, rowIndex) {
          return h(
            'tr',
            {
              style: _this.getHeaderRowStyle(rowIndex),
              'class': _this.getHeaderRowClass(rowIndex)
            },
            [columns.map(function (column, cellIndex) {
              return h(
                'th',
                {
                  attrs: {
                    colspan: column.colSpan,
                    rowspan: column.rowSpan
                  },
                  on: {
                    'mousemove': function mousemove($event) {
                      return _this.handleMouseMove($event, column);
                    },
                    'mouseout': _this.handleMouseOut,
                    'mousedown': function mousedown($event) {
                      return _this.handleMouseDown($event, column);
                    },
                    'click': function click($event) {
                      return _this.handleHeaderClick($event, column);
                    },
                    'contextmenu': function contextmenu($event) {
                      return _this.handleHeaderContextMenu($event, column);
                    }
                  },

                  style: _this.getHeaderCellStyle(rowIndex, cellIndex, columns, column),
                  'class': _this.getHeaderCellClass(rowIndex, cellIndex, columns, column),
                  key: column.id },
                [h(
                  'div',
                  { 'class': ['cell', column.filteredValue && column.filteredValue.length > 0 ? 'highlight' : '', column.labelClassName] },
                  [column.renderHeader ? column.renderHeader.call(_this._renderProxy, h, { column: column, $index: cellIndex, store: _this.store, _self: _this.$parent.$vnode.context }) : column.label, column.sortable ? h(
                    'span',
                    {
                      'class': 'caret-wrapper',
                      on: {
                        'click': function click($event) {
                          return _this.handleSortClick($event, column);
                        }
                      }
                    },
                    [h('i', { 'class': 'sort-caret ascending',
                      on: {
                        'click': function click($event) {
                          return _this.handleSortClick($event, column, 'ascending');
                        }
                      }
                    }), h('i', { 'class': 'sort-caret descending',
                      on: {
                        'click': function click($event) {
                          return _this.handleSortClick($event, column, 'descending');
                        }
                      }
                    })]
                  ) : '', column.filterable ? h(
                    'span',
                    {
                      'class': 'el-table__column-filter-trigger',
                      on: {
                        'click': function click($event) {
                          return _this.handleFilterClick($event, column);
                        }
                      }
                    },
                    [h('i', { 'class': ['el-icon-arrow-down', column.filterOpened ? 'el-icon-arrow-up' : ''] })]
                  ) : '']
                )]
              );
            }), _this.hasGutter ? h('th', { 'class': 'gutter' }) : '']
          );
        })]
      )]
    );
  },


  props: {
    fixed: String,
    store: {
      required: true
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default: function _default() {
        return {
          prop: '',
          order: ''
        };
      }
    }
  },

  components: {
    ElCheckbox: checkbox_default.a
  },

  computed: table_header_extends({
    table: function table() {
      return this.$parent;
    },
    hasGutter: function hasGutter() {
      return !this.fixed && this.tableLayout.gutterWidth;
    }
  }, mapStates({
    columns: 'columns',
    isAllSelected: 'isAllSelected',
    leftFixedLeafCount: 'fixedLeafColumnsLength',
    rightFixedLeafCount: 'rightFixedLeafColumnsLength',
    columnsCount: function columnsCount(states) {
      return states.columns.length;
    },
    leftFixedCount: function leftFixedCount(states) {
      return states.fixedColumns.length;
    },
    rightFixedCount: function rightFixedCount(states) {
      return states.rightFixedColumns.length;
    }
  })),

  created: function created() {
    this.filterPanels = {};
  },
  mounted: function mounted() {
    var _this2 = this;

    // nextTick 是有必要的 https://github.com/ElemeFE/element/pull/11311
    this.$nextTick(function () {
      var _defaultSort = _this2.defaultSort,
          prop = _defaultSort.prop,
          order = _defaultSort.order;

      var init = true;
      _this2.store.commit('sort', { prop: prop, order: order, init: init });
    });
  },
  beforeDestroy: function beforeDestroy() {
    var panels = this.filterPanels;
    for (var prop in panels) {
      if (panels.hasOwnProperty(prop) && panels[prop]) {
        panels[prop].$destroy(true);
      }
    }
  },


  methods: {
    isCellHidden: function isCellHidden(index, columns) {
      var start = 0;
      for (var i = 0; i < index; i++) {
        start += columns[i].colSpan;
      }
      var after = start + columns[index].colSpan - 1;
      if (this.fixed === true || this.fixed === 'left') {
        return after >= this.leftFixedLeafCount;
      } else if (this.fixed === 'right') {
        return start < this.columnsCount - this.rightFixedLeafCount;
      } else {
        return after < this.leftFixedLeafCount || start >= this.columnsCount - this.rightFixedLeafCount;
      }
    },
    getHeaderRowStyle: function getHeaderRowStyle(rowIndex) {
      var headerRowStyle = this.table.headerRowStyle;
      if (typeof headerRowStyle === 'function') {
        return headerRowStyle.call(null, { rowIndex: rowIndex });
      }
      return headerRowStyle;
    },
    getHeaderRowClass: function getHeaderRowClass(rowIndex) {
      var classes = [];

      var headerRowClassName = this.table.headerRowClassName;
      if (typeof headerRowClassName === 'string') {
        classes.push(headerRowClassName);
      } else if (typeof headerRowClassName === 'function') {
        classes.push(headerRowClassName.call(null, { rowIndex: rowIndex }));
      }

      return classes.join(' ');
    },
    getHeaderCellStyle: function getHeaderCellStyle(rowIndex, columnIndex, row, column) {
      var headerCellStyle = this.table.headerCellStyle;
      if (typeof headerCellStyle === 'function') {
        return headerCellStyle.call(null, {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          row: row,
          column: column
        });
      }
      return headerCellStyle;
    },
    getHeaderCellClass: function getHeaderCellClass(rowIndex, columnIndex, row, column) {
      var classes = [column.id, column.order, column.headerAlign, column.className, column.labelClassName];

      if (rowIndex === 0 && this.isCellHidden(columnIndex, row)) {
        classes.push('is-hidden');
      }

      if (!column.children) {
        classes.push('is-leaf');
      }

      if (column.sortable) {
        classes.push('is-sortable');
      }

      var headerCellClassName = this.table.headerCellClassName;
      if (typeof headerCellClassName === 'string') {
        classes.push(headerCellClassName);
      } else if (typeof headerCellClassName === 'function') {
        classes.push(headerCellClassName.call(null, {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          row: row,
          column: column
        }));
      }

      return classes.join(' ');
    },
    toggleAllSelection: function toggleAllSelection(event) {
      event.stopPropagation();
      this.store.commit('toggleAllSelection');
    },
    handleFilterClick: function handleFilterClick(event, column) {
      event.stopPropagation();
      var target = event.target;
      var cell = target.tagName === 'TH' ? target : target.parentNode;
      if (Object(dom_["hasClass"])(cell, 'noclick')) return;
      cell = cell.querySelector('.el-table__column-filter-trigger') || cell;
      var table = this.$parent;

      var filterPanel = this.filterPanels[column.id];

      if (filterPanel && column.filterOpened) {
        filterPanel.showPopper = false;
        return;
      }

      if (!filterPanel) {
        filterPanel = new external_vue_default.a(filter_panel);
        this.filterPanels[column.id] = filterPanel;
        if (column.filterPlacement) {
          filterPanel.placement = column.filterPlacement;
        }
        filterPanel.table = table;
        filterPanel.cell = cell;
        filterPanel.column = column;
        !this.$isServer && filterPanel.$mount(document.createElement('div'));
      }

      setTimeout(function () {
        filterPanel.showPopper = true;
      }, 16);
    },
    handleHeaderClick: function handleHeaderClick(event, column) {
      if (!column.filters && column.sortable) {
        this.handleSortClick(event, column);
      } else if (column.filterable && !column.sortable) {
        this.handleFilterClick(event, column);
      }

      this.$parent.$emit('header-click', column, event);
    },
    handleHeaderContextMenu: function handleHeaderContextMenu(event, column) {
      this.$parent.$emit('header-contextmenu', column, event);
    },
    handleMouseDown: function handleMouseDown(event, column) {
      var _this3 = this;

      if (this.$isServer) return;
      if (column.children && column.children.length > 0) return;
      /* istanbul ignore if */
      if (this.draggingColumn && this.border) {
        this.dragging = true;

        this.$parent.resizeProxyVisible = true;

        var table = this.$parent;
        var tableEl = table.$el;
        var tableLeft = tableEl.getBoundingClientRect().left;
        var columnEl = this.$el.querySelector('th.' + column.id);
        var columnRect = columnEl.getBoundingClientRect();
        var minLeft = columnRect.left - tableLeft + 30;

        Object(dom_["addClass"])(columnEl, 'noclick');

        this.dragState = {
          startMouseLeft: event.clientX,
          startLeft: columnRect.right - tableLeft,
          startColumnLeft: columnRect.left - tableLeft,
          tableLeft: tableLeft
        };

        var resizeProxy = table.$refs.resizeProxy;
        resizeProxy.style.left = this.dragState.startLeft + 'px';

        document.onselectstart = function () {
          return false;
        };
        document.ondragstart = function () {
          return false;
        };

        var handleMouseMove = function handleMouseMove(event) {
          var deltaLeft = event.clientX - _this3.dragState.startMouseLeft;
          var proxyLeft = _this3.dragState.startLeft + deltaLeft;

          resizeProxy.style.left = Math.max(minLeft, proxyLeft) + 'px';
        };

        var handleMouseUp = function handleMouseUp() {
          if (_this3.dragging) {
            var _dragState = _this3.dragState,
                startColumnLeft = _dragState.startColumnLeft,
                startLeft = _dragState.startLeft;

            var finalLeft = parseInt(resizeProxy.style.left, 10);
            var columnWidth = finalLeft - startColumnLeft;
            column.width = column.realWidth = columnWidth;
            table.$emit('header-dragend', column.width, startLeft - startColumnLeft, column, event);

            _this3.store.scheduleLayout();

            document.body.style.cursor = '';
            _this3.dragging = false;
            _this3.draggingColumn = null;
            _this3.dragState = {};

            table.resizeProxyVisible = false;
          }

          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
          document.onselectstart = null;
          document.ondragstart = null;

          setTimeout(function () {
            Object(dom_["removeClass"])(columnEl, 'noclick');
          }, 0);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      }
    },
    handleMouseMove: function handleMouseMove(event, column) {
      if (column.children && column.children.length > 0) return;
      var target = event.target;
      while (target && target.tagName !== 'TH') {
        target = target.parentNode;
      }

      if (!column || !column.resizable) return;

      if (!this.dragging && this.border) {
        var rect = target.getBoundingClientRect();

        var bodyStyle = document.body.style;
        if (rect.width > 12 && rect.right - event.pageX < 8) {
          bodyStyle.cursor = 'col-resize';
          if (Object(dom_["hasClass"])(target, 'is-sortable')) {
            target.style.cursor = 'col-resize';
          }
          this.draggingColumn = column;
        } else if (!this.dragging) {
          bodyStyle.cursor = '';
          if (Object(dom_["hasClass"])(target, 'is-sortable')) {
            target.style.cursor = 'pointer';
          }
          this.draggingColumn = null;
        }
      }
    },
    handleMouseOut: function handleMouseOut() {
      if (this.$isServer) return;
      document.body.style.cursor = '';
    },
    toggleOrder: function toggleOrder(_ref) {
      var order = _ref.order,
          sortOrders = _ref.sortOrders;

      if (order === '') return sortOrders[0];
      var index = sortOrders.indexOf(order || null);
      return sortOrders[index > sortOrders.length - 2 ? 0 : index + 1];
    },
    handleSortClick: function handleSortClick(event, column, givenOrder) {
      event.stopPropagation();
      var order = column.order === givenOrder ? null : givenOrder || this.toggleOrder(column);

      var target = event.target;
      while (target && target.tagName !== 'TH') {
        target = target.parentNode;
      }

      if (target && target.tagName === 'TH') {
        if (Object(dom_["hasClass"])(target, 'noclick')) {
          Object(dom_["removeClass"])(target, 'noclick');
          return;
        }
      }

      if (!column.sortable) return;

      var states = this.store.states;
      var sortProp = states.sortProp;
      var sortOrder = void 0;
      var sortingColumn = states.sortingColumn;

      if (sortingColumn !== column || sortingColumn === column && sortingColumn.order === null) {
        if (sortingColumn) {
          sortingColumn.order = null;
        }
        states.sortingColumn = column;
        sortProp = column.property;
      }

      if (!order) {
        sortOrder = column.order = null;
      } else {
        sortOrder = column.order = order;
      }

      states.sortProp = sortProp;
      states.sortOrder = sortOrder;

      this.store.commit('changeSortCondition');
    }
  },

  data: function data() {
    return {
      draggingColumn: null,
      dragging: false,
      dragState: {}
    };
  }
});
// CONCATENATED MODULE: ./packages/table/src/table-footer.js
var table_footer_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




/* harmony default export */ var table_footer = ({
  name: 'ElTableFooter',

  mixins: [layout_observer],

  render: function render(h) {
    var _this = this;

    var sums = [];
    if (this.summaryMethod) {
      sums = this.summaryMethod({ columns: this.columns, data: this.store.states.data });
    } else {
      this.columns.forEach(function (column, index) {
        if (index === 0) {
          sums[index] = _this.sumText;
          return;
        }
        var values = _this.store.states.data.map(function (item) {
          return Number(item[column.property]);
        });
        var precisions = [];
        var notNumber = true;
        values.forEach(function (value) {
          if (!isNaN(value)) {
            notNumber = false;
            var decimal = ('' + value).split('.')[1];
            precisions.push(decimal ? decimal.length : 0);
          }
        });
        var precision = Math.max.apply(null, precisions);
        if (!notNumber) {
          sums[index] = values.reduce(function (prev, curr) {
            var value = Number(curr);
            if (!isNaN(value)) {
              return parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
            } else {
              return prev;
            }
          }, 0);
        } else {
          sums[index] = '';
        }
      });
    }

    return h(
      'table',
      {
        'class': 'el-table__footer',
        attrs: { cellspacing: '0',
          cellpadding: '0',
          border: '0' }
      },
      [h('colgroup', [this.columns.map(function (column) {
        return h('col', {
          attrs: { name: column.id },
          key: column.id });
      }), this.hasGutter ? h('col', {
        attrs: { name: 'gutter' }
      }) : '']), h(
        'tbody',
        { 'class': [{ 'has-gutter': this.hasGutter }] },
        [h('tr', [this.columns.map(function (column, cellIndex) {
          return h(
            'td',
            {
              key: cellIndex,
              attrs: { colspan: column.colSpan,
                rowspan: column.rowSpan
              },
              'class': _this.getRowClasses(column, cellIndex) },
            [h(
              'div',
              { 'class': ['cell', column.labelClassName] },
              [sums[cellIndex]]
            )]
          );
        }), this.hasGutter ? h('th', { 'class': 'gutter' }) : ''])]
      )]
    );
  },


  props: {
    fixed: String,
    store: {
      required: true
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default: function _default() {
        return {
          prop: '',
          order: ''
        };
      }
    }
  },

  computed: table_footer_extends({
    table: function table() {
      return this.$parent;
    },
    hasGutter: function hasGutter() {
      return !this.fixed && this.tableLayout.gutterWidth;
    }
  }, mapStates({
    columns: 'columns',
    isAllSelected: 'isAllSelected',
    leftFixedLeafCount: 'fixedLeafColumnsLength',
    rightFixedLeafCount: 'rightFixedLeafColumnsLength',
    columnsCount: function columnsCount(states) {
      return states.columns.length;
    },
    leftFixedCount: function leftFixedCount(states) {
      return states.fixedColumns.length;
    },
    rightFixedCount: function rightFixedCount(states) {
      return states.rightFixedColumns.length;
    }
  })),

  methods: {
    isCellHidden: function isCellHidden(index, columns, column) {
      if (this.fixed === true || this.fixed === 'left') {
        return index >= this.leftFixedLeafCount;
      } else if (this.fixed === 'right') {
        var before = 0;
        for (var i = 0; i < index; i++) {
          before += columns[i].colSpan;
        }
        return before < this.columnsCount - this.rightFixedLeafCount;
      } else if (!this.fixed && column.fixed) {
        // hide cell when footer instance is not fixed and column is fixed
        return true;
      } else {
        return index < this.leftFixedCount || index >= this.columnsCount - this.rightFixedCount;
      }
    },
    getRowClasses: function getRowClasses(column, cellIndex) {
      var classes = [column.id, column.align, column.labelClassName];
      if (column.className) {
        classes.push(column.className);
      }
      if (this.isCellHidden(cellIndex, this.columns, column)) {
        classes.push('is-hidden');
      }
      if (!column.children) {
        classes.push('is-leaf');
      }
      return classes;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/table/src/table.vue?vue&type=script&lang=js&
var tablevue_type_script_lang_js_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//














var tableIdSeed = 1;

/* harmony default export */ var tablevue_type_script_lang_js_ = ({
  name: 'ElTable',

  mixins: [locale_default.a, migrating_default.a],

  directives: {
    Mousewheel: directives_mousewheel
  },

  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    size: String,

    width: [String, Number],

    height: [String, Number],

    maxHeight: [String, Number],

    fit: {
      type: Boolean,
      default: true
    },

    stripe: Boolean,

    border: Boolean,

    rowKey: [String, Function],

    context: {},

    showHeader: {
      type: Boolean,
      default: true
    },

    showSummary: Boolean,

    sumText: String,

    summaryMethod: Function,

    rowClassName: [String, Function],

    rowStyle: [Object, Function],

    cellClassName: [String, Function],

    cellStyle: [Object, Function],

    headerRowClassName: [String, Function],

    headerRowStyle: [Object, Function],

    headerCellClassName: [String, Function],

    headerCellStyle: [Object, Function],

    highlightCurrentRow: Boolean,

    currentRowKey: [String, Number],

    emptyText: String,

    expandRowKeys: Array,

    defaultExpandAll: Boolean,

    defaultSort: Object,

    tooltipEffect: String,

    spanMethod: Function,

    selectOnIndeterminate: {
      type: Boolean,
      default: true
    },

    indent: {
      type: Number,
      default: 16
    },

    treeProps: {
      type: Object,
      default: function _default() {
        return {
          hasChildren: 'hasChildren',
          children: 'children'
        };
      }
    },

    lazy: Boolean,

    load: Function
  },

  components: {
    TableHeader: table_header,
    TableFooter: table_footer,
    TableBody: table_body,
    ElCheckbox: checkbox_default.a
  },

  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        events: {
          expand: 'expand is renamed to expand-change'
        }
      };
    },
    setCurrentRow: function setCurrentRow(row) {
      this.store.commit('setCurrentRow', row);
    },
    toggleRowSelection: function toggleRowSelection(row, selected) {
      this.store.toggleRowSelection(row, selected, false);
      this.store.updateAllSelected();
    },
    toggleRowExpansion: function toggleRowExpansion(row, expanded) {
      this.store.toggleRowExpansionAdapter(row, expanded);
    },
    clearSelection: function clearSelection() {
      this.store.clearSelection();
    },
    clearFilter: function clearFilter(columnKeys) {
      this.store.clearFilter(columnKeys);
    },
    clearSort: function clearSort() {
      this.store.clearSort();
    },
    handleMouseLeave: function handleMouseLeave() {
      this.store.commit('setHoverRow', null);
      if (this.hoverState) this.hoverState = null;
    },
    updateScrollY: function updateScrollY() {
      var changed = this.layout.updateScrollY();
      if (changed) {
        this.layout.notifyObservers('scrollable');
        this.layout.updateColumnsWidth();
      }
    },
    handleFixedMousewheel: function handleFixedMousewheel(event, data) {
      var bodyWrapper = this.bodyWrapper;
      if (Math.abs(data.spinY) > 0) {
        var currentScrollTop = bodyWrapper.scrollTop;
        if (data.pixelY < 0 && currentScrollTop !== 0) {
          event.preventDefault();
        }
        if (data.pixelY > 0 && bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop) {
          event.preventDefault();
        }
        bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5);
      } else {
        bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5);
      }
    },
    handleHeaderFooterMousewheel: function handleHeaderFooterMousewheel(event, data) {
      var pixelX = data.pixelX,
          pixelY = data.pixelY;

      if (Math.abs(pixelX) >= Math.abs(pixelY)) {
        this.bodyWrapper.scrollLeft += data.pixelX / 5;
      }
    },


    // TODO 使用 CSS transform
    syncPostion: Object(external_throttle_debounce_["throttle"])(20, function () {
      var _bodyWrapper = this.bodyWrapper,
          scrollLeft = _bodyWrapper.scrollLeft,
          scrollTop = _bodyWrapper.scrollTop,
          offsetWidth = _bodyWrapper.offsetWidth,
          scrollWidth = _bodyWrapper.scrollWidth;
      var _$refs = this.$refs,
          headerWrapper = _$refs.headerWrapper,
          footerWrapper = _$refs.footerWrapper,
          fixedBodyWrapper = _$refs.fixedBodyWrapper,
          rightFixedBodyWrapper = _$refs.rightFixedBodyWrapper;

      if (headerWrapper) headerWrapper.scrollLeft = scrollLeft;
      if (footerWrapper) footerWrapper.scrollLeft = scrollLeft;
      if (fixedBodyWrapper) fixedBodyWrapper.scrollTop = scrollTop;
      if (rightFixedBodyWrapper) rightFixedBodyWrapper.scrollTop = scrollTop;
      var maxScrollLeftPosition = scrollWidth - offsetWidth - 1;
      if (scrollLeft >= maxScrollLeftPosition) {
        this.scrollPosition = 'right';
      } else if (scrollLeft === 0) {
        this.scrollPosition = 'left';
      } else {
        this.scrollPosition = 'middle';
      }
    }),

    bindEvents: function bindEvents() {
      this.bodyWrapper.addEventListener('scroll', this.syncPostion, { passive: true });
      if (this.fit) {
        Object(resize_event_["addResizeListener"])(this.$el, this.resizeListener);
      }
    },
    unbindEvents: function unbindEvents() {
      this.bodyWrapper.removeEventListener('scroll', this.syncPostion, { passive: true });
      if (this.fit) {
        Object(resize_event_["removeResizeListener"])(this.$el, this.resizeListener);
      }
    },
    resizeListener: function resizeListener() {
      if (!this.$ready) return;
      var shouldUpdateLayout = false;
      var el = this.$el;
      var _resizeState = this.resizeState,
          oldWidth = _resizeState.width,
          oldHeight = _resizeState.height;


      var width = el.offsetWidth;
      if (oldWidth !== width) {
        shouldUpdateLayout = true;
      }

      var height = el.offsetHeight;
      if ((this.height || this.shouldUpdateHeight) && oldHeight !== height) {
        shouldUpdateLayout = true;
      }

      if (shouldUpdateLayout) {
        this.resizeState.width = width;
        this.resizeState.height = height;
        this.doLayout();
      }
    },
    doLayout: function doLayout() {
      if (this.shouldUpdateHeight) {
        this.layout.updateElsHeight();
      }
      this.layout.updateColumnsWidth();
    },
    sort: function sort(prop, order) {
      this.store.commit('sort', { prop: prop, order: order });
    },
    toggleAllSelection: function toggleAllSelection() {
      this.store.commit('toggleAllSelection');
    }
  },

  computed: tablevue_type_script_lang_js_extends({
    tableSize: function tableSize() {
      return this.size || (this.$ELEMENT || {}).size;
    },
    bodyWrapper: function bodyWrapper() {
      return this.$refs.bodyWrapper;
    },
    shouldUpdateHeight: function shouldUpdateHeight() {
      return this.height || this.maxHeight || this.fixedColumns.length > 0 || this.rightFixedColumns.length > 0;
    },
    bodyWidth: function bodyWidth() {
      var _layout = this.layout,
          bodyWidth = _layout.bodyWidth,
          scrollY = _layout.scrollY,
          gutterWidth = _layout.gutterWidth;

      return bodyWidth ? bodyWidth - (scrollY ? gutterWidth : 0) + 'px' : '';
    },
    bodyHeight: function bodyHeight() {
      var _layout2 = this.layout,
          _layout2$headerHeight = _layout2.headerHeight,
          headerHeight = _layout2$headerHeight === undefined ? 0 : _layout2$headerHeight,
          bodyHeight = _layout2.bodyHeight,
          _layout2$footerHeight = _layout2.footerHeight,
          footerHeight = _layout2$footerHeight === undefined ? 0 : _layout2$footerHeight;

      if (this.height) {
        return {
          height: bodyHeight ? bodyHeight + 'px' : ''
        };
      } else if (this.maxHeight) {
        var maxHeight = parseHeight(this.maxHeight);
        if (typeof maxHeight === 'number') {
          return {
            'max-height': maxHeight - footerHeight - (this.showHeader ? headerHeight : 0) + 'px'
          };
        }
      }
      return {};
    },
    fixedBodyHeight: function fixedBodyHeight() {
      if (this.height) {
        return {
          height: this.layout.fixedBodyHeight ? this.layout.fixedBodyHeight + 'px' : ''
        };
      } else if (this.maxHeight) {
        var maxHeight = parseHeight(this.maxHeight);
        if (typeof maxHeight === 'number') {
          maxHeight = this.layout.scrollX ? maxHeight - this.layout.gutterWidth : maxHeight;
          if (this.showHeader) {
            maxHeight -= this.layout.headerHeight;
          }
          maxHeight -= this.layout.footerHeight;
          return {
            'max-height': maxHeight + 'px'
          };
        }
      }
      return {};
    },
    fixedHeight: function fixedHeight() {
      if (this.maxHeight) {
        if (this.showSummary) {
          return {
            bottom: 0
          };
        }
        return {
          bottom: this.layout.scrollX && this.data.length ? this.layout.gutterWidth + 'px' : ''
        };
      } else {
        if (this.showSummary) {
          return {
            height: this.layout.tableHeight ? this.layout.tableHeight + 'px' : ''
          };
        }
        return {
          height: this.layout.viewportHeight ? this.layout.viewportHeight + 'px' : ''
        };
      }
    },
    emptyBlockStyle: function emptyBlockStyle() {
      if (this.data && this.data.length) return null;
      var height = '100%';
      if (this.layout.appendHeight) {
        height = 'calc(100% - ' + this.layout.appendHeight + 'px)';
      }
      return {
        width: this.bodyWidth,
        height: height
      };
    }
  }, mapStates({
    selection: 'selection',
    columns: 'columns',
    tableData: 'data',
    fixedColumns: 'fixedColumns',
    rightFixedColumns: 'rightFixedColumns'
  })),

  watch: {
    height: {
      immediate: true,
      handler: function handler(value) {
        this.layout.setHeight(value);
      }
    },

    maxHeight: {
      immediate: true,
      handler: function handler(value) {
        this.layout.setMaxHeight(value);
      }
    },

    currentRowKey: {
      immediate: true,
      handler: function handler(value) {
        if (!this.rowKey) return;
        this.store.setCurrentRowKey(value);
      }
    },

    data: {
      immediate: true,
      handler: function handler(value) {
        this.store.commit('setData', value);
      }
    },

    expandRowKeys: {
      immediate: true,
      handler: function handler(newVal) {
        if (newVal) {
          this.store.setExpandRowKeysAdapter(newVal);
        }
      }
    }
  },

  created: function created() {
    var _this = this;

    this.tableId = 'el-table_' + tableIdSeed++;
    this.debouncedUpdateLayout = Object(external_throttle_debounce_["debounce"])(50, function () {
      return _this.doLayout();
    });
  },
  mounted: function mounted() {
    var _this2 = this;

    this.bindEvents();
    this.store.updateColumns();
    this.doLayout();

    this.resizeState = {
      width: this.$el.offsetWidth,
      height: this.$el.offsetHeight
    };

    // init filters
    this.store.states.columns.forEach(function (column) {
      if (column.filteredValue && column.filteredValue.length) {
        _this2.store.commit('filterChange', {
          column: column,
          values: column.filteredValue,
          silent: true
        });
      }
    });

    this.$ready = true;
  },
  destroyed: function destroyed() {
    this.unbindEvents();
  },
  data: function data() {
    var _treeProps = this.treeProps,
        _treeProps$hasChildre = _treeProps.hasChildren,
        hasChildren = _treeProps$hasChildre === undefined ? 'hasChildren' : _treeProps$hasChildre,
        _treeProps$children = _treeProps.children,
        children = _treeProps$children === undefined ? 'children' : _treeProps$children;

    this.store = createStore(this, {
      rowKey: this.rowKey,
      defaultExpandAll: this.defaultExpandAll,
      selectOnIndeterminate: this.selectOnIndeterminate,
      // TreeTable 的相关配置
      indent: this.indent,
      lazy: this.lazy,
      lazyColumnIdentifier: hasChildren,
      childrenColumnName: children
    });
    var layout = new table_layout({
      store: this.store,
      table: this,
      fit: this.fit,
      showHeader: this.showHeader
    });
    return {
      layout: layout,
      isHidden: false,
      renderExpanded: null,
      resizeProxyVisible: false,
      resizeState: {
        width: null,
        height: null
      },
      // 是否拥有多级表头
      isGroup: false,
      scrollPosition: 'left'
    };
  }
});
// CONCATENATED MODULE: ./packages/table/src/table.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tablevue_type_script_lang_js_ = (tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/table/src/table.vue





/* normalize component */

var table_component = normalizeComponent(
  src_tablevue_type_script_lang_js_,
  tablevue_type_template_id_493fe34e_render,
  tablevue_type_template_id_493fe34e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var table_api; }
table_component.options.__file = "packages/table/src/table.vue"
/* harmony default export */ var src_table = (table_component.exports);
// CONCATENATED MODULE: ./packages/table/index.js


/* istanbul ignore next */
src_table.install = function (Vue) {
  Vue.component(src_table.name, src_table);
};

/* harmony default export */ var packages_table = (src_table);
// CONCATENATED MODULE: ./packages/table/src/config.js


var cellStarts = {
  default: {
    order: ''
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: '',
    className: 'el-table-column--selection'
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ''
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ''
  }
};

// 这些选项不应该被覆盖
var cellForced = {
  selection: {
    renderHeader: function renderHeader(h, _ref) {
      var store = _ref.store;

      return h('el-checkbox', {
        attrs: {
          disabled: store.states.data && store.states.data.length === 0,
          indeterminate: store.states.selection.length > 0 && !this.isAllSelected,

          value: this.isAllSelected },
        nativeOn: {
          'click': this.toggleAllSelection
        }
      });
    },
    renderCell: function renderCell(h, _ref2) {
      var row = _ref2.row,
          column = _ref2.column,
          store = _ref2.store,
          $index = _ref2.$index;

      return h('el-checkbox', {
        nativeOn: {
          'click': function click(event) {
            return event.stopPropagation();
          }
        },
        attrs: {
          value: store.isSelected(row),
          disabled: column.selectable ? !column.selectable.call(null, row, $index) : false
        },
        on: {
          'input': function input() {
            store.commit('rowSelectedChanged', row);
          }
        }
      });
    },
    sortable: false,
    resizable: false
  },
  index: {
    renderHeader: function renderHeader(h, _ref3) {
      var column = _ref3.column;

      return column.label || '#';
    },
    renderCell: function renderCell(h, _ref4) {
      var $index = _ref4.$index,
          column = _ref4.column;

      var i = $index + 1;
      var index = column.index;

      if (typeof index === 'number') {
        i = $index + index;
      } else if (typeof index === 'function') {
        i = index($index);
      }

      return h('div', [i]);
    },
    sortable: false
  },
  expand: {
    renderHeader: function renderHeader(h, _ref5) {
      var column = _ref5.column;

      return column.label || '';
    },
    renderCell: function renderCell(h, _ref6) {
      var row = _ref6.row,
          store = _ref6.store;

      var classes = ['el-table__expand-icon'];
      if (store.states.expandRows.indexOf(row) > -1) {
        classes.push('el-table__expand-icon--expanded');
      }
      var callback = function callback(e) {
        e.stopPropagation();
        store.toggleRowExpansion(row);
      };
      return h(
        'div',
        { 'class': classes,
          on: {
            'click': callback
          }
        },
        [h('i', { 'class': 'el-icon el-icon-arrow-right' })]
      );
    },
    sortable: false,
    resizable: false,
    className: 'el-table__expand-column'
  }
};

function defaultRenderCell(h, _ref7) {
  var row = _ref7.row,
      column = _ref7.column,
      $index = _ref7.$index;

  var property = column.property;
  var value = property && Object(util_["getPropByPath"])(row, property).v;
  if (column && column.formatter) {
    return column.formatter(row, column, value, $index);
  }
  return value;
}

function treeCellPrefix(h, _ref8) {
  var row = _ref8.row,
      treeNode = _ref8.treeNode,
      store = _ref8.store;

  if (!treeNode) return null;
  var ele = [];
  var callback = function callback(e) {
    e.stopPropagation();
    store.loadOrToggle(row);
  };
  if (treeNode.indent) {
    ele.push(h('span', { 'class': 'el-table__indent', style: { 'padding-left': treeNode.indent + 'px' } }));
  }
  if (typeof treeNode.expanded === 'boolean' && !treeNode.noLazyChildren) {
    var expandClasses = ['el-table__expand-icon', treeNode.expanded ? 'el-table__expand-icon--expanded' : ''];
    var iconClasses = ['el-icon-arrow-right'];
    if (treeNode.loading) {
      iconClasses = ['el-icon-loading'];
    }
    ele.push(h(
      'div',
      { 'class': expandClasses,
        on: {
          'click': callback
        }
      },
      [h('i', { 'class': iconClasses })]
    ));
  } else {
    ele.push(h('span', { 'class': 'el-table__placeholder' }));
  }
  return ele;
}
// CONCATENATED MODULE: ./packages/table/src/table-column.js
var table_column_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var columnIdSeed = 1;

/* harmony default export */ var table_column = ({
  name: 'ElTableColumn',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    label: String,
    className: String,
    labelClassName: String,
    property: String,
    prop: String,
    width: {},
    minWidth: {},
    renderHeader: Function,
    sortable: {
      type: [Boolean, String],
      default: false
    },
    sortMethod: Function,
    sortBy: [String, Function, Array],
    resizable: {
      type: Boolean,
      default: true
    },
    columnKey: String,
    align: String,
    headerAlign: String,
    showTooltipWhenOverflow: Boolean,
    showOverflowTooltip: Boolean,
    fixed: [Boolean, String],
    formatter: Function,
    selectable: Function,
    reserveSelection: Boolean,
    filterMethod: Function,
    filteredValue: Array,
    filters: Array,
    filterPlacement: String,
    filterMultiple: {
      type: Boolean,
      default: true
    },
    index: [Number, Function],
    sortOrders: {
      type: Array,
      default: function _default() {
        return ['ascending', 'descending', null];
      },
      validator: function validator(val) {
        return val.every(function (order) {
          return ['ascending', 'descending', null].indexOf(order) > -1;
        });
      }
    }
  },

  data: function data() {
    return {
      isSubColumn: false,
      columns: []
    };
  },


  computed: {
    owner: function owner() {
      var parent = this.$parent;
      while (parent && !parent.tableId) {
        parent = parent.$parent;
      }
      return parent;
    },
    columnOrTableParent: function columnOrTableParent() {
      var parent = this.$parent;
      while (parent && !parent.tableId && !parent.columnId) {
        parent = parent.$parent;
      }
      return parent;
    },
    realWidth: function realWidth() {
      return parseWidth(this.width);
    },
    realMinWidth: function realMinWidth() {
      return parseMinWidth(this.minWidth);
    },
    realAlign: function realAlign() {
      return this.align ? 'is-' + this.align : null;
    },
    realHeaderAlign: function realHeaderAlign() {
      return this.headerAlign ? 'is-' + this.headerAlign : this.realAlign;
    }
  },

  methods: {
    getPropsData: function getPropsData() {
      var _this = this;

      for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
        props[_key] = arguments[_key];
      }

      return props.reduce(function (prev, cur) {
        if (Array.isArray(cur)) {
          cur.forEach(function (key) {
            prev[key] = _this[key];
          });
        }
        return prev;
      }, {});
    },
    getColumnElIndex: function getColumnElIndex(children, child) {
      return [].indexOf.call(children, child);
    },
    setColumnWidth: function setColumnWidth(column) {
      if (this.realWidth) {
        column.width = this.realWidth;
      }
      if (this.realMinWidth) {
        column.minWidth = this.realMinWidth;
      }
      if (!column.minWidth) {
        column.minWidth = 80;
      }
      column.realWidth = column.width === undefined ? column.minWidth : column.width;
      return column;
    },
    setColumnForcedProps: function setColumnForcedProps(column) {
      // 对于特定类型的 column，某些属性不允许设置
      var type = column.type;
      var source = cellForced[type] || {};
      Object.keys(source).forEach(function (prop) {
        var value = source[prop];
        if (value !== undefined) {
          column[prop] = prop === 'className' ? column[prop] + ' ' + value : value;
        }
      });
      return column;
    },
    setColumnRenders: function setColumnRenders(column) {
      var _this2 = this;

      var h = this.$createElement;

      // renderHeader 属性不推荐使用。
      if (this.renderHeader) {
        console.warn('[Element Warn][TableColumn]Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.');
      } else if (column.type !== 'selection') {
        column.renderHeader = function (h, scope) {
          var renderHeader = _this2.$scopedSlots.header;
          return renderHeader ? renderHeader(scope) : column.label;
        };
      }

      var originRenderCell = column.renderCell;
      // TODO: 这里的实现调整
      if (column.type === 'expand') {
        // 对于展开行，renderCell 不允许配置的。在上一步中已经设置过，这里需要简单封装一下。
        column.renderCell = function (h, data) {
          return h(
            'div',
            { 'class': 'cell' },
            [originRenderCell(h, data)]
          );
        };
        this.owner.renderExpanded = function (h, data) {
          return _this2.$scopedSlots.default ? _this2.$scopedSlots.default(data) : _this2.$slots.default;
        };
      } else {
        originRenderCell = originRenderCell || defaultRenderCell;
        // 对 renderCell 进行包装
        column.renderCell = function (h, data) {
          var children = null;
          if (_this2.$scopedSlots.default) {
            children = _this2.$scopedSlots.default(data);
          } else {
            children = originRenderCell(h, data);
          }
          var prefix = treeCellPrefix(h, data);
          var props = {
            class: 'cell',
            style: {}
          };
          if (column.showOverflowTooltip) {
            props.class += ' el-tooltip';
            props.style = { width: (data.column.realWidth || data.column.width) - 1 + 'px' };
          }
          return h(
            'div',
            props,
            [prefix, children]
          );
        };
      }
      return column;
    },
    registerNormalWatchers: function registerNormalWatchers() {
      var _this3 = this;

      var props = ['label', 'property', 'filters', 'filterMultiple', 'sortable', 'index', 'formatter', 'className', 'labelClassName', 'showOverflowTooltip'];
      // 一些属性具有别名
      var aliases = {
        prop: 'property',
        realAlign: 'align',
        realHeaderAlign: 'headerAlign',
        realWidth: 'width'
      };
      var allAliases = props.reduce(function (prev, cur) {
        prev[cur] = cur;
        return prev;
      }, aliases);

      Object.keys(allAliases).forEach(function (key) {
        var columnKey = aliases[key];

        _this3.$watch(key, function (newVal) {
          _this3.columnConfig[columnKey] = newVal;
        });
      });
    },
    registerComplexWatchers: function registerComplexWatchers() {
      var _this4 = this;

      var props = ['fixed'];
      var aliases = {
        realWidth: 'width',
        realMinWidth: 'minWidth'
      };
      var allAliases = props.reduce(function (prev, cur) {
        prev[cur] = cur;
        return prev;
      }, aliases);

      Object.keys(allAliases).forEach(function (key) {
        var columnKey = aliases[key];

        _this4.$watch(key, function (newVal) {
          _this4.columnConfig[columnKey] = newVal;
          var updateColumns = columnKey === 'fixed';
          _this4.owner.store.scheduleLayout(updateColumns);
        });
      });
    }
  },

  components: {
    ElCheckbox: checkbox_default.a
  },

  beforeCreate: function beforeCreate() {
    this.row = {};
    this.column = {};
    this.$index = 0;
    this.columnId = '';
  },
  created: function created() {
    var parent = this.columnOrTableParent;
    this.isSubColumn = this.owner !== parent;
    this.columnId = (parent.tableId || parent.columnId) + '_column_' + columnIdSeed++;

    var type = this.type || 'default';
    var sortable = this.sortable === '' ? true : this.sortable;
    var defaults = table_column_extends({}, cellStarts[type], {
      id: this.columnId,
      type: type,
      property: this.prop || this.property,
      align: this.realAlign,
      headerAlign: this.realHeaderAlign,
      showOverflowTooltip: this.showOverflowTooltip || this.showTooltipWhenOverflow,
      // filter 相关属性
      filterable: this.filters || this.filterMethod,
      filteredValue: [],
      filterPlacement: '',
      isColumnGroup: false,
      filterOpened: false,
      // sort 相关属性
      sortable: sortable,
      // index 列
      index: this.index
    });

    var basicProps = ['columnKey', 'label', 'className', 'labelClassName', 'type', 'renderHeader', 'formatter', 'fixed', 'resizable'];
    var sortProps = ['sortMethod', 'sortBy', 'sortOrders'];
    var selectProps = ['selectable', 'reserveSelection'];
    var filterProps = ['filterMethod', 'filters', 'filterMultiple', 'filterOpened', 'filteredValue', 'filterPlacement'];

    var column = this.getPropsData(basicProps, sortProps, selectProps, filterProps);
    column = mergeOptions(defaults, column);

    // 注意 compose 中函数执行的顺序是从右到左
    var chains = compose(this.setColumnRenders, this.setColumnWidth, this.setColumnForcedProps);
    column = chains(column);

    this.columnConfig = column;

    // 注册 watcher
    this.registerNormalWatchers();
    this.registerComplexWatchers();
  },
  mounted: function mounted() {
    var owner = this.owner;
    var parent = this.columnOrTableParent;
    var children = this.isSubColumn ? parent.$el.children : parent.$refs.hiddenColumns.children;
    var columnIndex = this.getColumnElIndex(children, this.$el);

    owner.store.commit('insertColumn', this.columnConfig, columnIndex, this.isSubColumn ? parent.columnConfig : null);
  },
  destroyed: function destroyed() {
    if (!this.$parent) return;
    var parent = this.$parent;
    this.owner.store.commit('removeColumn', this.columnConfig, this.isSubColumn ? parent.columnConfig : null);
  },
  render: function render(h) {
    // slots 也要渲染，需要计算合并表头
    return h('div', this.$slots.default);
  }
});
// CONCATENATED MODULE: ./packages/table-column/index.js


/* istanbul ignore next */
table_column.install = function (Vue) {
  Vue.component(table_column.name, table_column);
};

/* harmony default export */ var packages_table_column = (table_column);
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/tag/src/tag.vue?vue&type=script&lang=js&

/* harmony default export */ var tagvue_type_script_lang_js_ = ({
  name: 'ElTag',
  props: {
    text: String,
    closable: Boolean,
    type: String,
    hit: Boolean,
    disableTransitions: Boolean,
    color: String,
    size: String,
    effect: {
      type: String,
      default: 'light',
      validator: function validator(val) {
        return ['dark', 'light', 'plain'].indexOf(val) !== -1;
      }
    }
  },
  methods: {
    handleClose: function handleClose(event) {
      event.stopPropagation();
      this.$emit('close', event);
    },
    handleClick: function handleClick(event) {
      this.$emit('click', event);
    }
  },
  computed: {
    tagSize: function tagSize() {
      return this.size || (this.$ELEMENT || {}).size;
    }
  },
  render: function render(h) {
    var type = this.type,
        tagSize = this.tagSize,
        hit = this.hit,
        effect = this.effect;

    var classes = ['el-tag', type ? 'el-tag--' + type : '', tagSize ? 'el-tag--' + tagSize : '', effect ? 'el-tag--' + effect : '', hit && 'is-hit'];
    var tagEl = h(
      'span',
      {
        'class': classes,
        style: { backgroundColor: this.color },
        on: {
          'click': this.handleClick
        }
      },
      [this.$slots.default, this.closable && h('i', { 'class': 'el-tag__close el-icon-close', on: {
          'click': this.handleClose
        }
      })]
    );

    return this.disableTransitions ? tagEl : h(
      'transition',
      {
        attrs: { name: 'el-zoom-in-center' }
      },
      [tagEl]
    );
  }
});
// CONCATENATED MODULE: ./packages/tag/src/tag.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tagvue_type_script_lang_js_ = (tagvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/tag/src/tag.vue
var tag_render, tag_staticRenderFns




/* normalize component */

var tag_component = normalizeComponent(
  src_tagvue_type_script_lang_js_,
  tag_render,
  tag_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var tag_api; }
tag_component.options.__file = "packages/tag/src/tag.vue"
/* harmony default export */ var tag = (tag_component.exports);
// CONCATENATED MODULE: ./packages/tag/index.js


/* istanbul ignore next */
tag.install = function (Vue) {
  Vue.component(tag.name, tag);
};

/* harmony default export */ var packages_tag = (tag);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/tree/src/tree.vue?vue&type=template&id=547575a6&
var treevue_type_template_id_547575a6_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "el-tree",
      class: {
        "el-tree--highlight-current": _vm.highlightCurrent,
        "is-dragging": !!_vm.dragState.draggingNode,
        "is-drop-not-allow": !_vm.dragState.allowDrop,
        "is-drop-inner": _vm.dragState.dropType === "inner"
      },
      attrs: { role: "tree" }
    },
    [
      _vm._l(_vm.root.childNodes, function(child) {
        return _c("el-tree-node", {
          key: _vm.getNodeKey(child),
          attrs: {
            node: child,
            props: _vm.props,
            "render-after-expand": _vm.renderAfterExpand,
            "show-checkbox": _vm.showCheckbox,
            "render-content": _vm.renderContent
          },
          on: { "node-expand": _vm.handleNodeExpand }
        })
      }),
      _vm.isEmpty
        ? _c("div", { staticClass: "el-tree__empty-block" }, [
            _c("span", { staticClass: "el-tree__empty-text" }, [
              _vm._v(_vm._s(_vm.emptyText))
            ])
          ])
        : _vm._e(),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.dragState.showDropIndicator,
            expression: "dragState.showDropIndicator"
          }
        ],
        ref: "dropIndicator",
        staticClass: "el-tree__drop-indicator"
      })
    ],
    2
  )
}
var treevue_type_template_id_547575a6_staticRenderFns = []
treevue_type_template_id_547575a6_render._withStripped = true


// CONCATENATED MODULE: ./packages/tree/src/tree.vue?vue&type=template&id=547575a6&

// CONCATENATED MODULE: ./packages/tree/src/model/util.js
var NODE_KEY = '$treeNodeId';

var markNodeData = function markNodeData(node, data) {
  if (!data || data[NODE_KEY]) return;
  Object.defineProperty(data, NODE_KEY, {
    value: node.id,
    enumerable: false,
    configurable: false,
    writable: false
  });
};

var util_getNodeKey = function getNodeKey(key, data) {
  if (!key) return data[NODE_KEY];
  return data[key];
};

var findNearestComponent = function findNearestComponent(element, componentName) {
  var target = element;
  while (target && target.tagName !== 'BODY') {
    if (target.__vue__ && target.__vue__.$options.name === componentName) {
      return target.__vue__;
    }
    target = target.parentNode;
  }
  return null;
};
// CONCATENATED MODULE: ./packages/tree/src/model/node.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function node_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var getChildState = function getChildState(node) {
  var all = true;
  var none = true;
  var allWithoutDisable = true;
  for (var i = 0, j = node.length; i < j; i++) {
    var n = node[i];
    if (n.checked !== true || n.indeterminate) {
      all = false;
      if (!n.disabled) {
        allWithoutDisable = false;
      }
    }
    if (n.checked !== false || n.indeterminate) {
      none = false;
    }
  }

  return { all: all, none: none, allWithoutDisable: allWithoutDisable, half: !all && !none };
};

var reInitChecked = function reInitChecked(node) {
  if (node.childNodes.length === 0) return;

  var _getChildState = getChildState(node.childNodes),
      all = _getChildState.all,
      none = _getChildState.none,
      half = _getChildState.half;

  if (all) {
    node.checked = true;
    node.indeterminate = false;
  } else if (half) {
    node.checked = false;
    node.indeterminate = true;
  } else if (none) {
    node.checked = false;
    node.indeterminate = false;
  }

  var parent = node.parent;
  if (!parent || parent.level === 0) return;

  if (!node.store.checkStrictly) {
    reInitChecked(parent);
  }
};

var getPropertyFromData = function getPropertyFromData(node, prop) {
  var props = node.store.props;
  var data = node.data || {};
  var config = props[prop];

  if (typeof config === 'function') {
    return config(data, node);
  } else if (typeof config === 'string') {
    return data[config];
  } else if (typeof config === 'undefined') {
    var dataProp = data[prop];
    return dataProp === undefined ? '' : dataProp;
  }
};

var nodeIdSeed = 0;

var node_Node = function () {
  function Node(options) {
    node_classCallCheck(this, Node);

    this.id = nodeIdSeed++;
    this.text = null;
    this.checked = false;
    this.indeterminate = false;
    this.data = null;
    this.expanded = false;
    this.parent = null;
    this.visible = true;
    this.isCurrent = false;

    for (var name in options) {
      if (options.hasOwnProperty(name)) {
        this[name] = options[name];
      }
    }

    // internal
    this.level = 0;
    this.loaded = false;
    this.childNodes = [];
    this.loading = false;

    if (this.parent) {
      this.level = this.parent.level + 1;
    }

    var store = this.store;
    if (!store) {
      throw new Error('[Node]store is required!');
    }
    store.registerNode(this);

    var props = store.props;
    if (props && typeof props.isLeaf !== 'undefined') {
      var isLeaf = getPropertyFromData(this, 'isLeaf');
      if (typeof isLeaf === 'boolean') {
        this.isLeafByUser = isLeaf;
      }
    }

    if (store.lazy !== true && this.data) {
      this.setData(this.data);

      if (store.defaultExpandAll) {
        this.expanded = true;
      }
    } else if (this.level > 0 && store.lazy && store.defaultExpandAll) {
      this.expand();
    }
    if (!Array.isArray(this.data)) {
      markNodeData(this, this.data);
    }
    if (!this.data) return;
    var defaultExpandedKeys = store.defaultExpandedKeys;
    var key = store.key;
    if (key && defaultExpandedKeys && defaultExpandedKeys.indexOf(this.key) !== -1) {
      this.expand(null, store.autoExpandParent);
    }

    if (key && store.currentNodeKey !== undefined && this.key === store.currentNodeKey) {
      store.currentNode = this;
      store.currentNode.isCurrent = true;
    }

    if (store.lazy) {
      store._initDefaultCheckedNode(this);
    }

    this.updateLeafState();
  }

  Node.prototype.setData = function setData(data) {
    if (!Array.isArray(data)) {
      markNodeData(this, data);
    }

    this.data = data;
    this.childNodes = [];

    var children = void 0;
    if (this.level === 0 && this.data instanceof Array) {
      children = this.data;
    } else {
      children = getPropertyFromData(this, 'children') || [];
    }

    for (var i = 0, j = children.length; i < j; i++) {
      this.insertChild({ data: children[i] });
    }
  };

  Node.prototype.contains = function contains(target) {
    var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var walk = function walk(parent) {
      var children = parent.childNodes || [];
      var result = false;
      for (var i = 0, j = children.length; i < j; i++) {
        var child = children[i];
        if (child === target || deep && walk(child)) {
          result = true;
          break;
        }
      }
      return result;
    };

    return walk(this);
  };

  Node.prototype.remove = function remove() {
    var parent = this.parent;
    if (parent) {
      parent.removeChild(this);
    }
  };

  Node.prototype.insertChild = function insertChild(child, index, batch) {
    if (!child) throw new Error('insertChild error: child is required.');

    if (!(child instanceof Node)) {
      if (!batch) {
        var children = this.getChildren(true);
        if (children.indexOf(child.data) === -1) {
          if (typeof index === 'undefined' || index < 0) {
            children.push(child.data);
          } else {
            children.splice(index, 0, child.data);
          }
        }
      }
      merge_default()(child, {
        parent: this,
        store: this.store
      });
      child = new Node(child);
    }

    child.level = this.level + 1;

    if (typeof index === 'undefined' || index < 0) {
      this.childNodes.push(child);
    } else {
      this.childNodes.splice(index, 0, child);
    }

    this.updateLeafState();
  };

  Node.prototype.insertBefore = function insertBefore(child, ref) {
    var index = void 0;
    if (ref) {
      index = this.childNodes.indexOf(ref);
    }
    this.insertChild(child, index);
  };

  Node.prototype.insertAfter = function insertAfter(child, ref) {
    var index = void 0;
    if (ref) {
      index = this.childNodes.indexOf(ref);
      if (index !== -1) index += 1;
    }
    this.insertChild(child, index);
  };

  Node.prototype.removeChild = function removeChild(child) {
    var children = this.getChildren() || [];
    var dataIndex = children.indexOf(child.data);
    if (dataIndex > -1) {
      children.splice(dataIndex, 1);
    }

    var index = this.childNodes.indexOf(child);

    if (index > -1) {
      this.store && this.store.deregisterNode(child);
      child.parent = null;
      this.childNodes.splice(index, 1);
    }

    this.updateLeafState();
  };

  Node.prototype.removeChildByData = function removeChildByData(data) {
    var targetNode = null;

    for (var i = 0; i < this.childNodes.length; i++) {
      if (this.childNodes[i].data === data) {
        targetNode = this.childNodes[i];
        break;
      }
    }

    if (targetNode) {
      this.removeChild(targetNode);
    }
  };

  Node.prototype.expand = function expand(callback, expandParent) {
    var _this = this;

    var done = function done() {
      if (expandParent) {
        var parent = _this.parent;
        while (parent.level > 0) {
          parent.expanded = true;
          parent = parent.parent;
        }
      }
      _this.expanded = true;
      if (callback) callback();
    };

    if (this.shouldLoadData()) {
      this.loadData(function (data) {
        if (data instanceof Array) {
          if (_this.checked) {
            _this.setChecked(true, true);
          } else if (!_this.store.checkStrictly) {
            reInitChecked(_this);
          }
          done();
        }
      });
    } else {
      done();
    }
  };

  Node.prototype.doCreateChildren = function doCreateChildren(array) {
    var _this2 = this;

    var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    array.forEach(function (item) {
      _this2.insertChild(merge_default()({ data: item }, defaultProps), undefined, true);
    });
  };

  Node.prototype.collapse = function collapse() {
    this.expanded = false;
  };

  Node.prototype.shouldLoadData = function shouldLoadData() {
    return this.store.lazy === true && this.store.load && !this.loaded;
  };

  Node.prototype.updateLeafState = function updateLeafState() {
    if (this.store.lazy === true && this.loaded !== true && typeof this.isLeafByUser !== 'undefined') {
      this.isLeaf = this.isLeafByUser;
      return;
    }
    var childNodes = this.childNodes;
    if (!this.store.lazy || this.store.lazy === true && this.loaded === true) {
      this.isLeaf = !childNodes || childNodes.length === 0;
      return;
    }
    this.isLeaf = false;
  };

  Node.prototype.setChecked = function setChecked(value, deep, recursion, passValue) {
    var _this3 = this;

    this.indeterminate = value === 'half';
    this.checked = value === true;

    if (this.store.checkStrictly) return;

    if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
      var _getChildState2 = getChildState(this.childNodes),
          all = _getChildState2.all,
          allWithoutDisable = _getChildState2.allWithoutDisable;

      if (!this.isLeaf && !all && allWithoutDisable) {
        this.checked = false;
        value = false;
      }

      var handleDescendants = function handleDescendants() {
        if (deep) {
          var childNodes = _this3.childNodes;
          for (var i = 0, j = childNodes.length; i < j; i++) {
            var child = childNodes[i];
            passValue = passValue || value !== false;
            var isCheck = child.disabled ? child.checked : passValue;
            child.setChecked(isCheck, deep, true, passValue);
          }

          var _getChildState3 = getChildState(childNodes),
              half = _getChildState3.half,
              _all = _getChildState3.all;

          if (!_all) {
            _this3.checked = _all;
            _this3.indeterminate = half;
          }
        }
      };

      if (this.shouldLoadData()) {
        // Only work on lazy load data.
        this.loadData(function () {
          handleDescendants();
          reInitChecked(_this3);
        }, {
          checked: value !== false
        });
        return;
      } else {
        handleDescendants();
      }
    }

    var parent = this.parent;
    if (!parent || parent.level === 0) return;

    if (!recursion) {
      reInitChecked(parent);
    }
  };

  Node.prototype.getChildren = function getChildren() {
    var forceInit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    // this is data
    if (this.level === 0) return this.data;
    var data = this.data;
    if (!data) return null;

    var props = this.store.props;
    var children = 'children';
    if (props) {
      children = props.children || 'children';
    }

    if (data[children] === undefined) {
      data[children] = null;
    }

    if (forceInit && !data[children]) {
      data[children] = [];
    }

    return data[children];
  };

  Node.prototype.updateChildren = function updateChildren() {
    var _this4 = this;

    var newData = this.getChildren() || [];
    var oldData = this.childNodes.map(function (node) {
      return node.data;
    });

    var newDataMap = {};
    var newNodes = [];

    newData.forEach(function (item, index) {
      var key = item[NODE_KEY];
      var isNodeExists = !!key && Object(util_["arrayFindIndex"])(oldData, function (data) {
        return data[NODE_KEY] === key;
      }) >= 0;
      if (isNodeExists) {
        newDataMap[key] = { index: index, data: item };
      } else {
        newNodes.push({ index: index, data: item });
      }
    });

    if (!this.store.lazy) {
      oldData.forEach(function (item) {
        if (!newDataMap[item[NODE_KEY]]) _this4.removeChildByData(item);
      });
    }

    newNodes.forEach(function (_ref) {
      var index = _ref.index,
          data = _ref.data;

      _this4.insertChild({ data: data }, index);
    });

    this.updateLeafState();
  };

  Node.prototype.loadData = function loadData(callback) {
    var _this5 = this;

    var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (this.store.lazy === true && this.store.load && !this.loaded && (!this.loading || Object.keys(defaultProps).length)) {
      this.loading = true;

      var resolve = function resolve(children) {
        _this5.loaded = true;
        _this5.loading = false;
        _this5.childNodes = [];

        _this5.doCreateChildren(children, defaultProps);

        _this5.updateLeafState();
        if (callback) {
          callback.call(_this5, children);
        }
      };

      this.store.load(this, resolve);
    } else {
      if (callback) {
        callback.call(this);
      }
    }
  };

  _createClass(Node, [{
    key: 'label',
    get: function get() {
      return getPropertyFromData(this, 'label');
    }
  }, {
    key: 'key',
    get: function get() {
      var nodeKey = this.store.key;
      if (this.data) return this.data[nodeKey];
      return null;
    }
  }, {
    key: 'disabled',
    get: function get() {
      return getPropertyFromData(this, 'disabled');
    }
  }, {
    key: 'nextSibling',
    get: function get() {
      var parent = this.parent;
      if (parent) {
        var index = parent.childNodes.indexOf(this);
        if (index > -1) {
          return parent.childNodes[index + 1];
        }
      }
      return null;
    }
  }, {
    key: 'previousSibling',
    get: function get() {
      var parent = this.parent;
      if (parent) {
        var index = parent.childNodes.indexOf(this);
        if (index > -1) {
          return index > 0 ? parent.childNodes[index - 1] : null;
        }
      }
      return null;
    }
  }]);

  return Node;
}();

/* harmony default export */ var model_node = (node_Node);
// CONCATENATED MODULE: ./packages/tree/src/model/tree-store.js
var tree_store_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function tree_store_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var tree_store_TreeStore = function () {
  function TreeStore(options) {
    var _this = this;

    tree_store_classCallCheck(this, TreeStore);

    this.currentNode = null;
    this.currentNodeKey = null;

    for (var option in options) {
      if (options.hasOwnProperty(option)) {
        this[option] = options[option];
      }
    }

    this.nodesMap = {};

    this.root = new model_node({
      data: this.data,
      store: this
    });

    if (this.lazy && this.load) {
      var loadFn = this.load;
      loadFn(this.root, function (data) {
        _this.root.doCreateChildren(data);
        _this._initDefaultCheckedNodes();
      });
    } else {
      this._initDefaultCheckedNodes();
    }
  }

  TreeStore.prototype.filter = function filter(value) {
    var filterNodeMethod = this.filterNodeMethod;
    var lazy = this.lazy;
    var traverse = function traverse(node) {
      var childNodes = node.root ? node.root.childNodes : node.childNodes;

      childNodes.forEach(function (child) {
        child.visible = filterNodeMethod.call(child, value, child.data, child);

        traverse(child);
      });

      if (!node.visible && childNodes.length) {
        var allHidden = true;
        allHidden = !childNodes.some(function (child) {
          return child.visible;
        });

        if (node.root) {
          node.root.visible = allHidden === false;
        } else {
          node.visible = allHidden === false;
        }
      }
      if (!value) return;

      if (node.visible && !node.isLeaf && !lazy) node.expand();
    };

    traverse(this);
  };

  TreeStore.prototype.setData = function setData(newVal) {
    var instanceChanged = newVal !== this.root.data;
    if (instanceChanged) {
      this.root.setData(newVal);
      this._initDefaultCheckedNodes();
    } else {
      this.root.updateChildren();
    }
  };

  TreeStore.prototype.getNode = function getNode(data) {
    if (data instanceof model_node) return data;
    var key = (typeof data === 'undefined' ? 'undefined' : tree_store_typeof(data)) !== 'object' ? data : util_getNodeKey(this.key, data);
    return this.nodesMap[key] || null;
  };

  TreeStore.prototype.insertBefore = function insertBefore(data, refData) {
    var refNode = this.getNode(refData);
    refNode.parent.insertBefore({ data: data }, refNode);
  };

  TreeStore.prototype.insertAfter = function insertAfter(data, refData) {
    var refNode = this.getNode(refData);
    refNode.parent.insertAfter({ data: data }, refNode);
  };

  TreeStore.prototype.remove = function remove(data) {
    var node = this.getNode(data);

    if (node && node.parent) {
      if (node === this.currentNode) {
        this.currentNode = null;
      }
      node.parent.removeChild(node);
    }
  };

  TreeStore.prototype.append = function append(data, parentData) {
    var parentNode = parentData ? this.getNode(parentData) : this.root;

    if (parentNode) {
      parentNode.insertChild({ data: data });
    }
  };

  TreeStore.prototype._initDefaultCheckedNodes = function _initDefaultCheckedNodes() {
    var _this2 = this;

    var defaultCheckedKeys = this.defaultCheckedKeys || [];
    var nodesMap = this.nodesMap;

    defaultCheckedKeys.forEach(function (checkedKey) {
      var node = nodesMap[checkedKey];

      if (node) {
        node.setChecked(true, !_this2.checkStrictly);
      }
    });
  };

  TreeStore.prototype._initDefaultCheckedNode = function _initDefaultCheckedNode(node) {
    var defaultCheckedKeys = this.defaultCheckedKeys || [];

    if (defaultCheckedKeys.indexOf(node.key) !== -1) {
      node.setChecked(true, !this.checkStrictly);
    }
  };

  TreeStore.prototype.setDefaultCheckedKey = function setDefaultCheckedKey(newVal) {
    if (newVal !== this.defaultCheckedKeys) {
      this.defaultCheckedKeys = newVal;
      this._initDefaultCheckedNodes();
    }
  };

  TreeStore.prototype.registerNode = function registerNode(node) {
    var key = this.key;
    if (!key || !node || !node.data) return;

    var nodeKey = node.key;
    if (nodeKey !== undefined) this.nodesMap[node.key] = node;
  };

  TreeStore.prototype.deregisterNode = function deregisterNode(node) {
    var _this3 = this;

    var key = this.key;
    if (!key || !node || !node.data) return;

    node.childNodes.forEach(function (child) {
      _this3.deregisterNode(child);
    });

    delete this.nodesMap[node.key];
  };

  TreeStore.prototype.getCheckedNodes = function getCheckedNodes() {
    var leafOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var includeHalfChecked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var checkedNodes = [];
    var traverse = function traverse(node) {
      var childNodes = node.root ? node.root.childNodes : node.childNodes;

      childNodes.forEach(function (child) {
        if ((child.checked || includeHalfChecked && child.indeterminate) && (!leafOnly || leafOnly && child.isLeaf)) {
          checkedNodes.push(child.data);
        }

        traverse(child);
      });
    };

    traverse(this);

    return checkedNodes;
  };

  TreeStore.prototype.getCheckedKeys = function getCheckedKeys() {
    var _this4 = this;

    var leafOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return this.getCheckedNodes(leafOnly).map(function (data) {
      return (data || {})[_this4.key];
    });
  };

  TreeStore.prototype.getHalfCheckedNodes = function getHalfCheckedNodes() {
    var nodes = [];
    var traverse = function traverse(node) {
      var childNodes = node.root ? node.root.childNodes : node.childNodes;

      childNodes.forEach(function (child) {
        if (child.indeterminate) {
          nodes.push(child.data);
        }

        traverse(child);
      });
    };

    traverse(this);

    return nodes;
  };

  TreeStore.prototype.getHalfCheckedKeys = function getHalfCheckedKeys() {
    var _this5 = this;

    return this.getHalfCheckedNodes().map(function (data) {
      return (data || {})[_this5.key];
    });
  };

  TreeStore.prototype._getAllNodes = function _getAllNodes() {
    var allNodes = [];
    var nodesMap = this.nodesMap;
    for (var nodeKey in nodesMap) {
      if (nodesMap.hasOwnProperty(nodeKey)) {
        allNodes.push(nodesMap[nodeKey]);
      }
    }

    return allNodes;
  };

  TreeStore.prototype.updateChildren = function updateChildren(key, data) {
    var node = this.nodesMap[key];
    if (!node) return;
    var childNodes = node.childNodes;
    for (var i = childNodes.length - 1; i >= 0; i--) {
      var child = childNodes[i];
      this.remove(child.data);
    }
    for (var _i = 0, j = data.length; _i < j; _i++) {
      var _child = data[_i];
      this.append(_child, node.data);
    }
  };

  TreeStore.prototype._setCheckedKeys = function _setCheckedKeys(key) {
    var leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var checkedKeys = arguments[2];

    var allNodes = this._getAllNodes().sort(function (a, b) {
      return b.level - a.level;
    });
    var cache = Object.create(null);
    var keys = Object.keys(checkedKeys);
    allNodes.forEach(function (node) {
      return node.setChecked(false, false);
    });
    for (var i = 0, j = allNodes.length; i < j; i++) {
      var node = allNodes[i];
      var nodeKey = node.data[key].toString();
      var checked = keys.indexOf(nodeKey) > -1;
      if (!checked) {
        if (node.checked && !cache[nodeKey]) {
          node.setChecked(false, false);
        }
        continue;
      }

      var parent = node.parent;
      while (parent && parent.level > 0) {
        cache[parent.data[key]] = true;
        parent = parent.parent;
      }

      if (node.isLeaf || this.checkStrictly) {
        node.setChecked(true, false);
        continue;
      }
      node.setChecked(true, true);

      if (leafOnly) {
        (function () {
          node.setChecked(false, false);
          var traverse = function traverse(node) {
            var childNodes = node.childNodes;
            childNodes.forEach(function (child) {
              if (!child.isLeaf) {
                child.setChecked(false, false);
              }
              traverse(child);
            });
          };
          traverse(node);
        })();
      }
    }
  };

  TreeStore.prototype.setCheckedNodes = function setCheckedNodes(array) {
    var leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var key = this.key;
    var checkedKeys = {};
    array.forEach(function (item) {
      checkedKeys[(item || {})[key]] = true;
    });

    this._setCheckedKeys(key, leafOnly, checkedKeys);
  };

  TreeStore.prototype.setCheckedKeys = function setCheckedKeys(keys) {
    var leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    this.defaultCheckedKeys = keys;
    var key = this.key;
    var checkedKeys = {};
    keys.forEach(function (key) {
      checkedKeys[key] = true;
    });

    this._setCheckedKeys(key, leafOnly, checkedKeys);
  };

  TreeStore.prototype.setDefaultExpandedKeys = function setDefaultExpandedKeys(keys) {
    var _this6 = this;

    keys = keys || [];
    this.defaultExpandedKeys = keys;

    keys.forEach(function (key) {
      var node = _this6.getNode(key);
      if (node) node.expand(null, _this6.autoExpandParent);
    });
  };

  TreeStore.prototype.setChecked = function setChecked(data, checked, deep) {
    var node = this.getNode(data);

    if (node) {
      node.setChecked(!!checked, deep);
    }
  };

  TreeStore.prototype.getCurrentNode = function getCurrentNode() {
    return this.currentNode;
  };

  TreeStore.prototype.setCurrentNode = function setCurrentNode(currentNode) {
    var prevCurrentNode = this.currentNode;
    if (prevCurrentNode) {
      prevCurrentNode.isCurrent = false;
    }
    this.currentNode = currentNode;
    this.currentNode.isCurrent = true;
  };

  TreeStore.prototype.setUserCurrentNode = function setUserCurrentNode(node) {
    var key = node[this.key];
    var currNode = this.nodesMap[key];
    this.setCurrentNode(currNode);
  };

  TreeStore.prototype.setCurrentNodeKey = function setCurrentNodeKey(key) {
    if (key === null || key === undefined) {
      this.currentNode && (this.currentNode.isCurrent = false);
      this.currentNode = null;
      return;
    }
    var node = this.getNode(key);
    if (node) {
      this.setCurrentNode(node);
    }
  };

  return TreeStore;
}();

/* harmony default export */ var tree_store = (tree_store_TreeStore);
;
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/tree/src/tree-node.vue?vue&type=template&id=3ba3ef0e&
var tree_nodevue_type_template_id_3ba3ef0e_render = function() {
  var this$1 = this
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.node.visible,
          expression: "node.visible"
        }
      ],
      ref: "node",
      staticClass: "el-tree-node",
      class: {
        "is-expanded": _vm.expanded,
        "is-current": _vm.node.isCurrent,
        "is-hidden": !_vm.node.visible,
        "is-focusable": !_vm.node.disabled,
        "is-checked": !_vm.node.disabled && _vm.node.checked
      },
      attrs: {
        role: "treeitem",
        tabindex: "-1",
        "aria-expanded": _vm.expanded,
        "aria-disabled": _vm.node.disabled,
        "aria-checked": _vm.node.checked,
        draggable: _vm.tree.draggable
      },
      on: {
        click: function($event) {
          $event.stopPropagation()
          return _vm.handleClick($event)
        },
        contextmenu: function($event) {
          return this$1.handleContextMenu($event)
        },
        dragstart: function($event) {
          $event.stopPropagation()
          return _vm.handleDragStart($event)
        },
        dragover: function($event) {
          $event.stopPropagation()
          return _vm.handleDragOver($event)
        },
        dragend: function($event) {
          $event.stopPropagation()
          return _vm.handleDragEnd($event)
        },
        drop: function($event) {
          $event.stopPropagation()
          return _vm.handleDrop($event)
        }
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "el-tree-node__content",
          style: {
            "padding-left": (_vm.node.level - 1) * _vm.tree.indent + "px"
          }
        },
        [
          _c("span", {
            class: [
              {
                "is-leaf": _vm.node.isLeaf,
                expanded: !_vm.node.isLeaf && _vm.expanded
              },
              "el-tree-node__expand-icon",
              _vm.tree.iconClass ? _vm.tree.iconClass : "el-icon-caret-right"
            ],
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.handleExpandIconClick($event)
              }
            }
          }),
          _vm.showCheckbox
            ? _c("el-checkbox", {
                attrs: {
                  indeterminate: _vm.node.indeterminate,
                  disabled: !!_vm.node.disabled
                },
                on: { change: _vm.handleCheckChange },
                nativeOn: {
                  click: function($event) {
                    $event.stopPropagation()
                  }
                },
                model: {
                  value: _vm.node.checked,
                  callback: function($$v) {
                    _vm.$set(_vm.node, "checked", $$v)
                  },
                  expression: "node.checked"
                }
              })
            : _vm._e(),
          _vm.node.loading
            ? _c("span", {
                staticClass: "el-tree-node__loading-icon el-icon-loading"
              })
            : _vm._e(),
          _c("node-content", { attrs: { node: _vm.node } })
        ],
        1
      ),
      _c("el-collapse-transition", [
        !_vm.renderAfterExpand || _vm.childNodeRendered
          ? _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.expanded,
                    expression: "expanded"
                  }
                ],
                staticClass: "el-tree-node__children",
                attrs: { role: "group", "aria-expanded": _vm.expanded }
              },
              _vm._l(_vm.node.childNodes, function(child) {
                return _c("el-tree-node", {
                  key: _vm.getNodeKey(child),
                  attrs: {
                    "render-content": _vm.renderContent,
                    "render-after-expand": _vm.renderAfterExpand,
                    "show-checkbox": _vm.showCheckbox,
                    node: child
                  },
                  on: { "node-expand": _vm.handleChildNodeExpand }
                })
              }),
              1
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var tree_nodevue_type_template_id_3ba3ef0e_staticRenderFns = []
tree_nodevue_type_template_id_3ba3ef0e_render._withStripped = true


// CONCATENATED MODULE: ./packages/tree/src/tree-node.vue?vue&type=template&id=3ba3ef0e&

// EXTERNAL MODULE: external "element-mini-ui/lib/transitions/collapse-transition"
var collapse_transition_ = __webpack_require__(19);
var collapse_transition_default = /*#__PURE__*/__webpack_require__.n(collapse_transition_);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/tree/src/tree-node.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var tree_nodevue_type_script_lang_js_ = ({
  name: 'ElTreeNode',

  componentName: 'ElTreeNode',

  mixins: [emitter_default.a],

  props: {
    node: {
      default: function _default() {
        return {};
      }
    },
    props: {},
    renderContent: Function,
    renderAfterExpand: {
      type: Boolean,
      default: true
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },

  components: {
    ElCollapseTransition: collapse_transition_default.a,
    ElCheckbox: checkbox_default.a,
    NodeContent: {
      props: {
        node: {
          required: true
        }
      },
      render: function render(h) {
        var parent = this.$parent;
        var tree = parent.tree;
        var node = this.node;
        var data = node.data,
            store = node.store;

        return parent.renderContent ? parent.renderContent.call(parent._renderProxy, h, { _self: tree.$vnode.context, node: node, data: data, store: store }) : tree.$scopedSlots.default ? tree.$scopedSlots.default({ node: node, data: data }) : h(
          'span',
          { 'class': 'el-tree-node__label' },
          [node.label]
        );
      }
    }
  },

  data: function data() {
    return {
      tree: null,
      expanded: false,
      childNodeRendered: false,
      oldChecked: null,
      oldIndeterminate: null
    };
  },


  watch: {
    'node.indeterminate': function nodeIndeterminate(val) {
      this.handleSelectChange(this.node.checked, val);
    },
    'node.checked': function nodeChecked(val) {
      this.handleSelectChange(val, this.node.indeterminate);
    },
    'node.expanded': function nodeExpanded(val) {
      var _this = this;

      this.$nextTick(function () {
        return _this.expanded = val;
      });
      if (val) {
        this.childNodeRendered = true;
      }
    }
  },

  methods: {
    getNodeKey: function getNodeKey(node) {
      return util_getNodeKey(this.tree.nodeKey, node.data);
    },
    handleSelectChange: function handleSelectChange(checked, indeterminate) {
      if (this.oldChecked !== checked && this.oldIndeterminate !== indeterminate) {
        this.tree.$emit('check-change', this.node.data, checked, indeterminate);
      }
      this.oldChecked = checked;
      this.indeterminate = indeterminate;
    },
    handleClick: function handleClick() {
      var store = this.tree.store;
      store.setCurrentNode(this.node);
      this.tree.$emit('current-change', store.currentNode ? store.currentNode.data : null, store.currentNode);
      this.tree.currentNode = this;
      if (this.tree.expandOnClickNode) {
        this.handleExpandIconClick();
      }
      if (this.tree.checkOnClickNode && !this.node.disabled) {
        this.handleCheckChange(null, {
          target: { checked: !this.node.checked }
        });
      }
      this.tree.$emit('node-click', this.node.data, this.node, this);
    },
    handleContextMenu: function handleContextMenu(event) {
      if (this.tree._events['node-contextmenu'] && this.tree._events['node-contextmenu'].length > 0) {
        event.stopPropagation();
        event.preventDefault();
      }
      this.tree.$emit('node-contextmenu', event, this.node.data, this.node, this);
    },
    handleExpandIconClick: function handleExpandIconClick() {
      if (this.node.isLeaf) return;
      if (this.expanded) {
        this.tree.$emit('node-collapse', this.node.data, this.node, this);
        this.node.collapse();
      } else {
        this.node.expand();
        this.$emit('node-expand', this.node.data, this.node, this);
      }
    },
    handleCheckChange: function handleCheckChange(value, ev) {
      var _this2 = this;

      this.node.setChecked(ev.target.checked, !this.tree.checkStrictly);
      this.$nextTick(function () {
        var store = _this2.tree.store;
        _this2.tree.$emit('check', _this2.node.data, {
          checkedNodes: store.getCheckedNodes(),
          checkedKeys: store.getCheckedKeys(),
          halfCheckedNodes: store.getHalfCheckedNodes(),
          halfCheckedKeys: store.getHalfCheckedKeys()
        });
      });
    },
    handleChildNodeExpand: function handleChildNodeExpand(nodeData, node, instance) {
      this.broadcast('ElTreeNode', 'tree-node-expand', node);
      this.tree.$emit('node-expand', nodeData, node, instance);
    },
    handleDragStart: function handleDragStart(event) {
      if (!this.tree.draggable) return;
      this.tree.$emit('tree-node-drag-start', event, this);
    },
    handleDragOver: function handleDragOver(event) {
      if (!this.tree.draggable) return;
      this.tree.$emit('tree-node-drag-over', event, this);
      event.preventDefault();
    },
    handleDrop: function handleDrop(event) {
      event.preventDefault();
    },
    handleDragEnd: function handleDragEnd(event) {
      if (!this.tree.draggable) return;
      this.tree.$emit('tree-node-drag-end', event, this);
    }
  },

  created: function created() {
    var _this3 = this;

    var parent = this.$parent;

    if (parent.isTree) {
      this.tree = parent;
    } else {
      this.tree = parent.tree;
    }

    var tree = this.tree;
    if (!tree) {
      console.warn('Can not find node\'s tree.');
    }

    var props = tree.props || {};
    var childrenKey = props['children'] || 'children';

    this.$watch('node.data.' + childrenKey, function () {
      _this3.node.updateChildren();
    });

    if (this.node.expanded) {
      this.expanded = true;
      this.childNodeRendered = true;
    }

    if (this.tree.accordion) {
      this.$on('tree-node-expand', function (node) {
        if (_this3.node !== node) {
          _this3.node.collapse();
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./packages/tree/src/tree-node.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tree_nodevue_type_script_lang_js_ = (tree_nodevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/tree/src/tree-node.vue





/* normalize component */

var tree_node_component = normalizeComponent(
  src_tree_nodevue_type_script_lang_js_,
  tree_nodevue_type_template_id_3ba3ef0e_render,
  tree_nodevue_type_template_id_3ba3ef0e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var tree_node_api; }
tree_node_component.options.__file = "packages/tree/src/tree-node.vue"
/* harmony default export */ var tree_node = (tree_node_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/tree/src/tree.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var treevue_type_script_lang_js_ = ({
  name: 'ElTree',

  mixins: [emitter_default.a],

  components: {
    ElTreeNode: tree_node
  },

  data: function data() {
    return {
      store: null,
      root: null,
      currentNode: null,
      treeItems: null,
      checkboxItems: [],
      dragState: {
        showDropIndicator: false,
        draggingNode: null,
        dropNode: null,
        allowDrop: true
      }
    };
  },


  props: {
    data: {
      type: Array
    },
    emptyText: {
      type: String,
      default: function _default() {
        return Object(lib_locale_["t"])('el.tree.emptyText');
      }
    },
    renderAfterExpand: {
      type: Boolean,
      default: true
    },
    nodeKey: String,
    checkStrictly: Boolean,
    defaultExpandAll: Boolean,
    expandOnClickNode: {
      type: Boolean,
      default: true
    },
    checkOnClickNode: Boolean,
    checkDescendants: {
      type: Boolean,
      default: false
    },
    autoExpandParent: {
      type: Boolean,
      default: true
    },
    defaultCheckedKeys: Array,
    defaultExpandedKeys: Array,
    currentNodeKey: [String, Number],
    renderContent: Function,
    showCheckbox: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    allowDrag: Function,
    allowDrop: Function,
    props: {
      default: function _default() {
        return {
          children: 'children',
          label: 'label',
          disabled: 'disabled'
        };
      }
    },
    lazy: {
      type: Boolean,
      default: false
    },
    highlightCurrent: Boolean,
    load: Function,
    filterNodeMethod: Function,
    accordion: Boolean,
    indent: {
      type: Number,
      default: 18
    },
    iconClass: String
  },

  computed: {
    children: {
      set: function set(value) {
        this.data = value;
      },
      get: function get() {
        return this.data;
      }
    },

    treeItemArray: function treeItemArray() {
      return Array.prototype.slice.call(this.treeItems);
    },
    isEmpty: function isEmpty() {
      var childNodes = this.root.childNodes;

      return !childNodes || childNodes.length === 0 || childNodes.every(function (_ref) {
        var visible = _ref.visible;
        return !visible;
      });
    }
  },

  watch: {
    defaultCheckedKeys: function defaultCheckedKeys(newVal) {
      this.store.setDefaultCheckedKey(newVal);
    },
    defaultExpandedKeys: function defaultExpandedKeys(newVal) {
      this.store.defaultExpandedKeys = newVal;
      this.store.setDefaultExpandedKeys(newVal);
    },
    data: function data(newVal) {
      this.store.setData(newVal);
    },
    checkboxItems: function checkboxItems(val) {
      Array.prototype.forEach.call(val, function (checkbox) {
        checkbox.setAttribute('tabindex', -1);
      });
    },
    checkStrictly: function checkStrictly(newVal) {
      this.store.checkStrictly = newVal;
    }
  },

  methods: {
    filter: function filter(value) {
      if (!this.filterNodeMethod) throw new Error('[Tree] filterNodeMethod is required when filter');
      this.store.filter(value);
    },
    getNodeKey: function getNodeKey(node) {
      return util_getNodeKey(this.nodeKey, node.data);
    },
    getNodePath: function getNodePath(data) {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in getNodePath');
      var node = this.store.getNode(data);
      if (!node) return [];
      var path = [node.data];
      var parent = node.parent;
      while (parent && parent !== this.root) {
        path.push(parent.data);
        parent = parent.parent;
      }
      return path.reverse();
    },
    getCheckedNodes: function getCheckedNodes(leafOnly, includeHalfChecked) {
      return this.store.getCheckedNodes(leafOnly, includeHalfChecked);
    },
    getCheckedKeys: function getCheckedKeys(leafOnly) {
      return this.store.getCheckedKeys(leafOnly);
    },
    getCurrentNode: function getCurrentNode() {
      var currentNode = this.store.getCurrentNode();
      return currentNode ? currentNode.data : null;
    },
    getCurrentKey: function getCurrentKey() {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in getCurrentKey');
      var currentNode = this.getCurrentNode();
      return currentNode ? currentNode[this.nodeKey] : null;
    },
    setCheckedNodes: function setCheckedNodes(nodes, leafOnly) {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedNodes');
      this.store.setCheckedNodes(nodes, leafOnly);
    },
    setCheckedKeys: function setCheckedKeys(keys, leafOnly) {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedKeys');
      this.store.setCheckedKeys(keys, leafOnly);
    },
    setChecked: function setChecked(data, checked, deep) {
      this.store.setChecked(data, checked, deep);
    },
    getHalfCheckedNodes: function getHalfCheckedNodes() {
      return this.store.getHalfCheckedNodes();
    },
    getHalfCheckedKeys: function getHalfCheckedKeys() {
      return this.store.getHalfCheckedKeys();
    },
    setCurrentNode: function setCurrentNode(node) {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCurrentNode');
      this.store.setUserCurrentNode(node);
    },
    setCurrentKey: function setCurrentKey(key) {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCurrentKey');
      this.store.setCurrentNodeKey(key);
    },
    getNode: function getNode(data) {
      return this.store.getNode(data);
    },
    remove: function remove(data) {
      this.store.remove(data);
    },
    append: function append(data, parentNode) {
      this.store.append(data, parentNode);
    },
    insertBefore: function insertBefore(data, refNode) {
      this.store.insertBefore(data, refNode);
    },
    insertAfter: function insertAfter(data, refNode) {
      this.store.insertAfter(data, refNode);
    },
    handleNodeExpand: function handleNodeExpand(nodeData, node, instance) {
      this.broadcast('ElTreeNode', 'tree-node-expand', node);
      this.$emit('node-expand', nodeData, node, instance);
    },
    updateKeyChildren: function updateKeyChildren(key, data) {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in updateKeyChild');
      this.store.updateChildren(key, data);
    },
    initTabIndex: function initTabIndex() {
      this.treeItems = this.$el.querySelectorAll('.is-focusable[role=treeitem]');
      this.checkboxItems = this.$el.querySelectorAll('input[type=checkbox]');
      var checkedItem = this.$el.querySelectorAll('.is-checked[role=treeitem]');
      if (checkedItem.length) {
        checkedItem[0].setAttribute('tabindex', 0);
        return;
      }
      this.treeItems[0] && this.treeItems[0].setAttribute('tabindex', 0);
    },
    handleKeydown: function handleKeydown(ev) {
      var currentItem = ev.target;
      if (currentItem.className.indexOf('el-tree-node') === -1) return;
      var keyCode = ev.keyCode;
      this.treeItems = this.$el.querySelectorAll('.is-focusable[role=treeitem]');
      var currentIndex = this.treeItemArray.indexOf(currentItem);
      var nextIndex = void 0;
      if ([38, 40].indexOf(keyCode) > -1) {
        // up、down
        ev.preventDefault();
        if (keyCode === 38) {
          // up
          nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0;
        } else {
          nextIndex = currentIndex < this.treeItemArray.length - 1 ? currentIndex + 1 : 0;
        }
        this.treeItemArray[nextIndex].focus(); // 选中
      }
      if ([37, 39].indexOf(keyCode) > -1) {
        // left、right 展开
        ev.preventDefault();
        currentItem.click(); // 选中
      }
      var hasInput = currentItem.querySelector('[type="checkbox"]');
      if ([13, 32].indexOf(keyCode) > -1 && hasInput) {
        // space enter选中checkbox
        ev.preventDefault();
        hasInput.click();
      }
    }
  },

  created: function created() {
    var _this = this;

    this.isTree = true;

    this.store = new tree_store({
      key: this.nodeKey,
      data: this.data,
      lazy: this.lazy,
      props: this.props,
      load: this.load,
      currentNodeKey: this.currentNodeKey,
      checkStrictly: this.checkStrictly,
      checkDescendants: this.checkDescendants,
      defaultCheckedKeys: this.defaultCheckedKeys,
      defaultExpandedKeys: this.defaultExpandedKeys,
      autoExpandParent: this.autoExpandParent,
      defaultExpandAll: this.defaultExpandAll,
      filterNodeMethod: this.filterNodeMethod
    });

    this.root = this.store.root;

    var dragState = this.dragState;
    this.$on('tree-node-drag-start', function (event, treeNode) {
      if (typeof _this.allowDrag === 'function' && !_this.allowDrag(treeNode.node)) {
        event.preventDefault();
        return false;
      }
      event.dataTransfer.effectAllowed = 'move';

      // wrap in try catch to address IE's error when first param is 'text/plain'
      try {
        // setData is required for draggable to work in FireFox
        // the content has to be '' so dragging a node out of the tree won't open a new tab in FireFox
        event.dataTransfer.setData('text/plain', '');
      } catch (e) {}
      dragState.draggingNode = treeNode;
      _this.$emit('node-drag-start', treeNode.node, event);
    });

    this.$on('tree-node-drag-over', function (event, treeNode) {
      var dropNode = findNearestComponent(event.target, 'ElTreeNode');
      var oldDropNode = dragState.dropNode;
      if (oldDropNode && oldDropNode !== dropNode) {
        Object(dom_["removeClass"])(oldDropNode.$el, 'is-drop-inner');
      }
      var draggingNode = dragState.draggingNode;
      if (!draggingNode || !dropNode) return;

      var dropPrev = true;
      var dropInner = true;
      var dropNext = true;
      var userAllowDropInner = true;
      if (typeof _this.allowDrop === 'function') {
        dropPrev = _this.allowDrop(draggingNode.node, dropNode.node, 'prev');
        userAllowDropInner = dropInner = _this.allowDrop(draggingNode.node, dropNode.node, 'inner');
        dropNext = _this.allowDrop(draggingNode.node, dropNode.node, 'next');
      }
      event.dataTransfer.dropEffect = dropInner ? 'move' : 'none';
      if ((dropPrev || dropInner || dropNext) && oldDropNode !== dropNode) {
        if (oldDropNode) {
          _this.$emit('node-drag-leave', draggingNode.node, oldDropNode.node, event);
        }
        _this.$emit('node-drag-enter', draggingNode.node, dropNode.node, event);
      }

      if (dropPrev || dropInner || dropNext) {
        dragState.dropNode = dropNode;
      }

      if (dropNode.node.nextSibling === draggingNode.node) {
        dropNext = false;
      }
      if (dropNode.node.previousSibling === draggingNode.node) {
        dropPrev = false;
      }
      if (dropNode.node.contains(draggingNode.node, false)) {
        dropInner = false;
      }
      if (draggingNode.node === dropNode.node || draggingNode.node.contains(dropNode.node)) {
        dropPrev = false;
        dropInner = false;
        dropNext = false;
      }

      var targetPosition = dropNode.$el.getBoundingClientRect();
      var treePosition = _this.$el.getBoundingClientRect();

      var dropType = void 0;
      var prevPercent = dropPrev ? dropInner ? 0.25 : dropNext ? 0.45 : 1 : -1;
      var nextPercent = dropNext ? dropInner ? 0.75 : dropPrev ? 0.55 : 0 : 1;

      var indicatorTop = -9999;
      var distance = event.clientY - targetPosition.top;
      if (distance < targetPosition.height * prevPercent) {
        dropType = 'before';
      } else if (distance > targetPosition.height * nextPercent) {
        dropType = 'after';
      } else if (dropInner) {
        dropType = 'inner';
      } else {
        dropType = 'none';
      }

      var iconPosition = dropNode.$el.querySelector('.el-tree-node__expand-icon').getBoundingClientRect();
      var dropIndicator = _this.$refs.dropIndicator;
      if (dropType === 'before') {
        indicatorTop = iconPosition.top - treePosition.top;
      } else if (dropType === 'after') {
        indicatorTop = iconPosition.bottom - treePosition.top;
      }
      dropIndicator.style.top = indicatorTop + 'px';
      dropIndicator.style.left = iconPosition.right - treePosition.left + 'px';

      if (dropType === 'inner') {
        Object(dom_["addClass"])(dropNode.$el, 'is-drop-inner');
      } else {
        Object(dom_["removeClass"])(dropNode.$el, 'is-drop-inner');
      }

      dragState.showDropIndicator = dropType === 'before' || dropType === 'after';
      dragState.allowDrop = dragState.showDropIndicator || userAllowDropInner;
      dragState.dropType = dropType;
      _this.$emit('node-drag-over', draggingNode.node, dropNode.node, event);
    });

    this.$on('tree-node-drag-end', function (event) {
      var draggingNode = dragState.draggingNode,
          dropType = dragState.dropType,
          dropNode = dragState.dropNode;

      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';

      if (draggingNode && dropNode) {
        var draggingNodeCopy = { data: draggingNode.node.data };
        if (dropType !== 'none') {
          draggingNode.node.remove();
        }
        if (dropType === 'before') {
          dropNode.node.parent.insertBefore(draggingNodeCopy, dropNode.node);
        } else if (dropType === 'after') {
          dropNode.node.parent.insertAfter(draggingNodeCopy, dropNode.node);
        } else if (dropType === 'inner') {
          dropNode.node.insertChild(draggingNodeCopy);
        }
        if (dropType !== 'none') {
          _this.store.registerNode(draggingNodeCopy);
        }

        Object(dom_["removeClass"])(dropNode.$el, 'is-drop-inner');

        _this.$emit('node-drag-end', draggingNode.node, dropNode.node, dropType, event);
        if (dropType !== 'none') {
          _this.$emit('node-drop', draggingNode.node, dropNode.node, dropType, event);
        }
      }
      if (draggingNode && !dropNode) {
        _this.$emit('node-drag-end', draggingNode.node, null, dropType, event);
      }

      dragState.showDropIndicator = false;
      dragState.draggingNode = null;
      dragState.dropNode = null;
      dragState.allowDrop = true;
    });
  },
  mounted: function mounted() {
    this.initTabIndex();
    this.$el.addEventListener('keydown', this.handleKeydown);
  },
  updated: function updated() {
    this.treeItems = this.$el.querySelectorAll('[role=treeitem]');
    this.checkboxItems = this.$el.querySelectorAll('input[type=checkbox]');
  }
});
// CONCATENATED MODULE: ./packages/tree/src/tree.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_treevue_type_script_lang_js_ = (treevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/tree/src/tree.vue





/* normalize component */

var tree_component = normalizeComponent(
  src_treevue_type_script_lang_js_,
  treevue_type_template_id_547575a6_render,
  treevue_type_template_id_547575a6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var tree_api; }
tree_component.options.__file = "packages/tree/src/tree.vue"
/* harmony default export */ var src_tree = (tree_component.exports);
// CONCATENATED MODULE: ./packages/tree/index.js


/* istanbul ignore next */
src_tree.install = function (Vue) {
  Vue.component(src_tree.name, src_tree);
};

/* harmony default export */ var packages_tree = (src_tree);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/pagination/src/pager.vue?vue&type=template&id=7274f267&
var pagervue_type_template_id_7274f267_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { staticClass: "el-pager", on: { click: _vm.onPagerClick } },
    [
      _vm.pageCount > 0
        ? _c(
            "li",
            {
              staticClass: "number",
              class: { active: _vm.currentPage === 1, disabled: _vm.disabled }
            },
            [_vm._v("1")]
          )
        : _vm._e(),
      _vm.showPrevMore
        ? _c("li", {
            staticClass: "el-icon more btn-quickprev",
            class: [_vm.quickprevIconClass, { disabled: _vm.disabled }],
            on: {
              mouseenter: function($event) {
                return _vm.onMouseenter("left")
              },
              mouseleave: function($event) {
                _vm.quickprevIconClass = "el-icon-more"
              }
            }
          })
        : _vm._e(),
      _vm._l(_vm.pagers, function(pager) {
        return _c(
          "li",
          {
            key: pager,
            staticClass: "number",
            class: { active: _vm.currentPage === pager, disabled: _vm.disabled }
          },
          [_vm._v(_vm._s(pager))]
        )
      }),
      _vm.showNextMore
        ? _c("li", {
            staticClass: "el-icon more btn-quicknext",
            class: [_vm.quicknextIconClass, { disabled: _vm.disabled }],
            on: {
              mouseenter: function($event) {
                return _vm.onMouseenter("right")
              },
              mouseleave: function($event) {
                _vm.quicknextIconClass = "el-icon-more"
              }
            }
          })
        : _vm._e(),
      _vm.pageCount > 1
        ? _c(
            "li",
            {
              staticClass: "number",
              class: {
                active: _vm.currentPage === _vm.pageCount,
                disabled: _vm.disabled
              }
            },
            [_vm._v(_vm._s(_vm.pageCount))]
          )
        : _vm._e()
    ],
    2
  )
}
var pagervue_type_template_id_7274f267_staticRenderFns = []
pagervue_type_template_id_7274f267_render._withStripped = true


// CONCATENATED MODULE: ./packages/pagination/src/pager.vue?vue&type=template&id=7274f267&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/pagination/src/pager.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var pagervue_type_script_lang_js_ = ({
  name: 'ElPager',

  props: {
    currentPage: Number,

    pageCount: Number,

    pagerCount: Number,

    disabled: Boolean
  },

  watch: {
    showPrevMore: function showPrevMore(val) {
      if (!val) this.quickprevIconClass = 'el-icon-more';
    },
    showNextMore: function showNextMore(val) {
      if (!val) this.quicknextIconClass = 'el-icon-more';
    }
  },

  methods: {
    onPagerClick: function onPagerClick(event) {
      var target = event.target;
      if (target.tagName === 'UL' || this.disabled) {
        return;
      }

      var newPage = Number(event.target.textContent);
      var pageCount = this.pageCount;
      var currentPage = this.currentPage;
      var pagerCountOffset = this.pagerCount - 2;

      if (target.className.indexOf('more') !== -1) {
        if (target.className.indexOf('quickprev') !== -1) {
          newPage = currentPage - pagerCountOffset;
        } else if (target.className.indexOf('quicknext') !== -1) {
          newPage = currentPage + pagerCountOffset;
        }
      }

      /* istanbul ignore if */
      if (!isNaN(newPage)) {
        if (newPage < 1) {
          newPage = 1;
        }

        if (newPage > pageCount) {
          newPage = pageCount;
        }
      }

      if (newPage !== currentPage) {
        this.$emit('change', newPage);
      }
    },
    onMouseenter: function onMouseenter(direction) {
      if (this.disabled) return;
      if (direction === 'left') {
        this.quickprevIconClass = 'el-icon-d-arrow-left';
      } else {
        this.quicknextIconClass = 'el-icon-d-arrow-right';
      }
    }
  },

  computed: {
    pagers: function pagers() {
      var pagerCount = this.pagerCount;
      var halfPagerCount = (pagerCount - 1) / 2;

      var currentPage = Number(this.currentPage);
      var pageCount = Number(this.pageCount);

      var showPrevMore = false;
      var showNextMore = false;

      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
          showPrevMore = true;
        }

        if (currentPage < pageCount - halfPagerCount) {
          showNextMore = true;
        }
      }

      var array = [];

      if (showPrevMore && !showNextMore) {
        var startPage = pageCount - (pagerCount - 2);
        for (var i = startPage; i < pageCount; i++) {
          array.push(i);
        }
      } else if (!showPrevMore && showNextMore) {
        for (var _i = 2; _i < pagerCount; _i++) {
          array.push(_i);
        }
      } else if (showPrevMore && showNextMore) {
        var offset = Math.floor(pagerCount / 2) - 1;
        for (var _i2 = currentPage - offset; _i2 <= currentPage + offset; _i2++) {
          array.push(_i2);
        }
      } else {
        for (var _i3 = 2; _i3 < pageCount; _i3++) {
          array.push(_i3);
        }
      }

      this.showPrevMore = showPrevMore;
      this.showNextMore = showNextMore;

      return array;
    }
  },

  data: function data() {
    return {
      current: null,
      showPrevMore: false,
      showNextMore: false,
      quicknextIconClass: 'el-icon-more',
      quickprevIconClass: 'el-icon-more'
    };
  }
});
// CONCATENATED MODULE: ./packages/pagination/src/pager.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_pagervue_type_script_lang_js_ = (pagervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/pagination/src/pager.vue





/* normalize component */

var pager_component = normalizeComponent(
  src_pagervue_type_script_lang_js_,
  pagervue_type_template_id_7274f267_render,
  pagervue_type_template_id_7274f267_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var pager_api; }
pager_component.options.__file = "packages/pagination/src/pager.vue"
/* harmony default export */ var pager = (pager_component.exports);
// EXTERNAL MODULE: external "element-mini-ui/lib/select"
var select_ = __webpack_require__(32);
var select_default = /*#__PURE__*/__webpack_require__.n(select_);

// EXTERNAL MODULE: external "element-mini-ui/lib/option"
var option_ = __webpack_require__(33);
var option_default = /*#__PURE__*/__webpack_require__.n(option_);

// CONCATENATED MODULE: ./packages/pagination/src/pagination.js







/* harmony default export */ var pagination = ({
  name: 'ElPagination',

  props: {
    pageSize: {
      type: Number,
      default: 10
    },

    small: Boolean,

    total: Number,

    pageCount: Number,

    pagerCount: {
      type: Number,
      validator: function validator(value) {
        return (value | 0) === value && value > 4 && value < 22 && value % 2 === 1;
      },

      default: 7
    },

    currentPage: {
      type: Number,
      default: 1
    },

    layout: {
      default: 'prev, pager, next, jumper, ->, total'
    },

    pageSizes: {
      type: Array,
      default: function _default() {
        return [10, 20, 30, 40, 50, 100];
      }
    },

    popperClass: String,

    prevText: String,

    nextText: String,

    background: Boolean,

    disabled: Boolean,

    hideOnSinglePage: Boolean
  },

  data: function data() {
    return {
      internalCurrentPage: 1,
      internalPageSize: 0,
      lastEmittedPage: -1,
      userChangePageSize: false
    };
  },
  render: function render(h) {
    var layout = this.layout;
    if (!layout) return null;
    if (this.hideOnSinglePage && (!this.internalPageCount || this.internalPageCount === 1)) return null;

    var template = h('div', { 'class': ['el-pagination', {
        'is-background': this.background,
        'el-pagination--small': this.small
      }] });
    var TEMPLATE_MAP = {
      prev: h('prev'),
      jumper: h('jumper'),
      pager: h('pager', {
        attrs: { currentPage: this.internalCurrentPage, pageCount: this.internalPageCount, pagerCount: this.pagerCount, disabled: this.disabled },
        on: {
          'change': this.handleCurrentChange
        }
      }),
      next: h('next'),
      sizes: h('sizes', {
        attrs: { pageSizes: this.pageSizes }
      }),
      slot: h('slot', [this.$slots.default ? this.$slots.default : '']),
      total: h('total')
    };
    var components = layout.split(',').map(function (item) {
      return item.trim();
    });
    var rightWrapper = h('div', { 'class': 'el-pagination__rightwrapper' });
    var haveRightWrapper = false;

    template.children = template.children || [];
    rightWrapper.children = rightWrapper.children || [];
    components.forEach(function (compo) {
      if (compo === '->') {
        haveRightWrapper = true;
        return;
      }

      if (!haveRightWrapper) {
        template.children.push(TEMPLATE_MAP[compo]);
      } else {
        rightWrapper.children.push(TEMPLATE_MAP[compo]);
      }
    });

    if (haveRightWrapper) {
      template.children.unshift(rightWrapper);
    }

    return template;
  },


  components: {
    Prev: {
      render: function render(h) {
        return h(
          'button',
          {
            attrs: {
              type: 'button',

              disabled: this.$parent.disabled || this.$parent.internalCurrentPage <= 1
            },
            'class': 'btn-prev', on: {
              'click': this.$parent.prev
            }
          },
          [this.$parent.prevText ? h('span', [this.$parent.prevText]) : h('i', { 'class': 'el-icon el-icon-arrow-left' })]
        );
      }
    },

    Next: {
      render: function render(h) {
        return h(
          'button',
          {
            attrs: {
              type: 'button',

              disabled: this.$parent.disabled || this.$parent.internalCurrentPage === this.$parent.internalPageCount || this.$parent.internalPageCount === 0
            },
            'class': 'btn-next', on: {
              'click': this.$parent.next
            }
          },
          [this.$parent.nextText ? h('span', [this.$parent.nextText]) : h('i', { 'class': 'el-icon el-icon-arrow-right' })]
        );
      }
    },

    Sizes: {
      mixins: [locale_default.a],

      props: {
        pageSizes: Array
      },

      watch: {
        pageSizes: {
          immediate: true,
          handler: function handler(newVal, oldVal) {
            if (Object(util_["valueEquals"])(newVal, oldVal)) return;
            if (Array.isArray(newVal)) {
              this.$parent.internalPageSize = newVal.indexOf(this.$parent.pageSize) > -1 ? this.$parent.pageSize : this.pageSizes[0];
            }
          }
        }
      },

      render: function render(h) {
        var _this = this;

        return h(
          'span',
          { 'class': 'el-pagination__sizes' },
          [h(
            'el-select',
            {
              attrs: {
                value: this.$parent.internalPageSize,
                popperClass: this.$parent.popperClass || '',
                size: 'mini',

                disabled: this.$parent.disabled },
              on: {
                'input': this.handleChange
              }
            },
            [this.pageSizes.map(function (item) {
              return h('el-option', {
                attrs: {
                  value: item,
                  label: item + _this.t('el.pagination.pagesize') }
              });
            })]
          )]
        );
      },


      components: {
        ElSelect: select_default.a,
        ElOption: option_default.a
      },

      methods: {
        handleChange: function handleChange(val) {
          if (val !== this.$parent.internalPageSize) {
            this.$parent.internalPageSize = val = parseInt(val, 10);
            this.$parent.userChangePageSize = true;
            this.$parent.$emit('update:pageSize', val);
            this.$parent.$emit('size-change', val);
          }
        }
      }
    },

    Jumper: {
      mixins: [locale_default.a],

      components: { ElInput: input_default.a },

      data: function data() {
        return {
          userInput: null
        };
      },


      watch: {
        '$parent.internalCurrentPage': function $parentInternalCurrentPage() {
          this.userInput = null;
        }
      },

      methods: {
        handleKeyup: function handleKeyup(_ref) {
          var keyCode = _ref.keyCode,
              target = _ref.target;

          // Chrome, Safari, Firefox triggers change event on Enter
          // Hack for IE: https://github.com/ElemeFE/element/issues/11710
          // Drop this method when we no longer supports IE
          if (keyCode === 13) {
            this.handleChange(target.value);
          }
        },
        handleInput: function handleInput(value) {
          this.userInput = value;
        },
        handleChange: function handleChange(value) {
          this.$parent.internalCurrentPage = this.$parent.getValidCurrentPage(value);
          this.$parent.emitChange();
          this.userInput = null;
        }
      },

      render: function render(h) {
        return h(
          'span',
          { 'class': 'el-pagination__jump' },
          [this.t('el.pagination.goto'), h('el-input', {
            'class': 'el-pagination__editor is-in-pagination',
            attrs: { min: 1,
              max: this.$parent.internalPageCount,
              value: this.userInput !== null ? this.userInput : this.$parent.internalCurrentPage,
              type: 'number',
              disabled: this.$parent.disabled
            },
            nativeOn: {
              'keyup': this.handleKeyup
            },
            on: {
              'input': this.handleInput,
              'change': this.handleChange
            }
          }), this.t('el.pagination.pageClassifier')]
        );
      }
    },

    Total: {
      mixins: [locale_default.a],

      render: function render(h) {
        return typeof this.$parent.total === 'number' ? h(
          'span',
          { 'class': 'el-pagination__total' },
          [this.t('el.pagination.total', { total: this.$parent.total })]
        ) : '';
      }
    },

    Pager: pager
  },

  methods: {
    handleCurrentChange: function handleCurrentChange(val) {
      this.internalCurrentPage = this.getValidCurrentPage(val);
      this.userChangePageSize = true;
      this.emitChange();
    },
    prev: function prev() {
      if (this.disabled) return;
      var newVal = this.internalCurrentPage - 1;
      this.internalCurrentPage = this.getValidCurrentPage(newVal);
      this.$emit('prev-click', this.internalCurrentPage);
      this.emitChange();
    },
    next: function next() {
      if (this.disabled) return;
      var newVal = this.internalCurrentPage + 1;
      this.internalCurrentPage = this.getValidCurrentPage(newVal);
      this.$emit('next-click', this.internalCurrentPage);
      this.emitChange();
    },
    getValidCurrentPage: function getValidCurrentPage(value) {
      value = parseInt(value, 10);

      var havePageCount = typeof this.internalPageCount === 'number';

      var resetValue = void 0;
      if (!havePageCount) {
        if (isNaN(value) || value < 1) resetValue = 1;
      } else {
        if (value < 1) {
          resetValue = 1;
        } else if (value > this.internalPageCount) {
          resetValue = this.internalPageCount;
        }
      }

      if (resetValue === undefined && isNaN(value)) {
        resetValue = 1;
      } else if (resetValue === 0) {
        resetValue = 1;
      }

      return resetValue === undefined ? value : resetValue;
    },
    emitChange: function emitChange() {
      var _this2 = this;

      this.$nextTick(function () {
        if (_this2.internalCurrentPage !== _this2.lastEmittedPage || _this2.userChangePageSize) {
          _this2.$emit('current-change', _this2.internalCurrentPage);
          _this2.lastEmittedPage = _this2.internalCurrentPage;
          _this2.userChangePageSize = false;
        }
      });
    }
  },

  computed: {
    internalPageCount: function internalPageCount() {
      if (typeof this.total === 'number') {
        return Math.max(1, Math.ceil(this.total / this.internalPageSize));
      } else if (typeof this.pageCount === 'number') {
        return Math.max(1, this.pageCount);
      }
      return null;
    }
  },

  watch: {
    currentPage: {
      immediate: true,
      handler: function handler(val) {
        this.internalCurrentPage = this.getValidCurrentPage(val);
      }
    },

    pageSize: {
      immediate: true,
      handler: function handler(val) {
        this.internalPageSize = isNaN(val) ? 10 : val;
      }
    },

    internalCurrentPage: {
      immediate: true,
      handler: function handler(newVal) {
        this.$emit('update:currentPage', newVal);
        this.lastEmittedPage = -1;
      }
    },

    internalPageCount: function internalPageCount(newVal) {
      /* istanbul ignore if */
      var oldPage = this.internalCurrentPage;
      if (newVal > 0 && oldPage === 0) {
        this.internalCurrentPage = 1;
      } else if (oldPage > newVal) {
        this.internalCurrentPage = newVal === 0 ? 1 : newVal;
        this.userChangePageSize && this.emitChange();
      }
      this.userChangePageSize = false;
    }
  }
});
// CONCATENATED MODULE: ./packages/pagination/index.js


/* istanbul ignore next */
pagination.install = function (Vue) {
  Vue.component(pagination.name, pagination);
};

/* harmony default export */ var packages_pagination = (pagination);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/alert/src/main.vue?vue&type=template&id=6e53341b&
var mainvue_type_template_id_6e53341b_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "el-alert-fade" } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.visible,
            expression: "visible"
          }
        ],
        staticClass: "el-alert",
        class: [
          _vm.typeClass,
          _vm.center ? "is-center" : "",
          "is-" + _vm.effect
        ],
        attrs: { role: "alert" }
      },
      [
        _vm.showIcon
          ? _c("i", {
              staticClass: "el-alert__icon",
              class: [_vm.iconClass, _vm.isBigIcon]
            })
          : _vm._e(),
        _c("div", { staticClass: "el-alert__content" }, [
          _vm.title || _vm.$slots.title
            ? _c(
                "span",
                { staticClass: "el-alert__title", class: [_vm.isBoldTitle] },
                [_vm._t("title", [_vm._v(_vm._s(_vm.title))])],
                2
              )
            : _vm._e(),
          _vm.$slots.default && !_vm.description
            ? _c(
                "p",
                { staticClass: "el-alert__description" },
                [_vm._t("default")],
                2
              )
            : _vm._e(),
          _vm.description && !_vm.$slots.default
            ? _c("p", { staticClass: "el-alert__description" }, [
                _vm._v(_vm._s(_vm.description))
              ])
            : _vm._e(),
          _c(
            "i",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.closable,
                  expression: "closable"
                }
              ],
              staticClass: "el-alert__closebtn",
              class: {
                "is-customed": _vm.closeText !== "",
                "el-icon-close": _vm.closeText === ""
              },
              on: {
                click: function($event) {
                  return _vm.close()
                }
              }
            },
            [_vm._v(_vm._s(_vm.closeText))]
          )
        ])
      ]
    )
  ])
}
var mainvue_type_template_id_6e53341b_staticRenderFns = []
mainvue_type_template_id_6e53341b_render._withStripped = true


// CONCATENATED MODULE: ./packages/alert/src/main.vue?vue&type=template&id=6e53341b&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/alert/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var TYPE_CLASSES_MAP = {
  'success': 'el-icon-success',
  'warning': 'el-icon-warning',
  'error': 'el-icon-error'
};
/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: 'ElAlert',

  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info'
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ''
    },
    showIcon: Boolean,
    center: Boolean,
    effect: {
      type: String,
      default: 'light',
      validator: function validator(value) {
        return ['light', 'dark'].indexOf(value) !== -1;
      }
    }
  },

  data: function data() {
    return {
      visible: true
    };
  },


  methods: {
    close: function close() {
      this.visible = false;
      this.$emit('close');
    }
  },

  computed: {
    typeClass: function typeClass() {
      return 'el-alert--' + this.type;
    },
    iconClass: function iconClass() {
      return TYPE_CLASSES_MAP[this.type] || 'el-icon-info';
    },
    isBigIcon: function isBigIcon() {
      return this.description || this.$slots.default ? 'is-big' : '';
    },
    isBoldTitle: function isBoldTitle() {
      return this.description || this.$slots.default ? 'is-bold' : '';
    }
  }
});
// CONCATENATED MODULE: ./packages/alert/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/alert/src/main.vue





/* normalize component */

var main_component = normalizeComponent(
  src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_6e53341b_render,
  mainvue_type_template_id_6e53341b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var main_api; }
main_component.options.__file = "packages/alert/src/main.vue"
/* harmony default export */ var main = (main_component.exports);
// CONCATENATED MODULE: ./packages/alert/index.js


/* istanbul ignore next */
main.install = function (Vue) {
  Vue.component(main.name, main);
};

/* harmony default export */ var packages_alert = (main);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/loading/src/loading.vue?vue&type=template&id=eee0a7ac&
var loadingvue_type_template_id_eee0a7ac_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "el-loading-fade" },
      on: { "after-leave": _vm.handleAfterLeave }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          staticClass: "el-loading-mask",
          class: [_vm.customClass, { "is-fullscreen": _vm.fullscreen }],
          style: { backgroundColor: _vm.background || "" }
        },
        [
          _c("div", { staticClass: "el-loading-spinner" }, [
            !_vm.spinner
              ? _c(
                  "svg",
                  {
                    staticClass: "circular",
                    attrs: { viewBox: "25 25 50 50" }
                  },
                  [
                    _c("circle", {
                      staticClass: "path",
                      attrs: { cx: "50", cy: "50", r: "20", fill: "none" }
                    })
                  ]
                )
              : _c("i", { class: _vm.spinner }),
            _vm.text
              ? _c("p", { staticClass: "el-loading-text" }, [
                  _vm._v(_vm._s(_vm.text))
                ])
              : _vm._e()
          ])
        ]
      )
    ]
  )
}
var loadingvue_type_template_id_eee0a7ac_staticRenderFns = []
loadingvue_type_template_id_eee0a7ac_render._withStripped = true


// CONCATENATED MODULE: ./packages/loading/src/loading.vue?vue&type=template&id=eee0a7ac&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/loading/src/loading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var loadingvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      text: null,
      spinner: null,
      background: null,
      fullscreen: true,
      visible: false,
      customClass: ''
    };
  },


  methods: {
    handleAfterLeave: function handleAfterLeave() {
      this.$emit('after-leave');
    },
    setText: function setText(text) {
      this.text = text;
    }
  }
});
// CONCATENATED MODULE: ./packages/loading/src/loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_loadingvue_type_script_lang_js_ = (loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/loading/src/loading.vue





/* normalize component */

var loading_component = normalizeComponent(
  src_loadingvue_type_script_lang_js_,
  loadingvue_type_template_id_eee0a7ac_render,
  loadingvue_type_template_id_eee0a7ac_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var loading_api; }
loading_component.options.__file = "packages/loading/src/loading.vue"
/* harmony default export */ var loading = (loading_component.exports);
// EXTERNAL MODULE: external "element-mini-ui/lib/utils/after-leave"
var after_leave_ = __webpack_require__(25);
var after_leave_default = /*#__PURE__*/__webpack_require__.n(after_leave_);

// CONCATENATED MODULE: ./packages/loading/src/directive.js





var Mask = external_vue_default.a.extend(loading);

var loadingDirective = {};
loadingDirective.install = function (Vue) {
  if (Vue.prototype.$isServer) return;
  var toggleLoading = function toggleLoading(el, binding) {
    if (binding.value) {
      Vue.nextTick(function () {
        if (binding.modifiers.fullscreen) {
          el.originalPosition = Object(dom_["getStyle"])(document.body, 'position');
          el.originalOverflow = Object(dom_["getStyle"])(document.body, 'overflow');
          el.maskStyle.zIndex = popup_["PopupManager"].nextZIndex();

          Object(dom_["addClass"])(el.mask, 'is-fullscreen');
          insertDom(document.body, el, binding);
        } else {
          Object(dom_["removeClass"])(el.mask, 'is-fullscreen');

          if (binding.modifiers.body) {
            el.originalPosition = Object(dom_["getStyle"])(document.body, 'position');

            ['top', 'left'].forEach(function (property) {
              var scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
              el.maskStyle[property] = el.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] - parseInt(Object(dom_["getStyle"])(document.body, 'margin-' + property), 10) + 'px';
            });
            ['height', 'width'].forEach(function (property) {
              el.maskStyle[property] = el.getBoundingClientRect()[property] + 'px';
            });

            insertDom(document.body, el, binding);
          } else {
            el.originalPosition = Object(dom_["getStyle"])(el, 'position');
            insertDom(el, el, binding);
          }
        }
      });
    } else {
      after_leave_default()(el.instance, function (_) {
        if (!el.instance.hiding) return;
        el.domVisible = false;
        var target = binding.modifiers.fullscreen || binding.modifiers.body ? document.body : el;
        Object(dom_["removeClass"])(target, 'el-loading-parent--relative');
        Object(dom_["removeClass"])(target, 'el-loading-parent--hidden');
        el.instance.hiding = false;
      }, 300, true);
      el.instance.visible = false;
      el.instance.hiding = true;
    }
  };
  var insertDom = function insertDom(parent, el, binding) {
    if (!el.domVisible && Object(dom_["getStyle"])(el, 'display') !== 'none' && Object(dom_["getStyle"])(el, 'visibility') !== 'hidden') {
      Object.keys(el.maskStyle).forEach(function (property) {
        el.mask.style[property] = el.maskStyle[property];
      });

      if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
        Object(dom_["addClass"])(parent, 'el-loading-parent--relative');
      }
      if (binding.modifiers.fullscreen && binding.modifiers.lock) {
        Object(dom_["addClass"])(parent, 'el-loading-parent--hidden');
      }
      el.domVisible = true;

      parent.appendChild(el.mask);
      Vue.nextTick(function () {
        if (el.instance.hiding) {
          el.instance.$emit('after-leave');
        } else {
          el.instance.visible = true;
        }
      });
      el.domInserted = true;
    } else if (el.domVisible && el.instance.hiding === true) {
      el.instance.visible = true;
      el.instance.hiding = false;
    }
  };

  Vue.directive('loading', {
    bind: function bind(el, binding, vnode) {
      var textExr = el.getAttribute('element-loading-text');
      var spinnerExr = el.getAttribute('element-loading-spinner');
      var backgroundExr = el.getAttribute('element-loading-background');
      var customClassExr = el.getAttribute('element-loading-custom-class');
      var vm = vnode.context;
      var mask = new Mask({
        el: document.createElement('div'),
        data: {
          text: vm && vm[textExr] || textExr,
          spinner: vm && vm[spinnerExr] || spinnerExr,
          background: vm && vm[backgroundExr] || backgroundExr,
          customClass: vm && vm[customClassExr] || customClassExr,
          fullscreen: !!binding.modifiers.fullscreen
        }
      });
      el.instance = mask;
      el.mask = mask.$el;
      el.maskStyle = {};

      binding.value && toggleLoading(el, binding);
    },

    update: function update(el, binding) {
      el.instance.setText(el.getAttribute('element-loading-text'));
      if (binding.oldValue !== binding.value) {
        toggleLoading(el, binding);
      }
    },

    unbind: function unbind(el, binding) {
      if (el.domInserted) {
        el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask);
        toggleLoading(el, { value: false, modifiers: binding.modifiers });
      }
      el.instance && el.instance.$destroy();
    }
  });
};

/* harmony default export */ var directive = (loadingDirective);
// CONCATENATED MODULE: ./packages/loading/src/index.js







var LoadingConstructor = external_vue_default.a.extend(loading);

var src_defaults = {
  text: null,
  fullscreen: true,
  body: false,
  lock: false,
  customClass: ''
};

var fullscreenLoading = void 0;

LoadingConstructor.prototype.originalPosition = '';
LoadingConstructor.prototype.originalOverflow = '';

LoadingConstructor.prototype.close = function () {
  var _this = this;

  if (this.fullscreen) {
    fullscreenLoading = undefined;
  }
  after_leave_default()(this, function (_) {
    var target = _this.fullscreen || _this.body ? document.body : _this.target;
    Object(dom_["removeClass"])(target, 'el-loading-parent--relative');
    Object(dom_["removeClass"])(target, 'el-loading-parent--hidden');
    if (_this.$el && _this.$el.parentNode) {
      _this.$el.parentNode.removeChild(_this.$el);
    }
    _this.$destroy();
  }, 300);
  this.visible = false;
};

var src_addStyle = function addStyle(options, parent, instance) {
  var maskStyle = {};
  if (options.fullscreen) {
    instance.originalPosition = Object(dom_["getStyle"])(document.body, 'position');
    instance.originalOverflow = Object(dom_["getStyle"])(document.body, 'overflow');
    maskStyle.zIndex = popup_["PopupManager"].nextZIndex();
  } else if (options.body) {
    instance.originalPosition = Object(dom_["getStyle"])(document.body, 'position');
    ['top', 'left'].forEach(function (property) {
      var scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
      maskStyle[property] = options.target.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] + 'px';
    });
    ['height', 'width'].forEach(function (property) {
      maskStyle[property] = options.target.getBoundingClientRect()[property] + 'px';
    });
  } else {
    instance.originalPosition = Object(dom_["getStyle"])(parent, 'position');
  }
  Object.keys(maskStyle).forEach(function (property) {
    instance.$el.style[property] = maskStyle[property];
  });
};

var src_Loading = function Loading() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (external_vue_default.a.prototype.$isServer) return;
  options = merge_default()({}, src_defaults, options);
  if (typeof options.target === 'string') {
    options.target = document.querySelector(options.target);
  }
  options.target = options.target || document.body;
  if (options.target !== document.body) {
    options.fullscreen = false;
  } else {
    options.body = true;
  }
  if (options.fullscreen && fullscreenLoading) {
    return fullscreenLoading;
  }

  var parent = options.body ? document.body : options.target;
  var instance = new LoadingConstructor({
    el: document.createElement('div'),
    data: options
  });

  src_addStyle(options, parent, instance);
  if (instance.originalPosition !== 'absolute' && instance.originalPosition !== 'fixed') {
    Object(dom_["addClass"])(parent, 'el-loading-parent--relative');
  }
  if (options.fullscreen && options.lock) {
    Object(dom_["addClass"])(parent, 'el-loading-parent--hidden');
  }
  parent.appendChild(instance.$el);
  external_vue_default.a.nextTick(function () {
    instance.visible = true;
  });
  if (options.fullscreen) {
    fullscreenLoading = instance;
  }
  return instance;
};

/* harmony default export */ var src = (src_Loading);
// CONCATENATED MODULE: ./packages/loading/index.js



/* harmony default export */ var packages_loading = ({
  install: function install(Vue) {
    Vue.use(directive);
    Vue.prototype.$loading = src;
  },

  directive: directive,
  service: src
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/message/src/main.vue?vue&type=template&id=455b9f60&
var mainvue_type_template_id_455b9f60_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "el-message-fade" },
      on: { "after-leave": _vm.handleAfterLeave }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          class: [
            "el-message",
            _vm.type && !_vm.iconClass ? "el-message--" + _vm.type : "",
            _vm.center ? "is-center" : "",
            _vm.showClose ? "is-closable" : "",
            _vm.customClass
          ],
          style: _vm.positionStyle,
          attrs: { role: "alert" },
          on: { mouseenter: _vm.clearTimer, mouseleave: _vm.startTimer }
        },
        [
          _vm.iconClass
            ? _c("i", { class: _vm.iconClass })
            : _c("i", { class: _vm.typeClass }),
          _vm._t("default", [
            !_vm.dangerouslyUseHTMLString
              ? _c("p", { staticClass: "el-message__content" }, [
                  _vm._v(_vm._s(_vm.message))
                ])
              : _c("p", {
                  staticClass: "el-message__content",
                  domProps: { innerHTML: _vm._s(_vm.message) }
                })
          ]),
          _vm.showClose
            ? _c("i", {
                staticClass: "el-message__closeBtn el-icon-close",
                on: { click: _vm.close }
              })
            : _vm._e()
        ],
        2
      )
    ]
  )
}
var mainvue_type_template_id_455b9f60_staticRenderFns = []
mainvue_type_template_id_455b9f60_render._withStripped = true


// CONCATENATED MODULE: ./packages/message/src/main.vue?vue&type=template&id=455b9f60&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/message/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
};

/* harmony default export */ var message_src_mainvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      visible: false,
      message: '',
      duration: 3000,
      type: 'info',
      iconClass: '',
      customClass: '',
      onClose: null,
      showClose: false,
      closed: false,
      verticalOffset: 20,
      timer: null,
      dangerouslyUseHTMLString: false,
      center: false
    };
  },


  computed: {
    typeClass: function typeClass() {
      return this.type && !this.iconClass ? 'el-message__icon el-icon-' + typeMap[this.type] : '';
    },
    positionStyle: function positionStyle() {
      return {
        'top': this.verticalOffset + 'px'
      };
    }
  },

  watch: {
    closed: function closed(newVal) {
      if (newVal) {
        this.visible = false;
      }
    }
  },

  methods: {
    handleAfterLeave: function handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close: function close() {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },
    clearTimer: function clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer: function startTimer() {
      var _this = this;

      if (this.duration > 0) {
        this.timer = setTimeout(function () {
          if (!_this.closed) {
            _this.close();
          }
        }, this.duration);
      }
    },
    keydown: function keydown(e) {
      if (e.keyCode === 27) {
        // esc关闭消息
        if (!this.closed) {
          this.close();
        }
      }
    }
  },
  mounted: function mounted() {
    this.startTimer();
    document.addEventListener('keydown', this.keydown);
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('keydown', this.keydown);
  }
});
// CONCATENATED MODULE: ./packages/message/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_message_src_mainvue_type_script_lang_js_ = (message_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/message/src/main.vue





/* normalize component */

var src_main_component = normalizeComponent(
  packages_message_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_455b9f60_render,
  mainvue_type_template_id_455b9f60_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var src_main_api; }
src_main_component.options.__file = "packages/message/src/main.vue"
/* harmony default export */ var src_main = (src_main_component.exports);
// EXTERNAL MODULE: external "element-mini-ui/lib/utils/vdom"
var vdom_ = __webpack_require__(18);

// CONCATENATED MODULE: ./packages/message/src/main.js




var MessageConstructor = external_vue_default.a.extend(src_main);

var main_instance = void 0;
var instances = [];
var seed = 1;

var main_Message = function Message(options) {
  if (external_vue_default.a.prototype.$isServer) return;
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  var userOnClose = options.onClose;
  var id = 'message_' + seed++;

  options.onClose = function () {
    Message.close(id, userOnClose);
  };
  main_instance = new MessageConstructor({
    data: options
  });
  main_instance.id = id;
  if (Object(vdom_["isVNode"])(main_instance.message)) {
    main_instance.$slots.default = [main_instance.message];
    main_instance.message = null;
  }
  main_instance.$mount();
  document.body.appendChild(main_instance.$el);
  var verticalOffset = options.offset || 20;
  instances.forEach(function (item) {
    verticalOffset += item.$el.offsetHeight + 16;
  });
  main_instance.verticalOffset = verticalOffset;
  main_instance.visible = true;
  main_instance.$el.style.zIndex = popup_["PopupManager"].nextZIndex();
  instances.push(main_instance);
  return main_instance;
};

['success', 'warning', 'info', 'error'].forEach(function (type) {
  main_Message[type] = function (options) {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return main_Message(options);
  };
});

main_Message.close = function (id, userOnClose) {
  var len = instances.length;
  var index = -1;
  for (var i = 0; i < len; i++) {
    if (id === instances[i].id) {
      index = i;
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
  if (len <= 1 || index === -1 || index > instances.length - 1) return;
  var removedHeight = instances[index].$el.offsetHeight;
  for (var _i = index; _i < len - 1; _i++) {
    var dom = instances[_i].$el;
    dom.style['top'] = parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px';
  }
};

main_Message.closeAll = function () {
  for (var i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

/* harmony default export */ var message_src_main = (main_Message);
// CONCATENATED MODULE: ./packages/message/index.js

/* harmony default export */ var packages_message = (message_src_main);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/notification/src/main.vue?vue&type=template&id=43dbc3d8&
var mainvue_type_template_id_43dbc3d8_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "el-notification-fade" } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.visible,
            expression: "visible"
          }
        ],
        class: ["el-notification", _vm.customClass, _vm.horizontalClass],
        style: _vm.positionStyle,
        attrs: { role: "alert" },
        on: {
          mouseenter: function($event) {
            return _vm.clearTimer()
          },
          mouseleave: function($event) {
            return _vm.startTimer()
          },
          click: _vm.click
        }
      },
      [
        _vm.type || _vm.iconClass
          ? _c("i", {
              staticClass: "el-notification__icon",
              class: [_vm.typeClass, _vm.iconClass]
            })
          : _vm._e(),
        _c(
          "div",
          {
            staticClass: "el-notification__group",
            class: { "is-with-icon": _vm.typeClass || _vm.iconClass }
          },
          [
            _c("h2", {
              staticClass: "el-notification__title",
              domProps: { textContent: _vm._s(_vm.title) }
            }),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.message,
                    expression: "message"
                  }
                ],
                staticClass: "el-notification__content"
              },
              [
                _vm._t("default", [
                  !_vm.dangerouslyUseHTMLString
                    ? _c("p", [_vm._v(_vm._s(_vm.message))])
                    : _c("p", { domProps: { innerHTML: _vm._s(_vm.message) } })
                ])
              ],
              2
            ),
            _vm.showClose
              ? _c("div", {
                  staticClass: "el-notification__closeBtn el-icon-close",
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.close($event)
                    }
                  }
                })
              : _vm._e()
          ]
        )
      ]
    )
  ])
}
var mainvue_type_template_id_43dbc3d8_staticRenderFns = []
mainvue_type_template_id_43dbc3d8_render._withStripped = true


// CONCATENATED MODULE: ./packages/notification/src/main.vue?vue&type=template&id=43dbc3d8&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/notification/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var mainvue_type_script_lang_js_typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
};

/* harmony default export */ var notification_src_mainvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      visible: false,
      title: '',
      message: '',
      duration: 4500,
      type: '',
      showClose: true,
      customClass: '',
      iconClass: '',
      onClose: null,
      onClick: null,
      closed: false,
      verticalOffset: 0,
      timer: null,
      dangerouslyUseHTMLString: false,
      position: 'top-right'
    };
  },


  computed: {
    typeClass: function typeClass() {
      return this.type && mainvue_type_script_lang_js_typeMap[this.type] ? 'el-icon-' + mainvue_type_script_lang_js_typeMap[this.type] : '';
    },
    horizontalClass: function horizontalClass() {
      return this.position.indexOf('right') > -1 ? 'right' : 'left';
    },
    verticalProperty: function verticalProperty() {
      return (/^top-/.test(this.position) ? 'top' : 'bottom'
      );
    },
    positionStyle: function positionStyle() {
      var _ref;

      return _ref = {}, _ref[this.verticalProperty] = this.verticalOffset + 'px', _ref;
    }
  },

  watch: {
    closed: function closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener('transitionend', this.destroyElement);
      }
    }
  },

  methods: {
    destroyElement: function destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    click: function click() {
      if (typeof this.onClick === 'function') {
        this.onClick();
      }
    },
    close: function close() {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose();
      }
    },
    clearTimer: function clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer: function startTimer() {
      var _this = this;

      if (this.duration > 0) {
        this.timer = setTimeout(function () {
          if (!_this.closed) {
            _this.close();
          }
        }, this.duration);
      }
    },
    keydown: function keydown(e) {
      if (e.keyCode === 46 || e.keyCode === 8) {
        this.clearTimer(); // detele 取消倒计时
      } else if (e.keyCode === 27) {
        // esc关闭消息
        if (!this.closed) {
          this.close();
        }
      } else {
        this.startTimer(); // 恢复倒计时
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.duration > 0) {
      this.timer = setTimeout(function () {
        if (!_this2.closed) {
          _this2.close();
        }
      }, this.duration);
    }
    document.addEventListener('keydown', this.keydown);
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('keydown', this.keydown);
  }
});
// CONCATENATED MODULE: ./packages/notification/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_notification_src_mainvue_type_script_lang_js_ = (notification_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/notification/src/main.vue





/* normalize component */

var notification_src_main_component = normalizeComponent(
  packages_notification_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_43dbc3d8_render,
  mainvue_type_template_id_43dbc3d8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var notification_src_main_api; }
notification_src_main_component.options.__file = "packages/notification/src/main.vue"
/* harmony default export */ var notification_src_main = (notification_src_main_component.exports);
// CONCATENATED MODULE: ./packages/notification/src/main.js




var NotificationConstructor = external_vue_default.a.extend(notification_src_main);

var src_main_instance = void 0;
var main_instances = [];
var main_seed = 1;

var main_Notification = function Notification(options) {
  if (external_vue_default.a.prototype.$isServer) return;
  options = options || {};
  var userOnClose = options.onClose;
  var id = 'notification_' + main_seed++;
  var position = options.position || 'top-right';

  options.onClose = function () {
    Notification.close(id, userOnClose);
  };

  src_main_instance = new NotificationConstructor({
    data: options
  });

  if (Object(vdom_["isVNode"])(options.message)) {
    src_main_instance.$slots.default = [options.message];
    options.message = 'REPLACED_BY_VNODE';
  }
  src_main_instance.id = id;
  src_main_instance.$mount();
  document.body.appendChild(src_main_instance.$el);
  src_main_instance.visible = true;
  src_main_instance.dom = src_main_instance.$el;
  src_main_instance.dom.style.zIndex = popup_["PopupManager"].nextZIndex();

  var verticalOffset = options.offset || 0;
  main_instances.filter(function (item) {
    return item.position === position;
  }).forEach(function (item) {
    verticalOffset += item.$el.offsetHeight + 16;
  });
  verticalOffset += 16;
  src_main_instance.verticalOffset = verticalOffset;
  main_instances.push(src_main_instance);
  return src_main_instance;
};

['success', 'warning', 'info', 'error'].forEach(function (type) {
  main_Notification[type] = function (options) {
    if (typeof options === 'string' || Object(vdom_["isVNode"])(options)) {
      options = {
        message: options
      };
    }
    options.type = type;
    return main_Notification(options);
  };
});

main_Notification.close = function (id, userOnClose) {
  var index = -1;
  var len = main_instances.length;
  var instance = main_instances.filter(function (instance, i) {
    if (instance.id === id) {
      index = i;
      return true;
    }
    return false;
  })[0];
  if (!instance) return;

  if (typeof userOnClose === 'function') {
    userOnClose(instance);
  }
  main_instances.splice(index, 1);

  if (len <= 1) return;
  var position = instance.position;
  var removedHeight = instance.dom.offsetHeight;
  for (var i = index; i < len - 1; i++) {
    if (main_instances[i].position === position) {
      main_instances[i].dom.style[instance.verticalProperty] = parseInt(main_instances[i].dom.style[instance.verticalProperty], 10) - removedHeight - 16 + 'px';
    }
  }
};

main_Notification.closeAll = function () {
  for (var i = main_instances.length - 1; i >= 0; i--) {
    main_instances[i].close();
  }
};

/* harmony default export */ var packages_notification_src_main = (main_Notification);
// CONCATENATED MODULE: ./packages/notification/index.js

/* harmony default export */ var notification = (packages_notification_src_main);
// CONCATENATED MODULE: ./src/utils/aria-utils.js
var aria = aria || {};

aria.Utils = aria.Utils || {};

/**
 * @desc Set focus on descendant nodes until the first focusable element is
 *       found.
 * @param element
 *          DOM node for which to find the first focusable descendant.
 * @returns
 *  true if a focusable element is found and focus is set.
 */
aria.Utils.focusFirstDescendant = function (element) {
  for (var i = 0; i < element.childNodes.length; i++) {
    var child = element.childNodes[i];
    if (aria.Utils.attemptFocus(child) || aria.Utils.focusFirstDescendant(child)) {
      return true;
    }
  }
  return false;
};

/**
 * @desc Find the last descendant node that is focusable.
 * @param element
 *          DOM node for which to find the last focusable descendant.
 * @returns
 *  true if a focusable element is found and focus is set.
 */

aria.Utils.focusLastDescendant = function (element) {
  for (var i = element.childNodes.length - 1; i >= 0; i--) {
    var child = element.childNodes[i];
    if (aria.Utils.attemptFocus(child) || aria.Utils.focusLastDescendant(child)) {
      return true;
    }
  }
  return false;
};

/**
 * @desc Set Attempt to set focus on the current node.
 * @param element
 *          The node to attempt to focus on.
 * @returns
 *  true if element is focused.
 */
aria.Utils.attemptFocus = function (element) {
  if (!aria.Utils.isFocusable(element)) {
    return false;
  }
  aria.Utils.IgnoreUtilFocusChanges = true;
  try {
    element.focus();
  } catch (e) {}
  aria.Utils.IgnoreUtilFocusChanges = false;
  return document.activeElement === element;
};

aria.Utils.isFocusable = function (element) {
  if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute('tabIndex') !== null) {
    return true;
  }

  if (element.disabled) {
    return false;
  }

  switch (element.nodeName) {
    case 'A':
      return !!element.href && element.rel !== 'ignore';
    case 'INPUT':
      return element.type !== 'hidden' && element.type !== 'file';
    case 'BUTTON':
    case 'SELECT':
    case 'TEXTAREA':
      return true;
    default:
      return false;
  }
};

/**
 * 触发一个事件
 * mouseenter, mouseleave, mouseover, keyup, change, click 等
 * @param  {Element} elm
 * @param  {String} name
 * @param  {*} opts
 */
aria.Utils.triggerEvent = function (elm, name) {
  var eventName = void 0;

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents';
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent';
  } else {
    eventName = 'HTMLEvents';
  }
  var evt = document.createEvent(eventName);

  for (var _len = arguments.length, opts = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    opts[_key - 2] = arguments[_key];
  }

  evt.initEvent.apply(evt, [name].concat(opts));
  elm.dispatchEvent ? elm.dispatchEvent(evt) : elm.fireEvent('on' + name, evt);

  return elm;
};

aria.Utils.keys = {
  tab: 9,
  enter: 13,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  esc: 27
};

/* harmony default export */ var aria_utils = (aria.Utils);
// CONCATENATED MODULE: ./src/utils/menu/aria-submenu.js


var SubMenu = function SubMenu(parent, domNode) {
  this.domNode = domNode;
  this.parent = parent;
  this.subMenuItems = [];
  this.subIndex = 0;
  this.init();
};

SubMenu.prototype.init = function () {
  this.subMenuItems = this.domNode.querySelectorAll('li');
  this.addListeners();
};

SubMenu.prototype.gotoSubIndex = function (idx) {
  if (idx === this.subMenuItems.length) {
    idx = 0;
  } else if (idx < 0) {
    idx = this.subMenuItems.length - 1;
  }
  this.subMenuItems[idx].focus();
  this.subIndex = idx;
};

SubMenu.prototype.addListeners = function () {
  var _this = this;

  var keys = aria_utils.keys;
  var parentNode = this.parent.domNode;
  Array.prototype.forEach.call(this.subMenuItems, function (el) {
    el.addEventListener('keydown', function (event) {
      var prevDef = false;
      switch (event.keyCode) {
        case keys.down:
          _this.gotoSubIndex(_this.subIndex + 1);
          prevDef = true;
          break;
        case keys.up:
          _this.gotoSubIndex(_this.subIndex - 1);
          prevDef = true;
          break;
        case keys.tab:
          aria_utils.triggerEvent(parentNode, 'mouseleave');
          break;
        case keys.enter:
        case keys.space:
          prevDef = true;
          event.currentTarget.click();
          break;
      }
      if (prevDef) {
        event.preventDefault();
        event.stopPropagation();
      }
      return false;
    });
  });
};

/* harmony default export */ var aria_submenu = (SubMenu);
// CONCATENATED MODULE: ./src/utils/menu/aria-menuitem.js



var MenuItem = function MenuItem(domNode) {
  this.domNode = domNode;
  this.submenu = null;
  this.init();
};

MenuItem.prototype.init = function () {
  this.domNode.setAttribute('tabindex', '0');
  var menuChild = this.domNode.querySelector('.el-menu');
  if (menuChild) {
    this.submenu = new aria_submenu(this, menuChild);
  }
  this.addListeners();
};

MenuItem.prototype.addListeners = function () {
  var _this = this;

  var keys = aria_utils.keys;
  this.domNode.addEventListener('keydown', function (event) {
    var prevDef = false;
    switch (event.keyCode) {
      case keys.down:
        aria_utils.triggerEvent(event.currentTarget, 'mouseenter');
        _this.submenu && _this.submenu.gotoSubIndex(0);
        prevDef = true;
        break;
      case keys.up:
        aria_utils.triggerEvent(event.currentTarget, 'mouseenter');
        _this.submenu && _this.submenu.gotoSubIndex(_this.submenu.subMenuItems.length - 1);
        prevDef = true;
        break;
      case keys.tab:
        aria_utils.triggerEvent(event.currentTarget, 'mouseleave');
        break;
      case keys.enter:
      case keys.space:
        prevDef = true;
        event.currentTarget.click();
        break;
    }
    if (prevDef) {
      event.preventDefault();
    }
  });
};

/* harmony default export */ var aria_menuitem = (MenuItem);
// CONCATENATED MODULE: ./src/utils/menu/aria-menubar.js


var Menu = function Menu(domNode) {
  this.domNode = domNode;
  this.init();
};

Menu.prototype.init = function () {
  var menuChildren = this.domNode.childNodes;
  [].filter.call(menuChildren, function (child) {
    return child.nodeType === 1;
  }).forEach(function (child) {
    new aria_menuitem(child); // eslint-disable-line
  });
};
/* harmony default export */ var aria_menubar = (Menu);
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/menu/src/menu.vue?vue&type=script&lang=js&






/* harmony default export */ var menuvue_type_script_lang_js_ = ({
  name: 'ElMenu',

  render: function render(h) {
    var component = h(
      'ul',
      {
        attrs: {
          role: 'menubar'
        },
        key: +this.collapse,
        style: { backgroundColor: this.backgroundColor || '' },
        'class': {
          'el-menu--horizontal': this.mode === 'horizontal',
          'el-menu--collapse': this.collapse,
          "el-menu": true
        }
      },
      [this.$slots.default]
    );

    if (this.collapseTransition) {
      return h('el-menu-collapse-transition', [component]);
    } else {
      return component;
    }
  },


  componentName: 'ElMenu',

  mixins: [emitter_default.a, migrating_default.a],

  provide: function provide() {
    return {
      rootMenu: this
    };
  },


  components: {
    'el-menu-collapse-transition': {
      functional: true,
      render: function render(createElement, context) {
        var data = {
          props: {
            mode: 'out-in'
          },
          on: {
            beforeEnter: function beforeEnter(el) {
              el.style.opacity = 0.2;
            },
            enter: function enter(el) {
              Object(dom_["addClass"])(el, 'el-opacity-transition');
              el.style.opacity = 1;
            },
            afterEnter: function afterEnter(el) {
              Object(dom_["removeClass"])(el, 'el-opacity-transition');
              el.style.opacity = '';
            },
            beforeLeave: function beforeLeave(el) {
              if (!el.dataset) el.dataset = {};

              if (Object(dom_["hasClass"])(el, 'el-menu--collapse')) {
                Object(dom_["removeClass"])(el, 'el-menu--collapse');
                el.dataset.oldOverflow = el.style.overflow;
                el.dataset.scrollWidth = el.clientWidth;
                Object(dom_["addClass"])(el, 'el-menu--collapse');
              } else {
                Object(dom_["addClass"])(el, 'el-menu--collapse');
                el.dataset.oldOverflow = el.style.overflow;
                el.dataset.scrollWidth = el.clientWidth;
                Object(dom_["removeClass"])(el, 'el-menu--collapse');
              }

              el.style.width = el.scrollWidth + 'px';
              el.style.overflow = 'hidden';
            },
            leave: function leave(el) {
              Object(dom_["addClass"])(el, 'horizontal-collapse-transition');
              el.style.width = el.dataset.scrollWidth + 'px';
            }
          }
        };
        return createElement('transition', data, context.children);
      }
    }
  },

  props: {
    mode: {
      type: String,
      default: 'vertical'
    },
    defaultActive: {
      type: String,
      default: ''
    },
    defaultOpeneds: Array,
    uniqueOpened: Boolean,
    router: Boolean,
    menuTrigger: {
      type: String,
      default: 'hover'
    },
    collapse: Boolean,
    backgroundColor: String,
    textColor: String,
    activeTextColor: String,
    collapseTransition: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      activeIndex: this.defaultActive,
      openedMenus: this.defaultOpeneds && !this.collapse ? this.defaultOpeneds.slice(0) : [],
      items: {},
      submenus: {}
    };
  },

  computed: {
    hoverBackground: function hoverBackground() {
      return this.backgroundColor ? this.mixColor(this.backgroundColor, 0.2) : '';
    },
    isMenuPopup: function isMenuPopup() {
      return this.mode === 'horizontal' || this.mode === 'vertical' && this.collapse;
    }
  },
  watch: {
    defaultActive: function defaultActive(value) {
      if (!this.items[value]) {
        this.activeIndex = null;
      }
      this.updateActiveIndex(value);
    },
    defaultOpeneds: function defaultOpeneds(value) {
      if (!this.collapse) {
        this.openedMenus = value;
      }
    },
    collapse: function collapse(value) {
      if (value) this.openedMenus = [];
      this.broadcast('ElSubmenu', 'toggle-collapse', value);
    }
  },
  methods: {
    updateActiveIndex: function updateActiveIndex(val) {
      var item = this.items[val] || this.items[this.activeIndex] || this.items[this.defaultActive];
      if (item) {
        this.activeIndex = item.index;
        this.initOpenedMenu();
      } else {
        this.activeIndex = null;
      }
    },
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'theme': 'theme is removed.'
        }
      };
    },
    getColorChannels: function getColorChannels(color) {
      color = color.replace('#', '');
      if (/^[0-9a-fA-F]{3}$/.test(color)) {
        color = color.split('');
        for (var i = 2; i >= 0; i--) {
          color.splice(i, 0, color[i]);
        }
        color = color.join('');
      }
      if (/^[0-9a-fA-F]{6}$/.test(color)) {
        return {
          red: parseInt(color.slice(0, 2), 16),
          green: parseInt(color.slice(2, 4), 16),
          blue: parseInt(color.slice(4, 6), 16)
        };
      } else {
        return {
          red: 255,
          green: 255,
          blue: 255
        };
      }
    },
    mixColor: function mixColor(color, percent) {
      var _getColorChannels = this.getColorChannels(color),
          red = _getColorChannels.red,
          green = _getColorChannels.green,
          blue = _getColorChannels.blue;

      if (percent > 0) {
        // shade given color
        red *= 1 - percent;
        green *= 1 - percent;
        blue *= 1 - percent;
      } else {
        // tint given color
        red += (255 - red) * percent;
        green += (255 - green) * percent;
        blue += (255 - blue) * percent;
      }
      return 'rgb(' + Math.round(red) + ', ' + Math.round(green) + ', ' + Math.round(blue) + ')';
    },
    addItem: function addItem(item) {
      this.$set(this.items, item.index, item);
    },
    removeItem: function removeItem(item) {
      delete this.items[item.index];
    },
    addSubmenu: function addSubmenu(item) {
      this.$set(this.submenus, item.index, item);
    },
    removeSubmenu: function removeSubmenu(item) {
      delete this.submenus[item.index];
    },
    openMenu: function openMenu(index, indexPath) {
      var openedMenus = this.openedMenus;
      if (openedMenus.indexOf(index) !== -1) return;
      // 将不在该菜单路径下的其余菜单收起
      // collapse all menu that are not under current menu item
      if (this.uniqueOpened) {
        this.openedMenus = openedMenus.filter(function (index) {
          return indexPath.indexOf(index) !== -1;
        });
      }
      this.openedMenus.push(index);
    },
    closeMenu: function closeMenu(index) {
      var i = this.openedMenus.indexOf(index);
      if (i !== -1) {
        this.openedMenus.splice(i, 1);
      }
    },
    handleSubmenuClick: function handleSubmenuClick(submenu) {
      var index = submenu.index,
          indexPath = submenu.indexPath;

      var isOpened = this.openedMenus.indexOf(index) !== -1;

      if (isOpened) {
        this.closeMenu(index);
        this.$emit('close', index, indexPath);
      } else {
        this.openMenu(index, indexPath);
        this.$emit('open', index, indexPath);
      }
    },
    handleItemClick: function handleItemClick(item) {
      var _this = this;

      var index = item.index,
          indexPath = item.indexPath;

      var oldActiveIndex = this.activeIndex;
      var hasIndex = item.index !== null;

      if (hasIndex) {
        this.activeIndex = item.index;
      }

      this.$emit('select', index, indexPath, item);

      if (this.mode === 'horizontal' || this.collapse) {
        this.openedMenus = [];
      }

      if (this.router && hasIndex) {
        this.routeToItem(item, function (error) {
          _this.activeIndex = oldActiveIndex;
          if (error) console.error(error);
        });
      }
    },

    // 初始化展开菜单
    // initialize opened menu
    initOpenedMenu: function initOpenedMenu() {
      var _this2 = this;

      var index = this.activeIndex;
      var activeItem = this.items[index];
      if (!activeItem || this.mode === 'horizontal' || this.collapse) return;

      var indexPath = activeItem.indexPath;

      // 展开该菜单项的路径上所有子菜单
      // expand all submenus of the menu item
      indexPath.forEach(function (index) {
        var submenu = _this2.submenus[index];
        submenu && _this2.openMenu(index, submenu.indexPath);
      });
    },
    routeToItem: function routeToItem(item, onError) {
      var route = item.route || item.index;
      try {
        this.$router.push(route, function () {}, onError);
      } catch (e) {
        console.error(e);
      }
    },
    open: function open(index) {
      var _this3 = this;

      var indexPath = this.submenus[index.toString()].indexPath;

      indexPath.forEach(function (i) {
        return _this3.openMenu(i, indexPath);
      });
    },
    close: function close(index) {
      this.closeMenu(index);
    }
  },
  mounted: function mounted() {
    this.initOpenedMenu();
    this.$on('item-click', this.handleItemClick);
    this.$on('submenu-click', this.handleSubmenuClick);
    if (this.mode === 'horizontal') {
      new aria_menubar(this.$el); // eslint-disable-line
    }
    this.$watch('items', this.updateActiveIndex);
  }
});
// CONCATENATED MODULE: ./packages/menu/src/menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_menuvue_type_script_lang_js_ = (menuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/menu/src/menu.vue
var menu_render, menu_staticRenderFns




/* normalize component */

var menu_component = normalizeComponent(
  src_menuvue_type_script_lang_js_,
  menu_render,
  menu_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var menu_api; }
menu_component.options.__file = "packages/menu/src/menu.vue"
/* harmony default export */ var src_menu = (menu_component.exports);
// CONCATENATED MODULE: ./packages/menu/index.js


/* istanbul ignore next */
src_menu.install = function (Vue) {
  Vue.component(src_menu.name, src_menu);
};

/* harmony default export */ var packages_menu = (src_menu);
// CONCATENATED MODULE: ./packages/menu/src/menu-mixin.js
/* harmony default export */ var menu_mixin = ({
  inject: ['rootMenu'],
  computed: {
    indexPath: function indexPath() {
      var path = [this.index];
      var parent = this.$parent;
      while (parent.$options.componentName !== 'ElMenu') {
        if (parent.index) {
          path.unshift(parent.index);
        }
        parent = parent.$parent;
      }
      return path;
    },
    parentMenu: function parentMenu() {
      var parent = this.$parent;
      while (parent && ['ElMenu', 'ElSubmenu'].indexOf(parent.$options.componentName) === -1) {
        parent = parent.$parent;
      }
      return parent;
    },
    paddingStyle: function paddingStyle() {
      if (this.rootMenu.mode !== 'vertical') return {};

      var padding = 20;
      var parent = this.$parent;

      if (this.rootMenu.collapse) {
        padding = 20;
      } else {
        while (parent && parent.$options.componentName !== 'ElMenu') {
          if (parent.$options.componentName === 'ElSubmenu') {
            padding += 20;
          }
          parent = parent.$parent;
        }
      }
      return { paddingLeft: padding + 'px' };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/menu/src/submenu.vue?vue&type=script&lang=js&






var poperMixins = {
  props: {
    transformOrigin: {
      type: [Boolean, String],
      default: false
    },
    offset: vue_popper_default.a.props.offset,
    boundariesPadding: vue_popper_default.a.props.boundariesPadding,
    popperOptions: vue_popper_default.a.props.popperOptions
  },
  data: vue_popper_default.a.data,
  methods: vue_popper_default.a.methods,
  beforeDestroy: vue_popper_default.a.beforeDestroy,
  deactivated: vue_popper_default.a.deactivated
};

/* harmony default export */ var submenuvue_type_script_lang_js_ = ({
  name: 'ElSubmenu',

  componentName: 'ElSubmenu',

  mixins: [menu_mixin, emitter_default.a, poperMixins],

  components: { ElCollapseTransition: collapse_transition_default.a },

  props: {
    index: {
      type: String,
      required: true
    },
    showTimeout: {
      type: Number,
      default: 300
    },
    hideTimeout: {
      type: Number,
      default: 300
    },
    popperClass: String,
    disabled: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: undefined
    }
  },

  data: function data() {
    return {
      popperJS: null,
      timeout: null,
      items: {},
      submenus: {},
      mouseInChild: false
    };
  },

  watch: {
    opened: function opened(val) {
      var _this = this;

      if (this.isMenuPopup) {
        this.$nextTick(function (_) {
          _this.updatePopper();
        });
      }
    }
  },
  computed: {
    // popper option
    appendToBody: function appendToBody() {
      return this.popperAppendToBody === undefined ? this.isFirstLevel : this.popperAppendToBody;
    },
    menuTransitionName: function menuTransitionName() {
      return this.rootMenu.collapse ? 'el-zoom-in-left' : 'el-zoom-in-top';
    },
    opened: function opened() {
      return this.rootMenu.openedMenus.indexOf(this.index) > -1;
    },
    active: function active() {
      var isActive = false;
      var submenus = this.submenus;
      var items = this.items;

      Object.keys(items).forEach(function (index) {
        if (items[index].active) {
          isActive = true;
        }
      });

      Object.keys(submenus).forEach(function (index) {
        if (submenus[index].active) {
          isActive = true;
        }
      });

      return isActive;
    },
    hoverBackground: function hoverBackground() {
      return this.rootMenu.hoverBackground;
    },
    backgroundColor: function backgroundColor() {
      return this.rootMenu.backgroundColor || '';
    },
    activeTextColor: function activeTextColor() {
      return this.rootMenu.activeTextColor || '';
    },
    textColor: function textColor() {
      return this.rootMenu.textColor || '';
    },
    mode: function mode() {
      return this.rootMenu.mode;
    },
    isMenuPopup: function isMenuPopup() {
      return this.rootMenu.isMenuPopup;
    },
    titleStyle: function titleStyle() {
      if (this.mode !== 'horizontal') {
        return {
          color: this.textColor
        };
      }
      return {
        borderBottomColor: this.active ? this.rootMenu.activeTextColor ? this.activeTextColor : '' : 'transparent',
        color: this.active ? this.activeTextColor : this.textColor
      };
    },
    isFirstLevel: function isFirstLevel() {
      var isFirstLevel = true;
      var parent = this.$parent;
      while (parent && parent !== this.rootMenu) {
        if (['ElSubmenu', 'ElMenuItemGroup'].indexOf(parent.$options.componentName) > -1) {
          isFirstLevel = false;
          break;
        } else {
          parent = parent.$parent;
        }
      }
      return isFirstLevel;
    }
  },
  methods: {
    handleCollapseToggle: function handleCollapseToggle(value) {
      if (value) {
        this.initPopper();
      } else {
        this.doDestroy();
      }
    },
    addItem: function addItem(item) {
      this.$set(this.items, item.index, item);
    },
    removeItem: function removeItem(item) {
      delete this.items[item.index];
    },
    addSubmenu: function addSubmenu(item) {
      this.$set(this.submenus, item.index, item);
    },
    removeSubmenu: function removeSubmenu(item) {
      delete this.submenus[item.index];
    },
    handleClick: function handleClick() {
      var rootMenu = this.rootMenu,
          disabled = this.disabled;

      if (rootMenu.menuTrigger === 'hover' && rootMenu.mode === 'horizontal' || rootMenu.collapse && rootMenu.mode === 'vertical' || disabled) {
        return;
      }
      this.dispatch('ElMenu', 'submenu-click', this);
    },
    handleMouseenter: function handleMouseenter(event) {
      var _this2 = this;

      var showTimeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.showTimeout;


      if (!('ActiveXObject' in window) && event.type === 'focus' && !event.relatedTarget) {
        return;
      }
      var rootMenu = this.rootMenu,
          disabled = this.disabled;

      if (rootMenu.menuTrigger === 'click' && rootMenu.mode === 'horizontal' || !rootMenu.collapse && rootMenu.mode === 'vertical' || disabled) {
        return;
      }
      this.dispatch('ElSubmenu', 'mouse-enter-child');
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        _this2.rootMenu.openMenu(_this2.index, _this2.indexPath);
      }, showTimeout);

      if (this.appendToBody) {
        this.$parent.$el.dispatchEvent(new MouseEvent('mouseenter'));
      }
    },
    handleMouseleave: function handleMouseleave() {
      var _this3 = this;

      var deepDispatch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var rootMenu = this.rootMenu;

      if (rootMenu.menuTrigger === 'click' && rootMenu.mode === 'horizontal' || !rootMenu.collapse && rootMenu.mode === 'vertical') {
        return;
      }
      this.dispatch('ElSubmenu', 'mouse-leave-child');
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        !_this3.mouseInChild && _this3.rootMenu.closeMenu(_this3.index);
      }, this.hideTimeout);

      if (this.appendToBody && deepDispatch) {
        if (this.$parent.$options.name === 'ElSubmenu') {
          this.$parent.handleMouseleave(true);
        }
      }
    },
    handleTitleMouseenter: function handleTitleMouseenter() {
      if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return;
      var title = this.$refs['submenu-title'];
      title && (title.style.backgroundColor = this.rootMenu.hoverBackground);
    },
    handleTitleMouseleave: function handleTitleMouseleave() {
      if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return;
      var title = this.$refs['submenu-title'];
      title && (title.style.backgroundColor = this.rootMenu.backgroundColor || '');
    },
    updatePlacement: function updatePlacement() {
      this.currentPlacement = this.mode === 'horizontal' && this.isFirstLevel ? 'bottom-start' : 'right-start';
    },
    initPopper: function initPopper() {
      this.referenceElm = this.$el;
      this.popperElm = this.$refs.menu;
      this.updatePlacement();
    }
  },
  created: function created() {
    var _this4 = this;

    this.$on('toggle-collapse', this.handleCollapseToggle);
    this.$on('mouse-enter-child', function () {
      _this4.mouseInChild = true;
      clearTimeout(_this4.timeout);
    });
    this.$on('mouse-leave-child', function () {
      _this4.mouseInChild = false;
      clearTimeout(_this4.timeout);
    });
  },
  mounted: function mounted() {
    this.parentMenu.addSubmenu(this);
    this.rootMenu.addSubmenu(this);
    this.initPopper();
  },
  beforeDestroy: function beforeDestroy() {
    this.parentMenu.removeSubmenu(this);
    this.rootMenu.removeSubmenu(this);
  },
  render: function render(h) {
    var _this5 = this;

    var active = this.active,
        opened = this.opened,
        paddingStyle = this.paddingStyle,
        titleStyle = this.titleStyle,
        backgroundColor = this.backgroundColor,
        rootMenu = this.rootMenu,
        currentPlacement = this.currentPlacement,
        menuTransitionName = this.menuTransitionName,
        mode = this.mode,
        disabled = this.disabled,
        popperClass = this.popperClass,
        $slots = this.$slots,
        isFirstLevel = this.isFirstLevel;


    var popupMenu = h(
      'transition',
      {
        attrs: { name: menuTransitionName }
      },
      [h(
        'div',
        {
          ref: 'menu',
          directives: [{
            name: 'show',
            value: opened
          }],

          'class': ['el-menu--' + mode, popperClass],
          on: {
            'mouseenter': function mouseenter($event) {
              return _this5.handleMouseenter($event, 100);
            },
            'mouseleave': function mouseleave() {
              return _this5.handleMouseleave(true);
            },
            'focus': function focus($event) {
              return _this5.handleMouseenter($event, 100);
            }
          }
        },
        [h(
          'ul',
          {
            attrs: {
              role: 'menu'
            },
            'class': ['el-menu el-menu--popup', 'el-menu--popup-' + currentPlacement],
            style: { backgroundColor: rootMenu.backgroundColor || '' } },
          [$slots.default]
        )]
      )]
    );

    var inlineMenu = h('el-collapse-transition', [h(
      'ul',
      {
        attrs: {
          role: 'menu'
        },
        'class': 'el-menu el-menu--inline',
        directives: [{
          name: 'show',
          value: opened
        }],

        style: { backgroundColor: rootMenu.backgroundColor || '' } },
      [$slots.default]
    )]);

    var submenuTitleIcon = rootMenu.mode === 'horizontal' && isFirstLevel || rootMenu.mode === 'vertical' && !rootMenu.collapse ? 'el-icon-arrow-down' : 'el-icon-arrow-right';

    return h(
      'li',
      {
        'class': {
          'el-submenu': true,
          'is-active': active,
          'is-opened': opened,
          'is-disabled': disabled
        },
        attrs: { role: 'menuitem',
          'aria-haspopup': 'true',
          'aria-expanded': opened
        },
        on: {
          'mouseenter': this.handleMouseenter,
          'mouseleave': function mouseleave() {
            return _this5.handleMouseleave(false);
          },
          'focus': this.handleMouseenter
        }
      },
      [h(
        'div',
        {
          'class': 'el-submenu__title',
          ref: 'submenu-title',
          on: {
            'click': this.handleClick,
            'mouseenter': this.handleTitleMouseenter,
            'mouseleave': this.handleTitleMouseleave
          },

          style: [paddingStyle, titleStyle, { backgroundColor: backgroundColor }]
        },
        [$slots.title, h('i', { 'class': ['el-submenu__icon-arrow', submenuTitleIcon] })]
      ), this.isMenuPopup ? popupMenu : inlineMenu]
    );
  }
});
// CONCATENATED MODULE: ./packages/menu/src/submenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_submenuvue_type_script_lang_js_ = (submenuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/menu/src/submenu.vue
var submenu_render, submenu_staticRenderFns




/* normalize component */

var submenu_component = normalizeComponent(
  src_submenuvue_type_script_lang_js_,
  submenu_render,
  submenu_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var submenu_api; }
submenu_component.options.__file = "packages/menu/src/submenu.vue"
/* harmony default export */ var submenu = (submenu_component.exports);
// CONCATENATED MODULE: ./packages/submenu/index.js


/* istanbul ignore next */
submenu.install = function (Vue) {
  Vue.component(submenu.name, submenu);
};

/* harmony default export */ var packages_submenu = (submenu);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/menu/src/menu-item.vue?vue&type=template&id=2a5dbfea&
var menu_itemvue_type_template_id_2a5dbfea_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      staticClass: "el-menu-item",
      class: {
        "is-active": _vm.active,
        "is-disabled": _vm.disabled
      },
      style: [
        _vm.paddingStyle,
        _vm.itemStyle,
        { backgroundColor: _vm.backgroundColor }
      ],
      attrs: { role: "menuitem", tabindex: "-1" },
      on: {
        click: _vm.handleClick,
        mouseenter: _vm.onMouseEnter,
        focus: _vm.onMouseEnter,
        blur: _vm.onMouseLeave,
        mouseleave: _vm.onMouseLeave
      }
    },
    [
      _vm.parentMenu.$options.componentName === "ElMenu" &&
      _vm.rootMenu.collapse &&
      _vm.$slots.title
        ? _c("el-tooltip", { attrs: { effect: "dark", placement: "right" } }, [
            _c(
              "div",
              { attrs: { slot: "content" }, slot: "content" },
              [_vm._t("title")],
              2
            ),
            _c(
              "div",
              {
                staticStyle: {
                  position: "absolute",
                  left: "0",
                  top: "0",
                  height: "100%",
                  width: "100%",
                  display: "inline-block",
                  "box-sizing": "border-box",
                  padding: "0 20px"
                }
              },
              [_vm._t("default")],
              2
            )
          ])
        : [_vm._t("default"), _vm._t("title")]
    ],
    2
  )
}
var menu_itemvue_type_template_id_2a5dbfea_staticRenderFns = []
menu_itemvue_type_template_id_2a5dbfea_render._withStripped = true


// CONCATENATED MODULE: ./packages/menu/src/menu-item.vue?vue&type=template&id=2a5dbfea&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/menu/src/menu-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var menu_itemvue_type_script_lang_js_ = ({
  name: 'ElMenuItem',

  componentName: 'ElMenuItem',

  mixins: [menu_mixin, emitter_default.a],

  components: { ElTooltip: tooltip_default.a },

  props: {
    index: {
      default: null,
      validator: function validator(val) {
        return typeof val === 'string' || val === null;
      }
    },
    route: [String, Object],
    disabled: Boolean
  },
  computed: {
    active: function active() {
      return this.index === this.rootMenu.activeIndex;
    },
    hoverBackground: function hoverBackground() {
      return this.rootMenu.hoverBackground;
    },
    backgroundColor: function backgroundColor() {
      return this.rootMenu.backgroundColor || '';
    },
    activeTextColor: function activeTextColor() {
      return this.rootMenu.activeTextColor || '';
    },
    textColor: function textColor() {
      return this.rootMenu.textColor || '';
    },
    mode: function mode() {
      return this.rootMenu.mode;
    },
    itemStyle: function itemStyle() {
      var style = {
        color: this.active ? this.activeTextColor : this.textColor
      };
      if (this.mode === 'horizontal' && !this.isNested) {
        style.borderBottomColor = this.active ? this.rootMenu.activeTextColor ? this.activeTextColor : '' : 'transparent';
      }
      return style;
    },
    isNested: function isNested() {
      return this.parentMenu !== this.rootMenu;
    }
  },
  methods: {
    onMouseEnter: function onMouseEnter() {
      if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return;
      this.$el.style.backgroundColor = this.hoverBackground;
    },
    onMouseLeave: function onMouseLeave() {
      if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return;
      this.$el.style.backgroundColor = this.backgroundColor;
    },
    handleClick: function handleClick() {
      if (!this.disabled) {
        this.dispatch('ElMenu', 'item-click', this);
        this.$emit('click', this);
      }
    }
  },
  mounted: function mounted() {
    this.parentMenu.addItem(this);
    this.rootMenu.addItem(this);
  },
  beforeDestroy: function beforeDestroy() {
    this.parentMenu.removeItem(this);
    this.rootMenu.removeItem(this);
  }
});
// CONCATENATED MODULE: ./packages/menu/src/menu-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_menu_itemvue_type_script_lang_js_ = (menu_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/menu/src/menu-item.vue





/* normalize component */

var menu_item_component = normalizeComponent(
  src_menu_itemvue_type_script_lang_js_,
  menu_itemvue_type_template_id_2a5dbfea_render,
  menu_itemvue_type_template_id_2a5dbfea_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var menu_item_api; }
menu_item_component.options.__file = "packages/menu/src/menu-item.vue"
/* harmony default export */ var menu_item = (menu_item_component.exports);
// CONCATENATED MODULE: ./packages/menu-item/index.js


/* istanbul ignore next */
menu_item.install = function (Vue) {
  Vue.component(menu_item.name, menu_item);
};

/* harmony default export */ var packages_menu_item = (menu_item);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/menu/src/menu-item-group.vue?vue&type=template&id=543b7bdc&
var menu_item_groupvue_type_template_id_543b7bdc_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("li", { staticClass: "el-menu-item-group" }, [
    _c(
      "div",
      {
        staticClass: "el-menu-item-group__title",
        style: { paddingLeft: _vm.levelPadding + "px" }
      },
      [!_vm.$slots.title ? [_vm._v(_vm._s(_vm.title))] : _vm._t("title")],
      2
    ),
    _c("ul", [_vm._t("default")], 2)
  ])
}
var menu_item_groupvue_type_template_id_543b7bdc_staticRenderFns = []
menu_item_groupvue_type_template_id_543b7bdc_render._withStripped = true


// CONCATENATED MODULE: ./packages/menu/src/menu-item-group.vue?vue&type=template&id=543b7bdc&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/menu/src/menu-item-group.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var menu_item_groupvue_type_script_lang_js_ = ({
  name: 'ElMenuItemGroup',

  componentName: 'ElMenuItemGroup',

  inject: ['rootMenu'],
  props: {
    title: {
      type: String
    }
  },
  data: function data() {
    return {
      paddingLeft: 20
    };
  },

  computed: {
    levelPadding: function levelPadding() {
      var padding = 20;
      var parent = this.$parent;
      if (this.rootMenu.collapse) return 20;
      while (parent && parent.$options.componentName !== 'ElMenu') {
        if (parent.$options.componentName === 'ElSubmenu') {
          padding += 20;
        }
        parent = parent.$parent;
      }
      return padding;
    }
  }
});
// CONCATENATED MODULE: ./packages/menu/src/menu-item-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_menu_item_groupvue_type_script_lang_js_ = (menu_item_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/menu/src/menu-item-group.vue





/* normalize component */

var menu_item_group_component = normalizeComponent(
  src_menu_item_groupvue_type_script_lang_js_,
  menu_item_groupvue_type_template_id_543b7bdc_render,
  menu_item_groupvue_type_template_id_543b7bdc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var menu_item_group_api; }
menu_item_group_component.options.__file = "packages/menu/src/menu-item-group.vue"
/* harmony default export */ var menu_item_group = (menu_item_group_component.exports);
// CONCATENATED MODULE: ./packages/menu-item-group/index.js


/* istanbul ignore next */
menu_item_group.install = function (Vue) {
  Vue.component(menu_item_group.name, menu_item_group);
};

/* harmony default export */ var packages_menu_item_group = (menu_item_group);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/tabs/src/tab-bar.vue?vue&type=template&id=2031f33a&
var tab_barvue_type_template_id_2031f33a_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    staticClass: "el-tabs__active-bar",
    class: "is-" + _vm.rootTabs.tabPosition,
    style: _vm.barStyle
  })
}
var tab_barvue_type_template_id_2031f33a_staticRenderFns = []
tab_barvue_type_template_id_2031f33a_render._withStripped = true


// CONCATENATED MODULE: ./packages/tabs/src/tab-bar.vue?vue&type=template&id=2031f33a&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/tabs/src/tab-bar.vue?vue&type=script&lang=js&
//
//
//


/* harmony default export */ var tab_barvue_type_script_lang_js_ = ({
  name: 'TabBar',

  props: {
    tabs: Array
  },

  inject: ['rootTabs'],

  computed: {
    barStyle: {
      get: function get() {
        var _this = this;

        var style = {};
        var offset = 0;
        var tabSize = 0;
        var sizeName = ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'width' : 'height';
        var sizeDir = sizeName === 'width' ? 'x' : 'y';
        var firstUpperCase = function firstUpperCase(str) {
          return str.toLowerCase().replace(/( |^)[a-z]/g, function (L) {
            return L.toUpperCase();
          });
        };
        this.tabs.every(function (tab, index) {
          var $el = Object(util_["arrayFind"])(_this.$parent.$refs.tabs || [], function (t) {
            return t.id.replace('tab-', '') === tab.paneName;
          });
          if (!$el) {
            return false;
          }

          if (!tab.active) {
            offset += $el['client' + firstUpperCase(sizeName)];
            return true;
          } else {
            tabSize = $el['client' + firstUpperCase(sizeName)];
            if (sizeName === 'width' && _this.tabs.length > 1) {
              tabSize -= index === 0 || index === _this.tabs.length - 1 ? 20 : 40;
            }
            return false;
          }
        });

        if (sizeName === 'width' && offset !== 0) {
          offset += 20;
        }
        var transform = 'translate' + firstUpperCase(sizeDir) + '(' + offset + 'px)';
        style[sizeName] = tabSize + 'px';
        style.transform = transform;
        style.msTransform = transform;
        style.webkitTransform = transform;

        return style;
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/tabs/src/tab-bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tab_barvue_type_script_lang_js_ = (tab_barvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/tabs/src/tab-bar.vue





/* normalize component */

var tab_bar_component = normalizeComponent(
  src_tab_barvue_type_script_lang_js_,
  tab_barvue_type_template_id_2031f33a_render,
  tab_barvue_type_template_id_2031f33a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var tab_bar_api; }
tab_bar_component.options.__file = "packages/tabs/src/tab-bar.vue"
/* harmony default export */ var tab_bar = (tab_bar_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/tabs/src/tab-nav.vue?vue&type=script&lang=js&




function noop() {}
var tab_navvue_type_script_lang_js_firstUpperCase = function firstUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, function (L) {
    return L.toUpperCase();
  });
};

/* harmony default export */ var tab_navvue_type_script_lang_js_ = ({
  name: 'TabNav',

  components: {
    TabBar: tab_bar
  },

  inject: ['rootTabs'],

  props: {
    panes: Array,
    currentName: String,
    editable: Boolean,
    onTabClick: {
      type: Function,
      default: noop
    },
    onTabRemove: {
      type: Function,
      default: noop
    },
    type: String,
    stretch: Boolean
  },

  data: function data() {
    return {
      scrollable: false,
      navOffset: 0,
      isFocus: false,
      focusable: true
    };
  },


  computed: {
    navStyle: function navStyle() {
      var dir = ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'X' : 'Y';
      return {
        transform: 'translate' + dir + '(-' + this.navOffset + 'px)'
      };
    },
    sizeName: function sizeName() {
      return ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'width' : 'height';
    }
  },

  methods: {
    scrollPrev: function scrollPrev() {
      var containerSize = this.$refs.navScroll['offset' + tab_navvue_type_script_lang_js_firstUpperCase(this.sizeName)];
      var currentOffset = this.navOffset;

      if (!currentOffset) return;

      var newOffset = currentOffset > containerSize ? currentOffset - containerSize : 0;

      this.navOffset = newOffset;
    },
    scrollNext: function scrollNext() {
      var navSize = this.$refs.nav['offset' + tab_navvue_type_script_lang_js_firstUpperCase(this.sizeName)];
      var containerSize = this.$refs.navScroll['offset' + tab_navvue_type_script_lang_js_firstUpperCase(this.sizeName)];
      var currentOffset = this.navOffset;

      if (navSize - currentOffset <= containerSize) return;

      var newOffset = navSize - currentOffset > containerSize * 2 ? currentOffset + containerSize : navSize - containerSize;

      this.navOffset = newOffset;
    },
    scrollToActiveTab: function scrollToActiveTab() {
      if (!this.scrollable) return;
      var nav = this.$refs.nav;
      var activeTab = this.$el.querySelector('.is-active');
      if (!activeTab) return;
      var navScroll = this.$refs.navScroll;
      var activeTabBounding = activeTab.getBoundingClientRect();
      var navScrollBounding = navScroll.getBoundingClientRect();
      var maxOffset = nav.offsetWidth - navScrollBounding.width;
      var currentOffset = this.navOffset;
      var newOffset = currentOffset;

      if (activeTabBounding.left < navScrollBounding.left) {
        newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left);
      }
      if (activeTabBounding.right > navScrollBounding.right) {
        newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right;
      }

      newOffset = Math.max(newOffset, 0);
      this.navOffset = Math.min(newOffset, maxOffset);
    },
    update: function update() {
      if (!this.$refs.nav) return;
      var sizeName = this.sizeName;
      var navSize = this.$refs.nav['offset' + tab_navvue_type_script_lang_js_firstUpperCase(sizeName)];
      var containerSize = this.$refs.navScroll['offset' + tab_navvue_type_script_lang_js_firstUpperCase(sizeName)];
      var currentOffset = this.navOffset;

      if (containerSize < navSize) {
        var _currentOffset = this.navOffset;
        this.scrollable = this.scrollable || {};
        this.scrollable.prev = _currentOffset;
        this.scrollable.next = _currentOffset + containerSize < navSize;
        if (navSize - _currentOffset < containerSize) {
          this.navOffset = navSize - containerSize;
        }
      } else {
        this.scrollable = false;
        if (currentOffset > 0) {
          this.navOffset = 0;
        }
      }
    },
    changeTab: function changeTab(e) {
      var keyCode = e.keyCode;
      var nextIndex = void 0;
      var currentIndex = void 0,
          tabList = void 0;
      if ([37, 38, 39, 40].indexOf(keyCode) !== -1) {
        // 左右上下键更换tab
        tabList = e.currentTarget.querySelectorAll('[role=tab]');
        currentIndex = Array.prototype.indexOf.call(tabList, e.target);
      } else {
        return;
      }
      if (keyCode === 37 || keyCode === 38) {
        // left
        if (currentIndex === 0) {
          // first
          nextIndex = tabList.length - 1;
        } else {
          nextIndex = currentIndex - 1;
        }
      } else {
        // right
        if (currentIndex < tabList.length - 1) {
          // not last
          nextIndex = currentIndex + 1;
        } else {
          nextIndex = 0;
        }
      }
      tabList[nextIndex].focus(); // 改变焦点元素
      tabList[nextIndex].click(); // 选中下一个tab
      this.setFocus();
    },
    setFocus: function setFocus() {
      if (this.focusable) {
        this.isFocus = true;
      }
    },
    removeFocus: function removeFocus() {
      this.isFocus = false;
    },
    visibilityChangeHandler: function visibilityChangeHandler() {
      var _this = this;

      var visibility = document.visibilityState;
      if (visibility === 'hidden') {
        this.focusable = false;
      } else if (visibility === 'visible') {
        setTimeout(function () {
          _this.focusable = true;
        }, 50);
      }
    },
    windowBlurHandler: function windowBlurHandler() {
      this.focusable = false;
    },
    windowFocusHandler: function windowFocusHandler() {
      var _this2 = this;

      setTimeout(function () {
        _this2.focusable = true;
      }, 50);
    }
  },

  updated: function updated() {
    this.update();
  },
  render: function render(h) {
    var _this3 = this;

    var type = this.type,
        panes = this.panes,
        editable = this.editable,
        stretch = this.stretch,
        onTabClick = this.onTabClick,
        onTabRemove = this.onTabRemove,
        navStyle = this.navStyle,
        scrollable = this.scrollable,
        scrollNext = this.scrollNext,
        scrollPrev = this.scrollPrev,
        changeTab = this.changeTab,
        setFocus = this.setFocus,
        removeFocus = this.removeFocus;

    var scrollBtn = scrollable ? [h(
      'span',
      { 'class': ['el-tabs__nav-prev', scrollable.prev ? '' : 'is-disabled'], on: {
          'click': scrollPrev
        }
      },
      [h('i', { 'class': 'el-icon-arrow-left' })]
    ), h(
      'span',
      { 'class': ['el-tabs__nav-next', scrollable.next ? '' : 'is-disabled'], on: {
          'click': scrollNext
        }
      },
      [h('i', { 'class': 'el-icon-arrow-right' })]
    )] : null;

    var tabs = this._l(panes, function (pane, index) {
      var _ref;

      var tabName = pane.name || pane.index || index;
      var closable = pane.isClosable || editable;

      pane.index = '' + index;

      var btnClose = closable ? h('span', { 'class': 'el-icon-close', on: {
          'click': function click(ev) {
            onTabRemove(pane, ev);
          }
        }
      }) : null;

      var tabLabelContent = pane.$slots.label || pane.label;
      var tabindex = pane.active ? 0 : -1;
      return h(
        'div',
        {
          'class': (_ref = {
            'el-tabs__item': true
          }, _ref['is-' + _this3.rootTabs.tabPosition] = true, _ref['is-active'] = pane.active, _ref['is-disabled'] = pane.disabled, _ref['is-closable'] = closable, _ref['is-focus'] = _this3.isFocus, _ref),
          attrs: { id: 'tab-' + tabName,

            'aria-controls': 'pane-' + tabName,
            role: 'tab',
            'aria-selected': pane.active,

            tabindex: tabindex
          },
          key: 'tab-' + tabName, ref: 'tabs', refInFor: true,
          on: {
            'focus': function focus() {
              setFocus();
            },
            'blur': function blur() {
              removeFocus();
            },
            'click': function click(ev) {
              removeFocus();onTabClick(pane, tabName, ev);
            },
            'keydown': function keydown(ev) {
              if (closable && (ev.keyCode === 46 || ev.keyCode === 8)) {
                onTabRemove(pane, ev);
              }
            }
          }
        },
        [tabLabelContent, btnClose]
      );
    });
    return h(
      'div',
      { 'class': ['el-tabs__nav-wrap', scrollable ? 'is-scrollable' : '', 'is-' + this.rootTabs.tabPosition] },
      [scrollBtn, h(
        'div',
        { 'class': ['el-tabs__nav-scroll'], ref: 'navScroll' },
        [h(
          'div',
          {
            'class': ['el-tabs__nav', 'is-' + this.rootTabs.tabPosition, stretch && ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'is-stretch' : ''],
            ref: 'nav',
            style: navStyle,
            attrs: { role: 'tablist'
            },
            on: {
              'keydown': changeTab
            }
          },
          [!type ? h('tab-bar', {
            attrs: { tabs: panes }
          }) : null, tabs]
        )]
      )]
    );
  },
  mounted: function mounted() {
    var _this4 = this;

    Object(resize_event_["addResizeListener"])(this.$el, this.update);
    document.addEventListener('visibilitychange', this.visibilityChangeHandler);
    window.addEventListener('blur', this.windowBlurHandler);
    window.addEventListener('focus', this.windowFocusHandler);
    setTimeout(function () {
      _this4.scrollToActiveTab();
    }, 0);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$el && this.update) Object(resize_event_["removeResizeListener"])(this.$el, this.update);
    document.removeEventListener('visibilitychange', this.visibilityChangeHandler);
    window.removeEventListener('blur', this.windowBlurHandler);
    window.removeEventListener('focus', this.windowFocusHandler);
  }
});
// CONCATENATED MODULE: ./packages/tabs/src/tab-nav.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tab_navvue_type_script_lang_js_ = (tab_navvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/tabs/src/tab-nav.vue
var tab_nav_render, tab_nav_staticRenderFns




/* normalize component */

var tab_nav_component = normalizeComponent(
  src_tab_navvue_type_script_lang_js_,
  tab_nav_render,
  tab_nav_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var tab_nav_api; }
tab_nav_component.options.__file = "packages/tabs/src/tab-nav.vue"
/* harmony default export */ var tab_nav = (tab_nav_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/tabs/src/tabs.vue?vue&type=script&lang=js&



/* harmony default export */ var tabsvue_type_script_lang_js_ = ({
  name: 'ElTabs',

  components: {
    TabNav: tab_nav
  },

  props: {
    type: String,
    activeName: String,
    closable: Boolean,
    addable: Boolean,
    value: {},
    editable: Boolean,
    tabPosition: {
      type: String,
      default: 'top'
    },
    beforeLeave: Function,
    stretch: Boolean
  },

  provide: function provide() {
    return {
      rootTabs: this
    };
  },
  data: function data() {
    return {
      currentName: this.value || this.activeName,
      panes: []
    };
  },


  watch: {
    activeName: function activeName(value) {
      this.setCurrentName(value);
    },
    value: function value(_value) {
      this.setCurrentName(_value);
    },
    currentName: function currentName(value) {
      var _this = this;

      if (this.$refs.nav) {
        this.$nextTick(function () {
          _this.$refs.nav.$nextTick(function (_) {
            _this.$refs.nav.scrollToActiveTab();
          });
        });
      }
    }
  },

  methods: {
    calcPaneInstances: function calcPaneInstances() {
      var _this2 = this;

      var isForceUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.$slots.default) {
        var paneSlots = this.$slots.default.filter(function (vnode) {
          return vnode.tag && vnode.componentOptions && vnode.componentOptions.Ctor.options.name === 'ElTabPane';
        });
        // update indeed
        var panes = paneSlots.map(function (_ref) {
          var componentInstance = _ref.componentInstance;
          return componentInstance;
        });
        var panesChanged = !(panes.length === this.panes.length && panes.every(function (pane, index) {
          return pane === _this2.panes[index];
        }));
        if (isForceUpdate || panesChanged) {
          this.panes = panes;
        }
      } else if (this.panes.length !== 0) {
        this.panes = [];
      }
    },
    handleTabClick: function handleTabClick(tab, tabName, event) {
      if (tab.disabled) return;
      this.setCurrentName(tabName);
      this.$emit('tab-click', tab, event);
    },
    handleTabRemove: function handleTabRemove(pane, ev) {
      if (pane.disabled) return;
      ev.stopPropagation();
      this.$emit('edit', pane.name, 'remove');
      this.$emit('tab-remove', pane.name);
    },
    handleTabAdd: function handleTabAdd() {
      this.$emit('edit', null, 'add');
      this.$emit('tab-add');
    },
    setCurrentName: function setCurrentName(value) {
      var _this3 = this;

      var changeCurrentName = function changeCurrentName() {
        _this3.currentName = value;
        _this3.$emit('input', value);
      };
      if (this.currentName !== value && this.beforeLeave) {
        var before = this.beforeLeave(value, this.currentName);
        if (before && before.then) {
          before.then(function () {
            changeCurrentName();
            _this3.$refs.nav && _this3.$refs.nav.removeFocus();
          }, function () {
            // https://github.com/ElemeFE/element/pull/14816
            // ignore promise rejection in `before-leave` hook
          });
        } else if (before !== false) {
          changeCurrentName();
        }
      } else {
        changeCurrentName();
      }
    }
  },

  render: function render(h) {
    var _ref2;

    var type = this.type,
        handleTabClick = this.handleTabClick,
        handleTabRemove = this.handleTabRemove,
        handleTabAdd = this.handleTabAdd,
        currentName = this.currentName,
        panes = this.panes,
        editable = this.editable,
        addable = this.addable,
        tabPosition = this.tabPosition,
        stretch = this.stretch;


    var newButton = editable || addable ? h(
      'span',
      {
        'class': 'el-tabs__new-tab',
        on: {
          'click': handleTabAdd,
          'keydown': function keydown(ev) {
            if (ev.keyCode === 13) {
              handleTabAdd();
            }
          }
        },
        attrs: {
          tabindex: '0'
        }
      },
      [h('i', { 'class': 'el-icon-plus' })]
    ) : null;

    var navData = {
      props: {
        currentName: currentName,
        onTabClick: handleTabClick,
        onTabRemove: handleTabRemove,
        editable: editable,
        type: type,
        panes: panes,
        stretch: stretch
      },
      ref: 'nav'
    };
    var header = h(
      'div',
      { 'class': ['el-tabs__header', 'is-' + tabPosition] },
      [newButton, h('tab-nav', navData)]
    );
    var panels = h(
      'div',
      { 'class': 'el-tabs__content' },
      [this.$slots.default]
    );

    return h(
      'div',
      { 'class': (_ref2 = {
          'el-tabs': true,
          'el-tabs--card': type === 'card'
        }, _ref2['el-tabs--' + tabPosition] = true, _ref2['el-tabs--border-card'] = type === 'border-card', _ref2) },
      [tabPosition !== 'bottom' ? [header, panels] : [panels, header]]
    );
  },
  created: function created() {
    if (!this.currentName) {
      this.setCurrentName('0');
    }

    this.$on('tab-nav-update', this.calcPaneInstances.bind(null, true));
  },
  mounted: function mounted() {
    this.calcPaneInstances();
  },
  updated: function updated() {
    this.calcPaneInstances();
  }
});
// CONCATENATED MODULE: ./packages/tabs/src/tabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tabsvue_type_script_lang_js_ = (tabsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/tabs/src/tabs.vue
var tabs_render, tabs_staticRenderFns




/* normalize component */

var tabs_component = normalizeComponent(
  src_tabsvue_type_script_lang_js_,
  tabs_render,
  tabs_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var tabs_api; }
tabs_component.options.__file = "packages/tabs/src/tabs.vue"
/* harmony default export */ var tabs = (tabs_component.exports);
// CONCATENATED MODULE: ./packages/tabs/index.js


/* istanbul ignore next */
tabs.install = function (Vue) {
  Vue.component(tabs.name, tabs);
};

/* harmony default export */ var packages_tabs = (tabs);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/tabs/src/tab-pane.vue?vue&type=template&id=9145a070&
var tab_panevue_type_template_id_9145a070_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !_vm.lazy || _vm.loaded || _vm.active
    ? _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.active,
              expression: "active"
            }
          ],
          staticClass: "el-tab-pane",
          attrs: {
            role: "tabpanel",
            "aria-hidden": !_vm.active,
            id: "pane-" + _vm.paneName,
            "aria-labelledby": "tab-" + _vm.paneName
          }
        },
        [_vm._t("default")],
        2
      )
    : _vm._e()
}
var tab_panevue_type_template_id_9145a070_staticRenderFns = []
tab_panevue_type_template_id_9145a070_render._withStripped = true


// CONCATENATED MODULE: ./packages/tabs/src/tab-pane.vue?vue&type=template&id=9145a070&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/tabs/src/tab-pane.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var tab_panevue_type_script_lang_js_ = ({
  name: 'ElTabPane',

  componentName: 'ElTabPane',

  props: {
    label: String,
    labelContent: Function,
    name: String,
    closable: Boolean,
    disabled: Boolean,
    lazy: Boolean
  },

  data: function data() {
    return {
      index: null,
      loaded: false
    };
  },


  computed: {
    isClosable: function isClosable() {
      return this.closable || this.$parent.closable;
    },
    active: function active() {
      var active = this.$parent.currentName === (this.name || this.index);
      if (active) {
        this.loaded = true;
      }
      return active;
    },
    paneName: function paneName() {
      return this.name || this.index;
    }
  },

  updated: function updated() {
    this.$parent.$emit('tab-nav-update');
  }
});
// CONCATENATED MODULE: ./packages/tabs/src/tab-pane.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tab_panevue_type_script_lang_js_ = (tab_panevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/tabs/src/tab-pane.vue





/* normalize component */

var tab_pane_component = normalizeComponent(
  src_tab_panevue_type_script_lang_js_,
  tab_panevue_type_template_id_9145a070_render,
  tab_panevue_type_template_id_9145a070_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var tab_pane_api; }
tab_pane_component.options.__file = "packages/tabs/src/tab-pane.vue"
/* harmony default export */ var tab_pane = (tab_pane_component.exports);
// CONCATENATED MODULE: ./packages/tab-pane/index.js


/* istanbul ignore next */
tab_pane.install = function (Vue) {
  Vue.component(tab_pane.name, tab_pane);
};

/* harmony default export */ var packages_tab_pane = (tab_pane);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/dialog/src/component.vue?vue&type=template&id=60140e62&
var componentvue_type_template_id_60140e62_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "dialog-fade" },
      on: { "after-enter": _vm.afterEnter, "after-leave": _vm.afterLeave }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          staticClass: "el-dialog__wrapper",
          on: {
            click: function($event) {
              if ($event.target !== $event.currentTarget) {
                return null
              }
              return _vm.handleWrapperClick($event)
            }
          }
        },
        [
          _c(
            "div",
            {
              ref: "dialog",
              staticClass: "el-dialog",
              class: [
                {
                  "is-fullscreen": _vm.fullscreen,
                  "el-dialog--center": _vm.center
                },
                _vm.customClass
              ],
              style: _vm.style,
              attrs: {
                role: "dialog",
                "aria-modal": "true",
                "aria-label": _vm.title || "dialog"
              }
            },
            [
              _c(
                "div",
                { staticClass: "el-dialog__header" },
                [
                  _vm._t("title", [
                    _c("span", { staticClass: "el-dialog__title" }, [
                      _vm._v(_vm._s(_vm.title))
                    ])
                  ]),
                  _vm.showClose
                    ? _c(
                        "button",
                        {
                          staticClass: "el-dialog__headerbtn",
                          attrs: { type: "button", "aria-label": "Close" },
                          on: { click: _vm.handleClose }
                        },
                        [
                          _c("i", {
                            staticClass:
                              "el-dialog__close el-icon el-icon-close"
                          })
                        ]
                      )
                    : _vm._e()
                ],
                2
              ),
              _vm.rendered
                ? _c(
                    "div",
                    { staticClass: "el-dialog__body" },
                    [_vm._t("default")],
                    2
                  )
                : _vm._e(),
              _vm.$slots.footer
                ? _c(
                    "div",
                    { staticClass: "el-dialog__footer" },
                    [_vm._t("footer")],
                    2
                  )
                : _vm._e()
            ]
          )
        ]
      )
    ]
  )
}
var componentvue_type_template_id_60140e62_staticRenderFns = []
componentvue_type_template_id_60140e62_render._withStripped = true


// CONCATENATED MODULE: ./packages/dialog/src/component.vue?vue&type=template&id=60140e62&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/dialog/src/component.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var componentvue_type_script_lang_js_ = ({
  name: 'ElDialog',

  mixins: [popup_default.a, emitter_default.a, migrating_default.a],

  props: {
    title: {
      type: String,
      default: ''
    },

    modal: {
      type: Boolean,
      default: true
    },

    modalAppendToBody: {
      type: Boolean,
      default: true
    },

    appendToBody: {
      type: Boolean,
      default: false
    },

    lockScroll: {
      type: Boolean,
      default: true
    },

    closeOnClickModal: {
      type: Boolean,
      default: true
    },

    closeOnPressEscape: {
      type: Boolean,
      default: true
    },

    showClose: {
      type: Boolean,
      default: true
    },

    width: String,

    fullscreen: Boolean,

    customClass: {
      type: String,
      default: ''
    },

    top: {
      type: String,
      default: '10vh'
    },
    beforeClose: Function,
    center: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      closed: false
    };
  },


  watch: {
    visible: function visible(val) {
      var _this = this;

      if (val) {
        this.closed = false;
        this.$emit('open');
        this.$el.addEventListener('scroll', this.updatePopper);
        this.$nextTick(function () {
          _this.$refs.dialog.scrollTop = 0;
        });
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
      } else {
        this.$el.removeEventListener('scroll', this.updatePopper);
        if (!this.closed) this.$emit('close');
      }
    }
  },

  computed: {
    style: function style() {
      var style = {};
      if (!this.fullscreen) {
        style.marginTop = this.top;
        if (this.width) {
          style.width = this.width;
        }
      }
      return style;
    }
  },

  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'size': 'size is removed.'
        }
      };
    },
    handleWrapperClick: function handleWrapperClick() {
      if (!this.closeOnClickModal) return;
      this.handleClose();
    },
    handleClose: function handleClose() {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide);
      } else {
        this.hide();
      }
    },
    hide: function hide(cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false);
        this.$emit('close');
        this.closed = true;
      }
    },
    updatePopper: function updatePopper() {
      this.broadcast('ElSelectDropdown', 'updatePopper');
      this.broadcast('ElDropdownMenu', 'updatePopper');
    },
    afterEnter: function afterEnter() {
      this.$emit('opened');
    },
    afterLeave: function afterLeave() {
      this.$emit('closed');
    }
  },

  mounted: function mounted() {
    if (this.visible) {
      this.rendered = true;
      this.open();
      if (this.appendToBody) {
        document.body.appendChild(this.$el);
      }
    }
  },
  destroyed: function destroyed() {
    // if appendToBody is true, remove DOM node after destroy
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  }
});
// CONCATENATED MODULE: ./packages/dialog/src/component.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_componentvue_type_script_lang_js_ = (componentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/dialog/src/component.vue





/* normalize component */

var component_component = normalizeComponent(
  src_componentvue_type_script_lang_js_,
  componentvue_type_template_id_60140e62_render,
  componentvue_type_template_id_60140e62_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var component_api; }
component_component.options.__file = "packages/dialog/src/component.vue"
/* harmony default export */ var src_component = (component_component.exports);
// CONCATENATED MODULE: ./packages/dialog/index.js


/* istanbul ignore next */
src_component.install = function (Vue) {
  Vue.component(src_component.name, src_component);
};

/* harmony default export */ var dialog = (src_component);
// CONCATENATED MODULE: ./packages/tooltip/src/main.js






/* harmony default export */ var tooltip_src_main = ({
  name: 'ElTooltip',

  mixins: [vue_popper_default.a],

  props: {
    openDelay: {
      type: Number,
      default: 0
    },
    disabled: Boolean,
    manual: Boolean,
    effect: {
      type: String,
      default: 'dark'
    },
    arrowOffset: {
      type: Number,
      default: 0
    },
    popperClass: String,
    content: String,
    visibleArrow: {
      default: true
    },
    transition: {
      type: String,
      default: 'el-fade-in-linear'
    },
    popperOptions: {
      default: function _default() {
        return {
          boundariesPadding: 10,
          gpuAcceleration: false
        };
      }
    },
    enterable: {
      type: Boolean,
      default: true
    },
    hideAfter: {
      type: Number,
      default: 0
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },

  data: function data() {
    return {
      tooltipId: 'el-tooltip-' + Object(util_["generateId"])(),
      timeoutPending: null,
      focusing: false
    };
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    if (this.$isServer) return;

    this.popperVM = new external_vue_default.a({
      data: { node: '' },
      render: function render(h) {
        return this.node;
      }
    }).$mount();

    this.debounceClose = debounce_default()(200, function () {
      return _this.handleClosePopper();
    });
  },
  render: function render(h) {
    var _this2 = this;

    if (this.popperVM) {
      this.popperVM.node = h(
        'transition',
        {
          attrs: {
            name: this.transition
          },
          on: {
            'afterLeave': this.doDestroy
          }
        },
        [h(
          'div',
          {
            on: {
              'mouseleave': function mouseleave() {
                _this2.setExpectedState(false);_this2.debounceClose();
              },
              'mouseenter': function mouseenter() {
                _this2.setExpectedState(true);
              }
            },

            ref: 'popper',
            attrs: { role: 'tooltip',
              id: this.tooltipId,
              'aria-hidden': this.disabled || !this.showPopper ? 'true' : 'false'
            },
            directives: [{
              name: 'show',
              value: !this.disabled && this.showPopper
            }],

            'class': ['el-tooltip__popper', 'is-' + this.effect, this.popperClass] },
          [this.$slots.content || this.content]
        )]
      );
    }

    var firstElement = this.getFirstElement();
    if (!firstElement) return null;

    var data = firstElement.data = firstElement.data || {};
    data.staticClass = this.addTooltipClass(data.staticClass);

    return firstElement;
  },
  mounted: function mounted() {
    var _this3 = this;

    this.referenceElm = this.$el;
    if (this.$el.nodeType === 1) {
      this.$el.setAttribute('aria-describedby', this.tooltipId);
      this.$el.setAttribute('tabindex', this.tabindex);
      Object(dom_["on"])(this.referenceElm, 'mouseenter', this.show);
      Object(dom_["on"])(this.referenceElm, 'mouseleave', this.hide);
      Object(dom_["on"])(this.referenceElm, 'focus', function () {
        if (!_this3.$slots.default || !_this3.$slots.default.length) {
          _this3.handleFocus();
          return;
        }
        var instance = _this3.$slots.default[0].componentInstance;
        if (instance && instance.focus) {
          instance.focus();
        } else {
          _this3.handleFocus();
        }
      });
      Object(dom_["on"])(this.referenceElm, 'blur', this.handleBlur);
      Object(dom_["on"])(this.referenceElm, 'click', this.removeFocusing);
    }
    // fix issue https://github.com/ElemeFE/element/issues/14424
    if (this.value && this.popperVM) {
      this.popperVM.$nextTick(function () {
        if (_this3.value) {
          _this3.updatePopper();
        }
      });
    }
  },

  watch: {
    focusing: function focusing(val) {
      if (val) {
        Object(dom_["addClass"])(this.referenceElm, 'focusing');
      } else {
        Object(dom_["removeClass"])(this.referenceElm, 'focusing');
      }
    }
  },
  methods: {
    show: function show() {
      this.setExpectedState(true);
      this.handleShowPopper();
    },
    hide: function hide() {
      this.setExpectedState(false);
      this.debounceClose();
    },
    handleFocus: function handleFocus() {
      this.focusing = true;
      this.show();
    },
    handleBlur: function handleBlur() {
      this.focusing = false;
      this.hide();
    },
    removeFocusing: function removeFocusing() {
      this.focusing = false;
    },
    addTooltipClass: function addTooltipClass(prev) {
      if (!prev) {
        return 'el-tooltip';
      } else {
        return 'el-tooltip ' + prev.replace('el-tooltip', '');
      }
    },
    handleShowPopper: function handleShowPopper() {
      var _this4 = this;

      if (!this.expectedState || this.manual) return;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        _this4.showPopper = true;
      }, this.openDelay);

      if (this.hideAfter > 0) {
        this.timeoutPending = setTimeout(function () {
          _this4.showPopper = false;
        }, this.hideAfter);
      }
    },
    handleClosePopper: function handleClosePopper() {
      if (this.enterable && this.expectedState || this.manual) return;
      clearTimeout(this.timeout);

      if (this.timeoutPending) {
        clearTimeout(this.timeoutPending);
      }
      this.showPopper = false;

      if (this.disabled) {
        this.doDestroy();
      }
    },
    setExpectedState: function setExpectedState(expectedState) {
      if (expectedState === false) {
        clearTimeout(this.timeoutPending);
      }
      this.expectedState = expectedState;
    },
    getFirstElement: function getFirstElement() {
      var slots = this.$slots.default;
      if (!Array.isArray(slots)) return null;
      var element = null;
      for (var index = 0; index < slots.length; index++) {
        if (slots[index] && slots[index].tag) {
          element = slots[index];
        };
      }
      return element;
    }
  },

  beforeDestroy: function beforeDestroy() {
    this.popperVM && this.popperVM.$destroy();
  },
  destroyed: function destroyed() {
    var reference = this.referenceElm;
    if (reference.nodeType === 1) {
      Object(dom_["off"])(reference, 'mouseenter', this.show);
      Object(dom_["off"])(reference, 'mouseleave', this.hide);
      Object(dom_["off"])(reference, 'focus', this.handleFocus);
      Object(dom_["off"])(reference, 'blur', this.handleBlur);
      Object(dom_["off"])(reference, 'click', this.removeFocusing);
    }
  }
});
// CONCATENATED MODULE: ./packages/tooltip/index.js


/* istanbul ignore next */
tooltip_src_main.install = function (Vue) {
  Vue.component(tooltip_src_main.name, tooltip_src_main);
};

/* harmony default export */ var packages_tooltip = (tooltip_src_main);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/popover/src/main.vue?vue&type=template&id=52060272&
var mainvue_type_template_id_52060272_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    [
      _c(
        "transition",
        {
          attrs: { name: _vm.transition },
          on: {
            "after-enter": _vm.handleAfterEnter,
            "after-leave": _vm.handleAfterLeave
          }
        },
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.disabled && _vm.showPopper,
                  expression: "!disabled && showPopper"
                }
              ],
              ref: "popper",
              staticClass: "el-popover el-popper",
              class: [_vm.popperClass, _vm.content && "el-popover--plain"],
              style: { width: _vm.width + "px" },
              attrs: {
                role: "tooltip",
                id: _vm.tooltipId,
                "aria-hidden":
                  _vm.disabled || !_vm.showPopper ? "true" : "false"
              }
            },
            [
              _vm.title
                ? _c("div", {
                    staticClass: "el-popover__title",
                    domProps: { textContent: _vm._s(_vm.title) }
                  })
                : _vm._e(),
              _vm._t("default", [_vm._v(_vm._s(_vm.content))])
            ],
            2
          )
        ]
      ),
      _vm._t("reference")
    ],
    2
  )
}
var mainvue_type_template_id_52060272_staticRenderFns = []
mainvue_type_template_id_52060272_render._withStripped = true


// CONCATENATED MODULE: ./packages/popover/src/main.vue?vue&type=template&id=52060272&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/popover/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var popover_src_mainvue_type_script_lang_js_ = ({
  name: 'ElPopover',

  mixins: [vue_popper_default.a],

  props: {
    trigger: {
      type: String,
      default: 'click',
      validator: function validator(value) {
        return ['click', 'focus', 'hover', 'manual'].indexOf(value) > -1;
      }
    },
    openDelay: {
      type: Number,
      default: 0
    },
    title: String,
    disabled: Boolean,
    content: String,
    reference: {},
    popperClass: String,
    width: {},
    visibleArrow: {
      default: true
    },
    arrowOffset: {
      type: Number,
      default: 0
    },
    transition: {
      type: String,
      default: 'fade-in-linear'
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },

  computed: {
    tooltipId: function tooltipId() {
      return 'el-popover-' + Object(util_["generateId"])();
    }
  },
  watch: {
    showPopper: function showPopper(val) {
      if (this.disabled) {
        return;
      }
      val ? this.$emit('show') : this.$emit('hide');
    }
  },

  mounted: function mounted() {
    var _this = this;

    var reference = this.referenceElm = this.reference || this.$refs.reference;
    var popper = this.popper || this.$refs.popper;

    if (!reference && this.$slots.reference && this.$slots.reference[0]) {
      reference = this.referenceElm = this.$slots.reference[0].elm;
    }
    // 可访问性
    if (reference) {
      Object(dom_["addClass"])(reference, 'el-popover__reference');
      reference.setAttribute('aria-describedby', this.tooltipId);
      reference.setAttribute('tabindex', this.tabindex); // tab序列
      popper.setAttribute('tabindex', 0);

      if (this.trigger !== 'click') {
        Object(dom_["on"])(reference, 'focusin', function () {
          _this.handleFocus();
          var instance = reference.__vue__;
          if (instance && typeof instance.focus === 'function') {
            instance.focus();
          }
        });
        Object(dom_["on"])(popper, 'focusin', this.handleFocus);
        Object(dom_["on"])(reference, 'focusout', this.handleBlur);
        Object(dom_["on"])(popper, 'focusout', this.handleBlur);
      }
      Object(dom_["on"])(reference, 'keydown', this.handleKeydown);
      Object(dom_["on"])(reference, 'click', this.handleClick);
    }
    if (this.trigger === 'click') {
      Object(dom_["on"])(reference, 'click', this.doToggle);
      Object(dom_["on"])(document, 'click', this.handleDocumentClick);
    } else if (this.trigger === 'hover') {
      Object(dom_["on"])(reference, 'mouseenter', this.handleMouseEnter);
      Object(dom_["on"])(popper, 'mouseenter', this.handleMouseEnter);
      Object(dom_["on"])(reference, 'mouseleave', this.handleMouseLeave);
      Object(dom_["on"])(popper, 'mouseleave', this.handleMouseLeave);
    } else if (this.trigger === 'focus') {
      if (this.tabindex < 0) {
        console.warn('[Element Warn][Popover]a negative taindex means that the element cannot be focused by tab key');
      }
      if (reference.querySelector('input, textarea')) {
        Object(dom_["on"])(reference, 'focusin', this.doShow);
        Object(dom_["on"])(reference, 'focusout', this.doClose);
      } else {
        Object(dom_["on"])(reference, 'mousedown', this.doShow);
        Object(dom_["on"])(reference, 'mouseup', this.doClose);
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.cleanup();
  },
  deactivated: function deactivated() {
    this.cleanup();
  },


  methods: {
    doToggle: function doToggle() {
      this.showPopper = !this.showPopper;
    },
    doShow: function doShow() {
      this.showPopper = true;
    },
    doClose: function doClose() {
      this.showPopper = false;
    },
    handleFocus: function handleFocus() {
      Object(dom_["addClass"])(this.referenceElm, 'focusing');
      if (this.trigger === 'click' || this.trigger === 'focus') this.showPopper = true;
    },
    handleClick: function handleClick() {
      Object(dom_["removeClass"])(this.referenceElm, 'focusing');
    },
    handleBlur: function handleBlur() {
      Object(dom_["removeClass"])(this.referenceElm, 'focusing');
      if (this.trigger === 'click' || this.trigger === 'focus') this.showPopper = false;
    },
    handleMouseEnter: function handleMouseEnter() {
      var _this2 = this;

      clearTimeout(this._timer);
      if (this.openDelay) {
        this._timer = setTimeout(function () {
          _this2.showPopper = true;
        }, this.openDelay);
      } else {
        this.showPopper = true;
      }
    },
    handleKeydown: function handleKeydown(ev) {
      if (ev.keyCode === 27 && this.trigger !== 'manual') {
        // esc
        this.doClose();
      }
    },
    handleMouseLeave: function handleMouseLeave() {
      var _this3 = this;

      clearTimeout(this._timer);
      this._timer = setTimeout(function () {
        _this3.showPopper = false;
      }, 200);
    },
    handleDocumentClick: function handleDocumentClick(e) {
      var reference = this.reference || this.$refs.reference;
      var popper = this.popper || this.$refs.popper;

      if (!reference && this.$slots.reference && this.$slots.reference[0]) {
        reference = this.referenceElm = this.$slots.reference[0].elm;
      }
      if (!this.$el || !reference || this.$el.contains(e.target) || reference.contains(e.target) || !popper || popper.contains(e.target)) return;
      this.showPopper = false;
    },
    handleAfterEnter: function handleAfterEnter() {
      this.$emit('after-enter');
    },
    handleAfterLeave: function handleAfterLeave() {
      this.$emit('after-leave');
      this.doDestroy();
    },
    cleanup: function cleanup() {
      if (this.openDelay) {
        clearTimeout(this._timer);
      }
    }
  },

  destroyed: function destroyed() {
    var reference = this.reference;

    Object(dom_["off"])(reference, 'click', this.doToggle);
    Object(dom_["off"])(reference, 'mouseup', this.doClose);
    Object(dom_["off"])(reference, 'mousedown', this.doShow);
    Object(dom_["off"])(reference, 'focusin', this.doShow);
    Object(dom_["off"])(reference, 'focusout', this.doClose);
    Object(dom_["off"])(reference, 'mousedown', this.doShow);
    Object(dom_["off"])(reference, 'mouseup', this.doClose);
    Object(dom_["off"])(reference, 'mouseleave', this.handleMouseLeave);
    Object(dom_["off"])(reference, 'mouseenter', this.handleMouseEnter);
    Object(dom_["off"])(document, 'click', this.handleDocumentClick);
  }
});
// CONCATENATED MODULE: ./packages/popover/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_popover_src_mainvue_type_script_lang_js_ = (popover_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/popover/src/main.vue





/* normalize component */

var popover_src_main_component = normalizeComponent(
  packages_popover_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_52060272_render,
  mainvue_type_template_id_52060272_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var popover_src_main_api; }
popover_src_main_component.options.__file = "packages/popover/src/main.vue"
/* harmony default export */ var popover_src_main = (popover_src_main_component.exports);
// CONCATENATED MODULE: ./packages/popover/src/directive.js
var getReference = function getReference(el, binding, vnode) {
  var _ref = binding.expression ? binding.value : binding.arg;
  var popper = vnode.context.$refs[_ref];
  if (popper) {
    if (Array.isArray(popper)) {
      popper[0].$refs.reference = el;
    } else {
      popper.$refs.reference = el;
    }
  }
};

/* harmony default export */ var src_directive = ({
  bind: function bind(el, binding, vnode) {
    getReference(el, binding, vnode);
  },
  inserted: function inserted(el, binding, vnode) {
    getReference(el, binding, vnode);
  }
});
// CONCATENATED MODULE: ./packages/popover/index.js




external_vue_default.a.directive('popover', src_directive);

/* istanbul ignore next */
popover_src_main.install = function (Vue) {
  Vue.directive('popover', src_directive);
  Vue.component(popover_src_main.name, popover_src_main);
};
popover_src_main.directive = src_directive;

/* harmony default export */ var popover = (popover_src_main);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/carousel/src/main.vue?vue&type=template&id=5d5d1482&
var mainvue_type_template_id_5d5d1482_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: _vm.carouselClasses,
      on: {
        mouseenter: function($event) {
          $event.stopPropagation()
          return _vm.handleMouseEnter($event)
        },
        mouseleave: function($event) {
          $event.stopPropagation()
          return _vm.handleMouseLeave($event)
        }
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "el-carousel__container",
          style: { height: _vm.height }
        },
        [
          _vm.arrowDisplay
            ? _c("transition", { attrs: { name: "carousel-arrow-left" } }, [
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          (_vm.arrow === "always" || _vm.hover) &&
                          (_vm.loop || _vm.activeIndex > 0),
                        expression:
                          "(arrow === 'always' || hover) && (loop || activeIndex > 0)"
                      }
                    ],
                    staticClass: "el-carousel__arrow el-carousel__arrow--left",
                    attrs: { type: "button" },
                    on: {
                      mouseenter: function($event) {
                        return _vm.handleButtonEnter("left")
                      },
                      mouseleave: _vm.handleButtonLeave,
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.throttledArrowClick(_vm.activeIndex - 1)
                      }
                    }
                  },
                  [_c("i", { staticClass: "el-icon-arrow-left" })]
                )
              ])
            : _vm._e(),
          _vm.arrowDisplay
            ? _c("transition", { attrs: { name: "carousel-arrow-right" } }, [
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          (_vm.arrow === "always" || _vm.hover) &&
                          (_vm.loop || _vm.activeIndex < _vm.items.length - 1),
                        expression:
                          "(arrow === 'always' || hover) && (loop || activeIndex < items.length - 1)"
                      }
                    ],
                    staticClass: "el-carousel__arrow el-carousel__arrow--right",
                    attrs: { type: "button" },
                    on: {
                      mouseenter: function($event) {
                        return _vm.handleButtonEnter("right")
                      },
                      mouseleave: _vm.handleButtonLeave,
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.throttledArrowClick(_vm.activeIndex + 1)
                      }
                    }
                  },
                  [_c("i", { staticClass: "el-icon-arrow-right" })]
                )
              ])
            : _vm._e(),
          _vm._t("default")
        ],
        2
      ),
      _vm.indicatorPosition !== "none"
        ? _c(
            "ul",
            { class: _vm.indicatorsClasses },
            _vm._l(_vm.items, function(item, index) {
              return _c(
                "li",
                {
                  key: index,
                  class: [
                    "el-carousel__indicator",
                    "el-carousel__indicator--" + _vm.direction,
                    { "is-active": index === _vm.activeIndex }
                  ],
                  on: {
                    mouseenter: function($event) {
                      return _vm.throttledIndicatorHover(index)
                    },
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.handleIndicatorClick(index)
                    }
                  }
                },
                [
                  _c("button", { staticClass: "el-carousel__button" }, [
                    _vm.hasLabel
                      ? _c("span", [_vm._v(_vm._s(item.label))])
                      : _vm._e()
                  ])
                ]
              )
            }),
            0
          )
        : _vm._e()
    ]
  )
}
var mainvue_type_template_id_5d5d1482_staticRenderFns = []
mainvue_type_template_id_5d5d1482_render._withStripped = true


// CONCATENATED MODULE: ./packages/carousel/src/main.vue?vue&type=template&id=5d5d1482&

// EXTERNAL MODULE: external "throttle-debounce/throttle"
var throttle_ = __webpack_require__(27);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle_);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/carousel/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var carousel_src_mainvue_type_script_lang_js_ = ({
  name: 'ElCarousel',

  props: {
    initialIndex: {
      type: Number,
      default: 0
    },
    height: String,
    trigger: {
      type: String,
      default: 'hover'
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    },
    indicatorPosition: String,
    indicator: {
      type: Boolean,
      default: true
    },
    arrow: {
      type: String,
      default: 'hover'
    },
    type: String,
    loop: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator: function validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1;
      }
    }
  },

  data: function data() {
    return {
      items: [],
      activeIndex: -1,
      containerWidth: 0,
      timer: null,
      hover: false
    };
  },


  computed: {
    arrowDisplay: function arrowDisplay() {
      return this.arrow !== 'never' && this.direction !== 'vertical';
    },
    hasLabel: function hasLabel() {
      return this.items.some(function (item) {
        return item.label.toString().length > 0;
      });
    },
    carouselClasses: function carouselClasses() {
      var classes = ['el-carousel', 'el-carousel--' + this.direction];
      if (this.type === 'card') {
        classes.push('el-carousel--card');
      }
      return classes;
    },
    indicatorsClasses: function indicatorsClasses() {
      var classes = ['el-carousel__indicators', 'el-carousel__indicators--' + this.direction];
      if (this.hasLabel) {
        classes.push('el-carousel__indicators--labels');
      }
      if (this.indicatorPosition === 'outside' || this.type === 'card') {
        classes.push('el-carousel__indicators--outside');
      }
      return classes;
    }
  },

  watch: {
    items: function items(val) {
      if (val.length > 0) this.setActiveItem(this.initialIndex);
    },
    activeIndex: function activeIndex(val, oldVal) {
      this.resetItemPosition(oldVal);
      this.$emit('change', val, oldVal);
    },
    autoplay: function autoplay(val) {
      val ? this.startTimer() : this.pauseTimer();
    },
    loop: function loop() {
      this.setActiveItem(this.activeIndex);
    }
  },

  methods: {
    handleMouseEnter: function handleMouseEnter() {
      this.hover = true;
      this.pauseTimer();
    },
    handleMouseLeave: function handleMouseLeave() {
      this.hover = false;
      this.startTimer();
    },
    itemInStage: function itemInStage(item, index) {
      var length = this.items.length;
      if (index === length - 1 && item.inStage && this.items[0].active || item.inStage && this.items[index + 1] && this.items[index + 1].active) {
        return 'left';
      } else if (index === 0 && item.inStage && this.items[length - 1].active || item.inStage && this.items[index - 1] && this.items[index - 1].active) {
        return 'right';
      }
      return false;
    },
    handleButtonEnter: function handleButtonEnter(arrow) {
      var _this = this;

      if (this.direction === 'vertical') return;
      this.items.forEach(function (item, index) {
        if (arrow === _this.itemInStage(item, index)) {
          item.hover = true;
        }
      });
    },
    handleButtonLeave: function handleButtonLeave() {
      if (this.direction === 'vertical') return;
      this.items.forEach(function (item) {
        item.hover = false;
      });
    },
    updateItems: function updateItems() {
      this.items = this.$children.filter(function (child) {
        return child.$options.name === 'ElCarouselItem';
      });
    },
    resetItemPosition: function resetItemPosition(oldIndex) {
      var _this2 = this;

      this.items.forEach(function (item, index) {
        item.translateItem(index, _this2.activeIndex, oldIndex);
      });
    },
    playSlides: function playSlides() {
      if (this.activeIndex < this.items.length - 1) {
        this.activeIndex++;
      } else if (this.loop) {
        this.activeIndex = 0;
      }
    },
    pauseTimer: function pauseTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    startTimer: function startTimer() {
      if (this.interval <= 0 || !this.autoplay || this.timer) return;
      this.timer = setInterval(this.playSlides, this.interval);
    },
    setActiveItem: function setActiveItem(index) {
      if (typeof index === 'string') {
        var filteredItems = this.items.filter(function (item) {
          return item.name === index;
        });
        if (filteredItems.length > 0) {
          index = this.items.indexOf(filteredItems[0]);
        }
      }
      index = Number(index);
      if (isNaN(index) || index !== Math.floor(index)) {
        console.warn('[Element Warn][Carousel]index must be an integer.');
        return;
      }
      var length = this.items.length;
      var oldIndex = this.activeIndex;
      if (index < 0) {
        this.activeIndex = this.loop ? length - 1 : 0;
      } else if (index >= length) {
        this.activeIndex = this.loop ? 0 : length - 1;
      } else {
        this.activeIndex = index;
      }
      if (oldIndex === this.activeIndex) {
        this.resetItemPosition(oldIndex);
      }
    },
    prev: function prev() {
      this.setActiveItem(this.activeIndex - 1);
    },
    next: function next() {
      this.setActiveItem(this.activeIndex + 1);
    },
    handleIndicatorClick: function handleIndicatorClick(index) {
      this.activeIndex = index;
    },
    handleIndicatorHover: function handleIndicatorHover(index) {
      if (this.trigger === 'hover' && index !== this.activeIndex) {
        this.activeIndex = index;
      }
    }
  },

  created: function created() {
    var _this3 = this;

    this.throttledArrowClick = throttle_default()(300, true, function (index) {
      _this3.setActiveItem(index);
    });
    this.throttledIndicatorHover = throttle_default()(300, function (index) {
      _this3.handleIndicatorHover(index);
    });
  },
  mounted: function mounted() {
    var _this4 = this;

    this.updateItems();
    this.$nextTick(function () {
      Object(resize_event_["addResizeListener"])(_this4.$el, _this4.resetItemPosition);
      if (_this4.initialIndex < _this4.items.length && _this4.initialIndex >= 0) {
        _this4.activeIndex = _this4.initialIndex;
      }
      _this4.startTimer();
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$el) Object(resize_event_["removeResizeListener"])(this.$el, this.resetItemPosition);
    this.pauseTimer();
  }
});
// CONCATENATED MODULE: ./packages/carousel/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_carousel_src_mainvue_type_script_lang_js_ = (carousel_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/carousel/src/main.vue





/* normalize component */

var carousel_src_main_component = normalizeComponent(
  packages_carousel_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_5d5d1482_render,
  mainvue_type_template_id_5d5d1482_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var carousel_src_main_api; }
carousel_src_main_component.options.__file = "packages/carousel/src/main.vue"
/* harmony default export */ var carousel_src_main = (carousel_src_main_component.exports);
// CONCATENATED MODULE: ./packages/carousel/index.js


/* istanbul ignore next */
carousel_src_main.install = function (Vue) {
  Vue.component(carousel_src_main.name, carousel_src_main);
};

/* harmony default export */ var carousel = (carousel_src_main);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/carousel/src/item.vue?vue&type=template&id=1801ae19&
var itemvue_type_template_id_1801ae19_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.ready,
          expression: "ready"
        }
      ],
      staticClass: "el-carousel__item",
      class: {
        "is-active": _vm.active,
        "el-carousel__item--card": _vm.$parent.type === "card",
        "is-in-stage": _vm.inStage,
        "is-hover": _vm.hover,
        "is-animating": _vm.animating
      },
      style: _vm.itemStyle,
      on: { click: _vm.handleItemClick }
    },
    [
      _vm.$parent.type === "card"
        ? _c("div", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.active,
                expression: "!active"
              }
            ],
            staticClass: "el-carousel__mask"
          })
        : _vm._e(),
      _vm._t("default")
    ],
    2
  )
}
var itemvue_type_template_id_1801ae19_staticRenderFns = []
itemvue_type_template_id_1801ae19_render._withStripped = true


// CONCATENATED MODULE: ./packages/carousel/src/item.vue?vue&type=template&id=1801ae19&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/carousel/src/item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var CARD_SCALE = 0.83;
/* harmony default export */ var itemvue_type_script_lang_js_ = ({
  name: 'ElCarouselItem',

  props: {
    name: String,
    label: {
      type: [String, Number],
      default: ''
    }
  },

  data: function data() {
    return {
      hover: false,
      translate: 0,
      scale: 1,
      active: false,
      ready: false,
      inStage: false,
      animating: false
    };
  },


  methods: {
    processIndex: function processIndex(index, activeIndex, length) {
      if (activeIndex === 0 && index === length - 1) {
        return -1;
      } else if (activeIndex === length - 1 && index === 0) {
        return length;
      } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
        return length + 1;
      } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
        return -2;
      }
      return index;
    },
    calcCardTranslate: function calcCardTranslate(index, activeIndex) {
      var parentWidth = this.$parent.$el.offsetWidth;
      if (this.inStage) {
        return parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1) / 4;
      } else if (index < activeIndex) {
        return -(1 + CARD_SCALE) * parentWidth / 4;
      } else {
        return (3 + CARD_SCALE) * parentWidth / 4;
      }
    },
    calcTranslate: function calcTranslate(index, activeIndex, isVertical) {
      var distance = this.$parent.$el[isVertical ? 'offsetHeight' : 'offsetWidth'];
      return distance * (index - activeIndex);
    },
    translateItem: function translateItem(index, activeIndex, oldIndex) {
      var parentType = this.$parent.type;
      var parentDirection = this.parentDirection;
      var length = this.$parent.items.length;
      if (parentType !== 'card' && oldIndex !== undefined) {
        this.animating = index === activeIndex || index === oldIndex;
      }
      if (index !== activeIndex && length > 2 && this.$parent.loop) {
        index = this.processIndex(index, activeIndex, length);
      }
      if (parentType === 'card') {
        if (parentDirection === 'vertical') {
          console.warn('[Element Warn][Carousel]vertical directionis not supported in card mode');
        }
        this.inStage = Math.round(Math.abs(index - activeIndex)) <= 1;
        this.active = index === activeIndex;
        this.translate = this.calcCardTranslate(index, activeIndex);
        this.scale = this.active ? 1 : CARD_SCALE;
      } else {
        this.active = index === activeIndex;
        var isVertical = parentDirection === 'vertical';
        this.translate = this.calcTranslate(index, activeIndex, isVertical);
      }
      this.ready = true;
    },
    handleItemClick: function handleItemClick() {
      var parent = this.$parent;
      if (parent && parent.type === 'card') {
        var index = parent.items.indexOf(this);
        parent.setActiveItem(index);
      }
    }
  },

  computed: {
    parentDirection: function parentDirection() {
      return this.$parent.direction;
    },
    itemStyle: function itemStyle() {
      var translateType = this.parentDirection === 'vertical' ? 'translateY' : 'translateX';
      var value = translateType + '(' + this.translate + 'px) scale(' + this.scale + ')';
      var style = {
        transform: value
      };
      return Object(util_["autoprefixer"])(style);
    }
  },

  created: function created() {
    this.$parent && this.$parent.updateItems();
  },
  destroyed: function destroyed() {
    this.$parent && this.$parent.updateItems();
  }
});
// CONCATENATED MODULE: ./packages/carousel/src/item.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_itemvue_type_script_lang_js_ = (itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/carousel/src/item.vue





/* normalize component */

var item_component = normalizeComponent(
  src_itemvue_type_script_lang_js_,
  itemvue_type_template_id_1801ae19_render,
  itemvue_type_template_id_1801ae19_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var item_api; }
item_component.options.__file = "packages/carousel/src/item.vue"
/* harmony default export */ var src_item = (item_component.exports);
// CONCATENATED MODULE: ./packages/carousel-item/index.js


/* istanbul ignore next */
src_item.install = function (Vue) {
  Vue.component(src_item.name, src_item);
};

/* harmony default export */ var carousel_item = (src_item);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/message-box/src/main.vue?vue&type=template&id=6b29b012&
var mainvue_type_template_id_6b29b012_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "msgbox-fade" } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.visible,
            expression: "visible"
          }
        ],
        staticClass: "el-message-box__wrapper",
        attrs: {
          tabindex: "-1",
          role: "dialog",
          "aria-modal": "true",
          "aria-label": _vm.title || "dialog"
        },
        on: {
          click: function($event) {
            if ($event.target !== $event.currentTarget) {
              return null
            }
            return _vm.handleWrapperClick($event)
          }
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "el-message-box",
            class: [_vm.customClass, _vm.center && "el-message-box--center"]
          },
          [
            _vm.title !== null
              ? _c("div", { staticClass: "el-message-box__header" }, [
                  _c("div", { staticClass: "el-message-box__title" }, [
                    _vm.icon && _vm.center
                      ? _c("div", {
                          class: ["el-message-box__status", _vm.icon]
                        })
                      : _vm._e(),
                    _c("span", [_vm._v(_vm._s(_vm.title))])
                  ]),
                  _vm.showClose
                    ? _c(
                        "button",
                        {
                          staticClass: "el-message-box__headerbtn",
                          attrs: { type: "button", "aria-label": "Close" },
                          on: {
                            click: function($event) {
                              return _vm.handleAction(
                                _vm.distinguishCancelAndClose
                                  ? "close"
                                  : "cancel"
                              )
                            },
                            keydown: function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k(
                                  $event.keyCode,
                                  "enter",
                                  13,
                                  $event.key,
                                  "Enter"
                                )
                              ) {
                                return null
                              }
                              return _vm.handleAction(
                                _vm.distinguishCancelAndClose
                                  ? "close"
                                  : "cancel"
                              )
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "el-message-box__close el-icon-close"
                          })
                        ]
                      )
                    : _vm._e()
                ])
              : _vm._e(),
            _c("div", { staticClass: "el-message-box__content" }, [
              _vm.icon && !_vm.center && _vm.message !== ""
                ? _c("div", { class: ["el-message-box__status", _vm.icon] })
                : _vm._e(),
              _vm.message !== ""
                ? _c(
                    "div",
                    { staticClass: "el-message-box__message" },
                    [
                      _vm._t("default", [
                        !_vm.dangerouslyUseHTMLString
                          ? _c("p", [_vm._v(_vm._s(_vm.message))])
                          : _c("p", {
                              domProps: { innerHTML: _vm._s(_vm.message) }
                            })
                      ])
                    ],
                    2
                  )
                : _vm._e(),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.showInput,
                      expression: "showInput"
                    }
                  ],
                  staticClass: "el-message-box__input"
                },
                [
                  _c("el-input", {
                    ref: "input",
                    attrs: {
                      type: _vm.inputType,
                      placeholder: _vm.inputPlaceholder
                    },
                    nativeOn: {
                      keydown: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.handleInputEnter($event)
                      }
                    },
                    model: {
                      value: _vm.inputValue,
                      callback: function($$v) {
                        _vm.inputValue = $$v
                      },
                      expression: "inputValue"
                    }
                  }),
                  _c(
                    "div",
                    {
                      staticClass: "el-message-box__errormsg",
                      style: {
                        visibility: !!_vm.editorErrorMessage
                          ? "visible"
                          : "hidden"
                      }
                    },
                    [_vm._v(_vm._s(_vm.editorErrorMessage))]
                  )
                ],
                1
              )
            ]),
            _c(
              "div",
              { staticClass: "el-message-box__btns" },
              [
                _vm.showCancelButton
                  ? _c(
                      "el-button",
                      {
                        class: [_vm.cancelButtonClasses],
                        attrs: {
                          loading: _vm.cancelButtonLoading,
                          round: _vm.roundButton,
                          size: "small"
                        },
                        on: {
                          keydown: function($event) {
                            if (
                              !$event.type.indexOf("key") &&
                              _vm._k(
                                $event.keyCode,
                                "enter",
                                13,
                                $event.key,
                                "Enter"
                              )
                            ) {
                              return null
                            }
                            return _vm.handleAction("cancel")
                          }
                        },
                        nativeOn: {
                          click: function($event) {
                            return _vm.handleAction("cancel")
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(
                              _vm.cancelButtonText ||
                                _vm.t("el.messagebox.cancel")
                            ) +
                            "\n        "
                        )
                      ]
                    )
                  : _vm._e(),
                _c(
                  "el-button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.showConfirmButton,
                        expression: "showConfirmButton"
                      }
                    ],
                    ref: "confirm",
                    class: [_vm.confirmButtonClasses],
                    attrs: {
                      loading: _vm.confirmButtonLoading,
                      round: _vm.roundButton,
                      size: "small"
                    },
                    on: {
                      keydown: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.handleAction("confirm")
                      }
                    },
                    nativeOn: {
                      click: function($event) {
                        return _vm.handleAction("confirm")
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(
                          _vm.confirmButtonText ||
                            _vm.t("el.messagebox.confirm")
                        ) +
                        "\n        "
                    )
                  ]
                )
              ],
              1
            )
          ]
        )
      ]
    )
  ])
}
var mainvue_type_template_id_6b29b012_staticRenderFns = []
mainvue_type_template_id_6b29b012_render._withStripped = true


// CONCATENATED MODULE: ./packages/message-box/src/main.vue?vue&type=template&id=6b29b012&

// EXTERNAL MODULE: external "element-mini-ui/lib/utils/aria-dialog"
var aria_dialog_ = __webpack_require__(34);
var aria_dialog_default = /*#__PURE__*/__webpack_require__.n(aria_dialog_);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/message-box/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









var messageBox = void 0;
var src_mainvue_type_script_lang_js_typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
};

/* harmony default export */ var message_box_src_mainvue_type_script_lang_js_ = ({
  mixins: [popup_default.a, locale_default.a],

  props: {
    modal: {
      default: true
    },
    lockScroll: {
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      default: true
    },
    closeOnPressEscape: {
      default: true
    },
    closeOnHashChange: {
      default: true
    },
    center: {
      default: false,
      type: Boolean
    },
    roundButton: {
      default: false,
      type: Boolean
    }
  },

  components: {
    ElInput: input_default.a,
    ElButton: button_default.a
  },

  computed: {
    icon: function icon() {
      var type = this.type,
          iconClass = this.iconClass;

      return iconClass || (type && src_mainvue_type_script_lang_js_typeMap[type] ? 'el-icon-' + src_mainvue_type_script_lang_js_typeMap[type] : '');
    },
    confirmButtonClasses: function confirmButtonClasses() {
      return 'el-button--primary ' + this.confirmButtonClass;
    },
    cancelButtonClasses: function cancelButtonClasses() {
      return '' + this.cancelButtonClass;
    }
  },

  methods: {
    getSafeClose: function getSafeClose() {
      var _this = this;

      var currentId = this.uid;
      return function () {
        _this.$nextTick(function () {
          if (currentId === _this.uid) _this.doClose();
        });
      };
    },
    doClose: function doClose() {
      var _this2 = this;

      if (!this.visible) return;
      this.visible = false;
      this._closing = true;

      this.onClose && this.onClose();
      messageBox.closeDialog(); // 解绑
      if (this.lockScroll) {
        setTimeout(this.restoreBodyStyle, 200);
      }
      this.opened = false;
      this.doAfterClose();
      setTimeout(function () {
        if (_this2.action) _this2.callback(_this2.action, _this2);
      });
    },
    handleWrapperClick: function handleWrapperClick() {
      if (this.closeOnClickModal) {
        this.handleAction(this.distinguishCancelAndClose ? 'close' : 'cancel');
      }
    },
    handleInputEnter: function handleInputEnter() {
      if (this.inputType !== 'textarea') {
        return this.handleAction('confirm');
      }
    },
    handleAction: function handleAction(action) {
      if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
        return;
      }
      this.action = action;
      if (typeof this.beforeClose === 'function') {
        this.close = this.getSafeClose();
        this.beforeClose(action, this, this.close);
      } else {
        this.doClose();
      }
    },
    validate: function validate() {
      if (this.$type === 'prompt') {
        var inputPattern = this.inputPattern;
        if (inputPattern && !inputPattern.test(this.inputValue || '')) {
          this.editorErrorMessage = this.inputErrorMessage || Object(lib_locale_["t"])('el.messagebox.error');
          Object(dom_["addClass"])(this.getInputElement(), 'invalid');
          return false;
        }
        var inputValidator = this.inputValidator;
        if (typeof inputValidator === 'function') {
          var validateResult = inputValidator(this.inputValue);
          if (validateResult === false) {
            this.editorErrorMessage = this.inputErrorMessage || Object(lib_locale_["t"])('el.messagebox.error');
            Object(dom_["addClass"])(this.getInputElement(), 'invalid');
            return false;
          }
          if (typeof validateResult === 'string') {
            this.editorErrorMessage = validateResult;
            Object(dom_["addClass"])(this.getInputElement(), 'invalid');
            return false;
          }
        }
      }
      this.editorErrorMessage = '';
      Object(dom_["removeClass"])(this.getInputElement(), 'invalid');
      return true;
    },
    getFirstFocus: function getFirstFocus() {
      var btn = this.$el.querySelector('.el-message-box__btns .el-button');
      var title = this.$el.querySelector('.el-message-box__btns .el-message-box__title');
      return btn || title;
    },
    getInputElement: function getInputElement() {
      var inputRefs = this.$refs.input.$refs;
      return inputRefs.input || inputRefs.textarea;
    },
    handleClose: function handleClose() {
      this.handleAction('close');
    }
  },

  watch: {
    inputValue: {
      immediate: true,
      handler: function handler(val) {
        var _this3 = this;

        this.$nextTick(function (_) {
          if (_this3.$type === 'prompt' && val !== null) {
            _this3.validate();
          }
        });
      }
    },

    visible: function visible(val) {
      var _this4 = this;

      if (val) {
        this.uid++;
        if (this.$type === 'alert' || this.$type === 'confirm') {
          this.$nextTick(function () {
            _this4.$refs.confirm.$el.focus();
          });
        }
        this.focusAfterClosed = document.activeElement;
        messageBox = new aria_dialog_default.a(this.$el, this.focusAfterClosed, this.getFirstFocus());
      }

      // prompt
      if (this.$type !== 'prompt') return;
      if (val) {
        setTimeout(function () {
          if (_this4.$refs.input && _this4.$refs.input.$el) {
            _this4.getInputElement().focus();
          }
        }, 500);
      } else {
        this.editorErrorMessage = '';
        Object(dom_["removeClass"])(this.getInputElement(), 'invalid');
      }
    }
  },

  mounted: function mounted() {
    var _this5 = this;

    this.$nextTick(function () {
      if (_this5.closeOnHashChange) {
        window.addEventListener('hashchange', _this5.close);
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.closeOnHashChange) {
      window.removeEventListener('hashchange', this.close);
    }
    setTimeout(function () {
      messageBox.closeDialog();
    });
  },
  data: function data() {
    return {
      uid: 1,
      title: undefined,
      message: '',
      type: '',
      iconClass: '',
      customClass: '',
      showInput: false,
      inputValue: null,
      inputPlaceholder: '',
      inputType: 'text',
      inputPattern: null,
      inputValidator: null,
      inputErrorMessage: '',
      showConfirmButton: true,
      showCancelButton: false,
      action: '',
      confirmButtonText: '',
      cancelButtonText: '',
      confirmButtonLoading: false,
      cancelButtonLoading: false,
      confirmButtonClass: '',
      confirmButtonDisabled: false,
      cancelButtonClass: '',
      editorErrorMessage: null,
      callback: null,
      dangerouslyUseHTMLString: false,
      focusAfterClosed: null,
      isOnComposition: false,
      distinguishCancelAndClose: false
    };
  }
});
// CONCATENATED MODULE: ./packages/message-box/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_message_box_src_mainvue_type_script_lang_js_ = (message_box_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/message-box/src/main.vue





/* normalize component */

var message_box_src_main_component = normalizeComponent(
  packages_message_box_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_6b29b012_render,
  mainvue_type_template_id_6b29b012_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var message_box_src_main_api; }
message_box_src_main_component.options.__file = "packages/message-box/src/main.vue"
/* harmony default export */ var message_box_src_main = (message_box_src_main_component.exports);
// CONCATENATED MODULE: ./packages/message-box/src/main.js
var main_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var main_defaults = {
  title: null,
  message: '',
  type: '',
  iconClass: '',
  showInput: false,
  showClose: true,
  modalFade: true,
  lockScroll: true,
  closeOnClickModal: true,
  closeOnPressEscape: true,
  closeOnHashChange: true,
  inputValue: null,
  inputPlaceholder: '',
  inputType: 'text',
  inputPattern: null,
  inputValidator: null,
  inputErrorMessage: '',
  showConfirmButton: true,
  showCancelButton: false,
  confirmButtonPosition: 'right',
  confirmButtonHighlight: false,
  cancelButtonHighlight: false,
  confirmButtonText: '',
  cancelButtonText: '',
  confirmButtonClass: '',
  cancelButtonClass: '',
  customClass: '',
  beforeClose: null,
  dangerouslyUseHTMLString: false,
  center: false,
  roundButton: false,
  distinguishCancelAndClose: false
};






var MessageBoxConstructor = external_vue_default.a.extend(message_box_src_main);

var currentMsg = void 0,
    message_box_src_main_instance = void 0;
var msgQueue = [];

var defaultCallback = function defaultCallback(action) {
  if (currentMsg) {
    var callback = currentMsg.callback;
    if (typeof callback === 'function') {
      if (message_box_src_main_instance.showInput) {
        callback(message_box_src_main_instance.inputValue, action);
      } else {
        callback(action);
      }
    }
    if (currentMsg.resolve) {
      if (action === 'confirm') {
        if (message_box_src_main_instance.showInput) {
          currentMsg.resolve({ value: message_box_src_main_instance.inputValue, action: action });
        } else {
          currentMsg.resolve(action);
        }
      } else if (currentMsg.reject && (action === 'cancel' || action === 'close')) {
        currentMsg.reject(action);
      }
    }
  }
};

var initInstance = function initInstance() {
  message_box_src_main_instance = new MessageBoxConstructor({
    el: document.createElement('div')
  });

  message_box_src_main_instance.callback = defaultCallback;
};

var main_showNextMsg = function showNextMsg() {
  if (!message_box_src_main_instance) {
    initInstance();
  }
  message_box_src_main_instance.action = '';

  if (!message_box_src_main_instance.visible || message_box_src_main_instance.closeTimer) {
    if (msgQueue.length > 0) {
      currentMsg = msgQueue.shift();

      var options = currentMsg.options;
      for (var prop in options) {
        if (options.hasOwnProperty(prop)) {
          message_box_src_main_instance[prop] = options[prop];
        }
      }
      if (options.callback === undefined) {
        message_box_src_main_instance.callback = defaultCallback;
      }

      var oldCb = message_box_src_main_instance.callback;
      message_box_src_main_instance.callback = function (action, instance) {
        oldCb(action, instance);
        showNextMsg();
      };
      if (Object(vdom_["isVNode"])(message_box_src_main_instance.message)) {
        message_box_src_main_instance.$slots.default = [message_box_src_main_instance.message];
        message_box_src_main_instance.message = null;
      } else {
        delete message_box_src_main_instance.$slots.default;
      }
      ['modal', 'showClose', 'closeOnClickModal', 'closeOnPressEscape', 'closeOnHashChange'].forEach(function (prop) {
        if (message_box_src_main_instance[prop] === undefined) {
          message_box_src_main_instance[prop] = true;
        }
      });
      document.body.appendChild(message_box_src_main_instance.$el);

      external_vue_default.a.nextTick(function () {
        message_box_src_main_instance.visible = true;
      });
    }
  }
};

var main_MessageBox = function MessageBox(options, callback) {
  if (external_vue_default.a.prototype.$isServer) return;
  if (typeof options === 'string' || Object(vdom_["isVNode"])(options)) {
    options = {
      message: options
    };
    if (typeof arguments[1] === 'string') {
      options.title = arguments[1];
    }
  } else if (options.callback && !callback) {
    callback = options.callback;
  }

  if (typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      // eslint-disable-line
      msgQueue.push({
        options: merge_default()({}, main_defaults, MessageBox.defaults, options),
        callback: callback,
        resolve: resolve,
        reject: reject
      });

      main_showNextMsg();
    });
  } else {
    msgQueue.push({
      options: merge_default()({}, main_defaults, MessageBox.defaults, options),
      callback: callback
    });

    main_showNextMsg();
  }
};

main_MessageBox.setDefaults = function (defaults) {
  main_MessageBox.defaults = defaults;
};

main_MessageBox.alert = function (message, title, options) {
  if ((typeof title === 'undefined' ? 'undefined' : main_typeof(title)) === 'object') {
    options = title;
    title = '';
  } else if (title === undefined) {
    title = '';
  }
  return main_MessageBox(merge_default()({
    title: title,
    message: message,
    $type: 'alert',
    closeOnPressEscape: false,
    closeOnClickModal: false
  }, options));
};

main_MessageBox.confirm = function (message, title, options) {
  if ((typeof title === 'undefined' ? 'undefined' : main_typeof(title)) === 'object') {
    options = title;
    title = '';
  } else if (title === undefined) {
    title = '';
  }
  return main_MessageBox(merge_default()({
    title: title,
    message: message,
    $type: 'confirm',
    showCancelButton: true
  }, options));
};

main_MessageBox.prompt = function (message, title, options) {
  if ((typeof title === 'undefined' ? 'undefined' : main_typeof(title)) === 'object') {
    options = title;
    title = '';
  } else if (title === undefined) {
    title = '';
  }
  return main_MessageBox(merge_default()({
    title: title,
    message: message,
    showCancelButton: true,
    showInput: true,
    $type: 'prompt'
  }, options));
};

main_MessageBox.close = function () {
  message_box_src_main_instance.doClose();
  message_box_src_main_instance.visible = false;
  msgQueue = [];
  currentMsg = null;
};

/* harmony default export */ var packages_message_box_src_main = (main_MessageBox);

// CONCATENATED MODULE: ./packages/message-box/index.js

/* harmony default export */ var message_box = (packages_message_box_src_main);
// CONCATENATED MODULE: ./packages/scrollbar/src/util.js
var BAR_MAP = {
  vertical: {
    offset: 'offsetHeight',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    size: 'height',
    key: 'vertical',
    axis: 'Y',
    client: 'clientY',
    direction: 'top'
  },
  horizontal: {
    offset: 'offsetWidth',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    size: 'width',
    key: 'horizontal',
    axis: 'X',
    client: 'clientX',
    direction: 'left'
  }
};

function renderThumbStyle(_ref) {
  var move = _ref.move,
      size = _ref.size,
      bar = _ref.bar;

  var style = {};
  var translate = 'translate' + bar.axis + '(' + move + '%)';

  style[bar.size] = size;
  style.transform = translate;
  style.msTransform = translate;
  style.webkitTransform = translate;

  return style;
};
// CONCATENATED MODULE: ./packages/scrollbar/src/bar.js



/* istanbul ignore next */
/* harmony default export */ var src_bar = ({
  name: 'Bar',

  props: {
    vertical: Boolean,
    size: String,
    move: Number
  },

  computed: {
    bar: function bar() {
      return BAR_MAP[this.vertical ? 'vertical' : 'horizontal'];
    },
    wrap: function wrap() {
      return this.$parent.wrap;
    }
  },

  render: function render(h) {
    var size = this.size,
        move = this.move,
        bar = this.bar;


    return h(
      'div',
      {
        'class': ['el-scrollbar__bar', 'is-' + bar.key],
        on: {
          'mousedown': this.clickTrackHandler
        }
      },
      [h('div', {
        ref: 'thumb',
        'class': 'el-scrollbar__thumb',
        on: {
          'mousedown': this.clickThumbHandler
        },

        style: renderThumbStyle({ size: size, move: move, bar: bar }) })]
    );
  },


  methods: {
    clickThumbHandler: function clickThumbHandler(e) {
      // prevent click event of right button
      if (e.ctrlKey || e.button === 2) {
        return;
      }
      this.startDrag(e);
      this[this.bar.axis] = e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]);
    },
    clickTrackHandler: function clickTrackHandler(e) {
      var offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
      var thumbHalf = this.$refs.thumb[this.bar.offset] / 2;
      var thumbPositionPercentage = (offset - thumbHalf) * 100 / this.$el[this.bar.offset];

      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
    },
    startDrag: function startDrag(e) {
      e.stopImmediatePropagation();
      this.cursorDown = true;

      Object(dom_["on"])(document, 'mousemove', this.mouseMoveDocumentHandler);
      Object(dom_["on"])(document, 'mouseup', this.mouseUpDocumentHandler);
      document.onselectstart = function () {
        return false;
      };
    },
    mouseMoveDocumentHandler: function mouseMoveDocumentHandler(e) {
      if (this.cursorDown === false) return;
      var prevPage = this[this.bar.axis];

      if (!prevPage) return;

      var offset = (this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1;
      var thumbClickPosition = this.$refs.thumb[this.bar.offset] - prevPage;
      var thumbPositionPercentage = (offset - thumbClickPosition) * 100 / this.$el[this.bar.offset];

      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
    },
    mouseUpDocumentHandler: function mouseUpDocumentHandler(e) {
      this.cursorDown = false;
      this[this.bar.axis] = 0;
      Object(dom_["off"])(document, 'mousemove', this.mouseMoveDocumentHandler);
      document.onselectstart = null;
    }
  },

  destroyed: function destroyed() {
    Object(dom_["off"])(document, 'mouseup', this.mouseUpDocumentHandler);
  }
});
// CONCATENATED MODULE: ./packages/scrollbar/src/main.js
// reference https://github.com/noeldelgado/gemini-scrollbar/blob/master/index.js






/* istanbul ignore next */
/* harmony default export */ var scrollbar_src_main = ({
  name: 'ElScrollbar',

  components: { Bar: src_bar },

  props: {
    native: Boolean,
    wrapStyle: {},
    wrapClass: {},
    viewClass: {},
    viewStyle: {},
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div'
    }
  },

  data: function data() {
    return {
      sizeWidth: '0',
      sizeHeight: '0',
      moveX: 0,
      moveY: 0
    };
  },


  computed: {
    wrap: function wrap() {
      return this.$refs.wrap;
    }
  },

  render: function render(h) {
    var gutter = scrollbar_width_default()();
    var style = this.wrapStyle;

    if (gutter) {
      var gutterWith = '-' + gutter + 'px';
      var gutterStyle = 'margin-bottom: ' + gutterWith + '; margin-right: ' + gutterWith + ';';

      if (Array.isArray(this.wrapStyle)) {
        style = Object(util_["toObject"])(this.wrapStyle);
        style.marginRight = style.marginBottom = gutterWith;
      } else if (typeof this.wrapStyle === 'string') {
        style += gutterStyle;
      } else {
        style = gutterStyle;
      }
    }
    var view = h(this.tag, {
      class: ['el-scrollbar__view', this.viewClass],
      style: this.viewStyle,
      ref: 'resize'
    }, this.$slots.default);
    var wrap = h(
      'div',
      {
        ref: 'wrap',
        style: style,
        on: {
          'scroll': this.handleScroll
        },

        'class': [this.wrapClass, 'el-scrollbar__wrap', gutter ? '' : 'el-scrollbar__wrap--hidden-default'] },
      [[view]]
    );
    var nodes = void 0;

    if (!this.native) {
      nodes = [wrap, h(src_bar, {
        attrs: {
          move: this.moveX,
          size: this.sizeWidth }
      }), h(src_bar, {
        attrs: {
          vertical: true,
          move: this.moveY,
          size: this.sizeHeight }
      })];
    } else {
      nodes = [h(
        'div',
        {
          ref: 'wrap',
          'class': [this.wrapClass, 'el-scrollbar__wrap'],
          style: style },
        [[view]]
      )];
    }
    return h('div', { class: 'el-scrollbar' }, nodes);
  },


  methods: {
    handleScroll: function handleScroll() {
      var wrap = this.wrap;

      this.moveY = wrap.scrollTop * 100 / wrap.clientHeight;
      this.moveX = wrap.scrollLeft * 100 / wrap.clientWidth;
    },
    update: function update() {
      var heightPercentage = void 0,
          widthPercentage = void 0;
      var wrap = this.wrap;
      if (!wrap) return;

      heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
      widthPercentage = wrap.clientWidth * 100 / wrap.scrollWidth;

      this.sizeHeight = heightPercentage < 100 ? heightPercentage + '%' : '';
      this.sizeWidth = widthPercentage < 100 ? widthPercentage + '%' : '';
    }
  },

  mounted: function mounted() {
    if (this.native) return;
    this.$nextTick(this.update);
    !this.noresize && Object(resize_event_["addResizeListener"])(this.$refs.resize, this.update);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.native) return;
    !this.noresize && Object(resize_event_["removeResizeListener"])(this.$refs.resize, this.update);
  }
});
// CONCATENATED MODULE: ./packages/scrollbar/index.js


/* istanbul ignore next */
scrollbar_src_main.install = function (Vue) {
  Vue.component(scrollbar_src_main.name, scrollbar_src_main);
};

/* harmony default export */ var scrollbar = (scrollbar_src_main);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/steps/src/steps.vue?vue&type=template&id=3c6b6dc0&
var stepsvue_type_template_id_3c6b6dc0_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "el-steps",
      class: [
        !_vm.simple && "el-steps--" + _vm.direction,
        _vm.simple && "el-steps--simple"
      ]
    },
    [_vm._t("default")],
    2
  )
}
var stepsvue_type_template_id_3c6b6dc0_staticRenderFns = []
stepsvue_type_template_id_3c6b6dc0_render._withStripped = true


// CONCATENATED MODULE: ./packages/steps/src/steps.vue?vue&type=template&id=3c6b6dc0&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/steps/src/steps.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var stepsvue_type_script_lang_js_ = ({
  name: 'ElSteps',

  mixins: [migrating_default.a],

  props: {
    space: [Number, String],
    active: Number,
    direction: {
      type: String,
      default: 'horizontal'
    },
    alignCenter: Boolean,
    simple: Boolean,
    finishStatus: {
      type: String,
      default: 'finish'
    },
    processStatus: {
      type: String,
      default: 'process'
    }
  },

  data: function data() {
    return {
      steps: [],
      stepOffset: 0
    };
  },


  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'center': 'center is removed.'
        }
      };
    }
  },

  watch: {
    active: function active(newVal, oldVal) {
      this.$emit('change', newVal, oldVal);
    },
    steps: function steps(_steps) {
      _steps.forEach(function (child, index) {
        child.index = index;
      });
    }
  }
});
// CONCATENATED MODULE: ./packages/steps/src/steps.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_stepsvue_type_script_lang_js_ = (stepsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/steps/src/steps.vue





/* normalize component */

var steps_component = normalizeComponent(
  src_stepsvue_type_script_lang_js_,
  stepsvue_type_template_id_3c6b6dc0_render,
  stepsvue_type_template_id_3c6b6dc0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var steps_api; }
steps_component.options.__file = "packages/steps/src/steps.vue"
/* harmony default export */ var steps = (steps_component.exports);
// CONCATENATED MODULE: ./packages/steps/index.js


/* istanbul ignore next */
steps.install = function (Vue) {
  Vue.component(steps.name, steps);
};

/* harmony default export */ var packages_steps = (steps);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/steps/src/step.vue?vue&type=template&id=f414a87a&
var stepvue_type_template_id_f414a87a_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "el-step",
      class: [
        !_vm.isSimple && "is-" + _vm.$parent.direction,
        _vm.isSimple && "is-simple",
        _vm.isLast && !_vm.space && !_vm.isCenter && "is-flex",
        _vm.isCenter && !_vm.isVertical && !_vm.isSimple && "is-center"
      ],
      style: _vm.style
    },
    [
      _c(
        "div",
        { staticClass: "el-step__head", class: "is-" + _vm.currentStatus },
        [
          _c(
            "div",
            {
              staticClass: "el-step__line",
              style: _vm.isLast
                ? ""
                : { marginRight: _vm.$parent.stepOffset + "px" }
            },
            [
              _c("i", {
                staticClass: "el-step__line-inner",
                style: _vm.lineStyle
              })
            ]
          ),
          _c(
            "div",
            {
              staticClass: "el-step__icon",
              class: "is-" + (_vm.icon ? "icon" : "text")
            },
            [
              _vm.currentStatus !== "success" && _vm.currentStatus !== "error"
                ? _vm._t("icon", [
                    _vm.icon
                      ? _c("i", {
                          staticClass: "el-step__icon-inner",
                          class: [_vm.icon]
                        })
                      : _vm._e(),
                    !_vm.icon && !_vm.isSimple
                      ? _c("div", { staticClass: "el-step__icon-inner" }, [
                          _vm._v(_vm._s(_vm.index + 1))
                        ])
                      : _vm._e()
                  ])
                : _c("i", {
                    staticClass: "el-step__icon-inner is-status",
                    class: [
                      "el-icon-" +
                        (_vm.currentStatus === "success" ? "check" : "close")
                    ]
                  })
            ],
            2
          )
        ]
      ),
      _c("div", { staticClass: "el-step__main" }, [
        _c(
          "div",
          {
            ref: "title",
            staticClass: "el-step__title",
            class: ["is-" + _vm.currentStatus]
          },
          [_vm._t("title", [_vm._v(_vm._s(_vm.title))])],
          2
        ),
        _vm.isSimple
          ? _c("div", { staticClass: "el-step__arrow" })
          : _c(
              "div",
              {
                staticClass: "el-step__description",
                class: ["is-" + _vm.currentStatus]
              },
              [_vm._t("description", [_vm._v(_vm._s(_vm.description))])],
              2
            )
      ])
    ]
  )
}
var stepvue_type_template_id_f414a87a_staticRenderFns = []
stepvue_type_template_id_f414a87a_render._withStripped = true


// CONCATENATED MODULE: ./packages/steps/src/step.vue?vue&type=template&id=f414a87a&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/steps/src/step.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var stepvue_type_script_lang_js_ = ({
  name: 'ElStep',

  props: {
    title: String,
    icon: String,
    description: String,
    status: String
  },

  data: function data() {
    return {
      index: -1,
      lineStyle: {},
      internalStatus: ''
    };
  },
  beforeCreate: function beforeCreate() {
    this.$parent.steps.push(this);
  },
  beforeDestroy: function beforeDestroy() {
    var steps = this.$parent.steps;
    var index = steps.indexOf(this);
    if (index >= 0) {
      steps.splice(index, 1);
    }
  },


  computed: {
    currentStatus: function currentStatus() {
      return this.status || this.internalStatus;
    },
    prevStatus: function prevStatus() {
      var prevStep = this.$parent.steps[this.index - 1];
      return prevStep ? prevStep.currentStatus : 'wait';
    },
    isCenter: function isCenter() {
      return this.$parent.alignCenter;
    },
    isVertical: function isVertical() {
      return this.$parent.direction === 'vertical';
    },
    isSimple: function isSimple() {
      return this.$parent.simple;
    },
    isLast: function isLast() {
      var parent = this.$parent;
      return parent.steps[parent.steps.length - 1] === this;
    },
    stepsCount: function stepsCount() {
      return this.$parent.steps.length;
    },
    space: function space() {
      var isSimple = this.isSimple,
          space = this.$parent.space;

      return isSimple ? '' : space;
    },

    style: function style() {
      var style = {};
      var parent = this.$parent;
      var len = parent.steps.length;

      var space = typeof this.space === 'number' ? this.space + 'px' : this.space ? this.space : 100 / (len - (this.isCenter ? 0 : 1)) + '%';
      style.flexBasis = space;
      if (this.isVertical) return style;
      if (this.isLast) {
        style.maxWidth = 100 / this.stepsCount + '%';
      } else {
        style.marginRight = -this.$parent.stepOffset + 'px';
      }

      return style;
    }
  },

  methods: {
    updateStatus: function updateStatus(val) {
      var prevChild = this.$parent.$children[this.index - 1];

      if (val > this.index) {
        this.internalStatus = this.$parent.finishStatus;
      } else if (val === this.index && this.prevStatus !== 'error') {
        this.internalStatus = this.$parent.processStatus;
      } else {
        this.internalStatus = 'wait';
      }

      if (prevChild) prevChild.calcProgress(this.internalStatus);
    },
    calcProgress: function calcProgress(status) {
      var step = 100;
      var style = {};

      style.transitionDelay = 150 * this.index + 'ms';
      if (status === this.$parent.processStatus) {
        step = this.currentStatus !== 'error' ? 0 : 0;
      } else if (status === 'wait') {
        step = 0;
        style.transitionDelay = -150 * this.index + 'ms';
      }

      style.borderWidth = step && !this.isSimple ? '1px' : 0;
      this.$parent.direction === 'vertical' ? style.height = step + '%' : style.width = step + '%';

      this.lineStyle = style;
    }
  },

  mounted: function mounted() {
    var _this = this;

    var unwatch = this.$watch('index', function (val) {
      _this.$watch('$parent.active', _this.updateStatus, { immediate: true });
      _this.$watch('$parent.processStatus', function () {
        var activeIndex = _this.$parent.active;
        _this.updateStatus(activeIndex);
      }, { immediate: true });
      unwatch();
    });
  }
});
// CONCATENATED MODULE: ./packages/steps/src/step.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_stepvue_type_script_lang_js_ = (stepvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/steps/src/step.vue





/* normalize component */

var step_component = normalizeComponent(
  src_stepvue_type_script_lang_js_,
  stepvue_type_template_id_f414a87a_render,
  stepvue_type_template_id_f414a87a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var step_api; }
step_component.options.__file = "packages/steps/src/step.vue"
/* harmony default export */ var step = (step_component.exports);
// CONCATENATED MODULE: ./packages/step/index.js


/* istanbul ignore next */
step.install = function (Vue) {
  Vue.component(step.name, step);
};

/* harmony default export */ var packages_step = (step);
// CONCATENATED MODULE: ./packages/divider/src/main.js
/* harmony default export */ var divider_src_main = ({
  functional: true,

  name: 'ElDivider',

  props: {
    direction: {
      type: String,
      default: 'horizontal',
      validator: function validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1;
      }
    },

    contentPosition: {
      type: String,
      default: 'center',
      validator: function validator(val) {
        return ['left', 'center', 'right'].indexOf(val) !== -1;
      }
    }
  },

  render: function render(h, context) {
    var $slots = context.slots();
    var _context$props = context.props,
        direction = _context$props.direction,
        contentPosition = _context$props.contentPosition;

    return h(
      'div',
      { 'class': ['el-divider', 'el-divider--' + direction] },
      [$slots.default && direction !== 'vertical' ? h(
        'div',
        { 'class': ['el-divider__text', 'is-' + contentPosition] },
        [$slots.default]
      ) : null]
    );
  }
});
// CONCATENATED MODULE: ./packages/divider/index.js


/* istanbul ignore next */
divider_src_main.install = function (Vue) {
  Vue.component(divider_src_main.name, divider_src_main);
};

/* harmony default export */ var divider = (divider_src_main);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/progress/src/progress.vue?vue&type=template&id=229ee406&
var progressvue_type_template_id_229ee406_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "el-progress",
      class: [
        "el-progress--" + _vm.type,
        _vm.status ? "is-" + _vm.status : "",
        {
          "el-progress--without-text": !_vm.showText,
          "el-progress--text-inside": _vm.textInside
        }
      ],
      attrs: {
        role: "progressbar",
        "aria-valuenow": _vm.percentage,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }
    },
    [
      _vm.type === "line"
        ? _c("div", { staticClass: "el-progress-bar" }, [
            _c(
              "div",
              {
                staticClass: "el-progress-bar__outer",
                style: { height: _vm.strokeWidth + "px" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "el-progress-bar__inner",
                    style: _vm.barStyle
                  },
                  [
                    _vm.showText && _vm.textInside
                      ? _c(
                          "div",
                          { staticClass: "el-progress-bar__innerText" },
                          [_vm._v(_vm._s(_vm.content))]
                        )
                      : _vm._e()
                  ]
                )
              ]
            )
          ])
        : _c(
            "div",
            {
              staticClass: "el-progress-circle",
              style: { height: _vm.width + "px", width: _vm.width + "px" }
            },
            [
              _c("svg", { attrs: { viewBox: "0 0 100 100" } }, [
                _c("path", {
                  staticClass: "el-progress-circle__track",
                  style: _vm.trailPathStyle,
                  attrs: {
                    d: _vm.trackPath,
                    stroke: "#e5e9f2",
                    "stroke-width": _vm.relativeStrokeWidth,
                    fill: "none"
                  }
                }),
                _c("path", {
                  staticClass: "el-progress-circle__path",
                  style: _vm.circlePathStyle,
                  attrs: {
                    d: _vm.trackPath,
                    stroke: _vm.stroke,
                    fill: "none",
                    "stroke-linecap": "round",
                    "stroke-width": _vm.percentage ? _vm.relativeStrokeWidth : 0
                  }
                })
              ])
            ]
          ),
      _vm.showText && !_vm.textInside
        ? _c(
            "div",
            {
              staticClass: "el-progress__text",
              style: { fontSize: _vm.progressTextSize + "px" }
            },
            [
              !_vm.status
                ? [_vm._v(_vm._s(_vm.content))]
                : _c("i", { class: _vm.iconClass })
            ],
            2
          )
        : _vm._e()
    ]
  )
}
var progressvue_type_template_id_229ee406_staticRenderFns = []
progressvue_type_template_id_229ee406_render._withStripped = true


// CONCATENATED MODULE: ./packages/progress/src/progress.vue?vue&type=template&id=229ee406&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/progress/src/progress.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var progressvue_type_script_lang_js_ = ({
  name: 'ElProgress',
  props: {
    type: {
      type: String,
      default: 'line',
      validator: function validator(val) {
        return ['line', 'circle', 'dashboard'].indexOf(val) > -1;
      }
    },
    percentage: {
      type: Number,
      default: 0,
      required: true,
      validator: function validator(val) {
        return val >= 0 && val <= 100;
      }
    },
    status: {
      type: String,
      validator: function validator(val) {
        return ['success', 'exception', 'warning'].indexOf(val) > -1;
      }
    },
    strokeWidth: {
      type: Number,
      default: 6
    },
    textInside: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 126
    },
    showText: {
      type: Boolean,
      default: true
    },
    color: {
      type: [String, Array, Function],
      default: ''
    },
    format: Function
  },
  computed: {
    barStyle: function barStyle() {
      var style = {};
      style.width = this.percentage + '%';
      style.backgroundColor = this.getCurrentColor(this.percentage);
      return style;
    },
    relativeStrokeWidth: function relativeStrokeWidth() {
      return (this.strokeWidth / this.width * 100).toFixed(1);
    },
    radius: function radius() {
      if (this.type === 'circle' || this.type === 'dashboard') {
        return parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);
      } else {
        return 0;
      }
    },
    trackPath: function trackPath() {
      var radius = this.radius;
      var isDashboard = this.type === 'dashboard';
      return '\n        M 50 50\n        m 0 ' + (isDashboard ? '' : '-') + radius + '\n        a ' + radius + ' ' + radius + ' 0 1 1 0 ' + (isDashboard ? '-' : '') + radius * 2 + '\n        a ' + radius + ' ' + radius + ' 0 1 1 0 ' + (isDashboard ? '' : '-') + radius * 2 + '\n        ';
    },
    perimeter: function perimeter() {
      return 2 * Math.PI * this.radius;
    },
    rate: function rate() {
      return this.type === 'dashboard' ? 0.75 : 1;
    },
    strokeDashoffset: function strokeDashoffset() {
      var offset = -1 * this.perimeter * (1 - this.rate) / 2;
      return offset + 'px';
    },
    trailPathStyle: function trailPathStyle() {
      return {
        strokeDasharray: this.perimeter * this.rate + 'px, ' + this.perimeter + 'px',
        strokeDashoffset: this.strokeDashoffset
      };
    },
    circlePathStyle: function circlePathStyle() {
      return {
        strokeDasharray: this.perimeter * this.rate * (this.percentage / 100) + 'px, ' + this.perimeter + 'px',
        strokeDashoffset: this.strokeDashoffset,
        transition: 'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease'
      };
    },
    stroke: function stroke() {
      var ret = void 0;
      if (this.color) {
        ret = this.getCurrentColor(this.percentage);
      } else {
        switch (this.status) {
          case 'success':
            ret = '#13ce66';
            break;
          case 'exception':
            ret = '#ff4949';
            break;
          case 'warning':
            ret = '#e6a23c';
            break;
          default:
            ret = '#20a0ff';
        }
      }
      return ret;
    },
    iconClass: function iconClass() {
      if (this.status === 'warning') {
        return 'el-icon-warning';
      }
      if (this.type === 'line') {
        return this.status === 'success' ? 'el-icon-circle-check' : 'el-icon-circle-close';
      } else {
        return this.status === 'success' ? 'el-icon-check' : 'el-icon-close';
      }
    },
    progressTextSize: function progressTextSize() {
      return this.type === 'line' ? 12 + this.strokeWidth * 0.4 : this.width * 0.111111 + 2;
    },
    content: function content() {
      if (typeof this.format === 'function') {
        return this.format(this.percentage) || '';
      } else {
        return this.percentage + '%';
      }
    }
  },
  methods: {
    getCurrentColor: function getCurrentColor(percentage) {
      if (typeof this.color === 'function') {
        return this.color(percentage);
      } else if (typeof this.color === 'string') {
        return this.color;
      } else {
        return this.getLevelColor(percentage);
      }
    },
    getLevelColor: function getLevelColor(percentage) {
      var colorArray = this.getColorArray().sort(function (a, b) {
        return a.percentage - b.percentage;
      });

      for (var i = 0; i < colorArray.length; i++) {
        if (colorArray[i].percentage > percentage) {
          return colorArray[i].color;
        }
      }
      return colorArray[colorArray.length - 1].color;
    },
    getColorArray: function getColorArray() {
      var color = this.color;
      var span = 100 / color.length;
      return color.map(function (seriesColor, index) {
        if (typeof seriesColor === 'string') {
          return {
            color: seriesColor,
            progress: (index + 1) * span
          };
        }
        return seriesColor;
      });
    }
  }
});
// CONCATENATED MODULE: ./packages/progress/src/progress.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_progressvue_type_script_lang_js_ = (progressvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/progress/src/progress.vue





/* normalize component */

var progress_component = normalizeComponent(
  src_progressvue_type_script_lang_js_,
  progressvue_type_template_id_229ee406_render,
  progressvue_type_template_id_229ee406_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var progress_api; }
progress_component.options.__file = "packages/progress/src/progress.vue"
/* harmony default export */ var progress = (progress_component.exports);
// CONCATENATED MODULE: ./packages/progress/index.js


/* istanbul ignore next */
progress.install = function (Vue) {
  Vue.component(progress.name, progress);
};

/* harmony default export */ var packages_progress = (progress);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/badge/src/main.vue?vue&type=template&id=7ccb6598&
var mainvue_type_template_id_7ccb6598_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "el-badge" },
    [
      _vm._t("default"),
      _c("transition", { attrs: { name: "el-zoom-in-center" } }, [
        _c("sup", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value:
                !_vm.hidden && (_vm.content || _vm.content === 0 || _vm.isDot),
              expression: "!hidden && (content || content === 0 || isDot)"
            }
          ],
          staticClass: "el-badge__content",
          class: [
            "el-badge__content--" + _vm.type,
            {
              "is-fixed": _vm.$slots.default,
              "is-dot": _vm.isDot
            }
          ],
          domProps: { textContent: _vm._s(_vm.content) }
        })
      ])
    ],
    2
  )
}
var mainvue_type_template_id_7ccb6598_staticRenderFns = []
mainvue_type_template_id_7ccb6598_render._withStripped = true


// CONCATENATED MODULE: ./packages/badge/src/main.vue?vue&type=template&id=7ccb6598&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/badge/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var badge_src_mainvue_type_script_lang_js_ = ({
  name: 'ElBadge',

  props: {
    value: [String, Number],
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String,
      validator: function validator(val) {
        return ['primary', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1;
      }
    }
  },

  computed: {
    content: function content() {
      if (this.isDot) return;

      var value = this.value;
      var max = this.max;

      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? max + '+' : value;
      }

      return value;
    }
  }
});
// CONCATENATED MODULE: ./packages/badge/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_badge_src_mainvue_type_script_lang_js_ = (badge_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/badge/src/main.vue





/* normalize component */

var badge_src_main_component = normalizeComponent(
  packages_badge_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_7ccb6598_render,
  mainvue_type_template_id_7ccb6598_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var badge_src_main_api; }
badge_src_main_component.options.__file = "packages/badge/src/main.vue"
/* harmony default export */ var badge_src_main = (badge_src_main_component.exports);
// CONCATENATED MODULE: ./packages/badge/index.js


/* istanbul ignore next */
badge_src_main.install = function (Vue) {
  Vue.component(badge_src_main.name, badge_src_main);
};

/* harmony default export */ var badge = (badge_src_main);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/icon/src/icon.vue?vue&type=template&id=cb3fe7f4&
var iconvue_type_template_id_cb3fe7f4_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("i", { class: "el-icon-" + _vm.name })
}
var iconvue_type_template_id_cb3fe7f4_staticRenderFns = []
iconvue_type_template_id_cb3fe7f4_render._withStripped = true


// CONCATENATED MODULE: ./packages/icon/src/icon.vue?vue&type=template&id=cb3fe7f4&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/icon/src/icon.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var iconvue_type_script_lang_js_ = ({
  name: 'ElIcon',

  props: {
    name: String
  }
});
// CONCATENATED MODULE: ./packages/icon/src/icon.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_iconvue_type_script_lang_js_ = (iconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/icon/src/icon.vue





/* normalize component */

var icon_component = normalizeComponent(
  src_iconvue_type_script_lang_js_,
  iconvue_type_template_id_cb3fe7f4_render,
  iconvue_type_template_id_cb3fe7f4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var icon_api; }
icon_component.options.__file = "packages/icon/src/icon.vue"
/* harmony default export */ var icon = (icon_component.exports);
// CONCATENATED MODULE: ./packages/icon/index.js


/* istanbul ignore next */
icon.install = function (Vue) {
  Vue.component(icon.name, icon);
};

/* harmony default export */ var packages_icon = (icon);
// CONCATENATED MODULE: ./packages/row/src/row.js
/* harmony default export */ var src_row = ({
  name: 'ElRow',

  componentName: 'ElRow',

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },

  computed: {
    style: function style() {
      var ret = {};

      if (this.gutter) {
        ret.marginLeft = '-' + this.gutter / 2 + 'px';
        ret.marginRight = ret.marginLeft;
      }

      return ret;
    }
  },

  render: function render(h) {
    return h(this.tag, {
      class: ['el-row', this.justify !== 'start' ? 'is-justify-' + this.justify : '', this.align !== 'top' ? 'is-align-' + this.align : '', { 'el-row--flex': this.type === 'flex' }],
      style: this.style
    }, this.$slots.default);
  }
});
// CONCATENATED MODULE: ./packages/row/index.js


/* istanbul ignore next */
src_row.install = function (Vue) {
  Vue.component(src_row.name, src_row);
};

/* harmony default export */ var packages_row = (src_row);
// CONCATENATED MODULE: ./packages/col/src/col.js
var col_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* harmony default export */ var col = ({
  name: 'ElCol',

  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },

  computed: {
    gutter: function gutter() {
      var parent = this.$parent;
      while (parent && parent.$options.componentName !== 'ElRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    }
  },
  render: function render(h) {
    var _this = this;

    var classList = [];
    var style = {};

    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + 'px';
      style.paddingRight = style.paddingLeft;
    }

    ['span', 'offset', 'pull', 'push'].forEach(function (prop) {
      if (_this[prop] || _this[prop] === 0) {
        classList.push(prop !== 'span' ? 'el-col-' + prop + '-' + _this[prop] : 'el-col-' + _this[prop]);
      }
    });

    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(function (size) {
      if (typeof _this[size] === 'number') {
        classList.push('el-col-' + size + '-' + _this[size]);
      } else if (col_typeof(_this[size]) === 'object') {
        var props = _this[size];
        Object.keys(props).forEach(function (prop) {
          classList.push(prop !== 'span' ? 'el-col-' + size + '-' + prop + '-' + props[prop] : 'el-col-' + size + '-' + props[prop]);
        });
      }
    });

    return h(this.tag, {
      class: ['el-col', classList],
      style: style
    }, this.$slots.default);
  }
});
// CONCATENATED MODULE: ./packages/col/index.js


/* istanbul ignore next */
col.install = function (Vue) {
  Vue.component(col.name, col);
};

/* harmony default export */ var packages_col = (col);
// EXTERNAL MODULE: external "element-mini-ui/lib/utils/types"
var types_ = __webpack_require__(21);

// CONCATENATED MODULE: ./packages/infinite-scroll/src/main.js




var getStyleComputedProperty = function getStyleComputedProperty(element, property) {
  if (element === window) {
    element = document.documentElement;
  }

  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
};

var entries = function entries(obj) {
  return Object.keys(obj || {}).map(function (key) {
    return [key, obj[key]];
  });
};

var getPositionSize = function getPositionSize(el, prop) {
  return el === window || el === document ? document.documentElement[prop] : el[prop];
};

var getOffsetHeight = function getOffsetHeight(el) {
  return getPositionSize(el, 'offsetHeight');
};

var getClientHeight = function getClientHeight(el) {
  return getPositionSize(el, 'clientHeight');
};

var scope = 'ElInfiniteScroll';
var attributes = {
  delay: {
    type: Number,
    default: 200
  },
  distance: {
    type: Number,
    default: 0
  },
  disabled: {
    type: Boolean,
    default: false
  },
  immediate: {
    type: Boolean,
    default: true
  }
};

var main_getScrollOptions = function getScrollOptions(el, vm) {
  if (!Object(types_["isHtmlElement"])(el)) return {};

  return entries(attributes).reduce(function (map, _ref) {
    var key = _ref[0],
        option = _ref[1];
    var type = option.type,
        defaultValue = option.default;

    var value = el.getAttribute('infinite-scroll-' + key);
    value = Object(types_["isUndefined"])(vm[value]) ? value : vm[value];
    switch (type) {
      case Number:
        value = Number(value);
        value = Number.isNaN(value) ? defaultValue : value;
        break;
      case Boolean:
        value = Object(types_["isDefined"])(value) ? value === 'false' ? false : Boolean(value) : defaultValue;
        break;
      default:
        value = type(value);
    }
    map[key] = value;
    return map;
  }, {});
};

var getElementTop = function getElementTop(el) {
  return el.getBoundingClientRect().top;
};

var main_handleScroll = function handleScroll(cb) {
  var _scope = this[scope],
      el = _scope.el,
      vm = _scope.vm,
      container = _scope.container,
      observer = _scope.observer;

  var _getScrollOptions = main_getScrollOptions(el, vm),
      distance = _getScrollOptions.distance,
      disabled = _getScrollOptions.disabled;

  if (disabled) return;

  var shouldTrigger = false;

  if (container === el) {
    // be aware of difference between clientHeight & offsetHeight & window.getComputedStyle().height
    var scrollBottom = container.scrollTop + getClientHeight(container);
    shouldTrigger = container.scrollHeight - scrollBottom <= distance;
  } else {
    var heightBelowTop = getOffsetHeight(el) + getElementTop(el) - getElementTop(container);
    var offsetHeight = getOffsetHeight(container);
    var borderBottom = Number.parseFloat(getStyleComputedProperty(container, 'borderBottomWidth'));
    shouldTrigger = heightBelowTop - offsetHeight + borderBottom <= distance;
  }

  if (shouldTrigger && Object(types_["isFunction"])(cb)) {
    cb.call(vm);
  } else if (observer) {
    observer.disconnect();
    this[scope].observer = null;
  }
};

/* harmony default export */ var infinite_scroll_src_main = ({
  name: 'InfiniteScroll',
  inserted: function inserted(el, binding, vnode) {
    var cb = binding.value;

    var vm = vnode.context;
    // only include vertical scroll
    var container = Object(dom_["getScrollContainer"])(el, true);

    var _getScrollOptions2 = main_getScrollOptions(el, vm),
        delay = _getScrollOptions2.delay,
        immediate = _getScrollOptions2.immediate;

    var onScroll = debounce_default()(delay, main_handleScroll.bind(el, cb));

    el[scope] = { el: el, vm: vm, container: container, onScroll: onScroll };

    if (container) {
      container.addEventListener('scroll', onScroll);

      if (immediate) {
        var observer = el[scope].observer = new MutationObserver(onScroll);
        observer.observe(container, { childList: true, subtree: true });
        onScroll();
      }
    }
  },
  unbind: function unbind(el) {
    var _el$scope = el[scope],
        container = _el$scope.container,
        onScroll = _el$scope.onScroll;

    if (container) {
      container.removeEventListener('scroll', onScroll);
    }
  }
});
// CONCATENATED MODULE: ./packages/infinite-scroll/index.js


/* istanbul ignore next */
infinite_scroll_src_main.install = function (Vue) {
  Vue.directive(infinite_scroll_src_main.name, infinite_scroll_src_main);
};

/* harmony default export */ var infinite_scroll = (infinite_scroll_src_main);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/drawer/src/main.vue?vue&type=template&id=a4885264&
var mainvue_type_template_id_a4885264_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "el-drawer-fade" },
      on: { "after-enter": _vm.afterEnter, "after-leave": _vm.afterLeave }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          staticClass: "el-drawer__wrapper",
          attrs: { tabindex: "-1" }
        },
        [
          _c(
            "div",
            {
              staticClass: "el-drawer__container",
              class: _vm.visible && "el-drawer__open",
              attrs: { role: "document", tabindex: "-1" },
              on: {
                click: function($event) {
                  if ($event.target !== $event.currentTarget) {
                    return null
                  }
                  return _vm.handleWrapperClick($event)
                }
              }
            },
            [
              _c(
                "div",
                {
                  ref: "drawer",
                  staticClass: "el-drawer",
                  class: [_vm.direction, _vm.customClass],
                  style: _vm.isHorizontal
                    ? "width: " + _vm.size
                    : "height: " + _vm.size,
                  attrs: {
                    "aria-modal": "true",
                    "aria-labelledby": "el-drawer__title",
                    "aria-label": _vm.title,
                    role: "dialog",
                    tabindex: "-1"
                  }
                },
                [
                  _vm.withHeader
                    ? _c(
                        "header",
                        {
                          staticClass: "el-drawer__header",
                          attrs: { id: "el-drawer__title" }
                        },
                        [
                          _vm._t("title", [
                            _c(
                              "span",
                              { attrs: { role: "heading", tabindex: "0" } },
                              [_vm._v(_vm._s(_vm.title))]
                            )
                          ]),
                          _vm.showClose
                            ? _c(
                                "button",
                                {
                                  staticClass: "el-drawer__close-btn",
                                  attrs: {
                                    "aria-label":
                                      "close " + (_vm.title || "drawer"),
                                    type: "button"
                                  },
                                  on: { click: _vm.closeDrawer }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "el-dialog__close el-icon el-icon-close"
                                  })
                                ]
                              )
                            : _vm._e()
                        ],
                        2
                      )
                    : _vm._e(),
                  _vm.rendered
                    ? _c(
                        "section",
                        { staticClass: "el-drawer__body" },
                        [_vm._t("default")],
                        2
                      )
                    : _vm._e()
                ]
              )
            ]
          )
        ]
      )
    ]
  )
}
var mainvue_type_template_id_a4885264_staticRenderFns = []
mainvue_type_template_id_a4885264_render._withStripped = true


// CONCATENATED MODULE: ./packages/drawer/src/main.vue?vue&type=template&id=a4885264&

// EXTERNAL MODULE: external "element-mini-ui/lib/utils/aria-utils"
var aria_utils_ = __webpack_require__(35);
var aria_utils_default = /*#__PURE__*/__webpack_require__.n(aria_utils_);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./packages/drawer/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var drawer_src_mainvue_type_script_lang_js_ = ({
  name: 'ElDrawer',
  mixins: [popup_default.a, emitter_default.a],
  props: {
    appendToBody: {
      type: Boolean,
      default: false
    },
    beforeClose: {
      type: Function
    },
    customClass: {
      type: String,
      default: ''
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    },
    modal: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'rtl',
      validator: function validator(val) {
        return ['ltr', 'rtl', 'ttb', 'btt'].indexOf(val) !== -1;
      }
    },
    modalAppendToBody: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: '30%'
    },
    title: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean
    },
    wrapperClosable: {
      type: Boolean,
      default: true
    },
    withHeader: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    isHorizontal: function isHorizontal() {
      return this.direction === 'rtl' || this.direction === 'ltr';
    }
  },
  data: function data() {
    return {
      closed: false,
      prevActiveElement: null
    };
  },

  watch: {
    visible: function visible(val) {
      var _this = this;

      if (val) {
        this.closed = false;
        this.$emit('open');
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
        this.prevActiveElement = document.activeElement;
        this.$nextTick(function () {
          aria_utils_default.a.focusFirstDescendant(_this.$refs.drawer);
        });
      } else {
        if (!this.closed) this.$emit('close');
        this.$nextTick(function () {
          if (_this.prevActiveElement) {
            _this.prevActiveElement.focus();
          }
        });
      }
    }
  },
  methods: {
    afterEnter: function afterEnter() {
      this.$emit('opened');
    },
    afterLeave: function afterLeave() {
      this.$emit('closed');
    },
    hide: function hide(cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false);
        this.$emit('close');
        if (this.destroyOnClose === true) {
          this.rendered = false;
        }
        this.closed = true;
      }
    },
    handleWrapperClick: function handleWrapperClick() {
      if (this.wrapperClosable) {
        this.closeDrawer();
      }
    },
    closeDrawer: function closeDrawer() {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide);
      } else {
        this.hide();
      }
    },
    handleClose: function handleClose() {
      // This method here will be called by PopupManger, when the `closeOnPressEscape` was set to true
      // pressing `ESC` will call this method, and also close the drawer.
      // This method also calls `beforeClose` if there was one.
      this.closeDrawer();
    }
  },
  mounted: function mounted() {
    if (this.visible) {
      this.rendered = true;
      this.open();
    }
  },
  destroyed: function destroyed() {
    // if appendToBody is true, remove DOM node after destroy
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  }
});
// CONCATENATED MODULE: ./packages/drawer/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_drawer_src_mainvue_type_script_lang_js_ = (drawer_src_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/drawer/src/main.vue





/* normalize component */

var drawer_src_main_component = normalizeComponent(
  packages_drawer_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_a4885264_render,
  mainvue_type_template_id_a4885264_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var drawer_src_main_api; }
drawer_src_main_component.options.__file = "packages/drawer/src/main.vue"
/* harmony default export */ var drawer_src_main = (drawer_src_main_component.exports);
// CONCATENATED MODULE: ./packages/drawer/index.js


/* istanbul ignore next */
drawer_src_main.install = function (Vue) {
  Vue.component(drawer_src_main.name, drawer_src_main);
};

/* harmony default export */ var drawer = (drawer_src_main);
// CONCATENATED MODULE: ./src/index.js
/*
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-03-14 09:18:41
 * @LastEditTime: 2020-02-15 22:18:32
 */
/* Automatically generated by './build/bin/build-entry.js' */

























































// import Switch from '../packages/switch/index.js';
// import Breadcrumb from '../packages/breadcrumb/index.js';
// import BreadcrumbItem from '../packages/breadcrumb-item/index.js';
// import Slider from '../packages/slider/index.js';
// import Upload from '../packages/upload/index.js';
// import Spinner from '../packages/spinner/index.js';
// import Card from '../packages/card/index.js';
// import Rate from '../packages/rate/index.js';
// import Collapse from '../packages/collapse/index.js';
// import CollapseItem from '../packages/collapse-item/index.js';
// import Cascader from '../packages/cascader/index.js';
// import ColorPicker from '../packages/color-picker/index.js';
// import Transfer from '../packages/transfer/index.js';
// import Container from '../packages/container/index.js';
// import Header from '../packages/header/index.js';
// import Aside from '../packages/aside/index.js';
// import Main from '../packages/main/index.js';
// import Footer from '../packages/footer/index.js';
// import Timeline from '../packages/timeline/index.js';
// import TimelineItem from '../packages/timeline-item/index.js';
// import Link from '../packages/link/index.js';
// import Image from '../packages/image/index.js';
// import Calendar from '../packages/calendar/index.js';
// import Backtop from '../packages/backtop/index.js';
// import Avatar from '../packages/avatar/index.js';

// ++ 新增组件
var components = [packages_pagination, dialog, packages_autocomplete, packages_dropdown, packages_dropdown_menu, packages_dropdown_item, packages_menu, packages_submenu, packages_menu_item, packages_menu_item_group, packages_input, packages_input_number, packages_radio, packages_radio_group, packages_radio_button, packages_checkbox, packages_checkbox_button, packages_checkbox_group, packages_select, packages_option, packages_option_group, packages_button, packages_button_group, packages_table, packages_table_column, packages_date_picker, packages_time_select, packages_time_picker, popover, packages_tooltip, packages_form, packages_form_item, packages_tabs, packages_tab_pane, packages_tag, packages_tree, packages_alert, packages_icon, packages_row, packages_col, packages_progress, badge, carousel, carousel_item, scrollbar, packages_steps, packages_step, drawer, collapse_transition_default.a, divider
// Tabs,
// Upload,
// Switch,
// Link,
// Image,
// Backtop,
// Timeline,
// TimelineItem,
// Calendar,
// Spinner,
// Card,
// Rate,
// Slider,
// Avatar,
// Breadcrumb,
// BreadcrumbItem,
// Collapse,
// CollapseItem,
// Cascader,
// ColorPicker,
// Transfer,
// Container,
// Header,
// Aside,
// Main,
// Footer,
// PageHeader,
// CascaderPanel,
];

var src_install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  lib_locale_default.a.use(opts.locale);
  lib_locale_default.a.i18n(opts.i18n);
  components.forEach(function (component) {
    Vue.component(component.name, component);
  });

  Vue.use(infinite_scroll);
  Vue.use(packages_loading.directive);

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };
  Vue.prototype.$loading = packages_loading.service;
  Vue.prototype.$msgbox = message_box;
  Vue.prototype.$alert = message_box.alert;
  Vue.prototype.$confirm = message_box.confirm;
  Vue.prototype.$prompt = message_box.prompt;
  Vue.prototype.$notify = notification;
  Vue.prototype.$message = packages_message;
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  src_install(window.Vue);
}

/* harmony default export */ var src_0 = __webpack_exports__["default"] = ({
  version: '2.10.1',
  locale: lib_locale_default.a.use,
  i18n: lib_locale_default.a.i18n,
  install: src_install,
  CollapseTransition: collapse_transition_default.a,
  Loading: packages_loading,
  Pagination: packages_pagination,
  Dialog: dialog,
  Autocomplete: packages_autocomplete,
  Dropdown: packages_dropdown,
  DropdownMenu: packages_dropdown_menu,
  DropdownItem: packages_dropdown_item,
  Menu: packages_menu,
  Submenu: packages_submenu,
  MenuItem: packages_menu_item,
  MenuItemGroup: packages_menu_item_group,
  Input: packages_input,
  InputNumber: packages_input_number,
  Radio: packages_radio,
  RadioGroup: packages_radio_group,
  RadioButton: packages_radio_button,
  Checkbox: packages_checkbox,
  CheckboxButton: packages_checkbox_button,
  CheckboxGroup: packages_checkbox_group,
  Select: packages_select,
  Option: packages_option,
  OptionGroup: packages_option_group,
  Button: packages_button,
  ButtonGroup: packages_button_group,
  Table: packages_table,
  TableColumn: packages_table_column,
  DatePicker: packages_date_picker,
  TimeSelect: packages_time_select,
  TimePicker: packages_time_picker,
  Popover: popover,
  Tooltip: packages_tooltip,
  MessageBox: message_box,
  Form: packages_form,
  FormItem: packages_form_item,
  Tabs: packages_tabs,
  TabPane: packages_tab_pane,
  Tag: packages_tag,
  Tree: packages_tree,
  Alert: packages_alert,
  Notification: notification,
  Icon: packages_icon,
  Row: packages_row,
  Col: packages_col,
  Progress: packages_progress,
  Message: packages_message,
  Badge: badge,
  Carousel: carousel,
  CarouselItem: carousel_item,
  Scrollbar: scrollbar,
  InfiniteScroll: infinite_scroll,
  Divider: divider,
  Drawer: drawer,
  Steps: packages_steps,
  Step: packages_step
  // Tabs,
  // Upload,
  // Timeline,
  // TimelineItem,
  // Link,
  // Image,
  // Backtop,
  // Switch,
  // Breadcrumb,
  // BreadcrumbItem,
  // Spinner,
  // Slider,
  // Card,
  // Rate,
  // Collapse,
  // CollapseItem,
  // Cascader,
  // ColorPicker,
  // Transfer,
  // Container,
  // Header,
  // Aside,
  // Calendar,
  // Main,
  // Footer,
  // PageHeader,
  // CascaderPanel,
  // Avatar
});

/***/ })
/******/ ])["default"];