import Vue from 'vue'
import App from './App.vue'
import Swiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
Vue.use(Swiper)

new Vue({
  render: h => h(App)
}).$mount('#app')
