import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import Ionic from "@ionic/vue"
import "@ionic/core/css/core.css"
import "@ionic/core/css/ionic.bundle.css"

window.axios = require('axios');
Vue.config.productionTip = false
Vue.use(Ionic)
const eventBus=new Vue();
export default eventBus;
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
