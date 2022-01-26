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
meses.forEach(function(mes){
    if(mes == "a"){
        console.log("si esta");
    }

});

//includes regresa un true o false

const relustado =  meses.includes("b");
console.log(relustado);

// Some para buscar valores en un arreglo de objetos

let resultado1 =  carrito.some(function(producto){
    return producto.nombre == "play";
});
console.log(resultado1);

// Reduce suma los numeros de los elementos de un arreglo

suma = carrito.reduce( function(total, producto){
    return total + producto.precio
}, 0);
console.log(suma);

// filter filtrar los elementos del arreglo

filtro =  carrito.filter(function(producto){
    return producto.precio == 200;
});
console.log(filtro);