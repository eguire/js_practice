
function fib(num) {
	if (Number.isInteger(num) && num > 0 && !isNaN(num)) {
		let fibarr = [0, 1];
		let result = '';
		if (num === 1) {
			return '0';
		} else if (num === 2) {
			return '0 1';
		} else {
			for (let i = 2; i < num; i++) {
				fibarr[i] = fibarr[i - 1] + fibarr[i - 2];
			}
			for (let j = 0; j < fibarr.length; j++) {
				if (j === 0) {
					result += `${fibarr[j]}`
				} else {
					result += ` ${fibarr[j]}`
				}
			}
		}
		return result
	}
	return ''
}
console.log(fib(7))