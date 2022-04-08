import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { globalRegister } from './global/index'

const app = createApp(App)

// 注册element-plus/其他
app.use(globalRegister)
app.use(store)
app.use(router)

app.mount('#app')
