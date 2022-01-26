const producto = {
    nombreProducto : "Monitor de 20 pugadas", Precio: 300, disponible: true,
}

const medidas = {
    peso: "1KG",
    medidas : "1m",
}

const nuevoProducto = {...producto, ...medidas};

console.log(nuevoProducto);