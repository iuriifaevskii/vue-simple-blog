<template>
    <div>
        Article Page
        <hr>
        <router-view :articles='articles'></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            articles: [{
                id: 1, title: 'first'
            }, {
                id: 2, title: 'second'
            }]
        }
    }
}
</script>

<style lang="sass">

</style>
