<template>
    <div>
        <single-article></single-article>
        <single-article></single-article>
        <single-article></single-article>
    </div>
</template>

<script>
import Article from './Article.vue';

export default {
    components: {
        'single-article': Article
    }
}
</script>

<style lang="sass">

</style>
