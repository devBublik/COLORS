<template>
    <div class="filters">
        <button
            class="filters__btn"
            v-show="widthScreen < 1080"
            @click="isMobile = !isMobile"
        >   
            Фильтры
        </button>
        <div class="filters__wrapper" v-show="isFiltersShow">
            <FilterItem
            v-for="filter in filters"
            :key="filter.val"
            :val="filter.val"
            :title="filter.title"
        />
        </div>
        <transition name="fade">
            <ModalItem
                :is-open="isMobile"
                @close="isMobile = !isMobile" 
                class="filters__modal"
            >
                <template #body>
                    <FilterItem
                        v-for="filter in filters"
                        :key="filter.val"
                        :val="filter.val"
                        :title="filter.title"
                        @close="isMobile = !isMobile"         
                />
                </template> 
            </ModalItem>
        </transition>
        </div>
</template>

<script>
import FilterItem from './FilterItem.vue';
import {filters} from '../../models/DataModel';
import ModalItem from '../Modal/ModalItem.vue';

    export default {
        name: 'FiltersList',
        components: {
            FilterItem,
            ModalItem
        },
        data() {
            return {
                widthScreen: 0,
                isFiltersShow: true,
                isMobile: false,
            }
        },
        computed: {
            filters() {
                return filters;
            }
        },  
        created() {
            window.addEventListener('resize', this.updateWidth);
            this.updateWidth();
        },
        destroyed() {
            window.removeEventListener('resize', this.updateWidth);
        },
        methods: {
            updateWidth() {
                this.widthScreen = window.innerWidth;
                if (this.widthScreen < 1080) {
                    this.isFiltersShow = false
                }
            },
        }
    }
</script>

<style lang="scss">
    .filters {
        display: flex;
        flex-direction: column;
        gap: 16px;
        grid-area: filters;
        margin-right: 138px;

        @media (max-width: 1080px) {
            margin-right: 0;
            text-align: left;
        }

        &__wrapper {
            display: flex;
            flex-direction: column;
            gap: 16px;
            grid-area: filters;
        }

        .modal__content {
            width: 50%;
            height: 30vh;
            justify-content: center;
            display: inline-flex;
            align-items: center;
            flex-direction: column;
            gap: 16px;
            border-radius: 24px;

            @media (max-width: 540px) {
                width: 100%;
                border-radius: 24px 24px 0px 0px;
                align-items: flex-start;
                padding: 12px 24px;
            }
        }

        &__btn {
            border: none;
            background: none;
            outline: none;
            cursor: pointer;
            position: relative;
            padding: 0 14px 0 0;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            font-weight: 500;
            text-align: left;
            transition: color .3s;

            &:hover {
                color: #7BB899;
            }

            &::after {
                content: "";
                position: absolute;
                left: 66px;
                top: 0;
                background: url(/src/assets/icons/arrow-down.svg);
                width: 10px;
                height: 10px;
            }
        }
    }
</style>