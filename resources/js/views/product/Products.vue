<template>
<div>
  <main class="overflow-hidden ">
    <!--Start Breadcrumb Style2-->
    <div class="breadcrumb-area" style="background-image: url(src/assets/images/logo/logo.png);">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb-content pb-60 text-center wow fadeInUp animated">
              <h2>Shop Grid</h2>
              <div class="breadcrumb-menu">
                <ul>
                  <li><a href="index.html"><i class="flaticon-home pe-2"></i>Home</a></li>
                  <li> <i class="flaticon-next"></i> </li>
                  <li class="active">Shop Grid</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End Breadcrumb Style2-->
    <!--Start Product Categories One-->
    <section class="product-categories-one pb-60">
      <div class="container">
        <div class="row wow fadeInUp animated">
          <div class="col-xl-12">
            <div class="product-categories-one__inner">
              <ul>
                <li> <a href="#0" class="img-box">
                  <div class="inner"> <img src="src/assets/images/logo/logo.png"
                                           alt="" /> </div>
                </a>
                  <div class="title"> <a href="#0">
                    <h6>Accessories</h6>
                  </a> </div>
                </li>
                <li> <a href="#0" class="img-box">
                  <div class="inner"> <img src="src/assets/images/logo/logo.png"
                                           alt="" /> </div>
                </a>
                  <div class="title"> <a href="#0">
                    <h6>Furnitures</h6>
                  </a> </div>
                </li>
                <li> <a href="#0" class="img-box">
                  <div class="inner"> <img src="src/assets/images/logo/logo.png"
                                           alt="" /> </div>
                </a>
                  <div class="title"> <a href="#0">
                    <h6>Jewellery</h6>
                  </a> </div>
                </li>
                <li> <a href="#0" class="img-box">
                  <div class="inner"> <img src="src/assets/images/logo/logo.png"
                                           alt="" /> </div>
                </a>
                  <div class="title"> <a href="#0">
                    <h6>Shoes</h6>
                  </a> </div>
                </li>
                <li> <a href="#0" class="img-box">
                  <div class="inner"> <img src="src/assets/images/logo/logo.png"
                                           alt="" /> </div>
                </a>
                  <div class="title"> <a href="#0">
                    <h6>Electronics</h6>
                  </a> </div>
                </li>
                <li> <a href="#0" class="img-box">
                  <div class="inner"> <img src="src/assets/images/logo/logo.png"
                                           alt="" /> </div>
                </a>
                  <div class="title"> <a href="#0">
                    <h6>Fashion</h6>
                  </a> </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Product Categories One-->
    <!--Start product-grid-->
    <div class="product-grid pt-60 pb-120">
      <div class="container">
        <div class="row gx-4">
          <div class="col-xl-3 col-lg-4">
            <div class="shop-grid-sidebar"> <button class="remove-sidebar d-lg-none d-block"> <i
                class="flaticon-cross"> </i> </button>
              <div class="sidebar-holder">
                <form action="#0" class="footer-default__subscrib-form m-0 p-0 wow fadeInUp animated">
                  <div class="footer-input-box p-0 "> <input type="email" placeholder="Email address"
                                                             name="email"> <button type="submit" class="subscribe_btn"> <i
                      class="flaticon-magnifying-glass"></i> </button> </div>
                </form>
                <div class="single-sidebar-box mt-30 wow fadeInUp animated ">
                  <h4>Выберите категории</h4>
                  <div class="checkbox-item">
                    <form>
                      <div v-for="category in filterList.categories" class="form-group"> <input :value="category.id" v-model="categories" type="checkbox" :id="category.id"> <label
                          :for="category.id">{{ category.title }}</label> </div>
                    </form>
                  </div>
                </div>

                <div class="single-sidebar-box mt-30 wow fadeInUp animated">
                  <h4>Фильтр по цене</h4>
                  <div class="slider-box">
                    <div id="price-range" class="slider"></div>
                    <div class="output-price"> <label for="priceRange">Цена:</label> <input
                        type="text" id="priceRange" readonly> </div>
                    <button  class="filterbtn" type="submit"
                    @click.prevent="filterProductBtn"> Filter </button>
                  </div>
                </div>
                <div class="single-sidebar-box mt-30 wow fadeInUp animated pb-0 border-bottom-0 ">
                  <h4>Теги </h4>
                  <ul class="popular-tag">
                    <li v-for="tag in filterList.tags"><a :href="`#${tag.id}`" @click.prevent="addTags(tag.id)">{{tag.title}}</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-9 col-lg-8">
            <div class="row">
              <div class="col-xl-12">
                <div
                    class="shop-grid-page-top-info p-0 justify-content-md-between justify-content-center">
                  <div class="left-box wow fadeInUp animated">
                    <p>Showing 1–12 of 50 Results </p>
                  </div>
                  <div
                      class="right-box justify-content-md-between justify-content-center wow fadeInUp animated">
                    <div class="short-by">
                      <div class="select-box sort-select">
                        <select class="wide" id="sorting" v-model="selectedSort" @change="sortedList">
                          <option v-for="sort in sortArray" :value="sort.key" :selected="sort.key === 'all' ? true : false">{{sort.name}} </option>
                        </select>
                      </div>
                      <div> </div>

                    </div>

                    <div class="product-view-style d-flex justify-content-md-between justify-content-center">
                      <ul class="nav nav-pills" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="pills-grid-tab"
                                  data-bs-toggle="pill" data-bs-target="#pills-grid" type="button"
                                  role="tab"  aria-selected="true">
                            <i class="flaticon-grid"></i>
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link"  id="pills-list-tab" data-bs-toggle="pill"
                                  data-bs-target="#pills-list" type="button" role="tab"
                                  aria-selected="false">
                            <i class="flaticon-list"></i>
                          </button>
                        </li>
                      </ul>
                      <button class="slidebarfilter d-lg-none d-flex"><i  class="flaticon-edit"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="tab-content" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="pills-grid" role="tabpanel"
                       aria-labelledby="pills-grid-tab">
                    <div class="row" v-if="products">
                      <div class="col-xl-4 col-lg-6 col-6 " v-for="product in products">
                        <div class="products-three-single w-100  mt-30">
                          <div class="products-three-single-img">
                              <a
                              href="shop-details-3.html" class="d-block">
                                  <img :src="product.image_url" class="first-img" alt="" />
                                  <img src="assets/images/logo/logo.png" alt="" class="hover-img" />
                          </a>
                            <div class="products-grid-one__badge-box"> <span
                                class="bg_base badge new ">New</span>
                            </div> <a @click.prevent="addToCart(product, true)" href="cart.html" class="addcart btn--primary style2">
                              Add To Cart </a>
                            <div class="products-grid__usefull-links">
                              <ul>
                                <li><a href="wishlist.html"> <i class="flaticon-heart">
                                </i> <span>
                                                                            wishlist</span> </a> </li>
                                <li><a href="compare.html"> <i
                                    class="flaticon-left-and-right-arrows"></i>
                                  <span>
                                                                            compare</span> </a> </li>
                                <li><a class="popup_link" :href="`#popup${product.id}`" @click="getProduct(product.id)"> <i
                                    class="flaticon-visibility"></i>
                                  <span> quick view</span>
                                </a> </li>
                              </ul>
                            </div>
                          </div>
                            <div :id="`popup${product.id}`" class="product-gird__quick-view-popup mfp-hide">
                              <div v-if="popupProduct" class="container">
                                <div class="row justify-content-between">
                                  <div class="col-lg-6">
                                    <div class="quick-view__left-content">
                                      <div class="tabs">
                                        <div class="popup-product-thumb-box">
                                            <ul>
                                                <li v-for="productImage in popupProduct.product_images"
                                                    class="tab-nav popup-product-thumb" :aria-controls="`tabb${productImage.id}`">
                                                    <a :href="`#tabb${productImage.id}`">
                                                        <img :src="productImage.url"
                                                             alt="" /> </a>
                                                </li>
                                            </ul>
                                        </div>
                                          <div class="popup-product-main-image-box">
                                              <div v-for="productImage in popupProduct.product_images" :id="`tabb${productImage.id}`" class="tab-item popup-product-image">
                                                  <div class="popup-product-single-image">
                                                      <img :src="productImage.url" style="min-height: 350px; height: auto">
                                                  </div>
                                              </div>
                                              <button class="prev"> <i
                                                  class="flaticon-back"></i>
                                              </button> <button class="next"> <i
                                              class="flaticon-next"></i>
                                          </button>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                                    <div class="popup-right-content">
                                      <h3>{{popupProduct.title}}</h3>
                                      <i>{{popupProduct.category.title}}</i>
                                      <div class="ratting"> <i
                                          class="flaticon-star"></i> <i
                                          class="flaticon-star"></i> <i
                                          class="flaticon-star"></i>
                                        <i class="flaticon-star"></i> <i
                                            class="flaticon-star"></i>
                                        <span>(112)</span> </div>
                                      <p class="text"> {{popupProduct.description}}
                                      </p>
                                      <div class="price">
                                        <h2> {{ popupProduct.price }}.руб
                                          <del v-if="popupProduct.old_price > 0"> {{popupProduct.old_price}}.руб</del>
                                        </h2>
                                        <h6 v-if="popupProduct.is_published == 1" style="color: green;"> В наличии</h6>
                                        <h6 v-else style="color: red;"> Нет в наличии</h6>
                                      </div>
                                      <div class="add-product">
                                        <h6>Количество:</h6>
                                        <div class="button-group">
                                          <div class="qtySelector text-center">
                                                <span class="decreaseQty"><i
                                                    class="flaticon-minus"></i>
                                                </span> <input type="number"
                                                               class="qtyValue" value="1" />
                                            <span class="increaseQty"> <i
                                                class="flaticon-plus"></i>
                                                                                    </span> </div>
                                          <button @click.prevent="addToCart(product)" class="btn--primary "> Добавить в корзину </button>
                                        </div>
                                      </div>
                                      <div class="payment-method"> <a href="#0"> <img
                                          src="src/assets/images/payment_method/method_1.png"
                                          alt=""> </a>
                                        <a href="#0"> <img
                                            src="src/assets/images/payment_method/method_2.png"
                                            alt=""> </a> <a href="#0"> <img
                                            src="src/assets/images/payment_method/method_3.png"
                                            alt=""> </a>
                                        <a href="#0"> <img
                                            src="src/assets/images/payment_method/method_4.png"
                                            alt=""> </a> </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          <div class="products-three-single-content text-center">
                            <span v-if="product.category">{{ product.category.title }}</span>
                            <h5><router-link :to="{name: 'products.show', params: {id: product.id}}"> {{ product.title }}</router-link>
                            </h5>
                            <p><del v-if="product.old_price">{{product.old_price}}.руб</del>
                              {{ product.price }}.руб</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 d-flex justify-content-center wow fadeInUp animated">
                <ul class="pagination text-center" >
                  <li class="next" v-if="pagination.current_page !== 1">
                    <a @click.prevent="getProducts(pagination.current_page - 1)" href="#0"><i class="flaticon-left-arrows" aria-hidden="true"></i>
                    </a></li>
                  <li v-for="paginate in pagination.links">
                    <template v-if="Number(paginate.label) && (pagination.current_page - paginate.label < 2 && pagination.current_page - paginate.label > -2)
                    || Number(paginate.label) === 1 || Number(paginate.label) === pagination.last_page
">
                    <a @click.prevent="getProducts(paginate.label)" href="#0" :class="paginate.active ? 'active' : ''">{{paginate.label}}</a>
                    </template>
                    <template v-if="Number(paginate.label) && pagination.current_page - paginate.label === 2 && pagination.current_page !== 3
                              || Number(paginate.label) && pagination.current_page !== pagination.last_page -2 && (pagination.current_page - paginate.label === -2)
">
                      <a>...</a>
                    </template>
                  </li>
                  <li class="next"  v-if="pagination.current_page !== pagination.last_page" >
                    <a @click.prevent="getProducts(pagination.current_page + 1)" href="#0"><i class="flaticon-next-1" aria-hidden="true"></i> </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End product-grid-->
  </main>
</div>
</template>

<script>

export default {

  name: "Index",
  mounted() {
    $(document).trigger('changed')
    this.getProducts()
    this.getFilterList()
  },
  data(){
    return {
      products: [],
      popupProduct: null,
      filterList: [],
      categories: [],
      prices: [],
      tags: [],
      sortArray: [
        {key: 'all','name' : 'Все'},
        {key: 'priceCreasing','name' : 'Цена по возростанию'},
        {key: 'priceDecreasing','name' : 'Цена по убыванию'},
        {key: 'dateNew','name' : 'Дата к новым'}
      ],
      selectedSort: "all",
      pagination: [],
      totalPrice: 0
    }
  },
  methods: {
    addToCart(product, isSingle){
      let qty = isSingle ? 1 : $('.qtyValue').val();
      let cart = localStorage.getItem('cart');
      $('.qtyValue').val(1);

      let newProduct = [
        {
          "id": product.id,
          "image_url": product.image_url,
          "title": product.title,
          "price": product.price,
          "qty": qty
        }
      ];

      if (!cart){
        localStorage.setItem('cart', JSON.stringify(newProduct))
      }
      else{
          cart = JSON.parse(cart);
          cart.forEach(productInCart => {
            if (productInCart.id === product.id){
              productInCart.qty = Number(productInCart.qty) + Number(qty);
              newProduct = null;
            }
          })
          Array.prototype.push.apply(cart, newProduct);
          localStorage.setItem('cart', JSON.stringify(cart));
      }
      this.calculateCartPrice()
    },
    addTags(id){
      if (!this.tags.includes(id)){
        this.tags.push(id)
      }else{
        this.tags = this.tags.filter(elem => {
          return elem !== id
        })
      }
    },
    filterProductBtn(){
      let prices = $('#priceRange').val();
      this.prices = prices.replace(/[\s+]|[₽]/g, '').split('-');
      this.getProducts()
    },
    sortedList(){
      switch (this.selectedSort){
        case 'all':
            this.products.sort((a,b) => a.id - b.id)
          return;
        case 'priceCreasing':
          this.products.sort((a,b) => a.price - b.price);
              break;
        case 'priceDecreasing':
            this.products.sort((a,b) => b.price - a.price)
          break;
        case 'dateNew':
          this.products.sort((a,b) => new Date(b.date_added) - new Date(a.date_added))
          break;
      }

    },
    getProducts(page = 1){
      this.axios.post('http://market/api/products', {
        'filterList': this.filterList,
        'categories': this.categories,
        'prices': this.prices,
        'tags': this.tags,
        'page': page
      })
          .then(res => {
              console.log(res);
              this.products = res.data.data;
            this.pagination = res.data.meta;
          })
          .finally(v => {
        $(document).trigger('changed')
      })
    },
    getProduct(id){
      this.axios.get(`http://market/api/products/${id}`)
          .then(res => {
              console.log(res);
              this.popupProduct = res.data.data;
          })
          .finally(v => {
            $(document).trigger('changed')
          })
    },
    getFilterList(){
      this.axios.get('http://market/api/products/filters')
          .then(res => {
            this.filterList = res.data;
            //  Price Filter
             if ($("#price-range").length) {
               $("#price-range").slider({
                 range: true,
                 min: this.filterList.price.min,
                 max: this.filterList.price.max,
                 values: [this.filterList.price.min, this.filterList.price.max],
                 slide: function (event, ui) {
                   $("#priceRange").val("₽" + ui.values[0] + " - ₽" + ui.values[1]);
                 }
               });
               $("#priceRange").val("₽" + $("#price-range").slider("values", 0) + " - ₽" + $("#price-range").slider("values", 1));
             }
          })
          .finally(v => {
            $(document).trigger('changed');
          })
    },
    calculateCartPrice(){
        this.totalPrice = this.products.reduce((sum, product) => sum + product.price * product.qty, 0)
    }
  },
}
</script>

<style scoped>

</style>
