<template>
    <div class="cart">
        <div
            v-show="$store.state.cart.length"
            class="cart__content"
        >
            <header class="cart__head">
                <h3 class="cart__title">Корзина</h3>
                <button class="cart__close"
                    @click="closeCart"
                />
            </header>
            <div
                class="cart__full"
                
            >
                
                <div class="cart__action">
                    <div class="cart__products">
                        {{ cartTotalItems }} 
                        {{ cartTotalItems === 1 ? 'товар' :  cartTotalItems < 5 && cartTotalItems !== 0 ? 'товара' : 'товаров'}}
                    </div>
                    <button
                        class="cart__clear"
                        @click="clearCart"
                    >Очистить список</button>
                </div>
                <div
                
                    class="cart__products"
                >
                    <CartItem
                        v-for="product in $store.state.cart"
                        :key="product.id"
                        :product="product"
                    />
                </div>
            </div>
        </div>
        <footer
            v-show="$store.state.cart.length"
            class="cart__footer"
        >
            <div class="cart__summ">
                <span class="cart__summ">Итого</span>
                <span class="cart__total">{{ cartTotalPrice }} ₽</span>
            </div>
            <button
                class="cart__buy"
                @click="checkoutOrder"
            >
                Оформить заказ
            </button>
        </footer>
        <div 
            class="cart__empty"
            v-show="!$store.state.cart.length"
        >
            Вперед за покупками!
        </div>
    </div>
</template>

<script>

import { mapState, mapMutations, mapGetters } from 'vuex'
import CartItem from './CartItem.vue';
export default {
    name: 'CartBlock',
    components: {
        CartItem
    },
    computed: {
        ...mapState({
            cart: state => state.cart,
            isCartOpen: state => state.isCartOpen,
        }),
        ...mapGetters({
            cartTotalPrice: 'cartTotalPrice',
            cartTotalItems: 'cartTotalItems'
        })
    },
    methods: {
      ...mapMutations({
            deleteOneProduct: 'deleteOneProduct',
            incrementItemQuantity: 'incrementItemQuantity',
            decrementItemQuantity: 'decrementItemQuantity',
            clearCart: 'clearCart',
            closeCart: 'closeCart'
        }),
        checkoutOrder() {
            console.log(`Ваш заказ на сумму ${this.cartTotalPrice} был оформлен! Спасибо ща ваш заказ!`)
            this.clearCart()   
        }
    },

}
</script>

<style lang="scss">
    .cart {
        padding: 40px;
        max-width: 600px;
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 100%;

        &__head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 80px;
        }

        &__empty {
            padding: 80px 0;
        }

        &__title {
            font-weight: 500;
            letter-spacing: -0.04em;
            font-size: 30px;
        }

        &__close {
            background-image: url('../../assets/icons/del.svg');
            width: 48px;
            height: 48px;
            border-radius: 50%;
            border: 1px solid #e6e6e6;
            background-repeat: no-repeat;
            background-position: center;
            cursor: pointer;
            transition: filter .3s;

            &:hover {
                filter: brightness(0.3);
            }
        }

        &__action {
            display: flex;
            align-items: center;
            justify-content: space-between;
            line-height: 1.1;
            padding-bottom: 10px;
            border-bottom: 1px solid #e6e6e6;
        }

        &__products {
            font-size: 14px;
        }

        &__summ {
            font-size: 16px;
            display: block;
            margin-bottom: 6px;
            font-weight: 400;
        }

        &__clear {
            text-transform: uppercase;
            font-size: 12px;
            color: #e6e6e6;
            cursor: pointer;
            transition: filter .3s;

            &:hover {
                filter: brightness(0.3)
            }
        }

        &__total {
            font-weight: 500;
            font-size: 30px;
        }

        &__footer {
            display: flex;
            align-items: center;
            justify-content: space-between;

        }

        &__buy {
            background: #7BB899;
            border-radius: 4px;
            padding: 20px 58px;
            text-transform: uppercase;
            font-weight: 500;
            font-size: 12px;
            letter-spacing: 0.06em;
            cursor: pointer;
            transition: filter .3s;
            &:hover {
                filter: opacity(0.9);
            }
        }

        &__modal {

            .modal__wrapper {
                justify-content: flex-end;
            }

            .modal__content {
                height: 100%;
                max-width: 600px;
                width: 100%;
            }
        }

        &__content {
            flex: 1 0 auto;
        }
    }
</style>