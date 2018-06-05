<template>
    <div>
        <p style='font-weight:bold'>Article Detail</p>
        <p>id: {{ singleArticle.id }}</p>
        <p>Title: {{ singleArticle.title }}</p>
        <p>Categories: {{ singleArticle.categories }}</p>
        <p>Content: {{ singleArticle.content }}</p>
        <router-link :to="{ name: 'articleEdit', params: { id: id }}" tag='button' class='btn btn-primary'>Edit</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            singleArticle: {},
        }
    },
    mounted() {
        this.getSingleArticle();
    },
    methods: {
        getSingleArticle() {
            fetch(`http://reduxblog.herokuapp.com/api/posts/${this.id}`, {
                method: 'GET'
            })
            .then(response => response.json())
            .then(responseJSON => {
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
    }
}
</script>

<style lang="sass">

</style>
