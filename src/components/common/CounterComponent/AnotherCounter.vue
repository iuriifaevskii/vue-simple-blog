<template>
    <div>
        <button class="btn btn-primary" @click.prevent='increment'>increment</button>
        <button class="btn btn-primary" @click.prevent='decrement'>decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increment() {
                this.$store.state.counter++;
            },
            decrement() {
                this.$store.state.counter--;
            }
        }
    }
</script>
