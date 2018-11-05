// styles import
import Vuesax from 'vuesax';
import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css';

import Vue from 'vue';
import VueWaypoint from 'vue-waypoint';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuesax);

// Waypoint plugin
Vue.use(VueWaypoint);
Vue.use(Vuesax);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
