const fs = require('fs');

  const data = fs.readFileSync("C:\\Users\\DDS\\Desktop\\CursoJS\\Loops\\registros.txt", 'utf8');

  const lines = data.split('\r\n');
  const objectsArray = [];
  
  for (const line of lines) {
    const arreglo_atributos = line.split(',');
    const obj = {
      id: arreglo_atributos[0],
      nombre: arreglo_atributos[1],
      ciudad: arreglo_atributos[2],
      rol: arreglo_atributos[3]
    };
    objectsArray.push(obj);
  }
  
const jsonArray = JSON.stringify(objectsArray, null, 2);
console.log(jsonArray);
