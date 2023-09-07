let numeral = 10;

while (numeral <= 20){
    console.log(numeral);
    numeral++;
}

do {    
    console.log(numeral);
    numeral++;
}   while (numeral<=30);

let nombres = ['Juan', 'Pedro', 'Maria']; //Array de tipo de string con 3 nombres

let indice = 0;

while (indice < nombres.length){
    console.log(nombres[indice]);
    indice++;
}

do {
    console.log(nombres[indice++]);
} while (indice < nombres.length);