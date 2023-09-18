import './assets/main.css'
import './assets/tailwindcss.css'

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";
import zhCN from "element-plus/dist/locale/zh-cn.mjs"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus, { locale: zhCN })

app.mount('#app')
