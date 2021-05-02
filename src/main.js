import Vue from 'vue'
import App from './App.vue'
import './index.css';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';
import {store} from "@/store";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app');
