import Vue from 'vue';
import Router from 'vue-router';
import Layout from './views/layout.vue';

import { RouteConfig } from 'vue-router/types/router';

Vue.use(Router);

export interface RouterConfigEx extends RouteConfig {
  hidden?: boolean;
}

export const dynamicRouters: RouterConfigEx[] = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: 'git',
    meta: { title: 'git' },
    children: [
      {
        path: '/git',
        name: 'git',
        component: () => import('./views/git.vue'),
        meta: { title: 'git' },
        children: []
      }
    ]
  },
  {
    path: '/jsPage',
    name: 'jsPage',
    component: Layout,
    meta: { title: 'jsPage' },
    children: [
      {
        path: '/es6',
        name: 'es6',
        component: () => import('./views/jsPage/es6/es6.vue'),
        meta: { title: 'es6' },
        children: [
          {
            path: '/subes6-1',
            name: 'subes6-1',
            component: () => import('./views/jsPage/es6/es6.vue'),
            meta: { title: 'subes6-1' },
          },
          {
            path: '/subes6-2',
            name: 'subes6-2',
            component: () => import('./views/jsPage/es6/es6.vue'),
            meta: { title: 'subes6-2' },
          }
        ]
      },
      {
        path: '/weixin',
        name: 'weixin',
        component: () => import('./views/jsPage/weixin/weixin.vue'),
        meta: { title: 'weixin' },
      }
    ]
  }
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: dynamicRouters
});
