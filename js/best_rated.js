// This file manages the function and script required to display informations of the best movies in IMDB rated

// API url
const rated_url = "http://localhost:8000/api/v1/"

// GET /api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains= HTTP/1.1" 200 24341

// Initialize API request url
let best_movies_page_url = `${url}titles/?format=json&sort_by=-imdb_score&sort_by=-year`

getBestMoviesList(best_movies_page_url);

// This function retrieves the list of best movies based on the API request url.

let best_rated_movies = []

function getBestMoviesList(url) {
    best_movies_next_url = fetchAndDecode(url);
    best_movies_next_url.then(value =>
        console.log(value.next)
    )
}