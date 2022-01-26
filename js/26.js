// this si se usa en una arrow function hace referecnia a windows

const reservacion = {
    nombre: "Jorge",
    apellido: "Delfin",
    total: 200,
    pagado: false,

    informacion: function(){
        console.log("El cliente: " + this.nombre +" Reservo y tiene que pagar una cantidad total: " + this.total);
    }
}


reservacion.informacion();


const reservacion2 = {
    nombre: "Antonio",
    apellido: "Delfin",
    total: 200,
    pagado: false,

    informacion:() => {
        console.log("El cliente: " + this.nombre ); ////// aqui this hace referencia a windows
    }
}


reservacion2.informacion();


