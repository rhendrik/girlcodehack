import Vue from 'vue'
import Vuex from 'vuex'
import search from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		signOn: null,
	},
	getters: {
		signOn(state) {
			return state.signOn
		},
	},
	mutations: {
		setSignOn(state, payload) {
			state.signOn = payload
		},
	},
	actions: {
		setSignOn(ctx, payload) {
			ctx.commit('setSignOn',payload)
		},
	},
   modules: {
			search: {
				namespaced: true,
				...search,
			},
		},
})