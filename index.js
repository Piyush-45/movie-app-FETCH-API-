const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9828ffcfd5d1ba3ad9b2754164a91e49&page=1'

const IMGPATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?api_key=9828ffcfd5d1ba3ad9b2754164a91e49&language=en-US&page=1&include_adult=false'


const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// initially get fav movies


async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

  
showMovies(respData.results)

}
getMovies(APIURL);


function showMovies(movies){
    // clear main

    main.innerHTML = ""

    movies.forEach((movie)=>{
        const{poster_path, title, overview,vote_average} = movie;

        const movieEl = document.createElement("div")

        movieEl.classList.add("card_bg")

        movieEl.innerHTML = `
        
        <img src="${IMGPATH + poster_path}" class="w-80" alt="${title}">
        <div class="card_details">
            <h3 class="p1 ">${title}</h3>
            <span class="bg-heading">${vote_average}</span>           
        </div>
        
    <div class="overview"><h3>overview :${overview}</h3></div>
        
        `;
        main.appendChild(movieEl)
    })


}

