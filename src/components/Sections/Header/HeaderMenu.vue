<template>
    <nav class="nav">
        <ul class="nav__list">
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
    </nav>
</template>

<script>


export default({
    name: 'HeaderMenu'
})
</script>


<style lang="scss">
    $color-text: #1F2020;

    .nav {
        &__list {
            display: flex;
            gap: 24px;
        }
        &__link {
            text-transform: uppercase;
            font-size: 14px;
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
    }
</style>