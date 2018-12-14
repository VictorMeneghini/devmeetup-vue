import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import theme from './theme'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify,{ theme })

new Vue({
  el: '#app',
  render: h => h(App)
})
