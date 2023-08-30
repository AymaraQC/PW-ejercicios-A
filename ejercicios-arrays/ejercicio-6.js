words = [
  "hola",
  "tres",
  "uno",
  "Universidad",
  "de",
  "Buenos Aires",
  "pepito",
  "celular",
];

word = "pepito";

function buscaPalabras(words, word) {
  const array = [];
  const indice = words.indexOf(word);
  //console.log(indice);
  for (palabra of words) {
    if (indice < palabra.length) {
      array.push(palabra);
      //array = array + words[palabra]
    }
  }

  return array;
}
