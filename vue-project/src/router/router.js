// router.js vai main.js
import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../components/view/HomeView/HomeVew.vue'
import AboutView from '../components/AboutView.vue'
import DashboardView from '../admin/Dashboard/DashboardView.vue'
import Authorization from '../admin/Authorization/Authorization.vue'

const routes = [
  { path: '/', component: HomeView },      // / -> HomeView
  { path: '/about', component: AboutView }, // /about -> AboutView
  { path: '/admin/dashboard', component: DashboardView },
  {path: '/admin/authorization' , component: Authorization}
]

const router = createRouter({
  history: createWebHistory(), // izmanto patieso URL vēsturi
  routes // masīvs ar ceļiem
})

export default router
