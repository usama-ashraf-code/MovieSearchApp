const API_Key = "41a296a001f8b5e82515c743a4babc8c";
// Popular Movies URL
const API_Url = "https://api.themoviedb.org/3/movie/popular?api_key=";
// Image Path
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
// Search URL
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_Key}&query=`;

//  For Getting Popular movies
const url = `${API_Url}` + `${API_Key}`

// Variable declaration

const img = document.querySelector(".movie-card img");
const container = document.querySelector('.movies-container')
const search = document.querySelector('.search-box input');

// Functions
const GetMovies = async (URL) => {
  const response = await fetch(URL);
  const data = await response.json();

  showMovies(data.results);
};

GetMovies(url);

const showMovies = async (data) => {
    container.innerHTML = ""
  data.forEach((item) => {  
    const Poster_path = item.poster_path;
    const title = item.title;
    const average = item.vote_average.toFixed(1)
    const releaseDate = item.release_date.split("-")[0];
    const box = document.createElement("div");
    box.classList.add("movie-card");
    box.innerHTML = `<img src="${IMAGE_URL}${Poster_path}" alt="Movie Poster">
                <div class="movie-info">
                    <h3>${title}</h3>

                    <div class="details">
                        <span>⭐ ${average}</span>
                        <span>${releaseDate}</span>
                    </div>
                </div>
        `;
    container.appendChild(box)
  });
};


search.addEventListener('keyup', (event)=>{
    if(event.target.value != ""){
        GetMovies(`${SEARCH_URL}` + event.target.value.trim());
    } else {
        GetMovies(url)
    }
    

})


