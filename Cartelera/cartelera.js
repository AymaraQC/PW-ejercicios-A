//Armar Arrays Objetos
const item = [
  {
    id: 1,
    title: "Avengers Endgame",
    year: "2012",
    img: "https://www.ecartelera.com/carteles/8900/8902/041_m.jpg",
  },
  {
    id: 2,
    title: "Harry Potter",
    year: "2015",
    img: "https://es.web.img2.acsta.net/medias/nmedia/18/84/93/87/19765356.jpg",
  },
  {
    id: 3,
    title: " REC [•] ",
    year: "2007",
    img: "https://m.media-amazon.com/images/M/MV5BZTJmNTZlZWUtZTQ2Yi00YTFjLWFiNzctYzFlNmZmZGMzYTlmXkEyXkFqcGdeQXVyMjQ2MTk1OTE@._V1_.jpg",
  },
  {
    id: 4,
    title: "Shrek",
    year: "2001",
    img: "https://www.ecartelera.com/carteles/5000/5060/001_m.jpg",
  },
  {
    id: 5,
    title: "Trainspotting",
    year: "20",
    img: "https://www.themoviedb.org/t/p/original/bhY62Dw8iW54DIhxPQerbuB9DOP.jpg",
  },
  {
    id: 6,
    title: "Spider-man HomeComing",
    year: "2",
    img: "https://m.media-amazon.com/images/M/MV5BOGQ5YTM3YzctOTVmMC00OGIyLWFkZTYtMWYwOWZhMjA2MWMwXkEyXkFqcGdeQXVyMjUyMTE5MA@@._V1_.jpg",
  },
  {
    id: 7,
    title: "The Batman",
    year: "2021",
    img: "https://www.diariovivo.com/wp-content/uploads/2020/09/poster-batman-2021-2064381.jpg",
  },
  {
    id: 8,
    title: "Taxi Driver",
    year: "1976",
    img: "https://m.media-amazon.com/images/I/512QFrcnATL._AC_UF894,1000_QL80_.jpg",
  },
];
//declarar la funcion y llamar ul
function onload() {
  const list = document.getElementById("lista");

  //iterar sobre el array
  item.map((item) => {
    const listElement = document.createElement("li");

    //Crear etiquetas/elemntos
    const title = document.createElement("h3");
    const year = document.createElement("label");
    const img = document.createElement("img");

    // Asignarles valor
    title.textContent = item.title;
    year.textContent = item.year;
    img.src = item.img;

    //Appendar los elementos a los padres correspondientes
    listElement.appendChild(title);
    listElement.appendChild(year);
    listElement.appendChild(img);

    list.appendChild(listElement);
  });
}
