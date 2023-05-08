import './bootstrap';
import { createApp } from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'
import router from './router'
import axios from 'axios'

const app = createApp(App)
const store = createStore({
    state: {
        count: 0,
        cart: [],
        totalPrice: 0
    },
    mutations: {
        ADD_TO_CART: (state, product) => {
            let index = state.cart.findIndex(productInCart => productInCart.id === product[0].id);
            if (index !== -1) {
                state.cart[index].qty += parseInt(product[0].qty, 10);
            } else {
                state.cart.push(product[0]);
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
            state.totalPrice = state.cart.reduce((sum, product) => sum + product.price * product.qty, 0);
            state.count = state.cart.reduce((qty, product) => qty + product.qty, 0);
        },
        COUNT: (state, value) => {
            state.count = value
        },
        CART_ITEMS: (state) => {
            let cart = localStorage.getItem('cart') || '[]';
            state.cart = JSON.parse(cart)
            state.count = state.cart.reduce((qty, product) => qty + product.qty, 0);
        },
        REMOVE_PRODUCT: (state, id) => {
            let index = state.cart.findIndex(product => product.id === id);
            if(index !== -1){
                state.cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(state.cart));
            }else{
                console.warn(`Product with id ${id} not found in cart`);
            }
        },
        TOTAL_PRICE: (state) => {
            state.totalPrice = state.cart.reduce((sum, product) => sum + product.price * product.qty, 0);
        }

    },
    actions: {
        initializeCart: ({commit}) => {
           commit('CART_ITEMS');
           commit('TOTAL_PRICE');
        },

    }
})

app.use(router)
    .use(store)
app.mixin({
    created: function(){
        this.$store.dispatch('initializeCart')
    }
})
app.config.globalProperties.axios = axios
app.mount('#app')
