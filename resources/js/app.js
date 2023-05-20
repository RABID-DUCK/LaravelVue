import './bootstrap';
import { createApp } from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'
import router from './router'
import VueTheMask from 'vue-the-mask'
import axios from 'axios'
import { debounce } from "lodash";

const app = createApp(App)
const store = createStore({
    state: {
        count: 0,
        cart: [],
        totalPrice: 0,
        cur_value: 'rub',
        isLogedIn: false,
        user: null,
        isLoadingUser: false,
        tokenRefreshed: true,
        favourites: [],
        countFav: 0
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
            localStorage.setItem('access_token', value)
        },
        SET_IS_LOGED_IN: (state, value) => {
            state.isLogedIn = value;
        },
        GET_INFO_USER: (state, value) => {
            state.user = value
            state.isLoadingUser = true
        },
        SET_TOKEN_REFRESHED: (state, value) => {
            state.tokenRefreshed = value
        },
        LOGOUT: (state) => {
            axios.post('/api/auth/logout', {}, {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('access_token')}`
                },
                responseType: 'json'
            })
                .then(res => {
                    localStorage.removeItem('access_token');
                    state.isLogedIn = false;
                    state.user = null;
                    router.push({name: 'Auth.Login'})
                })
        },
        ADD_TO_FAVOURITES: (state, product) => {
            let index = state.favourites.findIndex(productInFav => productInFav.id === product[0].id);
            if (index !== -1){
                return;
            } else{
                state.favourites.push(product[0])
            }
            localStorage.setItem('favour', JSON.stringify(state.favourites));
            state.countFav = state.favourites.length;
        },
        COUNT_FAV: (state) => {
            let fav = localStorage.getItem('favour') || '[]';
            state.favourites = JSON.parse(fav)
            state.countFav = state.favourites.reduce((qty, product) => qty + product.qty, 0);
        }
    },
    actions: {
        initializeCart: ({commit}) => {
            commit('CART_ITEMS');
            commit('TOTAL_PRICE');
        },
        initializeFav: ({commit}) => {
            commit('COUNT_FAV');
        },
        getUserInfo: debounce(({commit, state}) => {
                const token = localStorage.getItem('access_token');
                if (token) {
                    axios.post("/api/auth/me", null, {
                        headers: {
                            'authorization': `Bearer ${token}`,
                            'Accept': 'application/json'
                        },
                        responseType: 'json'
                    })
                        .then(res => {
                            commit('SET_IS_LOGED_IN', true);
                            commit('GET_INFO_USER', res.data);
                        })
                        .catch(err => {
                            if (err.response.data.message === 'Unauthenticated.') {
                                commit('SET_IS_LOGED_IN', false);
                                axios.post('/api/auth/refresh', null, {
                                    headers: {
                                        'authorization': `Bearer ${token}`,
                                        'Accept': 'application/json'
                                    },
                                    responseType: 'json'
                                })
                                    .then(res => {
                                        localStorage.setItem('access_token', res.data.access_token);
                                        axios.post("/api/auth/me", {}, {
                                            headers: {
                                                'authorization': `Bearer ${res.data.access_token}`,
                                                'Accept': 'application/json'
                                            },
                                            responseType: 'json'
                                        })
                                            .then(res => {
                                                commit('SET_IS_LOGED_IN', true); // сохраняем данные в state
                                                commit('GET_INFO_USER', res.data);
                                            })
                                            .catch(err => {
                                                commit('SET_IS_LOGED_IN', false);
                                            })
                                    })
                                    .catch(err => {
                                        commit('SET_IS_LOGED_IN', false);
                                    })
                            }
                        });
                } else {
                    commit('SET_IS_LOGED_IN', false);
                }


        }, 1000),
        initalizePrice: ({commit, getters}) => {
            const value = localStorage.getItem('cur_value') || 'rub';
            if(value !== getters.currencyValue){
                commit('ADD_CURRENCY_VALUE', value)
            }
        }
    },
    getters: {
        currencyValue(state){
            return state.cur_value;
        },
        statusUser(state){
            return state.isLogedIn;
        },
    }
})

app.use(router)
    .use(store)
    .use(VueTheMask)
app.mixin({
    created: function(){
        this.$store.dispatch('initializeCart')
        this.$store.dispatch('getUserInfo')
        this.$store.dispatch('initalizePrice')
        this.$store.dispatch('initializeFav')
    }
})
app.config.globalProperties.axios = axios
app.mount('#app')
