<template>
    <div class="sort">
        <template
            v-for="option in sortOptions"
            :key="option.val"
        >   
            <label
                class="sort__label"
                v-bind:class="{ 'sort__label_active': $store.state.selectedOption.val === option.val }"
            > 
                <input
                    type="radio"
                    :name="option.title"
                    v-bind:value="option.val"
                    :model-value="selectedOption"
                    @update:model-value="selectOpt"
                    class="sort__radio"
                    @change="selectOpt"
                >
                {{option.title}}
            </label>
        </template>
    </div>
</template>

<script>
import {sortOptions} from '../../models/DataModel';
import { mapState, mapActions, mapMutations } from 'vuex'
export default{
    name: 'select-item',
    methods: {
        selectOpt(event) {
            const value = {
                val:  event.target.value,
                title: event.target.name
            }
            this.selectOption(value)
            this.closePopup()
        },
        ...mapMutations({
            closePopup: 'closePopup'
        }),
        ...mapActions({
            selectOption: 'selectOption'
        })
    },
    computed: {
        sortOptions() {
            return sortOptions;
        },
        ...mapState({
            isOpenPopup: state => state.isOpenPopup,
            selectedOption: state => state.selectedOption
        })
    }
}
</script>

<style lang="scss">
    .sort {
        display: flex;
        flex-direction: column;
        width: 280px;
        text-align: left;
        background: white;

        &__label {
            font-size: 0.75rem;
            text-transform: uppercase;
            border: none;
            letter-spacing: 0.06em;
            padding: 17px 24px;
            transition: background .3s;
            cursor: pointer;

            &_active {
                background: #7BB899;
            }
        }

        &__radio {
            opacity: 0;
            position: absolute;
        }

    }
</style>
