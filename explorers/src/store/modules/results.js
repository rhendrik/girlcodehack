export default {
	state: {
		test: "test",
		marshalltown: {
			name: "Marshalltown",
			in: 15,
			per_month_av: 15/12,
			year: [2, 3, 1, 3, 1, 0, 1, 2, 0, 1, 0, 1],
			months: ["September", "October", "November", "December", "January", "February", "March", "April", "May", "June", "July", "August"],
		},
		month_from: 0,
		month_to: 0,
	},
	mutations: {
		mut_from(state, payload) {
			state.month_from = payload
		},
		mut_to(state, payload) {
			state.month_to = payload
		}
	},
	getters: {
		test: state => state.test,
		marshalltown: state => state.marshalltown,
		months: state => state.months,
		month_to: state => state.month_to,
		month_from: state => state.month_from,
	}
}