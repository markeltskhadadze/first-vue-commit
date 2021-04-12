import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/News.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('@/views/History.vue')
  }
]

const router = new VueRouter({
    mode: 'history',
    Vue: Vue,
    base: process.env.BASE_URL,
    routes
  })
  
  export default router