import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/all',
      name: 'all',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/All.vue'),
    },
    {
      path: '/get/:id',
      name: 'get',
      component: () => import('../pages/Get.vue'),
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('../pages/Post.vue'),
    },
  ],
});

export default router;
