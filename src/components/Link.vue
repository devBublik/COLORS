<template>
    <n-link :to='to' class="ui-link">
        {{ label }}
    </n-link>
</template>

<script>
    export default {
    name: 'UILink',
    props: {
        to: {
            type: [String, Object],
            default: () => '',
        },
        label: {
            type: String,
            default: () => ''
        }
    }
}
</script>