<template>
    <router-link tag='li' :to='link' class='list-group-item' style="cursor:pointer">
        link: {{article.title}} <button @click.stop='remove' class="btn btn-danger">remove</button>
    </router-link>
</template>

<script>
export default {
    props: {
        article: {
            type: Object
        },
        removeArticle: Function
    },
    data() {
        return {
            link: {
                name: 'articleDetail',
                params: {
                    id: this.article.id
                }
            },
        }
        
    },
    methods: {
        remove() {
            console.log('remove', this.article.id)
            this.removeArticle(this.article.id)
            //this.$emit('removeArticle', this.article.id)
        }
    }
}
</script>

<style lang="sass">

</style>
