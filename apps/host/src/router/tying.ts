import { Component } from 'vue';
import { RouteComponent, RouteRecordRedirectOption } from 'vue-router';

interface RouteRemote {
  name: string;
  component: string;
}

interface RouteMeta {
  icon?: string | Component;
  title: string;
  hideInMenu?: boolean;
  keepAlive?: boolean;
}

interface RouteCustomRaw {
  name?: string;
  path: string;
  redirect?: RouteRecordRedirectOption;
  component?: RouteComponent | (() => Promise<RouteComponent>);
  remote?: RouteRemote;
  meta: RouteMeta;
  children?: RouteCustomRaw[];
}

export type { RouteCustomRaw, RouteRemote };
