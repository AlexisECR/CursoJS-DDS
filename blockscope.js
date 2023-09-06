var dato = 0;

uno();
dos();
tres();
console.log(dato);

let esteEsUnBuenNombreDeVariable = 1000;

function uno() {
    dato = 1000;
    var otrodato = 5000;
    console.log(dato);
    console.log(otrodato);
}

function dos() {
    dato = 2000;
    console.log(dato);
}

function tres() {  
    if (true) {
        let tercedato = 10000;
        console.log(tercedato);
    }
    console.log(tercedato);
}