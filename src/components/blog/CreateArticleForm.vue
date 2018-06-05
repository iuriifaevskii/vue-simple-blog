<template>
    <form>
        <h1>Create article</h1>
        <hr>
        <div class="form-group">
            <label for="title">Title</label>
            <input 
                id="title"
                type="text"
                class="form-control"
                v-model.lazy="articleData.title">
        </div>
        <div class="form-group">
            <label for="contant">Contant</label>
            <textarea 
                id="contant"
                rows="5"
                class="form-control"
                v-model.lazy="articleData.contant">
            </textarea>
        </div>
        <div class="form-group">
            <label for="category">Category</label>
            <select 
                id="category"
                class="form-control"
                v-model="articleData.selectedCategory">
                <option
                    v-for='item in categories'
                    :key="item"
                    >{{item}}</option>
            </select>
        </div>
        <div class="form-group">
            <button
                class="btn btn-primary"
                @click.prevent="createArticle">
                    Create Article
            </button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            articleData: {
                title: '',
                contant: '',
                selectedCategory: 'adventure'
            },
            categories: [
                'adventure',
                'news',
                'for children',
                'interesting stories'
            ],
        }
    },
    methods: {
        createArticle() {
            console.log(this.articleData)
        }
    }
}
</script>

<style lang="sass">

</style>
