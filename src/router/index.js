import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/trap/:key',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/make',
    name: 'dionaea',
    component: () => import ('../views/MakeDionaea.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
