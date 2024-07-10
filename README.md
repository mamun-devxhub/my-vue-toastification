# @dxh/vue-pinia

Install Pinia to vue3 using dxh wrapper

## Uses

### Installation

Just use the below command to install Pinia.

```sh
npm i @mdxh/vue-pinia@latest
```

### Create a pinia instance

Create a pinia instance (the root store) and pass it to the app as a plugin:

```sh
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```

### Start your project

```sh
npm run dev
```

## Pinia Documentation

See [Pinia Documentation](https://pinia.vuejs.org/introduction.html).
