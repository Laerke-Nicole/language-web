import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// animation
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)

app.use(router)

// animation
app.use(MotionPlugin)
 
app.mount('#app')
