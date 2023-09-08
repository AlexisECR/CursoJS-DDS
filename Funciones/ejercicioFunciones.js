const fs = require('fs');

function leerArchivoYCalcularEstadisticas(nombreArchivo) {
  try {
    const contenido = fs.readFileSync(nombreArchivo, 'utf-8').split('\n');
    
    let sumatoria = 0;
    let minimo = Number.MAX_VALUE;
    let maximo = Number.MIN_VALUE;
  
    contenido.forEach(linea => {
      const numeros = linea.split(',').map(Number);
      const sumaLinea = numeros.reduce((a, b) => a + b, 0);
      sumatoria += sumaLinea;
      minimo = Math.min(minimo, ...numeros);
      maximo = Math.max(maximo, ...numeros);
    });
  
    const promedio = sumatoria / (contenido.length * 10);
  
    console.log(`Promedio de todos los números: ${promedio}`);
    console.log(`Número más pequeño: ${minimo}`);
    console.log(`Número más grande: ${maximo}`);
  } catch (error) {
    console.error('Error al leer el archivo:', error);
  }
}

leerArchivoYCalcularEstadisticas('C:\\Users\\DDS\\Desktop\\CursoJS\\Funciones\\numeros.txt');