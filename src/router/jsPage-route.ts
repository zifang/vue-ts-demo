import Layout from '@/views/layout.vue';

const jsPageRouter = {
    path: '/jsPage',
    name: 'jsPage',
    component: Layout,
    meta: { title: 'jsPage' },
    children: [
        {
            path: '/es6',
            name: 'es6',
            component: () => import('@/views/jsPage/es6/es6.vue'),
            meta: { title: 'es6' },
            children: [
                {
                    path: '/subes6-1',
                    name: 'subes6-1',
                    component: () => import('@/views/jsPage/es6/es6.vue'),
                    meta: { title: 'subes6-1' },
                },
                {
                    path: '/subes6-2',
                    name: 'subes6-2',
                    component: () => import('@/views/jsPage/es6/es6.vue'),
                    meta: { title: 'subes6-2' },
                }
            ]
        },
        {
            path: '/weixin',
            name: 'weixin',
            component: () => import('@/views/jsPage/weixin/weixin.vue'),
            meta: { title: 'weixin' },
        }
    ]
};


export default jsPageRouter;
