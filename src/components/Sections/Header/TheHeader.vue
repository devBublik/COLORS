<template>
    <header class="header">
        <div class="header__logo">
            <a href="#">
                <img class="header__svg" src="../../../assets/icons/logo.svg" alt="logo">
            </a>
        </div>
        <HeaderMenu/>
        <div class="header__contacts">
            <a href="tel:74952217769" class="header__phone">+7 (495) 221-77-69
                <span class="header__label">Заказать звонок</span>
            </a>
           
        </div>
        <HeaderActions/>
        <div
            class="header__cart"
            @click="openCart"
        >
            {{ cartTotalItems === 0 ? ' ' :  cartTotalItems}}
        </div>
    </header>
</template>

<script>
import HeaderMenu from './HeaderMenu.vue'
import HeaderActions from './HeaderActions.vue'
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
    name: 'TheHeader',
    components: {
        HeaderMenu,
        HeaderActions,
    },
    computed: {
        ...mapState({
            isCartOpen: state => state.isCartOpen,
        }),
        ...mapGetters({
            cartTotalItems: 'cartTotalItems'
        }),
    },
    methods: {
        ...mapMutations({
            openCart: 'openCart',
            closeCart: 'closeCart'
        }),
    }
}
</script>

<style lang="scss"> 
    .header {
        padding: 38px 0;
        display: grid;
        grid-template-columns: 280px 1.5fr  238px 112px 24px;
        gap: 24px;
        align-items: center;
        &__logo {
            margin-right: 172px;
        }
        &__contacts {
            text-align: left;
            transition: opacity .3s;

            &:hover {
                opacity: 0.7;
                cursor: pointer;
            }
        }
        &__label {
            display: block;
            opacity: 0.7;
            font-weight: 400;
        }
        &__phone {
            font-weight: 600;
            
        }

        &__cart {
            background-color: #7BB899;
            padding: 4px 8px;
            border-radius: 50%;
            font-weight: 500;
            font-size: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 24px;
            min-height: 24px;
            cursor: pointer;
            transition: filter .3s;

            &:hover {
                filter: brightness(0.8);
            }
        }
    }
</style>
