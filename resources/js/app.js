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
        cart: []
    },
    mutations: {
        ADD_TO_CART: (state, product) => {
         state.cart = state.cart.concat(product)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        COUNT: (state, value) => {
            state.count = value
        },
        CART_ITEMS: (state) => {
            let cart = localStorage.getItem('cart') || '[]';
            state.cart = JSON.parse(cart)
        }
    }
})

app.use(router)
    .use(store)
app.config.globalProperties.axios = axios
app.mount('#app')
