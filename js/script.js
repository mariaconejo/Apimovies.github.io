//
// Movies
//

function addMovies(movies) {
  const movieList = document.getElementById('movie-list');
  movieList.innerHTML = '';
  window.scroll(0, 0);

  for (let i = 0; i < movies.length; i += 1) {
    const movieItem = document.createElement('li');
    movieList.appendChild(movieItem);
    fetch(`http://www.omdbapi.com/?apikey=c6fbafc9&i=${movies[i].imdbID}`)
      .then((response) => response.json())
      .then((data) => {
        const content = `
            <div class="wrapper clearfix">
              <button class="acordeon">${movies[i].Title}</button>
              <div class="info">
                <img class="Imagen_1" src="${movies[i].Poster}" alt="${movies[i].Title}">
                <p>${movies[i].Title}</p>
                <p>${movies[i].Year}</p>
                <p>${data.Runtime}</p>
                <p>${data.Metascore}</p>
                <p>${data.Plot}</p>
                <p>${data.Actors}</p>
              </div>
            </div>
            `;
        movieItem.innerHTML = content;

        const acordeon = document.querySelectorAll('.acordeon');
        console.log(acordeon);
        for (let i = 0; i < acordeon.length; i += 1) {
          acordeon[i].addEventListener('click', (event) => {
            event.preventDefault();
            const elemento = event.currentTarget;
            const info = elemento.nextElementSibling;
            if (info.style.display === 'block') {
              info.style.display = 'none';
            } else {
              info.style.display = 'block';
            }
          });
        }
      });
  }
}

const search = document.getElementById('searchform');
search.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchValue = search.elements[0].value;
  console.log(search);
  fetch(`http://www.omdbapi.com/?apikey=c6fbafc9&s=${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
      addMovies(data.Search);
    });
});
