import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/Layout.vue';

export const ErrorPageRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'ErrorPage',
  component: Layout,
  meta: {
    title: 'ErrorPage',
  },
  children: [
    {
      path: '/:pathMatch(.*)*',
      name: 'Error404Page',
      component: () => import('@/pages/exception/NotFound.vue'),
      meta: {
        title: '404',
      },
    },
  ],
};

export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/login',
  meta: {
    title: 'Root',
  },
};

export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/pages/login/index.vue'),
  meta: {
    title: '登录',
  },
};

export const basicRoutes = [RootRoute, LoginRoute, ErrorPageRoute];
