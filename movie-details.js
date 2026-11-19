const movieDetail = document.querySelector("#movie-detail");
const params = new URLSearchParams(location.search)
const  imdbID = params.get("id")?.trim()

if(imdbID){
    searchMovie( imdbID.trim())
}


async function searchMovie(imdbID) {

    

    let response = await fetch(`http://www.omdbapi.com/?apikey=9bc7265d&i=${imdbID}&plot=full`);
    let data = await response.json();
    console.log(data);
    

    if (data.Response === "True "|| data.Response === "True") {
            displayMovie(data);

    } else {
     console.log(data.error)
    }
}


// function displayMovie (data){
//    movieDetail.innerHTML = ` <div>
//    <img src="${posterImg}" alt="${data.Title}">
//             <h2>${data.Title}</h2>
//             <section>
//                 <p>${data.Released}</p>
//                 <p>${data.Rated}</p>
//                 <p>${data.Runtime}</p>
//                 <p>${data.Genre}</p>
//                 <p>${data.imdbRating}/10</p>
                
//             </section>
//             <div>
//                 <p>Plot Overview</p>
//                 <p>${data.Plot}</p>
//             </div>
//             <div>
// <section>
//     <p>Director</p>
//     <p>${data.Director}</p>
// </section>
// <section>
//     <p>Writer</p>
//     <p>${data.Writer}</p>
// </section>
//             </div>
//           <div>
//             <p>Actors</p>
//              <p>${data.Actors}</p>
//           </div>  
//            <div>
// <section>
//     <p>Language</p>
//     <p>${data.Language}</p>
// </section>
// <section>
//     <p>Country</p>
//     <p>${data.Country}</p>
// </section>
//             </div>
//         </div>`
// }
 

function displayMovie(data) {
    const posterImg = data.Poster && data.Poster !== "N/A"
        ? data.Poster
        : "https://via.placeholder.com/300x450?text=No+Poster";

    movieDetail.innerHTML = `
        <div>
            <img src="${posterImg}" alt="${data.Title}">
            <h2>${data.Title}</h2>
            <section>
                <p>${data.Released}</p>
                <p>${data.Rated}</p>
                <p>${data.Runtime}</p>
                <p>${data.Genre}</p>
                <p>${data.imdbRating}/10</p>
            </section>
            <div>
                <p>Plot Overview</p>
                <p>${data.Plot}</p>
            </div>
            <section>
                <p>Director</p>
                <p>${data.Director}</p>
            </section>
            <section>
                <p>Writer</p>
                <p>${data.Writer}</p>
            </section>
            <div>
                <p>Actors</p>
                <p>${data.Actors}</p>
            </div>
            <section>
                <p>Language</p>
                <p>${data.Language}</p>
            </section>
            <section>
                <p>Country</p>
                <p>${data.Country}</p>
            </section>
        </div>
        <button>
        <a href=https://www.imdb.com/title/${data.imdbID} target="_blank">View on IMDb</a>
        </button>
        </div>

    `;
}