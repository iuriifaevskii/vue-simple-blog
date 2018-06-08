<template>
    <div>
        <result></result>
        <counter></counter>
        <hr>
        <another-result></another-result>
        <another-counter></another-counter>
    </div>
</template>

<script>
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
}
</script>
