import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(require('vue-shortkey'))

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
