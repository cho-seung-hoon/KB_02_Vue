import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '@/pages/NotFound.vue';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import Videos from '@/pages/Videos.vue';
import MemberInfo from '@/pages/MemberInfo.vue';

const membersIdGuard = (to, from) => {
  if (from.name !== 'members' && from.name !== 'members/id') {
    return false;
  }
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/members', component: Members },
    { path: '/videos', name: 'videos', component: Videos },
    {
      path: '/members/:id',
      name: 'members/id',
      component: MemberInfo,
      befroEnter: membersIdGuard,
    },
    {
      path: '/:paths(.*)*', // 모든 매칭되지 않는 경로
      name: 'NotFound',
      component: NotFound,
    },
  ],
});

router.beforeEach((to) => {
  if (to.query && Object.keys(to.query).length > 0) {
    return { path: to.path, query: {}, params: to.params };
  }
});

export default router;
