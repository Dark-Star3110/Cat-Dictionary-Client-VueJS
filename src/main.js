import { createApp } from "vue";
import App from "./App.vue";
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";
import router from "./router";
import { store } from "./store";
//...
const app = createApp(App);
app.use(createVuestic());
app.use(router);
app.use(store);
app.mount("#app");
