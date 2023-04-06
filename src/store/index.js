import { createStore } from "vuex";
import {products} from '../models/DataModel';

export default createStore({
    state: () => ({
        products: products,
        cart: [],
        isPopupOpen: false, 
        isCartOpen: false,
        selectedOption: {
            val: 'fromExpensive',
            title: 'Сначала дорогие'
        }
    }),

    getters: {
        cartTotalPrice: (state) => {
            let total = [...state.cart].filter((item) => !item.repeat)
            return total.reduce((total, product) => {
                return total + product.price * product.count
            }, 0)
        },
        cartTotalItems: (state) => {
            let total = [...state.cart].filter((item) => !item.repeat)
            return total.reduce((total, product) => {
                return total + product.count
            }, 0)
        }
    },
    mutations: {
        pushProductToCart (state, { product }) {
            state.cart.push({
                ...product,
                count: 1
            })
        },
        incrementItemQuantity (state, { id }) {
            const cartItem = state.cart.find(item => item.id === id)
                cartItem.count++
        },
        decrementItemQuantity (state, { id }) {
            const cartItem = state.cart.find(item => item.id === id)
                cartItem.count--
        },
        openPopup(state) {
            state.isPopupOpen = true;
        },
        closePopup(state) {
            state.isPopupOpen = false;
        },
        openCart(state) {
            state.isCartOpen = true;
        },
        closeCart(state) {
            state.isCartOpen = false;
        },
        clearCart(state) {
            state.cart = []
        }

    },

    actions: {
        addProductToCart ({ state, commit }, product) {
            console.log(product)
            const cartItem = state.cart.find(item => item.id === product.id)
            if (!cartItem) {
                commit('pushProductToCart', { product})
            } else {
                commit('incrementItemQuantity', cartItem)
        }},
        deleteOneProduct({ state, commit }, product) {
            const cartItem = state.cart.find(item => item.id === product.id)
            if (cartItem) {
                commit('decrementItemQuantity', { id: product.id })
            }
        },
        movetoRepeat({state}, product) {
            const cartItem = state.cart.find(item => item.id === product.id)
            if (cartItem) {
                cartItem.repeat = true
            }
        },
        moveFromRepeat({state}, product) {
            const cartItem = state.cart.find(item => item.id === product.id)
            if (cartItem) {
                cartItem.repeat = false
            }
        },
        selectOption({ state, commit }, val) {
            // const value = {
            //     val:  event.target.value,
            //     title: event.target.name
            // }
            // // this.$emit('selectOption', value)
            state.selectedOption = val
            commit('closePopup')
        },
    },

    modules: {

    }
})