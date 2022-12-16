import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//数据，相当于data
const state = {
    _defaultMapView: '',       //默认地图view
}

const getters = {
    _getDefaultMapView() {
        return state._defaultMapView
    }
}
//里面定义方法，操作state方发
const mutations = {
    _setDefaultMapView(state, value) {
        state._defaultMapView = value
    }
}
 // 操作异步操作mutation
 const actions = {
    
 }
 const modules = {
   
 }


const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules,
});

export default store;
