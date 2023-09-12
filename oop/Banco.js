class CuentaBancaria {
    constructor(titular,saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    imprimirDetalleCuenta(){
        console.log(`Titular: ${this.titular} | Saldo: ${this.saldo}`);
    }
}

class TarjetaBancaria extends CuentaBancaria {
    constructor(titular,saldo,limiteDeCredito) {
        super(titular,saldo);
        this.limiteDeCredito = limiteDeCredito;
    }

    imprimirDetalleTarjeta(){
        super.imprimirDetalleCuenta();
        console.log(`Limite de Credito: ${this.limiteDeCredito}`);
    }
}

class Pagare extends CuentaBancaria {
    constructor(titular,saldo,tasaInversion) {
        super(titular,saldo);
        this.tasaInversion = tasaInversion;
    }

    imprimirDetallePagare(){
        super.imprimirDetalleCuenta();
        console.log(`Tasa de Inversion: ${this.tasaInversion}`);
    }

    calcularRendimiento(){
        return ((this.saldo * this.tasaInversion * 1 )/100);
    }
    
}

const pagare = new Pagare('Alexis', 1000, 13.5);
const tarjeta = new TarjetaBancaria('Manuel', 500, 45000); 

pagare.imprimirDetallePagare();
tarjeta.imprimirDetalleTarjeta();


/*
const cuenta = new CuentaBancaria("Alexis Capistran", 5000);
cuenta.imprimirDetalleCuenta();

const tarjeta = new TarjetaBancaria("Alexis Capistran", 5000, 10000);
tarjeta.imprimirDetalleTarjeta();
tarjeta.comprar(5000000);

const pagare = new Pagare("Alexis Capistran", 5000, 0.05);
pagare.imprimirDetallePagare();
console.log(`El rendimiento es de: ${pagare.calcularRendimiento()}\n`);
*/