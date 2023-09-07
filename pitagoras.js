let ca = prompt("Cateto 1: ");
let co = prompt("Cateto 2: ");
let h = prompt("Hipotenusa: ");

Number(ca);
Number(co);
Number(h);

let suma = (ca ** 2)+ (co ** 2);

if (suma == (h ** 2) ){
    console.log("Es un triangulo recto");
}
else{
    console.log("No es un triangulo recto");
}


/*
if (isNaN(n1)||isNaN(n2)||isNaN(n3)) 
    { console.log("Dato no permitidos"); }
else if (n1 == n2 && n2 == n3) 
    { console.log("Es un triangulo equilatero"); }

else if (n1 == n2 && n2 != n3 || n1 == n3 &&  n1 != n2 || n2 == n3 && n2 != n1)
    { console.log("Es un triangulo isosceles"); }

else {console.log("Es un triangulo escaleno");}
*/