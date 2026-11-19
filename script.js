const MovieForm = document.querySelector("#MovieForm");
const movieInput = document.querySelector("#movieInput");
const movieHub = document.querySelector("#movieHub");

MovieForm.addEventListener("click", (e) => {
    e.preventDefault();
    let query = movieInput.value.trim()

    if (!query) {
        return
    }
    console.log(query); 
    searchMovies(query)
});

async function searchMovies(movieName) {
    movieHub.innerHTML = `<p>Searching Movie...</p>`;
    

    let response = await fetch(`http://www.omdbapi.com/?apikey=9bc7265d&s=${movieName}`);
    let data = await response.json();
    console.log(data);
    

    if (data.Response === "True "|| data.Response === "True") {
        displayMovies(data.Search);
    } else {
        movieHub.innerHTML = `<p>${data.Error || "No movies found!"}</p>`;
    }
}

function displayMovies(movies){
    movieHub.innerHTML = "";
    movies.forEach((movie) => {
        
const div = document.createElement("div")
div.dataset.imdbID = movie.imdbID
div.setAttribute("class", "movie-card")

div.innerHTML = `
            <div>
                <img src="${movie.Poster}" alt="">
            </div>
            <div>
                <p>${movie.Title}</p>
                <p>${movie.Year}</p>
            </div>
        `;

        

        movieHub.append(div);
    });
}

movieHub.addEventListener("click", (e) =>  {
    e.stopPropagation()
    const movieCard =e.target.closest(".movie-card")
    const imdbID = movieCard.dataset.imdbID
    location.href = `movie-details.html?id=${imdbID}`
})