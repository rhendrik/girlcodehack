export default {
	state: {
		search_array: [],
		search_results: [],		
		test: "Testing",
		cities: ["Johannesburg", "Tshwane", "Polokwane", "Nelspruit"],
		suburbs: {
			"Johannesburg":["Marshalltown", "Blairgowrie", "Braamfontein"], "Centurion":["Die Hoewes", "Valhalla"], "Nelspruit":["whiteriver", "Hazyview"]
		},
		city_found: '',
	},
	mutations: {
		set_city(state, payload) {
			state.city_found = payload
		}
	},
	getters: {
		search_array: state => state.search_array,
		search_results: state => state.search_results,
		test: state => state.test,
		cities: state => state.cities,
		suburbs: state => state.suburbs,
		city_found: state => state.city_found,
	}
}
