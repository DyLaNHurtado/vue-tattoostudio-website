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
    {
      path: "/oauth",
      name: "oauth",
      component: () => import("./components/OAuthRedirectComponent.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;