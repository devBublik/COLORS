<template>
    <div
        v-if="isOpen"
        class="modal__mask"
        @click="close" 
    >
        <div class="modal__wrapper" >
            <div class="modal__content" @click.stop>
                <slot name="body">
                    default body
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ModalItem',
        props: {
            isOpen: {
                type: Boolean,
                required: true,
            },
        },
        emits: {
            close: null,
        },
        methods: {
            close() {
                this.$emit("close");
                
            },
        }
    }
</script>

<style lang="scss">
    .modal {

        &__mask {
            position: fixed;
            z-index: 9998;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: table;
            transition: opacity 0.3s ease;
        }

        &__wrapper {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &__content {
            background: white;
        }

        &__container {
            width: 300px;
            margin: 0px auto;
            padding: 20px 30px;
            background-color: #fff;
            border-radius: 2px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
            transition: all 0.3s ease;
            font-family: Helvetica, Arial, sans-serif;
        }
    }
</style>

