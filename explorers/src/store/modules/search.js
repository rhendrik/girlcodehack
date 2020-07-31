export default {
	state: {
		search_array: [],
		search_results: [],		
		test: "Testing",
	},
	getters: {
		search_array: state => state.search_array,
		search_results: state => state.search_results,
		test: state => state.test,
	}
}
