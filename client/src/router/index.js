import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('../views/Gate.vue') },
    { path: '/home', component: () => import('../views/Home.vue') },
    { path: '/sign-in', component: () => import('../views/SignIn.vue') },
    { path: '/sign-up', component: () => import('../views/SignUp.vue') },
  ],
});

export default router;
