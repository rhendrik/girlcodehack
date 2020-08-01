export default {
	state: {
		test: "test",
		marshalltown: {
			in: 15,
			per_month_av: 15/12,
			year: {"September":2, "October":3, "November":1, "December":3, "January":1, "February":0, "March":1, "April":2, "May":0, "June":1, "July":0, "August":1}
		},
	},
	getters: {
		test: state => state.test,
		marshalltown: state => state.marshalltown,
	}
}