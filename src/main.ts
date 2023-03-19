import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// css file
import './assets/main.css'
import './assets/css/Fonts.css'
import './assets/css/ReUsable.css'
import './assets/css/Size.css'
import './assets/css/Transition.css'
// boostrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
