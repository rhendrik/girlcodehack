import Vue from 'vue'
import Vuex from 'vuex'
import search from './modules/search'
import results from './modules/results'
import stats from './modules/stats'
import searchPlugin from 'vuex-search';

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		signOn: null,
	},
	plugins: [
    searchPlugin({
      resources: {
        contacts: {
          // what fields to index
          index: ['cities'],
          // access the state to be watched by Vuex Search
          getter: state => state.search,
          // how resource should be watched
          watch: { delay: 500 },
        },
        // otherResource: { index, getter, watch, searchApi },
      },
    }),
  ],
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
			results: {
				namespaced: true,
				...results,
			},
			stats: {
				namespaced: true,
				...stats,
			}
		},
})