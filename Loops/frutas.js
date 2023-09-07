const prompt = require('prompt-sync')();
let cantidad = 0;
let frutas = [];

while (cantidad < 3){
    let fruta =  prompt("Escribe una fruta:");
    if(fruta !== null){
        frutas.push(fruta);
    }    
    cantidad++;
}

console.log(frutas);