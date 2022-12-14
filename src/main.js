// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueiClient from '@supermap/vue-iclient-mapboxgl'
import 'element-ui/lib/theme-chalk/index.css'

let theme = {
  textColor: '#eee',
  background: 'rgba(0,0,0,0)',
  colorGroup: ['#3fb1e3', '#6be6c1', '#626c91', '#a0a7e6', '#c4ebad']
};


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueiClient)
VueiClient.setTheme({ theme })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
