// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vuesax/dist/vuesax.css';
import Vue from 'vue';
import Vuesax from 'vuesax';
import App from './App';
import router from './router';

Vue.use(Vuesax);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
