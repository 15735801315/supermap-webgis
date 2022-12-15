import Vue from 'vue'
import Router from 'vue-router'
import DataVisval from '../components/pages/DataView'
import OneMap from '../components/pages/OneMap';

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        component: DataVisval
    },
    {
        path: '/onemap',
        component: OneMap
    },
],
mode: 'history'
})
