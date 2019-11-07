import Vue from 'vue'
import App from './App.vue'
import '../src/assets/style/reset.scss'
import '../src/assets/style/global.scss'
import Animate from 'animate.css'

Vue.config.productionTip = false
Vue.use(Animate)
new Vue({
  render: h => h(App)
}).$mount('#app')
