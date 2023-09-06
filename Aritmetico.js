let n1 = prompt("Dame un numero: ");
let n2 = prompt("Dame otro numero: ");

Number(n1);
Number(n2);

if (isNaN(n1) || isNaN(n2)){
    console.log("Un dato no es un numero");
}
else {
    let suma = n1 + n2;
    console.log(suma);
    
    let resta = n1 - n2;
    console.log(resta);
    
    let multiplicacion = n1 * n2;
    console.log(multiplicacion);
    
    let division = n1 / n2;
    console.log(division);
}



