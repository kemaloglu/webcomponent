let movies = [
    {
        title : "The man from earth 1",
        description : `Bir insanin dunyanin baslangicidndan beri var oldugunu dusunun...?`,
        poster : "https://unutulmazfilmler2.com/wp-content/uploads/2016/07/The-Man-from-Earth.jpg",
        isFavourite: true
    },
    {
        title : "The man from earth 2",
        description : `Bir insanin dunyanin baslangicindan beri var oldugunu dusunun...?`,
        poster : "https://unutulmazfilmler2.com/wp-content/uploads/2016/07/The-Man-from-Earth.jpg",
        isFavourite: false

    },
    {
        title : "The man from earth 3",
        description : `Bir insanin dunyanin baslangicidndan beri var oldugunu dusunun...?`,
        poster : "https://unutulmazfilmler2.com/wp-content/uploads/2016/07/The-Man-from-Earth.jpg",
        isFavourite: true

    }
];
//Film Hazirlama
// prepareMovies(movies);
const search_text = document.querySelector(".search_text");

search_text.addEventListener("keydown",(event) => {
    if(event.keyCode == 13){
        searchMovie();
    }
   
});

async function searchMovie(){
   const request = await fetch(`http://www.omdbapi.com/?apikey=51802b97&s=${search_text.value}`);
   const data = await request.json();
    
console.log("data",data);
   let movies = data.Search.map(m => {
    return {
        title : m.Title,
        description : `${m.Year}/${m.Type}`,
        imdbID : m.imdbID,
        poster : m.Poster === 'N/A' ? '/assets/images/default.png' : m.Poster,
        isFavourite : false

    };
   });
    prepareMovies(movies);    

}

function prepareMovies(movies){
    document.querySelector("#movies").innerHTML = '';

    movies.forEach(movie => {
        let movie_card = document.createElement("movie-card"); 
        movie_card.setAttribute("title", movie.title)
        movie_card.setAttribute("poster", movie.poster)
        movie_card.setAttribute("isFavourite", movie.isFavourite)
        movie_card.setAttribute("imdbID", movie.imdbID)
        movie_card.innerHTML = movie.description
        document.querySelector("#movies").append(movie_card);
    });
    

}
