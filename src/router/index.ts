import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/home/HomeIndex.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/home/provience/:row',
    // name: 'provience',
    component: () =>
      import(
        /* webpackChunkName: "provience" */ '../views/provience/ProvienceDetail.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
