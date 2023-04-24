import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Main from './Main.vue'

const app = createApp(Main)

app.use(router)

app.mount('#app')
