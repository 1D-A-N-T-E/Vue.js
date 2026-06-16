import { createApp } from 'vue'
import './style.css' // importējam Tailwind CSS
import App from './App.vue'
import router from './router/router.js' // importējam maršrutētāju

const app = createApp(App)
app.use(router) // <-- REĢISTRĒ
app.mount('#app')