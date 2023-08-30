const palabras = ["habia", "una", "vez"];

function terminanEnA(words) {
  const finalizaConA = words.every((palabra) => palabra.endsWith("a"));
  console.log(finalizaConA);
}

terminanEnA(palabras);
