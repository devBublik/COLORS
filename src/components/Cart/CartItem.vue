<template>
    <div class="cart-item"
        :class="{'cart-item_disabled': product.repeat}"
    >
        <div class="cart-item__image">
            <img :src="product.src" :alt="`изображение ${product.title}`" class="cart-item__img">
        </div> 
        <div class="cart-item__info">
            <h4 class="cart-item__title">{{ product.title }}</h4>
            <p class="cart-item__price">{{ product.price }} ₽</p>
        </div>
        <div class="cart-item__controls">
            <button
                class="cart-item__btn cart-item__btn_inc"
                @click="decrementItemQuantity(product)"
            >   
                -
            </button>
            <div class="cart-item__count">{{ product.count }}</div>
            <button
                class="cart-item__btn cart-item__btn_dec"
                @click="incrementItemQuantity(product)"
            >
                +
            </button>
            <button v-if="!product.repeat"
                class="cart-item__btn cart-item__btn_del"
                @click="movetoRepeat(product)"
            />
            <button v-else
                class="cart-item__btn cart-item__btn_repeat"
                @click="moveFromRepeat(product)"
            />
        </div>
    </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
    export default {
        name: 'CartItem',
        props: {
            product : {
                type: Object,
                default: () => {},
            }
        },
        computed: {
            ...mapState({
                cart: state => state.cart,
            })
        },
        methods: {
            ...mapActions({
                movetoRepeat: 'movetoRepeat',
                moveFromRepeat: 'moveFromRepeat'
            }),
            ...mapMutations({
                incrementItemQuantity: 'incrementItemQuantity',
                decrementItemQuantity: 'decrementItemQuantity'
            })
        }
    }
</script>

<style lang="scss">

    .cart-item {
        display: flex;
        align-items: center;
        padding: 26px 0;

        

        &__image {
            width: 96px;
            height: 96px;
            margin-right: 8px;
        }

        &__img {
            width: 100%;
        }
        
        &__controls {
            display: flex;
            align-items: center;
            
        }

        &__count {
            margin: 0 22px;
        }

        &__btn {
            background: #F2F2F2;
            border-radius: 4px;
            padding: 4px 18px;
            cursor: pointer;
            transition: filter .3s;
            &:hover {
                filter: brightness(0.9)
            }

            &_del {
                background: none;
                background-image: url('../../assets/icons/del.svg');
                width: 24px;
                height: 24px;
                margin-left: 36px;
                filter: opacity(0.5);
                transition: filter .3s;
                padding: 4px 12px;
                background-repeat: no-repeat;

                &:hover {
                    filter: opacity(1)
                }
            }

            &_repeat {
                background: none;
                background-image: url('../../assets/icons/repeat.svg');
                width: 24px;
                height: 24px;
                margin-left: 36px;
                transition: filter .3s;
                background-repeat: no-repeat;

                &:hover {
                    filter: opacity(0.6)
                }
            }
        }

        &__info {
            max-width: 208px;
            width: 100%;
        }

        &_disabled {
            .cart-item__image,
            .cart-item__info,
            .cart-item__btn_inc,
            .cart-item__btn_dec {
                opacity: 0.6;
                cursor: no-drop;
            }


           
        }

        &__title {
            max-width: 166px;
            width: 100%;
            font-weight: 300;
            margin-bottom: 16px;
        }

        &__price {
            font-weight: 600;
            font-size: 1rem;
        }
            

    }

</style>