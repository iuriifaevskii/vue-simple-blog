<template>
    <div>
        Article Page
        <hr>
        <div class="flex-container">
            <div class="flex-row">
                <router-view :articles='articles'></router-view>
            </div>
            <div class="flex-row">
                <create-article-form></create-article-form>
            </div>
        </div>
    </div>
</template>

<script>
import CreateArticleForm from './CreateArticleForm.vue';
export default {
    data() {
        return {
            articles: []
        }
    },
    components: {
        'create-article-form': CreateArticleForm
    },
    mounted() {
        this.getArticles();
    },
    methods: {
        getArticles() {
            fetch('http://reduxblog.herokuapp.com/api/posts?key=123', {
        	    method: 'GET'
            })
            .then(response => response.json())
            .then(responseJSON => {
                this.articles = responseJSON;
                return false;
            })
            .catch(error => console.error(error)); 
        }
    }
}
</script>

<style>
    .flex-container {
        display: flex;
    }
    .flex-row:first-child {
        flex: 3;
    }
    .flex-row:nth-child(2) {
        flex: 1;
    }
</style>
