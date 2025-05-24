import { RouteRecordRaw } from 'vue-router';

const notFoundRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: () => import('@/pages/exception/NotFound.vue'),
  meta: {
    title: 'NotFound',
  },
};

const coreRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    redirect: '/welcome',
    meta: {
      title: 'Root',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
];

export { coreRoutes, notFoundRoute };
