const tablaDeMultiplicar = [];
const valorMaximo = 10;

for (let i = 0; i <= valorMaximo; i++) {
  const fila = [];
  for (let j = 1; j <= valorMaximo; j++) {
    fila.push(i * j);
  }
  tablaDeMultiplicar.push(fila);
}

console.table(tablaDeMultiplicar);

/*for (let i = 0; i < tablaDeMultiplicar.length; i++) {
  console.log(tablaDeMultiplicar[i].join('\t'));
}**/