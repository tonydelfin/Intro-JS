// async / await

function descargarCliente(){
    return new Promise( resolve => {
    console.log("Descargando los clientes... espere..")

    setTimeout( () =>{
        resolve("Clients descargados");
    },5000);
        
    });
}

function descargarPedidos(){
    return new Promise( resolve => {
    console.log("Descargando los pedidos... espere..")

    setTimeout( () =>{
        resolve("Pedidos descargados");
    },3000);
        
    });
}



async function app()
{
    try {
        //No es recomendable espera a que se ejecute uno primero.Se tienen que ejecutar los dos al mismo tiempo
        // const clientes = await descargarCliente();
        // const pedidos = await descargarPedidos();
        // console.log(clientes);
        // console.log(pedidos);


        /////////////////////////// con primise.all optimiza un async await 
        /////////////////////////7/ hace que los dos s ejecuen al mismo tiempo usando arreglo 

        const resultado = await Promise.all([ descargarCliente(),  descargarPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();

console.log("Sigue ejecutandose");




//ejecuta el metodo por intervalos de tiempo

// setInterval( function(){
//     console.log("Set time out");
// },5000);
