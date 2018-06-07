<template>
    <div>
        <h1>Home page</h1>
        <p>Browser home page. A home page also refers to the first page that appears upon opening a web browser, sometimes called the start page, although the home page of a website can be used as a start page.</p>
        <app-main></app-main>
    </div>
</template>

<script>
import Main from '../common/CounterComponent/Main.vue';
export default {
    components: {
        'app-main': Main
    }
}
</script>

<style lang="sass">

</style>
