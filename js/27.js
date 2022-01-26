//POO


//object literal 
// const producto ={
//     nombre: "Juan",
//     precio: 200,
// }

function Producto(nombre,  precio, disponoble){
    this.nombre = nombre;
    this.precio = precio;
    this.disponoble = disponoble;

}

const producto2 = new Producto("MOnitor de 4' ", 900, false);
const producto3 = new Producto("Laptop", 500,  true);
const producto4 = new Producto("PC", 9100, false);
const producto5 = new Producto("Clelular", 1500,  true);

//// un prototype crea funiones que solo se utilizan en un objeto en especifico 

Producto.prototype.formatearProducto = function(){
    return "El producto: " + this.nombre +  " Precio: " + this.precio + " Disponible: " + this.disponoble;
}


console.log(producto2.formatearProducto());

// console.log(producto2);
// console.log(producto3);
// console.log(producto4);
// console.log(producto5);