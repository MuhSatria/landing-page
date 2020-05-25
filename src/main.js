import Vue from 'vue'
// import App from './App.vue'
import Base from './views/Base.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import 'bootstrap/dist/css/bootstrap.css'
require('bootstrap')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Base)
}).$mount('#app')
