import { moviesList } from "./movies.js";

const moviesDiv = document.querySelector('.movies');
const moreDetailsBtn = document.querySelector('.more-details-btn button');
const moreDetailsSec = document.querySelector('.more-details-sec');
const movieDetailsSection = document.querySelector('.details-sec');

function generateMovies() {
    moviesList.forEach((movie) => {
        moviesDiv.insertAdjacentHTML('beforeend', 
            `
            <div class="movie-${movie.id} movie-id" data-id="${movie.id}">

                <div class="movie-${movie.id}-img">
                    <img src="./assets/${movie.img}.png">
                </div>
    
                <div class="movie-${movie.id}-name">
                    <p>${movie.name}</p>
                </div>
    
                <div class="movie-${movie.id}-rating">
                    <i class="fa-solid fa-star"></i>
                    <p>${movie.rating}</p>
                </div>
    
            </div>
            `
        )
    });
}

generateMovies();

moviesDiv.addEventListener('click', (e) => {
    const movieElement = e.target.closest('.movie-id');
    if(movieElement) {
        const movieId = e.target.closest('.movie-id').getAttribute('data-id');
        const selectedMovie = moviesList.find((movie) => movie.id == movieId);
        moreDetailsSec.classList.add('activeMoreDetails');
        
        displayMovieData(selectedMovie);
    }
})

function displayMovieData(movie) {
    movieDetailsSection.innerHTML = '';
    movieDetailsSection.insertAdjacentHTML('afterbegin',
        `
            <div class="details-main">

                <div class="details-movie-img">
                    <img src="./assets/${movie.img}.png">
                </div>

                <div class="details-movie-info">

                    <h1>${movie.name}</h1>

                    <div class="other-info">
                        <p class="info-rating-point">${movie.rating}/10 </p>
                        <p class="info-runtime">• ${movie.runtime}</p>
                        <p class="info-genre">• ${movie.genre}</p>
                        <p class="info-release-date">• ${movie.release}</p>
                    </div>

                    <div class="info-language">
                        <p>Original Language - ${movie.language}</p>
                    </div>

                    <div class="info-movie-synopsis">
                        <span>${movie.summary}</span>
                    </div>

                </div>

            </div>

            <a href="./movieSessions.html">
                <button class="details-book-ticket">Book Ticket</i></button>
            </a>
            
        `
    );    
}

moreDetailsBtn.addEventListener('click', () => {
    moreDetailsSec.classList.add('activeMoreDetails');
    
    standAloneMovieDiv(
        {
            id: 1,
            name: "Mufasa: The Lion King",
            img: "mufasa-lion-king-mobile",
            rating: "6.7",
            runtime: "1h 58m",
            genre: "Adventure, Animation, Drama",
            release: "20 Dec, 2024",
            language: "English",
            summary: '"Mufasa: The Lion King" enlists Rafiki to relay the legend of the unlikely rise of the beloved king of the Pride Lands, introducing an orphaned cub called Mufasa, a sympathetic lion named Taka - the heir to a royal bloodline - and their expansive journey alongside an extraordinary group of misfits.'
        }
    );
});

function standAloneMovieDiv(movie) {
    movieDetailsSection.innerHTML = '';
    movieDetailsSection.insertAdjacentHTML('afterbegin',
        `
            <div class="details-main">

                <div class="details-movie-img">
                    <img src="./assets/${movie.img}.png">
                </div>

                <div class="details-movie-info">

                    <h1>${movie.name}</h1>

                    <div class="other-info">
                        <p class="info-rating-point">${movie.rating}/10 </p>
                        <p class="info-runtime">• ${movie.runtime}</p>
                        <p class="info-genre">• ${movie.genre}</p>
                        <p class="info-release-date">• ${movie.release}</p>
                    </div>

                    <div class="info-language">
                        <p>Original Language - ${movie.language}</p>
                    </div>

                    <div class="info-movie-synopsis">
                        <span>${movie.summary}</span>
                    </div>

                </div>

            </div>

            <a href="./movieSessions.html">
                <button class="details-book-ticket">Book Ticket</i></button>
            </a>
        `
    );
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-sec-btn') || e.target.closest('.close-sec-btn')) {
        moreDetailsSec.classList.remove('activeMoreDetails');
    }
});