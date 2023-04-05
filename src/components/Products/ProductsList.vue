<template>
    <div class="products">
        <div class="products__head">
            <div class="products__count">{{ filtredProducts.length }} товаров</div>
            <button
                @click="openPopup"
                class="products__btn products__count"
            >
                {{ $store.state.selectedOption.title }}
            </button>
        </div>
        <div class="products__block">
            <ProductItem
                v-for="product in filtredProducts"
                :key="product.id"
                :product="product"
        />
        </div>
        <transition name="fade">
            <ModalItem
                :is-open="$store.state.isPopupOpen"
                @close="$store.state.closePopup" 
            >
                <template #body>
                    <SelectItem 
                        @selectOpt="selectOpt"
                        @close="$store.state.closePopup" 
                    />
                </template> 
            </ModalItem>
        </transition>
           
    </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
import SelectItem from '../Sort/SelectItem.vue';
import ModalItem from '../Modal/ModalItem.vue';
import { mapState, mapActions, mapMutations } from 'vuex'

    export default {
        name: 'ProductsList',
        components: {
            ProductItem,
                SelectItem,
                ModalItem,
        },
        props: {
            filters: {
                type: Array,
                default: () => []
            }
        },
        methods: {
           ...mapActions({
                addProductToCart: 'addProductToCart',
                deleteOneProduct: 'deleteOneProduct'
            }),
            ...mapMutations({
                pushProductToCart: 'pushProductToCart',
                incrementItemQuantity: 'incrementItemQuantity',
                decrementItemQuantity: 'decrementItemQuantity',
                openPopup: 'openPopup',
                closePopup: 'closePopup'
            }),
        },
        computed: {
            ...mapState({
                products: state => state.products,
                cart : state => state.cart,
                isPopupOpen: state => state.isPopupOpen,
                selectedOption: state => state.selectedOption,
            }),
            filtredProducts() {
                if (this.filters.length) {
                    let arr = [...this.products]
                    this.filters.map(function(filter){
                        if (filter === 'new') {
                            let today = Date.now() 
                            let monthAgo = today - (604800000*4)
                            let differ = today - monthAgo
                            arr = arr.filter((product) => (today - (new Date(product.data).getTime())) < differ)
                        } else {
                            arr = arr.filter((product) => product[filter] === true)
                        }
                             console.log(arr)
                            return arr
                    })
                   return arr
                } else {
                    return this.products
                }     
            },
        },
        watch: {
            selectedOption(newValue) {
                switch (newValue.val) {
                    case 'fromExpensive' :
                    this.filtredProducts.sort((a, b) => b.price - a.price)
                    break;

                    case 'fromCheap' :

                    this.filtredProducts.sort((a, b) => a.price - b.price)
                    break;

                    case 'fromPopular' :
                    this.filtredProducts.sort((a, b) => b.rating - a.rating)
                    break;

                    case 'fromNew' :

                    this.filtredProducts.sort((a, b) => (new Date(b.data)).getTime() - (new Date(a.data)).getTime())
                    break;

                    default :
                    this.filtredProducts.sort((a, b) => b.price - a.price)

                }
            }
            
        }
    }
</script>

<style lang="scss">

    .products { 
        width: 100%;

        &__btn {
            border: none;
            background: none;
            outline: none;
            cursor: pointer;
            position: relative;
            padding: 0 14px 0 0;

            &::after{
                content: '';
                position: absolute;
                right: 0;
                top: 0;
                background: url('../../assets/icons/arrow-down.svg');
                width: 10px;
                height: 10px;
            }
        }

        &__block {
            display: flex;
            gap: 16px 24px;
            flex-wrap: wrap;
        }

        &__head {
            display: flex;
            align-content: center;
            justify-content: space-between;
            width: 100%;
        }

        &__count {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            font-weight: 500;
            text-align: left;
            margin-bottom: 44px;
        }
    }

    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 0.3s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
    opacity: 0;
    }

</style>