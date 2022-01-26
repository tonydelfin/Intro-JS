//Promises es promesa refleja un valor que podra esta disponible ahora en un futuro o nunca 

const usuarioAutenticado =  new Promise( (resolve , reject ) => {
    const auth = true;

    if(auth){
        resolve("Usuario autentificado"); //el promise se cumple
    }
    else{
        reject("Usario no autentificado"); //el promise no se cumple 
    }

    
});

usuarioAutenticado

.then( (mensaje) => console.log(mensaje)) // acceses al primise para imprimir 

.catch( (mensajeError) => console.log(mensajeError));

//3 estados del proimise 

//pending: no se ha cumplido pero tampoco se ha rechazado
// fulfilled: se cumplio el promise
// rejected: se ha rechazado o no se pudo cumplir

