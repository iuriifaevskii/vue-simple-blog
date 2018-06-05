<template>
    <div>
        <router-view name='header-top'></router-view>
        <router-view></router-view>
        <router-view name='header-bottom'></router-view>
    </div>
</template>

<script>
import Header from './components/layout/Header.vue';
export default {
    components: {
            'app-header': Header
        }
    }
</script>
