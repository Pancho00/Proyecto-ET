import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Chart from "chart.js/auto";
const app = createApp(App);

app.use(Chart);
app.use(router);

app.mount("#app");
