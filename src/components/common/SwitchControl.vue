<template>
    <div>
        <button @click.prevent='getStatus' class="btn" :class="!status ? 'btn-primary' : 'btn-success'">On</button>
        <button @click.prevent='getStatus' class="btn" :class="status ? 'btn-danger' : 'btn-success'">Off</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                status: true
            }
        },
        methods: {
            getStatus() {
                this.status = !this.status;
                this.$emit('statusGet', this.status);
            }
        }
    }
</script>
