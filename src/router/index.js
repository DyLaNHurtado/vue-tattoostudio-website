import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: 'gallery',
        name: 'gallery',
        component: () => import('../views/GaleriaTatuajes.vue'),
      },
      {
        path: 'studio',
        name: 'studio',
        component: () => import('../views/StudioInfo.vue'),
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('../views/FormularioContacto.vue'),
      },
      {
        path: 'blog',
        name: 'blog',
        component: () => import('../views/BlogView.vue'),
      },
      {
        path: 'blog/:slug',
        name: 'blog-post',
        component: () => import('../components/blog/BlogPost.vue'),
        props: true,
      },
      {
        path: ':catchAll(.*)',
        name: 'not-found',
        component: () => import('../components/common/NotFound.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;