// SOLUTION

function pickingNumbers(a) {
  let acumulador = [];

  let pair = [];
  let i = 0;
  while (a.length !== 0) {
    const minimo = Math.min(...a);
    const filtro = a.findIndex((number) => number === minimo);
    // console.log(minimo);
    const filtroMin = a.filter((number) => number === minimo);
    acumulador.push(filtroMin);
    a = a.filter((number) => number !== minimo);
    i++;
  }

  for (let i = 0; i < acumulador.length; i++) {
    const suma = acumulador[i][0] + 1;
    const filtro = acumulador.filter((array) => array.includes(suma));

    if (filtro.length > 0) {
      const concat = [...acumulador[i], ...filtro];
      pair.push(concat);
    }
  }

  let resultado = [];
  for (let array of pair) {
    const flat = array.flat();
    if (flat.length >= resultado.length) {
      resultado = flat;
    }
  }

  for (let iguales of acumulador) {
    if (iguales.length >= resultado.length) {
      resultado = iguales;
    }
  }

  return resultado.length;
}


/*
TEST #1
input:
4 6 5 3 3 1
output:
3

TEST #2
input:
1 2 2 3 1 2
output:
5
*/