import { RouteCustomRaw } from '@/router/tying';

const originalRoutes: RouteCustomRaw[] = [
  {
    name: 'Original',
    path: '/original',
    redirect: '/original/user-track',
    component: () => import('@/layout/Layout.vue'),
    meta: {
      title: '用户轨迹',
    },
    children: [
      {
        name: 'UserTrack',
        path: 'user-track',
        meta: {
          title: '用户轨迹',
        },
        remote: {
          name: 'amf_template',
          component: 'UserTrack',
        },
      },
      {
        name: 'UserDerogate',
        path: 'user-derogate',
        meta: {
          title: '用户贬损',
        },
        remote: {
          name: 'amf_template',
          component: 'UserDerogate',
        },
      },
    ],
  },
];

export default originalRoutes;
