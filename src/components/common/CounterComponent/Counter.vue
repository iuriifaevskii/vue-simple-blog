<template>
    <div>
        <button class="btn btn-primary" @click.prevent='increment'>increment</button>
        <button class="btn btn-primary" @click.prevent='decrement'>decrement</button>
    </div>
</template>

<script>
    export default {
        components: {
        },
        methods: {
            increment() {
                this.$emit('updated', 1)
            },
            decrement() {
                this.$emit('updated', -1)
            }
        }
    }
</script>
