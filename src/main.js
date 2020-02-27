import Vue from 'vue'
import App from '@/App.vue'
// import App from '@/components/index222.vue'
// import App from '@/components/组件封装的使用.vue'
import router from '@/router/index.js'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
