const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumarPares(numeros) {
  let SumPares = 0;

  for (let i of numeros) {
    if (i % 2 == 0) {
      console.log(i, "i");
      SumPares = i + SumPares;
    }
  }
  return SumPares;
}
console.log(sumarPares(numeros));
