"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_product_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Index.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Products.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_assets_images_logo_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../public/assets/images/logo/logo.png */ "./public/assets/images/logo/logo.png");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Index",
  mounted: function mounted() {
    $(document).trigger('changed');
    this.getProducts();
    this.getFilterList();
  },
  data: function data() {
    return {
      Logo: _public_assets_images_logo_logo_png__WEBPACK_IMPORTED_MODULE_0__["default"],
      products: [],
      popupProduct: null,
      filterList: [],
      categories: [],
      prices: [],
      tags: [],
      sortArray: [{
        key: 'all',
        'name': 'Все'
      }, {
        key: 'priceCreasing',
        'name': 'Цена по возростанию'
      }, {
        key: 'priceDecreasing',
        'name': 'Цена по убыванию'
      }, {
        key: 'dateNew',
        'name': 'Дата к новым'
      }],
      selectedSort: "all",
      pagination: [],
      totalPrice: 0
    };
  },
  methods: {
    addToCart: function addToCart(product, isSingle) {
      var qty = isSingle ? 1 : $('.qtyValue').val();
      var cart = localStorage.getItem('cart');
      $('.qtyValue').val(1);
      var newProduct = [{
        "id": product.id,
        "image_url": product.image_url,
        "title": product.title,
        "price": product.price,
        "qty": qty
      }];
      if (!cart) {
        localStorage.setItem('cart', JSON.stringify(newProduct));
      } else {
        cart = JSON.parse(cart);
        cart.forEach(function (productInCart) {
          if (productInCart.id === product.id) {
            productInCart.qty = Number(productInCart.qty) + Number(qty);
            newProduct = null;
          }
        });
        Array.prototype.push.apply(cart, newProduct);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
      var cartArr = JSON.parse(cart);
      var qtyCart = cartArr.reduce(function (qty, product) {
        return qty + product.qty;
      }, 0);
      this.$emit('saveQty', qtyCart);
      this.calculateCartPrice();
    },
    addTags: function addTags(id) {
      if (!this.tags.includes(id)) {
        this.tags.push(id);
      } else {
        this.tags = this.tags.filter(function (elem) {
          return elem !== id;
        });
      }
    },
    filterProductBtn: function filterProductBtn() {
      var prices = $('#priceRange').val();
      this.prices = prices.replace(/[\s+]|[₽]/g, '').split('-');
      this.getProducts();
    },
    sortedList: function sortedList() {
      switch (this.selectedSort) {
        case 'all':
          this.products.sort(function (a, b) {
            return a.id - b.id;
          });
          return;
        case 'priceCreasing':
          this.products.sort(function (a, b) {
            return a.price - b.price;
          });
          break;
        case 'priceDecreasing':
          this.products.sort(function (a, b) {
            return b.price - a.price;
          });
          break;
        case 'dateNew':
          this.products.sort(function (a, b) {
            return new Date(b.date_added) - new Date(a.date_added);
          });
          break;
      }
    },
    getProducts: function getProducts() {
      var _this = this;
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.axios.post('/api/products', {
        'filterList': this.filterList,
        'categories': this.categories,
        'prices': this.prices,
        'tags': this.tags,
        'page': page
      }).then(function (res) {
        _this.products = res.data.data;
        _this.pagination = res.data.meta;
      })["finally"](function (v) {
        $(document).trigger('changed');
      });
    },
    getProduct: function getProduct(id) {
      var _this2 = this;
      this.axios.get("/api/products/".concat(id)).then(function (res) {
        _this2.popupProduct = res.data.data;
      })["finally"](function (v) {
        $(document).trigger('changed');
      });
    },
    getFilterList: function getFilterList() {
      var _this3 = this;
      this.axios.get('/api/products/filters').then(function (res) {
        _this3.filterList = res.data;
        //  Price Filter
        if ($("#price-range").length) {
          $("#price-range").slider({
            range: true,
            min: _this3.filterList.price.min,
            max: _this3.filterList.price.max,
            values: [_this3.filterList.price.min, _this3.filterList.price.max],
            slide: function slide(event, ui) {
              $("#priceRange").val("₽" + ui.values[0] + " - ₽" + ui.values[1]);
            }
          });
          $("#priceRange").val("₽" + $("#price-range").slider("values", 0) + " - ₽" + $("#price-range").slider("values", 1));
        }
      })["finally"](function (v) {
        $(document).trigger('changed');
      });
    },
    calculateCartPrice: function calculateCartPrice() {
      this.totalPrice = this.products.reduce(function (sum, product) {
        return sum + product.price * product.qty;
      }, 0);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Index.vue?vue&type=template&id=06cfffba":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Products.vue?vue&type=template&id=06cfffba ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _public_assets_images_logo_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../public/assets/images/logo/logo.png */ "./public/assets/images/logo/logo.png");
/* harmony import */ var _public_assets_images_payment_method_method_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../public/assets/images/payment_method/method_1.png */ "./public/assets/images/payment_method/method_1.png");
/* harmony import */ var _public_assets_images_payment_method_method_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../public/assets/images/payment_method/method_2.png */ "./public/assets/images/payment_method/method_2.png");
/* harmony import */ var _public_assets_images_payment_method_method_3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../public/assets/images/payment_method/method_3.png */ "./public/assets/images/payment_method/method_3.png");
/* harmony import */ var _public_assets_images_payment_method_method_4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../public/assets/images/payment_method/method_4.png */ "./public/assets/images/payment_method/method_4.png");






