let numeros = [5, -10, -2, 25, 7];

function sortAbsoluteNumbers(numbers) {
  const arr = [];

  for (let i of numbers) {
    const obs = Math.abs(i);
    arr.push(obs); //para agregar
  }
  return arr.sort((a, b) => a - b);
}
console.log(sortAbsoluteNumbers(numeros));
