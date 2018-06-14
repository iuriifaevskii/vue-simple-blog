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
        }
    }
</script>
