var automovil = {
    marca: "Ford",
    modelo: "Mustang",
    color: "Negro",
    anio: 2016,
}

for (let key in automovil) {
    console.log(`${key}: ${automovil[key]}`);
}

var llave =  Object.keys(automovil);
var valores = Object.values(automovil);
var entradas = Object.entries(automovil);

console.log(llave);
console.log(valores);
console.log(entradas);