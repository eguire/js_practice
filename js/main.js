const numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один из порследних фильмов?', ''),
			b = prompt('На скок оцените?', ''),
			c = prompt('Один из порследних фильмов?', ''),
			d = prompt('На скок оцените?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);