<template>
    <div class="products">
        <div class="products__block">
            <ProductItem
                v-for="product in $store.getters.getSortedProducts"
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
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';
// import {productsList} from '../../models/DataModel';
    export default {
        name: 'ProductsList',
        components: {
            ProductItem,
            SelectItem,
            ModalItem,
        },
        props: {
        },
        methods: {
           ...mapActions({
                addProductToCart: 'addProductToCart',
                deleteOneProduct: 'deleteOneProduct',
                fetchProducts: 'fetchProducts',
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
                filters: state => state.filters,
            }),
            ...mapGetters({
                getSortedProducts: 'getSortedProducts',
            }),
        },
        mounted() {
            this.fetchProducts()
        },
    }
</script>

<style lang="scss">

    .products { 
        width: 100%;
        grid-area: products;

        &__block {
            display: flex;
            gap: 16px 24px;
            flex-wrap: wrap;
            justify-content: space-between;
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