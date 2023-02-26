import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '@/firebase/auth';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('@/views/Gate.vue') },
    {
      path: '/home',
      component: () => import('@/views/Home.vue'),
      meta: { requiresAuth: true },
    },
    { path: '/sign-in', component: () => import('@/views/SignIn.vue') },
    { path: '/sign-up', component: () => import('@/views/SignUp.vue') },
  ],
});

router.beforeEach((to, from, next) => {
  if ((to.path === '/sign-in' || to.path === 'sign-up') && auth.currentUser) {
    next('/home');
    return;
  }

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !auth.currentUser
  ) {
    next('/');
    return;
  }

  next();
});

export default router;
