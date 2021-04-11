import { createRouter, createWebHashHistory } from 'vue-router';
// import Home from '../views/Home.vue';

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth/index.vue')
  },
  {
    path: '/',
    name: 'BasicLayout',
    component: () => import(/* webpackChunkName: "BasicLayout" */ '../layout/BasicLayout/index.vue'), 
    children:[{
      path: 'goods',
    name: 'Goods',
    component: () => import(/* webpackChunkName: "Goods" */ '../views/Goods/index.vue')
  
    },
    {
      path: 'users',
    name: 'User',
    component: () => import(/* webpackChunkName: "User" */ '../views/Users/index.vue')
  
    }]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
