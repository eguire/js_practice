const shoppingMallData = {
	shops: [
		{
			width: 10,
			length: 5
		},
		{
			width: 15,
			length: 7
		},
		{
			width: 20,
			length: 5
		},
		{
			width: 8,
			length: 10
		}
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 50000
}

function isBudgetEnough(data) {

	const shopSquareArr = [];

	data.shops.forEach((shop, num) => {
		shopSquareArr[num] = shop.width * shop.length;
	});

	const totalSquare = shopSquareArr.reduce(function(a, b) {
		return a + b;
	});

	const totalVolume = totalSquare * data.height;

	const totalCost = totalVolume * data.moneyPer1m3;

	if (totalCost < data.budget) {
		return 'Бюджета достаточно';
	}
	return 'Бюджета недостаточно'
}