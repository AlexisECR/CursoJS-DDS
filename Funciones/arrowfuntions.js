const calculo = (x,y) => x*y;

console.log(calculo(2,3));
console.log(calculo(82,32));

const mayorDeDosNumerosArrow = (x,y) => x>=y? x: y;

const functioflechaHolaMundo = () => {
    console.log("Hola mundo");
}

functioflechaHolaMundo();

function mayorDeDosNumeros(num1, num2) {
    return num1 >= num2? num1 : num2;
}

console.log(`El mayor de los numero 1000 y 456 es:  ${mayorDeDosNumeros(1000,456)}`);
console.log(`El mayor de los numero 1000 y 456 es:  ${mayorDeDosNumerosArrow(1000,456)}`);
