import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import GaleriaTatuajes from "./views/GaleriaTatuajes.vue";
import StudioInfo from "./views/StudioInfo.vue";
/* import ResenasClientes from "./views/ResenasClientes.vue"; */
import FormularioContacto from "./views/FormularioContacto.vue";
import BlogView from "./views/BlogView.vue";
import BlogPost from "./components/BlogPost.vue";
import NotFound from "./views/NotFoundView.vue";

console.log(import.meta.env.BASE_URL)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/gallery",
      name: "gallery",
      component: GaleriaTatuajes,
    },
    {
      path: "/studio",
      name: "studio",
      component: StudioInfo,
    },
/*     {
      path: "/reviews",
      name: "reviews",
      component: ResenasClientes,
    }, */
    {
      path: "/contact",
      name: "contact",
      component: FormularioContacto,
    },
    // Rutas del blog
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
    {
      path: "/blog/:slug",
      name: "blog-post",
      component: BlogPost,
      props: true,
    },
    // Ruta para Not Found (404)
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFound,
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
