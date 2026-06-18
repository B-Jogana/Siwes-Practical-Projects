import { createApp } from 'vue'
//import './style.css'
import App_2 from './App_2.vue'
import router from './router'



const app = createApp(App_2)
app.use(router)
app.mount('#app')

