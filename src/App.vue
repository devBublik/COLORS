<script setup>
import TheHeader from './components/Sections/Header/TheHeader.vue';
import MainSlider from './components/Slider/MainSlider.vue';
import FiltersList from './components/Filters/FiltersList.vue';
import FilterItem from './components/Filters/FilterItem.vue';
import SelectItem from './components/Sort/SelectItem.vue';
import ProductsList from './components/Products/ProductsList.vue';

</script>

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
        </div>

        <div class="footer"/>
    </div>
    
 

</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                productsFilters: []
            }
        },
        methods: {
            selectFilters(filters) {
                this.productsFilters = [...filters]
                console.log(this.productsFilters.join('&&'))
            }
        }
    }
    
</script>


