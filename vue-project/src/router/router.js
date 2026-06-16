// router.js vai main.js
import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../components/HomeVew.vue'
import AboutView from '../components/AboutView.vue'

const routes = [
  { path: '/', component: HomeView },      // / -> HomeView
  { path: '/about', component: AboutView } // /about -> AboutView
]

const router = createRouter({
  history: createWebHistory(), // izmanto patieso URL vēsturi
  routes // masīvs ar ceļiem
})

export default router
