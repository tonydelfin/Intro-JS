const producto = {
    nombreProducto : "Monitor de 20 pugadas", 
    Precio: 300, 
    disponible: true,
}

// forma anterior

// const precioProducto =  producto.Precio;
// const nombreProducto  = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

//Destructuring crea la variable y le asigana el valor 

const {Precio, nombreProducto} = producto;
// const {nombreProducto} = producto;

console.log(Precio);
console.log(nombreProducto);


