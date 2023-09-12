const prompt = require('prompt-sync')();

class Circulo {
    #radio=0;

    constructor(radio){
        this.#radio = radio;
    }

    get getRadio(){
        return this.#radio;
    }

    set setRadio(radio){
        this.#radio = radio;
    }

    calcularArea(){
        return (Math.PI * this.#radio**2).toFixed(2);
    }
}

const radio = prompt('Digite el radio: ');
const circulo = new Circulo(radio);

//circulo.setRadio = radio;
console.log(circulo.calcularArea()); 