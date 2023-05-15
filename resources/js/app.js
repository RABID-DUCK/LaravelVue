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
        totalPrice: 0,
        cur_value: 'rub',
        isLogedIn: false,
        user: [],
        isLoadingUser: false
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
        },
        ADD_CURRENCY_VALUE: (state, value) => {
            state.cur_value = value;
            localStorage.setItem('cur_value', value);
        },
        ADD_AUTH: (state, value) => {
            state.isLogedIn = true;
            localStorage.setItem('access_token', JSON.stringify(value))
        },
        LOGOUT: (state) =>  {
            localStorage.removeItem('access_token');
            state.isLogedIn = false;
        },
        SET_IS_LOGED_IN: (state, value) => {
            state.isLogedIn = value;
        },
        GET_INFO_USER: (state, value) => {
            state.user = value
            state.isLoadingUser = true
        }
    },
    actions: {
        initializeCart: ({commit}) => {
           commit('CART_ITEMS');
           commit('TOTAL_PRICE');
        },
        getUserInfo: ({commit}) => {
            const token = localStorage.getItem('access_token');
            if (token) {
                axios.post("http://market/api/auth/me", {}, {
                    headers: {
                        'authorization': `Bearer ${token}`
                    }
                })
                    .then(res => {
                    commit('SET_IS_LOGED_IN', true); // сохраняем данные в state
                    commit('GET_INFO_USER', res.data);
                    }).catch(err => {
                    if (err.response.data.message === 'Unauthenticated.'){
                        axios.post('http://market/api/auth/refresh', {}, {
                                headers: {
                                    'authorization': `Bearer ${token}`
                                }
                            }).then(res => {
                                console.log(res);
                                localStorage.setItem('access_token', res.data.access_token)
                                axios.post("http://market/api/auth/me", {}, {
                                    headers: {
                                        'authorization': `Bearer ${token}`
                                    }
                                })
                                    .then(res => {
                                        commit('SET_IS_LOGED_IN', true); // сохраняем данные в state
                                        commit('GET_INFO_USER', res.data);
                                    })
                            })
                        }
                    commit('SET_IS_LOGED_IN', false); // если запрос прошел неудачно
                });
            } else {
                commit('SET_IS_LOGED_IN', false); // если токен отсутствует
            }
        }
    },
    getters: {
        currencyValue(state){
            return state.cur_value;
        },
        statusUser(state){
            return state.isLogedIn;
        }
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
