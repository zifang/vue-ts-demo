import Vue from 'vue';
import Router from 'vue-router';
import Layout from './views/layout.vue';

import { RouteConfig } from 'vue-router/types/router';
import jsPageRouter from './router/jsPage-route';

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
  jsPageRouter
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: dynamicRouters
});
