import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { RouterLink, RouterView} from "vue-router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const app = createApp(App);
app.use(RouterLink);
app.use(RouterView);
app.use(router);

app.mount("#app");
