// Just stream it 
// This file manages the function and script required to display informations to the cards_container.

// Definition of variables
let categories_list = ["", "animation", "action", "adventure"]
let categories_urls = get_categories_urls(categories_list)


// This function returns transform categories_list into a list of categories_urls

function get_categories_urls(categories_list) {
    let urls = [];
    for (category of categories_list) {
        urls.push(`http://localhost:8000/api/v1/titles/?format=json&genre=${category}&sort_by=-imdb_score&lang_contains=English&page_size=7`)
    }
    return urls
}

// Iterate through categories_list to retrieve movie data and display movie datas
for (let i=0; i<=3; i++) {
    let category_url = categories_urls[i];
    let category_page = fetchAndDecode(category_url);

    category_page.then(datas => {
        let movies_urls = [];
        for (movie of datas.results) {
            movies_urls.push(movie.url);
        };
        getMovies(movies_urls, i);
    })
}

// This function is used to retrieve info form movies and calls displayMovieCat
function getMovies(movies_urls, i) {
    movies_promises = [];
    for (movie_url of movies_urls) {
        movies_promises.push(fetchAndDecode(movie_url))
    };
    Promise.all(movies_promises).then(movies => {
        displayMovies(movies, i)
    });
};

// This function si used to display movie data to the user
function displayMovies(movies, i) {
    for (movie of movies) {
        let html = `
        <div class="card">
            <img src="${movie.image_url}" alt="" class="card_img" id="${movie.id}">
        </div>
        `
        document.getElementById(`container${i}`).innerHTML += html
    }
};