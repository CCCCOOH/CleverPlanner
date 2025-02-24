import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'

// 完整引入ElementUI
// import ElementUI from 'element-ui'

import './plugins/element.js'


Vue.config.productionTip = false
App.mpType = 'app'

// 完整引入ElementUI
// Vue.use(ElementUI)

const app = new Vue({
  ...App,
  beforeCreate() {
	  Vue.prototype.$bus = this
  }
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif