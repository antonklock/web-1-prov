const movieList = document.getElementById('movie-list');

import { movies } from './movies.js';
import { createMovieItem } from './movieCardMaker.js';

movies.forEach(movie => {
    const movieItem = createMovieItem(
        movie.titleText.text,
        movie.primaryImage.url,
        movie.releaseYear.year,
        movie.genre,
        movie.duration,
        movie.description.plainText
    );

    movieList.appendChild(movieItem);
});