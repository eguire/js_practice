

function calculateVolumeAndArea(length) {
	if (Number.isInteger(length) && !(length <= 0) && !isNaN(length)) {
		return result = `Объем куба: ${Math.pow(length, 3)}, площадь всей поверхности: ${6 * Math.pow(length, 2)}`;
	} else {
		return 'При вычислении произошла ошибка';
	}
}
console.log(calculateVolumeAndArea(5));

function getCoupeNumber(num) {
	if (!isNaN(num) && !(num < 0) && Number.isInteger(num)) {
		if (num !== 0 && !(num > 36)) {
			for (let i = 1; i <= 9; i++) {
				if (num <= i * 4) {
					return i;
				} else {
					continue;
				}
			}
		} else {
			return 'Таких мест в вагоне не существует'
		}
	} else {
		return 'Проверьте правильность введенного номера места'
	}
}

console.log(getCoupeNumber(6))