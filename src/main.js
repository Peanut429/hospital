import Vue from 'vue'
import router from './router'
import fastClick from 'fastclick'
import './cube-ui'
import App from './App.vue'
import 'fonts/iconfont.css'
import 'stylus/index.styl'

Vue.config.productionTip = false

fastClick.attach(document.body)

router.beforeEach((to, from, next) => {
  next()
})
router.afterEach((to, from) => {
  document.title = to.meta.title
  window.scrollTo(0, 0)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
