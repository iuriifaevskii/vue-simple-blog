import ArticlePage from './components/blog/ArticlePage.vue';
import ArticlesList from './components/blog/ArticlesList.vue';
import ArticleDetail from './components/blog/ArticleDetail.vue';
import EditArticle from './components/blog/EditArticle.vue';
import Home from './components/home/Home.vue';


export const routes = [
    { path: '', component: Home },
    { path: '/article', component: ArticlePage, children: [
        { path: '', component: ArticlesList },
        { path: ':id', component: ArticleDetail },
        { path: ':id/edit', component: EditArticle }
    ] }
];