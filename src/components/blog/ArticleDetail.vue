<template>
    <div>
        Article Detail
        <p>loaded ID: {{ id }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    watch: {
        '$route'(to, from) {
            this.id = to.params.id;
        }
    }
}
</script>

<style lang="sass">

</style>
