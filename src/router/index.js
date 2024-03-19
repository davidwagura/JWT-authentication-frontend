import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '@/views/DashboardPage.vue'
import HomePage from '@/views/HomePage.vue'
import Signin from '@/views/Signin.vue'

const routes = [
    {path: '/', component:  HomePage},
    {path: '/dashboard', component: DashboardPage},
    {path: '/signin', component: Signin},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;