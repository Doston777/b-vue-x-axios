import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const lazyload = componentPath => {
  return () => import(/* webpackChunkName: "[request]" */ `../views/${componentPath}.vue` )
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: lazyload('Users')
  },
  {
    path: '/todos',
    name: 'Todos',
    component: lazyload('Todos')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
