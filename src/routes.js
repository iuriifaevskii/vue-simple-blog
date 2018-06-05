import ArticlePage from './components/blog/ArticlePage.vue';
import ArticlesList from './components/blog/ArticlesList.vue';
import ArticleDetail from './components/blog/ArticleDetail.vue';
import EditArticle from './components/blog/EditArticle.vue';
import Home from './components/home/Home.vue';
import Header from './components/layout/Header';

export const routes = [
    { path: '', name: 'routerHome', components: {
        default: Home,
        'header-top': Header
    } },
    { path: '/article', name: 'allArticles', components: {
        default: ArticlePage,
        'header-bottom': Header,
        'header-top': Header
    }, children: [
        { path: '', component: ArticlesList },
        { path: ':id', component: ArticleDetail, name: 'articleDetail', beforeEnter: (to, from, next) => {
            console.log('inside route setup');
            next();
        }},
        { path: ':id/edit', component: EditArticle, name: 'articleEdit' }
    ] },
    { path: '/redirect-to-articles', redirect: { name: 'allArticles' }},
    { path: '*', redirect: { name: 'routerHome' }}
];