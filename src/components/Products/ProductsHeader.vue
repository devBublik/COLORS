<template>
    <div class="products-head">
        <div class="products-head__count">{{ $store.getters.getSortedProducts.length }} товаров</div>
        <button
            @click="openPopup"
            class="products-head__btn"
        >
            {{ $store.state.selectedOption.title }}
        </button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
    name: 'ProductsHeader',
    computed: {
        ...mapState({
            selectedOption: state => state.selectedOption,
        }),
        ...mapGetters({
            getSortedProducts: 'getSortedProducts',
        })
    },
    methods: {
        ...mapMutations({
            openPopup: 'openPopup',
            closePopup: 'closePopup'
        }),
    }
}
</script>

<style lang="scss">
    .products-head {
        grid-area: head;
        display: flex;
        justify-content: space-between;

        @media (max-width: 1080px) {
            justify-content: flex-end;
        }
            

        &__head {
            display: flex;
            align-content: center;
            justify-content: space-between;
            width: 100%;
            
        }

        &__count {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            font-weight: 500;
            text-align: left;
            margin-bottom: 44px;

            @media (max-width: 1080px) {
                display: none;
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
            margin-bottom: 44px;

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
    }
    
</style>