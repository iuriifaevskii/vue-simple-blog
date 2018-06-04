<template>
    <div>
        {{msg}}
        <articles-list></articles-list>
    </div>
</template>

<script>
import ArticlesList from './components/blog/ArticlesList.vue';
export default {
    name: 'app',
    data () {
        return {
            msg: 'Simple Blog'
        }
    },
    components: {
        'articles-list': ArticlesList
    }
}
</script>
