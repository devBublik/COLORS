<template>
    <div class="actions">
        <div class="actions__el">
            <img class="actions__svg" src="../../../assets/icons/search.svg" alt="search icon">
        </div>
        <div class="actions__el">
            <img class="actions__svg" src="../../../assets/icons/profile.svg" alt="profile icon">

        </div>
        <div class="actions__el">
            <img class="actions__svg" src="../../../assets/icons/heart.svg" alt="like icon">
        </div>
    </div>
</template>

<script>
export default{
    name: 'Actions'
}
</script>

<style lang="scss">
    .actions {
        display: flex;
        gap: 24px;
        cursor: pointer;

        &__el {
            
            &:hover {
                filter: invert(0.5);
            }
        }
    }
</style>