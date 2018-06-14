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
import * as types from '../../../store/types';
export default {
    computed: {
        ...mapGetters({
            doubleCounter: types.DOUBLE_COUNTER,
            stringCounter: types.CLICK_COUNTER
        })
    }
}
</script>