var _hoisted_1 = {
  "class": "overflow-hidden"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"container\"><div class=\"row\"><div class=\"col-xl-12\"><div class=\"breadcrumb-content pb-60 text-center wow fadeInUp animated\"><h2>Shop Grid</h2><div class=\"breadcrumb-menu\"><ul><li><a href=\"index.html\"><i class=\"flaticon-home pe-2\"></i>Home</a></li><li><i class=\"flaticon-next\"></i></li><li class=\"active\">Shop Grid</li></ul></div></div></div></div></div>", 1);
var _hoisted_3 = [_hoisted_2];
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"product-categories-one pb-60\"><div class=\"container\"><div class=\"row wow fadeInUp animated\"><div class=\"col-xl-12\"><div class=\"product-categories-one__inner\"><ul><li><a href=\"#0\" class=\"img-box\"><div class=\"inner\"><img src=\"" + _public_assets_images_logo_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"] + "\" alt=\"\"></div></a><div class=\"title\"><a href=\"#0\"><h6>Accessories</h6></a></div></li><li><a href=\"#0\" class=\"img-box\"><div class=\"inner\"><img src=\"" + _public_assets_images_logo_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"] + "\" alt=\"\"></div></a><div class=\"title\"><a href=\"#0\"><h6>Furnitures</h6></a></div></li><li><a href=\"#0\" class=\"img-box\"><div class=\"inner\"><img src=\"" + _public_assets_images_logo_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"] + "\" alt=\"\"></div></a><div class=\"title\"><a href=\"#0\"><h6>Jewellery</h6></a></div></li><li><a href=\"#0\" class=\"img-box\"><div class=\"inner\"><img src=\"" + _public_assets_images_logo_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"] + "\" alt=\"\"></div></a><div class=\"title\"><a href=\"#0\"><h6>Shoes</h6></a></div></li><li><a href=\"#0\" class=\"img-box\"><div class=\"inner\"><img src=\"" + _public_assets_images_logo_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"] + "\" alt=\"\"></div></a><div class=\"title\"><a href=\"#0\"><h6>Electronics</h6></a></div></li><li><a href=\"#0\" class=\"img-box\"><div class=\"inner\"><img src=\"" + _public_assets_images_logo_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"] + "\" alt=\"\"></div></a><div class=\"title\"><a href=\"#0\"><h6>Fashion</h6></a></div></li></ul></div></div></div></div></section>", 1);
var _hoisted_5 = {
  "class": "product-grid pt-60 pb-120"
};
var _hoisted_6 = {
  "class": "container"
};
var _hoisted_7 = {
  "class": "row gx-4"
};
var _hoisted_8 = {
  "class": "col-xl-3 col-lg-4"
};
var _hoisted_9 = {
  "class": "shop-grid-sidebar"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "remove-sidebar d-lg-none d-block"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-cross"
})], -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "sidebar-holder"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<form action=\"#0\" class=\"footer-default__subscrib-form m-0 p-0 wow fadeInUp animated\"><div class=\"footer-input-box p-0\"><input type=\"email\" placeholder=\"Email address\" name=\"email\"> <button type=\"submit\" class=\"subscribe_btn\"><i class=\"flaticon-magnifying-glass\"></i></button></div></form>", 1);
var _hoisted_13 = {
  "class": "single-sidebar-box mt-30 wow fadeInUp animated"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Выберите категории", -1 /* HOISTED */);
var _hoisted_15 = {
  "class": "checkbox-item"
};
var _hoisted_16 = {
  "class": "form-group"
};
var _hoisted_17 = ["value", "id"];
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();
var _hoisted_19 = ["for"];
var _hoisted_20 = {
  "class": "single-sidebar-box mt-30 wow fadeInUp animated"
};
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Фильтр по цене", -1 /* HOISTED */);
var _hoisted_22 = {
  "class": "slider-box"
};
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "price-range",
  "class": "slider"
}, null, -1 /* HOISTED */);
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "output-price"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "priceRange"
}, "Цена:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "priceRange",
  readonly: ""
})], -1 /* HOISTED */);
var _hoisted_25 = {
  "class": "single-sidebar-box mt-30 wow fadeInUp animated pb-0 border-bottom-0"
};
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Теги ", -1 /* HOISTED */);
var _hoisted_27 = {
  "class": "popular-tag"
};
var _hoisted_28 = ["href", "onClick"];
var _hoisted_29 = {
  "class": "col-xl-9 col-lg-8"
};
var _hoisted_30 = {
  "class": "row"
};
var _hoisted_31 = {
  "class": "col-xl-12"
};
var _hoisted_32 = {
  "class": "shop-grid-page-top-info p-0 justify-content-md-between justify-content-center"
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "left-box wow fadeInUp animated"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Showing 1–12 of 50 Results ")], -1 /* HOISTED */);
var _hoisted_34 = {
  "class": "right-box justify-content-md-between justify-content-center wow fadeInUp animated"
};
var _hoisted_35 = {
  "class": "short-by"
};
var _hoisted_36 = {
  "class": "select-box sort-select"
};
var _hoisted_37 = ["value", "selected"];
var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, null, -1 /* HOISTED */);
var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "product-view-style d-flex justify-content-md-between justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-pills",
  id: "pills-tab",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item",
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "nav-link active",
  id: "pills-grid-tab",
  "data-bs-toggle": "pill",
  "data-bs-target": "#pills-grid",
  type: "button",
  role: "tab",
  "aria-selected": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-grid"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item",
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "nav-link",
  id: "pills-list-tab",
  "data-bs-toggle": "pill",
  "data-bs-target": "#pills-list",
  type: "button",
  role: "tab",
  "aria-selected": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-list"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "slidebarfilter d-lg-none d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-edit"
})])], -1 /* HOISTED */);
var _hoisted_40 = {
  "class": "row"
};
var _hoisted_41 = {
  "class": "col-12"
};
var _hoisted_42 = {
  "class": "tab-content",
  id: "pills-tabContent"
};
var _hoisted_43 = {
  "class": "tab-pane fade show active",
  id: "pills-grid",
  role: "tabpanel",
  "aria-labelledby": "pills-grid-tab"
};
var _hoisted_44 = {
  "class": "row"
};
var _hoisted_45 = {
  "class": "col-xl-4 col-lg-6 col-6"
};
var _hoisted_46 = {
  "class": "products-three-single w-100 mt-30"
};
var _hoisted_47 = {
  "class": "products-three-single-img"
};
var _hoisted_48 = {
  href: "shop-details-3.html",
  "class": "d-block"
};
var _hoisted_49 = ["src"];
var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();
var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _public_assets_images_logo_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"],
  alt: "",
  "class": "hover-img"
}, null, -1 /* HOISTED */);
var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "products-grid-one__badge-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "bg_base badge new"
}, "New")], -1 /* HOISTED */);
var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();
var _hoisted_54 = ["onClick"];
var _hoisted_55 = {
  "class": "products-grid__usefull-links"
};
var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "wishlist.html"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-heart"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " wishlist")])], -1 /* HOISTED */);
var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "compare.html"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-left-and-right-arrows"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " compare")])], -1 /* HOISTED */);
var _hoisted_58 = ["href", "onClick"];
var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-visibility"
}, null, -1 /* HOISTED */);
var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " quick view", -1 /* HOISTED */);
var _hoisted_61 = [_hoisted_59, _hoisted_60];
var _hoisted_62 = ["id"];
var _hoisted_63 = {
  key: 0,
  "class": "container"
};
var _hoisted_64 = {
  "class": "row justify-content-between"
};
var _hoisted_65 = {
  "class": "col-lg-6"
};
var _hoisted_66 = {
  "class": "quick-view__left-content"
};
var _hoisted_67 = {
  "class": "tabs"
};
var _hoisted_68 = {
  "class": "popup-product-thumb-box"
};
var _hoisted_69 = ["aria-controls"];
var _hoisted_70 = ["href"];
var _hoisted_71 = ["src"];
var _hoisted_72 = {
  "class": "popup-product-main-image-box"
};
var _hoisted_73 = ["id"];
var _hoisted_74 = {
  "class": "popup-product-single-image"
};
var _hoisted_75 = ["src"];
var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "prev"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-back"
})], -1 /* HOISTED */);
var _hoisted_77 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();
var _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "next"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-next"
})], -1 /* HOISTED */);
var _hoisted_79 = {
  "class": "col-lg-6"
};
var _hoisted_80 = {
  "class": "popup-right-content"
};
var _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><span>(112)</span></div>", 1);
var _hoisted_82 = {
  "class": "text"
};
var _hoisted_83 = {
  "class": "price"
};
var _hoisted_84 = {
  key: 0
};
var _hoisted_85 = {
  key: 0,
  style: {
    "color": "green"
  }
};
var _hoisted_86 = {
  key: 1,
  style: {
    "color": "red"
  }
};
var _hoisted_87 = {
  "class": "add-product"
};
var _hoisted_88 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Количество:", -1 /* HOISTED */);
var _hoisted_89 = {
  "class": "button-group"
};
var _hoisted_90 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\"><span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div>", 1);
var _hoisted_91 = ["onClick"];
var _hoisted_92 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"payment-method\"><a href=\"#0\"><img src=\"" + _public_assets_images_payment_method_method_1_png__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" alt=\"\"></a><a href=\"#0\"><img src=\"" + _public_assets_images_payment_method_method_2_png__WEBPACK_IMPORTED_MODULE_3__["default"] + "\" alt=\"\"></a> <a href=\"#0\"><img src=\"" + _public_assets_images_payment_method_method_3_png__WEBPACK_IMPORTED_MODULE_4__["default"] + "\" alt=\"\"></a><a href=\"#0\"><img src=\"" + _public_assets_images_payment_method_method_4_png__WEBPACK_IMPORTED_MODULE_5__["default"] + "\" alt=\"\"></a></div>", 1);
var _hoisted_93 = {
  "class": "products-three-single-content text-center"
};
var _hoisted_94 = {
  key: 0
};
var _hoisted_95 = {
  "class": "row"
};
var _hoisted_96 = {
  "class": "col-12 d-flex justify-content-center wow fadeInUp animated"
};
var _hoisted_97 = {
  "class": "pagination text-center"
};
var _hoisted_98 = {
  key: 0,
  "class": "next"
};
var _hoisted_99 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-left-arrows",
  "aria-hidden": "true"
}, null, -1 /* HOISTED */);
var _hoisted_100 = [_hoisted_99];
var _hoisted_101 = ["onClick"];
var _hoisted_102 = {
  key: 1
};
var _hoisted_103 = {
  key: 1,
  "class": "next"
};
var _hoisted_104 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-next-1",
  "aria-hidden": "true"
}, null, -1 /* HOISTED */);
var _hoisted_105 = [_hoisted_104];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Start Breadcrumb Style2"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("template", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "breadcrumb-area",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      backgroundImage: "url(".concat($data.Logo, ")")
    })
  }, _hoisted_3, 4 /* STYLE */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("End Breadcrumb Style2"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Start Product Categories One"), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("End Product Categories One"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Start product-grid"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.filterList.categories, function (category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      value: category.id,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
        return $data.categories = $event;
      }),
      type: "checkbox",
      id: category.id
    }, null, 8 /* PROPS */, _hoisted_17), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.categories]]), _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "for": category.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.title), 9 /* TEXT, PROPS */, _hoisted_19)]);
  }), 256 /* UNKEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "filterbtn",
    type: "submit",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.filterProductBtn && $options.filterProductBtn.apply($options, arguments);
    }, ["prevent"]))
  }, " Filter ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_27, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.filterList.tags, function (tag) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "#".concat(tag.id),
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.addTags(tag.id);
      }, ["prevent"])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tag.title), 9 /* TEXT, PROPS */, _hoisted_28)]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "wide",
    id: "sorting",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.selectedSort = $event;
    }),
    onChange: _cache[3] || (_cache[3] = function () {
      return $options.sortedList && $options.sortedList.apply($options, arguments);
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.sortArray, function (sort) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: sort.key,
      selected: sort.key === 'all' ? true : false
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(sort.name), 9 /* TEXT, PROPS */, _hoisted_37);
  }), 256 /* UNKEYED_FRAGMENT */))], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.selectedSort]])]), _hoisted_38]), _hoisted_39])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.products, function (product) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: product.image_url,
      "class": "first-img",
      alt: ""
    }, null, 8 /* PROPS */, _hoisted_49), _hoisted_50, _hoisted_51]), _hoisted_52, _hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.addToCart(product, true);
      }, ["prevent"]),
      href: "cart.html",
      "class": "addcart btn--primary style2"
    }, " Add To Cart ", 8 /* PROPS */, _hoisted_54), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [_hoisted_56, _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      "class": "popup_link",
      href: "#popup".concat(product.id),
      onClick: function onClick($event) {
        return $options.getProduct(product.id);
      }
    }, _hoisted_61, 8 /* PROPS */, _hoisted_58)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      id: "popup".concat(product.id),
      "class": "product-gird__quick-view-popup mfp-hide"
    }, [$data.popupProduct ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.popupProduct.product_images, function (productImage) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
        "class": "tab-nav popup-product-thumb",
        "aria-controls": "tabb".concat(productImage.id)
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        href: "#tabb".concat(productImage.id)
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: productImage.url,
        alt: ""
      }, null, 8 /* PROPS */, _hoisted_71)], 8 /* PROPS */, _hoisted_70)], 8 /* PROPS */, _hoisted_69);
    }), 256 /* UNKEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.popupProduct.product_images, function (productImage) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        id: "tabb".concat(productImage.id),
        "class": "tab-item popup-product-image"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: productImage.url,
        style: {
          "min-height": "350px",
          "height": "auto"
        }
      }, null, 8 /* PROPS */, _hoisted_75)])], 8 /* PROPS */, _hoisted_73);
    }), 256 /* UNKEYED_FRAGMENT */)), _hoisted_76, _hoisted_77, _hoisted_78])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.popupProduct.title), 1 /* TEXT */), _hoisted_81, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_82, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.popupProduct.description), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_83, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.popupProduct.price) + "$ ", 1 /* TEXT */), $data.popupProduct.old_price > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("del", _hoisted_84, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.popupProduct.old_price) + ".руб", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $data.popupProduct.is_published == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h6", _hoisted_85, " В наличии")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h6", _hoisted_86, " Нет в наличии"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_87, [_hoisted_88, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_89, [_hoisted_90, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.addToCart(product);
      }, ["prevent"]),
      "class": "btn--primary"
    }, " Добавить в корзину ", 8 /* PROPS */, _hoisted_91)])]), _hoisted_92])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, _hoisted_62), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_93, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.category.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'products.show',
        params: {
          id: product.id
        }
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.title), 1 /* TEXT */)];
      }),

      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [product.old_price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("del", _hoisted_94, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.old_price) + ".руб", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.price) + ".руб", 1 /* TEXT */)])])])]);
  }), 256 /* UNKEYED_FRAGMENT */))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_95, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_96, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_97, [$data.pagination.current_page !== 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_98, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.getProducts($data.pagination.current_page - 1);
    }, ["prevent"])),
    href: "#0"
  }, _hoisted_100)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.pagination.links, function (paginate) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", null, [Number(paginate.label) && $data.pagination.current_page - paginate.label < 2 && $data.pagination.current_page - paginate.label > -2 || Number(paginate.label) === 1 || Number(paginate.label) === $data.pagination.last_page ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 0,
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.getProducts(paginate.label);
      }, ["prevent"]),
      href: "#0",
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(paginate.active ? 'active' : '')
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(paginate.label), 11 /* TEXT, CLASS, PROPS */, _hoisted_101)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), Number(paginate.label) && $data.pagination.current_page - paginate.label === 2 && $data.pagination.current_page !== 3 || Number(paginate.label) && $data.pagination.current_page !== $data.pagination.last_page - 2 && $data.pagination.current_page - paginate.label === -2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", _hoisted_102, "...")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 256 /* UNKEYED_FRAGMENT */)), $data.pagination.current_page !== $data.pagination.last_page ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_103, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.getProducts($data.pagination.current_page + 1);
    }, ["prevent"])),
    href: "#0"
  }, _hoisted_105)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("End product-grid")])]);
}

