import { createRouter, createWebHistory } from "vue-router";

// Importa los componentes del blog
import BlogList from './components/BlogList.vue';
import BlogPost from './components/BlogPost.vue';

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
    // Rutas del blog
    {
      path: "/blog",
      name: "blog",
      component: import("./views/BlogView.vue"),
    },
    {
      path: "/blog/:slug",
      name: "blog-post",
      component: import("./components/BlogPost.vue"),
      props: true,
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