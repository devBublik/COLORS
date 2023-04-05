<template>
    <ul class="burger">
        <li class="burger__item"/>
    </ul>
</template>

<script>
    export default{
        name: 'HeaderBurger'
    }
</script>

<style lang="scss">
    .burger {
        display: flex;
        flex-direction: column;
        gap: 4px;

        &__item {
            width: 24px;
            height: 24px;
            background: #1F2020;
        }
    }
</style>