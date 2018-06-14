<template>
    <div>
        <result></result>
        <counter></counter>
        <hr>
        <another-result></another-result>
        <another-counter></another-counter>
        <input type="text" :value="value" @input="updateValue">
        <p>{{value}}</p>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

import Counter from './Counter.vue';
import Result from './Result.vue';

import AnotherCounter from './AnotherCounter.vue';
import AnotherResult from './AnotherResult.vue';

export default {
    components: {
        'counter': Counter,
        'result': Result,
        'another-result': AnotherResult,
        'another-counter': AnotherCounter,
    },
    methods: {
        //...mapActions([
        //    'updateValue'
        //])
        updateValue(value) {
            this.$store.dispatch('updateValue', event.target.value);
        }
    },
    computed: {
        value() {
            return this.$store.getters.value;
        }
    }
}
</script>
