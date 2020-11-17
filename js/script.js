//
// Movies
//
// funcion que  crea una lista de peliculas
function addCartelera(movies) {
  // llamar por el id al ul
  const movieList = document.getElementById('movie-list');
  // Borra la lista anterior
  movieList.innerHTML = '';
  // Sube el scroll de la página cuando se carga más pelis
  window.scroll(0, 0);

  // for que crea los li con la información
  for (let i = 0; i < movies.length; i += 1) {
    const movieItem = document.createElement('li');
    movieList.appendChild(movieItem);
    // fetch que llama los datos de actores,runtime,metascore y plot con el id de la pelicula
    fetch(`http://www.omdbapi.com/?apikey=c6fbafc9&i=${movies[i].imdbID}`)
      .then((response) => response.json())
      .then((data) => {
        // codigo de html con el js donde se llama los datos con el id
        const content = `
            <!--Acordion-->
            <div class="wrapper clearfix">
              <button class="acordeon">${data.Title}</button>
              <div class="info">
                <img class="Imagen_1" src="${data.Poster}" alt="${data.Title}">
                <div class="detalles">
                  <p>Año:   ${data.Year}</p>
                  <p>Actores: ${data.Actors}</p>
                  <p>Duración: ${data.Runtime}</p>
                  <p>Metascore: ${data.Metascore}</p>
                  <p>Trama: ${data.Plot}</p>
                </div>
                  <!--Tooltip-->
                <div class="tooltip">Más información:
                  <span class="tooltiptext">Genero: ${data.Genre},</br> Lenguaje: ${data.Language},</br> País: ${data.Country},</br> Rating: ${data.imdbRating}</span>
                </div>
              </div>
            </div>
            `;
        movieItem.innerHTML = content;
        // Codigo del acordeon recopilado de una tarea de la clase de Diseño Web
        // url de la tarea : https://github.com/mariaconejo/herramientas/tree/master/acordion
        // se elimino el for el codigo del acordion por ser inecesario dos for
        const acordeon = document.querySelectorAll('.acordeon');
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
      });
  }
}
// Funcion para el buscador
const search = document.getElementById('searchform');
search.addEventListener('submit', (event) => {
  event.preventDefault();
  // obtiene el valor del input donde el usuario digita para buscar
  const searchValue = search.elements[0].value;
  // fetch que se utiliza para el buscador usa el parametro s
  fetch(`http://www.omdbapi.com/?apikey=c6fbafc9&s=${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
      // llama a la funcion add movie y se le incluye el Array del buscador del api llamad Search
      addCartelera(data.Search);
    });
});

// funcion que cargas más peliculas
let count = 1;
const more = document.getElementById('load-more');
more.addEventListener('click', () => {
  count += 1;
  const searchValue = search.elements[0].value;
  // fetch que se utiliza para cargar mas peliculas se usa el parametro page
  fetch(`http://www.omdbapi.com/?apikey=c6fbafc9&s=${searchValue}/&page=${count}`)
    .then((response) => response.json())
    .then((data) => {
      addCartelera(data.Search);
    });
});
