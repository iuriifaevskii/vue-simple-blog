<template>
    <router-link tag='li' :to='link' class='list-group-item' style="cursor:pointer">
        link: {{article.title}}
    </router-link>
</template>

<script>
export default {
    props: {
        article: {
            type: Object
        }
    },
    computed: {
        link() {
            return `article/${this.article.id}`;
        }
    }
}
</script>

<style lang="sass">

</style>
