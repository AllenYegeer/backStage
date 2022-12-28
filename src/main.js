import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus, { formEmits } from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store/index.js'
import './assets/reset/reset.css'
const app = createApp(App)

app.use(router).use(ElementPlus).use(store)

app.mount('#app')
