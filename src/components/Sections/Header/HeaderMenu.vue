<template>
    <nav class="nav">
        <ul class="nav__list"
            :class="{'nav__list_mobile': isMobile}"
        >
            <li class="nav__item">
                <a class="nav__link" href="#">Продукты</a>
            </li>
            <li class="nav__item">
                <a class="nav__link" href="#">Цвета</a>
            </li>
            <li class="nav__item">
                <a  class="nav__link" href="#">Вдохновение</a>
            </li>
            <li class="nav__item">
                <a class="nav__link" href="#">Советы</a>
            </li>
            <li class="nav__item">
                <a class="nav__link" href="#">Найти магазин</a>
            </li>
        </ul>
        <div class="burger-menu"
            @click="isMobile=!isMobile"
        >
            <div class="burger-menu__item"/>
            <div class="burger-menu__item"/>
            <div class="burger-menu__item"/>
        </div>
    </nav>
</template>

<script>


export default({
    name: 'HeaderMenu',
    data() {
        return {
            isMobile: false,
        }
    }
})
</script>


<style lang="scss">
    .burger-menu {
        display: flex;
        gap: 4px;
        flex-direction: column;
        transition: opacity .3s ;
        cursor: pointer;
        display: none;

        @media (max-width: 1080px) {
            display: flex;
            
        }

        &__item {
            background: #1F2020;
            width: 24px;
            height: 2px;
        }

        &:hover {
            opacity: 0.9;
        }
    }

    $color-text: #1F2020;

    .nav {
        @media (max-width: 1080px) {
            order: -1;
        }

        &__list {
            display: flex;
            gap: 24px;

            @media (max-width: 1080px) {
                opacity: 0;
                transform: translateX(-1000px);
                position: absolute;
            }

            &_mobile {
                position: absolute;
                z-index: 3;
                background: white;
                top: 104px;
                flex-direction: column;
                left: -20px;
                padding: 44px 24px;
                border-radius: 0 14px 14px 0;
                align-items: flex-start;
                display: flex;
                width: 70%;
                opacity: 1;
                transform: translateX(0);
                border: 1px solid #e6e6e6;
                border-left-color: transparent;
                transition: opacity .5s;

                .nav__item {
                    animation: transfrom 0.5s ease 1 both;
                    &:first-of-type {
                        animation-delay: 0.1s;
                    }

                    &:nth-of-type(2) {
                        animation-delay: 0.2s;
                    }

                    &:nth-of-type(3) {
                        animation-delay: 0.3s;
                    }

                    &:nth-of-type(4) {
                        animation-delay: 0.4s;
                    }

                    &:nth-of-type(5) {
                        animation-delay: 0.5s;
                    }
                }
            }
         
        }

        &__link {
            text-transform: uppercase;
            font-size: 0.875rem;
            line-height: 1;
            letter-spacing: 0.06em;
            border-bottom: 1px solid transparent;
        
            position: relative;

            &::after {
                content: '';
                position: absolute;
                width: 0px;
                height: 1px;
                background: $color-text;
                left: 0;
                bottom: -3px;
                transition: width .3s;
            }

            &:hover {
                &::after {
                    width: 100%;
                }
            }
        }

 

        @keyframes transfrom {
             from {
                opacity: 0;
                transform: translateX(-5rem);
            }

            to {
                opacity: 1;
                transform: translateX(0);
            }
        }   

        @keyframes opacity {
            from {
                opacity: 1;
            }

            to {
                opacity: 0;
            }
        }
    }
</style>