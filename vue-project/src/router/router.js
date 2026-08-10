// router.js vai main.js
import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../components/view/HomeView/HomeVew.vue'
import AboutView from '../components/AboutView.vue'
import DashboardView from '../admin/view/Dashboard/DashboardView.vue'


const routes = [
  { path: '/', component: HomeView },      // / -> HomeView
  { path: '/about', component: AboutView }, // /about -> AboutView
  { path: '/admin', component: DashboardView }
]

const router = createRouter({
  history: createWebHistory(), // izmanto patieso URL vēsturi
  routes // masīvs ar ceļiem
})

export default router
