import { createRouter, createWebHistory } from "vue-router";
import VistaHome from "../views/VistaHome.vue";
import VistaInicioSesion from "../views/VistaInicioSesion.vue";
import VistaRegistrarUsuario from "../views/VistaRegistrarUsuario.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: VistaHome,
    },
    {
      path: "/login",
      name: "iniciarSesion",
      component: VistaInicioSesion,
    },
    {
      path:"/register",
      name: "registrarUsuario",
      component: VistaRegistrarUsuario,
    },
  ],
});

export default router;
