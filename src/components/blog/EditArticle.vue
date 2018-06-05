<template>
    <div>
        Edit Article
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false
        }
    },
    beforeRouteLeave(to, from, next) {
        if (this.confirmed) {
            next();
        } else {
            if (confirm('are you sure')) {
                next();
            } else {
                next(false);
            }
        }
    }
}
</script>

<style lang="sass">

</style>
