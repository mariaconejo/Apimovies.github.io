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
        <img src="${movies[i].image}" alt="Foto de ${movies[i].name}" />
      </div>
      <div class="right">
        <h2 class="character-name">${movies[i].name}</h2>
        <p>${movies[i].species}</p>
      </div>
    `;
    listItem.innerHTML = content;
  }
}

function searchMovie(search){
  const buscador = document.getElementById('searchterm');
  buscador.innerHTML = '';
  for (let i = 0; i < movies.length; i += 1){

    const listItem = document.createElement('li');
    movieList.appendChild(listItem);

    const content = `
      <div class="left">
        <img src="${movies[i].image}" alt="Foto de ${movies[i].name}" />
      </div>
      <div class="right">
        <h2 class="character-name">${movies[i].name}</h2>
        <p>${movies[i].species}</p>
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

