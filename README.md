# Plantilla de proyectos para el curso de Javascript 2 en el [CETAV](http://parquelalibertad.org/cetav/)

## Requerimientos

**Api de peliculas**

Se desarrollo un proyecto con ajax y javascript con el objetivo de realizar una conexión a OMDB API (una api publica con datos de películas) por medio de fetch para jalar la información, que consistía en el Titulo, Año, Actores, Trama, Metascore, Duración y el poster de la pelicula y luego presentar dicha información dentro de un acordeón, adicionalmente tiene un buscador que devuelve todas las películas que coincide con la palabra digitada.

**Bloque 1**
**Funcion principal**

Funcion addCartelera

Conseguí el api key en el sitio web y me envió por correo este id: c6fbafc9

La función addCartelera crea una lista que contiene 10 acordones (como mínimo) llama al ul mediante el document.elementbyId

el for principal recorre el array de movies.lenght, adentro del for se encuentra el fetch(`http://www.omdbapi.com/?apikey=c6fbafc9&i=${movies[i].imdbID}`) con el parametro i= que me permite por medio del id de las peliculas, (tambien funciona con title t=) acceder a todos los datos que contiene las pelicula. La informacion se coloca dentro una variable llamada content que contiene el valor del html del acordion que se encuentra en el javascript gracias `` que permite hacer un string que luego puede visiavisualizarse gracias el movieItem.innerHTML = content Debajo de eso se encuentra el codigo del acordion que fue reutilizado de una tarea que se realizo en la clase de diseño web adjunto repositorio con la tarea mencionada: https://github.com/mariaconejo/herramientas/tree/master/acordion al codigo se le retiro el for que traia ya que causaba conflictos con el for principal de la funcion addCartelera

**Bloque 2**
**Buscador**

 

Se creo un formulario en el index.html para utilizar de forma correcta el input y el button para usarlo como un buscador, luego en el javascript se declaro una variable llamada search para llamar desde el html al id del formulario con document.getElementById('searchform'); y después se declaro una función de flecha de submit utilizada para hacer le buscador, la función contiene un  event.preventDefault(); para eliminar la función default del form ya que lo queremos usar como un buscador, luego se declara una variable
 const searchValue = search.elements[0].value; que contiene el primer elemento interactuable que en este caso es el input donde se va digitar el texto para la búsqueda y se obtiene su valor con .value 
luego se realiza el segundo fecth del proyecto que contiene el parámetros= en el link fetch(`http://www.omdbapi.com/?apikey=c6fbafc9&s=${searchValue}`) para buscar, en el .then se llama la funcion addCartelera(data.Search) y se agrega data.Search, el Search es el nombre del array que contiene objetos con el nombre de la película.

 **Bloque 3**
 **Mejoras**

 Se realizaron dos mejoras, la primera es el botón cargar mas que obtiene mas películas relacionadas con el texto digitado en el buscador,
 movieList.innerHTML = ''; que borra la lista actual cuando se quiere buscar algo nuevo, window.scroll(0, 0); se utiliza en conjunto con el botón cargar mas ya que sube la ventana automáticamente a la hora de cargar más películas,
se declara un contador que comienza en 1 porque se encuentra en la primera página y luego se declara un función de flecha con evento click, que obtiene el valor del input

La segunda mejora es sobre mostrar información adicional en un tooltip que se encuentra dentro del acordeón , se coloca el html dentro del html del acordeón y se llama la demás información con data.Genre data.Languages data.Country data.imdbRating




