import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '../public/ass/main.css'
import axios from 'axios'
const app = createApp(App)

axios.interceptors.request.use((config)=>{
    const token = localStorage.getItem('authtoken')

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

app.use(createPinia())
app.use(router)

app.mount('#app')
