<template>
    <div class="breadcrumbs">
        <span class="breadcrumbs__item">Главная</span>
        <span class="breadcrumbs__item">Продукты</span>
        <span class="breadcrumbs__item">Краски</span>
    </div>    

</template>

<script>
    export default {
        name: 'BreadCrumbs'
    }
</script>

<style lang="scss">
    .breadcrumbs {
        color: #e6e6e6;
        text-transform: uppercase;
        font-size: 0.625rem;
        letter-spacing: 0.06em;
        position: absolute;
        bottom: -32px;
        z-index: 2;
        left: 0;
        
        &__item {
            position: relative;
            display: inline-block;
            padding-right: 8px;

            &:not(&:last-of-type) {
                &::after {
                    display: inline-block;
                    content: '';
                    width: 3px;
                    height: 3px;
                    border-radius: 50%;
                    background: #e6e6e6;
                    right: 0;
                }
            }   

            
        }
    }
</style>