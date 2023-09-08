let prompt = require('prompt-sync')();

let n1 = parseFloat(prompt("Por favor, ingresa un numero: "));
let n2 = parseFloat(prompt("Por favor, ingresa otro numero: "));
let signo = prompt("Por favor, ingresar el signo de la operacion: ");

let realizaUnaOperacion = function (n1, n2, signo) {
    let resultado;
    switch (signo) {
        case "+":
            resultado = n1 + n2;
            break;
        case "-":
            resultado = n1 - n2;
            break;
        case "*":
            resultado = n1 * n2;
            break;
        case "/":
            resultado = n1 / n2;
            break;
    }
   return resultado;
}

console.log(realizaUnaOperacion(n1, n2,signo));


const val1 = 10;
const val2 = 20;
let operacion = "+";


