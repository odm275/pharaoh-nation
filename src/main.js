import Vue from 'vue';
import VueWaypoint from 'vue-waypoint';
import App from './App.vue';
import router from './router';
import store from './store';

import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css'; //Vuesax styles

Vue.config.productionTip = false;

// Waypoint plugin
Vue.use(VueWaypoint);
Vue.use(Vuesax);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
