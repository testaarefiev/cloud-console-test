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
      name: 'Home',
      redirect: 'addData',
    },
    {
      path: '/addData',
      name: 'AddData',
      component: AddDataPage,
    },
    {
      path: '/logs',
      name: 'Logs',
      component: LogsPage,
    },
    {
      path: '/data',
      name: 'Data',
      component: DataPage,
    },
  ],
});
