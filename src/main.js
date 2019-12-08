import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueMeta from 'vue-meta'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(VueMeta)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')