import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/HomeView.vue"),
    },
    {
      path: "/gallery",
      name: "gallery",
      component: () => import("./views/GaleriaTatuajes.vue"),
    },
    {
      path: "/appointments",
      name: "appointments",
      component: () => import("./views/GestionCitas.vue"),
    },
    {
      path: "/studio",
      name: "studio",
      component: () => import("./views/StudioInfo.vue"),
    },
    {
      path: "/reviews",
      name: "reviews",
      component: () => import("./views/ResenasClientes.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./views/FormularioContacto.vue"),
    },
  ],
});

export default router;
