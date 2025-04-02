import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import ElectoronicsPage from '@/pages/ElectoronicsPage.vue';
import JewelerPage from '@/pages/JewelerPage.vue';
import MensClothingPage from '@/pages/MensClothingPage.vue';
import WomensClothingPage from '@/pages/WomensClothingPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/electronics', component: ElectoronicsPage, name: 'electronics' },
    { path: '/jewelery', component: JewelerPage, name: 'jewelery' },
    {
      path: '/mensclothing',
      component: MensClothingPage,
      name: 'mensclothing',
    },
    {
      path: '/womenclothing',
      component: WomensClothingPage,
      name: 'womenclothing',
    },
  ],
});

export default router;
