import ArticlesList from './components/blog/ArticlesList.vue';
import Home from './components/home/Home.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/article', component: ArticlesList },
];