/***/ }),

/***/ "./public/assets/images/payment_method/method_1.png":
/*!**********************************************************!*\
  !*** ./public/assets/images/payment_method/method_1.png ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/method_1.png?f591da84fc93bc18d5ca09a1c4600b85");

/***/ }),

/***/ "./public/assets/images/payment_method/method_2.png":
/*!**********************************************************!*\
  !*** ./public/assets/images/payment_method/method_2.png ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/method_2.png?489fcb215bd06047dec9d275798c7321");

/***/ }),

/***/ "./public/assets/images/payment_method/method_3.png":
/*!**********************************************************!*\
  !*** ./public/assets/images/payment_method/method_3.png ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/method_3.png?dbecbbe93e3b292bde993c06fe24487a");

/***/ }),

/***/ "./public/assets/images/payment_method/method_4.png":
/*!**********************************************************!*\
  !*** ./public/assets/images/payment_method/method_4.png ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/method_4.png?867c77cb9a56bf5ff8fd86f3908c0ea3");

/***/ }),

/***/ "./resources/js/views/product/Index.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/product/Products.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_06cfffba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=06cfffba */ "./resources/js/views/product/Index.vue?vue&type=template&id=06cfffba");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js */ "./resources/js/views/product/Index.vue?vue&type=script&lang=js");
/* harmony import */ var C_OpenServer_domains_market_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_market_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_06cfffba__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/product/Products.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/product/Index.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/views/product/Products.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Products.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Index.vue?vue&type=script&lang=js");


/***/ }),

/***/ "./resources/js/views/product/Index.vue?vue&type=template&id=06cfffba":
/*!****************************************************************************!*\
  !*** ./resources/js/views/product/Products.vue?vue&type=template&id=06cfffba ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_06cfffba__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_06cfffba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Products.vue?vue&type=template&id=06cfffba */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Index.vue?vue&type=template&id=06cfffba");


/***/ })

}]);
