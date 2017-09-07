import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import store from './store/index'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/css/app.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

var bus = new Vue();
