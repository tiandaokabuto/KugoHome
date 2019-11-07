import Vue from 'vue'
import App from './App.vue'
import '../src/assets/style/reset.scss'
import '../src/assets/style/global.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
