import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(require('vue-shortkey'))

library.add(faBasketballBall, faGithub)
Vue.component('font-awesome-icon', require('@fortawesome/vue-fontawesome').FontAwesomeIcon)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
