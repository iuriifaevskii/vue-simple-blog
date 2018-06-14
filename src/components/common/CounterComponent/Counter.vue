<template>
    <div>
        <button class="btn btn-primary" @click.prevent='increment(100)'>increment</button>
        <button class="btn btn-primary" @click.prevent='decrement(50)'>decrement</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'increment',
                'decrement',
            ]),
        }
    }
</script>
