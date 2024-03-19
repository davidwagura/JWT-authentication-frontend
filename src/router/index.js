import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '@/views/DashboardPage.vue'
import HomePage from '@/views/HomePage.vue'
import SigninPage from '@/views/SigninPage.vue'

const routes = [
    {path: '/', component:  HomePage},
    {path: '/dashboard', component: DashboardPage},
    {path: '/signin', component: SigninPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;