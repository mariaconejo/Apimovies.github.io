//
// Movies
//

function addMovies(movies) {
  const movieList = document.getElementById('movie-list');

  for (let i = 0; i < movies.length; i += 1) {
    const movieItem = document.createElement('li');
    movieList.appendChild(movieItem);

    const content = `
      <div class="left">
        <img src="${movies[i].Poster}" alt="Foto de ${movies[i].Title}"/>
      </div>
      <div class="right">
        <h2 class="character-name">${movies[i].Title}</h2>
        <p>${movies[i].Year}</p>
        <p>${movies[i].imdbID}</p>
      </div>
    `;
    movieItem.innerHTML = content;
  }
}

fetch('http://www.omdbapi.com/?apikey=c6fbafc9&s=anime')
  .then((response) => response.json())
  .then((data) => {
    addMovies(data.Search);
  });

fetch('http://www.omdbapi.com/?apikey=c6fbafc9&i=tt0829442')
  .then((response) => response.json())
  .then((data) => {
    addMovies(data.imdbID);
    console.log(data);
  });
