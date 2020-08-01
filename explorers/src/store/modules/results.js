export default {
	state: {
		test: "test",
		marshalltown: {
			in: 15,
			per_month_av: 15/12,
			year: [2, 3, 1, 3, 1, 0, 1, 2, 0, 1, 0, 1],
		},
		months: ["September", "October", "November", "December", "January", "February", "March", "April", "May", "June", "July", "August"],
	},
	getters: {
		test: state => state.test,
		marshalltown: state => state.marshalltown,
		months: state => state.months,
	}
}