<template>
    <div class="wrapper">
        <div class="content">
            <div class="container">
                <TheHeader/>
            </div>
            <MainSlider/>
            <div class="container">
                <main class="main">
                    <FiltersList @selectFilters="selectFilters"/>
                    <ProductsHeader/>
                    <ProductsList :filters="productsFilters"/>
                </main>
            </div>
            <transition name="fade">
                <ModalItem
                    :is-open="$store.state.isCartOpen"
                    @close="closeCart" 
                    class="cart__modal"
                >
                    <template #body>
                        <CartBlock />
                    </template> 
                </ModalItem>
            </transition>
        </div>
        <div class="footer"/>
    </div>
    
 

</template>

<script>
import TheHeader from './components/Sections/Header/TheHeader.vue';
import MainSlider from './components/Slider/MainSlider.vue';
import FiltersList from './components/Filters/FiltersList.vue';
import ProductsList from './components/Products/ProductsList.vue';
import CartBlock from './components/Cart/CartBlock.vue';
import ModalItem from './components/Modal/ModalItem.vue';
import ProductsHeader from './components/Products/ProductsHeader.vue';


import { mapState, mapMutations } from 'vuex';

    export default {
        name: 'App',
        components: {
            TheHeader,
            MainSlider,
            FiltersList,
            ProductsList,
            CartBlock,
            ModalItem,
            ProductsHeader,
        },
        data() {
            return {
                productsFilters: [],
            }
        },
        computed: {
            ...mapState({
                isCartOpen: state => state.isCartOpen
            }),
           
        },
        methods: {
            selectFilters(filters) {
                this.productsFilters = [...filters]
                console.log(this.productsFilters.join('&&'))
            },
             ...mapMutations({
                closeCart: 'closeCart',
            }),
        },
    }
    
</script>

<style>
    .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>


