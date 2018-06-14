<template>
    <div>
        <button class="btn btn-primary" @click.prevent='increment'>increment</button>
        <button class="btn btn-primary" @click.prevent='decrement'>decrement</button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';
    export default {
        methods: {
            ...mapMutations([
                'increment',
                'decrement'
            ])
            //increment() {
            //    this.$store.commit('increment');
            //},
            //decrement() {
            //    this.$store.commit('decrement');
            //}
        }
    }
</script>
