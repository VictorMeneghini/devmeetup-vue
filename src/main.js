import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import theme from './theme'
import router from './router';
import {store} from './store';

import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify,{ theme });

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
