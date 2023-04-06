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
                    <ProductsList :filters="productsFilters"/>
                </main>
            </div>
            <ModalItem
                :is-open="$store.state.isCartOpen"
                @close="closeCart" 
                class="cart__modal"
            >
                <template #body>
                    <CartBlock />
                </template> 
            </ModalItem>
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


