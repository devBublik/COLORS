<template>
    <header class="header">
        <div class="header__logo">
            <a href="#">
                <img class="header__svg" src="../assets/icons/logo.svg" alt="logo">
            </a>
        </div>
        <NavMenu/>
        <div class="header__contacts">
            <a href="tel:74952217769" class="header__phone">+7 (495) 221-77-69
                <span class="header__label">Заказать звонок</span>
            </a>
           
        </div>
        <Actions/>
        <div class="cart">4</div>
    </header>
</template>

<script>
import NavMenu from './Nav.vue'
import Actions from './Actions.vue'


export default {
    name: 'Header',
    components: {
        NavMenu,
        Actions
    }
}
</script>
