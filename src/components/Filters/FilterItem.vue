<template>
    <div class="toggle"
    >
        <label
            class="toggle__label"
            v-bind:class="{ 'toggle__label_checked': checked }"
        >
            <input
                class="toggle__check"
                type="checkbox"
                :value="val"
                v-model="checked"
                @change="addFilter"
            >
        {{ title }}</label>
    </div>
    
</template>

<script>
import { mapMutations, mapState } from 'vuex'
    export default {
        name: 'ToggleItem',
        props: {
            title: {
                type: String,
                default: () => '',
            },
            val: {
                type: String,
                default: () => '',
            }
        },
        data() {
            return {
                checked: false,
            }
        },
        computed: {
            ...mapState({
                selectedFilters: state => state.selectedFilters,
                
            }),
        },
        methods: {
            ...mapMutations({
                addFilters: 'addFilters',
                deleteFilter: 'deleteFilter',
            }),

            addFilter(event) {
                const filter = {
                    checked: this.checked,
                    filter: event.target.value
                }
                const item = this.selectedFilters.find((item) => item.filter === filter.filter)
                if (filter.checked && !item) {
                     console.log('addFilters')
                    this.addFilters(filter)
                } else  {
                    console.log('deleteFilter')
                    this.deleteFilter(filter)
                }
            }
        },
    }
</script>

<style lang="scss">
    .toggle {
        display: flex;
        align-items: center;
        gap: 12px;

        &__check {
            position: absolute;
            z-index: -1;
            opacity: 0;
        }

        &__label {
            position: relative;
            padding-left: 44px;
            width: 164px;
            cursor: pointer;
            text-align: left;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 0.06em;
           

            &::before {
                content: '';
                width: 32px;
                height: 22px;
                border-radius: 40px;
                background: #E5E5E5;
                border: none;
                position: absolute;
                left: 0;
                top: -3px;
                transition: background .3s;
            }

            &::after {
                position: absolute;
                left: 7px;
                top: 4px;
                content: '';
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #1F2020;
                transition: transform .3s;
            }

             &_checked {
                &::before {
                    background: #7BB899;
                }

                &::after {
                    transform: translateX(10px)
                }
            }
        }
    }   
</style>