"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Auth_My-Account_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Auth/My-Account.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Auth/My-Account.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "My-Account",
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['user', 'isLoadingUser'])),
  methods: {
    logout: function logout() {
      document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      this.$store.commit('LOGOUT');
    },
    goAdmin: function goAdmin() {
      var webApiUrl = '/admin';
      var tokenStr = localStorage.getItem('access_token');
      document.cookie = "user=" + tokenStr;
      this.axios.get(webApiUrl, {
        headers: {
          "Authorization": "Bearer ".concat(tokenStr)
        }
      }).then(function (res) {
        window.location.href = '/admin?token=' + tokenStr;
      });
    },
    getOrders: function getOrders(id) {
      this.axios.get("/products/".concat(id)).then(function (res) {
        console.log(res);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Auth/My-Account.vue?vue&type=template&id=c784b0f8":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Auth/My-Account.vue?vue&type=template&id=c784b0f8 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "overflow-hidden"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"breadcrumb-area\" style=\"background-image:url(&#39;assets/images/inner-pages/breadcum-bg.png&#39;);\"><div class=\"container\"><div class=\"row\"><div class=\"col-xl-12\"><div class=\"breadcrumb-content text-center wow fadeInUp animated\"><h2>My Account </h2><div class=\"breadcrumb-menu\"><ul><li><a href=\"index.html\"><i class=\"flaticon-home pe-2\"></i>Главная</a></li><li><i class=\"flaticon-next\"></i></li><li class=\"active\">Мой аккаунт</li></ul></div></div></div></div></div></section>", 1);
var _hoisted_3 = {
  "class": "my-account-page pt-120 pb-120"
};
var _hoisted_4 = {
  "class": "container"
};
var _hoisted_5 = {
  "class": "row wow fadeInUp animated"
};
var _hoisted_6 = {
  "class": "col-xl-3 col-lg-4"
};
var _hoisted_7 = {
  "class": "d-flex align-items-start"
};
var _hoisted_8 = {
  "class": "nav my-account-page__menu flex-column nav-pills me-3",
  id: "v-pills-tab",
  role: "tablist",
  "aria-orientation": "vertical"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "nav-link active",
  id: "v-pills-dashboard-tab",
  "data-bs-toggle": "pill",
  "data-bs-target": "#v-pills-dashboard",
  type: "button",
  role: "tab",
  "aria-controls": "v-pills-dashboard",
  "aria-selected": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " Рабочая область")], -1 /* HOISTED */);
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " Заказы", -1 /* HOISTED */);
var _hoisted_11 = [_hoisted_10];
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "nav-link",
  id: "v-pills-account-tab",
  "data-bs-toggle": "pill",
  "data-bs-target": "#v-pills-account",
  type: "button",
  role: "tab",
  "aria-controls": "v-pills-account",
  "aria-selected": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " Детали аккаунта")], -1 /* HOISTED */);
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " Админка", -1 /* HOISTED */);
var _hoisted_14 = [_hoisted_13];
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " Выйти ", -1 /* HOISTED */);
var _hoisted_16 = [_hoisted_15];
var _hoisted_17 = {
  "class": "col-lg-7"
};
var _hoisted_18 = {
  "class": "tab-content",
  id: "v-pills-tabContent"
};
var _hoisted_19 = {
  "class": "tab-pane fade show active",
  id: "v-pills-dashboard",
  role: "tabpanel",
  "aria-labelledby": "v-pills-dashboard-tab"
};
var _hoisted_20 = {
  "class": "tabs-content__single"
};
var _hoisted_21 = {
  key: 0
};
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("На панели мониторинга вашей учетной записи вы можете просматривать свои "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "последние заказы"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(", а также "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "редактировать"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" свой пароль и данные учетной записи")], -1 /* HOISTED */);
var _hoisted_23 = {
  "class": "tab-pane fade",
  id: "v-pills-orders",
  role: "tabpanel",
  "aria-labelledby": "v-pills-orders-tab"
};
var _hoisted_24 = {
  "class": "tabs-content__single"
};
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h5>Здесь будут ваши <span>Заказы</span></h5><table class=\"table\"><thead class=\"thead-dark\"><tr><th scope=\"col\">Название</th><th scope=\"col\">Изображение</th><th scope=\"col\">Количество</th><th scope=\"col\">Цена</th></tr></thead><tbody><tr><th scope=\"row\"></th><td>Mark</td><td>Otto</td><td>@mdo</td></tr></tbody></table>", 2);
var _hoisted_27 = {
  "class": "tab-pane fade",
  id: "v-pills-account",
  role: "tabpanel",
  "aria-labelledby": "v-pills-account-tab"
};
var _hoisted_28 = {
  "class": "tabs-content__single"
};
var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Ваши данные:", -1 /* HOISTED */);
var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Логин: ");
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Ваше имя: ");
var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Ваша почта: ");
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Ваш телефон: ");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Start Breadcrumb Style2"), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("End Breadcrumb Style2"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Start My Account Page"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Start My Account Page Menu"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.getOrders(_ctx.user.id);
    }, ["prevent"])),
    "class": "nav-link",
    id: "v-pills-orders-tab",
    "data-bs-toggle": "pill",
    "data-bs-target": "#v-pills-orders",
    type: "button",
    role: "tab",
    "aria-controls": "v-pills-orders",
    "aria-selected": "false"
  }, _hoisted_11), _hoisted_12, _ctx.user.is_admin === 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.goAdmin && $options.goAdmin.apply($options, arguments);
    }),
    "class": "nav-link",
    id: "v-pills-account-tab",
    "data-bs-toggle": "pill",
    "data-bs-target": "#v-pills-account",
    type: "button",
    role: "tab",
    "aria-controls": "v-pills-account",
    "aria-selected": "false"
  }, _hoisted_14)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.logout && $options.logout.apply($options, arguments);
    }, ["prevent"])),
    "class": "nav-link"
  }, _hoisted_16)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_ctx.user && _ctx.isLoadingUser ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h4", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Привет " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.user.login), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_22])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Привет " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.user.login), 1 /* TEXT */)]), _hoisted_25])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Привет " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.user.login), 1 /* TEXT */)]), _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.user.login), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.user.name), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.user.address), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.user.number), 1 /* TEXT */)])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("End My Account Page")]);
}

/***/ }),

/***/ "./resources/js/views/Auth/My-Account.vue":
/*!************************************************!*\
  !*** ./resources/js/views/Auth/My-Account.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _My_Account_vue_vue_type_template_id_c784b0f8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./My-Account.vue?vue&type=template&id=c784b0f8 */ "./resources/js/views/Auth/My-Account.vue?vue&type=template&id=c784b0f8");
/* harmony import */ var _My_Account_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./My-Account.vue?vue&type=script&lang=js */ "./resources/js/views/Auth/My-Account.vue?vue&type=script&lang=js");
/* harmony import */ var C_OpenServer_domains_market_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_market_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_My_Account_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_My_Account_vue_vue_type_template_id_c784b0f8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/Auth/My-Account.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/Auth/My-Account.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/views/Auth/My-Account.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_My_Account_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_My_Account_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./My-Account.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Auth/My-Account.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Auth/My-Account.vue?vue&type=template&id=c784b0f8":
/*!******************************************************************************!*\
  !*** ./resources/js/views/Auth/My-Account.vue?vue&type=template&id=c784b0f8 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_My_Account_vue_vue_type_template_id_c784b0f8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_My_Account_vue_vue_type_template_id_c784b0f8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./My-Account.vue?vue&type=template&id=c784b0f8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Auth/My-Account.vue?vue&type=template&id=c784b0f8");


/***/ })

}]);