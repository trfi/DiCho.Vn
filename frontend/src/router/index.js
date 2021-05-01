import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/Layout.vue'),
    children: [
      { path: '', component: () => import('@/views/Main.vue') },
      { path: '/dangtin', component: () => import('@/views/Post.vue') },
      { path: '/chat', component: () => import('@/views/Chat.vue') },
      { path: '/register', component: () => import('@/views/Register.vue') },
      { path: '/login', component: () => import('@/views/Login.vue') },

    ]
  },







  {
    path: '/dangtin',
    name: 'Dangtin',
    component: () => import('@/views/Post.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
