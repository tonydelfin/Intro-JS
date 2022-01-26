// arreglos

const numeros = [1,2,3,4,5];


const meses = ["a" , "b" , "c" , "d"];



// // acceder alos valores delos arreglos

// numeros.forEach( function(num) {
//     console.log(num);
// })

// // conocer la extencion de un arreglo

// console.log(meses.length);

// agregar elemento al final del arreglo

// numeros[5] = 6;no es comun

numeros.push(6, 7); //agrega los valores al final del arreglo

numeros.unshift(-1,0); //agrega los valores al inicio del arreglo


// meses.pop(); //elimina el ultimo elemento del arreglo
// meses.shift();//elimina el primer elemento del arreglo

// meses.splice(2,1); //elimina el elmento que quieras 


// const nuevoArreglo = [...meses, "E"]; //agrega el valor al final del arreglo
const nuevoArreglo =["F", ...meses];//agrega el valor al inicio del arreglo

console.table(nuevoArreglo);


console.table(meses);
console.table(numeros); 