import { createStore } from "vuex";
import {productsList} from '../models/DataModel';

export default createStore({
    state: () => ({
        products: [],
        cart: [],
        isPopupOpen: false, 
        isCartOpen: false,
        selectedOption: {
            val: 'fromExpensive',
            title: 'Сначала дорогие'
        },
        selectedFilters: []
    }),

    getters: {
        getSortedProducts(state, getters) {
            let arr = getters.getfiltredProducts
            switch (state.selectedOption.val) {
                case 'fromExpensive' :
                    return arr.sort((a, b) => b.price - a.price)

                case 'fromCheap' :
                    return arr.sort((a, b) => a.price - b.price)

                case 'fromPopular' :
                    return arr.sort((a, b) => b.rating - a.rating)

                case 'fromNew' :
                    return arr.sort((a, b) => (new Date(b.data)).getTime() - (new Date(a.data)).getTime())

                default:
                    arr.sort((a, b) => b.price - a.price)

            }
        },
        getfiltredProducts(state, getters) {
            let arr = [...state.products]
            if (state.selectedFilters.length) {
                state.selectedFilters.map(function(filter){
                    if (filter === 'new') {
                        let today = Date.now() 
                        let monthAgo = today - (604800000*4)
                        let differ = today - monthAgo
                        arr = arr.filter((product) => (today - (new Date(product.data).getTime())) < differ)
                    } else if (filter === 'inStock') {
                        arr = arr.filter((product) => product[filter] > 0)
                    } else {
                        arr = arr.filter((product) => product[filter] === true)
                    }
                        return arr
                })
                return arr
            } else {
                return arr
            }     
        },
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
        setProducts(state, products) {
            state.products = products
        },
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
        },
        addFilters(state, filterArr) {
            state.selectedFilters.push(filterArr.filter)
        },
        deleteFilter(state, filterArr) {
            state.selectedFilters = state.selectedFilters.filter((item) => item !== filterArr.filter)
        }

    },

    actions: {
        fetchProducts({state, commit}) {
            try {
                fetch("https://jsonplaceholder.typicode.com/posts")
                    .then(response => {
                        if (response.ok) {
                            commit('setProducts', productsList)
                        } 
                    })
            }   catch(e) {
                console.log('error')
            }
        },
        addProductToCart ({ state, commit }, product) {
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
            state.selectedOption = val
            commit('closePopup')
        },
        setFilters({state, commit}, filter) {
            if (filter.checked) {
                commit('setFilters')
            } else {
                state.selectedFilters = state.selectedFilters.filter((item) => item !== filter.filter[0])
            }
        }
    },

    modules: {

    }
})