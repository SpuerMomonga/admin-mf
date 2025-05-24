import { RouteRecordRaw } from 'vue-router';
import { coreRoutes, notFoundRoute } from './core';
import { mergeRouteModules } from './helpers';

const dynamicRouteFiles = import.meta.webpackContext('./modules', {
  recursive: true,
  regExp: /\.ts$/,
});

const dynamicRoutes: RouteRecordRaw[] = mergeRouteModules(dynamicRouteFiles);

// 基本路由
const routes: RouteRecordRaw[] = [...coreRoutes, notFoundRoute];

const coreRouteNames = [];

// 有权限的路由
const accessRoutes = [...dynamicRoutes];
export { routes, coreRouteNames, accessRoutes };
