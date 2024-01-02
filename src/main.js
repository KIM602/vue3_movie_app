import { createApp } from 'vue'
import App from './App.vue'
import router from './routes' //index.js 파일 생략 가능
import store from './store'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')