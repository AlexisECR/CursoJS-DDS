class Flor {
    constructor(name) {
        this.name = name;
    }   

    fotosintesis (){
        console.log('Realizando fotosintesis...');
    }
}

class Girasol extends Flor { //extends es el conecto de herencia. "Giralos en"
    seguirAlSol(){
        console.log('Siguiendo al sol...');
    }
}

class Tulipan extends Flor { //extends
    fotosintesis() { 
        super.fotosintesis();
        console.log('Realizando fotosintesis en el tulipan...');
    }
}

const flor = new Flor('Flor');
console.log(`El nombre de la flor es: ${flor.name}`);
flor.fotosintesis();

const girasol = new Girasol("Girasol");
console.log(`El nombre de la girasol es: ${girasol.name}`);
girasol.fotosintesis(); 

const tulipan = new Tulipan("Tulipan");
console.log(`El nombre de la flor es: ${tulipan.name}`);
tulipan.fotosintesis();