import {createApp} from 'vue'
import App from './App.vue'
import router from "@/view/router";
// import vueaxios from 'vue-axios'
// import axios from 'axios'
import api from './basic/api/common'

const app = createApp(App)

// app.use(vueaxios, axios)

app.config.globalProperties.$api = api

app.use(router)
app.mount('#app')
