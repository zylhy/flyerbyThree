import { createRouter, createWebHistory } from 'vue-router'

let routes = [{ path: '/', name: 'home', component: () => import('../views/index.vue') }]
const router = new createRouter({ routes, history: createWebHistory() })
export default router