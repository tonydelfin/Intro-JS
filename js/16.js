//delaracion de la funcion


function sumar() {
    console.log(10 *10);
}

sumar();

// expresion de la funcion

const sumar2 = function() {
    console.log(2 + 2);
}

sumar2();

//diferencias 
// hoisting javasript se ejecutra en dos vueltas
// registro de funciones 
// ejecuta los llamados  de las funciones 


//IIFE se mandan a llamar ellas mismas, proytege las variables que no se mezquel con otros archivos

( function() {
    console.log("esto es una funcion");
})();