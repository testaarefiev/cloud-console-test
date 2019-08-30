import Vue from 'vue';
import Router from 'vue-router';
import AddDataPage from '@/pages/AddDataPage';
import LogsPage from '@/pages/LogsPage';
import DataPage from '@/pages/DataPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/addData',
    },
    {
      path: '/addData',
      name: 'adddata',
      component: AddDataPage,
    },
    {
      path: '/logs',
      name: 'logs',
      component: LogsPage,
    },
    {
      path: '/data',
      name: 'data',
      component: DataPage,
    },
  ],
});
