<template>
    <div>
        Article Page
        <hr>
        <div class="flex-container">
            <div class="flex-row">
                <router-view v-if='!loading'
                    :articles='articles'
                    :removeArticle='delArticle'
                    >
                </router-view>
                <div v-else>
                    <custom-spinner></custom-spinner>
                </div>
            </div>
            <div class="flex-row">
                <create-article-form
                    @createArticle='newArticle'>
                </create-article-form>
            </div>
        </div>
    </div>
</template>
<script>
//@removeArticle='delArticle'>
import CreateArticleForm from './CreateArticleForm.vue';
import Spinner from '../common/Spinner.vue';
export default {
    data() {
        return {
            articles: [],
            loading: false
        }
    },
    components: {
        'create-article-form': CreateArticleForm,
        'custom-spinner': Spinner
    },
    mounted() {
        this.getArticles();
    },
    methods: {
        getArticles() {
            this.loading = true;
            fetch('http://reduxblog.herokuapp.com/api/posts?key=123', {
        	    method: 'GET'
            })
            .then(response => response.json())
            .then(responseJSON => {
                this.articles = responseJSON;
                this.loading = false;
                return false;
            })
            .catch(error => console.error(error)); 
        },
        newArticle(article) {
            fetch('http://reduxblog.herokuapp.com/api/posts?key=123', {
                method: 'POST',
	    		headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(article)
            })
            .then(response => response.json())
            .then(responseJSON => {
                this.articles.unshift(responseJSON);
                return false;
            })
            .catch(error => console.log(error))
        },
        delArticle(id) {
            fetch(`http://reduxblog.herokuapp.com/api/posts/${id}?key=123`, {
                method: 'DELETE',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(responseJSON => {
                this.articles = this.articles.filter(item => item.id !== id)
                return false;
            })
            .catch(error => console.log(error))
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
