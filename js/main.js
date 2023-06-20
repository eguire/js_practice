const funds = [
	{amount: -1400},
	{amount: 2400},
	{amount: -1000},
	{amount: 500},
	{amount: 10400},
	{amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
	return data
	.filter(item => Object.values(item) > 0)
	.map(item => item.amount)
	.reduce((sum, amount) => sum + amount);
};

const getTotalIncomeAmount = (data) => {
	if (data.some(item => Object.values(item) < 0)) {
		return data.map(item => item.amount).reduce((sum, amount) => sum + amount);
	} else {
		getPositiveIncomeAmount(data);
	}
};

console.log(getTotalIncomeAmount(funds));

