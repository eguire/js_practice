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

// function showExperience(plan) {
// 	let { exp } = plan.skills;
// 	return `${exp}`;
// }

// function showProgrammingLangs(plan) {
// 	let result = '';
// 	let langsArr = plan.skills.programmingLangs;
// 	for (let keys in langsArr) {
// 		result += `Язык ${keys} изучен на ${langsArr[keys]}\n`
// 	}
// 	return result;
// }