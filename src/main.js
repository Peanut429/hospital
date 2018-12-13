import Vue from 'vue'
import router from './router'
import './cube-ui'
import App from './App.vue'
import 'fonts/iconfont.css'
import 'stylus/index.styl'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
