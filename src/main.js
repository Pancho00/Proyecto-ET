import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import axios from "axios";
import chart from "chart.js";

const app = createApp(App);

app.use(chart);
app.use(axios);
app.use(bootstrap);
app.use(router);

app.mount("#app");
