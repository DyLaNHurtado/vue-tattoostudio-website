import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('./views/HomeView.vue'),
    },
    {
      path: "/gallery",
      name: "gallery",
      component:  () => import('./views/GaleriaTatuajes.vue'),
    },
    {
      path: "/studio",
      name: "studio",
      component: () => import('./views/StudioInfo.vue'),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import('./views/FormularioContacto.vue'),
    },
    // Rutas del blog
    {
      path: "/blog",
      name: "blog",
      component: () => import('./views/BlogView.vue'),
    },
    {
      path: "/blog/:slug",
      name: "blog-post",
      component: () => import('./components/BlogPost.vue'),
      props: true,
    },
    // Ruta para Not Found (404)
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: () => import('./components/NotFound.vue'),
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
