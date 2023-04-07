const someString = 'This is some strange string';

function reverse(str) {
	if (typeof(str) === 'string') {
		const strArray = str.split('');

		strArray.reverse();

		return strArray.join('');
	}
	return 'Ошибка!';
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const allCurrencies = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
	if (arr.length !== 0) {
		let result = 'Доступные валюты:\n';
		for (let value of arr) {
			if (value === missingCurr) {
				continue;
			} else {
				result += `${value}\n`;
			}
		}
		return result;
	}
	return 'Нет доступных валют';
}