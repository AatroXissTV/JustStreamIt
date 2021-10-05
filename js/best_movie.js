// This file manages the function and script required to display informations of the best movie in IMDB database

// API url
const url = "http://localhost:8000/api/v1/"

// GET /api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains= HTTP/1.1" 200 24341

// Initialize API request url
let best_movies_url = `${url}titles/?format=json&sort_by=-imdb_score`

getBestMoviesList(best_movies_url);

// This function retrieves the list of best movies based on the API request url.

function getBestMoviesList(url) {
    best_movies_page = fetchAndDecode(url);
    best_movies_page.then(value => {
        getBestMovieData(value.results[0].url);
    });
}

// This function retrieves the best movie parameters from the best movie API url.

function getBestMovieData(url) {
    best_movie_data = fetchAndDecode(url);
    best_movie_data.then(movie => {
        console.log(movie);
        displayBestMovie(movie);
    });
}


// This function updates the DOM to display the best movie parameters in the container .highlight of the HTML file.
// Once all the data are loaded, the block is displayed to the screen.

function displayBestMovie(movie) {
    let movie_title = document.getElementById("movie_title")
    let movie_description = document.getElementById("movie_description")

    movie_title.innerHTML = movie.title
    movie_description.innerHTML = movie.long_description
}