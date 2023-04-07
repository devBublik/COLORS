<template>
    <div class="product">
        <div class="product__img">
            <img :src="product.src" :alt="`фото ${product.title}`">
        </div>
        <div class="product__info">
            <h4 class="product__title">{{ product.title }}</h4>
            <div class="product__footer">
                <p class="product__price">{{ product.price }} ₽</p>
                <button class="product__add"
                    @click="addProductToCart(product)"
                >
                    +
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex' 
    export default {
        name: 'ProductItem',
        props: {
            product: {
                type: Object,
                default: () => {},  
            },
        },
        methods: {
             ...mapActions({
                addProductToCart: 'addProductToCart',
            }),
            ...mapMutations({
                pushProductToCart: 'pushProductToCart',
                incrementItemQuantity: 'incrementItemQuantity',
            }),
        },
        computed: {
            ...mapState({
                cart : state => state.cart
            }),
        }
    }
</script>

<style lang="scss">
    .product {
        max-width: 278px;
        width: 100%;
        text-align: left;
        border-bottom: 1px solid #e6e6e6;
        padding-bottom: 14px;
        
       

        &:hover {
            .product__add {
                opacity: 1;
            }
        }

        @media (max-width: 780px) {
            max-width: 156px;

             &:hover {
                .product__add {
                    background: #7BB899;
                }
            }
        }

        &__img {
            max-width: 278px;
            height: 278px;
            margin-bottom: 16px;

            @media (max-width: 780px) {
                max-width: 156px;
                height: 156px;
            }

            img {
                width: 100%;
            }
        }

        &__title {
            font-size: 1rem;
            font-weight: 300;
            letter-spacing: 0.02em;
            line-height: 1.1;
            margin-bottom: 24px;
        }

        

        &__add {
            background: #7BB899;
            border-radius: 8px;
            border: none;
            width: 80px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            opacity: 0;
            transition: opacity .3s, background .3s;

            @media (max-width: 780px) {
                width: 40px;
                height: 24px;
                opacity: 1;
                background: #F2F2F2;
            }
        }

        &__footer {
            display: flex;
            justify-content: space-between;
        }

        &__price {
            font-weight: 600;
        }
    }
</style>