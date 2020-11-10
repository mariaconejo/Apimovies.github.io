//
// Movies
//

function addMovies(movies) {

  const movieList = document.getElementById('movie-list');

  movieList.innerHTML = '';

  window.scroll(0, 0);

  for (let i = 0; i < movies.length; i += 1) {

    const listItem = document.createElement('li');
    movieList.appendChild(listItem);

    const content = `
      <div class="left">
        <img src="${movies[i].poster}" alt="Foto de ${movies[i].title}" />
      </div>
      <div class="right">
        <h2 class="movie-name">${movies[i].title}</h2>
        <p>${movies[i].year}</p>
      </div>
    `;
    listItem.innerHTML = content;
  }
}

function searchMovie(search){
  const buscador = document.getElementById('searchterm');
  buscador.innerHTML = '';
  for (let i = 0; i < search.length; i += 1){

    const listItem = document.createElement('li');
    buscador.appendChild(listItem);

    const content = `
      <div class="left">
        <img src="${search[i].poster}" alt="Foto de ${search[i].title}" />
      </div>
      <div class="right">
        <h2 class="movie-name">${search[i].title}</h2>
        <p>${search[i].year}</p>
      </div>
    `;
    listItem.innerHTML = content;

  }



}

// Conexión al API usando fetch buscador
fetch('http://www.omdbapi.com/?apikey=c6fbafc9&s=hola')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Add characters to list.
    addMovies(data.results);
  });


// Conexión al API usando fetch buscador
fetch('http://www.omdbapi.com/?apikey=c6fbafc9&i=tt0113312')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Add characters to list.
    searchMovie(data.results);
  });

