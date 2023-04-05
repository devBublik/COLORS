import { createStore } from "vuex";
import {products} from '../models/DataModel';

export default createStore({
    state: () => ({
        products: products,
        cart: [],
        isPopupOpen: false, 
        selectedOption: {
            val: 'fromExpensive',
            title: 'Сначала дорогие'
        }
    }),

    getters: {

    },
    mutations: {
        pushProductToCart (state, { id }) {
            state.cart.push({
                id,
                quantity: 1
            })
        },
        incrementItemQuantity (state, { id }) {
            const cartItem = state.cart.find(item => item.id === id)
                cartItem.quantity++
        },
        decrementItemQuantity (state, { id }) {
            const cartItem = state.cart.find(item => item.id === id)
                cartItem.quantity--
        },
        openPopup(state) {
            state.isPopupOpen = true;
        },
        closePopup(state) {
            state.isPopupOpen = false;
        },
        

    },

    actions: {
        addProductToCart ({ state, commit }, product) {
            console.log(product)
            if (product.inStock > 0) {
                const cartItem = state.cart.find(item => item.id === product.id)
            if (!cartItem) {
                commit('pushProductToCart', { id: product.id })
            } else {
                commit('incrementItemQuantity', cartItem)
            }   
        }},
        deleteOneProduct({ state, commit }, product) {
            if (product.inStock > 0) {
                const cartItem = state.cart.find(item => item.id === product.id)
                if (cartItem) {
                    commit('decrementItemQuantity', { id: product.id })
                }
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