import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		city:'广州',
		city0:'北京'
	},
	mutations:{
		change(state,city){
			state.city=city
		},
		change0(state,city0){
			state.city0=city0
		}
	}
})
