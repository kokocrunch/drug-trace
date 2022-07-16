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
    path: '/distributor',
    name: 'distributor',
    // route level code-splitting
    // this generates a separate chunk (distributor.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "distributor" */ '../views/Distributor.vue')
  },
  {
    path: '/retailer',
    name: 'retailer',
    // route level code-splitting
    // this generates a separate chunk (retailer.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "retailer" */ '../views/Retailer.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
