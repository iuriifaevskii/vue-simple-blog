<template>
    <div>
        <result :counter='counter'></result>
        <counter @updated='updateCounter'></counter>
    </div>
</template>

<script>
import Counter from './Counter.vue';
import Result from './Result.vue';
export default {
    data() {
        return {
            counter: 0
        }
    },
    components: {
        'counter': Counter,
        'result': Result
    },
    methods: {
        updateCounter(num) {
            this.counter += num;
        }
    }
}
</script>
