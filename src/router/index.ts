import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/expandingCard',
    name: 'expandingCard',
    component: () => import(/* webpackChunkName: "about" */ '../views/1expandingCard.vue')
  },
  {
    path: '/progress',
    name: 'progress',
    component: () => import(/* webpackChunkName: "about" */ '../views/2progressStep.vue')
  },
  {
    path: '/4search',
    name: 'search',
    component: () => import(/* webpackChunkName: "about" */ '../views/4hiddenSearch.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router