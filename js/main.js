const films = [
	{
			name: 'Titanic',
			rating: 9
	},
	{
			name: 'Die hard 5',
			rating: 5
	},
	{
			name: 'Matrix',
			rating: 8
	},
	{
			name: 'Some bad film',
			rating: 4
	}
];

function showGoodFilms(arr) {
	return arr.filter(item => item.rating >= 8);
}

function showListOfFilms(arr) {
	return arr.map(item => item.name).reduce((string, name) => `${string}, ${name}`);
}

function setFilmsIds(arr) {
	return arr.map((item, index) => Object.assign(item, {id: index}));
};

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
	return arr.every(item => Object.keys(item)[2] === 'id');
}