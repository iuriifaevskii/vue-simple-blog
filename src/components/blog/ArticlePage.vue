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
            articles: []
        }
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

<style lang="sass">

</style>
