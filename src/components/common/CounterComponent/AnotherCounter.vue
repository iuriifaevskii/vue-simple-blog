<template>
    <div>
        <button class="btn btn-primary" @click.prevent='asyncIncrement({by: 50, duration: 3000})'>increment</button>
        <button class="btn btn-primary" @click.prevent='asyncIncrement({by: 100, duration: 3000})'>decrement</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement',
            ]),
            // increment(by) { // or pass params in argument automaticly
            //     this.$store.dispatch('increment', by)
            // }
            //increment() {
            //    this.$store.commit('increment');
            //},
            //decrement() {
            //    this.$store.commit('decrement');
            //}
        }
    }
</script>
