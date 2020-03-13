import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()   //用vue实例当做事件总线

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
