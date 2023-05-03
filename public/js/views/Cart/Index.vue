<template>
<div>
  <main class="overflow-hidden ">
    <!--Start Breadcrumb Style2-->
    <section class="breadcrumb-area" style="background-image: url(src/assets/images/inner-pages/breadcum-bg.png);">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb-content text-center wow fadeInUp animated">
              <h2>Cart</h2>
              <div class="breadcrumb-menu">
                <ul>
                  <li><a href="index.html"><i class="flaticon-home pe-2"></i>Home</a></li>
                  <li> <i class="flaticon-next"></i> </li>
                  <li class="active">Cart</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Breadcrumb Style2-->
    <!--Start cart area-->
    <section class="cart-area pt-120 pb-120">
      <div class="container">
        <div class="row wow fadeInUp animated">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div class="cart-table-box">
              <div class="table-outer">
                <table class="cart-table">
                  <thead class="cart-header">
                  <tr>
                    <th class="">Название продукта</th>
                    <th class="price">Цена</th>
                    <th>Количество</th>
                    <th>Сумма</th>
                    <th class="hide-me"></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="product in products">
                    <td>
                      <div class="thumb-box"> <router-link :to="{name: 'products.show', params: {id: product.id}}" class="thumb">
                        <img :src="product.image_url" :alt="product.title">
                      </router-link> <router-link :to="{name: 'products.show', params: {id :product.id }}" class="title">
                        <h5> {{product.title}} </h5>
                      </router-link> </div>
                    </td>
                    <td>{{product.price}}.руб</td>
                    <td class="qty">
                      <div class="qtySelector text-center">
                        <span @click.prevent="minusQty(product)" class="decreaseQty"><i class="flaticon-minus"></i> </span>
                        <input type="number" class="qtyValue" :value="product.qty" />
                        <span @click.prevent="plusQty(product)" class="increaseQty"> <i class="flaticon-plus"></i> </span> </div>
                    </td>
                    <td class="sub-total">{{product.price * product.qty}}.руб</td>
                    <td>
                      <div @click.prevent="removeProduct(product.id)" class="remove"> <i class="flaticon-cross"></i> </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="cart-button-box">
              <div class="apply-coupon wow fadeInUp animated">
                <div class="apply-coupon-input-box mt-30 "> <input type="text" name="coupon-code"
                                                                   value="" placeholder="Промокод"> </div>
                <div class="apply-coupon-button mt-30"> <button class="btn--primary style2"
                                                                type="submit">Применить</button> </div>
              </div>
              <div class="cart-button-box-right wow fadeInUp animated"> <button class="btn--primary mt-30"
                                                                                type="submit">Продолжить покупку</button>  </div>
            </div>
          </div>
        </div>
        <div class="row pt-120">
          <div class="col-xl-6 col-lg-7 wow fadeInUp animated">
            <div class="cart-total-box">
              <div class="inner-title">
                <h3>Итог корзины</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt--30">
          <div class="col-xl-6 col-lg-5 wow fadeInUp animated">
            <div class="cart-check-out mt-30">
              <h3>Чек</h3>
              <ul class="cart-check-out-list">
                <li>
                  <div class="left">
                    <p>Промежуточный итог</p>
                  </div>
                  <div class="right">
                    <p>{{totalPrice}}.руб</p>
                  </div>
                </li>
                <li>
                  <div class="left">
                    <p>Скидка</p>
                  </div>
                  <div class="right">
                    <p><span>Размер:</span> 0.руб</p>
                  </div>
                </li>
                <li>
                  <div class="left">
                    <p>Итоговая цена:</p>
                  </div>
                  <div class="right">
                    <p>{{ totalPrice }}.руб</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End cart area-->
  </main>
</div>
</template>

<script>
export default {
  name: "Show",
  mounted() {
    $(document).trigger('changed')
    this.getCartProducts()
    this.calculateTotal()

  },
  data (){
    return {
      products: [],
      totalPrice: 0
    }
  },
  methods: {
    getCartProducts(){
        this.products = JSON.parse(localStorage.getItem('cart'));
      this.calculateTotal()
    },
    minusQty(product){
      if (product.qty == 0){
        return
      }
      product.qty--;
      this.updateCart()
      this.calculateTotal()
    },
    plusQty(product){
      product.qty++;
      this.updateCart()
      this.calculateTotal()
    },
    removeProduct(id){
        this.products = this.products.filter(product => {
          return product.id !== id
        })
      this.updateCart()
      this.calculateTotal()
    },
    updateCart(){
      localStorage.setItem('cart', JSON.stringify(this.products))
    },
    calculateTotal(){
        this.totalPrice = this.products.reduce((sum, product) => sum + product.price * product.qty, 0)
    }
  }

}
</script>

<style scoped>

</style>