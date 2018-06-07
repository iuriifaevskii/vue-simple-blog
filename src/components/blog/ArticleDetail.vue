<template>
    <div v-if='singleArticle && singleArticle.id'>
        <p style='font-weight:bold'>Article Detail</p>
        <p>id: {{ singleArticle.id }}</p>
        <p>Title: {{ singleArticle.title }}</p>
        <p>Categories: {{ singleArticle.categories }}</p>
        <p>Content:</p>
        <p style="white-space: pre">{{ singleArticle.content }}</p>
        <router-link :to="{ name: 'articleEdit', params: { id: id }}" tag='button' class='btn btn-primary'>Edit</router-link>
    </div>
    <p v-else-if='singleArticle.error && singleArticle.error.match(/not found/i)'>No article!</p>
    <div v-else>
        <custom-spinner></custom-spinner>
    </div>
</template>

<script>
import Spinner from '../common/Spinner.vue';
export default {
    data() {
        return {
            id: this.$route.params.id,
            singleArticle: {},
        }
    },
    mounted() {
        this.getSingleArticle(this.id);
    },
    methods: {
        getSingleArticle(id) {
            fetch(`http://reduxblog.herokuapp.com/api/posts/${id}`, {
                method: 'GET'
            })
            .then(response => response.json())
            .then(responseJSON => {console.log(responseJSON)
                this.singleArticle = responseJSON;
            })
            .catch(error => console.log(error));
        }
    },
    beforeRouteEnter(to, from, next) {
        if (true) { // if user authentificated!
            next();
        } else { // else
            next(false);
        }
    },
    components: {
        'custom-spinner': Spinner
    }
}
</script>

<style lang="sass">

</style>
