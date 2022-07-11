import { createRouter, createWebHistory } from "vue-router";
import VistaHome from "../views/VistaHome.vue";
import VistaInicioSesion from "../views/VistaInicioSesion.vue";
import VistaRegistrarUsuario from "../views/VistaRegistrarUsuario.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: VistaHome,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/login",
      name: "iniciarSesion",
      component: VistaInicioSesion,
      alias: "/",
      meta: {
        title: "Ingresar",
      },
    },
    {
      path: "/register",
      name: "registrarUsuario",
      component: VistaRegistrarUsuario,
      meta: {
        title: "Registrar Usuario",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
