<template>
    <div>
        <result></result>
        <counter></counter>
    </div>
</template>

<script>
import Counter from './Counter.vue';
import Result from './Result.vue';

export default {
    components: {
        'counter': Counter,
        'result': Result
    },
}
</script>
