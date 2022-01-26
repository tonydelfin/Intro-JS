// forEach y mep son exculisvos de arreglos 

const carrito =[
    { nombre: "play", precio: 200},
    { nombre: "play1", precio: 201},
    { nombre: "play2", precio: 202},
    { nombre: "play3", precio: 203},
    { nombre: "play4", precio: 204},
    { nombre: "play5", precio: 205},
    { nombre: "play6", precio: 206},

];

/////////// cuando se quiere mostrar los datos del arreglo es mejor hacerlo con un forEach


//forEach 
carrito.forEach( (producto) => console.log(producto.nombre));

//map
const arreglomap = carrito.map( producto => producto.nombre + " "+ producto.precio);

console.log(arreglomap);

///////// Si se quiere crear un nuevo arreglo se utiliza el map

