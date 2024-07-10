# @mdxh/vue-toastification

Install VueToastification to vue3 using dxh wrapper

## Uses

### Installation

Just use the below command to install VueToastification.

```sh
npm i @mdxh/vue-toastification@latest
```

### Create a VueToastification instance

Create a VueToastification instance (the root store) and pass it to the app as a plugin:

```sh
import { createApp } from "vue";
import Toast, { type PluginOptions } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const app = createApp(...);

const options: PluginOptions = {
    // You can set your default options here
};

app.use(Toast, options);
```

### Start your project

```sh
npm run dev
```

## VueToastification Documentation

See [VueToastification Documentation](https://github.com/Maronato/vue-toastification).
