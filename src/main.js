// import './assets/main.css'
import './assets/global.css'

// 全局引入axios
import axios from 'axios'

// 配置baseURL
axios.defaults.baseURL = "#"



import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

// 注入axios对象
const app = createApp(App);
// axios别名'$http'
app.provide('$http', axios)

app.use(router);

app.mount('#app')


