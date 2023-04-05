<template>
    <div class="filters">
        <FilterItem
            v-for="filter in filters"
            :key="filter.val"
            :val="filter.val"
            :title="filter.title"
            @addFilter="addFilter"
        />
        </div>
</template>

<script>
import FilterItem from './FilterItem.vue';
import {filters} from '../../models/DataModel';

    export default {
        name: 'FiltersList',
        components: {
            FilterItem,
        },
        data() {
            return {
                selectedFilters:[]
            }
        },
        methods: {
            addFilter(filters) {
                if (filters.checked) {
                    this.selectedFilters.push(filters.filter[0])
                } else {
                    this.selectedFilters = this.selectedFilters.filter((item) => item !== filters.filter[0])
                }
                this.$emit('selectFilters', this.selectedFilters)
            }
        },
        computed: {
            filters() {
                return filters;
            }
        }
    }
</script>

<style>
    .filters {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
</style>