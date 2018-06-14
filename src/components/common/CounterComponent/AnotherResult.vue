<template>
    <div>
        <div>
            {{doubleCounter}}
        </div>
        <div>
            {{stringCounter}}
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'doubleCounter',
            'stringCounter'
        ])
    }
}
</script>
