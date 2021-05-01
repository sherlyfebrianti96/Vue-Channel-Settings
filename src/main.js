import { createApp } from 'vue'
import App from './App.vue'
import './index.css';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';
import store from './store'

createApp(App).use(store).mount('#app')
