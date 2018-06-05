<template>
    <div>
        <ul class="list-group" v-for='article in articles' :key="article.id">
            <single-article :article='article'></single-article>
        </ul>
        <button class="btn btn-primary" @click='navigateToHome()'>Back to home</button>
    </div>
</template>

<script>
import Article from './Article.vue';

export default {
    props: {
        articles: {
            type: Array
        }
    },
    components: {
        'single-article': Article
    },
    methods: {
        navigateToHome() {
            this.$router.push({name: 'routerHome'});
        }
    }
}
</script>

<style lang="sass">

</style>
