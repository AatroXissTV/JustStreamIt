// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("callModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Modal for card sliders
function onClick(element) {
  id = element.id
  let movie_url = `${url}titles/${id}`
  getMovieData(movie_url)
  document.getElementById("modal").style.display = "block";
}

function getMovieData(url) {
  movie_data = fetchAndDecode(url);
  movie_data.then(movie => {
    displayMovieModal(movie);
  });
}

function displayMovieModal(movie) {
  let modal_title = document.getElementById("modal_title")
  let modal_img = document.getElementById("modal_img")
  let modal_infos = document.getElementById("modal_infos")
  let modal_infos_2 = document.getElementById("modal_infos_2")
  let modal_rating = document.getElementById("modal_rating")
  let modal_description = document.getElementById("modal_description")
  let modal_director = document.getElementById("modal_director")
  let modal_actors = document.getElementById("modal_actors")

  convertedDuration = getMovieDuration(movie.duration)
  checkedBoxOffice = checkBoxOffice(movie.worldwide_gross_income)

  modal_title.innerHTML = movie.original_title;
  modal_img.src = movie.image_url;
  modal_infos.innerHTML = `Genres: ${movie.genres} - Date Published: ${movie.date_published} - ${convertedDuration}`
  modal_infos_2.innerHTML = `Countries: ${movie.countries} - Box office result: ${checkedBoxOffice}`
  modal_rating.innerHTML = `Average rating: ${movie.avg_vote} - IMDB score: ${movie.imdb_score}`
  modal_description.innerHTML = `${movie.long_description}`
  modal_director.innerHTML = `Directed by: ${movie.directors}`
  modal_actors.innerHTML = `All actors: ${movie.actors}`
}

function getMovieDuration(duration) {
  let hour = parseInt(duration/60)
    let minute = duration - (hour*60)
    convertedDuration = `${hour}h${minute}m`
  return convertedDuration
}

function checkBoxOffice(results) {
  if (results == null) {
    checkedBoxOffice = `no results found`
  }
  else {
    checkedBoxOffice = results
  }
  return checkedBoxOffice
}