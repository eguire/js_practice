const personalPlanPeter = {
	name: "Peter",
	age: "29",
	skills: {
		languages: ['ru', 'eng'],
		programmingLangs: {
			js: '20%',
			php: '10%'
		},
		exp: '1 month'
	},
	showAgeAndLangs: function (plan) {
		const { age } = plan;
		const { languages } = plan.skills;
		let str = `Мне ${age} и я владею языками: `;

		languages.forEach(function (lang) {
			str += `${lang.toUpperCase()} `;
		});

		return str;
	}
};

function showExperience(plan) {
	let { exp } = plan.skills;
	return `${exp}`;
}

function showProgrammingLangs(plan) {
	let result = '';
	let langsArr = plan.skills.programmingLangs;
	for (let keys in langsArr) {
		result += `Язык ${keys} изучен на ${langsArr[keys]}\n`
	}
	return result;
}

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
	if (arr.length > 0) {
		let message = 'Семья состоит из:'
		for (let value of arr) {
			message += ` ${value}`;
		}
		return message;
	}
	return 'Семья пуста';
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
	arr.forEach(function(city, num) {
		console.log(`${num + 1} | ${city.toLowerCase()}`)
	});
}