import './assets/main.css'
import 'vue-toastification/dist/index.css'

import Toast, { type PluginOptions } from 'vue-toastification'
import { createApp } from 'vue'
import App from './App.vue'

const options: PluginOptions = {
  // You can set your default options here
}

const app = createApp(App)
app.use(Toast, options)

app.mount('#app')
