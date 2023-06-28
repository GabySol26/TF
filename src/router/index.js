import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

        {
            path: '/',
            component: ()=>import('../views/sing-in.vue'),
        },
        {
            path: '/inventory',
            name: 'inventory',
            component:()=>import('../views/Inventory.vue'),

        },
        {
            path: '/providers',
            name: 'providers',
            component: ()=>import('../views/Providers.vue'),
        }
        ,
        {
            path: '/supply',
            name: 'supply',
            component: ()=>import('../views/Supply.vue'),
        },
        {
            path: '/reports',
            name: 'reports',
            component: ()=>import('../views/Reports.vue'),
        },
        {
            path: '/sales',
            name: 'sales',
            component: ()=>import('../views/Sales.vue'),
        },
        {
            path: '/notification',
            name: 'notification',
            component: ()=>import('../views/Notification.vue'),
        },
        {
            path: '/configuration',
            name: 'configuration',
            component: ()=>import('../views/Configuration.vue'),
        }
    ]
})

export default router