<template>
    <div>
        <div>
            {{counter}}
        </div>
        <div>
            {{clicks}}
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        counter() {
            return this.$store.getters.doubleCounter
        },
        clicks() {
            return this.$store.getters.stringCounter
        }
    }
}
</script>
