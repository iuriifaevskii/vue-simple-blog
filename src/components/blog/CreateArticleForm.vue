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
            <label for="content">Content</label>
            <textarea 
                id="content"
                rows="5"
                class="form-control"
                v-model.lazy="articleData.content">
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
            <switch-control
                @statusGet='getStatus'>
            </switch-control>
        </div>
        <div class="form-group">
            <button
                class="btn btn-primary"
                @click.prevent="submit">
                    Create Article
            </button>
        </div>
    </form>
</template>

<script>
import SwitchControl from '../common/SwitchControl.vue';
export default {
    data() {
        return {
            articleData: {
                title: '',
                content: '',
                selectedCategory: 'adventure',
                status: true
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
        submit() {
            this.$emit('createArticle', this.articleData);
            this.articleData = {
                title: '',
                content: '',
                selectedCategory: 'adventure',
                status: this.articleData.status
            }
        },
        getStatus(status) {
            this.articleData.status = status
        }
    },
    components: {
        'switch-control': SwitchControl
    }
}
</script>

