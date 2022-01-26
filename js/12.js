// "use strict"
//compila de una manera eticta el codigo


const producto = {
    nombreProducto : "Monitor de 20 pugadas", Precio: 300, disponible: true,
}

// congelar el objeto para no agregarle mas valores

Object.freeze(producto);  //no te permite modificar ni eliminar las propiedades del objeto
Object.seal(producto); //no te permite eliminar pero si modifiar las porpiedades del objeto



producto.image=  "imagen.jpg";

console.log(Object.isFrozen(producto)); //para ver si un objeto esta congelado



console.log(producto);