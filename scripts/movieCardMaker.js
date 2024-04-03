export function createMovieCard(title, posterUrl, year, genre, duration, description) {
    // Create the main list item element
    const movieCard = document.createElement('li');
    movieCard.classList.add('movie-card');

    // Create the movie poster section
    const moviePoster = document.createElement('div');
    moviePoster.classList.add('movie-poster');

    const posterImage = document.createElement('img');
    posterImage.src = posterUrl;
    posterImage.alt = "Movie Poster";
    posterImage.classList.add('movie-poster-image');

    moviePoster.appendChild(posterImage);

    // Create the gradient overlay
    const movieGradient = document.createElement('div');
    movieGradient.classList.add('movie-gradient');

    // Create the movie info section
    const movieInfo = document.createElement('div');
    movieInfo.classList.add('movie-poster', 'movie-info');

    const movieTitle = document.createElement('div');
    movieTitle.classList.add('movie-title');
    movieTitle.innerHTML = `<h3>${title}</h3>`;

    const movieDetails = document.createElement('div');
    movieDetails.classList.add('movie-details');
    movieDetails.innerHTML = `<p>${year}</p>
                            <p>${genre}</p>
                            <p>${duration}</p>`;

    const movieDescription = document.createElement('div');
    movieDescription.classList.add('movie-description');
    movieDescription.innerHTML = `<p>${description}</p>
                                <a href="#">Read More</a>`;

    // Put together the movie info section
    movieInfo.appendChild(movieTitle);
    movieInfo.appendChild(movieDetails);
    movieInfo.appendChild(movieDescription);

    // Put together the complete card.
    movieCard.appendChild(moviePoster);
    movieCard.appendChild(movieGradient);
    movieCard.appendChild(movieInfo);

    return movieCard;
}