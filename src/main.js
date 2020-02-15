import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './utils/filter'

Vue.config.productionTip = false;

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
