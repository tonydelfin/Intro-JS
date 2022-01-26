//clases

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formateraProducto() {
        return "El producto: " + this.nombre +  " Precio: " + this.precio;
    }

    mostrarPrecio(){
        return "El  precio es: " + this.precio;
    }

    obtenerPrecio(){
        console.log(this.precio);
    }
}



const producto1 = new Producto("Monitor curvo", 900);
const producto2 = new Producto("Laptop", 800);

class Libro extends Producto {
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }
    formateraProducto() {
        return "El producto: " + this.nombre +  " Precio: " + this.precio +" y si ISBN es: " + this.isbn;
    }

    obtenerPrecio()
    {
        super.obtenerPrecio();
        console.log("Hay en existencia");
    }
}

////Super va al objeto padre y obtiene los valores  es como un contructor   

const libro = new Libro("Harry Potter", 200, "01923123");
console.log(libro.formateraProducto());

console.log(libro.obtenerPrecio());


console.log(producto2.formateraProducto());
