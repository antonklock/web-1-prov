const movieList = document.getElementById('movie-list');

import { movies } from './movies.js';
import { createMovieCard } from './movieCardMaker.js';

movies.forEach(movie => {
    const movieCard = createMovieCard(
        movie.titleText.text,
        movie.primaryImage.url,
        movie.releaseYear.year,
        movie.genre,
        movie.duration,
        movie.description.plainText
    );

    movieList.appendChild(movieCard);
});