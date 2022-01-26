// arrow function

const sumar2 = (n1, n2) => console.log(n1 + n2);

sumar2(4,4);

const aprendiendo = (tecnoligia )=> console.log("Aprendindo " + tecnoligia)

aprendiendo("JavaScript");



//array metodos

const meses = ["a" , "b" , "c" , "d"];

const carrito =[
    { nombre: "play", precio: 200},
    { nombre: "play1", precio: 201},
    { nombre: "play2", precio: 202},
    { nombre: "play3", precio: 203},
    { nombre: "play4", precio: 204},
    { nombre: "play5", precio: 205},
    { nombre: "play6", precio: 206},

];

console.table(meses);


//buscar en el arreglo
//forEach
meses.forEach(mes =>{
    if(mes == "a"){
        console.log("si esta");
    }

});

//includes regresa un true o false

const relustado =  meses.includes("b");
console.log(relustado);

// Some para buscar valores en un arreglo de objetos

let resultado1 =  carrito.some(producto => producto.nombre == "play");
console.log(resultado1);

// Reduce suma los numeros de los elementos de un arreglo

suma = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(suma);

// filter filtrar los elementos del arreglo

filtro =  carrito.filter(producto => producto.precio == 200);
console.log(filtro);