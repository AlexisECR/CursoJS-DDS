const prompt = require('prompt-sync')();
const palabrasDescriptivas = [
    "inteligente",
    "divertido",
    "amable",
    "creativo",
    "encantador",
    "extrovertido",
    "talentoso",
  ];
  
  function describirNombre() {
    const nombre = prompt("Por favor, ingresa un nombre:");
  
    const indiceAleatorio = Math.floor(Math.random() * palabrasDescriptivas.length);
    const palabraDescriptivaAleatoria = palabrasDescriptivas[indiceAleatorio];
  
    console.log(`El nombre "${nombre}" es ${palabraDescriptivaAleatoria}.`);
  }
  
  describirNombre();
  