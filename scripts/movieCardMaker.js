export function createMovieItem(title, posterUrl, year, genre, duration, description) {
    const movieItem = document.createElement('li');
    movieItem.classList.add('movie-item');

    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    const moviePoster = document.createElement('div');
    moviePoster.classList.add('movie-poster');

    const posterImage = document.createElement('img');
    posterImage.src = posterUrl;
    posterImage.alt = "Movie Poster";
    posterImage.classList.add('movie-poster-image');

    const movieInfo = document.createElement('div');
    movieInfo.classList.add('movie-poster', 'movie-info');

    const movieGradient = document.createElement('div');
    movieGradient.classList.add('movie-gradient');

    const movieTitle = document.createElement('div');
    movieTitle.classList.add('movie-title');
    movieTitle.innerHTML = `<h3>${title}</h3>`;


    const movieDetailsContainer = document.createElement('div');
    movieDetailsContainer.classList.add('movie-details-container');

    movieDetailsContainer.innerHTML = `<p>${year} | ${duration}</p>
                                        <p>${genre}</p>`;

    const movieDetails = document.createElement('div');
    movieDetails.classList.add('movie-details');


    const movieDescription = document.createElement('div');
    movieDescription.classList.add('movie-description');
    movieDescription.innerHTML = `<p>${description}</p>`;

    const movieBack = document.createElement('div');
    const movieBackPoster = document.createElement('div');
    movieBackPoster.classList.add('movie-poster', 'movie-back-poster');

    const backPosterImage = document.createElement('img');
    backPosterImage.src = posterUrl;
    backPosterImage.alt = "Movie Poster";
    backPosterImage.classList.add('movie-poster-image');

    movieBack.classList.add('movie-back');
    movieBack.classList.add('hidden');

    const movieBackGradient = document.createElement('div');
    movieBackGradient.classList.add('movie-back-gradient');

    const movieFront = document.createElement('div');
    movieFront.classList.add('movie-front');

    movieItem.appendChild(movieCard);
    moviePoster.appendChild(posterImage);
    movieCard.appendChild(movieFront);
    movieInfo.appendChild(movieTitle);

    movieFront.appendChild(moviePoster);
    movieFront.appendChild(movieGradient);
    movieFront.appendChild(movieInfo);

    movieBackPoster.appendChild(backPosterImage);

    movieDetails.appendChild(movieDetailsContainer);
    movieDetails.appendChild(movieDescription);

    movieBack.appendChild(movieDetails);
    movieBack.appendChild(movieBackPoster);
    movieBack.appendChild(movieBackGradient);

    movieCard.appendChild(movieBack);

    movieCard.addEventListener('click', () => {

        const flipped = movieCard.classList.contains('flipped');

        if (flipped) {
            movieCard.classList.remove('flipped');
            movieFront.classList.remove('hidden');
            movieBack.classList.add('hidden');
        } else {
            const allCards = document.querySelectorAll('.movie-card');
            allCards.forEach(card => {
                resetCard(card);
            });

            movieCard.classList.add('flipped');
            movieFront.classList.add('hidden');
            movieBack.classList.remove('hidden');
        }
    });

    return movieItem;
}

function resetCard(card) {
    card.classList.remove('flipped');
    card.querySelector('.movie-front').classList.remove('hidden');
    card.querySelector('.movie-back').classList.add('hidden');
}