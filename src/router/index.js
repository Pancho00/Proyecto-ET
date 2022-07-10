import { createRouter, createWebHistory } from "vue-router";
import VistaHome from "../views/VistaHome.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: VistaHome,
    }
  ],
});

export default router;
