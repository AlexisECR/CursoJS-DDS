const fs = require('fs'); // <---- Importar el modulo fs

const calculaPromedio = (arr) => arr.reduce((sumaNumeros, nuevoNumero) => sumaNumeros + Number(nuevoNumero), 0)/arr.length;

const numeros_string = fs.readFileSync('C:\\Users\\cachavez\\CursoJS\\funciones\\numeros.txt', 'utf8'); // <---- Recupera el contenido del archivo en un string
const numeros_array = numeros_string.split('\r\n'); 

let todos_los_numeros = [];
numeros_array.forEach((linea_numeros) => {
    numeros_linea_array = linea_numeros.split(",");

    console.log(numeros_linea_array);
    let promedio = calculaPromedio(numeros_linea_array);

    console.log(`El promedio  ${promedio}`);
    console.log(`El numero mayor es ${Math.max(...numeros_linea_array)}`);
    console.log(`El numero menor es ${Math.min(...numeros_linea_array)}`);

    todos_los_numeros.push(...numeros_linea_array);
});

console.log(todos_los_numeros);

let promedio = calculaPromedio(todos_los_numeros);
console.log(`El promedio  ${promedio}`);
console.log(`El numero mayor es ${Math.max(...todos_los_numeros)}`);
console.log(`El numero menor es ${Math.min(...todos_los_numeros)}`);

